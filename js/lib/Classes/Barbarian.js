
class Barbarian extends Class {

    /**
     *
     */
    constructor(userClass) {
        super(userClass);

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
            1: {
                "Base Attack Bonus": [1, 0, 0, 0],
                "Saving": {
                    "Fortitude": 2,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": "Fast Movement, Illiteracy, Rage 1/day"
            },
            2: {
                "Base Attack Bonus": [2, 0, 0, 0],
                "Saving": {
                    "Fortitude": 3,
                    "Reflex": 0,
                    "Will": 0
                },
                "Special": "Uncanny Dodge"
            },
            3: {
                "Base Attack Bonus": [3, 0, 0, 0],
                "Saving": {
                    "Fortitude": 3,
                    "Reflex": 1,
                    "Will": 1
                },
                "Special": "Trap Sense +1"
            },
            4: {
                "Base Attack Bonus": [4, 0, 0, 0],
                "Saving": {
                    "Fortitude": 4,
                    "Reflex": 1,
                    "Will": 1
                },
                "Special": "Rage 2/day"
            },
            5: {
                "Base Attack Bonus": [5, 0, 0, 0],
                "Saving": {
                    "Fortitude": 4,
                    "Reflex": 1,
                    "Will": 1
                },
                "Special": "Improved Uncanny Dodge"
            },
            6: {
                "Base Attack Bonus": [6, 1, 0, 0],
                "Saving": {
                    "Fortitude": 5,
                    "Reflex": 2,
                    "Will": 2
                },
                "Special": "Trap Sense +2"
            },
            7: {
                "Base Attack Bonus": [7, 2, 0, 0],
                "Saving": {
                    "Fortitude": 5,
                    "Reflex": 2,
                    "Will": 2
                },
                "Special": "Damage Reduction 1/—"
            },
            8: {
                "Base Attack Bonus": [8, 3, 0, 0],
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 2,
                    "Will": 2
                },
                "Special": "Rage 3/day"
            },
            9: {
                "Base Attack Bonus": [9, 4, 0, 0],
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 3,
                    "Will": 3
                },
                "Special": "Trap Sense +3"
            },
            10: {
                "Base Attack Bonus": [10, 5, 0, 0],
                "Saving": {
                    "Fortitude": 7,
                    "Reflex": 3,
                    "Will": 3
                },
                "Special": "Damage Reduction 2/—"
            },
            11: {
                "Base Attack Bonus": [11, 6, 1, 0],
                "Saving": {
                    "Fortitude": 7,
                    "Reflex": 3,
                    "Will": 3
                },
                "Special": "Greater Rage"
            },
            12: {
                "Base Attack Bonus": [12, 7, 2, 0],
                "Saving": {
                    "Fortitude": 8,
                    "Reflex": 4,
                    "Will": 4
                },
                "Special": "Rage 4/day, Trap Sense +4"
            },
            13: {
                "Base Attack Bonus": [13, 8, 3, 0],
                "Saving": {
                    "Fortitude": 8,
                    "Reflex": 4,
                    "Will": 4
                },
                "Special": "Damage Reduction 3/—"
            },
            14: {
                "Base Attack Bonus": [14, 9, 4, 0],
                "Saving": {
                    "Fortitude": 9,
                    "Reflex": 4,
                    "Will": 4
                },
                "Special": "Indomitable Will"
            },
            15: {
                "Base Attack Bonus": [15, 10, 5, 0],
                "Saving": {
                    "Fortitude": 9,
                    "Reflex": 5,
                    "Will": 5
                },
                "Special": "Trap Sense +5"
            },
            16: {
                "Base Attack Bonus": [16, 11, 6, 1],
                "Saving": {
                    "Fortitude": 10,
                    "Reflex": 5,
                    "Will": 5
                },
                "Special": "Damage Reduction 4/—, Rage 5/day"
            },
            17: {
                "Base Attack Bonus": [17, 12, 7, 2],
                "Saving": {
                    "Fortitude": 10,
                    "Reflex": 5,
                    "Will": 5
                },
                "Special": "Tireless Rage"
            },
            18: {
                "Base Attack Bonus": [18, 13, 8, 3],
                "Saving": {
                    "Fortitude": 11,
                    "Reflex": 6,
                    "Will": 6
                },
                "Special": "Trap Sense +6"
            },
            19: {
                "Base Attack Bonus": [19, 14, 9, 4],
                "Saving": {
                    "Fortitude": 11,
                    "Reflex": 6,
                    "Will": 6
                },
                "Special": "Damage Reduction 5/—"
            },
            20: {
                "Base Attack Bonus": [20, 15, 10, 5],
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