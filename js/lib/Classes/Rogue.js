/**
 * Rogue
 * Alignment: Any
 * Hit Die: d6
 * Class Skills: Appraise (Int), Balance (Dex), Bluff (Cha), Climb (Str), Craft (Int), Decipher Script (Int),
 *  Diplomacy (Cha), Disable Device (Int), Disguise (Cha), Escape Artist (Dex), Forgery (Int), Gather Information (Cha),
 *  Hide (Dex), Intimidate (Cha), Jump (Str), Knowledge (local) (Int), Listen (Wis), Move Silently (Dex), Open Lock (Dex),
 *  Perform (Cha), Profession (Wis), Search (Int), Sense Motive (Wis), Sleight of Hand (Dex), Spot (Wis), Swim (Str),
 *  Tumble (Dex), Use Magic Device (Cha), Use Rope (Dex)
 * Skill Points at 1st Level: (8 + Int modifier) ×4
 * Skill Points at Each Additional Level: 8 + Int modifier

Level	Base Attack Bonus	Fort Save	Ref Save	Will Save	Special
1st	+0	+0	+2	+0	Sneak attack +1d6, trapfinding
2nd	+1	+0	+3	+0	Evasion
3rd	+2	+1	+3	+1	Sneak attack +2d6, trap sense +1
4th	+3	+1	+4	+1	Uncanny dodge
5th	+3	+1	+4	+1	Sneak attack +3d6
6th	+4	+2	+5	+2	Trap sense +2
7th	+5	+2	+5	+2	Sneak attack +4d6
8th	+6/+1	+2	+6	+2	Improved uncanny dodge
9th	+6/+1	+3	+6	+3	Sneak attack +5d6, trap sense +3
10th	+7/+2	+3	+7	+3	Special ability
11th	+8/+3	+3	+7	+3	Sneak attack +6d6
12th	+9/+4	+4	+8	+4	Trap sense +4
13th	+9/+4	+4	+8	+4	Sneak attack +7d6, special ability
14th	+10/+5	+4	+9	+4	
15th	+11/+6/+1	+5	+9	+5	Sneak attack +8d6, trap sense +5
16th	+12/+7/+2	+5	+10	+5	Special ability
17th	+12/+7/+2	+5	+10	+5	Sneak attack +9d6
18th	+13/+8/+3	+6	+11	+6	Trap sense +6
19th	+14/+9/+4	+6	+11	+6	Sneak attack +10d6, special ability
20th	+15/+10/+5	+6	+12	+6	*/

class Rogue {

    /**
     *
     */
    constructor() {
        this.alignment = ['Any'];
        this.hitDie = 'd6';
        this.skills = [
            'Appraise', 'Balance', 'Bluff', 'Climb', 'Craft', 'Decipher Script',
            'Diplomacy', 'Disable Device', 'Disguise', 'Escape Artist', 'Forgery', 'Gather Information',
            'Hide', 'Intimidate', 'Jump', 'Knowledge (local)', 'Listen', 'Move Silently', 'Open Lock',
            'Perform', 'Profession', 'Search', 'Sense Motive', 'Sleight', 'Spot', 'Swim',
            'Tumble', 'Use Magic Device', 'Use Rope'
        ];
        this.classTable = {
            1: {
                'baseAttackBonus': [0, 0, 0, 0],
                'feats': 0,
                'saving': [0, 2, 0],
                'skillPoints': [8, 4],
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