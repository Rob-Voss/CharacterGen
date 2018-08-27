/**
 * Druid
 * Alignment: Neutral good, lawful neutral, neutral, chaotic neutral, or neutral evil
 * Hit Die: d8
 * Class Skills: Concentration (Con), Craft (Int), Diplomacy (Cha), Handle Animal (Cha), Heal (Wis), Knowledge (nature) (Int),
 *  Listen (Wis), Profession (Wis), Ride (Dex), Spellcraft (Int), Spot (Wis), Survival (Wis), Swim (Str)
 *  Skill Points at 1st Level: (4 + Int modifier) ×4
 *  Skill Points at Each Additional Level: 4 + Int modifier

Level	Base Attack Bonus	Fort Save	Ref Save	Will Save	Special	Spells per Day	0	1st	2nd	3rd	4th	5th	6th	7th	8th	9th
1st	+0	+2	+0	+2	Animal companion, nature sense, wild empathy	3	1	—	—	—	—	—	—	—	—
2nd	+1	+3	+0	+3	Woodland stride	4	2	—	—	—	—	—	—	—	—
3rd	+2	+3	+1	+3	Trackless step	4	2	1	—	—	—	—	—	—	—
4th	+3	+4	+1	+4	Resist nature’s lure	5	3	2	—	—	—	—	—	—	—
5th	+3	+4	+1	+4	Wild shape (1/day)	5	3	2	1	—	—	—	—	—	—
6th	+4	+5	+2	+5	Wild shape (2/day)	5	3	3	2	—	—	—	—	—	—
7th	+5	+5	+2	+5	Wild shape (3/day)	6	4	3	2	1	—	—	—	—	—
8th	+6/+1	+6	+2	+6	Wild shape (Large)	6	4	3	3	2	—	—	—	—	—
9th	+6/+1	+6	+3	+6	Venom immunity	6	4	4	3	2	1	—	—	—	—
10th	+7/+2	+7	+3	+7	Wild shape (4/day)	6	4	4	3	3	2	—	—	—	—
11th	+8/+3	+7	+3	+7	Wild shape (Tiny)	6	5	4	4	3	2	1	—	—	—
12th	+9/+4	+8	+4	+8	Wild shape (plant)	6	5	4	4	3	3	2	—	—	—
13th	+9/+4	+8	+4	+8	A thousand faces	6	5	5	4	4	3	2	1	—	—
14th	+10/+5	+9	+4	+9	Wild shape (5/day)	6	5	5	4	4	3	3	2	—	—
15th	+11/+6/+1	+9	+5	+9	Timeless body, wild shape (Huge)	6	5	5	5	4	4	3	2	1	—
16th	+12/+7/+2	+10	+5	+10	Wild shape (elemental 1/day)	6	5	5	5	4	4	3	3	2	—
17th	+12/+7/+2	+10	+5	+10		6	5	5	5	5	4	4	3	2	1
18th	+13/+8/+3	+11	+6	+11	Wild shape (6/day, elemental 2/day)	6	5	5	5	5	4	4	3	3	2
19th	+14/+9/+4	+11	+6	+11		6	5	5	5	5	5	4	4	3	3
20th	+15/+10/+5	+12	+6	+12	Wild shape (elemental 3/day, Huge elemental)	6	5	5	5	5	5	4	4	4	4*/

class Druid {

    /**
     *
     */
    constructor() {
        this.alignment = ['Neutral good', 'lawful neutral', 'neutral', 'chaotic neutral', 'neutral evil'];
        this.hitDie = 'd8';
        this.skills = ['Concentration', 'Craft', 'Diplomacy', 'Handle Animal', 'Heal', 'Knowledge (nature)',
            'Listen', 'Profession', 'Ride', 'Spellcraft', 'Spot', 'Survival', 'Swim'
        ];
        this.classTable = {
            1: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [2, 0, 2],
                'skillPoints': [4, 4],
                'specials': {
                    'animal companion': 0,
                    'nature sense': 0,
                    'wild empathy': 0
                },
                'spellsPerDay': {
                    0: 3,
                    1: 1,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
                }
            },
            2: {
                'baseAttackBonus': [1, 0, 0, 0],
                'feats': 0,
                'saving': [3, 0, 3],
                'skillPoints': [4, 0],
                'specials': {
                    'woodland stride': 0
                },
                'spellsPerDay': {
                    0: 4,
                    1: 2,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
                }
            },
            3: {
                'baseAttackBonus': [2, 0, 0, 0],
                'feats': 0,
                'saving': [3, 1, 3],
                'skillPoints': [4, 0],
                'specials': {
                    'trackless step': 0
                },
                'spellsPerDay': {
                    0: 4,
                    1: 2,
                    2: 1,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
                }
            },
            4: {
                'baseAttackBonus': [3, 0, 0, 0],
                'feats': 0,
                'saving': [4, 1, 4],
                'skillPoints': [4, 0],
                'specials': {
                    'resist nature\'s lure': 0
                },
                'spellsPerDay': {
                    0: 5,
                    1: 3,
                    2: 2,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
                }
            },
            5: {
                'baseAttackBonus': [3, 0, 0, 0],
                'feats': 0,
                'saving': [4, 1, 4],
                'skillPoints': [4, 0],
                'specials': {
                    'wild shape': 1
                },
                'spellsPerDay': {
                    0: 5,
                    1: 3,
                    2: 2,
                    3: 1,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
                }
            },
            6: {
                'baseAttackBonus': [4, 0, 0, 0],
                'feats': 0,
                'saving': [5, 2, 5],
                'skillPoints': [4, 0],
                'specials': {
                    'wild shape': 2
                },
                'spellsPerDay': {
                    0: 5,
                    1: 3,
                    2: 3,
                    3: 2,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
                }
            },
            7: {
                'baseAttackBonus': [5, 0, 0, 0],
                'feats': 0,
                'saving': [5, 2, 5],
                'skillPoints': [4, 0],
                'specials': {
                    'wild shape': 3
                },
                'spellsPerDay': {
                    0: 6,
                    1: 4,
                    2: 3,
                    3: 2,
                    4: 1,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
                }
            },
            8: {
                'baseAttackBonus': [6, 1, 0, 0],
                'feats': 0,
                'saving': [6, 2, 6],
                'skillPoints': [4, 0],
                'specials': {
                    'wild shape (large)': 0
                },
                'spellsPerDay': {
                    0: 6,
                    1: 4,
                    2: 3,
                    3: 3,
                    4: 2,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
                }
            },
            9: {
                'baseAttackBonus': [6, 1, 0, 0],
                'feats': 0,
                'saving': [6, 3, 6],
                'skillPoints': [4, 0],
                'specials': {
                    'venom immunity': 0
                },
                'spellsPerDay': {
                    0: 6,
                    1: 4,
                    2: 4,
                    3: 3,
                    4: 2,
                    5: 1,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
                }
            },
            10: {
                'baseAttackBonus': [7, 2, 0, 0],
                'feats': 0,
                'saving': [7, 3, 7],
                'skillPoints': [4, 0],
                'specials': {
                    'wild shape': 4
                },
                'spellsPerDay': {
                    0: 6,
                    1: 4,
                    2: 4,
                    3: 3,
                    4: 3,
                    5: 2,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
                }
            },
            11: {
                'baseAttackBonus': [8, 3, 0, 0],
                'feats': 0,
                'saving': [7, 3, 7],
                'skillPoints': [4, 0],
                'specials': {
                    'wild shape (tiny)': 0
                },
                'spellsPerDay': {
                    0: 6,
                    1: 5,
                    2: 4,
                    3: 4,
                    4: 3,
                    5: 2,
                    6: 1,
                    7: 0,
                    8: 0,
                    9: 0
                }
            },
            12: {
                'baseAttackBonus': [9, 4, 0, 0],
                'feats': 0,
                'saving': [8, 4, 8],
                'skillPoints': [4, 0],
                'specials': {
                    'wild shape (plant)': 0
                },
                'spellsPerDay': {
                    0: 6,
                    1: 5,
                    2: 4,
                    3: 4,
                    4: 3,
                    5: 3,
                    6: 2,
                    7: 0,
                    8: 0,
                    9: 0
                }
            },
            13: {
                'baseAttackBonus': [9, 4, 0, 0],
                'feats': 0,
                'saving': [8, 4, 8],
                'skillPoints': [4, 0],
                'specials': {
                    'a thousand faces': 0
                },
                'spellsPerDay': {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 4,
                    4: 4,
                    5: 3,
                    6: 2,
                    7: 1,
                    8: 0,
                    9: 0
                }
            },
            14: {
                'baseAttackBonus': [10, 5, 0, 0],
                'feats': 0,
                'saving': [9, 4, 9],
                'skillPoints': [4, 0],
                'specials': {
                    'wild shape': 5
                },
                'spellsPerDay': {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 4,
                    4: 4,
                    5: 3,
                    6: 3,
                    7: 2,
                    8: 0,
                    9: 0
                }
            },
            15: {
                'baseAttackBonus': [11, 6, 1, 0],
                'feats': 0,
                'saving': [9, 5, 90],
                'skillPoints': [4, 0],
                'specials': {
                    'timeless body': 0,
                    'wild shape (huge)': 0
                },
                'spellsPerDay': {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 4,
                    5: 4,
                    6: 3,
                    7: 2,
                    8: 1,
                    9: 0
                }
            },
            16: {
                'baseAttackBonus': [12, 7, 2, 0],
                'feats': 0,
                'saving': [10, 5, 10],
                'skillPoints': [4, 0],
                'specials': {
                    'wild shape (elemental)': 1
                },
                'spellsPerDay': {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 5,
                    5: 4,
                    6: 4,
                    7: 3,
                    8: 3,
                    9: 2
                }
            },
            17: {
                'baseAttackBonus': [12, 7, 2, 0],
                'feats': 0,
                'saving': [10, 5, 10],
                'skillPoints': [4, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 5,
                    5: 4,
                    6: 4,
                    7: 3,
                    8: 2,
                    9: 1
                }
            },
            18: {
                'baseAttackBonus': [13, 8, 3, 0],
                'feats': 0,
                'saving': [11, 6, 11],
                'skillPoints': [4, 0],
                'specials': {
                    'wild shape': 6,
                    'wild shape (elemental)': 2
                },
                'spellsPerDay': {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 5,
                    5: 4,
                    6: 4,
                    7: 3,
                    8: 3,
                    9: 2
                }
            },
            19: {
                'baseAttackBonus': [14, 9, 4, 0],
                'feats': 0,
                'saving': [11, 6, 11],
                'skillPoints': [4, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 5,
                    5: 5,
                    6: 4,
                    7: 4,
                    8: 3,
                    9: 3
                }
            },
            20: {
                'baseAttackBonus': [15, 10, 5, 0],
                'feats': 0,
                'saving': [12, 6, 12],
                'skillPoints': [4, 0],
                'specials': {
                    'wild shape': 6,
                    'wild shape (elemental)': 3,
                    'wild shape (huge elemental)': 3
                },
                'spellsPerDay': {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 5,
                    5: 5,
                    6: 4,
                    7: 4,
                    8: 4,
                    9: 4
                }
            }
        };
    }
}