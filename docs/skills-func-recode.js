var calcPoints = function(form) {

	window.inappr = form.in_appr.value;
	window.inbala = form.in_bala.value;
	window.inbluf = form.in_bluf.value;
	window.inclim = form.in_clim.value;
	window.inconc = form.in_conc.value;
	window.incraf = form.in_craf.value;
	window.indeci = form.in_deci.value;
	window.indipl = form.in_dipl.value;
	window.indisa = form.in_disa.value;
	window.indisg = form.in_disg.value;
	window.inesca = form.in_esca.value;
	window.inforg = form.in_forg.value;
	window.ingath = form.in_gath.value;
	window.inhand = form.in_hand.value;
	window.inheal = form.in_heal.value;
	window.inhide = form.in_hide.value;
	window.ininti = form.in_inti.value;
	window.injump = form.in_jump.value;
	window.inknow = form.in_know.value;
	window.inlist = form.in_list.value;
	window.inmove = form.in_move.value;
	window.inopen = form.in_open.value;
	window.inperf = form.in_perf.value;
	window.inprof = form.in_prof.value;
	window.inride = form.in_ride.value;
	window.insear = form.in_sear.value;
	window.insens = form.in_sens.value;
	window.inslei = form.in_slei.value;
	window.inspel = form.in_spel.value;
	window.inspot = form.in_spot.value;
	window.insurv = form.in_surv.value;
	window.inswim = form.in_swim.value;
	window.intumb = form.in_tumb.value;
	window.inusem = form.in_usem.value;
	window.inuser = form.in_user.value;
	window.inbla1 = form.in_bla1.value;
	window.inbla2 = form.in_bla2.value;
	window.inbla3 = form.in_bla3.value;

	var skillsList = ["appr", "bala", "bluf", "clim", "conc", "craf", "deci", "dipl", "disa", "disg", "esca", "forg", "gath", "hand", "heal", "hide", "inti", "jump", "know", "list", "move", "open", "perf", "prof", "ride", "sear", "sens", "slei", "spel", "spot", "surv", "swim", "tumb", "usem", "user", "bla1", "bla2", "bla3" ];
	// DONT NEED THIS YET // var untrained =  [true, true, true, true, true, true, false, true, false, true, true, true, true, false, true, true, true, true, false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, false, true, true, true, true ]
	var whichModList = ["int", "dex", "cha", "str", "con", "int", "int", "cha", "int", "cha", "dex", "int", "cha", "cha", "wis", "dex", "cha", "str", "int", "wis", "wis", "dex", "dex", "cha", "wis", "dex", "int", "wis", "dex", "int", "wis", "wis", "str", "dex", "cha", "dex" ]
	for ( i = 0 ; i < skillsList.length ; i++ ) {
		switch (whichModList[i]) {
			case "str": var mod = window.strMod; break;
			case "dex": var mod = window.dexMod; break;
			case "con": var mod = window.conMod; break;
			case "wis": var mod = window.wisMod; break;
			case "int": var mod = window.intMod; break;
			case "cha": var mod = window.chaMod; break;
		}
		var misc = Number(document.getElementById("ms-" + skillsList[i] ));
		document.getElementById("t-appr").innerHTML = ("+ " + mod + misc + window["in" + skillsList[i] ] ) ;
	}
}
	
		(window["in" + skillsList[i] ] )


		if (apprInClass === "CLASS: 4") {			// If it is a class skill
			var tappr = (window.intMod) + ( Number(inappr) ) + (apprMscMod);
		} else {
			var tappr = (window.intMod) + ( Number(inappr) / 2 ) + (apprMscMod);
		}
			document.getElementById("t-appr").innerHTML = ("+ " + (tappr)) ;


		if (untrained[i] === true) {
			document.getElementById("pr-" + skillsList[i]).innerHTML = document.getElementById("t-" + skillsList[i]).innerHTML ;
		} else if ( (window["in" + skillsList[i] ] ) > 0 ) {
			document.getElementById("pr-" + skillsList[i]).innerHTML = document.getElementById("t-" + skillsList[i]).innerHTML ;
		} else {
			document.getElementById("pr-" + skillsList[i]).innerHTML = " " ;
		}

	}


	var skPtsUsed = ( Number(inappr) + Number(inbala) + Number(inbluf) + Number(inclim) + Number(inconc) + Number(incraf) + Number(indeci) + Number(indipl) + Number(indisa) + Number(indisg) + Number(inesca) + Number(inforg) + Number(ingath) + Number(inhand) + Number(inheal) + Number(inhide) + Number(ininti) + Number(injump) + Number(inknow) + Number(inlist) + Number(inmove) + Number(inopen) + Number(inperf) + Number(inprof) + Number(inride) + Number(insear) + Number(insens) + Number(inslei) + Number(inspel) + Number(inspot) + Number(insurv) + Number(inswim) + Number(intumb) + Number(inusem) + Number(inuser) + Number(inbla1) + Number(inbla2) + Number(inbla3) );
	// alert("inappr " + inappr + "\ninbluf " + inbluf + "\nskPts = " + skPts);
		
	window.skPtsRemaining = window.skPts - skPtsUsed;
	
	document.getElementById("sk-points-starting").innerHTML = ("Skill Points Remaining: " + (window.skPts - skPtsUsed )) ; 	
	
	if (skPtsRemaining === 0) {
		document.getElementById("skills-finish").style.display = "block";
	} else {}
	
	//____________________________________________________________________________________
	// --- This First one, Appraise, is written Un-Minified for ease of later editing. 
	//
	// --- Each function relies on a 4 character string ( here: "appr" ) which appears
	//	   17 times in each. 
	//
	// --- It also relies on two occurances of the relevant modifier's 3 letter string
	// 	   ("str", "dex", etc) which appear without quotes as part of a window.XXXMod 
	//	   variable. 
	//____________________________________________________________________________________
	var apprInClass = document.getElementById("c-appr").innerHTML;
	var apprMscMod = document.getElementById("ms-appr").innerHTML;
	if (apprMscMod === "-") {
		var apprMscMod = 0;						// set equal to zero if element value is "-" (default)
	} else {
		var apprMscMod = Number(apprMscMod);	// else, try to convert to a number
	}
	if (apprInClass === "CLASS: 4") {			// If it is a class skill
		var tappr = (window.intMod) + ( Number(inappr) ) + (apprMscMod);
	} else {
		var tappr = (window.intMod) + ( Number(inappr) / 2 ) + (apprMscMod);
	}
	document.getElementById("t-appr").innerHTML = ("+ " + (tappr)) ;
}




var calculateSkillTotal = function(whichMod) {
	if (window.allSkillsBool[i]) {
		document.getElementById("t-appr").innerHTML = ("+ " + (Number(whichMod)) + (Number(document.getElementById("t-appr").innerHTML)) ;
	} else {
		
	}
}













