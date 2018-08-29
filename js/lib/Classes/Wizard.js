
class Wizard {

    /**
     *
     */
    constructor() {
        this.alignment = ['Any'];
        this.hitDie = 4;
        this.skills = [
            'Concentration', 'Craft', 'Decipher Script', 'Knowledge (all skills, taken individually)',
            'Profession', 'Spellcraft'
        ];
        this.skillPoints = {
            0: [2, 4],
            1: [2, 0]
        };
        this.classTable = {
            1: {
                "Base Attack Bonus": 0,
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 0,
                    "Will": 2
                },
                "Special": "Summon Familiar, Scribe Scroll",
                "Spells Per Day": {
                    "0": 3,
                    "1": 1,
                    "2": null,
                    "3": null,
                    "4": null,
                    "5": null,
                    "6": null,
                    "7": null,
                    "8": null,
                    "9": null
                }
            },
            2: {
                "Base Attack Bonus": 1,
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 0,
                    "Will": 3
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 4,
                    "1": 2,
                    "2": null,
                    "3": null,
                    "4": null,
                    "5": null,
                    "6": null,
                    "7": null,
                    "8": null,
                    "9": null
                }
            },
            3: {
                "Base Attack Bonus": 1,
                "Saving": {
                    "Fortitude": 1,
                    "Reflex": 1,
                    "Will": 3
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 4,
                    "1": 2,
                    "2": 1,
                    "3": null,
                    "4": null,
                    "5": null,
                    "6": null,
                    "7": null,
                    "8": null,
                    "9": null
                }
            },
            4: {
                "Base Attack Bonus": 2,
                "Saving": {
                    "Fortitude": 1,
                    "Reflex": 1,
                    "Will": 4
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 4,
                    "1": 3,
                    "2": 2,
                    "3": null,
                    "4": null,
                    "5": null,
                    "6": null,
                    "7": null,
                    "8": null,
                    "9": null
                }
            },
            5: {
                "Base Attack Bonus": 2,
                "Saving": {
                    "Fortitude": 1,
                    "Reflex": 1,
                    "Will": 4
                },
                "Special": "Bonus Feat",
                "Spells Per Day": {
                    "0": 4,
                    "1": 3,
                    "2": 2,
                    "3": 1,
                    "4": null,
                    "5": null,
                    "6": null,
                    "7": null,
                    "8": null,
                    "9": null
                }
            },
            6: {
                "Base Attack Bonus": 3,
                "Saving": {
                    "Fortitude": 2,
                    "Reflex": 2,
                    "Will": 5
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 4,
                    "1": 3,
                    "2": 3,
                    "3": 2,
                    "4": null,
                    "5": null,
                    "6": null,
                    "7": null,
                    "8": null,
                    "9": null
                }
            },
            7: {
                "Base Attack Bonus": 3,
                "Saving": {
                    "Fortitude": 2,
                    "Reflex": 2,
                    "Will": 5
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 4,
                    "1": 4,
                    "2": 3,
                    "3": 2,
                    "4": 1,
                    "5": null,
                    "6": null,
                    "7": null,
                    "8": null,
                    "9": null
                }
            },
            8: {
                "Base Attack Bonus": 4,
                "Saving": {
                    "Fortitude": 2,
                    "Reflex": 2,
                    "Will": 6
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 4,
                    "1": 4,
                    "2": 3,
                    "3": 3,
                    "4": 2,
                    "5": null,
                    "6": null,
                    "7": null,
                    "8": null,
                    "9": null
                }
            },
            9: {
                "Base Attack Bonus": 4,
                "Saving": {
                    "Fortitude": 3,
                    "Reflex": 3,
                    "Will": 6
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 4,
                    "1": 4,
                    "2": 4,
                    "3": 3,
                    "4": 2,
                    "5": 1,
                    "6": null,
                    "7": null,
                    "8": null,
                    "9": null
                }
            },
            10: {
                "Base Attack Bonus": 5,
                "Saving": {
                    "Fortitude": 3,
                    "Reflex": 3,
                    "Will": 7
                },
                "Special": "Bonus Feat",
                "Spells Per Day": {
                    "0": 4,
                    "1": 4,
                    "2": 4,
                    "3": 3,
                    "4": 3,
                    "5": 2,
                    "6": null,
                    "7": null,
                    "8": null,
                    "9": null
                }
            },
            11: {
                "Base Attack Bonus": 5,
                "Saving": {
                    "Fortitude": 3,
                    "Reflex": 3,
                    "Will": 7
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 4,
                    "1": 4,
                    "2": 4,
                    "3": 4,
                    "4": 3,
                    "5": 2,
                    "6": 1,
                    "7": null,
                    "8": null,
                    "9": null
                }
            },
            12: {
                "Base Attack Bonus": [6, 1],
                "Saving": {
                    "Fortitude": 4,
                    "Reflex": 4,
                    "Will": 8
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 4,
                    "1": 4,
                    "2": 4,
                    "3": 4,
                    "4": 3,
                    "5": 3,
                    "6": 2,
                    "7": null,
                    "8": null,
                    "9": null
                }
            },
            13: {
                "Base Attack Bonus": [6, 1],
                "Saving": {
                    "Fortitude": 4,
                    "Reflex": 4,
                    "Will": 8
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 4,
                    "1": 4,
                    "2": 4,
                    "3": 4,
                    "4": 4,
                    "5": 3,
                    "6": 2,
                    "7": 1,
                    "8": null,
                    "9": null
                }
            },
            14: {
                "Base Attack Bonus": [7, 2],
                "Saving": {
                    "Fortitude": 4,
                    "Reflex": 4,
                    "Will": 9
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 4,
                    "1": 4,
                    "2": 4,
                    "3": 4,
                    "4": 4,
                    "5": 3,
                    "6": 3,
                    "7": 2,
                    "8": null,
                    "9": null
                }
            },
            15: {
                "Base Attack Bonus": [7, 2],
                "Saving": {
                    "Fortitude": 5,
                    "Reflex": 5,
                    "Will": 9
                },
                "Special": "Bonus Feat",
                "Spells Per Day": {
                    "0": 4,
                    "1": 4,
                    "2": 4,
                    "3": 4,
                    "4": 4,
                    "5": 4,
                    "6": 3,
                    "7": 2,
                    "8": 1,
                    "9": null
                }
            },
            16: {
                "Base Attack Bonus": [8, 3],
                "Saving": {
                    "Fortitude": 5,
                    "Reflex": 5,
                    "Will": 10
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 4,
                    "1": 4,
                    "2": 4,
                    "3": 4,
                    "4": 4,
                    "5": 4,
                    "6": 3,
                    "7": 3,
                    "8": 2,
                    "9": null
                }
            },
            17: {
                "Base Attack Bonus": [8, 3],
                "Saving": {
                    "Fortitude": 5,
                    "Reflex": 5,
                    "Will": 10
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 4,
                    "1": 4,
                    "2": 4,
                    "3": 4,
                    "4": 4,
                    "5": 4,
                    "6": 4,
                    "7": 3,
                    "8": 2,
                    "9": 1
                }
            },
            18: {
                "Base Attack Bonus": [9, 4],
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 6,
                    "Will": 11
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 4,
                    "1": 4,
                    "2": 4,
                    "3": 4,
                    "4": 4,
                    "5": 4,
                    "6": 4,
                    "7": 3,
                    "8": 3,
                    "9": 2
                }
            },
            19: {
                "Base Attack Bonus": [9, 4],
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 6,
                    "Will": 11
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 4,
                    "1": 4,
                    "2": 4,
                    "3": 4,
                    "4": 4,
                    "5": 4,
                    "6": 4,
                    "7": 4,
                    "8": 3,
                    "9": 3
                }
            },
            20: {
                "Base Attack Bonus": [10, 5],
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 6,
                    "Will": 12
                },
                "Special": "Bonus Feat",
                "Spells Per Day": {
                    "0": 4,
                    "1": 4,
                    "2": 4,
                    "3": 4,
                    "4": 4,
                    "5": 4,
                    "6": 4,
                    "7": 4,
                    "8": 4,
                    "9": 4
                }
            }
        };

    }

    /**
     *
     * @param level
     * @returns {*}
     */
    getLevelStats(level) {
        return this.classTable[level];
    }
}