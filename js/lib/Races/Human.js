/**
 * Humans
 Favored Class: Any. When determining whether a multiclass human takes an experience point penalty, his or her highest-level class does not count.
 Race Attribute Changes: None
 Race Bonuses:
 1 extra feat at 1st level.
 4 extra skill points at 1st level and 1 extra skill point at each additional level.

 Medium: As Medium creatures, humans have no special bonuses or penalties due to their size.
 Human base land speed is 30 feet.
 Automatic Language: Common. Bonus Languages: Any (other than secret languages, such as Druidic). See the Speak Language skill.
 */


class Human {

     constructor() {
         this.description = '';
         this.favoredClass = '';
         this.levelAdjustment = 0;
         this.attributeChanges = {'STR': 0, 'DEX': 0, 'CON': 0, 'INT': 0, 'WIS': 0, 'CHA': 0}
         this.bonuses = {};
         this.size = 'Medium';

     }
}