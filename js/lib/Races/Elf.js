/**
 * High Elves
 * Description: The high elf is the most common elf variety. High elves average 5 feet tall and typically weigh just over
 *  100 pounds. They live on fruits and grains, though they occasionally hunt for fresh meat. High elves prefer colorful
 *  clothes, usually with a green-and-gray cloak that blends well with the colors of the forest..
 * Favored Class: Wizard. A multiclass high elf’s wizard class does not count when determining whether she takes an
 *  experience point penalty for multiclassing.
 * Level Adjustment: +0.
 * Race Attribute Changes: +2 Dexterity, –2 Constitution.
 * Race Bonuses:
 *  +2 racial bonus on Listen, Search, and Spot checks. A high elf who merely passes within 5 feet of a secret or concealed
 *      door is entitled to a Search check to notice it as if she were actively looking for it.
 * Size: Medium As Medium creatures, high elves have no special bonuses or penalties due to their size.
 * Speed: High elf base land speed is 30 feet.
 * Immunity: Immunity to magic sleep effects, and a +2 racial saving throw bonus against enchantment spells or effects.
 * Low-Light Vision: A high elf can see twice as far as a human in starlight, moonlight, torchlight, and similar conditions
 *  of poor illumination. She retains the ability to distinguish color and detail under these conditions.
 * Weapon Proficiency: High elves receive the Martial Weapon Proficiency feats for the longsword, rapier, longbow
 *  (including composite longbow), and shortbow (including composite shortbow) as bonus feats.
 * Automatic Languages: Common and Elven. Bonus Languages: Draconic, Gnoll, Gnome, Goblin, Orc, and Sylvan
 */

class Elf extends Race {

    /**
     *
     * @param {String} subType
     * @returns {Elf}
     */
    constructor(subType = '') {
        super(subType);
        this.name = this.constructor.name;

        this.abilityAdj.dex = 2;
        this.abilityAdj.con = -2;

        this.bonuses = {
            'attack': {},
            'dc': {},
            'dodge': {},
            'feat': 0,
            'immunity': {
                'sleep': true
            },
            'saving': {
                'enchantment': 2
            },
            'size': {},
            'skill': {
                'listen': 2,
                'search': 2,
                'spot': 2
            },
            'skillPoints': {
                '1': [0, 0],
                '+': [0, 0]
            }
        };

        this.description = 'The high elf is the most common elf variety. High elves average 5 feet tall and typically weigh just over ' +
            '100 pounds. They live on fruits and grains, though they occasionally hunt for fresh meat. High elves prefer colorful ' +
            'clothes, usually with a green-and-gray cloak that blends well with the colors of the forest.';

        this.favoredClass = 'Wizard';

        this.lowLightVision = true;

        return this;
    }
}