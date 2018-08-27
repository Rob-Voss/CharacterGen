/**
 * Half-Elves
 * Description: Half-elves are not truly an elf subrace, but they are often mistaken for elves. Half-elves usually inherit
 *  a good blend of their parents’ physical characteristics.
 * Favored Class: Any. When determining whether a multiclass half-elf takes an experience point penalty, her highest-level
 *  class does not count.
 * Level Adjustment: +0.
 * Race Bonuses:
 *  +1 racial bonus on Listen, Search, and Spot checks.
 *  +2 racial bonus on Diplomacy and Gather Information checks.
 * Size: Medium As Medium creatures, half-elves have no special bonuses or penalties due to their size.
 * Speed: Half-elf base land speed is 30 feet.
 * Immunity to sleep spells and similar magical effects, and a +2 racial bonus on saving throws against enchantment spells
 *  or effects.
 * Low-Light Vision: A half-elf can see twice as far as a human in starlight, moonlight, torchlight, and similar conditions
 *  of poor illumination. She retains the ability to distinguish color and detail under these conditions.
 * Elven Blood: For all effects related to race, a half-elf is considered an elf.
 * Automatic Languages: Common and Elven. Bonus Languages: Any (other than secret languages, such as Druidic).
 */

class HalfElf {

    /**
     *
     */
    constructor() {
        this.attributes = {
            'STR': 0,
            'DEX': 0,
            'CON': 0,
            'INT': 0,
            'WIS': 0,
            'CHA': 0
        };
        this.bonuses = {
            'attack': {},
            'dc': {},
            'dodge': {},
            'feats': 0,
            'immunity': {
                'sleep': true
            },
            'saving': {
                'enchantment': 2
            },
            'size': {},
            'skill': {
                'diplomacy': 2,
                'gatherinformation': 2,
                'listen': 1,
                'search': 1,
                'spot': 1
            },
            'skillPoints': {
                '1': [0, 0],
                '+': [0, 0]
            }
        };
        this.carry = 1;
        this.darkVision = false;
        this.description = 'Half-elves are not truly an elf subrace, but they are often mistaken for elves. Half-elves usually inherit ' +
            'a good blend of their parents’ physical characteristics.';
        this.favoredClass = 'Any';
        this.levelAdjustment = 0;
        this.lowLightVision = true;
        this.size = 'Medium';
        this.speed = 30;
        this.subtype = '';

        return this;
    }
}