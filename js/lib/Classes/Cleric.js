/**
 * Cleric
 * Alignment: A cleric’s alignment must be within one step of his deity’s (that is, it may be one step away on either the
 *  lawful-chaotic axis or the good-evil axis, but not both). A cleric may not be neutral unless his deity’s alignment is
 *  also neutral.
 * Hit Die: d8
 * Class skills:  Concentration (Con), Craft (Int), Diplomacy (Cha), Heal (Wis), Knowledge (arcana) (Int),
 *  Knowledge (history) (Int), Knowledge (religion) (Int), Knowledge (the planes) (Int), Profession (Wis),
 *  Spellcraft (Int)
 * Skill Points at 1st Level: (2 + Int modifier) ×4
 * Skill Points at Each Additional Level: 2 + Int modifier

 1=In addition to the stated number of spells per day for 1st- through 9th-level spells, a cleric gets a domain spell
 for each spell level, starting at 1st.
 The "+1" in the entries on this table represents that spell. Domain spells are in addition to any bonus spells the
 cleric may receive for having a high Wisdom score.
Level	Base Attack Bonus	Fort Save	Ref Save	Will Save	Special	Spells per Day 0	1st	2nd	3rd	4th	5th	6th	7th	8th	9th
1st	+0	+2	+0	+2	Turn or rebuke undead	3	1+1	—	—	—	—	—	—	—	—
2nd	+1	+3	+0	+3		4	2+1	—	—	—	—	—	—	—	—
3rd	+2	+3	+1	+3		4	2+1	1+1	—	—	—	—	—	—	—
4th	+3	+4	+1	+4		5	3+1	2+1	—	—	—	—	—	—	—
5th	+3	+4	+1	+4		5	3+1	2+1	1+1	—	—	—	—	—	—
6th	+4	+5	+2	+5		5	3+1	3+1	2+1	—	—	—	—	—	—
7th	+5	+5	+2	+5		6	4+1	3+1	2+1	1+1	—	—	—	—	—
8th	+6/+1	+6	+2	+6		6	4+1	3+1	3+1	2+1	—	—	—	—	—
9th	+6/+1	+6	+3	+6		6	4+1	4+1	3+1	2+1	1+1	—	—	—	—
10th	+7/+2	+7	+3	+7		6	4+1	4+1	3+1	3+1	2+1	—	—	—	—
11th	+8/+3	+7	+3	+7		6	5+1	4+1	4+1	3+1	2+1	1+1	—	—	—
12th	+9/+4	+8	+4	+8		6	5+1	4+1	4+1	3+1	3+1	2+1	—	—	—
13th	+9/+4	+8	+4	+8		6	5+1	5+1	4+1	4+1	3+1	2+1	1+1	—	—
14th	+10/+5	+9	+4	+9		6	5+1	5+1	4+1	4+1	3+1	3+1	2+1	—	—
15th	+11/+6/+1	+9	+5	+9		6	5+1	5+1	5+1	4+1	4+1	3+1	2+1	1+1	—
16th	+12/+7/+2	+10	+5	+10		6	5+1	5+1	5+1	4+1	4+1	3+1	3+1	2+1	—
17th	+12/+7/+2	+10	+5	+10		6	5+1	5+1	5+1	5+1	4+1	4+1	3+1	2+1	1+1
18th	+13/+8/+3	+11	+6	+11		6	5+1	5+1	5+1	5+1	4+1	4+1	3+1	3+1	2+1
19th	+14/+9/+4	+11	+6	+11		6	5+1	5+1	5+1	5+1	5+1	4+1	4+1	3+1	3+1
20th	+15/+10/+5	+12	+6	+12		6	5+1	5+1	5+1	5+1	5+1	4+1	4+1	4+1	4+1
*/

class Cleric {

    /**
     *
     */
    constructor() {
        this.alignment = [''];
        this.hitDie = 'd8';
        this.skills = ['Concentration', 'Craft', 'Diplomacy', 'Heal', 'Knowledge (arcana)',
            'Knowledge (history)', 'Knowledge (religion)', 'Knowledge (the planes)', 'Profession',
            'Spellcraft'
        ];
        this.classTable = {
            1: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [2, 0, 2],
                'skillPoints': [2, 4],
                'specials': {
                    'Turn or rebuke undead': 0,
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
                'saving': [2, 0, 2],
                'skillPoints': [2, 0],
                'specials': {
                    '': 0
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
                'skillPoints': [2, 0],
                'specials': {
                    '': 0
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
                'skillPoints': [2, 0],
                'specials': {
                    '': 0
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
                'skillPoints': [2, 0],
                'specials': {
                    '': 0
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
                'skillPoints': [2, 0],
                'specials': {
                    '': 0
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
                'skillPoints': [2, 0],
                'specials': {
                    '': 0
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
                'skillPoints': [2, 0],
                'specials': {
                    '': 0
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
                'skillPoints': [2, 0],
                'specials': {
                    '': 0
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
                'skillPoints': [2, 0],
                'specials': {
                    '': 0
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
                'skillPoints': [2, 0],
                'specials': {
                    '': 0
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
                'skillPoints': [2, 0],
                'specials': {
                    '': 0
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
                'skillPoints': [2, 0],
                'specials': {
                    '': 0
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
                'skillPoints': [2, 0],
                'specials': {
                    '': 0
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
                'saving': [9, 5, 9],
                'skillPoints': [2, 0],
                'specials': {
                    '': 0
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
            16: {
                'baseAttackBonus': [12, 7, 2, 0],
                'feats': 0,
                'saving': [10, 5, 10],
                'skillPoints': [2, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 4,
                    5: 4,
                    6: 3,
                    7: 3,
                    8: 0,
                    9: 0
                }
            },
            17: {
                'baseAttackBonus': [12, 7, 2, 0],
                'feats': 0,
                'saving': [10, 5, 10],
                'skillPoints': [2, 0],
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
                'skillPoints': [2, 0],
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
                    8: 3,
                    9: 2
                }
            },
            19: {
                'baseAttackBonus': [14, 9, 4, 0],
                'feats': 0,
                'saving': [11, 6, 11],
                'skillPoints': [2, 0],
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
                'skillPoints': [2, 0],
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
                    8: 4,
                    9: 4
                }
            }
        };

    }
}