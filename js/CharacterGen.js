
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
        this.skills = new Skills(this);
        this.spells = new Spells(this);
        this.feats = new Feats(this);
        this.inventory = new Inventory(this);

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
                this.inventory.equipSubMenu("all-off");
                break;
            case "select-skills":
                document.getElementById(idCalled).style.display = "block";
                document.getElementById("select-feats").style.display = "none";
                this.feats.featsSubMenu("all-off");
                break;
            case "equipment":
                document.getElementById(idCalled).style.display = "block";
                // document.getElementById("inventory").style.display = "block" ;
                if (document.getElementById("copper-remaining").innerHTML === "-") {
                    document.getElementById("roll-starting-gold").style.display = "block";
                }
                document.getElementById("select-feats").style.display = "none";
                document.getElementById("roll-playing").style.display = "none";
                this.feats.featsSubMenu("all-off");
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
        let formName = document.getElementById("form-name").value,
            formPlayer = document.getElementById("form-player").value,
            formAlignment = document.getElementById("form-alignment").value;

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

        if (this.character.numberOfFeats > 0) {
            if (this.character.numberOfFeats !== 0) {
                for (let i = 1; i < (this.character.numberOfFeats + 1); i++) {
                    document.getElementById("print-feat-" + i).innerHTML = document.getElementById("feat-name-" + i).innerHTML;
                }
            }
        }

        if (this.inventory.itemPurchaseNo > 0) {
            if (this.inventory.itemPurchaseNo !== 0) {
                for (let i = 1; i < (this.inventory.itemPurchaseNo + 1); i++) {
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

        for (let i = 0, list = document.getElementsByClassName("print-name"); i < list.length; i++) {
            list[i].innerHTML = (formName);
        }

        for (let i = 0, list = document.getElementsByClassName("print-player"); i < list.length; i++) {
            list[i].innerHTML = (formPlayer);
        }

        for (let i = 0, list = document.getElementsByClassName("print-race"); i < list.length; i++) {
            list[i].innerHTML = (this.character.race);
        }

        for (let i = 0, list = document.getElementsByClassName("print-class"); i < list.length; i++) {
            list[i].innerHTML = (this.character.class);
        }

        document.getElementById("print-alignment").innerHTML = formAlignment;
        document.getElementById("print-class").innerHTML = this.character.class;
        document.getElementById("print-level").innerHTML = this.character.levelAdvance;
        document.getElementById("print-experience").innerHTML = (500 * (this.character.levelAdvance - 1) * this.character.levelAdvance);
        document.getElementById("print-levelup").innerHTML = (500 * (this.character.levelAdvance) * (this.character.levelAdvance + 1));
        document.getElementById("print-ab-str").innerHTML = this.character.strAttr;
        document.getElementById("print-ab-dex").innerHTML = this.character.dexAttr;
        document.getElementById("print-ab-con").innerHTML = this.character.conAttr;
        document.getElementById("print-ab-wis").innerHTML = this.character.wisAttr;
        document.getElementById("print-ab-int").innerHTML = this.character.intAttr;
        document.getElementById("print-ab-cha").innerHTML = this.character.chaAttr;
        document.getElementById("print-sav-for").innerHTML = this.character.fortitudeSave;
        document.getElementById("print-sav-ref").innerHTML = this.character.reflexSave;
        document.getElementById("print-sav-wil").innerHTML = this.character.willSave;

        if (this.character.greatFortitude) {
            document.getElementById("print-sav-for-tot").innerHTML = (this.character.fortitudeSave + this.character.conMod + 2);
            document.getElementById("print-sav-for-misc").innerHTML = 2;
        } else {
            document.getElementById("print-sav-for-tot").innerHTML = (this.character.fortitudeSave + this.character.conMod);
        }

        if (this.character.ironWill) {
            document.getElementById("print-sav-wil-tot").innerHTML = (this.character.willSave + this.character.wisMod + 2);
            document.getElementById("print-sav-wil-misc").innerHTML = 2;
        } else {
            document.getElementById("print-sav-wil-tot").innerHTML = (this.character.willSave + this.character.wisMod);
        }

        if (this.character.lighteningReflexes) {
            document.getElementById("print-sav-ref-tot").innerHTML = (this.character.reflexSave + this.character.dexMod + 2);
            document.getElementById("print-sav-ref-misc").innerHTML = 2;
        } else {
            document.getElementById("print-sav-ref-tot").innerHTML = (this.character.reflexSave + this.character.dexMod);
        }

        if (this.character.toughness) {
            document.getElementById("hit-points").innerHTML = (this.character.hitPoints + 3);
        } else {
            document.getElementById("hit-points").innerHTML = this.character.hitPoints;
        }

        for (let i = 0, listStr = document.getElementsByClassName("print-mod-str"); i < listStr.length; i++) {
            listStr[i].innerHTML = (this.character.strMod < 0 ? "-" + this.character.strMod : "+" + this.character.strMod);
        }
        for (let i = 0, listDex = document.getElementsByClassName("print-mod-dex"); i < listDex.length; i++) {
            listDex[i].innerHTML = (this.character.dexMod < 0 ? "-" + this.character.dexMod : "+" + this.character.dexMod);
        }
        for (let i = 0, listCon = document.getElementsByClassName("print-mod-con"); i < listCon.length; i++) {
            listCon[i].innerHTML = (this.character.conMod < 0 ? "-" + this.character.conMod : "+" + this.character.conMod);
        }
        for (let i = 0, listWis = document.getElementsByClassName("print-mod-wis"); i < listWis.length; i++) {
            listWis[i].innerHTML = (this.character.wisMod < 0 ? "-" + this.character.wisMod : "+" + this.character.wisMod);
        }
        for (let i = 0, listInt = document.getElementsByClassName("print-mod-int"); i < listInt.length; i++) {
            listInt[i].innerHTML = (this.character.intMod < 0 ? "-" + this.character.intMod : "+" + this.character.intMod);
        }
        for (let i = 0, listCha = document.getElementsByClassName("print-mod-cha"); i < listCha.length; i++) {
            listCha[i].innerHTML = (this.character.chaMod < 0 ? "-" + this.character.chaMod : "+" + this.character.chaMod);
        }
        for (let i = 0, listBab = document.getElementsByClassName("print-bab-one"); i < listBab.length; i++) {
            listBab[i].innerHTML = ("+" + this.character.baseAttackBonus);
        }
        if (this.character.levelAdvance > 5) {
            for (let i = 0, listBab = document.getElementsByClassName("print-bab-two"); i < listBab.length; i++) {
                listBab[i].innerHTML = ("+" + this.character.baseAttackBonus2);
            }
        }
        if (this.character.levelAdvance > 10) {
            for (let i = 0, listBab = document.getElementsByClassName("print-bab-three"); i < listBab.length; i++) {
                listBab[i].innerHTML = ("+" + this.character.baseAttackBonus3);
            }
        }
        if (this.character.levelAdvance > 15) {
            for (let i = 0, listBab = document.getElementsByClassName("print-bab-four"); i < listBab.length; i++) {
                listBab[i].innerHTML = ("+" + this.character.baseAttackBonus4);
            }
        }

        if (this.character.weaponFinesse === true) {
            document.getElementById("melee-attack-mod-title").innerHTML = ("DEX<br>MODIFIER");
            document.getElementById("melee-attack-mod").innerHTML = (this.character.dexMod < 0 ? "-" + this.character.dexMod : "+" + this.character.dexMod);
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
        let untrained = [true, true, true, true, true, true, false, true, false, true, true, true, true, false, true, true, true, true, false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, false, true];
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

        this.character.calculateCarryingCapacity(this.character.strAttr);

        if (this.inventory.weaponSlotOne) {
            // alert("it found it true");
            document.getElementById("pr-w-s1-name").innerHTML = this.inventory.wSlotOne.name;
            document.getElementById("pr-w-s1-weight").innerHTML = this.inventory.wSlotOne.weight;
            document.getElementById("pr-w-s1-dmg").innerHTML = this.inventory.wSlotOne.damage;
            document.getElementById("pr-w-s1-crit").innerHTML = this.inventory.wSlotOne.critical;
            document.getElementById("pr-w-s1-rang").innerHTML = this.inventory.wSlotOne.range;
            document.getElementById("pr-w-s1-type").innerHTML = this.inventory.wSlotOne.type;
            document.getElementById("pr-w-s1-size").innerHTML = this.inventory.wSlotOne.size;
            document.getElementById("pr-w-s1-reach").innerHTML = this.inventory.wSlotOne.reach;
            document.getElementById("pr-w-s1-hardn").innerHTML = this.inventory.wSlotOne.hardness;
            document.getElementById("pr-w-s1-hp").innerHTML = this.inventory.wSlotOne.hitPoints;
            document.getElementById("pr-w-s1-saves").innerHTML = this.inventory.wSlotOne.saves;
            document.getElementById("pr-w-s1-notes").innerHTML = this.inventory.wSlotOne.notes;
            document.getElementById("pr-w-s1-atkbonus").innerHTML = this.inventory.wSlotOne.bonus;
        }

        if (this.inventory.weaponSlotTwo) {
            // alert("it found TWO true");
            document.getElementById("weapon-slot-two").style.display = "block";
            document.getElementById("pr-w-s2-name").innerHTML = this.inventory.wSlotTwo.name;
            document.getElementById("pr-w-s2-weight").innerHTML = this.inventory.wSlotTwo.weight;
            document.getElementById("pr-w-s2-dmg").innerHTML = this.inventory.wSlotTwo.damage;
            document.getElementById("pr-w-s2-crit").innerHTML = this.inventory.wSlotTwo.critical;
            document.getElementById("pr-w-s2-rang").innerHTML = this.inventory.wSlotTwo.range;
            document.getElementById("pr-w-s2-type").innerHTML = this.inventory.wSlotTwo.type;
            document.getElementById("pr-w-s2-size").innerHTML = this.inventory.wSlotTwo.size;
            document.getElementById("pr-w-s2-reach").innerHTML = this.inventory.wSlotTwo.reach;
            document.getElementById("pr-w-s2-hardn").innerHTML = this.inventory.wSlotTwo.hardness;
            document.getElementById("pr-w-s2-hp").innerHTML = this.inventory.wSlotTwo.hitPoints;
            document.getElementById("pr-w-s2-saves").innerHTML = this.inventory.wSlotTwo.saves;
            document.getElementById("pr-w-s2-notes").innerHTML = this.inventory.wSlotTwo.notes;
            document.getElementById("pr-w-s2-atkbonus").innerHTML = this.inventory.wSlotTwo.bonus;
        }

        if (this.inventory.weaponSlotThree) {
            // alert("it found Three true");
            document.getElementById("weapon-slot-thr").style.display = "block";
            document.getElementById("pr-w-s3-name").innerHTML = this.inventory.wSlotThree.name;
            document.getElementById("pr-w-s3-weight").innerHTML = this.inventory.wSlotThree.weight;
            document.getElementById("pr-w-s3-dmg").innerHTML = this.inventory.wSlotThree.damage;
            document.getElementById("pr-w-s3-crit").innerHTML = this.inventory.wSlotThree.critical;
            document.getElementById("pr-w-s3-rang").innerHTML = this.inventory.wSlotThree.range;
            document.getElementById("pr-w-s3-type").innerHTML = this.inventory.wSlotThree.type;
            document.getElementById("pr-w-s3-size").innerHTML = this.inventory.wSlotThree.size;
            document.getElementById("pr-w-s3-reach").innerHTML = this.inventory.wSlotThree.wReach;
            document.getElementById("pr-w-s3-hardn").innerHTML = this.inventory.wSlotThree.hardness;
            document.getElementById("pr-w-s3-hp").innerHTML = this.inventory.wSlotThree.hitPoints;
            document.getElementById("pr-w-s3-saves").innerHTML = this.inventory.wSlotThree.saves;
            document.getElementById("pr-w-s3-notes").innerHTML = this.inventory.wSlotThree.notes;
            document.getElementById("pr-w-s3-atkbonus").innerHTML = this.inventory.wSlotThree.bonus;
        }

        if (this.inventory.armorSlot) {
            document.getElementById("pr-armor-name").innerHTML = this.inventory.aSlot.name;
            document.getElementById("pr-armor-weight").innerHTML = this.inventory.aSlot.weight;
            document.getElementById("pr-armor-ar-bonus").innerHTML = this.inventory.aSlot.bonus;
            document.getElementById("pr-armor-m-dex").innerHTML = this.inventory.aSlot.dex;
            document.getElementById("pr-armor-check").innerHTML = this.inventory.aSlot.check;
            document.getElementById("pr-armor-sp-fail").innerHTML = this.inventory.aSlot.spellFail;
            document.getElementById("pr-armor-max-sp").innerHTML = this.inventory.aSlot.maxSp;
            document.getElementById("pr-armor-hardness").innerHTML = this.inventory.aSlot.hardness;
            document.getElementById("pr-armor-hit-points").innerHTML = this.inventory.aSlot.hitPoints;
            document.getElementById("pr-armor-a-saves").innerHTML = this.inventory.aSlot.saves;
            document.getElementById("pr-armor-donning").innerHTML = this.inventory.aSlot.donning;
        }

        if (this.inventory.sSlot) {
            document.getElementById("armor-slot-two").style.display = "block";
            document.getElementById("pr-shield-name").innerHTML = this.inventory.sSlot.name;
            document.getElementById("pr-shield-weight").innerHTML = this.inventory.sSlot.weight;
            document.getElementById("pr-shield-ar-bonus").innerHTML = this.inventory.sSlot.bonus;
            document.getElementById("pr-shield-m-dex").innerHTML = this.inventory.sSlot.dex;
            document.getElementById("pr-shield-check").innerHTML = this.inventory.sSlot.check;
            document.getElementById("pr-shield-sp-fail").innerHTML = this.inventory.sSlot.spellFail;
            document.getElementById("pr-shield-max-sp").innerHTML = this.inventory.sSlot.maxSp;
            document.getElementById("pr-shield-hardness").innerHTML = this.inventory.sSlot.hardness;
            document.getElementById("pr-shield-hit-points").innerHTML = this.inventory.sSlot.hitPoints;
            document.getElementById("pr-shield-saves").innerHTML = this.inventory.sSlot.saves;
            document.getElementById("pr-shield-donning").innerHTML = this.inventory.sSlot.donning;
        }

        // Now Look in the weapons slots for ranged weapons, and print the appropriate ammo in the box, along with Qty purchased.
        // alert( Number(document.getElementById("qty-Arrows").innerHTML) );
        let nameWeapon = document.getElementById("pr-w-s" + i + "-name").innerHTML;
        for (let i = 1; i < 4; i++) {
            if (nameWeapon === "Longbow" || nameWeapon === "Shortbow" || nameWeapon === "Composite Longbow" || nameWeapon === "Composite Shortbow") {
                document.getElementById("pr-w-s" + i + "-ammo").innerHTML = "Arrows | QTY: " + document.getElementById("qty-Arrows").innerHTML;
            } else if (nameWeapon === "Heavy Crossbow" || nameWeapon === "Light Crossbow" || nameWeapon === "Hand Crossbow" || nameWeapon === "Heavy Repeating Crossbow" || nameWeapon === "Light Repeating Crossbow") {
                document.getElementById("pr-w-s" + i + "-ammo").innerHTML = "Bolts | QTY: " + document.getElementById("qty-Bolts").innerHTML;
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
        this.character.calculateArmorClass();
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

}