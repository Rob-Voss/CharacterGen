
class Feats {

    /**
     *
     * @param {Character} character
     * @returns {Feats}
     */
    constructor(character) {
        this.character = character;
        this.allSubMenus = ["Combat", "Skill", "Other", "Proficiency", "Creation", "Casting", "MetaMagic"];

        return this;
    }

    /**
     *
     * @param {String} featName
     */
    featUpdateSkill(featName) {
        let featShortCodes = [],
            confirms = this.updateFeats(featName);

        if (confirms.confirmR === true && confirms.confirmR === true) {
            switch (featName) {
                case "Acrobatic":
                    featShortCodes = ["jump", "tumble"];
                    break;
                case "Agile":
                    featShortCodes = ["balance", "escapeartist"];
                    break;
                case "Alertness":
                    featShortCodes = ["listen", "spot"];
                    break;
                case "Animal Affinity":
                    featShortCodes = ["handleanimal", "ride"];
                    break;
                case "Athletic":
                    featShortCodes = ["climb", "swim"];
                    break;
                case "Deceitful":
                    featShortCodes = ["disguise", "forgery"];
                    break;
                case "Deft Hands":
                    featShortCodes = ["sleight", "userope"];
                    break;
                case "Diligent":
                    featShortCodes = ["appraise", "decipherscript"];
                    break;
                case "Investigator":
                    featShortCodes = ["gatherinformation", "search"];
                    break;
                case "Magical Aptitude":
                    featShortCodes = ["spellcraft", "usemagicdevice"];
                    break;
                case "Negotiator":
                    featShortCodes = ["diplomacy", "sensemotive"];
                    break;
                case "Nimble Fingers":
                    featShortCodes = ["disabledevice", "openlock"];
                    break;
                case "Persuasive":
                    featShortCodes = ["bluff", "intimidate"];
                    break;
                case "Self-Sufficient":
                    featShortCodes = ["heal", "survival"];
                    break;
                case "Stealthy":
                    featShortCodes = ["hide", "movesilently"];
                    break;
            }
            this.featUpdateSkillTwin(featShortCodes);

            this.character.weaponFinesse = featName === "Weapon Finesse";
            this.character.improvedInitiative = featName === "Improved Initiative";
            this.character.greatFortitude = featName === "Great Fortitude";
            this.character.ironWill = featName === "Iron Will";
            this.character.lighteningReflexes = featName === "Lightening Reflexes";
            this.character.toughness = featName === "Toughness";
        }
    }

    /**
     *
     * @param {Array} featShortCodes
     */
    featUpdateSkillTwin(featShortCodes) {
        featShortCodes.forEach(function(element) {
            let featUpdateMiscMod = document.getElementById("ms-" + element).innerHTML;
            if (featUpdateMiscMod === "-") {
                document.getElementById("ms-" + element).innerHTML = 2;
            } else {
                featUpdateMiscMod = Number(featUpdateMiscMod) + 2;
                document.getElementById("ms-jump").innerHTML = featUpdateMiscMod;
            }
        });
    }

    /**
     *
     * @param {String} featName
     * @param {String} featTarget
     * @returns {{confirmW: boolean, confirmR: boolean}}
     */
    updateFeats(featName, featTarget = undefined) {
        let confirmR,
            confirmW = confirm("Select " + featName + "?"),
            featsRemaining = Number(document.getElementById("feats-remaining").innerHTML);
        if (confirmW) {
            if (featsRemaining > 0) {
                featsRemaining -= 1;
            } else {
                confirmR = confirm("You have no more feats available. Suffer the wrath of your DM and continue anyway?");
                if (confirmR) {
                    featsRemaining -= 1;
                }
            }
          this.character.numberOfFeats += 1;
            document.getElementById("feats-remaining").innerHTML = featsRemaining;
            document.getElementById("feat-name-" + this.character.numberOfFeats).innerHTML = (featTarget !== undefined) ? featName + " (" + featTarget + ") " : featName;
        }

        return {
            confirmW: confirmW,
            confirmR: confirmR
        };
    }

    /**
     *
     * @param {string} featName
     */
    weaponFeat(featName) {
        let featTarget = prompt("Which weapon will this feat affect?");
        this.updateFeats(featName, featTarget);
    }

}