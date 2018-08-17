
class Inventory {

    /**
     *
     * @param {CharacterGen} characterGen
     * @returns {Inventory}
     */
    constructor(characterGen) {
        this.generator = characterGen;

        this.armorSlot = {};
        this.aSlot = {};

        this.weaponSlotOne = {};
        this.weaponSlotTwo = {};
        this.weaponSlotThree = {};

        this.wSlotOne = {};
        this.wSlotTwo = {};
        this.wSlotThree = {};

        this.customItemNo = 0;
        this.allSubMenus = ["simpweap", "martweap", "exotweap", "armor", "gear", "substances", "tools", "custom"];

        return this;
    }

    /**
     *
     * @param {String} name
     * @param {number} cost
     * @param {number} weight
     * @param damage
     * @param critical
     * @param range
     * @param type
     * @param size
     * @param reach
     * @param hardness
     * @param hp
     * @param saves
     */
    buyWeapon(name, cost, weight, damage, critical, range, type, size, reach, hardness, hp, saves) {
        let goldRemaining = Number(document.getElementById("copper-remaining").innerHTML),
            totalWeight = Number(document.getElementById("total-weight").innerHTML),
            notes = " ",
            bonus = " ";
        if (cost <= goldRemaining) {
            goldRemaining = goldRemaining - cost;
            window.itemPurchaseNo += 1;
            totalWeight += weight;

            document.getElementById("copper-remaining").innerHTML = goldRemaining;
            document.getElementById("item-purchase-no-" + window.itemPurchaseNo).innerHTML = name;
            document.getElementById("item-purchase-no-" + window.itemPurchaseNo).style.display = "block";
            document.getElementById("total-weight").innerHTML = totalWeight;

            this.equipWeapon(name, cost, weight, damage, critical, range, type, size, reach, hardness, hp, saves, notes, bonus);
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
     * @param damage
     * @param critical
     * @param range
     * @param type
     * @param size
     * @param reach
     * @param hardness
     * @param hp
     * @param saves
     * @param notes
     * @param bonus
     */
    equipWeapon(name, cost, weight, damage, critical, range, type, size, reach, hardness, hp, saves, notes, bonus) {
        if (this.weaponSlotOne === undefined) {
            let confirmWa = confirm("Do you want to equip this weapon in slot one?");
            if (confirmWa) {
                this.weaponSlotOne = true;
                this.wSlotOne = new Weapon(name, weight, damage, critical, range, type, size, reach, hardness, hp, saves, notes, bonus);
            }
        } else if (this.weaponSlotTwo === undefined) {
            let confirmWb = confirm("Do you want to equip this weapon in slot two?");
            if (confirmWb) {
                this.weaponSlotTwo = true;
                this.wSlotTwo = new Weapon(name, weight, damage, critical, range, type, size, reach, hardness, hp, saves, notes, bonus);
            }
        } else if (this.weaponSlotThree === undefined) {
            let confirmWc = confirm("Do you want to equip this weapon in slot three?");
            if (confirmWc) {
                this.weaponSlotThree = true;
                this.wSlotThree = new Weapon(name, weight, damage, critical, range, type, size, reach, hardness, hp, saves, notes, bonus);
            }
        } else {
            alert("You have no more open weapon slots. User-added weapon slots are not supported in this version.");
        }
    }

    /**
     * Treat: PLATINUM = 1000
     *        GOLD 	   = 100
     *        SILVER   = 10
     *        COPPER   = 1
     * @param {number} mxFactor
     * @param {number} fMonks
     */
    calculateGold(mxFactor, fMonks) {
        let startingGold = 0;
        for (let i = 0; i < mxFactor; i++) {	// Roll a d4 [mxFactor] times.
            startingGold += (Math.floor(Math.random() * 4 + 1) * fMonks) * 100; // Calculate Number of Coppers in Possession.
        }
        document.getElementById("copper-remaining").innerHTML = startingGold; // Display.
        document.getElementById("roll-starting-gold").style.display = "none"; // Remove button to prevent repeats.
        document.getElementById("inventory").style.display = "block";
        document.getElementById("equip-variable-buffer").style.display = "block";
    }

    /**
     *
     * @param {String} input
     */
    rollStartingGold(input) {
        if (input === "first") {
            switch (this.generator.character.class) {
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
            switch (Number(this.generator.character.levelAdvance)) {
                case 2:
                    var gold = 900;
                    break;
                case 3:
                    var gold = 2700;
                    break;
                case 4:
                    var gold = 5400;
                    break;
                case 5:
                    var gold = 9000;
                    break;
                case 6:
                    var gold = 13000;
                    break;
                case 7:
                    var gold = 19000;
                    break;
                case 8:
                    var gold = 27000;
                    break;
                case 9:
                    var gold = 36000;
                    break;
                case 10:
                    var gold = 49000;
                    break;
                case 11:
                    var gold = 66000;
                    break;
                case 12:
                    var gold = 88000;
                    break;
                case 13:
                    var gold = 110000;
                    break;
                case 14:
                    var gold = 150000;
                    break;
                case 15:
                    var gold = 200000;
                    break;
                case 16:
                    var gold = 260000;
                    break;
                case 17:
                    var gold = 340000;
                    break;
                case 18:
                    var gold = 440000;
                    break;
                case 19:
                    var gold = 580000;
                    break;
                case 20:
                    var gold = 760000;
                    break;
            }

            document.getElementById("copper-remaining").innerHTML = (gold * 100);
            document.getElementById("roll-starting-gold").style.display = "none"; // Remove button to prevent repeats.
            document.getElementById("inventory").style.display = "block";
            document.getElementById("equip-variable-buffer").style.display = "block";
        }

        if (input === "input") {
            document.getElementById("copper-remaining").innerHTML = document.getElementById("gold-input").value;
            document.getElementById("roll-starting-gold").style.display = "none"; // Remove button to prevent repeats.
            document.getElementById("inventory").style.display = "block";
            document.getElementById("equip-variable-buffer").style.display = "block";
        }
    }

    /**
     *
     */
    invDisplay() {
        if (window.itemPurchaseNo < 61) {
            document.getElementById("equip-variable-buffer").style.height = (300 - (window.itemPurchaseNo * 11)).toString() + "px";
        } else {
            alert("Capacity Reached");
        }
    }

    /**
     *
     * @param {String} name
     * @param {number} cost
     * @param {number} weight
     */
    buyItem(name, cost, weight) {
        let goldRemaining = Number(document.getElementById("copper-remaining").innerHTML);
        if (cost <= goldRemaining) {
            goldRemaining = goldRemaining - cost;
            document.getElementById("copper-remaining").innerHTML = goldRemaining;

            window.itemPurchaseNo += 1;
            document.getElementById("item-purchase-no-" + window.itemPurchaseNo).innerHTML = name;
            document.getElementById("item-purchase-no-" + window.itemPurchaseNo).style.display = "block";

            var totalWeight = Number(document.getElementById("total-weight").innerHTML);
            totalWeight += weight;
            document.getElementById("total-weight").innerHTML = totalWeight;

            this.buySpecialItem(name, window.itemPurchaseNo);
            this.invDisplay();
        } else {
            alert("You cannot afford this item.");
        }
    }

    /**
     *
     * @param quantity
     * @param name
     * @param cost
     * @param weight
     */
    buyItemStack(quantity, name, cost, weight) {
        let goldRemaining = Number(document.getElementById("copper-remaining").innerHTML);
        if (cost <= goldRemaining) {
            goldRemaining = goldRemaining - cost;
            document.getElementById("copper-remaining").innerHTML = goldRemaining;

            var itemQuantity = Number(document.getElementById("qty-" + name).innerHTML);
            itemQuantity += quantity;

            document.getElementById("item-" + name).innerHTML = name;
            document.getElementById("item-" + name).style.display = "block";

            document.getElementById("qty-" + name).innerHTML = itemQuantity;
            document.getElementById("qty-" + name).style.display = "block";

            var totalWeight = Number(document.getElementById("total-weight").innerHTML);
            totalWeight += weight;
            document.getElementById("total-weight").innerHTML = totalWeight;

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
        let goldRemaining, confirmBow;
        switch (name) {
            case "Composite Longbow":
                confirmBow = prompt("Composite bows take a STR bonus. \n Input desired STR bonus. Cost is +100gp (10,000 CP) per point. \n Input a number.");
                goldRemaining = Number(document.getElementById("copper-remaining").innerHTML);
                goldRemaining = goldRemaining - (Number(confirmBow) * 10000);
                document.getElementById("item-purchase-no-" + number).innerHTML = name + " (+" + confirmBow + ")";
                document.getElementById("copper-remaining").innerHTML = goldRemaining;
                break;
            case "Composite Shortbow":
                confirmBow = prompt("Composite bows take a STR bonus. \n Input desired STR bonus. Cost is +75gp (7,500 CP) per point. \n Input a number.");
                goldRemaining = Number(document.getElementById("copper-remaining").innerHTML);
                goldRemaining = goldRemaining - (Number(confirmBow) * 7500);
                document.getElementById("item-purchase-no-" + number).innerHTML = name + " (+" + confirmBow + ")";
                document.getElementById("copper-remaining").innerHTML = goldRemaining;
                break;
        }
    }

    /**
     *
     * @param name
     * @param cost
     * @param weight
     * @param armorBonus
     * @param maxDex
     * @param check
     * @param spellFail
     * @param maxSp
     * @param hardness
     * @param hp
     * @param saves
     * @param donning
     * @param exs
     */
    buyArmor(name, cost, weight, armorBonus, maxDex, check, spellFail, maxSp, hardness, hp, saves, donning, exs) {
        let changeArmor,
            confirmAr,
            goldRemaining = Number(document.getElementById("copper-remaining").innerHTML),
            totalWeight = Number(document.getElementById("total-weight").innerHTML) + weight;
        if (cost <= goldRemaining) {
            goldRemaining = goldRemaining - cost;
            window.itemPurchaseNo += 1;
            document.getElementById("copper-remaining").innerHTML = goldRemaining;
            document.getElementById("item-purchase-no-" + window.itemPurchaseNo).innerHTML = name;
            document.getElementById("item-purchase-no-" + window.itemPurchaseNo).style.display = "block";
            document.getElementById("total-weight").innerHTML = totalWeight;

            if (this.armorSlot) {
                changeArmor = confirm("You already have armor equipped. Replace " + this.aSlot.aName + " with this?");
                if (changeArmor) {
                    this.aSlot = new Armor(name, weight, armorBonus, maxDex, check, spellFail, maxSp, hardness, hp, saves, donning, exs);
                }
            } else if (this.armorSlot === undefined) {
                confirmAr = confirm("Do you want to equip this armor?");
            }

            if (confirmAr) {
                this.aSlot = new Armor(name, weight, armorBonus, maxDex, check, spellFail, maxSp, hardness, hp, saves, donning, exs);
                this.armorSlot = true;
            }

            if (this.armorSlot) {
                document.getElementById("print-armor-bonus").innerHTML = this.aSlot.arBonus;
                // Update AC on character sheet. So it ca be relied upon later for calculations during population.
            }
            this.invDisplay();
        } else {
            alert("You cannot afford this item.");
        }
    }

    /**
     *
     * @param name
     * @param cost
     * @param weight
     * @param armorBonus
     * @param maxDex
     * @param check
     * @param spellFail
     * @param maxSp
     * @param hardness
     * @param hp
     * @param saves
     * @param donning
     */
    buyShield(name, cost, weight, armorBonus, maxDex, check, spellFail, maxSp, hardness, hp, saves, donning) {
        let changeArmor,
            confirmSh,
            goldRemaining = Number(document.getElementById("copper-remaining").innerHTML),
            totalWeight = Number(document.getElementById("total-weight").innerHTML) + weight;

        if (cost <= goldRemaining) {
            goldRemaining = goldRemaining - cost;
            document.getElementById("copper-remaining").innerHTML = goldRemaining;

            window.itemPurchaseNo += 1;
            document.getElementById("item-purchase-no-" + window.itemPurchaseNo).innerHTML = name;
            document.getElementById("item-purchase-no-" + window.itemPurchaseNo).style.display = "block";
            document.getElementById("total-weight").innerHTML = totalWeight;

            if (this.shieldSlot) {
                changeArmor = confirm("You already have a shield equipped. Replace " + this.sSlot.shieldName + " with this?");
                if (changeArmor) {
                    this.sSlot = new Shield(name, weight, armorBonus, maxDex, check, spellFail, maxSp, hardness, hp, saves, donning);
                }
            }

            if (this.shieldSlot === undefined) {
                confirmSh = confirm("Do you want to equip this shield?");
            }

            if (confirmSh) {
                this.sSlot = new Shield(name, weight, armorBonus, maxDex, check, spellFail, maxSp, hardness, hp, saves, donning);
                this.shieldSlot = true;
            }

            if (this.sSlot) {
                document.getElementById("print-shield-bonus").innerHTML = this.sSlot.arBonus;
                // Update AC on character sheet.
            }
            this.invDisplay();
        } else {
            alert("You cannot afford this item.");
        }
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
     *
     * @param {String} whichSubMenu
     */
    equipSubMenu(whichSubMenu) {
        for (let i = 0; i < this.allSubMenus.length; i++) {
            let isSubMenu = this.allSubMenus[i] === whichSubMenu;
            document.getElementById("equip-" + (isSubMenu) ? whichSubMenu : this.allSubMenus[i]).style.display = (isSubMenu) ? "block" : "none";
        }
        document.getElementById("custom-weapon").style.display = "none";
        document.getElementById("custom-weapon-display").style.display = "none";
        document.getElementById("custom-armor").style.display = "none";
        document.getElementById("custom-item").style.display = "none";
        window.scrollTo(0, 0);
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
     * @param {String} itemKind
     */
    createCustomItem(itemKind) {
        switch (itemKind) {
            case "weapon":
                // this.generator.customItemNo += 1;
                // var currentItemNo = this.generator.customItemNo;
                var weaponName = document.getElementById("cu-w-name").value;
                var itemWeight = Number(document.getElementById("cu-w-weig").value);
                var crit = document.getElementById("cu-w-crit").innerHTML;
                var type = document.getElementById("cu-w-dmg-type").value;
                var size = document.getElementById("cu-w-size").value;
                var reach = document.getElementById("cu-w-reac").value;

                var isMelee = document.getElementById("cu-w-weapon-type").value;

                if (isMelee === "Light" || isMelee === "One-Handed" || isMelee === "Two-Handed") {
                    var rang = "&mdash;";
                } else {
                    var rang = document.getElementById("cu-w-rang").value;
                }

                var hardness = document.getElementById("cu-w-hard").value;
                var hp = document.getElementById("cu-w-hitp").value;
                var saves = document.getElementById("cu-w-save").value;

                var dmg = document.getElementById("cu-w-dama").value;

                window.noteOne = document.getElementById("cu-w-enhan-val-1").value;
                window.noteTwo = document.getElementById("cu-w-enhan-val-2").value;
                window.noteThr = document.getElementById("cu-w-enhan-val-3").value;
                window.noteFou = document.getElementById("cu-w-mater").value;
                window.noteFiv = "";

                window.noteIndex = ["One", "Two", "Thr", "Fou", "Fiv"];

                this.decodeNote(window.noteOne);
                this.decodeNote(window.noteTwo);
                this.decodeNote(window.noteThr);
                this.decodeNote(window.noteFou);

                var notes = "| " + window.noteOne + window.noteTwo + window.noteThr + window.noteFou + " |";

                var itemCost = Number(document.getElementById("cu-w-cost").innerHTML);

                var bonus = Number(document.getElementById("cu-w-bonus").innerHTML);

                if (bonus > 0) {
                    bonus = "+" + bonus;
                } else {
                    bonus = " ";
                }


                var material = document.getElementById("cu-w-mater").value;

                switch (material) {
                    case "Steel":
                    case "Adamantine":
                    case "Deep Crystal":
                    case "Mundane Crystal":
                    case "Cold Iron":
                    case "Alchemical Silver":
                        var dmg = dmg + " -1";
                        break;
                    case "Mithral":
                        var itemWeight = itemWeight / 2;
                        break;
                }

                this.equipWeapon(weaponName, itemCost, itemWeight, dmg, crit, rang, type, size, reach, hardness, hp, saves, notes, bonus);

                var goldRemaining = Number(document.getElementById("copper-remaining").innerHTML);
                goldRemaining = goldRemaining - itemCost;
                document.getElementById("copper-remaining").innerHTML = goldRemaining;
                window.itemPurchaseNo += 1;
                document.getElementById("item-purchase-no-" + window.itemPurchaseNo).innerHTML = weaponName + " (" + bonus + ")";
                document.getElementById("item-purchase-no-" + window.itemPurchaseNo).style.display = "block";
                var totalWeight = Number(document.getElementById("total-weight").innerHTML);
                totalWeight += itemWeight;
                document.getElementById("total-weight").innerHTML = totalWeight;

                window.noteOne = "";
                window.noteTwo = "";
                window.noteThr = "";
                window.noteFou = "";
                window.noteFiv = "";

                this.invDisplay();

                document.getElementById("custom-weapon").style.display = "none";
                document.getElementById("custom-weapon-display").style.display = "none";
                document.getElementById("custom-weapon-form").reset();
                break;
            case "item":
                var itemName = document.getElementById("cu-i-name").value;
                var notes = document.getElementById("cu-i-note").value;
                var itemWeight = Number(document.getElementById("cu-i-weig").value);
                var itemCost = Number(document.getElementById("cu-i-cost").value);

                if (notes != "") {
                    var itemName = document.getElementById("cu-i-name").value + " (" + notes + ")";
                }
                var masterwork = Number(document.getElementById("cu-i-qual").value);
                if (masterwork) {
                    itemCost += 5000;
                    var skill = document.getElementById("cu-i-skil").value;

                    if (skill != "write") {
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
     * @param whichNote
     */
    decodeNote(whichNote) {
        for (let i = 0; i < 4 /* window.noteIndex.length */; i++) {
            if (whichNote === (window["note" + window.noteIndex[i]])) {
                switch (window["note" + window.noteIndex[i]]) {
                    case "none":
                        (window["note" + window.noteIndex[i]]) = "";
                        break;
                    case "Steel":
                        (window["note" + window.noteIndex[i]]) = "";
                        break;
                    case "fros":
                        (window["note" + window.noteIndex[i]]) = "Frost";
                        break;
                    case "flam":
                        (window["note" + window.noteIndex[i]]) = "Flaming";
                        break;
                    case "shoc":
                        (window["note" + window.noteIndex[i]]) = "Shock";
                        break;
                    default:
                        // alert("Sw1 default case ping.");
                        break;
                }

                switch (window["note" + window.noteIndex[i]]) {
                    case "Frost":
                    case "Flaming":
                    case "Shock":
                        (window["note" + window.noteIndex[i]]) = (window["note" + window.noteIndex[i]]) + " (+1d6) | ";
                        break;
                    default:
                        // alert("Sw2 default case ping.");
                        break;
                }

            } else {
                // alert("Outside if Statment");
            }
        }
    }
}