
class Paladin extends Class {

    /**
     *
     */
    constructor() {
        super('Paladin');

        this.alignment = ['Lawful good'];
        this.hitDie = 10;
        this.skills = [
            'Concentration', 'Craft', 'Diplomacy', 'Handle Animal', 'Heal',
            'Knowledge (nobility and royalty)', 'Knowledge (religion)', 'Profession', 'Ride'
        ];
        this.skillPoints = {
            0: [2, 4],
            1: [2, 0]
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
                "Base Attack Bonus": 1,
                "Saving": {
                    "Fortitude": 2,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": "Aura of Good, Detect Evil, Smite Evil 1/day",
                "Spells Per Day": {
                    "0": null,
                    "1": null,
                    "2": null,
                    "3": null
                }
            },
            2: {
                "Base Attack Bonus": 2,
                "Saving": {
                    "Fortitude": 3,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": "Divine Grace, Lay on Hands",
                "Spells Per Day": {
                    "0": null,
                    "1": null,
                    "2": null,
                    "3": null
                }
            },
            3: {
                "Base Attack Bonus": 3,
                "Saving": {
                    "Fortitude": 3,
                    "Reflex": 1,
                    "Will": 1
                },
                "Special": "Aura of Courage, Divine Health",
                "Spells Per Day": {
                    "0": null,
                    "1": null,
                    "2": null,
                    "3": null
                }
            },
            4: {
                "Base Attack Bonus": 4,
                "Saving": {
                    "Fortitude": 4,
                    "Reflex": 1,
                    "Will": 1
                },
                "Special": "Turn Undead",
                "Spells Per Day": {
                    "0": 0,
                    "1": null,
                    "2": null,
                    "3": null
                }
            },
            5: {
                "Base Attack Bonus": 5,
                "Saving": {
                    "Fortitude": 4,
                    "Reflex": 1,
                    "Will": 1
                },
                "Special": "Smite Evil 2/day, Reflex Mount",
                "Spells Per Day": {
                    "0": 0,
                    "1": null,
                    "2": null,
                    "3": null
                }
            },
            6: {
                "Base Attack Bonus": [6, 1],
                "Saving": {
                    "Fortitude": 5,
                    "Reflex": 2,
                    "Will": 2
                },
                "Special": "Remove Disease 1/week",
                "Spells Per Day": {
                    "0": 1,
                    "1": null,
                    "2": null,
                    "3": null
                }
            },
            7: {
                "Base Attack Bonus": [7, 2],
                "Saving": {
                    "Fortitude": 5,
                    "Reflex": 2,
                    "Will": 2
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 1,
                    "1": null,
                    "2": null,
                    "3": null
                }
            },
            8: {
                "Base Attack Bonus": [8, 3],
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 2,
                    "Will": 2
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 1,
                    "1": 0,
                    "2": null,
                    "3": null
                }
            },
            9: {
                "Base Attack Bonus": [9, 4],
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 3,
                    "Will": 3
                },
                "Special": "Remove Disease 2/week",
                "Spells Per Day": {
                    "0": 1,
                    "1": 0,
                    "2": null,
                    "3": null
                }
            },
            10: {
                "Base Attack Bonus": [10, 5],
                "Saving": {
                    "Fortitude": 7,
                    "Reflex": 3,
                    "Will": 3
                },
                "Special": "Smite Evil 3/day",
                "Spells Per Day": {
                    "0": 1,
                    "1": 1,
                    "2": null,
                    "3": null
                }
            },
            11: {
                "Base Attack Bonus": [11, 6, 1],
                "Saving": {
                    "Fortitude": 7,
                    "Reflex": 3,
                    "Will": 3
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 1,
                    "1": 1,
                    "2": 0,
                    "3": null
                }
            },
            12: {
                "Base Attack Bonus": [12, 7, 2],
                "Saving": {
                    "Fortitude": 8,
                    "Reflex": 4,
                    "Will": 4
                },
                "Special": "Remove Disease 3/week",
                "Spells Per Day": {
                    "0": 1,
                    "1": 1,
                    "2": 1,
                    "3": null
                }
            },
            13: {
                "Base Attack Bonus": [13, 8, 3],
                "Saving": {
                    "Fortitude": 8,
                    "Reflex": 4,
                    "Will": 4
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 1,
                    "1": 1,
                    "2": 1,
                    "3": null
                }
            },
            14: {
                "Base Attack Bonus": [14, 9, 4],
                "Saving": {
                    "Fortitude": 9,
                    "Reflex": 4,
                    "Will": 4
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 2,
                    "1": 1,
                    "2": 1,
                    "3": 0
                }
            },
            15: {
                "Base Attack Bonus": [15, 10, 5],
                "Saving": {
                    "Fortitude": 9,
                    "Reflex": 5,
                    "Will": 5
                },
                "Special": "Remove Disease 4/week, Smite Evil 4/day",
                "Spells Per Day": {
                    "0": 2,
                    "1": 1,
                    "2": 1,
                    "3": 1
                }
            },
            16: {
                "Base Attack Bonus": [16, 11, 6, 1],
                "Saving": {
                    "Fortitude": 10,
                    "Reflex": 5,
                    "Will": 5
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 2,
                    "1": 2,
                    "2": 1,
                    "3": 1
                }
            },
            17: {
                "Base Attack Bonus": [17, 12, 7, 2],
                "Saving": {
                    "Fortitude": 10,
                    "Reflex": 5,
                    "Will": 5
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 2,
                    "1": 2,
                    "2": 2,
                    "3": 1
                }
            },
            18: {
                "Base Attack Bonus": [18, 13, 8, 3],
                "Saving": {
                    "Fortitude": 11,
                    "Reflex": 6,
                    "Will": 6
                },
                "Special": "Remove Disease 5/week",
                "Spells Per Day": {
                    "0": 3,
                    "1": 2,
                    "2": 2,
                    "3": 1
                }
            },
            19: {
                "Base Attack Bonus": [19, 14, 9, 4],
                "Saving": {
                    "Fortitude": 11,
                    "Reflex": 6,
                    "Will": 6
                },
                "Special": null,
                "Spells Per Day": {
                    "0": 3,
                    "1": 3,
                    "2": 3,
                    "3": 2
                }
            },
            20: {
                "Base Attack Bonus": [20, 15, 10, 5],
                "Saving": {
                    "Fortitude": 12,
                    "Reflex": 6,
                    "Will": 6
                },
                "Special": "Smite Evil 5/day",
                "Spells Per Day": {
                    "0": 3,
                    "1": 3,
                    "2": 3,
                    "3": 3
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