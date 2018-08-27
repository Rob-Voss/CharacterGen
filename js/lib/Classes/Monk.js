/**
 * Monk
 * Alignment: Any lawful
 * Hit Die: d8
 * Class Skills: Balance (Dex), Climb (Str), Concentration (Con), Craft (Int), Diplomacy (Cha), Escape Artist (Dex),
 *  Hide (Dex), Jump (Str), Knowledge (arcana) (Int), Knowledge (religion) (Int), Listen (Wis), Move Silently (Dex),
 *  Perform (Cha), Profession (Wis), Sense Motive (Wis), Spot (Wis), Swim (Str), Tumble (Dex)
 * Skill Points at 1st Level: (4 + Int modifier) ×4
 * Skill Points at Each Additional Level: 4 + Int modifier

Level	Base Attack Bonus	Fort Save	Ref Save	Will Save	Special	Flurry of Blows Attack Bonus	Unarmed Damage1	AC Bonus	Unarmored Speed Bonus
1st	+0	+2	+2	+2	Bonus feat, flurry of blows, unarmed strike	-2/-2	1d6	+0	+0 ft.
2nd	+1	+3	+3	+3	Bonus feat, evasion	-1/-1	1d6	+0	+0 ft.
3rd	+2	+3	+3	+3	Still mind	+0/+0	1d6	+0	+10 ft.
4th	+3	+4	+4	+4	Ki strike (magic), slow fall 20 ft.	+1/+1	1d8	+0	+10 ft.
5th	+3	+4	+4	+4	Purity of body	+2/+2	1d8	+1	+10 ft.
6th	+4	+5	+5	+5	Bonus feat, slow fall 30 ft.	+3/+3	1d8	+1	+20 ft.
7th	+5	+5	+5	+5	Wholeness of body	+4/+4	1d8	+1	+20 ft.
8th	+6/+1	+6	+6	+6	Slow fall 40 ft.	+5/+5/+0	1d10	+1	+20 ft.
9th	+6/+1	+6	+6	+6	Improved evasion	+6/+6/+1	1d10	+1	+30 ft.
10th	+7/+2	+7	+7	+7	Ki strike (lawful), slow fall 50 ft.	+7/+7/+2	1d10	+2	+30 ft.
11th	+8/+3	+7	+7	+7	Diamond body, greater flurry	+8/+8/+8/+3	1d10	+2	+30 ft.
12th	+9/+4	+8	+8	+8	Abundant step, slow fall 60 ft.	+9/+9/+9/+4	2d6	+2	+40 ft.
13th	+9/+4	+8	+8	+8	Diamond soul	+9/+9/+9/+4	2d6	+2	+40 ft.
14th	+10/+5	+9	+9	+9	Slow fall 70 ft.	+10/+10/+10/+5	2d6	+2	+40 ft.
15th	+11/+6/+1	+9	+9	+9	Quivering palm	+11/+11/+11/+6/+1	2d6	+3	+50 ft.
16th	+12/+7/+2	+10	+10	+10	Ki strike (adamantine), slow fall 80 ft.	+12/+12/+12/+7/+2	2d8	+3	+50 ft.
17th	+12/+7/+2	+10	+10	+10	Timeless body, tongue of the sun and moon	+12/+12/+12/+7/+2	2d8	+3	+50 ft.
18th	+13/+8/+3	+11	+11	+11	Slow fall 90 ft.	+13/+13/+13/+8/+3	2d8	+3	+60 ft.
19th	+14/+9/+4	+11	+11	+11	Empty body	+14/+14/+14/+9/+4	2d8	+3	+60 ft.
20th	+15/+10/+5	+12	+12	+12	Perfect self, slow fall any distance	+15/+15/+15/+10/+5	2d10	+4	+60 ft.
1=The value shown is for Medium monks. See Table: Small or Large Monk Unarmed Damage for Small or Large monks.

Small or Large Monk Unarmed Damage
Level	Damage (Small Monk)	Damage (Large Monk)
1st-3rd	1d4	1d8
4th-7th	1d6	2d6
8th-11th	1d8	2d8
12th-15th	1d10	3d6
16th-19th	2d6	3d8
20th	2d8	4d8*/

class Monk {

    /**
     *
     */
    constructor() {
        this.alignment = ['lawful'];
        this.hitDie = 'd8';
        this.skills = [
            'Balance', 'Climb', 'Concentration', 'Craft', 'Diplomacy', 'Escape Artist',
            'Hide', 'Jump', 'Knowledge (arcana)', 'Knowledge (religion)', 'Listen', 'Move Silently',
            'Perform', 'Profession', 'Sense Motive', 'Spot', 'Swim', 'Tumble'
        ];
        this.classTable = {
            1: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 1,
                'saving': [2, 2, 2],
                'skillPoints': [4, 4],
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