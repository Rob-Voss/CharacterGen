
class Rogue {

    /**
     *
     */
    constructor() {
        this.alignment = ['Any'];
        this.hitDie = 6;
        this.skills = [
            'Appraise', 'Balance', 'Bluff', 'Climb', 'Craft', 'Decipher Script',
            'Diplomacy', 'Disable Device', 'Disguise', 'Escape Artist', 'Forgery', 'Gather Information',
            'Hide', 'Intimidate', 'Jump', 'Knowledge (local)', 'Listen', 'Move Silently', 'Open Lock',
            'Perform', 'Profession', 'Search', 'Sense Motive', 'Sleight', 'Spot', 'Swim',
            'Tumble', 'Use Magic Device', 'Use Rope'
        ];
        this.skillPoints = {
            0: [8, 4],
            1: [8, 0]
        };
        this.classTable = {
            1: {
                "Base Attack Bonus": 0,
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 2,
                    "FIELD5": 0
                },
                "Special": "Sneak Attack +1d6, Trapfinding"
            },
            2: {
                "Base Attack Bonus": 1,
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 3,
                    "FIELD5": 0
                },
                "Special": "Evasion"
            },
            3: {
                "Base Attack Bonus": 2,
                "Saving": {
                    "Fortitude": 1,
                    "Reflex": 3,
                    "FIELD5": 1
                },
                "Special": "Sneak Attack +2d6, Trap Sense +1"
            },
            4: {
                "Base Attack Bonus": 3,
                "Saving": {
                    "Fortitude": 1,
                    "Reflex": 4,
                    "FIELD5": 1
                },
                "Special": "Uncanny Dodge"
            },
            5: {
                "Base Attack Bonus": 3,
                "Saving": {
                    "Fortitude": 1,
                    "Reflex": 4,
                    "FIELD5": 1
                },
                "Special": "Sneak Attack +3d6"
            },
            6: {
                "Base Attack Bonus": 4,
                "Saving": {
                    "Fortitude": 2,
                    "Reflex": 5,
                    "FIELD5": 2
                },
                "Special": "Trap Sense +2"
            },
            7: {
                "Base Attack Bonus": 5,
                "Saving": {
                    "Fortitude": 2,
                    "Reflex": 5,
                    "FIELD5": 2
                },
                "Special": "Sneak Attack +4d6"
            },
            8: {
                "Base Attack Bonus": [6, 1],
                "Saving": {
                    "Fortitude": 2,
                    "Reflex": 6,
                    "FIELD5": 2
                },
                "Special": "Improved Uncanny Dodge"
            },
            9: {
                "Base Attack Bonus": [6, 1],
                "Saving": {
                    "Fortitude": 3,
                    "Reflex": 6,
                    "FIELD5": 3
                },
                "Special": "Sneak Attack +5d6, Trap Sense +3"
            },
            10: {
                "Base Attack Bonus": [7, 2],
                "Saving": {
                    "Fortitude": 3,
                    "Reflex": 7,
                    "FIELD5": 3
                },
                "Special": "Reflex Ability"
            },
            11: {
                "Base Attack Bonus": [8, 3],
                "Saving": {
                    "Fortitude": 3,
                    "Reflex": 7,
                    "FIELD5": 3
                },
                "Special": "Sneak Attack +6d6"
            },
            12: {
                "Base Attack Bonus": [9, 4],
                "Saving": {
                    "Fortitude": 4,
                    "Reflex": 8,
                    "FIELD5": 4
                },
                "Special": "Trap Sense +4"
            },
            13: {
                "Base Attack Bonus": [9, 4],
                "Saving": {
                    "Fortitude": 4,
                    "Reflex": 8,
                    "FIELD5": 4
                },
                "Special": "Sneak Attack +7d6, Reflex Ability"
            },
            14: {
                "Base Attack Bonus": [10, 5],
                "Saving": {
                    "Fortitude": 4,
                    "Reflex": 9,
                    "FIELD5": 4
                },
                "Special": null
            },
            15: {
                "Base Attack Bonus": [11, 6, 1],
                "Saving": {
                    "Fortitude": 5,
                    "Reflex": 9,
                    "FIELD5": 5
                },
                "Special": "Sneak Attack +8d6, Trap Sense +5"
            },
            16: {
                "Base Attack Bonus": [12, 7, 2],
                "Saving": {
                    "Fortitude": 5,
                    "Reflex": 10,
                    "FIELD5": 5
                },
                "Special": "Reflex Ability"
            },
            17: {
                "Base Attack Bonus": [12, 7, 2],
                "Saving": {
                    "Fortitude": 5,
                    "Reflex": 10,
                    "FIELD5": 5
                },
                "Special": "Sneak Attack +9d6"
            },
            18: {
                "Base Attack Bonus": [13, 8, 3],
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 11,
                    "FIELD5": 6
                },
                "Special": "Trap Sense +6"
            },
            19: {
                "Base Attack Bonus": [14, 9, 4],
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 11,
                    "FIELD5": 6
                },
                "Special": "Sneak Attack +10d6, Reflex Ability"
            },
            20: {
                "Base Attack Bonus": [15, 10, 5],
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 12,
                    "FIELD5": 6
                },
                "Special": null
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