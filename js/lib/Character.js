class Character {

    /**
     *
     * @param {CharacterGen} characterGen
     * @returns {Character}
     */
    constructor(characterGen) {
        this.generator = characterGen;

        //align with booleans below --appr---	bala---	bluf---	clim---	conc---	craf---	deci---	dipl---	disa---	disg---	esca---	forg---	gath---	hand---	heal---	hide---	inti---	jump---	know---	list---	move---	open---	perf---	prof---	ride---	sear---	sens---	slei---	spel---	spot---	surv---	swim---	tumb---	usem---	user
        this.allSkillsBool = [false, false, false, true, false, true, false, false, false, false, false, false, false, true, false, false, true, true, false, true, false, false, false, false, true, false, false, false, false, false, true, true, false, false, false];
        this.allSkillsString = ["appr", "bala", "bluf", "clim", "conc", "craf", "deci", "dipl", "disa", "disg", "esca", "forg", "gath", "hand", "heal", "hide", "inti", "jump", "know", "list", "move", "open", "perf", "prof", "ride", "sear", "sens", "slei", "spel", "spot", "surv", "swim", "tumb", "usem", "user"];

        this.baseSkillPoints = 0;
        this.darkVision = false;
        this.hitDie = 0;
        this.hitPoints = 0;
        this.levelAdvance = 0;
        this.small = false;
        this.lowLight = false;
        this.selClass = 0;
        this.selRace = 0;

        this.skPts = 0;
        this.skillPointsSpent = 0;

        this.startingFeats = 1;
        this.numOfFeats = 0;

        this.weaponFinesse = false;
        this.improvedInitiative = false;
        this.greatFortitude = false;
        this.ironWill = false;
        this.lighteningReflexes = false;
        this.toughness = false;

        this.grapple = false;
        this.fighterBonusFeat = false;
        this.stunningFist = false;
        this.track = false;

        this.heavyLoad = 0;
        this.mediumLoad = 0;
        this.lightLoad = 0;

        this.forSave = 0;
        this.refSave = 0;
        this.wilSave = 0;

        this.baseAttackBonus = 0;
        this.baseAttackBonus2 = 0;
        this.baseAttackBonus3 = 0;
        this.baseAttackBonus4 = 0;

        this.strAttr = 0;
        this.strMod = 0;

        this.dexAttr = 0;
        this.dexMod = 0;

        this.conAttr = 0;
        this.conMod = 0;

        this.wisAttr = 0;
        this.wisMod = 0;

        this.intAttr = 0;
        this.intMod = 0;

        this.chaAttr = 0;
        this.chaMod = 0;

        this.attrOne = '';
        this.attrTwo = '';
        this.attrThree = '';
        this.attrFour = '';
        this.attrFive = '';
        this.attrSix = '';

        this.nameAttrOne = '';
        this.nameAttrTwo = '';
        this.nameAttrThree = '';
        this.nameAttrFour = '';
        this.nameAttrFive = '';
        this.nameAttrSix = '';

        return this;
    }

    /**
     *
     */
    addAbModifiers() {
        // alert("function begin");
        var listStr = document.getElementsByClassName("am-str");
        for (let i = 0; i < listStr.length; i++) {
            listStr[i].innerHTML = ("+ " + this.strMod);
        }
        var listDex = document.getElementsByClassName("am-dex");
        for (let i = 0; i < listDex.length; i++) {
            listDex[i].innerHTML = ("+ " + this.dexMod);
        }
        var listCon = document.getElementsByClassName("am-con");
        for (let i = 0; i < listCon.length; i++) {
            listCon[i].innerHTML = ("+ " + this.conMod);
        }
        var listWis = document.getElementsByClassName("am-wis");
        for (let i = 0; i < listWis.length; i++) {
            listWis[i].innerHTML = ("+ " + this.wisMod);
        }
        var listInt = document.getElementsByClassName("am-int");
        for (let i = 0; i < listInt.length; i++) {
            listInt[i].innerHTML = ("+ " + this.intMod);
        }
        var listCha = document.getElementsByClassName("am-cha");
        for (let i = 0; i < listCha.length; i++) {
            listCha[i].innerHTML = ("+ " + this.chaMod);
        }
    }

    /**
     *
     * @param whichLevel
     */
    addAbilityScore(whichLevel) {
        var whichAbility = document.getElementById("select-ability-score-" + Number(whichLevel)).value;
        switch (whichAbility) {
            case "str":
                this.strAttr += 1;
                break;
            case "dex":
                this.dexAttr += 1;
                break;
            case "con":
                this.conAttr += 1;
                break;
            case "wis":
                this.wisAttr += 1;
                break;
            case "int":
                this.intAttr += 1;
                break;
            case "cha":
                this.chaAttr += 1;
                break;
        }

        for (let i = (whichLevel * 4); i < this.levelAdvance; i++) {
            if (i <= (whichLevel * 4 + 3)) { // Only levels affected by THIS (but not SUBSEQUENT) ability score increase
                var adtlHitPoints = (Math.floor(Math.random() * this.hitDie) + 1) + this.conMod;
                if (adtlHitPoints <= 0) {
                    this.hitPoints += 1;
                } else {
                    this.hitPoints += adtlHitPoints;
                }
                this.generator.skills.levelSkillPointIncrease();
            }
        }

        document.getElementById("final-" + whichAbility).innerHTML = window[whichAbility + "Attr"];
        this.updateAllModifiers();
        document.getElementById("final-" + whichAbility + "-mod").innerHTML = "+ " + window[whichAbility + "Mod"];
        var whichAbility = document.getElementById("handle-ability-score-" + Number(whichLevel)).style.display = "none";
    }

    /**
     *
     * @param {HTMLFormElement} form
     */
    assignAttributes(form) {
        // Take in all form values
        this.nameAttrOne = form.attrOne.value;
        this.nameAttrTwo = form.attrTwo.value;
        this.nameAttrThree = form.attrThr.value;
        this.nameAttrFour = form.attrFou.value;
        this.nameAttrFive = form.attrFiv.value;
        this.nameAttrSix = form.attrSix.value;

        // Store form values AND roll values (from above) in separate Arrays.
        var allAttrNames = [this.nameAttrOne, this.nameAttrTwo, this.nameAttrThree, this.nameAttrFour, this.nameAttrFive, this.nameAttrSix];
        var allAttrValus = [this.attrOne, this.attrTwo, this.attrThree, this.attrFour, this.attrFive, this.attrSix];

        // ^ NOTE it's Valus NOT Values.

        // Set to zero.
        this.strAttr = 0;
        this.dexAttr = 0;
        this.conAttr = 0;
        this.wisAttr = 0;
        this.intAttr = 0;
        this.chaAttr = 0;

        // Run through each NAME value and assign it the corresponding NUMBER value, so attributes are variables with number values.
        for (let i = 0; i < 6; i++) {
            switch (allAttrNames[i]) {
                case "STR":
                    this.strAttr = allAttrValus[i];
                    break;
                case "DEX":
                    this.dexAttr = allAttrValus[i];
                    break;
                case "CON":
                    this.conAttr = allAttrValus[i];
                    break;
                case "WIS":
                    this.wisAttr = allAttrValus[i];
                    break;
                case "INT":
                    this.intAttr = allAttrValus[i];
                    break;
                case "CHA":
                    this.chaAttr = allAttrValus[i];
                    break;
                default:
                    alert("An error occurred. Verify that all Attributes are Allocated.");
                    i = 6; // Exit the function :P
                    break;
            }
        }

        // Reject Errors, and prompt for confirm, else, throw out of the function to restart.
        if (this.strAttr !== 0 && this.dexAttr !== 0 && this.conAttr !== 0 && this.wisAttr !== 0 && this.intAttr !== 0 && this.chaAttr !== 0) {
            this.updateAllModifiers(); // Calculates all Ability Modifiers and Logs in Global Variables
            this.updateMscSkModifiers(); // Shows all Racial Skill Misc Modifiers (and other racial bonuses) and re-calculates ability modifiers.
            this.addAbModifiers(); // Displays all Ability Modifiers in Skills Section
            this.generator.skills.showClassSkills(); // Calculates Skill Points. Shows all Class Skills
            this.initiatePhaseTwo();
            this.updateAllSavingThrows(); // Calculate Saving Throws and Base Attack Bonus. They Don't Display immediately.
        } else {
            alert("An error occurred. Verify that no Attributes are Duplicated.");
        }
    }

    /**
     *
     * @param {HTMLFormElement} form
     */
    assignAttribMan(form) {
        this.strAttr = Number(form.inpstrAttr.value);
        this.dexAttr = Number(form.inpdexAttr.value);
        this.conAttr = Number(form.inpconAttr.value);
        this.wisAttr = Number(form.inpwisAttr.value);
        this.intAttr = Number(form.inpintAttr.value);
        this.chaAttr = Number(form.inpchaAttr.value);

        this.updateAllModifiers(); // Calculates all Ability Modifiers and Logs in Global Variables
        this.updateMscSkModifiers(); // Shows all Racial Skill Misc Modifiers (and other racial bonuses) and re-calculates ability modifiers.
        this.addAbModifiers(); // Displays all Ability Modifiers in Skills Section
        this.generator.skills.showClassSkills(); // Calculates Skill Points. Shows all Class Skills
        this.initiatePhaseTwo();
        this.updateAllSavingThrows(); // Calculate Saving Throws and Base Attack Bonus. They Don't Display immediately.
    }

    /**
     *
     */
    calculateArmorClass() {
        var armor = Number(document.getElementById("print-armor-bonus").innerHTML);
        var shield = Number(document.getElementById("print-shield-bonus").innerHTML);
        // add other variables as natural armor, misc, etc become available.
        var natural = 0;
        if (this.small) {
            var size = 1;
        } else {
            var size = 0;
        }
        var defl = 0;
        var misc = 0;

        document.getElementById("print-ac-tot").innerHTML = 10 + this.dexMod + armor + shield + natural + size + defl + misc;
        document.getElementById("print-ff-tot").innerHTML = 10 + armor + shield + natural + size + defl + misc;
        document.getElementById("print-to-tot").innerHTML = 10 + this.dexMod + size + defl + misc;
    }

    /**
     *
     * @param strengthScore
     */
    calculateCarryingCapacity(strengthScore) {
        if (strengthScore <= 10) {
            this.heavyLoad = Math.floor(strengthScore * 10);
        } else if (strengthScore <= 20) {
            this.heavyLoad = Math.floor(25 * Math.pow(2, (0.2 * strengthScore)));
        } else {
            alert("The code for this strength condition has not been written.");
            this.heavyLoad = 6;
        }
        this.mediumLoad = Math.floor((2 * this.heavyLoad) / 3);
        this.lightLoad = Math.floor(this.heavyLoad / 3);

        document.getElementById("print-total-weight").innerHTML = document.getElementById("total-weight").innerHTML;
        document.getElementById("print-heavy-load").innerHTML = this.heavyLoad;
        document.getElementById("print-medium-load").innerHTML = this.mediumLoad;
        document.getElementById("print-light-load").innerHTML = this.lightLoad;
        document.getElementById("print-lift-load").innerHTML = (this.heavyLoad * 2);
        document.getElementById("print-push-load").innerHTML = (this.heavyLoad * 5);

    }

    /**
     *
     * @param userClass
     */
    classSelect(userClass) {
        this.selClass = userClass.toUpperCase();
        if (this.selClass !== 0) {
            document.getElementById("show-class").innerHTML = "Current Class: " + this.selClass; // turn on display of Choice.
            document.getElementById("show-class-2").innerHTML = this.selClass;
            document.getElementById("dice-sys").style.display = "block";
        }

    }

    /**
     *
     */
    initiatePhaseTwo() {
        if (this.fighterBonusFeat) {
            this.startingFeats += 1;
            // var bonusFeat = document.getElementById("feats-remaining").innerHTML;
            // document.getElementById("feats-remaining").innerHTML = ( 1 + Number(bonusFeat) );
        }
        if (this.grapple) {
            this.numOfFeats += 1;
            document.getElementById("feat-name-" + this.numOfFeats).innerHTML = "Imp. Grapple";
        }
        if (this.stunningFist) {
            this.numOfFeats += 1;
            document.getElementById("feat-name-" + this.numOfFeats).innerHTML = "Stunning Fist";
        }
        if (this.track) {
            this.numOfFeats += 1;
            document.getElementById("feat-name-" + this.numOfFeats).innerHTML = "Track";
        }

        document.getElementById("apply-all").style.display = "none"; // disable to "prevent" cheating.
        document.getElementById("race-select").style.display = "none";
        document.getElementById("class-select").style.display = "none";
        document.getElementById("dice-sys").style.display = "none";
        this.levelAdvance = Number(document.getElementById("level-input").value);
        if (this.levelAdvance === 1) {
            document.getElementById("final-base-attributes").style.display = "block";
            document.getElementById("select-skills").style.display = "block";
        } else {
            document.getElementById("final-base-attributes").style.display = "block";
            document.getElementById("handle-level-adv").style.display = "block";
            document.getElementById("show-level").innerHTML = this.levelAdvance;

            var list = document.getElementsByClassName("sk-input");
            for (let i = 0; i < list.length; i++) {
                list[i].setAttribute("max", (this.levelAdvance + 3));
            }

            // This for loop handles everything, and iterates at each 4 level intervals, when ability score increases can affect results.
            // So heads up.
            for (let i = 2; i < (this.levelAdvance + 1); i++) {

                if ((i / 4) === Math.floor(i / 4)) {
                    document.getElementById("handle-ability-score-" + (i / 4)).style.display = "block";
                }
                if (i <= 3) { // Only levels unaffected by 1st ability score increase

                    var adtlHitPoints = (Math.floor(Math.random() * this.hitDie) + 1) + this.conMod;
                    if (adtlHitPoints <= 0) {
                        this.hitPoints += 1;
                    } else {
                        this.hitPoints += adtlHitPoints;
                    }
                    this.generator.skills.levelSkillPointIncrease();
                }

                if ((i / 3) === Math.floor(i / 3)) {
                    this.startingFeats += 1;
                }
            }
        }
    }

    /**
     *
     * @param userRace
     */
    raceSelect(userRace) {
        this.selRace = userRace.toUpperCase();
        if (this.selRace !== 0) {
            document.getElementById("show-race").innerHTML = "Current Race: " + this.selRace;
            document.getElementById("show-race-2").innerHTML = this.selRace;
            document.getElementById("class-source").style.display = "block";
        }

    }

    /**
     *
     */
    rollClassic() {
        var statValue = [0, 0, 0, 0, 0, 0];
        this.totalPoints = 0;

        for (let i = 0; i < 6; i++) {
            statValue[i] = Math.floor(Math.random() * 16 + 3);
            // document.getElementById("stat-val-" + (i + 1) ).innerHTML = statValue[i];
            document.getElementById("stat-label-" + (i + 1)).innerHTML = statValue[i];
            this.totalPoints += statValue[i];
        }

        this.attrOne = statValue[0];
        this.attrTwo = statValue[1];
        this.attrThr = statValue[2];
        this.attrFou = statValue[3];
        this.attrFiv = statValue[4];
        this.attrSix = statValue[5];


        // Displays total points
        document.getElementById("total-points").innerHTML = this.totalPoints;
        // Evaluates total points, assigns a value string and displays.
        if (this.totalPoints > 90) {
            document.getElementById("playability").innerHTML = "Jedi";
        } else if (this.totalPoints > 72) {
            document.getElementById("playability").innerHTML = "Strong";
        } else if (this.totalPoints > 54) {
            document.getElementById("playability").innerHTML = "Average";
        } else if (this.totalPoints > 36) {
            document.getElementById("playability").innerHTML = "Weak";
        } else {
            document.getElementById("playability").innerHTML = "Useless as Dirt";
        }
        this.generator.removeDieRollButtons();
    }

    /**
     *
     */
    rollHeroic() {
        var statValue = [0, 0, 0, 0, 0, 0];
        this.totalPoints = 0;

        for (let i = 0; i < 6; i++) {
            statValue[i] = Math.floor(Math.random() * 10 + 9);
            // document.getElementById("stat-val-" + (i + 1) ).innerHTML = statValue[i];
            document.getElementById("stat-label-" + (i + 1)).innerHTML = statValue[i];
            this.totalPoints += statValue[i];
        }
        this.attrOne = statValue[0];
        this.attrTwo = statValue[1];
        this.attrThr = statValue[2];
        this.attrFou = statValue[3];
        this.attrFiv = statValue[4];
        this.attrSix = statValue[5];

        document.getElementById("total-points").innerHTML = this.totalPoints;
        if (this.totalPoints > 90) {
            document.getElementById("playability").innerHTML = "Jedi";
        } else if (this.totalPoints > 72) {
            document.getElementById("playability").innerHTML = "Strong";
        } else if (this.totalPoints > 54) {
            document.getElementById("playability").innerHTML = "Average";
        } else if (this.totalPoints > 36) {
            document.getElementById("playability").innerHTML = "Weak";
        } else {
            document.getElementById("playability").innerHTML = "Useless as Dirt";
        }
        this.generator.removeDieRollButtons();
    }

    /**
     *
     */
    rollStandard() {
        var statValue = [0, 0, 0, 0, 0, 0];
        this.totalPoints = 0;

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
            this.totalPoints += statValue[i];
        }

        this.attrOne = statValue[0];
        this.attrTwo = statValue[1];
        this.attrThr = statValue[2];
        this.attrFou = statValue[3];
        this.attrFiv = statValue[4];
        this.attrSix = statValue[5];

        document.getElementById("total-points").innerHTML = this.totalPoints;
        if (this.totalPoints > 90) {
            document.getElementById("playability").innerHTML = "Jedi";
        } else if (this.totalPoints > 72) {
            document.getElementById("playability").innerHTML = "Strong";
        } else if (this.totalPoints > 54) {
            document.getElementById("playability").innerHTML = "Average";
        } else if (this.totalPoints > 36) {
            document.getElementById("playability").innerHTML = "Weak";
        } else {
            document.getElementById("playability").innerHTML = "Useless as Dirt";
        }
        this.generator.removeDieRollButtons();
    }

    /**
     *
     * @param {String} value
     */
    specialCases(value) {
        switch (value) {
            case "none":
                this.grapple = false;
                this.fighterBonusFeat = false;
                this.stunningFist = false;
                this.track = false;
                break;
            case "monk-option":
                document.getElementById("class-monk").style.display = "block";
                break;
            case "monk-close":
                document.getElementById("class-monk").style.display = "none";
                break;
            case "fighter-bf":
                this.fighterBonusFeat = true;
                this.grapple = false;
                this.stunningFist = false;
                this.track = false;
                break;
            case "grapple":
                this.grapple = true;
                this.fighterBonusFeat = false;
                this.stunningFist = false;
                this.track = false;
                break;
            case "stunningFist":
                this.stunningFist = true;
                this.grapple = false;
                this.fighterBonusFeat = false;
                this.track = false;
                break;
            case "track":
                this.track = true;
                this.fighterBonusFeat = false;
                this.grapple = false;
                this.stunningFist = false;
                break;
        }
    }

    /**
     *
     */
    updateAllModifiers() {
        this.strMod = Math.floor((this.strAttr - 10) / 2);
        this.dexMod = Math.floor((this.dexAttr - 10) / 2);
        this.conMod = Math.floor((this.conAttr - 10) / 2);
        this.wisMod = Math.floor((this.wisAttr - 10) / 2);
        this.intMod = Math.floor((this.intAttr - 10) / 2);
        this.chaMod = Math.floor((this.chaAttr - 10) / 2);
    }

    /**
     *
     */
    updateMscSkModifiers() {
        switch (this.selRace) {
            case "HUMAN":
                this.startingFeats += 1;
                // var bonusFeat = document.getElementById("feats-remaining").innerHTML;
                // document.getElementById("feats-remaining").innerHTML = ( 1 + Number(bonusFeat) );
                break;
            case "DWARF":
                // alert("CON + 2 (Dwarven Racial Trait)\nCHA - 2 (Dwarven Racial Trait)");
                this.conAttr += 2;
                this.chaAttr -= 2;
                this.updateAllModifiers();
                this.darkVision = true;
                break;
            case "ELF":
                // alert("DEX + 2 (Elven Racial Trait)\nCON - 2 (Elven Racial Trait)");
                this.dexAttr += 2;
                this.conAttr -= 2;
                this.updateAllModifiers();
                document.getElementById("ms-list").innerHTML = 2;
                document.getElementById("ms-sear").innerHTML = 2;
                document.getElementById("ms-spot").innerHTML = 2;
                this.lowLight = true;
                break;
            case "GNOME":
                // alert("CON + 2 (Gnome Racial Trait)\nSTR - 2 (Gnome Racial Trait)");
                this.conAttr += 2;
                this.strAttr -= 2;
                this.updateAllModifiers();
                document.getElementById("ms-list").innerHTML = 2;
                document.getElementById("ms-craf").innerHTML = 2;
                document.getElementById("ms-hide").innerHTML = 4;
                this.small = true;
                this.lowLight = true;
                break;
            case "HALF-ELF":
                // alert("DEX + 1 (Elven Racial Trait)\nCON - 1 (Elven Racial Trait)");
                document.getElementById("ms-list").innerHTML = 1;
                document.getElementById("ms-sear").innerHTML = 1;
                document.getElementById("ms-spot").innerHTML = 1;
                document.getElementById("ms-dipl").innerHTML = 2;
                document.getElementById("ms-gath").innerHTML = 2;
                this.lowLight = true;
                break;
            case "HALF-ORC":
                // alert("STR + 2 (Orcish Racial Trait)\nINT - 2 (Orcish Racial Trait)\nCHA - 2 (Orcish Racial Trait)");
                this.strAttr += 2;
                this.intAttr -= 2;
                this.chaAttr -= 2;
                this.updateAllModifiers();
                this.darkVision = true;
                break;
            case "HALFLING":
                // alert("DEX + 2 (Halfling Racial Trait)\nSTR - 2 (Halfling Racial Trait)");
                this.dexAttr += 2;
                this.strAttr -= 2;
                this.updateAllModifiers();
                document.getElementById("ms-clim").innerHTML = 2;
                document.getElementById("ms-jump").innerHTML = 2;
                document.getElementById("ms-move").innerHTML = 2;
                document.getElementById("ms-list").innerHTML = 2;
                document.getElementById("ms-hide").innerHTML = 4;
                this.small = true;
                break;
            case "NewBlankRace":
                // A placeholder for future racial additions.
                //
                // This is the first place (in order of execution) where the value of this.character.selRace affects subsequent calculations.
                //
                break;
        }

        // Now that the switch is done, and every score is in its final state, let's show them.
        document.getElementById("final-str").innerHTML = this.strAttr;
        document.getElementById("final-str-mod").innerHTML = ("+ " + this.strMod);
        document.getElementById("final-dex").innerHTML = this.dexAttr;
        document.getElementById("final-dex-mod").innerHTML = ("+ " + this.dexMod);
        document.getElementById("final-con").innerHTML = this.conAttr;
        document.getElementById("final-con-mod").innerHTML = ("+ " + this.conMod);
        document.getElementById("final-wis").innerHTML = this.wisAttr;
        document.getElementById("final-wis-mod").innerHTML = ("+ " + this.wisMod);
        document.getElementById("final-int").innerHTML = this.intAttr;
        document.getElementById("final-int-mod").innerHTML = ("+ " + this.intMod);
        document.getElementById("final-cha").innerHTML = this.chaAttr;
        document.getElementById("final-cha-mod").innerHTML = ("+ " + this.chaMod);
    }

    /**
     *
     */
    updateAllSavingThrows() {
        switch (this.selClass) {
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
     * @param fortSave
     * @param reflSave
     * @param willSave
     * @param baseAttack
     * @param hitDie
     */
    updateSavingThrows(fortSave, reflSave, willSave, baseAttack, hitDie) {
        this.forSave = (fortSave);
        this.refSave = (reflSave);
        this.wilSave = (willSave);
        // this.character.baseAttackBonus = baseAttack;
        switch (baseAttack) {
            case "G":
                this.baseAttackBonus = this.levelAdvance;
                this.baseAttackBonus2 = this.levelAdvance - 5;
                this.baseAttackBonus3 = this.levelAdvance - 10;
                this.baseAttackBonus4 = this.levelAdvance - 15;
                break;
            case "A":
                this.baseAttackBonus = Math.floor((this.levelAdvance + (this.levelAdvance / 2)) / 2);
                this.baseAttackBonus2 = this.baseAttackBonus - 5;
                this.baseAttackBonus3 = this.baseAttackBonus - 10;
                this.baseAttackBonus4 = this.baseAttackBonus - 15;
                break;
            case "P":
                this.baseAttackBonus = Math.floor(this.levelAdvance / 2);
                this.baseAttackBonus2 = this.baseAttackBonus - 5;
                this.baseAttackBonus3 = this.baseAttackBonus - 10;
                this.baseAttackBonus4 = this.baseAttackBonus - 15;
                break;
        }

        // alert("level: " + this.character.levelAdvance + "bab: " + this.character.baseAttackBonus);
        this.hitPoints = hitDie + this.conMod;
        if (this.hitPoints <= 0) {
            this.hitPoints = 1;
        }
        this.hitDie = hitDie;
        // alert( "Base Attack Bonus: +" + this.character.baseAttackBonus + "\nBase Saving Thows: \nFOR: +" + this.character.forSave + "\nREF: +" + this.character.refSave + "\nWIL: +" + this.character.wilSave + "\nHit Points: " + this.character.hitPoints );
    }

}