/**
 * Barbarian
 * Alignment: Any nonlawful
 * Hit Die: d12
 * Class Skills: Climb (Str), Craft (Int), Handle Animal (Cha), Intimidate (Cha), Jump (Str), Listen (Wis), Ride (Dex),
 *  Survival (Wis), Swim (Str)
 * Skill Points at 1st Level: (4 + Int modifier) ×4
 * Skill Points at Each Additional Level: 4 + Int modifier

Level	Base Attack Bonus	Fort Save	Ref Save	Will Save	Special	Spells per Day 0	1st	2nd	3rd	4th	5th	6th	7th	8th	9th
1st	+1	+2	+0	+0	Fast movement, illiteracy, rage 1/day
2nd	+2	+3	+0	+0	Uncanny dodge
3rd	+3	+3	+1	+1	Trap sense +1
4th	+4	+4	+1	+1	Rage 2/day
5th	+5	+4	+1	+1	Improved uncanny dodge
6th	+6/+1	+5	+2	+2	Trap sense +2
7th	+7/+2	+5	+2	+2	Damage reduction 1/—
8th	+8/+3	+6	+2	+2	Rage 3/day
9th	+9/+4	+6	+3	+3	Trap sense +3
10th	+10/+5	+7	+3	+3	Damage reduction 2/—
11th	+11/+6/+1	+7	+3	+3	Greater rage
12th	+12/+7/+2	+8	+4	+4	Rage 4/day, trap sense +4
13th	+13/+8/+3	+8	+4	+4	Damage reduction 3/—
14th	+14/+9/+4	+9	+4	+4	Indomitable will
15th	+15/+10/+5	+9	+5	+5	Trap sense +5
16th	+16/+11/+6/+1	+10	+5	+5	Damage reduction 4/—, rage 5/day
17th	+17/+12/+7/+2	+10	+5	+5	Tireless rage
18th	+18/+13/+8/+3	+11	+6	+6	Trap sense +6
19th	+19/+14/+9/+4	+11	+6	+6	Damage reduction 5/—
20th	+20/+15/+10/+5	+12	+6	+6	Mighty rage, rage 6/day

*/

class Barbarian {

    /**
     *
     */
    constructor() {
        this.alignment = ['Nonlawful'];
        this.hitDie = 'd12';
        this.skills = [
            'Climb', 'Craft', 'Handle Animal', 'Intimidate', 'Jump', 'Listen', 'Ride', 'Survival', 'Swim'
        ];
        this.classTable = {
            1: {
                'baseAttackBonus': [1, 0, 0, 0],
                'feats': 0,
                'saving': [2, 0, 0],
                'skillPoints': [4, 4],
                'specials': {
                    'fast movement': 0,
                    'illiteracy': 0,
                    'rage': 1
                }
            },
            2: {
                'baseAttackBonus': [2, 0, 0, 0],
                'feats': 0,
                'saving': [2, 0, 0],
                'skillPoints': [4, 0],
                'specials': {
                    'uncanny dodge': 0
                }
            },
            3: {
                'baseAttackBonus': [3, 0, 0, 0],
                'feats': 0,
                'saving': [3, 1, 1],
                'skillPoints': [4, 0],
                'specials': {
                    'trap sense': 0
                }
            },
            4: {
                'baseAttackBonus': [4, 0, 0, 0],
                'feats': 0,
                'saving': [4, 1, 1],
                'skillPoints': [4, 0],
                'specials': {
                    'rage': 2
                }
            },
            5: {
                'baseAttackBonus': [5, 0, 0, 0],
                'feats': 0,
                'saving': [4, 1, 1],
                'skillPoints': [4, 0],
                'specials': {
                    'improved uncanny dodge': 0
                }
            },
            6: {
                'baseAttackBonus': [6, 1, 0, 0],
                'feats': 0,
                'saving': [5, 2, 2],
                'skillPoints': [4, 0],
                'specials': {
                    'trap sense': 0
                }
            },
            7: {
                'baseAttackBonus': [7, 2, 0, 0],
                'feats': 0,
                'saving': [5, 2, 2],
                'skillPoints': [4, 0],
                'specials': {
                    'damage reduction': 0
                }
            },
            8: {
                'baseAttackBonus': [8, 3, 0, 0],
                'feats': 0,
                'saving': [6, 2, 2],
                'skillPoints': [4, 0],
                'specials': {
                    'rage': 3
                }
            },
            9: {
                'baseAttackBonus': [9, 4, 0, 0],
                'feats': 0,
                'saving': [6, 3, 3],
                'skillPoints': [4, 0],
                'specials': {
                    'trap sense': 0
                }
            },
            10: {
                'baseAttackBonus': [10, 5, 0, 0],
                'feats': 0,
                'saving': [7,3, 3],
                'skillPoints': [4, 0],
                'specials': {
                    'damage reduction': 0
                }
            },
            11: {
                'baseAttackBonus': [11, 6, 1, 0],
                'feats': 0,
                'saving': [7, 3, 3],
                'skillPoints': [4, 0],
                'specials': {
                    'greater rage': 0
                }
            },
            12: {
                'baseAttackBonus': [12,7, 2, 0],
                'feats': 0,
                'saving': [8, 4, 4],
                'skillPoints': [0, 0],
                'specials': {
                    'rage': 4,
                    'trap sense': 0
                }
            },
            13: {
                'baseAttackBonus': [13, 8, 3, 0],
                'feats': 0,
                'saving': [8, 4, 4],
                'skillPoints': [4, 0],
                'specials': {
                    'damage reduction': 0
                }
            },
            14: {
                'baseAttackBonus': [14, 9, 4, 0],
                'feats': 0,
                'saving': [9, 4, 4],
                'skillPoints': [4, 0],
                'specials': {
                    'indomitable will': 0
                }
            },
            15: {
                'baseAttackBonus': [15, 10, 5, 0],
                'feats': 0,
                'saving': [9, 5, 5],
                'skillPoints': [4, 0],
                'specials': {
                    'trap sense': 0
                }
            },
            16: {
                'baseAttackBonus': [16, 11, 6, 1],
                'feats': 0,
                'saving': [10, 5, 5],
                'skillPoints': [4, 0],
                'specials': {
                    'rage': 5,
                    'damage reduction': 0
                }
            },
            17: {
                'baseAttackBonus': [17, 12, 7, 2],
                'feats': 0,
                'saving': [10, 5, 5],
                'skillPoints': [4, 0],
                'specials': {
                    'tireless rage': 0
                }
            },
            18: {
                'baseAttackBonus': [18, 13, 8, 3],
                'feats': 0,
                'saving': [11, 6, 6],
                'skillPoints': [4, 0],
                'specials': {
                    'trap sense': 0
                }
            },
            19: {
                'baseAttackBonus': [19, 14, 9, 4],
                'feats': 0,
                'saving': [11, 6, 6],
                'skillPoints': [4, 0],
                'specials': {
                    'damage reduction': 0
                }
            },
            20: {
                'baseAttackBonus': [20, 15, 10, 5],
                'feats': 0,
                'saving': [12, 6, 6],
                'skillPoints': [4, 0],
                'specials': {
                    'rage': 6,
                    'mighty rage': 0
                }
            }
        };
    }
}