/**
 *
 * @property {String} wName
 * @property {String} iWeight
 * @property {String} damage
 * @property {String} critical
 * @property {String} range
 * @property {String} wType
 * @property {String} wSize
 * @property {String} wReach
 * @property {String} hardness
 * @property {String} hitPoints
 * @property {String} wSaves
 */
class Custom {

    /**
     *
     * @param {String} wName
     * @param {String} iWeight
     * @param {String} damage
     * @param {String} critical
     * @param {String} range
     * @param {String} wType
     * @param {String} wSize
     * @param {String} wReach
     * @param {String} hardness
     * @param {String} hitPoints
     * @param {String} wSaves
     * @returns {Custom}
     */
    constructor(wName, iWeight, damage, critical, range, wType, wSize, wReach, hardness, hitPoints, wSaves) {
        this.wName = wName;
        this.iWeight = iWeight;
        this.damage = damage;
        this.critical = critical;
        this.range = range;
        this.wType = wType;
        this.wSize = wSize;
        this.wReach = wReach;
        this.hardness = hardness;
        this.hitPoints = hitPoints;
        this.wSaves = wSaves;

        return this;
    }


}
