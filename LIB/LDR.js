var MainDomain = new Array("LIB");

var SYSKERNDOWNLOAD = false;
var SYSKERNDOWNLOADBAD = false;
var SYSKERN = false;
var SYSKERNDOWNLOADNoLoad = false;
var SYSKERNDOWNLOADTIMETOLIVE = 500;
var SYSKERNDOWNLOADNAMES = new Array();
var SYSKERNDOWNLOADNAMESSETTED = new Array();
var SYSKERNOLDSRC = undefined;
var SYSKERNFISTSRC = undefined;
var SYSKERNDOMAINS = [];//zde se budou ukládat celá pole domén
var FIRSTWORK = true;
var ERRORGRID = "ERRORGRIDDWNSC";
var ERRORGRIDSET = "ERRORGRIDDWNSC";
var ERRORGRIDCOUNT = 0;
var SYSKERNDOMAINSLOAD = true;
var ImportsInformation = new Array();//zde budou názvy načtených skriptů (platí pro 1 instanci metody ImportTo)
var SYSKERNFIRSTDOMAIN = true;
var SYSKERNPREWDOMAIN = false;//pokud je v true, musel se předchozí skript číst z domény (zachytit v callback)
var SYSKERNPREWPROMPT = false;//pokud je v true, musel se předchozí skript ptát uživatele (zachytit v callback)
var SYSKERNESCAPE = false;//pokud je v true, tak jeden ze skriptů ve frontě byl přeskočen příkazem break (= nebyl načten)
var SYSKERNscriptName = undefined;
var SYSKERNactualLoad = undefined;
var SYSKERNoldLoad = undefined;
function SetSYSKERN(bool){
	if (bool)
		SYSKERN = true;
	else
		SYSKERN = false;
}

function ToImportGrid(data){
	GtE(ERRORGRID).innerHTML += data;
	return "done";
}

function ImportTo(type,domains,timetolive,createSpace,array,callback,callbackforeachscript){
	if ((!type) || type.toLowerCase().trim() != "style")
		type = "script";
	else
		type = "style";
//	var SetsDomain = true;
	if ((!domains) || domains == "" || domains.length == 0){
		domains = [];
	//	SetsDomain = false;
	}
	if (typeof(domains) != "object")
		domains = [domains];
//	if (SetsDomain){
		for (var i = 0; i < MainDomain.length;i++)
			domains.push(MainDomain[i]);
//		SetsDomain = false;
//	}
	if (typeof(callback) != "function" && (callback))
		callback = function(){eval(callback);};
	if (typeof(callbackforeachscript) != "function" && (callbackforeachscript))
		callbackforeachscript = function(){eval(callbackforeachscript);};
	if ((!timetolive) || (isNaN(timetolive)))
		timetolive = SYSKERNDOWNLOADTIMETOLIVE;
	if (typeof(array) != "object")
		array = new Array(array);
	if ((SYSKERNDOWNLOAD) && (!SYSKERNDOWNLOADBAD)){
		if (SYSKERN)
			ToImportGrid(">> "+Translate("System downloading some extensions, please wait")+" ...");
		else
			alert("-//sysKERN-/>>SYSTEM DOWNLOADING EXTENSIONS, PLEASE WAIT");
		return undefined;
	}
	if (SYSKERN){
		ERRORGRID = ERRORGRIDSET+ERRORGRIDCOUNT;
		GtE(main_grid).innerHTML += "<div id='"+ERRORGRID+"container'><div id='"+ERRORGRID+"'></div></div>";
		ERRORGRIDCOUNT++;
	}
	if ((createSpace) && (SYSKERN))
		GtE(ERRORGRID+"container").innerHTML += "<div id='COMSPACECREATOR' class='mainEditBlank'></div>";
	var timeDown = "";
	SYSKERNDOWNLOAD = true;
	SYSKERNDOWNLOADBAD = false;
	SYSKERNDOMAINSLOAD = true;
	SYSKERNDOMAINS.length = 0;
	for (var i = 0; i < domains.length;i++)
		SYSKERNDOMAINS.push(domains[i]);
	SYSKERNOLDSRC = undefined;
	ImportsInformation = new Array();
	SYSKERNFIRSTDOMAIN = true;
	SYSKERNPREWDOMAIN = false;
	SYSKERNPREWPROMPT = false;
	SYSKERNESCAPE = false;
	SYSKERNactualLoad = undefined;
	SYSKERNoldLoad = true;
	SetImportTo(type,domains,timetolive,createSpace,array,callback,callbackforeachscript);
}

function SetImportTo(type,domain,timetolive,createSpace,array,callback,callbackforeachscript){
    var loader = function(src,handler){
		if (!src){
			console.log("SYSKERN//ALDR:>> BAD SRC OF SCRIPT. SCRIPT CANNOT BE LOADED. [ SRC IS UNDEFINED OR NULL ]");
			handler();
		}
		else if ((SYSKERNDOWNLOADNAMES.indexOf(src.trim().toLowerCase()) != -1 || SYSKERNDOWNLOADNAMESSETTED.indexOf(src.trim().toLowerCase()) != -1) && (!SYSKERNDOWNLOADBAD))
			handler();
		else if (src.trim().toLowerCase() == "break" || src.trim().toLowerCase() == "cancel" || src.trim().toLowerCase() == "n" || src.trim().toLowerCase() == "no" || src.trim().toLowerCase() == "none"){
			SYSKERNESCAPE = true;
			handler();
		}
		else{
			if (type == "script"){
				var script = document.createElement("script");
				script.type = "text/javascript";
				script.src = src;
			}
			else{
				var script = document.createElement("link");
				script.rel = "stylesheet";
				script.type = "text/css";
				script.href = src;
			}
			SYSKERNactualLoad = src;
			SYSKERNoldLoad = true;
			timeDown = window.setTimeout(function(){TimeDown(type,domain,timetolive,createSpace,array,callback,src,callbackforeachscript);},timetolive);
			script.onload = script.onreadystatechange = function(){
				window.clearTimeout(timeDown);
				domain = [];
				for (var i = 0; i < SYSKERNDOMAINS.length;i++)
					domain.push(SYSKERNDOMAINS[i]);
				SYSKERNscriptName = src.trim();
				if (!SYSKERNDOWNLOADBAD)
					SYSKERNDOWNLOADNAMESSETTED.push(SYSKERNscriptName.toLowerCase());
				else
					SYSKERNDOWNLOADNAMESSETTED.push(SYSKERNFISTSRC.trim().toLowerCase());
				script.onreadystatechange = script.onload = null;
				SYSKERNDOWNLOADBAD = false;
				SYSKERNDOMAINSLOAD = true;
				SYSKERNFIRSTDOMAIN = true;
				ImportsInformation.push(SYSKERNscriptName);
				SYSKERNDOWNLOADNAMES.push(SYSKERNscriptName.toLowerCase());
				if (callbackforeachscript)
					callbackforeachscript && callbackforeachscript();
				SYSKERNPREWDOMAIN = false;
				SYSKERNPREWPROMPT = false;
				handler();
			}
			if (type == "script")
				GtE("main_scripts").appendChild(script);
			else
				GtE("main_styles").appendChild(script);
		}
	};
    (function run(){
        if(array.length != 0){
            loader(array.shift(),run);
			SYSKERNDOWNLOAD = true;
        }
		else{
			SYSKERNDOWNLOAD = false;
			SYSKERNDOMAINS = [];
			SYSKERNDOWNLOADBAD = false;
			SYSKERNDOMAINSLOAD = true;
			SYSKERNFIRSTDOMAIN = true;
			SYSKERNPREWDOMAIN = false;
			SYSKERNPREWPROMPT = false;
			if ((SYSKERN))
				GtE(main_grid).removeChild(GtE(ERRORGRID+"container"));
			if (callback)
				callback && callback();
        }
    })();
}

function TimeDown(type,domain,timetolive,createSpace,array,callback,src,callbackforeachscript){
	SYSKERNDOWNLOADBAD = true;
	if (src == SYSKERNOLDSRC && (!SYSKERNDOMAINSLOAD)){
		SYSKERNPREWPROMPT = true;
		SYSKERNPREWDOMAIN = false;
		if (SYSKERN){
			ToImportGrid(Translate("Input correct path for file")+" "+SYSKERNFISTSRC+":<br><br>");
			GetComData("",function(){TimeDownWork(type,domain,timetolive,createSpace,array,callback,callbackforeachscript);});
		}
		else{
			COMGETDATA = prompt("Input correct path for file "+SYSKERNFISTSRC+":");
			TimeDownWork(type,domain,timetolive,createSpace,array,callback,callbackforeachscript);
		}
	}
	else{
		if (SYSKERNFIRSTDOMAIN)
			SYSKERNFISTSRC = src;
		SYSKERNFIRSTDOMAIN = false;
		SYSKERNPREWDOMAIN = true;
		SYSKERNPREWPROMPT = false;
		var LastSrcName = src.split("/");
		LastSrcName = LastSrcName[parseInt(LastSrcName.length,10)-1].trim();
		var NewSrc = domain[0].split("/");
		var LastSrc = NewSrc[parseInt(NewSrc.length,10)-1].trim();
		var LastSrcDomainData = LastSrc.split(".");
		if (LastSrcDomainData.length > 1)
			NewSrc = domain[0];
		else
			NewSrc = domain[0]+"/"+LastSrcName;
		domain.shift();
		//domain = domain.splice(1,domain.length);
		SYSKERNDOMAINSLOAD = true;
		if (domain.length == 0){
			domain = [];
			for (var i = 0; i < SYSKERNDOMAINS.length;i++)
				domain.push(SYSKERNDOMAINS[i]);
			SYSKERNDOMAINSLOAD = false;
			SYSKERNOLDSRC = NewSrc;
		}
		array.unshift(NewSrc);
		SetImportTo(type,domain,timetolive,createSpace,array,callback,callbackforeachscript);
	}
}

function TimeDownWork(type,domain,timetolive,createSpace,array,callback,callbackforeachscript){
		var NewSrc = undefined;
		if ((COMGETDATA) && COMGETDATA != "")
			NewSrc = COMGETDATA.trim().toLowerCase();
		SYSKERNOLDSRC = NewSrc;
		SYSKERNDOMAINSLOAD = false;
		array.unshift(NewSrc);
		SetImportTo(type,domain,timetolive,createSpace,array,callback,callbackforeachscript);
		return "done";
}

function ImportToLoaded(src){//tato metoda zjistí, jestli byl načten odpovídající skript nebo jeho náhrada
	if ((SYSKERNDOWNLOADNAMES.indexOf(src.trim().toLowerCase()) != -1 || SYSKERNDOWNLOADNAMESSETTED.indexOf(src.trim().toLowerCase()) != -1))
		return "done";
	return undefined;
}

function ImportToIsLoaded(src){//tato metoda zjistí, jestli byl načten původní skript (nebyl nahrazován, byl načten přímo)
	if (SYSKERNDOWNLOADNAMES.indexOf(src.trim().toLowerCase()) != -1)
		return "done";
	return undefined;
}

function ImportToLoadedAliases(src){//tato metoda zjistí, jaký skript byl importován (popř. čím byl nahrazen)
	var position = SYSKERNDOWNLOADNAMESSETTED.indexOf(src.trim().toLowerCase());
	if (position != -1)
		return SYSKERNDOWNLOADNAMES[position];
	return undefined;
}

function ImportToLoadedIsHaveAlliases(src){//tato metoda zjistí, jestli skript byl nahrazen (jestli nebyl stažen původní skript anebo jestli skript neexistuje (vrátí undefined))
	var position = SYSKERNDOWNLOADNAMESSETTED.indexOf(src.trim().toLowerCase());
	if (position != -1){
		if (SYSKERNDOWNLOADNAMES[position] == SYSKERNDOWNLOADNAMESSETTED[position])
			return "done";
	}
	return undefined;
}