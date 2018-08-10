
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

        return this;
    }

    /**
     *
     * @param weaponName
     * @param itemCost
     * @param itemWeight
     * @param dmg
     * @param crit
     * @param rang
     * @param type
     * @param size
     * @param reach
     * @param hardness
     * @param hp
     * @param saves
     */
    buyWeapon(weaponName, itemCost, itemWeight, dmg, crit, rang, type, size, reach, hardness, hp, saves) {
        var goldRemaining = Number(document.getElementById("copper-remaining").innerHTML);

        if (itemCost <= goldRemaining) {
            goldRemaining = goldRemaining - itemCost;
            document.getElementById("copper-remaining").innerHTML = goldRemaining;

            window.itemPurchaseNo += 1;
            document.getElementById("item-purchase-no-" + window.itemPurchaseNo).innerHTML = weaponName;
            document.getElementById("item-purchase-no-" + window.itemPurchaseNo).style.display = "block";

            var totalWeight = Number(document.getElementById("total-weight").innerHTML);
            totalWeight += itemWeight;
            document.getElementById("total-weight").innerHTML = totalWeight;

            var notes = " ";
            var bonus = " ";

            this.equipWeapon(weaponName, itemCost, itemWeight, dmg, crit, rang, type, size, reach, hardness, hp, saves, notes, bonus);

            this.invDisplay();
        } else {
            alert("You cannot afford this item.");
        }

    }

    /**
     *
     * @param weaponName
     * @param itemCost
     * @param itemWeight
     * @param dmg
     * @param crit
     * @param rang
     * @param type
     * @param size
     * @param reach
     * @param hardness
     * @param hp
     * @param saves
     * @param notes
     * @param bonus
     */
    equipWeapon(weaponName, itemCost, itemWeight, dmg, crit, rang, type, size, reach, hardness, hp, saves, notes, bonus) {
        if (this.weaponSlotOne === undefined) {
            var confirmWa = confirm("Do you want to equip this weapon in slot one?");
        } else if (this.weaponSlotTwo === undefined) {
            var confirmWb = confirm("Do you want to equip this weapon in slot two?");
        } else if (this.weaponSlotThree === undefined) {
            var confirmWc = confirm("Do you want to equip this weapon in slot three?");
        } else {
            alert("You have no more open weapon slots. User-added weapon slots are not supported in this version.");
        }

        if (confirmWa) {
            this.weaponSlotOne = true;
            this.wSlotOne = new Weapon(weaponName, itemWeight, dmg, crit, rang, type, size, reach, hardness, hp, saves, notes, bonus);

        }
        if (confirmWb) {
            this.weaponSlotTwo = true;
            this.wSlotTwo = new Weapon(weaponName, itemWeight, dmg, crit, rang, type, size, reach, hardness, hp, saves, notes, bonus);
        }
        if (confirmWc) {
            this.weaponSlotThree = true;
            this.wSlotThree = new Weapon(weaponName, itemWeight, dmg, crit, rang, type, size, reach, hardness, hp, saves, notes, bonus);
        }
    }


    /**
     * Treat: PLATINUM = 1000
     *        GOLD 	   = 100
     *        SILVER   = 10
     *        COPPER   = 1
     * @param mxFactor
     * @param fMonks
     */
    calculateGold(mxFactor, fMonks) {
        var startingGold = 0;
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
     * @param input
     */
    rollStartingGold(input) {
        if (input === "first") {
            switch (this.generator.selClass) {
                case "DRUID":
                    calculateGold(2, 10);
                    break;
                case "SORCERER":
                case "WIZARD":
                    calculateGold(3, 10);
                    break;
                case "BARD":
                case "BARBARIAN":
                    calculateGold(4, 10);
                    break;
                case "CLERIC":
                case "ROGUE":
                    calculateGold(5, 10);
                    break;
                case "FIGHTER":
                case "PALADIN":
                case "RANGER":
                    calculateGold(6, 10);
                    break;
                case "MONK":
                    calculateGold(5, 1);
                    break;
                case "NewBlankClass":
                    // A placeholder for future class additions.
                    break;
            }
        }
        if (input === "leveled") {
            /*
            var gold = 0;
            for ( i = 0 ; i < this.generator.levelAdvance ; i++ ) {
                gold += ( 9 * i ) * 10;
            } */

            switch (Number(this.generator.levelAdvance)) {
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
     * @param itemName
     * @param itemCost
     * @param itemWeight
     */
    buyItem(itemName, itemCost, itemWeight) {

        // alert("window item item-purchase-no :" + window.itemPurchaseNo);

        var goldRemaining = Number(document.getElementById("copper-remaining").innerHTML);
        if (itemCost <= goldRemaining) {
            goldRemaining = goldRemaining - itemCost;
            document.getElementById("copper-remaining").innerHTML = goldRemaining;

            window.itemPurchaseNo += 1;
            document.getElementById("item-purchase-no-" + window.itemPurchaseNo).innerHTML = itemName;
            document.getElementById("item-purchase-no-" + window.itemPurchaseNo).style.display = "block";

            var totalWeight = Number(document.getElementById("total-weight").innerHTML);
            totalWeight += itemWeight;
            document.getElementById("total-weight").innerHTML = totalWeight;

            this.buySpecialItem(itemName, window.itemPurchaseNo);
            this.invDisplay();
        } else {
            alert("You cannot afford this item.");
        }
    }

    /**
     *
     * @param itemQty
     * @param itemName
     * @param itemCost
     * @param itemWeight
     */
    buyItemStack(itemQty, itemName, itemCost, itemWeight) {
        var goldRemaining = Number(document.getElementById("copper-remaining").innerHTML);

        if (itemCost <= goldRemaining) {
            goldRemaining = goldRemaining - itemCost;
            document.getElementById("copper-remaining").innerHTML = goldRemaining;

            var itemQuantity = Number(document.getElementById("qty-" + itemName).innerHTML);

            itemQuantity += itemQty;

            document.getElementById("item-" + itemName).innerHTML = itemName;
            document.getElementById("item-" + itemName).style.display = "block";

            document.getElementById("qty-" + itemName).innerHTML = itemQuantity;
            document.getElementById("qty-" + itemName).style.display = "block";

            var totalWeight = Number(document.getElementById("total-weight").innerHTML);
            totalWeight += itemWeight;
            document.getElementById("total-weight").innerHTML = totalWeight;

            this.invDisplay();
        } else {
            alert("You cannot afford this item.");
        }
    }

    /**
     *
     * @param itemName
     * @param itemNumber
     */
    buySpecialItem(itemName, itemNumber) {
        var goldRemaining;
        switch (itemName) {
            case "Composite Longbow":
                var confirmBow = prompt("Composite bows take a STR bonus. \n Input desired STR bonus. Cost is +100gp (10,000 CP) per point. \n Input a number.");
                goldRemaining = Number(document.getElementById("copper-remaining").innerHTML);
                goldRemaining = goldRemaining - (Number(confirmBow) * 10000);
                document.getElementById("item-purchase-no-" + itemNumber).innerHTML = itemName + " (+" + confirmBow + ")";
                document.getElementById("copper-remaining").innerHTML = goldRemaining;

                break;
            case "Composite Shortbow":
                var confirmBow = prompt("Composite bows take a STR bonus. \n Input desired STR bonus. Cost is +75gp (7,500 CP) per point. \n Input a number.");
                goldRemaining = Number(document.getElementById("copper-remaining").innerHTML);
                goldRemaining = goldRemaining - (Number(confirmBow) * 7500);
                document.getElementById("item-purchase-no-" + itemNumber).innerHTML = itemName + " (+" + confirmBow + ")";
                document.getElementById("copper-remaining").innerHTML = goldRemaining;
                break;
        }
    }

    /**
     *
     * @param armorName
     * @param itemCost
     * @param itemWeight
     * @param armorBonus
     * @param maxDex
     * @param check
     * @param spFail
     * @param maxSp
     * @param hardn
     * @param hp
     * @param saves
     * @param donning
     * @param exs
     */
    buyArmor(armorName, itemCost, itemWeight, armorBonus, maxDex, check, spFail, maxSp, hardn, hp, saves, donning, exs) {
        var goldRemaining = Number(document.getElementById("copper-remaining").innerHTML);
        if (itemCost <= goldRemaining) {
            goldRemaining = goldRemaining - itemCost;
            document.getElementById("copper-remaining").innerHTML = goldRemaining;

            window.itemPurchaseNo += 1;
            document.getElementById("item-purchase-no-" + window.itemPurchaseNo).innerHTML = armorName;
            document.getElementById("item-purchase-no-" + window.itemPurchaseNo).style.display = "block";

            var totalWeight = Number(document.getElementById("total-weight").innerHTML);
            totalWeight += itemWeight;
            document.getElementById("total-weight").innerHTML = totalWeight;

            if (this.armorSlot) {
                var changeArmor = confirm("You already have armor equipped. Replace " + this.aSlot.aName + " with this?");
                if (changeArmor) {
                    this.aSlot = new Armor(armorName, itemWeight, armorBonus, maxDex, check, spFail, maxSp, hardn, hp, saves, donning, exs);
                }
            } else if (this.armorSlot === undefined) {
                var confirmAr = confirm("Do you want to equip this armor?");
            }

            if (confirmAr) {
                this.aSlot = new Armor(armorName, itemWeight, armorBonus, maxDex, check, spFail, maxSp, hardn, hp, saves, donning);
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
     * @param shieldName
     * @param itemCost
     * @param itemWeight
     * @param armorBonus
     * @param maxDex
     * @param check
     * @param spFail
     * @param maxSp
     * @param hardn
     * @param hp
     * @param saves
     * @param donning
     */
    buyShield(shieldName, itemCost, itemWeight, armorBonus, maxDex, check, spFail, maxSp, hardn, hp, saves, donning) {
        var goldRemaining = Number(document.getElementById("copper-remaining").innerHTML);

        if (itemCost <= goldRemaining) {
            goldRemaining = goldRemaining - itemCost;
            document.getElementById("copper-remaining").innerHTML = goldRemaining;

            window.itemPurchaseNo += 1;
            document.getElementById("item-purchase-no-" + window.itemPurchaseNo).innerHTML = shieldName;
            document.getElementById("item-purchase-no-" + window.itemPurchaseNo).style.display = "block";

            var totalWeight = Number(document.getElementById("total-weight").innerHTML);
            totalWeight += itemWeight;
            document.getElementById("total-weight").innerHTML = totalWeight;

            if (this.shieldSlot) {
                var changeArmor = confirm("You already have a shield equipped. Replace " + this.sSlot.shieldName + " with this?");
                if (changeArmor) {
                    this.sSlot = new Shield(shieldName, itemWeight, armorBonus, maxDex, check, spFail, maxSp, hardn, hp, saves, donning);
                }
            }

            if (this.shieldSlot === undefined) {
                var confirmSh = confirm("Do you want to equip this shield?");
            }

            if (confirmSh) {
                this.sSlot = new Shield(shieldName, itemWeight, armorBonus, maxDex, check, spFail, maxSp, hardn, hp, saves, donning);
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
     * @param kindOfItem
     */
    updateCustomForm(kindOfItem) {
        switch (kindOfItem) {
            case "weapon":
                // Print total enhancement bonus from enchantments.
                var base = Number(document.getElementById("cu-w-basecost").value) * 100;
                var qual = Number(document.getElementById("cu-w-qual").value);
                var weaponType = document.getElementById("cu-w-weapon-type").value;
                var material = document.getElementById("cu-w-mater").value;
                var weight = Number(document.getElementById("cu-w-weig").value);
                var baseMaterial = document.getElementById("cu-w-base-material").value;

                var en1 = document.getElementById("cu-w-enhan-val-1").value;
                switch (en1) {
                    case "none":
                        var enchant1 = 0;
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
                        var enchant1 = 2;
                        break;
                    case "spee":
                        var enchant1 = 3;
                        break;
                    case "bril":
                    case "danc":
                        var enchant1 = 4;
                        break;
                    case "vorp":
                        var enchant1 = 5;
                        break;
                    default:
                        var enchant1 = 1;
                        break;
                }
                var en2 = document.getElementById("cu-w-enhan-val-2").value;
                switch (en2) {
                    case "none":
                        var enchant2 = 0;
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
                        var enchant2 = 2;
                        break;
                    case "spee":
                        var enchant2 = 3;
                        break;
                    case "bril":
                    case "danc":
                        var enchant2 = 4;
                        break;
                    case "vorp":
                        var enchant2 = 5;
                        break;
                    default:
                        var enchant2 = 1;
                        break;
                }
                var en3 = document.getElementById("cu-w-enhan-val-3").value;
                switch (en3) {
                    case "none":
                        var enchant3 = 0;
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
                        var enchant3 = 2;
                        break;
                    case "spee":
                        var enchant3 = 3;
                        break;
                    case "bril":
                    case "danc":
                        var enchant3 = 4;
                        break;
                    case "vorp":
                        var enchant3 = 5;
                        break;
                    default:
                        var enchant3 = 1;
                        break;
                }

                var materialPrice = 0;

                switch (material) {
                    case "Standard":
                        var materialPrice = 0;
                        break;
                    case "Adamantine":
                        var materialPrice = 300000;
                        break;
                    case "Mithral":
                        var materialPrice = 50000 * weight;
                        break;
                    case "Deep Crystal":
                        var materialPrice = 100000;
                        break;
                    case "Mundane Crystal":
                        var materialPrice = 30000;
                        break;
                    case "Cold Iron":
                        var materialPrice = base;
                        break;
                    case "Alchemical Silver":
                        switch (weaponType) {
                            case "Light":
                                var materialPrice = 2000;
                                break;
                            case "One-Handed":
                                var materialPrice = 9000;
                                break;
                            case "Two-Handed":
                                var materialPrice = 18000;
                                break;
                        }
                        // var materialPrice = 12500;
                        break;
                }

                switch (baseMaterial) {
                    case "Steel":
                        var list = document.getElementsByClassName("steel-only");
                        for (let i = 0; i < list.length; i++) {
                            list[i].style.display = "block";
                        }
                        var list = document.getElementsByClassName("wood-only");
                        for (let i = 0; i < list.length; i++) {
                            list[i].style.display = "none";
                        }
                        break;
                    case "Wood":
                        var list = document.getElementsByClassName("wood-only");
                        for (let i = 0; i < list.length; i++) {
                            list[i].style.display = "block";
                        }
                        var list = document.getElementsByClassName("steel-only");
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

                var enhan = Number(document.getElementById("cu-w-enhan").innerHTML);

                if (qual === 1 && enhan < 1) {
                    var masterwork = 30000;
                } else {
                    var masterwork = 0;
                }

                switch (material) {
                    case "Darkwood":
                    case "Adamantine":
                    case "Mithral":
                    case "Deep Crystal":
                    case "Mundane Crystal":
                        var masterwork = 0;
                        var qual = 1;
                        break;
                }

                var enhanPrice = (2000 * Math.pow(enhan, 2)) * 100;

                if (material === "Cold Iron") {
                    var enhanPrice = ((2000 * Math.pow(enhan, 2)) * 100) + 200000;
                }

                document.getElementById("cu-w-cost").innerHTML = base + enhanPrice + masterwork + materialPrice;

                var critRan = Number(document.getElementById("cu-w-crit-rang").value);
                var critMult = Number(document.getElementById("cu-w-crit-mult").value);
                document.getElementById("cu-w-crit").innerHTML = critRan + "+/x" + critMult;

                if (weaponType === "Light" || weaponType === "One-Handed" || weaponType === "Two-Handed") {
                    var isMelee = true;
                } else {
                    var isMelee = false;
                }

                if (isMelee) {
                    document.getElementById("cu-w-rang-base").style.display = "none";
                    var list = document.getElementsByClassName("melee-only");
                    for (let i = 0; i < list.length; i++) {
                        list[i].style.display = "block";
                    }
                } else {
                    document.getElementById("cu-w-rang-base").style.display = "block";
                    var list = document.getElementsByClassName("melee-only");
                    for (let i = 0; i < list.length; i++) {
                        list[i].style.display = "none";
                    }
                }
                break;
            case "item":
                var masterwork = Number(document.getElementById("cu-i-qual").value);
                if (masterwork) {
                    document.getElementById("cu-i-whichSkill").style.display = "block";
                } else {
                    document.getElementById("cu-i-whichSkill").style.display = "none";
                }
                /*
                if (document.getElementById("cu-i-skil").value === "write") {
                    document.getElementById("cu-i-writein").style.display = "block";
                } else {
                    document.getElementById("cu-i-writein").style.display = "none";
                }
                */
                break;
            case "armor":
                // var base = Number(document.getElementById("cu-a-basecost").value) * 100;
                // var qual = Number(document.getElementById("cu-a-qual").value);
                break;
        }

    }

    /**
     *
     * @param whichSubMenu
     */
    equipSubMenu(whichSubMenu) {
        var allSubMenus = ["simpweap", "martweap", "exotweap", "armor", "gear", "substances", "tools", "custom"];
        for (let i = 0; i < allSubMenus.length; i++) {
            if (allSubMenus[i] === whichSubMenu) {
                document.getElementById("equip-" + whichSubMenu).style.display = "block";
            } else {
                document.getElementById("equip-" + allSubMenus[i]).style.display = "none";

            }
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
        var kind = document.getElementById("custom-select").value;
        document.getElementById("custom-" + kind).style.display = "block";
        if (kind === "weapon" || kind === "armor") {
            document.getElementById("custom-" + kind + "-display").style.display = "block";
        }
        document.getElementById("equip-custom").style.display = "none";
    }

    /**
     *
     * @param itemKind
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
                        this.generator.featUpdateSkillTwin(skill);
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