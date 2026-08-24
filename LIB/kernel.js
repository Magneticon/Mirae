var KERNELver = 1.48;

//Preset variables - high-speed registers

var relid = undefined;
var main_grid = "main_grid";
var main_grid_a = "main_grid_a";
var main_grid_old = "main_grid";
var CommEcho = true;
var OldZIndex = 100;
var COMKER = "GUI";
const minRenObjHeight10 = 1.2435413519357417;
const minRenObjWidth10 = 2.3547910706868302;
const minXResolution = 895;
const minYResolution = 570;
//const GoodAspectRatioMin = 0.52459;
//const GoodAspectRatioMin = 0.45459;
const GoodAspectRatioMin = 0.44959;
//const GoodAspectRatioMax = 0.67817;
const GoodAspectRatioMax = 0.764;

var ComVerName = "ASCOM";//zde bude jméno systému
var ComVerNameAll = "Advanced System Command";//zde bude celé jméno systému
var ComVer = "1.01";//zde bude verze systému
var ComManufactureMin = "586sys"// zde bude jméno výrobce
var ComManufacturer = ComManufactureMin+" Inc."// zde bude jméno výrobce
var ComEnvironment = "console";
var ComEnvironmentAll = "console line command prompt (CLCP)";//zde bude typ prostředí systému (dlouhý název)
var ManufacturerRootDate = "2009";
var ManufacturerDate = "2026";//zde bude rok výroby systému
var ManufacturerDateAll = ManufacturerDate+"/8/24";//zde bude celé datum výroby systému
var ManufacturerOrigin = "United States";// zde bude země původu systému
var ManufacturerLang = "ENG (INTERNATIONAL) / CZE";// zde bude jazyk systému
var COMver = 4.95;
var COMGUIName = "Views System";
var ComGUIver = 1.17;
var SystemStartupName = "Views System®";
var SystemStartupEdition = "Workstation Edition";
var SystemStartupCorporation = "Copyright © "+ManufacturerRootDate+"-"+ManufacturerDate+" "+ComManufactureMin+" Corporation";
var SystemManufacturerStamp = "© "+ManufacturerRootDate+"-"+ManufacturerDate+" "+ComManufactureMin+" Inc.";
var SystemStartupVer = "Version: "+ComGUIver;
var SystemStartupMan = ComManufactureMin+"®";

var PrefetchOnStartup = false;

//1 - bude pouzito nove vykreslovani (pouzivajici dynamicky zoom), 2 - bude pouzito stare, pevne zobrazeni 1:2-4:3, 3 - nebude upravovano zobrazeni systemu
DrawKernel = 2;
if (_DisableIALAutoRepair)
    DrawKernel = 3;
var ActiveRender = 1;//hlavni knihovna pro vykreslovani GUI - 0 - GUICOM (kompatibilni se starymi aplikacemi a s ASCOM v1), 1 - GUISHELL - nove, objektove vykreslovani GUI (ASCOM v4)

var WelcomePlaySound = true; //do playing of welcome sound
var WelcomeDelay = -1; //set to 0 to disable welcomescreen, to -1 to use defualts or any value > 0 to set custom wait time for welcomescreen
var OEMDelay = -1; //set to 0 to disable welcomescreen, to -1 to use defualts or any value > 0 to set custom wait time for boot screen

var GUICLOCKTIMEDRAWELEM = "";
var GUICLOCKDATEDRAWELEM = "";
var GUIBATTERYDRAWELEM = "";
var GUILANGDRAWELEM = "";

var TIMENOTIFYTIMER = window.setInterval(function(){
	try{
		SYSCONTROLPROCGUI();
	}catch(erd){}
}, 1000);

function SETVIEWSAFTERSTARTUP(){//zde se provede nastaveni systemu VIEWS po spusteni
//	SetNotifyIcon("lang", "e$"+SYSLANGCODE.toUpperCase(), Translate("System language"), "LanguageSettings();", true, true);
//	GUINOTIFYICONSSET = true;
}

var FIRSTSTARTUPSELECTIONVIEWS = false;
function FIRSTSTARTUPSELECTION(v){//zde se bude provadet spousteni sluzeb primo po zavedeni systemu v LOGON
	GUINOTIFYICONSSET = false;
	if (v)
		SETASCOMAFTERSTARTUP();
	SETALLAFTERSTARTUP();
}

var SysGetTime = new window.Date();
var SysGetTimeLocal = new window.Date();
SysGetTime.setTime(parseInt(SysGetTime.getTime(), 10)+parseInt(SysGetTime.getTimezoneOffset()*60000, 10));//this will get a real UTC time
var SysTimeData = SysGetTime.getTime();
var SysTimeDataLocal = SysGetTimeLocal.getTime();
var SysTimeActual = SysGetTime.getHours()*3600000+SysGetTime.getMinutes()*60000+SysGetTime.getSeconds()*1000+SysGetTime.getMilliseconds();
var SysTimeActualLocal = SysGetTimeLocal.getHours()*3600000+SysGetTimeLocal.getMinutes()*60000+SysGetTimeLocal.getSeconds()*1000+SysGetTimeLocal.getMilliseconds();
var SystemTimeOsc = 1;
var SysTimeMove = 0;//DODELAT
//const SysTimer = window.setInterval(function(){if (SystemTimeOsc % 5 == 0){LoadActualTime();}else if (SystemTimeOsc % 10 == 0){LoadActualTime();}SysTimeData+=500;SysTimeActual+=500;SystemTimeOsc++;},500);
const SysTimer = window.setInterval(function(){LoadActualTime();},500);

function LoadActualTime(){
	SysGetTime.setTime(GetActualTime());
	SysTimeActual = SysGetTime.getHours()*3600000+SysGetTime.getMinutes()*60000+SysGetTime.getSeconds()*1000+SysGetTime.getMilliseconds();
	SysTimeData = SysGetTime.getTime();
	
	SysGetTimeLocal.setTime(GetActualTimeLocal());
	SysTimeActualLocal = SysGetTimeLocal.getHours()*3600000+SysGetTimeLocal.getMinutes()*60000+SysGetTimeLocal.getSeconds()*1000+SysGetTimeLocal.getMilliseconds();
	SysTimeDataLocal = SysGetTimeLocal.getTime();
}

function GetActualTime(){//result are milliseconds from 1970/1/1 - returns actual user defined time
	var GetTime = new window.Date();
	GetTime.setTime(parseInt(GetTime.getTime(), 10)+parseInt(GetTime.getTimezoneOffset()*60000, 10));//this will get a real UTC time
	var sysdate = 0;
	sysdate = parseInt(sysdate,10)+parseInt(GetTime.getTime(),10);	
	return sysdate;
}

function GetActualTimeLocal(){//result are milliseconds from 1970/1/1 - returns actual user defined time
	var GetTimeLocal = new window.Date();
	var sysdate = 0;
	sysdate = parseInt(sysdate,10)+parseInt(GetTimeLocal.getTime(),10);	
	return sysdate;
}

function CheckChangeTimeSets(){
	
}


function ToTwo(n){
	return n > 9 ? "" + n: "0" + n;
}

function ToThree(n){
	var res = n > 9 ? "" + n: "0" + n;
	return res > 99 ? "" + res: "0" + n;
}

function ToSetNum(n,to){//nastavi cislo n na dany pocet mist (to), pokud bude delsi, tak odkroji a zaokrouhli, pokud bude kratsi, tak doplni ze predu nulami
	var str = "";
	n = n.toString();
	if (n.length > to){
		n = n.toString().slice(0,parseInt(to,10)+1);
		n = Math.round(parseInt(n,10));
		n = n.toString().slice(0,to);
	}	
	for (var i = 1; i < to; i++){
		str += "9";
		n = parseInt(n,10) > parseInt(str,10) ? n : "0"+n;
	}
	return n;
}

String.prototype.replaceIn = function(target, replacement) {
	var res = this;
	if (typeof target == "object"){
		for (var i = 0; i < target.length; i++){
			if (typeof replacement == "object"){
				var r = replacement[parseInt(replacement.length,10)-1];
				if (replacement.length > i)
					r = replacement[i];
				res = res.split(target[i]).join(r);
			}
			else
				res = res.split(target[i]).join(replacement);
		}
	}
	else{
		if (typeof replacement == "object")
			replacement = replacement[0];
		res = res.split(target).join(replacement);
	}
	return res;
};

var none = "none";
function TranslateTime(milliseconds){
	if (!milliseconds)
		return undefined;
	var hours = Math.floor(milliseconds/3600000);
	var mins = Math.floor((milliseconds-(hours*3600000))/60000);
	var sec = Math.floor((milliseconds-((hours*3600000)+(mins*60000)))/1000);
	var millsec = Math.floor(milliseconds-((hours*3600000)+(mins*60000)+(sec*1000)));
	var vysledek = new Array(hours,mins,sec,millsec);
	return vysledek;
}

function TranslateDate(milliseconds){
	if (!milliseconds)
		return undefined;
	var newDate = new Date();
	newDate.setTime(milliseconds);
	return [newDate.getFullYear(),parseInt(newDate.getMonth(),10)+1,newDate.getDate()];
}

function WriteTranslateTimeAll(milliseconds){
	if (!milliseconds)
		return undefined;
	var nacteni = TranslateTime(milliseconds);
	var vysledek = ToTwo(nacteni[0])+":"+ToTwo(nacteni[1])+":"+ToTwo(nacteni[2])+":"+ToThree(nacteni[3]);
	return vysledek;
}

function WriteTranslateTime(milliseconds){
	if (!milliseconds)
		return undefined;
	var nacteni = TranslateTime(milliseconds);
	var vysledek = ToTwo(nacteni[0])+":"+ToTwo(nacteni[1])+":"+ToTwo(nacteni[2]);
	return vysledek;
}

function SpeedVisible(id){
	if ((!id) || (!CommEcho))
		return undefined;
	document.getElementById(id).style.visibility = "visible";
	return "done";
}

function SpeedDisplay(id){
	if ((!id) || (!CommEcho))
		return undefined;
	document.getElementById(id).style.display = "block";
	return "done";
}

function SpeedDisplayF(id){
	if ((!id) || (!CommEcho))
		return undefined;
	document.getElementById(id).style.display = "flex";
	return "done";
}

function SpeedDisplayHide(id){
	if ((!id) || (!CommEcho))
		return undefined;
	document.getElementById(id).style.display = "none";
	return "done";
}

function SpeedHidden(id){
	if ((!id) || (!CommEcho))
		return undefined;
	document.getElementById(id).style.visibility = "hidden";
	return "done";
}

function LocN(path,type){
	if(!path)
		return undefined;
	if(!type)
		type = "this";
	if(type == "n" || type == "no" || type == "none")
		type = "this";
	eval(type+".location.href = path;");
}

function LocR(path,type){
	if(!path)
		return undefined;
	if(!type)
		type = "this";
	if(type == "n" || type == "no" || type == "none")
		type = "this";
	eval(type+".location.replace(path);");
}

function SpeedWriteIn(id,text){
	if (!id || (!CommEcho) || text === undefined || text === null || text == "")
		return undefined;
	if (text === undefined || text === null || text == "")
		return undefined;
	document.getElementById(id).innerHTML = text;
	return "done";
}

function SpeedWriteInAdd(id,text){
	if ((!id) || (!CommEcho) || text === undefined || text === null || text == "")
		return undefined;
//	document.getElementById(id).innerHTML += text;
	document.getElementById(id).insertAdjacentHTML("beforeend", text);
	return "done";
}

function SpeedWriteInSpecial(id,text){
	if (!id || text === undefined || text === null || text == "")
		return undefined;
	if (text === undefined || text === null || text == "")
		return undefined;
	document.getElementById(id).innerHTML = text;
	return "done";
}

function SpeedWriteInAddSpecial(id,text){
	if ((!id) || text === undefined || text === null || text == "")
		return undefined;
//	document.getElementById(id).innerHTML += text;
	document.getElementById(id).insertAdjacentHTML("beforeend", text);
	return "done";
}

function SpeedGetFrom(id){
	if ((!id) || (!CommEcho))
		return undefined;
	return document.getElementById(id).innerHTML;
}

function SpeedWriteAdd(id,text){
	if ((!id) || (!CommEcho) || text === undefined || text === null || text == "")
		return undefined;
//	document.getElementById(id).innerHTML += Vypis(text);
	document.getElementById(id).insertAdjacentHTML("beforeend", Vypis(text));
	return "done";
}

function SpeedWriteSpecialAdd(id,translatetext,text){
	if ((!id) || (!CommEcho) || translatetext === undefined || translatetext === null || translatetext == "" || text === undefined || text === null || text == "")
		return undefined;
//	document.getElementById(id).innerHTML += Vypis(translatetext)+text;
	document.getElementById(id).insertAdjacentHTML("beforeend", Vypis(translatetext)+text);
	return "done";
}

function SpeedWriteTitleAdd(id,text){
	if ((!id) || (!CommEcho) || text === undefined || text === null || text == "")
		return undefined;
	document.getElementById(id).title += Vypis(text);
	//document.getElementById(id).setAttribute("title", Vypis(text));
	return "done";
}

function SpeedWriteSet(id,text){
	if (!id)
		return undefined;
	if (text === undefined || text === null)
		return undefined
	document.getElementById(id).value = text;
	return "done";
}

function SpeedWriteSetAdd(id,text){
	if (!id)
		return undefined;
	if (text === undefined || text === null)
		return undefined
	document.getElementById(id).value += text;
	return "done";
}

function SpeedWriteGet(id){
	if (!id)
		return undefined;
	return document.getElementById(id).value;
}

function FormatText(text){
	text = text.replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm,"");
	text = text.trim();
	return text;
}

function ToGrid(data){
	if (data == "" || data == " " || (!CommEcho))
		return undefined;
	SpeedWriteInAdd(main_grid,data);
	return "done";
}

function SpeedToGrid(data){
	if (data == "" || data == " " || (!CommEcho))
		return undefined;
	SpeedWriteAdd(main_grid,data);
	return "done";
}

function ToGridSpecial(data){
	SpeedWriteInAdd(main_grid,data);
	return "done";
}

function SpeedToGridSpecial(data){
	SpeedWriteAdd(main_grid,data);
	return "done";
}

function WriteConvert(data) {
    return data
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }
 
function WriteConvertSpecial(data){
    return data
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
}
 
function WriteUnConvert(data) {
    return data
         .replace(/&amp;/g, "&")
         .replace(/&lt;/g, "<")
         .replace(/&gt;/g, ">")
         .replace(/&quot;/g, "\"")
         .replace(/&#039;/g, "\'");
}

String.prototype.replaceAll = function(s, r) {
    return this.split(s).join(r);
};

/* Object.prototype.indexOfInMatrix = function (v, vi, ri){
	return a = (a = (a = this.find(a => (a = (!isNaN(parseInt(vi, 10)) ? a[vi] : a[0])).toString().toLowerCase() == (((v) && v.toString().toLowerCase()) || 0))) && (!isNaN(parseInt(ri, 10)) ? a[ri] : a)) ? a : undefined;
};  */

String.prototype.convertToCharCode = function(){
	for (var i = 0, r = ""; i < this.length; i++)
		r += this.charCodeAt(i)+"";
    return r;
};

String.prototype.isProperChar = function(){
	for (let i = 0; i < this.length; i++){
		if (65 > this.toUpperCase().charCodeAt(i) || this.toUpperCase().charCodeAt(i) > 90)
        	return false;
    }
	return true;
};

String.prototype.getFileString = function(){
    let v = this.split("_"), r = "";
    //for (let i in v)
    for (var i = 0; i < v.length; v++)
    	r += v[i].length > 0 ? !isNaN(parseInt(v[i], 10)) ? String.fromCharCode(parseInt(v[i], 10)) : v[i] : "";
	return r;
};
String.prototype.setFileString = function(){
	for (var i = 0, r = ""; i < this.length; i++){
    	let c = this.toUpperCase().charCodeAt(i);
		r += 65 > c || c > 90 ? 47 < c && c < 57 && i > 0 ? this[i] : `_${c}_` : this[i];
    }
	return r;
};

function StartEvent(obj,evt){
	if (!CommEcho)
		return undefined;
	var startOnThis = obj;
	if(document.createEvent) {
		var evObj = document.createEvent('MouseEvents');
		evObj.initEvent(evt, true, false);
		startOnThis.dispatchEvent(evObj);
	} 
	else if(document.createEventObject)
	  startOnThis.fireEvent('on'+evt);
	return "done";
}

function StartEventNonObj(id, evt){
	StartEvent(GtE(id),evt);
}

function SetToInt(d){
	d = d.toString().toLowerCase().trim();
	var res = "";
	for (var i = 0; i < d.length; i++){
		if (d[i] == "0" || d[i] == "1" || d[i] == "2" || d[i] == "3" || d[i] == "4" || d[i] == "5" || d[i] == "6" || d[i] == "7" || d[i] == "8" || d[i] == "9")
			res += ""+d[i];
	}
	return parseInt(res, 10);
}

function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type:mimeString});
}

function GetElement(id){
	if (id == "" || id == " " || (!CommEcho))
		return undefined;
	return document.getElementById(id);
}

function GetElemStyle(id){
	return document.getElementById(id).style;
}

function HideItem(id){
	if (id == "" || id == " " || (!CommEcho))
		return undefined;
	GetElemStyle(id).display = 'none';
	return "done";
}

function ShowItem(id,type){
	if (id == "" || id == " " || (!CommEcho))
		return undefined;
	if (type == "flex")
		type = "flex";
	else
		type = "block";
	OldZIndex++;
	GetElemStyle(id).display = type;
	GetElemStyle(id).visibility = 'visible';
	GetElemStyle(id).zIndex = OldZIndex;
	return "done";
}

function ToHide(data){
//	GetElement("HiddenContent").innerHTML += data;
	GetElement("HiddenContent").insertAdjacentHTML("beforeend", data);
	return "done";
}

function getBase64Image(id) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function DataObjString(obj){
	var Data = JSON.stringify(obj).trim();
	return "{"+Data.substring(1,parseInt(Data.length,10)-1)+"}";
}

function CopyFrameSet(id,type,data){
	if (!id)
		return undefined;
	if (!type)
		type = "innerHTML";
	if (!data)
		data = undefined;
	var x = GetElement(id);
    var y = (x.contentWindow || x.contentDocument);
    if (y.document)y = y.document;
	switch(type.toLowerCase()){
		case "inner":
			y.body.innerHTML = data;
			break;
		case "innerhtml":
			y.body.innerHTML = data;
			break;
		case "inneradd":
//			y.body.innerHTML += data;
			y.body.insertAdjacentHTML("beforeend", data);
			break;
		case "innerhtmladd":
//			y.body.innerHTML += data;
			y.body.insertAdjacentHTML("beforeend", data);
			break;
		case "style":
			y.body.style = data;
			break;
		case "styleadd":
			y.body.style += data;
			break;
		default:
			y.body.innerHTML = data;
			break;
	}
    return "done";
}

function ClearLastKey(){
	var id = document.activeElement.id;
	var data = GetElement(id).value
	GetElement(id).value = data.slice(0,parseInt(data.length,10)-1);
	return "done";
}

function EnterStart(e,c){
	if ((e.keyCode || e.which) == 13)
		eval(c);
	return false;
}

function GetSysTime(type){
	var ParseTimeData = TranslateTime(SysTimeActual);
	switch(type.toLowerCase()){
		case "hours"://vrati hodiny
			return ToTwo(ParseTimeData[0]);
			break;
		case "minutes"://vrati minuty
			return ToTwo(ParseTimeData[1]);
			break;
		case "seconds"://vrati sekundy
			return ToTwo(ParseTimeData[2]);
			break;
		case "milliseconds"://vrati milisekundy
			return ToThree(ParseTimeData[3]);
			break;
		case "hmsm"://vrati hodiny, minuty, sekundy, milisekundy
			return ToTwo(ParseTimeData[0])+":"+ToTwo(ParseTimeData[1])+":"+ToTwo(ParseTimeData[2])+":"+ToThree(ParseTimeData[3]);
			break;
		case "hm"://vrati hodiny a minuty
			return ToTwo(ParseTimeData[0])+":"+ToTwo(ParseTimeData[1]);
			break;
		case "msm"://vrati minuty, sekundy, milisekundy
			return ToTwo(ParseTimeData[1])+":"+ToTwo(ParseTimeData[2])+ToThree(ParseTimeData[3]);
			break;
		case "ms"://vrati minuty a sekundy
			return ToTwo(ParseTimeData[1])+":"+ToTwo(ParseTimeData[2]);
			break;
		case "sm"://vrati sekundy a milisekundy
			return ToTwo(ParseTimeData[2])+":"+ToThree(ParseTimeData[3]);
			break;
		default: //vrati hodiny, minuty a sekundy
			return ToTwo(ParseTimeData[0])+":"+ToTwo(ParseTimeData[1])+":"+ToTwo(ParseTimeData[2]);
			break;
	}
}

function GetSysDate(type){
	var ParseDateData = TranslateDate(SysTimeData);
	switch(type.toLowerCase()){
		case "years"://vrati roky
			return ParseDateData[0];
			break;
		case "months"://vrati mesice
			return ParseDateData[1];
			break;
		case "days"://vrati dny
			return ParseDateData[2];
			break;
		case "ym"://vrati roky a mesice
			return ParseDateData[0]+"/"+ParseDateData[1];
			break;
		case "md"://vrati mesice a dny
			return ParseDateData[1]+"/"+ParseDateData[2];
			break;
		default: //vrati roky mesice a dny
			return ParseDateData[0]+"/"+ParseDateData[1]+"/"+ParseDateData[2];
			break;
	}
}

function GetSysTimeLocal(type){
	var ParseTimeData = TranslateTime(SysTimeActualLocal);
	switch(type.toLowerCase()){
		case "hours"://vrati hodiny
			return ToTwo(ParseTimeData[0]);
			break;
		case "minutes"://vrati minuty
			return ToTwo(ParseTimeData[1]);
			break;
		case "seconds"://vrati sekundy
			return ToTwo(ParseTimeData[2]);
			break;
		case "milliseconds"://vrati milisekundy
			return ToThree(ParseTimeData[3]);
			break;
		case "hmsm"://vrati hodiny, minuty, sekundy, milisekundy
			return ToTwo(ParseTimeData[0])+":"+ToTwo(ParseTimeData[1])+":"+ToTwo(ParseTimeData[2])+":"+ToThree(ParseTimeData[3]);
			break;
		case "hm"://vrati hodiny a minuty
			return ToTwo(ParseTimeData[0])+":"+ToTwo(ParseTimeData[1]);
			break;
		case "msm"://vrati minuty, sekundy, milisekundy
			return ToTwo(ParseTimeData[1])+":"+ToTwo(ParseTimeData[2])+ToThree(ParseTimeData[3]);
			break;
		case "ms"://vrati minuty a sekundy
			return ToTwo(ParseTimeData[1])+":"+ToTwo(ParseTimeData[2]);
			break;
		case "sm"://vrati sekundy a milisekundy
			return ToTwo(ParseTimeData[2])+":"+ToThree(ParseTimeData[3]);
			break;
		default: //vrati hodiny, minuty a sekundy
			return ToTwo(ParseTimeData[0])+":"+ToTwo(ParseTimeData[1])+":"+ToTwo(ParseTimeData[2]);
			break;
	}
}

function GetSysDateLocal(type){
	var ParseDateData = TranslateDate(SysTimeDataLocal);
	switch(type.toLowerCase()){
		case "years"://vrati roky
			return ParseDateData[0];
			break;
		case "months"://vrati mesice
			return ParseDateData[1];
			break;
		case "days"://vrati dny
			return ParseDateData[2];
			break;
		case "ym"://vrati roky a mesice
			return ParseDateData[0]+"/"+ParseDateData[1];
			break;
		case "md"://vrati mesice a dny
			return ParseDateData[1]+"/"+ParseDateData[2];
			break;
		default: //vrati roky mesice a dny
			return ParseDateData[0]+"/"+ParseDateData[1]+"/"+ParseDateData[2];
			break;
	}
}

function SetComFVC(){
//	TRF(0).GtE("shIcon").href = "data:image/svg+xml,%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 480 480'%3E%3Cpath d='M20 240V30h440v420H20V240zm390 0V60H70v360h340V240z' fill='silver'/%3E%3Cpath d='M0 240V0h480v480H0V240zm460 0V30H20v420h440V240z'/%3E%3Cpath d='M70 240V60h340v360H70V240zm320 0V80H90v320h300V240z'/%3E%3Cg fill='green'%3E%3Cpath d='M90 240V80h300v320H90V240z'/%3E%3C/g%3E%3C/svg%3E";
	window.parent.postMessage("EXE$$$\"GtE('shIcon').href = \\\"data:image/svg+xml,%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 480 480'%3E%3Cpath d='M20 240V30h440v420H20V240zm390 0V60H70v360h340V240z' fill='silver'/%3E%3Cpath d='M0 240V0h480v480H0V240zm460 0V30H20v420h440V240z'/%3E%3Cpath d='M70 240V60h340v360H70V240zm320 0V80H90v320h300V240z'/%3E%3Cg fill='green'%3E%3Cpath d='M90 240V80h300v320H90V240z'/%3E%3C/g%3E%3C/svg%3E\\\"\"", "*");
}

function SetGUIFVC(){
//	TRF(0).GtE("shIcon").href = "data:image/svg+xml,%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 480 480'%3E%3Cpath d='M307 173c-4-3-7-39-7-80V20h160v160h-73c-41 0-77-3-80-7z' fill='%23ff0'/%3E%3Cpath d='M20 345V229l68 3 67 3 3 113 3 112H20V345z' fill='red'/%3E%3Cpath d='M20 110V20h251l-3 88-3 87-122 3-123 3v-91z' fill='green'/%3E%3Cpath d='M192 338l3-123 133-3 132-3v251H189l3-122z' fill='%2300f'/%3E%3Cpath d='M0 240V0h480v480H0V240zm140 110V250H30v200h110V350zm310-10V230H210v220h240V340zM250 105V30H30v150h220v-75zm200-10V30H320v130h130V95z'/%3E%3C/svg%3E";
//GtE("shIcon").href = "data:image/svg+xml,%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 480 480'%3E%3Cpath d='M307 173c-4-3-7-39-7-80V20h160v160h-73c-41 0-77-3-80-7z' fill='%23ff0'/%3E%3Cpath d='M20 345V229l68 3 67 3 3 113 3 112H20V345z' fill='red'/%3E%3Cpath d='M20 110V20h251l-3 88-3 87-122 3-123 3v-91z' fill='green'/%3E%3Cpath d='M192 338l3-123 133-3 132-3v251H189l3-122z' fill='%2300f'/%3E%3Cpath d='M0 240V0h480v480H0V240zm140 110V250H30v200h110V350zm310-10V230H210v220h240V340zM250 105V30H30v150h220v-75zm200-10V30H320v130h130V95z'/%3E%3C/svg%3E";
	window.parent.postMessage("EXE$$$SetFavicon(\"data:image/svg+xml,%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 480 480'%3E%3Cpath d='M307 173c-4-3-7-39-7-80V20h160v160h-73c-41 0-77-3-80-7z' fill='%23ff0'/%3E%3Cpath d='M20 345V229l68 3 67 3 3 113 3 112H20V345z' fill='red'/%3E%3Cpath d='M20 110V20h251l-3 88-3 87-122 3-123 3v-91z' fill='green'/%3E%3Cpath d='M192 338l3-123 133-3 132-3v251H189l3-122z' fill='%2300f'/%3E%3Cpath d='M0 240V0h480v480H0V240zm140 110V250H30v200h110V350zm310-10V230H210v220h240V340zM250 105V30H30v150h220v-75zm200-10V30H320v130h130V95z'/%3E%3C/svg%3E\");", "*");
}

var SYS = "";
function GUISystem(){
	GtE(main_grid).innerHTML = "";
	GtE(main_grid_a).innerHTML = "";
	GtE(main_grid_a).style.backgroundColor = "#000000";
	GtE(main_grid_a).style.opacity = "1.0";
	GtE(main_grid_a).style.zIndex = "999999";
	SetGUIFVC();
	SystemGUIStartup();
}

function MultiDimensionalArray(iRows,iCols,setData){
	var Data = "";
	if (setData)
		Data = setData;
    var table = [iRows];
    for (var i = 0; i < iRows; i++) {
        table[i] = [iCols];
        for (var j = 0; j < iCols; j++)
            table[i][j] = Data;
    }
    return(table);
}

function roundNumber(num, scale){//zaokrohli cislo num na dany pocet desetinnych mist (scale)
  if(!("" + num).includes("e")){
    return +(Math.round(num + "e+" + scale)  + "e-" + scale);
  } else {
    var arr = ("" + num).split("e");
    var sig = ""
    if(+arr[1] + scale > 0) {
      sig = "+";
    }
    return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
  }
} 

function SetDrop(ev) {
    ev.preventDefault();
}

function SetDragMove(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function SetDropMove(ev){
    ev.preventDefault();
    ev.target.appendChild(GtE(ev.dataTransfer.getData("text")));
}

var WasPrefetch = false;
var GUIWAIT = "";
var sysWaitTimerStartup = "";
var WASWelcome = false;
var WASInitialStartupGUI = false;
var sysWaitTimerFirst = "";
var WASWelcomePlaying = "";
var sysWaitTimerReset = "";
var FinishedStart = false;
var BreakOEM = false;
var OEMwait = -1;
function SystemGUIStartup(){
//	var sysWait = 7500;
//	document.getElementById(main_grid_a).innerHTML = "";
	GtE(main_grid_a).zIndex = 999999;
	GtE(main_grid_a).display = "block";
	if (PrefetchOnStartup > 0 && !WasPrefetch){
		WasPrefetch = true;
		var sysInitTimer = window.setTimeout(function(){INLoad();},200);
	}
	var sysWait = SpeedRange(6500,9500);
	if (OEMDelay > -1)
		sysWait = OEMDelay;
    if (OEMDelay > 0)
        OEMwait = OEMDelay;
	if (sysWait > 0){
		var ErrorData = "";
		var ErrorDataAdd = "";
		var WSIZX = window.innerWidth;
		var WSIZY = window.innerHeight;
		if (DrawKernel != 3)
			ErrorDataAdd = "<BR><BR><i style='COLOR: #0099FF;' ID='systemErrorInStartupInfo'></I>";
		if (WSIZX < minXResolution)
			ErrorData = "> "+Translate("System detected bad screen resolution")+": X < "+minXResolution+" (X = "+WSIZX+")";
		if (WSIZY < minYResolution){
			if (ErrorData == "")
				ErrorData = "> "+Translate("System detected bad screen resolution")+": Y < "+minYResolution+" (Y = "+WSIZY+")";
			else
				ErrorData += "; Y < "+minYResolution+" (Y = "+WSIZY+")";
		}
		if (roundNumber((WSIZY/WSIZX),5) < GoodAspectRatioMin || (WSIZY/WSIZX) > GoodAspectRatioMax){
			if (ErrorData == "")
		ErrorData = "> "+Translate("System detected bad aspect ratio of screen: Required = from")+": "+GoodAspectRatioMin+" "+Translate("to")+": "+GoodAspectRatioMax+" ("+Translate("Actual")+" = "+roundNumber((WSIZY/WSIZX),5)+")";
			else
				ErrorData += "<br>> "+Translate("System detected bad aspect ratio of screen: Required = from")+": "+GoodAspectRatioMin+" "+Translate("to")+": "+GoodAspectRatioMax+" ("+Translate("Actual")+" = "+roundNumber((WSIZY/WSIZX),5)+")";
		}
		if (ErrorData != "")
			ErrorData += ErrorDataAdd;
			//ErrorData += "<br>> System detected bad resolution: Y < 400 (Y = "+document.body.offsetWidth+")";
        var LoadStartupBar = "";
        if (!_DoNotShowSysLoadProgressBar)
            LoadStartupBar = '<div id="systemLogoBar" style="align-self: flex-end; border: 0.2vh solid #777777; width: 20%; height: 2vh; position: absolute;"></div>';
        if (_CustomLoadScreen == ""){
            SpeedWriteInAdd(main_grid_a,'<div id="systemLogoSuperContainer" style="flex-wrap: wrap; justify-content: center; display: flex; top: 30%; left: 0%; width: 100%; height: 24vh; position: absolute;background-color: #000000; opacity: 1;"><div id="systemLogoContainer" class="systemLogoContainer systemLogoContainerStart">\
                <div id="systemLogoBlue" class="systemLogo logoBlue"></div>\
                <div id="systemLogoRed" class="systemLogo logoRed"></div>\
                <div id="systemLogoYellow" class="systemLogo logoYellow"></div>\
                <div id="systemLogoGreen" class="systemLogo logoGreen"></div>\
            </div>'+LoadStartupBar+'</div>\
            <div id="systemErrorInStartup" style="position: absolute; display: block; width: 90vw; left: 5vw; top: 60vh; height: 15vh; font-size: 2.5vh; color: #FF0000;">'+ErrorData+'</div>\
            <div id="systemTitle1" style="position: absolute; width: 55vw; height: 20vh; top: 80vh; left: 5vw; font-size: 4vh; color: #777777;">'+SystemStartupName+'&nbsp;<span style="font-size: 2.6vh; font-style: italic;">'+SystemStartupEdition+'</span><br><div style="font-size: 3vh;">'+SystemStartupCorporation+'</div></div>\
            <div id="systemTitle2" style="text-align: right; position: absolute; width: 30vw; height: 20vh; top: 80vh; left: 65vw; font-size: 4vh; color: #777777;>'+SystemStartupVer+'<br><div style="font-size: 3vh;">'+SystemStartupMan+'</div></div>\
            ');
            //PlayLogo(sysWait/1.2,true);
            PlayLogo(sysWait/1.5,true);
        }
        else{
            SpeedWriteIn(main_grid_a, _CustomLoadScreen);
            if (!_DoNotShowSysLoadProgressBar)
                SpeedWriteInAdd(main_grid_a, "<div id='systemLogoBar' style='border: 0.2vh solid #777777; width: 20%; height: 2vh; top: 0px; left: 0px; position: absolute; z-index: 99999;'></div>");
        }
        if (!_DoNotShowSysLoadProgressBar){
            if (OEMwait > -1)
                GUIWAIT = new ProgressBar("systemLogoBar","#000000","gradient:linear-gradient(#009900,#000066);",sysWait);
            else
                GUIWAIT = new ProgressBar("systemLogoBar","#000000","gradient:linear-gradient(#009900,#000066);",-1);
            GUIWAIT.start();
        }
        if(ErrorData != "" && DrawKernel != 3){
            var sysWaitTimerErr = window.setTimeout(function(){
                AutoRepairSystemPosition(0,0,false);
                try{
                    GtE("systemErrorInStartupInfo").innerHTML = "> "+Translate("Screen resolution has been adjusted autmatically.");
                }catch(erd){}
            },sysWait/3);
        }
		WASInitialStartupGUI = true;
        
        if (OEMwait > 0){
            var OEMDelayTimer = window.setTimeout(function(){
                OEMwait = -1;
                if (BreakOEM)
                    OnLoadFinished();
            }, OEMwait);
        }
	}
    else
        SystemWelcomeStartup();
}

var UpdateSysCount = 0;
var UpdateSysCountOld = 0;
var UpdateSysCountSingle = 0;
var UpdateSysCountHowManyTimes = 0;
var UpdateSysCountCurrentTime = 0;
function UpdateLoadSys(howmanytimes){
    if (OEMDelay != 0 && !_DoNotShowSysLoadProgressBar){
        if (howmanytimes && howmanytimes != "" && howmanytimes > 0){
            UpdateSysCountSingle = Math.ceil(10/howmanytimes);
            UpdateSysCountHowManyTimes = howmanytimes;
        }
        UpdateSysCount = UpdateSysCount+UpdateSysCountSingle;
        var d = Math.floor(UpdateSysCount-UpdateSysCountOld);
        UpdateSysCountOld = UpdateSysCount;
        for (var i = 0; i < d; i++){
            GUIWAIT.nextTick();
        }
        UpdateSysCountCurrentTime++;
        if (UpdateSysCountCurrentTime >= UpdateSysCountHowManyTimes){
            if (GUIWAIT != "")
                GUIWAIT.stop();
    //		SystemWelcomeStartup();
        }
    }
}

var WelcomeScreen = '<div id="systemWelcome" style="position: absolute; width: 100vw; height: 100vh; background: linear-gradient(to right, #000066, #003399); z-index: 999999;">\
		<div style="position: absolute; top: 0vh; width: 100vw; height: 20vh; background: linear-gradient(to right, #000066, #003399);"></div>\
		<div style="position: absolute; top: 20vh; width: 100vw; height: 1vh; background: linear-gradient(to right, red, yellow);"></div>\
		<div style="position: absolute; top: 21vh; width: 100vw; height: 58vh; background: linear-gradient(to left, #003399, #3366FF);">\
			<div style="position: absolute; color: #FFFFFF; font-size: 6vh; left: 40vw; top: 26vh; text-align: right; width: 40vw; height: 6vh;">'+Translate("Welcome")+' ...</div>\
		</div>\
		<div style="position: absolute; top: 79vh; width: 100vw; height: 1vh; background: linear-gradient(to right, red, yellow);"></div>\
		<div style="position: absolute; top: 80vh; width: 100vw; height: 20vh; background: linear-gradient(to right, #000066, #003399);"></div>\
		</div>';

function SystemWelcomeStartup(){
//	document.getElementById(main_grid_a).innerHTML = "";
	var sysWait = SpeedRange(4000,12000);
	if (WelcomeDelay > -1)
		sysWait = WelcomeDelay;
	if (PrefetchOnStartup > 0 && !WasPrefetch){
		PrefetchOnStartup = false;
		WasPrefetch = true;
		var sysInitTimer = window.setTimeout(function(){INLoad();},200);
	}
	if (sysWait > 0){
		SpeedWriteIn(main_grid_a,WelcomeScreen);
		ReverseGradient(0.1,20,sysWait,"systemWelcome");
		WASWelcome = true;
	}
	if (WelcomePlaySound){
		sysWaitTimerFirst = window.setTimeout(function(){
			WASWelcomePlaying = true;
			SetMedia("ComSnd",1,1);
			MediaPlay("ComSnd");
		},sysWait/2);
	}
	
	sysWaitTimerReset = window.setTimeout(function(){
        if (!_DoNotShowAppLoading || !WasPrefetch){
            document.getElementById(main_grid_a).innerHTML = "";
            document.getElementById(main_grid_a).style.display = "none";
        }
		FinishedStart = true;
		if (!WasPrefetch)
			INLoad();
	},sysWait);
}

function INLoad(){
	COMKER = "GUI";
	SYS = new SysGUI("sysGUI",main_grid);
	SpeedWriteInAdd(main_grid,"<div id='WindowChoose' class='WindowChoose'>\
		<div id='WindowChooseIconContainer' class='WindowChooseIconContainer'>\
			<div id='WindowChooseIcon0' class='WindowChooseIcon'></div>\
			<div id='WindowChooseIcon1' class='WindowChooseIcon'></div>\
			<div id='WindowChooseIcon2' class='WindowChooseIcon'></div>\
		</div>\
		<div id='WindowChooseTitle' class='WindowChooseTitle'></div>\
		</div>");
	ChooseWindowByRibbon();
	SYS.newInstance("sysInstanceGUI");
	BuildSystem(SYS,"sysInstanceGUI");
	SETVIEWSAFTERSTARTUP();
    if (!_DoNotShowAppLoading)
        Show_Message_Window_New_App(Translate("Starting the application")+" ...",0.55);
	SystemOnLoad();
}

function OnLoadFinished(){
    BreakOEM = true;
    if (OEMwait > -1)
        return;
	window.clearTimeout(sysWaitTimerReset);
	Hide_Message_Window_New_App();
    if (_DoNotShowAppLoading && FinishedStart){
        document.getElementById(main_grid_a).innerHTML = "";
        document.getElementById(main_grid_a).style.display = "none";
    }
	if (PrefetchOnStartup == 2){
		var sysWaitCOM = 0;
		var sysWaitWelc = 0;
		if (GUIWAIT != "" && WASInitialStartupGUI){
			window.clearTimeout(sysWaitTimerStartup);
			var OldPerTick = GUIWAIT.getSize()/GUIWAIT.getAmountOfTicks();
			sysWaitCOM = (GUIWAIT.getAmountOfTicks()-GUIWAIT.getCurrentTickStatus())*(OldPerTick*(SpeedRange(15,20)/100));
			GUIWAIT.resize(sysWaitCOM);
		}
		else if (OEMDelay == -1 && !_NoOutputDuringStartup){
			GtE(main_grid_a).zIndex = 999999;
			GtE(main_grid_a).display = "block";
			SpeedWriteIn(main_grid_a,Translate("System is loaded")+" ...");
            sysWaitCOM = SpeedRange(750,1500);
		}
		if (!WASWelcome && (WelcomeDelay > 0 || WelcomeDelay == -1)){
			if (WelcomeDelay > 0)
				sysWaitWelc = Math.min(SpeedRange(2000,3000), WelcomeDelay);
			else
				sysWaitWelc = SpeedRange(2000,3000);
			var WaitForCom = window.setTimeout(function(){
				SpeedWriteIn(main_grid_a,WelcomeScreen);
				ReverseGradient(0.1,20,sysWaitWelc,"systemWelcome");
				WASWelcome = true;
			},sysWaitCOM);
		}
		if (WelcomePlaySound && !WASWelcomePlaying){
			window.clearTimeout(sysWaitTimerFirst);
			sysWaitTimerFirst = window.setTimeout(function(){
				WASWelcomePlaying = true;
				SetMedia("ComSnd",1,1);
				MediaPlay("ComSnd");
			},(sysWaitCOM+(sysWaitWelc/2)));
		}
		if (!FinishedStart){
			var SysWelcOnload = window.setTimeout(function(){
				document.getElementById(main_grid_a).innerHTML = "";
				document.getElementById(main_grid_a).style.display = "none";
				FinishedStart = true;
            },(sysWaitCOM+sysWaitWelc));
		}
	}
}

var SysIn = null;

function px2cm(px) {
  var d = $("<div/>").css({ position: 'absolute', top : '-1000cm', left : '-1000cm', height : '1000cm', width : '1000cm' }).appendTo('body');
  var px_per_cm = d.height() / 1000;
  d.remove();
  return px / px_per_cm;
}

function SetToInt(d){
	d = d.toString().toLowerCase().trim();
	var res = "";
	var dot = false;
	for (var i = 0; i < d.length; i++){
		if (d[i] == "0" || d[i] == "1" || d[i] == "2" || d[i] == "3" || d[i] == "4" || d[i] == "5" || d[i] == "6" || d[i] == "7" || d[i] == "8" || d[i] == "9" || (d[i] == "." && (!dot))){
			if (d[i] == ".")
				dot = true;
			res += ""+d[i];
		}
	}
	if (dot)
		return parseFloat(res);
	if (res == "")
		return undefined;
	return parseInt(res, 10);
}

function TRF(n){
	var ReferenceString = "window.self";
	do
		ReferenceString += ".parent";
	while(eval(ReferenceString+" != window.top"));
	return eval(ReferenceString.substring(0, parseInt(ReferenceString.length,10)-(7*n)));
}	
function TRFACT(){
	var ReferenceString = "window.self";
	do
		ReferenceString += ".parent";
	while(eval(ReferenceString+" != window.top"));	
	var len = ReferenceString.split("parent");
	return parseInt(len.length,10)-1;
}

var SysZoomLevel = 0;
var ZoomCurrentL = 100;
var ZoomCurrentT = 100;

var SetSysZoomParams = [];
function SetSysZoom(type){
	if (SetSysZoomParams.length == 0){
		SetSysZoomParams = [type];
		window.parent.postMessage("GET$$$window.parent.innerWidth,SetSysZoomA1", "*");
	}
}

function SetSysZoomA1(data){
	SetSysZoomParams.push(data);
	window.parent.postMessage("GET$$$window.parent.innerHeight,SetSysZoomA2", "*");
}


function SetSysZoomA2(data){
	SetSysZoomParams.push(data);
//	window.parent.postMessage("GET$$$GtE('ZoomRender').offsetHeight,SetSysZoomA3", "*");
	window.parent.postMessage("GET$$$GtE('system').offsetHeight,SetSysZoomA3", "*");
}


function SetSysZoomA3(data){
	SetSysZoomParams.push(data);
//	window.parent.postMessage("GET$$$GtE('ZoomRender').offsetWidth,SetSysZoomA4", "*");
	window.parent.postMessage("GET$$$GtE('system').offsetWidth,SetSysZoomA4", "*");
}

function SetSysZoomA4(data){
	SetSysZoomParams.push(data);
	
	var type = SetSysZoomParams[0];
	var ActSizeHeight = SetSysZoomParams[1];
	var ActSizeWidth = SetSysZoomParams[2];
	var SizeMeterHeight = SetSysZoomParams[3];
	var SizeMeterWidth = SetSysZoomParams[4];

	SetSysZoomParams = [];

	try{
		var SizeMeterHeightCM = SetToInt(px2cm(SizeMeterHeight));
		var SizeMeterWidthCM = SetToInt(px2cm(SizeMeterWidth));
		var HeightChange = 1;
		var WidthChange = 1;
		var JumpChange = 0.34;
		var newZoomL = 0;
		var newZoomT = 0;
		if (type == "A"){
			if (SizeMeterHeightCM < minRenObjHeight10)
				HeightChange = minRenObjHeight10/SizeMeterHeightCM;
			if (SizeMeterWidthCM < minRenObjWidth10)
				WidthChange = minRenObjWidth10/SizeMeterWidthCM;
			SysZoomLevel = 0;
		}
		else if (type){//zoom
	//		top.document.getElementById("system").style.height = (ActSizeHeight*0.66)+"px";
	//		top.document.getElementById("system").style.width = (ActSizeWidth*0.66)+"px";
			window.parent.postMessage("EXE$$$\"GtE('system').style.height = '"+(ActSizeHeight*0.66)+"px';\"", "*");
			window.parent.postMessage("EXE$$$\"GtE('system').style.width = '"+(ActSizeWidth*0.66)+"px';\"", "*");
			HeightChange = 0.66;
			WidthChange = 0.66;
			ZoomCurrentT = 100;
			ZoomCurrentL = 100;
			newZoomT = HeightChange;
			newZoomL = WidthChange;
			if (WidthChange == 1)
				newZoomL = "R";
			if (HeightChange == 1)
				newZoomT = "R";
			SysZoomLevel = 1;
		}
		else{//unzoom
	//		top.document.getElementById("system").style.height = (ActSizeHeight*1.34)+"px";
	//		top.document.getElementById("system").style.width = (ActSizeWidth*1.34)+"px";
			window.parent.postMessage("EXE$$$\"GtE('system').style.height = '"+(ActSizeHeight*1.34)+"px';\"", "*");
			window.parent.postMessage("EXE$$$\"GtE('system').style.width = '"+(ActSizeWidth*1.34)+"px';\"", "*");			
			HeightChange = 1.34;
			WidthChange = 1.34;
			ZoomCurrentT = 100;
			ZoomCurrentL = 100;
			newZoomT = HeightChange;
			newZoomL = WidthChange;
			if (WidthChange == 1)
				newZoomL = "R";
			if (HeightChange == 1)
				newZoomT = "R";		
			SysZoomLevel = 1;
		}
		if (SysZoomLevel == 0){
			if (HeightChange != 1){
			//	top.document.getElementById("system").style.height = (ActSizeHeight*HeightChange)+"px";
				window.parent.postMessage("EXE$$$\"GtE('system').style.height = '"+(ActSizeHeight*HeightChange)+"px';\"", "*");
				ZoomCurrentT = 100;
				newZoomT = HeightChange;
			}
			if (WidthChange != 1){
			//	top.document.getElementById("system").style.width = (ActSizeWidth*WidthChange)+"px";
				window.parent.postMessage("EXE$$$\"GtE('system').style.width = '"+(ActSizeWidth*WidthChange)+"px';\"", "*");
				ZoomCurrentL = 100;
				newZoomL = WidthChange;
			}
			if (WidthChange == 1)
				newZoomL = "R";
			if (HeightChange == 1)
				newZoomT = "R";
		}
		SysZoom(newZoomL, newZoomT, 0, 0);
	}catch(erd){}
}

function SysZoom(percentW, percentH, pixL, pixT){
	if (percentW == "R")
		ZoomCurrentL = 100;
	else
		ZoomCurrentL = ZoomCurrentL/percentW;
	var ZoomL = ZoomCurrentL;
	if (!(ZoomCurrentL > 0 && ZoomCurrentL < 3000)){
		ZoomCurrentL = ZoomCurrentL*percentW;
		ZoomL = 0;
	}
	if (percentH == "R")
		ZoomCurrentT = 100;
	else
		ZoomCurrentT = ZoomCurrentT/percentH;
	var ZoomT = ZoomCurrentT;
	if (!(ZoomCurrentT > 0 && ZoomCurrentT < 3000)){
		ZoomCurrentT = ZoomCurrentT*percentH;
		ZoomT = 0;
	}	
//	top.document.getElementById("system").style.transform = "matrix("+(ZoomL/100)+", 0, 0, "+(ZoomT/100)+", "+pixL+", "+pixT+")";
	window.parent.postMessage("EXE$$$\"GtE('system').style.transform = 'matrix("+(ZoomL/100)+", 0, 0, "+(ZoomT/100)+","+pixL+","+pixT+"');\"", "*");
	SysZoomTransform();
}

var SysZoomTransformParams = [];
function SysZoomTransform(){
	if (SysZoomTransformParams.length == 0){
		SysZoomTransformParams = [];
		window.parent.postMessage("GET$$$window.parent.innerHeight,SysZoomTransformA1", "*");
	}
}

function SysZoomTransformA1(data){
	SysZoomTransformParams.push(data);
	window.parent.postMessage("GET$$$window.parent.innerWidth,SysZoomTransformA2", "*");
}


function SysZoomTransformA2(data){
	SysZoomTransformParams.push(data);
	window.parent.postMessage("GET$$$GtE('system').offsetHeight,SysZoomTransformA3", "*");
}


function SysZoomTransformA3(data){
	SysZoomTransformParams.push(data);
	window.parent.postMessage("GET$$$GtE('system').offsetWidth,SysZoomTransformA4", "*");
}

function SysZoomTransformA4(data){
	SysZoomTransformParams.push(data);
	
	var DefSizeHeight = SysZoomTransformParams[0];
	var DefSizeWidth = SysZoomTransformParams[1];
	var ActSizeHeight = SysZoomTransformParams[2];
	var ActSizeWidth = SysZoomTransformParams[3];

	SysZoomTransformParams = [];

//	top.document.getElementById("system").style.left = ((parseInt(DefSizeWidth,10)-parseInt(ActSizeWidth,10))/2)+"px";
	window.parent.postMessage("EXE$$$\"GtE('system').style.left = '"+((parseInt(DefSizeWidth,10)-parseInt(ActSizeWidth,10))/2)+"px';\"", "*");
//	top.document.getElementById("system").style.top = ((parseInt(DefSizeHeight,10)-parseInt(ActSizeHeight,10))/2)+"px";
	window.parent.postMessage("EXE$$$\"GtE('system').style.top = '"+((parseInt(DefSizeHeight,10)-parseInt(ActSizeHeight,10))/2)+"px';\"", "*");
//	top.document.getElementById("system").style.transform = "matrix("+(DefSizeWidth/ActSizeWidth)+", 0, 0, "+(DefSizeHeight/ActSizeHeight)+", "+(DefSizeWidth/ActSizeWidth)+", "+(DefSizeHeight/ActSizeHeight)+")";
	window.parent.postMessage("EXE$$$\"GtE('system').style.transform = 'matrix("+(DefSizeWidth/ActSizeWidth)+", 0, 0, "+(DefSizeHeight/ActSizeHeight)+","+(DefSizeWidth/ActSizeWidth)+","+(DefSizeHeight/ActSizeHeight)+"');\"", "*");
}

function BuildSystem(SGUI,Inst){
	AutoRepairSystemPosition(0,0,false);
	
	//define basic work with sysgui
	SysIn = eval("SGUI.InstancesObj."+Inst);
	SysIn.Tray.Menu.writeMenuTitle(COMGUIName+" "+ComGUIver);
	LoadGFRAMElib();
//	ShowEmulator();
	
//	var setInitialSets = window.setTimeout(SETVIEWSAFTERSTARTUP,1500);
}


var ResizeSystemParams = [];
function ResizeSystem(w,h,bw,bh){
	if (DrawKernel != "1" && DrawKernel != "2")
		return undefined;
	if (ResizeSystemParams.length == 0){
		ResizeSystemParams = [w,h,bw,bh];
		window.parent.postMessage("GET$$$window.parent.innerWidth,ResizeSystemA1", "*");
	}
}

function ResizeSystemA1(data){
	ResizeSystemParams.push(data);
	window.parent.postMessage("GET$$$window.parent.innerHeight,ResizeSystemA2", "*");
}

function ResizeSystemA2(data){
	ResizeSystemParams.push(data);
	
	var w = ResizeSystemParams[0];
	var h = ResizeSystemParams[1];
	var bw = ResizeSystemParams[2];
	var bh = ResizeSystemParams[3];
	var dataWidth = ResizeSystemParams[4];
	var dataHeight = ResizeSystemParams[5];

	ResizeSystemParams = [];

	if (w != "n"){
		w -= bw;
		if (dataWidth > w)
			dataWidth = ((parseInt(dataWidth,10)-parseInt(w,10))/2)-parseInt((bw/2),10);
		else
			dataWidth = 0;
		window.parent.postMessage("EXE$$$\"GtE('system').style.width = '"+w+"px';\"", "*");
		window.parent.postMessage("EXE$$$\"GtE('system').style.left = '"+dataWidth+"px';\"", "*");
	/*	window.parent.GtE("system").style.width = w+"px";
		window.parent.GtE("system").style.left = dataWidth+"px";	*/
	}
	if (h != "n"){
		h -= bh;
		if (dataHeight > h)
			dataHeight = ((parseInt(dataHeight,10)-parseInt(h,10))/2)-parseInt((bh/2),10);
		else
			dataHeight = 0;
		window.parent.postMessage("EXE$$$\"GtE('system').style.height = '"+h+"px';\"", "*");
		window.parent.postMessage("EXE$$$\"GtE('system').style.top = '"+dataHeight+"px';\"", "*");
		
	/*	window.parent.GtE("system").style.height = h+"px";
		window.parent.GtE("system").style.top = dataHeight+"px";	*/
	}
}

window.addEventListener("message", ReceiveMessage, false);
function ReceiveMessage(data, source){
	var datain = [""];
	try{
		datain = data.data.split("$$$");
	}catch(erd){console.log(erd);}
	try{
		if (datain[0] == "EXE"){
			eval(eval(datain[1]));
		}
		else if (datain[0] == "GET"){
			var subdata = datain[1].split(",");
			var d = eval(subdata[0].trim());
			window.parent.postMessage("RET$$$"+subdata[1].trim()+","+d,"*");
		}
		else if (datain[0] == "RET"){
			var subdata = datain[1].split(",");
			var d = subdata[0].trim()+"('"+subdata[1].trim()+"');";
			eval(d);
		}		
	}catch(erd){
		console.error(erd);
	}
}

var AutoRepairSystemPositionParams = [];
function AutoRepairSystemPosition(modx,mody,resolutionBool){
	if (AutoRepairSystemPositionParams.length == 0){
		AutoRepairSystemPositionParams = [modx, mody, resolutionBool];
		window.parent.postMessage("GET$$$window.parent.innerWidth,AutoRepairSystemPositionA1", "*");
	}
}

function AutoRepairSystemPositionA1(data){
	AutoRepairSystemPositionParams.push(data);
	window.parent.postMessage("GET$$$window.parent.innerHeight,AutoRepairSystemPositionA2", "*");
}

function AutoRepairSystemPositionA2(data){
	AutoRepairSystemPositionParams.push(data);
	
	var modx = AutoRepairSystemPositionParams[0];
	var mody = AutoRepairSystemPositionParams[1];
	var resolutionBool = AutoRepairSystemPositionParams[2];
	var parentInnerWidth = AutoRepairSystemPositionParams[3];
	var parentInnerHeight = AutoRepairSystemPositionParams[4];

	AutoRepairSystemPositionParams = [];
	
	if (DrawKernel == "2"){
		var dataWidth = modx;
		if (modx == 0){}
			dataWidth = parentInnerWidth;
		var dataHeight = mody;
		if (mody == 0)
			dataHeight = parentInnerHeight;
		var resChangeBorder = false;
		var bw = 0;
		var bh = 0;
		if (dataWidth < minXResolution){
			if (resolutionBool)
				dataWidth = minXResolution;
			else 
				resChangeBorder = true;
		}
		if (dataHeight < minYResolution){
			if (resolutionBool)
				dataHeight = minYResolution;
			else 
				resChangeBorder = true;
		}
		if (roundNumber((dataHeight/dataWidth),5) < GoodAspectRatioMin)
			dataWidth = dataHeight/GoodAspectRatioMin;
		if (roundNumber((dataHeight/dataWidth),5) > GoodAspectRatioMax)
			dataHeight = dataWidth*GoodAspectRatioMax;
		if (dataWidth < minXResolution){
			if (resolutionBool)
				dataWidth = minXResolution;
			else
				resChangeBorder = true;
		}
		if (dataHeight < minYResolution){
			if (resolutionBool)
				dataHeight = minYResolution;
			else
				resChangeBorder = true;
		}
		if (dataWidth < minXResolution){
			if (resolutionBool){
				AutoRepairSystemPosition(minXResolution,dataHeight);
				return undefined;
			}
			else
				resChangeBorder = true;
		}
		if (dataHeight < minYResolution){
			if (resolutionBool){
				AutoRepairSystemPosition(dataWidth,minYResolution);
				return undefined;
			}
			else
				resChangeBorder = true;
		}	
		if (resChangeBorder && !_DoNotColorizeBadIALReasolution){
			window.parent.postMessage("EXE$$$\"GtE('system').style.borderTop = '0.5vh solid red';\"", "*");
			window.parent.postMessage("EXE$$$\"GtE('system').style.borderBottom = '0.5vh solid red'\";", "*");
			window.parent.postMessage("EXE$$$\"GtE('system').style.borderLeft = '0.5vh solid red';\"", "*");
			window.parent.postMessage("EXE$$$\"GtE('system').style.borderRight = '0.5vh solid red';\"", "*");
			bw = parentInnerWidth/100;//sirka ramecku u iframe system (u left/right - sectena)
			bh = parentInnerHeight/100;//sirka ramecku u iframe system (u top/bottom - sectena)
			
		/*	window.parent.GtE("system").style.borderTop = "0.5vh solid red";
			window.parent.GtE("system").style.borderBottom = "0.5vh solid red";
			window.parent.GtE("system").style.borderLeft = "0.5vw solid red";
			window.parent.GtE("system").style.borderRight = "0.5vw solid red";
			bw = window.parent.innerWidth/100;//sirka ramecku u iframe system (u left/right - sectena)
			bh = window.parent.innerHeight/100;//sirka ramecku u iframe system (u top/bottom - sectena)
			
			*/
			
		}
		else
			window.parent.postMessage("EXE$$$\"GtE('system').style.border = 'none';\"", "*");
	//		window.parent.GtE("system").style.border = "none";
		ResizeSystem(dataWidth,dataHeight,bw,bh);
	}
	else if (DrawKernel == "1")
		SetSysZoom("A");
}

function GUITIMESET(){
	try{
		SpeedWriteIn(GUICLOCKTIMEDRAWELEM, GetSysTimeLocal("default"));
		SpeedWriteIn(GUICLOCKDATEDRAWELEM, GetSysDateLocal("default"));
		SpeedWriteTitle(GUICLOCKTIMEDRAWELEM,GetSysDateLocal("default"));
		SpeedWriteTitle(GUICLOCKDATEDRAWELEM,GetSysTimeLocal("default"));
	}catch(erd){}
}

function SYSCONTROLPROCGUI(){
	try{
		GUITIMESET();
		NOTIFYICONSSET();
	}catch(erd){}
}

function LangCodeGetFurtherData(langcode){
	var r = [langcode.toUpperCase()];//first element in array - langcode, second - name of language, third - name of country or arrea of use
	switch(r[0]){
		case "ENG":
			r.push(Translate("English"));
			r.push(Translate("United States"));
			break;
		case "CZ":
			r.push(Translate("Czech"));
			r.push(Translate("Czech Republic"));
			break;
		default:
			r.push(Translate("English"));
			r.push(Translate("International"));
			break;
	}	
	return r;
}

function NOTIFYICONSSET(){
	if (GUINOTIFYICONSSET){
		SetNotifyIcon("lang", "e$"+SYSLANGCODE.toUpperCase(), Translate("System language")+" ("+LangCodeGetFurtherData(SYSLANGCODE)[1]+", "+LangCodeGetFurtherData(SYSLANGCODE)[2]+")", "LanguageSettings();", true, true);
	}
}

function SendError(errorobj){//this we will use for sending error information to a the support for further determination
	
}

function GenerateErrorObject(){
	var d = new Date();
	var r = {
		
	};
	return r;
}

var ERRORLOG = {
	count: 0,
	errors: {
		
	}
};//here will be logged all errors what happened in system

function SetErrorIntoErrorLog(name, typeoferror, errorcode, adddata, description){
	var l = 0;
	try{
		l = parseInt(ERRORLOG.count, 10)+1;
		if (!IsInt(l))
			throw undefined;
	}
	catch(erd){
		l = 1;
	}
	var ol = l-1;
	eval("ERRORLOG.errors.e"+ol+" = {};");
	var ERROROBJITEMSNAME = [["name", "name"], ["typeoferror", "type"], ["errorcode", "code"], ["adddata", "adddata"], ["description", "description"]];
	for (var i = 0; i < ERROROBJITEMSNAME.length; i++){
		var s = "none";
		try{
			if (eval(ERROROBJITEMSNAME[i][0]) != undefined && eval(ERROROBJITEMSNAME[i][0]) !=  null)
				s = eval(ERROROBJITEMSNAME[i][0]);
		}catch(erd){}
		eval("ERRORLOG.errors.e"+ol+"."+ERROROBJITEMSNAME[i][1]+" = '"+s+"';");
	}	
	ERRORLOG.count = l;
	var d = new Date();
	eval("ERRORLOG.errors.e"+ol+".date = d;");
	var s = window.screen.width+"x"+window.screen.height+"@"+screen.pixelDepth+"; pixel_ratio: "+window.devicePixelRatio;
	var stor = "none";
	if (typeof localStorage !== 'undefined'){
		try {
			localStorage.setItem('loc_check', 'yes');
			if (localStorage.getItem('loc_check') === 'yes'){
				localStorage.removeItem('loc_check');
				stor = "true";
			}
			else 
				stor = "false";
		} catch(e){}
	}	
	eval("ERRORLOG.errors.e"+ol+".error_index = ol;");
	eval("ERRORLOG.errors.e"+ol+".resolution = s;");
	eval("ERRORLOG.errors.e"+ol+".language = navigator.language;");
	eval("ERRORLOG.errors.e"+ol+".site_active = navigator.onLine;");
	eval("ERRORLOG.errors.e"+ol+".tracking = navigator.doNotTrack;");	
	eval("ERRORLOG.errors.e"+ol+".cookies = navigator.cookieEnabled;");
	eval("ERRORLOG.errors.e"+ol+".local_storage = stor;");
	eval("ERRORLOG.errors.e"+ol+".javascript_version = JavaScriptVersion();");
	eval("ERRORLOG.errors.e"+ol+".java = IsJava();");
	eval("ERRORLOG.errors.e"+ol+".java_version = JavaVersion();");
	eval("ERRORLOG.errors.e"+ol+".graphic_card = GetGraphicCard();");
	eval("ERRORLOG.errors.e"+ol+".oscpu = navigator.oscpu+'@'+navigator.hardwareConcurrency+'core';");
	eval("ERRORLOG.errors.e"+ol+".user_agent = navigator.oscpu+'@'+navigator.userAgent;");
	var errStamp = "";
	try{
		for (var i = ErrorLog.length; i > Math.max(ErrorLog.length-3, 0); i--)
			errStamp += errStamp.length > 0 ? "-- "+ErrorLog[i] : ErrorLog[i];
		if (errStamp.length == 0)
			throw undefined;
		else{
			try{
				errStamp += "-- :: "+erd;
			}catch(erd){}
		}
	}catch(erd){
		errStamp = "none";
	}
	eval("ERRORLOG.errors.e"+ol+".error_stamp_total_count = ErrorLog.length;");
	eval("ERRORLOG.errors.e"+ol+".error_stamp = errStamp;");
}

function BlueScreen(longtextdata, addtechnicalinfo, shorttextdescription, typeoferror, code){
	SetErrorIntoErrorLog(shorttextdescription, typeoferror, code, addtechnicalinfo, longtextdata);
	var noDesc = ["resolution", "language", "graphic_card", "oscpu", "user_agent"];
	var additInfo = "";
	var bsodurl = BSODURL+"?"+shorttextdescription.toLowerCase();
	var c = 0;
	for (var i in ERRORLOG.errors){
		try{
			c++;
			if (c == ERRORLOG.count){
				var x = eval("ERRORLOG.errors.e"+(c-1));
				var v = 0;
				for (var j in x){
					try{
						v++;
						if (j.toString().toLowerCase() == "description" || j.toString().toLowerCase() == "date" || j.toString().toLowerCase() == "adddata")
							continue;
						if (additInfo.length > 0)
							additInfo += " * ";
						if (noDesc.indexOf(j.toString().toLowerCase()) == -1)
							additInfo += j+": ";
						additInfo += x[j];
						if (v == Object.keys(x).length)
							break;
					}catch(erd){}
				}
				break;
			}
		}catch(erd){}
	}
//	document.body.innerHTML += '<div id="sysqr" style="width: 140px; height: 140px;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="sysqr"/></svg></div>';
	document.body.insertAdjacentHTML('beforeend', '<div id="sysqr" style="width: 140px; height: 140px;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="sysqr"/></svg></div>');
	var qrcode = new QRCode(GtE("sysqr"), {
				text: bsodurl,
				colorDark : "#000000",
				colorLight : "#FFFFFF",
				useSVG: true
	});
//	document.body.innerHTML += '<div id="sysbrcont" style="height: 4vw; width: 8vw; display: flex; align-items: center; justify-content: center; text-align: center;"><svg id="sysbr"></svg></div>';
	document.body.insertAdjacentHTML('beforeend', '<div id="sysbrcont" style="height: 4vw; width: 8vw; display: flex; align-items: center; justify-content: center; text-align: center;"><svg id="sysbr"></svg></div>');
	JsBarcode("#sysbr", typeoferror+code, {
		format: "CODE128",
		lineColor: "#000000",
		background: "#FFFFFF",
		width: 1,
		height: WPercentToWPixel(2, "width"),
		textAlign: "center",
		textPosition: "bottom",
		fontSize: 12,
		displayValue: true
	});
	var d = new Date();
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.text = "document.body.style.backgroundColor='#000066'; document.body.style.color='#FFFF33'; document.body.ondblclick = function(){parent.location.replace(parent.location.href);}; document.body.onkeydown = function(){parent.location.replace(parent.location.href);}; var m = "+SaveAfterUnload+"; m();";
	document.head.appendChild(script);
	var addBQ = "<div id='syscodecont' style='float: right; font-size: 1vw; width: calc(160px + 2vw); height: calc(3vw + 235px); left: calc(97vw - 180px); top: calc(100vh - 4vw - 235px); position: absolute; background-color: #000000; color: #FFFFFF;'></div><div id='sysbrcode' style='float: right; width: 160px; height: 75px; top: calc(100vh - 2vw - 75px); left: calc(98vw - 180px); position: absolute;'>"+GtE("sysbrcont").innerHTML+"</div><div id='sysqrcode' style='float: right; width: 140px; height: 140px; border: 10px solid #FFFFFF; top: calc(100vh - 3vw - 235px); left: calc(98vw - 180px); position: absolute;'>"+GtE("sysqr").innerHTML+"</div>";
	if (window.innerWidth < 640 || window.innerHeight < 480)
		addBQ = "";
	document.body.innerHTML = addBQ+"<div id='systext' style='float: right; top: 1vw; left: calc(81vw - 20px); position: absolute; font-size: 2vw; color: #999999; font-weight: bold; white-space: nowrap;'>"+ComVerName+" "+ComVer+"</div><img id='sysicon' style='float: right; top: 1vw; left: calc(93vw - 20px); width: 6vw; height: 6vw; position: absolute;' src='"+GetDataSetImage(1, 89)+"'><div style='top: 1vw; left: 1vw; width: 98vw; height: calc(89vh - 2vw); position: absolute; overflow: auto;'><span style='background-color: #000066;'>"+Translate("A problem has been detected and system has been terminated to prevent damage of system or data corruption.")+"<br><br>"+shorttextdescription+" *** "+typeoferror+": "+code+"<br><br>"+longtextdata+"<br><br>"+Translate("If this is a first time when you have seen this error screen, then restart your computer.")+"<br><br>"+Translate("If this screen appears again, then make sure that changes what you may have made in this system are not breaking system performance. Otherwise, you can try start system in safe mode or try to run SLM subsystem where you can change loading options on this system.")+"<br><br>"+Translate("Technical information")+":<br><br>STOP *** at "+d+" *** "+additInfo+"<br><br> >>> "+addtechnicalinfo+"<br><br><br>"+Translate("Contact your system administrator or technical support group for further assistance.")+"<br>"+Translate("For further information, visit")+": <i>"+bsodurl+"</i><br><br>"+Translate("Press any key or double click for restart system")+" ...<br><br><br></div><div style='top: calc(90vh - 1vw); height: 8vh; width: 98vw; left: 1vw; position: absolute;'><span style='font-size: 8vh; font-weight: bold;'>:´(&nbsp</span>&nbsp<span style='margin-top: 2vh; font-size: 4vh; font-style: italic;'>"+Translate("sorry")+"</span></div>";
	try{
		SaveBeforeUnload();
	}catch(erd){}
}

function SwitchInputs(type){
	if (type == "home"){
		if (COMKER != "COM")
			return undefined;
		document.getElementById("main_prompt").focus();
		return false;
	}
	 var TextAreas = document.getElementsByTagName('textarea');
	 var Inputs = document.getElementsByTagName('input');
	 var Frames = document.getElementsByTagName('frame');
	 var Iframes = document.getElementsByTagName('iframe');
	 var activeElementId = document.activeElement.id;
	 var ResultArray = new Array();
	 for (var i = 0; i < TextAreas.length;i++){
		 if ((TextAreas[i].id) && TextAreas[i].id !== null && TextAreas[i].id !== "" && document.getElementById(TextAreas[i].id).offsetWidth > 0 && document.getElementById(TextAreas[i].id).offsetHeight > 0)
			ResultArray.push(TextAreas[i].id);
	}
	 for (var i = 0; i < Inputs.length;i++){
		 if ((Inputs[i].id) && Inputs[i].id !== null && Inputs[i].id !== "" && document.getElementById(Inputs[i].id).offsetWidth > 0 && document.getElementById(Inputs[i].id).offsetHeight > 0)
			ResultArray.push(Inputs[i].id);
	}
	 for (var i = 0; i < Frames.length;i++){
		 if ((Frames[i].id) && Frames[i].id !== null && Frames[i].id !== "" && document.getElementById(Frames[i].id).offsetWidth > 0 && document.getElementById(Frames[i].id).offsetHeight > 0)
			ResultArray.push(Frames[i].id);
	}
	 for (var i = 0; i < Iframes.length;i++){
		 if ((Iframes[i].id) && Iframes[i].id !== null && Iframes[i].id !== "" && document.getElementById(Iframes[i].id).offsetWidth > 0 && document.getElementById(Iframes[i].id).offsetHeight > 0)
			ResultArray.push(Iframes[i].id);
	}
	if (ResultArray.length > 0){
		if (type == "back" || type == "backward")
			ResultArray.reverse();
		var ActiveElementIndex = ResultArray.indexOf(activeElementId);
		if (ActiveElementIndex != -1 && parseInt(ActiveElementIndex,10)+1 != ResultArray.length)
			document.getElementById(ResultArray[parseInt(ActiveElementIndex,10)+1]).focus();
		else
			document.getElementById(ResultArray[0]).focus();
	}
	return false;
}

function ToogleClass(id, className){
	var el = document.getElementById(id);
	if (el.classList) {
	  el.classList.toggle(className);
	} else {
	  var classes = el.className.split(' ');
	  var existingIndex = classes.indexOf(className);

	  if (existingIndex >= 0)
		classes.splice(existingIndex, 1);
	  else
		classes.push(className);
	  el.className = classes.join(' ');
	}	
}

function Show_Message_Window_New_App(data,opacity){
	MessageShow = true;
	SpeedWriteInAdd(main_grid, '<div id="RestNewAppContainer" class="Show_Message_Window_New_App_Container_Screen" style="z-index: 940000; width: 100vw; height: 100vh; top: 0vh; left: 0vh; position: absolute; display: block; visibility: visible; position: absolute; opacity: '+opacity+';"></div><div id="RestNewApp" class="Show_Message_Window_New_App" style="z-index: 940001; width: 40vw; height: 40vh; top: 30vh; left: 30vw; position: absolute; font-size: 4vh; display: flex; visibility: visible; justify-content: center; align-items: center;">'+data+'</div>');
}

function Hide_Message_Window_New_App(){
	try{
		GtE(main_grid).removeChild(GtE("RestNewAppContainer"));
		GtE(main_grid).removeChild(GtE("RestNewApp"));
	}catch(erd){}
	MessageShow = false;
}

function Show_Message_Window_New_App_Confirm(message, button, buttonexec, opacity){
	var a = message;
	if (button && buttonexec && button != "" && buttonexec != ""){
		var content = "space-evenly";
		var width = 80;
		var L = Math.min(button.length,buttonexec.length);
		var v = width/L;
		if (L == 1){
			width = 40;
			content = "center";
		}		
		a += "<br><br>&nbsp;<div id='shMesSet' class='Show_Message_Window_New_App_Select' style='width: "+width+"%; height: 20%; left: 10%; display: flex; justify-content: "+content+"; align-items: center;'>";
		for (var i = 0; i < L; i ++){
			a += "<input type='button' value='"+button[i]+"' onclick='javascript:"+buttonexec[i]+";' style='width: "+v+"%; height: 70%;'>";
		}
		a += "</div>";
	}
	Show_Message_Window_New_App(a, opacity);
	GtEs("RestNewApp").flexDirection = "column";
}

function ExitAppAsk(AppWindowId, appname){
	Hide_Message_Window_New_App();
	var appnamest = appname;
	if (!appname || appname == "")
		appnamest = Translate("the application");
	Show_Message_Window_New_App_Confirm(Translate("Do you want to exit")+" "+appnamest+"?", [Translate("Exit"), Translate("Cancel")], ["ExitApp(\""+AppWindowId+"\", \""+appname+"\")", "Hide_Message_Window_New_App()"], 0.85);
}

function RestartAppAsk(AppWindowId, appname){
	Hide_Message_Window_New_App();
	if (!appname || appname == "")
		appname = Translate("the application");
	Show_Message_Window_New_App_Confirm(Translate("Do you want to restart")+" "+appname+"?", [Translate("Restart"), Translate("Cancel")], ["ReloadThisPage()", "Hide_Message_Window_New_App()"], 0.85);
}

function ExitApp(AppWindowId, appname){
	try{
		GtE(AppWindowId).parentNode.removeChild(GtE(AppWindowId));
	}catch(erd){}
	if (!appname || appname == "")
		appname = Translate("Application");
	Hide_Message_Window_New_App();
	Show_Message_Window_New_App_Confirm(appname+" "+Translate("has been successfully closed."), [Translate("Start again")], ["ReloadThisPage()"], 1);
}

function ReloadThisPage(){
	window.location.replace(window.location.href);
}

var SpeedShellLoad = (_WindowDrawSpeed > 0 && _WindowDrawSpeed != "") ? _WindowDrawSpeed : 150;
function WinLDR(Win, SysL){
    for (var i = 0; i < Win.length; i++){
        if (i == 0 && SysL)
            Win[i] = Win[i]+"UpdateLoadSys("+Win.length+");";
        else if (SysL)
            Win[i] = Win[i]+"UpdateLoadSys();";
    }
    if (SysL)
        SetLoadClock(Win, SpeedShellLoad, "ExtProgLDR(true);");
    else
        SetLoadClock(Win, SpeedShellLoad, "");
}

function ExtProgLDR(SysL){
    var IncSc = [];
    for (var i = 0; i < _IncludeProgScripts.length; i++){
        IncSc.push(_IncludeProgScripts[i].trim());
    }
    var IncSt = [];
    for (var i = 0; i < _IncludeProgStyles.length; i++){
        IncSt.push(_IncludeProgStyles[i].trim());
    }
    ImportTo("script",false,2400,false,IncSc,function(){
        ImportTo("style",false,2400,false,IncSt,function(){
            if (SysL){
                OnLoadFinished();
                CheckSysMode();
            }
        },function(){
            console.log("Application style file "+SYSKERNscriptName+" was loaded");
        });
    },function(){
        console.log("Application script file "+SYSKERNscriptName+" was loaded");
    });
}