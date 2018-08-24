/**
 * Hill Dwarves
 Description: Hill dwarves are the most common variety of dwarves. Hill dwarves favor earth tones in their clothing and prefer simple and functional garb. The skin can be very dark, but it is always some shade of tan or brown. Hair color can be black, gray, or brown. Hill dwarves average 4 feet tall and weigh as much as adult humans.
 Favored Class: Fighter. A multiclass hill dwarf’s Fighter class does not count when determining whether he takes an experience point penalty for multiclassing.
 Level Adjustment: +0.
 Race Attribute Changes: +2 Constitution, –2 Charisma.
 Race Bonuses:
 +2 racial bonus on saving throws against poison.
 +2 racial bonus on saving throws against spells and spell-like effects.
 +1 racial bonus on attack rolls against orcs and goblinoids.
 +4 dodge bonus to Armor Class against monsters of the giant type. Any time a creature loses its Dexterity bonus (if any) to Armor Class, such as when it’s caught flat-footed, it loses its dodge bonus, too.
 +2 racial bonus on Appraise checks that are related to stone or metal items.
 +2 racial bonus on Craft checks that are related to stone or metal.

 Medium: As Medium creatures, hill dwarves have no special bonuses or penalties due to their size.
 Hill dwarf base land speed is 20 feet. However, hill dwarves can move at this speed even when wearing medium or heavy armor or when carrying a medium or heavy load (unlike other creatures, whose speed is reduced in such situations).
 Darkvision: Hill dwarves can see in the dark up to 60 feet. Darkvision is black and white only, but it is otherwise like normal sight, and hill dwarves can function just fine with no light at all.
 Stonecunning: This ability grants a hill dwarf a +2 racial bonus on Search checks to notice unusual stonework, such as sliding walls, stonework traps, new construction (even when built to match the old), unsafe stone surfaces, shaky stone ceilings, and the like. Something that isn’t stone but that is disguised as stone also counts as unusual stonework. A hill dwarf who merely comes within 10 feet of unusual stonework can make a Search check as if he were actively searching, and a hill dwarf can use the Search skill to find stonework traps as a rogue can. A hill dwarf can also intuit depth, sensing his approximate depth underground as naturally as a human can sense which way is up.
 Weapon Familiarity: Hill dwarves may treat dwarven waraxes and dwarven urgroshes as martial weapons, rather than exotic weapons.
 Stability: A hill dwarf gains a +4 bonus on ability checks made to resist being bull rushed or tripped when standing on the ground (but not when climbing, flying, riding, or otherwise not standing firmly on the ground).
 Automatic Languages: Common and Dwarven. Bonus Languages: Giant, Gnome, Goblin, Orc, Terran, and Undercommon.

 */


class Dwarf {

    constructor() {
        this.description = '';
        this.favoredClass = '';
        this.levelAdjustment = 0;
        this.attributeChanges = {'STR': 0, 'DEX': 0, 'CON': 0, 'INT': 0, 'WIS': 0, 'CHA': 0}
        this.bonuses = {};
        this.size = 'Medium';
        this.darkVision = true;
    }
}