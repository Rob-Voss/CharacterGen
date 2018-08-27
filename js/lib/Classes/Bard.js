/**
 * Bard
 * Alignment: Any nonlawful
 * Hit Die: d6
 * Class skills: Appraise (Int), Balance (Dex), Bluff (Cha), Climb (Str), Concentration (Con), Craft (Int),
 *  Decipher Script (Int), Diplomacy (Cha), Disguise (Cha), Escape Artist (Dex), Gather Information (Cha),
 *  Hide (Dex), Jump (Str), Knowledge (all skills, taken individually) (Int), Listen (Wis), Move Silently (Dex),
 *  Perform (Cha), Profession (Wis), Sense Motive (Wis), Sleight of Hand (Dex), Speak Language (None), Spellcraft (Int),
 *  Swim (Str), Tumble (Dex), Use Magic Device (Cha)
 * Skill Points at 1st Level: (6 + Int modifier) ×4
 * Skill Points at Each Additional Level: 6 + Int modifier

Level	Base Attack Bonus	Fort Save	Ref Save	Will Save	Special	Spells per Day 0	1st	2nd	3rd	4th	5th	6th	Spells Known 0	1st	2nd	3rd	4th	5th	6th
1st	+0	+0	+2	+2	Bardic music, bardic knowledge, countersong, fascinate, inspire courage +1	2	—	—	—	—	—	—	4	—	—	—	—	—	—
2nd	+1	+0	+3	+3		3	0	—	—	—	—	—	5	21	—	—	—	—	—
3rd	+2	+1	+3	+3	Inspire competence	3	1	—	—	—	—	—	6	3	—	—	—	—	—
4th	+3	+1	+4	+4		3	2	0	—	—	—	—	6	3	21	—	—	—	—
5th	+3	+1	+4	+4		3	3	1	—	—	—	—	6	4	3	—	—	—	—
6th	+4	+2	+5	+5	Suggestion	3	3	2	—	—	—	—	6	4	3	—	—	—	—
7th	+5	+2	+5	+5		3	3	2	0	—	—	—	6	4	4	21	—	—	—
8th	+6/+1	+2	+6	+6	Inspire courage +2	3	3	3	1	—	—	—	6	4	4	3	—	—	—
9th	+6/+1	+3	+6	+6	Inspire greatness	3	3	3	2	—	—	—	6	4	4	3	—	—	—
10th	+7/+2	+3	+7	+7		3	3	3	2	0	—	—	6	4	4	4	21	—	—
11th	+8/+3	+3	+7	+7		3	3	3	3	1	—	—	6	4	4	4	3	—	—
12th	+9/+4	+4	+8	+8	Song of freedom	3	3	3	3	2	—	—	6	4	4	4	3	—	—
13th	+9/+4	+4	+8	+8		3	3	3	3	2	0	—	6	4	4	4	4	21	—
14th	+10/+5	+4	+9	+9	Inspire courage +3	4	3	3	3	3	1	—	6	4	4	4	4	3	—
15th	+11/+6/+1	+5	+9	+9	Inspire heroics	4	4	3	3	3	2	—	6	4	4	4	4	3	—
16th	+12/+7/+2	+5	+10	+10		4	4	4	3	3	2	0	6	5	4	4	4	4	21
17th	+12/+7/+2	+5	+10	+10		4	4	4	4	3	3	1	6	5	5	4	4	4	3
18th	+13/+8/+3	+6	+11	+11	Mass suggestion	4	4	4	4	4	3	2	6	5	5	5	4	4	3
19th	+14/+9/+4	+6	+11	+11		4	4	4	4	4	4	3	6	5	5	5	5	4	4
20th	+15/+10/+5	+6	+12	+12	Inspire courage +4	4	4	4	4	4	4	4	6	5	5	5	5	5	4
1=Provided the bard has a high enough Charisma score to have a bonus spell of this level.

*/

class Bard {

    /**
     *
     */
    constructor() {
        this.alignment = ['Nonlawful'];
        this.hitDie = 'd6';
        this.skills = ['Appraise', 'Balance', 'Bluff', 'Climb', 'Concentration', 'Craft', 'Decipher Script', 'Diplomacy',
            'Disguise', 'Escape Artist', 'Gather Information',
            'Hide', 'Jump', 'Knowledge (all skills, taken individually)', 'Listen', 'Move Silently',
            'Perform', 'Profession', 'Sense Motive', 'Sleight of Hand', 'Speak Language', 'Spellcraft',
            'Swim', 'Tumble', 'Use Magic Device'
        ];
        this.classTable = {
            1: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 2, 2],
                'skillPoints': [6, 4],
                'specials': {
                    'bardic music': 0,
                    'bardic knowledge': 0,
                    'countersong': 0,
                    'fascinate': 0,
                    'inspire courage': 0
                },
                'spellsPerDay': {
                    0: 1,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0
                }
            },
            2: {
                'baseAttackBonus': [1, 0, 0, 0],
                'feats': 0,
                'saving': [0, 3, 3],
                'skillPoints': [6, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 3,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0
                }
            },
            3: {
                'baseAttackBonus': [2, 0, 0, 0],
                'feats': 0,
                'saving': [1, 3, 3],
                'skillPoints': [6, 0],
                'specials': {
                    'inspire confidence': 0
                },
                'spellsPerDay': {
                    0: 3,
                    1: 1,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0
                }
            },
            4: {
                'baseAttackBonus': [3, 0, 0, 0],
                'feats': 0,
                'saving': [1, 4, 4],
                'skillPoints': [6, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 3,
                    1: 2,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0
                }
            },
            5: {
                'baseAttackBonus': [3, 0, 0, 0],
                'feats': 0,
                'saving': [1, 4, 4],
                'skillPoints': [6, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 3,
                    1: 3,
                    2: 1,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0
                }
            },
            6: {
                'baseAttackBonus': [4, 0, 0, 0],
                'feats': 0,
                'saving': [2, 5, 5],
                'skillPoints': [6, 0],
                'specials': {
                    'suggestion': 0
                },
                'spellsPerDay': {
                    0: 3,
                    1: 3,
                    2: 2,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0
                }
            },
            7: {
                'baseAttackBonus': [5, 0, 0, 0],
                'feats': 0,
                'saving': [2, 5, 5],
                'skillPoints': [6, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 3,
                    1: 3,
                    2: 2,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0
                }
            },
            8: {
                'baseAttackBonus': [6, 1, 0, 0],
                'feats': 0,
                'saving': [2, 6, 6],
                'skillPoints': [6, 0],
                'specials': {
                    'inspire courage': 0
                },
                'spellsPerDay': {
                    0: 3,
                    1: 3,
                    2: 3,
                    3: 1,
                    4: 0,
                    5: 0,
                    6: 0
                }
            },
            9: {
                'baseAttackBonus': [6, 1, 0, 0],
                'feats': 0,
                'saving': [3, 6, 6],
                'skillPoints': [6, 0],
                'specials': {
                    'inspire greatness': 0
                },
                'spellsPerDay': {
                    0: 3,
                    1: 3,
                    2: 3,
                    3: 2,
                    4: 0,
                    5: 0,
                    6: 0
                }
            },
            10: {
                'baseAttackBonus': [7, 2, 0, 0],
                'feats': 0,
                'saving': [3, 7, 7],
                'skillPoints': [6, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 3,
                    1: 3,
                    2: 3,
                    3: 2,
                    4: 0,
                    5: 0,
                    6: 0
                }
            },
            11: {
                'baseAttackBonus': [8, 3, 0, 0],
                'feats': 0,
                'saving': [3, 7, 7],
                'skillPoints': [6, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 3,
                    1: 3,
                    2: 3,
                    3: 3,
                    4: 1,
                    5: 0,
                    6: 0
                }
            },
            12: {
                'baseAttackBonus': [9, 4, 0, 0],
                'feats': 0,
                'saving': [4, 8, 8],
                'skillPoints': [6, 0],
                'specials': {
                    'songof freedom': 0
                },
                'spellsPerDay': {
                    0: 3,
                    1: 3,
                    2: 3,
                    3: 3,
                    4: 2,
                    5: 0,
                    6: 0
                }
            },
            13: {
                'baseAttackBonus': [9, 4, 0, 0],
                'feats': 0,
                'saving': [4, 8, 8],
                'skillPoints': [6, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 3,
                    1: 3,
                    2: 3,
                    3: 3,
                    4: 2,
                    5: 0,
                    6: 0
                }
            },
            14: {
                'baseAttackBonus': [10, 5, 0, 0],
                'feats': 0,
                'saving': [4, 9, 9],
                'skillPoints': [6, 0],
                'specials': {
                    'inspire courage': 0
                },
                'spellsPerDay': {
                    0: 4,
                    1: 3,
                    2: 3,
                    3: 3,
                    4: 3,
                    5: 1,
                    6: 0
                }
            },
            15: {
                'baseAttackBonus': [11, 6, 1, 0],
                'feats': 0,
                'saving': [5, 9, 9],
                'skillPoints': [6, 0],
                'specials': {
                    'inspire heroics': 0
                },
                'spellsPerDay': {
                    0: 4,
                    1: 4,
                    2: 3,
                    3: 3,
                    4: 3,
                    5: 1,
                    6: 0
                }
            },
            16: {
                'baseAttackBonus': [12, 7, 2, 0],
                'feats': 0,
                'saving': [5, 10, 10],
                'skillPoints': [6, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 3,
                    4: 3,
                    5: 2,
                    6: 0
                }
            },
            17: {
                'baseAttackBonus': [12, 7, 2, 0],
                'feats': 0,
                'saving': [5, 10, 10],
                'skillPoints': [6, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 3,
                    5: 3,
                    6: 1
                }
            },
            18: {
                'baseAttackBonus': [13, 8, 3, 0],
                'feats': 0,
                'saving': [6, 11, 11],
                'skillPoints': [6, 0],
                'specials': {
                    'mass suggestion': 0
                },
                'spellsPerDay': {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 4,
                    5: 3,
                    6: 2
                }
            },
            19: {
                'baseAttackBonus': [14, 9, 4, 0],
                'feats': 0,
                'saving': [6, 11, 11],
                'skillPoints': [6, 0],
                'specials': {
                    '': 0
                },
                'spellsPerDay': {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 4,
                    5: 4,
                    6: 3
                }
            },
            20: {
                'baseAttackBonus': [15, 10, 5, 0],
                'feats': 0,
                'saving': [6, 12, 12],
                'skillPoints': [6, 0],
                'specials': {
                    'inspire courage': 0
                },
                'spellsPerDay': {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 4,
                    5: 4,
                    6: 4
                }
            }
        };
    }
}