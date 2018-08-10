/**
 * Shield
 * @class
 *
 * @property {String} shieldName
 * @property {String} iWeight
 * @property {String} arBonus
 * @property {String} mDex
 * @property {String} check
 * @property {String} spFail
 * @property {String} maxSp
 * @property {String} hardness
 * @property {String} hitPoints
 * @property {String} shieldSaves
 * @property {String} donning
 */
class Shield {

    /**
     *
     * @param {String} shieldName
     * @param {String} iWeight
     * @param {String} arBonus
     * @param {String} mDex
     * @param {String} check
     * @param {String} spFail
     * @param {String} maxSp
     * @param {String} hardness
     * @param {String} hitPoints
     * @param {String} shieldSaves
     * @param {String} donning
     * @returns {Shield}
     */
    constructor(shieldName, iWeight, arBonus, mDex, check, spFail, maxSp, hardness, hitPoints, shieldSaves, donning) {
        this.shieldName = shieldName;
        this.iWeight = iWeight;
        this.arBonus = arBonus;
        this.mDex = mDex;
        this.check = check;
        this.spFail = spFail;
        this.maxSp = maxSp;
        this.hardness = hardness;
        this.hitPoints = hitPoints;
        this.shieldSaves = shieldSaves;
        this.donning = donning;

        return this;
    }


}
