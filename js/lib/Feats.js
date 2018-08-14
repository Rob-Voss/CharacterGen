
class Feats {

    /**
     *
     * @param {CharacterGen} characterGen
     * @returns {Feats}
     */
    constructor(characterGen) {
        this.generator = characterGen;

        return this;
    }

    /**
     *
     * @param whichSubMenu
     */
    featsSubMenu(whichSubMenu) {
        var allSubMenus = ["combat", "skill", "other", "proficiency", "creation", "casting", "metamagic"];
        for (let i = 0; i < allSubMenus.length; i++) {
            if (allSubMenus[i] === whichSubMenu) {
                document.getElementById("feats-" + whichSubMenu).style.display = "block";
            } else {
                document.getElementById("feats-" + allSubMenus[i]).style.display = "none";
            }
        }
        window.scrollTo(0, 0);
    }

    /**
     *
     * @param featName
     */
    featUpdateSkill(featName) {
        var confirmF = confirm("Select " + featName + "?");
        if (confirmF) {
            var featsRemaining = Number(document.getElementById("feats-remaining").innerHTML);
            if (featsRemaining > 0) {
                featsRemaining -= 1;
                var confirmR = true;
                document.getElementById("feats-remaining").innerHTML = featsRemaining;
                this.generator.character.numOfFeats += 1;
                document.getElementById("feat-name-" + this.generator.character.numOfFeats).innerHTML = featName;
            } else {
                var confirmR = confirm("You have no more feats available. Suffer the wrath of your DM and continue anyway?");
                if (confirmR) {
                    featsRemaining -= 1;
                    document.getElementById("feats-remaining").innerHTML = featsRemaining;
                    this.generator.character.numOfFeats += 1;
                    document.getElementById("feat-name-" + this.generator.character.numOfFeats).innerHTML = featName;
                }
            }
        }

        if (confirmF === true && confirmR === true) {
            switch (featName) {
                case "Acrobatic":
                    this.featUpdateSkillTwin("jump");
                    this.featUpdateSkillTwin("tumb");
                    break;
                case "Agile":
                    this.featUpdateSkillTwin("bala");
                    this.featUpdateSkillTwin("esca");
                    break;
                case "Alertness":
                    this.featUpdateSkillTwin("list");
                    this.featUpdateSkillTwin("spot");
                    break;
                case "Animal Affinity":
                    this.featUpdateSkillTwin("hand");
                    this.featUpdateSkillTwin("ride");
                    break;
                case "Athletic":
                    this.featUpdateSkillTwin("clim");
                    this.featUpdateSkillTwin("swim");
                    break;
                case "Deceitful":
                    this.featUpdateSkillTwin("disg");
                    this.featUpdateSkillTwin("forg");
                    break;
                case "Deft Hands":
                    this.featUpdateSkillTwin("slei");
                    this.featUpdateSkillTwin("user");
                    break;
                case "Diligent":
                    this.featUpdateSkillTwin("appr");
                    this.featUpdateSkillTwin("deci");
                    break;
                case "Investigator":
                    this.featUpdateSkillTwin("gath");
                    this.featUpdateSkillTwin("sear");
                    break;
                case "Magical Aptitude":
                    this.featUpdateSkillTwin("spel");
                    this.featUpdateSkillTwin("usem");
                    break;
                case "Negotiator":
                    this.featUpdateSkillTwin("dipl");
                    this.featUpdateSkillTwin("sens");
                    break;
                case "Nimble Fingers":
                    this.featUpdateSkillTwin("disa");
                    this.featUpdateSkillTwin("open");
                    break;
                case "Persuasive":
                    this.featUpdateSkillTwin("bluf");
                    this.featUpdateSkillTwin("inti");
                    break;
                case "Self-Sufficient":
                    this.featUpdateSkillTwin("heal");
                    this.featUpdateSkillTwin("surv");
                    break;
                case "Stealthy":
                    this.featUpdateSkillTwin("hide");
                    this.featUpdateSkillTwin("move");
                    break;
                case "Weapon Finesse":
                    alert("Melee Attack Modifier has been changed to DEX.");
                    this.generator.character.weaponFinesse = true;
                    break;
                case "Improved Initiative":
                    this.generator.character.improvedInitiative = true;
                    break;
                case "Great Fortitude":
                    this.generator.character.greatFortitude = true;
                    break;
                case "Iron Will":
                    this.generator.character.ironWill = true;
                    break;
                case "Lightening Reflexes":
                    this.generator.character.lighteningReflexes = true;
                    break;
                case "Toughness":
                    this.generator.character.toughness = true;
                    break;

            }
            // document.getElementById("ms-clim").innerHTML = 2;
        }
    }

    /**
     *
     * @param featShortCode
     */
    featUpdateSkillTwin(featShortCode) {
        var featUpdateMiscMod = document.getElementById("ms-" + featShortCode).innerHTML;
        if (featUpdateMiscMod === "-") {
            document.getElementById("ms-" + featShortCode).innerHTML = 2;
        } else {
            featUpdateMiscMod = Number(featUpdateMiscMod);
            featUpdateMiscMod += 2;
            document.getElementById("ms-jump").innerHTML = featUpdateMiscMod;
        }
    }

    /**
     *
     * @param featName
     */
    selectFeat(featName) {
        var confirmF = confirm("Select " + featName + "?");
        if (confirmF) {
            var featsRemaining = Number(document.getElementById("feats-remaining").innerHTML);
            if (featsRemaining > 0) {
                featsRemaining -= 1;
                document.getElementById("feats-remaining").innerHTML = featsRemaining;
                this.generator.character.numOfFeats += 1;
                document.getElementById("feat-name-" + this.generator.character.numOfFeats).innerHTML = featName;
            } else {
                var confirmR = confirm("You have no more feats available. Suffer the wrath of your DM and continue anyway?");
                if (confirmR) {
                    featsRemaining -= 1;
                    document.getElementById("feats-remaining").innerHTML = featsRemaining;
                    this.generator.character.numOfFeats += 1;
                    document.getElementById("feat-name-" + this.generator.character.numOfFeats).innerHTML = featName;
                }
            }
        }
    }

    /**
     *
     * @param featName
     */
    weaponFeat(featName) {
        var confirmW = confirm("Select " + featName + "?");
        if (confirmW) {
            var featsRemaining = Number(document.getElementById("feats-remaining").innerHTML);

            if (featsRemaining > 0) {
                featsRemaining -= 1;
                document.getElementById("feats-remaining").innerHTML = featsRemaining;
                this.generator.character.numOfFeats += 1;
                var featTarget = prompt("Which weapon will this feat affect?");
                document.getElementById("feat-name-" + this.generator.character.numOfFeats).innerHTML = (featName + " (" + featTarget + ") ");
            } else {
                var confirmR = confirm("You have no more feats available. Suffer the wrath of your DM and continue anyway?");
                if (confirmR) {
                    featsRemaining -= 1;
                    document.getElementById("feats-remaining").innerHTML = featsRemaining;
                    this.generator.character.numOfFeats += 1;
                    var featTarget = prompt("Which weapon will this feat affect?");
                    document.getElementById("feat-name-" + this.generator.character.numOfFeats).innerHTML = (featName + " (" + featTarget + ") ");
                }
            }
        }
    }


}