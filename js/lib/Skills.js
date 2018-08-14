
class Skills {

    /**
     *
     * @param {CharacterGen} characterGen
     * @returns {Skills}
     */
    constructor(characterGen) {
        this.generator = characterGen;

        return this;
    }

    /**
     *
     */
    acceptSkills() {
        if (this.generator.character.skPtsRemaining === 0) {
            var confirmAccSk = confirm("Are you sure you are finished allocating skill points?");
        } else if (this.generator.character.skPtsRemaining > 0) {
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
     */
    addSkill() {
        this.generator.blankCounter += 1;
        // functionality that references the input relies on this.generator.blankcounter.
        // functionality that defines the output relies on this.generator.blank[whatever]counter
        switch (document.getElementById("wrin-skill-select-" + this.generator.blankCounter).value) {
            case "craft":
                this.generator.blankCraftCounter += 1;
                document.getElementById("wrin-craft-" + this.generator.blankCraftCounter).style.display = "block";
                document.getElementById("print-wrin-craft-" + this.generator.blankCraftCounter).innerHTML = "Craft: " + document.getElementById("blank-subtype-" + this.generator.blankCounter).value;
                if (document.getElementById("wrin-inclass-" + this.generator.blankCounter).value === "true") {
                    var rankPoints = Number(document.getElementById("bla" + Number(35 + this.generator.blankCounter)).value);
                } else {
                    var rankPoints = Number(document.getElementById("bla" + Number(35 + this.generator.blankCounter)).value) / 2;
                }
                document.getElementById("print-wrin-craft-total-" + this.generator.blankCraftCounter).innerHTML = "+ " + Number(rankPoints + Number(document.getElementById("wrin-skill-abmod-" + this.generator.blankCounter).value) + Number(document.getElementById("wrin-skill-misc-" + this.generator.blankCounter).value));
                break;
            case "knowledge":
                this.generator.blankKnowledgeCounter += 1;
                document.getElementById("wrin-knowledge-" + this.generator.blankKnowledgeCounter).style.display = "block";
                document.getElementById("print-wrin-knowledge-" + this.generator.blankKnowledgeCounter).innerHTML = "Knowledge: " + document.getElementById("blank-subtype-" + this.generator.blankCounter).value;
                if (document.getElementById("wrin-inclass-" + this.generator.blankCounter).value === "true") {
                    var rankPoints = Number(document.getElementById("bla" + Number(35 + this.generator.blankCounter)).value);
                } else {
                    var rankPoints = Number(document.getElementById("bla" + Number(35 + this.generator.blankCounter)).value) / 2;
                }
                document.getElementById("print-wrin-knowledge-total-" + this.generator.blankKnowledgeCounter).innerHTML = "+ " + Number(rankPoints + Number(document.getElementById("wrin-skill-abmod-" + this.generator.blankCounter).value) + Number(document.getElementById("wrin-skill-misc-" + this.generator.blankCounter).value));
                break;
            case "perform":
                this.generator.blankPerformCounter += 1;
                document.getElementById("wrin-perform-" + this.generator.blankPerformCounter).style.display = "block";
                document.getElementById("print-wrin-perform-" + this.generator.blankPerformCounter).innerHTML = "Perform: " + document.getElementById("blank-subtype-" + this.generator.blankCounter).value;
                if (document.getElementById("wrin-inclass-" + this.generator.blankCounter).value === "true") {
                    var rankPoints = Number(document.getElementById("bla" + Number(35 + this.generator.blankCounter)).value);
                } else {
                    var rankPoints = Number(document.getElementById("bla" + Number(35 + this.generator.blankCounter)).value) / 2;
                }
                document.getElementById("print-wrin-perform-total-" + this.generator.blankPerformCounter).innerHTML = "+ " + Number(rankPoints + Number(document.getElementById("wrin-skill-abmod-" + this.generator.blankCounter).value) + Number(document.getElementById("wrin-skill-misc-" + this.generator.blankCounter).value));
                break;
            case "profession":
                this.generator.blankProfessionCounter += 1;
                document.getElementById("wrin-profession-" + this.generator.blankProfessionCounter).style.display = "block";
                document.getElementById("print-wrin-profession-" + this.generator.blankProfessionCounter).innerHTML = "Profession: " + document.getElementById("blank-subtype-" + this.generator.blankCounter).value;
                if (document.getElementById("wrin-inclass-" + this.generator.blankCounter).value === "true") {
                    var rankPoints = Number(document.getElementById("bla" + Number(35 + this.generator.blankCounter)).value);
                } else {
                    var rankPoints = Number(document.getElementById("bla" + Number(35 + this.generator.blankCounter)).value) / 2;
                }
                document.getElementById("print-wrin-profession-total-" + this.generator.blankProfessionCounter).innerHTML = "+ " + Number(rankPoints + Number(document.getElementById("wrin-skill-abmod-" + this.generator.blankCounter).value) + Number(document.getElementById("wrin-skill-misc-" + this.generator.blankCounter).value));
                break;
            case "writein":
                alert("Only Craft: [subtype] skills work at this point. Pending update.");
                break;

        }
        if (this.generator.blankCraftCounter === 4) {
            // Remove Craft as an option, all further crafts must be completely write-in, at the bottom.
            var list = document.getElementsByClassName("all-wrin-craft");
            for (let i = 0; i < list.length; i++) {
                list[i].style.display = "none";
            }
        }
        if (this.generator.blankKnowledgeCounter === 4) {
            // Remove Craft as an option, all further crafts must be completely write-in, at the bottom.
            var list = document.getElementsByClassName("all-wrin-knowledge");
            for (let i = 0; i < list.length; i++) {
                list[i].style.display = "none";
            }
        }
        if (this.generator.blankPerformCounter === 4) {
            // Remove Craft as an option, all further crafts must be completely write-in, at the bottom.
            var list = document.getElementsByClassName("all-wrin-perform");
            for (let i = 0; i < list.length; i++) {
                list[i].style.display = "none";
            }
        }
        if (this.generator.blankProfessionCounter === 1) {
            // Remove Craft as an option, all further crafts must be completely write-in, at the bottom.
            var list = document.getElementsByClassName("all-wrin-profession");
            for (let i = 0; i < list.length; i++) {
                list[i].style.display = "none";
            }
        }

        document.getElementById("wrin-skill-submit-" + this.generator.blankCounter).style.display = "none";
        document.getElementById("wrin-" + (this.generator.blankCounter + 1)).style.display = "block"; // This will ultimately fail to execute if the user exhausts the forms.
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

        this.generator.character.skillPointsSpent = 0;
        var mod;
        for (let i = 0; i < skillsList.length; i++) {
            switch (whichModList[i]) {
                case "str":
                    mod = this.generator.character.strMod;
                    break;
                case "dex":
                    mod = this.generator.character.dexMod;
                    break;
                case "con":
                    mod = this.generator.character.conMod;
                    break;
                case "wis":
                    mod = this.generator.character.wisMod;
                    break;
                case "int":
                    mod = this.generator.character.intMod;
                    break;
                case "cha":
                    mod = this.generator.character.chaMod;
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

                if (this.generator.character.allSkillsBool[i]) {
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
                this.generator.character.skillPointsSpent += Number(window["in" + skillsList[i]]);
            } else {
                this.generator.character.skillPointsSpent += Number(document.getElementById("bla" + (i + 1)).value);
            }
            // alert("SPENT/this.generator.character.skPts: " + this.generator.character.skillPointsSpent + " " + this.generator.character.skPts );
        }

        var dispSkillPoints = this.generator.character.skPts - this.generator.character.skillPointsSpent;
        document.getElementById("sk-points-starting").innerHTML = "Skill Points Remaining: " + dispSkillPoints;
    }

    /**
     *
     */
    calculateSkillPoints() {
        switch (this.generator.character.selClass) {
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
                // This is the SECOND place (in order of execution) where the value of this.generator.character.selClass affects subsequent calculations.
                //
                break;
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
     */
    levelSkillPointIncrease() {
        var points = this.generator.character.baseSkillPoints + this.generator.character.intMod;
        if (this.generator.character.selRace === "HUMAN") {
            points += 1;
        }
        if (points <= 0) {
            this.generator.character.skPts += 1;
        } else {
            this.generator.character.skPts += points;
        }

        document.getElementById("sk-points-starting").innerHTML = "Skill Points Remaining: " + this.generator.character.skPts

    }

    /**
     *
     */
    showClassSkills() {
        this.calculateSkillPoints();
        //First, basic data input based on class (first function above)
        switch (this.generator.character.selClass) {
            case "BARBARIAN":
                //align with booleans below --appr---	bala---	bluf---	clim---	conc---	craf---	deci---	dipl---	disa---	disg---	esca---	forg---	gath---	hand---	heal---	hide---	inti---	jump---	know---	list---	move---	open---	perf---	prof---	ride---	sear---	sens---	slei---	spel---	spot---	surv---	swim---	tumb---	usem---	user
                this.generator.character.allSkillsBool = [false, false, false, true, false, true, false, false, false, false, false, false, false, true, false, false, true, true, false, true, false, false, false, false, true, false, false, false, false, false, true, true, false, false, false];
                break;
            case "BARD":
                this.generator.character.allSkillsBool = [true, true, true, true, true, true, true, true, false, true, true, true, true, false, false, true, false, true, true, true, true, false, true, true, false, false, true, true, true, false, false, true, true, true, false];
                break;
            case "CLERIC":
                this.generator.character.allSkillsBool = [false, false, false, false, true, true, false, true, false, false, false, false, false, false, true, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false];
                break;
            case "DRUID":
                this.generator.character.allSkillsBool = [false, false, false, false, true, true, false, true, false, false, false, false, false, true, true, false, false, false, true, false, false, false, false, true, true, false, false, false, true, true, true, true, false, false, false];
                break;
            case "FIGHTER":
                // data input was manual for testing rather than from /docs/base%20skills%20booleans.js file, so there are spaces instead of tabs.
                this.generator.character.allSkillsBool = [false, false, false, true, false, true, false, false, false, false, false, false, false, true, false, false, true, true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false];
                break;
            case "MONK":
                this.generator.character.allSkillsBool = [false, true, false, true, true, true, false, true, false, false, true, false, false, false, false, true, false, true, true, true, true, false, true, true, false, false, true, false, false, true, false, true, true, false, false];
                break;
            case "PALADIN":
                this.generator.character.allSkillsBool = [false, false, false, false, true, true, false, true, false, false, false, false, false, true, true, false, false, false, true, false, false, false, false, true, true, false, true, false, false, false, false, false, false, false, false];
                break;
            case "RANGER":
                this.generator.character.allSkillsBool = [false, false, false, true, true, true, false, true, false, false, false, false, false, true, true, true, false, true, true, true, true, false, false, true, true, true, false, false, false, true, true, true, false, false, true];
                break;
            case "ROGUE":
                this.generator.character.allSkillsBool = [true, true, true, true, false, true, true, true, true, true, true, true, true, false, false, true, true, true, true, true, true, true, true, true, false, true, true, true, false, true, false, true, true, true, true];
                break;
            case "SORCERER":
                this.generator.character.allSkillsBool = [false, false, true, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false];
                break;
            case "WIZARD":
                this.generator.character.allSkillsBool = [false, false, false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false];
                break;
            case "NewBlankClass":
                // A placeholder for future class additions.
                //
                // This is the first place (in order of execution) where the value of this.generator.character.selClass affects subsequent calculations.
                //
                break;
        }

        for (let i = 0; i < 35; i++) {
            if (this.generator.character.allSkillsBool[i]) {
                document.getElementById("c-" + this.generator.character.allSkillsString[i]).innerHTML = "CLASS";
            } else {
                document.getElementById("c-" + this.generator.character.allSkillsString[i]).innerHTML = "-";
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
                this.generator.character.numOfFeats += 1;
                alert("In order for the skills calculation to update properly, \n enter the skill name without spaces \n Example: UseRope");
                var featTarget = prompt("Which skill will this feat affect?");
                document.getElementById("feat-name-" + this.generator.character.numOfFeats).innerHTML = (featName + " (" + featTarget + ") ");
                this.decodeSkillFocus(featTarget);
            } else {
                var confirmR = confirm("You have no more feats available. Suffer the wrath of your DM and continue anyway?");
                if (confirmR) {
                    featsRemaining -= 1;
                    document.getElementById("feats-remaining").innerHTML = featsRemaining;
                    this.generator.character.numOfFeats += 1;
                    alert("In order for the skills calculation to update properly, \n enter the skill name without spaces \n Example: UseRope");
                    var featTarget = prompt("Which skill will this feat affect?");

                    document.getElementById("feat-name-" + this.generator.character.numOfFeats).innerHTML = (featName + " (" + featTarget + ") ");

                    this.decodeSkillFocus(featTarget);
                }
            }
        }
    }

    /**
     *
     * @param basePoints
     */
    whichSkillFunction(basePoints) {
        this.generator.character.baseSkillPoints = basePoints;
        if (this.generator.character.intMod > 0) {
            var skillPoints = ((basePoints + this.generator.character.intMod) * 4);
        } else {
            var skillPoints = (basePoints * 4);
        }

        if (this.generator.character.selRace === "HUMAN") {
            var totalSkillPoints = skillPoints + 4;
        } else {
            var totalSkillPoints = skillPoints;
        }
        // "NewBlankRace"
        // A placeholder for future class additions.
        //
        // This is the SECOND place (in order of execution) where the value of this.generator.character.selRace affects subsequent calculations.
        //
        document.getElementById("sk-points-starting").innerHTML = ("Total Skill Points: " + totalSkillPoints);
        this.generator.character.skPts = totalSkillPoints;
        // alert("Total BASE Skill Points Calculated: " + this.generator.character.skPts);
    }

}