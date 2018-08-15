const chalk = require('chalk');
const DiceExpression = require('dice-expression-evaluator');

class EventHandler {

    /**
     *
     * @param tree
     * @param io
     */
    constructor(tree, io) {
        this.tree = tree;
        this.io = io;

        return this;
    }

    /**
     *
     * @param socket
     */
    connect(socket) {
        console.log(chalk.green('A player connected.'));

        socket.emit('connect', socket.id);

        socket.on('disconnect', this.disconnect.bind(this, socket));
        socket.on('join', this.join.bind(this, socket));
        socket.on('dm', this.dm.bind(this, socket));
        socket.on('msg', this.message.bind(this, socket));
        socket.on('fow', this.FoW.bind(this, socket));
        socket.on('ic', this.icon.bind(this, socket));
        socket.on('ilr', this.loadiconlist.bind(this, socket));
        socket.on('sf', this.spellEffect.bind(this, socket));
        socket.on('cl', this.chColor.bind(this, socket));
        socket.on('dl', this.download.bind(this, socket));
        socket.on('ul', this.upload.bind(this, socket));
        socket.on('nm', this.newmap.bind(this, socket));
        socket.on('rm', this.resizemap.bind(this, socket));
        socket.on('sm', this.savemap.bind(this, socket));
        socket.on('lm', this.loadmaplist.bind(this, socket));
        socket.on('clm', this.chooseloadmap.bind(this, socket));
    }

    /**
     *
     * @param socket
     * @returns {boolean}
     */
    isDM(socket) {
        return this.resolveSocket(socket).id === this.tree.DM
    }

    /**
     *
     * @param id
     * @returns {*}
     */
    getSocket(id) {
        return this.io.sockets.connected[id]
    }

    /**
     * Socket or socket ID
     * @param id
     * @returns {Object}
     */
    resolveSocket(id) {
        return (typeof id === 'object' ? id : this.getSocket(id))
    }

    /**
     *
     * @param socket
     */
    disconnect(socket) {
        if (socket.id === this.tree.DM) {
            this.tree.DM = null;
            console.log(chalk.blue('The DM disconnected.'));
        } else {
            console.log(chalk.green('A player disconnected.'));
        }
    }

    /**
     *
     * @param socket
     * @param name
     */
    join(socket, name) {
        socket = this.resolveSocket(socket);
        socket.username = name.substring(0, 30);
        socket.join('game');
        this.sendMapTo(socket);
    }

    /**
     * Dungeon Master login, sets the game's DM if successful
     * Emits 'dmy' on success and 'dmn' on failure with no data
     * @param socket
     * @param name
     * @param password
     */
    dm(socket, name, password) {
        socket = this.resolveSocket(socket);

        if (password === this.tree.password) {
            console.log(chalk.blue('The DM logged in.'));
        } else {
            socket.emit('dmn');
            console.log(chalk.yellow(
                'User ' + socket.id + ' botched the DM login. Use `/kick ' + socket.id
                + '` to kick them in the chat if they persist, or use `/mute yellow` '
                + 'to stop seeing these messages.'
            ));

            return;
        }

        //If they logged in successfully execution will reach this point
        this.join(socket, name);
        this.tree.DM = socket.id;
        socket.emit('dmy');
    }

    /**
     * Send a message to chat or trigger a command
     * @param socket
     * @param msg
     */
    message(socket, msg) {
        if (msg.startsWith('/')) {
            this.handleCommand(socket, msg);
        } else {
            this.io.to('game').emit('msg', {
                name: socket.username,
                msg
            });
        }

    }

    /**
     * Fog of War toggle, dm only
     * @param socket
     * @param i
     * @constructor
     */
    FoW(socket, i) {
        if (!this.isDM(socket))
            return;

        this.tree.map.toggleFoW(i);
    }

    /**
     *
     * @param socket
     * @param i
     */
    spellEffect(socket, i) {
        if (!this.isDM(socket))
            return;

        this.tree.map.toggleSpellEffect(i);
    }

    /**
     * Icon toggle, dm only
     * @param socket
     * @param i
     * @param icon
     */
    icon(socket, i, icon) {
        if (!this.isDM(socket))
            return;

        this.tree.map.changeIcon(i, icon);
    }

    /**
     *
     * @param socket
     */
    loadiconlist(socket) {
        socket = this.resolveSocket(socket);
        if (!this.isDM(socket))
            return;

        this.tree.map.sendIconListTo(socket);
    }

    /**
     * Change tile colour
     * @param socket
     * @param i
     * @param color
     */
    chColor(socket, i, color) {
        if (!this.isDM(socket))
            return;

        this.tree.map.changeColor(i, color);
    }

    /**
     * DM wants to export the map as JSON
     * @param socket
     */
    download(socket) {
        socket = this.resolveSocket(socket);
        if (!this.isDM(socket))
            return;

        socket.emit('ex', this.tree.map.initMapData());
    }

    /**
     * DM wants to import a JSON map (turned into an object by socket.io)
     * If the JSON is improperly formatted the server *will* crash and I don't care
     * @param socket
     * @param map
     */
    upload(socket, map) {
        this.tree.map.replaceWith(map);
    }

    /**
     *
     * @param socket
     * @param w
     * @param h
     */
    newmap(socket, w, h) {
        socket = this.resolveSocket(socket);
        if (!this.isDM(socket))
            return;

        this.tree.map.newMap(w, h);
    }

    /**
     * lw = width to add to top-left
     * rh = height to add to bottom-right
     * @param socket
     * @param lw
     * @param lh
     * @param rw
     * @param rh
     */
    resizemap(socket, lw, lh, rw, rh) {
        socket = this.resolveSocket(socket);
        if (!this.isDM(socket))
            return;

        this.tree.map.resize(lw, lh, rw, rh);
    }

    /**
     *
     * @param socket
     * @param name
     */
    savemap(socket, name) {
        socket = this.resolveSocket(socket);
        if (!this.isDM(socket))
            return;

        this.tree.map.saveMapAs(name);
    }

    /**
     *
     * @param socket
     */
    loadmaplist(socket) {
        socket = this.resolveSocket(socket);
        if (!this.isDM(socket))
            return;

        this.tree.map.sendMapListTo(socket);
    }

    /**
     *
     * @param socket
     * @param name
     */
    chooseloadmap(socket, name) {
        socket = this.resolveSocket(socket);
        if (!this.isDM(socket))
            return;

        this.tree.map.loadMap(name);
    }

    /**
     * Kick a player in the butt
     * @param socket
     */
    kick(socket) {
        //Don't steal this DM check, it checks if the player isn't a DM
        //I've only done that four times now
        socket = this.resolveSocket(socket);
        if (this.isDM(socket))
            return;

        socket.leave('room');
        socket.emit('kick');
    }

    /**
     *
     * @param socket
     */
    sendMapTo(socket) {
        socket = this.resolveSocket(socket);
        socket.emit('init', this.tree.map.initMapData());
    }

    /**
     *
     * @param socket
     * @param msg
     */
    handleCommand(socket, msg) {
        let command = msg.substring(1);

        //Make the user see their own command
        socket.emit('msg', {
            name: socket.username,
            msg
        });

        if (command.startsWith('help')) {
            socket.emit('msg', {
                name: '[Server <i>-> You</i>]',
                s: true,
                msg:
                    `
<u>Command Help</u>
<ul>
	<li>/help - Displays this</li>
	<li>/roll 4d6 - Roll a dice expression, use a /roll X or /roll dX for a dX, /roll YdX for Y dX's added together, supports +, - (eg 2d6 + d12 - 5) and % (100) so d% is d100.</li>
</ul>
<u>DM Only Commands</u>
<ul>
	<li>/kick USERNAME or /kick ID (not implemented yet)</li>
</ul>
`
            });
        } else if (command.startsWith('roll')) {
            let exp = command.substring(command.indexOf(' '));
            try {
                let result;
                if (!isNaN(exp)) {
                    result = Math.floor(Math.random() * parseInt(exp)) + 1;
                } else {
                    result = DiceExpression(exp)();
                }
                socket.emit('msg', {
                    name: '[Server <i>-> You</i>]',
                    s: true,
                    msg: 'You rolled ' + result
                });
            } catch (e) {
                socket.emit('msg', {
                    name: '[Server <i>-> You</i>]',
                    s: true,
                    msg: 'The dice could not be rolled.'
                });
            }
        } else {
            socket.emit('msg', {
                name: '[Server <i>-> You</i>]',
                s: true,
                msg: 'Unknown command.'
            });
        }
    }

}
