
class Bard extends Class {

    /**
     *
     */
    constructor() {
        super('Bard');

        this.alignment = ['Nonlawful'];
        this.hitDie = 6;
        this.skills = ['Appraise', 'Balance', 'Bluff', 'Climb', 'Concentration', 'Craft', 'Decipher Script', 'Diplomacy',
            'Disguise', 'Escape Artist', 'Gather Information',
            'Hide', 'Jump', 'Knowledge (all skills, taken individually)', 'Listen', 'Move Silently',
            'Perform', 'Profession', 'Sense Motive', 'Sleight of Hand', 'Speak Language', 'Spellcraft',
            'Swim', 'Tumble', 'Use Magic Device'
        ];
        this.skillPoints = {
            0: [6, 4],
            1: [6, 0]
        };
        this.classTable = {
            0: {
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": ""
            },
            1: {
                "Base Attack Bonus": 0,
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 2,
                    "Will": 2
                },
                "Special": "Bardic Music, Bardic Knowledge, Countersong, Fascinate, Inspire Courage +1",
                "Spells Per Day": {
                    "0": 2,
                    "1": null,
                    "2": null,
                    "3": null,
                    "4": null,
                    "5": null,
                    "6": null
                }
            },
            2: {
                "Base Attack Bonus": 1,
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 3,
                    "Will": 3
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 3,
                    "1": 0,
                    "2": null,
                    "3": null,
                    "4": null,
                    "5": null,
                    "6": null
                }
            },
            3: {
                "Base Attack Bonus": 2,
                "Saving": {
                    "Fortitude": 1,
                    "Reflex": 3,
                    "Will": 3
                },
                "Special": "Inspire Competence",
                "Spells Per Day": {
                    "0": 3,
                    "1": 1,
                    "2": null,
                    "3": null,
                    "4": null,
                    "5": null,
                    "6": null
                }
            },
            4: {
                "Base Attack Bonus": 3,
                "Saving": {
                    "Fortitude": 1,
                    "Reflex": 4,
                    "Will": 4
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 3,
                    "1": 2,
                    "2": 0,
                    "3": null,
                    "4": null,
                    "5": null,
                    "6": null
                }
            },
            5: {
                "Base Attack Bonus": 3,
                "Saving": {
                    "Fortitude": 1,
                    "Reflex": 4,
                    "Will": 4
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 3,
                    "1": 3,
                    "2": 1,
                    "3": null,
                    "4": null,
                    "5": null,
                    "6": null
                }
            },
            6: {
                "Base Attack Bonus": 4,
                "Saving": {
                    "Fortitude": 2,
                    "Reflex": 5,
                    "Will": 5
                },
                "Special": "Suggestion",
                "Spells Per Day": {
                    "0": 3,
                    "1": 3,
                    "2": 2,
                    "3": null,
                    "4": null,
                    "5": null,
                    "6": null
                }
            },
            7: {
                "Base Attack Bonus": 5,
                "Saving": {
                    "Fortitude": 2,
                    "Reflex": 5,
                    "Will": 5
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 3,
                    "1": 3,
                    "2": 2,
                    "3": 0,
                    "4": null,
                    "5": null,
                    "6": null
                }
            },
            8: {
                "Base Attack Bonus": [6, 1],
                "Saving": {
                    "Fortitude": 2,
                    "Reflex": 6,
                    "Will": 6
                },
                "Special": "Inspire Courage +2",
                "Spells Per Day": {
                    "0": 3,
                    "1": 3,
                    "2": 3,
                    "3": 1,
                    "4": null,
                    "5": null,
                    "6": null
                }
            },
            9: {
                "Base Attack Bonus": [6, 1],
                "Saving": {
                    "Fortitude": 3,
                    "Reflex": 6,
                    "Will": 6
                },
                "Special": "Inspire Greatness",
                "Spells Per Day": {
                    "0": 3,
                    "1": 3,
                    "2": 3,
                    "3": 2,
                    "4": null,
                    "5": null,
                    "6": null
                }
            },
            10: {
                "Base Attack Bonus": [7, 2],
                "Saving": {
                    "Fortitude": 3,
                    "Reflex": 7,
                    "Will": 7
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 3,
                    "1": 3,
                    "2": 3,
                    "3": 2,
                    "4": 0,
                    "5": null,
                    "6": null
                }
            },
            11: {
                "Base Attack Bonus": [8, 3],
                "Saving": {
                    "Fortitude": 3,
                    "Reflex": 7,
                    "Will": 7
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 3,
                    "1": 3,
                    "2": 3,
                    "3": 3,
                    "4": 1,
                    "5": null,
                    "6": null
                }
            },
            12: {
                "Base Attack Bonus": [9, 4],
                "Saving": {
                    "Fortitude": 4,
                    "Reflex": 8,
                    "Will": 8
                },
                "Special": "Song of Freedom",
                "Spells Per Day": {
                    "0": 3,
                    "1": 3,
                    "2": 3,
                    "3": 3,
                    "4": 2,
                    "5": null,
                    "6": null
                }
            },
            13: {
                "Base Attack Bonus": [9, 4],
                "Saving": {
                    "Fortitude": 4,
                    "Reflex": 8,
                    "Will": 8
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 3,
                    "1": 3,
                    "2": 3,
                    "3": 3,
                    "4": 2,
                    "5": 0,
                    "6": null
                }
            },
            14: {
                "Base Attack Bonus": [10, 5],
                "Saving": {
                    "Fortitude": 4,
                    "Reflex": 9,
                    "Will": 9
                },
                "Special": "Inspire Courage +3",
                "Spells Per Day": {
                    "0": 4,
                    "1": 3,
                    "2": 3,
                    "3": 3,
                    "4": 3,
                    "5": 1,
                    "6": null
                }
            },
            15: {
                "Base Attack Bonus": [11, 6, 1],
                "Saving": {
                    "Fortitude": 5,
                    "Reflex": 9,
                    "Will": 9
                },
                "Special": "Inspire Heroics",
                "Spells Per Day": {
                    "0": 4,
                    "1": 4,
                    "2": 3,
                    "3": 3,
                    "4": 3,
                    "5": 2,
                    "6": null
                }
            },
            16: {
                "Base Attack Bonus": [12, 7, 2],
                "Saving": {
                    "Fortitude": 5,
                    "Reflex": 10,
                    "Will": 10
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 4,
                    "1": 4,
                    "2": 4,
                    "3": 3,
                    "4": 3,
                    "5": 2,
                    "6": 0
                }
            },
            17: {
                "Base Attack Bonus": [12, 7, 2],
                "Saving": {
                    "Fortitude": 5,
                    "Reflex": 10,
                    "Will": 10
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 4,
                    "1": 4,
                    "2": 4,
                    "3": 4,
                    "4": 3,
                    "5": 3,
                    "6": 1
                }
            },
            18: {
                "Base Attack Bonus": [13, 8, 3],
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 11,
                    "Will": 11
                },
                "Special": "Mass Suggestion",
                "Spells Per Day": {
                    "0": 4,
                    "1": 4,
                    "2": 4,
                    "3": 4,
                    "4": 4,
                    "5": 3,
                    "6": 2
                }
            },
            19: {
                "Base Attack Bonus": [14, 9, 4],
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 11,
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
                    "6": 3
                }
            },
            20: {
                "Base Attack Bonus": [15, 10, 5],
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 12,
                    "Will": 12
                },
                "Special": "Inspire Courage +4",
                "Spells Per Day": {
                    "0": 4,
                    "1": 4,
                    "2": 4,
                    "3": 4,
                    "4": 4,
                    "5": 4,
                    "6": 4
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