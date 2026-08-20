/*  

	PLATFORM FOR FASTER WORKING IM-WKS

	v9.174
	15:04	2016-03-12

	for IM-COM and VIEWS

	ADDITIONAL LICENSES:

		- FOR FUNCTIONS SetHash, GetHash
			- Copyright 2001 by Terry Yuen.
			- Email: kaiser40@yahoo.com
			- Last update: July 15, 2001.
			- None license added
*/

var WKSver = 11.54;

var IMWKS = 1154;

function GetWKSCode(){
	return IMWKS;
}

var RepeatVar1 = "none";
var RepeatVar2 = "none";
var RepeatVar3 = "none";
var RepeatVar4 = "none";
var RepeatVar5 = "none";
var RepeatVar6 = "none";
var RepeatVar7 = "none";
var RepeatVar8 = "none";
var RepeatVar9 = "none";
var RepeatVar10 = "none";
var RepeatVar11 = "none";
var RepeatVar12 = "none";
var RepeatVar13 = "none";
var RepeatVar14 = "none";
var RepeatVar15 = "none";
var RepeatVar16 = "none";
var RepeatVar17 = "none";
var RepeatVar18 = "none";
var RepeatVar19 = "none";
var RepeatVar20 = "none";
var RepeatVar21 = "none";
var RepeatVar22 = "none";
var RepeatVar23 = "none";
var RepeatVar24 = "none";
var RepeatVar25 = "none";
var RepeatVar26 = "none";
var RepeatVar27 = "none";
var RepeatVar28 = "none";
var RepeatVar29 = "none";
var RepeatVar30 = "none";
var RepeatVar31 = "none";
var RepeatVar32 = "none";
var RepeatVar33 = "none";
var RepeatVar34 = "none";
var RepeatVar35 = "none";
var RepeatVar36 = "none";
var RepeatVar37 = "none";
var RepeatVar38 = "none";
var RepeatVar39 = "none";
var RepeatVar40 = "none";
var RepeatVar41 = "none";
var RepeatVar42 = "none";
var RepeatVar43 = "none";
var RepeatVar44 = "none";
var RepeatVar45 = "none";
var RepeatVarInc1 = "none";
var RepeatVarInc2 = "none";
var RepeatVarInc3 = "none";
var RepeatVarInc4 = "none";
var RepeatVarInc5 = "none";
var RepeatVarInc6 = "none";
var RepeatVarInc7 = "none";
var RepeatVarInc8 = "none";
var RepeatVarInc9 = "none";
var RepeatVarInc10 = "none";
var RepeatVarInc11 = "none";
var RepeatVarInc12 = "none";
var RepeatVarInc13 = "none";
var RepeatVarInc14 = "none";
var RepeatVarInc15 = "none";
var RepeatVarInc16 = "none";
var RepeatVarInc17 = "none";
var RepeatVarInc18 = "none";
var RepeatVarInc19 = "none";
var RepeatVarInc20 = "none";
var RepeatVarInc21 = "none";
var RepeatVarInc22 = "none";
var RepeatVarInc23 = "none";
var RepeatVarInc24 = "none";
var RepeatVarInc25 = "none";
var RepeatVarInc26 = "none";
var RepeatVarInc27 = "none";
var RepeatVarInc28 = "none";
var RepeatVarInc29 = "none";
var RepeatVarInc30 = "none";
var RepeatVarInc31 = "none";
var RepeatVarInc32 = "none";
var RepeatVarInc33 = "none";
var RepeatVarInc34 = "none";
var RepeatVarInc35 = "none";
var RepeatVarInc36 = "none";
var RepeatVarInc37 = "none";
var RepeatVarInc38 = "none";
var RepeatVarInc39 = "none";
var RepeatVarInc40 = "none";
var RepeatVarInc41 = "none";
var RepeatVarInc42 = "none";
var RepeatVarInc43 = "none";
var RepeatVarInc44 = "none";
var RepeatVarInc45 = "none";
function Repeat(type,numbofrepeat,delay,numb,action){
	if (!type){
		console.warn("//>IMWKS$WKS$ -//Parameter type in function Repeat(x,x,x) is undefined or null. Type will has none value.");
		type = "none";
	}
	if (!numbofrepeat){
		console.warn("//>IMWKS$WKS$ -//Parameter numbofrepeat in function Repeat(x,x,x) is undefined or null. Numbofrepeat will has 1 value.");
		numbofrepeat = 1;
	}
	if (!delay){
		console.warn("//>IMWKS$WKS$ -//Parameter numbofrepeat in function Repeat(x,x,x) is undefined or null. Delay will has 20 value.");
		delay = 20;
	}
	if (!numb){
		console.warn("//>IMWKS$WKS$ -//Parameter numb in function Repeat(x,x,x) is undefined or null. Numb will has 1 value.");
		numb = 1;
	}
	if (!action){
		console.error("//>IMWKS$WKS$ -//Parameter action in function Repeat(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (type == "n" || type == "no" || type == "none")
		type = "none";
	if (numbofrepeat == "n" || numbofrepeat == "no" || numbofrepeat == "none")
		numbofrepeat = 1;
	if (delay == "n" || delay == "no" || delay == "none")
		delay = 20;
	if (numb == "n" || numb == "no" || numb == "none")
		numb = 1;
	if (action == "n" || action == "no" || action == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter action in function Repeat(x,x,x) is skipped. Parameter action cannot be skipped. Function cannot run.");
		return undefined;
	}

	if (numb > 45){
		console.warn("//>IMWKS$WKS$ -//Parameter numb in function Repeat(x,x,x) has too big value . Numb will has 1 value.");
		numb = 1;
	}
	if (eval("RepeatVar"+numb) != "none"){
		clearInterval(eval("RepeatVar"+numb));
		eval("RepeatVar"+numb+"= \"none\"");
	}
	if (eval("RepeatVarInc"+numb) != "none")
		eval("RepeatVarInc"+numb+"= \"none\"");
	if (type == "y" || type == "yes"){
		eval("RepeatVarInc"+numb+"=1");
		eval(action);
	}
	else
		eval("RepeatVarInc"+numb+"=0");
	eval("RepeatVar"+numb+"= setInterval(function (){if (eval(\"RepeatVarInc\"+numb) >= numbofrepeat){eval(\"clearInterval(RepeatVar\"+numb+\");\");}else{eval(action);eval(\"RepeatVarInc\"+numb+\"++;\");}},delay);");
	return "done";
}

function IsInt(value){
	if (value === undefined || value === null || value == "NaN" || value === "")
		return undefined;
	value = value.toString();
	var delimiter = false;
	for (var i = 0;i < value.length;i++){
		if (value[i] == "." && (!delimiter))
			delimiter = true;
		else if (value[i] != "0" && value[i] != "1" && value[i] != "2" && value[i] != "3" && value[i] != "4" && value[i] != "5" && value[i] != "6" && value[i] != "7" && value[i] != "8" && value[i] != "9")
			return undefined;
	}
	return "ok";
}

function IsChar(value){
	if (value === undefined || value === null || value == "NaN" || value === "")
		return undefined;
	if (value.length != 1)
		return undefined;
	else if (parseInt(value,10))
		return undefined;
	else if (!isNaN(value))
		return undefined;
	else
		return "ok";
}

function IsString(value){
	if (value === undefined || value === null || value == "NaN" || value === "")
		return undefined;
	if (parseInt(value,10))
		return undefined;
	else if (!isNaN(value))
		return undefined;	
	else
		return "ok";
}

function IsASCIIChar(value){
	if (!IsChar(value))
		return undefined;
	else if (value.charCodeAt(0) <= 128)
		return "ok";
	else
		return undefined;
}

function IsASCIIString(value){
	if (!IsString(value))
		return undefined;
	for (var i = 0;i < value.length;i++){
		if (!IsASCIIChar(value[i]))
			return undefined;
	}
	return "ok";
}

function IsHexaInt(value){
	if (value === undefined || value === null || value == "NaN" || value === "")
		return undefined;
	value = value.toString();
	value = value.toUpperCase();
	for (var i = 0;i < value.length;i++){
		if ((!IsInt(value)) && value[i] != "A" && value[i] != "B" && value[i] != "C" && value[i] != "D" && value[i] != "E" && value[i] != "F")
			return undefined;
	}
	return "ok";
}

function IsHexaDecimal(value){
	if (!IsHexaInt(value))
		return undefined;
	return "ok";
}

function IsDecimal(value){
	if (!IsInt(value))
		return undefined;
	return "ok";
}

function IsBinaryInt(value){
	if (value === undefined || value === null || value == "NaN" || value === "")
		return undefined;
	value = value.toString();
	for (var i = 0;i < value.length;i++){
		if (value[i] != "0" && value[i] != "1")
			return undefined;
	}
	return "ok";
}

function IsBinary(value){
	if (!IsBinaryInt)
		return undefined;
	return "ok";
}

function IsQuadInt(value){
	if (value === undefined || value === null || value == "NaN" || value === "")
		return undefined;
	value = value.toString();
	for (var i = 0;i < value.length;i++){
		if ((!IsBinaryInt(value)) && value[i] != "2" && value[i] != "3")
			return undefined;
	}
	return "ok";
}

function IsQuad(value){
	if (!IsQuadInt)
		return undefined;
	return "ok";
}

function IsOctalInt(value){
	if (value === undefined || value === null || value == "NaN" || value === "")
		return undefined;
	value = value.toString();
	for (var i = 0;i < value.length;i++){
		if ((!IsQuadInt(value)) && value[i] != "4" && value[i] != "5" && value[i] != "6" && value[i] != "7")
			return undefined;
	}
	return "ok";
}

function IsOctal(value){
	if (!IsOctalInt)
		return undefined;
	return "ok";
}

function IsDefined(value){
	if (!value){
		console.error("//>IMWKS$WKS$ -//Parameter value in function IsDefined(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	var def = eval(value);
	if (!def)
		return undefined;
	else
		return "ok";
}

function IsSet(value){
	if (!value){
		console.error("//>IMWKS$WKS$ -//Parameter value in function IsSet(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	var set = eval(value);
	if (!set)
		return undefined;
	else
		return "ok";
}

function ToVal(value,nSystem){
	if (!value){
		console.error("//>IMWKS$WKS$ -//Parameter value in function ToVal(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!nSystem){
		console.warn("//>IMWKS$WKS$ -//Parameter nSystem in function ToVal(x,x,x) is undefined or null. NSystem will has 10 value.");
		nSystem = 10;
	}
	if (value == "n" || value == "no" || value == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter value in function ToVal(x,x,x) is skipped. Parameter value cannot be skipped. Function cannot run.");
		return undefined;
	}
	if (nSystem == "n" || nSystem == "no" || nSystem == "none")
		nSystem = 10;
	return value.toString(nSystem);
}

function ToInt(value,nSystem){
	if (!value){
		console.error("//>IMWKS$WKS$ -//Parameter value in function ToInt(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!nSystem){
		console.warn("//>IMWKS$WKS$ -//Parameter nSystem in function ToInt(x,x,x) is undefined or null. NSystem will has 10 value.");
		nSystem = 10;
	}
	if (value == "n" || value == "no" || value == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter value in function ToInt(x,x,x) is skipped. Parameter value cannot be skipped. Function cannot run.");
		return undefined;
	}
	if (nSystem == "n" || nSystem == "no" || nSystem == "none")
		nSystem = 10;
	return value.toString(nSystem);
}

function CreateDynamic(name,value){
	if (!name){
		console.error("//>IMWKS$WKS$ -//Parameter name in function CreateDynamic(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!value){
		console.error("//>IMWKS$WKS$ -//Parameter value in function CreateDynamic(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	window[name] = value;
	return "done";
}

function AddDynamic(name,value){
	if (!name){
		console.error("//>IMWKS$WKS$ -//Parameter name in function AddDynamic(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!value){
		console.error("//>IMWKS$WKS$ -//Parameter value in function AddDynamic(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	window[name] += value;
	return "done";
}

function GetDynamic(name,name2){
	if (!name){
		console.error("//>IMWKS$WKS$ -//Parameter name in function GetDynamic(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!name2){
		console.error("//>IMWKS$WKS$ -//Parameter name2 in function GetDynamic(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	var dyn = window[name+name2];
	if (dyn)
		return dyn;
	else
		return undefined;
}

function IsColor(indata){
	if (!indata)
		return undefined;
	var value = indata.toString().trim().toLowerCase();
	var data = undefined;
	var colorsnames = new Array("aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen");
	if (value[0] == "#"){
		for (var i = 1;i < value.length;i++){
			if (!IsHexaDecimal(value[i])){
				data = undefined;
				break;
			}
			else
				data = "done";
		}		
	}
	else if (value[0] == 'r' && value[1] == 'g' && value[2] == 'b' && value[3] == 'a'){
		if (value[4] == '(' && value[value.length-1] == ')'){
			for (var i = 5;i < value.length-1;i++){
				if (value[i] != ',' && (!IsInt(value[i]))){
					data = undefined;
					break;
				}
				else
					data = "done";
			}
		}
		else
			data = undefined;		
	}
	else if (value[0] == 'r' && value[1] == 'g' && value[2] == 'b'){
		if (value[3] == '(' && value[value.length-1] == ')'){
			for (var i = 4;i < value.length-1;i++){
				if (value[i] != ',' && (!IsInt(value[i]))){
					data = undefined;
					break;
				}
				else
					data = "done";
			}
		}
		else
			data = undefined;
	}
	else if (colorsnames.indexOf(value) >= 0)
		data = "done";
	else 
		data = undefined;
	return data;
}
function Include(path){
	if (!path){
		console.error("//>IMWKS$WKS$ -//Parameter path in function Include(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (path == "n" || path == "no" || path == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter path in function Include(x,x,x) is skipped. Parameter path cannot be skipped. Function cannot run.");
		return undefined;
	}
	var head= document.getElementsByTagName('head')[0];
	var script= document.createElement('script');
	script.type= 'text/javascript';
	script.src= path;
	head.appendChild(script);
	return "done";
}

function IncludeScript(path){
	if (!path){
		console.error("//>IMWKS$WKS$ -//Parameter path in function IncludeScript(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (path == "n" || path == "no" || path == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter path in function IncludeScript(x,x,x) is skipped. Parameter path cannot be skipped. Function cannot run.");
		return undefined;
	}
	var head= document.getElementsByTagName('head')[0];
	var script= document.createElement('script');
	script.type= 'text/javascript';
	script.src= path;
	head.appendChild(script);
	return "done";
}

function IncludeStyle(path){
	if (!path){
		console.error("//>IMWKS$WKS$ -//Parameter path in function IncludeStyle(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (path == "n" || path == "no" || path == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter path in function IncludeStyle(x,x,x) is skipped. Parameter path cannot be skipped. Function cannot run.");
		return undefined;
	}
	var headID = document.getElementsByTagName("head")[0];         
	var cssNode = document.createElement('link');
	cssNode.type = 'text/css';
	cssNode.rel = 'stylesheet';
	cssNode.href = path;
	cssNode.media = 'screen';
	headID.appendChild(cssNode);
	return "done";
}

function InsertHTML(htmlcode){
	if (!htmlcode){
		console.error("//>IMWKS$WKS$ -//Parameter htmlcode in function InsertHTML(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (htmlcode == "n" || htmlcode == "no" || htmlcode == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter htmlcode in function InsertHTML(x,x,x) is skipped. Parameter htmlcode cannot be skipped. Function cannot run.");
		return undefined;
	}
	document.body += htmlcode;
	return "done";
}

function Exclude(numberofscript){
	if (!numberofscript){
		console.error("//>IMWKS$WKS$ -//Parameter numberofscript in function Exclude(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (numberofscript == "n" || numberofscript == "no" || numberofscript == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter numberofscript in function Exclude(x,x,x) is skipped. Parameter numberofscript cannot be skipped. Function cannot run.");
		return undefined;
	}
	document.getElementsByTagName("head")[0].removeChild(document.getElementsByTagName("script")[numberofscript]);
	return "done";
}

function ExcludeScript(numberofscript){
	if (!numberofscript){
		console.error("//>IMWKS$WKS$ -//Parameter numberofscript in function ExcludeScript(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (numberofscript == "n" || numberofscript == "no" || numberofscript == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter numberofscript in function ExcludeScript(x,x,x) is skipped. Parameter numberofscript cannot be skipped. Function cannot run.");
		return undefined;
	}
	var erd = "";
	try{
		document.getElementsByTagName("head")[0].removeChild(document.getElementsByTagName("script")[numberofscript]);
	}catch(erd){return undefined;}	
	return "done";
}

function ExcludeStyle(numberofstyle){
	if (!numberofstyle){
		console.error("//>IMWKS$WKS$ -//Parameter numberofstyle in function ExcludeStyle(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (numberofstyle == "n" || numberofstyle == "no" || numberofstyle == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter numberofstyle in function ExcludeStyle(x,x,x) is skipped. Parameter numberofstyle cannot be skipped. Function cannot run.");
		return undefined;
	}
	var erd = "";
	try{
		document.getElementsByTagName("head")[0].removeChild(document.getElementsByTagName("link")[numberofstyle]);
	}catch(erd){return undefined;}
	return "done";
}

function Sleep(time){
	if (!time){
		console.warn("//>IMWKS$WKS$ -//Parameter time in function Sleep(x,x,x) is undefined or null. Time will has 5000 value.");
		time = 5000;
	}
	if (time == "n" || time == "no" || time == "none")
		time = 5000;
	if (time > 10000){
		console.warn("//>IMWKS$WKS$ -//Parameter time in function Sleep(x,x,x) is too big. Time will has 10000 value.");
		time = 10000;
	}
	var date = new Date();
	var curDate = null;
	do { curDate = new Date(); }
	while(curDate-date < time);
	return "done";
}

function Pause(time){
	if (!time){
		console.warn("//>IMWKS$WKS$ -//Parameter time in function Pause(x,x,x) is undefined or null. Time will has 5000 value.");
		time = 5000;
	}
	if (time == "n" || time == "no" || time == "none")
		time = 5000;
	if (time > 10000){
		console.warn("//>IMWKS$WKS$ -//Parameter time in function Pause(x,x,x) is too big. Time will has 10000 value.");
		time = 10000;
	}
	var date = new Date();
	var curDate = null;
	do { curDate = new Date(); }
	while(curDate-date < time);
	return "done";
}

var WaitInt01 = "";
function Wait(refreshtime,value1,value2,condition,code){
	if (!refreshtime){
		console.warn("//>IMWKS$WKS$ -//Parameter refreshtime in function Wait(x,x,x) is undefined or null. Refreshtime will has 5000 value.");
		refreshtime = 5000;
	}
	if (!value1){
		console.warn("//>IMWKS$WKS$ -//Parameter value1 in function Wait(x,x,x) is undefined or null. Value1 will has 10 value.");
		value1 = 10;
	}
	if (!value2){
		console.warn("//>IMWKS$WKS$ -//Parameter value2 in function Wait(x,x,x) is undefined or null. Value2 will has 10 value.");
		value2 = 10;
	}
	if (!condition){
		console.warn("//>IMWKS$WKS$ -//Parameter condition in function Wait(x,x,x) is undefined or null. Condition will has == value.");
		condition = "==";
	}
	if (!code){
		console.warn("//>IMWKS$WKS$ -//Parameter code in function Wait(x,x,x) is undefined or null. Code will has none value.");
		code = "none";
	}
	if (refreshtime == "n" || refreshtime == "no" || refreshtime == "none")
		refreshtime = 5000;
	if (value1 == "n" || value1 == "no" || value1 == "none")
		value1 = 10;
	if (value2 == "n" || value2 == "no" || value2 == "none")
		value2 = 10;
	if (condition == "n" || condition == "no" || condition == "none")
		condition = "==";
	if (code == "n" || code == "no" || code == "none")
		code = "none";
	eval("if("+value1+condition+value2+"){if (code != \"none\"){eval(code);}return \"done\";}");
	Pause(refreshtime/2);
	WaitInt01 = setTimeout(function(){Wait(refreshtime,value1,value2,condition,code);},refreshtime/2);
	return undefined;
}

function IsFileExists(path,maxtime,aftercode){
	if (!path){
		console.error("//>IMWKS$WKS$ -//Parameter path in function IsFileExists(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!maxtime){
		console.warn("//>IMWKS$WKS$ -//Parameter maxtime in function IsFileExists(x,x,x) is undefined or null. Maxtime will has 5000 value.");
		maxtime = 5000;
	}
	if (!aftercode){
		console.warn("//>IMWKS$WKS$ -//Parameter aftercode in function IsFileExists(x,x,x) is undefined or null. Aftercode will has none value.");
		aftercode = "none";
	}
	if (path == "n" || path == "no" || path == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter path in function IsFileExists(x,x,x) is skipped. Parameter path cannot be skipped. Function cannot run.");
		return undefined;
	}
	if (maxtime == "n" || maxtime == "no" || maxtime == "none")
		maxtime = 5000;
	if (aftercode == "n" || aftercode == "no" || aftercode == "none")
		aftercode = "none";
	var IsFileExistsResult = undefined;
	var erd = "";
	try{
		var Loc = setTimeout(function(){if (aftercode != "none"){eval(aftercode);return undefined;}},maxtime);
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function(){
			if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
				clearTimeout(Loc);
				IsFileExistsResult = "done";
				if (aftercode != "none")
					eval(aftercode);
				return "done";
			}
		};
		xmlhttp.open("GET",path,true);
		xmlhttp.send();
	}catch(erd){
		IsFileExistsResult = null;
		if (aftercode != "none")
			eval(aftercode);	
		IsFileExistsResult = undefined;
		return undefined;
	}
}

function IsVariableExists(variable){
	var erd = "";
	try{
		if (eval(variable))
			return "Exists";
		return undefined;
	}catch(erd){
		return undefined;
	}
}

function IsVarExists(variable){
	var erd = "";
	try{
		if (eval(variable))
			return "Exists";
		return undefined;
	}catch(erd){
		return undefined;
	}
}

function ping(ip,aftercodeOK,aftercodeNONE,timewait) {
	if (!ip){
		console.error("//>IMWKS$WKS$ -//Parameter ip in function ping(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!aftercodeOK){
		console.warn("//>IMWKS$WKS$ -//Parameter aftercodeOK in function ping(x,x,x) is undefined or null. AftercodeOK will has none value.");
		aftercodeOK = "none";
	}
	if (!aftercodeNONE){
		console.warn("//>IMWKS$WKS$ -//Parameter aftercodeNONE in function ping(x,x,x) is undefined or null. AftercodeNONE will has none value.");
		aftercodeNONE = "none";
	}
	if (!timewait){
		console.warn("//>IMWKS$WKS$ -//Parameter timewait in function ping(x,x,x) is undefined or null. Timewait will has 5000 value.");
		timewait = 5000;
	}
	if (ip == "n" || ip == "no" || ip == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter ip in function ping(x,x,x) is skipped. Parameter ip cannot be skipped. Function cannot run.");
		return undefined;
	}
	if (aftercodeOK == "n" || aftercodeOK == "no" || aftercodeOK == "none")
		aftercodeOK = "none";
	if (aftercodeNONE == "n" || aftercodeNONE == "no" || aftercodeNONE == "none")
		aftercodeNONE = "none";
	if (timewait == "n" || timewait == "no" || timewait == "none")
		timewait = 5000;
	var ws = new WebSocket("ws://" + ip);
	var date = new Date();
	var OldTime = date.getTime();
	var Result = undefined;
	ws.onerror = function(e){
		var date2 = new Date();
		var NewTime = date2.getTime();
		Result = parseInt(NewTime,10)-parseInt(OldTime,10);
		ws.close();
		ws = null;
		if (aftercodeOK)
			eval(aftercodeOK);
		return Result;
 	 };
	setTimeout(function() { 
		if(ws != null) {
			ws.close();
			ws = null;
			if (aftercodeNONE)
				eval(aftercodeNONE);
			return Result;
		}
	},timewait);
}

function IsOffline(url,ifOnline,ifOffline,timewait){
	if (!url){
		console.error("//>IMWKS$WKS$ -//Parameter url in function IsOffline(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!ifOnline){
		console.warn("//>IMWKS$WKS$ -//Parameter ifOnline in function IsOffline(x,x,x) is undefined or null. IfOnline will has none value.");
		ifOnline = "none";
	}
	if (!ifOffline){
		console.warn("//>IMWKS$WKS$ -//Parameter ifOffline in function IsOffline(x,x,x) is undefined or null. IfOffline will has none value.");
		ifOffline = "none";
	}
	if (!timewait){
		console.warn("//>IMWKS$WKS$ -//Parameter timewait in function IsOffline(x,x,x) is undefined or null. Timewait will has 5000 value.");
		timewait = 5000;
	}
	if (url == "n" || url == "no" || url == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter url in function IsOffline(x,x,x) is skipped. Parameter url cannot be skipped. Function cannot run.");
		return undefined;
	}
	if (ifOnline == "n" || ifOnline == "no" || ifOnline == "none")
		ifOnline = "none";
	if (ifOffline == "n" || ifOffline == "no" || ifOffline == "none")
		ifOffline = "none";
	if (timewait == "n" || timewait == "no" || timewait == "none")
		timewait = 5000;
	var ws = new WebSocket("ws://" + url);
	var Result = undefined;
	ws.onerror = function(e){
		ws.close();
		ws = null;
		if (navigator.onLine){
			Result = "online";
			if (ifOnline != "none")
				eval(ifOnline);
			return "online";
		}
		else{
			if (ifOffline != "none")
				eval(ifOffline);
			return undefined;
		}
 	 };
	setTimeout(function() { 
		if(ws != null) {
			ws.close();
			ws = null;
			if (ifOffline != "none")
				eval(ifOffline);
			return undefined;
		}
	},timewait);
}

function IsOnline(url,ifOnline,ifOffline,timewait){
	if (!url){
		console.error("//>IMWKS$WKS$ -//Parameter url in function IsOnline(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!ifOnline){
		console.warn("//>IMWKS$WKS$ -//Parameter ifOnline in function IsOnline(x,x,x) is undefined or null. IfOnline will has none value.");
		ifOnline = "none";
	}
	if (!ifOffline){
		console.warn("//>IMWKS$WKS$ -//Parameter ifOffline in function IsOnline(x,x,x) is undefined or null. IfOffline will has none value.");
		ifOffline = "none";
	}
	if (!timewait){
		console.warn("//>IMWKS$WKS$ -//Parameter timewait in function IsOnline(x,x,x) is undefined or null. Timewait will has 5000 value.");
		timewait = 5000;
	}
	if (url == "n" || url == "no" || url == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter url in function IsOnline(x,x,x) is skipped. Parameter url cannot be skipped. Function cannot run.");
		return undefined;
	}
	if (ifOnline == "n" || ifOnline == "no" || ifOnline == "none")
		ifOnline = "none";
	if (ifOffline == "n" || ifOffline == "no" || ifOffline == "none")
		ifOffline = "none";
	if (timewait == "n" || timewait == "no" || timewait == "none")
		timewait = 5000;
	var ws = new WebSocket("ws://" + url);
	var Result = undefined;
	ws.onerror = function(e){
		ws.close();
		ws = null;
		if (navigator.onLine){
			Result = "online";
			if (ifOnline != "none")
				eval(ifOnline);
			return "online";
		}
		else{
			if (ifOffline != "none")
				eval(ifOffline);
			return undefined;
		}
 	 };
	setTimeout(function() { 
		if(ws != null) {
			ws.close();
			ws = null;
			if (ifOffline != "none")
				eval(ifOffline);
			return undefined;
		}
	},timewait);
}

function IsOnlineRel(url,ifOnline,ifOffline,timewait,delay,count,code){
	if (!url){
		console.error("//>IMWKS$WKS$ -//Parameter url in function IsOnlineRel(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!ifOnline){
		console.warn("//>IMWKS$WKS$ -//Parameter ifOnline in function IsOnlineRel(x,x,x) is undefined or null. IfOnline will has none value.");
		ifOnline = "none";
	}
	if (!ifOffline){
		console.warn("//>IMWKS$WKS$ -//Parameter ifOffline in function IsOnlineRel(x,x,x) is undefined or null. IfOffline will has none value.");
		ifOffline = "none";
	}
	if (!timewait){
		console.warn("//>IMWKS$WKS$ -//Parameter timewait in function IsOnlineRel(x,x,x) is undefined or null. Timewait will has 5000 value.");
		timewait = 5000;
	}
	if (!delay){
		console.warn("//>IMWKS$WKS$ -//Parameter delay in function IsOnlineRel(x,x,x) is undefined or null. Delay will has 10000 value.");
		delay = 10000;
	}
	if (!count){
		console.warn("//>IMWKS$WKS$ -//Parameter count in function IsOnlineRel(x,x,x) is undefined or null. Count will has 9999999 value.");
		count = 9999999;
	}
	if (!code){
		console.warn("//>IMWKS$WKS$ -//Parameter code in function IsOnlineRel(x,x,x) is undefined or null. Code will has none value.");
		code = "none";
	}
	if (url == "n" || url == "no" || url == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter url in function IsOnlineRel(x,x,x) is skipped. Parameter url cannot be skipped. Function cannot run.");
		return undefined;
	}
	if (ifOnline == "n" || ifOnline == "no" || ifOnline == "none")
		ifOnline = "none";
	if (ifOffline == "n" || ifOffline == "no" || ifOffline == "none")
		ifOffline = "none";
	if (timewait == "n" || timewait == "no" || timewait == "none")
		timewait = 5000;
	if (delay == "n" || delay == "no" || delay == "none")
		delay = 10000;
	if (count == "n" || count == "no" || count == "none")
		count = 9999999;
	if (code == "n" || code == "no" || code == "none")
		code = "none";
	var rep = setInterval(function(){if (count > 0){if (code != "none"){eval(code);}IsOnline(url,ifOnline,ifOffline,timewait);count--;}else{clearInterval(rep);return "done";}},delay);
	return "done";
}

function IsOfflineRel(url,ifOnline,ifOffline,timewait,delay,count,code){
	if (!url){
		console.error("//>IMWKS$WKS$ -//Parameter url in function IsOfflineRel(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!ifOnline){
		console.warn("//>IMWKS$WKS$ -//Parameter ifOnline in function IsOfflineRel(x,x,x) is undefined or null. IfOnline will has none value.");
		ifOnline = "none";
	}
	if (!ifOffline){
		console.warn("//>IMWKS$WKS$ -//Parameter ifOffline in function IsOfflineRel(x,x,x) is undefined or null. IfOffline will has none value.");
		ifOffline = "none";
	}
	if (!timewait){
		console.warn("//>IMWKS$WKS$ -//Parameter timewait in function IsOfflineRel(x,x,x) is undefined or null. Timewait will has 5000 value.");
		timewait = 5000;
	}
	if (!delay){
		console.warn("//>IMWKS$WKS$ -//Parameter delay in function IsOfflineRel(x,x,x) is undefined or null. Delay will has 10000 value.");
		delay = 10000;
	}
	if (!count){
		console.warn("//>IMWKS$WKS$ -//Parameter count in function IsOfflineRel(x,x,x) is undefined or null. Count will has 9999999 value.");
		count = 9999999;
	}
	if (!code){
		console.warn("//>IMWKS$WKS$ -//Parameter code in function IsOfflineRel(x,x,x) is undefined or null. Code will has none value.");
		code = "none";
	}
	if (url == "n" || url == "no" || url == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter url in function IsOfflineRel(x,x,x) is skipped. Parameter url cannot be skipped. Function cannot run.");
		return undefined;
	}
	if (ifOnline == "n" || ifOnline == "no" || ifOnline == "none")
		ifOnline = "none";
	if (ifOffline == "n" || ifOffline == "no" || ifOffline == "none")
		ifOffline = "none";
	if (timewait == "n" || timewait == "no" || timewait == "none")
		timewait = 5000;
	if (delay == "n" || delay == "no" || delay == "none")
		delay = 10000;
	if (count == "n" || count == "no" || count == "none")
		count = 9999999;
	if (code == "n" || code == "no" || code == "none")
		code = "none";
	if (!delay)	
		delay = 5000;
	if (!count)
		count = 9999999;
	if (!code)
		code = "none";
	var rep = setInterval(function(){if (count > 0){if (code != "none"){eval(code);}IsOffline(url,ifOnline,ifOffline,timewait);count--;}else{clearInterval(rep);return "done";}},delay);
	return "done";
}

function GetOwnIp(code){
	if (!code){
		console.warn("//>IMWKS$WKS$ -//Parameter code in function GetOwnIp(x,x,x) is undefined or null. Code will has none value.");
		code = "none";
	}
	if (code == "n" || code == "no" || code == "none")
		code = "none";
	GetOwnIpVal = undefined;
	GetOwnIpCode = undefined;
	if (code != "none")
		GetOwnIpCode = code;
	IncludeScript("https://api.ipify.org?format=jsonp&callback=GetOwnIpWork");
	return "done";
}

function GetOwnIpWork(json){
	if (json)
		GetOwnIpVal = json.ip;
	if (GetOwnIpCode)
		eval(GetOwnIpCode);
	return GetOwnIpVal;
}

function SetHash(value,key) {
	var str = value;
	var pwd = key;
	if(pwd === null || pwd.length <= 0) {
		console.error("//>IMWKS$WKS$ -//Parameter key in function SetHash(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if(str === null || str === undefined || str.length <= 0) {
		console.error("//>IMWKS$WKS$ -//Parameter value in function SetHash(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	var prand = "";
	for(var i=0; i<pwd.length; i++) {
		prand += pwd.charCodeAt(i).toString();
	}
	var sPos = Math.floor(prand.length / 5);
	var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos*2) + prand.charAt(sPos*3) + prand.charAt(sPos*4) + prand.charAt(sPos*5));
	var incr = Math.ceil(pwd.length / 2);
	var modu = Math.pow(2, 31) - 1;
	if(mult < 2) {
		console.error("//>IMWKS$WKS$ -//Hash cannot be created. Bad values for creating hash. Function SetHash(x,x,x) cannot run.");
		return undefined;
	}
	var salt = Math.round(Math.random() * 1000000000) % 100000000;
	prand += salt;
	while(prand.length > 10) {
		prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();
	}
	prand = (mult * prand + incr) % modu;
	var enc_chr = "";
	var enc_str = "";
	for(var i=0; i<str.length; i++) {
		enc_chr = parseInt(str.charCodeAt(i) ^ Math.floor((prand / modu) * 255));
		if(enc_chr < 16) {
			enc_str += "0" + enc_chr.toString(16);
		} else 
			enc_str += enc_chr.toString(16);
		prand = (mult * prand + incr) % modu;
	}
	salt = salt.toString(16);
	while(salt.length < 8)
		salt = "0" + salt;
	enc_str += salt;
	return enc_str;
}

function GetHash(value,key) {
	var str = value;
	var pwd = key;
	if(pwd == null || pwd === undefined || pwd.length <= 0) {
		console.error("//>IMWKS$WKS$ -//Parameter key in function GetHash(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if(str === null || str === undefined || str.length <= 0) {
		console.error("//>IMWKS$WKS$ -//Parameter value in function GetHash(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if(str == null || str.length < 8) {
		console.error("//>IMWKS$WKS$ -//Hash cannot be getted. Too short hash value (min:8) for getting value. Function GetHash(x,x,x) cannot run.");
		return undefined;
	}
	var prand = "";
	for(var i=0; i<pwd.length; i++) {
		prand += pwd.charCodeAt(i).toString();
	}
	var sPos = Math.floor(prand.length / 5);
	var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos*2) + prand.charAt(sPos*3) + prand.charAt(sPos*4) + prand.charAt(sPos*5));
	var incr = Math.round(pwd.length / 2);
	var modu = Math.pow(2, 31) - 1;
	var salt = parseInt(str.substring(str.length - 8, str.length), 16);
	str = str.substring(0, str.length - 8);
	prand += salt;
	while(prand.length > 10) {
		prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();
	}
	prand = (mult * prand + incr) % modu;
	var enc_chr = "";
	var enc_str = "";
	for(var i=0; i<str.length; i+=2) {
		enc_chr = parseInt(parseInt(str.substring(i, i+2), 16) ^ Math.floor((prand / modu) * 255));
		enc_str += String.fromCharCode(enc_chr);
		prand = (mult * prand + incr) % modu;
	}
	return enc_str;
}

var ua = navigator.userAgent.toLowerCase();
var cvalue = 0;
var pvalue = 0;
var waittime = 1;
var done = "no";
var stp = 0;
var start = 1
var WKSRES1 = undefined;
var WKSRES2 = undefined;
var WKSRES3 = undefined;
var WKSRES4 = undefined;
var WKSRES5 = undefined;
var WKSRES6 = undefined;
var WKSRES7 = undefined;
if (ua.indexOf(" chrome/") >= 0 || ua.indexOf(" firefox/") >= 0 || ua.indexOf(' gecko/') >= 0) {
	var StringMaker = function () {
		this.str = "";
		this.length = 0;
		this.append = function (s) {
			this.str += s;
			this.length += s.length;
		}
		this.prepend = function (s) {
			this.str = s + this.str;
			this.length += s.length;
		}
		this.toString = function () {
			return this.str;
		}
	}
} else {
	var StringMaker = function () {
		this.parts = [];
		this.length = 0;
		this.append = function (s) {
			this.parts.push(s);
			this.length += s.length;
		}
		this.prepend = function (s) {
			this.parts.unshift(s);
			this.length += s.length;
		}
		this.toString = function () {
			return this.parts.join('');
		}
	}
}

function MakeIntoString(S) {
	S = StringReplace("\\", "\\\\", S);
	S = StringReplace("\"", "\\\"", S);
	S = StringReplace("\n", "\\n", S);
	return S;
}

function BitsToBytes(i) {
	o = 42;
	if (i.charAt(0) == '1') {
		o += 32;
	}
	if (i.charAt(1) == '1') {
		o += 16;
	}
	if (i.charAt(2) == '1') {
		o += 8;
	}
	if (i.charAt(3) == '1') {
		o += 4;
	}
	if (i.charAt(4) == '1') {
		o += 2;
	}
	if (i.charAt(5) == '1') {
		o += 1;
	}
	if (o >= 92) {
		o ++;
	}
	return String.fromCharCode(o);
}

function CompressCode(dataSC,idPval,idCval) {
	if (!dataSC)
		return undefined;
	var datain = "";
	for (var pct = 0;pct < dataSC.length;pct++){
		var numbercode = dataSC.charCodeAt(pct);
		numbercode = numbercode.toString();
		switch(numbercode.length){
			case 1:
				numbercode = "0000"+""+numbercode.toString();
				break;
			case 2:
				numbercode = "000"+""+numbercode.toString();
				break;
			case 3:
				numbercode = "00"+""+numbercode.toString();
				break;
			case 4:
				numbercode = "0"+""+numbercode.toString();
				break;
		}
		datain += ""+numbercode;
	}
	dataSC = datain;
	WKSRES1 = undefined;
	WKSRES2 = undefined;
	WKSRES3 = undefined;
	WKSRES4 = undefined;
	WKSRES5 = undefined;
	WKSRES6 = undefined;
	WKSRES7 = undefined;
	var vln = dataSC;
	var tsko = "no";
	var tsko2 = "no";
	if (idPval){
		if (idPval != "none" || idPval !== 0){
			tsko = "yo";
		}
	}
	if (idCval){
		if (idCval != "none" || idCval !== 0){
			tsko2 = "yo";
		}
	}
	var Letters = new Array(256);
	var LetterCodes = new Array(256);
	var ov = vln;

	cvalue = "Working ...";
	pvalue = "Counting Letters";
	if (tsko == "yo"){
		idPval.value = pvalue;
	}
	if (tsko2 == "yo"){
		idCval.value = cvalue;
	}

	for (i = 0; i < 256; i ++) {
		Letters[i] = 0;
	}

	for (i = 0; i < ov.length; i ++) {
		if ((i & 0xFF) == 0) {
			pvalue = "Counting Letters - " + Math.floor((100 * i) / ov.length) + "%";
			if (tsko == "yo"){
				idPval.value = pvalue;
			}
		}
		Letters[ov.charCodeAt(i)] ++;
	}
	var NodeLetter = new Array(512);
	var NodeCount = new Array(512);
	var NodeChild1 = new Array(512);
	var NodeChild2 = new Array(512);
	NextParent = 0;

	pvalue = "Constructing node list";
	for (i = 0; i < 256; i ++) {
		if (Letters[i] > 0) {
			NodeLetter[NextParent] = i;
			NodeCount[NextParent] = Letters[i];
			NodeChild1[NextParent] = -1;
			NodeChild2[NextParent] = -1;
			NextParent ++;
		}
	}

	pvalue = "Constructing tree";
	if (tsko == "yo"){
		idPval.value = pvalue;
	}
	SmallestNode2 = 1;
	while (SmallestNode2 != -1) {
		SmallestNode1 = -1;
		SmallestNode2 = -1;

		for (i = 0; i < NextParent; i ++) {
			if (NodeCount[i] > 0) {
				if (SmallestNode1 == -1) {
					SmallestNode1 = i;
				} else if (SmallestNode2 == -1) {
					if (NodeCount[i] < NodeCount[SmallestNode1]) {
						SmallestNode2 = SmallestNode1;
						SmallestNode1 = i;
					} else {
						SmallestNode2 = i;
					}
				} else if (NodeCount[i] <= NodeCount[SmallestNode1]) {
					SmallestNode2 = SmallestNode1;
					SmallestNode1 = i;
				}
			}
		}

		if (SmallestNode2 != -1) {
			NodeCount[NextParent] = NodeCount[SmallestNode1] + NodeCount[SmallestNode2];
			NodeCount[SmallestNode1] = 0;
			NodeCount[SmallestNode2] = 0;
			NodeChild1[NextParent] = SmallestNode2;
			NodeChild2[NextParent] = SmallestNode1;
			NextParent ++;
		}
	}

	pvalue = "Making final array";
	if (tsko == "yo"){
		idPval.value = pvalue;
	}
	var FinalNodes = Array(NextParent);
	var DepthIndex = Array(256);
	Depth = 0;
	NextFinal = 0;
	DepthIndex[Depth] = SmallestNode1;
	while (Depth >= 0) {
		if (NodeChild1[DepthIndex[Depth]] > -1 && NodeChild2[DepthIndex[Depth]] > -1) {
			idx = NodeChild1[DepthIndex[Depth]];
			NodeChild1[DepthIndex[Depth]] = -2 - NextFinal;
			Depth ++;
			DepthIndex[Depth] = idx;
			NextFinal ++;
		} else if (NodeChild1[DepthIndex[Depth]] < 0 && NodeChild2[DepthIndex[Depth]] > -1) {
			idx = NodeChild1[DepthIndex[Depth]];
			idx = 0 - idx;
			idx -= 2;
			FinalNodes[idx] = - NextFinal;

			idx = NodeChild2[DepthIndex[Depth]];
			NodeChild2[DepthIndex[Depth]] = -2;
			Depth ++;
			DepthIndex[Depth] = idx;
		} else if (NodeChild1[DepthIndex[Depth]] < -1 && NodeChild2[DepthIndex[Depth]] < -1) {
			Depth --;
		} else if (NodeChild1[DepthIndex[Depth]] == -1 && NodeChild2[DepthIndex[Depth]] == -1) {
			FinalNodes[NextFinal] = NodeLetter[DepthIndex[Depth]];
			NextFinal ++;
			Depth --;
		} else {
			console.error('-// ERD HCOMPRESS SEMCA TYPE 001-6b //- Bad algorithm!');
			return;
		}
	}


	pvalue = "Determining codes";
	if (tsko == "yo"){
		idPval.value = pvalue;
	}
	var CodeIndex = new Array(256);
	DepthIndex[0] = 0;
	CodeIndex[0] = "";
	Depth = 0;
	while (Depth >= 0) {
		if (FinalNodes[DepthIndex[Depth]] < 0) {
			c = CodeIndex[Depth];
			idx = DepthIndex[Depth];
			DepthIndex[Depth + 1] = DepthIndex[Depth] + 1;
			CodeIndex[Depth + 1] = c + '0';
			DepthIndex[Depth] = 0 - FinalNodes[idx];
			CodeIndex[Depth] = c + '1';
			Depth ++;
		} else {
			LetterCodes[FinalNodes[DepthIndex[Depth]]] = CodeIndex[Depth];
			Depth --;
		}
	}


	pvalue = "Building data stream";
	if (tsko == "yo"){
		idPval.value = pvalue;
	}
	bits = "";
	var bytes = new StringMaker();
	for (i = 0; i < ov.length; i ++) {
		if ((i & 0xFF) == 0) {
			pvalue = "Building Data Stream - " + Math.floor((100 * i) / ov.length) + "%";
		}
		bits += LetterCodes[ov.charCodeAt(i)];
		while (bits.length > 5) {
			bytes.append(BitsToBytes(bits));
			bits = bits.slice(6, bits.length);
		}
	}
	bytes.append(BitsToBytes(bits));

	var S = "";
	var nodle = 0;

	bytes = bytes.toString();
	while (bytes.length > 74) {
		S += bytes.slice(0, 74);
		bytes = bytes.slice(74, bytes.length);
		nodle = 1;
	}

	if (nodle == 0){
		S = bytes;
	}
	else if (nodle == 1){
		S +=bytes
	}

	pvalue = "Writing final script";
	if (tsko == "yo"){
		idPval.value = pvalue;
	}
	var uservalue = DeCode(FinalNodes,S,ov.length);
	cvalue = FinalNodes;
	var imn = parseInt(FinalNodes.length)+parseInt(S.length);
	pvalue = 100-Math.floor(100 - parseInt(((ov.length/100)*imn),10)/100 * (ov.length - imn) / ov.length);
	var pocetZnakuUserValue =  ov.length;
	var pocetZnakuVysledek =  imn;
	var CompVysledek = cvalue;
	var CompRatio = pvalue;
	if (tsko == "yo"){
		idPval.value = pvalue;
	}
	if (tsko2 == "yo"){
		idCval.value = cvalue;
	}
	WKSRES1 = FinalNodes;
	WKSRES2 = S;
	WKSRES3 = ov.length;
	WKSRES4 = CompRatio;
	WKSRES5 = pocetZnakuUserValue;
	WKSRES6 = pocetZnakuVysledek;
	WKSRES7 = uservalue;
	return "done";
}

function DeCode(FinNodes,Byt,OvLength){
	var bytes = Byt;
	OvLength = Number(OvLength);
	var FinalNodes = FinNodes.toString().split(",");
	var FinNodes2 = new Array();
	for (var r = 0; r < FinalNodes.length;r++)
		FinNodes2.push(Number(FinalNodes[r]));
	FinalNodes = FinNodes2;
	encodedNodes = "";
	for (i = 0; i < FinalNodes.length; i ++) {
		var x, y;
		x = FinalNodes[i] + 512;
		y = x & 0x3F;
		x >>= 6;
		x &= 0x3F;
		x += 42;
		y += 42;
		if (x >= 92) {
			x ++;
		}
		if (y >= 92) {
			y ++;
		}
		encodedNodes += String.fromCharCode(x) + String.fromCharCode(y);
	}
	var a = "";
	var tgd = 0;
	while (encodedNodes.length > 74) {
		a += encodedNodes.slice(0, 74);
		encodedNodes = encodedNodes.slice(74, encodedNodes.length);
		tgd = 1;
	}
	if (tgd == 0){
		a = encodedNodes;
	}
	else{
		a += encodedNodes;
	}
	l=new Array();
	while(a.length){
		l.push((Y(a.charCodeAt(0))<<6)+Y(a.charCodeAt(1))-512);
		a=a.slice(2,a.length)
	}
	var d=bytes;
	c=OvLength;
	e=b=a=0;o="";
	function Y(y){
		if(y>92)
			y--;
		return y-42
	}
	function B(){
		if(a==0){
			b=Y(d.charCodeAt(e++));
			a=6;
		}
		return ((b>>--a)&0x01);
	}
	while(c--){
		i=0;
		while(l[i]<0){
			if(B())
				i=-l[i];
			else i++;
		}
		o+=String.fromCharCode(l[i]);
	}
	var res = new Array();
	var vys = "";
	var max = 5;
	var min = 0;
	for (var cnt = 0;cnt < o.length;cnt++){
		if (max > OvLength)
			break;
		var resslice = o.slice(min,max);
		res.push(resslice);
		max = max+5;
		min = min+5;
	}
	for (var rescnt = 0;rescnt < res.length;rescnt++){
		vys += String.fromCharCode(res[rescnt]);
	}
	var userReturn = vys;
	return userReturn;
}

function Compression(data){
	if (!data){
		console.error("//>IMWKS$WKS$ -//Parameter data in function Compression(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (data == "n" || data == "no" || data == "none"){
		console.error("//>IMLAI$LAI$ -//Parameter data in function Compression(x,x,x) is skipped. Parameter data cannot be skipped. Function cannot run.");
		return undefined;
	}
	CompressCode(data,"n","n");
	resource = new Array(WKSRES1,WKSRES2,WKSRES3,WKSRES4,WKSRES5,WKSRES6,WKSRES7);
	WKSRES1 = undefined;
	WKSRES2 = undefined;
	WKSRES3 = undefined;
	WKSRES4 = undefined;
	WKSRES5 = undefined;
	WKSRES6 = undefined;
	WKSRES7 = undefined;
	return resource;
}

function DeCompression(CompressedData,bytes,CountOfCharsInOrigin){
	if (!CompressedData){
		console.error("//>IMWKS$WKS$ -//Parameter CompressedData in function DeCompression(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!bytes){
		console.error("//>IMWKS$WKS$ -//Parameter bytes in function DeCompression(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!CountOfCharsInOrigin){
		console.error("//>IMWKS$WKS$ -//Parameter CountOfCharsInOrigin in function DeCompression(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (CompressedData == "n" || CompressedData == "no" || CompressedData == "none"){
		console.error("//>IMLAI$LAI$ -//Parameter CompressedData in function DeCompression(x,x,x) is skipped. Parameter CompressedData cannot be skipped. Function cannot run.");
		return undefined;
	}
	if (bytes == "n" || bytes == "no" || bytes == "none"){
		console.error("//>IMLAI$LAI$ -//Parameter bytes in function DeCompression(x,x,x) is skipped. Parameter bytes cannot be skipped. Function cannot run.");
		return undefined;
	}
	if (CountOfCharsInOrigin == "n" || CountOfCharsInOrigin == "no" || CountOfCharsInOrigin == "none"){
		console.error("//>IMLAI$LAI$ -//Parameter CountOfCharsInOrigin in function DeCompression(x,x,x) is skipped. Parameter CountOfCharsInOrigin cannot be skipped. Function cannot run.");
		return undefined;
	}
	var resource = DeCode(CompressedData,bytes,CountOfCharsInOrigin);
	return resource;
}

function CompressionC(data){
	if (!data){
		console.error("//>IMWKS$WKS$ -//Parameter data in function CompressionC(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (data == "n" || data == "no" || data == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter data in function CompressionC(x,x,x) is skipped. Parameter data cannot be skipped. Function cannot run.");
		return undefined;
	}
	var resultGet = Compression(data);
	var result = resultGet[0]+"1100x0011"+resultGet[1]+"1100x0011"+resultGet[2];
	return result;
}

function DeCompressionC(data){
	if (!data){
		console.error("//>IMWKS$WKS$ -//Parameter data in function DeCompressionC(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (data == "n" || data == "no" || data == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter data in function DeCompressionC(x,x,x) is skipped. Parameter data cannot be skipped. Function cannot run.");
		return undefined;
	}
	var resultGet = data.split("1100x0011");
	if (resultGet.length != 3){
		console.error("//>IMWKS$WKS$ -//Parameter data in function DeCompressionC(x,x,x) has bad code. Function cannot run.");
		return undefined;
	}
	console.log(resultGet);
	var result = DeCompression(resultGet[0],resultGet[1],resultGet[2]);
	return result;
}

function Location(where,target,type){
	if (!where){
		console.warn("//>IMWKS$WKS$ -//Parameter where in function Location(x,x,x) is undefined or null. Where will has none value.");
		where = "none";
	}
	if (!target){
		console.warn("//>IMWKS$WKS$ -//Parameter target in function Location(x,x,x) is undefined or null. Target will has this value.");
		target = "this";
	}
	if (!type){
		console.warn("//>IMWKS$WKS$ -//Parameter type in function Location(x,x,x) is undefined or null. Target will has normal value.");
		type = "normal";
	}
	if (where == "n" || where == "no" || where == "none")
		where = "none";
	if (target == "n" || target == "no" || target == "none")
		target = "this";
	if (type == "n" || type == "no" || type == "none")
		type = "normal";
	if (type == "replace"){
		if (where == "none" || where == "" || where == "this.location.href" || where == eval(target+".location.href")){
			console.error("//>IMWKS$WKS$ -//-ERD-Error in function Location(x,x,x). No-end loop has occured. The script will be stopped!");
			console.log("//>IMWKS$WKS$ -//-ERD-Function Location(x,x,x) was stopped. Please, check your code for mistakes.");
			return undefined;
		}
		else
			eval(target+".location.replace(where);");
	}
	else{
		if (where == "none" || where == "" || where == "this.location.href" || where == eval(target+".location.href")){
			console.error("//>IMWKS$WKS$ -//-ERD-Error in function Location(x,x,x). No-end loop has occured. The script will be stopped!");
			console.log("//>IMWKS$WKS$ -//Function Location(x,x,x) was stopped. Please, check your code for mistakes.");
			return undefined;
		}	
		else
			eval(target+".location.href = where;");
	}
	return "done";
}

function SetStorage(name,value){
	if (!name){
		console.error("//>IMWKS$WKS$ -//Parameter name in function SetStorage(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!value){
		console.error("//>IMWKS$WKS$ -//Parameter value in function SetStorage(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	localStorage.setItem(name, value);
	return "done";
}

function GetStorage(name){
	if (!name){
		console.error("//>IMWKS$WKS$ -//Parameter name in function GetStorage(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	var res = localStorage.getItem(name); 
	return res;
}

function DelStorage(name){
	if (!name){
		console.error("//>IMWKS$WKS$ -//Parameter name in function DelStorage(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	localStorage.removeItem(name);
	return "done";
}

function MoveStorage(nameOld,nameNew){
	if (!nameOld){
		console.error("//>IMWKS$WKS$ -//Parameter nameOld in function MoveStorage(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!nameNew){
		console.error("//>IMWKS$WKS$ -//Parameter nameNew in function MoveStorage(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	var res = localStorage.getItem(nameOld); 
	localStorage.setItem(nameNew, res);
	localStorage.removeItem(nameOld);
	return "done";
}

function RenameStorage(nameOld,nameNew){
	if (!nameOld){
		console.error("//>IMWKS$WKS$ -//Parameter nameOld in function RenameStorage(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!nameNew){
		console.error("//>IMWKS$WKS$ -//Parameter nameNew in function RenameStorage(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	MoveStorage(nameOld,nameNew);
	return "done";
}

function CopyStorage(from,to){
	if (!from){
		console.error("//>IMWKS$WKS$ -//Parameter from in function CopyStorage(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!to){
		console.error("//>IMWKS$WKS$ -//Parameter to in function CopyStorage(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	var res = localStorage.getItem(from); 
	localStorage.setItem(to,res);
	return "done";
}

function PushStorage(data,into){
	if (!data){
		console.error("//>IMWKS$WKS$ -//Parameter data in function PushStorage(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!into){
		console.error("//>IMWKS$WKS$ -//Parameter into in function PushStorage(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	var res = localStorage.getItem(from); 
	res = res.toString()+data.toString();
	localStorage.setItem(into,res);
	return "done";
}

function PushStorageBefore(data,into){
	if (!data){
		console.error("//>IMWKS$WKS$ -//Parameter data in function PushStorageBefore(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!into){
		console.error("//>IMWKS$WKS$ -//Parameter into in function PushStorageBefore(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	var res = localStorage.getItem(from); 
	res = data.toString()+res.toString();
	localStorage.setItem(into,res);
	return "done";
}


function PushStorageAfter(data,into){
	if (!data){
		console.error("//>IMWKS$WKS$ -//Parameter data in function PushStorageAfter(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!into){
		console.error("//>IMWKS$WKS$ -//Parameter into in function PushStorageAfter(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	PushStorage(data,into);
	return "done";
}

function StorageLength(name){
	if (!name){
		console.error("//>IMWKS$WKS$ -//Parameter name in function StorageLength(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	var res0 = localStorage.getItem(name); 
	var res = res0.length;
	return res;
}

function StorageCompare(name1,name2){
	if (!name1){
		console.error("//>IMWKS$WKS$ -//Parameter name1 in function StorageCompare(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!name2){
		console.error("//>IMWKS$WKS$ -//Parameter name2 in function StorageCompare(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	var res1 = localStorage.getItem(name1); 
	var res2 = localStorage.getItem(name2); 
	if (res1 == res2)
		return 1;
	return 0;
}

function StorageJoin(nameFirst,nameLast,nameResult){
	if (!nameFirst){
		console.error("//>IMWKS$WKS$ -//Parameter nameFirst in function StorageJoin(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!nameLast){
		console.error("//>IMWKS$WKS$ -//Parameter nameLast in function StorageJoin(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!nameResult){
		console.error("//>IMWKS$WKS$ -//Parameter nameResult in function StorageJoin(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}

	var res1 = localStorage.getItem(nameFirst); 
	var res2 = localStorage.getItem(nameLast); 
	var res3 = res1.toString()+res2.toString();
	localStorage.setItem(nameResult,res3);
	return "done";
}

function SetCookie(name,value,expTime){
	if (!name){
		console.error("//>IMWKS$WKS$ -//Parameter name in function SetCookie(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!value){
		console.error("//>IMWKS$WKS$ -//Parameter value in function SetCookie(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!expTime){
		console.warn("//>IMWKS$WKS$ -//Parameter expTime in function SetCookie(x,x,x) is undefined or null. ExpTime will has none value.");
		expTime = "none";
	}
	if (expTime == "n" || expTime == "no" || expTime == "none")
		expTime = "none";
	var datum = new Date();
	if (!IsInt(expTime)){
		if (expTime != "none"){
			console.error("//>IMWKS$WKS$ -//Bad value in parameter expTime in function SetCookie(x,x,x). Expected value is in int type for this parameter. Function cannot run.");
			return undefined;
		}
	}
	if (expTime != "none"){
		datum.setTime(datum.getTime() + expTime);
		document.cookie = name+"="+value+";expires=" + datum.toGMTString();
	}
	else
		document.cookie = name+"="+value;
	return "done";
}

function GetCookie(name){
	if (!name){
		console.error("//>IMWKS$WKS$ -//Parameter name in function GetCookie(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
  	var CookArray = document.cookie.split(";");
   	for (var i = 0; i < CookArray.length;i++){
      		var Cook = CookArray[i].split("=");
        		if (Cook[0].trim() == name){
			var res = Cook[1];
       			return res;
		}
   	}
	return undefined;
}

function DelCookie(name){
	if (!name){
		console.error("//>IMWKS$WKS$ -//Parameter name in function DelCookie(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	var datum = new Date();
	var odecet = datum.getTime();
	odecet = parseInt(odecet,10)-1000;
	odecet = 0-parseInt(odecet,10);
	SetCookie(name,"none",odecet);
	return "done";
}

function MoveCookie(nameOld,nameNew,expTime){
	if (!nameOld){
		console.error("//>IMWKS$WKS$ -//Parameter nameOld in function MoveCookie(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!nameNew){
		console.error("//>IMWKS$WKS$ -//Parameter nameNew in function MoveCookie(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!expTime){
		console.warn("//>IMWKS$WKS$ -//Parameter expTime in function MoveCookie(x,x,x) is undefined or null. ExpTime will has none value.");
		expTime = "none";
	}
	if (expTime == "n" || expTime == "no" || expTime == "none")
		expTime = "none";
	if (!IsInt(expTime)){
		if (expTime != "none"){
			console.error("//>IMWKS$WKS$ -//Bad value in parameter expTime in function MoveCookie(x,x,x). Expected value is in int type for this parameter. Function cannot run.");
			return undefined;
		}
	}
	var res = GetCookie(nameOld); 
	SetCookie(nameNew,res,expTime);
	DelCookie(nameOld);
	return "done";
}

function RenameCookie(nameOld,nameNew,expTime){
	if (!nameOld){
		console.error("//>IMWKS$WKS$ -//Parameter nameOld in function RenameCookie(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!nameNew){
		console.error("//>IMWKS$WKS$ -//Parameter nameNew in function RenameCookie(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!expTime){
		console.warn("//>IMWKS$WKS$ -//Parameter expTime in function RenameCookie(x,x,x) is undefined or null. ExpTime will has none value.");
		expTime = "none";
	}
	if (expTime == "n" || expTime == "no" || expTime == "none")
		expTime = "none";
	if (!IsInt(expTime)){
		if (expTime != "none"){
			console.error("//>IMWKS$WKS$ -//Bad value in parameter expTime in function RenameCookie(x,x,x). Expected value is in int type for this parameter. Function cannot run.");
			return undefined;
		}
	}
	MoveCookie(nameOld,nameNew,expTime);
	return "done";
}

function CopyCookie(from,to,expTime){
	if (!from){
		console.error("//>IMWKS$WKS$ -//Parameter from in function CopyCookie(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!to){
		console.error("//>IMWKS$WKS$ -//Parameter to in function CopyCookie(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!expTime){
		console.warn("//>IMWKS$WKS$ -//Parameter expTime in function CopyCookie(x,x,x) is undefined or null. ExpTime will has none value.");
		expTime = "none";
	}
	if (expTime == "n" || expTime == "no" || expTime == "none")
		expTime = "none";
	if (!IsInt(expTime)){
		if (expTime != "none"){
			console.error("//>IMWKS$WKS$ -//Bad value in parameter expTime in function CopyCookie(x,x,x). Expected value is in int type for this parameter. Function cannot run.");
			return undefined;
		}
	}
	var res = GetCookie(from);
	SetCookie(to,res,expTime); 
	return "done";
}

function PushCookie(data,into,expTime){
	if (!data){
		console.error("//>IMWKS$WKS$ -//Parameter data in function PushCookie(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!into){
		console.error("//>IMWKS$WKS$ -//Parameter into in function PushCookie(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!expTime){
		console.warn("//>IMWKS$WKS$ -//Parameter expTime in function PushCookie(x,x,x) is undefined or null. ExpTime will has none value.");
		expTime = "none";
	}
	if (expTime == "n" || expTime == "no" || expTime == "none")
		expTime = "none";
	if (!IsInt(expTime)){
		if (expTime != "none"){
			console.error("//>IMWKS$WKS$ -//Bad value in parameter expTime in function PushCookie(x,x,x). Expected value is in int type for this parameter. Function cannot run.");
			return undefined;
		}
	}
	var res = GetCookie(from);
	res = res.toString()+data.toString();
	SetCookie(into,res,expTime); 
	return "done";
}

function PushCookieBefore(data,into,expTime){
	if (!data){
		console.error("//>IMWKS$WKS$ -//Parameter data in function PushCookieBefore(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!into){
		console.error("//>IMWKS$WKS$ -//Parameter into in function PushCookieBefore(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!expTime){
		console.warn("//>IMWKS$WKS$ -//Parameter expTime in function PushCookieBefore(x,x,x) is undefined or null. ExpTime will has none value.");
		expTime = "none";
	}
	if (expTime == "n" || expTime == "no" || expTime == "none")
		expTime = "none";
	if (!IsInt(expTime)){
		if (expTime != "none"){
			console.error("//>IMWKS$WKS$ -//Bad value in parameter expTime in function PushCookieBefore(x,x,x). Expected value is in int type for this parameter. Function cannot run.");
			return undefined;
		}
	}
	var res = GetCookie(from);
	res = data.toString()+res.toString();
	SetCookie(into,res,expTime); 
	return "done";
}


function PushCookieAfter(data,into,expTime){
	if (!data){
		console.error("//>IMWKS$WKS$ -//Parameter data in function PushCookieAfter(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!into){
		console.error("//>IMWKS$WKS$ -//Parameter into in function PushCookieAfter(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!expTime){
		console.warn("//>IMWKS$WKS$ -//Parameter expTime in function PushCookieAfter(x,x,x) is undefined or null. ExpTime will has none value.");
		expTime = "none";
	}
	if (expTime == "n" || expTime == "no" || expTime == "none")
		expTime = "none";
	if (!IsInt(expTime)){
		if (expTime != "none"){
			console.error("//>IMWKS$WKS$ -//Bad value in parameter expTime in function PushCookieAfter(x,x,x). Expected value is in int type for this parameter. Function cannot run.");
			return undefined;
		}
	}
	PushCookie(data,into,expTime)
	return "done";
}

function CookieLength(name){
	if (!name){
		console.error("//>IMWKS$WKS$ -//Parameter name in function CookieLength(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	var res0 = GetCookie(name); 
	var res = res0.length;
	return res;
}

function CookieCompare(name1,name2){
	if (!name1){
		console.error("//>IMWKS$WKS$ -//Parameter name1 in function CookieCompare(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!name2){
		console.error("//>IMWKS$WKS$ -//Parameter name2 in function CookieCompare(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	var res1 = GetCookie(name1);
	var res2 = GetCookie(name2);
	if (res1 == res2)
		return 1;
	return 0;
}

function CookieJoin(nameFirst,nameLast,nameResult,expTime){
	if (!nameFirst){
		console.error("//>IMWKS$WKS$ -//Parameter nameFirst in function CookieJoin(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!nameLast){
		console.error("//>IMWKS$WKS$ -//Parameter nameLast in function CookieJoin(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!nameResult){
		console.error("//>IMWKS$WKS$ -//Parameter nameResult in function CookieJoin(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!expTime){
		console.warn("//>IMWKS$WKS$ -//Parameter expTime in function CookieJoin(x,x,x) is undefined or null. ExpTime will has none value.");
		expTime = "none";
	}
	if (expTime == "n" || expTime == "no" || expTime == "none")
		expTime = "none";
	if (!IsInt(expTime)){
		if (expTime != "none"){
			console.error("//>IMWKS$WKS$ -//Bad value in parameter expTime in function CookieJoin(x,x,x). Expected value is in int type for this parameter. Function cannot run.");
			return undefined;
		}
	}

	var res1 = GetCookie(nameFirst); 
	var res2 = GetCookie(nameLast);
	var res3 = res1.toString()+res2.toString();
	SetCookie(nameResult,res3,expTime); 
	return "done";
}

function ConvertToStorage(nameCookie,nameStorage){
	if (!nameCookie){
		console.error("//>IMWKS$WKS$ -//Parameter nameCookie in function ConvertToStorage(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!nameStorage){
		console.error("//>IMWKS$WKS$ -//Parameter nameStorage in function ConvertToStorage(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	var res = GetCookie(nameCookie); 
	localStorage.setItem(nameStorage,res);
	DelCookie(nameCookie);
	return "done";
}

function ConvertToCookie(nameStorage,nameCookie,expTime){
	if (!nameStorage){
		console.error("//>IMWKS$WKS$ -//Parameter nameStorage in function ConvertToCookie(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!nameCookie){
		console.error("//>IMWKS$WKS$ -//Parameter nameCookie in function ConvertToCookie(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!expTime){
		console.warn("//>IMWKS$WKS$ -//Parameter expTime in function ConvertToCookie(x,x,x) is undefined or null. ExpTime will has none value.");
		expTime = "none";
	}
	if (expTime == "n" || expTime == "no" || expTime == "none")
		expTime = "none";
	if (!IsInt(expTime)){
		if (expTime != "none"){
			console.error("//>IMWKS$WKS$ -//Bad value in parameter expTime in function ConvertToCookie(x,x,x). Expected value is in int type for this parameter. Function cannot run.");
			return undefined;
		}
	}
	var res = localStorage.getItem(nameStorage); 
	SetCookie(nameCookie,res,expTime); 
	localStorage.removeItem(nameStorage);
	return "done";
}

function Compare(val1,val2){
	if (!IsInt(val1)){
		console.error("//>IMWKS$WKS$ -//Parameter val1 in function Compare(x,x,x) is not in int type. Function cannot run.");
		return undefined;
	}
	if (!IsInt(val2)){
		console.error("//>IMWKS$WKS$ -//Parameter val2 in function Compare(x,x,x) is not in int type. Function cannot run.");
		return undefined;
	}
	if (parseInt(val1,10) > parseInt(val2,10))
		return val1;
	else if (parseInt(val2,10) > parseInt(val1,10))
		return val2;
	else if (parseInt(val1,10) == parseInt(val2,10))
		return null;
	else
		return undefined;
}

function CompareInt(val1,val2){
	if (!IsInt(val1)){
		console.error("//>IMWKS$WKS$ -//Parameter val1 in function CompareInt(x,x,x) is not in int type. Function cannot run.");
		return undefined;
	}
	if (!IsInt(val2)){
		console.error("//>IMWKS$WKS$ -//Parameter val2 in function CompareInt(x,x,x) is not in int type. Function cannot run.");
		return undefined;
	}
	if (parseInt(val1,10) > parseInt(val2,10))
		return val1;
	else if (parseInt(val2,10) > parseInt(val1,10))
		return val2;
	else if (parseInt(val1,10) == parseInt(val2,10))
		return null;
	else
		return undefined;
}

function CompareDecimal(val1,val2){
	if (!IsInt(val1)){
		console.error("//>IMWKS$WKS$ -//Parameter val1 in function CompareDecimal(x,x,x) is not in int type. Function cannot run.");
		return undefined;
	}
	if (!IsInt(val2)){
		console.error("//>IMWKS$WKS$ -//Parameter val2 in function CompareDecimal(x,x,x) is not in int type. Function cannot run.");
		return undefined;
	}
	if (parseInt(val1,10) > parseInt(val2,10))
		return val1;
	else if (parseInt(val2,10) > parseInt(val1,10))
		return val2;
	else if (parseInt(val1,10) == parseInt(val2,10))
		return null;
	else
		return undefined;
}

function CompareHexaDecimal(val1,val2){
	if (!IsHexaInt(val1)){
		console.error("//>IMWKS$WKS$ -//Parameter val1 in function CompareHexaDecimal(x,x,x) is not in int type. Function cannot run.");
		return undefined;
	}
	if (!IsHexaInt(val2)){
		console.error("//>IMWKS$WKS$ -//Parameter val2 in function CompareHexaDecimal(x,x,x) is not in int type. Function cannot run.");
		return undefined;
	}
	if (parseInt(val1,16) > parseInt(val2,16))
		return val1;
	else if (parseInt(val2,16) > parseInt(val1,16))
		return val2;
	else if (parseInt(val1,16) == parseInt(val2,16))
		return null;
	else
		return undefined;
}

function CompareHexa(val1,val2){
	if (!IsHexaInt(val1)){
		console.error("//>IMWKS$WKS$ -//Parameter val1 in function CompareHexa(x,x,x) is not in int type. Function cannot run.");
		return undefined;
	}
	if (!IsHexaInt(val2)){
		console.error("//>IMWKS$WKS$ -//Parameter val2 in function CompareHexa(x,x,x) is not in int type. Function cannot run.");
		return undefined;
	}
	if (parseInt(val1,16) > parseInt(val2,16))
		return val1;
	else if (parseInt(val2,16) > parseInt(val1,16))
		return val2;
	else if (parseInt(val1,16) == parseInt(val2,16))
		return null;
	else
		return undefined;
}

function CompareOctal(val1,val2){
	if (!IsOctal(val1)){
		console.error("//>IMWKS$WKS$ -//Parameter val1 in function CompareOctal(x,x,x) is not in int type. Function cannot run.");
		return undefined;
	}
	if (!IsOctal(val2)){
		console.error("//>IMWKS$WKS$ -//Parameter val2 in function CompareOctal(x,x,x) is not in int type. Function cannot run.");
		return undefined;
	}
	if (parseInt(val1,8) > parseInt(val2,8))
		return val1;
	else if (parseInt(val2,8) > parseInt(val1,8))
		return val2;
	else if (parseInt(val1,8) == parseInt(val2,8))
		return null;
	else
		return undefined;
}

function CompareQuad(val1,val2){
	if (!IsQuad(val1)){
		console.error("//>IMWKS$WKS$ -//Parameter val1 in function CompareQuad(x,x,x) is not in int type. Function cannot run.");
		return undefined;
	}
	if (!IsQuad(val2)){
		console.error("//>IMWKS$WKS$ -//Parameter val2 in function CompareQuad(x,x,x) is not in int type. Function cannot run.");
		return undefined;
	}
	if (parseInt(val1,4) > parseInt(val2,4))
		return val1;
	else if (parseInt(val2,4) > parseInt(val1,4))
		return val2;
	else if (parseInt(val1,4) == parseInt(val2,4))
		return null;
	else
		return undefined;
}

function CompareBinary(val1,val2){
	if (!IsBinary(val1)){
		console.error("//>IMWKS$WKS$ -//Parameter val1 in function CompareBinary(x,x,x) is not in int type. Function cannot run.");
		return undefined;
	}
	if (!IsBinary(val2)){
		console.error("//>IMWKS$WKS$ -//Parameter val2 in function CompareBinary(x,x,x) is not in int type. Function cannot run.");
		return undefined;
	}
	if (parseInt(val1,2) > parseInt(val2,2))
		return val1;
	else if (parseInt(val2,2) > parseInt(val1,2))
		return val2;
	else if (parseInt(val1,2) == parseInt(val2,2))
		return null;
	else
		return undefined;
}

function CompareChar(val1,val2){
	if (!IsChar(val1)){
		console.error("//>IMWKS$WKS$ -//Parameter val1 in function CompareChar(x,x,x) is not in char type. Function cannot run.");
		return undefined;
	}
	if (!IsChar(val2)){
		console.error("//>IMWKS$WKS$ -//Parameter val2 in function CompareChar(x,x,x) is not in char type. Function cannot run.");
		return undefined;
	}
	var charCode1 = val1.charCodeAt(0);
	var charCode2 = val2.charCodeAt(0);
	if (charCode1 > charCode2)
		return val1;
	else if (charCode2 > charCode1)
		return val2;
	else if (charCode1 == charCode1)
		return null;
	else
		return undefined;
}

function CompareCharInt(val1,val2){
	if (!val1){
		console.error("//>IMWKS$WKS$ -//Parameter val1 in function CompareCharInt(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!val2){
		console.error("//>IMWKS$WKS$ -//Parameter val2 in function CompareCharInt(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	var charCode1 = val1.charCodeAt(0);
	var charCode2 = val2.charCodeAt(0);
	if (charCode1 > charCode2)
		return val1;
	else if (charCode2 > charCode1)
		return val2;
	else if (charCode1 == charCode1)
		return null;
	else
		return undefined;
}

function CompareString(val1,val2){
	if (!IsString(val1)){
		console.error("//>IMWKS$WKS$ -//Parameter val1 in function CompareString(x,x,x) is not in string type. Function cannot run.");
		return undefined;
	}
	if (!IsString(val2)){
		console.error("//>IMWKS$WKS$ -//Parameter val2 in function CompareString(x,x,x) is not in string type. Function cannot run.");
		return undefined;
	}
	var ret = undefined;
	var nejmensiRetezec = val1;
	if (val1.length > val2.length)
		nejmensiRetezec = val2;
	for (var i = 0; i < nejmensiRetezec.length;i++){
		var charCode1 = val1.charCodeAt(i);
		var charCode2 = val2.charCodeAt(i);
		if (charCode1 > charCode2)
			return val1;
		else if (charCode2 > charCode1)
			return val2;
		else if (charCode1 == charCode1)
			ret = null;
		else
			return undefined;
	}
	return ret;
}

function CompareStringInt(val1,val2){
	if (!val1){
		console.error("//>IMWKS$WKS$ -//Parameter val1 in function CompareStringInt(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!val2){
		console.error("//>IMWKS$WKS$ -//Parameter val2 in function CompareStringInt(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	var ret = undefined;
	var nejmensiRetezec = val1;
	if (val1.length > val2.length)
		nejmensiRetezec = val2;
	for (var i = 0; i < nejmensiRetezec.length;i++){
		var charCode1 = val1.charCodeAt(i);
		var charCode2 = val2.charCodeAt(i);
		if (charCode1 > charCode2)
			return val1;
		else if (charCode2 > charCode1)
			return val2;
		else if (charCode1 == charCode1)
			ret = null;
		else
			return undefined;
	}
	return ret;
}

var CrFile = null;
function CreateFile(value,type){
	if (!value){
		console.error("//>IMWKS$WKS$ -//Parameter value in function CreateFile(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!type){
		console.warn("//>IMWKS$WKS$ -//Parameter type in function CreateFile(x,x,x) is undefined or null. Type will has text/plain value.");
		type = "text/plain";
	}
	if (!name)
		name = "none";
	if (type == "n" || type == "no" || type == "none")
		type = "data/binary";
	var data = new Blob([value], {type: type});
	if (CrFile !== null){
		window.URL.revokeObjectURL(CrFile);
		textFile = null;
	}
	CrFile = window.URL.createObjectURL(data);
	return CrFile;
}

function CreateDownloadFile(id, value, name, type) {
	if (!id){
		console.error("//>IMWKS$WKS$ -//Parameter id in function CreateDownloadFile(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!value){
		console.error("//>IMWKS$WKS$ -//Parameter value in function CreateDownloadFile(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	var RandomName = "n";
	if (name === undefined || name === null || name == "NaN" || name === 0 || name === "" || name == "none" || name == "no" || name == "n"){
		var RandomNameMax = Math.round(Math.random(0,1)*15);
		for (var u = 0;u < RandomNameMax;u++){
			if (RandomName == "n")
				RandomName = ToVal(Math.ceil(Math.random(0,1)*15),16);
			else
				RandomName += ToVal(Math.ceil(Math.random(0,1)*15),16);
		}
	}
	if (!name){
		console.warn("//>IMWKS$WKS$ -//Parameter name in function CreateDownloadFile(x,x,x) is undefined or null. Name will has "+RandomName+" value.");
		name = RandomName;
	}
	if (!type){
		console.warn("//>IMWKS$WKS$ -//Parameter type in function CreateDownloadFile(x,x,x) is undefined or null. Type will has text/plain value.");
		type = "text/plain";
	}
	if (type == "n" || type == "no" || type == "none")
		type = "text/plain";
	if (name == "n" || name == "no" || name == "none")
		name = RandomName;
	document.getElementById(id).href = CreateFile(value,type);
	document.getElementById(id).download = name;
	return "done";
}

function GetFileSizeAuto(path,aftercode){
	if (!path){
		console.error("//>IMWKS$WKS$ -//Parameter path in function GetFileSizeAuto(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!aftercode){
		console.warn("//>IMWKS$WKS$ -//Parameter aftercode in function GetFileSizeAuto(x,x,x) is undefined or null. Aftercode will has none value.");
		aftercode = "none";
	}
	if (path == "n" || path == "no" || path == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter path in function GetFileSizeAuto(x,x,x) is skipped. Parameter path cannot be skipped. Function cannot run.");
		return undefined;
	}
	if (aftercode == "n" || aftercode == "no" || aftercode == "none")
		aftercode = "none";
	var txt = undefined;
	var sizeInBytes = undefined;
	var xmlhttp = new XMLHttpRequest();
	try{
		xmlhttp.onreadystatechange = function(){
			if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
				txt = xmlhttp.responseText;
				var blob = new Blob([JSON.stringify(txt, null, 2)], {type : 'BinaryText'});
				sizeInBytes = blob.size;
				sizeInBytes = Math.round(sizeInBytes);
				if (aftercode != "none")
					eval(aftercode);
				return sizeInBytes;
			}
		};
		xmlhttp.open("GET",path,true);
		xmlhttp.send();
	}
	catch(erd){
		sizeInBytes = null;
		if (aftercode != "none")
			eval(aftercode);	
		return undefined;
	}
}

function GetFileTypeAuto(path,aftercode){
	if (!path){
		console.error("//>IMWKS$WKS$ -//Parameter path in function GetFileTypeAuto(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!aftercode){
		console.warn("//>IMWKS$WKS$ -//Parameter aftercode in function GetFileTypeAuto(x,x,x) is undefined or null. Aftercode will has none value.");
		aftercode = "none";
	}
	if (path == "n" || path == "no" || path == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter path in function GetFileTypeAuto(x,x,x) is skipped. Parameter path cannot be skipped. Function cannot run.");
		return undefined;
	}
	if (aftercode == "n" || aftercode == "no" || aftercode == "none")
		aftercode = "none";
	var txt = undefined;
	var Type = undefined;
	var xmlhttp = new XMLHttpRequest();
	try{
		xmlhttp.onreadystatechange = function(){
			if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
				txt = xmlhttp.responseText;
				var blob = new Blob([JSON.stringify(txt, null, 2)], {type : 'BinaryText'});
				var Type = blob.type;
				if (aftercode != "none")
					eval(aftercode);
				return Type;
			}
		};
		xmlhttp.open("GET",path,true);
		xmlhttp.send();
	}
	catch(erd){
		Type = null;
		if (aftercode != "none")
			eval(aftercode);	
		return undefined;
	}
}

function GetFileDataAuto(path,aftercode){
	if (!path){
		console.error("//>IMWKS$WKS$ -//Parameter path in function GetFileDataAuto(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!aftercode){
		console.warn("//>IMWKS$WKS$ -//Parameter aftercode in function GetFileDataAuto(x,x,x) is undefined or null. Aftercode will has none value.");
		aftercode = "none";
	}
	if (path == "n" || path == "no" || path == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter path in function GetFileDataAuto(x,x,x) is skipped. Parameter path cannot be skipped. Function cannot run.");
		return undefined;
	}
	if (aftercode == "n" || aftercode == "no" || aftercode == "none")
		aftercode = "none";
	var Data = undefined;
	var xmlhttp = new XMLHttpRequest();
	try{
		xmlhttp.onreadystatechange = function(){
			if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
				Data = xmlhttp.responseText;
				if (aftercode != "none")
					eval(aftercode);
				return Data;
			}
		};
		xmlhttp.open("GET",path,true);
		xmlhttp.send();
	}
	catch(erd){
		Data = null;
		if (aftercode != "none")
			eval(aftercode);	
		return undefined;
	}
}

function GetFileSize(evt,aftercode) {
	if (!evt){
		console.error("//>IMWKS$WKS$ -//Parameter evt in function GetFileSize(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!aftercode){
		console.warn("//>IMWKS$WKS$ -//Parameter aftercode in function GetFileSize(x,x,x) is undefined or null. Aftercode will has none value.");
		aftercode = "none";
	}
	if (evt == "n" || evt == "no" || evt == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter evt in function GetFileSize(x,x,x) is skipped. Parameter evt cannot be skipped. Function cannot run.");
		return undefined;
	}
	if (aftercode == "n" || aftercode == "no" || aftercode == "none")
		aftercode = "none";
	var GetFileSizeResult = [];
	var files = evt.target.files;
	for (var i = 0, f; f = files[i]; i++) {
		GetFileSizeResult.push(Math.round(f.size));
	}
	if (aftercode != "none")
		eval(aftercode);
	return GetFileSizeResult;
}


function GetFileName(evt,aftercode) {
	if (!evt){
		console.error("//>IMWKS$WKS$ -//Parameter evt in function GetFileName(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!aftercode){
		console.warn("//>IMWKS$WKS$ -//Parameter aftercode in function GetFileName(x,x,x) is undefined or null. Aftercode will has none value.");
		aftercode = "none";
	}
	if (evt == "n" || evt == "no" || evt == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter evt in function GetFileName(x,x,x) is skipped. Parameter evt cannot be skipped. Function cannot run.");
		return undefined;
	}
	if (aftercode == "n" || aftercode == "no" || aftercode == "none")
		aftercode = "none";
	var GetFileNameResult = [];
	var files = evt.target.files;
	for (var i = 0, f; f = files[i]; i++) {
		GetFileNameResult.push(f.name);
	}
	if (aftercode != "none")
		eval(aftercode);
	return GetFileNameResult;
}

function GetFileModifiedDate(evt,aftercode) {
	if (!evt){
		console.error("//>IMWKS$WKS$ -//Parameter evt in function GetFileModifiedDate(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!aftercode){
		console.warn("//>IMWKS$WKS$ -//Parameter aftercode in function GetFileModifiedDate(x,x,x) is undefined or null. Aftercode will has none value.");
		aftercode = "none";
	}
	if (evt == "n" || evt == "no" || evt == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter evt in function GetFileModifiedDate(x,x,x) is skipped. Parameter evt cannot be skipped. Function cannot run.");
		return undefined;
	}
	if (aftercode == "n" || aftercode == "no" || aftercode == "none")
		aftercode = "none";
	var GetFileModifiedDateResult = [];
	var files = evt.target.files;
	for (var i = 0, f; f = files[i]; i++) {
		GetFileModifiedDateResult.push(f.lastModifiedDate);
	}
	if (aftercode != "none")
		eval(aftercode);
	return GetFileModifiedDateResult;
}

function GetFileModifiedDateTime(evt,aftercode) {
	if (!evt){
		console.error("//>IMWKS$WKS$ -//Parameter evt in function GetFileModifiedDateTime(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!aftercode){
		console.warn("//>IMWKS$WKS$ -//Parameter aftercode in function GetFileModifiedDateTime(x,x,x) is undefined or null. Aftercode will has none value.");
		aftercode = "none";
	}
	if (evt == "n" || evt == "no" || evt == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter evt in function GetFileModifiedDateTime(x,x,x) is skipped. Parameter evt cannot be skipped. Function cannot run.");
		return undefined;
	}
	if (aftercode == "n" || aftercode == "no" || aftercode == "none")
		aftercode = "none";
	var GetFileModifiedDateTimeResult = [];
	var files = evt.target.files;
	for (var i = 0, f; f = files[i]; i++) {
		GetFileModifiedDateTimeResult.push(f.lastModifiedDate.getTime());
	}
	if (aftercode != "none")
		eval(aftercode);
	return GetFileModifiedDateTimeResult;
}

function GetFileType(evt,aftercode) {
	if (!evt){
		console.error("//>IMWKS$WKS$ -//Parameter evt in function GetFileType(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!aftercode){
		console.warn("//>IMWKS$WKS$ -//Parameter aftercode in function GetFileType(x,x,x) is undefined or null. Aftercode will has none value.");
		aftercode = "none";
	}
	if (evt == "n" || evt == "no" || evt == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter evt in function GetFileType(x,x,x) is skipped. Parameter evt cannot be skipped. Function cannot run.");
		return undefined;
	}
	if (aftercode == "n" || aftercode == "no" || aftercode == "none")
		aftercode = "none";
	var GetFileTypeResult = [];
	var files = evt.target.files;
	for (var i = 0, f; f = files[i]; i++) {
		GetFileTypeResult.push(f.type);
	}
	if (aftercode != "none")
		eval(aftercode);
	return GetFileTypeResult;
}

var GetFileDataResult = undefined;
var GetFileDataNames = undefined;
var GetFileDataDates = undefined;
var GetFileDataSizes = undefined;
var GetFileDataTypes = undefined;
var GetFileDataUrls = undefined;
function GetFileData (evt,aftercode) {
	if (!evt){
		console.error("//>IMWKS$WKS$ -//Parameter evt in function GetFileData(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!aftercode){
		console.warn("//>IMWKS$WKS$ -//Parameter aftercode in function GetFileData(x,x,x) is undefined or null. Aftercode will has none value.");
		aftercode = "none";
	}
	if (evt == "n" || evt == "no" || evt == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter evt in function GetFileData(x,x,x) is skipped. Parameter evt cannot be skipped. Function cannot run.");
		return undefined;
	}
	if (aftercode == "n" || aftercode == "no" || aftercode == "none")
		aftercode = "none";
	GetFileDataResult = undefined;
	GetFileDataNames = undefined;
	GetFileDataDates = undefined;
	GetFileDataSizes = undefined;
	GetFileDataTypes = undefined;
	GetFileDataUrls = undefined;
	var file = evt.target.files;
	var cis = file.length;
	GetFileDataResult = [];
	GetFileDataNames = [];
	GetFileDataDates = [];
	GetFileDataSizes = [];
	GetFileDataTypes = [];
	GetFileDataUrls = [];
	GetFileData2(file,cis,aftercode);
	return "done";
}

var GFDTimer = "";
var waitForReader1 = 0;
var waitForReader2 = 0;
var ReaderError = false;
function GetFileData2(file,cis,aftercode){	cis--;
	var reader = new FileReader();
	var reader2 = new FileReader();//0 - start, 1 - prepared, 2 - finish
	if (waitForReader1 == 2)
		waitForReader1 = 0;
	if (waitForReader2 == 2)
		waitForReader2 = 0;
	try{
		reader.onload = function(e) {
			GetFileDataResult.push(reader.result);
			GetFileDataNames.push(file[cis].name);
			GetFileDataDates.push(file[cis].lastModifiedDate);
			GetFileDataSizes.push(file[cis].size);
			GetFileDataTypes.push(file[cis].type);
			waitForReader1 = 1;
			if (waitForReader1 == 1 && waitForReader2 == 1){
				waitForReader1 = 2;
				waitForReader2 = 2;
				if (cis <= 0){
					if (aftercode != "none")
						eval(aftercode);
					return GetFileDataResult;
				}
				else
					GetFileData2(file,cis,aftercode);	
			}
		}
		reader.readAsText(file[cis],'utf-8');
	}
	catch(erd){
		waitForReader1 = 1;
		ReaderError = true;
	}
	try{
		reader2.onload = function(e){
			GetFileDataUrls.push(reader2.result);		
			waitForReader2 = 1;
			if (waitForReader1 == 1 && waitForReader2 == 1){
				waitForReader1 = 2;
				waitForReader2 = 2;
				if (cis <= 0){
					if (aftercode != "none")
						eval(aftercode);
					return GetFileDataResult;
				}
				else
					GetFileData2(file,cis,aftercode);	
			}
		}
		reader2.readAsDataURL(file[cis]);
	}
	catch(erd){
		waitForReader2 = 1;
		ReaderError = true;
	}
	if (ReaderError){
		GetFileDataResult.push(null);
		waitForReader1 = 2;
		waitForReader2 = 2;
		ReaderError = false;
		if (waitForReader1 == 1 && waitForReader2 == 1){
			if (cis <= 0){
				if (aftercode != "none")
					eval(aftercode);
				return GetFileDataResult;
			}
			else
				GetFileData2(file,cis,aftercode);
		}
	}
}

function WatchForWaiterForReaders(){
	
}

var GetFileBinaryDataResult = undefined;
var GetFileBinaryDataNames = undefined;
var GetFileBinaryDataDates = undefined;
var GetFileBinaryDataSizes = undefined;
var GetFileBinaryDataTypes = undefined;
function GetFileBinaryData (evt,aftercode) {

	if (!evt){
		console.error("//>IMWKS$WKS$ -//Parameter evt in function GetFileBinaryData(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!aftercode){
		console.warn("//>IMWKS$WKS$ -//Parameter aftercode in function GetFileBinaryData(x,x,x) is undefined or null. Aftercode will has none value.");
		aftercode = "none";
	}
	if (evt == "n" || evt == "no" || evt == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter evt in function GetFileBinaryData(x,x,x) is skipped. Parameter evt cannot be skipped. Function cannot run.");
		return undefined;
	}
	if (aftercode == "n" || aftercode == "no" || aftercode == "none")
		aftercode = "none";
	GetFileBinaryDataResult = undefined;
	GetFileBinaryDataNames = undefined;
	GetFileBinaryDataDates = undefined;
	GetFileBinaryDataSizes = undefined;
	GetFileBinaryDataTypes = undefined;
	var file = evt.target.files;
	cis = file.length;
	GetFileBinaryDataResult = [];
	GetFileBinaryDataNames = [];
	GetFileBinaryDataDates = [];
	GetFileBinaryDataSizes = [];
	GetFileBinaryDataTypes = [];
	GetFileBinaryData2(file,cis,aftercode);
	return "done";
}
function GetFileBinaryData2(file,cis,aftercode){	
	cis--;
	var reader = new FileReader();
	try{
		reader.onload = function(e) {
			GetFileBinaryDataResult.push(reader.result);
			GetFileBinaryDataNames.push(file[cis].name);
			GetFileBinaryDataDates.push(file[cis].lastModifiedDate);
			GetFileBinaryDataSizes.push(file[cis].size);
			GetFileBinaryDataTypes.push(file[cis].type);
			if (cis <= 0){
				if (aftercode != "none")
					eval(aftercode);
				return GetFileBinaryDataResult;
			}
			else
				GetFileBinaryData2(file,cis,aftercode);	
		}
		reader.readAsBinaryString(file[cis]);
	}
	catch(erd){
		GetFileBinaryDataResult.push(null);
		if (cis <= 0){
			if (aftercode != "none")
				eval(aftercode);
			return GetFileBinaryDataResult;
		}
		else
			GetFileBinaryData2(file,cis,aftercode);
	}
}

var GetFileURLDataResult = undefined;
var GetFileURLDataNames = undefined;
var GetFileURLDataDates = undefined;
var GetFileURLDataSizes = undefined;
var GetFileURLDataTypes = undefined;
function GetFileURLData (evt,aftercode) {
	if (!evt){
		console.error("//>IMWKS$WKS$ -//Parameter evt in function GetFileURLData(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!aftercode){
		console.warn("//>IMWKS$WKS$ -//Parameter aftercode in function GetFileURLData(x,x,x) is undefined or null. Aftercode will has none value.");
		aftercode = "none";
	}
	if (evt == "n" || evt == "no" || evt == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter evt in function GetFileURLData(x,x,x) is skipped. Parameter evt cannot be skipped. Function cannot run.");
		return undefined;
	}
	if (aftercode == "n" || aftercode == "no" || aftercode == "none")
		aftercode = "none";
	GetFileURLDataResult = undefined;
	GetFileURLDataNames = undefined;
	GetFileURLDataDates = undefined;
	GetFileURLDataSizes = undefined;
	GetFileURLDataTypes = undefined;
	var file = evt.target.files;
	var cis = file.length;
	GetFileURLDataResult = [];
	GetFileURLDataNames = [];
	GetFileURLDataDates = [];
	GetFileURLDataSizes = [];
	GetFileURLDataTypes = [];
	GetFileURLData2(file,cis,aftercode);
	return "done";
}
function GetFileURLData2(file,cis,aftercode){
	cis--;
	var reader = new FileReader();
	try{
		reader.onload = function(e) {
			GetFileURLDataResult.push(reader.result);
			GetFileURLDataNames.push(file[cis].name);
			GetFileURLDataDates.push(file[cis].lastModifiedDate);
			GetFileURLDataSizes.push(file[cis].size);
			GetFileURLDataTypes.push(file[cis].type);
			if (cis <= 0){
				if (aftercode != "none")
					eval(aftercode);
				return GetFileURLDataResult;
			}
			else
				GetFileURLData2(file,cis,aftercode);	
		}
		reader.readAsDataURL(file[cis]);
	}
	catch(erd){
		GetFileURLDataResult.push(null);
		if (cis <= 0){
			if (aftercode != "none")
				eval(aftercode);
			return GetFileURLDataResult;
		}
		else
			GetFileURLData2(file,cis,aftercode);
	}
}

function GetWindowWidthPx(){
	return window.innerWidth;
}

function GetWindowHeightPx(){
	return window.innerHeight;
}

function GetElementLeft(id){
	if (!id){
		console.error("//>IMWKS$WKS$ -//Parameter id in function GetElementLeft(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	return parseInt(document.getElementById(id).style.left, 10);
}

function GetElementTop(id){
	if (!id){
		console.error("//>IMWKS$WKS$ -//Parameter id in function GetElementTop(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	return parseInt(document.getElementById(id).style.top, 10);
}

function WPercentToWPixel(value,type){
	if (value == undefined || value == null){
		console.error("//>IMWKS$WKS$ -//Parameter value in function WPercentToWPixel(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (value == "n" || value == "no" || value == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter value in function WPercentToWPixel(x,x,x) is skipped. Parameter value cannot be skipped. Function cannot run.");
		return undefined;
	}
	if (!IsInt(value)){
		console.error("//>IMWKS$WKS$ -//Parameter value in function WPercentToWPixel(x,x,x) is not in int type. Function cannot run.");
		return undefined;
	}
	if (!type){
		console.warn("//>IMWKS$WKS$ -//Parameter type in function WPercentToWPixel(x,x,x) is undefined or null. Type will has width value.");
		type = "width";
	}
	if (type == "n" || type == "no" || type == "none")
		type = "width";
	if (type != "width" && type != "height"){
		console.warn("//>IMWKS$WKS$ -//Parameter type in function WPercentToWPixel(x,x,x) is not in allowed value. Allowed values are: width, height. Type will has width value.");
		type = "width";
	}
	var onePercent = undefined;
	var ReturnValue = undefined;
	if (type == "height"){
		var WindowHeight = GetWindowHeightPx();
		onePercent = parseInt(WindowHeight,10)/100;
		ReturnValue = onePercent*parseInt(value,10);
	}
	else{
		var WindowWidth = GetWindowWidthPx();
		onePercent = parseInt(WindowWidth,10)/100;
		ReturnValue = onePercent*parseInt(value,10);
	}
	return Math.round(ReturnValue);
}

function WPixelToWPercent(value,type){
	if (value == undefined || value == null){
		console.error("//>IMWKS$WKS$ -//Parameter value in function WPixelToWPercent(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (value == "n" || value == "no" || value == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter value in function WPercentToWPixel(x,x,x) is skipped. Parameter value cannot be skipped. Function cannot run.");
		return undefined;
	}
	if (!IsInt(value)){
		console.error("//>IMWKS$WKS$ -//Parameter value in function WPixelToWPercent(x,x,x) is not in int type. Function cannot run.");
		return undefined;
	}
	if (!type){
		console.warn("//>IMWKS$WKS$ -//Parameter type in function WPixelToWPercent(x,x,x) is undefined or null. Type will has width value.");
		type = "width";
	}
	if (type == "n" || type == "no" || type == "none")
		type = "width";
	if (type != "width" && type != "height"){
		console.warn("//>IMWKS$WKS$ -//Parameter type in function WPixelToWPercent(x,x,x) is not in allowed value. Allowed values are: width, height. Type will has width value.");
		type = "width";
	}
	var onePercent = undefined;
	var ReturnValue = undefined;
	if (type == "height"){
		var WindowHeight = GetWindowHeightPx();
		onePercent = value/parseInt(WindowHeight,10);
		ReturnValue = onePercent*100;
	}
	else{
		var WindowWidth = GetWindowWidthPx();
		onePercent = value/parseInt(WindowWidth,10);
		ReturnValue = onePercent*100;
	}
	return Math.round(ReturnValue);
}

function CompressCodeOld(dataSC,idPval,idCval) {
	if (!dataSC)
		return undefined;
	WKSRES1 = undefined;
	WKSRES2 = undefined;
	WKSRES3 = undefined;
	WKSRES4 = undefined;
	WKSRES5 = undefined;
	WKSRES6 = undefined;
	WKSRES7 = undefined;
	var vln = dataSC;
	var tsko = "no";
	var tsko2 = "no";
	if (idPval){
		if (idPval != "none" || idPval !== 0){
			tsko = "yo";
		}
	}
	if (idCval){
		if (idCval != "none" || idCval !== 0){
			tsko2 = "yo";
		}
	}
	var Letters = new Array(256);
	var LetterCodes = new Array(256);
	var ov = vln;

	cvalue = "Working ...";
	pvalue = "Counting Letters";
	if (tsko == "yo"){
		idPval.value = pvalue;
	}
	if (tsko2 == "yo"){
		idCval.value = cvalue;
	}

	for (i = 0; i < 256; i ++) {
		Letters[i] = 0;
	}

	for (i = 0; i < ov.length; i ++) {
		if ((i & 0xFF) == 0) {
			pvalue = "Counting Letters - " + Math.floor((100 * i) / ov.length) + "%";
			if (tsko == "yo"){
				idPval.value = pvalue;
			}
		}
		Letters[ov.charCodeAt(i)] ++;
	}
	var NodeLetter = new Array(512);
	var NodeCount = new Array(512);
	var NodeChild1 = new Array(512);
	var NodeChild2 = new Array(512);
	NextParent = 0;

	pvalue = "Constructing node list";
	for (i = 0; i < 256; i ++) {
		if (Letters[i] > 0) {
			NodeLetter[NextParent] = i;
			NodeCount[NextParent] = Letters[i];
			NodeChild1[NextParent] = -1;
			NodeChild2[NextParent] = -1;
			NextParent ++;
		}
	}

	pvalue = "Constructing tree";
	if (tsko == "yo"){
		idPval.value = pvalue;
	}
	SmallestNode2 = 1;
	while (SmallestNode2 != -1) {
		SmallestNode1 = -1;
		SmallestNode2 = -1;

		for (i = 0; i < NextParent; i ++) {
			if (NodeCount[i] > 0) {
				if (SmallestNode1 == -1) {
					SmallestNode1 = i;
				} else if (SmallestNode2 == -1) {
					if (NodeCount[i] < NodeCount[SmallestNode1]) {
						SmallestNode2 = SmallestNode1;
						SmallestNode1 = i;
					} else {
						SmallestNode2 = i;
					}
				} else if (NodeCount[i] <= NodeCount[SmallestNode1]) {
					SmallestNode2 = SmallestNode1;
					SmallestNode1 = i;
				}
			}
		}

		if (SmallestNode2 != -1) {
			NodeCount[NextParent] = NodeCount[SmallestNode1] + NodeCount[SmallestNode2];
			NodeCount[SmallestNode1] = 0;
			NodeCount[SmallestNode2] = 0;
			NodeChild1[NextParent] = SmallestNode2;
			NodeChild2[NextParent] = SmallestNode1;
			NextParent ++;
		}
	}

	pvalue = "Making final array";
	if (tsko == "yo"){
		idPval.value = pvalue;
	}
	var FinalNodes = Array(NextParent);
	var DepthIndex = Array(256);
	Depth = 0;
	NextFinal = 0;
	DepthIndex[Depth] = SmallestNode1;
	while (Depth >= 0) {
		if (NodeChild1[DepthIndex[Depth]] > -1 && NodeChild2[DepthIndex[Depth]] > -1) {
			idx = NodeChild1[DepthIndex[Depth]];
			NodeChild1[DepthIndex[Depth]] = -2 - NextFinal;
			Depth ++;
			DepthIndex[Depth] = idx;
			NextFinal ++;
		} else if (NodeChild1[DepthIndex[Depth]] < 0 && NodeChild2[DepthIndex[Depth]] > -1) {
			idx = NodeChild1[DepthIndex[Depth]];
			idx = 0 - idx;
			idx -= 2;
			FinalNodes[idx] = - NextFinal;

			idx = NodeChild2[DepthIndex[Depth]];
			NodeChild2[DepthIndex[Depth]] = -2;
			Depth ++;
			DepthIndex[Depth] = idx;
		} else if (NodeChild1[DepthIndex[Depth]] < -1 && NodeChild2[DepthIndex[Depth]] < -1) {
			Depth --;
		} else if (NodeChild1[DepthIndex[Depth]] == -1 && NodeChild2[DepthIndex[Depth]] == -1) {
			FinalNodes[NextFinal] = NodeLetter[DepthIndex[Depth]];
			NextFinal ++;
			Depth --;
		} else {
			console.error('-// ERD HCOMPRESS SEMCA TYPE 001-6b //- Bad algorithm!');
			return;
		}
	}


	pvalue = "Determining codes";
	if (tsko == "yo"){
		idPval.value = pvalue;
	}
	var CodeIndex = new Array(256);
	DepthIndex[0] = 0;
	CodeIndex[0] = "";
	Depth = 0;
	while (Depth >= 0) {
		if (FinalNodes[DepthIndex[Depth]] < 0) {
			c = CodeIndex[Depth];
			idx = DepthIndex[Depth];
			DepthIndex[Depth + 1] = DepthIndex[Depth] + 1;
			CodeIndex[Depth + 1] = c + '0';
			DepthIndex[Depth] = 0 - FinalNodes[idx];
			CodeIndex[Depth] = c + '1';
			Depth ++;
		} else {
			LetterCodes[FinalNodes[DepthIndex[Depth]]] = CodeIndex[Depth];
			Depth --;
		}
	}


	pvalue = "Building data stream";
	if (tsko == "yo"){
		idPval.value = pvalue;
	}
	bits = "";
	var bytes = new StringMaker();
	for (i = 0; i < ov.length; i ++) {
		if ((i & 0xFF) == 0) {
			pvalue = "Building Data Stream - " + Math.floor((100 * i) / ov.length) + "%";
		}
		bits += LetterCodes[ov.charCodeAt(i)];
		while (bits.length > 5) {
			bytes.append(BitsToBytes(bits));
			bits = bits.slice(6, bits.length);
		}
	}
	bytes.append(BitsToBytes(bits));

	var S = "";
	var nodle = 0;

	bytes = bytes.toString();
	while (bytes.length > 74) {
		S += bytes.slice(0, 74);
		bytes = bytes.slice(74, bytes.length);
		nodle = 1;
	}

	if (nodle == 0){
		S = bytes;
	}
	else if (nodle == 1){
		S +=bytes
	}

	pvalue = "Writing final script";
	if (tsko == "yo"){
		idPval.value = pvalue;
	}
	var uservalue = DeCode(FinalNodes,S,ov.length);
	cvalue = FinalNodes;
	var imn = parseInt(FinalNodes.length)+parseInt(S.length);
	pvalue = 100-Math.floor(100 - parseInt(((ov.length/100)*imn),10)/100 * (ov.length - imn) / ov.length);
	var pocetZnakuUserValue =  ov.length;
	var pocetZnakuVysledek =  imn;
	var CompVysledek = cvalue;
	var CompRatio = pvalue;
	if (tsko == "yo"){
		idPval.value = pvalue;
	}
	if (tsko2 == "yo"){
		idCval.value = cvalue;
	}
	WKSRES1 = FinalNodes;
	WKSRES2 = S;
	WKSRES3 = ov.length;
	WKSRES4 = CompRatio;
	WKSRES5 = pocetZnakuUserValue;
	WKSRES6 = pocetZnakuVysledek;
	WKSRES7 = uservalue;
	return "done";
}

function DeCodeOld(FinNodes,Byt,OvLength){
	var bytes = Byt;
	OvLength = Number(OvLength);
	var FinalNodes = FinNodes.toString().split(",");
	var FinNodes2 = new Array();
	for (var r = 0; r < FinalNodes.length;r++)
		FinNodes2.push(Number(FinalNodes[r]));
	FinalNodes = FinNodes2;
	encodedNodes = "";
	for (i = 0; i < FinalNodes.length; i ++) {
		var x, y;
		x = FinalNodes[i] + 512;
		y = x & 0x3F;
		x >>= 6;
		x &= 0x3F;
		x += 42;
		y += 42;
		if (x >= 92) {
			x ++;
		}
		if (y >= 92) {
			y ++;
		}
		encodedNodes += String.fromCharCode(x) + String.fromCharCode(y);
	}
	var a = "";
	var tgd = 0;
	while (encodedNodes.length > 74) {
		a += encodedNodes.slice(0, 74);
		encodedNodes = encodedNodes.slice(74, encodedNodes.length);
		tgd = 1;
	}
	if (tgd == 0){
		a = encodedNodes;
	}
	else{
		a += encodedNodes;
	}
	l=new Array();
	while(a.length){
		l.push((Y(a.charCodeAt(0))<<6)+Y(a.charCodeAt(1))-512);
		a=a.slice(2,a.length)
	}
	var d=bytes;
	c=OvLength;
	e=b=a=0;o="";
	function Y(y){
		if(y>92)
			y--;
		return y-42
	}
	function B(){
		if(a==0){
			b=Y(d.charCodeAt(e++));
			a=6;
		}
		return ((b>>--a)&0x01);
	}
	while(c--){
		i=0;
		while(l[i]<0){
			if(B())
				i=-l[i];
			else i++;
		}
		o+=String.fromCharCode(l[i]);
	}
	var userReturn = o;
	return userReturn;
}

function CompressionOld(data){
	if (!data){
		console.error("//>IMWKS$WKS$ -//Parameter data in function Compression(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (data == "n" || data == "no" || data == "none"){
		console.error("//>IMWKS$WKS$ -//Parameter data in function Compression(x,x,x) is skipped. Parameter data cannot be skipped. Function cannot run.");
		return undefined;
	}
	CompressCodeOld(data,"n","n");
	resource = new Array(WKSRES1,WKSRES2,WKSRES3,WKSRES4,WKSRES5,WKSRES6,WKSRES7);
	WKSRES1 = undefined;
	WKSRES2 = undefined;
	WKSRES3 = undefined;
	WKSRES4 = undefined;
	WKSRES5 = undefined;
	WKSRES6 = undefined;
	WKSRES7 = undefined;
	return resource;
}