
class Cleric {

    /**
     *
     */
    constructor() {
        this.alignment = [''];
        this.hitDie = 8;
        this.skills = ['Concentration', 'Craft', 'Diplomacy', 'Heal', 'Knowledge (arcana)',
            'Knowledge (history)', 'Knowledge (religion)', 'Knowledge (the planes)', 'Profession',
            'Spellcraft'
        ];
        this.skillPoints = {
            0: [2, 4],
            1: [2, 0]
        };
        this.classTable = {
            1: {
                "Base Attack Bonus": 0,
                "Saving": {
                    "Fortitude": 2,
                    "Reflex": 0,
                    "Will": 2
                },
                "Special": "Turn or Rebuke Undead",
                "Spells Per Day": {
                    "0": 3,
                    "1": "1+1",
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
                    "Fortitude": 3,
                    "Reflex": 0,
                    "Will": 3
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 4,
                    "1": "2+1",
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
                "Base Attack Bonus": 2,
                "Saving": {
                    "Fortitude": 3,
                    "Reflex": 1,
                    "Will": 3
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 4,
                    "1": "2+1",
                    "2": "1+1",
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
                "Base Attack Bonus": 3,
                "Saving": {
                    "Fortitude": 4,
                    "Reflex": 1,
                    "Will": 4
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 5,
                    "1": "3+1",
                    "2": "2+1",
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
                "Base Attack Bonus": 3,
                "Saving": {
                    "Fortitude": 4,
                    "Reflex": 1,
                    "Will": 4
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 5,
                    "1": "3+1",
                    "2": "2+1",
                    "3": "1+1",
                    "4": null,
                    "5": null,
                    "6": null,
                    "7": null,
                    "8": null,
                    "9": null
                }
            },
            6: {
                "Base Attack Bonus": 4,
                "Saving": {
                    "Fortitude": 5,
                    "Reflex": 2,
                    "Will": 5
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 5,
                    "1": "3+1",
                    "2": "3+1",
                    "3": "2+1",
                    "4": null,
                    "5": null,
                    "6": null,
                    "7": null,
                    "8": null,
                    "9": null
                }
            },
            7: {
                "Base Attack Bonus": 5,
                "Saving": {
                    "Fortitude": 5,
                    "Reflex": 2,
                    "Will": 5
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 6,
                    "1": "4+1",
                    "2": "3+1",
                    "3": "2+1",
                    "4": "1+1",
                    "5": null,
                    "6": null,
                    "7": null,
                    "8": null,
                    "9": null
                }
            },
            8: {
                "Base Attack Bonus": [6, 1],
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 2,
                    "Will": 6
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 6,
                    "1": "4+1",
                    "2": "3+1",
                    "3": "3+1",
                    "4": "2+1",
                    "5": null,
                    "6": null,
                    "7": null,
                    "8": null,
                    "9": null
                }
            },
            9: {
                "Base Attack Bonus": [6, 1],
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 3,
                    "Will": 6
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 6,
                    "1": "4+1",
                    "2": "4+1",
                    "3": "3+1",
                    "4": "2+1",
                    "5": "1+1",
                    "6": null,
                    "7": null,
                    "8": null,
                    "9": null
                }
            },
            10: {
                "Base Attack Bonus": [7, 2],
                "Saving": {
                    "Fortitude": 7,
                    "Reflex": 3,
                    "Will": 7
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 6,
                    "1": "4+1",
                    "2": "4+1",
                    "3": "3+1",
                    "4": "3+1",
                    "5": "2+1",
                    "6": null,
                    "7": null,
                    "8": null,
                    "9": null
                }
            },
            11: {
                "Base Attack Bonus": [8, 3],
                "Saving": {
                    "Fortitude": 7,
                    "Reflex": 3,
                    "Will": 7
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 6,
                    "1": "5+1",
                    "2": "4+1",
                    "3": "4+1",
                    "4": "3+1",
                    "5": "2+1",
                    "6": "1+1",
                    "7": null,
                    "8": null,
                    "9": null
                }
            },
            12: {
                "Base Attack Bonus": [9, 4],
                "Saving": {
                    "Fortitude": 8,
                    "Reflex": 4,
                    "Will": 8
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 6,
                    "1": "5+1",
                    "2": "4+1",
                    "3": "4+1",
                    "4": "3+1",
                    "5": "3+1",
                    "6": "2+1",
                    "7": null,
                    "8": null,
                    "9": null
                }
            },
            13: {
                "Base Attack Bonus": [9, 4],
                "Saving": {
                    "Fortitude": 8,
                    "Reflex": 4,
                    "Will": 8
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 6,
                    "1": "5+1",
                    "2": "5+1",
                    "3": "4+1",
                    "4": "4+1",
                    "5": "3+1",
                    "6": "2+1",
                    "7": "1+1",
                    "8": null,
                    "9": null
                }
            },
            14: {
                "Base Attack Bonus": [10, 5],
                "Saving": {
                    "Fortitude": 9,
                    "Reflex": 4,
                    "Will": 9
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 6,
                    "1": "5+1",
                    "2": "5+1",
                    "3": "4+1",
                    "4": "4+1",
                    "5": "3+1",
                    "6": "3+1",
                    "7": "2+1",
                    "8": null,
                    "9": null
                }
            },
            15: {
                "Base Attack Bonus": [11, 6, 1],
                "Saving": {
                    "Fortitude": 9,
                    "Reflex": 5,
                    "Will": 9
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 6,
                    "1": "5+1",
                    "2": "5+1",
                    "3": "5+1",
                    "4": "4+1",
                    "5": "4+1",
                    "6": "3+1",
                    "7": "2+1",
                    "8": "1+1",
                    "9": null
                }
            },
            16: {
                "Base Attack Bonus": [12, 7, 2],
                "Saving": {
                    "Fortitude": 10,
                    "Reflex": 5,
                    "Will": 10
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 6,
                    "1": "5+1",
                    "2": "5+1",
                    "3": "5+1",
                    "4": "4+1",
                    "5": "4+1",
                    "6": "3+1",
                    "7": "3+1",
                    "8": "2+1",
                    "9": null
                }
            },
            17: {
                "Base Attack Bonus": [12, 7, 2],
                "Saving": {
                    "Fortitude": 10,
                    "Reflex": 5,
                    "Will": 10
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 6,
                    "1": "5+1",
                    "2": "5+1",
                    "3": "5+1",
                    "4": "5+1",
                    "5": "4+1",
                    "6": "4+1",
                    "7": "3+1",
                    "8": "2+1",
                    "9": "1+1"
                }
            },
            18: {
                "Base Attack Bonus": [13, 8, 3],
                "Saving": {
                    "Fortitude": 11,
                    "Reflex": 6,
                    "Will": 11
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 6,
                    "1": "5+1",
                    "2": "5+1",
                    "3": "5+1",
                    "4": "5+1",
                    "5": "4+1",
                    "6": "4+1",
                    "7": "3+1",
                    "8": "3+1",
                    "9": "2+1"
                }
            },
            19: {
                "Base Attack Bonus": [14, 9, 4],
                "Saving": {
                    "Fortitude": 11,
                    "Reflex": 6,
                    "Will": 11
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 6,
                    "1": "5+1",
                    "2": "5+1",
                    "3": "5+1",
                    "4": "5+1",
                    "5": "5+1",
                    "6": "4+1",
                    "7": "4+1",
                    "8": "3+1",
                    "9": "3+1"
                }
            },
            20: {
                "Base Attack Bonus": [15, 10, 5],
                "Saving": {
                    "Fortitude": 12,
                    "Reflex": 6,
                    "Will": 12
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 6,
                    "1": "5+1",
                    "2": "5+1",
                    "3": "5+1",
                    "4": "5+1",
                    "5": "5+1",
                    "6": "4+1",
                    "7": "4+1",
                    "8": "4+1",
                    "9": "4+1"
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