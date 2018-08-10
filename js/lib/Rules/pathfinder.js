
function weaponSlot(paramone, paramtwo, paramthr, paramfou, paramfiv, paramsix, paramsev, parameig, paramnin, paramten, paramele, paramtwe) {
	this.wName = paramone;
	this.iWeight = paramtwo;
	this.damage = paramthr;
	this.critical = paramfou;
	this.range = paramfiv;
	this.wType = paramsix;
	this.wSize = paramsev;
	this.wReach = parameig;
	this.hardness = paramnin;
	this.hitPoints = paramten;
	this.wSaves = paramele;
	this.wExists = paramtwe;
}

function armor(paramone, paramtwo, paramthr, paramfou, paramfiv, paramsix, paramsev, parameig, paramnin, paramten, paramele, paramtwe) {
	this.aName = paramone;
	this.iWeight = paramtwo;
	this.arBonus = paramthr;
	this.mDex = paramfou;
	this.check = paramfiv;
	this.spFail = paramsix;
	this.maxSp = paramsev;
	this.hardness = parameig;
	this.hitPoints = paramnin;
	this.aSaves = paramten;
	this.donning = paramele;
	this.aExists = paramtwe;
}

function shield(paramone, paramtwo, paramthr, paramfou, paramfiv, paramsix, paramsev, parameig, paramnin, paramten, paramele, paramtwe) {
	this.shieldName = paramone;
	this.iWeight = paramtwo;
	this.arBonus = paramthr;
	this.mDex = paramfou;
	this.check = paramfiv;
	this.spFail = paramsix;
	this.maxSp = paramsev;
	this.hardness = parameig;
	this.hitPoints = paramnin;
	this.shieldSaves = paramten;
	this.donning = paramele;
}

window.itemPurchaseNo = 0;
window.numOfFeats = 0;
window.blankCounter = 0;
window.blankCraftCounter = 0;



window.skillsList = 	["acro",	"appr", 	"bluf", 	"clim", 	"craf", 	"dipl", 	"disa", 	"disg", 	"esca", 	"fly",	 	"hand", 	"heal", 	"inti", 	"know", 	"ling", 	"perc", 	"perf", 	"prof", 	"ride", 	"sens", 	"slei", 	"spel", 	"stea", 	"surv", 	"swim", 	"usem", 	"bla1" ]; // 	, 	"bla2", 	"bla3" 
window.whichModList = 	["dex", 	"int",  	"cha", 		"str", 		"int", 		"cha", 		"int", 		"cha", 		"dex", 		"dex", 		"cha", 		"wis", 		"cha", 		"int", 		"int", 		"wis", 		"cha", 		"wis", 		"dex", 		"wis", 		"dex", 		"int", 		"dex", 		"wis", 		"str", 		"cha", 		"none" ];  // 	,		"none",		"none"
// var untrained = [ true, 		true, 		true, 		true, 		true, 		true, 		false, 		true, 		false, 		true, 		true, 		true, 		true, 		false, 		true, 		true, 		true, 		true, 		false, 		true, 		true, 		false, 		false, 		false, 		true, 		true, 		true, 		false, 		false, 		true, 		true, 		true, 		false, 		false, 		true, 			true, 		true, 		true ]



var classSelect = function(userClass) {
	// Second if statement isn't entered until selection is made.
	window.selClass = 0;
	var confirmClass = confirm("Are you sure you want to be a " + userClass + "?");
	
	if (confirmClass) {
		window.selClass = userClass.toUpperCase();
	} else {
		//exit function. Reset on next call.
	}
	
	if (window.selClass != 0) {
	
	document.getElementById("show-class").innerHTML = "Current Class: " + selClass; // turn on display of Choice.

	/*
	if (window.selClass === "MONK") {

		var confirmMonk = confirm("Monks get either Improved Grapple or Stunning Fist as a bonus feat. Do you want Improved Grapple?");
		if (confirmMonk) {
			selectFeat("Improved Grapple");
			document.getElementById("feats-remaining").innerHTML = 1;
		} else {
			selectFeat("Stunning Fist");
			document.getElementById("feats-remaining").innerHTML = 1;
		}
	}
	
	if (window.selClass === "RANGER") {
		alert("Rangers get Track as a bonus feat.");
		selectFeat("Track");
		document.getElementById("feats-remaining").innerHTML = 1;
	}

	if (window.selClass === "FIGHTER") {
		var bonusFeat = document.getElementById("feats-remaining").innerHTML;
		var bonusFeatHolder = Number(bonusFeat);
		bonusFeatHolder += 1;
		document.getElementById("feats-remaining").innerHTML = bonusFeatHolder;
	}
	*/



	document.getElementById("class-select").style.display="none"; // hide select Class buttons.
	
	document.getElementById("race-select").style.display="block"; // show next block -- select race. 
	} else {
		// exit function. Reset on next call.
	}
}

var raceSelect = function(userRace) {
	// See comments of classSelect function
	window.selRace = 0;
	var confirmRace = confirm("Are you sure you want to be " + userRace + "?");
	
	if (confirmRace) {
		window.selRace = userRace.toUpperCase();
	} else {
		//exit function. Reset on next call.
	}
	
	if (window.selRace != 0) {
		
		document.getElementById("show-race").innerHTML = "Current Race: " + window.selRace;
		
		document.getElementById("race-select").style.display="none";
		
		document.getElementById("dice-sys").style.display="block";
		
		document.getElementById("race-bonus-" + (window.selRace.toLowerCase()) ).style.display="block"; // Display information block for this Race.
		
		if (window.selRace === "HUMAN") {
			var bonusFeat = document.getElementById("feats-remaining").innerHTML;
			var bonusFeatHolder = Number(bonusFeat);
			bonusFeatHolder += 1;
			document.getElementById("feats-remaining").innerHTML = bonusFeatHolder;
		}
	
	} else {
		// exit function. Reset on next call.
	}
}


var rollHeroic = function() {	
	var statValue = [0, 0, 0, 0, 0, 0];
	window.totalPoints = 0;
	
	for( var i = 0 ; i < 6 ; i++ ) {
		statValue[i] = Math.floor(Math.random() * 10 + 9);
		document.getElementById("stat-val-" + (i + 1) ).innerHTML = statValue[i];
		document.getElementById("stat-label-" + (i + 1) ).innerHTML = statValue[i];
		window.totalPoints += statValue[i];
	}
	window.attrOne = statValue[0];
	window.attrTwo = statValue[1];
	window.attrThr = statValue[2];
	window.attrFou = statValue[3];
	window.attrFiv = statValue[4];
	window.attrSix = statValue[5];

	document.getElementById("total-points").innerHTML = window.totalPoints;
	if (totalPoints > 90) {
		document.getElementById("playability").innerHTML = "Jedi";
	} else if (totalPoints > 72) {
		document.getElementById("playability").innerHTML = "Strong";
	} else if (totalPoints > 54) {
		document.getElementById("playability").innerHTML = "Average";
	} else if (totalPoints > 36) {
		document.getElementById("playability").innerHTML = "Weak";
	} else {
		document.getElementById("playability").innerHTML = "Useless as Dirt";
	}
	removeDieRollButtons();
}



var rollStandard = function() {	
	var statValue = [0, 0, 0, 0, 0, 0];
	window.totalPoints = 0;
	
	for ( var i = 0 ; i < 6 ; i++ ) {
		var firstDie = Math.floor(Math.random() * 6 + 1 );
		var seconDie = Math.floor(Math.random() * 6 + 1 );
		var thirdDie = Math.floor(Math.random() * 6 + 1 );
		var fourtDie = Math.floor(Math.random() * 6 + 1 );
		if ( (fourtDie <= thirdDie ) && ( fourtDie <= seconDie ) && ( fourtDie <= firstDie ) ) {
 			statValue[i] = ( firstDie + seconDie + thirdDie ) ;
 		} else if ( ( thirdDie <= fourtDie ) && ( thirdDie <= seconDie ) && ( thirdDie <= firstDie ) ) {
 			statValue[i] = ( firstDie + seconDie + fourtDie ) ; 
 		} else if ( ( seconDie <= fourtDie ) && ( seconDie <= seconDie ) && ( seconDie <= firstDie ) ) {
 			statValue[i] = ( firstDie + thirdDie + fourtDie ) ;
 		} else {
 			statValue[i] = ( seconDie + thirdDie + fourtDie ) ;
 		}

		document.getElementById("stat-val-" + (i + 1) ).innerHTML = statValue[i];
		document.getElementById("stat-label-" + (i + 1) ).innerHTML = statValue[i];
		window.totalPoints += statValue[i];
	}
	
	window.attrOne = statValue[0];
	window.attrTwo = statValue[1];
	window.attrThr = statValue[2];
	window.attrFou = statValue[3];
	window.attrFiv = statValue[4];
	window.attrSix = statValue[5];

	document.getElementById("total-points").innerHTML = window.totalPoints;
	if (totalPoints > 90) {
		document.getElementById("playability").innerHTML = "Jedi";
	} else if (totalPoints > 72) {
		document.getElementById("playability").innerHTML = "Strong";
	} else if (totalPoints > 54) {
		document.getElementById("playability").innerHTML = "Average";
	} else if (totalPoints > 36) {
		document.getElementById("playability").innerHTML = "Weak";
	} else {
		document.getElementById("playability").innerHTML = "Useless as Dirt";
	}
	removeDieRollButtons();
}




var rollClassic = function() {	
	var statValue = [0, 0, 0, 0, 0, 0];
	window.totalPoints = 0;
	
	for( var i = 0 ; i < 6 ; i++ ) {
		statValue[i] = Math.floor(Math.random() * 16 + 3);
		document.getElementById("stat-val-" + (i + 1) ).innerHTML = statValue[i];
		document.getElementById("stat-label-" + (i + 1) ).innerHTML = statValue[i];
		window.totalPoints += statValue[i];
	}

	window.attrOne = statValue[0];
	window.attrTwo = statValue[1];
	window.attrThr = statValue[2];
	window.attrFou = statValue[3];
	window.attrFiv = statValue[4];
	window.attrSix = statValue[5];

	
	
	// Displays total points
	document.getElementById("total-points").innerHTML = window.totalPoints;
	// Evaluates total points, assigns a value string and displays.
	if (totalPoints > 90) {
		document.getElementById("playability").innerHTML = "Jedi";
	} else if (totalPoints > 72) {
		document.getElementById("playability").innerHTML = "Strong";
	} else if (totalPoints > 54) {
		document.getElementById("playability").innerHTML = "Average";
	} else if (totalPoints > 36) {
		document.getElementById("playability").innerHTML = "Weak";
	} else {
		document.getElementById("playability").innerHTML = "Useless as Dirt";
	}
	removeDieRollButtons();
	
	
	// window.attrClicks = 0; // Declare variable for next function.
}

var removeDieRollButtons = function() {
	var list = document.getElementsByClassName("roll-attribute");
	for ( var i = 0 ; i < list.length ; i++ ) {
		list[i].style.display = "none";
	}
}	
		
// FUNCTION NAMES USED THUS FAR

// Navigation comments 1/1

// classSelect    : stores character class as an All Uppercase String in [---> window.selClass <---]
// raceSelect     : same as above, except for Race choice, stored in     [---> selRace <---]
// buildAttribute : part 1 of an attribute rolling system. Variables:    [---> strVal <---]
//																		 [---> dexVal <---]
//																		 [---> conVal <---]
//																		 [---> wisVal <---]
//																		 [---> intVal <---]
//																		 [---> chaVal <---]
// rollAttribute  : generates six random numbers 3-18. Variables:		 [---> attrOne <---]
//																		 [---> attrTwo <---]
//																		 [---> attrThree <---]
//																		 [---> attrFour <---]
//																		 [---> attrFive <---]
//																		 [---> attrSix <---]
/*
var testResults = function(form) {
	var TestVar = form.attributeOne.value;
    alert ("You typed: " + TestVar);
} */


// -------------------------------------------------------------------
// ASSIGNING YOUR CHARACTER'S BASE ATTRIBUTES TO ROLLED ABILITY SCORES
// -------------------------------------------------------------------

// This array ... has been deleted.  



var logAllModifiers = function() {
	window.strMod = Math.floor( (window.strAttr - 10 ) / 2);
	window.dexMod = Math.floor( (window.dexAttr - 10 ) / 2);
	window.conMod = Math.floor( (window.conAttr - 10 ) / 2);
	window.wisMod = Math.floor( (window.wisAttr - 10 ) / 2);
	window.intMod = Math.floor( (window.intAttr - 10 ) / 2);
	window.chaMod = Math.floor( (window.chaAttr - 10 ) / 2);
}



var assignAttributes = function(form) {
	
	// Take in all form values
	window.nameAttrOne = form.attrOne.value;
	window.nameAttrTwo = form.attrTwo.value;
	window.nameAttrThr = form.attrThr.value;
	window.nameAttrFou = form.attrFou.value;
	window.nameAttrFiv = form.attrFiv.value;
	window.nameAttrSix = form.attrSix.value;
	
	// Store form values AND roll values (from above) in seperate Arrays.
	var allAttrNames = new Array(window.nameAttrOne, window.nameAttrTwo, window.nameAttrThr, window.nameAttrFou, window.nameAttrFiv, window.nameAttrSix);
	var allAttrValus = new Array(window.attrOne, window.attrTwo, window.attrThr, window.attrFou, window.attrFiv, window.attrSix);
	
	// ^ NOTE it's Valus NOT Values. 
	
	// Set to zero.
	window.strAttr = 0;
	window.dexAttr = 0;
	window.conAttr = 0;
	window.wisAttr = 0;
	window.intAttr = 0;
	window.chaAttr = 0;
	
	// Run through each NAME value and assign it the corresponding NUMBER value, so attributes are variables with number values.
	for ( var i = 0 ; i < 6 ; i++ ) {
		switch (allAttrNames[i]) {
		case "STR":
			window.strAttr = allAttrValus[i];
		break;
		case "DEX":
			window.dexAttr = allAttrValus[i];
		break;
		case "CON":
			window.conAttr = allAttrValus[i];
		break;
		case "WIS":
			window.wisAttr = allAttrValus[i];
		break;
		case "INT":
			window.intAttr = allAttrValus[i];
		break;
		case "CHA":
			window.chaAttr = allAttrValus[i];
		break;
		default:
			alert("An error occured. Verify that all Attributes are Allocated.");
			var i = 6; // Exit the function :P
		break;
		}
	}
	
	// Reject Errors, and prompt for confirm, else, throw out of the function to restart. 
	
	if (strAttr != 0 && dexAttr != 0 && conAttr != 0 && wisAttr != 0 && intAttr != 0 && chaAttr != 0) {
		var confAttr = confirm("Are you Sure?\nSTR: " + strAttr + "\nDEX: " + dexAttr + "\nCON: " + conAttr + "\nWIS: " + wisAttr + "\nINT: " + intAttr + "\nCHA: " + chaAttr);
		if (confAttr) {


//                     Tb.          Tb.                                
//                     :$$b.        $$$b.                              
//                     :$$$$b.      :$$$$b.                            
//                     :$$$$$$b     :$$$$$$b                           
//                      $$$$$$$b     $$$$$$$b                          
//                      $$$$$$$$b    :$$$$$$$b                         
//                      :$$$$$$$$b---^$$$$$$$$b                        
//                      :$$$$$$$$$b        ""^Tb                       
//                       $$$$$$$$$$b    __...__`.                      
//                       $$$$$$$$$$$b.g$$$$$$$$$pb                     
//                       $$$$$$$$$$$$$$$$$$$$$$$$$b                    
//                       $$$$$$$$$$$$$$$$$$$$$$$$$$b                   
//                       :$$$$$$$$$$$$$$$$$$$$$$$$$$;                  
//                       :$$$$$$$$$$$$$^T$$$$$$$$$$P;                  
//                       :$$$$$$$$$$$$$b  "^T$$$$P' :           
//                       :$$$$$$$$$$$$$$b._.g$$$$$p.db                 
//                       :$$$$$$$$$$$$$$$$$$$$$$$$$$$$;                
//                       :$$$$$$$$"""^^T$$$$$$$$$$$$P^;            Pay attention.       
//                       :$$$$$$$$       ""^^T$$$P^'  ;         A massive calamity is       
//                       :$$$$$$$$    .'       `"     ;            about to trans-    
//                       $$$$$$$$;   /                :                pire!
//                       $$$$$$$$;           .----,   :                
//                       $$$$$$$$;         ,"          ;               
//                       $$$$$$$$$p.                   |               
//                      :$$$$$$$$$$$$p.                :               
//                      :$$$$$$$$$$$$$$$p.            .'               
//                      :$$$$$$$$$$$$$$$$$$p...___..-"                 
//                      $$$$$$$$$$$$$$$$$$$$$$$$$;                     
//   .db.          bug  $$$$$$$$$$$$$$$$$$$$$$$$$$                     
//  d$$$$bp.            $$$$$$$$$$$$$$$$$$$$$$$$$$;                    
// d$$$$$$$$$$pp..__..gg$$$$$$$$$$$$$$$$$$$$$$$$$$$                    
//d$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$p._            .gp. 
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$p._.cuz._.batman


			
			logAllModifiers();					// Calculates all Ability Modifiers and Logs in Global Variables
			logMscSkModifiers();				// Shows all Racial Skill Misc Modifiers (and other racial bonuses) and re-calculates ability modifiers.
			addAbModifiers();					// Displays all Ability Modifiers in Skills Section
			showClassSkills();					// Calculates Skill Points. Shows all Class Skills
			logAllSavingThrows();				// Calculate Saving Throws and Base Attack Bonus. They Don't Display immediately.
			

			
			document.getElementById("apply-all").style.display = "none"; // disable to "prevent" cheating.
		} else {
			// Allow for further changes. Exit function.
		}
	} else {
		alert("An error occured. Verify that no Attributes are Duplicated.");
	}
}

// here the selRace function calls on logMscSkModifiers to update Misc Modifiers (and other variables) with Racial Bonuses
var logMscSkModifiers = function() {
	
	switch (window.selRace) {
	case "HUMAN":
		alert("Select Ability Score to Increase.");
		var list = document.getElementsByClassName("add-one-attribute");
			for ( var i = 0 ; i < list.length ; i++ ) {
			list[i].style.display = "inline";
		}

		// Humans have no innate misc skill modifiers
	break;
	case "DWARF":
		alert("Dwarf: \nCON + 2\nWIS + 2 \nCHA - 2");
		window.conAttr += 2;
		window.wisAttr += 2;
		window.chaAttr -= 2;
		logAllModifiers();
	break;
	case "ELF":
		alert("Elf: \nDEX + 2 \nINT + 2 \nCON - 2");
		window.dexAttr += 2;
		window.intAttr += 2;
		window.conAttr -= 2;
		logAllModifiers();
		
		document.getElementById("ms-perc").innerHTML = 2;
		
	break;
	case "GNOME":
		alert("Gnome: \nCON + 2 \nCHA + 2 \nSTR - 2");
		window.conAttr += 2;
		window.chaAttr += 2;
		window.strAttr -= 2;
		logAllModifiers();
		document.getElementById("ms-stea").innerHTML = 4;
		document.getElementById("ms-perc").innerHTML = 2;
		// Also, choose 1 Craft OR Profession. 
	break;
	case "HALF-ELF":
		alert("Select Ability Score to Increase. Bonus Feat: Skill Focus. Bonus favored Class.");
		skillFocus("Skill Focus");
		document.getElementById("ms-perc").innerHTML = 2;
		var list = document.getElementsByClassName("add-one-attribute");
			for ( var i = 0 ; i < list.length ; i++ ) {
			list[i].style.display = "inline";
		}

	break;
	case "HALF-ORC":
		alert("Select Ability Score to Increase.");
		document.getElementById("ms-inti").innerHTML = 2;
		logAllModifiers();
	break;
	case "HALFLING":
		alert("Halfling: \nDEX +2 \nCHA +2 \nSTR -2");
		window.dexAttr += 2;
		window.chaAttr += 2;
		window.strAttr -= 2;
		logAllModifiers();
		
		document.getElementById("ms-perc").innerHTML = 2;
		document.getElementById("ms-acro").innerHTML = 2;
		document.getElementById("ms-clim").innerHTML = 2;
		// +1 on ALL saving throws. 



	break;
	case "NewBlankRace":
		// A placeholder for future racial additions. 
		//
		// This is the first place (in order of execution) where the value of window.selRace affects subsequent calculations. 
		//
	break;
	}
	
	// Now that the switch is done, and every score is in its final state, let's show them.
	document.getElementById("final-str").innerHTML = window.strAttr;
	document.getElementById("final-str-mod").innerHTML = ("+ " + window.strMod);
	document.getElementById("final-dex").innerHTML = window.dexAttr;
	document.getElementById("final-dex-mod").innerHTML = ("+ " + window.dexMod);
	document.getElementById("final-con").innerHTML = window.conAttr;
	document.getElementById("final-con-mod").innerHTML = ("+ " + window.conMod);
	document.getElementById("final-wis").innerHTML = window.wisAttr;
	document.getElementById("final-wis-mod").innerHTML = ("+ " + window.wisMod);
	document.getElementById("final-int").innerHTML = window.intAttr;
	document.getElementById("final-int-mod").innerHTML = ("+ " + window.intMod);
	document.getElementById("final-cha").innerHTML = window.chaAttr;
	document.getElementById("final-cha-mod").innerHTML = ("+ " + window.chaMod);
	
}

var addOneAbilityScore = function(whichScore) {
	window[whichScore] += 2;

	logAllModifiers();
	document.getElementById("final-str").innerHTML = window.strAttr;
	document.getElementById("final-str-mod").innerHTML = ("+ " + window.strMod);
	document.getElementById("final-dex").innerHTML = window.dexAttr;
	document.getElementById("final-dex-mod").innerHTML = ("+ " + window.dexMod);
	document.getElementById("final-con").innerHTML = window.conAttr;
	document.getElementById("final-con-mod").innerHTML = ("+ " + window.conMod);
	document.getElementById("final-wis").innerHTML = window.wisAttr;
	document.getElementById("final-wis-mod").innerHTML = ("+ " + window.wisMod);
	document.getElementById("final-int").innerHTML = window.intAttr;
	document.getElementById("final-int-mod").innerHTML = ("+ " + window.intMod);
	document.getElementById("final-cha").innerHTML = window.chaAttr;
	document.getElementById("final-cha-mod").innerHTML = ("+ " + window.chaMod);

	var list = document.getElementsByClassName("add-one-attribute");
	for ( var i = 0 ; i < list.length ; i++ ) {
		list[i].style.display = "none";
	}

}




// -------------------------------------------------------------------
// COMPILE SKILL RANKS AND ABILITY SCORES
// -------------------------------------------------------------------

// Comment here.
// These 3 functions calculate and display the Character's Skills data.
// Class Skill status affects Max Ranks and Point Cost per Rank.
// ---

var whichSkillFunction = function(basePoints) {
	if (window.intMod > 0) {
		var skillPoints = ( (basePoints + window.intMod) );
	} else {
		var skillPoints = (basePoints );
	}
	
	if (window.selRace === "HUMAN") {
		var totalSkillPoints = skillPoints + 1;
	} else {
		var totalSkillPoints = skillPoints;
	}
			// "NewBlankRace"
			// A placeholder for future class additions. 
			//
			// This is the SECOND place (in order of execution) where the value of window.selRace affects subsequent calculations. 
			// 
	
	
	
	document.getElementById("sk-points-starting").innerHTML = ("Total Skill Points: " + totalSkillPoints); 
	window.skPts = totalSkillPoints;
	alert("Total Skill Points Calculated: " + window.skPts);
}
	
	
var calculateSkillPoints = function () {
	
	switch (window.selClass) {
		case "CLERIC":
		case "FIGHTER":
		case "PALADIN":
		case "SORCERER":
		case "WIZARD":
			whichSkillFunction(2);
		break;
		case "BARBARIAN":
		case "DRUID":
		case "MONK":
			whichSkillFunction(4);
		break;
		case "BARD":
		case "RANGER":
			whichSkillFunction(6);
		break;
		case "ROGUE":
			whichSkillFunction(8);
		break;
		case "NewBlankClass":
			// A placeholder for future class additions. 
			//
			// This is the SECOND place (in order of execution) where the value of window.selClass affects subsequent calculations. 
			// 
		break;
	}
}

var showClassSkills = function() {
	
	calculateSkillPoints();
	
	//First, basic data input based on class (first function above)
	switch (window.selClass) {
		case "BARBARIAN":
			
			window.allSkillsBool = new Array(true,	false,	false,	true, 	false,	false, 	false,	false,	false,	false,	true,	false,	true,	true, 	false,	true,	false, 	false, 	true,	true, 	false,	false,	false,	true,	true, 	false);
		break;
		case "BARD":
			window.allSkillsBool = new Array(true, 	true, 	true, 	true, 	true, 	true, 	false, 	true, 	true, 	false, 	false, 	false, 	true, 	true, 	true, 	true, 	true, 	true, 	false, 	true, 	true, 	true, 	true, 	false, 	false, 	true);
		break;
		case "CLERIC":
			window.allSkillsBool = new Array(false,	true,	false,	false,	true, 	true, 	false,	false, 	false,	false,	false,	true,	false,	true,	true, 	false,	false,	true, 	false,	true, 	false,	true,	false,	false,	false,	false);
		break;
		case "DRUID":
			//align with booleans below 	"acro",	"appr", "bluf", "clim", "craf", "dipl", "disa", "disg", "esca", "fly",	"hand", "heal", "inti", "know", "ling", "perc", "perf", "prof", "ride", "sens", "slei", "spel", "stea", "surv", "swim", "usem"
			window.allSkillsBool = new Array(false,	false,	false,	false,	true, 	true, 	false,	true, 	false,	false,	false,	false,	false,	true, 	true, 	false,	false,	false,	true, 	false,	false,	false,	false,	true, 	true, 	false,	false,	false,	true, 	true, 	true, 	true, 	false,	false,	false);
		break;
		case "FIGHTER":
			// data input was manual for testing rather than from /docs/base%20skills%20booleans.js file, so there are spaces instead of tabs.
			window.allSkillsBool = new Array(false, false, false, true,  false, true,  false, false, false, false, false, false, false, true,  false, false, true,  true,  false, false, false, false, false, false, true,  false, false, false, false, false, false, true,  false, false, false);
		break;
		case "MONK":
			window.allSkillsBool = new Array(false,	true, 	false,	true, 	true, 	true, 	false,	true, 	false,	false,	true, 	false,	false,	false,	false,	true, 	false,	true, 	true, 	true, 	true, 	false,	true, 	true, 	false,	false,	true, 	false,	false,	true, 	false,	true, 	true, 	false,	false);
		break;
		case "PALADIN":
			window.allSkillsBool = new Array(false,	false,	false,	false,	true, 	true, 	false,	true, 	false,	false,	false,	false,	false,	true, 	true, 	false,	false,	false,	true, 	false,	false,	false,	false,	true, 	true, 	false,	true, 	false,	false,	false,	false,	false,	false,	false,	false);
		break;
		case "RANGER":
			window.allSkillsBool = new Array(false,	false,	false,	true, 	true, 	true, 	false,	true, 	false,	false,	false,	false,	false,	true, 	true, 	true, 	false,	true, 	true, 	true, 	true, 	false,	false,	true, 	true, 	true, 	false,	false,	false,	true, 	true, 	true, 	false,	false,	true);
		break;
		case "ROGUE":
			window.allSkillsBool = new Array(true, 	true, 	true, 	true, 	false,	true, 	true, 	true, 	true, 	true, 	true, 	true, 	true, 	false,	false,	true, 	true, 	true, 	true, 	true, 	true, 	true, 	true, 	true, 	false,	true, 	true, 	true, 	false,	true, 	false,	true, 	true, 	true, 	true);
		break;
		case "SORCERER":
			window.allSkillsBool = new Array(false,	false,	true, 	false,	true, 	true, 	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	true, 	false,	false,	false,	false,	true, 	false,	false,	false,	false,	true, 	false,	false,	false,	false,	false,	false);
		break;
		case "WIZARD":
			window.allSkillsBool = new Array(false,	false,	false,	false,	true, 	true, 	true, 	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	true, 	false,	false,	false,	false,	true, 	false,	false,	false,	false,	true, 	false,	false,	false,	false,	false,	false);
		break;
		case "NewBlankClass":
			// A placeholder for future class additions. 
			//
			// This is the first place (in order of execution) where the value of window.selClass affects subsequent calculations. 
			// 
		break;
	}

	// var allSkillsString = new Array("appr", "bala", "bluf", "clim", "conc", "craf", "deci", "dipl", "disa", "disg", "esca", "forg", "gath", "hand", "heal", "hide", "inti", "jump", "know", "list", "move", "open", "perf", "prof", "ride", "sear", "sens", "slei", "spel", "spot", "surv", "swim", "tumb", "usem", "user");
	
	for ( var i = 0 ; i < 35 ; i++) {
		if (window.allSkillsBool[i]) {
			document.getElementById("c-" + window.skillsList[i] ).innerHTML = "3" ;
		} else {
			document.getElementById("c-" + window.skillsList[i] ).innerHTML = "-";
		}
	}
}	


var updateSavingThrows = function(fortSave, reflSave, willSave, baseAttack, hitPoints) {
	/*
	window.forSave = (fortSave + window.conMod);
	window.refSave = (reflSave + window.dexMod);
	window.wilSave = (willSave + window.wisMod);
	*/
	window.forSave = (fortSave);
	window.refSave = (reflSave);
	window.wilSave = (willSave);
	window.baseAttackBonus = baseAttack; 
	window.hitPoints = hitPoints + window.conMod;

	alert( "Base Attack Bonus: +" + window.baseAttackBonus + "\nBase Saving Thows: \nFOR: +" + window.forSave + "\nREF: +" + window.refSave + "\nWIL: +" + window.wilSave + "\nHit Points: " + window.hitPoints );
}



var logAllSavingThrows = function() {
	
	switch (window.selClass) {
		case "CLERIC":
		case "DRUID":
			updateSavingThrows(2, 0, 2, 0, 8);
		break;
		case "SORCERER":
		case "WIZARD":
			updateSavingThrows(0, 0, 2, 0, 4);
		break;
		case "BARBARIAN":
			updateSavingThrows(2, 0, 0, 1, 12)
		break;
		case "FIGHTER":
		case "PALADIN":
			updateSavingThrows(2, 0, 0, 1, 10);
		break;
		case "MONK":
			updateSavingThrows(2, 2, 2, 0, 8);
		break;
		case "BARD":
			updateSavingThrows(0, 2, 2, 0, 6);
		break;
		case "RANGER":
			updateSavingThrows(2, 2, 0, 1, 8);
		break;
		case "ROGUE":
			updateSavingThrows(0, 2, 0, 0, 6);
		break;
		case "NewBlankClass":
			// A placeholder for future class additions. 
			//
			// This is the SECOND place (in order of execution) where the value of window.selClass affects subsequent calculations. 
			// 
		break;
	}

	

}

var addSkill = function() {
	window.blankCounter += 1;
	switch (document.getElementById("wrin-skill-select-" + window.blankCounter).value) {
		case "craft":
			window.blankCraftCounter += 1;
			document.getElementById("wrin-craft-" + window.blankCraftCounter).style.display = "block" ;
			document.getElementById("print-wrin-craft-" + window.blankCraftCounter).innerHTML = "Craft: " + document.getElementById("blank-subtype-" + window.blankCounter).value ;
			if (document.getElementById("wrin-inclass-" + window.blankCounter).value === "true") {

				var rankPoints = Number(document.getElementById("bla" + Number(35 + window.blankCounter) ).value );
				// alert("defined rankpoiunts okay");
			} else {
				var rankPoints = Number(document.getElementById("bla" + Number(35 + window.blankCounter) ).value ) / 2;
			}
			document.getElementById("print-wrin-craft-total-" + window.blankCraftCounter).innerHTML = "+ " + Number(rankPoints + Number(document.getElementById("wrin-skill-abmod-" + window.blankCounter).value ) + Number(document.getElementById("wrin-skill-misc-" + window.blankCounter).value ) ) ; 
			
		break;
		case "knowledge":
									alert("Only Craft: [subtype] skills work at this point. Pending update.");
		break;
		case "perform":
									alert("Only Craft: [subtype] skills work at this point. Pending update.");
		break;
		case "profession":
									alert("Only Craft: [subtype] skills work at this point. Pending update.");
		break;
		case "writein":
									alert("Only Craft: [subtype] skills work at this point. Pending update.");
		break;

	}

	document.getElementById("wrin-skill-submit-" + window.blankCounter).style.display = "none" ;

}

var calcPoints = function(form) {

	window.inacro = form.in_acro.value;
	window.inappr = form.in_appr.value;

	window.inbluf = form.in_bluf.value;
	window.inclim = form.in_clim.value;

	window.incraf = form.in_craf.value;

	window.indipl = form.in_dipl.value;
	window.indisa = form.in_disa.value;
	window.indisg = form.in_disg.value;
	window.inesca = form.in_esca.value;
	window.infly  = form.in_fly.value;

	window.inhand = form.in_hand.value;
	window.inheal = form.in_heal.value;
//	window.inhide = form.in_hide.value;
	window.ininti = form.in_inti.value;
//	window.injump = form.in_jump.value;
	window.inknow = form.in_know.value;
	window.inling = form.in_ling.value;
	window.inperc = form.in_perc.value;
//	window.inopen = form.in_open.value;
	window.inperf = form.in_perf.value;
	window.inprof = form.in_prof.value;
	window.inride = form.in_ride.value;
//	window.insear = form.in_sear.value;
	window.insens = form.in_sens.value;
	window.inslei = form.in_slei.value;
	window.inspel = form.in_spel.value;
	window.instea = form.in_stea.value;
	window.insurv = form.in_surv.value;
	window.inswim = form.in_swim.value;
//	window.intumb = form.in_tumb.value;
	window.inusem = form.in_usem.value;
//	window.inuser = form.in_user.value;
	window.inbla1 = Number(document.getElementById("bla27").value );
	// window.inbla2 = form.in_bla2.value;
	// window.inbla3 = form.in_bla3.value;

	// var skillsList = 	["appr", 	"bala", 	"bluf", 	"clim", 	"conc", 	"craf", 	"deci", 	"dipl", 	"disa", 	"disg", 	"esca", 	"forg", 	"gath", 	"hand", 	"heal", 	"hide", 	"inti", 	"jump", 	"know", 	"list", 	"move", 	"open", 	"perf", 	"prof", 	"ride", 	"sear", 	"sens", 	"slei", 	"spel", 	"spot", 	"surv", 	"swim", 	"tumb", 	"usem", 	"user"]; // 	"bla1", 	"bla2", 	"bla3" 
	// var whichModList = 	["int", 	"dex", 		"cha", 		"str", 		"con", 		"int", 		"int", 		"cha", 		"int", 		"cha", 		"dex", 		"int", 		"cha", 		"cha", 		"wis", 		"dex", 		"cha", 		"str", 		"int", 		"wis", 		"dex", 		"dex", 		"cha", 		"wis", 		"dex", 		"int", 		"wis", 		"dex", 		"int", 		"wis", 		"wis", 		"str", 		"dex", 		"cha", 		"dex"];  // 	"none",		"none",		"none"
	// var untrained = [ true, 		true, 		true, 		true, 		true, 		true, 		false, 		true, 		false, 		true, 		true, 		true, 		true, 		false, 		true, 		true, 		true, 		true, 		false, 		true, 		true, 		false, 		false, 		false, 		true, 		true, 		true, 		false, 		false, 		true, 		true, 		true, 		false, 		false, 		true, 			true, 		true, 		true ]

	window.skillPointsSpent = 0;


	for ( i = 0 ; i < skillsList.length ; i++ ) {
		switch (whichModList[i]) {
			case "str": 
				var mod = window.strMod; 
			break;
			case "dex": 
				var mod = window.dexMod; 
			break;
			case "con": 
				var mod = window.conMod; 
			break;
			case "wis": 
				var mod = window.wisMod; 
			break;
			case "int": 
				var mod = window.intMod; 
			break;
			case "cha": 
				var mod = window.chaMod; 
			break;
			case "none":
				var mod = "none";
			break;
		}

		if (mod != "none") {
			if (document.getElementById("ms-" + skillsList[i] ).innerHTML === "-") {
				var misc = 0;
			} else {
				var misc = Number(document.getElementById("ms-" + skillsList[i] ).innerHTML ) ;
			}

			if (window.allSkillsBool[i]) {
				if (window["in" + window.skillsList[i] ] > 0 ) {
					var maths = 3 + Number(mod) + Number(misc) + Number(window["in" + window.skillsList[i] ] );
				} else {
					var maths = Number(mod) + Number(misc) + Number(window["in" + window.skillsList[i] ] );
				}
				document.getElementById("t-" + skillsList[i] ).innerHTML = ("+ " + maths ) ;
			} else {
				var maths = Number(mod) + Number(misc) + Number(window["in" + window.skillsList[i] ] );
				document.getElementById("t-" + skillsList[i] ).innerHTML = ("+ " + maths ) ;
			}

			window.skillPointsSpent += Number(window["in" + window.skillsList[i] ] ) ;
		} else {
			window.skillPointsSpent += Number(document.getElementById("bla" + (i + 1) ).value ) ;
		} 

		// alert("SPENT/Window.skPts: " + window.skillPointsSpent + " " + window.skPts );

	}
	// alert("it got this far");
	var dispSkillPoints = window.skPts - window.skillPointsSpent;

	document.getElementById("sk-points-starting").innerHTML = "Skill Points Remaining: " + dispSkillPoints ;

}


/*
if (untrained[i] === true) {
			document.getElementById("pr-" + skillsList[i]).innerHTML = document.getElementById("t-" + skillsList[i]).innerHTML ;
		} else if ( (window["in" + skillsList[i] ] ) > 0 ) {
			document.getElementById("pr-" + skillsList[i]).innerHTML = document.getElementById("t-" + skillsList[i]).innerHTML ;
		} else {
			document.getElementById("pr-" + skillsList[i]).innerHTML = " " ;
		}
*/





var addAbModifiers = function() {
	// alert("function begin");
	var listStr = document.getElementsByClassName("am-str");
	for ( var i = 0 ; i < listStr.length ; i++ ) {
		listStr[i].innerHTML = ("+ " + window.strMod);
	}
	var listDex = document.getElementsByClassName("am-dex");
	for ( var i = 0 ; i < listDex.length ; i++ ) {
		listDex[i].innerHTML = ("+ " + window.dexMod);
	}
	var listCon = document.getElementsByClassName("am-con");
	for ( var i = 0 ; i < listCon.length ; i++ ) {
		listCon[i].innerHTML = ("+ " + window.conMod);
	}
	var listWis = document.getElementsByClassName("am-wis");
	for ( var i = 0 ; i < listWis.length ; i++ ) {
		listWis[i].innerHTML = ("+ " + window.wisMod);
	}
	var listInt = document.getElementsByClassName("am-int");
	for ( var i = 0 ; i < listInt.length ; i++ ) {
		listInt[i].innerHTML = ("+ " + window.intMod);
	}
	var listCha = document.getElementsByClassName("am-cha");
	for ( var i = 0 ; i < listCha.length ; i++ ) {
		listCha[i].innerHTML = ("+ " + window.chaMod);
	}
}




var acceptSkills = function() {
	if (window.skPtsRemaining === 0) {
		var confirmAccSk = confirm("Are you sure you are finished allocating skill points?");
	} else if (window.skPtsRemaining > 0) {
		var confirmAccSk = confirm("You have unused skill points\nAre you sure you want to proceed?");
	} else {
		var confirmAccSk = confirm("You have used too many skill points\nAre you sure you want to proceed?");
	}
	
	if (confirmAccSk) {
		// Move on to next section.
	}
}








var selectFeat = function(featName) {
	var confirmF = confirm("Select " + featName + "?");
	if (confirmF) {
		var featsRemaining = document.getElementById("feats-remaining").innerHTML ;
		var featsRemaining = Number(featsRemaining);
		if ( featsRemaining > 0) {
			featsRemaining -= 1;
			document.getElementById("feats-remaining").innerHTML = featsRemaining;
			window.numOfFeats += 1;
			document.getElementById("feat-name-" + window.numOfFeats ).innerHTML = featName ;
		} else {
			var confirmR = confirm("You have no more feats available. Suffer the wrath of your DM and continue anyway?");
			if (confirmR) {
				featsRemaining -= 1;
				document.getElementById("feats-remaining").innerHTML = featsRemaining;
				window.numOfFeats += 1;
				document.getElementById("feat-name-" + window.numOfFeats ).innerHTML = featName ;
			}
		}			
	}
}

var weaponFeat = function(featName) {
	var confirmW = confirm("Select " + featName + "?");
	if (confirmW) {
		var featsRemaining = document.getElementById("feats-remaining").innerHTML ;
		var featsRemaining = Number(featsRemaining);
		
		if ( featsRemaining > 0) {
			featsRemaining -= 1;
			document.getElementById("feats-remaining").innerHTML = featsRemaining;
			window.numOfFeats += 1;
			var featTarget = prompt("Which weapon will this feat affect?");
			document.getElementById("feat-name-" + window.numOfFeats ).innerHTML = ( featName + " (" + featTarget + ") " ) ;
		} else {
			var confirmR = confirm("You have no more feats available. Suffer the wrath of your DM and continue anyway?");
			if (confirmR) {
				featsRemaining -= 1;
				document.getElementById("feats-remaining").innerHTML = featsRemaining;
				window.numOfFeats += 1;
				var featTarget = prompt("Which weapon will this feat affect?");
				document.getElementById("feat-name-" + window.numOfFeats ).innerHTML = ( featName + " (" + featTarget + ") " ) ;
			}
		}		
	}
}

var skillFocus = function(featName) {

	var confirmW = confirm("Select Skill Focus?");
	if (confirmW) {
		var featsRemaining = document.getElementById("feats-remaining").innerHTML ;
		var featsRemaining = Number(featsRemaining);
		
		if ( featsRemaining > 0) {
			featsRemaining -= 1;
			document.getElementById("feats-remaining").innerHTML = featsRemaining;
			window.numOfFeats += 1;
			var featTarget = prompt("Which skill will this feat affect?");
			document.getElementById("feat-name-" + window.numOfFeats ).innerHTML = ( featName + " (" + featTarget + ") " ) ;
			decodeSkillFocus(featTarget);
		} else {
			var confirmR = confirm("You have no more feats available. Suffer the wrath of your DM and continue anyway?");
			if (confirmR) {
				featsRemaining -= 1;
				document.getElementById("feats-remaining").innerHTML = featsRemaining;
				window.numOfFeats += 1;
				var featTarget = prompt("Which skill will this feat affect?");

				document.getElementById("feat-name-" + window.numOfFeats ).innerHTML = ( featName + " (" + featTarget + ") " ) ;
				
				decodeSkillFocus(featTarget);
			}
		}		
	}
}


var decodeSkillFocus = function(featTarget) {

	var skName = featTarget.toLowerCase().substring(0,4);

	// if (skName == "app" || skName == "bala" || skName == "bluf" || skName == "clim" || skName == "conc" || skName == "craf" || skName == "deci" || skName == "dipl" || skName == "disa" || skName == "disg" || skName == "esca" || skName == "forg" || skName == "gath" || skName == "hand" || skName == "heal" || skName == "hide" || skName == "inti" || skName == "jump" || skName == "know" || skName == "list" || skName == "move" || skName == "open" || skName == "perf" || skName == "prof" || skName == "ride" || skName == "sear" || skName == "sens" || skName == "slei" || skName == "spel" || skName == "spot" || skName == "surv" || skName == "swim" || skName == "tumb" || skName == "usem" || skName == "user" ) {
	if (skName == "acro" || skName == 	"appr" || skName ==  	"bluf" || skName ==  	"clim" || skName ==  	"craf" || skName ==  	"dipl" || skName ==  	"disa" || skName ==  	"disg" || skName ==  	"esca" || skName ==  	"fly" || skName == 	 	"hand" || skName ==  	"heal" || skName ==  	"inti" || skName ==  	"know" || skName ==  	"ling" || skName ==  	"perc" || skName ==  	"perf" || skName ==  	"prof" || skName ==  	"ride" || skName ==  	"sens" || skName ==  	"slei" || skName ==  	"spel" || skName ==  	"stea" || skName ==  	"surv" || skName ==  	"swim" || skName ==  	"use" || skName ==  	"bla1" ) { 	
		var msVariable = document.getElementById("ms-" + skName).innerHTML;

		if (msVariable === "-") {
			document.getElementById("ms-" + skName).innerHTML = 3;
		} else {
			var skillMisc = Number(document.getElementById("ms-" + skName).innerHTML);
			skillMisc += 3;
			document.getElementById("ms-" + skName).innerHTML = skillMisc;
		}
		

		// document.getElementById("ms-" + skName).innerHTML = 3;
	} else {
		var tryAgain = confirm(featTarget + " was not recognized. Press Okay to log it as a write-in. Press cancel to try again.");
		if (tryAgain) {
			// Log it as a write in. 
			alert("The code to do this has not been written.");
		} else {

			skillFocus("Skill Focus");
		}
	}

}






// OK OK I KNOW. THIS IS OVERLY COMPLEX. I'M TRYING TO TAKE INTO ACCOUNT WHETHER OTHER MISC. MODIFIERS 
// WILL BE ADDED LATER. MAYBE 1'S OR 3'S. HALF ELFS EVEN HAVE SOME ONES. SO ITS EXPANDABLE. 

var featUpdateSkill = function(featName) {

	var confirmF = confirm("Select " + featName + "?");
	if (confirmF) {
		var featsRemaining = Number(document.getElementById("feats-remaining").innerHTML ) ;

		if ( featsRemaining > 0) {
			featsRemaining -= 1;
			var confirmR = true;
			document.getElementById("feats-remaining").innerHTML = featsRemaining;
			window.numOfFeats += 1;
			document.getElementById("feat-name-" + window.numOfFeats ).innerHTML = featName ;
		} else {
			var confirmR = confirm("You have no more feats available. Suffer the wrath of your DM and continue anyway?");
			if (confirmR) {
				featsRemaining -= 1;
				document.getElementById("feats-remaining").innerHTML = featsRemaining;
				window.numOfFeats += 1;
				document.getElementById("feat-name-" + window.numOfFeats ).innerHTML = featName ;
			}
		}			
	}

	if (confirmF === true && confirmR === true) {

		switch(featName) {
			case "Acrobatic":
				featUpdateSkillTwin("acro");
				featUpdateSkillTwin("fly");
			break;
		/*	case "Agile":
				featUpdateSkillTwin("bala");
				featUpdateSkillTwin("esca");
			break; */
			case "Alertness":
				featUpdateSkillTwin("perc");
				featUpdateSkillTwin("sens");
			break;
			case "Animal Affinity":
				featUpdateSkillTwin("hand");
				featUpdateSkillTwin("ride");
			break;
			case "Athletic":
				featUpdateSkillTwin("clim");
				featUpdateSkillTwin("swim");
			break;
			case "Deceitful":
				featUpdateSkillTwin("disg");
				featUpdateSkillTwin("bluf");
			break;
			case "Deft Hands":
				featUpdateSkillTwin("slei");
				featUpdateSkillTwin("disa");
			break;
		/*	case "Diligent":
				featUpdateSkillTwin("appr");
				featUpdateSkillTwin("deci");
			break; 
			case "Investigator":
				featUpdateSkillTwin("gath");
				featUpdateSkillTwin("sear");
			break; */
			case "Magical Aptitude":
				featUpdateSkillTwin("spel");
				featUpdateSkillTwin("usem");
			break;
		/*	case "Negotiator":
				featUpdateSkillTwin("dipl");
				featUpdateSkillTwin("sens");
			break;
			case "Nimble Fingers":
				featUpdateSkillTwin("disa");
				featUpdateSkillTwin("open");
			break; */
			case "Persuasive":
				featUpdateSkillTwin("dipl");
				featUpdateSkillTwin("inti");
			break;
			case "Self-Sufficient":
				featUpdateSkillTwin("heal");
				featUpdateSkillTwin("surv");
			break;
			case "Stealthy":
				featUpdateSkillTwin("esca");
				featUpdateSkillTwin("stea");
			break;
			case "Weapon Finesse":
				alert("Melee Attack Modifier has been changed to DEX.");
				window.weaponFinesse = true;
			break;
			case "Improved Initiative":
				window.improvedInitiative = true;
			break;
			case "Great Fortitude":
				window.greatFortitude = true;
			break;
			case "Iron Will":
				window.ironWill = true;
			break;
			case "Lightening Reflexes":
				window.lighteningReflexes = true;
			break;
			case "Toughness":
				window.toughness = true;
			break;

		}
		// document.getElementById("ms-clim").innerHTML = 2;
		
	}
}

var featUpdateSkillTwin = function(featShortCode) {
	var featUpdateMiscMod = document.getElementById("ms-" + featShortCode).innerHTML ;
	if (featUpdateMiscMod === "-") { 
		document.getElementById("ms-" + featShortCode).innerHTML = 2; 
	} else {
		featUpdateMiscMod = Number(featUpdateMiscMod);
		featUpdateMiscMod += 2;
		document.getElementById("ms-" + featShortCode).innerHTML = featUpdateMiscMod; 
	}
}







//	Treat	PLATINUM		=	1000
// 			GOLD 		= 	100
// 			SILVER 		= 	10
//			COPPER		=	1
//	

var calculateGold = function(mxFactor, fMonks) {	
	var startingGold = 0;
	for ( i = 0 ; i < mxFactor ; i++ ) {	// Roll a d4 [mxFactor] times.
		startingGold += ( Math.floor( Math.random() * 4 + 1) * fMonks ) * 100; // Calculate Number of Coppers in Possession. 
	}
	document.getElementById("copper-remaining").innerHTML = startingGold; // Display.
	document.getElementById("roll-starting-gold").style.display = "none" ; // Remove button to prevent repeats. 
}




var rollStartingGold = function () {
	switch (window.selClass) {
		
		case "DRUID":
			calculateGold(2, 10);
		break;
		
		case "SORCERER":
		case "WIZARD":
			calculateGold(3, 10);
		break;
		case "BARD":
		case "BARBARIAN":
			calculateGold(4, 10);
		break;
		case "CLERIC":
		case "ROGUE":
			calculateGold(5, 10);
		break;
		
		case "FIGHTER":
		case "PALADIN":
		case "RANGER":
			calculateGold(6, 10);
		break;
		case "MONK":
			calculateGold(5, 1);
		break;
		case "NewBlankClass":
			// A placeholder for future class additions. 
			//
			// This is the SECOND place (in order of execution) where the value of window.selClass affects subsequent calculations. 
			// 
		break;
	}
}


var buyItem = function(itemName, itemCost, itemWeight) {

	// alert("window item item-purchase-no :" + window.itemPurchaseNo);
	
	var goldRemaining = Number( document.getElementById("copper-remaining").innerHTML ) ;

	if (itemCost <= goldRemaining) {
		goldRemaining = goldRemaining - itemCost ;
		document.getElementById("copper-remaining").innerHTML = goldRemaining ;

		window.itemPurchaseNo += 1;
		document.getElementById("item-purchase-no-" + window.itemPurchaseNo).innerHTML = itemName ;
		document.getElementById("item-purchase-no-" + window.itemPurchaseNo).style.display = "block" ;
		
		var totalWeight = Number(document.getElementById("total-weight").innerHTML);
		totalWeight += itemWeight;
		document.getElementById("total-weight").innerHTML = totalWeight;
		
		buySpecialItem(itemName, window.itemPurchaseNo);
		
		
	} else {
		alert("You cannot afford this item.") ;
	}
}

var buyItemStack = function(itemQty, itemName, itemCost, itemWeight) {
	var goldRemaining = Number( document.getElementById("copper-remaining").innerHTML ) ;

	if (itemCost <= goldRemaining) {
		goldRemaining = goldRemaining - itemCost ;
		document.getElementById("copper-remaining").innerHTML = goldRemaining ;
		
		var itemQuantity = Number(document.getElementById("qty-" + itemName).innerHTML );
				
		itemQuantity += itemQty ;

		document.getElementById("item-" + itemName).innerHTML = itemName ;
		document.getElementById("item-" + itemName).style.display = "block" ;
		
		document.getElementById("qty-" + itemName).innerHTML = itemQuantity ;
		document.getElementById("qty-" + itemName).style.display = "block" ;
			
		var totalWeight = Number(document.getElementById("total-weight").innerHTML);
		totalWeight += itemWeight;
		document.getElementById("total-weight").innerHTML = totalWeight;
		
	} else {
		alert("You cannot afford this item.") ;
	}
}


var buySpecialItem = function(itemName, itemNumber) {
	switch (itemName) { 
	case "Composite Longbow":			
		var confirmBow = prompt("Composite bows take a STR bonus. \n Input desired STR bonus. Cost is +100gp (10,000 CP) per point. \n Input a number.") ;
		goldRemaining = Number( document.getElementById("copper-remaining").innerHTML ) ;
		goldRemaining = goldRemaining - ( Number(confirmBow) * 10000 ) ;
		document.getElementById("item-purchase-no-" + itemNumber ).innerHTML = itemName + " (+" + confirmBow + ")" ;		
		document.getElementById("copper-remaining").innerHTML = goldRemaining ;
		
	break;		
	case "Composite Shortbow":
		var confirmBow = prompt("Composite bows take a STR bonus. \n Input desired STR bonus. Cost is +75gp (7,500 CP) per point. \n Input a number.") ;
		goldRemaining = Number( document.getElementById("copper-remaining").innerHTML ) ;
		goldRemaining = goldRemaining - ( Number(confirmBow) * 7500 ) ;
		document.getElementById("item-purchase-no-" + itemNumber ).innerHTML = itemName + " (+" + confirmBow + ")" ;		
		document.getElementById("copper-remaining").innerHTML = goldRemaining ;
	break;	
	}
}

var buyWeapon = function(weaponName, itemCost, itemWeight, dmg, crit, rang, type, size, reach, hardness, hp, saves, exs) {
	
	var goldRemaining = Number( document.getElementById("copper-remaining").innerHTML ) ;

	if (itemCost <= goldRemaining) {
		goldRemaining = goldRemaining - itemCost ;
		document.getElementById("copper-remaining").innerHTML = goldRemaining ;

		window.itemPurchaseNo += 1;
		document.getElementById("item-purchase-no-" + window.itemPurchaseNo).innerHTML = weaponName ;
		document.getElementById("item-purchase-no-" + window.itemPurchaseNo).style.display = "block" ;
		
		var totalWeight = Number(document.getElementById("total-weight").innerHTML);
		totalWeight += itemWeight;
		document.getElementById("total-weight").innerHTML = totalWeight;
	

		if (window.weaponSlotOne === undefined) {
			var confirmWa = confirm("Do you want to equip this weapon in slot one?");
		} else if (window.weaponSlotTwo === undefined) {
			var confirmWb = confirm("Do you want to equip this weapon in slot two?");
		} else if (window.weaponSlotThree === undefined) {
			var confirmWc = confirm("Do you want to equip this weapon in slot three?");
		} else {
			alert("You have no more open weapon slots. User-added weapon slots are not supported in this version.");
		}

		if (confirmWa) {
			window.wSlotOne = new weaponSlot(weaponName, itemWeight, dmg, crit, rang, type, size, reach, hardness, hp, saves, exs);
			window.weaponSlotOne = true;
		} 
		if (confirmWb) {
			window.wSlotTwo = new weaponSlot(weaponName, itemWeight, dmg, crit, rang, type, size, reach, hardness, hp, saves, exs);
			window.weaponSlotTwo = true;
		} 
		if (confirmWc) {
			window.wSlotThr = new weaponSlot(weaponName, itemWeight, dmg, crit, rang, type, size, reach, hardness, hp, saves, exs);
			window.weaponSlotThree = true;
		} 
	} else {
		alert("You cannot afford this item.") ;
	}

}


var buyArmor = function(armorName, itemCost, itemWeight, armorBonus, maxDex, check, spFail, maxSp, hardn, hp, saves, donning, exs ) {

	var goldRemaining = Number( document.getElementById("copper-remaining").innerHTML ) ;

	if (itemCost <= goldRemaining) {
		goldRemaining = goldRemaining - itemCost ;
		document.getElementById("copper-remaining").innerHTML = goldRemaining ;

		window.itemPurchaseNo += 1;
		document.getElementById("item-purchase-no-" + window.itemPurchaseNo).innerHTML = armorName ;
		document.getElementById("item-purchase-no-" + window.itemPurchaseNo).style.display = "block" ;
		
		var totalWeight = Number(document.getElementById("total-weight").innerHTML);
		totalWeight += itemWeight;
		document.getElementById("total-weight").innerHTML = totalWeight;

		if (window.armorSlot) {
			var changeArmor = confirm("You already have armor equipped. Replace " + window.aSlot.armorName + " with this?");
			if (changeArmor) {
				window.aSlot = new armor(armorName, itemWeight, armorBonus, maxDex, check, spFail, maxSp, hardn, hp, saves, donning, exs);
			}
		} else if (window.armorSlot === undefined) {
			var confirmAr = confirm("Do you want to equip this armor?");
		}

		if (confirmAr) {
			window.aSlot = new armor(armorName, itemWeight, armorBonus, maxDex, check, spFail, maxSp, hardn, hp, saves, donning);
			window.armorSlot = true;
		} 

		if (window.armorSlot) {
			document.getElementById("print-armor-bonus").innerHTML = window.aSlot.arBonus;
			// Update AC on character sheet. So it ca be relied upon later for calculations during population. 
		}	
	} else {
		alert("You cannot afford this item.") ;
	}
}




var buyShield = function(shieldName, itemCost, itemWeight, armorBonus, maxDex, check, spFail, maxSp, hardn, hp, saves, donning ) {

	var goldRemaining = Number( document.getElementById("copper-remaining").innerHTML ) ;

	if (itemCost <= goldRemaining) {
		goldRemaining = goldRemaining - itemCost ;
		document.getElementById("copper-remaining").innerHTML = goldRemaining ;

		window.itemPurchaseNo += 1;
		document.getElementById("item-purchase-no-" + window.itemPurchaseNo).innerHTML = shieldName ;
		document.getElementById("item-purchase-no-" + window.itemPurchaseNo).style.display = "block" ;
		
		var totalWeight = Number(document.getElementById("total-weight").innerHTML);
		totalWeight += itemWeight;
		document.getElementById("total-weight").innerHTML = totalWeight;
		
		if (window.shieldSlot) {
			var changeArmor = confirm("You already have a shield equipped. Replace " + window.sSlot.shieldName + " with this?");
			if (changeArmor) {
				window.sSlot = new shield(shieldName, itemWeight, armorBonus, maxDex, check, spFail, maxSp, hardn, hp, saves, donning);
			}
		}

		if (window.shieldSlot === undefined) {
			var confirmSh = confirm("Do you want to equip this shield?");
		}

		if (confirmSh) {
			window.sSlot = new shield(shieldName, itemWeight, armorBonus, maxDex, check, spFail, maxSp, hardn, hp, saves, donning);
			window.shieldSlot = true;
		} 

		if (window.sSlot) {
			document.getElementById("print-shield-bonus").innerHTML = window.sSlot.arBonus;
			// Update AC on character sheet.
		}
		
	} else {
		alert("You cannot afford this item.") ;
	}

}







var populateCharacterSheet = function() {
	
	var formName = document.getElementById("form-name").value;
	var formPlayer = document.getElementById("form-player").value;
	var formAlignment = document.getElementById("form-alignment").value;
	
	document.getElementById("print-eyes").innerHTML = document.getElementById("form-eyes").value;
	document.getElementById("print-hair").innerHTML = document.getElementById("form-hair").value;
	document.getElementById("print-height").innerHTML = document.getElementById("form-height").value;
	document.getElementById("print-weight").innerHTML = document.getElementById("form-weight").value;
	document.getElementById("print-skin").innerHTML = document.getElementById("form-skin").value;
	document.getElementById("print-handedness").innerHTML = document.getElementById("form-handedness").value;
	document.getElementById("print-age").innerHTML = document.getElementById("form-age").value;
	document.getElementById("print-gender").innerHTML = document.getElementById("form-gender").value;
	
	
	
	document.getElementById("print-appearance").innerHTML = document.getElementById("form-appearance").value;
	document.getElementById("print-personality").innerHTML = document.getElementById("form-personality").value;
	document.getElementById("print-quote").innerHTML = document.getElementById("form-quote").value;
	document.getElementById("print-objective").innerHTML = document.getElementById("form-objective").value;
	document.getElementById("print-history").innerHTML = document.getElementById("form-history").value;
	document.getElementById("print-allies-enemies").innerHTML = document.getElementById("form-allies-enemies").value;
	document.getElementById("print-ancestry").innerHTML = document.getElementById("form-ancestry").value;
	document.getElementById("print-other-info").innerHTML = document.getElementById("form-other-info").value;
	
	
	
	
	if (window.numOfFeats > 0) {
		for (i = 1 ; i < (window.numOfFeats + 1) ; i++ ) {
			document.getElementById("print-feat-" + i ).innerHTML = document.getElementById("feat-name-" + i ).innerHTML ;
		}
	}
	
	if (window.itemPurchaseNo > 0) {
		for (i = 1 ; i < (window.itemPurchaseNo + 1) ; i++ ) {
			document.getElementById("print-item-" + i ).innerHTML = document.getElementById("item-purchase-no-" + i ).innerHTML ;
		}
	}
	
	
	
	// document.getElementById("print-appearance").innerHTML = formAppearance ;
	
	// document.getElementById("print-name").innerHTML = formName ;
	// document.getElementById("print-player").innerHTML = formPlayer ;
	
	var list = document.getElementsByClassName("print-name");
	for ( var i = 0 ; i < list.length ; i++ ) {
		list[i].innerHTML = (formName); 
	}
	
	var list = document.getElementsByClassName("print-player");
	for ( var i = 0 ; i < list.length ; i++ ) {
		list[i].innerHTML = (formPlayer); 
	}
	
	var list = document.getElementsByClassName("print-race");
	for ( var i = 0 ; i < list.length ; i++ ) {
		list[i].innerHTML = (window.selRace); 
	}
	
	var list = document.getElementsByClassName("print-class");
	for ( var i = 0 ; i < list.length ; i++ ) {
		list[i].innerHTML = (window.selClass); 
	}
	

	document.getElementById("print-alignment").innerHTML = formAlignment ;
	document.getElementById("print-class").innerHTML = window.selClass ;
	document.getElementById("print-level").innerHTML = 1 ;
	document.getElementById("print-experience").innerHTML = 0 ;
	document.getElementById("print-levelup").innerHTML = 1000 ;
	
	document.getElementById("print-ab-str").innerHTML = window.strAttr ;
	document.getElementById("print-ab-dex").innerHTML = window.dexAttr ;
	document.getElementById("print-ab-con").innerHTML = window.conAttr ;
	document.getElementById("print-ab-wis").innerHTML = window.wisAttr ;
	document.getElementById("print-ab-int").innerHTML = window.intAttr ;
	document.getElementById("print-ab-cha").innerHTML = window.chaAttr ;

	document.getElementById("print-sav-for").innerHTML = window.forSave ;
	document.getElementById("print-sav-ref").innerHTML = window.refSave ;
	document.getElementById("print-sav-wil").innerHTML = window.wilSave ;




	if (window.greatFortitude) {
		document.getElementById("print-sav-for-tot").innerHTML = ( window.forSave + window.conMod + 2 ) ;
		document.getElementById("print-sav-for-misc").innerHTML = 2;
	} else {
		document.getElementById("print-sav-for-tot").innerHTML = ( window.forSave + window.conMod ) ;
	}

	if (window.ironWill) {
		document.getElementById("print-sav-wil-tot").innerHTML = ( window.wilSave + window.wisMod + 2 ) ;
		document.getElementById("print-sav-wil-misc").innerHTML = 2;
	} else {
		document.getElementById("print-sav-wil-tot").innerHTML = ( window.wilSave + window.wisMod ) ;
	}
	
	if (window.lighteningReflexes) {
		document.getElementById("print-sav-ref-tot").innerHTML = ( window.refSave + window.dexMod + 2 ) ;
		document.getElementById("print-sav-ref-misc").innerHTML = 2;
	} else {
		document.getElementById("print-sav-ref-tot").innerHTML = ( window.refSave + window.dexMod ) ;
	}

	if (window.selRace === "HALFLING") {
		document.getElementById("print-sav-for-tot").innerHTML = ( window.forSave + window.conMod + 1 ) ;
		document.getElementById("print-sav-for-misc").innerHTML = 1;
		document.getElementById("print-sav-ref-tot").innerHTML = ( window.refSave + window.dexMod + 1 ) ;
		document.getElementById("print-sav-ref-misc").innerHTML = 1;
		document.getElementById("print-sav-wil-tot").innerHTML = ( window.wilSave + window.wisMod + 1 ) ;
		document.getElementById("print-sav-wil-misc").innerHTML = 1;
	}

	// document.getElementById("print-sav-ref-tot").innerHTML = ( window.refSave + window.dexMod ) ;
	// document.getElementById("print-sav-wil-tot").innerHTML = ( window.wilSave + window.wisMod ) ;
	// Because the totals are logged as the innerHTML of ID's, they can be accessed later
	// and updated if misc or magic modifiers affect them due to feat or other future rule additions
	// This should be done with a function calling this update to compile after this funciton
	// is finished executing. 
	if (window.toughness) {
		document.getElementById("hit-points").innerHTML = (window.hitPoints + 3);
	} else {
		document.getElementById("hit-points").innerHTML = window.hitPoints;
	}
	
	
	var listStr = document.getElementsByClassName("print-mod-str");
	for ( var i = 0 ; i < listStr.length ; i++ ) {
		listStr[i].innerHTML = ("+ " + window.strMod); }

	var listDex = document.getElementsByClassName("print-mod-dex");
	for ( var i = 0 ; i < listDex.length ; i++ ) {
		listDex[i].innerHTML = ("+ " + window.dexMod); }

	var listCon = document.getElementsByClassName("print-mod-con");
	for ( var i = 0 ; i < listCon.length ; i++ ) {
		listCon[i].innerHTML = ("+ " + window.conMod);
	}
	var listWis = document.getElementsByClassName("print-mod-wis");
	for ( var i = 0 ; i < listWis.length ; i++ ) {
		listWis[i].innerHTML = ("+ " + window.wisMod);
	}
	var listInt = document.getElementsByClassName("print-mod-int");
	for ( var i = 0 ; i < listInt.length ; i++ ) {
		listInt[i].innerHTML = ("+ " + window.intMod);
	}
	var listCha = document.getElementsByClassName("print-mod-cha");
	for ( var i = 0 ; i < listCha.length ; i++ ) {
		listCha[i].innerHTML = ("+ " + window.chaMod);
	}




	var listBab = document.getElementsByClassName("print-bab-one");
	for ( var i = 0 ; i < listBab.length ; i++ ) {
		listBab[i].innerHTML = ("+ " + window.baseAttackBonus);
	}
	



	if (window.weaponFinesse === true) {
		document.getElementById("melee-attack-mod-title").innerHTML = ( "DEX<br>MODIFIER") ;
		document.getElementById("melee-attack-mod").innerHTML = window.dexMod ;
		document.getElementById("print-attack-first-one").innerHTML = ( window.baseAttackBonus + window.dexMod ) ;
	} else {
		document.getElementById("print-attack-first-one").innerHTML = ( window.baseAttackBonus + window.strMod ) ;
		document.getElementById("melee-attack-mod").innerHTML = window.strMod ;
	}

	document.getElementById("print-ranged-first-one").innerHTML = ( window.baseAttackBonus + window.dexMod ) ;
	document.getElementById("print-grapple-tot").innerHTML = ( window.baseAttackBonus + window.strMod ) ;


	if (window.improvedInitiative === true) {
		window.iniMiscMod = 4; // This is so it can be modified later if need be. 
		document.getElementById("print-ini-misc").innerHTML = window.iniMiscMod ;
		document.getElementById("print-ini-tot").innerHTML = ( window.iniMiscMod + window.dexMod ) ;
	} else {
		document.getElementById("print-ini-tot").innerHTML = window.dexMod ;
	}
	

	

	// Now watch as I print all the skill totals
	// var skillsList = ["appr", "bala", "bluf", "clim", "conc", "craf", "deci", "dipl", "disa", "disg", "esca", "forg", "gath", "hand", "heal", "hide", "inti", "jump", "know", "list", "move", "open", "perf", "prof", "ride", "sear", "sens", "slei", "spel", "spot", "surv", "swim", "tumb", "usem", "user" ];
	// var untrained =  [true, true, true, true, true, true, false, true, false, true, true, true, true, false, true, true, true, true, false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, false, true ];
	for ( i = 0 ; i < skillsList.length ; i++ ) {
		if (untrained[i] === true) {
			document.getElementById("pr-" + skillsList[i] ).innerHTML = document.getElementById("t-" + skillsList[i] ).innerHTML ;
		} else if ( (window["in" + skillsList[i] ] ) > 0 ) {
			document.getElementById("pr-" + skillsList[i] ).innerHTML = document.getElementById("t-" + skillsList[i] ).innerHTML ;
		} else {
			document.getElementById("pr-" + skillsList[i] ).innerHTML = " " ;
		}

	}

	if ( document.getElementById("in_craf").value != 0) {
		document.getElementById("print-craft-title").innerHTML = ( "Craft: " + document.getElementById("wrin-craft").value ); 
	}
	if ( document.getElementById("in_know").value != 0) {
		document.getElementById("print-knowledge-title").innerHTML = ( "Knowledge: " + document.getElementById("wrin-knowledge").value ); 
	}
	if ( document.getElementById("in_perf").value != 0) {
		document.getElementById("print-perform-title").innerHTML = ( "Perform: " + document.getElementById("wrin-perform").value ); 
	}
	if ( document.getElementById("in_prof").value != 0) {
		document.getElementById("print-profession-title").innerHTML = ( "Profession: " + document.getElementById("wrin-profession").value ); 
	}



	calculateCarryingCapacity(window.strAttr);
	
	
	if (window.weaponSlotOne) {
		// alert("it found it true");
		document.getElementById("pr-w-s1-name").innerHTML = window.wSlotOne.wName;
		document.getElementById("pr-w-s1-weight").innerHTML = window.wSlotOne.iWeight;
		document.getElementById("pr-w-s1-dmg").innerHTML = window.wSlotOne.damage;
		document.getElementById("pr-w-s1-crit").innerHTML = window.wSlotOne.critical;
		document.getElementById("pr-w-s1-rang").innerHTML = window.wSlotOne.range;
		document.getElementById("pr-w-s1-type").innerHTML = window.wSlotOne.wType;
		document.getElementById("pr-w-s1-size").innerHTML = window.wSlotOne.wSize;
		document.getElementById("pr-w-s1-reach").innerHTML = window.wSlotOne.wReach;
		document.getElementById("pr-w-s1-hardn").innerHTML = window.wSlotOne.hardness;
		document.getElementById("pr-w-s1-hp").innerHTML = window.wSlotOne.hitPoints;
		document.getElementById("pr-w-s1-saves").innerHTML = window.wSlotOne.wSaves;
	}
	
	if (window.weaponSlotTwo) {
		// alert("it found TWO true");
		document.getElementById("weapon-slot-two").style.display = "block";
		document.getElementById("pr-w-s2-name").innerHTML = window.wSlotTwo.wName;
		document.getElementById("pr-w-s2-weight").innerHTML = window.wSlotTwo.iWeight;
		document.getElementById("pr-w-s2-dmg").innerHTML = window.wSlotTwo.damage;
		document.getElementById("pr-w-s2-crit").innerHTML = window.wSlotTwo.critical;
		document.getElementById("pr-w-s2-rang").innerHTML = window.wSlotTwo.range;
		document.getElementById("pr-w-s2-type").innerHTML = window.wSlotTwo.wType;
		document.getElementById("pr-w-s2-size").innerHTML = window.wSlotTwo.wSize;
		document.getElementById("pr-w-s2-reach").innerHTML = window.wSlotTwo.wReach;
		document.getElementById("pr-w-s2-hardn").innerHTML = window.wSlotTwo.hardness;
		document.getElementById("pr-w-s2-hp").innerHTML = window.wSlotTwo.hitPoints;
		document.getElementById("pr-w-s2-saves").innerHTML = window.wSlotTwo.wSaves;
	}
	
	if (window.weaponSlotThree) {
		// alert("it found Three true");
		document.getElementById("weapon-slot-thr").style.display = "block";
		document.getElementById("pr-w-s3-name").innerHTML = window.wSlotThr.wName;
		document.getElementById("pr-w-s3-weight").innerHTML = window.wSlotThr.iWeight;
		document.getElementById("pr-w-s3-dmg").innerHTML = window.wSlotThr.damage;
		document.getElementById("pr-w-s3-crit").innerHTML = window.wSlotThr.critical;
		document.getElementById("pr-w-s3-rang").innerHTML = window.wSlotThr.range;
		document.getElementById("pr-w-s3-type").innerHTML = window.wSlotThr.wType;
		document.getElementById("pr-w-s3-size").innerHTML = window.wSlotThr.wSize;
		document.getElementById("pr-w-s3-reach").innerHTML = window.wSlotThr.wReach;
		document.getElementById("pr-w-s3-hardn").innerHTML = window.wSlotThr.hardness;
		document.getElementById("pr-w-s3-hp").innerHTML = window.wSlotThr.hitPoints;
		document.getElementById("pr-w-s3-saves").innerHTML = window.wSlotThr.wSaves;
	}
	

	if (window.armorSlot) {
		document.getElementById("pr-armor-name").innerHTML = window.aSlot.aName;
		document.getElementById("pr-armor-weight").innerHTML = window.aSlot.iWeight;
		document.getElementById("pr-armor-ar-bonus").innerHTML = window.aSlot.arBonus;
		document.getElementById("pr-armor-m-dex").innerHTML = window.aSlot.mDex;
		document.getElementById("pr-armor-check").innerHTML = window.aSlot.check;
		document.getElementById("pr-armor-sp-fail").innerHTML = window.aSlot.spFail;
		document.getElementById("pr-armor-max-sp").innerHTML = window.aSlot.maxSp;
		document.getElementById("pr-armor-hardness").innerHTML = window.aSlot.hardness;
		document.getElementById("pr-armor-hit-points").innerHTML = window.aSlot.hitPoints;
		document.getElementById("pr-armor-a-saves").innerHTML = window.aSlot.aSaves;
		document.getElementById("pr-armor-donning").innerHTML = window.aSlot.donning;
	}

	if (window.sSlot) {
		document.getElementById("armor-slot-two").style.display = "block";
		document.getElementById("pr-shield-name").innerHTML = window.sSlot.shieldName;
		document.getElementById("pr-shield-weight").innerHTML = window.sSlot.iWeight;
		document.getElementById("pr-shield-ar-bonus").innerHTML = window.sSlot.arBonus;
		document.getElementById("pr-shield-m-dex").innerHTML = window.sSlot.mDex;
		document.getElementById("pr-shield-check").innerHTML = window.sSlot.check;
		document.getElementById("pr-shield-sp-fail").innerHTML = window.sSlot.spFail;
		document.getElementById("pr-shield-max-sp").innerHTML = window.sSlot.maxSp;
		document.getElementById("pr-shield-hardness").innerHTML = window.sSlot.hardness;
		document.getElementById("pr-shield-hit-points").innerHTML = window.sSlot.hitPoints;
		document.getElementById("pr-shield-saves").innerHTML = window.sSlot.shieldSaves;
		document.getElementById("pr-shield-donning").innerHTML = window.sSlot.donning;
	}

	printLeftoverMoney();
	calculateArmorClass();

	alert("Character Sheet successfully populated.");

}


var calculateCarryingCapacity = function(strengthScore) {
	
	if (strengthScore <= 10) {
		window.heavyLoad = Math.floor(strengthScore * 10);
	} else if (strengthScore <= 20) {
		window.heavyLoad = Math.floor(25 * Math.pow(2, (0.2 * strengthScore) ) ) ;
	} else {
		alert("The code for this strength condition has not been written.");
		window.heavyLoad = 6;
	}
	window.mediumLoad = Math.floor((2 * heavyLoad) / 3);
	window.lightLoad =  Math.floor(heavyLoad / 3);

	document.getElementById("print-total-weight").innerHTML = document.getElementById("total-weight").innerHTML;
	document.getElementById("print-heavy-load").innerHTML = window.heavyLoad;
	document.getElementById("print-medium-load").innerHTML = window.mediumLoad;
	document.getElementById("print-light-load").innerHTML = window.lightLoad;
	document.getElementById("print-lift-load").innerHTML = ( window.heavyLoad * 2 );
	document.getElementById("print-push-load").innerHTML = ( window.heavyLoad * 5 );

}


var printLeftoverMoney = function() {
	var money = document.getElementById("copper-remaining").innerHTML ;
	var gold = Math.floor(money * 0.01) ;
	var silver = (Math.floor(money * 0.1) ) - ( gold * 10 ) ;
	var copper = (money) - (gold * 100) - (silver * 10) ;
	document.getElementById("print-coins-gold").innerHTML = gold;
	document.getElementById("print-coins-silver").innerHTML = silver;
	document.getElementById("print-coins-copper").innerHTML = copper;
}

var calculateArmorClass = function() {
	var armor = Number(document.getElementById("print-armor-bonus").innerHTML);
	var shield = Number(document.getElementById("print-shield-bonus").innerHTML);
	// add other variables as natural armor, misc, etc become available. 
	var natural = 0;
	var size = 0;
	var defl = 0;
	var misc = 0;

	document.getElementById("print-ac-tot").innerHTML = 10 + window.dexMod + armor + shield + natural + size + defl + misc;
	document.getElementById("print-ff-tot").innerHTML = 10 + armor + shield + natural + size + defl + misc;
	document.getElementById("print-to-tot").innerHTML = 10 + window.dexMod + size + defl + misc;
}



var testWriteInSkills = function() {
	if ( document.getElementById("in_craf").value != 0) {
		document.getElementById("print-craft-title").innerHTML = ( "Craft: " + document.getElementById("wrin-craft").value ); 
	}
}




































