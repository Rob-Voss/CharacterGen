/**
 * Ranger
 * Alignment: Any
 * Hit Die: d8
 * Class Skills: Climb (Str), Concentration (Con), Craft (Int), Handle Animal (Cha), Heal (Wis), Hide (Dex), Jump (Str),
 *  Knowledge (dungeoneering) (Int), Knowledge (geography) (Int), Knowledge (nature) (Int), Listen (Wis), Move Silently (Dex),
 *  Profession (Wis), Ride (Dex), Search (Int), Spot (Wis), Survival (Wis), Swim (Str), Use Rope (Dex)
 *  Skill Points at 1st Level: (6 + Int modifier) ×4
 *  Skill Points at Each Additional Level: 6 + Int modifier

Level	Base Attack Bonus	Fort Save	Ref Save	Will Save	Special	Spells per Day 1st	2nd	3rd	4th
1st	+1	+2	+2	+0	1st favored enemy, Track, wild empathy	—	—	—	—
2nd	+2	+3	+3	+0	Combat style	—	—	—	—
3rd	+3	+3	+3	+1	Endurance	—	—	—	—
4th	+4	+4	+4	+1	Animal companion	0	—	—	—
5th	+5	+4	+4	+1	2nd favored enemy	0	—	—	—
6th	+6/+1	+5	+5	+2	Improved combat style	1	—	—	—
7th	+7/+2	+5	+5	+2	Woodland stride	1	—	—	—
8th	+8/+3	+6	+6	+2	Swift tracker	1	0	—	—
9th	+9/+4	+6	+6	+3	Evasion	1	0	—	—
10th	+10/+5	+7	+7	+3	3rd favored enemy	1	1	—	—
11th	+11/+6/+1	+7	+7	+3	Combat style mastery	1	1	0	—
12th	+12/+7/+2	+8	+8	+4		1	1	1	—
13th	+13/+8/+3	+8	+8	+4	Camouflage	1	1	1	—
14th	+14/+9/+4	+9	+9	+4		2	1	1	0
15th	+15/+10/+5	+9	+9	+5	4th favored enemy	2	1	1	1
16th	+16/+11/+6/+1	+10	+10	+5		2	2	1	1
17th	+17/+12/+7/+2	+10	+10	+5	Hide in plain sight	2	2	2	1
18th	+18/+13/+8/+3	+11	+11	+6		3	2	2	1
19th	+19/+14/+9/+4	+11	+11	+6		3	3	3	2
20th	+20/+15/+10/+5	+12	+12	+6	5th favored enemy	3	3	3	3*/

class Ranger {

    /**
     *
     */
    constructor() {
        this.alignment = ['Any'];
        this.hitDie = 'd8';
        this.skills = [
            'Climb', 'Concentration', 'Craft', 'Handle Animal', 'Heal', 'Hide', 'Jump',
            'Knowledge (dungeoneering)', 'Knowledge (geography)', 'Knowledge (nature)', 'Listen', 'Move Silently',
            'Profession', 'Ride', 'Search', 'Spot', 'Survival', 'Swim', 'Use Rope'
        ];
        this.classTable = {
            1: {
                'baseAttackBonus': [1, 0, 0, 0],
                'feats': 0,
                'saving': [2, 2, 0],
                'skillPoints': [4, 4],
                'specials': {
                    '': 1,
                },
                'spellsPerDay': {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0
                }
            },
            2: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0
                }
            },
            3: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0
                }
            },
            4: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0
                }
            },
            5: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0
                }
            },
            6: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0
                }
            },
            7: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0
                }
            },
            8: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0
                }
            },
            9: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0
                }
            },
            10: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0
                }
            },
            11: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0
                }
            },
            12: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0
                }
            },
            13: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0
                }
            },
            14: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0
                }
            },
            15: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0
                }
            },
            16: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0
                }
            },
            17: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0
                }
            },
            18: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0
                }
            },
            19: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0
                }
            },
            20: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0
                }
            }
        };

    }
}