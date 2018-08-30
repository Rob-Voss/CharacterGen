/**
 * Humans
 * Description:
 * Favored Class: Any. When determining whether a multiclass human takes an experience point penalty, his or her
 *  highest-level class does not count.
 * Race Attribute Changes: None
 * Race Bonuses:
 *  1 extra feat at 1st level.
 *  4 extra skill points at 1st level and 1 extra skill point at each additional level.
 * Size: Medium As Medium creatures, humans have no special bonuses or penalties due to their size.
 * Speed: Human base land speed is 30 feet.
 * Automatic Language: Common. Bonus Languages: Any (other than secret languages, such as Druidic). See the Speak
 *  Language skill.
 */

class Human extends Race {

    /**
     *
     * @param {String} subType
     * @returns {Human}
     */
    constructor(subType = '') {
        super(subType);
        this.name = this.constructor.name;

         this.bonuses = {
             'attack': {},
             'dc': {},
             'dodge': {},
             'feat': 1,
             'immunity': {},
             'saving': {},
             'size': {},
             'skill': {},
             'skillPoints': {
                 '1': [4, 4],
                 '+': [1, 0]
             }
         };

         this.description = 'The high elf is the most common elf variety. High elves average 5 feet tall and typically weigh just over ' +
             '100 pounds. They live on fruits and grains, though they occasionally hunt for fresh meat. High elves prefer colorful ' +
             'clothes, usually with a green-and-gray cloak that blends well with the colors of the forest.';

         this.favoredClass = 'Wizard';

         return this;
     }

}