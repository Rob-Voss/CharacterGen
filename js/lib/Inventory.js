
class Inventory {

    /**
     *
     * @param {CharacterGen} generator
     * @returns {Inventory}
     */
    constructor(generator) {
        this.generator = generator;
        this.character = this.generator.character;

        this.allSubMenus = ["SimpleWeapon", "MartialWeapon", "ExoticWeapon", "Armor", "Gear", "Substances", "Tools", "Custom"];
        this.noteIndex = ["One", "Two", "Three", "Four", "Five"];
        this.itemPurchaseNo = 0;

        this.armorSlot = false;
        this.aSlot = false;
        this.shieldSlot = false;
        this.sSlot = false;

        this.weaponSlotOne = false;
        this.wSlotOne = false;
        this.weaponSlotTwo = false;
        this.wSlotTwo = false;
        this.weaponSlotThree = false;
        this.wSlotThree = false;

        this.startingGold = 0;
        this.goldRemaining = 0;
        this.totalWeight = 0;

        return this;
    }

    /**
     *
     * @param {String} name
     * @param {number} cost
     * @param {number} weight
     * @param {number} armorBonus
     * @param {number} maxDex
     * @param {number} check
     * @param {number} spellFail
     * @param {number} maxSp
     * @param {String} hardness
     * @param {String} hitPoints
     * @param {String} saves
     * @param {String} donning
     * @param {String} exists
     */
    buyArmor(name, cost, weight, armorBonus, maxDex, check, spellFail, maxSp, hardness, hitPoints, saves, donning, exists) {
        let changeArmor,
            confirmAr;
        if (cost <= this.goldRemaining) {
            this.itemPurchaseNo += 1;
            this.updateGoldRemaining(cost);
            this.updateTotalWeight(weight);
            document.getElementById("item-purchase-no-" + this.itemPurchaseNo).innerHTML = name;
            document.getElementById("item-purchase-no-" + this.itemPurchaseNo).style.display = "block";

            if (this.armorSlot) {
                changeArmor = confirm("You already have armor equipped. Replace " + this.aSlot.name + " with this?");
                if (changeArmor) {
                    this.aSlot = new Armor(name, weight, armorBonus, maxDex, check, spellFail, maxSp, hardness, hitPoints, saves, donning, exists);
                }
            } else {
                confirmAr = confirm("Do you want to equip this armor?");
            }

            if (confirmAr) {
                this.aSlot = new Armor(name, weight, armorBonus, maxDex, check, spellFail, maxSp, hardness, hitPoints, saves, donning, exists);
                this.armorSlot = true;
            }

            if (this.armorSlot) {
                document.getElementById("print-armor-bonus").innerHTML = this.aSlot.armorBonus;
                // Update AC on character sheet. So it ca be relied upon later for calculations during population.
            }
            this.invDisplay();
        } else {
            alert("You cannot afford this item.");
        }
    }

    /**
     *
     * @param {String} name
     * @param {number} cost
     * @param {number} weight
     */
    buyItem(name, cost, weight) {
        if (cost <= this.goldRemaining) {
            this.itemPurchaseNo += 1;
            this.updateGoldRemaining(cost);
            this.updateTotalWeight(weight);
            document.getElementById("item-purchase-no-" + this.itemPurchaseNo).innerHTML = name;
            document.getElementById("item-purchase-no-" + this.itemPurchaseNo).style.display = "block";

            this.buySpecialItem(name, this.itemPurchaseNo);
            this.invDisplay();
        } else {
            alert("You cannot afford this item.");
        }
    }

    /**
     *
     * @param {number} quantity
     * @param {String} name
     * @param {number} cost
     * @param {number} weight
     */
    buyItemStack(quantity, name, cost, weight) {
        if (cost <= this.goldRemaining) {
            let itemQuantity = Number(document.getElementById("qty-" + name).innerHTML) + quantity;
            this.updateGoldRemaining(cost);
            this.updateTotalWeight(weight);

            document.getElementById("item-" + name).innerHTML = name;
            document.getElementById("item-" + name).style.display = "block";
            document.getElementById("qty-" + name).innerHTML = itemQuantity;
            document.getElementById("qty-" + name).style.display = "block";

            this.invDisplay();
        } else {
            alert("You cannot afford this item.");
        }
    }

    /**
     *
     * @param {String} name
     * @param {number} cost
     * @param {number} weight
     * @param {number} armorBonus
     * @param {number} maxDex
     * @param {number} check
     * @param {number} spellFail
     * @param {number} maxSp
     * @param {String} hardness
     * @param {String} hitPoints
     * @param {String} saves
     * @param {String} donning
     */
    buyShield(name, cost, weight, armorBonus, maxDex, check, spellFail, maxSp, hardness, hitPoints, saves, donning) {
        let changeArmor,
            confirmSh;
        if (cost <= this.goldRemaining) {
            this.itemPurchaseNo += 1;
            this.updateGoldRemaining(cost);
            this.updateTotalWeight(weight);
            document.getElementById("item-purchase-no-" + this.itemPurchaseNo).innerHTML = name;
            document.getElementById("item-purchase-no-" + this.itemPurchaseNo).style.display = "block";

            if (this.shieldSlot) {
                changeArmor = confirm("You already have a shield equipped. Replace " + this.sSlot.name + " with this?");
                if (changeArmor) {
                    this.sSlot = new Shield(name, weight, armorBonus, maxDex, check, spellFail, maxSp, hardness, hitPoints, saves, donning);
                }
            } else if (this.shieldSlot === undefined) {
                confirmSh = confirm("Do you want to equip this shield?");
            }

            if (confirmSh) {
                this.sSlot = new Shield(name, weight, armorBonus, maxDex, check, spellFail, maxSp, hardness, hitPoints, saves, donning);
                this.shieldSlot = true;
            }

            if (this.sSlot) {
                document.getElementById("print-shield-bonus").innerHTML = this.sSlot.armorBonus;
                // Update AC on character sheet.
            }
            this.invDisplay();
        } else {
            alert("You cannot afford this item.");
        }
    }

    /**
     *
     * @param {String} name
     * @param {String} number
     */
    buySpecialItem(name, number) {
        let confirmBow, cost;
        switch (name) {
            case "Composite Longbow":
                confirmBow = prompt("Composite bows take a STR bonus. \n Input desired STR bonus. Cost is +100gp (10,000 CP) per point. \n Input a number.");
                cost = 10000;
                break;
            case "Composite Shortbow":
                confirmBow = prompt("Composite bows take a STR bonus. \n Input desired STR bonus. Cost is +75gp (7,500 CP) per point. \n Input a number.");
                cost = 7500;
                break;
        }
        this.updateGoldRemaining(Number(confirmBow) * cost);
        document.getElementById("item-purchase-no-" + number).innerHTML = name + " (+" + confirmBow + ")";
    }

    /**
     *
     * @param {String} name
     * @param {number} cost
     * @param {number} weight
     * @param {String} damage
     * @param {String} critical
     * @param {String} range
     * @param {String} type
     * @param {String} size
     * @param {String} reach
     * @param {String} hardness
     * @param {String} hitPoints
     * @param {String} saves
     */
    buyWeapon(name, cost, weight, damage, critical, range, type, size, reach, hardness, hitPoints, saves) {
        if (cost <= this.goldRemaining) {
            this.itemPurchaseNo += 1;
            this.updateGoldRemaining(cost);
            this.updateTotalWeight(weight);
            document.getElementById("item-purchase-no-" + this.itemPurchaseNo).innerHTML = name;
            document.getElementById("item-purchase-no-" + this.itemPurchaseNo).style.display = "block";

            this.equipWeapon(name, cost, weight, damage, critical, range, type, size, reach, hardness, hitPoints, saves, " ", " ");
            this.invDisplay();
        } else {
            alert("You cannot afford this item.");
        }
    }

    /**
     * Treat:  PLATINUM = 1000, GOLD = 100, SILVER = 10, COPPER = 1
     * @param {number} mxFactor
     * @param {number} fMonks
     */
    calculateGold(mxFactor, fMonks) {
        for (let i = 0; i < mxFactor; i++) {	// Roll a d4 [mxFactor] times.
            this.startingGold += (Math.floor(Math.random() * 4 + 1) * fMonks) * 100; // Calculate Number of Coppers in Possession.
        }
        document.getElementById("copper-remaining").innerHTML = this.startingGold; // Display.
        document.getElementById("roll-starting-gold").style.display = "none"; // Remove button to prevent repeats.
        document.getElementById("inventory").style.display = "block";
        document.getElementById("equip-variable-buffer").style.display = "block";
    }

    /**
     *
     * @param {String} itemKind
     */
    createCustomItem(itemKind) {
        switch (itemKind) {
            case "weapon":
                // this.generator.customItemNo += 1;
                // var currentItemNo = this.generator.customItemNo;
                let weaponName = document.getElementById("cu-w-name").value,
                    weaponWeight = Number(document.getElementById("cu-w-weig").value),
                    weaponCost = Number(document.getElementById("cu-w-cost").innerHTML),
                    critical = document.getElementById("cu-w-crit").innerHTML,
                    type = document.getElementById("cu-w-dmg-type").value,
                    size = document.getElementById("cu-w-size").value,
                    reach = document.getElementById("cu-w-reac").value,
                    isMelee = document.getElementById("cu-w-weapon-type").value,
                    hardness = document.getElementById("cu-w-hard").value,
                    hitPoints = document.getElementById("cu-w-hitp").value,
                    saves = document.getElementById("cu-w-save").value,
                    damage = document.getElementById("cu-w-dama").value,
                    range = (isMelee === "Light" || isMelee === "One-Handed" || isMelee === "Two-Handed") ? "&mdash;" : document.getElementById("cu-w-rang").value,
                    bonus = (Number(document.getElementById("cu-w-bonus").innerHTML) > 0) ? "+" + Number(document.getElementById("cu-w-bonus").innerHTML) : " ",
                    material = document.getElementById("cu-w-mater").value;

                this.noteOne = document.getElementById("cu-w-enhan-val-1").value;
                this.noteTwo = document.getElementById("cu-w-enhan-val-2").value;
                this.noteThree = document.getElementById("cu-w-enhan-val-3").value;
                this.noteFour = document.getElementById("cu-w-mater").value;
                this.noteFive = "";

                this.decodeNote(this.noteOne);
                this.decodeNote(this.noteTwo);
                this.decodeNote(this.noteThree);
                this.decodeNote(this.noteFour);

                notes = "| " + this.noteOne + this.noteTwo + this.noteThree + this.noteFour + " |";

                switch (material) {
                    case "Steel":
                    case "Adamantine":
                    case "Deep Crystal":
                    case "Mundane Crystal":
                    case "Cold Iron":
                    case "Alchemical Silver":
                        damage = damage + " -1";
                        break;
                    case "Mithral":
                        weaponWeight = weaponWeight / 2;
                        break;
                }
                this.equipWeapon(weaponName, weaponCost, weaponWeight, damage, critical, range, type, size, reach, hardness, hitPoints, saves, notes, bonus);
                this.updateGoldRemaining(weaponCost);
                this.updateTotalWeight(weaponWeight);
                this.itemPurchaseNo += 1;
                document.getElementById("item-purchase-no-" + this.itemPurchaseNo).innerHTML = weaponName + " (" + bonus + ")";
                document.getElementById("item-purchase-no-" + this.itemPurchaseNo).style.display = "block";

                this.noteOne = "";
                this.noteTwo = "";
                this.noteThree = "";
                this.noteFour = "";
                this.noteFive = "";

                this.invDisplay();

                document.getElementById("custom-weapon").style.display = "none";
                document.getElementById("custom-weapon-display").style.display = "none";
                document.getElementById("custom-weapon-form").reset();
                break;
            case "item":
                let itemName = document.getElementById("cu-i-name").value,
                    itemWeight = Number(document.getElementById("cu-i-weig").value),
                    itemCost = Number(document.getElementById("cu-i-cost").value),
                    masterwork = Number(document.getElementById("cu-i-qual").value),
                    notes = document.getElementById("cu-i-note").value,
                    skill = document.getElementById("cu-i-skil").value;
                if (notes !== "") {
                    itemName = document.getElementById("cu-i-name").value + " (" + notes + ")";
                }
                if (masterwork) {
                    itemCost += 5000;
                    if (skill !== "write") {
                        this.generator.feats.featUpdateSkillTwin(skill);
                        this.generator.calcPoints();
                    }
                }

                this.buyItem(itemName, itemCost, itemWeight);

                document.getElementById("cu-i-whichSkill").style.display = "none";
                document.getElementById("custom-item").style.display = "none";
                document.getElementById("custom-item-form").reset();
                break;
        }
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
     * @param {String} whichNote
     */
    decodeNote(whichNote) {
        for (let i = 0; i < 4 /* this.noteIndex.length */; i++) {
            if (whichNote === this["note" + this.noteIndex[i]]) {
                switch (this["note" + this.noteIndex[i]]) {
                    case "none":
                        this["note" + this.noteIndex[i]] = "";
                        break;
                    case "Steel":
                        this["note" + this.noteIndex[i]] = "";
                        break;
                    case "Frost":
                        this["note" + this.noteIndex[i]] = "Frost (+1d6) | ";
                        break;
                    case "Flaming":
                        this["note" + this.noteIndex[i]] = "Flaming (+1d6) | ";
                        break;
                    case "Shock":
                        this["note" + this.noteIndex[i]] = "Shock (+1d6) | ";
                        break;
                    default:
                        // alert("Sw1 default case ping.");
                        break;
                }
            } else {
                // alert("Outside if Statement");
            }
        }
    }

    /**
     *
     * @param {String} whichSubMenu
     */
    equipSubMenu(whichSubMenu) {
        for (let i = 0; i < this.allSubMenus.length; i++) {
            let isSubMenu = this.allSubMenus[i] === whichSubMenu,
                equipName = "equip-" + ((isSubMenu) ? whichSubMenu : this.allSubMenus[i]),
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
     *
     * @param {String} name
     * @param {number} cost
     * @param {number} weight
     * @param {String} damage
     * @param {String} critical
     * @param {String} range
     * @param {String} type
     * @param {String} size
     * @param {String} reach
     * @param {String} hardness
     * @param {String} hitPoints
     * @param {String} saves
     * @param {String} notes
     * @param {String} bonus
     */
    equipWeapon(name, cost, weight, damage, critical, range, type, size, reach, hardness, hitPoints, saves, notes, bonus) {
        if (this.weaponSlotOne === false) {
            let confirmWa = confirm("Do you want to equip this weapon in slot one?");
            if (confirmWa) {
                this.weaponSlotOne = true;
                this.wSlotOne = new Weapon(name, weight, damage, critical, range, type, size, reach, hardness, hitPoints, saves, notes, bonus);
            }
        } else if (this.weaponSlotTwo === false) {
            let confirmWb = confirm("Do you want to equip this weapon in slot two?");
            if (confirmWb) {
                this.weaponSlotTwo = true;
                this.wSlotTwo = new Weapon(name, weight, damage, critical, range, type, size, reach, hardness, hitPoints, saves, notes, bonus);
            }
        } else if (this.weaponSlotThree === false) {
            let confirmWc = confirm("Do you want to equip this weapon in slot three?");
            if (confirmWc) {
                this.weaponSlotThree = true;
                this.wSlotThree = new Weapon(name, weight, damage, critical, range, type, size, reach, hardness, hitPoints, saves, notes, bonus);
            }
        } else {
            alert("You have no more open weapon slots. User-added weapon slots are not supported in this version.");
        }
    }

    /**
     *
     */
    invDisplay() {
        if (this.itemPurchaseNo < 61) {
            document.getElementById("equip-variable-buffer").style.height = (300 - (this.itemPurchaseNo * 11)).toString() + "px";
        } else {
            alert("Capacity Reached");
        }
        document.getElementById("copper-remaining").innerHTML = this.goldRemaining;
    }

    /**
     *
     * @param {String} input
     */
    rollStartingGold(input) {
        if (input === "first") {
            switch (this.character.class) {
                case "DRUID":
                    this.calculateGold(2, 10);
                    break;
                case "SORCERER":
                case "WIZARD":
                    this.calculateGold(3, 10);
                    break;
                case "BARD":
                case "BARBARIAN":
                    this.calculateGold(4, 10);
                    break;
                case "CLERIC":
                case "ROGUE":
                    this.calculateGold(5, 10);
                    break;
                case "FIGHTER":
                case "PALADIN":
                case "RANGER":
                    this.calculateGold(6, 10);
                    break;
                case "MONK":
                    this.calculateGold(5, 1);
                    break;
                case "NewBlankClass":
                    // A placeholder for future class additions.
                    break;
            }
        }

        if (input === "leveled") {
            switch (Number(this.character.levelAdvance)) {
                case 2:
                    this.startingGold = 900;
                    break;
                case 3:
                    this.startingGold = 2700;
                    break;
                case 4:
                    this.startingGold = 5400;
                    break;
                case 5:
                    this.startingGold = 9000;
                    break;
                case 6:
                    this.startingGold = 13000;
                    break;
                case 7:
                    this.startingGold = 19000;
                    break;
                case 8:
                    this.startingGold = 27000;
                    break;
                case 9:
                    this.startingGold = 36000;
                    break;
                case 10:
                    this.startingGold = 49000;
                    break;
                case 11:
                    this.startingGold = 66000;
                    break;
                case 12:
                    this.startingGold = 88000;
                    break;
                case 13:
                    this.startingGold = 110000;
                    break;
                case 14:
                    this.startingGold = 150000;
                    break;
                case 15:
                    this.startingGold = 200000;
                    break;
                case 16:
                    this.startingGold = 260000;
                    break;
                case 17:
                    this.startingGold = 340000;
                    break;
                case 18:
                    this.startingGold = 440000;
                    break;
                case 19:
                    this.startingGold = 580000;
                    break;
                case 20:
                    this.startingGold = 760000;
                    break;
            }

            document.getElementById("copper-remaining").innerHTML = (this.startingGold * 100);
            document.getElementById("roll-starting-gold").style.display = "none"; // Remove button to prevent repeats.
            document.getElementById("inventory").style.display = "block";
            document.getElementById("equip-variable-buffer").style.display = "block";
        }

        if (input === "input") {
            this.startingGold = document.getElementById("gold-input").value;
            document.getElementById("copper-remaining").innerHTML = this.startingGold;
            document.getElementById("roll-starting-gold").style.display = "none"; // Remove button to prevent repeats.
            document.getElementById("inventory").style.display = "block";
            document.getElementById("equip-variable-buffer").style.display = "block";
        }
        this.goldRemaining = this.startingGold;
        document.getElementById("copper-start").innerHTML = this.startingGold;
        document.getElementById("copper-remaining").innerHTML = this.goldRemaining;
    }

    /**
     *
     * @param {String} kindOfItem
     */
    updateCustomForm(kindOfItem) {
        switch (kindOfItem) {
            case "weapon":
                // Print total enhancement bonus from enchantments.
                let enchant1,
                    enchant2,
                    enchant3,
                    materialPrice = 0,
                    list,
                    isMelee,
                    base = Number(document.getElementById("cu-w-basecost").value) * 100,
                    qual = Number(document.getElementById("cu-w-qual").value),
                    weaponType = document.getElementById("cu-w-weapon-type").value,
                    material = document.getElementById("cu-w-mater").value,
                    weight = Number(document.getElementById("cu-w-weig").value),
                    baseMaterial = document.getElementById("cu-w-base-material").value,
                    critRan = Number(document.getElementById("cu-w-crit-rang").value),
                    critMult = Number(document.getElementById("cu-w-crit-mult").value),
                    en1 = document.getElementById("cu-w-enhan-val-1").value,
                    en2 = document.getElementById("cu-w-enhan-val-2").value,
                    en3 = document.getElementById("cu-w-enhan-val-3").value,
                    enhan = Number(document.getElementById("cu-w-enhan").innerHTML),
                    masterwork = (qual === 1 && enhan < 1) ? 30000 : 0,
                    enhanPrice = (2000 * Math.pow(enhan, 2)) * 100;

                switch (en1) {
                    case "none":
                        enchant1 = 0;
                        break;
                    case "anar":
                    case "axio":
                    case "disr":
                    case "flbu":
                    case "icbu":
                    case "holy":
                    case "shbu":
                    case "unho":
                    case "woun":
                        enchant1 = 2;
                        break;
                    case "spee":
                        enchant1 = 3;
                        break;
                    case "bril":
                    case "danc":
                        enchant1 = 4;
                        break;
                    case "vorp":
                        enchant1 = 5;
                        break;
                    default:
                        enchant1 = 1;
                        break;
                }

                switch (en2) {
                    case "none":
                        enchant2 = 0;
                        break;
                    case "anar":
                    case "axio":
                    case "disr":
                    case "flbu":
                    case "icbu":
                    case "holy":
                    case "shbu":
                    case "unho":
                    case "woun":
                        enchant2 = 2;
                        break;
                    case "spee":
                        enchant2 = 3;
                        break;
                    case "bril":
                    case "danc":
                        enchant2 = 4;
                        break;
                    case "vorp":
                        enchant2 = 5;
                        break;
                    default:
                        enchant2 = 1;
                        break;
                }

                switch (en3) {
                    case "none":
                        enchant3 = 0;
                        break;
                    case "anar":
                    case "axio":
                    case "disr":
                    case "flbu":
                    case "icbu":
                    case "holy":
                    case "shbu":
                    case "unho":
                    case "woun":
                        enchant3 = 2;
                        break;
                    case "spee":
                        enchant3 = 3;
                        break;
                    case "bril":
                    case "danc":
                        enchant3 = 4;
                        break;
                    case "vorp":
                        enchant3 = 5;
                        break;
                    default:
                        enchant3 = 1;
                        break;
                }

                switch (material) {
                    case "Standard":
                        materialPrice = 0;
                        break;
                    case "Adamantine":
                        materialPrice = 300000;
                        break;
                    case "Mithral":
                        materialPrice = 50000 * weight;
                        break;
                    case "Deep Crystal":
                        materialPrice = 100000;
                        break;
                    case "Mundane Crystal":
                        materialPrice = 30000;
                        break;
                    case "Cold Iron":
                        materialPrice = base;
                        break;
                    case "Alchemical Silver":
                        switch (weaponType) {
                            case "Light":
                                materialPrice = 2000;
                                break;
                            case "One-Handed":
                                materialPrice = 9000;
                                break;
                            case "Two-Handed":
                                materialPrice = 18000;
                                break;
                        }
                        // var materialPrice = 12500;
                        break;
                }

                switch (baseMaterial) {
                    case "Steel":
                        list = document.getElementsByClassName("steel-only");
                        for (let i = 0; i < list.length; i++) {
                            list[i].style.display = "block";
                        }
                        list = document.getElementsByClassName("wood-only");
                        for (let i = 0; i < list.length; i++) {
                            list[i].style.display = "none";
                        }
                        break;
                    case "Wood":
                        list = document.getElementsByClassName("wood-only");
                        for (let i = 0; i < list.length; i++) {
                            list[i].style.display = "block";
                        }
                        list = document.getElementsByClassName("steel-only");
                        for (let i = 0; i < list.length; i++) {
                            list[i].style.display = "none";
                        }
                        break;
                }

                document.getElementById("cu-w-qual-disp").innerHTML = qual;
                document.getElementById("cu-w-enhan").innerHTML = enchant1 + enchant2 + enchant3;
                document.getElementById("cu-w-bonus").innerHTML = qual;

                if (enchant1 + enchant2 + enchant3 > 0) {
                    document.getElementById("cu-w-qual-disp").innerHTML = 1;
                    document.getElementById("cu-w-bonus").innerHTML = enchant1 + enchant2 + enchant3;
                    if (enchant1 + enchant2 + enchant3 > 5) {
                        document.getElementById("cu-w-bonus").innerHTML = 5;
                    }
                }

                switch (material) {
                    case "Darkwood":
                    case "Adamantine":
                    case "Mithral":
                    case "Deep Crystal":
                    case "Mundane Crystal":
                        masterwork = 0;
                        qual = 1;
                        break;
                }

                if (material === "Cold Iron") {
                    enhanPrice = ((2000 * Math.pow(enhan, 2)) * 100) + 200000;
                }

                document.getElementById("cu-w-cost").innerHTML = base + enhanPrice + masterwork + materialPrice;
                document.getElementById("cu-w-crit").innerHTML = critRan + "+/x" + critMult;

                isMelee = (weaponType === "Light" || weaponType === "One-Handed" || weaponType === "Two-Handed");

                if (isMelee) {
                    document.getElementById("cu-w-rang-base").style.display = "none";
                    list = document.getElementsByClassName("melee-only");
                    for (let i = 0; i < list.length; i++) {
                        list[i].style.display = "block";
                    }
                } else {
                    document.getElementById("cu-w-rang-base").style.display = "block";
                    list = document.getElementsByClassName("melee-only");
                    for (let i = 0; i < list.length; i++) {
                        list[i].style.display = "none";
                    }
                }
                break;
            case "item":
                masterwork = Number(document.getElementById("cu-i-qual").value);
                document.getElementById("cu-i-whichSkill").style.display = (masterwork) ? "block" : "none";
                break;
            case "armor":
                // var base = Number(document.getElementById("cu-a-basecost").value) * 100;
                // var qual = Number(document.getElementById("cu-a-qual").value);
                break;
        }

    }

    /**
     * Update the total weight
     * @param {number} weight
     */
    updateTotalWeight(weight) {
        this.totalWeight += weight;
        document.getElementById("total-weight").innerHTML = this.totalWeight;
    }

    /**
     * Update the gold remaining
     * @param {number} cost
     */
    updateGoldRemaining(cost) {
        this.goldRemaining -= cost;
        document.getElementById("copper-remaining").innerHTML = this.goldRemaining;
    }

}