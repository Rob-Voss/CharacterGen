
class Skills {

    /**
     * @param {CharacterGen} generator
     * @returns {Skills}
     */
    constructor(generator) {
        this.character = generator.character;

        //align with booleans below --appr---	bala---	bluf---	clim---	conc---	craf---	deci---	dipl---	disa---	disg---	esca---	forg---	gath---	hand---	heal---	hide---	inti---	jump---	know---	list---	move---	open---	perf---	prof---	ride---	sear---	sens---	slei---	spel---	spot---	surv---	swim---	tumb---	usem---	user
        this.allSkillsBool = [false, false, false, true, false, true, false, false, false, false, false, false, false, true, false, false, true, true, false, true, false, false, false, false, true, false, false, false, false, false, true, true, false, false, false];
        this.allSkillsString = ["appraise", "balance", "bluff", "climb", "concentration", "craft", "decipherscript",
            "diplomacy", "disabledevice", "disguise", "escapeartist", "forgery", "gatherinformation", "handleanimal",
            "heal", "hide", "intimidate", "jump", "knowledge", "listen", "movesilently", "openlock", "perform",
            "profession", "ride", "search", "sensemotive", "sleight", "spellcraft", "spot", "survival", "swim", "tumble",
            "usemagicdevice", "userope"];

        this.skills = {
            "appraise": {"rank": 0, "mod": "int", "misc-mod": "", "notes": ""},
            "balance":  {"rank": 0, "mod": "dex", "misc-mod": "", "notes": ""},
            "bluff":  {"rank": 0, "mod": "cha", "misc-mod": "", "notes": ""},
            "climb":  {"rank": 0, "mod": "str", "misc-mod": "", "notes": ""},
            "concentration":  {"rank": 0, "mod": "con", "misc-mod": "", "notes": ""},
            "craft":  {"rank": 0, "mod": "int", "misc-mod": "", "notes": ""},
            "decipherscript":  {"rank": 0, "mod": "int", "misc-mod": "", "notes": ""},
            "diplomacy":  {"rank": 0, "mod": "cha", "misc-mod": "", "notes": ""},
            "disabledevice":  {"rank": 0, "mod": "int", "misc-mod": "", "notes": ""},
            "disguise":  {"rank": 0, "mod": "cha", "misc-mod": "", "notes": ""},
            "escapeartist":  {"rank": 0, "mod": "dex", "misc-mod": "", "notes": ""},
            "forgery":  {"rank": 0, "mod": "int", "misc-mod": "", "notes": ""},
            "gatherinformation":  {"rank": 0, "mod": "cha", "misc-mod": "", "notes": ""},
            "handleanimal":  {"rank": 0, "mod": "cha", "misc-mod": "", "notes": ""},
            "heal":  {"rank": 0, "mod": "wis", "misc-mod": "", "notes": ""},
            "hide":  {"rank": 0, "mod": "dex", "misc-mod": "", "notes": ""},
            "intimidate":  {"rank": 0, "mod": "cha", "misc-mod": "", "notes": ""},
            "jump":  {"rank": 0, "mod": "str", "misc-mod": "", "notes": ""},
            "knowledge":  {"rank": 0, "mod": "int", "misc-mod": "", "notes": ""},
            "listen":  {"rank": 0, "mod": "wis", "misc-mod": "", "notes": ""},
            "movesilently":  {"rank": 0, "mod": "dex", "misc-mod": "", "notes": ""},
            "openlock":  {"rank": 0, "mod": "dex", "misc-mod": "", "notes": ""},
            "perform":  {"rank": 0, "mod": "cha", "misc-mod": "", "notes": ""},
            "profession":  {"rank": 0, "mod": "wis", "misc-mod": "", "notes": ""},
            "ride":  {"rank": 0, "mod": "dex", "misc-mod": "", "notes": ""},
            "search":  {"rank": 0, "mod": "int", "misc-mod": "", "notes": ""},
            "sensemotive":  {"rank": 0, "mod": "wis", "misc-mod": "", "notes": ""},
            "sleight":  {"rank": 0, "mod": "dex", "misc-mod": "", "notes": ""},
            "spellcraft":  {"rank": 0, "mod": "int", "misc-mod": "", "notes": ""},
            "spot":  {"rank": 0, "mod": "wis", "misc-mod": "", "notes": ""},
            "survival":  {"rank": 0, "mod": "wis", "misc-mod": "", "notes": ""},
            "swim":  {"rank": 0, "mod": "str", "misc-mod": "", "notes": ""},
            "tumble":  {"rank": 0, "mod": "dex", "misc-mod": "", "notes": ""},
            "usemagicdevice":  {"rank": 0, "mod": "cha", "misc-mod": "", "notes": ""},
            "userope":  {"rank": 0, "mod": "dex", "misc-mod": "", "notes": ""}
        };

        return this;
    }

    /**
     *
     */
    acceptSkills() {
        let confirmAcceptSkills;
        if (this.character.skillPointsRemaining === 0) {
            confirmAcceptSkills = confirm("Are you sure you are finished allocating skill points?");
        } else if (this.character.skillPointsRemaining > 0) {
            confirmAcceptSkills = confirm("You have unused skill points\nAre you sure you want to proceed?");
        } else {
            confirmAcceptSkills = confirm("You have used too many skill points\nAre you sure you want to proceed?");
        }

        if (confirmAcceptSkills) {
            // Move on to next section.
        }
    }

    /**
     *
     */
    addSkill() {
        this.character.blankCounter += 1;
        let abilityMod = Number(document.getElementById("wrin-skill-ab-mod-" + this.character.blankCounter).value),
            rankPoints = Number(document.getElementById("wrin-skill-rank-" + Number(35 + this.character.blankCounter)).value),
            miscMod = Number(document.getElementById("wrin-skill-misc-mod-" + this.character.blankCounter).value),
            skill = document.getElementById("wrin-skill-subtype-" + this.character.blankCounter).value,
            isClass = document.getElementById("wrin-inclass-" + this.character.blankCounter).value === "true";

        switch (document.getElementById("wrin-skill-select-" + this.character.blankCounter).value) {
            case "craft":
                this.character.blankCraftCounter += 1;
                document.getElementById("wrin-craft-" + this.character.blankCraftCounter).style.display = "block";
                document.getElementById("print-wrin-craft-title-" + this.character.blankCraftCounter).innerHTML = "Craft: " + skill;
                rankPoints = (isClass) ? rankPoints : rankPoints / 2;
                document.getElementById("print-wrin-craft-rank-" + this.character.blankCraftCounter).innerHTML = rankPoints;
                document.getElementById("print-wrin-craft-ab-mod-" + this.character.blankCraftCounter).innerHTML = abilityMod;
                document.getElementById("print-wrin-craft-misc-mod-" + this.character.blankCraftCounter).innerHTML = miscMod;
                document.getElementById("print-wrin-craft-total-" + this.character.blankCraftCounter).innerHTML = "+ " + Number(rankPoints + abilityMod + miscMod);
                break;
            case "knowledge":
                this.character.blankKnowledgeCounter += 1;
                document.getElementById("wrin-knowledge-" + this.character.blankKnowledgeCounter).style.display = "block";
                document.getElementById("print-wrin-knowledge-title-" + this.character.blankKnowledgeCounter).innerHTML = "Knowledge: " + skill;
                rankPoints = (isClass) ? rankPoints : rankPoints / 2;
                document.getElementById("print-wrin-knowledge-rank-" + this.character.blankCraftCounter).innerHTML = rankPoints;
                document.getElementById("print-wrin-knowledge-ab-mod-" + this.character.blankCraftCounter).innerHTML = abilityMod;
                document.getElementById("print-wrin-knowledge-misc-mod-" + this.character.blankCraftCounter).innerHTML = miscMod;
                document.getElementById("print-wrin-knowledge-total-" + this.character.blankKnowledgeCounter).innerHTML = "+ " + Number(rankPoints + abilityMod + miscMod);
                break;
            case "perform":
                this.character.blankPerformCounter += 1;
                document.getElementById("wrin-perform-" + this.character.blankPerformCounter).style.display = "block";
                document.getElementById("print-wrin-perform-title-" + this.character.blankPerformCounter).innerHTML = "Perform: " + skill;
                rankPoints = (isClass) ? rankPoints : rankPoints / 2;
                document.getElementById("print-wrin-perform-rank-" + this.character.blankCraftCounter).innerHTML = rankPoints;
                document.getElementById("print-wrin-perform-ab-mod-" + this.character.blankCraftCounter).innerHTML = abilityMod;
                document.getElementById("print-wrin-perform-misc-mod-" + this.character.blankCraftCounter).innerHTML = miscMod;
                document.getElementById("print-wrin-perform-total-" + this.character.blankPerformCounter).innerHTML = "+ " + Number(rankPoints + abilityMod + miscMod);
                break;
            case "profession":
                this.character.blankProfessionCounter += 1;
                document.getElementById("wrin-profession-" + this.character.blankProfessionCounter).style.display = "block";
                document.getElementById("print-wrin-profession-" + this.character.blankProfessionCounter).innerHTML = "Profession: " + skill;
                rankPoints = (isClass) ? rankPoints : rankPoints / 2;
                document.getElementById("print-wrin-profession-rank-" + this.character.blankCraftCounter).innerHTML = rankPoints;
                document.getElementById("print-wrin-profession-ab-mod-" + this.character.blankCraftCounter).innerHTML = abilityMod;
                document.getElementById("print-wrin-profession-misc-mod-" + this.character.blankCraftCounter).innerHTML = miscMod;
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
        // This will ultimately fail to execute if the user exhausts the forms.
        document.getElementById("wrin-" + (this.character.blankCounter + 1)).style.display = "block";
    }

    /**
     *
     */
    calcPoints() {
        let mod, misc, maths;
        this.character.skillPointsSpent = 0;
        for (let element in this.skills) {
            if (this.skills.hasOwnProperty(element)) {
                this.skills[element].rank = Number(document.getElementById("input_" + element).value);
            }
        }

        let i = 0;
        for (let element in this.skills) {
            if (this.skills.hasOwnProperty(element)) {
                mod = (this.skills[element].mod !== "none") ? this.character[this.skills[element].mod + "Mod"] : "none";
                if (mod !== "none") {
                    misc = (document.getElementById("ms-" + element).innerHTML === "-") ? 0 : Number(document.getElementById("ms-" + element).innerHTML);
                    let skillRank = Number(this.skills[element].rank),
                        total = Number(mod) + Number(misc) + skillRank;
                    maths = (this.allSkillsBool[i]) ? total : total / 2;
                    document.getElementById("t-" + element).innerHTML = (maths > 0) ? "+" + maths : maths;
                    this.character.skillPointsSpent += skillRank;
                } else {
                    this.character.skillPointsSpent += Number(document.getElementById("wrin-skill-rank-" + (i + 1)).value);
                }
                i++;
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
        let skName = featTarget.toLowerCase();
        if (this.skills.hasOwnProperty(skName)) {
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
                this.allSkillsBool = [false, false, false, true, false, true, false, false, false, false, false, false, false, true, false, false, true, true, false, true, false, false, false, false, true, false, false, false, false, false, true, true, false, false, false];
                break;
            case "BARD":
                this.allSkillsBool = [true, true, true, true, true, true, true, true, false, true, true, true, true, false, false, true, false, true, true, true, true, false, true, true, false, false, true, true, true, false, false, true, true, true, false];
                break;
            case "CLERIC":
                this.allSkillsBool = [false, false, false, false, true, true, false, true, false, false, false, false, false, false, true, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false];
                break;
            case "DRUID":
                this.allSkillsBool = [false, false, false, false, true, true, false, true, false, false, false, false, false, true, true, false, false, false, true, false, false, false, false, true, true, false, false, false, true, true, true, true, false, false, false];
                break;
            case "FIGHTER":
                this.allSkillsBool = [false, false, false, true, false, true, false, false, false, false, false, false, false, true, false, false, true, true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false];
                break;
            case "MONK":
                this.allSkillsBool = [false, true, false, true, true, true, false, true, false, false, true, false, false, false, false, true, false, true, true, true, true, false, true, true, false, false, true, false, false, true, false, true, true, false, false];
                break;
            case "PALADIN":
                this.allSkillsBool = [false, false, false, false, true, true, false, true, false, false, false, false, false, true, true, false, false, false, true, false, false, false, false, true, true, false, true, false, false, false, false, false, false, false, false];
                break;
            case "RANGER":
                this.allSkillsBool = [false, false, false, true, true, true, false, true, false, false, false, false, false, true, true, true, false, true, true, true, true, false, false, true, true, true, false, false, false, true, true, true, false, false, true];
                break;
            case "ROGUE":
                this.allSkillsBool = [true, true, true, true, false, true, true, true, true, true, true, true, true, false, false, true, true, true, true, true, true, true, true, true, false, true, true, true, false, true, false, true, true, true, true];
                break;
            case "SORCERER":
                this.allSkillsBool = [false, false, true, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false];
                break;
            case "WIZARD":
                this.allSkillsBool = [false, false, false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false];
                break;
            case "NewBlankClass":
                // A placeholder for future class additions.
                // This is the first place (in order of execution) where the value of this.character.class affects subsequent calculations.
                break;
        }

        for (let i = 0; i < 35; i++) {
            document.getElementById("c-" + this.allSkillsString[i]).innerHTML = (this.allSkillsBool[i]) ? "CLASS" : "-";
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