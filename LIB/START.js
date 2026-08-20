var Waiter, FileName, AppName, BlockWelcome, SetLang, Mode, User, activeElementsTextTo, MAINCOLOR, MAINBACKGROUNDCOLOR, AppSoft, ShortCutSet, ShortCutChange;
function SetUpApp(){
	//regs -- here you write initialization for custom code variables
	BlockWelcome = true;
	Waiter = "";
	Started = false;
	SetLang = _EnforceLanguage;
	AppName = "mirae";
	Mode = "asdf";
	User = "test";
	OpenedBefore = false;
	activeElementsTextTo = new Array();
	Lang = "ENG";
    if (_EnforceLanguage && _DefaultLanguage != "")
        Lang = _DefaultLanguage;
	openaslink = false;
	MAINCOLOR = _DesktopForegroundColor != "" ? _DesktopForegroundColor : "#FFFFFF";
	MAINBACKGROUNDCOLOR = _DesktopBackgroundColor != "" ? _DesktopBackgroundColor : "#0000AA";
	AppSoft = false;
	ShortCutSet = false;
	ShortCutChange = false;
	//in Sh, you show the first run license agreement and language selection bar
	Sh();
}

//here you can define defaults for view system before its initialization
function StartApp(){
	GtE("END").style.display = "none";

	WelcomePlaySound = _EnableGUIWelcomeSound;
	WelcomeDelay = _WelcomeDelay;
	OEMDelay = _OEMDelay;

	PrefetchOnStartup = 2;//make system to start loading while welcome and boot screens are displayed
	
	SetUpApp();
}

const dataFrom = [""];
//const dataFrom = ["FileName","Mode","RemainingTimeEdit","RemainingTimeTest","User","Lang","TextCodeEdit","TextCodeTest","TextNameEdit","TextNameTest","TextTitleEdit","TextTitleTest","Test","Edit","Author","FilePassword","FilePasswordData","CanFileEdit","WritterCode","ReaderCode","ColorizePos","AutoCompleteSwitch","SyntaxLighting","UserReg","UserTests","UserTestsAdd","JSNumberColor","JSCommentStarColor","JSCommentSlashColor","JSApostropheColor","JSApostropheDoubleColor","JSSpecialsColor","JSWordsColor","LastModifiedDate"];

function SwitchInputsKey(evt) {
	evt = evt || window.event;
	switch(evt.keyCode){
		case 9:
			SwitchInputs("forward");
			return false;
		case 36:
			if (home){
				SwitchInputs("home");
				home = false;
			}
			return false;
		case 34:
			SwitchInputs("backward");
			return false;
		case 33:
			SwitchInputs("forward");
			return false;
		default:
			WriteElementId = document.activeElement.id;
			if (WriteElementId)
				WriteContinuous(WriteElementId);
			break;
	}
	RefreshDataProm();
	return "done";
};

//handle onkeydown events
var home = true;
var KeyAppTimer = "";
var BeforeAppKey = false;

//handle window resize events
window.onresize = function(){
	try{
		if (Started)
			this.body.contentWindow.AutoRepairSystemPosition(0,0,false);
	}catch(erd){}
}

//handle onkeydown events
function KeyDown(e){
	e = e || window.event;
	if ((e.keyCode == 17 || e.charCode == 17) && e.location != 1){
		KeyWasUp = false;
	}
	OnAlt(e);
}

//handle window resize events
window.onresize = function(){
	try{
		if (Started)
			this.body.contentWindow.AutoRepairSystemPosition(0,0,false);
	}catch(erd){}
}

document.onkeyup = function(evt){
	evt = evt || window.event;
	if ((evt.keyCode == 17 || evt.charCode == 17) && evt.location != 1){
		KeyWasUp = true;
	}
	switch(evt.keyCode){
		case 9:
			return undefined;
			break;
		case 36:
			return undefined;
			break;
		case 34:
			return undefined;
			break;
		case 33:
			return undefined;
			break;
		default:
		//	Write_Changes();
			break;
		}
	//	RefreshDataProm();
	return "done";
};

function OnStart(){
	Hide_Message_Window_New_App();
    if (!_DoNotShowAppLoading)
        Show_Message_Window_New_App(Translate("Loading the application")+" ...",1);
	StartAppSet();
}

//starting application without previous run
function StartAppSet(){
	AppSoft = false;
	Hide_Message_Window_New_App();
	GUISystem();
}

function Sh(){
	Hide_Message_Window_New_App();
	if (!SetLang){
		Show_Message_Window_New_App_Confirm("Please, select your language:", ["English", "Čeština"], ["ShLangSet(1)", "ShLangSet(2)"]);
	//	Show_Message_Window_New_App("Please, select your language:<br><br>&nbsp<div id='lanSet' style='width: 80%; height: 20%; left: 10%; display: flex; justify-content: center; align-items: center; border: 0.5vh solid #000000;'><div style='display: block; margin: auto; width:100%;'><input type='button' value='English' onclick='javascript:ShLangSet(1);' style='width: 28%; margin-left: 4%;'><input type='button' value='Čeština' onclick='javascript:ShLangSet(2);' style='margin-left: 4%; width: 28%;'></div></div>");
	//	GtEs("RestNewApp").flexDirection = "column";
	}

	else if (!OpenedBefore && !_DoNotShowLicense){
		Show_Message_Window_New_App("<div style='font-size: 7vh; left: 5%; top: 5%; position: absolute;'>"+Translate("License")+"</div><div style='font-weight: bold; font-size: 3vh; left: 5%; top: 16%; position: absolute;'>"+Translate("Before you will continue, you will need to agree with the following conditions of use")+" ...</div><div style='font-size: 2vh; font-style: italic; top: 25%; left: 5%; position: absolute;'>"+Translate("Please read carefully, if you won't agree with the following conditions you won't be able to use this application.")+"</div><div class='Show_Message_Window_New_App_InnerElement' id='LiData' style='display: block; font-size: 3vh; overflow-y: auto; width: 88%; height: 48%; padding: 1%; left: 5%; top: 30%; position: absolute;'></div><div id='shMesSet' class='Show_Message_Window_New_App_Select' style='width: 30%; height: 10%; left: 5%; top: 85%; display: flex; justify-content: space-evenly; align-items: center; position: absolute;'><input type='button' value='"+Translate("Agree")+"' onclick='javascript:LiSet(true);' style='width: 45%; height: 70%;'><input type='button' value='"+Translate("Disagree")+"' onclick='javascript:LiSet(false);' style='width: 45%; height: 70%;'></div>");
		GtEs("RestNewApp").flexDirection = "column";
		GtEs("RestNewApp").left = "5vw";
		GtEs("RestNewApp").top = "5vh";
		GtEs("RestNewApp").width = "90vw";
		GtEs("RestNewApp").height = "90vh";
		if (LanSetTo == "CZ")
			GtE("LiData").innerHTML = lilangCz;
		else
			GtE("LiData").innerHTML = lilangEng;
	//	LiSet(true);
	}
	else
		OnStart();
}

function LiSet(bool){
	if (bool){
		OpenedBefore = true;
		Sh();
	}
	else{
		Hide_Message_Window_New_App();
		ExitApp("none","StartApp();");
	}
}

function ShLangSet(data){
	switch(data){
		case 1:
			LanSetTo = "ENG";
			break;
		case 2:
			LanSetTo = "CZ";
			break;
		default:
			LanSetTo = "ENG";
			break;
	}
	SetLang = true;
	Sh();
}