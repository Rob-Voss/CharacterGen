/**
 * Armor
 * @class
 *
 * @property {String} name     
 * @property {String} weight   
 * @property {String} bonus    
 * @property {String} maxDex
 * @property {String} check    
 * @property {String} spellFail
 * @property {String} maxSp    
 * @property {String} hardness 
 * @property {String} hitPoints
 * @property {String} saves    
 * @property {String} donning  
 * @property {String} exists   
 */
class Armor {

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
     * @param {String} exists
     * @returns {Armor}
     */
    constructor(name, weight, armorBonus, maxDex, check, spellFail, maxSp, hardness, hitPoints, saves, donning, exists) {
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
        this.exists = exists;

        return this;
    }


}
