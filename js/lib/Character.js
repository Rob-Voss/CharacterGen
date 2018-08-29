/**
 *
 */
class Character {

    /**
     *
     * @param {CharacterGen} characterGen
     * @returns {Character}
     */
    constructor(characterGen) {
        this.ability = {
            'str': 0,
            'dex': 0,
            'con': 0,
            'int': 0,
            'wis': 0,
            'cha': 0
        };
        this.abilityMods = {
            'str': 0,
            'dex': 0,
            'con': 0,
            'int': 0,
            'wis': 0,
            'cha': 0
        };
        this.armorClass = {
            'Normal': 0,
            'Flat Footed': 0,
            'Touch': 0
        };
        this.baseAttackBonuses = {
            1: 0,
            2: 0,
            3: 0,
            4: 0
        };
        this.carryingCapacity = {
            'Heavy': 0,
            'Medium': 0,
            'Light': 0
        };
        this.characteristics = {
            'Age': '',
            'Allies/Enemies': '',
            'Alignment': '',
            'Ancestry': '',
            'Appearance': '',
            'Eyes': '',
            'Gender': '',
            'Hair': '',
            'Handedness': '',
            'Height': '',
            'History': '',
            'Name': '',
            'Objective': '',
            'Other': '',
            'Personality': '',
            'Player': '',
            'Quote': '',
            'Skin': '',
            'Weight': ''
        };
        this.class = {};
        this.feats = new Feats(this);
        this.generator = characterGen;
        this.hitPoints = 0;
        this.inventory = new Inventory(this.generator);
        this.level = 0;
        this.race = new Race();
        this.savingThrows = {
            'Fortitude': 0,
            'Reflex': 0,
            'Will': 0
        };
        this.skills = new Skills(this);
        this.spells = new Spells(this);

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

        return this;
    }

    /**
     * Displays all Ability Modifiers in Skills Section
     */
    addAbilityModifiers() {
        for (let element in this.ability) {
            let list = document.getElementsByClassName("am-" + element);
            for (let i = 0; i < list.length; i++) {
                list[i].innerHTML = (this.abilityMods[element] < 0 ? "" : "+ ") + this.abilityMods[element];
            }
        } 
    }

    /**
     *
     * @param {String} whichLevel
     */
    addAbilityScore(whichLevel) {
        let ability = document.getElementById("select-ability-score-" + Number(whichLevel)).value;
        this.ability[ability] += 1;

        for (let i = (whichLevel * 4); i < this.level; i++) {
            if (i <= (whichLevel * 4 + 3)) { // Only levels affected by THIS (but not SUBSEQUENT) ability score increase
                let additionalHitPoints = (Math.floor(Math.random() * this.class.hitDie) + 1) + this.abilityMods['con'];
                this.hitPoints += (additionalHitPoints <= 0) ? 1 : additionalHitPoints;
                this.skills.levelSkillPointIncrease();
            }
        }
        this.updateAbilityModifiers();

        document.getElementById("final-" + ability).innerHTML = this.ability[ability];
        document.getElementById("final-" + ability + "-mod").innerHTML = "+ " + this.abilityMods[ability];
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
        this.ability = {
            'str': 0,
            'dex': 0,
            'con': 0,
            'int': 0,
            'wis': 0,
            'cha': 0
        };
        this.ability['str'] = 0;
        this.ability['dex'] = 0;
        this.ability['con'] = 0;
        this.ability['wis'] = 0;
        this.ability['int'] = 0;
        this.ability['cha'] = 0;

        // Run through each NAME value and assign it the corresponding NUMBER value,
        // so attributes are variables with number values.
        for (let i = 0; i < 6; i++) {
            switch (allAttributeNames[i]) {
                case "STR":
                    this.ability['str'] = allAttributeValues[i];
                    break;
                case "DEX":
                    this.ability['dex'] = allAttributeValues[i];
                    break;
                case "CON":
                    this.ability['con'] = allAttributeValues[i];
                    break;
                case "INT":
                    this.ability['int'] = allAttributeValues[i];
                    break;
                case "WIS":
                    this.ability['wis'] = allAttributeValues[i];
                    break;
                case "CHA":
                    this.ability['cha'] = allAttributeValues[i];
                    break;
                default:
                    alert("An error occurred. Verify that all Attributes are Allocated.");
                    i = 6; // Exit the function :P
                    break;
            }
        }

        // Reject Errors, and prompt for confirm, else, throw out of the function to restart.
        if (this.ability['str'] !== 0 && this.ability['dex'] !== 0 && this.ability['con'] !== 0 && this.ability['wis'] !== 0 && this.ability['int'] !== 0 && this.ability['cha'] !== 0) {
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
        this.ability['str'] = Number(form.inpstrAttr.value);
        this.ability['dex'] = Number(form.inpdexAttr.value);
        this.ability['con'] = Number(form.inpconAttr.value);
        this.ability['wis'] = Number(form.inpwisAttr.value);
        this.ability['int'] = Number(form.inpintAttr.value);
        this.ability['cha'] = Number(form.inpchaAttr.value);

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
      this.armorClass['Normal'] = 10 + this.abilityMods['dex'] + armor + shield + natural + size + deflect + misc;
      this.armorClass['Flat Footed'] = 10 + armor + shield + natural + size + deflect + misc;
      this.armorClass['Touch'] = 10 + this.abilityMods['dex'] + size + deflect + misc;

      document.getElementById("print-armor-total").innerHTML = this.armorClass['Normal'];
      document.getElementById("print-ff-total").innerHTML = this.armorClass['Flat Footed'];
      document.getElementById("print-touch-total").innerHTML = this.armorClass['Touch'];
    }

    /**
     * Calculate the Character's carrying capacity
     * @param {number} strengthScore
     */
    calculateCarryingCapacity(strengthScore) {
        if (strengthScore <= 10) {
            this.carryingCapacity['Heavy'] = Math.floor(strengthScore * 10);
        } else if (strengthScore <= 20) {
            this.carryingCapacity['Heavy'] = Math.floor(25 * Math.pow(2, (0.2 * strengthScore)));
        } else {
            alert("The code for this strength condition has not been written.");
            this.carryingCapacity['Heavy'] = 6;
        }
        this.carryingCapacity['Medium'] = Math.floor((2 * this.carryingCapacity['Heavy']) / 3);
        this.carryingCapacity['Light'] = Math.floor(this.carryingCapacity['Heavy'] / 3);

        document.getElementById("print-total-weight").innerHTML = this.inventory.totalWeight;
        document.getElementById("print-heavy-load").innerHTML = this.carryingCapacity['Heavy'];
        document.getElementById("print-medium-load").innerHTML = this.carryingCapacity['Medium'];
        document.getElementById("print-light-load").innerHTML = this.carryingCapacity['Light'];
        document.getElementById("print-lift-load").innerHTML = (this.carryingCapacity['Heavy'] * 2);
        document.getElementById("print-push-load").innerHTML = (this.carryingCapacity['Heavy'] * 5);
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
                    let additionalHitPoints = (Math.floor(Math.random() * this.class.hitDie) + 1) + this.abilityMods['con'];
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
     * Set the Character's Class
     * @param {String} userClass
     */
    selectClass(userClass) {
        switch (userClass) {
            case "Barbarian":
                this.class = new Barbarian();
                break;
            case "Bard":
                this.class = new Bard();
                break;
            case "Cleric":
                this.class = new Cleric();
                break;
            case "Druid":
                this.class = new Druid();
                break;
            case "Fighter":
                this.class = new Fighter();
                break;
            case "Monk":
                this.class = new Monk();
                break;
            case "Paladin":
                this.class = new Paladin();
                break;
            case "Ranger":
                this.class = new Ranger();
                break;
            case "Rogue":
                this.class = new Rogue();
                break;
            case "Sorcerer":
                this.class = new Sorcerer();
                break;
            case "Wizard":
                this.class = new Wizard();
                break;
            case "NewBlankRace":
            // A placeholder for future racial additions.
            // return new Human();
        }
        document.getElementById("show-class").innerHTML = "Current Class: " + this.class;
        document.getElementById("show-class-2").innerHTML = this.class;
        document.getElementById("dice-sys").style.display = "block";

    }

    /**
     * Set the Characters selected Race
     * @param {String} userRace
     * @param {String} subRace
     * @returns {*}
     */
    selectRace(userRace, subRace = '') {
        switch (userRace) {
            case "Human":
                this.race = new Human();
                break;
            case "Dwarf":
                this.race = new Dwarf(subRace);
                break;
            case "Elf":
                this.race = new Elf(subRace);
                break;
            case "Gnome":
                this.race = new Gnome(subRace);
                break;
            case "Half-Elf":
                this.race = new HalfElf();
                break;
            case "Half-Orc":
                this.race = new HalfOrc();
                break;
            case "Halfling":
                this.race = new Halfling(subRace);
                break;
            case "NewBlankRace":
            // A placeholder for future racial additions.
            // return new Human();
        }
        document.getElementById("show-race").innerHTML = "Current Race: " + userRace;
        document.getElementById("show-race-2").innerHTML = userRace;
        document.getElementById("class-source").style.display = "block";
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
        this.updateAbilityModifiers();
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
    updateAbilityModifiers() {
        this.abilityMods['str'] = Math.floor((this.ability['str'] - 10) / 2);
        this.abilityMods['dex'] = Math.floor((this.ability['dex'] - 10) / 2);
        this.abilityMods['con'] = Math.floor((this.ability['con'] - 10) / 2);
        this.abilityMods['int'] = Math.floor((this.ability['int'] - 10) / 2);
        this.abilityMods['wis'] = Math.floor((this.ability['wis'] - 10) / 2);
        this.abilityMods['cha'] = Math.floor((this.ability['cha'] - 10) / 2);
    }

    /**
     * Shows all Racial Skill Misc Modifiers (and other racial bonuses) and re-calculates ability modifiers.
     */
    updateMiscSkillModifiers() {
        switch (this.race) {
            case "Human":
                this.startingFeats += 1;
                break;
            case "Dwarf":
                this.ability['con'] += 2;
                this.ability['cha'] -= 2;
                this.darkVision = true;
                break;
            case "Elf":
                this.ability['dex'] += 2;
                this.ability['con'] -= 2;
                this.lowLight = true;
                this.skills.skillTable['listen'].misc = 2;
                this.skills.skillTable['search'].misc = 2;
                this.skills.skillTable['spot'].misc = 2;
                document.getElementById("ms-listen").innerHTML = this.skills.skillTable['listen'].misc;
                document.getElementById("ms-search").innerHTML = this.skills.skillTable['search'].misc;
                document.getElementById("ms-spot").innerHTML = this.skills.skillTable['spot'].misc;
                break;
            case "Gnome":
                this.ability['con'] += 2;
                this.ability['str'] -= 2;
                this.small = true;
                this.lowLight = true;
                this.skills.skillTable['listen'].misc = 2;
                this.skills.skillTable['craft'].misc = 2;
                this.skills.skillTable['hide'].misc = 4;
                document.getElementById("ms-listen").innerHTML = this.skills.skillTable['listen'].misc;
                document.getElementById("ms-craft").innerHTML = this.skills.skillTable['craft'].misc;
                document.getElementById("ms-hide").innerHTML = this.skills.skillTable['hide'].misc;
                break;
            case "Half-Elf":
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
            case "Half-Orc":
                this.ability['str'] += 2;
                this.ability['int'] -= 2;
                this.ability['cha'] -= 2;
                this.darkVision = true;
                break;
            case "Halfling":
                this.ability['dex'] += 2;
                this.ability['str'] -= 2;
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
        this.updateAbilityModifiers();
        this.generator.showFinalAttributes();
    }

    /**
     * Calculate Saving Throws and Base Attack Bonus. They Don't Display immediately.
     */
    updateAllSavingThrows() {
        switch (this.class) {
            case "Cleric":
            case "Druid":
                this.updateSavingThrows(2, 0, 2, "A", 8);
                break;
            case "Sorcerer":
            case "Wizard":
                this.updateSavingThrows(0, 0, 2, "P", 4);
                break;
            case "Barbarian":
                this.updateSavingThrows(2, 0, 0, "G", 12);
                break;
            case "Fighter":
            case "Paladin":
                this.updateSavingThrows(2, 0, 0, "G", 10);
                break;
            case "Monk":
                this.updateSavingThrows(2, 2, 2, "A", 8);
                break;
            case "Bard":
                this.updateSavingThrows(0, 2, 2, "A", 6);
                break;
            case "Ranger":
                this.updateSavingThrows(2, 2, 0, "G", 8);
                break;
            case "Rogue":
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
        this.savingThrows['Fortitude'] = fortSave;
        this.savingThrows['Reflex'] = reflexSave;
        this.savingThrows['Will'] = willSave;
        this.hitPoints = (this.class.hitDie + this.abilityMods['con'] <= 0) ? 1 : this.class.hitDie + this.abilityMods['con'];
        this.class.getBaseAttackBonuses(this.level);
    }

    /**
     *
     */
    updateDescription() {
        this.characteristics['Name'] = document.getElementById("form-name").value;
        this.characteristics['Player'] = document.getElementById("form-player").value;
        this.characteristics['Alignment'] = document.getElementById("form-alignment").value;
        this.characteristics['Eyes'] = document.getElementById("form-eyes").value;
        this.characteristics['Hair'] = document.getElementById("form-hair").value;
        this.characteristics['Height'] = document.getElementById("form-height").value;
        this.characteristics['Weight'] = document.getElementById("form-weight").value;
        this.characteristics['Skin'] = document.getElementById("form-skin").value;
        this.characteristics['Handedness'] = document.getElementById("form-handedness").value;
        this.characteristics['Age'] = document.getElementById("form-age").value;
        this.characteristics['Gender'] = document.getElementById("form-gender").value;
        this.characteristics['Appearance'] = document.getElementById("form-appearance").value;
        this.characteristics['Personality'] = document.getElementById("form-personality").value;
        this.characteristics['Quote'] = document.getElementById("form-quote").value;
        this.characteristics['Objective'] = document.getElementById("form-objective").value;
        this.characteristics['History'] = document.getElementById("form-history").value;
        this.characteristics['Allies/Enemies'] = document.getElementById("form-allies-enemies").value;
        this.characteristics['Ancestry'] = document.getElementById("form-ancestry").value;
        this.characteristics['Other'] = document.getElementById("form-other-info").value;
    }

}