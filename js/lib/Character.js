/**
 *
 * @property {number} blankCounter
 * @property {number} blankCraftCounter
 * @property {number} blankKnowledgeCounter
 * @property {number} blankPerformCounter
 * @property {number} blankProfessionCounter
 */
class Character {

    /**
     *
     * @param {CharacterGen} characterGen
     * @returns {Character}
     */
    constructor(characterGen) {
        this.generator = characterGen;
        this.skills = new Skills(this);
        this.spells = new Spells(this);
        this.feats = new Feats(this);
        this.inventory = new Inventory(this.generator);

        this.eyes = "";
        this.hair = "";
        this.height = "";
        this.weight = "";
        this.skin = "";
        this.handedness = "";
        this.age = "";
        this.gender = "";
        this.appearance = "";
        this.personality = "";
        this.quote = "";
        this.objective = "";
        this.history = "";
        this.alliesEnemies = "";
        this.ancestry = "";
        this.other = "";

        this.class = 0;
        this.race = 0;
        this.hitDie = 0;
        this.hitPoints = 0;
        this.normAC = 0;
        this.ffAC = 0;
        this.touchAC = 0;
        this.level = 0;

        this.darkVision = false;
        this.lowLight = false;
        this.small = false;

        this.blankCounter = 0;
        this.blankCraftCounter = 0;
        this.blankKnowledgeCounter = 0;
        this.blankPerformCounter = 0;
        this.blankProfessionCounter = 0;

        this.baseSkillPoints = 0;
        this.skillPoints = 0;
        this.skillPointsSpent = 0;
        this.skillPointsRemaining = 0;

        this.startingFeats = 1;
        this.numberOfFeats = 0;

        this.weaponFinesse = false;
        this.improvedInitiative = false;
        this.iniMiscMod = 0;
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
            listStr[i].innerHTML = (this.strMod < 0 ? "" : "+ ") + this.strMod;
        }
        let listDex = document.getElementsByClassName("am-dex");
        for (let i = 0; i < listDex.length; i++) {
            listDex[i].innerHTML = (this.dexMod < 0 ? "" : "+ ") + this.dexMod;
        }
        let listCon = document.getElementsByClassName("am-con");
        for (let i = 0; i < listCon.length; i++) {
            listCon[i].innerHTML = (this.conMod < 0 ? "" : "+ ") + this.conMod;
        }
        let listWis = document.getElementsByClassName("am-wis");
        for (let i = 0; i < listWis.length; i++) {
            listWis[i].innerHTML = (this.wisMod < 0 ? "" : "+ ") + this.wisMod;
        }
        let listInt = document.getElementsByClassName("am-int");
        for (let i = 0; i < listInt.length; i++) {
            listInt[i].innerHTML = (this.intMod < 0 ? "" : "+ ") + this.intMod;
        }
        let listCha = document.getElementsByClassName("am-cha");
        for (let i = 0; i < listCha.length; i++) {
            listCha[i].innerHTML = (this.chaMod < 0 ? "" : "+ ") + this.chaMod;
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

        for (let i = (whichLevel * 4); i < this.level; i++) {
            if (i <= (whichLevel * 4 + 3)) { // Only levels affected by THIS (but not SUBSEQUENT) ability score increase
                let additionalHitPoints = (Math.floor(Math.random() * this.hitDie) + 1) + this.conMod;
                this.hitPoints += (additionalHitPoints <= 0) ? 1 : additionalHitPoints;
                this.skills.levelSkillPointIncrease();
            }
        }
        this.updateAllModifiers();

        document.getElementById("final-" + whichAbility).innerHTML = this[whichAbility + "Attr"];
        document.getElementById("final-" + whichAbility + "-mod").innerHTML = "+ " + this[whichAbility + "Mod"];
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
      let armor = Number(this.inventory.aSlot.armorBonus),
          shield = Number(this.inventory.sSlot.armorBonus),
          natural = 0,
          size = (this.small) ? 1 : 0,
          deflect = 0,
          misc = 0;
      this.normAC = 10 + this.dexMod + armor + shield + natural + size + deflect + misc;
      this.ffAC = 10 + armor + shield + natural + size + deflect + misc;
      this.touchAC = 10 + this.dexMod + size + deflect + misc;

      document.getElementById("print-armor-total").innerHTML = this.normAC;
      document.getElementById("print-ff-total").innerHTML = this.ffAC;
      document.getElementById("print-touch-total").innerHTML = this.touchAC;
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

        document.getElementById("print-total-weight").innerHTML = this.inventory.totalWeight;
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
        this.level = Number(document.getElementById("level-input").value);
        if (this.level === 1) {
            document.getElementById("final-base-attributes").style.display = "block";
            document.getElementById("select-skills").style.display = "block";
        } else {
            document.getElementById("final-base-attributes").style.display = "block";
            document.getElementById("handle-level-adv").style.display = "block";
            document.getElementById("show-level").innerHTML = this.level;

            let list = document.getElementsByClassName("sk-input");
            for (let i = 0; i < list.length; i++) {
                list[i].setAttribute("max", (this.level + 3));
            }

            // This for loop handles everything, and iterates at each 4 level intervals, when ability score increases
            // can affect results.
            // So heads up.
            for (let i = 2; i < (this.level + 1); i++) {
                if ((i / 4) === Math.floor(i / 4)) {
                    document.getElementById("handle-ability-score-" + (i / 4)).style.display = "block";
                }
                if (i <= 3) { // Only levels unaffected by 1st ability score increase
                    let additionalHitPoints = (Math.floor(Math.random() * this.hitDie) + 1) + this.conMod;
                    this.hitPoints += (additionalHitPoints <= 0) ? 1 : additionalHitPoints;
                    this.skills.levelSkillPointIncrease();
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
        this.attributeThree = statValue[2];
        this.attributeFour = statValue[3];
        this.attributeFive = statValue[4];
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
        this.skills.showClassSkills();
        this.initiatePhaseTwo();
        this.generator.showFinalAttributes();
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
                this.skills.skillTable['listen'].misc = 2;
                this.skills.skillTable['search'].misc = 2;
                this.skills.skillTable['spot'].misc = 2;
                document.getElementById("ms-listen").innerHTML = this.skills.skillTable['listen'].misc;
                document.getElementById("ms-search").innerHTML = this.skills.skillTable['search'].misc;
                document.getElementById("ms-spot").innerHTML = this.skills.skillTable['spot'].misc;
                break;
            case "GNOME":
                this.conAttr += 2;
                this.strAttr -= 2;
                this.small = true;
                this.lowLight = true;
                this.skills.skillTable['listen'].misc = 2;
                this.skills.skillTable['craft'].misc = 2;
                this.skills.skillTable['hide'].misc = 4;
                document.getElementById("ms-listen").innerHTML = this.skills.skillTable['listen'].misc;
                document.getElementById("ms-craft").innerHTML = this.skills.skillTable['craft'].misc;
                document.getElementById("ms-hide").innerHTML = this.skills.skillTable['hide'].misc;
                break;
            case "HALF-ELF":
                this.lowLight = true;
                this.skills.skillTable['listen'].misc = 1;
                this.skills.skillTable['search'].misc = 1;
                this.skills.skillTable['spot'].misc = 1;
                this.skills.skillTable['diplomacy'].misc = 2;
                this.skills.skillTable['gatherinformation'].misc = 2;
                document.getElementById("ms-listen").innerHTML = this.skills.skillTable['listen'].misc;
                document.getElementById("ms-search").innerHTML = this.skills.skillTable['search'].misc;
                document.getElementById("ms-spot").innerHTML = this.skills.skillTable['spot'].misc;
                document.getElementById("ms-diplomacy").innerHTML = this.skills.skillTable['diplomacy'].misc;
                document.getElementById("ms-gatherinformation").innerHTML = this.skills.skillTable['gatherinformation'].misc;
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
                this.skills.skillTable['climb'].misc = 2;
                this.skills.skillTable['jump'].misc = 2;
                this.skills.skillTable['movesilently'].misc = 2;
                this.skills.skillTable['listen'].misc = 2;
                this.skills.skillTable['hide'].misc = 4;
                document.getElementById("ms-climb").innerHTML = this.skills.skillTable['climb'].misc;
                document.getElementById("ms-jump").innerHTML = this.skills.skillTable['jump'].misc;
                document.getElementById("ms-movesilently").innerHTML = this.skills.skillTable['movesilently'].misc;
                document.getElementById("ms-listen").innerHTML = this.skills.skillTable['listen'].misc;
                document.getElementById("ms-hide").innerHTML = this.skills.skillTable['hide'].misc;
                break;
            case "NewBlankRace":
                // A placeholder for future racial additions.
                break;
        }
        this.updateAllModifiers();
        this.generator.showFinalAttributes();
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
                this.baseAttackBonus = this.level;
                this.baseAttackBonus2 = this.level - 5;
                this.baseAttackBonus3 = this.level - 10;
                this.baseAttackBonus4 = this.level - 15;
                break;
            case "A":
                this.baseAttackBonus = Math.floor((this.level + (this.level / 2)) / 2);
                this.baseAttackBonus2 = this.baseAttackBonus - 5;
                this.baseAttackBonus3 = this.baseAttackBonus - 10;
                this.baseAttackBonus4 = this.baseAttackBonus - 15;
                break;
            case "P":
                this.baseAttackBonus = Math.floor(this.level / 2);
                this.baseAttackBonus2 = this.baseAttackBonus - 5;
                this.baseAttackBonus3 = this.baseAttackBonus - 10;
                this.baseAttackBonus4 = this.baseAttackBonus - 15;
                break;
        }
    }

    updateDescription() {
        this.name = document.getElementById("form-name").value;
        this.player = document.getElementById("form-player").value;
        this.alignment = document.getElementById("form-alignment").value;
        this.eyes = document.getElementById("form-eyes").value;
        this.hair = document.getElementById("form-hair").value;
        this.height = document.getElementById("form-height").value;
        this.weight = document.getElementById("form-weight").value;
        this.skin = document.getElementById("form-skin").value;
        this.handedness = document.getElementById("form-handedness").value;
        this.age = document.getElementById("form-age").value;
        this.gender = document.getElementById("form-gender").value;
        this.appearance = document.getElementById("form-appearance").value;
        this.personality = document.getElementById("form-personality").value;
        this.quote = document.getElementById("form-quote").value;
        this.objective = document.getElementById("form-objective").value;
        this.history = document.getElementById("form-history").value;
        this.alliesEnemies = document.getElementById("form-allies-enemies").value;
        this.ancestry = document.getElementById("form-ancestry").value;
        this.other = document.getElementById("form-other-info").value;
    }

}