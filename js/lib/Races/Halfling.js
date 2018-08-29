/**
 * Lightfoot Halflings
 * Description: The lightfoot halfling is the most common halfling variety. Lightfoot halflings stand about 3 feet tall
 *  and usually weigh between 30 and 35 pounds. They have brown or black eyes. Lightfoot halfling men often have long
 *  sideburns, but beards are rare among them and mustaches almost unseen. Lightfoot halflings prefer simple, comfortable,
 *  and practical clothes. Unlike members of most races, they prefer actual comfort to shows of wealth. Lightfoot halflings
 *  reach adulthood in their early twenties and generally live into the middle of their second century.
 * Favored Class: Rogue. A multiclass lightfoot halfling’s rogue class does not count when determining whether she takes
 *  an experience point penalty for multiclassing.
 * Level Adjustment: +0.
 * Race Attribute Changes: +2 Dexterity, –2 Strength.
 * Race Bonuses:
 *  +2 racial bonus on Climb, Jump, and Move Silently checks.
 *  +1 racial bonus on all saving throws.
 *  +2 morale bonus on saving throws against fear: This bonus stacks with the lightfoot halfling’s +1 bonus on saving
 *      throws in general.
 *  +1 racial bonus on attack rolls with thrown weapons and slings.
 *  +2 racial bonus on Listen checks.
 * Size: Small As a Small creature, a lightfoot halfling gains a +1 size bonus to Armor Class, a +1 size bonus on attack rolls,
 *  and a +4 size bonus on Hide checks, but she uses smaller weapons than humans use, and her lifting and carrying limits
 *  are three-quarters of those of a Medium character.
 * Speed: Lightfoot halfling base land speed is 20 feet.
 * Automatic Languages: Common and Halfling. Bonus Languages: Dwarven, Elven, Gnome, Goblin, and Orc.
 */

class Halfling extends Race {

    /**
     *
     * @param {String} subType
     * @returns {Halfling}
     */
    constructor(subType = '') {
        super(subType);

        this.abilityAdj.str = -2;
        this.abilityAdj.dex = 2;

        this.bonuses = {
            'attack': {
                'thrown': 1,
                'sling': 1
            },
            'dc': {},
            'dodge': {},
            'feats': 0,
            'immunity': {
                'sleep': true
            },
            'saving': {
                'all': 1,
                'fear': 2
            },
            'size': {
              'ac': 1,
              'attack': 1
            },
            'skill': {
                'climb': 2,
                'jump': 2,
                'listen': 2,
                'movesilently': 2
            },
            'skillPoints': {
                '1': [0, 0],
                '+': [0, 0]
            }
        };

        this.carry = 0.75;

        this.description = 'The lightfoot halfling is the most common halfling variety. Lightfoot halflings stand about ' +
            '3 feet tall and usually weigh between 30 and 35 pounds. They have brown or black eyes. Lightfoot halfling ' +
            'men often have long sideburns, but beards are rare among them and mustaches almost unseen. Lightfoot ' +
            'halflings prefer simple, comfortable, and practical clothes. Unlike members of most races, they prefer ' +
            'actual comfort to shows of wealth. Lightfoot halflings reach adulthood in their early twenties and generally ' +
            'live into the middle of their second century.';

        this.favoredClass = 'Rogue';

        this.size = 'Small';

        this.speed = 20;

        return this;
    }
}