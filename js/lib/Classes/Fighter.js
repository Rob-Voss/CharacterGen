
class Fighter {

    /**
     *
     */
    constructor() {
        this.alignment = ['Any'];
        this.hitDie = 10;
        this.skills = [
            'Climb', 'Craft', 'Handle Animal', 'Intimidate', 'Jump', 'Ride', 'Swim'
        ];
        this.skillPoints = {
            0: [2, 4],
            1: [2, 0]
        };
        this.classTable = {
            1: {
                "Base Attack Bonus": 1,
                "Saving": {
                    "Fortitude": 2,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": "Bonus Feat"
            },
            2: {
                "Base Attack Bonus": 2,
                "Saving": {
                    "Fortitude": 3,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": "Bonus Feat"
            },
            3: {
                "Base Attack Bonus": 3,
                "Saving": {
                    "Fortitude": 3,
                    "Reflex": 1,
                    "Will": 1
                },
                "Special": null
            },
            4: {
                "Base Attack Bonus": 4,
                "Saving": {
                    "Fortitude": 4,
                    "Reflex": 1,
                    "Will": 1
                },
                "Special": "Bonus Feat"
            },
            5: {
                "Base Attack Bonus": 5,
                "Saving": {
                    "Fortitude": 4,
                    "Reflex": 1,
                    "Will": 1
                },
                "Special": null
            },
            6: {
                "Base Attack Bonus": [6, 1],
                "Saving": {
                    "Fortitude": 5,
                    "Reflex": 2,
                    "Will": 2
                },
                "Special": "Bonus Feat"
            },
            7: {
                "Base Attack Bonus": [7, 2],
                "Saving": {
                    "Fortitude": 5,
                    "Reflex": 2,
                    "Will": 2
                },
                "Special": null
            },
            8: {
                "Base Attack Bonus": [8, 3],
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 2,
                    "Will": 2
                },
                "Special": "Bonus Feat"
            },
            9: {
                "Base Attack Bonus": [9, 4],
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 3,
                    "Will": 3
                },
                "Special": null
            },
            10: {
                "Base Attack Bonus": [10, 5],
                "Saving": {
                    "Fortitude": 7,
                    "Reflex": 3,
                    "Will": 3
                },
                "Special": "Bonus Feat"
            },
            11: {
                "Base Attack Bonus": [11, 6, 1],
                "Saving": {
                    "Fortitude": 7,
                    "Reflex": 3,
                    "Will": 3
                },
                "Special": null
            },
            12: {
                "Base Attack Bonus": [12, 7, 2],
                "Saving": {
                    "Fortitude": 8,
                    "Reflex": 4,
                    "Will": 4
                },
                "Special": "Bonus Feat"
            },
            13: {
                "Base Attack Bonus": [13, 8, 3],
                "Saving": {
                    "Fortitude": 8,
                    "Reflex": 4,
                    "Will": 4
                },
                "Special": null
            },
            14: {
                "Base Attack Bonus": [14, 9, 4],
                "Saving": {
                    "Fortitude": 9,
                    "Reflex": 4,
                    "Will": 4
                },
                "Special": "Bonus Feat"
            },
            15: {
                "Base Attack Bonus": [15, 10, 5],
                "Saving": {
                    "Fortitude": 9,
                    "Reflex": 5,
                    "Will": 5
                },
                "Special": null
            },
            16: {
                "Base Attack Bonus": [16, 11, 6, 1],
                "Saving": {
                    "Fortitude": 10,
                    "Reflex": 5,
                    "Will": 5
                },
                "Special": "Bonus Feat"
            },
            17: {
                "Base Attack Bonus": [17, 12, 7, 2],
                "Saving": {
                    "Fortitude": 10,
                    "Reflex": 5,
                    "Will": 5
                },
                "Special": null
            },
            18: {
                "Base Attack Bonus": [18, 13, 8, 3],
                "Saving": {
                    "Fortitude": 11,
                    "Reflex": 6,
                    "Will": 6
                },
                "Special": "Bonus Feat"
            },
            19: {
                "Base Attack Bonus": [19, 14, 9, 4],
                "Saving": {
                    "Fortitude": 11,
                    "Reflex": 6,
                    "Will": 6
                },
                "Special": null
            },
            20: {
                "Base Attack Bonus": [20, 15, 10, 5],
                "Saving": {
                    "Fortitude": 12,
                    "Reflex": 6,
                    "Will": 6
                },
                "Special": "Bonus Feat"
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