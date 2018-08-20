
const whichModList = ["int", "dex", "cha", "str", "con", "int", "int", "cha", "int", "cha", "dex", "int", "cha", "cha", "wis", "dex", "cha", "str", "int", "wis", "dex", "dex", "cha", "wis", "dex", "int", "wis", "dex", "int", "wis", "wis", "str", "dex", "cha", "dex", "none"];  // 	,		"none",		"none"
const skillsList = ["appr", "bala", "bluf", "clim", "conc", "craf", "deci", "dipl", "disa", "disg", "esca", "forg", "gath", "hand", "heal", "hide", "inti", "jump", "know", "list", "move", "open", "perf", "prof", "ride", "sear", "sens", "slei", "spel", "spot", "surv", "swim", "tumb", "usem", "user", "bla1"]; // 	, 	"bla2", 	"bla3"

class Skills {

    /**
     * @param {CharacterGen} generator
     * @returns {Skills}
     */
    constructor(generator) {
        this.character = generator.character;
        this.skillRanks = {
            "in_appr": 0,
            "in_bala": 0,
            "in_bluf": 0,
            "in_clim": 0,
            "in_conc": 0,
            "in_craf": 0,
            "in_deci": 0,
            "in_dipl": 0,
            "in_disa": 0,
            "in_disg": 0,
            "in_esca": 0,
            "in_forg": 0,
            "in_gath": 0,
            "in_hand": 0,
            "in_heal": 0,
            "in_hide": 0,
            "in_inti": 0,
            "in_jump": 0,
            "in_know": 0,
            "in_list": 0,
            "in_move": 0,
            "in_open": 0,
            "in_perf": 0,
            "in_prof": 0,
            "in_ride": 0,
            "in_sear": 0,
            "in_sens": 0,
            "in_slei": 0,
            "in_spel": 0,
            "in_spot": 0,
            "in_surv": 0,
            "in_swim": 0,
            "in_tumb": 0,
            "in_usem": 0,
            "in_user": 0,
            "bla36": 0
        };

        return this;
    }

    /**
     *
     */
    acceptSkills() {
        let confirmAccSk;
        if (this.character.skPtsRemaining === 0) {
            confirmAccSk = confirm("Are you sure you are finished allocating skill points?");
        } else if (this.character.skPtsRemaining > 0) {
            confirmAccSk = confirm("You have unused skill points\nAre you sure you want to proceed?");
        } else {
            confirmAccSk = confirm("You have used too many skill points\nAre you sure you want to proceed?");
        }

        if (confirmAccSk) {
            // Move on to next section.
        }
    }

    /**
     *
     */
    addSkill() {
        this.character.blankCounter += 1;
        let abilityMod = Number(document.getElementById("wrin-skill-abmod-" + this.character.blankCounter).value),
            rankPoints = Number(document.getElementById("bla" + Number(35 + this.character.blankCounter)).value),
            miscMod = Number(document.getElementById("wrin-skill-misc-" + this.character.blankCounter).value),
            skill = document.getElementById("blank-subtype-" + this.character.blankCounter).value,
            isClass = document.getElementById("wrin-inclass-" + this.character.blankCounter).value === "true";
        // functionality that references the input relies on this.character.blankCounter.
        // functionality that defines the output relies on this.character.blank[whatever]counter
        switch (document.getElementById("wrin-skill-select-" + this.character.blankCounter).value) {
            case "craft":
                this.character.blankCraftCounter += 1;
                document.getElementById("wrin-craft-" + this.character.blankCraftCounter).style.display = "block";
                document.getElementById("print-wrin-craft-" + this.character.blankCraftCounter).innerHTML = "Craft: " + skill;
                rankPoints = (isClass) ? rankPoints : rankPoints / 2;
                document.getElementById("print-wrin-craft-total-" + this.character.blankCraftCounter).innerHTML = "+ " + Number(rankPoints + abilityMod + miscMod);
                break;
            case "knowledge":
                this.character.blankKnowledgeCounter += 1;
                document.getElementById("wrin-knowledge-" + this.character.blankKnowledgeCounter).style.display = "block";
                document.getElementById("print-wrin-knowledge-" + this.character.blankKnowledgeCounter).innerHTML = "Knowledge: " + skill;
                rankPoints = (isClass) ? rankPoints : rankPoints / 2;
                document.getElementById("print-wrin-knowledge-total-" + this.character.blankKnowledgeCounter).innerHTML = "+ " + Number(rankPoints + abilityMod + miscMod);
                break;
            case "perform":
                this.character.blankPerformCounter += 1;
                document.getElementById("wrin-perform-" + this.character.blankPerformCounter).style.display = "block";
                document.getElementById("print-wrin-perform-" + this.character.blankPerformCounter).innerHTML = "Perform: " + skill;
                rankPoints = (isClass) ? rankPoints : rankPoints / 2;
                document.getElementById("print-wrin-perform-total-" + this.character.blankPerformCounter).innerHTML = "+ " + Number(rankPoints + abilityMod + miscMod);
                break;
            case "profession":
                this.character.blankProfessionCounter += 1;
                document.getElementById("wrin-profession-" + this.character.blankProfessionCounter).style.display = "block";
                document.getElementById("print-wrin-profession-" + this.character.blankProfessionCounter).innerHTML = "Profession: " + skill;
                rankPoints = (isClass) ? rankPoints : rankPoints / 2;
                document.getElementById("print-wrin-profession-total-" + this.character.blankProfessionCounter).innerHTML = "+ " + Number(rankPoints + abilityMod + miscMod);
                break;
            case "writein":
                alert("Only Craft: [subtype] skills work at this point. Pending update.");
                break;
        }
        if (this.character.blankCraftCounter === 4) {
            // Remove Craft as an option, all further crafts must be completely write-in, at the bottom.
            for (let i = 0, list = document.getElementsByClassName("all-wrin-craft"); i < list.length; i++) {
                list[i].style.display = "none";
            }
        }
        if (this.character.blankKnowledgeCounter === 4) {
            // Remove Knowledge as an option, all further knowledge must be completely write-in, at the bottom.
            for (let i = 0, list = document.getElementsByClassName("all-wrin-knowledge"); i < list.length; i++) {
                list[i].style.display = "none";
            }
        }
        if (this.character.blankPerformCounter === 4) {
            // Remove Performance as an option, all further performances must be completely write-in, at the bottom.
            for (let i = 0, list = document.getElementsByClassName("all-wrin-perform"); i < list.length; i++) {
                list[i].style.display = "none";
            }
        }
        if (this.character.blankProfessionCounter === 1) {
            // Remove Profession as an option, all further professions must be completely write-in, at the bottom.
            for (let i = 0, list = document.getElementsByClassName("all-wrin-profession"); i < list.length; i++) {
                list[i].style.display = "none";
            }
        }

        document.getElementById("wrin-skill-submit-" + this.character.blankCounter).style.display = "none";
        document.getElementById("wrin-" + (this.character.blankCounter + 1)).style.display = "block"; // This will ultimately fail to execute if the user exhausts the forms.
    }

    /**
     *
     */
    calcPoints() {
        let mod, misc, maths;
        this.character.skillPointsSpent = 0;
        for (let element in this.skillRanks) {
            if (this.skillRanks.hasOwnProperty(element)) {
                this.skillRanks[element] = Number(document.getElementById(element).value);
            }
        }

        for (let i = 0; i < skillsList.length; i++) {
            mod = (whichModList[i] !== "none") ? this.character[whichModList[i] + "Mod"] : "none";
            if (mod !== "none") {
                misc = (document.getElementById("ms-" + skillsList[i]).innerHTML === "-") ? 0 : Number(document.getElementById("ms-" + skillsList[i]).innerHTML);
                let skillRank = Number(this.skillRanks["in_" + skillsList[i]]),
                    total = Number(mod) + Number(misc) + skillRank;
                maths = (this.character.allSkillsBool[i]) ? total : total / 2;
                document.getElementById("t-" + skillsList[i]).innerHTML = (maths > 0) ? "+" + maths : maths;
                this.character.skillPointsSpent += skillRank;
            } else {
                this.character.skillPointsSpent += Number(document.getElementById("bla" + (i + 1)).value);
            }
        }
        document.getElementById("sk-points-starting").innerHTML = "Skill Points Remaining: " + (this.character.skillPoints - this.character.skillPointsSpent);
    }

    /**
     *
     */
    calculateSkillPoints() {
        switch (this.character.class) {
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
                // This is the SECOND place (in order of execution) where the value of this.character.class affects subsequent calculations.
                //
                break;
        }
    }

    /**
     *
     * @param {String} featTarget
     */
    decodeSkillFocus(featTarget) {
        let skName = featTarget.toLowerCase().substring(0, 4);
        if (skName === "appr" || skName === "bala" || skName === "bluf" || skName === "clim" || skName === "conc" || skName === "craf" || skName === "deci" || skName === "dipl" || skName === "disa" || skName === "disg" || skName === "esca" || skName === "forg" || skName === "gath" || skName === "hand" || skName === "heal" || skName === "hide" || skName === "inti" || skName === "jump" || skName === "know" || skName === "list" || skName === "move" || skName === "open" || skName === "perf" || skName === "prof" || skName === "ride" || skName === "sear" || skName === "sens" || skName === "slei" || skName === "spel" || skName === "spot" || skName === "surv" || skName === "swim" || skName === "tumb" || skName === "usem" || skName === "user") {
            let msVariable = document.getElementById("ms-" + skName),
                skillMisc = Number(document.getElementById("ms-" + skName).innerHTML);
            if (msVariable.innerHTML === "-") {
                msVariable.innerHTML = 3;
            } else {
                skillMisc += 3;
                msVariable.innerHTML = skillMisc;
            }
        } else {
            let tryAgain = confirm(featTarget + " was not recognized. Press Okay to log it as a write-in. Press cancel to try again.");
            if (tryAgain) {
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
        let points = this.character.baseSkillPoints + this.character.intMod;
        if (this.character.race === "HUMAN") {
            points += 1;
        }
        this.character.skillPoints += (points <= 0) ? 1 : points;
        document.getElementById("sk-points-starting").innerHTML = "Skill Points Remaining: " + this.character.skillPoints
    }

    /**
     * Calculates Skill Points. Shows all Class Skills
     */
    showClassSkills() {
        this.calculateSkillPoints();
        //First, basic data input based on class (first function above)
        switch (this.character.class) {
            case "BARBARIAN":
                //align with booleans below --appr---	bala---	bluf---	clim---	conc---	craf---	deci---	dipl---	disa---	disg---	esca---	forg---	gath---	hand---	heal---	hide---	inti---	jump---	know---	list---	move---	open---	perf---	prof---	ride---	sear---	sens---	slei---	spel---	spot---	surv---	swim---	tumb---	usem---	user
                this.character.allSkillsBool = [false, false, false, true, false, true, false, false, false, false, false, false, false, true, false, false, true, true, false, true, false, false, false, false, true, false, false, false, false, false, true, true, false, false, false];
                break;
            case "BARD":
                this.character.allSkillsBool = [true, true, true, true, true, true, true, true, false, true, true, true, true, false, false, true, false, true, true, true, true, false, true, true, false, false, true, true, true, false, false, true, true, true, false];
                break;
            case "CLERIC":
                this.character.allSkillsBool = [false, false, false, false, true, true, false, true, false, false, false, false, false, false, true, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false];
                break;
            case "DRUID":
                this.character.allSkillsBool = [false, false, false, false, true, true, false, true, false, false, false, false, false, true, true, false, false, false, true, false, false, false, false, true, true, false, false, false, true, true, true, true, false, false, false];
                break;
            case "FIGHTER":
                this.character.allSkillsBool = [false, false, false, true, false, true, false, false, false, false, false, false, false, true, false, false, true, true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false];
                break;
            case "MONK":
                this.character.allSkillsBool = [false, true, false, true, true, true, false, true, false, false, true, false, false, false, false, true, false, true, true, true, true, false, true, true, false, false, true, false, false, true, false, true, true, false, false];
                break;
            case "PALADIN":
                this.character.allSkillsBool = [false, false, false, false, true, true, false, true, false, false, false, false, false, true, true, false, false, false, true, false, false, false, false, true, true, false, true, false, false, false, false, false, false, false, false];
                break;
            case "RANGER":
                this.character.allSkillsBool = [false, false, false, true, true, true, false, true, false, false, false, false, false, true, true, true, false, true, true, true, true, false, false, true, true, true, false, false, false, true, true, true, false, false, true];
                break;
            case "ROGUE":
                this.character.allSkillsBool = [true, true, true, true, false, true, true, true, true, true, true, true, true, false, false, true, true, true, true, true, true, true, true, true, false, true, true, true, false, true, false, true, true, true, true];
                break;
            case "SORCERER":
                this.character.allSkillsBool = [false, false, true, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false];
                break;
            case "WIZARD":
                this.character.allSkillsBool = [false, false, false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false];
                break;
            case "NewBlankClass":
                // A placeholder for future class additions.
                // This is the first place (in order of execution) where the value of this.character.class affects subsequent calculations.
                break;
        }

        for (let i = 0; i < 35; i++) {
            document.getElementById("c-" + this.character.allSkillsString[i]).innerHTML = (this.character.allSkillsBool[i]) ? "CLASS" : "-";
        }
    }

    /**
     *
     * @param {String} featName
     */
    skillFocus(featName) {
        let featTarget,
            confirmR,
            confirmW = confirm("Select Skill Focus?"),
            featsRemaining = Number(document.getElementById("feats-remaining").innerHTML);
        if (confirmW) {
            if (featsRemaining > 0) {
                featsRemaining -= 1;
                document.getElementById("feats-remaining").innerHTML = featsRemaining;
                this.character.numberOfFeats += 1;
                alert("In order for the skills calculation to update properly, \n enter the skill name without spaces \n Example: UseRope");
                featTarget = prompt("Which skill will this feat affect?");
                document.getElementById("feat-name-" + this.character.numberOfFeats).innerHTML = (featName + " (" + featTarget + ") ");
                this.decodeSkillFocus(featTarget);
            } else {
                confirmR = confirm("You have no more feats available. Suffer the wrath of your DM and continue anyway?");
                if (confirmR) {
                    featsRemaining -= 1;
                    document.getElementById("feats-remaining").innerHTML = featsRemaining;
                    this.character.numberOfFeats += 1;
                    alert("In order for the skills calculation to update properly, \n enter the skill name without spaces \n Example: UseRope");
                    featTarget = prompt("Which skill will this feat affect?");
                    document.getElementById("feat-name-" + this.character.numberOfFeats).innerHTML = (featName + " (" + featTarget + ") ");
                    this.decodeSkillFocus(featTarget);
                }
            }
        }
    }

    /**
     *
     * @param {number} basePoints
     */
    whichSkillFunction(basePoints) {
        let skillPoints = (this.character.intMod > 0) ? ((basePoints + this.character.intMod) * 4) : (basePoints * 4);
        this.updateSkillPoints((this.character.race === "HUMAN") ?  skillPoints + 4 : skillPoints);
    }

    /**
     *
     * @param {number} totalSkillPoints
     */
    updateSkillPoints(totalSkillPoints) {
        document.getElementById("sk-points-starting").innerHTML = ("Total Skill Points: " + totalSkillPoints);
        this.character.skillPoints = totalSkillPoints;
    }

}