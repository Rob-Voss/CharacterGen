
class Barbarian extends Class {

    /**
     *
     */
    constructor() {
        super('Barbarian');

        this.alignment = ['Nonlawful'];
        this.hitDie = 12;
        this.skills = [
            'Climb', 'Craft', 'Handle Animal', 'Intimidate', 'Jump', 'Listen', 'Ride', 'Survival', 'Swim'
        ];
        this.skillPoints = {
            0: [4, 4],
            1: [4, 0]
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
                    "Fortitude": 2,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": "Fast Movement, Illiteracy, Rage 1/day"
            },
            2: {
                "Saving": {
                    "Fortitude": 3,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": "Uncanny Dodge"
            },
            3: {
                "Saving": {
                    "Fortitude": 3,
                    "Reflex": 1,
                    "Will": 1
                },
                "Special": "Trap Sense +1"
            },
            4: {
                "Saving": {
                    "Fortitude": 4,
                    "Reflex": 1,
                    "Will": 1
                },
                "Special": "Rage 2/day"
            },
            5: {
                "Saving": {
                    "Fortitude": 4,
                    "Reflex": 1,
                    "Will": 1
                },
                "Special": "Improved Uncanny Dodge"
            },
            6: {
                "Saving": {
                    "Fortitude": 5,
                    "Reflex": 2,
                    "Will": 2
                },
                "Special": "Trap Sense +2"
            },
            7: {
                "Saving": {
                    "Fortitude": 5,
                    "Reflex": 2,
                    "Will": 2
                },
                "Special": "Damage Reduction 1/—"
            },
            8: {
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 2,
                    "Will": 2
                },
                "Special": "Rage 3/day"
            },
            9: {
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 3,
                    "Will": 3
                },
                "Special": "Trap Sense +3"
            },
            10: {
                "Saving": {
                    "Fortitude": 7,
                    "Reflex": 3,
                    "Will": 3
                },
                "Special": "Damage Reduction 2/—"
            },
            11: {
                "Saving": {
                    "Fortitude": 7,
                    "Reflex": 3,
                    "Will": 3
                },
                "Special": "Greater Rage"
            },
            12: {
                "Saving": {
                    "Fortitude": 8,
                    "Reflex": 4,
                    "Will": 4
                },
                "Special": "Rage 4/day, Trap Sense +4"
            },
            13: {
                "Saving": {
                    "Fortitude": 8,
                    "Reflex": 4,
                    "Will": 4
                },
                "Special": "Damage Reduction 3/—"
            },
            14: {
                "Saving": {
                    "Fortitude": 9,
                    "Reflex": 4,
                    "Will": 4
                },
                "Special": "Indomitable Will"
            },
            15: {
                "Saving": {
                    "Fortitude": 9,
                    "Reflex": 5,
                    "Will": 5
                },
                "Special": "Trap Sense +5"
            },
            16: {
                "Saving": {
                    "Fortitude": 10,
                    "Reflex": 5,
                    "Will": 5
                },
                "Special": "Damage Reduction 4/—, Rage 5/day"
            },
            17: {
                "Saving": {
                    "Fortitude": 10,
                    "Reflex": 5,
                    "Will": 5
                },
                "Special": "Tireless Rage"
            },
            18: {
                "Saving": {
                    "Fortitude": 11,
                    "Reflex": 6,
                    "Will": 6
                },
                "Special": "Trap Sense +6"
            },
            19: {
                "Saving": {
                    "Fortitude": 11,
                    "Reflex": 6,
                    "Will": 6
                },
                "Special": "Damage Reduction 5/—"
            },
            20: {
                "Saving": {
                    "Fortitude": 12,
                    "Reflex": 6,
                    "Will": 6
                },
                "Special": "Mighty Rage, Rage 6/day"
            }
        };
    }

}