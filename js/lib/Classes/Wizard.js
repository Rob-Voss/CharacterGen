/**
 * Wizard
 * Alignment: Any
 * Hit Die: d4
 * Class Skills: Concentration (Con), Craft (Int), Decipher Script (Int), Knowledge (all skills, taken individually) (Int),
 *  Profession (Wis), Spellcraft (Int)
 * Skill Points at 1st Level: (2 + Int modifier) ×4
 * Skill Points at Each Additional Level: 2 + Int modifier

Level	Base Attack Bonus	Fort Save	Ref Save	Will Save	Special	Spells per Day 0	1st	2nd	3rd	4th	5th	6th	7th	8th	9th
1st	+0	+0	+0	+2	Summon familiar, Scribe Scroll	3	1	—	—	—	—	—	—	—	—
2nd	+1	+0	+0	+3		4	2	—	—	—	—	—	—	—	—
3rd	+1	+1	+1	+3		4	2	1	—	—	—	—	—	—	—
4th	+2	+1	+1	+4		4	3	2	—	—	—	—	—	—	—
5th	+2	+1	+1	+4	Bonus feat	4	3	2	1	—	—	—	—	—	—
6th	+3	+2	+2	+5		4	3	3	2	—	—	—	—	—	—
7th	+3	+2	+2	+5		4	4	3	2	1	—	—	—	—	—
8th	+4	+2	+2	+6		4	4	3	3	2	—	—	—	—	—
9th	+4	+3	+3	+6		4	4	4	3	2	1	—	—	—	—
10th	+5	+3	+3	+7	Bonus feat	4	4	4	3	3	2	—	—	—	—
11th	+5	+3	+3	+7		4	4	4	4	3	2	1	—	—	—
12th	+6/+1	+4	+4	+8		4	4	4	4	3	3	2	—	—	—
13th	+6/+1	+4	+4	+8		4	4	4	4	4	3	2	1	—	—
14th	+7/+2	+4	+4	+9		4	4	4	4	4	3	3	2	—	—
15th	+7/+2	+5	+5	+9	Bonus feat	4	4	4	4	4	4	3	2	1	—
16th	+8/+3	+5	+5	+10		4	4	4	4	4	4	3	3	2	—
17th	+8/+3	+5	+5	+10		4	4	4	4	4	4	4	3	2	1
18th	+9/+4	+6	+6	+11		4	4	4	4	4	4	4	3	3	2
19th	+9/+4	+6	+6	+11		4	4	4	4	4	4	4	4	3	3
20th	+10/+5	+6	+6	+12	Bonus feat	4	4	4	4	4	4	4	4	4	4
 */

class Wizard {

    /**
     *
     */
    constructor() {
        this.alignment = ['Any'];
        this.hitDie = 'd4';
        this.skills = [
            'Concentration', 'Craft', 'Decipher Script', 'Knowledge (all skills, taken individually)',
            'Profession', 'Spellcraft'
        ];
        this.classTable = {
            1: {
                'baseAttackBonus': [1, 0, 0, 0],
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