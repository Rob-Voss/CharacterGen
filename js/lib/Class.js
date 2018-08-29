
class Class {

    /**
     *
     * @param {String} userClass
     */
    constructor(userClass = '') {
        this.name = userClass;
        this.alignment = ['Any'];
        switch (this.name) {
            case "Bard":
            case "Cleric":
            case "Druid":
            case "Monk":
            case "Rogue":
                this.baseAttackType = "A";
                break;
            case "Sorcerer":
            case "Wizard":
                this.baseAttackType = "P";
                break;
            case "Barbarian":
            case "Fighter":
            case "Paladin":
            case "Ranger":
                this.baseAttackType = "G";
                break;
            case "NewBlankClass":
                // A placeholder for future class additions.
                break;
        }
        this.hitDie = 0;
        this.skills = [];
        this.skillPoints = {
            0: [0, 0],
            1: [0, 0]
        };
        this.classTable = {
            1: {
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": ""
            },
            2: {
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": ""
            },
            3: {
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": ""
            },
            4: {
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": ""
            },
            5: {
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": ""
            },
            6: {
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": ""
            },
            7: {
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": ""
            },
            8: {
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": ""
            },
            9: {
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": ""
            },
            10: {
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": ""
            },
            11: {
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": ""
            },
            12: {
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": ""
            },
            13: {
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": ""
            },
            14: {
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": ""
            },
            15: {
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": ""
            },
            16: {
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": ""
            },
            17: {
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": ""
            },
            18: {
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": ""
            },
            19: {
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": ""
            },
            20: {
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": ""
            }
        };
        this.baseAttackBonuses = [0, 0, 0, 0];
    }

    /**
     *
     * @param {number} level
     * @returns {number[]}
     */
    getBaseAttackBonuses(level) {
        switch (this.baseAttackType) {
            case "G":
                this.baseAttackBonuses[1] = level;
                break;
            case "A":
                this.baseAttackBonuses[1] = Math.floor((level + (level / 2)) / 2);
                break;
            case "P":
                this.baseAttackBonuses[1] = Math.floor(level / 2);
                break;
        }
        this.baseAttackBonuses[2] = this.baseAttackBonuses[1] - 5;
        this.baseAttackBonuses[3] = this.baseAttackBonuses[1] - 10;
        this.baseAttackBonuses[4] = this.baseAttackBonuses[1] - 15;

        return this.baseAttackBonuses;
    }

    /**
     *
     * @param {number} level
     * @returns {*}
     */
    getLevelBonuses(level) {
        return this.classTable[level];
    }

    /**
     *
     * @param {number} level
     * @returns {*}
     */
    getSavingThrowBonuses(level) {
        return this.classTable[level]['Saving'];
    }

    /**
     *
     * @param {number} level
     * @returns {*}
     */
    getSpecialBonuses(level) {
        return this.classTable[level]['Special'];
    }

}