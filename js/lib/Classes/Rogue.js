
class Rogue extends Class {

    /**
     *
     */
    constructor() {
        super('Rogue');

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
            0: {
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": ""
            },
            1: {
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 2,
                    "FIELD5": 0
                },
                "Special": "Sneak Attack +1d6, Trapfinding"
            },
            2: {
                "Saving": {
                    "Fortitude": 0,
                    "Reflex": 3,
                    "FIELD5": 0
                },
                "Special": "Evasion"
            },
            3: {
                "Saving": {
                    "Fortitude": 1,
                    "Reflex": 3,
                    "FIELD5": 1
                },
                "Special": "Sneak Attack +2d6, Trap Sense +1"
            },
            4: {
                "Saving": {
                    "Fortitude": 1,
                    "Reflex": 4,
                    "FIELD5": 1
                },
                "Special": "Uncanny Dodge"
            },
            5: {
                "Saving": {
                    "Fortitude": 1,
                    "Reflex": 4,
                    "FIELD5": 1
                },
                "Special": "Sneak Attack +3d6"
            },
            6: {
                "Saving": {
                    "Fortitude": 2,
                    "Reflex": 5,
                    "FIELD5": 2
                },
                "Special": "Trap Sense +2"
            },
            7: {
                "Saving": {
                    "Fortitude": 2,
                    "Reflex": 5,
                    "FIELD5": 2
                },
                "Special": "Sneak Attack +4d6"
            },
            8: {
                "Saving": {
                    "Fortitude": 2,
                    "Reflex": 6,
                    "FIELD5": 2
                },
                "Special": "Improved Uncanny Dodge"
            },
            9: {
                "Saving": {
                    "Fortitude": 3,
                    "Reflex": 6,
                    "FIELD5": 3
                },
                "Special": "Sneak Attack +5d6, Trap Sense +3"
            },
            10: {
                "Saving": {
                    "Fortitude": 3,
                    "Reflex": 7,
                    "FIELD5": 3
                },
                "Special": "Reflex Ability"
            },
            11: {
                "Saving": {
                    "Fortitude": 3,
                    "Reflex": 7,
                    "FIELD5": 3
                },
                "Special": "Sneak Attack +6d6"
            },
            12: {
                "Saving": {
                    "Fortitude": 4,
                    "Reflex": 8,
                    "FIELD5": 4
                },
                "Special": "Trap Sense +4"
            },
            13: {
                "Saving": {
                    "Fortitude": 4,
                    "Reflex": 8,
                    "FIELD5": 4
                },
                "Special": "Sneak Attack +7d6, Reflex Ability"
            },
            14: {
                "Saving": {
                    "Fortitude": 4,
                    "Reflex": 9,
                    "FIELD5": 4
                },
                "Special": null
            },
            15: {
                "Saving": {
                    "Fortitude": 5,
                    "Reflex": 9,
                    "FIELD5": 5
                },
                "Special": "Sneak Attack +8d6, Trap Sense +5"
            },
            16: {
                "Saving": {
                    "Fortitude": 5,
                    "Reflex": 10,
                    "FIELD5": 5
                },
                "Special": "Reflex Ability"
            },
            17: {
                "Saving": {
                    "Fortitude": 5,
                    "Reflex": 10,
                    "FIELD5": 5
                },
                "Special": "Sneak Attack +9d6"
            },
            18: {
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 11,
                    "FIELD5": 6
                },
                "Special": "Trap Sense +6"
            },
            19: {
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 11,
                    "FIELD5": 6
                },
                "Special": "Sneak Attack +10d6, Reflex Ability"
            },
            20: {
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 12,
                    "FIELD5": 6
                },
                "Special": null
            }
        };
    }

}