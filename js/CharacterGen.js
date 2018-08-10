
const whichModList = ["int", "dex", "cha", "str", "con", "int", "int", "cha", "int", "cha", "dex", "int", "cha", "cha", "wis", "dex", "cha", "str", "int", "wis", "dex", "dex", "cha", "wis", "dex", "int", "wis", "dex", "int", "wis", "wis", "str", "dex", "cha", "dex", "none"];  // 	,		"none",		"none"
const skillsList = ["appr", "bala", "bluf", "clim", "conc", "craf", "deci", "dipl", "disa", "disg", "esca", "forg", "gath", "hand", "heal", "hide", "inti", "jump", "know", "list", "move", "open", "perf", "prof", "ride", "sear", "sens", "slei", "spel", "spot", "surv", "swim", "tumb", "usem", "user", "bla1"]; // 	, 	"bla2", 	"bla3"

/**
 *
 * @property {number} blankCounter
 * @property {number} blankCraftCounter
 * @property {number} blankKnowledgeCounter
 * @property {number} blankPerformCounter
 * @property {number} blankProfessionCounter
 * @property {number} customItemNo
 * @property {Core35} generator
 * @property {Character} character
 * @property {Feats} feats
 * @property {Inventory} inventory
 * @property {Skills} skills
 * @property {Spells} spells
 */
class CharacterGen {

    /**
     *
     * @returns {CharacterGen}
     */
    constructor() {
        this.blankCounter = 0;
        this.blankCraftCounter = 0;
        this.blankKnowledgeCounter = 0;
        this.blankPerformCounter = 0;
        this.blankProfessionCounter = 0;
        this.customItemNo = 0;

        this.character = new Character(this);
        this.inventory = new Inventory(this);
        this.feats = new Feats(this);
        this.rules = new Core35(this);
        this.skills = new Skills(this);
        this.spells = new Spells(this);

        return this;
    }

    /**
     *
     * @param userClass
     */
    classSelect(userClass) {
        this.character.selClass = userClass.toUpperCase();
        if (this.character.selClass !== 0) {
            document.getElementById("show-class").innerHTML = "Current Class: " + this.character.selClass; // turn on display of Choice.
            document.getElementById("show-class-2").innerHTML = this.character.selClass;
            document.getElementById("dice-sys").style.display = "block";
        }

    }

    /**
     *
     * @param userRace
     */
    raceSelect(userRace) {
        this.character.selRace = userRace.toUpperCase();
        if (this.character.selRace !== 0) {
            document.getElementById("show-race").innerHTML = "Current Race: " + this.character.selRace;
            document.getElementById("show-race-2").innerHTML = this.character.selRace;
            document.getElementById("class-source").style.display = "block";
        }

    }

    /**
     *
     * @param {String} value
     */
    specialCases(value) {
        switch (value) {
            case "none":
                this.character.grapple = false;
                this.character.fighterBonusFeat = false;
                this.character.stunningFist = false;
                this.character.track = false;
                break;
            case "monk-option":
                document.getElementById("class-monk").style.display = "block";
                break;
            case "monk-close":
                document.getElementById("class-monk").style.display = "none";
                break;
            case "fighter-bf":
                this.character.fighterBonusFeat = true;
                this.character.grapple = false;
                this.character.stunningFist = false;
                this.character.track = false;
                break;
            case "grapple":
                this.character.grapple = true;
                this.character.fighterBonusFeat = false;
                this.character.stunningFist = false;
                this.character.track = false;
                break;
            case "stunningFist":
                this.character.stunningFist = true;
                this.character.grapple = false;
                this.character.fighterBonusFeat = false;
                this.character.track = false;
                break;
            case "track":
                this.character.track = true;
                this.character.fighterBonusFeat = false;
                this.character.grapple = false;
                this.character.stunningFist = false;
                break;
        }
    }

    /**
     *
     * @param {String} whichRules
     */
    rulesSelect(whichRules) {
        switch (whichRules) {
            case "baseRace":
                document.getElementById("race-select").style.display = "block";
                document.getElementById("race-source").style.display = "none";
                document.getElementById("instructions").style.display = "none";
                break;
            case "baseClass":
                document.getElementById("class-source").style.display = "none";
                document.getElementById("class-select").style.display = "block";
                break;
        }
    }

    /**
     *
     * @param {String} idCalled
     */
    navigate(idCalled) {
        switch (idCalled) {
            case "race-source":
                document.getElementById(idCalled).style.display = "block";
                document.getElementById("race-select").style.display = "none"; // instructions
                break;
            case "class-source":
                document.getElementById(idCalled).style.display = "block";
                document.getElementById("class-select").style.display = "none";
                break;
            case "select-feats":
                document.getElementById(idCalled).style.display = "block";
                document.getElementById("select-skills").style.display = "none";
                document.getElementById("equipment").style.display = "none";
                this.inventory.equipSubMenu("all-off");
                break;
            case "select-skills":
                document.getElementById(idCalled).style.display = "block";
                document.getElementById("select-feats").style.display = "none";
                this.featsSubMenu("all-off");
                break;
            case "equipment":
                document.getElementById(idCalled).style.display = "block";
                // document.getElementById("inventory").style.display = "block" ;
                if (document.getElementById("copper-remaining").innerHTML === "-") {
                    document.getElementById("roll-starting-gold").style.display = "block";
                }
                document.getElementById("select-feats").style.display = "none";
                document.getElementById("roll-playing").style.display = "none";
                this.featsSubMenu("all-off");
                break;
            case "roll-playing":
                document.getElementById(idCalled).style.display = "block";
                document.getElementById("equipment").style.display = "none";
                this.inventory.equipSubMenu("all-off");
                break;
            case "print-sheets":
                document.getElementById("nav-controls").style.display = "block";
                document.getElementById("print-page-four").style.display = "block";
                document.getElementById("print-page-three").style.display = "block";
                document.getElementById("print-page-two").style.display = "block";
                document.getElementById("print").style.display = "block";
                document.getElementById("build").style.display = "none";
                document.getElementById("roll-playing").style.display = "none";
                document.getElementsByTagName("body")[0].style.backgroundImage = "none";
                var list = document.getElementsByClassName("page-space");
                for (let i = 0; i < list.length; i++) {
                    list[i].style.display = "block";
                }
                window.scrollTo(0, 0);
                break;
            case "back-to-build":
                document.getElementById("print-page-four").style.display = "none";
                document.getElementById("print-page-three").style.display = "none";
                document.getElementById("print-page-two").style.display = "none";
                document.getElementById("print").style.display = "none";
                document.getElementById("nav-controls").style.display = "none";
                document.getElementsByTagName("body")[0].style.backgroundImage = "url('images/dnd-wp.jpg')";
                document.getElementById("roll-playing").style.display = "block";
                document.getElementById("build").style.display = "block";

                var list = document.getElementsByClassName("page-space");
                for (let i = 0; i < list.length; i++) {
                    list[i].style.display = "none";
                }
                break;
            case "start-over":
                location.reload();
                break;
        }
    }

    /**
     *
     */
    rollHeroic() {
        var statValue = [0, 0, 0, 0, 0, 0];
        this.character.totalPoints = 0;

        for (let i = 0; i < 6; i++) {
            statValue[i] = Math.floor(Math.random() * 10 + 9);
            // document.getElementById("stat-val-" + (i + 1) ).innerHTML = statValue[i];
            document.getElementById("stat-label-" + (i + 1)).innerHTML = statValue[i];
            this.character.totalPoints += statValue[i];
        }
        this.character.attrOne = statValue[0];
        this.character.attrTwo = statValue[1];
        this.character.attrThr = statValue[2];
        this.character.attrFou = statValue[3];
        this.character.attrFiv = statValue[4];
        this.character.attrSix = statValue[5];

        document.getElementById("total-points").innerHTML = this.character.totalPoints;
        if (this.character.totalPoints > 90) {
            document.getElementById("playability").innerHTML = "Jedi";
        } else if (this.character.totalPoints > 72) {
            document.getElementById("playability").innerHTML = "Strong";
        } else if (this.character.totalPoints > 54) {
            document.getElementById("playability").innerHTML = "Average";
        } else if (this.character.totalPoints > 36) {
            document.getElementById("playability").innerHTML = "Weak";
        } else {
            document.getElementById("playability").innerHTML = "Useless as Dirt";
        }
        this.removeDieRollButtons();
    }

    /**
     *
     */
    rollStandard() {
        var statValue = [0, 0, 0, 0, 0, 0];
        this.character.totalPoints = 0;

        for (var i = 0; i < 6; i++) {
            var firstDie = Math.floor(Math.random() * 6 + 1),
                secondDie = Math.floor(Math.random() * 6 + 1),
                thirdDie = Math.floor(Math.random() * 6 + 1),
                fourthDie = Math.floor(Math.random() * 6 + 1);
            if ((fourthDie <= thirdDie) && (fourthDie <= secondDie) && (fourthDie <= firstDie)) {
                statValue[i] = (firstDie + secondDie + thirdDie);
            } else if ((thirdDie <= fourthDie) && (thirdDie <= secondDie) && (thirdDie <= firstDie)) {
                statValue[i] = (firstDie + secondDie + fourthDie);
            } else if ((secondDie <= fourthDie) && (secondDie <= secondDie) && (secondDie <= firstDie)) {
                statValue[i] = (firstDie + thirdDie + fourthDie);
            } else {
                statValue[i] = (secondDie + thirdDie + fourthDie);
            }

            // document.getElementById("stat-val-" + (i + 1) ).innerHTML = statValue[i];
            document.getElementById("stat-label-" + (i + 1)).innerHTML = statValue[i];
            this.character.totalPoints += statValue[i];
        }

        this.character.attrOne = statValue[0];
        this.character.attrTwo = statValue[1];
        this.character.attrThr = statValue[2];
        this.character.attrFou = statValue[3];
        this.character.attrFiv = statValue[4];
        this.character.attrSix = statValue[5];

        document.getElementById("total-points").innerHTML = this.character.totalPoints;
        if (this.character.totalPoints > 90) {
            document.getElementById("playability").innerHTML = "Jedi";
        } else if (this.character.totalPoints > 72) {
            document.getElementById("playability").innerHTML = "Strong";
        } else if (this.character.totalPoints > 54) {
            document.getElementById("playability").innerHTML = "Average";
        } else if (this.character.totalPoints > 36) {
            document.getElementById("playability").innerHTML = "Weak";
        } else {
            document.getElementById("playability").innerHTML = "Useless as Dirt";
        }
        this.removeDieRollButtons();
    }

    /**
     *
     */
    rollClassic() {
        var statValue = [0, 0, 0, 0, 0, 0];
        this.character.totalPoints = 0;

        for (let i = 0; i < 6; i++) {
            statValue[i] = Math.floor(Math.random() * 16 + 3);
            // document.getElementById("stat-val-" + (i + 1) ).innerHTML = statValue[i];
            document.getElementById("stat-label-" + (i + 1)).innerHTML = statValue[i];
            this.character.totalPoints += statValue[i];
        }

        this.character.attrOne = statValue[0];
        this.character.attrTwo = statValue[1];
        this.character.attrThr = statValue[2];
        this.character.attrFou = statValue[3];
        this.character.attrFiv = statValue[4];
        this.character.attrSix = statValue[5];


        // Displays total points
        document.getElementById("total-points").innerHTML = this.character.totalPoints;
        // Evaluates total points, assigns a value string and displays.
        if (this.character.totalPoints > 90) {
            document.getElementById("playability").innerHTML = "Jedi";
        } else if (this.character.totalPoints > 72) {
            document.getElementById("playability").innerHTML = "Strong";
        } else if (this.character.totalPoints > 54) {
            document.getElementById("playability").innerHTML = "Average";
        } else if (this.character.totalPoints > 36) {
            document.getElementById("playability").innerHTML = "Weak";
        } else {
            document.getElementById("playability").innerHTML = "Useless as Dirt";
        }
        this.removeDieRollButtons();
    }

    /**
     *
     */
    removeDieRollButtons() {
        var list = document.getElementsByClassName("roll-attribute");
        for (let i = 0; i < list.length; i++) {
            list[i].style.display = "none";
        }
        document.getElementById("roll-allocate").style.display = "block";
    }

    /**
     *
     */
    rollManual() {
        document.getElementById("gener-ability-scores").style.display = "none";
        document.getElementById("input-ability-scores").style.display = "block";
    }

    /**
     *
     * @param {HTMLFormElement} form
     */
    assignAttribMan(form) {
        this.character.strAttr = Number(form.inpstrAttr.value);
        this.character.dexAttr = Number(form.inpdexAttr.value);
        this.character.conAttr = Number(form.inpconAttr.value);
        this.character.wisAttr = Number(form.inpwisAttr.value);
        this.character.intAttr = Number(form.inpintAttr.value);
        this.character.chaAttr = Number(form.inpchaAttr.value);

        this.logAllModifiers(); // Calculates all Ability Modifiers and Logs in Global Variables
        this.logMscSkModifiers(); // Shows all Racial Skill Misc Modifiers (and other racial bonuses) and re-calculates ability modifiers.
        this.addAbModifiers(); // Displays all Ability Modifiers in Skills Section
        this.showClassSkills(); // Calculates Skill Points. Shows all Class Skills
        this.initiatePhaseTwo();
        this.logAllSavingThrows(); // Calculate Saving Throws and Base Attack Bonus. They Don't Display immediately.
    }

    /**
     *
     */
    logAllModifiers() {
        this.character.strMod = Math.floor((this.character.strAttr - 10) / 2);
        this.character.dexMod = Math.floor((this.character.dexAttr - 10) / 2);
        this.character.conMod = Math.floor((this.character.conAttr - 10) / 2);
        this.character.wisMod = Math.floor((this.character.wisAttr - 10) / 2);
        this.character.intMod = Math.floor((this.character.intAttr - 10) / 2);
        this.character.chaMod = Math.floor((this.character.chaAttr - 10) / 2);
    }

    /**
     *
     * @param {HTMLFormElement} form
     */
    assignAttributes(form) {
        // Take in all form values
        this.character.nameAttrOne = form.attrOne.value;
        this.character.nameAttrTwo = form.attrTwo.value;
        this.character.nameAttrThree = form.attrThr.value;
        this.character.nameAttrFour = form.attrFou.value;
        this.character.nameAttrFive = form.attrFiv.value;
        this.character.nameAttrSix = form.attrSix.value;

        // Store form values AND roll values (from above) in separate Arrays.
        var allAttrNames = [this.character.nameAttrOne, this.character.nameAttrTwo, this.character.nameAttrThree, this.character.nameAttrFour, this.character.nameAttrFive, this.character.nameAttrSix];
        var allAttrValus = [this.character.attrOne, this.character.attrTwo, this.character.attrThree, this.character.attrFour, this.character.attrFive, this.character.attrSix];

        // ^ NOTE it's Valus NOT Values.

        // Set to zero.
        this.character.strAttr = 0;
        this.character.dexAttr = 0;
        this.character.conAttr = 0;
        this.character.wisAttr = 0;
        this.character.intAttr = 0;
        this.character.chaAttr = 0;

        // Run through each NAME value and assign it the corresponding NUMBER value, so attributes are variables with number values.
        for (let i = 0; i < 6; i++) {
            switch (allAttrNames[i]) {
                case "STR":
                    this.character.strAttr = allAttrValus[i];
                    break;
                case "DEX":
                    this.character.dexAttr = allAttrValus[i];
                    break;
                case "CON":
                    this.character.conAttr = allAttrValus[i];
                    break;
                case "WIS":
                    this.character.wisAttr = allAttrValus[i];
                    break;
                case "INT":
                    this.character.intAttr = allAttrValus[i];
                    break;
                case "CHA":
                    this.character.chaAttr = allAttrValus[i];
                    break;
                default:
                    alert("An error occurred. Verify that all Attributes are Allocated.");
                    i = 6; // Exit the function :P
                    break;
            }
        }

        // Reject Errors, and prompt for confirm, else, throw out of the function to restart.
        if (this.character.strAttr !== 0 && this.character.dexAttr !== 0 && this.character.conAttr !== 0 && this.character.wisAttr !== 0 && this.character.intAttr !== 0 && this.character.chaAttr !== 0) {
            this.logAllModifiers(); // Calculates all Ability Modifiers and Logs in Global Variables
            this.logMscSkModifiers(); // Shows all Racial Skill Misc Modifiers (and other racial bonuses) and re-calculates ability modifiers.
            this.addAbModifiers(); // Displays all Ability Modifiers in Skills Section
            this.showClassSkills(); // Calculates Skill Points. Shows all Class Skills
            this.initiatePhaseTwo();
            this.logAllSavingThrows(); // Calculate Saving Throws and Base Attack Bonus. They Don't Display immediately.
        } else {
            alert("An error occurred. Verify that no Attributes are Duplicated.");
        }
    }

    /**
     *
     */
    initiatePhaseTwo() {
        if (this.character.fighterBonusFeat) {
            this.character.startingFeats += 1;
            // var bonusFeat = document.getElementById("feats-remaining").innerHTML;
            // document.getElementById("feats-remaining").innerHTML = ( 1 + Number(bonusFeat) );
        }
        if (this.character.grapple) {
            this.character.numOfFeats += 1;
            document.getElementById("feat-name-" + this.character.numOfFeats).innerHTML = "Imp. Grapple";
        }
        if (this.character.stunningFist) {
            this.character.numOfFeats += 1;
            document.getElementById("feat-name-" + this.character.numOfFeats).innerHTML = "Stunning Fist";
        }
        if (this.character.track) {
            this.character.numOfFeats += 1;
            document.getElementById("feat-name-" + this.character.numOfFeats).innerHTML = "Track";
        }

        document.getElementById("apply-all").style.display = "none"; // disable to "prevent" cheating.
        document.getElementById("race-select").style.display = "none";
        document.getElementById("class-select").style.display = "none";
        document.getElementById("dice-sys").style.display = "none";
        this.character.levelAdvance = Number(document.getElementById("level-input").value);
        if (this.character.levelAdvance === 1) {
            document.getElementById("final-base-attributes").style.display = "block";
            document.getElementById("select-skills").style.display = "block";
        } else {
            document.getElementById("final-base-attributes").style.display = "block";
            document.getElementById("handle-level-adv").style.display = "block";
            document.getElementById("show-level").innerHTML = this.character.levelAdvance;

            var list = document.getElementsByClassName("sk-input");
            for (let i = 0; i < list.length; i++) {
                list[i].setAttribute("max", (this.character.levelAdvance + 3));
            }

            // This for loop handles everything, and iterates at each 4 level intervals, when ability score increases can affect results.
            // So heads up.
            for (let i = 2; i < (this.character.levelAdvance + 1); i++) {

                if ((i / 4) === Math.floor(i / 4)) {
                    document.getElementById("handle-ability-score-" + (i / 4)).style.display = "block";
                }
                if (i <= 3) { // Only levels unaffected by 1st ability score increase

                    var adtlHitPoints = (Math.floor(Math.random() * this.character.hitDie) + 1) + this.character.conMod;
                    if (adtlHitPoints <= 0) {
                        this.character.hitPoints += 1;
                    } else {
                        this.character.hitPoints += adtlHitPoints;
                    }
                    this.levelSkillPointIncrease();
                }

                if ((i / 3) === Math.floor(i / 3)) {
                    this.character.startingFeats += 1;
                }
            }
        }
    }

    /**
     *
     */
    levelSkillPointIncrease() {
        var points = this.character.baseSkillPoints + this.character.intMod;
        if (this.character.selRace === "HUMAN") {
            points += 1;
        }
        if (points <= 0) {
            this.character.skPts += 1;
        } else {
            this.character.skPts += points;
        }

        document.getElementById("sk-points-starting").innerHTML = "Skill Points Remaining: " + this.character.skPts

    }

    /**
     *
     * @param whichSubMenu
     */
    featsSubMenu(whichSubMenu) {
        var allSubMenus = ["combat", "skill", "other", "proficiency", "creation", "casting", "metamagic"];
        for (let i = 0; i < allSubMenus.length; i++) {
            if (allSubMenus[i] === whichSubMenu) {
                document.getElementById("feats-" + whichSubMenu).style.display = "block";
            } else {
                document.getElementById("feats-" + allSubMenus[i]).style.display = "none";
            }
        }
        window.scrollTo(0, 0);
    }

    /**
     *
     */
    calcPoints() {
        // this will be turned into a loop at some point.
        window.inappr = Number(document.getElementById("in_appr").value);
        window.inbala = Number(document.getElementById("in_bala").value);
        window.inbluf = Number(document.getElementById("in_bluf").value);
        window.inclim = Number(document.getElementById("in_clim").value);
        window.inconc = Number(document.getElementById("in_conc").value);
        window.incraf = Number(document.getElementById("in_craf").value);
        window.indeci = Number(document.getElementById("in_deci").value);
        window.indipl = Number(document.getElementById("in_dipl").value);
        window.indisa = Number(document.getElementById("in_disa").value);
        window.indisg = Number(document.getElementById("in_disg").value);
        window.inesca = Number(document.getElementById("in_esca").value);
        window.inforg = Number(document.getElementById("in_forg").value);
        window.ingath = Number(document.getElementById("in_gath").value);
        window.inhand = Number(document.getElementById("in_hand").value);
        window.inheal = Number(document.getElementById("in_heal").value);
        window.inhide = Number(document.getElementById("in_hide").value);
        window.ininti = Number(document.getElementById("in_inti").value);
        window.injump = Number(document.getElementById("in_jump").value);
        window.inknow = Number(document.getElementById("in_know").value);
        window.inlist = Number(document.getElementById("in_list").value);
        window.inmove = Number(document.getElementById("in_move").value);
        window.inopen = Number(document.getElementById("in_open").value);
        window.inperf = Number(document.getElementById("in_perf").value);
        window.inprof = Number(document.getElementById("in_prof").value);
        window.inride = Number(document.getElementById("in_ride").value);
        window.insear = Number(document.getElementById("in_sear").value);
        window.insens = Number(document.getElementById("in_sens").value);
        window.inslei = Number(document.getElementById("in_slei").value);
        window.inspel = Number(document.getElementById("in_spel").value);
        window.inspot = Number(document.getElementById("in_spot").value);
        window.insurv = Number(document.getElementById("in_surv").value);
        window.inswim = Number(document.getElementById("in_swim").value);
        window.intumb = Number(document.getElementById("in_tumb").value);
        window.inusem = Number(document.getElementById("in_usem").value);
        window.inuser = Number(document.getElementById("in_user").value);
        window.inbla1 = Number(document.getElementById("bla36").value);

        this.character.skillPointsSpent = 0;
        var mod;
        for (let i = 0; i < skillsList.length; i++) {
            switch (whichModList[i]) {
                case "str":
                    mod = this.character.strMod;
                    break;
                case "dex":
                    mod = this.character.dexMod;
                    break;
                case "con":
                    mod = this.character.conMod;
                    break;
                case "wis":
                    mod = this.character.wisMod;
                    break;
                case "int":
                    mod = this.character.intMod;
                    break;
                case "cha":
                    mod = this.character.chaMod;
                    break;
                case "none":
                    mod = "none";
                    break;
            }

            if (mod !== "none") {
                if (document.getElementById("ms-" + skillsList[i]).innerHTML === "-") {
                    var misc = 0;
                } else {
                    var misc = Number(document.getElementById("ms-" + skillsList[i]).innerHTML);
                }

                if (this.character.allSkillsBool[i]) {
                    var maths = Number(mod) + Number(misc) + Number(window["in" + skillsList[i]]);

                    if (maths > 0) {
                        document.getElementById("t-" + skillsList[i]).innerHTML = ("+" + maths);
                    } else {
                        document.getElementById("t-" + skillsList[i]).innerHTML = maths;
                    }
                } else {
                    var maths = Number(mod) + Number(misc) + ((Number(window["in" + skillsList[i]])) / 2);
                    if (maths > 0) {
                        document.getElementById("t-" + skillsList[i]).innerHTML = ("+" + maths);
                    } else {
                        document.getElementById("t-" + skillsList[i]).innerHTML = maths;
                    }
                }
                this.character.skillPointsSpent += Number(window["in" + skillsList[i]]);
            } else {
                this.character.skillPointsSpent += Number(document.getElementById("bla" + (i + 1)).value);
            }
            // alert("SPENT/this.character.skPts: " + this.character.skillPointsSpent + " " + this.character.skPts );
        }

        var dispSkillPoints = this.character.skPts - this.character.skillPointsSpent;
        document.getElementById("sk-points-starting").innerHTML = "Skill Points Remaining: " + dispSkillPoints;
    }

    /**
     *
     * @param whichLevel
     */
    addAbilityScore(whichLevel) {
        var whichAbility = document.getElementById("select-ability-score-" + Number(whichLevel)).value;
        switch (whichAbility) {
            case "str":
                this.character.strAttr += 1;
                break;
            case "dex":
                this.character.dexAttr += 1;
                break;
            case "con":
                this.character.conAttr += 1;
                break;
            case "wis":
                this.character.wisAttr += 1;
                break;
            case "int":
                this.character.intAttr += 1;
                break;
            case "cha":
                this.character.chaAttr += 1;
                break;
        }

        for (let i = (whichLevel * 4); i < this.character.levelAdvance; i++) {
            if (i <= (whichLevel * 4 + 3)) { // Only levels affected by THIS (but not SUBSEQUENT) ability score increase
                var adtlHitPoints = (Math.floor(Math.random() * this.character.hitDie) + 1) + this.character.conMod;
                if (adtlHitPoints <= 0) {
                    this.character.hitPoints += 1;
                } else {
                    this.character.hitPoints += adtlHitPoints;
                }
                this.levelSkillPointIncrease();
            }
        }

        document.getElementById("final-" + whichAbility).innerHTML = window[whichAbility + "Attr"];
        this.logAllModifiers();
        document.getElementById("final-" + whichAbility + "-mod").innerHTML = "+ " + window[whichAbility + "Mod"];
        var whichAbility = document.getElementById("handle-ability-score-" + Number(whichLevel)).style.display = "none";
    }

    /**
     *
     */
    doneAdvLvl() {
        document.getElementById("handle-level-adv").style.display = "none";
        document.getElementById("select-skills").style.display = "block";
        document.getElementById("feats-remaining").innerHTML = this.character.startingFeats;
        document.getElementById("show-hp").innerHTML = this.character.hitPoints;
    }

    /**
     *
     */
    logMscSkModifiers() {
        switch (this.character.selRace) {
            case "HUMAN":
                this.character.startingFeats += 1;
                // var bonusFeat = document.getElementById("feats-remaining").innerHTML;
                // document.getElementById("feats-remaining").innerHTML = ( 1 + Number(bonusFeat) );
                break;
            case "DWARF":
                // alert("CON + 2 (Dwarven Racial Trait)\nCHA - 2 (Dwarven Racial Trait)");
                this.character.conAttr += 2;
                this.character.chaAttr -= 2;
                this.logAllModifiers();
                this.character.darkVision = true;
                break;
            case "ELF":
                // alert("DEX + 2 (Elven Racial Trait)\nCON - 2 (Elven Racial Trait)");
                this.character.dexAttr += 2;
                this.character.conAttr -= 2;
                this.logAllModifiers();
                document.getElementById("ms-list").innerHTML = 2;
                document.getElementById("ms-sear").innerHTML = 2;
                document.getElementById("ms-spot").innerHTML = 2;
                this.character.lowLight = true;
                break;
            case "GNOME":
                // alert("CON + 2 (Gnome Racial Trait)\nSTR - 2 (Gnome Racial Trait)");
                this.character.conAttr += 2;
                this.character.strAttr -= 2;
                this.logAllModifiers();
                document.getElementById("ms-list").innerHTML = 2;
                document.getElementById("ms-craf").innerHTML = 2;
                document.getElementById("ms-hide").innerHTML = 4;
                this.character.small = true;
                this.character.lowLight = true;
                break;
            case "HALF-ELF":
                // alert("DEX + 1 (Elven Racial Trait)\nCON - 1 (Elven Racial Trait)");
                document.getElementById("ms-list").innerHTML = 1;
                document.getElementById("ms-sear").innerHTML = 1;
                document.getElementById("ms-spot").innerHTML = 1;
                document.getElementById("ms-dipl").innerHTML = 2;
                document.getElementById("ms-gath").innerHTML = 2;
                this.character.lowLight = true;
                break;
            case "HALF-ORC":
                // alert("STR + 2 (Orcish Racial Trait)\nINT - 2 (Orcish Racial Trait)\nCHA - 2 (Orcish Racial Trait)");
                this.character.strAttr += 2;
                this.character.intAttr -= 2;
                this.character.chaAttr -= 2;
                this.logAllModifiers();
                this.character.darkVision = true;
                break;
            case "HALFLING":
                // alert("DEX + 2 (Halfling Racial Trait)\nSTR - 2 (Halfling Racial Trait)");
                this.character.dexAttr += 2;
                this.character.strAttr -= 2;
                this.logAllModifiers();
                document.getElementById("ms-clim").innerHTML = 2;
                document.getElementById("ms-jump").innerHTML = 2;
                document.getElementById("ms-move").innerHTML = 2;
                document.getElementById("ms-list").innerHTML = 2;
                document.getElementById("ms-hide").innerHTML = 4;
                this.character.small = true;
                break;
            case "NewBlankRace":
                // A placeholder for future racial additions.
                //
                // This is the first place (in order of execution) where the value of this.character.selRace affects subsequent calculations.
                //
                break;
        }

        // Now that the switch is done, and every score is in its final state, let's show them.
        document.getElementById("final-str").innerHTML = this.character.strAttr;
        document.getElementById("final-str-mod").innerHTML = ("+ " + this.character.strMod);
        document.getElementById("final-dex").innerHTML = this.character.dexAttr;
        document.getElementById("final-dex-mod").innerHTML = ("+ " + this.character.dexMod);
        document.getElementById("final-con").innerHTML = this.character.conAttr;
        document.getElementById("final-con-mod").innerHTML = ("+ " + this.character.conMod);
        document.getElementById("final-wis").innerHTML = this.character.wisAttr;
        document.getElementById("final-wis-mod").innerHTML = ("+ " + this.character.wisMod);
        document.getElementById("final-int").innerHTML = this.character.intAttr;
        document.getElementById("final-int-mod").innerHTML = ("+ " + this.character.intMod);
        document.getElementById("final-cha").innerHTML = this.character.chaAttr;
        document.getElementById("final-cha-mod").innerHTML = ("+ " + this.character.chaMod);
    }

    /**
     *
     * @param basePoints
     */
    whichSkillFunction(basePoints) {
        this.character.baseSkillPoints = basePoints;
        if (this.character.intMod > 0) {
            var skillPoints = ((basePoints + this.character.intMod) * 4);
        } else {
            var skillPoints = (basePoints * 4);
        }

        if (this.character.selRace === "HUMAN") {
            var totalSkillPoints = skillPoints + 4;
        } else {
            var totalSkillPoints = skillPoints;
        }
        // "NewBlankRace"
        // A placeholder for future class additions.
        //
        // This is the SECOND place (in order of execution) where the value of this.character.selRace affects subsequent calculations.
        //
        document.getElementById("sk-points-starting").innerHTML = ("Total Skill Points: " + totalSkillPoints);
        this.character.skPts = totalSkillPoints;
        // alert("Total BASE Skill Points Calculated: " + this.character.skPts);
    }

    /**
     *
     */
    calculateSkillPoints() {
        switch (this.character.selClass) {
            case "CLERIC":
            case "FIGHTER":
            case "PALADIN":
            case "SORCERER":
            case "WIZARD":
                this.whichSkillFunction(2);
                break;
            case "BARBARIAN":
            case "DRUID":
            case "MONK":
                this.whichSkillFunction(4);
                break;
            case "BARD":
            case "RANGER":
                this.whichSkillFunction(6);
                break;
            case "ROGUE":
                this.whichSkillFunction(8);
                break;
            case "NewBlankClass":
                // A placeholder for future class additions.
                //
                // This is the SECOND place (in order of execution) where the value of this.character.selClass affects subsequent calculations.
                //
                break;
        }
    }

    /**
     *
     */
    showClassSkills() {
        this.calculateSkillPoints();
        //First, basic data input based on class (first function above)
        switch (this.character.selClass) {
            case "BARBARIAN":
                //align with booleans below --appr---	bala---	bluf---	clim---	conc---	craf---	deci---	dipl---	disa---	disg---	esca---	forg---	gath---	hand---	heal---	hide---	inti---	jump---	know---	list---	move---	open---	perf---	prof---	ride---	sear---	sens---	slei---	spel---	spot---	surv---	swim---	tumb---	usem---	user
                this.character.allSkillsBool = [false, false, false, true, false, true, false, false, false, false, false, false, false, true, false, false, true, true, false, true, false, false, false, false, true, false, false, false, false, false, true, true, false, false, false];
                break;
            case "BARD":
                this.character.allSkillsBool = [true, true, true, true, true, true, true, true, false, true, true, true, true, false, false, true, false, true, true, true, true, false, true, true, false, false, true, true, true, false, false, true, true, true, false];
                break;
            case "CLERIC":
                this.character.allSkillsBool = [false, false, false, false, true, true, false, true, false, false, false, false, false, false, true, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false];
                break;
            case "DRUID":
                this.character.allSkillsBool = [false, false, false, false, true, true, false, true, false, false, false, false, false, true, true, false, false, false, true, false, false, false, false, true, true, false, false, false, true, true, true, true, false, false, false];
                break;
            case "FIGHTER":
                // data input was manual for testing rather than from /docs/base%20skills%20booleans.js file, so there are spaces instead of tabs.
                this.character.allSkillsBool = [false, false, false, true, false, true, false, false, false, false, false, false, false, true, false, false, true, true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false];
                break;
            case "MONK":
                this.character.allSkillsBool = [false, true, false, true, true, true, false, true, false, false, true, false, false, false, false, true, false, true, true, true, true, false, true, true, false, false, true, false, false, true, false, true, true, false, false];
                break;
            case "PALADIN":
                this.character.allSkillsBool = [false, false, false, false, true, true, false, true, false, false, false, false, false, true, true, false, false, false, true, false, false, false, false, true, true, false, true, false, false, false, false, false, false, false, false];
                break;
            case "RANGER":
                this.character.allSkillsBool = [false, false, false, true, true, true, false, true, false, false, false, false, false, true, true, true, false, true, true, true, true, false, false, true, true, true, false, false, false, true, true, true, false, false, true];
                break;
            case "ROGUE":
                this.character.allSkillsBool = [true, true, true, true, false, true, true, true, true, true, true, true, true, false, false, true, true, true, true, true, true, true, true, true, false, true, true, true, false, true, false, true, true, true, true];
                break;
            case "SORCERER":
                this.character.allSkillsBool = [false, false, true, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false];
                break;
            case "WIZARD":
                this.character.allSkillsBool = [false, false, false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false];
                break;
            case "NewBlankClass":
                // A placeholder for future class additions.
                //
                // This is the first place (in order of execution) where the value of this.character.selClass affects subsequent calculations.
                //
                break;
        }

        for (let i = 0; i < 35; i++) {
            if (this.character.allSkillsBool[i]) {
                document.getElementById("c-" + this.character.allSkillsString[i]).innerHTML = "CLASS";
            } else {
                document.getElementById("c-" + this.character.allSkillsString[i]).innerHTML = "-";
            }
        }
    }

    /**
     *
     * @param fortSave
     * @param reflSave
     * @param willSave
     * @param baseAttack
     * @param hitDie
     */
    updateSavingThrows(fortSave, reflSave, willSave, baseAttack, hitDie) {
        this.character.forSave = (fortSave);
        this.character.refSave = (reflSave);
        this.character.wilSave = (willSave);
        // this.character.baseAttackBonus = baseAttack;
        switch (baseAttack) {
            case "G":
                this.character.baseAttackBonus = this.character.levelAdvance;
                this.character.baseAttackBonus2 = this.character.levelAdvance - 5;
                this.character.baseAttackBonus3 = this.character.levelAdvance - 10;
                this.character.baseAttackBonus4 = this.character.levelAdvance - 15;
                break;
            case "A":
                this.character.baseAttackBonus = Math.floor((this.character.levelAdvance + (this.character.levelAdvance / 2)) / 2);
                this.character.baseAttackBonus2 = this.character.baseAttackBonus - 5;
                this.character.baseAttackBonus3 = this.character.baseAttackBonus - 10;
                this.character.baseAttackBonus4 = this.character.baseAttackBonus - 15;
                break;
            case "P":
                this.character.baseAttackBonus = Math.floor(this.character.levelAdvance / 2);
                this.character.baseAttackBonus2 = this.character.baseAttackBonus - 5;
                this.character.baseAttackBonus3 = this.character.baseAttackBonus - 10;
                this.character.baseAttackBonus4 = this.character.baseAttackBonus - 15;
                break;
        }

        // alert("level: " + this.character.levelAdvance + "bab: " + this.character.baseAttackBonus);
        this.character.hitPoints = hitDie + this.character.conMod;
        if (this.character.hitPoints <= 0) {
            this.character.hitPoints = 1;
        }
        this.character.hitDie = hitDie;
        // alert( "Base Attack Bonus: +" + this.character.baseAttackBonus + "\nBase Saving Thows: \nFOR: +" + this.character.forSave + "\nREF: +" + this.character.refSave + "\nWIL: +" + this.character.wilSave + "\nHit Points: " + this.character.hitPoints );
    }

    /**
     *
     */
    logAllSavingThrows() {
        switch (this.character.selClass) {
            case "CLERIC":
            case "DRUID":
                this.updateSavingThrows(2, 0, 2, "A", 8);
                break;
            case "SORCERER":
            case "WIZARD":
                this.updateSavingThrows(0, 0, 2, "P", 4);
                break;
            case "BARBARIAN":
                this.updateSavingThrows(2, 0, 0, "G", 12);
                break;
            case "FIGHTER":
            case "PALADIN":
                this.updateSavingThrows(2, 0, 0, "G", 10);
                break;
            case "MONK":
                this.updateSavingThrows(2, 2, 2, "A", 8);
                break;
            case "BARD":
                this.updateSavingThrows(0, 2, 2, "A", 6);
                break;
            case "RANGER":
                this.updateSavingThrows(2, 2, 0, "G", 8);
                break;
            case "ROGUE":
                this.updateSavingThrows(0, 2, 0, "A", 6);
                break;
            case "NewBlankClass":
                // A placeholder for future class additions.
                //
                // This is the SECOND place (in order of execution) where the value of this.character.selClass affects subsequent calculations.
                //
                break;
        }
    }

    /**
     *
     */
    addSkill() {
        this.blankCounter += 1;
        // functionality that references the input relies on this.blankcounter.
        // functionality that defines the output relies on this.blank[whatever]counter
        switch (document.getElementById("wrin-skill-select-" + this.blankCounter).value) {
            case "craft":
                this.blankCraftCounter += 1;
                document.getElementById("wrin-craft-" + this.blankCraftCounter).style.display = "block";
                document.getElementById("print-wrin-craft-" + this.blankCraftCounter).innerHTML = "Craft: " + document.getElementById("blank-subtype-" + this.blankCounter).value;
                if (document.getElementById("wrin-inclass-" + this.blankCounter).value === "true") {
                    var rankPoints = Number(document.getElementById("bla" + Number(35 + this.blankCounter)).value);
                } else {
                    var rankPoints = Number(document.getElementById("bla" + Number(35 + this.blankCounter)).value) / 2;
                }
                document.getElementById("print-wrin-craft-total-" + this.blankCraftCounter).innerHTML = "+ " + Number(rankPoints + Number(document.getElementById("wrin-skill-abmod-" + this.blankCounter).value) + Number(document.getElementById("wrin-skill-misc-" + this.blankCounter).value));
                break;
            case "knowledge":
                this.blankKnowledgeCounter += 1;
                document.getElementById("wrin-knowledge-" + this.blankKnowledgeCounter).style.display = "block";
                document.getElementById("print-wrin-knowledge-" + this.blankKnowledgeCounter).innerHTML = "Knowledge: " + document.getElementById("blank-subtype-" + this.blankCounter).value;
                if (document.getElementById("wrin-inclass-" + this.blankCounter).value === "true") {
                    var rankPoints = Number(document.getElementById("bla" + Number(35 + this.blankCounter)).value);
                } else {
                    var rankPoints = Number(document.getElementById("bla" + Number(35 + this.blankCounter)).value) / 2;
                }
                document.getElementById("print-wrin-knowledge-total-" + this.blankKnowledgeCounter).innerHTML = "+ " + Number(rankPoints + Number(document.getElementById("wrin-skill-abmod-" + this.blankCounter).value) + Number(document.getElementById("wrin-skill-misc-" + this.blankCounter).value));
                break;
            case "perform":
                this.blankPerformCounter += 1;
                document.getElementById("wrin-perform-" + this.blankPerformCounter).style.display = "block";
                document.getElementById("print-wrin-perform-" + this.blankPerformCounter).innerHTML = "Perform: " + document.getElementById("blank-subtype-" + this.blankCounter).value;
                if (document.getElementById("wrin-inclass-" + this.blankCounter).value === "true") {
                    var rankPoints = Number(document.getElementById("bla" + Number(35 + this.blankCounter)).value);
                } else {
                    var rankPoints = Number(document.getElementById("bla" + Number(35 + this.blankCounter)).value) / 2;
                }
                document.getElementById("print-wrin-perform-total-" + this.blankPerformCounter).innerHTML = "+ " + Number(rankPoints + Number(document.getElementById("wrin-skill-abmod-" + this.blankCounter).value) + Number(document.getElementById("wrin-skill-misc-" + this.blankCounter).value));
                break;
            case "profession":
                this.blankProfessionCounter += 1;
                document.getElementById("wrin-profession-" + this.blankProfessionCounter).style.display = "block";
                document.getElementById("print-wrin-profession-" + this.blankProfessionCounter).innerHTML = "Profession: " + document.getElementById("blank-subtype-" + this.blankCounter).value;
                if (document.getElementById("wrin-inclass-" + this.blankCounter).value === "true") {
                    var rankPoints = Number(document.getElementById("bla" + Number(35 + this.blankCounter)).value);
                } else {
                    var rankPoints = Number(document.getElementById("bla" + Number(35 + this.blankCounter)).value) / 2;
                }
                document.getElementById("print-wrin-profession-total-" + this.blankProfessionCounter).innerHTML = "+ " + Number(rankPoints + Number(document.getElementById("wrin-skill-abmod-" + this.blankCounter).value) + Number(document.getElementById("wrin-skill-misc-" + this.blankCounter).value));
                break;
            case "writein":
                alert("Only Craft: [subtype] skills work at this point. Pending update.");
                break;

        }
        if (this.blankCraftCounter === 4) {
            // Remove Craft as an option, all further crafts must be completely write-in, at the bottom.
            var list = document.getElementsByClassName("all-wrin-craft");
            for (let i = 0; i < list.length; i++) {
                list[i].style.display = "none";
            }
        }
        if (this.blankKnowledgeCounter === 4) {
            // Remove Craft as an option, all further crafts must be completely write-in, at the bottom.
            var list = document.getElementsByClassName("all-wrin-knowledge");
            for (let i = 0; i < list.length; i++) {
                list[i].style.display = "none";
            }
        }
        if (this.blankPerformCounter === 4) {
            // Remove Craft as an option, all further crafts must be completely write-in, at the bottom.
            var list = document.getElementsByClassName("all-wrin-perform");
            for (let i = 0; i < list.length; i++) {
                list[i].style.display = "none";
            }
        }
        if (this.blankProfessionCounter === 1) {
            // Remove Craft as an option, all further crafts must be completely write-in, at the bottom.
            var list = document.getElementsByClassName("all-wrin-profession");
            for (let i = 0; i < list.length; i++) {
                list[i].style.display = "none";
            }
        }

        document.getElementById("wrin-skill-submit-" + this.blankCounter).style.display = "none";
        document.getElementById("wrin-" + (this.blankCounter + 1)).style.display = "block"; // This will ultimately fail to execute if the user exhausts the forms.
    }

    /**
     *
     */
    addAbModifiers() {
        // alert("function begin");
        var listStr = document.getElementsByClassName("am-str");
        for (let i = 0; i < listStr.length; i++) {
            listStr[i].innerHTML = ("+ " + this.character.strMod);
        }
        var listDex = document.getElementsByClassName("am-dex");
        for (let i = 0; i < listDex.length; i++) {
            listDex[i].innerHTML = ("+ " + this.character.dexMod);
        }
        var listCon = document.getElementsByClassName("am-con");
        for (let i = 0; i < listCon.length; i++) {
            listCon[i].innerHTML = ("+ " + this.character.conMod);
        }
        var listWis = document.getElementsByClassName("am-wis");
        for (let i = 0; i < listWis.length; i++) {
            listWis[i].innerHTML = ("+ " + this.character.wisMod);
        }
        var listInt = document.getElementsByClassName("am-int");
        for (let i = 0; i < listInt.length; i++) {
            listInt[i].innerHTML = ("+ " + this.character.intMod);
        }
        var listCha = document.getElementsByClassName("am-cha");
        for (let i = 0; i < listCha.length; i++) {
            listCha[i].innerHTML = ("+ " + this.character.chaMod);
        }
    }

    /**
     *
     */
    acceptSkills() {
        if (this.character.skPtsRemaining === 0) {
            var confirmAccSk = confirm("Are you sure you are finished allocating skill points?");
        } else if (this.character.skPtsRemaining > 0) {
            var confirmAccSk = confirm("You have unused skill points\nAre you sure you want to proceed?");
        } else {
            var confirmAccSk = confirm("You have used too many skill points\nAre you sure you want to proceed?");
        }

        if (confirmAccSk) {
            // Move on to next section.
        }
    }

    /**
     *
     * @param featName
     */
    selectFeat(featName) {
        var confirmF = confirm("Select " + featName + "?");
        if (confirmF) {
            var featsRemaining = Number(document.getElementById("feats-remaining").innerHTML);
            if (featsRemaining > 0) {
                featsRemaining -= 1;
                document.getElementById("feats-remaining").innerHTML = featsRemaining;
                this.character.numOfFeats += 1;
                document.getElementById("feat-name-" + this.character.numOfFeats).innerHTML = featName;
            } else {
                var confirmR = confirm("You have no more feats available. Suffer the wrath of your DM and continue anyway?");
                if (confirmR) {
                    featsRemaining -= 1;
                    document.getElementById("feats-remaining").innerHTML = featsRemaining;
                    this.character.numOfFeats += 1;
                    document.getElementById("feat-name-" + this.character.numOfFeats).innerHTML = featName;
                }
            }
        }
    }

    /**
     *
     * @param featName
     */
    weaponFeat(featName) {
        var confirmW = confirm("Select " + featName + "?");
        if (confirmW) {
            var featsRemaining = Number(document.getElementById("feats-remaining").innerHTML);

            if (featsRemaining > 0) {
                featsRemaining -= 1;
                document.getElementById("feats-remaining").innerHTML = featsRemaining;
                this.character.numOfFeats += 1;
                var featTarget = prompt("Which weapon will this feat affect?");
                document.getElementById("feat-name-" + this.character.numOfFeats).innerHTML = (featName + " (" + featTarget + ") ");
            } else {
                var confirmR = confirm("You have no more feats available. Suffer the wrath of your DM and continue anyway?");
                if (confirmR) {
                    featsRemaining -= 1;
                    document.getElementById("feats-remaining").innerHTML = featsRemaining;
                    this.character.numOfFeats += 1;
                    var featTarget = prompt("Which weapon will this feat affect?");
                    document.getElementById("feat-name-" + this.character.numOfFeats).innerHTML = (featName + " (" + featTarget + ") ");
                }
            }
        }
    }

    /**
     *
     * @param featName
     */
    skillFocus(featName) {
        var confirmW = confirm("Select Skill Focus?");
        if (confirmW) {
            var featsRemaining = Number(document.getElementById("feats-remaining").innerHTML);

            if (featsRemaining > 0) {
                featsRemaining -= 1;
                document.getElementById("feats-remaining").innerHTML = featsRemaining;
                this.character.numOfFeats += 1;
                alert("In order for the skills calculation to update properly, \n enter the skill name without spaces \n Example: UseRope");
                var featTarget = prompt("Which skill will this feat affect?");
                document.getElementById("feat-name-" + this.character.numOfFeats).innerHTML = (featName + " (" + featTarget + ") ");
                this.decodeSkillFocus(featTarget);
            } else {
                var confirmR = confirm("You have no more feats available. Suffer the wrath of your DM and continue anyway?");
                if (confirmR) {
                    featsRemaining -= 1;
                    document.getElementById("feats-remaining").innerHTML = featsRemaining;
                    this.character.numOfFeats += 1;
                    alert("In order for the skills calculation to update properly, \n enter the skill name without spaces \n Example: UseRope");
                    var featTarget = prompt("Which skill will this feat affect?");

                    document.getElementById("feat-name-" + this.character.numOfFeats).innerHTML = (featName + " (" + featTarget + ") ");

                    this.decodeSkillFocus(featTarget);
                }
            }
        }
    }

    /**
     *
     * @param featTarget
     */
    decodeSkillFocus(featTarget) {
        var skName = featTarget.toLowerCase().substring(0, 4);
        if (skName === "appr" || skName === "bala" || skName === "bluf" || skName === "clim" || skName === "conc" || skName === "craf" || skName === "deci" || skName === "dipl" || skName === "disa" || skName === "disg" || skName === "esca" || skName === "forg" || skName === "gath" || skName === "hand" || skName === "heal" || skName === "hide" || skName === "inti" || skName === "jump" || skName === "know" || skName === "list" || skName === "move" || skName === "open" || skName === "perf" || skName === "prof" || skName === "ride" || skName === "sear" || skName === "sens" || skName === "slei" || skName === "spel" || skName === "spot" || skName === "surv" || skName === "swim" || skName === "tumb" || skName === "usem" || skName === "user") {
            var msVariable = document.getElementById("ms-" + skName).innerHTML;
            if (msVariable === "-") {
                document.getElementById("ms-" + skName).innerHTML = 3;
            } else {
                var skillMisc = Number(document.getElementById("ms-" + skName).innerHTML);
                skillMisc += 3;
                document.getElementById("ms-" + skName).innerHTML = skillMisc;
            }
            // document.getElementById("ms-" + skName).innerHTML = 3;
        } else {
            var tryAgain = confirm(featTarget + " was not recognized. Press Okay to log it as a write-in. Press cancel to try again.");
            if (tryAgain) {
                // Log it as a write in.
                alert("The code to do this has not been written.");
            } else {
                this.skillFocus("Skill Focus");
            }
        }

    }

    /**
     *
     * @param featName
     */
    featUpdateSkill(featName) {
        var confirmF = confirm("Select " + featName + "?");
        if (confirmF) {
            var featsRemaining = Number(document.getElementById("feats-remaining").innerHTML);
            if (featsRemaining > 0) {
                featsRemaining -= 1;
                var confirmR = true;
                document.getElementById("feats-remaining").innerHTML = featsRemaining;
                this.character.numOfFeats += 1;
                document.getElementById("feat-name-" + this.character.numOfFeats).innerHTML = featName;
            } else {
                var confirmR = confirm("You have no more feats available. Suffer the wrath of your DM and continue anyway?");
                if (confirmR) {
                    featsRemaining -= 1;
                    document.getElementById("feats-remaining").innerHTML = featsRemaining;
                    this.character.numOfFeats += 1;
                    document.getElementById("feat-name-" + this.character.numOfFeats).innerHTML = featName;
                }
            }
        }

        if (confirmF === true && confirmR === true) {
            switch (featName) {
                case "Acrobatic":
                    this.featUpdateSkillTwin("jump");
                    this.featUpdateSkillTwin("tumb");
                    break;
                case "Agile":
                    this.featUpdateSkillTwin("bala");
                    this.featUpdateSkillTwin("esca");
                    break;
                case "Alertness":
                    this.featUpdateSkillTwin("list");
                    this.featUpdateSkillTwin("spot");
                    break;
                case "Animal Affinity":
                    this.featUpdateSkillTwin("hand");
                    this.featUpdateSkillTwin("ride");
                    break;
                case "Athletic":
                    this.featUpdateSkillTwin("clim");
                    this.featUpdateSkillTwin("swim");
                    break;
                case "Deceitful":
                    this.featUpdateSkillTwin("disg");
                    this.featUpdateSkillTwin("forg");
                    break;
                case "Deft Hands":
                    this.featUpdateSkillTwin("slei");
                    this.featUpdateSkillTwin("user");
                    break;
                case "Diligent":
                    this.featUpdateSkillTwin("appr");
                    this.featUpdateSkillTwin("deci");
                    break;
                case "Investigator":
                    this.featUpdateSkillTwin("gath");
                    this.featUpdateSkillTwin("sear");
                    break;
                case "Magical Aptitude":
                    this.featUpdateSkillTwin("spel");
                    this.featUpdateSkillTwin("usem");
                    break;
                case "Negotiator":
                    this.featUpdateSkillTwin("dipl");
                    this.featUpdateSkillTwin("sens");
                    break;
                case "Nimble Fingers":
                    this.featUpdateSkillTwin("disa");
                    this.featUpdateSkillTwin("open");
                    break;
                case "Persuasive":
                    this.featUpdateSkillTwin("bluf");
                    this.featUpdateSkillTwin("inti");
                    break;
                case "Self-Sufficient":
                    this.featUpdateSkillTwin("heal");
                    this.featUpdateSkillTwin("surv");
                    break;
                case "Stealthy":
                    this.featUpdateSkillTwin("hide");
                    this.featUpdateSkillTwin("move");
                    break;
                case "Weapon Finesse":
                    alert("Melee Attack Modifier has been changed to DEX.");
                    this.character.weaponFinesse = true;
                    break;
                case "Improved Initiative":
                    this.character.improvedInitiative = true;
                    break;
                case "Great Fortitude":
                    this.character.greatFortitude = true;
                    break;
                case "Iron Will":
                    this.character.ironWill = true;
                    break;
                case "Lightening Reflexes":
                    this.character.lighteningReflexes = true;
                    break;
                case "Toughness":
                    this.character.toughness = true;
                    break;

            }
            // document.getElementById("ms-clim").innerHTML = 2;
        }
    }

    /**
     *
     * @param featShortCode
     */
    featUpdateSkillTwin(featShortCode) {
        var featUpdateMiscMod = document.getElementById("ms-" + featShortCode).innerHTML;
        if (featUpdateMiscMod === "-") {
            document.getElementById("ms-" + featShortCode).innerHTML = 2;
        } else {
            featUpdateMiscMod = Number(featUpdateMiscMod);
            featUpdateMiscMod += 2;
            document.getElementById("ms-jump").innerHTML = featUpdateMiscMod;
        }
    }

    /**
     *
     */
    populateCharacterSheet() {
        this.navigate("print-sheets");
        var formName = document.getElementById("form-name").value;
        var formPlayer = document.getElementById("form-player").value;
        var formAlignment = document.getElementById("form-alignment").value;

        document.getElementById("print-eyes").innerHTML = document.getElementById("form-eyes").value;
        document.getElementById("print-hair").innerHTML = document.getElementById("form-hair").value;
        document.getElementById("print-height").innerHTML = document.getElementById("form-height").value;
        document.getElementById("print-weight").innerHTML = document.getElementById("form-weight").value;
        document.getElementById("print-skin").innerHTML = document.getElementById("form-skin").value;
        document.getElementById("print-handedness").innerHTML = document.getElementById("form-handedness").value;
        document.getElementById("print-age").innerHTML = document.getElementById("form-age").value;
        document.getElementById("print-gender").innerHTML = document.getElementById("form-gender").value;

        document.getElementById("print-appearance").innerHTML = document.getElementById("form-appearance").value;
        document.getElementById("print-personality").innerHTML = document.getElementById("form-personality").value;
        document.getElementById("print-quote").innerHTML = document.getElementById("form-quote").value;
        document.getElementById("print-objective").innerHTML = document.getElementById("form-objective").value;
        document.getElementById("print-history").innerHTML = document.getElementById("form-history").value;
        document.getElementById("print-allies-enemies").innerHTML = document.getElementById("form-allies-enemies").value;
        document.getElementById("print-ancestry").innerHTML = document.getElementById("form-ancestry").value;
        document.getElementById("print-other-info").innerHTML = document.getElementById("form-other-info").value;

        if (this.character.numOfFeats > 0) {
            if (this.character.numOfFeats !== 0) {
                for (let i = 1; i < (this.character.numOfFeats + 1); i++) {
                    document.getElementById("print-feat-" + i).innerHTML = document.getElementById("feat-name-" + i).innerHTML;
                }
            }
        }

        if (window.itemPurchaseNo > 0) {
            if (window.itemPurchaseNo !== 0) {
                for (let i = 1; i < (window.itemPurchaseNo + 1); i++) {
                    document.getElementById("print-item-" + i).innerHTML = document.getElementById("item-purchase-no-" + i).innerHTML;
                }
            }
        }

        if (this.character.small) {
            document.getElementById("print-size-bonus").innerHTML = "+1";
        }

        // document.getElementById("print-appearance").innerHTML = formAppearance ;
        // document.getElementById("print-name").innerHTML = formName ;
        // document.getElementById("print-player").innerHTML = formPlayer ;

        var list = document.getElementsByClassName("print-name");
        for (let i = 0; i < list.length; i++) {
            list[i].innerHTML = (formName);
        }

        var list = document.getElementsByClassName("print-player");
        for (let i = 0; i < list.length; i++) {
            list[i].innerHTML = (formPlayer);
        }

        var list = document.getElementsByClassName("print-race");
        for (let i = 0; i < list.length; i++) {
            list[i].innerHTML = (this.character.selRace);
        }

        var list = document.getElementsByClassName("print-class");
        for (let i = 0; i < list.length; i++) {
            list[i].innerHTML = (this.character.selClass);
        }

        document.getElementById("print-alignment").innerHTML = formAlignment;
        document.getElementById("print-class").innerHTML = this.character.selClass;
        document.getElementById("print-level").innerHTML = this.character.levelAdvance;
        document.getElementById("print-experience").innerHTML = (500 * (this.character.levelAdvance - 1) * this.character.levelAdvance);
        document.getElementById("print-levelup").innerHTML = (500 * (this.character.levelAdvance) * (this.character.levelAdvance + 1));
        document.getElementById("print-ab-str").innerHTML = this.character.strAttr;
        document.getElementById("print-ab-dex").innerHTML = this.character.dexAttr;
        document.getElementById("print-ab-con").innerHTML = this.character.conAttr;
        document.getElementById("print-ab-wis").innerHTML = this.character.wisAttr;
        document.getElementById("print-ab-int").innerHTML = this.character.intAttr;
        document.getElementById("print-ab-cha").innerHTML = this.character.chaAttr;
        document.getElementById("print-sav-for").innerHTML = this.character.forSave;
        document.getElementById("print-sav-ref").innerHTML = this.character.refSave;
        document.getElementById("print-sav-wil").innerHTML = this.character.wilSave;

        if (this.character.greatFortitude) {
            document.getElementById("print-sav-for-tot").innerHTML = (this.character.forSave + this.character.conMod + 2);
            document.getElementById("print-sav-for-misc").innerHTML = 2;
        } else {
            document.getElementById("print-sav-for-tot").innerHTML = (this.character.forSave + this.character.conMod);
        }

        if (this.character.ironWill) {
            document.getElementById("print-sav-wil-tot").innerHTML = (this.character.wilSave + this.character.wisMod + 2);
            document.getElementById("print-sav-wil-misc").innerHTML = 2;
        } else {
            document.getElementById("print-sav-wil-tot").innerHTML = (this.character.wilSave + this.character.wisMod);
        }

        if (this.character.lighteningReflexes) {
            document.getElementById("print-sav-ref-tot").innerHTML = (this.character.refSave + this.character.dexMod + 2);
            document.getElementById("print-sav-ref-misc").innerHTML = 2;
        } else {
            document.getElementById("print-sav-ref-tot").innerHTML = (this.character.refSave + this.character.dexMod);
        }

        if (this.character.toughness) {
            document.getElementById("hit-points").innerHTML = (this.character.hitPoints + 3);
        } else {
            document.getElementById("hit-points").innerHTML = this.character.hitPoints;
        }

        var listStr = document.getElementsByClassName("print-mod-str");
        for (let i = 0; i < listStr.length; i++) {
            listStr[i].innerHTML = ("+" + this.character.strMod);
        }

        var listDex = document.getElementsByClassName("print-mod-dex");
        for (let i = 0; i < listDex.length; i++) {
            listDex[i].innerHTML = ("+" + this.character.dexMod);
        }

        var listCon = document.getElementsByClassName("print-mod-con");
        for (let i = 0; i < listCon.length; i++) {
            listCon[i].innerHTML = ("+" + this.character.conMod);
        }
        var listWis = document.getElementsByClassName("print-mod-wis");
        for (let i = 0; i < listWis.length; i++) {
            listWis[i].innerHTML = ("+" + this.character.wisMod);
        }
        var listInt = document.getElementsByClassName("print-mod-int");
        for (let i = 0; i < listInt.length; i++) {
            listInt[i].innerHTML = ("+" + this.character.intMod);
        }
        var listCha = document.getElementsByClassName("print-mod-cha");
        for (let i = 0; i < listCha.length; i++) {
            listCha[i].innerHTML = ("+" + this.character.chaMod);
        }

        var listBab = document.getElementsByClassName("print-bab-one");
        for (let i = 0; i < listBab.length; i++) {
            listBab[i].innerHTML = ("+" + this.character.baseAttackBonus);
        }
        if (this.character.levelAdvance > 5) {
            var listBab = document.getElementsByClassName("print-bab-two");
            for (let i = 0; i < listBab.length; i++) {
                listBab[i].innerHTML = ("+" + this.character.baseAttackBonus2);
            }
        }
        if (this.levelAdvance > 10) {
            var listBab = document.getElementsByClassName("print-bab-three");
            for (let i = 0; i < listBab.length; i++) {
                listBab[i].innerHTML = ("+" + this.character.baseAttackBonus3);
            }
        }
        if (this.character.levelAdvance > 15) {
            var listBab = document.getElementsByClassName("print-bab-four");
            for (let i = 0; i < listBab.length; i++) {
                listBab[i].innerHTML = ("+" + this.character.baseAttackBonus4);
            }
        }


        if (this.character.weaponFinesse === true) {
            document.getElementById("melee-attack-mod-title").innerHTML = ("DEX<br>MODIFIER");
            document.getElementById("melee-attack-mod").innerHTML = ("+" + this.character.dexMod);
            document.getElementById("print-attack-first-one").innerHTML = (this.character.baseAttackBonus + this.character.dexMod);
            if (this.character.small) {
                document.getElementById("print-attack-first-one").innerHTML = (this.character.baseAttackBonus + this.character.dexMod + 1);
            }
        } else {
            document.getElementById("print-attack-first-one").innerHTML = (this.character.baseAttackBonus + this.character.strMod);
            document.getElementById("melee-attack-mod").innerHTML = this.character.strMod;
            if (this.character.small) {
                document.getElementById("print-attack-first-one").innerHTML = (this.character.baseAttackBonus + this.character.strMod + 1);
            }
        }

        document.getElementById("print-ranged-first-one").innerHTML = (this.character.baseAttackBonus + this.character.dexMod);
        document.getElementById("print-grapple-tot").innerHTML = (this.character.baseAttackBonus + this.character.strMod);

        if (this.character.small) {
            document.getElementById("print-attack-first-one").innerHTML = (this.character.baseAttackBonus + this.character.strMod + 1);
            document.getElementById("print-grapple-tot").innerHTML = (this.character.baseAttackBonus + this.character.strMod + 1);
        }

        if (this.character.improvedInitiative === true) {
            window.iniMiscMod = 4; // This is so it can be modified later if need be.
            document.getElementById("print-ini-misc").innerHTML = window.iniMiscMod;
            document.getElementById("print-ini-tot").innerHTML = (window.iniMiscMod + this.character.dexMod);
        } else {
            document.getElementById("print-ini-tot").innerHTML = this.character.dexMod;
        }

        // Now watch as I print all the skill totals
        var skillsList = ["appr", "bala", "bluf", "clim", "conc", "craf", "deci", "dipl", "disa", "disg", "esca", "forg", "gath", "hand", "heal", "hide", "inti", "jump", "know", "list", "move", "open", "perf", "prof", "ride", "sear", "sens", "slei", "spel", "spot", "surv", "swim", "tumb", "usem", "user"];
        var untrained = [true, true, true, true, true, true, false, true, false, true, true, true, true, false, true, true, true, true, false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, false, true];
        for (let i = 0; i < skillsList.length; i++) {
            if (untrained[i] === true) {
                document.getElementById("pr-" + skillsList[i]).innerHTML = document.getElementById("t-" + skillsList[i]).innerHTML;
            } else if ((window["in" + skillsList[i]]) > 0) {
                document.getElementById("pr-" + skillsList[i]).innerHTML = document.getElementById("t-" + skillsList[i]).innerHTML;
            } else {
                document.getElementById("pr-" + skillsList[i]).innerHTML = " ";
            }
        }

        if (document.getElementById("in_craf").value !== 0) {
            document.getElementById("print-craft-title").innerHTML = ("Craft: " + document.getElementById("wrin-craft").value);
        }
        if (document.getElementById("in_know").value !== 0) {
            document.getElementById("print-knowledge-title").innerHTML = ("Knowledge: " + document.getElementById("wrin-knowledge").value);
        }
        if (document.getElementById("in_perf").value !== 0) {
            document.getElementById("print-perform-title").innerHTML = ("Perform: " + document.getElementById("wrin-perform").value);
        }
        if (document.getElementById("in_prof").value !== 0) {
            document.getElementById("print-profession-title").innerHTML = ("Profession: " + document.getElementById("wrin-profession").value);
        }

        this.calculateCarryingCapacity(this.character.strAttr);

        if (this.inventory.weaponSlotOne) {
            // alert("it found it true");
            document.getElementById("pr-w-s1-name").innerHTML = this.inventory.wSlotOne.wName;
            document.getElementById("pr-w-s1-weight").innerHTML = this.inventory.wSlotOne.iWeight;
            document.getElementById("pr-w-s1-dmg").innerHTML = this.inventory.wSlotOne.damage;
            document.getElementById("pr-w-s1-crit").innerHTML = this.inventory.wSlotOne.critical;
            document.getElementById("pr-w-s1-rang").innerHTML = this.inventory.wSlotOne.range;
            document.getElementById("pr-w-s1-type").innerHTML = this.inventory.wSlotOne.wType;
            document.getElementById("pr-w-s1-size").innerHTML = this.inventory.wSlotOne.wSize;
            document.getElementById("pr-w-s1-reach").innerHTML = this.inventory.wSlotOne.wReach;
            document.getElementById("pr-w-s1-hardn").innerHTML = this.inventory.wSlotOne.hardness;
            document.getElementById("pr-w-s1-hp").innerHTML = this.inventory.wSlotOne.hitPoints;
            document.getElementById("pr-w-s1-saves").innerHTML = this.inventory.wSlotOne.wSaves;
            document.getElementById("pr-w-s1-notes").innerHTML = this.inventory.wSlotOne.wNotes;
            document.getElementById("pr-w-s1-atkbonus").innerHTML = this.inventory.wSlotOne.wBonus;
        }

        if (this.inventory.weaponSlotTwo) {
            // alert("it found TWO true");
            document.getElementById("weapon-slot-two").style.display = "block";
            document.getElementById("pr-w-s2-name").innerHTML = this.inventory.wSlotTwo.wName;
            document.getElementById("pr-w-s2-weight").innerHTML = this.inventory.wSlotTwo.iWeight;
            document.getElementById("pr-w-s2-dmg").innerHTML = this.inventory.wSlotTwo.damage;
            document.getElementById("pr-w-s2-crit").innerHTML = this.inventory.wSlotTwo.critical;
            document.getElementById("pr-w-s2-rang").innerHTML = this.inventory.wSlotTwo.range;
            document.getElementById("pr-w-s2-type").innerHTML = this.inventory.wSlotTwo.wType;
            document.getElementById("pr-w-s2-size").innerHTML = this.inventory.wSlotTwo.wSize;
            document.getElementById("pr-w-s2-reach").innerHTML = this.inventory.wSlotTwo.wReach;
            document.getElementById("pr-w-s2-hardn").innerHTML = this.inventory.wSlotTwo.hardness;
            document.getElementById("pr-w-s2-hp").innerHTML = this.inventory.wSlotTwo.hitPoints;
            document.getElementById("pr-w-s2-saves").innerHTML = this.inventory.wSlotTwo.wSaves;
            document.getElementById("pr-w-s2-notes").innerHTML = this.inventory.wSlotTwo.wNotes;
            document.getElementById("pr-w-s2-atkbonus").innerHTML = this.inventory.wSlotTwo.wBonus;
        }

        if (this.inventory.weaponSlotThree) {
            // alert("it found Three true");
            document.getElementById("weapon-slot-thr").style.display = "block";
            document.getElementById("pr-w-s3-name").innerHTML = this.inventory.wSlotThree.wName;
            document.getElementById("pr-w-s3-weight").innerHTML = this.inventory.wSlotThree.iWeight;
            document.getElementById("pr-w-s3-dmg").innerHTML = this.inventory.wSlotThree.damage;
            document.getElementById("pr-w-s3-crit").innerHTML = this.inventory.wSlotThree.critical;
            document.getElementById("pr-w-s3-rang").innerHTML = this.inventory.wSlotThree.range;
            document.getElementById("pr-w-s3-type").innerHTML = this.inventory.wSlotThree.wType;
            document.getElementById("pr-w-s3-size").innerHTML = this.inventory.wSlotThree.wSize;
            document.getElementById("pr-w-s3-reach").innerHTML = this.inventory.wSlotThree.wReach;
            document.getElementById("pr-w-s3-hardn").innerHTML = this.inventory.wSlotThree.hardness;
            document.getElementById("pr-w-s3-hp").innerHTML = this.inventory.wSlotThree.hitPoints;
            document.getElementById("pr-w-s3-saves").innerHTML = this.inventory.wSlotThree.wSaves;
            document.getElementById("pr-w-s3-notes").innerHTML = this.inventory.wSlotThree.wNotes;
            document.getElementById("pr-w-s3-atkbonus").innerHTML = this.inventory.wSlotThree.wBonus;
        }

        if (this.inventory.armorSlot) {
            document.getElementById("pr-armor-name").innerHTML = this.inventory.aSlot.aName;
            document.getElementById("pr-armor-weight").innerHTML = this.inventory.aSlot.iWeight;
            document.getElementById("pr-armor-ar-bonus").innerHTML = this.inventory.aSlot.arBonus;
            document.getElementById("pr-armor-m-dex").innerHTML = this.inventory.aSlot.mDex;
            document.getElementById("pr-armor-check").innerHTML = this.inventory.aSlot.check;
            document.getElementById("pr-armor-sp-fail").innerHTML = this.inventory.aSlot.spFail;
            document.getElementById("pr-armor-max-sp").innerHTML = this.inventory.aSlot.maxSp;
            document.getElementById("pr-armor-hardness").innerHTML = this.inventory.aSlot.hardness;
            document.getElementById("pr-armor-hit-points").innerHTML = this.inventory.aSlot.hitPoints;
            document.getElementById("pr-armor-a-saves").innerHTML = this.inventory.aSlot.aSaves;
            document.getElementById("pr-armor-donning").innerHTML = this.inventory.aSlot.donning;
        }

        if (this.inventory.sSlot) {
            document.getElementById("armor-slot-two").style.display = "block";
            document.getElementById("pr-shield-name").innerHTML = this.inventory.sSlot.shieldName;
            document.getElementById("pr-shield-weight").innerHTML = this.inventory.sSlot.iWeight;
            document.getElementById("pr-shield-ar-bonus").innerHTML = this.inventory.sSlot.arBonus;
            document.getElementById("pr-shield-m-dex").innerHTML = this.inventory.sSlot.mDex;
            document.getElementById("pr-shield-check").innerHTML = this.inventory.sSlot.check;
            document.getElementById("pr-shield-sp-fail").innerHTML = this.inventory.sSlot.spFail;
            document.getElementById("pr-shield-max-sp").innerHTML = this.inventory.sSlot.maxSp;
            document.getElementById("pr-shield-hardness").innerHTML = this.inventory.sSlot.hardness;
            document.getElementById("pr-shield-hit-points").innerHTML = this.inventory.sSlot.hitPoints;
            document.getElementById("pr-shield-saves").innerHTML = this.inventory.sSlot.shieldSaves;
            document.getElementById("pr-shield-donning").innerHTML = this.inventory.sSlot.donning;
        }

        // Now Look in the weapons slots for ranged weapons, and print the appropriate ammo in the box, along with Qty purchased.
        // alert( Number(document.getElementById("qty-Arrows").innerHTML) );
        for (let i = 1; i < 4; i++) {
            var nameWeapon = document.getElementById("pr-w-s" + i + "-name").innerHTML;
            if (nameWeapon === "Longbow" || nameWeapon === "Shortbow" || nameWeapon === "Composite Longbow" || nameWeapon === "Composite Shortbow") {
                document.getElementById("pr-w-s" + i + "-ammo").innerHTML = "Arrows | QTY: " + document.getElementById("qty-Arrows").innerHTML;
            }
        }

        for (let i = 1; i < 4; i++) {
            var nameWeapon = document.getElementById("pr-w-s" + i + "-name").innerHTML;
            if (nameWeapon === "Heavy Crossbow" || nameWeapon === "Light Crossbow" || nameWeapon === "Hand Crossbow" || nameWeapon === "Heavy Repeating Crossbow" || nameWeapon === "Light Repeating Crossbow") {
                document.getElementById("pr-w-s" + i + "-ammo").innerHTML = "Bolts | QTY: " + document.getElementById("qty-Bolts").innerHTML;
            }
        }

        var whichCons = ["Ration", "Caltrops", "Canvas", "Firewood", "Rope-Hemp", "Rope-Silk", "Arrows", "Bolts", "Bullets", "Torch"];
        var whichUnit = [" Day", " Bag", " Sqyd", "lb", "ft", "ft", " ", " ", " ", " "];
        var whichName = ["Trail Ration", "Caltrops", "Canvas", "Firewood", "Hemp Rope", "Silk Rope", "Arrows", "Bolts", "Sling Bullets", "Torch"];
        var skipper = 0;

        for (let i = 0; i < whichCons.length; i++) {
            var active = 0;
            if (Number(document.getElementById("qty-" + whichCons[i]).innerHTML) > 0) {
                var active = "-Active";
            }

            switch (whichCons[i] + active) {
                case "Ration-Active":
                case "Caltrops-Active":
                case "Canvas-Active":
                case "Firewood-Active":
                case "Rope-Hemp-Active":
                case "Rope-Silk-Active":
                case "Arrows-Active":
                case "Bolts-Active":
                case "Bullets-Active":
                case "Torch-Active":
                    document.getElementById("pr-cons-name-" + (i + 1 + skipper)).innerHTML = whichName[i];
                    document.getElementById("pr-cons-qty-" + (i + 1 + skipper)).innerHTML = Number(document.getElementById("qty-" + whichCons[i]).innerHTML) + whichUnit[i];
                    break;
                default:
                    // Yeah, this is weird, but it basically tells the loop to skip blank cases, instead of printing blank values onto the sheet.
                    skipper -= 1;
                    break;
            }
        }

        this.printLeftoverMoney();
        this.calculateArmorClass();
        // alert("Character Sheet successfully populated.");
    }

    /**
     *
     * @param strengthScore
     */
    calculateCarryingCapacity(strengthScore) {
        if (strengthScore <= 10) {
            this.character.heavyLoad = Math.floor(strengthScore * 10);
        } else if (strengthScore <= 20) {
            this.character.heavyLoad = Math.floor(25 * Math.pow(2, (0.2 * strengthScore)));
        } else {
            alert("The code for this strength condition has not been written.");
            this.character.heavyLoad = 6;
        }
        this.character.mediumLoad = Math.floor((2 * this.character.heavyLoad) / 3);
        this.character.lightLoad = Math.floor(this.character.heavyLoad / 3);

        document.getElementById("print-total-weight").innerHTML = document.getElementById("total-weight").innerHTML;
        document.getElementById("print-heavy-load").innerHTML = this.character.heavyLoad;
        document.getElementById("print-medium-load").innerHTML = this.character.mediumLoad;
        document.getElementById("print-light-load").innerHTML = this.character.lightLoad;
        document.getElementById("print-lift-load").innerHTML = (this.character.heavyLoad * 2);
        document.getElementById("print-push-load").innerHTML = (this.character.heavyLoad * 5);

    }

    /**
     *
     */
    printLeftoverMoney() {
        var money = document.getElementById("copper-remaining").innerHTML;
        var gold = Math.floor(money * 0.01);
        var silver = (Math.floor(money * 0.1)) - (gold * 10);
        var copper = (money) - (gold * 100) - (silver * 10);
        document.getElementById("print-coins-gold").innerHTML = gold;
        document.getElementById("print-coins-silver").innerHTML = silver;
        document.getElementById("print-coins-copper").innerHTML = copper;
    }

    /**
     *
     */
    calculateArmorClass() {
        var armor = Number(document.getElementById("print-armor-bonus").innerHTML);
        var shield = Number(document.getElementById("print-shield-bonus").innerHTML);
        // add other variables as natural armor, misc, etc become available.
        var natural = 0;
        if (this.character.small) {
            var size = 1;
        } else {
            var size = 0;
        }
        var defl = 0;
        var misc = 0;

        document.getElementById("print-ac-tot").innerHTML = 10 + this.character.dexMod + armor + shield + natural + size + defl + misc;
        document.getElementById("print-ff-tot").innerHTML = 10 + armor + shield + natural + size + defl + misc;
        document.getElementById("print-to-tot").innerHTML = 10 + this.character.dexMod + size + defl + misc;
    }

    /**
     *
     */
    testWriteInSkills() {
        if (document.getElementById("in_craf").value != 0) {
            document.getElementById("print-craft-title").innerHTML = ("Craft: " + document.getElementById("wrin-craft").value);
        }
    }
}