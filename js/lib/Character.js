class Character {

    /**
     *
     * @param {CharacterGen} characterGen
     * @returns {Character}
     */
    constructor(characterGen) {
        this.generator = characterGen;

        //align with booleans below --appr---	bala---	bluf---	clim---	conc---	craf---	deci---	dipl---	disa---	disg---	esca---	forg---	gath---	hand---	heal---	hide---	inti---	jump---	know---	list---	move---	open---	perf---	prof---	ride---	sear---	sens---	slei---	spel---	spot---	surv---	swim---	tumb---	usem---	user
        this.allSkillsBool = [false, false, false, true, false, true, false, false, false, false, false, false, false, true, false, false, true, true, false, true, false, false, false, false, true, false, false, false, false, false, true, true, false, false, false];
        this.allSkillsString = ["appr", "bala", "bluf", "clim", "conc", "craf", "deci", "dipl", "disa", "disg", "esca", "forg", "gath", "hand", "heal", "hide", "inti", "jump", "know", "list", "move", "open", "perf", "prof", "ride", "sear", "sens", "slei", "spel", "spot", "surv", "swim", "tumb", "usem", "user"];

        this.baseSkillPoints = 0;
        this.darkVision = false;
        this.hitDie = 0;
        this.hitPoints = 0;
        this.levelAdvance = 0;
        this.small = false;
        this.lowLight = false;
        this.selClass = 0;
        this.selRace = 0;

        this.skPts = 0;
        this.skillPointsSpent = 0;

        this.startingFeats = 1;
        this.numOfFeats = 0;

        this.weaponFinesse = false;
        this.improvedInitiative = false;
        this.greatFortitude = false;
        this.ironWill = false;
        this.lighteningReflexes = false;
        this.toughness = false;

        this.grapple = false;
        this.fighterBonusFeat = false;
        this.stunningFist = false;
        this.track = false;

        this.heavyLoad = 0;
        this.mediumLoad = 0;
        this.lightLoad = 0;

        this.forSave = 0;
        this.refSave = 0;
        this.wilSave = 0;

        this.baseAttackBonus = 0;
        this.baseAttackBonus2 = 0;
        this.baseAttackBonus3 = 0;
        this.baseAttackBonus4 = 0;

        this.strAttr = 0;
        this.strMod = 0;

        this.dexAttr = 0;
        this.dexMod = 0;

        this.conAttr = 0;
        this.conMod = 0;

        this.wisAttr = 0;
        this.wisMod = 0;

        this.intAttr = 0;
        this.intMod = 0;

        this.chaAttr = 0;
        this.chaMod = 0;

        this.attrOne = '';
        this.attrTwo = '';
        this.attrThree = '';
        this.attrFour = '';
        this.attrFive = '';
        this.attrSix = '';

        this.nameAttrOne = '';
        this.nameAttrTwo = '';
        this.nameAttrThree = '';
        this.nameAttrFour = '';
        this.nameAttrFive = '';
        this.nameAttrSix = '';

        return this;
    }


}