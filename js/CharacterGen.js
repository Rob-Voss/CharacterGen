/**
 *
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
        this.rules = new Core35(this);
        this.character = new Character(this);

        return this;
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
    customItemSubMenu() {
        let kind = document.getElementById("custom-select").value;
        document.getElementById("custom-" + kind).style.display = "block";
        if (kind === "weapon" || kind === "armor") {
            document.getElementById("custom-" + kind + "-display").style.display = "block";
        }
        document.getElementById("equip-custom").style.display = "none";
    }

    /**
     *
     * @param {String} whichSubMenu
     */
    equipSubMenu(whichSubMenu) {
        for (let i = 0; i < this.character.inventory.allSubMenus.length; i++) {
            let isSubMenu = this.character.inventory.allSubMenus[i] === whichSubMenu,
                equipName = "equip-" + ((isSubMenu) ? whichSubMenu : this.character.inventory.allSubMenus[i]),
                display = (isSubMenu) ? "block" : "none";
            document.getElementById(equipName).style.display = display;
        }
        document.getElementById("custom-weapon").style.display = "none";
        document.getElementById("custom-weapon-display").style.display = "none";
        document.getElementById("custom-armor").style.display = "none";
        document.getElementById("custom-item").style.display = "none";
        window.scrollTo(0, 0);
    }

    /**
     * Show the appropriate Feat Sub Menu
     * @param {String} whichSubMenu
     */
    featsSubMenu(whichSubMenu) {
        for (let i = 0; i < this.character.feats.allSubMenus.length; i++) {
            let isMenu = this.character.feats.allSubMenus[i] === whichSubMenu,
                featName = "feats-" + ((isMenu) ? whichSubMenu : this.character.feats.allSubMenus[i]),
                display = (isMenu) ? "block" : "none";
            document.getElementById(featName).style.display = display;
        }
        window.scrollTo(0, 0);
    }

    /**
     *
     * @param {String} idCalled
     */
    navigate(idCalled) {
        let list = document.getElementsByClassName("page-space");
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
                this.equipSubMenu("all-off");
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
                this.equipSubMenu("all-off");
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
    populateCharacterSheet() {
        this.navigate("print-sheets");
        this.character.updateDescription();

        document.getElementById("print-alignment").innerHTML = this.character.alignment;
        document.getElementById("print-class").innerHTML = this.character.class;
        document.getElementById("print-level").innerHTML = this.character.level;
        document.getElementById("print-experience").innerHTML = (500 * (this.character.level - 1) * this.character.level);
        document.getElementById("print-levelup").innerHTML = (500 * (this.character.level) * (this.character.level + 1));
        document.getElementById("print-attribute-str").innerHTML = this.character.strAttr;
        document.getElementById("print-attribute-dex").innerHTML = this.character.dexAttr;
        document.getElementById("print-attribute-con").innerHTML = this.character.conAttr;
        document.getElementById("print-attribute-wis").innerHTML = this.character.wisAttr;
        document.getElementById("print-attribute-int").innerHTML = this.character.intAttr;
        document.getElementById("print-attribute-cha").innerHTML = this.character.chaAttr;
        document.getElementById("print-save-fortitude").innerHTML = this.character.fortitudeSave;
        document.getElementById("print-save-reflex").innerHTML = this.character.reflexSave;
        document.getElementById("print-save-will").innerHTML = this.character.willSave;

        document.getElementById("print-eyes").innerHTML = this.character.eyes;
        document.getElementById("print-hair").innerHTML = this.character.hair;
        document.getElementById("print-height").innerHTML = this.character.height;
        document.getElementById("print-weight").innerHTML = this.character.weight;
        document.getElementById("print-skin").innerHTML = this.character.skin;
        document.getElementById("print-handedness").innerHTML = this.character.handedness;
        document.getElementById("print-age").innerHTML = this.character.age;
        document.getElementById("print-gender").innerHTML = this.character.gender;
        document.getElementById("print-appearance").innerHTML = this.character.appearance;
        document.getElementById("print-personality").innerHTML = this.character.personality;
        document.getElementById("print-quote").innerHTML = this.character.quote;
        document.getElementById("print-objective").innerHTML = this.character.objective;
        document.getElementById("print-history").innerHTML = this.character.history;
        document.getElementById("print-allies-enemies").innerHTML = this.character.alliesEnemies;
        document.getElementById("print-ancestry").innerHTML = this.character.ancestry;
        document.getElementById("print-other-info").innerHTML = this.character.other;

        // Set all the header values
        for (let i = 0, list = document.getElementsByClassName("print-name"); i < list.length; i++) {
            list[i].innerHTML = (this.character.name);
        }
        for (let i = 0, list = document.getElementsByClassName("print-player"); i < list.length; i++) {
            list[i].innerHTML = (this.character.player);
        }
        for (let i = 0, list = document.getElementsByClassName("print-race"); i < list.length; i++) {
            list[i].innerHTML = (this.character.race);
        }
        for (let i = 0, list = document.getElementsByClassName("print-class"); i < list.length; i++) {
            list[i].innerHTML = (this.character.class);
        }

        // Feats
        if (this.character.numberOfFeats > 0) {
            if (this.character.numberOfFeats !== 0) {
                for (let i = 1; i < (this.character.numberOfFeats + 1); i++) {
                    document.getElementById("print-feat-" + i).innerHTML = document.getElementById("feat-name-" + i).innerHTML;
                }
            }
        }

        // Inventory items
        if (this.character.inventory.itemPurchaseNo > 0) {
            if (this.character.inventory.itemPurchaseNo !== 0) {
                for (let i = 1; i < (this.character.inventory.itemPurchaseNo + 1); i++) {
                    document.getElementById("print-item-" + i).innerHTML = document.getElementById("item-purchase-no-" + i).innerHTML;
                }
            }
        }

        for (let i = 0, list = document.getElementsByClassName("print-mod-size"); i < list.length; i++) {
            list[i].innerHTML = (this.character.small) ? "+1" : "";
        }

        if (this.character.greatFortitude) {
            document.getElementById("print-save-fortitude-total").innerHTML = (this.character.fortitudeSave + this.character.conMod + 2);
            document.getElementById("print-save-fortitude-misc").innerHTML = 2;
        } else {
            document.getElementById("print-save-fortitude-total").innerHTML = (this.character.fortitudeSave + this.character.conMod);
        }

        if (this.character.ironWill) {
            document.getElementById("print-save-will-total").innerHTML = (this.character.willSave + this.character.wisMod + 2);
            document.getElementById("print-save-will-misc").innerHTML = 2;
        } else {
            document.getElementById("print-save-will-total").innerHTML = (this.character.willSave + this.character.wisMod);
        }

        if (this.character.lighteningReflexes) {
            document.getElementById("print-save-reflex-total").innerHTML = (this.character.reflexSave + this.character.dexMod + 2);
            document.getElementById("print-save-reflex-misc").innerHTML = 2;
        } else {
            document.getElementById("print-save-reflex-total").innerHTML = (this.character.reflexSave + this.character.dexMod);
        }

        document.getElementById("hit-points").innerHTML = (this.character.toughness) ? (this.character.hitPoints + 3) : this.character.hitPoints;

        for (let i = 0, listStr = document.getElementsByClassName("print-mod-str"); i < listStr.length; i++) {
            listStr[i].innerHTML = (this.character.strMod < 0 ? "" : "+") + this.character.strMod;
        }
        for (let i = 0, listDex = document.getElementsByClassName("print-mod-dex"); i < listDex.length; i++) {
            listDex[i].innerHTML = (this.character.dexMod < 0 ? "" : "+") + this.character.dexMod;
        }
        for (let i = 0, listCon = document.getElementsByClassName("print-mod-con"); i < listCon.length; i++) {
            listCon[i].innerHTML = (this.character.conMod < 0 ? "" : "+") + this.character.conMod;
        }
        for (let i = 0, listWis = document.getElementsByClassName("print-mod-wis"); i < listWis.length; i++) {
            listWis[i].innerHTML = (this.character.wisMod < 0 ? "" : "+") + this.character.wisMod;
        }
        for (let i = 0, listInt = document.getElementsByClassName("print-mod-int"); i < listInt.length; i++) {
            listInt[i].innerHTML = (this.character.intMod < 0 ? "" : "+") + this.character.intMod;
        }
        for (let i = 0, listCha = document.getElementsByClassName("print-mod-cha"); i < listCha.length; i++) {
            listCha[i].innerHTML = (this.character.chaMod < 0 ? "" : "+") + this.character.chaMod;
        }
        for (let i = 0, listBab = document.getElementsByClassName("print-bab-one"); i < listBab.length; i++) {
            listBab[i].innerHTML = ("+" + this.character.baseAttackBonus);
        }
        if (this.character.level > 5) {
            for (let i = 0, listBab = document.getElementsByClassName("print-bab-two"); i < listBab.length; i++) {
                listBab[i].innerHTML = ("+" + this.character.baseAttackBonus2);
            }
        }
        if (this.character.level > 10) {
            for (let i = 0, listBab = document.getElementsByClassName("print-bab-three"); i < listBab.length; i++) {
                listBab[i].innerHTML = ("+" + this.character.baseAttackBonus3);
            }
        }
        if (this.character.level > 15) {
            for (let i = 0, listBab = document.getElementsByClassName("print-bab-four"); i < listBab.length; i++) {
                listBab[i].innerHTML = ("+" + this.character.baseAttackBonus4);
            }
        }

        if (this.character.weaponFinesse === true) {
            document.getElementById("print-mod-attack-title").innerHTML = ("DEX<br>MODIFIER");
            document.getElementById("print-mod-attack").innerHTML = (this.character.dexMod < 0 ? "" : "+") + this.character.dexMod;
            document.getElementById("print-attack-first-one").innerHTML = (this.character.baseAttackBonus + this.character.dexMod);
            if (this.character.small) {
                document.getElementById("print-attack-first-one").innerHTML = (this.character.baseAttackBonus + this.character.dexMod + 1);
            }
        } else {
            document.getElementById("print-attack-first-one").innerHTML = (this.character.baseAttackBonus + this.character.strMod);
            document.getElementById("print-mod-attack").innerHTML = this.character.strMod;
            if (this.character.small) {
                document.getElementById("print-attack-first-one").innerHTML = (this.character.baseAttackBonus + this.character.strMod + 1);
            }
        }

        document.getElementById("print-ranged-first-one").innerHTML = (this.character.baseAttackBonus + this.character.dexMod);
        document.getElementById("print-grapple-total").innerHTML = (this.character.baseAttackBonus + this.character.strMod);

        if (this.character.small) {
            document.getElementById("print-attack-first-one").innerHTML = (this.character.baseAttackBonus + this.character.strMod + 1);
            document.getElementById("print-grapple-total").innerHTML = (this.character.baseAttackBonus + this.character.strMod + 1);
        }

        if (this.character.improvedInitiative === true) {
            this.character.iniMiscMod = 4; // This is so it can be modified later if need be.
            document.getElementById("print-ini-misc").innerHTML = this.character.iniMiscMod;
            document.getElementById("print-ini-total").innerHTML = (this.character.iniMiscMod + this.character.dexMod);
        } else {
            document.getElementById("print-ini-total").innerHTML = this.character.dexMod;
        }

        // Now watch as I print all the skill totals
        let untrained = [true, true, true, true, true, true, false, true, false, true, true, true, true, false, true, true, true, true, false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, false, true];
        let i = 0;
        for (let element in this.character.skills.skillTable) {
            if (this.character.skills.skillTable.hasOwnProperty(element)) {
                console.log(element);
                let ranked = this.character.skills.skillTable[element].rank,
                    temp = (untrained[i] === true || ranked > 0) ? document.getElementById("t-" + element).innerHTML : " "
                document.getElementById("print-skill-" + element + "-total").innerHTML = temp;
                document.getElementById("print-skill-" + element + "-rank").innerHTML = this.character.skills.skillTable[element].rank;
                document.getElementById("print-skill-" + element + "-ab-mod").innerHTML = this.character[this.character.skills.skillTable[element].mod + "Mod"];
                document.getElementById("print-skill-" + element + "-misc-mod").innerHTML = this.character.skills.skillTable[element].misc;
                document.getElementById("print-skill-" + element + "-notes").innerHTML = this.character.skills.skillTable[element].notes;
                i++;
            }
        }

        if (document.getElementById("input_craft").value !== 0) {
            document.getElementById("print-skill-craft-title").innerHTML = ("Craft: " + document.getElementById("wrin-craft").value);
        }
        if (document.getElementById("input_knowledge").value !== 0) {
            document.getElementById("print-skill-knowledge-title").innerHTML = ("Knowledge: " + document.getElementById("wrin-knowledge").value);
        }
        if (document.getElementById("input_perform").value !== 0) {
            document.getElementById("print-skill-perform-title").innerHTML = ("Perform: " + document.getElementById("wrin-perform").value);
        }
        if (document.getElementById("input_profession").value !== 0) {
            document.getElementById("print-skill-profession-title").innerHTML = ("Profession: " + document.getElementById("wrin-profession").value);
        }
        this.character.calculateCarryingCapacity(this.character.strAttr);

        if (this.character.inventory.weaponSlotOne) {
            document.getElementById("print-weapon-slot1-name").innerHTML = this.character.inventory.wSlotOne.name;
            document.getElementById("print-weapon-slot1-weight").innerHTML = this.character.inventory.wSlotOne.weight;
            document.getElementById("print-weapon-slot1-damage").innerHTML = this.character.inventory.wSlotOne.damage;
            document.getElementById("print-weapon-slot1-critical").innerHTML = this.character.inventory.wSlotOne.critical;
            document.getElementById("print-weapon-slot1-range").innerHTML = this.character.inventory.wSlotOne.range;
            document.getElementById("print-weapon-slot1-type").innerHTML = this.character.inventory.wSlotOne.type;
            document.getElementById("print-weapon-slot1-size").innerHTML = this.character.inventory.wSlotOne.size;
            document.getElementById("print-weapon-slot1-reach").innerHTML = this.character.inventory.wSlotOne.reach;
            document.getElementById("print-weapon-slot1-hardness").innerHTML = this.character.inventory.wSlotOne.hardness;
            document.getElementById("print-weapon-slot1-hitPoints").innerHTML = this.character.inventory.wSlotOne.hitPoints;
            document.getElementById("print-weapon-slot1-saves").innerHTML = this.character.inventory.wSlotOne.saves;
            document.getElementById("print-weapon-slot1-notes").innerHTML = this.character.inventory.wSlotOne.notes;
            document.getElementById("print-weapon-slot1-bonus").innerHTML = this.character.inventory.wSlotOne.bonus;
        }

        if (this.character.inventory.weaponSlotTwo) {
            document.getElementById("weapon-slot-two").style.display = "block";
            document.getElementById("print-weapon-slot2-name").innerHTML = this.character.inventory.wSlotTwo.name;
            document.getElementById("print-weapon-slot2-weight").innerHTML = this.character.inventory.wSlotTwo.weight;
            document.getElementById("print-weapon-slot2-damage").innerHTML = this.character.inventory.wSlotTwo.damage;
            document.getElementById("print-weapon-slot2-critical").innerHTML = this.character.inventory.wSlotTwo.critical;
            document.getElementById("print-weapon-slot2-range").innerHTML = this.character.inventory.wSlotTwo.range;
            document.getElementById("print-weapon-slot2-type").innerHTML = this.character.inventory.wSlotTwo.type;
            document.getElementById("print-weapon-slot2-size").innerHTML = this.character.inventory.wSlotTwo.size;
            document.getElementById("print-weapon-slot2-reach").innerHTML = this.character.inventory.wSlotTwo.reach;
            document.getElementById("print-weapon-slot2-hardness").innerHTML = this.character.inventory.wSlotTwo.hardness;
            document.getElementById("print-weapon-slot2-hitPoints").innerHTML = this.character.inventory.wSlotTwo.hitPoints;
            document.getElementById("print-weapon-slot2-saves").innerHTML = this.character.inventory.wSlotTwo.saves;
            document.getElementById("print-weapon-slot2-notes").innerHTML = this.character.inventory.wSlotTwo.notes;
            document.getElementById("print-weapon-slot2-bonus").innerHTML = this.character.inventory.wSlotTwo.bonus;
        }

        if (this.character.inventory.weaponSlotThree) {
            document.getElementById("weapon-slot-thr").style.display = "block";
            document.getElementById("print-weapon-slot3-name").innerHTML = this.character.inventory.wSlotThree.name;
            document.getElementById("print-weapon-slot3-weight").innerHTML = this.character.inventory.wSlotThree.weight;
            document.getElementById("print-weapon-slot3-damage").innerHTML = this.character.inventory.wSlotThree.damage;
            document.getElementById("print-weapon-slot3-critical").innerHTML = this.character.inventory.wSlotThree.critical;
            document.getElementById("print-weapon-slot3-range").innerHTML = this.character.inventory.wSlotThree.range;
            document.getElementById("print-weapon-slot3-type").innerHTML = this.character.inventory.wSlotThree.type;
            document.getElementById("print-weapon-slot3-size").innerHTML = this.character.inventory.wSlotThree.size;
            document.getElementById("print-weapon-slot3-reach").innerHTML = this.character.inventory.wSlotThree.reach;
            document.getElementById("print-weapon-slot3-hardness").innerHTML = this.character.inventory.wSlotThree.hardness;
            document.getElementById("print-weapon-slot3-hitPoints").innerHTML = this.character.inventory.wSlotThree.hitPoints;
            document.getElementById("print-weapon-slot3-saves").innerHTML = this.character.inventory.wSlotThree.saves;
            document.getElementById("print-weapon-slot3-notes").innerHTML = this.character.inventory.wSlotThree.notes;
            document.getElementById("print-weapon-slot3-bonus").innerHTML = this.character.inventory.wSlotThree.bonus;
        }

        if (this.character.inventory.armorSlot) {
            document.getElementById("print-armor-name").innerHTML = this.character.inventory.aSlot.name;
            document.getElementById("print-armor-weight").innerHTML = this.character.inventory.aSlot.weight;
            document.getElementById("print-armor-armorBonus").innerHTML = this.character.inventory.aSlot.armorBonus;
            document.getElementById("print-armor-maxDex").innerHTML = this.character.inventory.aSlot.maxDex;
            document.getElementById("print-armor-check").innerHTML = this.character.inventory.aSlot.check;
            document.getElementById("print-armor-spellFail").innerHTML = this.character.inventory.aSlot.spellFail;
            document.getElementById("print-armor-maxSp").innerHTML = this.character.inventory.aSlot.maxSp;
            document.getElementById("print-armor-hardness").innerHTML = this.character.inventory.aSlot.hardness;
            document.getElementById("print-armor-hitPoints").innerHTML = this.character.inventory.aSlot.hitPoints;
            document.getElementById("print-armor-saves").innerHTML = this.character.inventory.aSlot.saves;
            document.getElementById("print-armor-donning").innerHTML = this.character.inventory.aSlot.donning;
        }

        if (this.character.inventory.sSlot) {
            document.getElementById("armor-slot-two").style.display = "block";
            document.getElementById("print-shield-name").innerHTML = this.character.inventory.sSlot.name;
            document.getElementById("print-shield-weight").innerHTML = this.character.inventory.sSlot.weight;
            document.getElementById("print-shield-armorBonus").innerHTML = this.character.inventory.sSlot.armorBonus;
            document.getElementById("print-shield-maxDex").innerHTML = this.character.inventory.sSlot.maxDex;
            document.getElementById("print-shield-check").innerHTML = this.character.inventory.sSlot.check;
            document.getElementById("print-shield-spellFail").innerHTML = this.character.inventory.sSlot.spellFail;
            document.getElementById("print-shield-maxSp").innerHTML = this.character.inventory.sSlot.maxSp;
            document.getElementById("print-shield-hardness").innerHTML = this.character.inventory.sSlot.hardness;
            document.getElementById("print-shield-hitPoints").innerHTML = this.character.inventory.sSlot.hitPoints;
            document.getElementById("print-shield-saves").innerHTML = this.character.inventory.sSlot.saves;
            document.getElementById("print-shield-donning").innerHTML = this.character.inventory.sSlot.donning;
        }

        // Now Look in the weapons slots for ranged weapons, and print the appropriate ammo in the box,
        // along with Qty purchased.
        for (let i = 1; i < 4; i++) {
            let nameWeapon = document.getElementById("print-weapon-slot" + i + "-name").innerHTML;
            if (nameWeapon === "Longbow" || nameWeapon === "Shortbow" || nameWeapon === "Composite Longbow" || nameWeapon === "Composite Shortbow") {
                document.getElementById("print-weapon-slot" + i + "-ammo").innerHTML = "Arrows | QTY: " + document.getElementById("qty-Arrows").innerHTML;
            } else if (nameWeapon === "Heavy Crossbow" || nameWeapon === "Light Crossbow" || nameWeapon === "Hand Crossbow" || nameWeapon === "Heavy Repeating Crossbow" || nameWeapon === "Light Repeating Crossbow") {
                document.getElementById("print-weapon-slot" + i + "-ammo").innerHTML = "Bolts | QTY: " + document.getElementById("qty-Bolts").innerHTML;
            }
        }

        let whichCons = ["Ration", "Caltrops", "Canvas", "Firewood", "Rope-Hemp", "Rope-Silk", "Arrows", "Bolts", "Bullets", "Torch"],
            whichUnit = [" Day", " Bag", " Sqyd", "lb", "ft", "ft", " ", " ", " ", " "],
            whichName = ["Trail Ration", "Caltrops", "Canvas", "Firewood", "Hemp Rope", "Silk Rope", "Arrows", "Bolts", "Sling Bullets", "Torch"],
            skipper = 0;

        for (let i = 0; i < whichCons.length; i++) {
            let active = 0;
            if (Number(document.getElementById("qty-" + whichCons[i]).innerHTML) > 0) {
                active = "-Active";
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
                    document.getElementById("print-consumable-name-" + (i + 1 + skipper)).innerHTML = whichName[i];
                    document.getElementById("print-consumable-qty-" + (i + 1 + skipper)).innerHTML = Number(document.getElementById("qty-" + whichCons[i]).innerHTML) + whichUnit[i];
                    break;
                default:
                    // Yeah, this is weird, but it basically tells the loop to skip blank cases, instead of printing blank values onto the sheet.
                    skipper -= 1;
                    break;
            }
        }

        this.character.calculateArmorClass();
        this.printLeftoverMoney();
        // alert("Character Sheet successfully populated.");
    }

    /**
     *
     */
    printLeftoverMoney() {
        let money = document.getElementById("copper-remaining").innerHTML,
            gold = Math.floor(money * 0.01),
            silver = (Math.floor(money * 0.1)) - (gold * 10),
            copper = (money) - (gold * 100) - (silver * 10);
        document.getElementById("print-coins-gold").innerHTML = gold;
        document.getElementById("print-coins-silver").innerHTML = silver;
        document.getElementById("print-coins-copper").innerHTML = copper;
    }

    /**
     *
     */
    removeDieRollButtons() {
        for (let i = 0, list = document.getElementsByClassName("roll-attribute"); i < list.length; i++) {
            list[i].style.display = "none";
        }
        document.getElementById("roll-allocate").style.display = "block";
    }

    /**
     *
     * @param {String} whichRules
     */
    rulesSelect(whichRules) {
        switch (whichRules) {
            case "base":
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

    showFinalAttributes() {
        for (let ability in this.character.ability) {
            // Now that the switch is done, and every score is in its final state, let's show them.
            document.getElementById("final-" + ability).innerHTML = this.character.ability[ability];
            document.getElementById("final-" + ability + "-mod").innerHTML = this.character.abilityMod[ability];
        }
    }

    subMenu(whichSubMenu) {

    }
}