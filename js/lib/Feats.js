
class Feats {

    /**
     *
     * @param {CharacterGen} characterGen
     * @returns {Feats}
     */
    constructor(characterGen) {
        this.generator = characterGen;
        this.allSubMenus = ["combat", "skill", "other", "proficiency", "creation", "casting", "metamagic"];

        return this;
    }

    /**
     * Show the appropriate Feat Sub Menu
     * @param whichSubMenu
     */
    featsSubMenu(whichSubMenu) {
        for (let i = 0; i < this.allSubMenus.length; i++) {
            let isMenu = this.allSubMenus[i] === whichSubMenu;
            document.getElementById("feats-" + (isMenu) ? whichSubMenu : this.allSubMenus[i]).style.display = (isMenu) ? "block" : "none";
        }
        window.scrollTo(0, 0);
    }

    /**
     *
     * @param {String} featName
     */
    featUpdateSkill(featName) {
        let confirmR,
            confirmF = confirm("Select " + featName + "?"),
            featsRemaining = Number(document.getElementById("feats-remaining").innerHTML);
        if (confirmF) {
            if (featsRemaining > 0) {
                featsRemaining -= 1;
                confirmR = true;
            } else {
                confirmR = confirm("You have no more feats available. Suffer the wrath of your DM and continue anyway?");
                if (confirmR) {
                    featsRemaining -= 1;
                }
            }
            document.getElementById("feats-remaining").innerHTML = featsRemaining;
            this.generator.character.numberOfFeats += 1;
            document.getElementById("feat-name-" + this.generator.character.numberOfFeats).innerHTML = featName;
        }

        if (confirmF === true && confirmR === true) {
            let twins = [];
            switch (featName) {
                case "Acrobatic":
                    twins = ["jump", "tumb"];
                    break;
                case "Agile":
                    twins = ["bala", "esca"];
                    break;
                case "Alertness":
                    twins = ["list", "spot"];
                    break;
                case "Animal Affinity":
                    twins = ["hand", "ride"];
                    break;
                case "Athletic":
                    twins = ["clim", "swim"];
                    break;
                case "Deceitful":
                    twins = ["disg", "forg"];
                    break;
                case "Deft Hands":
                    twins = ["slei", "user"];
                    break;
                case "Diligent":
                    twins = ["appr", "deci"];
                    break;
                case "Investigator":
                    twins = ["gath", "sear"];
                    break;
                case "Magical Aptitude":
                    twins = ["spel", "usem"];
                    break;
                case "Negotiator":
                    twins = ["dipl", "sens"];
                    break;
                case "Nimble Fingers":
                    twins = ["disa", "open"];
                    break;
                case "Persuasive":
                    twins = ["bluf", "inti"];
                    break;
                case "Self-Sufficient":
                    twins = ["heal", "surv"];
                    break;
                case "Stealthy":
                    twins = ["hide", "move"];
                    break;
            }
            this.featUpdateSkillTwin(twins);

            this.generator.character.weaponFinesse = featName === "Weapon Finesse";
            this.generator.character.improvedInitiative = featName === "Improved Initiative";
            this.generator.character.greatFortitude = featName === "Great Fortitude";
            this.generator.character.ironWill = featName === "Iron Will";
            this.generator.character.lighteningReflexes = featName === "Lightening Reflexes";
            this.generator.character.toughness = featName === "Toughness";
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
     */
    selectFeat(featName) {
        let confirmR,
            confirmF = confirm("Select " + featName + "?"),
            featsRemaining = Number(document.getElementById("feats-remaining").innerHTML);
        if (confirmF) {
            if (featsRemaining > 0) {
                featsRemaining -= 1;
            } else {
                confirmR = confirm("You have no more feats available. Suffer the wrath of your DM and continue anyway?");
                if (confirmR) {
                    featsRemaining -= 1;
                }
            }
            document.getElementById("feats-remaining").innerHTML = featsRemaining;
            this.generator.character.numberOfFeats += 1;
            document.getElementById("feat-name-" + this.generator.character.numberOfFeats).innerHTML = featName;
        }
    }

    /**
     *
     * @param {string} featName
     */
    weaponFeat(featName) {
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
            document.getElementById("feats-remaining").innerHTML = featsRemaining;
            this.generator.character.numberOfFeats += 1;
            let featTarget = prompt("Which weapon will this feat affect?");
            document.getElementById("feat-name-" + this.generator.character.numberOfFeats).innerHTML = (featName + " (" + featTarget + ") ");
        }
    }

}