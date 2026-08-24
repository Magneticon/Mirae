var WSADDver = 3.45;

var el = "apparea";
var none = "none";

function GtE(id){
	if ((!id) || (!document.getElementById(id)))
		return undefined;
	return document.getElementById(id);
}

function getFileAuto(path,aftercode){
	if (!path)
		return undefined;
	if (!aftercode)
		aftercode = "none";
	var data = undefined;
	try{
		var GetFile = new XMLHttpRequest();
		GetFile.open("GET", path, false);
		GetFile.onreadystatechange = function (){
			if(GetFile.readyState === 4){
				if(GetFile.status === 200 || GetFile.status == 0){
					data = GetFile.responseText;
					if (aftercode != "none")
						eval(aftercode);
					return data;
				}
			}
		}
		GetFile.send(null);
	}catch(erd){
		if (aftercode != "none")
			eval(aftercode);		
		return undefined;
	}
}

function ReturnTimeString(date){
	var Day = date.getDate();
	var Month = date.getMonth();
	var Year = date.getFullYear();
	var Months = [Translate("january"),Translate("fabruary"),Translate("march"),Translate("april"),Translate("may"),Translate("june"),Translate("july"),Translate("august"),Translate("september"),Translate("october"),Translate("november"),Translate("december")];
	return Year+"-"+Months[Month]+"-"+Day;
}

function roundNum(number, decimals) { 
	return +(Math.round(number + "e+" + decimals) + "e-" + decimals); 
}

var timeOutsGradient = new Object();  
function Gradient(startgradient,count,length,element){
	if ((!count) || (isNaN(count)))
		count = 10;
	if ((isNaN(startgradient)))
		startgradient = GtE(element).style.opacity;
	if ((!length) || (isNaN(length)))
		length = 2000;
	if (!element)
		return undefined;
	for (key in timeOutsGradient)
		window.clearTimeout(timeOutsGradient[key]); 
	timeOutsGradient = new Object();
	var degree = startgradient/count;
	GtE(element).style.opacity = startgradient;
	for (var i = 1; i <= count;i++){
		var SetDegree = startgradient-(degree*i);
		var SetCount = length/((count-i)+1);
		timeOutsGradient["Gradient"+i] = window.setTimeout(GradientWork, SetCount, SetDegree, element);  
	}
	return "done";
}

function GradientWork(degree,element){
	GtE(element).style.opacity = degree;
}

var timeOutsReverseGradient = new Object();  
function ReverseGradient(startgradient,count,length,element){
	if ((!count) || (isNaN(count)))
		count = 10;
	if ((isNaN(startgradient)))
		startgradient = GtE(element).style.opacity;
	if ((!length) || (isNaN(length)))
		length = 2000;
	if (!element)
		return undefined;
	for (key in timeOutsReverseGradient)
		window.clearTimeout(timeOutsReverseGradient[key]); 
	timeOutsReverseGradient = new Object();
	var degree = (1-startgradient)/count;
	GtE(element).style.opacity = startgradient;
	for (var i = 1; i <= count;i++){
		var SetDegree = startgradient+(degree*i);
		var SetCount = length/((count-i)+1);
		timeOutsReverseGradient["Gradient"+i] = window.setTimeout(ReverseGradientWork, SetCount, SetDegree, element);  
	}
	return "done";
}

function ReverseGradientWork(degree,element){
	try{
		GtE(element).style.opacity = degree;
	}catch(erd){}
}

function TranslateTime(milliseconds){
	if (isNaN(milliseconds))
		return undefined;
	var hours = Math.floor(milliseconds/3600000);
	var mins = Math.floor((milliseconds-(hours*3600000))/60000);
	var sec = Math.floor((milliseconds-((hours*3600000)+(mins*60000)))/1000);
	var millsec = Math.floor(milliseconds-((hours*3600000)+(mins*60000)+(sec*1000)));
	var vysledek = new Array(hours,mins,sec,millsec);
	return vysledek;
}

function WriteTranslateTimeAll(milliseconds){
	if (isNaN(milliseconds))
		return undefined;
	var nacteni = TranslateTime(milliseconds);
	var vysledek = nacteni[0]+":"+nacteni[1]+":"+nacteni[2]+":"+nacteni[3]+":";
	return vysledek;
}

function WriteTranslateTime(milliseconds){
	if (isNaN(milliseconds))
		return undefined;
	var nacteni = TranslateTime(milliseconds);
	var vysledek = nacteni[0]+":"+nacteni[1]+":"+nacteni[2];
	return vysledek;
}

function Prechod(nazevElementu,dobaPrechodu,barva){
	if (!nazevElementu){
		console.error("//>IMAPP$WorkScript$ -//Parameter nazevElementu in function Prechod(x,x,x) is undefined or null. Function cannot run.");
		return undefined;
	}
	if (!dobaPrechodu){
		console.warn("//>IMAPP$WorkScript$ -//Parameter dobaPrechodu in function Prechod(x,x,x) is undefined or null. Parameter has default value (2000).");
		dobaPrechodu = 2000;
	}
	if (!barva){
		console.warn("//>IMAPP$WorkScript$ -//Parameter barva in function Prechod(x,x,x) is undefined or null. Parameter has default value (#000000).");
		barva = "#000000";
	}
	var barvaPuvodni = document.getElementById(nazevElementu).style.color;
	document.getElementById(nazevElementu).style.color = barva;
	var casovac = setTimeout(function(){document.getElementById(nazevElementu).style.color = barvaPuvodni;},dobaPrechodu);
}

function SpeedWrite(id,text){
	if (!id)
		return undefined;
	if (text === undefined || text === null || text == "")
		return undefined;
	document.getElementById(id).innerHTML = Vypis(text);
	return "done";
}

function SpeedWriteSpecial(id,translatetext,text){
	if (!id)
		return undefined;
	if (translatetext === undefined || translatetext === null || translatetext == "")
		return undefined;
	if (text === undefined || text === null || text == "")
		return undefined;
	document.getElementById(id).innerHTML = Vypis(translatetext)+text;
	return "done";
}

function SpeedWriteTitle(id,text){
	if (!id)
		return undefined;
	if (text === undefined || text === null || text == "")
		return undefined;
	document.getElementById(id).title = text;
	//document.getElementById(id).setAttribute("title", Vypis(text));
	return "done";
}
function SpeedVisible(id){
	if (!id)
		return undefined;
	document.getElementById(id).style.visibility = "visible";
	return "done";
}

function SpeedHidden(id){
	if (!id)
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
	if (!id)
		return undefined;
	if (text === undefined || text === null || text == "")
		return undefined;
	document.getElementById(id).innerHTML = text;
	return "done";
}

function SpeedWriteInAdd(id,text){
	if (!id)
		return undefined;
	if (text === undefined || text === null || text == "")
		return undefined;
//	document.getElementById(id).innerHTML += text;
	document.getElementById(id).insertAdjacentHTML("beforeend", text);
	return "done";
}

function SpeedWriteAdd(id,text){
	if (!id)
		return undefined;
	if (text === undefined || text === null || text == "")
		return undefined;
//	document.getElementById(id).innerHTML += Vypis(text);
	document.getElementById(id).insertAdjacentHTML("beforeend", Vypis(text));
	return "done";
}

function SpeedWriteSpecialAdd(id,translatetext,text){
	if (!id)
		return undefined;
	if (translatetext === undefined || translatetext === null || translatetext == "")
		return undefined;
	if (text === undefined || text === null || text == "")
		return undefined;
//	document.getElementById(id).innerHTML += Vypis(translatetext)+text;
	document.getElementById(id).insertAdjacentHTML("beforeend", Vypis(translatetext)+text);
	return "done";
}

function SpeedWriteTitleAdd(id,text){
	if (!id)
		return undefined;
	if (text === undefined || text === null || text == "")
		return undefined;
	document.getElementById(id).title += Vypis(text);
	//document.getElementById(id).setAttribute("title", Vypis(text));
	return "done";
}

//length - delka nacitani v milisekundach, onOneSecondCode - akce provedena po 1 sekunde,
//onEndCode - akce provedena po ukonceni nacitani
function TheGameTimer(length,onOneSecondCode,onEndCode){
	if (!length)
		return undefined;
	if (!onOneSecondCode)
		onOneSecondCode = "none";
	if (!onEndCode)
		onEndCode = "none";
	if (onOneSecondCode == "no" || onOneSecondCode == "n")
		onOneSecondCode = "none";
	if (onEndCode == "no" || onEndCode == "n")
		onEndCode = "none"	;
	var numbofrepeat = Math.floor((length/1000));
	var other = length-(numbofrepeat*1000);
	var wait = numbofrepeat*1000;
	Repeat("yes",numbofrepeat,1000,45,onOneSecondCode);
	Repeat("yes",1,wait,44,"TheGameTimerSub("+other+","+onEndCode+");");
	return "done";
}

function TheGameTimerSub(other,onEndCode){
	if (other > 0)
		Repeat("yes",1,wait,43,"TheGameTimerSub2("+onEndCode+");");
	else if (onEndCode != "none")
		eval(onEndCode);	
	return "done";
}

function TheGameTimerSub2(onEndCode){
	if (onEndCode != "none")
		eval(onEndCode);
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
	SpeedWriteInAdd(el,data);
	return "done";
}

function SpeedToGrid(data){
	SpeedWriteAdd(el,data);
	return "done";
}

function WriteConvertPunct(data){
	return data
		.replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
		.replace(/,/g, "&#44");
}

function WriteConvert(data) {
    return data
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }
 
function WriteUnConvert(data) {
    return data
         .replace(/&amp;/g, "&")
         .replace(/&lt;/g, "<")
         .replace(/&gt;/g, ">")
         .replace(/&quot;/g, "\"")
         .replace(/&#039;/g, "\'");
 }
 
function CopyEvent(id,e){
	GtE(id).dispatchEvent(e);
	console.log(e);
	GtE(id).fireEvent('onclick');
}

function StartEventSpecial(obj,evt){
	if ('createEvent' in document) {
        var e = document.createEvent('HTMLEvents');
        e.initEvent(evt, false, true);
        obj.dispatchEvent(e);
    } else {
        var e = document.createEventObject();
        e.eventType = evt;
        obj.fireEvent('on'+e.eventType, e);
    }
}

function StartEvent(obj,evt){
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

function ControlDataCom(data){
	switch(data){
		case "eval":
			return undefined;
			break;
		default:
			return "done";
			break;
	}
	return "done";
}

function getMousePosition(e) {
    e = e || window.event;
    var cursor = {x:0, y:0};

    if (e.pageX || e.pageY) {
        cursor.x = e.pageX;
        cursor.y = e.pageY;
    } 
    else {
        cursor.x = e.clientX + 
            (document.documentElement.scrollLeft || 
            document.body.scrollLeft) - 
            document.documentElement.clientLeft;
        cursor.y = e.clientY + 
            (document.documentElement.scrollTop || 
            document.body.scrollTop) - 
            document.documentElement.clientTop;
    }
    return cursor;
}

function removeElement(parentDiv, childDiv){
	if (childDiv == parentDiv)
		return undefined;
	if (document.getElementById(childDiv)) {     
		var child = document.getElementById(childDiv);
		var parent = document.getElementById(parentDiv);
		parent.removeChild(child);
		return "done";
	}
	else
		return undefined;
}

function SpeedRange(minVal,maxVal){
	var randVal = minVal+(Math.random()*(maxVal-minVal));
	return Math.floor(randVal);
}

// declare an array for all the timeOuts
var timeOuts = new Array();  

// then instead of a normal timeOut call do this
//timeOuts["uniqueId"] = setTimeout('whateverYouDo("fooValue")', 1000);  

// to clear them all, just call this
function clearTimeouts() {  
  for (key in timeOuts)
    clearTimeout(timeOuts[key]);  
}  

// clear just one of the timeOuts this way
//clearTimeout(timeOuts["uniqueId"]); 