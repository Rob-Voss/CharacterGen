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

        this.class = 0;
        this.race = 0;

        this.hitDie = 0;
        this.hitPoints = 0;

        this.levelAdvance = 0;

        this.darkVision = false;
        this.lowLight = false;
        this.small = false;

        this.baseSkillPoints = 0;
        this.skillPoints = 0;
        this.skillPointsSpent = 0;

        this.startingFeats = 1;
        this.numberOfFeats = 0;

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

        this.fortitudeSave = 0;
        this.reflexSave = 0;
        this.willSave = 0;

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

        this.attributeOne = '';
        this.attributeTwo = '';
        this.attributeThree = '';
        this.attributeFour = '';
        this.attributeFive = '';
        this.attributeSix = '';

        this.nameAttributeOne = '';
        this.nameAttributeTwo = '';
        this.nameAttributeThree = '';
        this.nameAttributeFour = '';
        this.nameAttributeFive = '';
        this.nameAttributeSix = '';

        return this;
    }

    /**
     * Displays all Ability Modifiers in Skills Section
     */
    addAbilityModifiers() {
        let listStr = document.getElementsByClassName("am-str");
        for (let i = 0; i < listStr.length; i++) {
            listStr[i].innerHTML = (this.strMod < 0 ? "- " : "+ ") + this.strMod;
        }
        let listDex = document.getElementsByClassName("am-dex");
        for (let i = 0; i < listDex.length; i++) {
            listDex[i].innerHTML = (this.dexMod < 0 ? "- " : "+ ") + this.dexMod;
        }
        let listCon = document.getElementsByClassName("am-con");
        for (let i = 0; i < listCon.length; i++) {
            listCon[i].innerHTML = (this.conMod < 0 ? "- " : "+ ") + this.conMod;
        }
        let listWis = document.getElementsByClassName("am-wis");
        for (let i = 0; i < listWis.length; i++) {
            listWis[i].innerHTML = (this.wisMod < 0 ? "- " : "+ ") + this.wisMod;
        }
        let listInt = document.getElementsByClassName("am-int");
        for (let i = 0; i < listInt.length; i++) {
            listInt[i].innerHTML = (this.intMod < 0 ? "- " : "+ ") + this.intMod;
        }
        let listCha = document.getElementsByClassName("am-cha");
        for (let i = 0; i < listCha.length; i++) {
            listCha[i].innerHTML = (this.chaMod < 0 ? "- " : "+ ") + this.chaMod;
        }
    }

    /**
     *
     * @param {number} whichLevel
     */
    addAbilityScore(whichLevel) {
        let whichAbility = document.getElementById("select-ability-score-" + Number(whichLevel)).value;
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
                let additionalHitPoints = (Math.floor(Math.random() * this.hitDie) + 1) + this.conMod;
                this.hitPoints += (additionalHitPoints <= 0) ? 1 : additionalHitPoints;
                this.generator.skills.levelSkillPointIncrease();
            }
        }

        document.getElementById("final-" + whichAbility).innerHTML = window[whichAbility + "Attr"];
        this.updateAllModifiers();
        document.getElementById("final-" + whichAbility + "-mod").innerHTML = "+ " + window[whichAbility + "Mod"];
        document.getElementById("handle-ability-score-" + Number(whichLevel)).style.display = "none";
    }

    /**
     *
     * @param {HTMLFormElement} form
     */
    assignAttributes(form) {
        // Take in all form values
        this.nameAttributeOne = form.attrOne.value;
        this.nameAttributeTwo = form.attrTwo.value;
        this.nameAttributeThree = form.attrThr.value;
        this.nameAttributeFour = form.attrFou.value;
        this.nameAttributeFive = form.attrFiv.value;
        this.nameAttributeSix = form.attrSix.value;

        // Store form values AND roll values (from above) in separate Arrays.
        let allAttributeNames = [this.nameAttributeOne, this.nameAttributeTwo, this.nameAttributeThree, this.nameAttributeFour, this.nameAttributeFive, this.nameAttributeSix],
            allAttributeValues = [this.attributeOne, this.attributeTwo, this.attributeThree, this.attributeFour, this.attributeFive, this.attributeSix];

        // Set to zero.
        this.strAttr = 0;
        this.dexAttr = 0;
        this.conAttr = 0;
        this.wisAttr = 0;
        this.intAttr = 0;
        this.chaAttr = 0;

        // Run through each NAME value and assign it the corresponding NUMBER value,
        // so attributes are variables with number values.
        for (let i = 0; i < 6; i++) {
            switch (allAttributeNames[i]) {
                case "STR":
                    this.strAttr = allAttributeValues[i];
                    break;
                case "DEX":
                    this.dexAttr = allAttributeValues[i];
                    break;
                case "CON":
                    this.conAttr = allAttributeValues[i];
                    break;
                case "WIS":
                    this.wisAttr = allAttributeValues[i];
                    break;
                case "INT":
                    this.intAttr = allAttributeValues[i];
                    break;
                case "CHA":
                    this.chaAttr = allAttributeValues[i];
                    break;
                default:
                    alert("An error occurred. Verify that all Attributes are Allocated.");
                    i = 6; // Exit the function :P
                    break;
            }
        }

        // Reject Errors, and prompt for confirm, else, throw out of the function to restart.
        if (this.strAttr !== 0 && this.dexAttr !== 0 && this.conAttr !== 0 && this.wisAttr !== 0 && this.intAttr !== 0 && this.chaAttr !== 0) {
            this.update();
        } else {
            alert("An error occurred. Verify that no Attributes are Duplicated.");
        }
    }

    /**
     * Manually assign Attributes the Character
     * @param {HTMLFormElement} form
     */
    assignAttributesManually(form) {
        this.strAttr = Number(form.inpstrAttr.value);
        this.dexAttr = Number(form.inpdexAttr.value);
        this.conAttr = Number(form.inpconAttr.value);
        this.wisAttr = Number(form.inpwisAttr.value);
        this.intAttr = Number(form.inpintAttr.value);
        this.chaAttr = Number(form.inpchaAttr.value);

        this.update();
    }

    /**
     * Calculate the Character's Armor Class
     */
    calculateArmorClass() {
        let armor = Number(document.getElementById("print-armor-bonus").innerHTML),
            shield = Number(document.getElementById("print-shield-bonus").innerHTML),
            natural = 0,
            size = (this.small) ? 1 : 0,
            deflect = 0,
            misc = 0;

        document.getElementById("print-ac-tot").innerHTML = 10 + this.dexMod + armor + shield + natural + size + deflect + misc;
        document.getElementById("print-ff-tot").innerHTML = 10 + armor + shield + natural + size + deflect + misc;
        document.getElementById("print-to-tot").innerHTML = 10 + this.dexMod + size + deflect + misc;
    }

    /**
     * Calculate the Character's carrying capacity
     * @param {number} strengthScore
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
     * Set the Character's Class
     * @param {String} userClass
     */
    classSelect(userClass) {
        this.class = userClass.toUpperCase();
        if (this.class !== 0) {
            document.getElementById("show-class").innerHTML = "Current Class: " + this.class;
            document.getElementById("show-class-2").innerHTML = this.class;
            document.getElementById("dice-sys").style.display = "block";
        }
    }

    /**
     *
     */
    initiatePhaseTwo() {
        if (this.fighterBonusFeat) {
            this.startingFeats += 1;
        }
        if (this.grapple) {
            this.numberOfFeats += 1;
            document.getElementById("feat-name-" + this.numberOfFeats).innerHTML = "Imp. Grapple";
        }
        if (this.stunningFist) {
            this.numberOfFeats += 1;
            document.getElementById("feat-name-" + this.numberOfFeats).innerHTML = "Stunning Fist";
        }
        if (this.track) {
            this.numberOfFeats += 1;
            document.getElementById("feat-name-" + this.numberOfFeats).innerHTML = "Track";
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

            let list = document.getElementsByClassName("sk-input");
            for (let i = 0; i < list.length; i++) {
                list[i].setAttribute("max", (this.levelAdvance + 3));
            }

            // This for loop handles everything, and iterates at each 4 level intervals, when ability score increases
            // can affect results.
            // So heads up.
            for (let i = 2; i < (this.levelAdvance + 1); i++) {
                if ((i / 4) === Math.floor(i / 4)) {
                    document.getElementById("handle-ability-score-" + (i / 4)).style.display = "block";
                }
                if (i <= 3) { // Only levels unaffected by 1st ability score increase
                    let additionalHitPoints = (Math.floor(Math.random() * this.hitDie) + 1) + this.conMod;
                    this.hitPoints += (additionalHitPoints <= 0) ? 1 : additionalHitPoints;
                    this.generator.skills.levelSkillPointIncrease();
                }

                if ((i / 3) === Math.floor(i / 3)) {
                    this.startingFeats += 1;
                }
            }
        }
    }

    /**
     * Set the Characters selected Race
     * @param {String} userRace
     */
    raceSelect(userRace) {
        this.race = userRace.toUpperCase();
        if (this.race !== 0) {
            document.getElementById("show-race").innerHTML = "Current Race: " + this.race;
            document.getElementById("show-race-2").innerHTML = this.race;
            document.getElementById("class-source").style.display = "block";
        }
    }

    /**
     * Roll the Character Attributes
     * @param {String} type
     */
    rollAttributes(type) {
        let statValue = [0, 0, 0, 0, 0, 0];
        this.totalPoints = 0;

        for (let i = 0; i < 6; i++) {
            switch (type) {
                case 'Classic':
                    statValue[i] = Math.floor(Math.random() * 16 + 3);
                    break;
                case 'Heroic':
                    statValue[i] = Math.floor(Math.random() * 10 + 9);
                    break;
                case 'Standard':
                    let firstDie = Math.floor(Math.random() * 6 + 1),
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
                    break;
            }
            document.getElementById("stat-label-" + (i + 1)).innerHTML = statValue[i];
            this.totalPoints += statValue[i];
        }

        this.attributeOne = statValue[0];
        this.attributeTwo = statValue[1];
        this.attrThr = statValue[2];
        this.attrFou = statValue[3];
        this.attrFiv = statValue[4];
        this.attributeSix = statValue[5];

        // Displays total points
        document.getElementById("total-points").innerHTML = this.totalPoints;
        this.generator.removeDieRollButtons();
    }

    /**
     * Set flags for special cases
     * @param {String} value
     */
    specialCases(value) {
        this.fighterBonusFeat = value === "fighterBonusFeat";
        this.grapple = value === "grapple";
        this.stunningFist = value === "stunningFist";
        this.track = value === "track";
        document.getElementById("class-monk").style.display = (value === "monk-option" ? "block" : (value === "monk-close" ? "none" : ""));
   }

    /**
     * Update various things
     */
    update() {
        this.updateAllModifiers();
        this.updateMiscSkillModifiers();
        this.addAbilityModifiers();
        this.generator.skills.showClassSkills();
        this.initiatePhaseTwo();
        this.updateAllSavingThrows();
    }

    /**
     * Calculates all Ability Modifiers using the Character Attributes
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
     * Shows all Racial Skill Misc Modifiers (and other racial bonuses) and re-calculates ability modifiers.
     */
    updateMiscSkillModifiers() {
        switch (this.race) {
            case "HUMAN":
                this.startingFeats += 1;
                break;
            case "DWARF":
                this.conAttr += 2;
                this.chaAttr -= 2;
                this.darkVision = true;
                break;
            case "ELF":
                this.dexAttr += 2;
                this.conAttr -= 2;
                this.lowLight = true;
                document.getElementById("ms-list").innerHTML = 2;
                document.getElementById("ms-sear").innerHTML = 2;
                document.getElementById("ms-spot").innerHTML = 2;
                break;
            case "GNOME":
                this.conAttr += 2;
                this.strAttr -= 2;
                this.small = true;
                this.lowLight = true;
                document.getElementById("ms-list").innerHTML = 2;
                document.getElementById("ms-craf").innerHTML = 2;
                document.getElementById("ms-hide").innerHTML = 4;
                break;
            case "HALF-ELF":
                this.lowLight = true;
                document.getElementById("ms-list").innerHTML = 1;
                document.getElementById("ms-sear").innerHTML = 1;
                document.getElementById("ms-spot").innerHTML = 1;
                document.getElementById("ms-dipl").innerHTML = 2;
                document.getElementById("ms-gath").innerHTML = 2;
                break;
            case "HALF-ORC":
                this.strAttr += 2;
                this.intAttr -= 2;
                this.chaAttr -= 2;
                this.darkVision = true;
                break;
            case "HALFLING":
                this.dexAttr += 2;
                this.strAttr -= 2;
                this.small = true;
                document.getElementById("ms-clim").innerHTML = 2;
                document.getElementById("ms-jump").innerHTML = 2;
                document.getElementById("ms-move").innerHTML = 2;
                document.getElementById("ms-list").innerHTML = 2;
                document.getElementById("ms-hide").innerHTML = 4;
                break;
            case "NewBlankRace":
                // A placeholder for future racial additions.
                // This is the first place (in order of execution) where the value of this.character.race affects 
                // subsequent calculations.
                break;
        }
        this.updateAllModifiers();

        // Now that the switch is done, and every score is in its final state, let's show them.
        document.getElementById("final-str").innerHTML = this.strAttr;
        document.getElementById("final-str-mod").innerHTML = (this.strMod < 0 ? "- " : "+ ") + this.strMod;
        document.getElementById("final-dex").innerHTML = this.dexAttr;
        document.getElementById("final-dex-mod").innerHTML = (this.dexMod < 0 ? "- " : "+ ") + this.dexMod;
        document.getElementById("final-con").innerHTML = this.conAttr;
        document.getElementById("final-con-mod").innerHTML = (this.conMod < 0 ? "- " : "+ ") + this.conMod;
        document.getElementById("final-wis").innerHTML = this.wisAttr;
        document.getElementById("final-wis-mod").innerHTML = (this.wisMod < 0 ? "- " : "+ ") + this.wisMod;
        document.getElementById("final-int").innerHTML = this.intAttr;
        document.getElementById("final-int-mod").innerHTML = (this.intMod < 0 ? "- " : "+ ") + this.intMod;
        document.getElementById("final-cha").innerHTML = this.chaAttr;
        document.getElementById("final-cha-mod").innerHTML = (this.chaMod < 0 ? "- " : "+ ") + this.chaMod;
    }

    /**
     * Calculate Saving Throws and Base Attack Bonus. They Don't Display immediately.
     */
    updateAllSavingThrows() {
        switch (this.class) {
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
                // This is the SECOND place (in order of execution) where the value of this.character.class 
                // affects subsequent calculations.
                break;
        }
    }

    /**
     *
     * @param {number} fortSave
     * @param {number} reflexSave
     * @param {number} willSave
     * @param {String} baseAttack
     * @param {number} hitDie
     */
    updateSavingThrows(fortSave, reflexSave, willSave, baseAttack, hitDie) {
        this.fortitudeSave = fortSave;
        this.reflexSave = reflexSave;
        this.willSave = willSave;
        this.hitDie = hitDie;
        this.hitPoints = (hitDie + this.conMod <= 0) ? 1 : hitDie + this.conMod;

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
    }

}