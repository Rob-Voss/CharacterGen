/**
 * Shield
 * @class
 *
 * @property {String} name
 * @property {number} weight
 * @property {number} armorBonus
 * @property {number} maxDex
 * @property {number} check
 * @property {number} spellFail
 * @property {number} maxSp
 * @property {String} hardness
 * @property {String} hitPoints
 * @property {String} saves
 * @property {String} donning
 */
class Shield {

    /**
     *
     * @param {String} name
     * @param {number} weight
     * @param {number} armorBonus
     * @param {number} maxDex
     * @param {number} check
     * @param {number} spellFail
     * @param {number} maxSp
     * @param {String} hardness
     * @param {String} hitPoints
     * @param {String} saves
     * @param {String} donning
     * @returns {Shield}
     */
    constructor(name, weight, armorBonus, maxDex, check, spellFail, maxSp, hardness, hitPoints, saves, donning) {
        this.name = name;
        this.weight = weight;
        this.armorBonus = armorBonus;
        this.maxDex = maxDex;
        this.check = check;
        this.spellFail = spellFail;
        this.maxSp = maxSp;
        this.hardness = hardness;
        this.hitPoints = hitPoints;
        this.saves = saves;
        this.donning = donning;

        return this;
    }


}
