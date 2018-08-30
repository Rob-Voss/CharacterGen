
class Monk extends Class {

    /**
     *
     */
    constructor() {
        super('Monk');

        this.alignment = ['lawful'];
        this.hitDie = 8;
        this.skills = [
            'Balance', 'Climb', 'Concentration', 'Craft', 'Diplomacy', 'Escape Artist',
            'Hide', 'Jump', 'Knowledge (arcana)', 'Knowledge (religion)', 'Listen', 'Move Silently',
            'Perform', 'Profession', 'Sense Motive', 'Spot', 'Swim', 'Tumble'
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
                "Base Attack Bonus": 0,
                "Saving": {
                    "Fortitude": 2,
                    "Reflex": 2,
                    "Will": 2
                },
                "Special": "Bonus Feat, Flurry of Blows, Unarmed Strike",
                "Flurry of Blows Attack Bonus": "–2/–2",
                "Unarmed Damage": "1d6",
                "AC Bonus": 0,
                "Unarmored Speed Bonus": "+0 ft."
            },
            "2nd": {
                "Base Attack Bonus": 1,
                "Saving": {
                    "Fortitude": 3,
                    "Reflex": 3,
                    "Will": 3
                },
                "Special": "Bonus Feat, Evasion",
                "Flurry of Blows Attack Bonus": "–1/–1",
                "Unarmed Damage": "1d6",
                "AC Bonus": 0,
                "Unarmored Speed Bonus": "+0 ft."
            },
            3: {
                "Base Attack Bonus": 2,
                "Saving": {
                    "Fortitude": 3,
                    "Reflex": 3,
                    "Will": 3
                },
                "Special": "Still Mind",
                "Flurry of Blows Attack Bonus": "+0/+0",
                "Unarmed Damage": "1d6",
                "AC Bonus": 0,
                "Unarmored Speed Bonus": "+10 ft."
            },
            4: {
                "Base Attack Bonus": 3,
                "Saving": {
                    "Fortitude": 4,
                    "Reflex": 4,
                    "Will": 4
                },
                "Special": "Ki Strike (Magic), Slow Fall 20 ft.",
                "Flurry of Blows Attack Bonus": "+1/+1",
                "Unarmed Damage": "1d8",
                "AC Bonus": 0,
                "Unarmored Speed Bonus": "+10 ft."
            },
            5: {
                "Base Attack Bonus": 3,
                "Saving": {
                    "Fortitude": 4,
                    "Reflex": 4,
                    "Will": 4
                },
                "Special": "Purity of Body",
                "Flurry of Blows Attack Bonus": "+2/+2",
                "Unarmed Damage": "1d8",
                "AC Bonus": 1,
                "Unarmored Speed Bonus": "+10 ft."
            },
            6: {
                "Base Attack Bonus": 4,
                "Saving": {
                    "Fortitude": 5,
                    "Reflex": 5,
                    "Will": 5
                },
                "Special": "Bonus Feat, Slow Fall 30 ft.",
                "Flurry of Blows Attack Bonus": "+3/+3",
                "Unarmed Damage": "1d8",
                "AC Bonus": 1,
                "Unarmored Speed Bonus": "+20 ft."
            },
            7: {
                "Base Attack Bonus": 5,
                "Saving": {
                    "Fortitude": 5,
                    "Reflex": 5,
                    "Will": 5
                },
                "Special": "Wholeness of Body",
                "Flurry of Blows Attack Bonus": "+4/+4",
                "Unarmed Damage": "1d8",
                "AC Bonus": 1,
                "Unarmored Speed Bonus": "+20 ft."
            },
            8: {
                "Base Attack Bonus": "+6/+1",
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 6,
                    "Will": 6
                },
                "Special": "Slow Fall 40 ft.",
                "Flurry of Blows Attack Bonus": "+5/+5/+0",
                "Unarmed Damage": "1d10",
                "AC Bonus": 1,
                "Unarmored Speed Bonus": "+20 ft."
            },
            9: {
                "Base Attack Bonus": "+6/+1",
                "Saving": {
                    "Fortitude": 6,
                    "Reflex": 6,
                    "Will": 6
                },
                "Special": "Improved Evasion",
                "Flurry of Blows Attack Bonus": "+6/+6/+1",
                "Unarmed Damage": "1d10",
                "AC Bonus": 1,
                "Unarmored Speed Bonus": "+30 ft."
            },
            10: {
                "Base Attack Bonus": "+7/+2",
                "Saving": {
                    "Fortitude": 7,
                    "Reflex": 7,
                    "Will": 7
                },
                "Special": "Ki Strike (Lawful), Slow Fall 50 ft.",
                "Flurry of Blows Attack Bonus": "+7/+7/+2",
                "Unarmed Damage": "1d10",
                "AC Bonus": 2,
                "Unarmored Speed Bonus": "+30 ft."
            },
            11: {
                "Base Attack Bonus": "+8/+3",
                "Saving": {
                    "Fortitude": 7,
                    "Reflex": 7,
                    "Will": 7
                },
                "Special": "Diamond Body, Greater Flurry",
                "Flurry of Blows Attack Bonus": "+8/+8/+8/+3",
                "Unarmed Damage": "1d10",
                "AC Bonus": 2,
                "Unarmored Speed Bonus": "+30 ft."
            },
            12: {
                "Base Attack Bonus": "+9/+4",
                "Saving": {
                    "Fortitude": 8,
                    "Reflex": 8,
                    "Will": 8
                },
                "Special": "Abundant Step, Slow Fall 60 ft.",
                "Flurry of Blows Attack Bonus": "+9/+9/+9/+4",
                "Unarmed Damage": "2d6",
                "AC Bonus": 2,
                "Unarmored Speed Bonus": "+40 ft."
            },
            13: {
                "Base Attack Bonus": "+9/+4",
                "Saving": {
                    "Fortitude": 8,
                    "Reflex": 8,
                    "Will": 8
                },
                "Special": "Diamond Soul",
                "Flurry of Blows Attack Bonus": "+9/+9/+9/+4",
                "Unarmed Damage": "2d6",
                "AC Bonus": 2,
                "Unarmored Speed Bonus": "+40 ft."
            },
            14: {
                "Base Attack Bonus": "+10/+5",
                "Saving": {
                    "Fortitude": 9,
                    "Reflex": 9,
                    "Will": 9
                },
                "Special": "Slow Fall 70 ft.",
                "Flurry of Blows Attack Bonus": "+10/+10/+10/+5",
                "Unarmed Damage": "2d6",
                "AC Bonus": 2,
                "Unarmored Speed Bonus": "+40 ft."
            },
            15: {
                "Base Attack Bonus": "+11/+6/+1",
                "Saving": {
                    "Fortitude": 9,
                    "Reflex": 9,
                    "Will": 9
                },
                "Special": "Quivering Palm",
                "Flurry of Blows Attack Bonus": "+11/+11/+11/+6/+1",
                "Unarmed Damage": "2d6",
                "AC Bonus": 3,
                "Unarmored Speed Bonus": "+50 ft."
            },
            16: {
                "Base Attack Bonus": "+12/+7/+2",
                "Saving": {
                    "Fortitude": 10,
                    "Reflex": 10,
                    "Will": 10
                },
                "Special": "Ki Strike (Adamantine), Slow Fall 80 ft.",
                "Flurry of Blows Attack Bonus": "+12/+12/+12/+7/+2",
                "Unarmed Damage": "2d8",
                "AC Bonus": 3,
                "Unarmored Speed Bonus": "+50 ft."
            },
            17: {
                "Base Attack Bonus": "+12/+7/+2",
                "Saving": {
                    "Fortitude": 10,
                    "Reflex": 10,
                    "Will": 10
                },
                "Special": "Timeless Body, Tongue of the Sun and Moon",
                "Flurry of Blows Attack Bonus": "+12/+12/+12/+7/+2",
                "Unarmed Damage": "2d8",
                "AC Bonus": 3,
                "Unarmored Speed Bonus": "+50 ft."
            },
            18: {
                "Base Attack Bonus": "+13/+8/+3",
                "Saving": {
                    "Fortitude": 11,
                    "Reflex": 11,
                    "Will": 11
                },
                "Special": "Slow Fall 90 ft.",
                "Flurry of Blows Attack Bonus": "+13/+13/+13/+8/+3",
                "Unarmed Damage": "2d8",
                "AC Bonus": 3,
                "Unarmored Speed Bonus": "+60 ft."
            },
            19: {
                "Base Attack Bonus": "+14/+9/+4",
                "Saving": {
                    "Fortitude": 11,
                    "Reflex": 11,
                    "Will": 11
                },
                "Special": "Empty Body",
                "Flurry of Blows Attack Bonus": "+14/+14/+14/+9/+4",
                "Unarmed Damage": "2d8",
                "AC Bonus": 3,
                "Unarmored Speed Bonus": "+60 ft."
            },
            20: {
                "Base Attack Bonus": "+15/+10/+5",
                "Saving": {
                    "Fortitude": 12,
                    "Reflex": 12,
                    "Will": 12
                },
                "Special": "Perfect Self, Slow Fall Any Distance",
                "Flurry of Blows Attack Bonus": "+15/+15/+15/+10/+5",
                "Unarmed Damage": "2d10",
                "AC Bonus": 4,
                "Unarmored Speed Bonus": "+60 ft."
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