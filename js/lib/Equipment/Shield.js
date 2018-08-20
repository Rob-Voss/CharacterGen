/**
 * Shield
 * @class
 *
 * @property {String} name     
 * @property {String} weight   
 * @property {String} bonus    
 * @property {String} dex      
 * @property {String} check    
 * @property {String} spellFail
 * @property {String} maxSp    
 * @property {String} hardness 
 * @property {String} hitPoints
 * @property {String} saves    
 * @property {String} donning  
 */
class Shield {

    /**
     *
     * @param {String} name
     * @param {String} weight
     * @param {String} bonus
     * @param {String} dex
     * @param {String} check
     * @param {String} spellFail
     * @param {String} maxSp
     * @param {String} hardness
     * @param {String} hitPoints
     * @param {String} saves
     * @param {String} donning
     * @returns {Shield}
     */
    constructor(name, weight, bonus, dex, check, spellFail, maxSp, hardness, hitPoints, saves, donning) {
        this.name = name;
        this.weight = weight;
        this.bonus = bonus;
        this.dex = dex;
        this.check = check;
        this.spellFail = spellFail;
        this.maxSp = maxSp;
        this.hardness = hardness;
        this.hitPoints = hitPoints;
        this.shieldSaves = saves;
        this.donning = donning;

        return this;
    }


}
