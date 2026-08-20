GUISHELLver = 3.17;
//registry
var MenuNextCloseColor, MenuNextCloseColorMain, MenuNextOpenColor, MenuNextOpenColorMain, MenuNextSelectedColor, UseNoEditWorkClass, UseNoEditClass, UseNoObjClass, ObjAlt, VC, GridPercentHeight, GridPercentWidth, MethodsOBJM, ObjectMethodId, ObjectWorkData, ActiveInputWrite, MenusTree, MainMenus, MenusTreeAlt, MenusTreeL, MenuLevel, Alt, ToAlt, ResAlt, ResAltId, ResAltOn, ResShortCutsOn, MenuCan, MenuSwitchs, AltCan, ShortCutCan, ShortCutName, ToDeleteMenu, ToDeleteMenuTimeout, ToDisplayId, ToDisplayBoxId, ToDisplayId, ToLevel, ObjHandle, AltKeyAppTimer, ShortCutKeyAppTimer, ActiveFocusAltTimer, DisabledMenus, UseMOVE, ERD, UseIndexSystem, SwitchIndexSystemObj, MoveObj, ObjectLastIndex, ObjectLastIndex, ObjectLastIndexActual, ObjectLastIndexActualIndex, ObjectLastIndexWriteHidden, ObjectLastIndexWrite, ObjectLastIndexWriteMin, ObjectLastIndexWriteMax, IndexSystemWorkProgress, IndexSystemWorkProgressTimer, ObjectBadColor, ObjectDisabledColor, DesktopMenuId, DesktopMenuStatus, DesktopMenuStatusTimer, DesktopMenuStatusBool, DesktopWork, DesktopWorkTimer, LoadTimerData, DesktopIconMapData, DesktopOldMenuSwitch, DesktopMenuSwitchWaiter, DesktopIpart, EmptyIconFill, IconDesktops, IconDesktopsTree, DesktopIconDatabase, IconDesktopGetLastIndex, ActualIconDesktop, WaveDesktopIconWorkTime, WaveDesktopIconWorkData, DesktopColor,  DesktopBackgroundPictures, DesktopBackgroundParameters, DesktopBackgroundRepeats, DesktopBackgroundSizes, DesktopStatusIdentify, SetCursorSubIconStatus, MoveElCode, MoveElDrInnerData, MoveElPosXactual, MoveElPosYactual, MoveElDrId, MoveElPosXstart, MoveElPosYstart, MoveElPosXend, MoveElPosYend, MoveElDpCode, MoveElDpInnerData, MoveElDpId, IconSelection, IconSelectionColor, IconSelectionFilter, CanDrop, selfIconDesktopTryTest, setIconDesktop, ongoingSetIconDesktop, CanSelect, CanCopy, CanDelete, DesktopTrayActionId, Selected, IconSelected, IconSelectedImage, IconSelectionImage, SelectFirst, CanToDrop, ToDropTimer, ToDrop, DRFC, MainSysTray, IconSelectionTitle, StyleDisplay, WSPX, WSPY, WSPXS, WSPYS, WSL, WST, WSDIM, WSJUMP, ChooseWindowRibbonSet, IconSelectionTitleOldColor, StyleShowTimer, AltFire;
var GUISTARTLOADSET = false;

var ActiveRender = 0;//hlavni knihovna pro vykreslovani GUI - 0 - GUICOM (kompatibilni se starymi aplikacemi a s ASCOM v1), 1 - GUISHELL - nove, objektove vykreslovani GUI (ASCOM v4)

GUISTART();
function GUISTART(){
/*	MenuNextCloseColor = "#000066";
	MenuNextOpenColor = "#FFFFFF";
	MenuNextOpenColorMain = "#FFCC33";
	MenuNextCloseColorMain = "#000000";
	MenuNextSelectedColor = "red";
	ObjectBadColor = "#FF6666";
	ObjectDisabledColor = "#AAAAAA";*/
	MenuNextCloseColor = "#000000";
	MenuNextOpenColor = "#009900";
//	MenuNextOpenColorMain = "#FFCC33";
	MenuNextOpenColorMain = "#AAAAAA";
	MenuNextCloseColorMain = "#FFFFFF";
	MenuNextSelectedColor = "red";
	ObjectBadColor = "#FF6666";
	ObjectDisabledColor = "#888888";
	UseNoEditWorkClass = false;//povolí se volání metod objektu Edit přímo - volání pro ne-DOM metody (pro metody bez potřeby vytváření elementů - .Edit.alert() nebo .Edit.isColor())(není třeba psát .Edit.funkce, stačí .funkce, ale při povolení tohoto bude pomalejší práce s objekty)
	UseNoEditClass = false;//povolí se volání metod objektu Edit přímo (není třeba psát .Edit.funkce, stačí .funkce, ale při povolení tohoto bude pomalejší práce s objekty)
	UseNoObjClass = false;//povolí se přímé volání metod tříd uložené v objektu obj (není třeba psát .obj.metoda nebo objekt.metoda, stačí psát pouze .metoda - při povolení tohoto bude kolize názvů s defaultními objekty, práce s objekty může být pomalejší)
	UseMOVE = true;//povolí pohybování s okny - pouze, pokud je nalinkována knihovna  MOV.js
	UseIndexSystem = true;//povoluje automatické nastavování zIndex u oken a menuBox
	ObjAlt = [];
	GridPercentWidth = 100;
	GridPercentHeight = 100;
	MethodsOBJM = {};
	ObjectMethodId = "";
	ObjectWorkData = {
		number: 0
	};
	ActiveInputWrite = undefined;
	MenusTree = {};
	MainMenus = {};
	MenusTreeAlt = {};
	MenusTreeL = {};
	MenuLevel = 0;
	Alt = [];
	ToAlt = [];
	ResAlt = [];
	ResAltId = [];
	ResAltOn = {};
	ResShortCutsOn = {};
	ResShortCutsOnOldTags = {};
	MenuCan = false;
	MenuSwitchs = {};
	AltCan = false;
	ShortCutCan = false;
	ShortCutName = [];
	ToDeleteMenu = [];
	ToDeleteMenuTimeout = "";
	ToDisplayId = "";
	ToDisplayBoxId = "";
	ToDisplay = false;
	ToLevel = 0;
	ObjHandle = {};
	AltKeyAppTimer = "";
	ShortCutKeyAppTimer = "";
	ActiveFocusAltTimer = "";
	DisabledMenus = [];
	ERD = undefined;
	SwitchIndexSystemObj = {};
	MoveObj = {};//objekt pro práci s mousedown u elementů
	ObjectLastIndex = [];//pole elementů pro použití automaticky přidělovaného zIndex
	ObjectLastIndexActual = [];//pole aktivních (visible + přidělený zIndex) elementů z ObjectLastIndex (id)
	ObjectLastIndexActualIndex = [];//pole aktivních (visible + přidělený zIndex) elementů z ObjectLastIndex (index)
	ObjectLastIndexWriteHidden = 89;//zIndex pro skryté elementy z ObjectLastIndex
	ObjectLastIndexWrite = 90;//aktuální zIndex pro použití u nového elementu
	ObjectLastIndexWriteMin = 90;//minimální zIndex pro elementy
	ObjectLastIndexWriteMax = 12000;//maximální zIndex pro elementy
	ObjectLastIndexWriteOnloadIndex = 15000;//zIndex pro vytvořené elementy (před spuštěním automatického nastavení zIndex - default value - měl by být vyšší než ObjectLastIndexWriteMax)
	ObjectMenuIndex = 15001;//zIndex pro jednotlivá menu
	ObjectIndexTOP = [];//array of zIndexed elements, which should be on top (whole element + their children)
	ObjectIndexTOPAdd = 20000;//how much we add to zindex of top elements
	ObjectIndexTOPCanOverride = [];
	MaxIndexParents = 0;
	IndexSystemWorkProgress = false;
	IndexSystemWorkProgressTimer = "";
	DesktopMenuId = [];
	DesktopMenuStatus = true;
	DesktopMenuStatusTimer = "";
	DesktopMenuStatusBool = true;
	DesktopWork = false;
	DesktopWorkTimer = "";
	LoadTimerData = "";
	if (!GUISTARTLOADSET){
		GUISTARTLOADSET = true;
		OnSetGUISTART();
	}
	DesktopNumber = 0;
	DesktopIconMapData = [];
	DesktopOldMenuSwitch = false;
	DesktopMenuSwitchWaiter = "";
	DesktopIpart = 0;
	EmptyIconFill = 2;
	IconDesktops = [];//pracovni plochy (objekt)
	IconDesktopsTree = [];//pracovni plochy (pole ikon)
	DesktopIconDatabase = {};
	IconDesktopGetLastIndex = 0;
	ActualIconDesktop = 0;
	WaveDesktopIconWorkTime = "";
	WaveDesktopIconWorkData = 0;
	// DesktopColor = "#0033CC";
	DesktopBackgroundPictures = [];//here will be all background pictures
	DesktopBackgroundParameters = [];//here will be all shorthand parameters for background pictures
	DesktopBackgroundRepeats = [];//here will be all repeat parameters for background pictures
	DesktopBackgroundSizes = [];//here will be all size parameters for background pictures
	DesktopStatusIdentify = undefined;
	SetCursorSubIconStatus = false;
	IconSelection = [];
	IconSelectionImage = [];
	IconSelectionTitle = [];
	IconSelectionTitleOldColor = [];
	IconSelectionColor = "#000099";
	IconSelectionFilter = "invert(100%)";
	CanDrop = true;
	selfIconDesktopTryTest = false;
	setIconDesktop = false;
	ongoingSetIconDesktop = false;
	CanSelect = false;
	CanCopy = false;
	CanDelete = false;
	DesktopTrayActionId = undefined;
	Selected = [];
	IconSelected = [];
	IconSelectedImage = [];
	SelectFirst = false;
	CanToDrop = true;
	ToDropTimer = "";
	ToDrop = true;
	DRFC = true;//povoluje celkový drag&drop
	MainSysTray = undefined;//zde bude id systémové lišty
	StyleDisplay = true;//true - novy vzhled, false - stary vzhled oken
	SetStyleShow(StyleDisplay);
	//pro praci s umistovanim oken
	WSL = 60;
	WST = 60;
	WSDIM = 1.5;	
	WSPXS = 5;
	WSPX = 5-WSPXS*WSDIM;
	WSPYS = 5;	
	WSPY = 5-WSPYS*WSDIM;
	WSJUMP = false;	
	AltFire = false;
	KeyWasUp = true;
	
	ChooseWindowRibbonSet = true;
	ClearDrDp();
}

function SetOldDisplayOfWindows(wIdGet){
	var wId = false;
	try{
		if (!wIdGet)
			throw undefined;
		if (GtE(wIdGet).innerHTML)
			wId = wIdGet;
	}catch(erd){}	
	var names = ["WindowTitleMenus","WindowTitleButtonsNew","WindowTitle","WindowButton","WindowMain:before","WindowMain:after","WindowMain","WindowTitleButtonsNew div","WindowTitleButtonMinimizeNew","WindowTitleButtonMaximizeNew","WindowTitleButtonCloseNew","WindowTitleInnerNew"];
	var works = ["none","none","#003399","#999999","#000066","#000066","","none","WindowTitleButtonMinimize$49","WindowTitleButtonMaximize$48","WindowTitleButtonClose$46","WindowTitleInner"];
	for (var i = 0; i < names.length;i++){
		var elements = [];
		if (wId)
			GtE(wId).querySelectorAll(names[i]);
		else
			elements = document.querySelectorAll("."+names[i]);
		for (var j = 0; j < elements.length;j++){
			var innerWork = works[i].split("$");
			switch (i){
				case 2:
					elements[j].style.textShadow = "none";
					break;
			}
			if (i < 4)
				elements[j].style.backgroundColor = innerWork[0];
			else if (i < 7){
				elements[j].style.backgroundImage = "none";
				elements[j].style.background = "none";
	//			elements[j].style.backgroundColor = "#003399"; 
				elements[j].style.backgroundColor = "#06c"; 
			}
			else if (i == 7)
				elements[j].style.backgroundColor = innerWork[0];
			else if (i < 11){
				elements[j].className = innerWork[0];
				SetImage(elements[j].id,1,innerWork[1],0);
			}
			else if (i == 11)
				elements[j].className = works[i];
		}
	}
}

function SetNewDisplayOfWindows(wIdGet){
	var wId = false;
	try{
		if (!wIdGet)
			throw undefined;
		if (GtE(wIdGet).innerHTML)
			wId = wIdGet;
	}catch(erd){}
	var names = ["WindowTitleMenus","WindowTitleButtons","WindowTitle","WindowButton","WindowTitleButtonMinimize","WindowTitleButtonMaximize","WindowTitleButtonClose","WindowTitleButtonsNew div","WindowTitleInner"];
	var works = ["none","none","none","none","WindowTitleButtonMinimizeNew","WindowTitleButtonMaximizeNew","WindowTitleButtonCloseNew","transparent","WindowTitleInnerNew"];
	for (var i = 0; i < names.length;i++){
		var elements = [];
		if (wId)
			GtE(wId).querySelectorAll("."+names[i]);
		else
			elements = document.getElementsByClassName(names[i]);
		for (var j = 0; j < elements.length;j++){
			var innerWork = works[i].split("$");			
			switch (i){
				case 2:
					elements[j].style.textShadow = "0 0 2px white, 0 0 5px white, 0 0 9px white, 0 0 14px white, 0 0 20px white";
					break;
			}
			if (i < 4)
				elements[j].style.backgroundColor = "none";
			else if (i < 7)
				elements[j].className = works[i];
			else if (i == 7)
				elements[j].style.background == works[i];	
			else if (i == 8)
				elements[j].className = works[i];			
		}
	}
}

function SetStyleShow(bool){//true - moderni vzhled, false - stary vzhled (bude periodicky obnovovan)
	StyleDisplay = bool;
	if (StyleDisplay)
		SetNewDisplayOfWindows(false);
	else
		SetOldDisplayOfWindows(false);
}

function ClearDrDp(){
	MoveElCode = undefined;//zde bude kod drag elementu
	MoveElDrInnerData = undefined;//zde bude kod, ktery bude urcen pouze pro drag akci (napr. u ikon (retezec url, kktery bude spusten, atd...))
	MoveElPosXactual = 0;//pozice X kurzoru pri drag pohybu
	MoveElPosYactual = 0; // pozice Y kurzoru pri drag pohybu
	MoveElDrId = undefined; // id drag elementu
	MoveElPosXstart = 0; //startovni X pozice kurzoru pri drag pohybu
	MoveElPosYstart = 0; //startovni Y pozice kurzoru pri drag pohybu
	MoveElPosXend = 0; // konecna X pozice kurzoru pri drag pohybu
	MoveElPosYend = 0; // konecna Y pozice kurzoru pri drag pohybu
	MoveElDpCode = undefined; // zde bude kod drop elementu
	MoveElDpInnerData = undefined; //zde bude kod, ktery bude urcen pouze pro drop akci (napr. u ikon (retezec url, kktery bude spusten, atd...))
	MoveElDpId = undefined; // id drop elementu
}

function OnSetGUISTART(){//tato aplikace se spustí pouze jednou
	VC = 0;
}

function ErraseSystemTimeouts(){
	window.clearTimeout(ToDeleteMenuTimeout);
	window.clearTimeout(AltKeyAppTimer);
	window.clearTimeout(ShortCutKeyAppTimer);
	window.clearTimeout(ActiveFocusAltTimer);
	window.clearTimeout(IndexSystemWorkProgressTimer);
	window.clearTimeout(DesktopMenuStatusTimer);
	window.clearTimeout(DesktopWorkTimer);
	window.clearTimeout(ToDropTimer);
	window.clearInterval(LoadTimerData);
	window.clearInterval(StyleShowTimer);
	GUISTART();
}

function none(){
	return "none";
}

function avc(){
	VC++;
	return VC;
}

function CreateCss(cssData){
	if (!cssData)
		return undefined;
	var ObjStyle = document.createElement('style');
	ObjStyle.type = 'text/css';	
	ObjStyle.innerHTML = cssData;
	document.getElementsByTagName('head')[0].appendChild(ObjStyle);
}

function GWriteConvert(data) {
    return data
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }
 
function GWriteConvertSpecial(data){
    return data
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
}

function GWriteUnConvert(data) {
    return data
         .replace(/&amp;/g, "&")
         .replace(/&lt;/g, "<")
         .replace(/&gt;/g, ">")
         .replace(/&quot;/g, "\"")
         .replace(/&#039;/g, "\'");
 }

function GtE(id){
	if (!id)
		return null;
	return document.getElementById(id);
}

function GtEi(id){
	if (!id)
		return null;
	return document.getElementById(id).innerHTML;
}

function GtEv(id){
	if (!id)
		return null;
	return document.getElementById(id).value;
}

function GtEs(id){
	if (!id)
		return null;
	return document.getElementById(id).style;
}

function WPW(value){
	if (isNaN(value))
		return undefined;
	return (100/(parseInt(window.innerWidth,10)/value));
}

function WPH(value){
	if (isNaN(value))
		return undefined;
	return (100/(parseInt(window.innerHeight,10)/value));
}

function GetGridPercentWidth(data){
	if (isNaN(data))
		return undefined;
	
	return (GridPercentWidth/100)*data;
}

function GetGridPercentHeight(data){
	if (isNaN(data))
		return undefined;
	return (GridPercentHeight/100)*data;
}

class ProgressBar{
	constructor(containerId,containerColor,partColor,delay){
		this.StartupProgressCount = 0;
		if (!isNaN(containerColor)){
			delay = containerColor;
			containerColor = undefined;
		}
		if ((!containerColor) || containerColor == "")
			containerColor = "#999999";
		if ((!isNaN(partColor)) ||(!partColor) || (partColor == ""))
			partColor = "#000066";
		if ((!delay) || (delay == ""))
			delay = 5000;
		var g = partColor.split(":");
		if (g[0].toLowerCase() == "gradient")
			this.partColor = g[1];
		else
			this.partColor = partColor;
		document.getElementById(containerId).style.backgroundColor = containerColor;
		this.delay = delay;
		this.containerId = containerId;
		this.MaximumField = 10;
		this.IsRun = false;
		var self = this;
	}
	start(){
        if (this.delay > 0){
            if (this.isRunning())
                this.stop();
            var self = this;
            this.Loader = window.setInterval(function(){
                if (self.StartupProgressCount > self.MaximumField-1){
                    window.clearInterval(self.Loader);
                    self.IsRun = false;
                    return undefined;
                }
                else
                    self.IsRun = true;
                GtE(self.containerId).innerHTML += "<div id='"+self.containerId+"Progress"+self.StartupProgressCount+"' style='position: absolute; background:"+self.partColor+"; width: "+(90/self.MaximumField)+"%; height: 90%; top: 5%; left: "+(parseInt(self.MaximumField,10)*parseInt(self.StartupProgressCount,10)+(5/parseInt(self.MaximumField,10)))+"%;'></div>";
                self.StartupProgressCount++;
                if (self.StartupProgressCount == self.MaximumField){
                    self.IsRun = false;
                    window.clearInterval(self.Loader);
                }
            },self.delay/(parseInt(self.MaximumField,10)-parseInt(self.StartupProgressCount,10)));
        }
	}
    nextTick(){
        if (this.StartupProgressCount > this.MaximumField-1){
            this.IsRun = false;
            return undefined;
        }
        else
            this.IsRun = true;
        GtE(this.containerId).innerHTML += "<div id='"+this.containerId+"Progress"+this.StartupProgressCount+"' style='position: absolute; background:"+this.partColor+"; width: "+(90/this.MaximumField)+"%; height: 90%; top: 5%; left: "+(parseInt(this.MaximumField,10)*parseInt(this.StartupProgressCount,10)+(5/parseInt(this.MaximumField,10)))+"%;'></div>";
        this.StartupProgressCount++;
        if (this.StartupProgressCount == this.MaximumField)
            this.IsRun = false;
    }
	stop(){
		if (this.isRunning()){
            if (this.delay > 0)
                window.clearInterval(this.Loader);
            else{
                
                
            }
        }
	}
	resize(size){
		this.delay = size;
		if (this.isRunning()){
            if (this.delay > 0)
                this.stop();
			this.start();
		}
	}
	getSize(){
		return this.delay;
	}
	setAmountOfTicks(amount){
		this.MaximumField = amount;
		if (this.isRunning()){
            if (this.delay > 0)
                this.stop();
			this.start();
		}
	}
	getCurrentTickStatus(){
		return this.StartupProgressCount;
	}
	getAmountOfTicks(){
		return this.MaximumField;
	}
	isRunning(){
		return this.IsRun;
	}
}

var LogoCountTimer = "";
function PlayLogo(delay,type){
	try{
		if (type){
			GtE("systemLogoContainer").className = "systemLogoContainer LogoFrame3";
			GtE("systemLogoBlue").className = "systemLogo logoBlue LogoFrame3";
			GtE("systemLogoRed").className = "systemLogo logoRed LogoFrame3";
			GtE("systemLogoYellow").className = "systemLogo logoYellow LogoFrame3";
			GtE("systemLogoGreen").className = "systemLogo logoGreen LogoFrame3";		
			GtE("systemLogoContainer").style.animationDuration = Math.floor(delay/3)+"ms";
			GtE("systemLogoBlue").style.animationDuration = Math.floor(delay/3)+"ms";
			GtE("systemLogoRed").style.animationDuration = Math.floor(delay/3)+"ms";
			GtE("systemLogoYellow").style.animationDuration = Math.floor(delay/3)+"ms";
			GtE("systemLogoGreen").style.animationDuration = Math.floor(delay/3)+"ms";				
		}
		else{
			GtE("systemLogoContainer").className = "systemLogoContainer LogoFrame1";
			GtE("systemLogoBlue").className = "systemLogo logoBlue LogoFrame1";
			GtE("systemLogoRed").className = "systemLogo logoRed LogoFrame1";
			GtE("systemLogoYellow").className = "systemLogo logoYellow LogoFrame1";
			GtE("systemLogoGreen").className = "systemLogo logoGreen LogoFrame1";	
			GtE("systemLogoContainer").style.animationDuration = delay+"ms";
			GtE("systemLogoBlue").style.animationDuration = delay+"ms";
			GtE("systemLogoRed").style.animationDuration = delay+"ms";
			GtE("systemLogoYellow").style.animationDuration = delay+"ms";
			GtE("systemLogoGreen").style.animationDuration = delay+"ms";				
		}
		GtE("systemLogoContainer").style.animationName = "systemLogoContainer";
		GtE("systemLogoBlue").style.animationName = "logoBlue";
		GtE("systemLogoRed").style.animationName = "logoRed";
		GtE("systemLogoYellow").style.animationName = "logoYellow";
		GtE("systemLogoGreen").style.animationName = "logoGreen";
	}catch(erd){}	
	LogoCountTimer = window.setTimeout(function(){
			try{
				GtE("systemLogoContainer").style.animationPlayState = "paused";
				GtE("systemLogoBlue").style.animationPlayState = "paused";
				GtE("systemLogoRed").style.animationPlayState = "paused";
				GtE("systemLogoYellow").style.animationPlayState = "paused";
				GtE("systemLogoGreen").style.animationPlayState = "paused";
				GtE("systemLogoContainer").className = "systemLogoContainer systemLogoContainerAfter";
				GtE("systemLogoBlue").className = "systemLogo logoBlueAfter";
				GtE("systemLogoRed").className = "systemLogo logoRedAfter";
				GtE("systemLogoYellow").className = "systemLogo logoYellowAfter";
				GtE("systemLogoGreen").className = "systemLogo logoGreenAfter";
			}catch(erd){}
		},delay);
	}

function VisibleIndexSystemDelete(index){
	var GetDate = new Date();
	for (var i = index; i < ObjectLastIndexActual.length;i++){
	//	var IsTopIndex = -1;
	var IsTopIndex = ObjectIndexTOP.indexOf(ObjectLastIndexActual[i]);
		var E = GtE(ObjectLastIndexActual[i]);
		for (var j = 0; j < MaxIndexParents; j++){
			try{
				E = E.parentElement;
				console.log(E);
				var T = ObjectIndexTOP.indexOf(E.id);
				if (T > -1 && T < IsTopIndex)
					IsTopIndex = T;
				if (T == 0 || E == null)
					break;
			}catch(erd){}
		}
		var newIndex = parseInt(ObjectLastIndexActualIndex[i],10)-1;
		var ObjectLastIndexWriteSet = newIndex;
		if (IsTopIndex > -1){
				if (ObjectIndexTOPCanOverride[IsTopIndex])
					ObjectLastIndexWriteSet += (ObjectIndexTOPCanOverride.length-IsTopIndex)*(ObjectLastIndexWriteMax+200);
			ObjectLastIndexWriteSet += ObjectIndexTOPAdd;
		}
		try{
			GtE(ObjectLastIndexActual[i]).style.zIndex = ObjectLastIndexWriteSet;
		}catch(ERD){
			console.error("GUI.js --> a error occured in VisibleIndexSystemDelete("+index+") -> element("+ObjectLastIndexActual[i]+") is hidden by user style visibility or style display. Use .hide(true) GUI.js method for hide element. GUI.js may be will not work correctly. // Date of occur: "+GetDate);
		}
		ObjectLastIndexActualIndex[i] = newIndex;
	}
	ObjectLastIndexActual.splice(index, 1);
	ObjectLastIndexActualIndex.splice(index, 1);
	ObjectLastIndexWrite--;
}

function VisibleIndexSystemAdd(id){
	//var IsTopIndex = -1;
	var IsTopIndex = ObjectIndexTOP.indexOf(id);
	var E = GtE(id);
	for (var i = 0; i < MaxIndexParents; i++){
		try{
			E = E.parentElement;
			console.warn(E);
			var T = ObjectIndexTOP.indexOf(E.id);
			if (T > -1 && T < IsTopIndex)
				IsTopIndex = T;
			if (T == 0 || E == null)
				break;
		}catch(erd){}
	}
	if (ObjectLastIndexWrite > ObjectLastIndexWriteMax){
		ObjectLastIndexWrite--;
		console.error("GUI.js --> a error occured VisibleIndexSystem("+id+","+bool+") -> ObjectLastIndexWrite was overflowed the ObjectLastIndexWriteMax constant (ObjectLastIndexWrite: "+ObjectLastIndexWrite+"; ObjectLastIndexWriteMax: "+ObjectLastIndexWriteMax+") // Date of occur: "+GetDate);
		return undefined;
	}
	var ObjectLastIndexWriteSet = ObjectLastIndexWrite;
	if (IsTopIndex > -1){
		console.log(id+" ## "+ObjectIndexTOPCanOverride[IsTopIndex]+" # "+(ObjectIndexTOPCanOverride.length-IsTopIndex)*(ObjectLastIndexWriteMax+200));
		if (ObjectIndexTOPCanOverride[IsTopIndex])
			ObjectLastIndexWriteSet += (ObjectIndexTOPCanOverride.length-IsTopIndex)*(ObjectLastIndexWriteMax+200);
		ObjectLastIndexWriteSet += ObjectIndexTOPAdd;
	}
	try{
		GtE(id).style.zIndex = ObjectLastIndexWriteSet;
    }catch(ERD){
		console.error("GUI.js --> a error occured in VisibleIndexSystemAdd("+id+") -> element("+id+") is hidden by user style visibility or style display. Use .hide(true) GUI.js method for hide element. GUI.js may be will not work correctly. // Date of occur: "+GetDate);
		return undefined;
	}
	ObjectLastIndexActual.push(id);
	ObjectLastIndexActualIndex.push(ObjectLastIndexWrite);
	ObjectLastIndexWrite++;	
	MakeSelectedWin(id);
}

function VisibleIndexSystem(id,bool,escapebool){
	var GetDate = new Date();
	if (!escapebool){
		if (IndexSystemWorkProgress)
			return undefined;
		IndexSystemWorkProgress = true;
		IndexSystemWorkProgressTimer = window.setTimeout(function(){IndexSystemWorkProgress = false;},230);
	}
	try{
		var dataGet = eval("SwitchIndexSystemObj."+id);
		if (dataGet){
			for (var i = 0; i < dataGet.length;i++){
				if ((ObjectLastIndex.indexOf(dataGet[i]) == -1) || (!dataGet[i]) || (!GtE(dataGet[i]).style.zIndex))
					continue;
				var indexGet = ObjectLastIndexActual.indexOf(dataGet[i]);
				if (indexGet != -1)
					VisibleIndexSystemDelete(indexGet);	
				if (bool){
					VisibleIndexSystemAdd(dataGet[i]);
				}
			}
		}
	}
	catch(ERD){
		console.error("GUI.js --> a error occured in VisibleIndexSystem("+id+","+bool+") -> GUI system cannot work with zIndex of elements. Is recommended to restart the GUI system and fix this error.\n -> Error information: "+ERD+" // Date of occur: "+GetDate);
		return undefined;
	}
}

function WorkMouseUp(id){
	var work = false;
	try{
		if (eval("MoveObj."+id+".move"))
			work = true;
		if (eval("MoveObj."+id+".moveId"))
			id = eval("MoveObj."+id+".moveId");
	}catch(erd){}
	if (work)
		DGDPEN(false, id)
}

function WorkMouse(id){
	var work = false;
	try{
		if (eval("MoveObj."+id+".move"))
			work = true;
		if (eval("MoveObj."+id+".moveId"))
			id = eval("MoveObj."+id+".moveId");
	}catch(erd){}
	if (work)
		DGDPEN(true, id);
}

function SwitchIndexSystem(id,idArray){
	if ((idArray.length == 0) || (!idArray)){
		try{
			var dataGet = eval("SwitchIndexSystemObj."+id);
			for (var i = 0; i < dataGet.length;i++){
				var index = ObjectLastIndex.indexOf(dataGet[i]);
				var index2 = ObjectLastIndexActual.indexOf(dataGet[i]);
				if (index != -1)
					ObjectLastIndex.splice(index,1);
				if (index2 != -1)
					VisibleIndexSystemDelete(index2);			
			}
		}
		catch(erd){}
	}
	eval("SwitchIndexSystemObj."+id+" = new Array();");
	if ((idArray.length != 0) && (idArray)){
		var ids = idArray.split("-");
		for (var i = 0; i < ids.length;i++){
			if (ObjectLastIndex.indexOf(ids[i]) == -1){
		//		var IsTopIndex = -1;
				var E = GtE(ids[i]);
				var IsTopIndex = ObjectIndexTOP.indexOf(ids[i]);
				for (var j = 0; j < MaxIndexParents; j++){
					try{
						E = E.parentElement;
				//		console.error(E);
						var T = ObjectIndexTOP.indexOf(E.id);
						if (T > -1 && T < IsTopIndex)
							IsTopIndex = T;
						if (T == 0 || E == null)
							break;
					}catch(erd){}
				}
				var newIndex = parseInt(ObjectLastIndexActualIndex[i],10)-1;
				var ObjectLastIndexWriteSet = ObjectLastIndexWriteOnloadIndex;
				if (IsTopIndex > -1){
					if (ObjectIndexTOPCanOverride[IsTopIndex])
						ObjectLastIndexWriteSet += (ObjectIndexTOPCanOverride.length-IsTopIndex)*(ObjectLastIndexWriteMax+200);
					ObjectLastIndexWriteSet += ObjectIndexTOPAdd;
				}
				try{
					GtE(ids[i]).style.zIndex = ObjectLastIndexWriteSet;
				}
				catch(erd){}
				ObjectLastIndex.push(ids[i]);
			}
			eval("SwitchIndexSystemObj."+id+".push('"+ids[i]+"');");
		}
		/*VisibleIndexSystem(id,true,true);
		VisibleIndexSystem(id,false,true);*/
	}
}

function SetIndexSystemTop(id, type){
	if (type > 0){
		var t = ObjectIndexTOP.indexOf(id);
		if (t > -1){
			ObjectIndexTOP.splice(t, 1);
			ObjectIndexTOPCanOverride.splice(t, 1);
		}
		ObjectIndexTOP.unshift(id);
		if (type == 1)
			ObjectIndexTOPCanOverride.unshift(false);
		else{
			console.log("elsetype: "+id);
			ObjectIndexTOPCanOverride.unshift(true);
		}
	}
	else{
		var t = ObjectIndexTOP.indexOf(id);
		if (t > -1){
			ObjectIndexTOP.splice(t, 1);
			ObjectIndexTOPCanOverride.splice(t, 1);
		}
	}
}

class ObjectMethods{
	constructor(){
		ActiveRender = 1;
		
		this.Date = new Date();
		this.Time = this.Date.getTime();
		this.Minutes = this.Date.getMinutes();
		this.Miliseconds = this.Date.getMilliseconds();
		this.Hours = this.Date.getHours();
		this.FullYear = this.Date.getFullYear();
		this.Day = this.Date.getDay();
		this.Month = this.Date.getMonth();
		this.Seconds = this.Date.getSeconds();
		this.Name = "none";
		this.Timer = {};
		this.Edit = {};
		this.editObjRun();
	}
	editObjRun(){
		var self = this;
		if (UseNoEditWorkClass)
			var EditGLen = Object.keys(self.Edit).length;
		for (var i in MethodsOBJM){//set added objects to this Edit class
			try{
				eval("self.Edit."+i+" = "+MethodsOBJM[i]+";");	
			}catch(erd){}
		}			
		this.Edit.addMethodToOBJM = function(name,code){
			if (!name)
				return undefined;
			if (!code)
				return undefined;	
			eval("MethodsOBJM."+name+" = "+code+";");
			eval("self.Edit."+name+" = "+code+";");
			return "done";
		}
		this.Edit.alert = function(data){
			if ((data) && data.length > 0)
				alert(data);
			else
				alert("");
			return data;
		}
		this.Edit.message = function(data){
			if ((data) && data.length > 0)
				alert(data);
			else
				alert("");
			return data;
		}
		this.Edit.prompt = function(data){
			if ((data) && data.length > 0)
				var res = prompt(data);
			else
				var res = prompt("");
			return res;
		}
		this.Edit.confirm = function(data){
			if ((data) && data.length > 0)
				var res = confirm(data);
			else
				var res = confirm("");
			return res;
		}
		this.Edit.setInterval = function(name,length,code){
			if (!name)
				return undefined;
			if (isNaN(length))
				return undefined;
			if (!code)
				return undefined;
			eval("self.Timer."+name+"= window.setInterval(code,length);");
			return name;
		}
		this.Edit.setTimeout = function(name,length,code){
			if (!name)
				return undefined;
			if (isNaN(length))
				return undefined;
			if (!code)
				return undefined;
			eval("self.Timer."+name+"= window.setTimeout(code,length);");
			return name;
		}
		this.Edit.clearInterval = function(name){
			if (!name)
				return undefined;
			eval("window.clearInterval(self.Timer."+name+");");
			return name;
		}
		this.Edit.clearTimeout = function(name){
			if (!name)
				return undefined;
			eval("window.clearTimeout(self.Timer."+name+");");
			return name;
		}
		this.Edit.date = function(yearP, month, day, hours, minutes, seconds, milliseconds){
			if ((yearP) && yearP.length > 0)
				self.Date = new Date(year, month, day, hours, minutes, seconds, milliseconds);
			else
				self.Date = new Date();
			return self.Date;
		}
		this.Edit.seconds = function(){
			self.Seconds = date().getSeconds();
			return self.Seconds;
		}
		this.Edit.month = function(){
			self.Month = date().getMonth();
			return self.Month;
		}
		this.Edit.day = function(){
			self.Day = date().getDay();
			return self.Day;
		}
		this.Edit.fullYear = function(){
			self.FullYear = date().getFullYear();
			return self.FullYear;
		}
		this.Edit.hours = function(){
			self.Hours = date().getHours();
			return self.Hours;
		}
		this.Edit.time = function(){
			self.Time = date().getTime();
			return self.Time;
		}
		this.Edit.minutes = function(){
			self.Minutes = date().getMinutes();
			return self.Minutes;
		}
		this.Edit.miliseconds = function(){
			self.Miliseconds = date().getMilliseconds();
			return self.Miliseconds;
		}
		this.Edit.exportStyles = function(id,WStyleObj){
			for (var i in WStyleObj){
				try{
					if (WStyleObj[i] != null && WStyleObj[i] != undefined && WStyleObj[i] != "" && WStyleObj[i].search('undefined') == -1 && WStyleObj[i].search('null') == -1 && WStyleObj[i].search('NaN') == -1)
						eval("GtE('"+id+"').style."+i+" = '"+WStyleObj[i]+"';");
				}catch(erd){}
			}
		}
		this.Edit.isColor = function(indata){
			if (!indata)
				return undefined;
			var value = indata.trim().toLowerCase();
			var data = undefined;
			var colorsnames = new Array("aliceblue","antiquewhite","aqua","aquasdine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquasdine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","asato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen");
			if (value[0] == "#"){
				for (var i = 1;i < value.length;i++){
					if (isNaN(value[i])){
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
						if (value[i] != ',' && (isNaN(value[i]))){
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
						if (value[i] != ',' && (isNaN(value[i]))){
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
		if (UseNoEditWorkClass){
			for (var i = EditGLen; i < Object.keys(self.Edit).length;i++)
				eval("self."+Object.keys(self.Edit)[i]+" = "+self.Edit[Object.keys(self.Edit)[i]]+";");
		}
	}
}

function ObjectMethodEval(id){
	ObjectMethodId = id;
}

class ObjectWork extends ObjectMethods{
	constructor(){
		super();
		this.ObjType = "ObjectWork";
		this.Id = "e"+avc();
		this.OkColor = undefined;
		this.BadColor = ObjectBadColor;
		this.NormalColor = undefined;
		this.DisabledColor = ObjectDisabledColor;
		this.Style = {};
		this.Timer = {};
		this.editObjWork();
		this.Objects = {};
		this.Obj = {};
		this.ObjectWorkName = "Obj"+ObjectWorkData.number;
		eval("ObjectWorkData."+this.ObjectWorkName+" = {};");
		ObjectWorkData.number++;
		this.Edit.setObject("code","ObjectMethodEval('"+this.Id+"');");
		this.Edit.setObject("drcode","none();");
		this.Edit.setObject("drstcode","none();");
		this.Edit.setObject("drencode","none();");
		this.Edit.setObject("dpencode","none();");
		this.Edit.setObject("dpovcode","none();");
		this.Edit.setObject("dplecode","none();");
		this.Edit.setObject("dpcode","none();");
		this.Edit.setObject("innerData",none());
	}
	editObjWork(){
		var self = this
		if (UseNoEditClass)
			var EditGLen = Object.keys(self.Edit).length;
		this.Edit.unSetIndexIn = function(bool){
			if (bool)
				VisibleIndexSystem(self.Id,false,true);
			if (ObjectLastIndexActual.indexOf(self.Id) != -1)
				return true;
			else
				return false;
		}
		this.Edit.setIndexIn = function(bool){
			if (bool)
				VisibleIndexSystem(self.Id,true,true);
			if (ObjectLastIndexActual.indexOf(self.Id) != -1)
				return true;
			else
				return false;
		}
		this.Edit.setIndexSystem = function(idArray){
			SwitchIndexSystem(self.Id,idArray);
		}
		this.Edit.unSetIndexSystem = function(){
			SwitchIndexSystem(self.Id,false);
		}
		this.Edit.setIndexSystemTop = function(){
			SetIndexSystemTop(self.Id, 1);
		}
		this.Edit.setIndexSystemTopFixed = function(){
			SetIndexSystemTop(self.Id, 2);
		}
		this.Edit.unSetIndexSystemTop = function(){
			SetIndexSystemTop(self.Id, 0);
		}
		this.Edit.ifBadBg = function(){
			if (GtE(self.Id).style.backgroundColor != self.BadColor && (GtE(self.Id).style.backgroundColor))
				return false;
			return true;
		}
		this.Edit.ifBadBorder = function(){
			if (GtE(self.Id).style.borderColor != self.BadColor && (GtE(self.Id).style.borderColor))
				return false;
			return true;
		}
		this.Edit.ifOkBg = function(){
			if (GtE(self.Id).style.backgroundColor != self.BadColor && (GtE(self.Id).style.backgroundColor))
				return true;
			return false;
		}
		this.Edit.ifOkBorder = function(){
			if (GtE(self.Id).style.borderColor != self.BadColor && (GtE(self.Id).style.borderColor))
				return true;
			return false;
		}
		this.Edit.setOkBorder = function(){
			if (GtE(self.Id).style.borderColor != self.BadColor && (GtE(self.Id).style.borderColor))
				self.OkColor = GtE(self.Id).style.borderColor;
			if (!GtE(self.OkColor))
				return undefined;
			GtE(self.Id).style.border = "0.2vh solid "+self.OkColor;
			return self.OkColor;
		}
		this.Edit.setOkBg = function(){
			if (GtE(self.Id).style.backgroundColor != self.BadColor && (GtE(self.Id).style.backgroundColor))
				self.OkColor = GtE(self.Id).style.backgroundColor;
			if (!GtE(self.OkColor))
				return undefined;
			GtE(self.Id).style.backgroundColor = self.OkColor;
			return self.OkColor;
		}
		this.Edit.setBadBorder = function(){
			if (GtE(self.Id).style.borderColor != self.BadColor && (GtE(self.Id).style.borderColor))
				self.OkColor = GtE(self.Id).style.borderColor;
			GtE(self.Id).style.border = "0.2vh solid "+self.BadColor;
			return self.BadColor;
		}
		this.Edit.setBadBg = function(){
			if (GtE(self.Id).style.backgroundColor != self.BadColor && (GtE(self.Id).style.backgroundColor))
				self.OkColor = GtE(self.Id).style.backgroundColor;
			GtE(self.Id).style.backgroundColor = self.BadColor;
			return self.BadColor;
		}
		this.Edit.setOkBadBg = function(bool){
			if (GtE(self.Id).style.backgroundColor != self.BadColor && (GtE(self.Id).style.backgroundColor)){
				if (bool)
					self.Edit.setBadBg();
				return false;
			}
			else{
				if (bool)
					self.Edit.setOkBadBg();
				return true;
			}
		}
		this.Edit.setOkBadBorder = function(bool){
			if (GtE(self.Id).style.borderColor != self.BadColor && (GtE(self.Id).style.borderColor)){
				if (bool)
					self.Edit.setBadBorder();
				return false;
			}
			else{
				if (bool)
					self.Edit.setOkBadBorder();
				return true;
			}
		}
		this.Edit.showFlex = function (data){
			if ((data)){
				GtE(self.Id).style.display = "flex";
				VisibleIndexSystem(self.Id,true);
			}
			if (GtE(self.Id).style.display == "none")
				return false;
			else
				return true;
		}
		
		this.Edit.show = function (data){
			if (data){
				GtE(self.Id).style.display = "block";
				VisibleIndexSystem(self.Id,true,true);
			}
			if (GtE(self.Id).style.display == "none")
				return false;
			else
				return true;
		}
		this.Edit.hide = function (data){
			if (data){
				GtE(self.Id).style.display = "none";
				VisibleIndexSystem(self.Id,false,true);
			}
			if (GtE(self.Id).style.display == "none")
				return true;
			else
				return false;
		}
		this.Edit.cssClass = function(name){
			if (!name)
				return undefined;
			GtE(self.Id).className = name;
			return name;
		}
		this.Edit.addCssClass = function(name){
			if (!name)
				return undefined;
			GtE(self.Id).className += " "+name;
			return name;
		}
		this.Edit.removeCssClass = function(name){
			if (!name)
				return undefined;
			GtE(self.Id).classList.remove(name);
			return name;
		}
		this.Edit.setToObj = function(id,windowSelf){
			if (!id)
				return undefined;
			var oldData = GtE(self.Id).innerHTML;
			eval("self.Objects."+id+" = new ElObj(self,windowSelf,false);");
			eval("self.Objects."+id+".Id = '"+id+"'");
			GtE(self.Id).innerHTML = "<div id='"+id+"'>"+oldData+"</div>";
			return id;
		}
		this.Edit.unSetToObj = function(id){
			if (!id)
				return undefined;
			try{
				eval("self.Objects."+id+".destroy();");
			}catch(erd){}
			try{
				eval("delete self.Objects."+id+";");
			}catch(erd){}
		}
		this.Edit.valueTr = function(name){
			name = Translate(name);
			GtE(self.Id).value = name;
			return name;
		}
		this.Edit.valueTrAdd = function(name){
			name = Translate(name);
			GtE(self.Id).value += name;
			return name;
		}
		this.Edit.trInTitle = function(data){
			data = Translate(data);
			GtE(self.Id).title = data;
			return data;
		}
		this.Edit.trInTitleAdd = function(data){
			data = Translate(data);
			GtE(self.Id).title += data;
			return data;
		}
		this.Edit.trIn = function(name){
			name = Translate(name);
			GtE(self.Id).innerHTML = name;
			return name;
		}
		this.Edit.trInAdd = function(name){
			name = Translate(name);
			GtE(self.Id).innerHTML += name;
			return name;
		}
		this.Edit.trInSpecial = function(name){
			name = Translate(name);
			GtE(self.Id+"C").innerHTML = name;
			return name;
		}
		this.Edit.trInAddSpecial = function(name){
			name = Translate(name);
			GtE(self.Id+"C").innerHTML += name;
			return name;
		}
		this.Edit.value = function(name){
			GtE(self.Id).value = name;
			return name;
		}
		this.Edit.getValue = function(){
			return GtE(self.Id).value;
		}
		this.Edit.getWrite = function(){
			return GtE(self.Id).innerHTML;
		}
		this.Edit.valueAdd = function(name){
			GtE(self.Id).value += name;
			return name;
		}
		this.Edit.writeInTitle = function(data){
			GtE(self.Id).title = data;
			return data;
		}
		this.Edit.writeInTitleAdd = function(data){
			GtE(self.Id).title += data;
			return data;
		}
		this.Edit.writeIn = function(name){
			GtE(self.Id).innerHTML = name;
			return name;
		}
		this.Edit.writeInAdd = function(name){
			GtE(self.Id).innerHTML += name;
			return name;
		}
		this.Edit.writeInSpecial = function(name){
			GtE(self.Id+"C").innerHTML = name;
			return name;
		}
		this.Edit.writeInAddSpecial = function(name){
			GtE(self.Id+"C").innerHTML += name;
			return name;
		}
		this.Edit.onClick = function(code){
			if (!code)
				return undefined;
			eval("GtE(self.Id).onclick = function(){"+code+"};");
			return "done";
		}
		this.Edit.onClickAdd = function(code){
			if (!code)
				return undefined;
			eval("GtE(self.Id).onclick += function(){"+code+"};");
			return "done";
		}
		this.Edit.setObject = function (key,data){
			if (!key)
				return undefined;
			if (!data)
				return undefined;
			eval("ObjectWorkData."+self.ObjectWorkName+"."+key+" = data;");
			return "done";
		}
		this.Edit.unsetObject = function (key){
			if (!key)
				return undefined;
			try{
				eval("delete ObjectWorkData."+self.ObjectWorkName+"."+key+";");
			}catch(erd){}
			return "done";
		}
		this.Edit.getObject = function (key){
			if (!key)
				return undefined;
			return eval("ObjectWorkData."+self.ObjectWorkName+"."+key);
		}
		this.Edit.setCode = function (data){
			if (!data)
				return undefined;
			eval("ObjectWorkData."+self.ObjectWorkName+".code = data;");
			return "done";
		}
		this.Edit.unSetCode = function (data){
			if (!data)
				return undefined;
			try{
				eval("delete ObjectWorkData."+self.ObjectWorkName+".code;");
			}catch(erd){}
			return "done";
		}
		this.Edit.setCodeAdd = function (data){
			if (!data)
				return undefined;
			try{
				eval("ObjectWorkData."+self.ObjectWorkName+".code += data;");
			}catch(erd){
				eval("ObjectWorkData."+self.ObjectWorkName+".code = data;");
			}			
			return "done";
		}
		this.Edit.getCode = function (){
			return eval("ObjectWorkData."+self.ObjectWorkName+".code");
		}
		this.Edit.setCodeDbl = function (data){
			if (!data)
				return undefined;
			eval("ObjectWorkData."+self.ObjectWorkName+".codeDbl = data;");
			return "done";
		}
		this.Edit.unSetCodeDbl = function (data){
			if (!data)
				return undefined;
			try{
				eval("delete ObjectWorkData."+self.ObjectWorkName+".codeDbl;");
			}catch(erd){}
			return "done";
		}
		this.Edit.setCodeAddDbl = function (data){
			if (!data)
				return undefined;
			try{
				eval("ObjectWorkData."+self.ObjectWorkName+".codeDbl += data;");
			}catch(erd){
				eval("ObjectWorkData."+self.ObjectWorkName+".codeDbl = data;");
			}			
			return "done";
		}
		this.Edit.getCodeDbl = function (){
			return eval("ObjectWorkData."+self.ObjectWorkName+".codeDbl");
		}		
		this.Edit.resize = function (percentWidth,percentHeight,percentLeft,percentTop,percentRight,percentBotas){
			if ((isNaN(percentWidth)) || (isNaN(percentHeight)) || (isNaN(percentLeft)) || (isNaN(percentTop)) || (isNaN(percentRight)) || (isNaN(percentBotas)))
				return undefined;
			try{
				/*
				self.Style.width = ((GtE(self.Id).offsetWidth/100)*percentWidth)+"px";
				self.Style.height = ((GtE(self.Id).offsetHeight/100)*percentHeight)+"px";
				self.Style.left = ((GtE(self.Id).offsetLeft/100)*percentLeft)+"px";
				self.Style.top = ((GtE(self.Id).offsetTop/100)*percentTop)+"px";
				self.Style.right = (((GtE(self.Id).parentNode.offsetWidth-(GtE(self.Id).offsetLeft+GtE(self.Id).offsetWidth))/100)*percentRight)+"px";
				self.Style.botas = (((GtE(self.Id).parentNode.offsetHeight-(GtE(self.Id).offsetTop+GtE(self.Id).offsetHeight))/100)*percentBotas)+"px";
				self.Style.margin = "0px 0px 0px 0px";
				
				*/
				
				GtE(self.id).style.width = ((GtE(self.Id).offsetWidth/100)*percentWidth)+"px";
				GtE(self.id).style.height = ((GtE(self.Id).offsetHeight/100)*percentHeight)+"px";
				GtE(self.id).style.left = ((GtE(self.Id).offsetLeft/100)*percentLeft)+"px";
				GtE(self.id).style.top = ((GtE(self.Id).offsetTop/100)*percentTop)+"px";
				GtE(self.id).style.right = (((GtE(self.Id).parentNode.offsetWidth-(GtE(self.Id).offsetLeft+GtE(self.Id).offsetWidth))/100)*percentRight)+"px";
				GtE(self.id).style.botas = (((GtE(self.Id).parentNode.offsetHeight-(GtE(self.Id).offsetTop+GtE(self.Id).offsetHeight))/100)*percentBotas)+"px";
				GtE(self.id).style.margin = "0px 0px 0px 0px";				
			}
			catch(erd){
				return undefined;
			}
		}
		this.Edit.resizeAll = function (percentWidth,percentHeight,percentLeft,percentTop,percentRight,percentBotas){
			if ((isNaN(percentWidth)) || (isNaN(percentHeight)) || (isNaN(percentLeft)) || (isNaN(percentTop)) || (isNaN(percentRight)) || (isNaN(percentBotas)))
				return undefined;
			resizeData(GtE(self.Id).childNodes);
			resizeData(new Array(GtE(self.Id)))
			function resizeData(data){
				for (var i = 0; i < data.length;i++){
					try{
						if ((data[i].id) && data[i].id != ""){
							GtEs(data[i].id).width = WPW((GtE(data[i].id).offsetWidth/100)*percentWidth)+"vw";
							GtEs(data[i].id).height = WPH((GtE(data[i].id).offsetHeight/100)*percentHeight)+"vh";
							GtEs(data[i].id).left = WPW((GtE(data[i].id).offsetLeft/100)*percentLeft)+"vw";
							GtEs(data[i].id).top = WPH((GtE(data[i].id).offsetTop/100)*percentTop)+"vh";
							GtEs(data[i].id).right = WPW(((GtE(data[i].id).parentNode.offsetWidth-(GtE(data[i].id).offsetLeft+GtE(data[i].id).offsetWidth))/100)*percentRight)+"vw";
							GtEs(data[i].id).botas = WPH(((GtE(data[i].id).parentNode.offsetHeight-(GtE(data[i].id).offsetTop+GtE(data[i].id).offsetHeight))/100)*percentBotas)+"vh";
							GtEs(data[i].id).margin = "0px 0px 0px 0px";
						}
					}
					catch(erd){
						
					}
				}
			}
		}
		this.Edit.setFocus = function(){
			var timeOutFocus = window.setTimeout(function(){
				ActiveInputWrite = self.Id;
				VisibleIndexSystem(self.Id,true,true);
				GtE(self.Id).focus();
			},450);
		}
		this.Edit.setBlur = function(){
			var timeOutFocus = window.setTimeout(function(){
				if (GtE(ActiveInputWrite))
					GtE(ActiveInputWrite).blue();
				ActiveInputWrite = undefined;
			},450);
		}
		this.Edit.size = function (width,height) {
	//			self.Style.width = width+"px";
		//		self.Style.height = height+"px";
            GtE(self.Id).style.width = width+"px";
            GtE(self.Id).style.height = height+"px";
			return [GtE(self.Id).style.width,GtE(self.Id).style.height];
		}
		this.Edit.sizeCustom = function (width,height) {
			//	self.Style.width = width;
			//	self.Style.height = height;
            GtE(self.Id).style.width = width
            GtE(self.Id).style.height = height;
			return [GtE(self.Id).style.width,GtE(self.Id).style.height];
		}
		this.Edit.setSize = function (left,top,width,height){
			if (left != "n" && left != "no" && left != "none")
				GtE(self.Id).style.left = left;
			if (top != "n" && top != "no" && top != "none")
				GtE(self.Id).style.top = top;
			if (width != "n" && width != "no" && width != "none")
				GtE(self.Id).style.width = width;
			if (height != "n" && height != "no" && height != "none")
				GtE(self.Id).style.height = height;
			if ((left != "n" && left != "no" && left != "none") || (top != "n" && top != "no" && top != "none"))
				GtE(self.Id).style.position = "absolute";
		}
		this.Edit.resizeToWin = function(left,top,width,height){
			if (width != "n" && width != "no" && width != "none" && width != false && width != "")
				GtE(self.Id).style.width = WPW((GtE(self.Id).offsetWidth/100)*width)+"vw";
			if (height != "n" && height != "no" && height != "none" && height != false && height != "")						
				GtE(self.Id).style.height = WPH((GtE(self.Id).offsetHeight/100)*height)+"vh";
			if (left != "n" && left != "no" && left != "none" && left != false && left != "")
				GtE(self.Id).style.left = WPW((GtE(self.Id).offsetLeft/100)*left)+"vw";
			if (top != "n" && top != "no" && top != "none" && top != false && top != "")
				GtE(self.Id).style.top = WPH((GtE(self.Id).offsetTop/100)*top)+"vh";
			if ((left != "n" && left != "no" && left != "none" && left != false && left != "") || (top != "n" && top != "no" && top != "none" && top != false && top != ""))
				GtE(self.Id).style.position = "absolute";	
			try{
				self.WSPX = GtE(self.Id).offsetLeft/(self.Grid.Pel.offsetWidth/100);
				self.WSPY = GtE(self.Id).offsetTop/(self.Grid.Pel.offsetHeight/100);			
				self.WSL = GtE(self.Id).offsetWidth/(self.Grid.Pel.offsetWidth/100);			
				self.WST = GtE(self.Id).offsetHeight/(self.Grid.Pel.offsetHeight/100);	
			}catch(erd){}
		}
		this.Edit.setDrCode = function (data){
			if (!data)
				return undefined;
			eval("ObjectWorkData."+self.ObjectWorkName+".drcode = data;");
			return "done";
		}		
		this.Edit.setDrStCode = function (data){
			if (!data)
				return undefined;
			eval("ObjectWorkData."+self.ObjectWorkName+".drstcode = data;");
			return "done";
		}
		this.Edit.setDrEnCode = function (data){
			if (!data)
				return undefined;
			eval("ObjectWorkData."+self.ObjectWorkName+".drencode = data;");
			return "done";
		}
		this.Edit.setDpEnCode = function (data){
			if (!data)
				return undefined;
			eval("ObjectWorkData."+self.ObjectWorkName+".dpencode = data;");
			return "done";
		}
		this.Edit.setDpOvCode = function (data){
			if (!data)
				return undefined;
			eval("ObjectWorkData."+self.ObjectWorkName+".dpovcode = data;");
			return "done";
		}
		this.Edit.setDpLeCode = function (data){
			if (!data)
				return undefined;
			eval("ObjectWorkData."+self.ObjectWorkName+".dplecode = data;");
			return "done";
		}
		this.Edit.setDpCode = function (data){
			if (!data)
				return undefined;
			eval("ObjectWorkData."+self.ObjectWorkName+".dpcode = data;");
			return "done";
		}
		this.Edit.setDrCodeAdd = function (data){
			if (!data)
				return undefined;
			eval("ObjectWorkData."+self.ObjectWorkName+".drcode += data;");
			return "done";
		}		
		this.Edit.setDrStCodeAdd = function (data){
			if (!data)
				return undefined;
			eval("ObjectWorkData."+self.ObjectWorkName+".drstcode += data;");
			return "done";
		}
		this.Edit.setDrEnCodeAdd = function (data){
			if (!data)
				return undefined;
			eval("ObjectWorkData."+self.ObjectWorkName+".drencode += data;");
			return "done";
		}
		this.Edit.setDpEnCodeAdd = function (data){
			if (!data)
				return undefined;
			eval("ObjectWorkData."+self.ObjectWorkName+".dpencode += data;");
			return "done";
		}
		this.Edit.setDpOvCodeAdd = function (data){
			if (!data)
				return undefined;
			eval("ObjectWorkData."+self.ObjectWorkName+".dpovcode += data;");
			return "done";
		}
		this.Edit.setDpLeCodeAdd = function (data){
			if (!data)
				return undefined;
			eval("ObjectWorkData."+self.ObjectWorkName+".dplecode += data;");
			return "done";
		}
		this.Edit.setDpCodeAdd = function (data){
			if (!data)
				return undefined;
			eval("ObjectWorkData."+self.ObjectWorkName+".dpcode += data;");
			return "done";
		}
		this.Edit.setInnerData = function (data){
			if (!data)
				return undefined;
			eval("ObjectWorkData."+self.ObjectWorkName+".innerData = data;");
			return "done";
		}
		this.Edit.setInnerDataAdd = function (data){
			if (!data)
				return undefined;
			eval("ObjectWorkData."+self.ObjectWorkName+".innerData += data;");
			return "done";
		}
		this.Edit.setStyle = function(name){
			var name = name.split(";");
			for (var i = 0; i < name.length; i++){
				var value = name[i].split("=");
				if (value.length == 2){
					value[0] = value[0].toString().trim();
					value[1] = value[1].toString().trim();
					value[1] = value[1].replace(/'/gi,"");
					if (value[0] != "" && value[1] != "")				
						eval("GtE('"+self.Id+"').style."+value[0]+"='"+value[1]+"';");							
				}	
			}
			return "done";
		}		
		this.Edit.getInnerDataAdd = function (){
			return eval("ObjectWorkData."+self.ObjectWorkName+".innerData");
		}
		this.getType = function (){
			return this.ObjType;
		}
		if (UseNoEditClass){
			for (var i = EditGLen; i < Object.keys(self.Edit).length;i++)
				eval("self."+Object.keys(self.Edit)[i]+" = "+self.Edit[Object.keys(self.Edit)[i]]+";");
		}
		return "[Object of methods for work with elements]";
	}
	destroyObjectWork(){
		try{
			for (var x in this.Objects){
				try{
					x.destroy();
				}catch(erd){}
			}
		}catch(erd){}
		try{
			for (var x in this.Obj){
				try{
					x.destroy();
				}catch(erd){}
			}
		}catch(erd){}
		try{
			eval("delete ObjectWorkData."+self.ObjectWorkName+";");
		}catch(erd){}
		try{
			delete this.Objects;
		}catch(erd){}
		try{
			delete this.Obj;
		}catch(erd){}
		try{
			delete this.editObjWork;
		}catch(erd){}
		try{
			GtE(this.Id).innerHTML = "";
			GtE(this.Id).parentNode.removeChild(GtE(this.Id));
		}catch(erd){}
	}
	destroy(){
		try{
			this.destroyObjectWork();
		}catch(erd){}
	}
}

class Button extends ObjectWork{
	constructor(ParentSelf,WindowSelf,createBool){
		super();
		this.ObjType = "Button";
		this.ParentSelf = ParentSelf;
		this.WindowSelf = WindowSelf;
		this.Self = this;
		this.createBool = createBool;
		this.MoveObjCreated = false;
		if (this.createBool)
			GtE(this.ParentSelf.Id).innerHTML += '<button id="'+this.Id+'" data-inf="ObjectWorkData.'+this.ObjectWorkName+'" ondrop="javascript:ElDp(event);" ondragleave="javascript:ElDrLe(event);" ondragover="javascript:ElDrOv(event);" ondragenter="javascript:ElDrEn(event);" ondragend="javascript:ElDrEn(event);" ondragstart="javascript:ElDrSt(event);" ondrag="javascript:ElDr(event);" onmousedown="javascript:WorkMouse(this.id);" onmouseup="javascript:WorkMouseUp(this.id);" onclick="javascript:BtnEval(this.id);VisibleIndexSystem(\''+this.Id+'\',true,false);" onfocus="javascript:VisibleIndexSystem(\''+this.Id+'\',true,false);" value=""></button>';
		this.Created = true;
		this.create();
		this.edit();
	}
	create(){
		this.createMove();
	}
	createMove(){
		if (this.createBool){
			eval("MoveObj."+this.Id+" = {};");
			eval("MoveObj."+this.Id+".move = false;");
			eval("MoveObj."+this.Id+".moveId = '"+this.Id+"';");
			this.MoveObjCreated = true;			
		}
	}
	edit(){
		var self = this;
		if (UseNoEditClass)
			var EditGLen = Object.keys(self.Edit).length;
		this.Edit.setMove = function (bool,moveId){
			if (!self.createBool)
				return undefined;
			if (!self.MoveObjCreated){
				self.createMove(self.Window);
				self.Edit.setMove(bool,moveId);
				return undefined;
			}
			if (bool)
				eval("MoveObj."+self.Id+".move = true;");
			else
				eval("MoveObj."+self.Id+".move = false;");	
			if ((moveId) && (moveId != ""))
				eval("MoveObj."+self.Id+".moveId = '"+moveId+"';");
			return "done";
		}
		this.Edit.setResize = function (resizeElementClass){
			if (!self.createBool)
				return undefined;
			if (!resizeElementClass)
				resizeElementClass = "resizeDefElemClass";
			RegisterMove(self.Id);
			SR(self.Id,resizeElementClass,"none");	
			return "done";
		}		
		this.Edit.addShortCut = function (tag){
			if ((!tag) || (!self.createBool))
				return undefined;
			ElObjAddShortCut(self.Id,tag);		
			return "done";
		}
		this.Edit.addAlt = function (){
			if (!self.createBool)
				return undefined;
			ElObjAddAlt(self.Id);		
			return "done";
		}
		this.Edit.removeShortCut = function (){
			if (!self.createBool)
				return undefined;
			ElObjRemoveShortCut(self.Id);		
			return "done";
		}
		this.Edit.removeAlt = function (){
			if (!self.createBool)
				return undefined;
			ElObjRemoveAlt(self.Id);		
			return "done";
		}
		if (UseNoEditClass){
			for (var i = EditGLen; i < Object.keys(self.Edit).length;i++)
				eval("self."+Object.keys(self.Edit)[i]+" = "+self.Edit[Object.keys(self.Edit)[i]]+";");
		}
		return "[Object of methods for work with ElementObject";
	}
	newObject(name,bool){
		eval("this.Obj."+name+" = new ElObj(this,this.WindowSelf,"+bool+");");
		if (UseNoObjClass)
			eval("this."+name+" = this.Obj."+name+";");
	}
	destroyButton(){
		try{
			super.destroy();
		}catch(erd){}
	}
	destroy(){
		try{
			this.destroyButton();
		}catch(erd){}
	}
}

class ElObj extends ObjectWork{
	constructor(ParentSelf,WindowSelf,createBool){
		super();
		this.ObjType = "ElObj";
		this.ParentSelf = ParentSelf;
		this.WindowSelf = WindowSelf;
		this.Self = this;
		this.createBool = createBool;
		this.MoveObjCreated = false;
		if (this.createBool)
			GtE(this.ParentSelf.Id).innerHTML += '<div id="'+this.Id+'" data-inf="ObjectWorkData.'+this.ObjectWorkName+'" ondrop="javascript:ElDp(event);" ondragleave="javascript:ElDrLe(event);" ondragover="javascript:ElDrOv(event);" ondragenter="javascript:ElDrEn(event);" ondragend="javascript:ElDrEn(event);" ondragstart="javascript:ElDrSt(event);" ondrag="javascript:ElDr(event);" onmousedown="javascript:WorkMouse(this.id);" onmouseup="javascript:WorkMouseUp(this.id);" onclick="javascript:BtnEval(this.id); VisibleIndexSystem(\''+this.Id+'\',true,false);" ondblclick="javascript:BtnEvalDbl(this.id);" onfocus="javascript:VisibleIndexSystem(\''+this.Id+'\',true,false);"></div>';
		this.Created = true;
		this.create();
		this.edit();
	}
	create(){
		this.createMove();
	}
	createMove(){
		if (this.createBool){
			eval("MoveObj."+this.Id+" = {};");
			eval("MoveObj."+this.Id+".move = false;");
			eval("MoveObj."+this.Id+".moveId = '"+this.Id+"';");
			this.MoveObjCreated = true;			
		}
	}
	edit(){
		var self = this;
		if (UseNoEditClass)
			var EditGLen = Object.keys(self.Edit).length;
		this.Edit.setMove = function (bool,moveId){
			if (!self.createBool)
				return undefined;
			if (!self.MoveObjCreated){
				self.createMove();
				self.Edit.setMove(bool,moveId);
				return undefined;
			}
			if (bool)
				eval("MoveObj."+self.Id+".move = true;");
			else
				eval("MoveObj."+self.Id+".move = false;");
			if ((moveId) && (moveId != ""))
				eval("MoveObj."+self.Id+".moveId = '"+moveId+"';");
			return "done";
		}
		this.Edit.setResize = function (resizeElementClass){
			if (!self.createBool)
				return undefined;
			if (!resizeElementClass)
				resizeElementClass = "resizeDefElemClass";
			RegisterMove(self.Id);
			SR(self.Id,resizeElementClass,"none");	
			return "done";
		}		
		this.Edit.addShortCut = function (tag){
			if ((!tag) || (!self.createBool))
				return undefined;
			ElObjAddShortCut(self.Id,tag);		
			return "done";
		}
		this.Edit.addAlt = function (){
			if (!self.createBool)
				return undefined;
			ElObjAddAlt(self.Id);		
			return "done";
		}
		this.Edit.removeShortCut = function (){
			if (!self.createBool)
				return undefined;
			ElObjRemoveShortCut(self.Id);		
			return "done";
		}
		this.Edit.removeAlt = function (){
			if (!self.createBool)
				return undefined;
			ElObjRemoveAlt(self.Id);		
			return "done";
		}		
		if (UseNoEditClass){
			for (var i = EditGLen; i < Object.keys(self.Edit).length;i++)
				eval("self."+Object.keys(self.Edit)[i]+" = "+self.Edit[Object.keys(self.Edit)[i]]+";");
		}
		return "[Object of methods for work with ElementObject";
	}
	newObject(name,bool){
		eval("this.Obj."+name+" = new ElObj(this,this.WindowSelf,"+bool+");");
		if (UseNoObjClass)
			eval("this."+name+" = this.Obj."+name+";");
	}
	destroyElObj(){
		try{
			eval("delete MoveObj."+this.Id+";");
		}catch(erd){}
		this.MoveObjCreated = false;
		try{
			this.Edit.removeAlt();
		}catch(erd){}
		try{
			this.Edit.removeShortCut();
		}catch(erd){}
		try{
			super.destroy();
		}catch(erd){}
	}
	destroy(){
		try{
			this.destroyElObj();
		}catch(erd){}
	}
}

class Anchor extends ObjectWork{
	constructor(ParentSelf,WindowSelf,href,value,createBool){
		super();
		this.ObjType = "Anchor";
		this.ParentSelf = ParentSelf;
		this.WindowSelf = WindowSelf;
		this.Self = this;
		this.Value = value;
		this.Href = href;
		this.createBool = createBool;
		if (this.createBool)
			GtE(this.ParentSelf.Id).innerHTML += '<a id="'+this.Id+'" data-inf="ObjectWorkData.'+this.ObjectWorkName+'" href="'+this.Href+'";>'+this.Value+'</a>';
		this.Created = true;
		this.edit();
	}
	create(){

	}
	edit(){
		var self = this;
		if (UseNoEditClass)
			var EditGLen = Object.keys(self.Edit).length;
		this.Edit.addShortCut = function (tag){
			if ((!tag) || (!self.createBool))
				return undefined;
			ElObjAddShortCut(self.Id,tag);		
			return "done";
		}
		this.Edit.addAlt = function (){
			if (!self.createBool)
				return undefined;
			ElObjAddAlt(self.Id);		
			return "done";
		}
		this.Edit.removeShortCut = function (){
			if (!self.createBool)
				return undefined;
			ElObjRemoveShortCut(self.Id);		
			return "done";
		}
		this.Edit.removeAlt = function (){
			if (!self.createBool)
				return undefined;
			ElObjRemoveAlt(self.Id);		
			return "done";
		}
		if (UseNoEditClass){
			for (var i = EditGLen; i < Object.keys(self.Edit).length;i++)
				eval("self."+Object.keys(self.Edit)[i]+" = "+self.Edit[Object.keys(self.Edit)[i]]+";");
		}
		return "[Object of methods for work with ElementObject";
	}
	setPath(path){
		GtE(this.Id).href = path;
	}
	setName(name){
		GtE(this.id).value = name;
	}
	destroyAnchor(){
		try{
			this.Edit.removeAlt();
		}catch(erd){}
		try{
			this.Edit.removeShortCut();
		}catch(erd){}
		try{
			super.destroy();
		}catch(erd){}
	}
	destroy(){
		try{
			this.destroyAnchor();
		}catch(erd){}
	}
}

class Audio extends ObjectWork{
	constructor(ParentSelf,WindowSelf,src,mediatype,htmltags,createBool){
		super();
		this.ObjType = "Audio";
		this.ParentSelf = ParentSelf;
		this.WindowSelf = WindowSelf;
		this.Self = this;
		this.Src = src;
		this.HtmlTags = htmltags;
		this.MediaType = mediatype;
		this.createBool = createBool;
		if (this.createBool)
			GtE(this.ParentSelf.Id).innerHTML += '<audio id="'+this.Id+'" data-inf="ObjectWorkData.'+this.ObjectWorkName+'" '+this.HtmlTags+'><source src="'+this.src+'" type="'+this.MediaType+'"></audio>';
		this.Created = true;
		this.edit();
	}
	create(){

	}
	edit(){
		var self = this;
		if (UseNoEditClass)
			var EditGLen = Object.keys(self.Edit).length;
		this.Edit.addShortCut = function (tag){
			if ((!tag) || (!self.createBool))
				return undefined;
			ElObjAddShortCut(self.Id,tag);		
			return "done";
		}
		this.Edit.addAlt = function (){
			if (!self.createBool)
				return undefined;
			ElObjAddAlt(self.Id);		
			return "done";
		}
		this.Edit.removeShortCut = function (){
			if (!self.createBool)
				return undefined;
			ElObjRemoveShortCut(self.Id);		
			return "done";
		}
		this.Edit.removeAlt = function (){
			if (!self.createBool)
				return undefined;
			ElObjRemoveAlt(self.Id);		
			return "done";
		}
		if (UseNoEditClass){
			for (var i = EditGLen; i < Object.keys(self.Edit).length;i++)
				eval("self."+Object.keys(self.Edit)[i]+" = "+self.Edit[Object.keys(self.Edit)[i]]+";");
		}
		return "[Object of methods for work with ElementObject";
	}
	pause(){
		GtE(this.Id).pause();
		return "done";
	}
	play(){
		GtE(this.Id).play();
		return "done";
	}
	load(){
		GtE(this.Id).load();
		return "done";
	}
	destroyAudio(){
		try{
			this.Edit.removeAlt();
		}catch(erd){}
		try{
			this.Edit.removeShortCut();
		}catch(erd){}
		try{
			super.destroy();
		}catch(erd){}
	}
	destroy(){
		try{
			this.destroyAudio();
		}catch(erd){}
	}
}

class Video extends ObjectWork{
	constructor(ParentSelf,WindowSelf,src,mediatype,htmltags,createBool){
		super();
		this.ObjType = "Video";
		this.ParentSelf = ParentSelf;
		this.WindowSelf = WindowSelf;
		this.Self = this;
		this.Src = src;
		this.HtmlTags = htmltags;
		this.MediaType = mediatype;
		this.createBool = createBool;
		if (createBool)
			GtE(this.ParentSelf.Id).innerHTML += '<video id="'+this.Id+'" data-inf="ObjectWorkData.'+this.ObjectWorkName+'" '+this.HtmlTags+'><source src="'+this.src+'" type="'+this.MediaType+'"></video>';
		this.Created = true;
		this.edit();
	}
	create(){

	}
	edit(){
		var self = this;
		if (UseNoEditClass)
			var EditGLen = Object.keys(self.Edit).length;
		this.Edit.addShortCut = function (tag){
			if ((!tag) || (!self.createBool))
				return undefined;
			ElObjAddShortCut(self.Id,tag);		
			return "done";
		}
		this.Edit.addAlt = function (){
			if (!self.createBool)
				return undefined;
			ElObjAddAlt(self.Id);		
			return "done";
		}
		this.Edit.removeShortCut = function (){
			if (!self.createBool)
				return undefined;
			ElObjRemoveShortCut(self.Id);		
			return "done";
		}
		this.Edit.removeAlt = function (){
			if (!self.createBool)
				return undefined;
			ElObjRemoveAlt(self.Id);		
			return "done";
		}
		if (UseNoEditClass){
			for (var i = EditGLen; i < Object.keys(self.Edit).length;i++)
				eval("self."+Object.keys(self.Edit)[i]+" = "+self.Edit[Object.keys(self.Edit)[i]]+";");
		}
		return "[Object of methods for work with ElementObject";
	}
	pause(){
		GtE(this.Id).pause();
		return "done";
	}
	play(){
		GtE(this.Id).play();
		return "done";
	}
	load(){
		GtE(this.Id).load();
		return "done";
	}
	destroyVideo(){
		try{
			this.Edit.removeAlt();
		}catch(erd){}
		try{
			this.Edit.removeShortCut();
		}catch(erd){}
		try{
			super.destroy();
		}catch(erd){}
	}
	destroy(){
		try{
			this.destroyVideo();
		}catch(erd){}
	}
}

class Image extends ObjectWork{
	constructor(ParentSelf,WindowSelf,src,createBool){
		super();
		this.ObjType = "Image";
		this.ParentSelf = ParentSelf;
		this.WindowSelf = WindowSelf;
		this.Self = this;
		this.Src = src;
		this.createBool = createBool;
		if (this.createBool)
			GtE(this.ParentSelf.Id).innerHTML += '<img id="'+this.Id+'" data-inf="ObjectWorkData.'+this.ObjectWorkName+'" onmousedown="javascript:WorkMouse(this.id);" onclick="javascript:BtnEval(this.id);" src="'+this.Src+'">';
		this.Created = true;
		this.edit();
	}
	create(){

	}
	edit(){
		var self = this;
		if (UseNoEditClass)
			var EditGLen = Object.keys(self.Edit).length;
		this.Edit.addShortCut = function (tag){
			if ((!tag) || (!self.createBool))
				return undefined;
			ElObjAddShortCut(self.Id,tag);		
			return "done";
		}
		this.Edit.addAlt = function (){
			if (!self.createBool)
				return undefined;
			ElObjAddAlt(self.Id);		
			return "done";
		}
		this.Edit.removeShortCut = function (){
			if (!self.createBool)
				return undefined;
			ElObjRemoveShortCut(self.Id);		
			return "done";
		}
		this.Edit.removeAlt = function (){
			if (!self.createBool)
				return undefined;
			ElObjRemoveAlt(self.Id);		
			return "done";
		}
		if (UseNoEditClass){
			for (var i = EditGLen; i < Object.keys(self.Edit).length;i++)
				eval("self."+Object.keys(self.Edit)[i]+" = "+self.Edit[Object.keys(self.Edit)[i]]+";");
		}
		return "[Object of methods for work with ElementObject";
	}
	setPath(path){
		GtE(this.Id).src = path;
	}
	destroyImage(){
		try{
			this.Edit.removeAlt();
		}catch(erd){}
		try{
			this.Edit.removeShortCut();
		}catch(erd){}
		try{
			super.destroy();
		}catch(erd){}
	}
	destroy(){
		try{
			this.destroyImage();
		}catch(erd){}
	}
}

class Input extends ObjectWork{
	constructor(ParentSelf,WindowSelf,type,value,htmltags,createBool){
		super();
		this.ObjType = "Input";
		this.ParentSelf = ParentSelf;
		this.WindowSelf = WindowSelf;
		this.Self = this;
		this.Value = value;
		this.Type = type;
		this.HtmlTags = htmltags;
		this.createBool = createBool;
		if (this.createBool){
			GtE(this.ParentSelf.Id).innerHTML += '<input id="'+this.Id+'" data-inf="ObjectWorkData.'+this.ObjectWorkName+'" input type="'+this.Type+'" value="'+this.Value+'" '+this.HtmlTags+'>';
			this.Edit.cssClass("WindowInput");
		}
		this.Created = true;
		this.edit();
	}
	create(){

	}
	edit(){
		var self = this;
		if (UseNoEditClass)
			var EditGLen = Object.keys(self.Edit).length;
		this.Edit.addShortCut = function (tag){
			if ((!tag) || (!self.createBool))
				return undefined;
			ElObjAddShortCut(self.Id,tag);		
			return "done";
		}
		this.Edit.addAlt = function (){
			if (!self.createBool)
				return undefined;
			ElObjAddAlt(self.Id);		
			return "done";
		}
		this.Edit.removeShortCut = function (){
			if (!self.createBool)
				return undefined;
			ElObjRemoveShortCut(self.Id);		
			return "done";
		}
		this.Edit.removeAlt = function (){
			if (!self.createBool)
				return undefined;
			ElObjRemoveAlt(self.Id);		
			return "done";
		}
		if (UseNoEditClass){
			for (var i = EditGLen; i < Object.keys(self.Edit).length;i++)
				eval("self."+Object.keys(self.Edit)[i]+" = "+self.Edit[Object.keys(self.Edit)[i]]+";");
		}
		return "[Object of methods for work with ElementObject";
	}
	setValue(value){
		GtE(this.id).value = value;
	}
	destroyInput(){
		try{
			this.Edit.removeAlt();
		}catch(erd){}
		try{
			this.Edit.removeShortCut();
		}catch(erd){}
		try{
			super.destroy();
		}catch(erd){}
	}
	destroy(){
		try{
			this.destroyInput();
		}catch(erd){}
	}
}

class Iframe extends ObjectWork{
	constructor(ParentSelf,WindowSelf,src,htmltags,createBool){
		super();
		this.ObjType = "Iframe";
		this.ParentSelf = ParentSelf;
		this.WindowSelf = WindowSelf;
		this.Self = this;
		this.Src = src;
		this.HtmlTags = htmltags;
		this.createBool = createBool;
		if (this.createBool){
			GtE(this.ParentSelf.Id).innerHTML += '<iframe id="'+this.Id+'" data-inf="ObjectWorkData.'+this.ObjectWorkName+'" src="'+this.Src+'" '+this.HtmlTags+'></iframe>';
			this.Edit.cssClass("WindowIframe");
		}
		this.Created = true;
		this.edit();
	}
	create(){

	}
	edit(){
		var self = this;
		if (UseNoEditClass)
			var EditGLen = Object.keys(self.Edit).length;
		this.Edit.addShortCut = function (tag){
			if ((!tag) || (!self.createBool))
				return undefined;
			ElObjAddShortCut(self.Id,tag);		
			return "done";
		}
		this.Edit.addAlt = function (){
			if (!self.createBool)
				return undefined;
			ElObjAddAlt(self.Id);		
			return "done";
		}
		this.Edit.removeShortCut = function (){
			if (!self.createBool)
				return undefined;
			ElObjRemoveShortCut(self.Id);		
			return "done";
		}
		this.Edit.removeAlt = function (){
			if (!self.createBool)
				return undefined;
			ElObjRemoveAlt(self.Id);		
			return "done";
		}
		if (UseNoEditClass){
			for (var i = EditGLen; i < Object.keys(self.Edit).length;i++)
				eval("self."+Object.keys(self.Edit)[i]+" = "+self.Edit[Object.keys(self.Edit)[i]]+";");
		}
		return "[Object of methods for work with ElementObject";
	}
	setSrc(value){
		GtE(this.id).src = value;
	}
	destroyIframe(){
		try{
			this.Edit.removeAlt();
		}catch(erd){}
		try{
			this.Edit.removeShortCut();
		}catch(erd){}
		try{
			super.destroy();
		}catch(erd){}
	}
	destroy(){
		try{
			this.destroyIframe();
		}catch(erd){}
	}
}

class Textarea extends ObjectWork{
	constructor(ParentSelf,WindowSelf,cols,rows,value,htmltags,createBool){
		super();
		this.ObjType = "TextArea";
		this.ParentSelf = ParentSelf;
		this.WindowSelf = WindowSelf;
		this.Self = this;
		this.Value = value;
		this.Cols = cols;
		this.Rows = rows;
		this.HtmlTags = htmltags;
		this.createBool = createBool;
		if (this.createBool){
			GtE(this.ParentSelf.Id).innerHTML += '<textarea id="'+this.Id+'" data-inf="ObjectWorkData.'+this.ObjectWorkName+'" cols="'+this.Cols+'" rows="'+this.Rows+'" '+this.HtmlTags+'>'+this.Value+'</textarea>';
			this.Edit.cssClass("WindowTextarea");
		}
		this.Created = true;
		this.edit();
	}
	create(){

	}
	edit(){
		var self = this;
		if (UseNoEditClass)
			var EditGLen = Object.keys(self.Edit).length;
		this.Edit.addShortCut = function (tag){
			if ((!tag) || (!self.createBool))
				return undefined;
			ElObjAddShortCut(self.Id,tag);		
			return "done";
		}
		this.Edit.addAlt = function (){
			if (!self.createBool)
				return undefined;
			ElObjAddAlt(self.Id);		
			return "done";
		}
		this.Edit.removeShortCut = function (){
			if (!self.createBool)
				return undefined;
			ElObjRemoveShortCut(self.Id);		
			return "done";
		}
		this.Edit.removeAlt = function (){
			if (!self.createBool)
				return undefined;
			ElObjRemoveAlt(self.Id);		
			return "done";
		}
		if (UseNoEditClass){
			for (var i = EditGLen; i < Object.keys(self.Edit).length;i++)
				eval("self."+Object.keys(self.Edit)[i]+" = "+self.Edit[Object.keys(self.Edit)[i]]+";");
		}
		return "[Object of methods for work with ElementObject";
	}
	setValue(value){
		GtE(this.id).value = value;
	}
	destroyTextarea(){
		try{
			this.Edit.removeAlt();
		}catch(erd){}
		try{
			this.Edit.removeShortCut();
		}catch(erd){}
		try{
			super.destroy();
		}catch(erd){}
	}
	destroy(){
		try{
			this.destroyTextarea();
		}catch(erd){}
	}
}

class Element extends ElObj{
	constructor(ParentSelf,WindowSelf,bool){
		super(ParentSelf,WindowSelf,bool);
		this.ObjType = "Element";
		this.Buttons = {};
		this.Elements = {};
		this.Anchors = {};
		this.Audios = {};
		this.Videos = {};
		this.Images = {};
		this.Inputs = {};
		this.Textareas = {};
		this.Iframes = {};
		this.createBool = bool;
		this.edit();
	}
	create(){

	}
	edit(){
		var self = this;
		if (UseNoEditClass)
			var EditGLen = Object.keys(self.Edit).length;
		this.Edit.createFlexLayerR = function (name){
			if (!name)
				return undefined;
			self.newElement(name);
			eval("self."+name+".setSize('n','n','100%','85%');");
			eval("self."+name+".cssClass('setCenterFlexR');");
		}
		this.Edit.removeFlexLayerR = function (name){
			if (!name)
				return undefined;
			self.removeElement(name);
		}
		this.Edit.createFlexLayerC = function (name){
			if (!name)
				return undefined;
			self.newElement(name);
			eval("self."+name+".setSize('n','n','100%','100%');");
			eval("self."+name+".cssClass('setCenterFlexC');");
		}
		this.Edit.removeFlexLayerC = function (name){
			if (!name)
				return undefined;
			self.removeElement(name);
		}
		this.Edit.flexBreak = function (){
			if (!name)
				return undefined;
			self.newElement(name);
			eval("self."+name+".cssClass('flexBreak');");
		}
		this.Edit.removeFlexBreak = function (){
			if (!name)
				return undefined;
			self.removeElement(name);
		}
		this.Edit.createBlockLayer = function (name){
			if (!name)
				return undefined;
			self.newElement(name);
			eval("self."+name+".setSize('0%','0%','100%','100%');");
			eval("self."+name+".cssClass('setBlock');");
		}
		this.Edit.removeBlockLayer = function (name){
			if (!name)
				return undefined;
			self.removeElement(name);
		}
		this.Edit.addControlsLayer = function (name){
			self.newElement(name);
			eval("self."+name+".cssClass('setButtonsCont');");
		}
		this.Edit.addControlsLayer = function (name){
			self.removeElement(name);
		}
		this.Edit.addShortCut = function (tag){
			if ((!tag) || (!self.createBool))
				return undefined;
			ElObjAddShortCut(self.Id,tag);		
			return "done";
		}
		this.Edit.addAlt = function (){
			if (!self.createBool)
				return undefined;
			ElObjAddAlt(self.Id);		
			return "done";
		}
		this.Edit.removeShortCut = function (){
			if (!self.createBool)
				return undefined;
			ElObjRemoveShortCut(self.Id);		
			return "done";
		}
		this.Edit.removeAlt = function (){
			if (!self.createBool)
				return undefined;
			ElObjRemoveAlt(self.Id);		
			return "done";
		}
		if (UseNoEditClass){
			for (var i = EditGLen; i < Object.keys(self.Edit).length;i++)
				eval("self."+Object.keys(self.Edit)[i]+" = "+self.Edit[Object.keys(self.Edit)[i]]+";");
		}
		return "[Object of methods for work with ElementObject";
	}
	newButton(name){
		eval("this.Buttons."+name+" = new ElObj(this,this.WindowSelf,true);");
		eval("this.Buttons."+name+".Edit.cssClass('WindowButton');");
		eval("this.Obj."+name+" = this.Buttons."+name+";");
		eval("this.Obj."+name+".Edit.writeIn('"+name+"');");
		eval("this.Obj."+name+".Edit.addAlt();");
		if (UseNoObjClass)
			eval("this."+name+" = this.Buttons."+name+";");
	}
	removeButton(name){
		try{
			eval("this.Buttons."+name+".destroy();");
		}catch(erd){}
		try{
			eval("delete this.Obj."+name+";");
		}catch(erd){}
		try{
			eval("delete this.Buttons."+name+";");
		}catch(erd){}
	}
	newElement(name){
		eval("this.Elements."+name+" = new Element(this,this.WindowSelf,true);");
		eval("this.Obj."+name+" = this.Elements."+name+";");
		if (UseNoObjClass)
			eval("this."+name+" = this.Elements."+name+";");
	}
	removeElement(name){
		try{
			eval("this.Elements."+name+".destroy();");
		}catch(erd){}
		try{
			eval("delete this.Obj."+name+";");
		}catch(erd){}
		try{
			eval("delete this.Elements."+name+";");
		}catch(erd){}
	}
	newAnchor(name,href,value){
		eval("this.Anchors."+name+" = new Anchor(this,this.WindowSelf,'"+href+"','"+value+"',true);");
		eval("this.Obj."+name+" = this.Anchors."+name+";");
		if (UseNoObjClass)
			eval("this."+name+" = this.Anchors."+name+";");
	}
	removeAnchor(name){
		try{
			eval("this.Anchors."+name+".destroy();");
		}catch(erd){}
		try{
			eval("delete this.Obj."+name+";");
		}catch(erd){}
		try{
			eval("delete this.Anchors."+name+";");
		}catch(erd){}
	}
	newAudio(name,src,mediatype,htmltags){
		eval("this.Audios."+name+" = new Audio(this,this.WindowSelf,'"+src+"','"+mediatype+"','"+htmltags+"',true);");
		eval("this.Obj."+name+" = this.Audios."+name+";");
		if (UseNoObjClass)
			eval("this."+name+" = this.Audios."+name+";");
	}
	removeAudio(name){
		try{
			eval("this.Audios."+name+".destroy();");
		}catch(erd){}
		try{
			eval("delete this.Obj."+name+";");
		}catch(erd){}
		try{
			eval("delete this.Audios."+name+";");
		}catch(erd){}
	}
	newVideo(name,src,mediatype,htmltags){
		eval("this.Videos."+name+" = new Video(this,this.WindowSelf,'"+src+"','"+mediatype+"','"+htmltags+"',true);");
		eval("this.Obj."+name+" = this.Videos."+name+";");
		if (UseNoObjClass)
			eval("this."+name+" = this.Videos."+name+";");
	}
	removeVideo(name){
		try{
			eval("this.Videos."+name+".destroy();");
		}catch(erd){}
		try{
			eval("delete this.Obj."+name+";");
		}catch(erd){}
		try{
			eval("delete this.Videos."+name+";");
		}catch(erd){}
	}
	newImage(name,src){
		eval("this.Images."+name+" = new Image(this,this.WindowSelf,'"+src+"',true);");
		eval("this.Obj."+name+" = this.Images."+name+";");
		if (UseNoObjClass)
			eval("this."+name+" = this.Images."+name+";");
	}
	removeImage(name){
		try{
			eval("this.Images."+name+".destroy();");
		}catch(erd){}
		try{
			eval("delete this.Obj."+name+";");
		}catch(erd){}
		try{
			eval("delete this.Images."+name+";");
		}catch(erd){}
	}
	newInput(name,type,value,htmltags){
		eval("this.Inputs."+name+" = new Input(this,this.WindowSelf,'"+type+"','"+value+"','"+htmltags+"',true);");
		eval("this.Obj."+name+" = this.Inputs."+name+";");
		if (UseNoObjClass)
			eval("this."+name+" = this.Inputs."+name+";");
	}
	removeInput(name){
		try{
			eval("this.Inputs."+name+".destroy();");
		}catch(erd){}
		try{
			eval("delete this.Obj."+name+";");
		}catch(erd){}
		try{
			eval("delete this.Inputs."+name+";");
		}catch(erd){}
	}
	newTextarea(name,cols,rows,value,htmltags){
		eval("this.Textareas."+name+" = new Textarea(this,this.WindowSelf,'"+cols+"','"+rows+"','"+value+"','"+htmltags+"',true);");
		eval("this.Obj."+name+" = this.Textareas."+name+";");
		if (UseNoObjClass)
			eval("this."+name+" = this.Textareas."+name+";");
	}
	removeTextarea(name){
		try{
			eval("this.Textareas."+name+".destroy();");
		}catch(erd){}
		try{
			eval("delete this.Obj."+name+";");
		}catch(erd){}
		try{
			eval("delete this.Textareas."+name+";");
		}catch(erd){}
	}
	newIframe(name,src,htmltags){
		eval("this.Iframes."+name+" = new Iframe(this,this.WindowSelf,'"+src+"','"+htmltags+"',true);");
		eval("this.Obj."+name+" = this.Iframes."+name+";");
		if (UseNoObjClass)
			eval("this."+name+" = this.Iframes."+name+";");
	}
	removeIframe(name){
		try{
			eval("this.Iframes."+name+".destroy();");
		}catch(erd){}
		try{
			eval("delete this.Obj."+name+";");
		}catch(erd){}
		try{
			eval("delete this.Iframes."+name+";");
		}catch(erd){}
	}
	destroyElement(){
		try{
			for(var x in this.Obj){
				try{
					x.destroy();
				}catch(erd){}
			}
			delete this.Buttons;
			delete this.Elements;
			delete this.Anchors;
			delete this.Audios;
			delete this.Videos;
			delete this.Images;
			delete this.Inputs;
			delete this.Textareas;
			delete this.Iframes;
		}catch(erd){}
		try{
			super.destroy();
		}catch(erd){}
	}
	destroy(){
		try{
			this.destroyElement();
		}catch(erd){}
	}
}
function getOffsetTop( elem ){
    var offsetTop = 0;
    do {
      if ( !isNaN( elem.offsetTop ) )
      {
          offsetTop += elem.offsetTop;
      }
    } while( elem = elem.offsetParent );
    return offsetTop;
}

function getCoords(elem) { // crossbrowser version
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
}

function setMenuCan(){
	MenuCan = false;
	var wait = window.setTimeout(function(){MenuCan = true;},450);
}
class Menu extends ElObj{
	constructor(name,ParentSelf,WindowSelf,Lvl,control){
		super(ParentSelf,WindowSelf,true);
		this.ObjType = "Menu";
		this.Lvl = Lvl;
		this.Lvl++;
		this.openMenus();
		if (control){
			this.Control = true;
	//		this.Box = new ElObj(this.WindowSelf.Data.Self,this.WindowSelf,true);
			this.Box = new ElObj(this.WindowSelf.WinMenuDataArea.Self,this.WindowSelf,true);
			this.Box.Edit.setToObj(this.Box.Id+"D",WindowSelf);
			eval("this.Box.Objects."+this.Box.Id+"D.Edit.cssClass('WindowMenuBoxSet');");
			this.Box.Edit.cssClass('WindowMenuBox WindowMenuBoxCustom');
			this.Box.Id = this.Box.Id+"D";
			this.Edit.setCode("ToogleMenu('"+this.Id+"','"+this.Box.Id+"');setMenuCan();");
			eval("MenusTree."+this.Id+" = '"+this.Box.Id+"';");
			eval("MenusTreeL."+this.Id+" = '"+this.Lvl+"';");
			if (UseIndexSystem){
				this.Box.Edit.setIndexSystem(this.Box.Id);
				this.Edit.setIndexSystem(this.Box.Id);
			}
		}
		else
			this.Control = false;
		if (this.Lvl == 1)
			this.Edit.cssClass('WindowTaskBarMenuItem WindowTaskBarMenuItemCustom');
		else
			this.Edit.cssClass('WindowMenuItem WindowMenuItemCustom');
		this.Name = name;
		this.Edit.writeIn(this.Name);
		this.Items = {};
		this.Menus = {};
		this.Separators = {};
		this.SeparatorsCount = 0;
		this.Tick = false;
		this.SwitchGroup = undefined;
		this.Disabled = false;
		self.closeMenus();
	//	var wait = window.setTimeout(this.closeMenus,140);
	}
	setEnabled(){
		if (this.Control)
			return undefined;
		this.Disabled = false;
		if (GtE(this.Id).style.color != this.DisabledColor && (GtE(this.Id).style.color))
			this.NormalColor = GtE(this.Id).style.color;
		if (!this.NormalColor)
			return false;
		GtE(this.Id).style.color = this.NormalColor;
		var DelPos = DisabledMenus.indexOf(this.Id);
		if (DelPos != -1)
			DisabledMenus.splice(DelPos,1);		
		return true;
	}
	setDisabled(){
		this.Disabled = true;
		if (GtE(this.Id).style.color != this.DisabledColor && (GtE(this.Id).style.color))
			this.NormalColor = GtE(this.Id).style.color;
		GtE(this.Id).style.color = this.DisabledColor;	
		if (DisabledMenus.indexOf(this.Id) == -1)
			DisabledMenus.push(this.Id);
		return true;		
	}
	getTick(){
		if (this.Tick)
			return true;
		else
			return false;
	}
	setTick(){
			if (this.Control)
				return undefined;
			if (this.Tick){
				this.Tick = false;
				var data = GWriteUnConvert(GtE(this.Id).textContent);
				this.Edit.writeIn(GWriteConvert(data.slice(2)));
				GtE(this.Id).style.marginLeft = "2%";
			}
			else{
				this.Tick = true;
				this.Edit.writeIn("&#10004 "+GWriteConvert(GWriteUnConvert(GtE(this.Id).textContent)));
				GtE(this.Id).style.marginLeft = "-8%";				
			}
	}
	setTicked(bool){
			if (this.Control)
				return undefined;
			if (!bool){
				this.Tick = false;
				var data = GWriteUnConvert(GtE(this.Id).textContent);
				this.Edit.writeIn(GWriteConvert(data.slice(2)));
				GtE(this.Id).style.marginLeft = "2%";
			}
			else{
				this.Tick = true;
				this.Edit.writeIn("&#10004 "+GWriteConvert(GWriteUnConvert(GtE(this.Id).textContent)));
				GtE(this.Id).style.marginLeft = "-8%";				
			}
	}
	setTickData(){
		if (this.Control)
			return undefined;
		this.Tick = true;
		this.Edit.writeIn("&#10004 "+GWriteConvert(GWriteUnConvert(GtE(this.Id).textContent)));
		GtE(this.Id).style.marginLeft = "-8%";				
	}
	getTickData(){
		if (this.Control)
			return undefined;
		if (this.Tick){
			this.Tick = false;
			var data = GWriteUnConvert(GtE(this.Id).textContent);
			this.Edit.writeIn(GWriteConvert(data.slice(2)));
			GtE(this.Id).style.marginLeft = "2%";
		}
	}
	setSwitch(){
		if ((this.Control) || (!eval("MenuSwitchs."+this.ParentSelf.Id)) || (!eval("MenuSwitchs."+this.ParentSelf.Id+"."+this.SwitchGroup+".ActualSwitch")) || (eval("MenuSwitchs."+this.ParentSelf.Id+"."+this.SwitchGroup+".ActualSwitch") == this.Id))
			return undefined
		var data = GWriteUnConvert(GtE(eval("MenuSwitchs."+this.ParentSelf.Id+"."+this.SwitchGroup+".ActualSwitch")).textContent);
		GtE(eval("MenuSwitchs."+this.ParentSelf.Id+"."+this.SwitchGroup+".ActualSwitch")).innerHTML = GWriteConvert(data.slice(2));
		GtE(eval("MenuSwitchs."+this.ParentSelf.Id+"."+this.SwitchGroup+".ActualSwitch")).style.marginLeft = "2%";
		this.Edit.writeIn("● "+GWriteConvert(GWriteUnConvert(GtE(this.Id).textContent)));
		GtE(this.Id).style.marginLeft = "-6%";
		eval("MenuSwitchs."+this.ParentSelf.Id+"."+this.SwitchGroup+".ActualSwitch = this.Id");
	}
	addSwitch(name){
		if (!name)
			return undefined;
		var SwitchIt = false;
		if (!eval("MenuSwitchs."+this.ParentSelf.Id)){
			eval("MenuSwitchs."+this.ParentSelf.Id+" = {};");
			SwitchIt = true;
		}			
		if (!eval("MenuSwitchs."+this.ParentSelf.Id+"."+name)){
			eval("MenuSwitchs."+this.ParentSelf.Id+"."+name+" = {};");
			eval("MenuSwitchs."+this.ParentSelf.Id+"."+name+".ActualSwitch = this.Id");
			SwitchIt = true;
		}
		eval("this.SwitchGroup = '"+name+"';");
		if (SwitchIt){
			this.Edit.writeIn("● "+GWriteConvert(GWriteUnConvert(GtE(this.Id).textContent)));
			GtE(this.Id).style.marginLeft = "-6%";
			eval("MenuSwitchs."+this.ParentSelf.Id+"."+name+".ActualSwitch = this.Id");
		}
	}
	addSeparator(name){
		if ((!name) || (!this.Control))
			return undefined;
		this.openMenus();
		eval("this.Separators."+name+" = new ElObj(this.Box,this.WindowSelf,false);");
		this.Box.writeInAdd("<hr id='"+eval("this.Separators."+name+".Id")+"'>");
		self.closeMenus();
	}
	removeSeparator(name){
		if ((!name) || (!this.Control))
			return undefined;
		this.openMenus();
		try{
			eval("this.Separators."+name+".destroy();");
		}catch(erd){}
		eval("delete this.Separators."+name+";");
		self.closeMenus();
	}
	newItem(name){
		if (!name)
			return undefined;
		this.openMenus();
		eval("this.Items."+name+" = new Menu('"+name+"',this.Box,this.WindowSelf,"+this.Lvl+",false);");
		eval("MenusTreeAlt."+eval("this.Items."+name+".Id")+" = 'none';");
		if (UseNoObjClass)
			eval("this."+name+" = this.Items."+name+";");
		eval("this.Obj."+name+" = this.Items."+name+";");
		self.closeMenus();
	//	var wait = window.setTimeout(this.closeMenus,140);
	}
	removeItem(name){
		if (!name)
			return undefined;
		this.openMenus();
		try{
			eval("delete MenusTreeAlt."+eval("this.Items."+name+".Id")+";");
		}catch(erd){}
		try{
			eval("this.Items."+name+".destroy();");
		}catch(erd){}		
		try{
			eval("delete this.Items."+name+";");
		}catch(erd){}
		if (UseNoObjClass){
			try{
				eval("delete this."+name+";");
			}
			catch(erd){}
		}
		try{
			eval("delete this.Obj."+name+";");
		}catch(erd){}
		self.closeMenus();		
	}
	newMenuNext(name){
		if (!name)
			return undefined;
		this.openMenus();
		eval("this.Menus."+name+" = new Menu('"+name+"',this.Box,this.WindowSelf,"+this.Lvl+",true);");
		eval("this.Menus."+name+".Edit.writeIn('<div id=\""+eval("this.Menus."+name+".Id")+"C\">"+eval("this.Menus."+name+".Name")+"</div><div id=\""+eval("this.Menus."+name+".Id")+"A\" class=\"NextArrow\">►</div>');");
		eval("this.Menus."+name+".Edit.writeIn = this.Menus."+name+".Edit.writeInSpecial");
		eval("this.Menus."+name+".Edit.writeInAdd = this.Menus."+name+".Edit.writeInAddSpecial");
		eval("this.Menus."+name+".writeIn = this.Menus."+name+".Edit.writeInSpecial");
		eval("this.Menus."+name+".writeInAdd = this.Menus."+name+".Edit.writeInAddSpecial");
		eval("MenusTreeAlt."+eval("this.Menus."+name+".Id")+"C = '"+eval("this.Menus."+name+".Box.Id")+"';");
		if (UseNoObjClass)
			eval("this."+name+" = this.Menus."+name+";");
		eval("this.Obj."+name+" = this.Menus."+name+";");
		var I = eval("this.Menus."+name+".Box.Id");
		var D = eval("this.Menus."+name+".Id");
		I = I.slice(0,parseInt(I.length,10)-1);
		var asdf = window.setTimeout(function(self){
		self.openMenus();
		var H = GtE(GtE(GtE(D).parentNode.id).parentNode.id).offsetTop;
		var B = GtE(D).offsetHeight;
		var T = GtE(D).offsetTop;
		GtE(I).style.top = (T+H-(B*1.2))+"px";
		self.closeMenus();
		},100,this);
	}
	removeMenuNext(name){
		if (!name)
			return undefined;
		this.openMenus();
		try{
			eval("delete MenusTreeAlt."+eval("this.Menus."+name+".Id")+"C;");
		}catch(erd){}
		try{
			eval("this.Menus."+name+".destroy();");
		}catch(erd){}		
		try{
			eval("delete this.Menus."+name+";");
		}catch(erd){}
		if (UseNoObjClass){
			try{
				eval("delete this."+name+";");
			}
			catch(erd){}
		}
		try{
			eval("delete this.Obj."+name+";");
		}catch(erd){}
		self.closeMenus();		
	}
	openMenus(){
		for (var i = 0; i < MenusTree.length; i++)
			MenuAlign(this.Id, GtE(MenusTree[i].slice(0,parseInt(MenusTree[i].length,10)-1)), true);
		return "done";
	}
	closeMenus(){
		for (var i = 0; i < MenusTree.length; i++)
			GtE(MenusTree[i].slice(0,parseInt(MenusTree[i].length,10)-1)).style.display = "none";
		return "done";
	}
	addShortCut(tag){
		if (!tag)
			return undefined;
		this.openMenus();
		if (this.Control){
			var L = GtE(this.Id).offsetLeft;
			var ID = this.Box.Id;
			ID = ID.slice(0,parseInt(ID.length,10)-1);
			GtE(ID).style.marginLeft = L+"px";	
		}
		ElObjAddShortCut(this.Id,tag);
		var wait = window.setTimeout(function(self){
		self.closeMenus();
		},100,this);		
	}
	removeShortCut(){
		this.openMenus();
		ElObjRemoveShortCut(this.Id);	
		var wait = window.setTimeout(function(self){
			self.closeMenus();
		},100,this);
		return "done";
	}
	destroyMenu(){
		try{
			for(var x in this.Obj){
				try{
					x.destroy();
				}catch(erd){}
			}
			delete this.Items;
			delete this.Menus;
			delete this.Separators;
		}catch(erd){}
		try{
			this.Box.destroy();
			this.Box = null;
		}catch(erd){}
		try{
			eval("delete MenusTree."+this.Id+";");
		}catch(erd){}
		try{
			eval("delete MenusTreeL."+this.Id+";");
		}catch(erd){}
		try{
			eval("delete MainMenus."+this.Id+";");
		}catch(erd){}
		try{
			super.destroy();
		}catch(erd){}
	}
	destroy(){
		try{
			this.destroyMenu();
		}catch(erd){}
	}
}
function ElObjAddShortCut(id,tag){
	if ((!tag) || (!id))
		return undefined;
	try{
		var preTag = " <rShift + "+tag+"> ";
		preTag = encodeURI(preTag);
		GtE(id+"C").innerHTML += preTag;
		eval("ResShortCutsOn."+id+"C = '"+tag+"';");
		eval("ResShortCutsOnOldTags."+id+" = '"+preTag+"';");
	}
	catch(erd){
		try{
			var preTag = "\u00A0\u00A0(rShift+"+tag+") \u00A0";
			preTag = GWriteConvert(preTag);
			GtE(id).innerHTML += preTag;		
			eval("ResShortCutsOn."+id+" = '"+tag+"';");
			eval("ResShortCutsOnOldTags."+id+" = '"+preTag+"';");
		}
		catch(erd){
		}
	}
	return "done";
}

function ElObjRemoveShortCut(id){
	if (!id)
		return undefined;
	try{
		var OldV = GtE(id).innerHTML;
		var OldT = eval("ResShortCutsOnOldTags."+id);
		GtE(id).innerHTML = OldV.replace(OldT, "");
	}catch(erd){}
	try{
		eval("delete ResShortCutsOn."+id+"C;");
	}catch(erd){}
	try{
		eval("delete ResShortCutsOn."+id+";");
	}catch(erd){}
	try{
		eval("delete ResShortCutsOnOldTags."+id+";");
	}catch(erd){}
}

function ElObjAddAlt(id){
	if (!id)
		return undefined;
	Alt.push(id);
	return "done";
}

function ElObjRemoveAlt(id){
	if (!id)
		return undefined;
	var AltIdx = Alt.indexOf(id);
	if (AltIdx > -1)
		Alt.splice(AltIdx, 1);
	return "done";
}

function MenuAlign(StartId, MenuBoxId, IsMain){
	try{
		GtE(MenuBoxId).style.display = "block";
		if (GtE(StartId).style.display != "none" && GtE(StartId).style.visibility != "hidden"){
	/*		var DL = GtE(IconDesktops[0].Id).offsetWidth+GtE(IconDesktops[0].Id).getBoundingClientRect().left;
			var DT = GtE(IconDesktops[0].Id).offsetHeight+GtE(IconDesktops[0].Id).getBoundingClientRect().top;
			var EL = GtE(StartId).getBoundingClientRect().left;
			var ET = GtE(StartId).getBoundingClientRect().top;
			var L = GtE(StartId).offsetLeft;
			var T = 0;
			console.log("DL: "+DL+"; DT: "+DT+"; EL: "+EL+"; ET: "+ET+"; ofh: "+GtE(MenuBoxId).offsetHeight);
			if (!IsMain){
				L = L+GtE(StartId).offsetWidth;
				T = T+GtE(StartId).offsetTop;
				EL = EL+GtE(StartId).offsetWidth;
				ET = GtE(StartId).getBoundingClientRect().top;
			}
			if (EL+GtE(MenuBoxId).offsetWidth > DL){
				L = DL-GtE(MenuBoxId).offsetWidth;
				if (L < 0)
					L = 0;
			}
			if (ET+GtE(MenuBoxId).offsetHeight > DT){
				if (!IsMain)
					T = DT-(GtE(MenuBoxId).offsetHeight+ET);
				else{
					var TS = GtE(IconDesktops[0].Id).getBoundingClientRect().top-GtE(StartId).getBoundingClientRect().top;
					if (TS >= GtE(MenuBoxId).offsetHeight)
						T = 0-(GtE(MenuBoxId).offsetHeight+GtE(StartId).offsetHeight);
					else if 
				}
		//		if (T < 0)
			//		T = 0;
			}			
			GtE(MenuBoxId).style.marginLeft = L+"px";
			GtE(MenuBoxId).style.marginTop = T+"px";
			
			*/
			
			var MP = MenuAlignPlacement(StartId, MenuBoxId, IconDesktops[0].Id, IsMain);
			if (MP[0] == null || MP[1] == null){
				if (IsMain){
					GtE(MenuBoxId).style.marginLeft = (GtE(StartId).getBoundingClientRect().left)+"px";
					GtE(MenuBoxId).style.marginTop = "0px";
				}
				else{
					GtE(MenuBoxId).style.marginLeft = (GtE(StartId).getBoundingClientRect().left+GtE(StartId).offsetWidth)+"px";
					GtE(MenuBoxId).style.marginTop = (GtE(StartId).getBoundingClientRect().top)+"px";					
				}
			}
			else{
				GtE(MenuBoxId).style.marginLeft = MP[0]+"px";
				GtE(MenuBoxId).style.marginTop = MP[1]+"px";				
			}
		}
	}catch(erd){}
}

function MenuAlignPlacement(menu, menubox, desktop, ismain){
	var R = [null, null];
	try{
		var MT = GtE(menu).getBoundingClientRect().top;
		var ML = GtE(menu).getBoundingClientRect().left;
		var MH = GtE(menu).offsetHeight;
		var MW = GtE(menu).offsetWidth;
		
		var MCL = GtE(menu).offsetLeft; 
		var MCT = GtE(menu).offsetTop;
		
		//calculate addition for window title size
		if (ismain){
			MT = GtE(menu).parentNode.getBoundingClientRect().top;
			MH = GtE(menu).parentNode.offsetHeight;
			MCT = GtE(menu).parentNode.offsetTop;
		}
		else{
			//calculate for menubox size
			ML = GtE(menu).parentNode.getBoundingClientRect().left;
			MW = GtE(menu).parentNode.offsetWidth;
			MCL = GtE(menu).parentNode.offsetLeft;
		}
		MCT = MCT;
		MCL = MCL;
		
		var BT = GtE(menubox).getBoundingClientRect().top;
		var BL = GtE(menubox).getBoundingClientRect().left;
		var BH = GtE(menubox).offsetHeight;
		var BW = GtE(menubox).offsetWidth;
		
		var DT = GtE(desktop).getBoundingClientRect().top;
		var DL = GtE(desktop).getBoundingClientRect().left;
		var DH = GtE(desktop).offsetHeight;
		var DW = GtE(desktop).offsetWidth;
		
		var OL = ML;
		var OT = MT;
		
		var SH = MH;
		var SW = 0;
		
		var TH = 0;
		var TW = MW;
		
		if (!ismain){
			OL += MW;
			SH = 0;
			SW = MW;
			TH = MH;
			TW = 0;
		}	
		
		//do some size adjustments
		DH = DH-Math.min(DH/10,WPercentToWPixel(4,"height"));
		MCL = MCL-4;
		if (!ismain)
			TH = TH+2;
		else
			TW = MW+4;

		if (OL+BW+SW > DL+DW){
			if (OL-BW > DL)
				OL = OL-BW;
			else{
				if (BW <= DW)
					OL = DL+DW-BW;
				else
					OL = DL;
//				if (OT+BH+SH > DT+DH){
				if (OT+BH > DT+DH){
					if (OT-BH > DT)
						OT = OT-BH-SH;
					else{
						if (BH <= DH)
							OT = DT+DH-BH;
						else
							OT = DT;
					}
				}
				else
					OT = OT+TH;
			}
		}
		else
			OL = OL+SW;
		
//		if (OT+BH+SH > DT+DH){
		if (OT+BH > DT+DH){
			if (OT-BH > DT)
				OT = OT-BH-SH;
			else{
				if (BH <= DH)
					OT = DT+DH-BH;
				else
					OT = DT;
				if (OL+BW+TW > DL+DW){
					if (OL-BW > DL)
						OL = OL-BW;
					else{
						if (BW <= DW)
							OL = DL+DW-BW;
						else
							OL = DL;
					}
				}
				else
					OL = OL+TW;
			}
		}
		else
			OT = OT;
		
		if (OL+BW > DL+DW || OL < DL)
			OL = DL;
		if (OT+BH > DT+DH || OT < DT)
			OT = DT;
		R[0] = OL-ML+MCL;
		R[1] = OT-MT+MCT;
	}catch(erd){}
	return R;
}

function openMenus(){
	for (var i in MenusTree){
		try{
			GtE(MenusTree[i].slice(0,parseInt(MenusTree[i].length,10)-1)).style.display = "block";
		}catch(erd){}
	}
	return "done";
}
function closeMenus(){
	for (var i in MenusTree){
		try{
			GtE(MenusTree[i].slice(0,parseInt(MenusTree[i].length,10)-1)).style.display = "none";
		}catch(erd){}
	}
	return "done";
}

function openMenusCan(){
	if (!MenuCan)
		return false;
	for (var i in MenusTree){
		try{
			GtE(MenusTree[i].slice(0,parseInt(MenusTree[i].length,10)-1)).style.display = "block";
		}catch(erd){}
	}
	return "done";
}
function closeMenusCan(){
	if (!MenuCan)
		return false;
	//for (var i in MenusTree){
	for (var i = 0; i < MenusTree.length; i++){
		var founded = false;
		for (var j in MainMenus){
			try{
				if (i == j){
					founded = true;
					GtE(i).style.color = MenuNextCloseColorMain;
					break;
				}
			}catch(erd){}
		}
		if (!founded){
			GtE(i).style.color = MenuNextCloseColor;
			GtE(i).style.backgroundColor = GtE(MenusTree[i].slice(0,parseInt(MenusTree[i].length,10)-1)).style.backgroundColor;
		}
		GtE(MenusTree[i].slice(0,parseInt(MenusTree[i].length,10)-1)).style.display = "none";
	}
	return "done";
}

function MenusAlt(){
	ToAlt = [];
/*	for (var q = 0; q < ObjAlt.length;q++){
		if ((GtE(ObjAlt[q]).style.display != "none") && (GtE(ObjAlt[q]).style.visibility != "hidden")) 
			ToAlt.push(ObjAlt[q]);
	}*/
	var AddAlt = [];
	for (var v in MainMenus){
		try{
			ToAlt.push(v);
		}catch(erd){}
	}
	for (var w in MainMenus){
		try{
			var BoxM = MainMenus[w];
			BoxM = BoxM.slice(0,parseInt(BoxM.length,10)-1);
			if (GtE(BoxM).style.display != "none"){
				ToAlt.push(w);
				var AddM = GtE(MainMenus[w]).childNodes;
				for (var q = 0; q < AddM.length; q++){
					if (GtE(AddM[q].id).style.display != "none"){
						var NoAltM = false;
						//for (var s in MenusTreeAlt){
						for (var s = 0; s < MenusTreeAlt.length; s++){
							if (AddM[q].id == s){
								NoAltM = true;
								break;
							}
						}
						if (NoAltM)
							AddAlt.push(AddM[q].id);
						else{
						//	for (var g in MenusTreeAlt){
							for (var g = 0; q < MenusTreeAlt.length; q++){
								if (AddM[q].id+"C" == g){
									NoAltM = true;
									break;
								}
							}
							if (NoAltM)
								AddAlt.push(AddM[q].id+"C");
						}
					}
				}
			}
		}catch(erd){}
	}
	for (var i in MenusTreeAlt){
		try{
			var Box = MenusTreeAlt[i];
			if (Box != "none"){
				Box = Box.slice(0,parseInt(Box.length,10)-1);
				if (GtE(Box).style.display != "none"){
					ToAlt.push(i);
					var Add = GtE(MenusTreeAlt[i]).childNodes;
					for (var j = 0; j < Add.length; j++){
						if (GtE(Add[j].id).style.display != "none"){
							var NoAlt = false;
				//			for (var d in MenusTreeAlt){
							for (var d = 0; d < MenusTreeAlt.length; d++){
								if (Add[j].id == d){
									NoAlt = true;
									break;
								}
							}
							if (NoAlt)
								AddAlt.push(Add[j].id);
							else{
						//		for (var c in MenusTreeAlt){
								for (var c = 0; c < MenusTreeAlt.length; c++){
									if (Add[j].id+"C" == c){
										NoAlt = true;
										break;
									}
								}
								if (NoAlt)
									AddAlt.push(Add[j].id+"C");
							}
						}
					}
				}
			}
		}catch(erd){}
	}
	var res = ToAlt.concat(AddAlt,Alt);
	ResAlt = [];
	ResAltId = [];
	ResAltOn = {};
	for (var e = 0; e < res.length; e++){
		if (ResAltId.indexOf(res[e]) == -1){
			try{
				if (GtE(res[e]).offsetHeight == 0)
					throw undefined;
				ResAltId.push(res[e]);
				ResAlt.push(GWriteUnConvert(GtE(res[e]).textContent));
			}catch(erd){
				
			}
		}
	}
	var Chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
    var CharsNext = [];
	var AddNextChars = [];
	for (var t = 0; t < Chars.length;t++)
		AddNextChars.push(Chars[t]);
	for (var i = 0; i < ResAltId.length;i++){
		var founded = false;
		var resChar = "";
		var wordBracket1 = ResAlt[i].search("{");
		var wordBracket2 = ResAlt[i].search("}");
		if (wordBracket1 != -1 && wordBracket2 != -1 && wordBracket1 < wordBracket2){
			var Remove = ResAlt[i].substring(parseInt(wordBracket1,10)+1, wordBracket2)
			ResAlt[i] = ResAlt[i].replace(" {"+Remove+"}","");
		}
		if (AltCan){
			for (var j = 0; j < ResAlt[i].length;j++){
				var pos = Chars.indexOf(ResAlt[i][j].toLowerCase());
				if (pos != -1){
					founded = true;
					Chars.splice(pos,1);
					GtE(ResAltId[i]).innerHTML =  GWriteConvert(ResAlt[i]).replace(ResAlt[i][j],"<span style='text-decoration:underline'>"+ResAlt[i][j]+"</span>");
					eval("ResAltOn."+ResAltId[i]+" = '"+ResAlt[i][j]+"';");						
					break;
				}
			}
			if (!founded){
				if (Chars.length == 0){
					if (CharsNext.length == 0){
						for (var b = 0; b < AddNextChars.length;b++)
							CharsNext.push(AddNextChars[b]+AddNextChars[b][0]);
						AddNextChars = new Array();
						for (var r = 0; r < CharsNext.length;r++)
							AddNextChars.push(CharsNext[r]);
					}
					GtE(ResAltId[i]).innerHTML =  GWriteConvert(ResAlt[i])+" {<span style='text-decoration:underline'>"+CharsNext[0]+"</span>}";
					eval("ResAltOn."+ResAltId[i]+" = '"+CharsNext[0]+"';");					
					CharsNext.splice(0,1);
				}
				else{
					GtE(ResAltId[i]).innerHTML =  GWriteConvert(ResAlt[i])+" {<span style='text-decoration:underline'>"+Chars[0]+"</span>}";
					eval("ResAltOn."+ResAltId[i]+" = '"+Chars[0]+"';");	
					Chars.splice(0,1);			
				}
			}
		}
		else
			GtE(ResAltId[i]).innerHTML =  GWriteConvert(ResAlt[i]);
	}
	return "done";
}
/*
function WindowSystemPos(wSelf){
	console.log(wSelf);
	wSelf.Edit.setSize(WSPX+"%",WSPY+"%",WSL+"%",WST+"%");
	WSPX = parseInt(WSPX,10)+parseInt((WSPXS*WSDIM),10);
	WSPY = parseInt(WSPY,10)+parseInt((WSPYS*WSDIM),10);
	if (parseInt(WSPX,10)+parseInt(WSL,10) >= 100){
		if (WSJUMP)
			WSPX = 0;
		else
			WSPX = WSPXS;
	}
	if (parseInt(WSPY,10)+parseInt(WST,10) >= 100){
		if (!WSJUMP)
			WSPY = 0;
		else
			WSPY = WSPYS;		
	}
	if (WSJUMP)
		WSJUMP = false;
	else
		WSJUMP = true;
}*/

function WindowSystemPos(wSelf){
	if (wSelf.WSPX > 0 || wSelf.WSPY > 0)
		wSelf.Edit.setSize(wSelf.WSPX+"%",wSelf.WSPY+"%",wSelf.WSL+"%",wSelf.WST+"%");	
	else{
		WSPX = parseInt(WSPX,10)+parseInt((WSPXS*WSDIM),10);
		WSPY = parseInt(WSPY,10)+parseInt((WSPYS*WSDIM),10);
		if (parseInt(WSPX,10)+parseInt(wSelf.WSL,10) >= 100){
			if (WSJUMP)
				WSPX = 0;
			else
				WSPX = WSPXS;
		}
		if (parseInt(WSPY,10)+parseInt(wSelf.WST,10) >= 100){
			if (!WSJUMP)
				WSPY = 0;
			else
				WSPY = WSPYS;		
		}
		if (WSJUMP)
			WSJUMP = false;
		else
			WSJUMP = true;
		wSelf.Edit.setSize(WSPX+"%",WSPY+"%",wSelf.WSL+"%",wSelf.WST+"%");
	}
}

class ShowGridCanvas extends ElObj{
	constructor(ParentSelf,WindowSelf,createBool){
		super();
	}
}

class Window extends ObjectWork{
	constructor(name,ParentElementId){
		super();
		this.ObjType = "Window";
		this.Name = "NewApp";
		if (name)
			this.Name = name;
		this.Grid = new Grid(ParentElementId);
		this.Grid.create();
		this.Id = "e"+avc();
		GtE(this.Grid.Id).innerHTML += '<div id="'+this.Id+'" data-inf="ObjectWorkData.'+this.ObjectWorkName+'"></div>';
		var self = this;
		this.WinHand = new ElObj(this.Grid,this.Grid,true);
		this.WinHand.Edit.cssClass("WinHand");
		this.WinMenuDataArea = new Element(this,this,true);
		this.WinMenuDataArea.Edit.cssClass("WinMenuDataArea");
		this.DoNotUseMoveTrayOverride = false;
	//	GtE(this.Id).onclick = function(evt){eval("var setup="+self.Edit.getObject("code")+"(evt,this,self)")};
		this.TitleBar = new ElObj(this,this,true);
		this.Title = new ElObj(this.TitleBar.Self,this,true);
		this.TitleInner = new ElObj(this.Title.Self,this,true);
		this.WindowIconIn = new ElObj(this.Title.Self,this,true);
		this.TitleButtons = new ElObj(this.TitleBar.Self,this,true);
		this.TitleMenus = new ElObj(this.TitleBar.Self,this,true);
		this.StatusBar = new ElObj(this,this,true);
		this.Data = new Element(this,this,true);
		this.Data.Edit.setCode("closeMenusCan();");
		this.CanvasWritter =  new Element(this.Data.Self,this,true);
		this.CanvasArrea = new Element(this.Data.Self,this,true);
		
		this.NoBarMinimizeType = 0;//0 - default, 1 - override - minimize window always on its current position, 2 - override - minimize window always to the bottom
		
		this.WSPX = 0;
		this.WSPY = 0;
		this.WSL = WSL;
		this.WST = WST;
		
		//styly
		this.Edit.cssClass("WindowMain windowobj activeobj windowobjactive");
		this.TitleBar.Edit.cssClass("WindowTitleBar titlebar activeobj titlebaractive");
		this.Title.Edit.cssClass("WindowTitle titlebartext activeobj titlebartextactive");
		this.WindowIconIn.Edit.cssClass("WindowIconIn activeobj WindowIconInactive");
		this.TitleInner.Edit.cssClass("WindowTitleInnerNew windowtitleobj activeobj windowtitleobjactive");
		this.TitleButtons.Edit.cssClass("WindowTitleButtonsNew titlebarcontrols activeobj titlebarcontrolsactive");
		this.TitleMenus.Edit.cssClass("WindowTitleMenus titlemenus activeobj titlemenusactive");
		this.StatusBar.Edit.cssClass("WindowStatusBar statusbar activeobj statusbaractive");
		this.Data.Edit.cssClass("WindowData WindowDataTitleBarStatusBar windowdata activeobj windowdataactive");
		this.CanvasWritter.Edit.cssClass("WindowCanvasArrea");
		this.CanvasArrea.Edit.cssClass("WindowSubCanvasArrea");
		
		/*
		this.Edit.cssClass("WindowMain");
		this.TitleBar.Edit.cssClass("WindowTitleBar");
		this.Title.Edit.cssClass("WindowTitle");
		this.WindowIconIn.Edit.cssClass("WindowIconIn");
		this.TitleInner.Edit.cssClass("WindowTitleInnerNew");
		this.TitleButtons.Edit.cssClass("WindowTitleButtonsNew");
		this.TitleMenus.Edit.cssClass("WindowTitleMenus");
		this.StatusBar.Edit.cssClass("WindowStatusBar");
		this.Data.Edit.cssClass("WindowData");
		this.CanvasWritter.Edit.cssClass("WindowCanvasArrea");
		this.CanvasArrea.Edit.cssClass("WindowSubCanvasArrea");
		
		*/
		
		this.CanvasArrea.Edit.hide(true);
		this.CanvasWritter.Edit.hide(true);
		
		//umistovani okna systemem
		WindowSystemPos(this);
		
		//DG JQ InnerCode (nepouzivane kvuli systemu DRDP - mensi systemove naroky, 100% funkcnost)
		
		/*
		$ ('#'+this.Id).on('mousedown',function(event){window.location.href ='#'+$(this).prop('id');});
		$ ('#'+MainSysTray).on('mousedown',function(event){window.location.href ='#'+MainSysTray;});
		$('#'+this.TitleButtons.Id).on('mousedown',function(event){event.stopPropagation();});
		$('#'+this.TitleBar.Id).on('mousedown',DGS);
		*/
		
		//make window resizable
		var WID = this.Id;
		//GtE(this.Id).addEventListener('mousemove',function(e){SR(WID,"resizeDefElemClass","window");});
	//	RegisterMove(this.Id);
		this.Title.Edit.setCodeAdd("SR('"+this.Id+"','resizeDefElemClass','window');");
		this.Data.Edit.setCodeAdd("SR('"+this.Id+"','resizeDefElemClass','window');");
		this.WindowIconIn.Edit.setCodeAdd("SR('"+this.Id+"','resizeDefElemClass','window');");
		this.TitleBar.Edit.setCodeAdd("SR('"+this.Id+"','resizeDefElemClass','window');");
		this.TitleBar.Edit.setCodeDbl("TBARMax('"+this.Id+"');");
		this.StatusBar.Edit.setCodeAdd("SR('"+this.Id+"','resizeDefElemClass','window');");
		this.TitleButtons.Edit.setCodeAdd("SR('"+this.Id+"','resizeDefElemClass','window');");
		this.TitleMenus.Edit.setCodeAdd("SR('"+this.Id+"','resizeDefElemClass','window');");
		this.ResizeObj = SR(this.Id,"resizeDefElemClass","window");
		
		//work
		this.TitleInner.Edit.writeIn(this.Name);
		
		if (UseMOVE)
			this.Title.Edit.setMove(true,this.Id);
		if (UseIndexSystem){
		//	this.Edit.setIndexSystem(this.Id);
			this.Title.Edit.setIndexSystem(this.Id);
			this.WindowIconIn.Edit.setIndexSystem(this.Id);
			this.TitleBar.Edit.setIndexSystem(this.Id);
			this.StatusBar.Edit.setIndexSystem(this.Id);
			this.TitleButtons.Edit.setIndexSystem(this.Id);
			this.TitleMenus.Edit.setIndexSystem(this.Id);
			this.Data.Edit.setIndexSystem(this.Id);
		}
		
		this.Windows = {};//zde budou uložena okna
		this.Menus = {};//zde budou uložena menu
		this.TitleButtonsObj = {};
		
		this.CloseTitle = new ElObj(this.TitleButtons,this,true);
		this.MaximizeTitle = new ElObj(this.TitleButtons,this,true);
		this.MinimizeTitle = new ElObj(this.TitleButtons,this,true);  
		
	/*	this.CloseTitle = new Button(this.TitleButtons,this,true);
		this.MaximizeTitle = new Button(this.TitleButtons,this,true);
		this.MinimizeTitle = new Button(this.TitleButtons,this,true);  */

		this.CloseTitle.Edit.cssClass("WindowTitleButtonCloseNew");
		this.MaximizeTitle.Edit.cssClass("WindowTitleButtonMaximizeNew");
		this.MinimizeTitle.Edit.cssClass("WindowTitleButtonMinimizeNew");
		
		this.TitleBarSet = true;
		this.TitleSet = true;
		this.StatusBarSet = true;
		this.TitleButtonsSet = true;
		this.TitleMenusSet = true;
		
		//this.CloseTitle.Edit.writeIn("asdf");
		
		SetNewDisplayOfWindows(this.Id);
		
		this.Created = true;
		this.edit();
		this.create();
	}
	create(){
		this.createMove();
	}
	createMove(){
		eval("MoveObj."+this.Id+" = {};");
		eval("MoveObj."+this.Id+".move = false;");
		eval("MoveObj."+this.Id+".moveId = '"+this.Id+"';");
		this.MoveObjCreated = true;
	}
	setTitleSize(bool, call){
		this.TitleSet = bool;
		if (bool){
			GtE(this.Title.Id).style.visibility = "visible";
			if ((this.TitleButtonsSet) && (this.TitleMenusSet)){
				GtE(this.Title.Id).style.width = "30%";
				GtE(this.Title.Id).style.right = "18%";
				if (!call){
					this.setTitleButtons(true, true);
					this.setTitleMenus(true, true);
				}
			}
			else if (this.TitleButtonsSet){
				GtE(this.Title.Id).style.width = "83%";
				GtE(this.Title.Id).style.right = "17%";	
				if (!call)
					this.setTitleButtons(true, true);
			}
			else if (this.TitleMenusSet){
				GtE(this.Title.Id).style.width = "56%";
				GtE(this.Title.Id).style.right = "0.67vw";	
				if (!call)
					this.setTitleMenus(true, true);
			}
			else{
				GtE(this.Title.Id).style.width = "calc(100% - 0.67vw)";
				GtE(this.Title.Id).style.right = "0.67vw";				
			}	
			this.setTitleBar(true, false);
		}
		else
			GtE(this.Title.Id).style.visibility = "hidden";
	}	
	setTitleMenus(bool, call){
		this.TitleMenusSet = bool;
		if (bool){
			GtE(this.TitleMenus.Id).style.visibility = "visible";
			if ((this.TitleButtonsSet) && (this.TitleSet)){
				GtE(this.TitleMenus.Id).style.width = "50%";
				if (!call){
					this.setTitleButtons(true, true);
					this.setTitleSize(true, true);
				}
			}
			else if (this.TitleButtonsSet){
				GtE(this.TitleMenus.Id).style.width = "78%";
				if (!call)
					this.setTitleButtons(true, true);
			}
			else if (this.TitleSet){
				GtE(this.TitleMenus.Id).style.width = "50%";
				if (!call)
					this.setTitleSize(true, true);
			}
			else
				GtE(this.TitleMenus.Id).style.width = "96%";
			this.setTitleBar(true, false);
		}
		else
			GtE(this.TitleMenus.Id).style.visibility = "hidden";
	}		
	setTitleButtons(bool, call){
		this.TitleButtonsSet = bool;
		if (bool){
			GtE(this.TitleButtons.Id).style.visibility = "visible";
			if ((this.TitleSet) && (!call))
				this.setTitleSize(true, true);
			else if ((this.TitleMenusSet) && (!call))
				this.setTitleMenus(true, true);
			this.setTitleBar(true, false);
		}
		else
			GtE(this.TitleButtons.Id).style.visibility = "hidden";
	}	
	setTitleBar(bool, call){
		if (bool)
			GtE(this.TitleBar.Id).style.visibility = "visible";
		else
			GtE(this.TitleBar.Id).style.visibility = "hidden";
		this.TitleBarSet = bool;
		if (!call)
			this.setDataArea(true);
	}	
	setStatusBar(bool, call){
		if (bool)
			GtE(this.StatusBar.Id).style.visibility = "visible";
		else
			GtE(this.StatusBar.Id).style.visibility = "hidden";
		this.StatusBarSet = bool;
		if (!call)
			this.setDataArea(true);
	}
	setDataAreaOnly(bool){
		if (this.TitleBarSet)
			this.setTitleBar(false, true);
		if (this.StatusBarSet)
			this.setStatusBar(false, true);
		GtE(this.Data.Id).style.visibility = "visible";
		this.Data.Edit.addCssClass("WindowDataNoTitleBarNoStatusBarNoBorders");
		this.Data.Edit.removeCssClass("WindowDataNoStatusBar");
		this.Data.Edit.removeCssClass("WindowDataTitleBarStatusBar");
		this.Data.Edit.removeCssClass("WindowDataNoTitleBar");
		this.Data.Edit.removeCssClass("WindowDataNoTitleBarNoStatusBar");		
	}
	setDataArea(call){
		GtE(this.Data.Id).style.visibility = "visible";
		this.Data.Edit.removeCssClass("WindowDataNoTitleBarNoStatusBarNoBorders");
		if ((this.TitleBarSet) && (this.StatusBarSet)){
		//	GtE(this.Data.Id).style.height = "calc(81% - 0.8vw)";
		//	GtE(this.Data.Id).style.top = "18%";
			this.Data.Edit.addCssClass("WindowDataTitleBarStatusBar");
			this.Data.Edit.removeCssClass("WindowDataNoTitleBar");
			this.Data.Edit.removeCssClass("WindowDataNoStatusBar");
			this.Data.Edit.removeCssClass("WindowDataNoTitleBarNoStatusBar");
			if (!call){
				this.setTitleBar(true, true);
				this.setStatusBar(true, true);
			}
		}
		else if (this.TitleBarSet){
//			GtE(this.Data.Id).style.height = "calc(92.5% - 0.8vw";
	//		GtE(this.Data.Id).style.top = "7.5%";	
			this.Data.Edit.addCssClass("WindowDataNoStatusBar");
			this.Data.Edit.removeCssClass("WindowDataNoTitleBar");
			this.Data.Edit.removeCssClass("WindowDataTitleBarStatusBar");
			this.Data.Edit.removeCssClass("WindowDataNoTitleBarNoStatusBar");	
			if (!call)
				this.setTitleBar(true, true);
		}
		else if (this.StatusBarSet){
//			GtE(this.Data.Id).style.height = "calc(88% - 0.6vw)";
//			GtE(this.Data.Id).style.top = "0.6vw";	
			this.Data.Edit.addCssClass("WindowDataNoTitleBar");
			this.Data.Edit.removeCssClass("WindowDataNoStatusBar");
			this.Data.Edit.removeCssClass("WindowDataTitleBarStatusBar");
			this.Data.Edit.removeCssClass("WindowDataNoTitleBarNoStatusBar");
			if (!call)
				this.setStatusBar(true, true);
		}
		else{
//			GtE(this.Data.Id).style.height = "calc(100% - 1.2vw)";
	//		GtE(this.Data.Id).style.top = "0.6vw";		
			this.Data.Edit.addCssClass("WindowDataNoTitleBarNoStatusBar");
			this.Data.Edit.removeCssClass("WindowDataNoStatusBar");
			this.Data.Edit.removeCssClass("WindowDataTitleBarStatusBar");
			this.Data.Edit.removeCssClass("WindowDataNoTitleBar");	
		}	
	}
	newTitleButton(name){
		//DEPRECATED
		//NEW WINDOW UI TITLE MUST BE CLOSED FOR USE THIS METHOD
		
		this.setMinimizeInTitle(false);
		this.setMaximizeInTitle(false);
		this.setCloseInTitle(false);
		this.TitleButtons.Edit.cssClass("WindowTitleButtons");
		
		eval("this.TitleButtonsObj."+name+" = new ElObj(this.TitleButtons.Self,this,true);");
		eval("this.TitleButtonsObj."+name+".Edit.writeIn('"+name+"');");
		eval("this.TitleButtonsObj."+name+".Edit.cssClass('WindowTitleButton');");
		if (UseNoObjClass)
			eval("this."+name+" = this.TitleButtonsObj."+name+";");
	}
	deleteTitleButton(name){
		try{
			eval("this.TitleButtonsObj."+name+".destroy();");
		}catch(erd){}
		try{
			eval("delete this.TitleButtonsObj."+name+";");
		}catch(erd){}
		try{
			if (UseNoObjClass)
				eval("delete this."+name+";");
		}catch(erd){}
	}
	setMinimizeInTitle(bool){
		if (bool)
			this.MinimizeTitle.Edit.show(true);
		else
			this.MinimizeTitle.Edit.hide(true);
	}
	setMaximizeInTitle(bool){
		if (bool)
			this.MaximizeTitle.Edit.show(true);
		else
			this.MaximizeTitle.Edit.hide(true);
	}
	setCloseInTitle(bool){
		if (bool)
			this.CloseTitle.Edit.show(true);
		else
			this.CloseTitle.Edit.hide(true);
	}	
	setResizeObj(bool){
		if (bool){
			eval("WindowBuffer."+this.Id+".stat = true;");
			GtE(this.ResizeObj).style.display = "block";
		}
		else{
			eval("WindowBuffer."+this.Id+".stat = false;");
			GtE(this.ResizeObj).style.display = "none";
		}
	}
	setCanvasArrea(bool){
		if (bool){
			this.CanvasArrea.Edit.show(true);
			this.CanvasWritter.Edit.show(true);
		}
		else{
			this.CanvasArrea.Edit.hide(true);
			this.CanvasWritter.Edit.hide(true);
		}
	}
	newWindow(name){//vytvori nove okno
		if (!name)
			return undefined;
//		eval("this.Windows."+name+" = new Window('"+name+"',this.Data.Id);");
		eval("this.Windows."+name+" = new Window('"+name+"',this.ParentElementId.Id);");
		if (UseNoObjClass)
			eval("this."+name+" = this.Windows."+name+";");
		eval("this.Obj."+name+" = this.Windows."+name+";");
	}
	removeWindow(name){
		if (!name)
			return undefined;
		try{
			eval("this.Windows."+name+".destroy();");
		}catch(erd){}
		try{
			eval("delete this.Windows."+name+";");
		}catch(erd){}
		try{
			eval("delete this.Obj."+name+";");
		}catch(erd){}
		try{
			if (UseNoObjClass)
				eval("delete this."+name+";");
		}catch(erd){}
	}
	newSmallWindow(name){//vytvori nove male okno
		if (!name)
			return undefined;
//		eval("this.Windows."+name+" = new Window('"+name+"',this.Data.Id);");
		eval("this.Windows."+name+" = new Window('"+name+"',this.Data.Id);");
		//resizeAll(percentWidth,percentHeight,percentLeft,percentTop,percentRight,percentBotas)
		//eval("this.Windows."+name+".Edit.resizeAll(40,40,100,100,100,100);");
	/*	GtE(eval("this.Windows."+name+".Id")).style.top = "30%";
		GtE(eval("this.Windows."+name+".Id")).style.left = "20%";
		GtE(eval("this.Windows."+name+".Id")).style.width = "60%";
		GtE(eval("this.Windows."+name+".Id")).style.height = "40%";*/
		GtE(eval("this.Windows."+name+".Id")).style.top = "15%";
		GtE(eval("this.Windows."+name+".Id")).style.left = "20%";
		GtE(eval("this.Windows."+name+".Id")).style.width = "60%";
		GtE(eval("this.Windows."+name+".Id")).style.height = "60%";	
			
		eval("this.Windows."+name+".setMinimizeInTitle(false);");		
		eval("this.Windows."+name+".setMaximizeInTitle(false);");	
		eval("this.Windows."+name+".CloseTitle.Edit.setCode('ElWin(\""+this.Id+"\",\"get\")[0][0].Windows."+name+".Edit.hide(true);');");	
		if (UseNoObjClass)
			eval("this."+name+" = this.Windows."+name+";");
		eval("this.Obj."+name+" = this.Windows."+name+";");
	}
	removeSmallWindow(name){
		if (!name)
			return undefined;
		try{
			eval("this.Windows."+name+".destroy();");
		}catch(erd){}
		try{
			eval("delete this.Windows."+name+";");
		}catch(erd){}
		try{
			if (UseNoObjClass)
				eval("delete this."+name+";");
		}catch(erd){}
	}
	newMenu(name){//vytvori nove menu pr. file nebo edit
		if (!name)
			return undefined;
		eval("this.Menus."+name+" = new Menu('"+name+"',this.TitleMenus.Self,this,0,true);");
		eval("MainMenus."+eval("this.Menus."+name+".Id")+" = '"+eval("this.Menus."+name+".Box.Id")+"';");
		if (UseNoObjClass)
			eval("this."+name+" = this.Menus."+name+";");
		eval("this.Obj."+name+" = this.Menus."+name+";");
		var L = GtE(eval("this.Menus."+name+".Id")).offsetLeft;
		var ID = eval("this.Menus."+name+".Box.Id");
		ID = ID.slice(0,parseInt(ID.length,10)-1);
		GtE(ID).style.marginLeft = L+"px";
	//	eval("this.Menus."+name+" = new ElObj(this.TitleMenus.Self,this,true);");
	//	eval("this.Menus."+name+".Box = new ElObj(this.Data.Self,this,true);");
	/*	eval("this.Menus."+name+".Edit.cssClass('WindowMenuItem');");
		eval("this.Menus."+name+".Box.Edit.cssClass('WindowMenuBox');");
		eval("this.Menus."+name+".Name = '"+name+"';");
		eval("this.Menus."+name+".Edit.writeIn(this.Menus."+name+".Name);");
		eval("this.Menus."+name+".Edit.setCode('ToogleMenu(\""+eval("this.Menus."+name+".Id")+"\")');");
		eval("this.Menus."+name+".Edit.onClick('BtnEval(\""+eval("this.Menus."+name+".Id")+"\");');");
		eval("this.Menus."+name+".newMenuItem(name){}")*/		
	}
	removeMenu(name){
		if (!name)
			return undefined;
		try{
			eval("delete MainMenus."+eval("this.Menus."+name+".Id")+";");
		}catch(erd){}
		try{
			eval("this.Menus."+name+".destroy();");
		}catch(erd){}
		try{
			eval("delete this.Menus."+name+";");
		}catch(erd){}
		try{
			eval("delete this.Obj."+name+";");
		}catch(erd){}
		try{
			if (UseNoObjClass)
				eval("delete this."+name+";");
		}catch(erd){}
	}
	addShortCut(tag){
		if (!tag)
			return undefined;
		ElObjAddShortCut(this.Id,tag);
	}
	removeShortCut(){
		ElObjRemoveShortCut(this.Id);
	}
	edit(){
		var self = this;
		return "[Object of methods for work with windows]";
	}
	destroyWindow(){
		try{
			for(var x in this.Obj){
				try{
					x.destroy();
				}catch(erd){}
			}
			for(var x in this.Windows){
				try{
					x.destroy();
				}catch(erd){}
			}
			for(var x in this.Menus){
				try{
					x.destroy();
				}catch(erd){}
			}
			for(var x in this.TitleButtonsObj){
				try{
					x.destroy();
				}catch(erd){}
			}
		}catch(erd){}
		try{
			delete this.Obj;
			delete this.Windows;
			delete this.Menus;
			delete this.TitleButtonsObj;
		}catch(erd){}
		try{
			eval("delete WindowBuffer."+this.Id+";");
		}catch(erd){}
		try{
			eval("delete WindowBuffer."+this.Id+";");
		}catch(erd){}		
		try{
			this.CloseTitle.destroy();
			this.CloseTitle = null;
		}catch(erd){}
		try{
			this.MaximizeTitle.destroy();
			this.MaximizeTitle = null;
		}catch(erd){}
		try{
			this.MinimizeTitle.destroy();
			this.MinimizeTitle = null;
		}catch(erd){}		
		try{
			this.WinHand.destroy();
			this.WinHand = null;
		}catch(erd){}	
		try{
			this.TitleBar.destroy();
			this.TitleBar = null;
		}catch(erd){}	
		try{
			this.TitleInner.destroy();
			this.TitleInner = null;
		}catch(erd){}
		try{
			this.WindowIconIn.destroy();
			this.WindowIconIn = null;
		}catch(erd){}		
		try{
			this.Title.destroy();
			this.Title = null;
		}catch(erd){}
		try{
			this.TitleButtons.destroy();
			this.TitleButtons = null;
		}catch(erd){}
		try{
			this.TitleMenus.destroy();
			this.TitleMenus = null;
		}catch(erd){}
		try{
			this.StatusBar.destroy();
			this.StatusBar = null;
		}catch(erd){}		
		try{
			this.Data.destroy();
			this.Data = null;
		}catch(erd){}
		try{
			this.CanvasWritter.destroy();
			this.CanvasWritter = null;
		}catch(erd){}
		try{
			this.CanvasArrea.destroy();
			this.CanvasArrea = null;
		}catch(erd){}		
		try{
			this.Grid.destroy();
			this.Grid = null;
		}catch(erd){}			
		try{
			eval("delete MenusTree."+this.Id+";");
		}catch(erd){}
		try{
			super.destroy();
		}catch(erd){}
		RemoveWindowProcess(this.Id);
		SelectLastWin();
	}
	destroy(){
		try{
			this.destroyWindow();
		}catch(erd){}
	}
}

function BtnEval(id){
	if ((!id) || DisabledMenus.indexOf(id) != -1)
		return undefined;
	try{
		var getInnerData = eval(GtE(id).dataset.inf+".innerData").split("$");
		if ((CanSelect) && getInnerData[0] == "icon"){
			if ((Selected.indexOf(id) == -1) && (IconSelected.indexOf(id) == -1)){
				Selected.push(id);
				if (eval(GtE(id).dataset.inf+".drstcode"))
					eval(eval(GtE(id).dataset.inf+".drstcode"));
			}
			else
				ClearIconSelectedOne(id);
			return "done";
		}
		eval(eval(GtE(id).dataset.inf+".code"));
	}catch(erd){}
	return "done";
}


function BtnEvalDbl(id){
	if ((!id) || DisabledMenus.indexOf(id) != -1)
		return undefined;
	try{
		eval(eval(GtE(id).dataset.inf+".codeDbl"));
	}catch(erd){}
	return "done";
}

function TBARMax(id){
	var found = false;
	var WinId = GtE(id);
	var FindTitleBar = GtE(id).getElementsByClassName("WindowTitleBar");
	for (var i = 0; i < FindTitleBar.length; i++){
		try{
			var FindTitleButtons = FindTitleBar[i].getElementsByClassName("WindowTitleButtonsNew");
			for (var j = 0; j < FindTitleButtons.length; j++){
				try{
					var FindTitleButtonMax = FindTitleButtons[j].getElementsByClassName("WindowTitleButtonMaximizeNew");
					if (FindTitleButtonMax.length > 0)
							found = true;
					else{
						FindTitleButtonMax = FindTitleButtons[j].getElementsByClassName("WindowTitleButtonRestoreNew");
						if (FindTitleButtonMax.length > 0)
							found = true;											
					}
					if (found){
						ElWin(WinId.id,'maximize');
						break;
					}
				}catch(erd){}
				if (found)
					break;
			}
		}catch(erd){}
		if (found)
			break;
	}
}

function ToogleMenu(id,boxId){
	if (!id)
		return undefined;
	if (!boxId)
		return undefined;
	ToDisplay = false;
	boxId = boxId.slice(0,parseInt(boxId.length,10)-1);
	var display = GtE(boxId).style.display;
	var Main = false;
	for (var e in MainMenus){
		try{
			if (e.trim() == id.trim()){
				Main = true;
				break;
			}
		}catch(erd){}
	}
	if (display == "none"){
		ToDisplay = true;
		ToDisplayBoxId = boxId;
		ToDisplayId = id;
		var MenuInLevel = [];
		var MenuL = 0;
		ToDeleteMenu = [];
		for (var f in MenusTreeL){
			try{
				if (f.trim() == id.trim()){
					MenuL = MenusTreeL[f];
					break;
				}
			}catch(erd){}
		}
		for (var n in MenusTreeL){
			try{
				if (MenusTreeL[n] == MenuL)
					MenuInLevel.push(n);
			}catch(erd){}
		}
		for (var i = 0; i < MenuInLevel.length;i++)
			SearchMenu(MenuInLevel[i]);
		ToDeleteMenuTimeout = window.setTimeout(HideMenu,130);
	}
	else{
		ToDeleteMenu = [];
		SearchMenu(id);
		ToDeleteMenuTimeout = window.setTimeout(HideMenu,130);
	}
	return "done";
}

function SearchMenu(id){
	if (!id)
		return undefined;
	var Box = eval("MenusTree."+id);
	if (Box){
		var boxId = Box;
		boxId = boxId.slice(0,parseInt(boxId.length,10)-1);
		ToDeleteMenu.push(boxId);
		var Childs = GtE(Box).childNodes;
		for (var i = 0; i < Childs.length;i++)
			SearchMenu(Childs[i].id);
	}
}

function HideMenu(){
	var Main = false;
	for (var i = 0; i < ToDeleteMenu.length;i++){
		var main = false;
		for (var e in MainMenus){
			try{
				if (MainMenus[e].trim() == ToDeleteMenu[i].trim()+"D"){
					Main = true;
					main = true;
					break;
				}
			}catch(erd){}
		}
		GtE(ToDeleteMenu[i]).style.display = "none";
		for (var f in MenusTree){
			try{
				if (MenusTree[f].trim() == ToDeleteMenu[i].trim()+"D"){
					if (!main)
						GtE(f).style.color = MenuNextCloseColor;
					else
						GtE(f).style.color = MenuNextCloseColorMain;
					break;
				}
			}catch(erd){}
		}
	}
	ToDeleteMenu = new Array();
	if (ToDisplay){
		if (!Main)
			GtE(ToDisplayId).style.color = MenuNextOpenColor;//dodělat
		else
			GtE(ToDisplayId).style.color = MenuNextOpenColorMain;
		GtE(ToDisplayBoxId).style.display = "block";
		GtE(ToDisplayBoxId).style.zIndex = ObjectMenuIndex;
		MenuAlign(ToDisplayId, ToDisplayBoxId, Main);
		ToDisplay = false;
		ToDisplayBoxId = "";
		ToDisplayId = "";
		MenusAlt();
	}
	return "done";
}

function ObjHandler(evt,self){
	eval("ObjHandle.evt = "+evt+";");
	eval("ObjHandle.self = "+self+";");
	return "done";
}

class Grid extends ObjectWork{
	constructor(ParentElementId){
		super();
		if ((!ParentElementId) || ParentElementId.length == 0 || (!document.getElementById(ParentElementId)) || (!document.getElementById(ParentElementId).style))
			this.Pel = document.body;
		else
			this.Pel = GtE(ParentElementId);
		this.Id = "e"+avc();
	}
	create(){
		GridPercentWidth = this.WidthNumber;
		GridPercentHeight = this.HeightNumber;
		this.Pel.innerHTML += '<div id="'+this.Id+'" data-inf="ObjectWorkData.'+this.ObjectWorkName+'"></div>';
		var self = this;
		GtE(this.Id).onclick = function(evt){eval("var setup="+self.Edit.getObject("code")+"(evt,this,self)")};
		if (this.Pel != document.body){
			GridPercentWidth = this.Pel.offsetWidth;
			GridPercentHeight = this.Pel.offsetHeight;
		}
		else{
			GridPercentWidth = window.innerWidth;
			GridPercentHeight = window.innerHeight;
		}
		GtEs(this.Id).width = WPW(GridPercentWidth)+"vw";
		GtEs(this.Id).height = WPH(GridPercentHeight)+"vh";
		this.edit();
	}
	edit(){
		var self = this;
		return "[Object of methods for work with grid]";
	}
	destroyGrid(){
		try{
			super.destroy();
		}catch(erd){}
	}
	destroy(){
		try{
			this.destroyGrid();
		}catch(erd){}
	}
}

var SwitchWinClear = "";
var CanSwitchNow = true;
var WasSingleAlt = 0;
var SingleAltTkmer = "";
function OnAlt(e){
	try{
		var clearChar = true;
		var codeKeyClean = e.keyCode;
		var ChooseWin = false;
		
		if (AltCan && e.keyCode != 17 && e.charCode != 17 && ChooseWindowRibbonSet){
			ChooseWin = true;
			if (CanSwitchNow){
				CanSwitchNow = false;
				SwitchWinClear = window.setTimeout(function(){CanSwitchNow = true;},450);
				try{
					if (e.charCode == 38 || e.keyCode == 38 || e.charCode == 39 || e.keyCode == 39 || e.charCode == 13 || e.keyCode == 13)
						SelectLinedApplication(true);
					if (e.charCode == 37 || e.keyCode == 37 || e.charCode == 40 || e.keyCode == 40 || e.charCode == 45 || e.keyCode == 45)
						SelectLinedApplication(false);
					if (e.charCode == 27 || e.keyCode == 27 || e.charCode == 46 || evt.keyCode == 46)
						ChooseWindowByRibbon();
				}catch(erd){}
			}
			if (typeof e.stopPropagation != "undefined")
				e.stopPropagation();
			else 
				e.cancelBubble = true;
			e.preventDefault();
		}
		else if (ChooseWindowRibbonSet){
		/*	WindowProcess[GetWindowProcess(ChooseWindowByRibbonList[SelectLinedApplicationNum])][1] = false;  */
			ElWin(ChooseWindowByRibbonList[SelectLinedApplicationNum],"activate");
		/*	WindowProcess[GetWindowProcess(ChooseWindowByRibbonList[SelectLinedApplicationNum])][1] = true;
			ElWin(ChooseWindowByRibbonList[SelectLinedApplicationNum],"minimize");  */
			ChooseWindowByRibbon();
			if (typeof e.stopPropagation != "undefined")
				e.stopPropagation();
			else 
				e.cancelBubble = true;
			e.preventDefault();
		}
		if (!ChooseWin && AltCan && ((e.keyCode != 17 && e.charCode != 17) || ((e.keyCode == 17 || e.charCode == 17) && e.location == 1))){
			if (WasSingleAlt == 1)
				WasSingleAlt = 2;
			else if (WasSingleAlt == 0){
				SingleAltTkmer = window.setTimeout(function(){WasSingleAlt = 0;},450);
				WasSingleAlt = 1;
			}
			for (var i in ResAltOn){
				try{
					var codeChar = e.charCode;
					var codeKey = e.keyCode;
					codeChar = String.fromCharCode(codeChar).toLowerCase();
					codeKey = String.fromCharCode(codeKey).toLowerCase();
					if (ResAltOn[i].toLowerCase() == codeChar || ResAltOn[i].toLowerCase() == codeKey){
						try{
							if (DisabledMenus.indexOf(i) == -1)
								eval(eval(GtE(i).dataset.inf+".code"));
						}
						catch(erd){
							try{
								if (DisabledMenus.indexOf(i) == -1)
									eval(eval(GtE(i).dataset.inf+".code"));
							}
							catch(erd){
								try{
									var tryId = i.slice(0,parseInt(i.length,10)-1);
									if (DisabledMenus.indexOf(tryId) == -1)
										eval(eval(GtE(tryId).dataset.inf+".code"));	
								}
								catch(erd){
									console.error("\\\\-> no code in dataset.inf.code for "+tryId+".");
								}
							}
						}
						break;
					}
				}catch(erd){}
			}
			if (e.charCode == 13 || e.keyCode == 13 ||e.charCode == 61 || e.keyCode == 61 || e.charCode == 191 || e.keyCode == 191){
				ChooseWindowByRibbon();
			}
			if (WasSingleAlt == 1){
				if (e.charCode == 169 || e.keyCode == 169 || e.charCode == 36 || e.keyCode == 36)
					MinAllWindows();	
				if (e.charCode == 33 || e.keyCode == 33 || e.charCode == 162 || e.keyCode == 162)
					MaxAllWindows();	
				if (e.charCode == 34 || e.keyCode == 34 || e.charCode == 161 || e.keyCode == 161)
					CloseAllWindows();		
				if (e.charCode == 17 || e.keyCode == 17){
					if (CanSelect)
						ClearInnerAltSet();
					else{
						SetImage(DesktopTrayActionId,1,84,0);	
						GtE(DesktopTrayActionId).style.visibility = "visible";
						CanSelect = true;
						SelectFirst = true;
					}
				}
				else if (e.charCode == 16 || e.keyCode == 16){
					if (CanCopy)
						ClearInnerAltSet();
					else{
						SetImage(DesktopTrayActionId,1,27,1);
						GtE(DesktopTrayActionId).style.visibility = "visible";	
						CanCopy = true;
						CanSelect = false;
						CanDelete = false;
						SelectFirst = false;
					}
				}
				else if (e.charCode == 46 || e.keyCode == 46){
					if (CanDelete)
						ClearInnerAltSet();
					else{
						SetImage(DesktopTrayActionId,1,25,0);	
						GtE(DesktopTrayActionId).style.visibility = "visible";	
						CanDelete = true;
						CanCopy = false;
						SelectFirst = false;
					}
				}	
				else if (e.charCode == 45 || e.keyCode == 45){
					SetImage(DesktopTrayActionId,1,26,1);	
					GtE(DesktopTrayActionId).style.visibility = "visible";	
					CanSelect = false;
					CanCopy = false;
					CanDelete = false;
					SelectFirst = false;
				}			
				else
					ClearInnerAltSet();
			}
			function ClearInnerAltSet(){
				CanSelect = false;
				CanCopy = false;
				CanDelete = false;
				SelectFirst = false;
				GtE(DesktopTrayActionId).style.visibility = "hidden";
			}
			if (((e.keyCode != 17 && e.charCode != 17) || e.location == 1) && KeyWasUp && !ChooseWindowRibbonSet){
				window.clearTimeout(AltKeyAppTimerReset);
				var AltKeyAppTimerReset = window.setTimeout(function(){
					AltCan = false;
					MenusAlt();
				},900); 
			}
			if (typeof e.stopPropagation != "undefined")
				e.stopPropagation();
			else 
				e.cancelBubble = true;
			e.preventDefault();
		}	
		else if (!ChooseWin && ShortCutCan){
				var codeChar = e.charCode;
				var codeKey = e.keyCode;
				if (codeChar > 5)
					ShortCutName.push(codeChar);
				else if (codeKey > 5)
					ShortCutName.push(codeKey);
			for (var i in ResShortCutsOn){
				try{
					var Res = ResShortCutsOn[i].toLowerCase().trim().split("+");
					var ResAltString = [];
					for (var s = 0; s < Res.length;s++){
						var ResTo = Res[s].trim().toLowerCase();
						switch(ResTo){
							case "ctrl":
								ResAltString.push(17);
								break;
							case "rctrl":
								ResAltString.push(17);
								break;	
							case "lctrl":
								ResAltString.push(17);
								break;	
							case "end":
								ResAltString.push(35);
								break;
							case "pagedown":
								ResAltString.push(34);
								break;
							case "pgdown":
								ResAltString.push(34);
								break;
							case "pgdn":
								ResAltString.push(34);
								break;
							case "pageup":
								ResAltString.push(33);
								break;
							case "pgup":
								ResAltString.push(33);
								break;
							case "home":
								ResAltString.push(36);
								break;
							case "leftarrow":
								ResAltString.push(37);
								break
							case "larrow":
								ResAltString.push(37);
								break;
							case "uparrow":
								ResAltString.push(38);
								break
							case "uarrow":
								ResAltString.push(38);
								break;
							case "rightarrow":
								ResAltString.push(39);
								break
							case "rarrow":
								ResAltString.push(39);
								break;
							case "downtarrow":
								ResAltString.push(40);
								break
							case "darrow":
								ResAltString.push(40);
								break;
							case "alt":
								ResAltString.push(18);
								break;		
							case "altgr":
								ResAltString.push(18);
								break;
							case "lalt":
								ResAltString.push(18);
								break;	
							case "ralt":
								ResAltString.push(18);
								break;			
							case "enter":
								ResAltString.push(13);
								break;			
							case "space":
								ResAltString.push(32);
								break;			
							case "spacebar":
								ResAltString.push(32);
								break;			
							case "caps":
								ResAltString.push(20);
								break;			
							case "capslock":
								ResAltString.push(20);
								break;		
							case "esc":
								ResAltString.push(27);
								break;			
							case "escape":
								ResAltString.push(27);
								break;		
							case "del":
								ResAltString.push(46);
								break;		
							case "delete":
								ResAltString.push(46);
								break;		
							case "ins":
								ResAltString.push(45);
								break;			
							case "insert":
								ResAltString.push(45);
								break;			
							case "pause":
								ResAltString.push(19);
								break;			
							case "break":
								ResAltString.push(19);
								break;				
							case "sroll":
								ResAltString.push(145);
								break;				
							case "srolllock":
								ResAltString.push(145);
								break;			
							case "tab":
								ResAltString.push(9);
								break;			
							case "f1":
								ResAltString.push(112);
								break;			
							case "f2":
								ResAltString.push(113);
								break;			
							case "f3":
								ResAltString.push(114);
								break;			
							case "f4":
								ResAltString.push(115);
								break;			
							case "f5":
								ResAltString.push(116);
								break;			
							case "f6":
								ResAltString.push(117);
								break;				
							case "f7":
								ResAltString.push(118);
								break;				
							case "f8":
								ResAltString.push(119);
								break;				
							case "f9":
								ResAltString.push(120);
								break;			
							case "f10":
								ResAltString.push(121);
								break;			
							case "f11":
								ResAltString.push(122);
								break;				
							case "f12":
								ResAltString.push(123);
								break;									
							default:
								ResAltString.push(ResTo[0].toUpperCase().charCodeAt());
								break;
						}
					}
					var canTrue = true;
					for (var m = 0; m < ResAltString.length;m++){
						if (ResAltString[m] != ShortCutName[m]){
							canTrue = false;
							break;
						}
					}
					if (canTrue){
						try{
							if (DisabledMenus.indexOf(i) == -1)
								eval((eval(GtE(i).dataset.inf+".code")));
						}
						catch(erd){
							try{
								var tryId = i.slice(0,parseInt(i.length,10)-1);
								if (DisabledMenus.indexOf(tryId) == -1)
									eval(eval(GtE(tryId).dataset.inf+".code"));	
							}
							catch(erd){}
						}
						window.clearTimeout(ShortCutKeyAppTimer);
						ShortCutCan = false;
						break;
					}
				}catch(erd){}
			}
			if (typeof e.stopPropagation != "undefined")
				e.stopPropagation();
			else 
				e.cancelBubble = true;
			e.preventDefault();			
			return true;
		}
		else if (!ChooseWin && e.keyCode == 17 || e.charCode == 17){
			if (e.location == 1)
				return false;
			if (!AltFire && KeyWasUp){
				AltFire = true;
				if (AltCan)
					AltCan = false;
				else
					AltCan = true;
			//	KeyWasUp = false;
				MenusAlt();
				window.clearTimeout(AltKeyAppTimer);
				AltKeyAppTimer = window.setTimeout(function(){
					AltFire = false;	
				},555);
			}
			if (typeof e.stopPropagation != "undefined")
				e.stopPropagation();
			else 
				e.cancelBubble = true;
			e.preventDefault();
		}
		else if (!ChooseWin && e.keyCode == 16 || e.charCode == 16){
			if (e.location == 1)
				return true;
			ShortCutCan = true;
			ShortCutName = new Array();
			window.clearTimeout(ShortCutKeyAppTimer);
			ShortCutKeyAppTimer = window.setTimeout(function(){ShortCutCan = false;},1555);		
			if (typeof e.stopPropagation != "undefined")
				e.stopPropagation();
			else 
				e.cancelBubble = true;
			e.preventDefault();
			return true;
		}
		else if (!ChooseWin){
			clearChar = false;
			if (e.keyCode == 9 || e.charCode == 9)
				SwitchInputs("forward");	
			else if ((e.keyCode == 36 || e.charCode == 36) && home){
				SwitchInputs("home");
				home = false;
			}					
			else if (e.keyCode == 34 || e.charCode == 34)
				SwitchInputs("backward");	
			else if (e.keyCode == 33 || e.charCode == 33)
				SwitchInputs("forward");
			else if (e.keyCode == 35 || e.charCode == 35)
				MoveBetweenDesktop(true);			
			else if (e.keyCode == 145 || e.charCode == 145)
				MoveBetweenDesktop(false);
			else if ((e.keyCode == 27 || e.charCode == 27) && home){
				SwitchInputs("home");
				home = false;
			}			
		}
		if ((clearChar) && ((codeKeyClean > 46 && codeKeyClean < 111) || (codeKeyClean > 145))){
			ActiveFocusAltTimer = window.setTimeout(function(){
				if (GtE(ActiveInputWrite)){
					if (GtE(ActiveInputWrite).value)
						GtE(ActiveInputWrite).value = GtE(ActiveInputWrite).value.slice(0,parseInt(GtE(ActiveInputWrite).value.length,10)-1);
					GtE(ActiveInputWrite).focus();
				}
			},400);
		}
	}catch(erd){}
	return false;
}

function SetLoadClock(functionsArray,timing,aftercode){
	//var functionsArray = functions.split(";");
	if (timing == "" || timing === undefined)
		timing = 50;
	if ((!aftercode) || aftercode == "n" || aftercode == "no")
		aftercode = "none";
	var waits = {};
	for (var i = 0; i < functionsArray.length;i++){
		if ((functionsArray[i]) && functionsArray[i] != "")
			eval("waits.wait"+i+" = window.setTimeout(function(){eval('"+functionsArray[i]+"');},"+timing*i+");");
	}
	var wait = window.setTimeout(function(){if (aftercode != "none"){eval(aftercode);}},parseInt(functionsArray.length,10)*timing);
}

class SysGUI extends ObjectWork{
	constructor(name,ParentElementId){
		super();
		this.ObjType = "SysGUI";
		this.Name = "NewSystem";
		if (name)
			this.Name = name;
		this.Grid = new Grid(ParentElementId);
		this.Grid.create();
		this.Id = "e"+avc();
		GtE(this.Grid.Id).innerHTML += '<div id="'+this.Id+'" class="SystemArea" data-inf="ObjectWorkData.'+this.ObjectWorkName+'"></div>';
		var self = this;
		this.InstancesObj = {};
		this.edit();
	//	GtE(this.Id).onclick = function(evt){eval("var setup="+self.Edit.getObject("code")+"(evt,this,self)")};
	}
	newInstance(name){
		eval("this.InstancesObj."+name+" = new Desktop('"+name+"',this,this,false);");
		if (UseNoObjClass)
			eval("this."+name+" = this.InstancesObj."+name+";");		
	}
	removeInstance(name){
		try{
			eval("this.InstancesObj."+name+".destroy();");
		}catch(erd){}
		try{
			eval("delete this.InstancesObj."+name+";");
		}catch(erd){}
		try{
			if (UseNoObjClass)
				eval("delete this."+name+";");
		}catch(erd){}
	}
	edit(){
		var self = this;
		return "[Object of methods for work with windows]";
	}
	destroySysGUI(){
		try{
			for(var x in this.InstancesObj){
				try{
					x.destroy();
				}catch(erd){}
			}
			delete this.InstancesObj;
		}catch(erd){}
		try{
			this.Grid.destroy();
			this.Grid = null;
		}catch(erd){}
		try{
			super.destroy();
		}catch(erd){}
	}
	destroy(){
		try{
			this.destroySysGUI();
		}catch(erd){}
	}
}

class SubDesktop extends ElObj{
	constructor(ParentSelf,WindowSelf){
		super(ParentSelf,WindowSelf,true);
		this.ObjType = "SubDesktop";
		var self = this;
		this.Edit.cssClass('SubDesktopArrea');	
		this.ParentSelf = ParentSelf;
		this.WindowSelf = WindowSelf;

		this.Edit.setInnerData("desktop");
		this.Edit.setDpCode("OnDataDrop('"+this.Id+"');");

		this.edit();
	}
	edit(){
		var self = this;
		return "[Object of methods for work with windows]";
	}
	destroySubDesktop(){
		try{
			super.destroy();
		}catch(erd){}
	}
	destroy(){
		try{
			this.destroySubDesktop();
		}catch(erd){}
	}
}

function OnDataDrop(id){
	if (CanDrop){
		CanDrop = false;
		var wait = window.setTimeout(function(){CanDrop = true;},parseInt(250,10)+parseInt((Selected.length*110),10));
	}
	else
		return undefined;	
	var Data = [MoveElDrInnerData];
	var DataId = [MoveElDrId];
	var DataCoordsX = GetMouseClientCords()[0]-MoveElPosXstart;
	var DataCoordsY = GetMouseClientCords()[1]-MoveElPosYstart;
	for (var i = 0; i < Selected.length;i++){
		try{
			if ((Data.indexOf(eval(GtE(Selected[i]).dataset.inf+".innerData")) == -1)){
				DataId.push(Selected[i]);
				Data.push(eval(GtE(Selected[i]).dataset.inf+".innerData"));
			}
		}catch(erd){}
	}
	var s = 0;
	var DataCoordsX = undefined;
	var DataCoordsY = undefined;
	var posX = MoveElPosXstart;
	var posY = MoveElPosYstart;
	var posDesk = ActualIconDesktop;
	var posCanSel = false;
	var specWait = window.setTimeout(function(){WorkDataDrop(id);},150);
	var newSel = [];
	function WorkDataDrop(id){
		if (CanSelect){
			posCanSel = true;
			CanSelect = false;
		}
		if (DataCoordsX === undefined)
			DataCoordsX = GetMouseClientCords()[0]-posX;
		if (DataCoordsY === undefined)
			DataCoordsY = GetMouseClientCords()[1]-posY;
		if (MoveElDpInnerData == "desktop"){
			var getInnerData = Data[s].split("$");
			if (getInnerData[0] == "icon"){
				var getIconData = getInnerData[1].split("a!a");			
				var NumberOfDesktop = getIconData[0];
				var xRow = DesktopIconMapData[NumberOfDesktop].length;
				var yRow = DesktopIconMapData[NumberOfDesktop][0].length;
				var ElData = 0;
				try{
					var ElData = GtE(DataId[i]).getBoundingClientRect();
				}catch(erd){
					try{
						var ElData = GtE(DesktopIconMapData[getIconData[0]][getIconData[1]][getIconData[2]].Id).getBoundingClientRect();
					}catch(erd){
						s++;
						if (s == Data.length){
							s = 0;
							if (posCanSel){
								if (!CanCopy)
									Selected = [];
								for (var i = 0; i < newSel.length;i++){
									Selected.push(newSel[i]);
								}
								CanSelect = true;
							}
							else
								Selected = [];
							var MoveIconSpecWait = window.setTimeout(function(){ChooseIconDesktop(posDesk);},180);
							return "done";
						}
						else
							WorkDataDrop(id);
					}
				}
				var MouseLeft = parseInt((parseInt(DataCoordsX,10)+parseInt(Math.floor(ElData.left),10)),10)-GtE(IconDesktops[NumberOfDesktop].Id).offsetLeft;
				var MouseTop = parseInt((parseInt(DataCoordsY,10)+parseInt(Math.floor(ElData.top),10)),10)-GtE(IconDesktops[NumberOfDesktop].Id).offsetTop;
			
				var percentHeight = GtE(IconDesktops[NumberOfDesktop].Id).offsetHeight/5;
				var percentWidth = GtE(IconDesktops[NumberOfDesktop].Id).offsetWidth/(GtE(IconDesktops[NumberOfDesktop].Id).offsetWidth/percentHeight);
				
				var mouseIntL = Math.floor(MouseLeft/percentWidth);
				var mouseIntT = Math.floor(MouseTop/percentHeight);

				if (mouseIntL >= xRow)
					mouseIntL = parseInt(xRow,10)-1;
				if (mouseIntT >= yRow)
					mouseIntT = parseInt(yRow,10)-1;
				
				if (mouseIntL < 0)
					mouseIntL = 0;
				if (mouseIntT < 0)
					mouseIntT = 0;
				
				if (isNaN(mouseIntL))
					mouseIntL = 0;
				if (isNaN(mouseIntT))
					mouseIntT = 0;					

				setIconDesktop = getIconData[0];
				if (!CanCopy)
					SetIcon(getIconData[0]+"a!a"+getIconData[1]+"a!a"+getIconData[2]+"a!anone");
				if (!CanDelete){
					SetFreeDesktopIconFromString(NumberOfDesktop+"a!a"+mouseIntL+"a!a"+mouseIntT+"a!a"+getIconData[3]+"a!a"+getIconData[4]+"a!a"+getIconData[5]);
					newSel.push(DesktopIconMapData[NumberOfDesktop][mouseIntL][mouseIntT].Icon.Id);
				}
			}		
		}
		s++;
		if (s == Data.length){
			s = 0;
			if (posCanSel){
				if (!CanCopy)
					Selected = [];
				for (var i = 0; i < newSel.length;i++){
					Selected.push(newSel[i]);
					if (eval(GtE(newSel[i]).dataset.inf+".drstcode"))
						eval(eval(GtE(newSel[i]).dataset.inf+".drstcode"));
				}
				CanSelect = true;
			}
			else
				Selected = [];
			var MoveIconSpecWait = window.setTimeout(function(){ChooseIconDesktop(posDesk);},180);
			return "done";
		}
		else
			WorkDataDrop(id);
	}
}

function NotToDrop(){
	if (ToDrop){
		CanToDrop = false;
		ToDrop = false;
		//ToDropTimer = window.setTimeout(function(){CanToDrop = true; ToDrop = true;},200);
	}
	else
		return undefined;
}

WindowIconMapData = {};
WindowMapData = {};

function SetWindowIcon(name,ParentSelf,WindowSelf,uniqueId,src){
	try{
		if (eval("WindowIconMapData."+uniqueId+".dataProp") != 1)
			throw undefined;
	}catch(erd){
		eval("WindowIconMapData."+uniqueId+" = {};");
		eval("WindowIconMapData."+uniqueId+".dataProp = 1;");
		eval("WindowIconMapData."+uniqueId+".Icons = [];");
	}
	var LastIcon = eval("WindowIconMapData."+uniqueId+".Icons.length");
	eval("WindowIconMapData."+uniqueId+".Icons.push(new DesktopIcon(name,ParentSelf,WindowSelf,LastIcon+'IwI'+););");
}

function UnSetWindowIcon(name,uniqueId){
	try{
		var LastIcon = eval("WindowIconMapData."+uniqueId+".Icons.length");
		if (LastIcon < 2){
			try{
				eval("delete WindowIconMapData."+uniqueId+";");
			}catch(erd){}
		}
		else{
			try{
				eval("WindowIconMapData."+uniqueId+".Icons.splice("+LastIcon+",1);");
			}catch(erd){}
		}
	}catch(erd){}
}

function CreateActiveDesktop(name,ParentSelf){
	ParentSelf.ActiveDesktops = new Desktop(name,ParentSelf,ParentSelf,activeDesktop);
}

var WindowProcess = [];
function RegisterWin(){
	for (var i = 0; i < WindowProcess.length;i++){
		if (WindowProcess[i][1])
			GtE(WindowProcess[i][0]).style.display = "none";
		
	}
}

class ShellWin extends Window{
	constructor(name,ParentId,uniqueId,winIconSrc){
		super(name,ParentId);
		if (!uniqueId)
			uniqueId = name;
		this.ObjType = "ShellWin";
		this.Uniques = 0;
		this.UniqueId = uniqueId+"uQu"+this.Uniques;
		this.Icons = {};
		this.Windows = {};
		this.Elements = {};
		this.ActiveDesktops = {};
		var self = this;
		this.Title.Edit.setDpOvCode("NotToDrop();");
		this.Title.Edit.setDpOvCode("NotToDrop();");
		this.TitleBar.Edit.setDpOvCode("NotToDrop();");
		if (!winIconSrc)
			winIconSrc = "1$2$false";
		this.winIconSrc = winIconSrc;
		this.name = name;
		this.IconSource = [winIconSrc];
		var inIconSrc = winIconSrc.split("$");
		if (inIconSrc.length != 3)
			SetImage(this.WindowIconIn.Id,winIconSrc,0,false);
		else{
			SetImage(this.WindowIconIn.Id,inIconSrc[0],inIconSrc[1],eval(inIconSrc[2]));
			this.IconSource = [inIconSrc[0], inIconSrc[1], eval(inIconSrc[2])];
		}
		var setWinProcess = true;
		for (var i = 0; i < WindowProcess.length;i++){
			if (WindowProcess[i][0].Id == this.Id){
				setWinProcess = false;
				break;
			}		
		}
		if (setWinProcess){//WindowProcess structure id,minimized,maximized,closed, id popisovače system tray,titulek okna,id resize objektu, src ikony okna
			WindowProcess.push([this,true,false,false,"none",this.name,this.ResizeObj,this.winIconSrc,true]);
		//	if (MainSysTray && MainSysTray != undefined && MainSysTray != null)
		//		MainSysTray.setIconWin(this.Id);
			ElWin(this.Id,'minimize');
			ElWin(this.Id,'minimizenoset');
		//	ElWin(this.Id,"show");
		//	ElWin(this.Id,'close');
		}
		this.MinimizeTitle.Edit.setCode("ElWin('"+this.Id+"','minimize');");
		this.MaximizeTitle.Edit.setCode("ElWin('"+this.Id+"','maximize');");
		this.CloseTitle.Edit.setCode("ElWin('"+this.Id+"','close');");

	/*	GtE(this.TitleBar.Id).addEventListener('dblclick', function(e){
			try{
				var WinId = e.originalTarget;
				var found = false;
				for (var i = 0; i < 20; i++){
					WinId = WinId.parentNode;
					try{
						if (WinId.classList.contains("WindowMain")){
							var FindTitleBar = WinId.getElementsByClassName("WindowTitleBar");
							for (var j = 0; j < FindTitleBar.length; j++){
								try{
									var FindTitleButtons = WinId.getElementsByClassName("WindowTitleButtonsNew");
									for (var m = 0; m < FindTitleButtons.length; m++){
										try{
											var FindTitleButtonMax = WinId.getElementsByClassName("WindowTitleButtonMaximizeNew");
											if (FindTitleButtonMax.length > 0)
												found = true;
											else{
												FindTitleButtonMax = WinId.getElementsByClassName("WindowTitleButtonRestoreNew");
												if (FindTitleButtonMax.length > 0)
													found = true;											
											}
											if (found){
												ElWin(WinId.id,'maximize');
												break;
											}
										}catch(erd){}
										if (found)
											break;
									}
								}catch(erd){}
								if (found)
									break;
							}
						}
						if (found)
							break;
					}catch(erd){}
				}
			}catch(erd){}
		});  */
		
		this.edit();
		this.showWindowInTaskbar();
	}
	setTitle(data){
		this.TitleInner.Edit.writeIn(data);
		for (var i = 0; i < WindowProcess.length;i++){
			if (WindowProcess[i][0].Id == this.Id){
				WindowProcess[i][5] = data;
				eval("SysIn.Tray.IconWinDataObj."+this.Id+".Title.Edit.writeIn('"+data+"');");
				break;
			}
		}		
	}
	openWindow(){
		for (var i = 0; i < WindowProcess.length;i++){
			if (WindowProcess[i][0].Id == this.Id){
				WindowProcess[i][3] = false;
				WindowProcess[i][1] = false;
				break;
			}
		}
		ElWin(this.Id,"minimizenoset");
		ElWin(this.Id,"show");
	}
	minimizeWindow(){
		for (var i = 0; i < WindowProcess.length;i++){
			if (WindowProcess[i][0].Id == this.Id){
				if (WindowProcess[i][1] == false)
					ElWin(this.Id,"minimize");
				break;
			}
		}
	}
	maximizeWindow(){
		for (var i = 0; i < WindowProcess.length;i++){
			if (WindowProcess[i][0].Id == this.Id){
				if (WindowProcess[i][2] == false)
					ElWin(this.Id,"maximize");
				break;
			}
		}
	}
	restoreWindow(){
		for (var i = 0; i < WindowProcess.length;i++){
			if (WindowProcess[i][0].Id == this.Id){
				if (WindowProcess[i][2] == false)
					ElWin(this.Id,"restore");
				break;
			}
		}
	}
	hideWindow(){
		for (var i = 0; i < WindowProcess.length;i++){
			if (WindowProcess[i][0].Id == this.Id){
				if (WindowProcess[i][1] == false)
					ElWin(this.Id,"minimizenoset");
				break;
			}
		}
	}
	showWindow(){
		for (var i = 0; i < WindowProcess.length;i++){
			if (WindowProcess[i][0].Id == this.Id){
				if (WindowProcess[i][1] == true)
					ElWin(this.Id,"minimizenoset");
				break;
			}
		}
	}	
	closeWindow(){
		for (var i = 0; i < WindowProcess.length;i++){
			if (WindowProcess[i][0].Id == this.Id){
				WindowProcess[i][3] = true;
				break;
			}
		}
		ElWin(this.Id,"close");
	}
	showWindowInTaskbar(){
		for (var i = 0; i < WindowProcess.length;i++){
			if (WindowProcess[i][0].Id == this.Id){
				WindowProcess[i][8] = false;
				SetWin(WindowProcess[i],i);
				break;
			}
		}
	}
	hideWindowInTaskbar(){
		for (var i = 0; i < WindowProcess.length;i++){
			if (WindowProcess[i][0].Id == this.Id){
				WindowProcess[i][8] = true;
				SetWin(WindowProcess[i],i);
				break;
			}
		}
	}
	selectWindow(){
	/*	for (var i = 0; i < WindowProcess.length;i++){
			if (WindowProcess[i][0].Id == this.Id){
				if (WindowProcess[i][3])
					
				break;
			}
		}		*/
		ElWin(this.Id,"activate");
	}
	newActiveDesktop(name,parentSelf){
		eval("this.ActiveDesktops."+name+" = new Desktop(name,parentSelf,this,true);");
	}
	removeActiveDesktop(name){
		try{
			eval("this.ActiveDesktops."+name+".destroy();");
		}catch(erd){}
		try{
			eval("delete this.ActiveDesktops."+name+";");
		}catch(erd){}
	}
	newShellWin(name,winIconSrc){
		eval("WindowMapData."+this.UniqueId+this.Uniques+" = new ShellWin('"+name+"','"+this.Id+"','"+this.UniqueId+this.Uniques+"','"+winIconSrc+"');");
		var Win = eval("WindowMapData."+this.UniqueId+this.Uniques);
		eval("this.Windows."+name+" = Win;");
		this.Uniques++;
	}
	removeShellWin(name){
		try{
			eval("WindowMapData."+this.UniqueId+this.Uniques+".destroy();");
		}catch(erd){}
		try{
			eval("delete WindowMapData."+this.UniqueId+this.Uniques+";");
		}catch(erd){}
		try{
			eval("delete this.Windows."+name+";");
		}catch(erd){}
	}
	newIconFromSrc(name,Title,src,code){
		SetWindowIcon(0,0,0,Title,src,code);
//        SetFreeDesktopIcon(0,0,0,Title,src,code);
		eval("DesktopIconDatabase."+name+" = IconDesktopGetLastIndex;");
		IconDesktopGetLastIndex = 0;
	}
	removeIcon(name){
		var iconIndex = eval("DesktopIconDatabase."+name);
		iconIndex = iconIndex.split("&");
		try{
			DesktopIconMapData[iconIndex[0]][iconIndex[1]][iconIndex[2]].destroy();
		}catch(erd){}
	}
	newIconFromIconData(name,Title,treeNumber,index,type,code){
        
//		SetFreeDesktopIcon(0,0,0,Title,treeNumber+","+index+","+type,code);
		eval("DesktopIconDatabase."+name+" = IconDesktopGetLastIndex;");
		IconDesktopGetLastIndex = 0;
	}
	setIconTitle(name,Title){
		var iconIndex = eval("DesktopIconDatabase."+name);
		iconIndex = iconIndex.split("&");
		ChooseIconDesktopTemporary(iconIndex[0]);
		DesktopIconMapData[iconIndex[0]][iconIndex[1]][iconIndex[2]].Title.Edit.writeIn(Title);
	}
	setIconCode(name,code){
		var iconIndex = eval("DesktopIconDatabase."+name);
		iconIndex = iconIndex.split("&");
		ChooseIconDesktopTemporary(iconIndex[0]);
		DesktopIconMapData[iconIndex[0]][iconIndex[1]][iconIndex[2]].Edit.setCode(code);
	}
	setIconCodeAdd(name,code){
		var iconIndex = eval("DesktopIconDatabase."+name);
		iconIndex = iconIndex.split("&");
		ChooseIconDesktopTemporary(iconIndex[0]);
		DesktopIconMapData[iconIndex[0]][iconIndex[1]][iconIndex[2]].Edit.setCodeAdd(code);
	}	
	setIconSrc(name,src){
		var iconIndex = eval("DesktopIconDatabase."+name);
		iconIndex = iconIndex.split("&");
		ChooseIconDesktopTemporary(iconIndex[0]);
		DesktopIconMapData[iconIndex[0]][iconIndex[1]][iconIndex[2]].Icon.setPath(src);
	}
	setIconData(name,treeNumber,index,type){
		var iconIndex = eval("DesktopIconDatabase."+name);
		iconIndex = iconIndex.split("&");
		ChooseIconDesktopTemporary(iconIndex[0]);
		SetImage(DesktopIconMapData[iconIndex[0]][iconIndex[1]][iconIndex[2]].Icon.Id,treeNumber,index,type);		
	}
	getIconSelf(name){
		var iconIndex = eval("DesktopIconDatabase."+name);
		iconIndex = iconIndex.split("&");
		return DesktopIconMapData[iconIndex[0]][iconIndex[1]][iconIndex[2]];
	}
	edit(){
		var self = this;
		return "[Object of methods for work with windows]";
	}
	destroyShellWin(){
		try{
			for(var x in this.Icons){
				try{
					x.destroy();
				}catch(erd){}
			}
			delete this.Icons;
		}catch(erd){}
		try{
			for(var x in this.Windows){
				try{
					x.destroy();
				}catch(erd){}
			}
			delete this.Windows;
		}catch(erd){}
				try{
			for(var x in this.Elements){
				try{
					x.destroy();
				}catch(erd){}
			}
			delete this.Elements;
		}catch(erd){}
		try{
			for(var x in this.ActiveDesktops){
				try{
					x.destroy();
				}catch(erd){}
			}
			delete this.ActiveDesktops;
		}catch(erd){}
		if (MainSysTray && MainSysTray != undefined && MainSysTray != null)	
			MainSysTray.unSetIconWin(this.Id);
		try{
			super.destroy();
		}catch(erd){}
	}
	destroy(){
		try{
			this.destroyShellWin();
		}catch(erd){}
	}
}

class Desktop extends ElObj{
	constructor(name,ParentSelf,WindowSelf,activeDesktop){
		super(ParentSelf,WindowSelf,true);
		this.ObjType = "Desktop";

		this.Icons = {};
		this.Apps = {};
		var self = this;
		
		this.Edit.cssClass('Desktop');
		this.Name = name;
		this.ActiveDesktop = activeDesktop;
		this.Desktop = new ElObj(this,this,true);
		//if (!activeDesktop)
			this.Desktop.Edit.cssClass("DesktopArrea");
	//	else
		if (activeDesktop)
			this.Desktop.Edit.addCssClass("ActiveDesktopArrea");
		this.Tray = new DesktopTray(name+"Tray",this,this);
		this.Edit.setCodeAdd("OnDesktopWork();");
		this.ParentSelf = ParentSelf;
		this.WindowSelf = WindowSelf;
		this.edit();
		CreateIconDesktop(this.Desktop);
		/*
	
		
		this.newIconFromIconData("CommandPrompt",Translate("Command prompt"),1,80,false,"GUISystem(false);");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
		this.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");*/
	}
	setBackGroundColor(color){
		SetDesktopColor(color);
	}
	setBackGroundImage(image){
		SetDesktopBackground(image);
	}
	setBackGroundImageParameters(param){
		SetDesktopBackgroundParameter(param);
	}
	setBackGroundImageSize(param){
		SetDesktopBackgroundSize(param);
	}
	setBackGroundImageRepeat(param){
		SetDesktopBackgroundRepeat(param);
	}	
	newIconFromSrc(name,Title,src,code){
        try{
            SetFreeDesktopIcon(0,0,0,Title,src,code);
    //		DesktopIconMapData[SubData[0]][SubData[1]][SubData[2]]
            eval("DesktopIconDatabase."+name+" = IconDesktopGetLastIndex;");
            IconDesktopGetLastIndex = 0;
        }catch(erd){}
	}
	removeIcon(name){
        try{
            var iconIndex = eval("DesktopIconDatabase."+name);
            iconIndex = iconIndex.split("&");
            DesktopIconMapData[iconIndex[0]][iconIndex[1]][iconIndex[2]].destroy();
		}catch(erd){}
	}	
	newIconFromIconData(name,Title,treeNumber,index,type,code){
        try{
            SetFreeDesktopIcon(0,0,0,Title,treeNumber+","+index+","+type,code);
            eval("DesktopIconDatabase."+name+" = IconDesktopGetLastIndex;");
            IconDesktopGetLastIndex = 0;
        }catch(erd){}
	}
	setIconTitle(name,Title){
        try{
            var iconIndex = eval("DesktopIconDatabase."+name);
            iconIndex = iconIndex.split("&");
            ChooseIconDesktopTemporary(iconIndex[0]);
            DesktopIconMapData[iconIndex[0]][iconIndex[1]][iconIndex[2]].Title.Edit.writeIn(Title);
        }catch(erd){}
	}
	setIconCode(name,code){
        try{
            var iconIndex = eval("DesktopIconDatabase."+name);
            iconIndex = iconIndex.split("&");
            ChooseIconDesktopTemporary(iconIndex[0]);
            DesktopIconMapData[iconIndex[0]][iconIndex[1]][iconIndex[2]].Edit.setCode(code);
        }catch(erd){}
	}
	setIconCodeAdd(name,code){
        try{
            var iconIndex = eval("DesktopIconDatabase."+name);
            iconIndex = iconIndex.split("&");
            ChooseIconDesktopTemporary(iconIndex[0]);
            DesktopIconMapData[iconIndex[0]][iconIndex[1]][iconIndex[2]].Edit.setCodeAdd(code);
        }catch(erd){}
	}
	setIconSrc(name,src){
        try{
            var iconIndex = eval("DesktopIconDatabase."+name);
            iconIndex = iconIndex.split("&");
            ChooseIconDesktopTemporary(iconIndex[0]);
            DesktopIconMapData[iconIndex[0]][iconIndex[1]][iconIndex[2]].Icon.setPath(src);
        }catch(erd){}
	}
	setIconData(name,treeNumber,index,type){
        try{
            var iconIndex = eval("DesktopIconDatabase."+name);
            iconIndex = iconIndex.split("&");
            ChooseIconDesktopTemporary(iconIndex[0]);
            SetImage(DesktopIconMapData[iconIndex[0]][iconIndex[1]][iconIndex[2]].Icon.Id,treeNumber,index,type);
        }catch(erd){}
	}
	getIconSelf(name){
        try{
            var iconIndex = eval("DesktopIconDatabase."+name);
            iconIndex = iconIndex.split("&");
            return DesktopIconMapData[iconIndex[0]][iconIndex[1]][iconIndex[2]];
        }catch(erd){}
	}
	edit(){
		var self = this;
		return "[Object of methods for work with windows]";
	}
	destroyDesktop(){
		console.log("//-> GUISHELL.js: Desktop objects cannot be destroyed. To stop working with the desktops, you can either cover the desktop area with other object or to recycle the windowing manager.");
	}
	destroy(){
		try{
			this.destroyDesktop();
		}catch(erd){}
	}	
}

class DesktopMenu extends ElObj{
	constructor(name,ParentSelf,WindowSelf,DesktopSelf){
		super(ParentSelf,WindowSelf,true);
		this.ObjType = "DesktopMenu";
		this.MenuIcon = new Image(this,WindowSelf,'',true);
		SetImage(this.MenuIcon.Id,1,89,0);
		this.MenuIcon.Edit.cssClass("DesktopMenuMainIconPic");
		this.MenuTitle = new ElObj(this,WindowSelf,true);
		this.MenuTitle.Edit.writeIn("Menu");
		this.MenuTitle.Edit.cssClass("DesktopMenuMainIconTitle DesktopMenuMainIconTitleCustom");
		this.Edit.setCodeAdd("SetDesktopWork(false);DesktopMenuSwitch();");
		ElObjAddAlt(this.MenuTitle.Id);
		this.MenuArea = new DesktopMenuArea(name+"MenuArea",DesktopSelf,WindowSelf);
		this.MenuArea.Edit.setCodeAdd("SetDesktopWork(false);");		
		this.Edit.cssClass("DesktopMenuMainIcon DesktopMenuMainIconCustom");
		DesktopMenuId.push(this.MenuArea.Id);
		DesktopMenuId.push(this.MenuArea.menuArrea.Id);
		DesktopMenuId.push(this.MenuIcon.Id);
		DesktopMenuId.push(this.MenuTitle.Id);
		DesktopMenuId.push(this.Id);
		this.MenuTitle.Edit.setCodeAdd("DesktopMenuSwitch();SetDesktopWork(false);");
		DesktopMenuSwitch();
	    this.Items = {};
		this.Separators = {};
		this.WindowSelf = WindowSelf;
		
/*		this.newItem("CommandPrompt",true);
		this.Items.CommandPrompt.setItemTitleTr("Command prompt");
		this.Items.CommandPrompt.setItemIconShell(1,80,0);
		this.Items.CommandPrompt.setItemCode("GUISystem(false);");
		
		this.newItem("Run",true);
		this.Items.Run.setItemTitle(Translate("Run")+" ...");
		this.Items.Run.setItemIconShell(1,79,0);
		this.Items.Run.setItemCode("ShowRunMenu();");
		
		this.addSeparator("Separator2");
		
		this.newItem("ControlPanel",true);
		this.Items.ControlPanel.setItemTitleTr("Control panel");
		this.Items.ControlPanel.setItemIconShell(1,72,0);
		this.Items.ControlPanel.setItemCode("ControlPanelRun();");
		
		this.newItem("Applications",true);
		this.Items.Applications.setItemTitleTr("Applications");
		this.Items.Applications.setItemIconShell(1,2,0);
		this.Items.Applications.setItemCode("ShowApplicationsMenu();");  */
		
		var WaitForClose = window.setTimeout(function(){DesktopForceMenuSwitch(false);},22);
		
		this.edit();
	}
	edit(){
		var self = this;
		return "[Object of methods for work with windows]";		
	}
	writeMenuTitle(title){
		this.MenuArea.writeMenuTitle(title);
	}
	addSeparator(name){
		if (!name)
			return undefined;
		eval("this.Separators."+name+" = new ElObj(this.MenuArea.menuArrea,this.WindowSelf,false);");
		DesktopBlinkMenuSwitch(true,20);
		GtE(this.MenuArea.menuArrea.Id).innerHTML += "<div style='display: block; width: 100%; height: 0.5%; margin-bottom: 1%; margin-top: 1%; background-color: #444444;' id='"+eval("this.Separators."+name+".Id")+"'></div>";	
	}
	removeSeparator(name){
		if (!name)
			return undefined;
		DesktopBlinkMenuSwitch(true,20);
		try{
			eval("this.Separators."+name+".destroy();");
		}catch(erd){};
		try{
			eval("delete this.Separators."+name+";");
		}catch(erd){};		
	}
	newItem(name,iconBool){
		DesktopBlinkMenuSwitch(true,20);
		eval("this.Items."+name+" = new DesktopMenuItems(name+'ItemMenu',this.MenuArea.menuArrea,this.WindowSelf,true,iconBool);");
	}
	removeItem(name){
		if (!name)
			return undefined;
		DesktopBlinkMenuSwitch(true,20);
		try{
			eval("this.Items."+name+".destroy();");
		}catch(erd){};
		try{
			eval("delete this.Items."+name+";");
		}catch(erd){};		
	}
	destroyDesktopMenu(){
		//desktop menu cannot be destroyed, as it is children object of the desktop taskbar object
	}
	destroy(){
		try{
			this.destroyDesktopMenu();
		}catch(erd){}
	}
}

class DesktopMenuItems extends ElObj{
	constructor(name,ParentSelf,WindowSelf,iconBool){//iconBool -true -> vytvori se ikona, false - ikona se nevytvori
		super(ParentSelf,WindowSelf,true);
		this.ObjType = "DesktopMenuItems";
		this.Lvl = 0;
		this.Lvl++;	
		this.iconBool = iconBool;
		if (iconBool)
			this.Icon = new Image(this,WindowSelf,'',true);
		else
			this.Icon = new ElObj(this,WindowSelf,true);
		this.Title = new ElObj(this,WindowSelf,true);
		this.Edit.cssClass("DesktopMenuItems DesktopMenuItemsCustom");
		this.Title.Edit.cssClass("DesktopMenuItemsTitle DesktopMenuItemsTitleCustom");
		this.Icon.Edit.cssClass("DesktopMenuItemsIcon DesktopMenuItemsIconCustom");
		this.ParentSelf = ParentSelf;
		this.WindowSelf = WindowSelf;
		ElObjAddAlt(this.Title.Id);
		var self = this;
		this.Menus = {};
		this.edit();
	}
	edit(){
		var self = this;	
		return "[Object of methods for work with windows]";		
	}
	setItemCode(code){
		this.Edit.setCodeAdd(code);
		this.Title.Edit.setCodeAdd(code);
	}
	removeItemCode(){
		this.Edit.unSetCode();
		this.Title.Edit.unSetCode();
	}
	setItemTitle(data){
		this.Title.Edit.writeIn(data);
	}
	setItemTitleTr(data){
		this.Title.Edit.trIn(data);
	}
	setItemIconSrc(src){
		if (this.iconBool)
			GtE(this.Icon.Id).src = src;
	}
	setItemIconShell(treeNumber,index,type){
		if (this.iconBool)
			SetImage(this.Icon.Id,treeNumber,index,type);
	}
	addShortCut(tag){
		if (!tag)
			return undefined;
		ElObjAddShortCut(this.Title.Id,tag);
	}
	removeShortCut(){
		ElObjRemoveShortCut(this.Title.Id);
	}
	destroyDesktopMenuItems(){
		try{
			for(var x in this.Menus){
				try{
					x.destroy();
				}catch(erd){}
			}
			delete this.Menus;
		}catch(erd){}	
		ElObjRemoveAlt(this.Title.Id);
		try{
			this.Icon.destroy();
			delete this.Icon;
		}catch(erd){}
		try{
			this.Title.destroy();
			delete this.Title;
		}catch(erd){}		
		try{
			super.destroy();
		}catch(erd){}
	}
	destroy(){
		try{
			this.destroyDesktopMenuItems();
		}catch(erd){}
	}
}

class DesktopMenuArea extends ElObj{
	constructor(name,ParentSelf,WindowSelf){
		super(ParentSelf,WindowSelf,true);
		this.ObjType = "DesktopMenuArea";
		this.menuRibbon = new ElObj(this,WindowSelf,true);
		this.menuRibbon.menuRibbonTitle = new ElObj(this.menuRibbon,WindowSelf,true);
		this.menuRibbon.Edit.cssClass("DesktopMenuAreaRibbon DesktopMenuAreaRibbonCustom");
		this.menuRibbon.menuRibbonTitle.Edit.cssClass("DesktopMenuAreaRibbonText DesktopMenuAreaRibbonTextCustom");
		this.menuArrea = new ElObj(this,WindowSelf,true);
		this.menuArrea.Edit.cssClass("DesktopMenuAreaInnerArrea DesktopMenuAreaInnerArreaCustom");
		this.menuArrea.Edit.setCodeAdd("SetDesktopWork(false);");
		this.Edit.cssClass("DesktopMenuArea");
	}
	writeMenuTitle(title){
		this.menuRibbon.menuRibbonTitle.Edit.writeIn(title);
	}
	destroyDesktopMenuArea(){
		//desktop menu area cannot be destroyed, as it is children object of the desktop taskbar object
	}
	destroy(){
		try{
			this.destroyDesktopMenuArea();
		}catch(erd){}
	}
}

class DesktopNotifyTimer extends ElObj{
	constructor(name,ParentSelf,WindowSelf){
		super(ParentSelf,WindowSelf,true);
		this.ObjType = "DesktopNotifyTimer";
		var self = this;
		this.sysTime = new ElObj(this,this,true);
		this.sysTime.Edit.cssClass("DesktopTimerTime DesktopTimerTimeCustom");
		this.sysDate = new ElObj(this,this,true);
		this.sysDate.Edit.cssClass("DesktopTimerDate DesktopTimerDateCustom");
		this.Edit.cssClass("DesktopTimer");
		GUICLOCKTIMEDRAWELEM = this.sysTime.Id;
		GUICLOCKDATEDRAWELEM = this.sysDate.Id;
		//this.StartWork();
	}		
	StartWork(){
		var self = this;
		//LoadTimerData = window.setInterval(function(){self.sysTime.Edit.writeIn(GetSysTime("default"));self.sysDate.Edit.writeIn(GetSysDate("default")); self.sysTime.Edit.writeInTitle(GetSysDate("default")); self.sysDate.Edit.writeInTitle(GetSysTime("default"));},500);
	}
	destroyDesktopNotifyTimer(){
		//desktop notify timer cannot be destroyed, as it is children object of the desktop taskbar object
	}
	destroy(){
		try{
			this.destroyDesktopNotifyTimer();
		}catch(erd){}
	}
}

var DesktopNotifyTrayData = [];
class DesktopNotifyTray extends ElObj{
	constructor(name,ParentSelf,WindowSelf){
		super(ParentSelf,WindowSelf,true);
		this.ObjType = "DesktopNotifyTray";
		var self = this;
		this.TimerArrea = new DesktopNotifyTimer(name+"NotifyTimer",self,WindowSelf);
		this.Edit.cssClass("DesktopNotifyTray");
		this.NotifyIcons = new ElObj(this, WindowSelf, true);
		this.NotifyIcons.Edit.cssClass("DesktopNotifyIcons");
		this.NotifyIconsInner = new ElObj(this.NotifyIcons, this, true);
		this.TrayIconsMoveLeft = new ElObj(this.NotifyIcons, this, true);
		this.TrayIconsMoveRight = new ElObj(this.NotifyIcons, this, true);
		this.NotifyIconsInner.Edit.cssClass("DesktopNotifyIconsInner");
		this.TrayIconsMoveLeft.Edit.cssClass("TrayNotifyIconsMoveLeft");
		this.TrayIconsMoveRight.Edit.cssClass("TrayNotifyIconsMoveRight");
		this.TrayIconsMoveLeft.Edit.writeIn("<div onclick=\"MoveNotifyIcons('l', 50);\"><</div>");
		this.TrayIconsMoveRight.Edit.writeIn("<div onclick=\"MoveNotifyIcons('r', 50);\">></div>");
		this.NotifyIconsObj = {};
		DesktopNotifyTrayData.push(this);
		DesktopNotifyTrayData.push(this.TrayIconsMoveLeft.Id);
		DesktopNotifyTrayData.push(this.TrayIconsMoveRight.Id);
	/*	
		SetNotifyIcon("battery2", "1$106$false", "Battery", "alert(2);", true, false);
	 	SetNotifyIcon("battery3", "1$106$false", "Battery", "alert(3);", true, false);
		SetNotifyIcon("battery4", "1$104$false", "Battery", "alert(4);", true, false);
		SetNotifyIcon("battery5", "e$lovensko", "Battery", "alert(5);", true, false);
		SetNotifyIcon("battery6", "1$106$false", "Battery", "alert(6);", true, false);
		SetNotifyIcon("battery7", "1$100$false", "Battery", "alert(7);", true, false);
		SetNotifyIcon("battery8", "1$106$false", "Battery", "alert(8);", true, false);
		SetNotifyIcon("battery9", "1$106$false", "Battery", "alert(9);", true, false);
		SetNotifyIcon("battery10", "1$102$false", "Battery", "alert(10);", true, false);
		*/
	}
	newNotifyTrayIcon(id){
		eval("this.NotifyIconsObj."+id+" = new ElObj(this.NotifyIconsInner,this.WindowSelf,true);");
		eval("this.NotifyIconsObj."+id+".Edit.cssClass('DesktopNotifyIcon');")
		NotifyIcons[parseInt(NotifyIcons.length, 10)-1].push(eval("this.NotifyIconsObj."+id+".Id"));
	}
	removeNotifyTrayIcon(id){
		try{
			for(var i = 0; i < NotifyIcons.length; i++){
				var found = false;
				for (var j = 0; j < NotifyIcons[i].length; j++){
					if (NotifyIcons[i][j] == id){
						NotifyIcons[i].splice(j, 1);
						found = true;
						break;
					}
				}
				if (found)
					break;
			}
			eval("this.NotifyIconsObj."+id+".destroy();");
		}catch(erd){}
	}
	destroyDesktopNotifyTray(){
		//tray icon area cannot be destroyed, as it is children object of the desktop taskbar object
	}
	destroy(){
		try{
			this.destroyDesktopNotifyTray();
		}catch(erd){}
	}
}

var MinsWins = false;
var MaxsWins = false;
var DOMINALL = false;
function MinAllWindows(){
	var ProcNot = false;
	for (var j = 0; j < WindowProcess.length;j++){
		if (WindowProcess[j][3] != true && WindowProcess[j][1] != true){
			ProcNot = true;
			break;
		}
	}
	if (ProcNot == true)
		MinsWins = false;
	else
		MinsWins = true;
	DOMINALL = true;
	for (var i = 0; i < WindowProcess.length; i++){
		if (WindowProcess[i][1] == MinsWins && WindowProcess[i][3] != true){
			MinWinNoSet(WindowProcess[i],i);
		}
	}
	DOMINALL = false;
}

function MaxAllWindows(){
	var ProcNot = false;
	for (var j = 0; j < WindowProcess.length;j++){
		if (WindowProcess[j][1] != true && WindowProcess[j][3] != true && WindowProcess[j][2] != true){
			ProcNot = true;
			break;
		}
	}
	if (ProcNot == true)
		MaxsWins = false;
	else
		MaxsWins = true;
	for (var i = 0; i < WindowProcess.length; i++){
		if (WindowProcess[i][2] == MaxsWins && WindowProcess[i][1] != true && WindowProcess[i][3] != true){
			MaxWin(WindowProcess[i], i);
		}
	}
}

function CloseAllWindows(){
	var CopyWinProcess = [];
	for (var i = 0; i < WindowProcess.length;i++){
		CopyWinProcess.push(WindowProcess[i]);
	}
	for (var i = 0; i < CopyWinProcess.length;i++){
		CopyWinProcess[i][3] = false;
		ClWin(CopyWinProcess[i],i);
	}
	CopyWinProcess = [];	
}

function MaxWin(WProc,n){
	if (WProc[1] == true)
		MinWinNoSet(WProc,n);
	else if (WProc[3] != true){
		if (WProc[2]){
			WProc[2] = false;
			WindowSystemPos(WProc[0]);
			try{
				GtE(WProc[6]).style.display = "block";
			}catch(erd){}
			if (!StyleDisplay)
				SetImage(WProc[0].MaximizeTitle.Id,1,48,0);
			eval(WProc[0].WindowIconIn.Edit.getCode());
			WProc[0].Edit.removeCssClass("maximizedWin");
			WProc[0].Data.Edit.removeCssClass("maximizedWinDowData");
			WProc[0].MaximizeTitle.Edit.removeCssClass("WindowTitleButtonRestoreNew");
			WProc[0].MaximizeTitle.Edit.addCssClass("WindowTitleButtonMaximizeNew");
			WProc[0].TitleBar.Edit.removeCssClass("maximizedWinTitleBar");
			WProc[0].setResizeObj(true);
            if (DisAllowRS.indexOf(WProc[0].Id) > -1)
                DisAllowRS.splice(DisAllowRS.indexOf(WProc[0].Id), 1);
		}
		else{
			WProc[2] = true;
			WProc[0].WSL = GtE(WProc[0].Id).offsetWidth/(WProc[0].Grid.Pel.offsetWidth/100);
			WProc[0].WST = GtE(WProc[0].Id).offsetHeight/(WProc[0].Grid.Pel.offsetHeight/100);
			WProc[0].WSPX = GtE(WProc[0].Id).offsetLeft/(WProc[0].Grid.Pel.offsetWidth/100);
			WProc[0].WSPY = GtE(WProc[0].Id).offsetTop/(WProc[0].Grid.Pel.offsetHeight/100);
			WProc[0].Edit.setSize("0%","0%","100%","100%");
			WProc[0].Edit.addCssClass("maximizedWin");
			WProc[0].Data.Edit.addCssClass("maximizedWinDowData");
			WProc[0].TitleBar.Edit.addCssClass("maximizedWinTitleBar");
			WProc[0].MaximizeTitle.Edit.addCssClass("WindowTitleButtonRestoreNew");
			WProc[0].MaximizeTitle.Edit.removeCssClass("WindowTitleButtonMaximizeNew");
			WProc[0].setResizeObj(false);
            if (DisAllowRS.indexOf(WProc[0].Id) == -1)
                DisAllowRS.push(WProc[0].Id);
			try{
				rEl.style.display = "none";
			}catch(erd){}
			if (!StyleDisplay)
				SetImage(WProc[0].MaximizeTitle.Id,1,47,0);
	//		eval(WProc[0].WindowIconIn.Edit.getCode());
		}
		ToogleClass(WProc[0].Id, 'WMainMax');
		WProc[0].WindowIconIn.Edit.show(true);
		WindowProcess[n] = WProc;
	}
}

function SelectLastWin(){
	var ObjectLastGet = "";
	var Highest = 0;
	for (var j = 0; j < ObjectLastIndexActual.length; j++){
		for (var i = 0; i < WindowProcess.length; i++){
			if (WindowProcess[i][0].Id == ObjectLastIndexActual[j]){
				if (WindowProcess[i][1] != true && WindowProcess[i][3] != true){
					if (ObjectLastIndexActualIndex[j] > Highest || (ObjectLastIndexActualIndex[j] == Highest && Highest == 0)){
						ObjectLastGet = WindowProcess[i][0].Id;	
					}
				}
				break;
			}
		}
	}
	MakeSelectedWin(ObjectLastGet);	
}

//switches styles based on if window is top front activated or if it is in background inactive
function MakeSelectedWin(id){
	var IsInWindows = false;
	if (id != ""){
		for (var i = 0; i < WindowProcess.length; i++){
			if (WindowProcess[i][0].Id == id){
				IsInWindows = true;
				break;
			}
		}
	}
	if (IsInWindows){
		for (var i = 0; i < WindowProcess.length; i++){
			if (WindowProcess[i][1] != true && WindowProcess[i][3] != true && (WindowProcess[i][0].getType() == "Window" || WindowProcess[i][0].getType() == "ShellWin")){
				if (WindowProcess[i][0].Id == id)
					SelectWin(WindowProcess[i],i,2);	
				else
					SelectWin(WindowProcess[i],i,1);
			}
			else if(WindowProcess[i][1] == true && WindowProcess[i][3] != true && (WindowProcess[i][0].getType() == "Window" || WindowProcess[i][0].getType() == "ShellWin"))
				SelectWin(WindowProcess[i],i,0);
		}
	}
	else{
		for (var i = WindowProcess.length-1; i >= 0; i--){
			if (WindowProcess[i][1] != true && WindowProcess[i][3] != true){
				SelectWin(WindowProcess[i],i,2);
				break;
			}
		}
	}
}

function ResWin(WProc,n){
	if (WProc[1] == true)
		MinWin(WProc,n);
	if (WProc[3] != true){
		WProc[2] = false;
		WindowSystemPos(WProc[0])
		try{
			GtE(WProc[6]).style.display = "block";
		}catch(erd){}
		if (!StyleDisplay)
		SetImage(WProc[0].MaximizeTitle.Id,1,48,0);
		eval(WProc[0].WindowIconIn.Edit.getCode());
		WProc[0].Edit.removeCssClass("maximizedWin");
		WProc[0].TitleBar.Edit.removeCssClass("maximizedWinTitleBar");
		WProc[0].MaximizeTitle.Edit.removeCssClass("WindowTitleButtonRestoreNew");
		WProc[0].MaximizeTitle.Edit.addCssClass("WindowTitleButtonMaximizeNew");
		WProc[0].setResizeObj(true);		
	}
/*	
	var MainTray = false;
	if (MainSysTray && MainSysTray != undefined && MainSysTray != null)
		MainTray = MainSysTray.IsTrayHidden();
	if (MainTray){	
		if (WProc[3] != true){
			WProc[1] = false;
			GtE(WProc[0].Id).style.display = "block";
			if (MainSysTray.IsTrayHidden())
				TrayUp(WProc[0]);
			else
				GtE(WProc[4]).style.filter = "brightness(150%)";
			WProc[0].WindowIconIn.Edit.show(true);
			eval(WProc[0].WindowIconIn.Edit.getCode());
			WProc[2] = false;
			WindowSystemPos(WProc[0]);
			try{
				GtE(WProc[6]).style.display = "block";
			}catch(erd){}
			if (!StyleDisplay)
			SetImage(WProc[0].MaximizeTitle.Id,1,48,0);
			eval(WProc[0].WindowIconIn.Edit.getCode());
			WProc[0].Edit.removeCssClass("maximizedWin");
			WProc[0].TitleBar.Edit.removeCssClass("maximizedWinTitleBar");
			WProc[0].MaximizeTitle.Edit.removeCssClass("WindowTitleButtonRestoreNew");
			WProc[0].MaximizeTitle.Edit.addCssClass("WindowTitleButtonMaximizeNew");
			WProc[0].setResizeObj(true);
		}
	}
	
	*/
}

function ActWin(WProc,n){
	if (WProc[1] == false)
		MinWinNoSet(WProc,n);
	MinWinNoSet(WProc,n);
/*	var MainTray = false;
	var MainTrayHide = false;
	var WinHandEle = null;
	var MainTrayNoBarMinimizeType = 2;
	if (MainSysTray != null){
		MainTray = true;
		MainTrayHide = MainSysTray.IsTrayHidden();
		MainTrayNoBarMinimizeType = MainSysTray.NoBarMinimizeType;
	}	
	if (WProc[1] == true)
		MinWinNoSet(WProc,n);
	if (WProc[3] != true){
		WProc[1] = false;
		GtE(WProc[0].Id).style.display = "block";
		if (!MainSysTray || MainTrayHide)
			TrayUp(WProc[0]);
		WProc[0].WindowIconIn.Edit.show(true);
		eval(WProc[0].WindowIconIn.Edit.getCode());
		SelectWin(WProc,n,2);
	}   */
}

//WProc[8] - true - sets taskbar button to be active for the window
//WProc[8] - false- sets taskbar button to be inactive for the window
function SetWin(WProc,n){
	var MainTray = false;
	var MainTrsyHide = false;
	if (MainSysTray != null){
		MainTray = true;
		MainTrsyHide = MainSysTray.IsTrayHidden();
	}
	try{
		if (WProc[8]){
			WProc[8] = false;
//			if (!MainSysTray || MainTrsyHide)
//				WProc[0].WinHand.Edit.hide();
//			else
				MainSysTray.unSetIconWin(WProc[0].Id);
		}
		else{
			WProc[8] = true;
//			if (!MainSysTray || MainTrsyHide)
//				WProc[0].WinHand.Edit.show();
//			else
				MainSysTray.setIconWin(WProc[0].Id);
		}
	}catch(erd){}
}

//t-0 - minimize, t-1 - inactive, t-2 active
function SelectWin(WProc,n,t){
	var MainTray = false;
	var MainTrayHide = false;
	var WinHandEle = null;
	if (MainSysTray != null){
		MainTray = true;
		MainTrayHide = MainSysTray.IsTrayHidden();
	}
	if (t == 2){
		try{
			WProc[0].Edit.addCssClass("activeobj");
			WProc[0].TitleBar.Edit.addCssClass("activeobj");
			WProc[0].Title.Edit.addCssClass("activeobj");
			WProc[0].WindowIconIn.Edit.addCssClass("activeobj");
			WProc[0].TitleInner.Edit.addCssClass("activeobj");
			WProc[0].TitleButtons.Edit.addCssClass("activeobj");
			WProc[0].TitleMenus.Edit.addCssClass("activeobj");
			WProc[0].StatusBar.Edit.addCssClass("activeobj");
			WProc[0].Data.Edit.addCssClass("activeobj");
			
			WProc[0].Edit.removeCssClass("inactiveobj");
			WProc[0].TitleBar.Edit.removeCssClass("inactiveobj");
			WProc[0].Title.Edit.removeCssClass("inactiveobj");
			WProc[0].WindowIconIn.Edit.removeCssClass("inactiveobj");
			WProc[0].TitleInner.Edit.removeCssClass("inactiveobj");
			WProc[0].TitleButtons.Edit.removeCssClass("inactiveobj");
			WProc[0].TitleMenus.Edit.removeCssClass("inactiveobj");
			WProc[0].StatusBar.Edit.removeCssClass("inactiveobj");
			WProc[0].Data.Edit.removeCssClass("inactiveobj");
			
			WProc[0].Edit.addCssClass("windowobjactive");
			WProc[0].TitleBar.Edit.addCssClass("titlebaractive");
			WProc[0].Title.Edit.addCssClass("titlebartextactive");
			WProc[0].WindowIconIn.Edit.addCssClass("WindowIconInactive");
			WProc[0].TitleInner.Edit.addCssClass("windowtitleobjactive");
			WProc[0].TitleButtons.Edit.addCssClass("titlebarcontrolsactive");
			WProc[0].TitleMenus.Edit.addCssClass("titlemenusactive");
			WProc[0].StatusBar.Edit.addCssClass("statusbaractive");
			WProc[0].Data.Edit.addCssClass("windowdataactive");

			WProc[0].Edit.removeCssClass("windowobjinactive");
			WProc[0].TitleBar.Edit.removeCssClass("titlebarinactive");
			WProc[0].Title.Edit.removeCssClass("titlebartextinactive");
			WProc[0].WindowIconIn.Edit.removeCssClass("WindowIconIninactive");
			WProc[0].TitleInner.Edit.removeCssClass("windowtitleobjinactive");
			WProc[0].TitleButtons.Edit.removeCssClass("titlebarcontrolsinactive");
			WProc[0].TitleMenus.Edit.removeCssClass("titlemenusinactive");
			WProc[0].StatusBar.Edit.removeCssClass("statusbarinactive");
			WProc[0].Data.Edit.removeCssClass("windowdatainactive");
		}catch(erd){}
		if (WProc[8]){
			if (!MainSysTray || MainTrayHide){
				try{
					GtE(WProc[0].WinHand.Id).Edit.addCssClass("activeobj");
					GtE(WProc[0].WinHand.Id).Edit.removeCssClass("inactiveobj");
					GtE(WProc[0].WinHand.Id).Edit.addCssClass("titlebaractive");
					GtE(WProc[0].WinHand.Id).Edit.removeCssClass("titlebarinactive");
				}catch(erd){}
				
				try{
					WinHandEle = GtE(WindowObj.WinHand.Id).getElementsByClassName("WindowTitle");
					for (var i = 0; i < WinHandEle.length; i++){
						GtE(WinHandEle[i]).className += " activeobj";
						GtE(WinHandEle[i]).classList.remove("inactiveobj");
						GtE(WinHandEle[i]).className += " titlebartextactive";
						GtE(WinHandEle[i]).classList.remove("titlebartextinactive");
					}
				}catch(erd){}
				
				try{
					WinHandEle = GtE(WindowObj.WinHand.Id).getElementsByClassName("WindowIconIn");
					for (var i = 0; i < WinHandEle.length; i++){
						GtE(WinHandEle[i]).className += " activeobj";
						GtE(WinHandEle[i]).classList.remove("inactiveobj");
						GtE(WinHandEle[i]).className += " WindowIconInactive";
						GtE(WinHandEle[i]).classList.remove("WindowIconIninactive");
					}
				}catch(erd){}
				
				try{
					WinHandEle = GtE(WindowObj.WinHand.Id).getElementsByClassName("WindowTitleInnerNew");
					for (var i = 0; i < WinHandEle.length; i++){
						GtE(WinHandEle[i]).className += " activeobj";
						GtE(WinHandEle[i]).classList.remove("inactiveobj");
						GtE(WinHandEle[i]).className += " windowtitleobjactive";
						GtE(WinHandEle[i]).classList.remove("windowtitleobjinactive");
					}
				}catch(erd){}

				try{
					WinHandEle = GtE(WindowObj.WinHand.Id).getElementsByClassName("WindowTitleButtonsNew");
					for (var i = 0; i < WinHandEle.length; i++){
						GtE(WinHandEle[i]).className += " activeobj";
						GtE(WinHandEle[i]).classList.remove("inactiveobj");
						GtE(WinHandEle[i]).className += " titlebarcontrolsactive";
						GtE(WinHandEle[i]).classList.remove("titlebarcontrolsinactive");
					}
				}catch(erd){}				
			}
			else{
				try{
					GtE(WProc[4]).style.filter = "brightness(150%)";
				}catch(erd){}
			}
		}			
	}
	else{
		try{
			WProc[0].Edit.addCssClass("inactiveobj");
			WProc[0].TitleBar.Edit.addCssClass("inactiveobj");
			WProc[0].Title.Edit.addCssClass("inactiveobj");
			WProc[0].WindowIconIn.Edit.addCssClass("inactiveobj");
			WProc[0].TitleInner.Edit.addCssClass("inactiveobj");
			WProc[0].TitleButtons.Edit.addCssClass("inactiveobj");
			WProc[0].TitleMenus.Edit.addCssClass("inactiveobj");
			WProc[0].StatusBar.Edit.addCssClass("inactiveobj");
			WProc[0].Data.Edit.addCssClass("inactiveobj");

			WProc[0].Edit.removeCssClass("activeobj");
			WProc[0].TitleBar.Edit.removeCssClass("activeobj");
			WProc[0].Title.Edit.removeCssClass("activeobj");
			WProc[0].WindowIconIn.Edit.removeCssClass("activeobj");
			WProc[0].TitleInner.Edit.removeCssClass("activeobj");
			WProc[0].TitleButtons.Edit.removeCssClass("activeobj");
			WProc[0].TitleMenus.Edit.removeCssClass("activeobj");
			WProc[0].StatusBar.Edit.removeCssClass("activeobj");
			WProc[0].Data.Edit.removeCssClass("activeobj");

			WProc[0].Edit.addCssClass("windowobjinactive");
			WProc[0].TitleBar.Edit.addCssClass("titlebarinactive");
			WProc[0].Title.Edit.addCssClass("titlebartextinactive");
			WProc[0].WindowIconIn.Edit.addCssClass("WindowIconIninactive");
			WProc[0].TitleInner.Edit.addCssClass("windowtitleobjinactive");
			WProc[0].TitleButtons.Edit.addCssClass("titlebarcontrolsinactive");
			WProc[0].TitleMenus.Edit.addCssClass("titlemenusinactive");
			WProc[0].StatusBar.Edit.addCssClass("statusbarinactive");
			WProc[0].Data.Edit.addCssClass("windowdatainactive");

			WProc[0].Edit.removeCssClass("windowobjactive");
			WProc[0].TitleBar.Edit.removeCssClass("titlebaractive");
			WProc[0].Title.Edit.removeCssClass("titlebartextactive");
			WProc[0].WindowIconIn.Edit.removeCssClass("WindowIconInactive");
			WProc[0].TitleInner.Edit.removeCssClass("windowtitleobjactive");
			WProc[0].TitleButtons.Edit.removeCssClass("titlebarcontrolsactive");
			WProc[0].TitleMenus.Edit.removeCssClass("titlemenusactive");
			WProc[0].StatusBar.Edit.removeCssClass("statusbaractive");
			WProc[0].Data.Edit.removeCssClass("windowdataactive");
		}catch(erd){}
		if (WProc[8]){
			if (!MainSysTray || MainTrayHide){
				try{
					GtE(WProc[0].WinHand.Id).Edit.addCssClass("inactiveobj");
					GtE(WProc[0].WinHand.Id).Edit.removeCssClass("activeobj");
					GtE(WProc[0].WinHand.Id).Edit.addCssClass("titlebarinactive");
					GtE(WProc[0].WinHand.Id).Edit.removeCssClass("titlebaractive");
				}catch(erd){}
				
				try{
					WinHandEle = GtE(WindowObj.WinHand.Id).getElementsByClassName("WindowTitle");
					for (var i = 0; i < WinHandEle.length; i++){
						GtE(WinHandEle[i]).className += " inactiveobj";
						GtE(WinHandEle[i]).classList.remove("activeobj");
						GtE(WinHandEle[i]).className += " titlebartextinactive";
						GtE(WinHandEle[i]).classList.remove("titlebartextactive");
					}
				}catch(erd){}
				
				try{
					WinHandEle = GtE(WindowObj.WinHand.Id).getElementsByClassName("WindowIconIn");
					for (var i = 0; i < WinHandEle.length; i++){
						GtE(WinHandEle[i]).className += " inactiveobj";
						GtE(WinHandEle[i]).classList.remove("activeobj");
						GtE(WinHandEle[i]).className += " WindowIconIninactive";
						GtE(WinHandEle[i]).classList.remove("WindowIconInactive");
					}
				}catch(erd){}
				
				try{
					WinHandEle = GtE(WindowObj.WinHand.Id).getElementsByClassName("WindowTitleInnerNew");
					for (var i = 0; i < WinHandEle.length; i++){
						GtE(WinHandEle[i]).className += " inactiveobj";
						GtE(WinHandEle[i]).classList.remove("activeobj");
						GtE(WinHandEle[i]).className += " windowtitleobjinactive";
						GtE(WinHandEle[i]).classList.remove("windowtitleobjactive");
					}
				}catch(erd){}
				
				try{
					WinHandEle = GtE(WindowObj.WinHand.Id).getElementsByClassName("WindowTitleButtonsNew");
					for (var i = 0; i < WinHandEle.length; i++){
						GtE(WinHandEle[i]).className += " inactiveobj";
						GtE(WinHandEle[i]).classList.remove("activeobj");
						GtE(WinHandEle[i]).className += " titlebarcontrolsinactive";
						GtE(WinHandEle[i]).classList.remove("titlebarcontrolsactive");
					}
				}catch(erd){}
			}
			else if(t == 1){
				try{
					GtE(WProc[4]).style.filter = "brightness(75%)";
				}catch(erd){}
			}
			else{
				try{
					GtE(WProc[4]).style.filter = "brightness(45%)";
				}catch(erd){}
			}
		}			
	}
}

function ShowWin(WProc,n){
	var MainTray = false;
	var MainTrayHide = false;
	var WinHandEle = null;
	var MainTrayNoBarMinimizeType = 2;
	if (MainSysTray != null){
		MainTray = true;
		MainTrayHide = MainSysTray.IsTrayHidden();
		MainTrayNoBarMinimizeType = MainSysTray.NoBarMinimizeType;
	}	
	if (WProc[3] != true){
		if (WProc[1]){
			WProc[1] = false;
			GtE(WProc[0].Id).style.display = "block";
			WProc[0].WindowIconIn.Edit.show(true);
//			eval(WProc[0].WindowIconIn.Edit.getCode());
			if (WProc[8]){
				if (!MainSysTray || MainTrayHide)
					TrayUp(WProc[0]);
				SelectWin(WProc,n,2);
			}
		}
		else{
			WProc[1] = true;	
			if (!DOMINALL)
				SelectLastWin();
			SelectWin(WProc,n,0);
			if (WProc[8]){
				if (!MainSysTray || MainTrayHide){
					var MinType = false;
					if (WProc[0].NoBarMinimizeType == 1) MinType = false;
					else if (WProc[0].NoBarMinimizeType == 2) MinType = true;
					else if (MainTrayNoBarMinimizeType == 1) MinType = false;
					else if (MainTrayNoBarMinimizeType == 2) MinType = true;
					else MinType = true;
					TrayDown(WProc[0], MinType);
				}
			}
			GtE(WProc[0].Id).style.display = "none";
		}
		WindowProcess[n] = WProc;
	}
}

function MinWinNoSet(WProc,n){
	var MainTray = false;
	var MainTrayHide = false;
	var WinHandEle = null;
	var MainTrayNoBarMinimizeType = 2;
	if (MainSysTray != null){
		MainTray = true;
		MainTrayHide = MainSysTray.IsTrayHidden();
		MainTrayNoBarMinimizeType = MainSysTray.NoBarMinimizeType;
	}	
	if (WProc[3] != true){
		if (WProc[1]){
			WProc[1] = false;
			GtE(WProc[0].Id).style.display = "block";
			WProc[0].WindowIconIn.Edit.show(true);
			eval(WProc[0].WindowIconIn.Edit.getCode());
			if (WProc[8]){
				if (!MainSysTray || MainTrayHide)
					TrayUp(WProc[0]);
				SelectWin(WProc,n,2);
			}
		}
		else{
			WProc[1] = true;	
			if (!DOMINALL)
				SelectLastWin();
			SelectWin(WProc,n,0);
			if (WProc[8]){
				if (!MainSysTray || MainTrayHide){
					var MinType = false;
					if (WProc[0].NoBarMinimizeType == 1) MinType = false;
					else if (WProc[0].NoBarMinimizeType == 2) MinType = true;
					else if (MainTrayNoBarMinimizeType == 1) MinType = false;
					else if (MainTrayNoBarMinimizeType == 2) MinType = true;
					else MinType = true;
					TrayDown(WProc[0], MinType);
				}
			}			
			GtE(WProc[0].Id).style.display = "none";
		}
		WindowProcess[n] = WProc;
	}
}

function MinWin(WProc,n){
	var MainTray = false;
	var MainTrayHide = false;
	var WinHandEle = null;
	var MainTrayNoBarMinimizeType = 2;
	if (MainSysTray != null){
		MainTray = true;
		MainTrayHide = MainSysTray.IsTrayHidden();
		MainTrayNoBarMinimizeType = MainSysTray.NoBarMinimizeType;
	}	
	if (WProc[3] != true){
		if (!WProc[8])
			SetWin(WProc,n);
		if (WProc[1]){
			WProc[1] = false;
			GtE(WProc[0].Id).style.display = "block";
			WProc[0].WindowIconIn.Edit.show(true);
			eval(WProc[0].WindowIconIn.Edit.getCode());
			if (!MainSysTray || MainTrayHide)
				TrayUp(WProc[0]);
			SelectWin(WProc,n,2);
		}
		else{
			WProc[1] = true;	
			if (!DOMINALL)
				SelectLastWin();
			SelectWin(WProc,n,0);
			if (!MainSysTray || MainTrayHide){
				var MinType = false;
				if (WProc[0].NoBarMinimizeType == 1) MinType = false;
				else if (WProc[0].NoBarMinimizeType == 2) MinType = true;
				else if (MainTrayNoBarMinimizeType == 1) MinType = false;
				else if (MainTrayNoBarMinimizeType == 2) MinType = true;
				else MinType = true;
				TrayDown(WProc[0], MinType);
			}			
			GtE(WProc[0].Id).style.display = "none";
		}
		WindowProcess[n] = WProc;
	}
}

//restore window if not on top or do a minimize/restore action if not ontop
function MinOrResWin(WProc,n){
	var ObjectLastGet = "";
	var Highest = 0;
	for (var j = 0; j < ObjectLastIndexActual.length; j++){
		for (var i = 0; i < WindowProcess.length; i++){
			if (WindowProcess[i][0].Id == ObjectLastIndexActual[j]){
				if (WindowProcess[i][1] != true && WindowProcess[i][3] != true){
					if (ObjectLastIndexActualIndex[j] > Highest || (ObjectLastIndexActualIndex[j] == Highest && Highest == 0)){
						ObjectLastGet = WindowProcess[i][0].Id;	
					}
				}
				break;
			}
		}
	}
	if (ObjectLastGet == WProc[0].Id)
		MinWin(WProc,n);
	else
		ActWin(WProc,n);
}

function ClWin(WProc,n){
	WProc[8] = 0;
	if (WProc[1] == true)
		MinWin(WProc,n);
	else{
		MinWin(WProc,n);
		MinWin(WProc,n);
	}
//	TrayUp(WProc[0]);
	WProc[0].destroy();
}

/*

function ClWin(WProc,n){
	if (WProc[1] == true){
		try{
	//		MinWin(WProc,n,t);
			MinWin(WProc,n);
		}
		catch(erd){}
	}
	if (WProc[3]){
		WProc[3] = false;
//		WProc[0].Edit.show(true);
		GtE(WProc[0].Id).style.display = "block";
		GtE(WProc[4]).style.display = "flex";
		eval(WProc[0].WindowIconIn.Edit.getCode());
	//	if (!t){
	//		WProc[0].selectWindow(true);
	//	}
	}
	else{
		WProc[3] = true;
	//	WProc[0].Edit.hide(true);
		GtE(WProc[0].Id).style.display = "none";
		GtE(WProc[4]).style.display = "none";
		var counts = 0;
		for (var i = 0; i < GtE(WProc[4]).parentNode.childNodes.length; i++){
			if (GtE(WProc[4]).parentNode.childNodes[i].offsetLeft != 0)
				counts++;
		}
		if (counts < 5){
			for (var j = 0; j < GtE(WProc[4]).parentNode.parentNode.childNodes.length; j++){
				if (GtE(WProc[4]).parentNode.parentNode.childNodes[j]){
					if (GtE(WProc[4]).parentNode.parentNode.childNodes[j].className == "TrayIconsMoveLeft" || GtE(WProc[4]).parentNode.parentNode.childNodes[j].className == "TrayIconsMoveRight")
						GtE(WProc[4]).parentNode.parentNode.childNodes[j].style.visibility = "hidden";
				}
			}
		}
	//	if (!t)
	//		WProc[0].selectWindow(false);	
	}
	WindowProcess[n] = WProc;
}

*/

function MoveWin(WProc,n){
	if (WProc[1] == true){
		try{
			MinWin(WProc,n);
		}
		catch(erd){}
	}
	WProc[0].WSPX = GtE(WProc[0].Id).offsetLeft/(WProc[0].Grid.Pel.offsetWidth/100);
	WProc[0].WSPY = GtE(WProc[0].Id).offsetTop/(WProc[0].Grid.Pel.offsetHeight/100);
	WProc[0].WSL = GtE(WProc[0].Id).offsetWidth/(WProc[0].Grid.Pel.offsetWidth/100);
	WProc[0].WST = GtE(WProc[0].Id).offsetHeight/(WProc[0].Grid.Pel.offsetHeight/100);		
	WindowProcess[n] = WProc;
}

function ElWin(id,type){
	for (var i = 0; i < WindowProcess.length;i++){
		if (WindowProcess[i][0].Id == id){
			if (type == "minimize")
				MinWin(WindowProcess[i],i);
			if (type == "minimizenoset")
				MinWinNoSet(WindowProcess[i],i);
			else if (type == "maximize")
				MaxWin(WindowProcess[i],i);
			else if (type == "close")
				ClWin(WindowProcess[i],i);
			else if (type == "move")
				MoveWin(WindowProcess[i],i);
			else if (type == "get")
				return [WindowProcess[i],i];
			else if (type == "restore")
				ResWin(WindowProcess[i],i);
			else if (type == "activate")
				ActWin(WindowProcess[i],i);
			else if (type == "show")
				ShowWin(WindowProcess[i],i);
			else if (type == "minimizeorrestore")
				MinOrResWin(WindowProcess[i],i);
			break;
		}
	}
}

var ChooseWindowByRibbonList = [];
var ChooseWindowByRibbonListIndex = ChooseWindowByRibbonList.length;
var ChooseWindowByRibbonListRev = true;
function LineApplications(){
	ChooseWindowByRibbonList = [];
	ChooseWindowByRibbonListIndex = ChooseWindowByRibbonList.length;
	ChooseWindowByRibbonListRev = true;	
	for (var i = 0; i < WindowProcess.length;i++){
		if (!WindowProcess[i][3])
			ChooseWindowByRibbonList.push(WindowProcess[i][0].Id);
	}
}

function GetWindowProcess(id){
	var WindowProcessId = 0;
	for (var i = 0; i < WindowProcess.length;i++){
		if (WindowProcess[i][0].Id == id){
			WindowProcessId = i;
			break;
		}
	}
	return WindowProcessId;
}

function RemoveWindowProcess(id){
	var WindowProcessId = -1;
	for (var i = 0; i < WindowProcess.length;i++){
		if (WindowProcess[i][0].Id == id){
			WindowProcessId = i;
			break;
		}
	}
	WindowProcess.splice(WindowProcessId, 1);
}

function SetToImageViaWindowProcess(WindowProcessId,id){
	var inIconSrc = WindowProcess[WindowProcessId][7].split("$");
	if (inIconSrc.length != 3)
		SetImage(id,winIconSrc,0,false);
	else
		SetImage(id,inIconSrc[0],inIconSrc[1],eval(inIconSrc[2]));						
}

var SelectLinedApplicationNum = 0;
function SelectLinedApplication(bool){
	if (bool){//up
		if (!ChooseWindowByRibbonListRev)
			ChooseWindowByRibbonListIndex = parseInt(ChooseWindowByRibbonListIndex,10)+2;
		ChooseWindowByRibbonListRev = true;
		if (ChooseWindowByRibbonListIndex % 3 == 0){
			if (ChooseWindowByRibbonListIndex < ChooseWindowByRibbonList.length){
				SetToImageViaWindowProcess(GetWindowProcess(ChooseWindowByRibbonList[ChooseWindowByRibbonListIndex]),"WindowChooseIcon0");			
				GtE("WindowChooseIcon0").style.display = "block";
			}
			else
				GtE("WindowChooseIcon0").style.display = "none";			
			if (parseInt(ChooseWindowByRibbonListIndex,10)+1 < ChooseWindowByRibbonList.length){
				SetToImageViaWindowProcess(GetWindowProcess(ChooseWindowByRibbonList[parseInt(ChooseWindowByRibbonListIndex,10)+1]),"WindowChooseIcon1");
				GtE("WindowChooseIcon1").style.display = "block";
			}
			else
				GtE("WindowChooseIcon1").style.display = "none";			
			if (parseInt(ChooseWindowByRibbonListIndex,10)+2 < ChooseWindowByRibbonList.length){
				SetToImageViaWindowProcess(GetWindowProcess(ChooseWindowByRibbonList[parseInt(ChooseWindowByRibbonListIndex,10)+2]),"WindowChooseIcon2");			
				GtE("WindowChooseIcon2").style.display = "block";
			}
			else
				GtE("WindowChooseIcon2").style.display = "none";			
		}
		SpeedWriteIn("WindowChooseTitle",WindowProcess[GetWindowProcess(ChooseWindowByRibbonList[ChooseWindowByRibbonListIndex])][5]);
		for (var i = 0; i < 3; i++)
			GtE("WindowChooseIcon"+i).style.border = "none";			
		GtE("WindowChooseIcon"+(ChooseWindowByRibbonListIndex%3)).style.border = "0.5vw solid #003399";
		SelectLinedApplicationNum = ChooseWindowByRibbonListIndex;
		ChooseWindowByRibbonListIndex++;
		if (ChooseWindowByRibbonListIndex >= ChooseWindowByRibbonList.length)
			ChooseWindowByRibbonListIndex = 0;
	}
	else{
		if (ChooseWindowByRibbonListRev)
			ChooseWindowByRibbonListIndex = parseInt(ChooseWindowByRibbonListIndex,10)-2;
		ChooseWindowByRibbonListRev = false;		
		if (ChooseWindowByRibbonListIndex % 3 == 0){
			if (ChooseWindowByRibbonListIndex >= 0){
				SetToImageViaWindowProcess(GetWindowProcess(ChooseWindowByRibbonList[ChooseWindowByRibbonListIndex]),"WindowChooseIcon0");			
				GtE("WindowChooseIcon0").style.display = "block";
			}
			else
				GtE("WindowChooseIcon0").style.display = "none";
			if (parseInt(ChooseWindowByRibbonListIndex,10)-1 >= 0){
				SetToImageViaWindowProcess(GetWindowProcess(ChooseWindowByRibbonList[parseInt(ChooseWindowByRibbonListIndex,10)-1]),"WindowChooseIcon1");
				GtE("WindowChooseIcon1").style.display = "block";
			}
			else
				GtE("WindowChooseIcon1").style.display = "none";
			if (parseInt(ChooseWindowByRibbonListIndex,10)-2 >= 0){
				SetToImageViaWindowProcess(GetWindowProcess(ChooseWindowByRibbonList[parseInt(ChooseWindowByRibbonListIndex,10)-2]),"WindowChooseIcon2");			
				GtE("WindowChooseIcon2").style.display = "block";
			}
			else
				GtE("WindowChooseIcon2").style.display = "none";			
		}
		SpeedWriteIn("WindowChooseTitle",WindowProcess[GetWindowProcess(ChooseWindowByRibbonList[ChooseWindowByRibbonListIndex])][5]);
		for (var i = 0; i < 3; i++)
			GtE("WindowChooseIcon"+i).style.border = "none";			
		GtE("WindowChooseIcon"+(ChooseWindowByRibbonListIndex%3)).style.border = "0.5vw solid #003399";		
		SelectLinedApplicationNum = ChooseWindowByRibbonListIndex;		
		ChooseWindowByRibbonListIndex--;
		if (ChooseWindowByRibbonListIndex < 0)
			ChooseWindowByRibbonListIndex = parseInt(ChooseWindowByRibbonList.length,10)-1;		
	}
}

function ChooseWindowByRibbon(){
	if (!ChooseWindowRibbonSet){
		SpeedVisible("WindowChoose");
		LineApplications();
		SelectLinedApplication(true);
		ChooseWindowRibbonSet = true;
	}
	else{
		SpeedHidden("WindowChoose");
		ChooseWindowRibbonSet = false;
	}
}

class DesktopTray extends ElObj{
	constructor(name,ParentSelf,WindowSelf){
		super(ParentSelf,WindowSelf,true);
		this.ObjType = "DesktopTray";
		var self = this;
		this.WindowSelf = WindowSelf;
		this.ParentSelf = ParentSelf;
		this.Buttons = {};
		this.Hidden = false;
		this.DoNotUseMoveTrayOverride = false;
		this.NoBarMinimizeType = 0;//default NoBarMinimizeType - for windows with same seeting set as 0 (default)
		if (!ParentSelf.ActiveDesktop){
			this.NotifyTray = new DesktopNotifyTray(name+"NotifyTray",this,WindowSelf);
			this.Menu = new DesktopMenu(name+"MenuButton",this,WindowSelf,ParentSelf);
			this.DesktopStatus = new ElObj(this,WindowSelf,true);
			this.DesktopAction = new ElObj(this,WindowSelf,true);
			this.DesktopWins = new ElObj(this,WindowSelf,true);
			this.DesktopWinsIcons = new ElObj(this,WindowSelf,true);
			this.TrayIconsMoveLeft = new ElObj(this,WindowSelf,true);
			this.TrayIconsMoveRight = new ElObj(this,WindowSelf,true);
			//styly
			this.Edit.cssClass("DesktopTray DesktopTrayCustom");
			this.DesktopStatus.Edit.cssClass("TrayDesktopStatus");		
			this.DesktopAction.Edit.cssClass("TrayDesktopAction");	
			this.DesktopWins.Edit.cssClass("TrayDesktopWins");	
			this.TrayIconsMoveLeft.Edit.cssClass("TrayIconsMoveLeft TrayIconsMoveLeftCustom");
			this.TrayIconsMoveRight.Edit.cssClass("TrayIconsMoveRight TrayIconsMoveRightCustom");
			
			this.TrayIconsMoveLeft.Edit.writeIn("<div onclick=\"DesktopTrayMove('left', '"+this.DesktopWins.Id+"', '"+this.TrayIconsMoveLeft.Id+"', '"+this.TrayIconsMoveRight.Id+"',120);\"><</div>");
			this.TrayIconsMoveRight.Edit.writeIn("<div onclick=\"DesktopTrayMove('right', '"+this.DesktopWins.Id+"', '"+this.TrayIconsMoveLeft.Id+"', '"+this.TrayIconsMoveRight.Id+"',120);\">></div>");
			
			this.IconWinData = [];
			this.IconWinDataObj = {};
			DesktopStatusIdentify = this.DesktopStatus.Id;
			DesktopTrayActionId = this.DesktopAction.Id;
			MainSysTray = this;
		}
		else
			this.Edit.cssClass("ActiveDesktopTray");
	}
	setIconWin(id){
		if (this.IconWinData.indexOf(id) == -1){
			eval("this.IconWinDataObj."+id+" = new ElObj(this.DesktopWins,this.WindowSelf,true);");
			eval("this.IconWinDataObj."+id+".Icon = new ElObj(this.IconWinDataObj."+id+".Self,this.WindowSelf,true);");
			eval("this.IconWinDataObj."+id+".Title = new ElObj(this.IconWinDataObj."+id+".Self,this.WindowSelf,true);");
			eval("this.IconWinDataObj."+id+".Edit.cssClass('TrayIconWin TrayIconWinCustom');");
			if (Object.keys(this.IconWinDataObj).length > 1)
				eval("this.IconWinDataObj."+id+".Edit.addCssClass('TrayIconWinMargin');");
			eval("this.IconWinDataObj."+id+".Icon.Edit.cssClass('TrayIconWinIcon');");
			eval("this.IconWinDataObj."+id+".Title.Edit.cssClass('TrayIconWinTitle TrayIconWinTitleCustom');");
			var WindowProcessId = 0;
			for (var i = 0; i < WindowProcess.length;i++){
				if (WindowProcess[i][0].Id == id){
					WindowProcessId = i;
					break;
				}
			}
			eval("this.IconWinDataObj."+id+".Title.Edit.writeIn('"+WindowProcess[WindowProcessId][5]+"');");
		var inIconSrc = WindowProcess[WindowProcessId][7].split("$");
		if (inIconSrc.length != 3)
			SetImage(eval("this.IconWinDataObj."+id+".Icon.Id"),inIconSrc,0,false);
		else
			SetImage(eval("this.IconWinDataObj."+id+".Icon.Id"),inIconSrc[0],inIconSrc[1],eval(inIconSrc[2]));			
			WindowProcess[WindowProcessId][4] = eval("this.IconWinDataObj."+id+".Id");
			//WindowProcess structure id,minimized,maximized,closed, id popisovače system tray,titulek okna
			eval("this.IconWinDataObj."+id+".Edit.setCode('ElWin(\""+id+"\",\"minimizeorrestore\");');");
		//	eval("this.IconWinDataObj."+id+".Edit.setCode('ElWin(\""+id+"\",\"minimize\");');");
			this.IconWinData.push(id);
			DesktopTrayMove("right", this.DesktopWins.Id, this.TrayIconsMoveLeft.Id, this.TrayIconsMoveRight.Id, 290000);
			if (Object.keys(this.IconWinDataObj).length < 6){
				GtE(this.TrayIconsMoveLeft.Id).style.visibility = "hidden";
				GtE(this.TrayIconsMoveRight.Id).style.visibility = "hidden";
			}
		}
	}
	unSetIconWin(id){
		if (this.IconWinData.indexOf(id) != -1){
			GtE(eval("this.IconWinDataObj."+id).Id).parentNode.removeChild(GtE(eval("this.IconWinDataObj."+id).Id));
			eval("this.IconWinDataObj."+id+" = 'none'");
			this.IconWinData.splice(this.IconWinData.indexOf(id),1);
			DesktopTrayMove("left", this.DesktopWins.Id, this.TrayIconsMoveLeft.Id, this.TrayIconsMoveRight.Id, 290000);
			var getIndex = 0;
			for (var i in this.IconWinDataObj){
				try{
					if (this.IconWinDataObj[i] == "none")
						getIndex++;
				}catch(erd){}
			}
			if (GtE(this.DesktopWins.Id).childNodes.length < 6){
				GtE(this.TrayIconsMoveLeft.Id).style.visibility = "hidden";
				GtE(this.TrayIconsMoveRight.Id).style.visibility = "hidden";
			}
		}		
	}
	HideTray(){
		this.Hidden = true;
		for (var i = 0; i < WindowProcess.length;i++){
			if (WindowProcess[i][1] == true){
				var MinType = false;
				if (WindowProcess[i][0].NoBarMinimizeType == 1) MinType = false;
				else if (WindowProcess[i][0].NoBarMinimizeType == 2) MinType = true;
				else if (this.NoBarMinimizeType == 1) MinType = false;
				else if (this.NoBarMinimizeType == 2) MinType = true;
				else MinType = true;
				TrayDown(WindowProcess[i][0], MinType);
				break;
			}
		}
		this.Edit.hide(true);
		try{
			this.ParentSelf.Desktop.Edit.addCssClass("DesktopArreaMaximized");
		}catch(erd){}
		try{
			this.ParentSelf.ActiveDesktop.Edit.addCssClass("DesktopArreaMaximized");
		}catch(erd){}
	}
	ShowTray(){
		this.Hidden = false;
		for (var i = 0; i < WindowProcess.length;i++){
			if (WindowProcess[i][1] == true){
				TrayUp(WindowProcess[i][0]);
				break;
			}
		}
		this.Edit.show(true);
		try{
			this.ParentSelf.Desktop.Edit.removeCssClass("DesktopArreaMaximized");
		}catch(erd){}
		try{
			this.ParentSelf.ActiveDesktop.Edit.removeCssClass("DesktopArreaMaximized");
		}catch(erd){}
	}
	IsTrayHidden(){
		return this.Hidden;
	}
	destroyDesktopTray(){
		if (!this.Hidden)
			this.HideTray();
	}
	destroy(){
		try{
			this.destroyDesktopTray();
		}catch(erd){}
	}	
}

var WinHands = [];
var WinHandsPos = [];
var WinTrayMove = [];
var WinTrayMoveId = [];
var WinTrayMoveOldX = [];
var WinTrayMoveOldY = [];
var WinTrayMoveOldId = [];
var WinTrayMoveOldOverride = [];
function TrayDown(WindowObj, type){
	GtE(WindowObj.WinHand.Id).innerHTML = "";
	GtE(WindowObj.WinHand.Id).appendChild(GtE(WindowObj.TitleBar.Id).cloneNode(true));
	var WinMenuRemove = GtE(WindowObj.WinHand.Id).getElementsByClassName("WindowTitleMenus");
	for (var i = 0; i < WinMenuRemove.length; i++){
		WinMenuRemove[i].remove();
	}
	WindowObj.WinHand.Edit.show();
	DisplaceTray(WindowObj);
	var Override = false;
	var MainSysAreaOverride = false;
	if (MainSysTray && MainSysTray != undefined && MainSysTray != null)
		MainSysAreaOverride = MainSysTray.DoNotUseMoveTrayOverride;
	if (!(WindowObj.DoNotUseMoveTrayOverride) && (!MainSysAreaOverride)){
		var Found = WinTrayMoveOldId.indexOf(WindowObj.WinHand.Id);
		if (Found > -1){
			if (WinTrayMoveOldOverride[Found])
				Override = true;
		}
		if (Override)
			type = false;
	}
	var WinHandWidth = GtE(WindowObj.WinHand.Id).offsetWidth;
	var WinHandHeight = GtE(WindowObj.WinHand.Id).offsetHeight;
	var M = undefined;
	try{
		M = eval("MoveObj."+WindowObj.Title.Id+".moveId");
	}catch(erd){}
	if (!M)
		M = "";
	Found = -1;
	for (var i = 0; i < WinTrayMoveId.length; i++){
		if (WinTrayMoveId[i] == WindowObj.WinHand.Id){
			Found = i;
			break;
		}
	}
	if (Found > -1)
		WinTrayMove[Found] = M;
	else{
		WinTrayMoveId.push(WindowObj.WinHand.Id);
		WinTrayMove.push(M);
	}
	if (M != ""){
		try{
			eval("MoveObj."+WindowObj.Title.Id+".moveId = '"+WindowObj.WinHand.Id+"';");
		}catch(erd){}
	}
	if (type){
		var Placed = -1;
		for (var i = 0; i < WinHands.length; i++){
			if (WinHandsPos[i] > i){
				WinHandsPos.splice(i, 0, i);
				WinHands.splice(i, 0, WindowObj.WinHand.Id);
				Placed = i;
				break;
			}
		}
		if (Placed == -1){
			Placed = WinHands.length;
			WinHandsPos.push(Placed);
			WinHands.push(WindowObj.WinHand.Id);			
		}
		var L = Math.floor(window.innerWidth/WinHandWidth);
		var T = 1;
		if (Placed > L){
			T = Math.ceil(Placed/L);
			Placed = Math.floor(Placed%L);
		}
		GtE(WindowObj.WinHand.Id).style.left = (WinHandWidth*Placed)+"px";
		GtE(WindowObj.WinHand.Id).style.top = (window.innerHeight-(WinHandHeight*T))+"px";
	}
	else if (!Override){
			GtE(WindowObj.WinHand.Id).style.left = ((GtE(WindowObj.Id).offsetLeft)+GtE(WindowObj.Id).offsetWidth-WinHandWidth)+"px";
			GtE(WindowObj.WinHand.Id).style.top = GtE(WindowObj.Id).getBoundingClientRect().top+"px";
	}
	else{
	//	GtE(WindowObj.WinHand.Id).style.left = ((GtE(WindowObj.TitleBar.Id).offsetLeft)+WinHandWidth)+"px";
	//	GtE(WindowObj.WinHand.Id).style.top = GtE(WindowObj.TitleBar.Id).offsetTop+"px";		
	}
	Found = WinTrayMoveOldId.indexOf(WindowObj.WinHand.Id);
	if (Found == -1){
		WinTrayMoveOldX.push(GtE(WindowObj.WinHand.Id).offsetLeft);
		WinTrayMoveOldY.push(GtE(WindowObj.WinHand.Id).offsetTop);
		WinTrayMoveOldId.push(WindowObj.WinHand.Id);
		WinTrayMoveOldOverride.push(false);
	}
	else if (!Override){
		WinTrayMoveOldX[Found] = GtE(WindowObj.WinHand.Id).offsetLeft;
		WinTrayMoveOldY[Found] = GtE(WindowObj.WinHand.Id).offsetTop;
	}
}

function TrayUp(WindowObj){
	GtE(WindowObj.WinHand.Id).innerHTML = "";
	WindowObj.WinHand.Edit.hide();
	DisplaceTray(WindowObj);
	var Found = WinTrayMoveOldId.indexOf(WindowObj.WinHand.Id);
	if (Found > -1){
		if (WinTrayMoveOldX[Found] != GtE(WindowObj.WinHand.Id).offsetLeft || WinTrayMoveOldY[Found] != GtE(WindowObj.WinHand.Id).offsetTop)
			WinTrayMoveOldOverride[Found] = true;
	}
}

function DisplaceTray(WindowObj){
	for (var i = 0; i < WinHands.length; i++){
		if (WinHands[i] == WindowObj.WinHand.Id){
			WinHandsPos.splice(i, 1);
			WinHands.splice(i, 1);
			break;
		}
	}
	var Found = -1;
	for (var i = 0; i < WinTrayMoveId.length; i++){
		if (WinTrayMoveId[i] == WindowObj.WinHand.Id){
			Found = i;
			break;
		}
	}
	if (Found > -1){
		if (WinTrayMove[Found] != ""){
			try{
				eval("MoveObj."+WindowObj.Title.Id+".moveId = '"+WinTrayMove[Found]+"';");
			}catch(erd){}
		}
		WinTrayMove.splice(Found, 1);
		WinTrayMoveId.splice(Found, 1);
	}
}

function DesktopTrayMove(direction, containerId, trackLeftId, trackRightId, ammount){
	if (direction == "left"){
		if (parseInt(GtE(containerId).scrollLeft,10)-ammount < 0)
			ammount = parseInt(GtE(containerId).scrollLeft,10);
		GtE(containerId).scrollLeft -= ammount;
	}
	else{
		if (parseInt(GtE(containerId).scrollLeft,10)+ammount > GtE(containerId).offsetWidth)
			ammount = parseInt(GtE(containerId).offsetWidth,10)-parseInt(GtE(containerId).scrollLeft,10);		
		GtE(containerId).scrollLeft += ammount;	
	}
	TrayEnableMoveTrack(trackLeftId, trackRightId, containerId);
}

function TrayEnableMoveTrack(trackLeftId, trackRightId, containerId){
	if (GtE(containerId).scrollLeft <= 0 || GtE(containerId).scrollWidth <= GtE(containerId).clientWidth)
		GtE(trackLeftId).style.visibility = "hidden";
	else
		GtE(trackLeftId).style.visibility = "visible";
	if (GtE(containerId).scrollLeft >= GtE(containerId).offsetWidth || GtE(containerId).scrollWidth <= GtE(containerId).clientWidth)
		GtE(trackRightId).style.visibility = "hidden";
	else
		GtE(trackRightId).style.visibility = "visible";
}

function DesktopMenuSwitch(){
	if (!DesktopMenuStatusBool)
		return undefined;
	DesktopMenuStatusBool = false;
	DesktopMenuStatusTimer = window.setTimeout(function(){DesktopMenuStatusBool = true;},400);
	if (DesktopMenuStatus){
		GtE(DesktopMenuId[0]).style.visibility = "hidden"; 
		GtE(DesktopMenuId[1]).style.visibility = "hidden"; 
//		GtE(DesktopMenuId[2]).style.filter = "none"; 
		GtE(DesktopMenuId[2]).style.filter = "brightness(100%)";
		GtE(DesktopMenuId[3]).style.filter = "brightness(100%)";
//		GtE(DesktopMenuId[3]).style.color = "#FF3300"; 
//		GtE(DesktopMenuId[4]).style.backgroundColor = "#003300"; 
		DesktopMenuStatus = false;
	}else{
		GtE(DesktopMenuId[0]).style.visibility = "visible"; 
		GtE(DesktopMenuId[1]).style.visibility = "visible"; 
//		GtE(DesktopMenuId[2]).style.filter = "grayscale(100%)"; 	
//		GtE(DesktopMenuId[2]).style.filter = "grayscale(100%) brightness(45%)"; 	
		GtE(DesktopMenuId[2]).style.filter = "brightness(45%)"; 	
		GtE(DesktopMenuId[3]).style.filter = "brightness(45%)"; 	
//		GtE(DesktopMenuId[3]).style.color = "#006600"; 
//		GtE(DesktopMenuId[4]).style.backgroundColor = "#111111"; 		
		DesktopMenuStatus = true;		
	}
	ClearIconSelection();
}

function DesktopForceMenuSwitch(bool){
	DesktopMenuStatusBool = true;
	if (bool)
		DesktopMenuStatus = false;
	else
		DesktopMenuStatus = true;
	DesktopMenuSwitch();
}

function DesktopBlinkMenuSwitch(bool,len){
	if (!len)
		len = 20;
	DesktopOldMenuSwitch = DesktopMenuStatus;
	DesktopMenuStatusBool = true;
	if (bool)
		DesktopMenuStatus = false;
	else
		DesktopMenuStatus = true;
	DesktopMenuSwitch();
	DesktopMenuSwitchWaiter = window.setTimeout(function(){DesktopMenuStatus=DesktopOldMenuSwitch;DesktopMenuSwitch();},len);
}

function SetDesktopWork(bool){
	if (bool)
		DesktopWork = true;
	else
		DesktopWork = false;
}

function OnDesktopWork(){
	if (!DesktopWork){
		DesktopWorkTimer = window.setTimeout(function(){SetDesktopWork(true);},400);
		return undefined;
	}
	DesktopMenuStatusBool = true;
	DesktopMenuStatus = true;
	DesktopMenuSwitch();
}

class DesktopIcon extends ElObj{
	constructor(name,ParentSelf,WindowSelf,StringData){
		super(ParentSelf,WindowSelf,true);
		this.ObjType = "DesktopIcon";
		this.Name = "NewIcon";
		if (name)
			this.Name = name;
		this.Title = new ElObj(this,WindowSelf,true);
		this.Icon = new Image(this,WindowSelf,"",true);
		this.Edit.addCssClass("DesktopIconContainer");
		this.Icon.Edit.addCssClass("DesktopIconIcon");
		this.Title.Edit.addCssClass("DesktopIconTitle");
		this.StringData = StringData;
		ElObjAddAlt(this.Title.Id);
		this.Edit.setDrStCode("IconSelect('"+this.Id+"','"+this.Icon.Id+"','"+this.Title.Id+"');");
		this.Icon.Edit.setDrStCode("IconSelect('"+this.Id+"','"+this.Icon.Id+"','"+this.Title.Id+"');");
		this.Title.Edit.setDrStCode("IconSelect('"+this.Id+"','"+this.Icon.Id+"','"+this.Title.Id+"');");
	//	this.Edit.setInnerData("icon$"+this.StringData);
		this.Title.Edit.setInnerData("icon$"+this.StringData);
		this.Icon.Edit.setInnerData("icon$"+this.StringData);

	}
	destroyDesktopIcon(){
		ElObjRemoveAlt(this.Title.Id);
		try{
			this.Title.destroy();
			this.Title = null;
		}catch(erd){}
		try{
			this.Icon.destroy();
			this.Icon = null;
		}catch(erd){}		
		try{
			super.destroy();
		}catch(erd){}
	}
	destroy(){
		try{
			this.destroyDesktopIcon();
		}catch(erd){}
	}
}

function IconSelect(id,imageId,titleId){
	if (CanSelect){
		IconSelected.push(id);
		IconSelectedImage.push(imageId);		
	}
	else{
		IconSelection.push(id);
		IconSelectionImage.push(imageId);			
	}
	GtE(id).style.border = "0.5vh solid "+IconSelectionColor;
	GtE(imageId).style.filter = IconSelectionFilter;
}

function ClearIconSelection(){
	for (var i = 0; i < IconSelection.length;i++){
		try{
			GtE(IconSelection[i]).style.border = "none";
			GtE(IconSelectionImage[i]).style.filter = "none";
		}
		catch(erd){}
	}
	IconSelection = [];
	IconSelectionImage = [];
}

function ClearIconSelected(){
	for (var i = 0; i < IconSelected.length;i++){
		try{
			GtE(IconSelected[i]).style.border = "none";
			GtE(IconSelectedImage[i]).style.filter = "none";
		}
		catch(erd){}			
	}
	IconSelected = [];
	IconSelectedImage = [];
	Selected = [];
}

function ClearIconSelectedOne(id){
	var pos = Selected.indexOf(id);
	try{	
		GtE(IconSelected[pos]).style.border = "none";
		GtE(IconSelectedImage[pos]).style.filter = "none";
	}
	catch(erd){}
	IconSelected.splice(pos,1);
	IconSelectedImage.splice(pos,1);
	Selected.splice(pos,1)
}

function ElDr(evt){//on element drag
	MoveElPosXactual = GetMouseClientCords()[0];
	MoveElPosYactual = GetMouseClientCords()[1];
	if (!CanSelect){
		if (eval(GtE(MoveElDrId).dataset.inf+".drcode"))
			eval(eval(GtE(MoveElDrId).dataset.inf+".drcode"));
	}
}

function ElDrSt(evt){//on element dragstart
	if (((CanSelect) && (SelectFirst)) || (!CanSelect)){
		ClearDrDp();
		MoveElPosXstart = GetMouseClientCords()[0];
		MoveElPosYstart = GetMouseClientCords()[1];
		MoveElDrId = evt.target.id;	
		MoveElDrCode = eval(GtE(evt.target.id).dataset.inf+".code");
		MoveElDrInnerData = eval(GtE(evt.target.id).dataset.inf+".innerData");
		SelectFirst = false;
	}
	if (!CanSelect){
		if (eval(GtE(evt.target.id).dataset.inf+".drstcode"))
			eval(eval(GtE(evt.target.id).dataset.inf+".drstcode"));
	}
}

function ElDrEn(evt){//on element dragend
	MoveElPosXend = GetMouseClientCords()[0];
	MoveElPosYend = GetMouseClientCords()[1];
	try{
		if (eval(GtE(MoveElDrId).dataset.inf+".drencode"))
			eval(eval(GtE(MoveElDrId).dataset.inf+".drencode"));
		}
	catch(erd){}
}

function ElDrEnt(evt){//on element dragenter
	MoveElPosXend = GetMouseClientCords()[0];
	MoveElPosYend = GetMouseClientCords()[1];
	if (eval(GtE(evt.target.id).dataset.inf+".drentcode"))
		eval(eval(GtE(evt.target.id).dataset.inf+".drentcode"));
}

function ElDrOv(evt){//on element dragover
	if (CanToDrop)
		evt.preventDefault();
	MoveElPosXend = GetMouseClientCords()[0];
	MoveElPosYend = GetMouseClientCords()[1];
	if (eval(GtE(evt.target.id).dataset.inf+".drovcode"))
		eval(eval(GtE(evt.target.id).dataset.inf+".drovcode"));
}

function ElDrLe(evt){//on element dragleave
	MoveElPosXend = GetMouseClientCords()[0];
	MoveElPosYend = GetMouseClientCords()[1];
	if (eval(GtE(evt.target.id).dataset.inf+".drlecode"))
		eval(eval(GtE(evt.target.id).dataset.inf+".drlecode"));	
}

function ElDp(evt){//on element drop
	MoveElDpCode = eval(GtE(evt.target.id).dataset.inf+".code");
	MoveElDpInnerData = eval(GtE(evt.target.id).dataset.inf+".innerData");
	MoveElPosXend = GetMouseClientCords()[0];
	MoveElPosYend = GetMouseClientCords()[1];
	MoveElDpId = evt.target.id;
	DGDPEN();
	if (eval(GtE(evt.target.id).dataset.inf+".dpcode"))
		eval(eval(GtE(evt.target.id).dataset.inf+".dpcode"));	
	ClearIconSelection();
}

function CreateIconMap(DesktopSelf){
	var percentHeight = GtE(DesktopSelf.Id).offsetHeight/5;
	DesktopIpart = percentHeight;
	var heightPercent = 5;
	var percentWidth = Math.floor(GtE(DesktopSelf.Id).offsetWidth/percentHeight);
	DesktopIconMapData.push(MultiDimensionalArray(percentWidth,heightPercent,EmptyIconFill));
}

function CreateIconDesktop(DesktopSelf){
	if (selfIconDesktopTryTest)
		IconDesktops.push(new SubDesktop(DesktopSelf,DesktopSelf));
	else{
		selfIconDesktopTryTest = true;
		IconDesktops.push(new SubDesktop(DesktopSelf,DesktopSelf));
	}
	CreateIconMap(IconDesktops[parseInt(IconDesktops.length,10)-1]);
	SetDesktopColor(false);
	SetDesktopBackground(false);
}

function SetIconSystem(desktopNumber,xAxis,yAxis,Title,src,code){
	var resSrc = src.split(",");
	if (resSrc.length == 3)
		return desktopNumber+"a!a"+xAxis+"a!a"+yAxis+"a!a"+Title+"a!a"+resSrc[0]+"!a!"+resSrc[1]+"!a!"+resSrc[2]+"a!a"+code;
	else
		return desktopNumber+"a!a"+xAxis+"a!a"+yAxis+"a!a"+Title+"a!a"+src+"a!a"+code;
}

function SetIcon(data){
	if ((setIconDesktop) && (!ongoingSetIconDesktop)){
		ongoingSetIconDesktop = true;
		var wait = window.setTimeout(function(){ChooseIconDesktop(setIconDesktop);setIconDesktop = false;ongoingSetIconDesktop = false;},150);	
	}		
	var SubData = data.split("a!a");
	ChooseIconDesktopTemporary(SubData[0]);	
	if (SubData.length == 6){
		try{
			DesktopIconMapData[SubData[0]][SubData[1]][SubData[2]] = new DesktopIcon("DesktopIcon"+SubData[0]+"x"+SubData[1]+"x"+SubData[2],IconDesktops[SubData[0]],IconDesktops[SubData[0]].WindowSelf,data);
			DesktopIconMapData[SubData[0]][SubData[1]][SubData[2]].Title.Edit.writeIn(SubData[3]);
			var IconSub = SubData[4].split("!a!");
			if (IconSub.length == 1)
				DesktopIconMapData[SubData[0]][SubData[1]][SubData[2]].Icon.setPath(IconSub);
			else if (IconSub.length == 3)
				SetImage(DesktopIconMapData[SubData[0]][SubData[1]][SubData[2]].Icon.Id,IconSub[0],IconSub[1],GetTypeData(IconSub[2]));
			DesktopIconMapData[SubData[0]][SubData[1]][SubData[2]].Icon.Edit.setCodeAdd(SubData[5]);
			DesktopIconMapData[SubData[0]][SubData[1]][SubData[2]].Title.Edit.setCodeAdd(SubData[5]);
			GtE(DesktopIconMapData[SubData[0]][SubData[1]][SubData[2]].Id).style.left = (DesktopIpart*SubData[1])+"px";
			GtE(DesktopIconMapData[SubData[0]][SubData[1]][SubData[2]].Id).style.top = (DesktopIpart*SubData[2])+"px";
			return "done";
		}catch(erd){
			console.log("//-> GUISHELL.js: Icon cannot be replaced or icon table record is corrupted. You can use WAVE solution.");
			return undefined;
		}
	}
	else if (SubData.length == 4){
		if (SubData[3] == "none"){
			Alt.splice(Alt.indexOf(GtE(DesktopIconMapData[SubData[0]][SubData[1]][SubData[2]].Id).firstElementChild.id),1);
			GtE(DesktopIconMapData[SubData[0]][SubData[1]][SubData[2]].Id).parentNode.removeChild(GtE(DesktopIconMapData[SubData[0]][SubData[1]][SubData[2]].Id));
			DesktopIconMapData[SubData[0]][SubData[1]][SubData[2]] = EmptyIconFill;
			return "done";
		}
		else
			return null;
	}
		return null;
}

function SetToDesktopIconString(){
	var first = true;
	var resString = "";
	for (var m = 0; m < DesktopIconMapData.length; m++){
		for (var i = 0; i < DesktopIconMapData[m].length; i++){
			for (var j = 0; j < DesktopIconMapData[m][i].length; j++){
				if (DesktopIconMapData[m][i][j] != EmptyIconFill){
					if (first){
						first = false;
						resString = DesktopIconMapData[m][i][j].StringData;
					}
					else
						resString += "-a-"+DesktopIconMapData[m][i][j].StringData;
				}
			}	
		}
	}
	return resString;
}

function GetFromDesktopIconString(data){
	var subStrings = data.split("-a-");
	for (var i = 0; i < subStrings.length; i++)
		SetFreeDesktopIconFromString(subStrings[i]);
}

function SetFreeDesktopIcon(desktopNumber,xAxis,yAxis,Title,src,code){
	try{
		if (DesktopIconMapData[desktopNumber][xAxis][yAxis] == EmptyIconFill){
			IconDesktopGetLastIndex = desktopNumber+"&"+xAxis+"&"+yAxis;
			SetIcon(SetIconSystem(desktopNumber,xAxis,yAxis,Title,src,code));
		}
		else
			SetIcon(SetDesktopIconNextWave(desktopNumber,xAxis,yAxis,Title,src,code));
	}
	catch(erd){
		SetIcon(SetDesktopIconNextWave(desktopNumber,xAxis,yAxis,Title,src,code));
	}
}

function SetFreeDesktopIconFromString(data){
	var SubData = data.split("a!a");
	try{
		if (DesktopIconMapData[SubData[0]][SubData[1]][SubData[2]] == EmptyIconFill){
			IconDesktopGetLastIndex = SubData[0]+"&"+SubData[1]+"&"+SubData[2];
			SetIcon(data);
		}
		else{
			var SubSubData = SubData[4].split("!a!");
			if (SubSubData.length == 3)
				SetIcon(SetDesktopIconNextWave(SubData[0],SubData[1],SubData[2],SubData[3],SubSubData[0]+","+SubSubData[1]+","+SubSubData[2],SubData[5]));
			else
				SetIcon(SetDesktopIconNextWave(SubData[0],SubData[1],SubData[2],SubData[3],SubData[4],SubData[5]));
		}
	}
	catch(erd){
		var SubSubData = SubData[4].split("!a!");
		if (SubSubData.length == 3)
			SetIcon(SetDesktopIconNextWave(SubData[0],SubData[1],SubData[2],SubData[3],SubSubData[0]+","+SubSubData[1]+","+SubSubData[2],SubData[5]));
		else
			SetIcon(SetDesktopIconNextWave(SubData[0],SubData[1],SubData[2],SubData[3],SubData[4],SubData[5]));		
	}
}

function SetDesktopIconNextWave(desktopNumber,xAxis,yAxis,Title,src,code){
	var founded = false;
	for (var m = 0; m < DesktopIconMapData.length; m++){
		for (var i = 0; i < DesktopIconMapData[m].length; i++){
			for (var j = 0; j < DesktopIconMapData[m][i].length; j++){
				if (DesktopIconMapData[m][i][j] == EmptyIconFill){
					IconDesktopGetLastIndex = m+"&"+i+"&"+j;
					founded = true;
					return SetIconSystem(m,i,j,Title,src,code);
				}
			}	
			if (founded)
				break;
		}
		if (founded)
			break;
	}
	if (!founded){
		CreateIconDesktop(IconDesktops[0].ParentSelf);
		ChooseIconDesktopTemporary(number);
		ChooseIconDesktop(parseInt(IconDesktops.length,10)-1);		
		return SetIconSystem(parseInt(IconDesktops.length,10)-1,0,0,Title,src,code);
	}
}

function ChooseIconDesktop(number){
	if (number >= IconDesktops.length)
		return null;
	for (var i = 0; i < IconDesktops.length; i++){
		IconDesktops[i].Edit.hide(true);
	}
	IconDesktops[number].Edit.show(true);
	ActualIconDesktop = number;
	WriteIntoTrayDesktopStatus();
}

function WriteIntoTrayDesktopStatus(){
	var data = "th";
	var n = parseInt(ActualIconDesktop,10)+1;
	switch(n){
		case 1:
			data = "st";
			break;
		case 2:
			data = "nd";
			break;
		case 3:
			data = "rd";
			break;
		default:
			data = "th";
			break;
	}
	if (DesktopStatusIdentify)
		SpeedWriteIn(DesktopStatusIdentify,n+" "+data);
}

function MoveBetweenDesktop(data){//true - do prava (inkrementálně), false -> do leva (pozpátku)
	if (data){
		ActualIconDesktop++;
		if (ActualIconDesktop >= IconDesktops.length)
			ActualIconDesktop = 0;
	}
	else{
		ActualIconDesktop--;
		if (ActualIconDesktop < 0)
			ActualIconDesktop = parseInt(IconDesktops.length,10)-1;
	}
	ChooseIconDesktop(ActualIconDesktop);
}

function ChooseIconDesktopTemporary(number){
	WaveDesktopIconWorkData = ActualIconDesktop;
	ChooseIconDesktop(number);
	WaveDesktopIconWorkTime = window.setTimeout(function(){ChooseIconDesktop(WaveDesktopIconWorkData); WaveDesktopIconWorkData = 0;},120);
}

function ActivateDesktopBackground(id){
	var backgrounds = "";
	for (var i = 0; i < DesktopBackgroundPictures.length; i++){
		if (!DesktopBackgroundPictures[i] || DesktopBackgroundPictures[i] == "" || DesktopBackgroundPictures[i] == "none")
			continue;
		if (backgrounds != "")
			backgrounds += ", ";
		if (DesktopBackgroundParameters.length > i)
			backgrounds += "url('"+DesktopBackgroundPictures[i]+"') "+DesktopBackgroundParameters[i];
		else
			backgrounds += "url('"+DesktopBackgroundPictures[i]+"')";
	}
	if (backgrounds != ""){
		GtE(id).style.backgroundImage = backgrounds;
		var repeats = "";
		for (var i = 0; i < DesktopBackgroundRepeats.length; i++){
			if (repeats != "")
				repeats += ", ";
			if (!DesktopBackgroundRepeats[i] || DesktopBackgroundRepeats[i] == "" || DesktopBackgroundRepeats[i] == "none")
				repeats += "no-repeat";
			else
				repeats += DesktopBackgroundRepeats[i];
		}
		if (repeats != "")
			GtE(id).style.backgroundRepeat = repeats;
		else
			GtE(id).style.backgroundRepeat = "no-repeat";
		var sizes = "";
		for (var i = 0; i < DesktopBackgroundSizes.length; i++){
			if (sizes != "")
				sizes += ", ";
			if (!DesktopBackgroundSizes[i] || DesktopBackgroundSizes[i] == "" || DesktopBackgroundSizes[i] == "none")
				sizes += "cover";
			else
				sizes += DesktopBackgroundSizes[i];
		}
		if (sizes != "")
			GtE(id).style.backgroundSize = sizes;
		else
			GtE(id).style.backgroundSize = "cover";
	}
	else{
		GtE(id).style.backgroundImage = "none";
		GtE(id).style.backgroundRepeat = "no-repeat";
		GtE(id).style.backgroundSize = "cover";
	}
}

function ActivateDesktopBackgroundAll(){
	for (var i = 0; i < IconDesktops.length; i++)
		ActivateDesktopBackground(IconDesktops[i].Id);
}

function ClearDesktopBackground(){
	DesktopBackgroundPictures = [];
	DesktopBackgroundParameters = [];
	DesktopBackgroundRepeats = [];
	DesktopBackgroundSizes = [];
	ActivateDesktopBackgroundAll();	
}

function SetDesktopBackground(bg){
	if (bg)
		DesktopBackgroundPictures.push(bg);	
	ActivateDesktopBackgroundAll();
}

function SetDesktopBackgroundParameter(bg){
	if (bg)
		DesktopBackgroundParameters.push(bg);
	ActivateDesktopBackgroundAll();	
}

function SetDesktopBackgroundRepeat(bg){
	if (bg)
		DesktopBackgroundParameters.push(bg);
	ActivateDesktopBackgroundAll();	
}


function SetDesktopBackgroundSize(bg){
	if (bg)
		DesktopBackgroundParameters.push(bg);
	ActivateDesktopBackgroundAll();
}

function SetDesktopColor(bg){
	if (bg)
		DesktopColor = bg;
	for (var i = 0; i < IconDesktops.length;i++)
		GtE(IconDesktops[i].Id).style.backgroundColor = DesktopColor; 
}

function SetCursorSubIcon(treeNumber,index,type){
	SetCursorSubIconStatus = true;
	SpeedVisible("CursorSubIcon");
	SetImage("CursorSubIcon",treeNumber,index,type);
}

function UnSetCursorSubIcon(){
	SetCursorSubIconStatus = false;
	SpeedHidden("CursorSubIcon");
}