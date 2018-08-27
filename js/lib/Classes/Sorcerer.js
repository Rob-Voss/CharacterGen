/**
 * Sorcerer
 * Alignment: Any
 * Hit Die: d4
 * Class Skills: Bluff (Cha), Concentration (Con), Craft (Int), Knowledge (arcana) (Int), Profession (Wis), Spellcraft (Int)
 * Skill Points at 1st Level: (2 + Int modifier) × 4
 * Skill Points at Each Additional Level: 2 + Int modifier

Level	Base Attack Bonus	Fort Save	Ref Save	Will Save	Special	Spells per Day 0	1st	2nd	3rd	4th	5th	6th	7th	8th	9th
1st	+0	+0	+0	+2	Summon familiar	5	3	—	—	—	—	—	—	—	—
2nd	+1	+0	+0	+3		6	4	—	—	—	—	—	—	—	—
3rd	+1	+1	+1	+3		6	5	—	—	—	—	—	—	—	—
4th	+2	+1	+1	+4		6	6	3	—	—	—	—	—	—	—
5th	+2	+1	+1	+4		6	6	4	—	—	—	—	—	—	—
6th	+3	+2	+2	+5		6	6	5	3	—	—	—	—	—	—
7th	+3	+2	+2	+5		6	6	6	4	—	—	—	—	—	—
8th	+4	+2	+2	+6		6	6	6	5	3	—	—	—	—	—
9th	+4	+3	+3	+6		6	6	6	6	4	—	—	—	—	—
10th	+5	+3	+3	+7		6	6	6	6	5	3	—	—	—	—
11th	+5	+3	+3	+7		6	6	6	6	6	4	—	—	—	—
12th	+6/+1	+4	+4	+8		6	6	6	6	6	5	3	—	—	—
13th	+6/+1	+4	+4	+8		6	6	6	6	6	6	4	—	—	—
14th	+7/+2	+4	+4	+9		6	6	6	6	6	6	5	3	—	—
15th	+7/+2	+5	+5	+9		6	6	6	6	6	6	6	4	—	—
16th	+8/+3	+5	+5	+10		6	6	6	6	6	6	6	5	3	—
17th	+8/+3	+5	+5	+10		6	6	6	6	6	6	6	6	4	—
18th	+9/+4	+6	+6	+11		6	6	6	6	6	6	6	6	5	3
19th	+9/+4	+6	+6	+11		6	6	6	6	6	6	6	6	6	4
20th	+10/+5	+6	+6	+12		6	6	6	6	6	6	6	6	6	6

Sorcerer Spells Known
Level	Spells Known 0	1st	2nd	3rd	4th	5th	6th	7th	8th	9th
1st	4	2	—	—	—	—	—	—	—	—
2nd	5	2	—	—	—	—	—	—	—	—
3rd	5	3	—	—	—	—	—	—	—	—
4th	6	3	1	—	—	—	—	—	—	—
5th	6	4	2	—	—	—	—	—	—	—
6th	7	4	2	1	—	—	—	—	—	—
7th	7	5	3	2	—	—	—	—	—	—
8th	8	5	3	2	1	—	—	—	—	—
9th	8	5	4	3	2	—	—	—	—	—
10th	9	5	4	3	2	1	—	—	—	—
11th	9	5	5	4	3	2	—	—	—	—
12th	9	5	5	4	3	2	1	—	—	—
13th	9	5	5	4	4	3	2	—	—	—
14th	9	5	5	4	4	3	2	1	—	—
15th	9	5	5	4	4	4	3	2	—	—
16th	9	5	5	4	4	4	3	2	1	—
17th	9	5	5	4	4	4	3	3	2	—
18th	9	5	5	4	4	4	3	3	2	1
19th	9	5	5	4	4	4	3	3	3	2
20th	9	5	5	4	4	4	3	3	3	3*/

class Sorcerer {

    /**
     *
     */
    constructor() {
        this.alignment = ['Any'];
        this.hitDie = 'd4';
        this.skills = [
            'Bluff', 'Concentration', 'Craft', 'Knowledge (arcana)', 'Profession', 'Spellcraft'
        ];
        this.classTable = {
            1: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 2],
                'skillPoints': [2, 4],
                'specials': {
                    '': 1,
                },
                'spellsPerDay': {
                    0: 0,
                    1: 0,
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
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
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
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
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
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
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
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
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
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
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
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
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
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
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
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
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
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
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
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
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
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
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
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
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
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
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
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
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
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
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
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
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
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
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
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
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
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0
                }
            }
        };

    }
}