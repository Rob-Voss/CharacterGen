/**
 * Paladin
 * Alignment: Lawful good
 * Hit Die: d10
 * Class Skills: Concentration (Con), Craft (Int), Diplomacy (Cha), Handle Animal (Cha), Heal (Wis),
 *  Knowledge (nobility and royalty) (Int), Knowledge (religion) (Int), Profession (Wis), Ride (Dex),
 *  Sense Motive (Wis).
 * Skill Points at 1st Level: (2 + Int modifier) ×4
 * Skill Points at Each Additional Level: 2 + Int modifier

Level	Base Attack Bonus	Fort Save	Ref Save	Will Save	Special	Spells per Day	1st	2nd	3rd	4th
1st	+1	+2	+0	+0	Aura of good, detect evil, smite evil 1/day	—	—	—	—
2nd	+2	+3	+0	+0	Divine grace, lay on hands	—	—	—	—
3rd	+3	+3	+1	+1	Aura of courage, divine health	—	—	—	—
4th	+4	+4	+1	+1	Turn undead	0	—	—	—
5th	+5	+4	+1	+1	Smite evil 2/day, special mount	0	—	—	—
6th	+6/+1	+5	+2	+2	Remove disease 1/week	1	—	—	—
7th	+7/+2	+5	+2	+2		1	—	—	—
8th	+8/+3	+6	+2	+2		1	0	—	—
9th	+9/+4	+6	+3	+3	Remove disease 2/week	1	0	—	—
10th	+10/+5	+7	+3	+3	Smite evil 3/day	1	1	—	—
11th	+11/+6/+1	+7	+3	+3		1	1	0	—
12th	+12/+7/+2	+8	+4	+4	Remove disease 3/week	1	1	1	—
13th	+13/+8/+3	+8	+4	+4		1	1	1	—
14th	+14/+9/+4	+9	+4	+4		2	1	1	0
15th	+15/+10/+5	+9	+5	+5	Remove disease 4/week, smite evil 4/day	2	1	1	1
16th	+16/+11/+6/+1	+10	+5	+5		2	2	1	1
17th	+17/+12/+7/+2	+10	+5	+5		2	2	2	1
18th	+18/+13/+8/+3	+11	+6	+6	Remove disease 5/week	3	2	2	1
19th	+19/+14/+9/+4	+11	+6	+6		3	3	3	2
20th	+20/+15/+10/+5	+12	+6	+6	Smite evil 5/day	3	3	3	3*/

class Paladin {

    /**
     *
     */
    constructor() {
        this.alignment = ['Lawful good'];
        this.hitDie = 'd10';
        this.skills = [
            'Concentration', 'Craft', 'Diplomacy', 'Handle Animal', 'Heal',
            'Knowledge (nobility and royalty)', 'Knowledge (religion)', 'Profession', 'Ride'
        ];
        this.classTable = {
            1: {
                'baseAttackBonus': [1, 0, 0, 0],
                'feats': 0,
                'saving': [2, 0, 0],
                'skillPoints': [2, 4],
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