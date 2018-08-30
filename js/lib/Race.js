class Race {

    /**
     *
     * @param {String} subType
     * @returns {Human|Dwarf|Elf|Gnome|HalfElf|HalfOrc|Halfling}
     */
    constructor(subType = '') {
        this.abilityAdj = {
            'str': 0,
            'dex': 0,
            'con': 0,
            'int': 0,
            'wis': 0,
            'cha': 0
        };

        this.bonuses = {
            'attack': {},
            'dc': {},
            'dodge': {},
            'feat': 0,
            'immunities': {},
            'saving': {},
            'size': {},
            'skill': {},
            'skillPoints': {
                0: [0, 0],
                1: [0, 0]
            }
        };

        this.carry = 1;
        this.darkVision = false;
        this.description = '';
        this.favoredClass = 'Any';
        this.levelAdjustment = 0;
        this.lowLightVision = false;
        this.size = 'Medium';
        this.speed = 30;
        this.subType = subType;
    }

    getRacialBonus(bonus) {
        return this.bonuses[bonus];
    }

    get attackBonuses() {
        return this.bonuses.attack;
    }

    get dcBonuses() {
        return this.bonuses.dc;
    }

    get dodgeBonuses() {
        return this.bonuses.dodge;
    }

    get featBonuses() {
        return this.bonuses.feat;
    }

    get immunities() {
        return this.bonuses.immunities;
    }

    get savingBonuses() {
        return this.bonuses.saving;
    }

    get sizeBonuses() {
        return this.bonuses.size;
    }

    get skillBonuses() {
        return this.bonuses.skill;
    }

    get skillPointBonuses() {
        return this.bonuses.skillPoints;
    }
}