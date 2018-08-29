/**
 Sorcerer Spells Known
 Level    Spells Known 0    1st    2nd    3rd    4th    5th    6th    7th    8th    9th
 1st    4    2    —    —    —    —    —    —    —    —
 2nd    5    2    —    —    —    —    —    —    —    —
 3rd    5    3    —    —    —    —    —    —    —    —
 4th    6    3    1    —    —    —    —    —    —    —
 5th    6    4    2    —    —    —    —    —    —    —
 6th    7    4    2    1    —    —    —    —    —    —
 7th    7    5    3    2    —    —    —    —    —    —
 8th    8    5    3    2    1    —    —    —    —    —
 9th    8    5    4    3    2    —    —    —    —    —
 10th    9    5    4    3    2    1    —    —    —    —
 11th    9    5    5    4    3    2    —    —    —    —
 12th    9    5    5    4    3    2    1    —    —    —
 13th    9    5    5    4    4    3    2    —    —    —
 14th    9    5    5    4    4    3    2    1    —    —
 15th    9    5    5    4    4    4    3    2    —    —
 16th    9    5    5    4    4    4    3    2    1    —
 17th    9    5    5    4    4    4    3    3    2    —
 18th    9    5    5    4    4    4    3    3    2    1
 19th    9    5    5    4    4    4    3    3    3    2
 20th    9    5    5    4    4    4    3    3    3    3*/

class Sorcerer {

    /**
     *
     */
    constructor() {
        this.alignment = ['Any'];
        this.hitDie = 4;
        this.skills = [
            'Bluff', 'Concentration', 'Craft', 'Knowledge (arcana)', 'Profession', 'Spellcraft'
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
                "Special": "Summon Familiar",
                "Spells Per Day": {
                    "0": 5,
                    "1": 3,
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
                    "0": 6,
                    "1": 4,
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
                    "0": 6,
                    "1": 5,
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
            4: {
                "Base Attack Bonus": 2,
                "Saving": {
                    "Fortitude": 1,
                    "Reflex": 1,
                    "Will": 4
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 6,
                    "1": 6,
                    "2": 3,
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
                "Special": null,
                "Spells Per Day": {
                    "0": 6,
                    "1": 6,
                    "2": 4,
                    "3": null,
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
                    "0": 6,
                    "1": 6,
                    "2": 5,
                    "3": 3,
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
                    "0": 6,
                    "1": 6,
                    "2": 6,
                    "3": 4,
                    "4": null,
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
                    "0": 6,
                    "1": 6,
                    "2": 6,
                    "3": 5,
                    "4": 3,
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
                    "0": 6,
                    "1": 6,
                    "2": 6,
                    "3": 6,
                    "4": 4,
                    "5": null,
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
                "Special": null,
                "Spells Per Day": {
                    "0": 6,
                    "1": 6,
                    "2": 6,
                    "3": 6,
                    "4": 5,
                    "5": 3,
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
                    "0": 6,
                    "1": 6,
                    "2": 6,
                    "3": 6,
                    "4": 6,
                    "5": 4,
                    "6": null,
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
                    "0": 6,
                    "1": 6,
                    "2": 6,
                    "3": 6,
                    "4": 6,
                    "5": 5,
                    "6": 3,
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
                    "0": 6,
                    "1": 6,
                    "2": 6,
                    "3": 6,
                    "4": 6,
                    "5": 6,
                    "6": 4,
                    "7": null,
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
                    "0": 6,
                    "1": 6,
                    "2": 6,
                    "3": 6,
                    "4": 6,
                    "5": 6,
                    "6": 5,
                    "7": 3,
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
                "Special": null,
                "Spells Per Day": {
                    "0": 6,
                    "1": 6,
                    "2": 6,
                    "3": 6,
                    "4": 6,
                    "5": 6,
                    "6": 6,
                    "7": 4,
                    "8": null,
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
                    "0": 6,
                    "1": 6,
                    "2": 6,
                    "3": 6,
                    "4": 6,
                    "5": 6,
                    "6": 6,
                    "7": 5,
                    "8": 3,
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
                    "0": 6,
                    "1": 6,
                    "2": 6,
                    "3": 6,
                    "4": 6,
                    "5": 6,
                    "6": 6,
                    "7": 6,
                    "8": 4,
                    "9": null
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
                    "0": 6,
                    "1": 6,
                    "2": 6,
                    "3": 6,
                    "4": 6,
                    "5": 6,
                    "6": 6,
                    "7": 6,
                    "8": 5,
                    "9": 3
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
                    "0": 6,
                    "1": 6,
                    "2": 6,
                    "3": 6,
                    "4": 6,
                    "5": 6,
                    "6": 6,
                    "7": 6,
                    "8": 6,
                    "9": 4
                }
            },
            20: {
                "Base Attack Bonus": [10, 5],
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 6,
                    "Will": 12
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 6,
                    "1": 6,
                    "2": 6,
                    "3": 6,
                    "4": 6,
                    "5": 6,
                    "6": 6,
                    "7": 6,
                    "8": 6,
                    "9": 6
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