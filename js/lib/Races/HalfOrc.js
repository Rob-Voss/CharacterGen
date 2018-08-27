/**
 * Half-Orcs
 * Description: These orc–human crossbreeds can be found in either orc or human society (where their status varies
 *  according to local sentiments), or in communities of their own. Half-orcs usually inherit a good blend of the physical
 *  characteristics of their parents. They are as tall as humans and a little heavier, thanks to their muscle. They have
 *  greenish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and coarse body hair. Half-orcs who have lived
 *  among or near orcs have scars, in keeping with orcish tradition.
 * Favored Class: Barbarian. A multiclass half-orc’s barbarian class does not count when determining whether he takes an
 *  experience point penalty.
 * Level Adjustment: +0.
 * Race Attribute Changes: +2 Strength, –2 Intelligence, –2 Charisma.
 * Race Bonuses:
 *  A half-orc’s starting Intelligence score is always at least 3. If this adjustment would lower the character’s score to
 *  1 or 2, his score is nevertheless 3.
 * Size: Medium As Medium creatures, half-orcs have no special bonuses or penalties due to their size.
 * Speed: Half-orc base land speed is 30 feet.
 * Darkvision: Half-orcs (and orcs) can see in the dark up to 60 feet. Darkvision is black and white only, but it is
 *  otherwise like normal sight, and half-orcs can function just fine with no light at all.
 * Orc Blood: For all effects related to race, a half-orc is considered an orc.
 * Automatic Languages: Common and Orc. Bonus Languages: Draconic, Giant, Gnoll, Goblin, and Abyssal.
 */

class HalfOrc {

    /**
     *
     */
    constructor() {
        this.attributes = {
            'STR': 2,
            'DEX': 0,
            'CON': 0,
            'INT': -2,
            'WIS': 0,
            'CHA': -2
        };
        this.bonuses = {
            'attack': {},
            'dc': {},
            'dodge': {},
            'feats': 0,
            'immunity': {},
            'saving': {},
            'size': {},
            'skill': {},
            'skillPoints': {
                '1': [0, 0],
                '+': [0, 0]
            }
        };
        this.carry = 1;
        this.darkVision = true;
        this.description = 'These orc–human crossbreeds can be found in either orc or human society (where their status varies ' +
            'according to local sentiments), or in communities of their own. Half-orcs usually inherit a good blend of the physical ' +
            'characteristics of their parents. They are as tall as humans and a little heavier, thanks to their muscle. They have ' +
            'greenish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and coarse body hair. Half-orcs who have lived ' +
            'among or near orcs have scars, in keeping with orcish tradition.';
        this.favoredClass = 'Barbarian';
        this.levelAdjustment = 0;
        this.lowLightVision = false;
        this.size = 'Medium';
        this.speed = 30;

        return this;
    }
}