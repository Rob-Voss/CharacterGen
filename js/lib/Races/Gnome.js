/**
 * Rock Gnomes
 * Desription: Rock gnomes are the most common variety of gnomes. Rock gnomes stand 3 to 3-1/2 feet tall and weigh 40 to 45 pounds.
 *  Their skin color ranges from dark tan to woody brown, their hair is fair, and their eyes can be any shade of blue.
 *  Rock gnome males prefer short, carefully trimmed beards. Rock gnomes generally wear leather or earth tones, though
 *  they decorate their clothes with intricate stitching or fine jewelry. Rock gnomes reach adulthood at about age 40,
 *  and they live about 350 years, though some can live almost 500 years.
 * Favored Class: Bard. A multiclass rock gnome’s bard class does not count when determining whether he takes an
 *  experience point penalty.
 * Level Adjustment: +0.
 * Race Attribute Changes: +2 Constitution, –2 Strength.
 * Race Bonuses:
 *  +2 racial bonus on saving throws against illusions.
 *  +1 to the Difficulty Class for all saving throws against illusion spells cast by rock gnomes.
 *      This adjustment stacks with those from similar effects.
 *  +1 racial bonus on attack rolls against kobolds and goblinoids.
 *  +4 dodge bonus to Armor Class against monsters of the giant type. Any time a creature loses its Dexterity bonus
 *      (if any) to Armor Class, such as when it’s caught flat-footed, it loses its dodge bonus, too.
 *  +2 racial bonus on Listen checks.
 *  +2 racial bonus on Craft (alchemy) checks.
 * Size: Small As a Small creature, a rock gnome gains a +1 size bonus to Armor Class, a +1 size bonus on attack rolls,
 *  and a +4 size bonus on Hide checks, but he uses smaller weapons than humans use, and his lifting and carrying
 *  limits are three-quarters of those of a Medium character.
 * Speed: Rock gnome base land speed is 20 feet.
 * Low-Light Vision: A rock gnome can see twice as far as a human in starlight, moonlight, torchlight, and similar
 *  conditions of poor illumination. He retains the ability to distinguish color and detail under these conditions.
 * Weapon Familiarity: Rock gnomes may treat gnome hooked hammers as martial weapons rather than exotic weapons.
 * Automatic Languages: Common and Gnome. Bonus Languages: Draconic, Dwarven, Elven, Giant, Goblin, and Orc.
 *  In addition, a rock gnome can speak with a burrowing mammal (a badger, fox, rabbit, or the like, see below).
 *  This ability is innate to rock gnomes. See the speak with animals spell description.
 * Spell-Like Abilities: 1/day—speak with animals (burrowing mammal only, duration 1 minute). A rock gnome with a
 *  Charisma score of at least 10 also has the following spell-like abilities: 1/day—dancing lights, ghost sound,
 *  prestidigitation. Caster level 1st; save DC 10 + rock gnome’s Cha modifier + spell level.
 */

class Gnome extends Race {

    /**
     *
     * @param {String} subType
     * @returns {Gnome}
     */
    constructor(subType = '') {
        super(subType);
        this.name = this.constructor.name;

        this.abilityAdj.str = -2;
        this.abilityAdj.con = 2;

        this.bonuses = {
            'attack':{
                'kobolds': 1,
                'goblinoids': 1
            },
            'dc': {
              'illusion': 1
            },
            'dodge': {
                'giants': 4
            },
            'feat': 0,
            'immunity': {},
            'saving': {
                'illusion': 2,
                'spells': 2,
                'orcs': 1,
                'goblinoids': 1
            },
            'size': {
                'ac': 1,
                'attack': 1
            },
            'skill': {
                'craft':{
                    'alchemy': 2
                },
                'hide': 4,
                'listen': 2
            },
            'skillPoints': {
                '1': [0, 0],
                '+': [0, 0]
            }
        };

        this.carry = 0.75;

        this.description = 'Rck gnomes are the most common variety of gnomes. Rock gnomes stand 3 to 3-1/2 feet tall and weigh 40 to 45 pounds. ' +
            'Their skin color ranges from dark tan to woody brown, their hair is fair, and their eyes can be any shade of blue. ' +
            'Rock gnome males prefer short, carefully trimmed beards. Rock gnomes generally wear leather or earth tones, though ' +
            'they decorate their clothes with intricate stitching or fine jewelry. Rock gnomes reach adulthood at about age 40, ' +
            'and they live about 350 years, though some can live almost 500 years.';

        this.favoredClass = 'Bard';

        this.lowLightVision = true;

        this.size = 'Small';

        this.speed = 20;

        return this;
    }
}