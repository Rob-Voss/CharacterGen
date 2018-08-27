/**
 * Fighter
 * Alignment: Any
 * Hit Die: d10
 * Class Skills: Climb (Str), Craft (Int), Handle Animal (Cha), Intimidate (Cha), Jump (Str), Ride (Dex), Swim (Str)
 * Skill Points at 1st Level: (2 + Int modifier) ×4
 * Skill Points at Each Additional Level: 2 + Int modifier

Level	Base Attack Bonus	Fort Save	Ref Save	Will Save	Special
1st	+1	+2	+0	+0	Bonus feat
2nd	+2	+3	+0	+0	Bonus feat
3rd	+3	+3	+1	+1	
4th	+4	+4	+1	+1	Bonus feat
5th	+5	+4	+1	+1	
6th	+6/+1	+5	+2	+2	Bonus feat
7th	+7/+2	+5	+2	+2	
8th	+8/+3	+6	+2	+2	Bonus feat
9th	+9/+4	+6	+3	+3	
10th	+10/+5	+7	+3	+3	Bonus feat
11th	+11/+6/+1	+7	+3	+3	
12th	+12/+7/+2	+8	+4	+4	Bonus feat
13th	+13/+8/+3	+8	+4	+4	
14th	+14/+9/+4	+9	+4	+4	Bonus feat
15th	+15/+10/+5	+9	+5	+5	
16th	+16/+11/+6/+1	+10	+5	+5	Bonus feat
17th	+17/+12/+7/+2	+10	+5	+5	
18th	+18/+13/+8/+3	+11	+6	+6	Bonus feat
19th	+19/+14/+9/+4	+11	+6	+6	
20th	+20/+15/+10/+5	+12	+6	+6	Bonus feat*/

class Fighter {

    /**
     *
     */
    constructor() {
        this.alignment = ['Any'];
        this.hitDie = 'd10';
        this.skills = [
            'Climb', 'Craft', 'Handle Animal', 'Intimidate', 'Jump', 'Ride', 'Swim'
        ];
        this.classTable = {
            1: {
                'baseAttackBonus': [1, 0, 0, 0],
                'feats': 1,
                'saving': [2, 0, 0],
                'skillPoints': [2, 4],
                'specials': {
                    '': 1,
                }
            },
            2: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                }
            },
            3: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                }
            },
            4: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                }
            },
            5: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                }
            },
            6: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                }
            },
            7: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                }
            },
            8: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                }
            },
            9: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                }
            },
            10: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                }
            },
            11: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                }
            },
            12: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                }
            },
            13: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                }
            },
            14: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                }
            },
            15: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                }
            },
            16: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                }
            },
            17: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                }
            },
            18: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                }
            },
            19: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                }
            },
            20: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 0, 0],
                'skillPoints': [0, 0],
                'specials': {
                    '': 0
                }
            }
        };

    }
}