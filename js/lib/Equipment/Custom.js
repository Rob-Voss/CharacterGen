/**
 *
 * @property {String} name
 * @property {number} weight
 * @property {String} damage
 * @property {String} critical
 * @property {String} range
 * @property {String} type
 * @property {String} size
 * @property {String} reach
 * @property {String} hardness
 * @property {String} hitPoints
 * @property {String} saves
 */
class Custom {

    /**
     *
     * @param {String} name
     * @param {number} weight
     * @param {String} damage
     * @param {String} critical
     * @param {String} range
     * @param {String} type
     * @param {String} size
     * @param {String} reach
     * @param {String} hardness
     * @param {String} hitPoints
     * @param {String} saves
     * @returns {Custom}
     */
    constructor(name, weight, damage, critical, range, type, size, reach, hardness, hitPoints, saves) {
        this.name = name;
        this.weight = weight;
        this.damage = damage;
        this.critical = critical;
        this.range = range;
        this.type = type;
        this.size = size;
        this.reach = reach;
        this.hardness = hardness;
        this.hitPoints = hitPoints;
        this.saves = saves;

        return this;
    }


}
