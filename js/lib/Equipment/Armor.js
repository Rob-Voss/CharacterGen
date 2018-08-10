/**
 * Armor
 * @class
 *
 * @property {String} aName
 * @property {String} iWeight
 * @property {String} arBonus
 * @property {String} mDex
 * @property {String} check
 * @property {String} spFail
 * @property {String} maxSp
 * @property {String} hardness
 * @property {String} hitPoints
 * @property {String} aSaves
 * @property {String} donning
 * @property {String} aExists
 */
class Armor {

    /**
     *
     * @param {String} aName
     * @param {String} iWeight
     * @param {String} arBonus
     * @param {String} mDex
     * @param {String} check
     * @param {String} spFail
     * @param {String} maxSp
     * @param {String} hardness
     * @param {String} hitPoints
     * @param {String} aSaves
     * @param {String} donning
     * @param {String} aExists
     * @returns {Armor}
     */
    constructor(aName, iWeight, arBonus, mDex, check, spFail, maxSp, hardness, hitPoints, aSaves, donning, aExists) {
        this.aName = aName;
        this.iWeight = iWeight;
        this.arBonus = arBonus;
        this.mDex = mDex;
        this.check = check;
        this.spFail = spFail;
        this.maxSp = maxSp;
        this.hardness = hardness;
        this.hitPoints = hitPoints;
        this.aSaves = aSaves;
        this.donning = donning;
        this.aExists = aExists;
        return this;
    }


}
