/*
	APPDAT - SYSTEM APPLICATIONS FOR ASCOM GUI INTERFACE
	
	v5.22
	11:34	2017-06-29

	for ASCOM SYSTEMS and related

	DO NOT DELETE - IT IS MAIN FILE FOR SYSTEM RUN

	© 2009-2017 586sys	
*/

var APPDATver = 1.04;
//zde budou jmena vsech aplikaci
var APPGUIREGAppID = [];
var APPGUIREGNAMES = [];
//zde budou nazvy funkci, ktere se maji spustit
var APPGUIREGCODES = [];
//zde budou ikony aplikaci, ktere se maji spustit
var APPGUIREGICONS = [];
//zde budou ulozeny id aplikaci, ktere budou predvykreslovany pri startu systemu
var APPGUIREGCOMMANDS = [];

function ShowSmallPrompt(){
	var comWin = new SysWin("CommandPrompt",false);
	comWin.setTitle("Command Prompt");
	var reddata = getURL("reddata");
	try{
		if (reddata%5 == 0)
			reddata += 5;
		else
			throw undefined;
	}
	catch(erd){
		reddata = 5;
	}
	comWin.Data.newIframe("Prompt",GetLocationFromTable("com.html",window.parent.ALDRMAINNAME)+"?sysset=c&rapid=yes&reddata="+reddata,"");
	comWin.Data.Obj.Prompt.Edit.setSize("0%","0%","100%","100%");
	GtE(comWin.Data.Id).style.overflow = "hidden";
	APPVIEPROC.Obj.addExecPoll("toWriteCom('"+comWin.Data.Obj.Prompt.Id+"','"+comWin.Id+"');");
	APPVIEPROC.Obj.setMultipler(2);
}

function toWriteCom(id,addId){
	try{
		if (GtE(id).contentWindow.GtE("system").contentWindow.SystemRun){
			GtE(id).contentWindow.GtE("system").contentWindow.COMEXITCODE = "setEndIn('"+addId+"');";
			APPVIEPROC.Obj.setMultipler(1);
			APPVIEPROC.Obj.deleteExecPoll("toWriteCom('"+id+"','"+addId+"');")
		}
	}catch(erd){}
}

function ExitCom(){

}

function ShowEmulator(){
	var emuWin = new SysWin("emuwin",false);
	console.log(emuWin);
	emuWin.setTitle("Run ...");
	emuWin.setMaximizeInTitle(false);
	emuWin.Data.newInput("nameinput","text","","placeholder='write command here ...'");
	emuWin.Data.newButton("confirm");
	emuWin.Data.confirm.Edit.writeIn("Ok");
	emuWin.Edit.setSize("5%","5%","20%","20%");
	emuWin.Data.nameinput.Edit.setSize("5%","10%","90%","20%");
	emuWin.Data.confirm.Edit.setSize("25%","40%","20%","20%");
	GtE(comWin.Data.Id).style.overflow = "hidden";
}

var MenuAppsActiveElementId = "";
var MenuAppsActiveElementBool = false;
function HideApplicationsMenu(){
	if ((MenuAppsActiveElementId) && MenuAppsActiveElementId != ""){
		SpeedDisplayHide(MenuAppsActiveElementId);
		MenuAppsActiveElementBool = false;
	}
}

function ShowApplicationsMenu(){
	if ((MenuAppsActiveElementId) && MenuAppsActiveElementId != ""){
		SpeedDisplay(MenuAppsActiveElementId);
		MenuAppsActiveElementBool = true;
	}
}

function StartApplicationsMenu(){
	if (MenuAppsActiveElementBool)
		HideApplicationsMenu();
	else
		ShowApplicationsMenu();
}

function CreateApplicationsMenu(){
	var Menu = new SysWinDesktopObject();
	DesktopMenuStatusBool = true;
	Menu.newElement("Title");
	Menu.newElement("MenuArea");
	Menu.Obj.Title.newElement("Text");
	Menu.Obj.Title.newImage("Icon","");
	SetImage(Menu.Obj.Title.Obj.Icon.Id,1,2,false);
	Menu.Obj.Title.newElement("ExitIcon");
	MenuAppsActiveElementId = Menu.Id;
	
	eval("Menu.MenuItemsObj={};");
	
	Menu.Obj.Title.Obj.Text.Edit.writeIn("Applications");
	Menu.Obj.Title.Obj.ExitIcon.Edit.writeIn("X");
	Menu.Obj.Title.Obj.ExitIcon.Edit.setCode("HideApplicationsMenu();");
	
	Menu.Edit.cssClass("AppsMenu");
//	Menu.Obj.MenuArea.Edit.writeIn("asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>");
	Menu.Obj.MenuArea.Edit.cssClass("AppsMenuArea");
	Menu.Obj.Title.Edit.cssClass("AppsMenuTitleContainer");
	Menu.Obj.Title.Obj.Text.Edit.cssClass("AppsMenuTitle");
	Menu.Obj.Title.Obj.Icon.Edit.cssClass("AppsMenuTitleIcon");
	Menu.Obj.Title.Obj.ExitIcon.Edit.cssClass("AppsMenuTitleExitIcon");
	
	var ListOfAppsNames = [];
	var ListOfAppsCodes = [];
	var ListOfAppsIcons = [];
	var ItemSubCode = "HideApplicationsMenu();";
	for (var i = 0; i < APPGUIREGNAMES.length; i++)
		ListOfAppsNames.push(APPGUIREGNAMES[i]);
	ListOfAppsNames.sort();
	for (var j = 0; j < ListOfAppsNames.length; j++){
		ListOfAppsCodes.push(APPGUIREGCODES[APPGUIREGNAMES.indexOf(ListOfAppsNames[j])]);
		ListOfAppsIcons.push(APPGUIREGICONS[APPGUIREGNAMES.indexOf(ListOfAppsNames[j])]);
	}
	var IconExist = false;
	for (var m = 0; m < ListOfAppsNames.length; m++){
		if (ListOfAppsIcons[m] == "N")
			continue;
		var nameOneWord = "";
		var possibleChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Q"];
		var possibleCharsExtended = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
		var canExtend = false;
		for (var n = 0; n < ListOfAppsNames[m].length; n++){
			if (possibleChars.indexOf(ListOfAppsNames[m][n].toUpperCase()) != -1 || ((canExtend) && possibleCharsExtended.indexOf(ListOfAppsNames[m][n].toUpperCase()) != -1)){
				nameOneWord += ""+ListOfAppsNames[m][n];
				canExtend = true;
			}
		}
		if ((ListOfAppsIcons[m]) || ListOfAppsIcons[m] != "none")
			IconExist = true;
		eval("Menu.MenuItemsObj."+nameOneWord+" = new DesktopMenuItems(nameOneWord+'&'+m+'ItemMenu',Menu.Obj.MenuArea,SysIn.Desktop,true,IconExist);");
		if (IconExist){
			var getIndexesOfIcon = ListOfAppsIcons[m].toString().split("$");
			if (getIndexesOfIcon.length == 3)
				eval("Menu.MenuItemsObj."+nameOneWord+".setItemIconShell("+getIndexesOfIcon[0]+","+getIndexesOfIcon[1]+","+getIndexesOfIcon[2]+");");
			else
				eval("Menu.MenuItemsObj."+nameOneWord+".setItemIconSrc(\'"+ListOfAppsIcons[m]+"\');");
		}
		eval("Menu.MenuItemsObj."+nameOneWord+".setItemTitle(\'"+ListOfAppsNames[m]+"\');");
		eval("Menu.MenuItemsObj."+nameOneWord+".setItemCode(\""+ItemSubCode+ListOfAppsCodes[m]+"\");");
	}
}

function OpenAppWindow(id){
	for (var i = 0; i < WindowProcess.length;i++){
		if (WindowProcess[i][0].Id == id){
				console.warn("#2"+id);
			WindowProcess[i][3] = true;
			break;
		}
	}
	ElWin(id,"close");
}

function CloseAppWindow(id){
	for (var i = 0; i < WindowProcess.length;i++){
		if (WindowProcess[i][0].Id == id){
			WindowProcess[i][3] = false;
			break;
		}
	}
	ElWin(id,"close");	
}

function CreateApplicationsMenuWriteLists(){
	
}

var MenuRunActiveElementId = "";
var MenuRunActiveElementCommandId = "";
var MenuRunActiveElementBool = false;
function HideRunMenu(){
	if ((MenuRunActiveElementId) && MenuRunActiveElementId != ""){
		SpeedDisplayHide(MenuRunActiveElementId);
		MenuRunActiveElementBool = false;
	}
}

function FinishComRun(data){
	var allComs = [];
	var allComsTitles = [];
	var allComsCompares = [];
	for (var i = 0; i < APPGUIREGCOMMANDS.length; i++){
		for (var j = 0; j < APPGUIREGCOMMANDS[i].length; j++){
			if (data == APPGUIREGCOMMANDS[i][j].toLowerCase()){
				allComs.push(data);
				allComsTitles.push(APPGUIREGCOMMANDSCODES[i]);
				allComsCompares.push(10000);
				continue;
			}
			var workCompare = 0;
			for (var t = 0; t < data.length; t++){
				if (APPGUIREGCOMMANDS[i][j].length > t){
					if (data[t] == APPGUIREGCOMMANDS[i][j][t].toLowerCase())
						workCompare++;
					else
						break;
				}
				else
					break;
			}
			if (allComsTitles.indexOf(APPGUIREGCOMMANDSCODES[i]) == -1 && workCompare > 0){
				allComs.push(APPGUIREGCOMMANDS[i][j]);
				allComsTitles.push(APPGUIREGCOMMANDSCODES[i]);
				allComsCompares.push(workCompare);
			}
		}
	}	
	var resComsCompares = [];
	var resComs = [];
	for (var f = 0; f < allComsCompares.length; f++)
		resComsCompares.push(allComsCompares[f]);
	resComsCompares.sort(function(a, b){return b-a});
	var was = [];
	for (var g = 0; g < resComsCompares.length; g++){
		if (was.indexOf(resComsCompares[g]) != -1)
			continue;
		resComs.push([]);
		was.push(resComsCompares[g]);
		for (var h = 0; h < allComsCompares.length; h++){
			if (allComsCompares[h] == resComsCompares[g])
				resComs[parseInt(resComs.length,10)-1].push(allComs[h]);
		}
	}
	for (var a = 0; a < resComs.length; a++)
		resComs[a].sort();
	var res = [];
	for (var s = 0; s < resComs.length; s++){
		for (var z = 0; z < resComs[s].length; z++)
			res.push(resComs[s][z]);
	}
	return res;
}
var inputedNewRun = true;
var inputedTabIndexRun = 0;
var inputedPossibilitiesRun;
function SearchTabRun(data){
	if (inputedNewRun){
		inputedTabIndexRun = 0;
		inputedPossibilitiesRun = FinishComRun(data);
		inputedNewRun = false;
	}
	var res = inputedPossibilitiesRun[inputedTabIndexRun];
	inputedTabIndexRun++;
	if (inputedTabIndexRun >= inputedPossibilitiesRun.length)
		inputedTabIndexRun = 0;
	return res;
}

function GetAccurateComRun(data){
	data = data.toLowerCase();
	var allComs = [];
	var allComsTitles = [];
	var maxCompare = 0;
	for (var i = 0; i < APPGUIREGCOMMANDS.length; i++){
		for (var j = 0; j < APPGUIREGCOMMANDS[i].length; j++){
			if (data == APPGUIREGCOMMANDS[i][j].toLowerCase()){
				allComs = [data];
				allComsTitles = [APPGUIREGCOMMANDSCODES[i]];
				break;
			}
			var workCompare = 0;
			for (var t = 0; t < data.length; t++){
				if (APPGUIREGCOMMANDS[i][j].length > t){
					if (data[t] == APPGUIREGCOMMANDS[i][j][t].toLowerCase())
						workCompare++;
					else
						break;
				}
				else
					break;
			}
			if ((workCompare > maxCompare || (maxCompare > 0 && workCompare == maxCompare)) && workCompare >= data.length){
				if (workCompare > maxCompare){
					maxCompare = workCompare;
					allComs = [];
					allComsTitles = [];
				}
				if (allComsTitles.indexOf(APPGUIREGCOMMANDSCODES[i]) == -1){
					allComs.push(APPGUIREGCOMMANDS[i][j]);
					allComsTitles.push(APPGUIREGCOMMANDSCODES[i]);
				}
			}
		}
	}
	if (allComs.length > 1)
		return [1, allComs]
	else if (allComs.length == 1)
		return [2, allComs[0]];
	else
		return [0, data];
}

function Run(id){
	var com = GtE(id).value.toString().toLowerCase().trim();
	if (com.toString().trim() != "" && com.toString().length > 0){
		var comCode = GetAccurateComRun(com);
		if (comCode[0] == 2)
			com = comCode[1];
		OldCommandsRun.push(com);
		var comFound = false;
		for (var n = 0; n < APPGUIREGCOMMANDS.length; n++){
			for (var m = 0; m < APPGUIREGCOMMANDS[n].length; m++){
				if (APPGUIREGCOMMANDS[n][m].toString().toLowerCase() == com){
					eval(APPGUIREGCOMMANDSCODES[n])
					comFound = true;
					break;
				}
			}
			if (comFound)
				break;
		}	
		if (comCode[0] != 2 || (!comFound)){
			if (comCode[0] == 1){
				var addStr = "<br>";
				for (var r = 0; r < comCode[1].length; r++){
					if (r == 0)
						addStr += comCode[1][r];
					else
						addStr += " -?- "+comCode[1][r];
				}
				var Popup1 = new DesktopPopup("DesktopError1", "Command error ["+com+"]", "1$3$false", true, Translate("Ambiguous command")+addStr);
			}
			else
				var Popup2 = new DesktopPopup("DesktopError2", "Command error ["+com+"]", "1$3$false", true, Translate("Unknown command"));
		}	
	}
	GtE(id).value = "";
}

function RunKey(e,id){
	var k = e.keyCode;
	switch(k){
		case 13:
			Run(id);
			inputedNewRun = true;
			HideRunMenu();
			break;
		case 45:
			Run(id);
			inputedNewRun = true;
			HideRunMenu();
			break;
		case 27:
			GtE(id).value = "";
			break;
		case 38:
			ShowOldCommandUpRun(id);
			break;
		case 40:
			ShowOldCommandDownRun(id);
			break;
	}
	if ((k > 64 && k < 119) || k == 13 || k == 45 || k == 27 || k == 38 || k == 40)
		inputedNewRun = true;
	else if (k == 9){
		var nextCom = SearchTabRun(GtE(id).value);
		if ((nextCom) && nextCom != "undefined" &&nextCom != "")
			GtE(id).value = nextCom;
	}	
}

function CreateRunMenu(){
	var Menu = new SysWinDesktopObject();
	DesktopMenuStatusBool = true;
	Menu.newElement("Title");
	Menu.newElement("MenuArea");
	Menu.Obj.Title.newElement("Text");
	Menu.Obj.Title.newImage("Icon","");
	SetImage(Menu.Obj.Title.Obj.Icon.Id,1,79,false);
	Menu.Obj.Title.newElement("ExitIcon");
	MenuRunActiveElementId = Menu.Id;
	
	eval("Menu.MenuItemsObj={};");
	
	Menu.Obj.Title.Obj.Text.Edit.writeIn("Run ...");
	Menu.Obj.Title.Obj.ExitIcon.Edit.writeIn("X");
	Menu.Obj.Title.Obj.ExitIcon.Edit.setCode("HideRunMenu();");
	
	Menu.Edit.cssClass("RunMenu");
//	Menu.Obj.MenuArea.Edit.writeIn("asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>asdfgrfasfgertht<br>");
	Menu.Obj.MenuArea.Edit.cssClass("RunMenuArea");
	Menu.Obj.Title.Edit.cssClass("RunMenuTitleContainer");
	Menu.Obj.Title.Obj.Text.Edit.cssClass("RunMenuTitle");
	Menu.Obj.Title.Obj.Icon.Edit.cssClass("RunMenuTitleIcon");
	Menu.Obj.Title.Obj.ExitIcon.Edit.cssClass("RunMenuTitleExitIcon");
	
	Menu.Obj.MenuArea.newElement("Title");
	Menu.Obj.MenuArea.Obj.Title.Edit.writeIn(Translate("Type command for open")+":");
	Menu.Obj.MenuArea.newInput("Command","text","","placeholder=\\'Type command ...\\' onkeydown=\\'RunKey(event, this.id);\\'");
	Menu.Obj.MenuArea.newButton("Submit");
	Menu.Obj.MenuArea.Obj.Submit.Edit.setCode("Run('"+Menu.Obj.MenuArea.Obj.Command.Id+"');HideRunMenu();");
	Menu.Obj.MenuArea.Obj.Submit.Edit.writeIn("OK");
	Menu.Obj.MenuArea.Obj.Title.Edit.cssClass("RunMenuAreaTitle");
	Menu.Obj.MenuArea.Obj.Command.Edit.cssClass("WindowInput RunMenuAreaCommand");
	Menu.Obj.MenuArea.Obj.Submit.Edit.addCssClass("RunMenuAreaSubmit");
	MenuRunActiveElementCommandId = Menu.Obj.MenuArea.Obj.Command.Id;
/*	
	var ListOfAppsNames = [];
	var ListOfAppsCodes = [];
	var ListOfAppsIcons = [];
	var ItemSubCode = "HideApplicationsMenu();";
	for (var i = 0; i < APPGUIREGNAMES.length; i++)
		ListOfAppsNames.push(APPGUIREGNAMES[i]);
	ListOfAppsNames.sort();
	for (var j = 0; j < ListOfAppsNames.length; j++){
		ListOfAppsCodes.push(APPGUIREGCODES[APPGUIREGNAMES.indexOf(ListOfAppsNames[j])]);
		ListOfAppsIcons.push(APPGUIREGICONS[APPGUIREGNAMES.indexOf(ListOfAppsNames[j])]);
	}
	var IconExist = false;
	for (var m = 0; m < ListOfAppsNames.length; m++){
		if ((ListOfAppsIcons[m]) || ListOfAppsIcons[m] != "none")
			IconExist = true;
		eval("Menu.MenuItemsObj."+ListOfAppsNames[m]+" = new DesktopMenuItems(ListOfAppsNames[m]+'&'+m+'ItemMenu',Menu.Obj.MenuArea,SysIn.Desktop,true,IconExist);");
		if (IconExist){
			var getIndexesOfIcon = ListOfAppsIcons[m].toString().split("$");
			if (getIndexesOfIcon.length == 3)
				eval("Menu.MenuItemsObj."+ListOfAppsNames[m]+".setItemIconShell("+getIndexesOfIcon[0]+","+getIndexesOfIcon[1]+","+getIndexesOfIcon[2]+");");
			else
				eval("Menu.MenuItemsObj."+ListOfAppsNames[m]+".setItemIconSrc(\'"+ListOfAppsIcons[m]+"\');");
		}
		eval("Menu.MenuItemsObj."+ListOfAppsNames[m]+".setItemTitle(\'"+ListOfAppsNames[m]+"\');");
		eval("Menu.MenuItemsObj."+ListOfAppsNames[m]+".setItemCode(\""+ItemSubCode+ListOfAppsCodes[m]+"\");");
	}*/
}
/*
function RegisterApplicationInSystemOnStartup(uniqueIDofApplication, nameOfApplication, commandsOfApplication, dataOfApplicationIcon, codeForCreationCodeOfApplication, idOfApplicationWindow, useForStartupLoading, startCodeAfterAppLoad){//if idOfApplicationWindow = "GET" - id okna bude ziskano z return value in codeForCreationCodeOfApplication, useForStartingLoading - y v pripade, ze chceme, aby se aplikace prednacetla pri nacitani systemu, bude se prednacitat pro kazde dalsi spusteni (prednacitani bude probihat na pozadi systemu), startCodeAfterAppLoad - kod, ktery se spusti po otevreni aplikace (reakce na uzivatele, napr. dani fokusu pro inputy)
	RegisterApplicationWindowInSystemOnStartup(true, uniqueIDofApplication, nameOfApplication, commandsOfApplication, dataOfApplicationIcon, codeForCreationCodeOfApplication, idOfApplicationWindow, useForStartupLoading, startCodeAfterAppLoad){//if idOfApplicationWindow = "GET" - id okna bude ziskano z return value in codeForCreationCodeOfApplication, useForStartingLoading - y v pripade, ze chceme, aby se aplikace prednacetla pri nacitani systemu, bude se prednacitat pro kazde dalsi spusteni (prednacitani bude probihat na pozadi systemu), startCodeAfterAppLoad - kod, ktery se spusti po otevreni aplikace (reakce na uzivatele, napr. dani fokusu pro inputy)
}*/
function RegisterApplicationInSystemOnStartup(uniqueIDofApplication, nameOfApplication, commandsOfApplication, dataOfApplicationIcon, codeForCreationCodeOfApplication, idOfApplicationWindow, useForStartupLoading, startCodeAfterAppLoad){//if idOfApplicationWindow = "GET" - id okna bude ziskano z return value in codeForCreationCodeOfApplication, useForStartingLoading - y v pripade, ze chceme, aby se aplikace prednacetla pri nacitani systemu, bude se prednacitat pro kazde dalsi spusteni (prednacitani bude probihat na pozadi systemu), startCodeAfterAppLoad - kod, ktery se spusti po otevreni aplikace (reakce na uzivatele, napr. dani fokusu pro inputy)
	if (APPGUIREGAppID.indexOf(uniqueIDofApplication.toLowerCase()) != -1){
		console.error("SYSTEM ERROR: Application with ID ["+uniqueIDofApplication+"] already exist and system won't overwrite old application record. Please, use another ID for registering your application.");
		return undefined;
	}
	else
		APPGUIREGAppID.push(uniqueIDofApplication.toLowerCase());
	var gettedExistNames = 0;
	while(APPGUIREGNAMES.indexOf(nameOfApplication) != -1){
		gettedExistNames++;
	}
	if (gettedExistNames != 0)
		APPGUIREGNAMES.push(nameOfApplication+" - "+gettedExistNames);
	else
		APPGUIREGNAMES.push(nameOfApplication);
	APPGUIREGICONS.push(dataOfApplicationIcon);
	var idOfApplicationWindowCopy = idOfApplicationWindow;
	if (useForStartupLoading.toString().toLowerCase() == "y"){	
		APPGUIREGAppIDPreFabricate.push(uniqueIDofApplication.toLowerCase());
		eval("APPGUIREGAppReferenceObj."+uniqueIDofApplication.toLowerCase()+" = [];");	
		eval("APPGUIREGAppReferenceObj."+uniqueIDofApplication.toLowerCase()+"Last = 0;");	
		CopyAppObject(uniqueIDofApplication, codeForCreationCodeOfApplication, idOfApplicationWindowCopy, parseInt(APPGUIREGAppIDPreFabricate.length,10)-1, startCodeAfterAppLoad);		
	}
	else{
		idOfApplicationWindow = Math.floor(Math.random()*10000)+"none"+Math.round(Math.floor()*10000);
		APPGUIREGAppIDPreFabricate.push(Math.floor(Math.random()*10000)+"none"+Math.round(Math.floor()*10000));
	}
	APPGUIREGCODES.push("MoveAppInstances('"+uniqueIDofApplication+"','"+codeForCreationCodeOfApplication+"','"+idOfApplicationWindowCopy+"', '"+startCodeAfterAppLoad+"');");
	commandsOfApplication = commandsOfApplication.split("$");
	APPGUIREGCOMMANDS.push([]);
	APPGUIREGCOMMANDSCODES.push(APPGUIREGCODES[parseInt(APPGUIREGCODES.length, 10)-1]);
	for (var f = 0; f < commandsOfApplication.length; f++)
		APPGUIREGCOMMANDS[parseInt(APPGUIREGCOMMANDS.length, 10)-1].push(commandsOfApplication[f].toString().toLowerCase().trim());
	return APPGUIREGCODES[parseInt(APPGUIREGCODES.length, 10)-1];
}

var MoveAppInstancesControler = false;
var CopyAppObjectControler = false;
var MoveAppInstancesTimer = [];
var CopyAppObjectTimer = "";
var LastInstanceCopy = [];
function AppInstancesHandle(id){
	try{
		LastInstanceCopy.splice(LastInstanceCopy.indexOf(id),1);
	}catch(erd){}
}
function MoveAppInstances(id, applicationCode, idOfApplicationWindowCopy, startCodeAfterAppLoad){
	if (LastInstanceCopy.indexOf(id) != -1)
		return undefined;
	else{
		LastInstanceCopy.push(id);
		MoveAppInstancesTimer.push(window.setTimeout(AppInstancesHandle,500,id));
	}
	var index = APPGUIREGAppIDPreFabricate.indexOf(id.toLowerCase());
	if (index == -1){
		var r = eval(applicationCode);
		if (idOfApplicationWindowCopy.toLowerCase() == "get"){
			OpenAppWindow(r);
			try{eval(startCodeAfterAppLoad);}catch(erd){}
		}
		else{
			try{OpenAppWindow(idOfApplicationWindowCopy); 
				try{eval(startCodeAfterAppLoad);}catch(erd){}
			}catch(erd){}
		}
	}
	else{
		if ((eval("APPGUIREGAppReferenceObj."+id.toLowerCase()+"Last")) > (eval("APPGUIREGAppReferenceObj."+id.toLowerCase()+".length"))){
			var r = eval(applicationCode);
			if (idOfApplicationWindowCopy.toLowerCase() == "get"){
				OpenAppWindow(r);
				try{eval(startCodeAfterAppLoad);}catch(erd){}
			}
			else{
				try{OpenAppWindow(idOfApplicationWindowCopy); 
				try{eval(startCodeAfterAppLoad);}catch(erd){}}catch(erd){}
			}
		}
		else{
			console.log(APPGUIREGAppReferenceObj);
			OpenAppWindow(eval("APPGUIREGAppReferenceObj."+id.toLowerCase()+"[0]"));
			try{eval(startCodeAfterAppLoad);}catch(erd){}
			CopyAppObject(id.toLowerCase(),applicationCode,idOfApplicationWindowCopy, index);//zadat ke zpracovani do workeru, ktery bude bezet v pozadi
		}
	}
}

function CopyAppObject(uniqueIDofApplication, codeForCreationCodeOfApplication, idOfApplicationWindowCopy, index, startCodeAfterAppLoad){
	if (CopyAppObjectControler)
		return undefined;
	else{
		CopyAppObjectControler = true;
		CopyAppObjectTimer = window.setTimeout(function(){CopyAppObjectControler = false;},450);
	}	
	eval("APPGUIREGAppReferenceObj."+uniqueIDofApplication.toLowerCase()+"Last++;");
	if (idOfApplicationWindowCopy.toString().toLowerCase() != "get"){
		APPGUIREGAppIDPreFabricate[index] = Math.floor(Math.random()*10000)+"none"+Math.round(Math.floor()*10000);
	//	try{OpenAppWindow(idOfApplicationWindowCopy);}catch(erd){}
	}
	else{
		var StartApplication = eval(codeForCreationCodeOfApplication);
	//	try{eval(startCodeAfterAppLoad);}catch(erd){}
		eval("APPGUIREGAppReferenceObj."+uniqueIDofApplication.toLowerCase()+".unshift('"+StartApplication+"');");					
		if (GtE(StartApplication).offsetLeft != 0)
			CloseAppWindow(StartApplication);
		//	SpeedDisplayHide(StartApplication);		
	}
}

var CalcbuttonArrNames = ["√","ₓⁿ","(",")","C","DEL","MOD","/","7","8","9","X","4","5","6","-","1","2","3","+","±","0",".","="];
var CalcbuttonArrColors = ["n","n","n","n","n","n","n","n","c","c","c","n","c","c","c","n","c","c","c","n","n","c","n","n"];
var CalcTextArrea = "";
function CreateCalc(){
	var CalcWin = new SysWin("SystemCalculator","1$107$false");
	CalcWin.Version = 2.11;
	CalcWin.Edit.resizeToWin("100","100","40","110");
	CalcWin.setTitle("Calculator");
	CalcWin.Data.Edit.setSize("","","","calc(100% - 6.5vh)");
	CalcWin.Data.Edit.setStyle("overflow='hidden';");
	CalcWin.Data.Edit.setStyle("backgroundColor='#999999';");
	CalcWin.Data.Edit.setStyle("display='block';");
	CalcWin.StatusBar.Edit.hide(true);
	CalcWin.Title.Edit.setSize("","","50%","");
	CalcWin.setCanvasArrea(true);
	
	CalcWin.Data.newInput("textArrea","text","","placeholder=\"0\" onkeyup=\"CalcWork(event,this.id,true);\"");
	CalcWin.Data.Obj.textArrea.Edit.setStyle("backgroundColor='#BBBBBB';");
	CalcWin.Data.Obj.textArrea.Edit.setStyle("left='0%';");
	CalcWin.Data.Obj.textArrea.Edit.setStyle("top='0%';");
	CalcWin.Data.Obj.textArrea.Edit.setStyle("width='100%';");
	CalcWin.Data.Obj.textArrea.Edit.setStyle("height='calc(13% - 0.9285714285714286vh)';");
	CalcWin.Data.Obj.textArrea.Edit.setStyle("position='absolute';");
	CalcWin.Data.Obj.textArrea.Edit.setStyle("fontSize='4vh';");
	CalcWin.Data.Obj.textArrea.Edit.setStyle("fontWeight='bold';");
	CalcWin.Data.Obj.textArrea.Edit.setStyle("textAlign='right';");
	CalcWin.Data.Obj.textArrea.Edit.setStyle("direction='rtl';");
	CalcWin.Data.Obj.textArrea.Edit.setStyle("textIndent='1.5%';");
	
	CalcTextArrea = CalcWin.Data.Obj.textArrea.Id;
	var waitLoadWork = "";
	/*var waitAllLoad = window.setTimeout(function(){
		CalcWin.CanvasArrea.newImage("mouse","mouse.gif");
		CalcWin.CanvasArrea.Obj.mouse.Edit.setSize("10%","10%","20%","20%");
		CalcWin.CanvasArrea.Obj.mouse.Edit.setStyle("position: static; backgroundColor = transparent; fontWeight = bold; fontSize = 5vh;");
	//	CalcWin.CanvasArrea.Obj.mouse.Edit.unSetIndexIn(true);
	//CalcWin.CanvasArrea.Obj.mouse.Edit.setIndexSystem(CalcWin.CanvasArrea.Obj.mouse.Id);
		waitLoadWork = window.setInterval(function(){GtE(CalcWin.CanvasArrea.Obj.mouse.Id).style.left = (10)+"%"; GtE(CalcWin.CanvasArrea.Obj.mouse.Id).style.top = (10)+"%";},500);	
	},500);*/

	var CalcbuttonCount = 0;	
	for (var i = 0; i < 6; i++){
		for (var j = 0; j < 4; j++){
			CalcbuttonCount++;
			CalcWin.Data.newButton("number"+CalcbuttonCount);
			eval("CalcWin.Data.Obj.number"+CalcbuttonCount+".Edit.setStyle(\"left='"+((parseInt(j,10))*25)+"%';\");");
			eval("CalcWin.Data.Obj.number"+CalcbuttonCount+".Edit.setStyle(\"top=calc('"+((parseInt(i,10)+1)*14.285)+"% - 0.9285714285714286vh)';\");");
			eval("CalcWin.Data.Obj.number"+CalcbuttonCount+".Edit.setStyle(\"width='20%';\");");
			eval("CalcWin.Data.Obj.number"+CalcbuttonCount+".Edit.setStyle(\"height='calc(11% - 0.9285714285714286vh)';\");");
			eval("CalcWin.Data.Obj.number"+CalcbuttonCount+".Edit.setStyle(\"position='absolute';\");");
			eval("CalcWin.Data.Obj.number"+CalcbuttonCount+".Edit.setStyle(\"marginLeft='0px';\");");
			if (CalcbuttonArrColors[parseInt(CalcbuttonCount,10)-1] == "c")
				eval("CalcWin.Data.Obj.number"+CalcbuttonCount+".Edit.setStyle(\"color='#FFFFFF';\");");
			else
				eval("CalcWin.Data.Obj.number"+CalcbuttonCount+".Edit.setStyle(\"color='#000000';\");");
			eval("CalcWin.Data.Obj.number"+CalcbuttonCount+".Edit.setStyle(\"border='0.2vh solid #000000';\");");
			eval("CalcWin.Data.Obj.number"+CalcbuttonCount+".Edit.writeIn(\""+CalcbuttonArrNames[parseInt(CalcbuttonCount,10)-1]+"\");");
			eval("CalcWin.Data.Obj.number"+CalcbuttonCount+".Edit.setCode(\"CalcWork(\'"+CalcbuttonArrNames[parseInt(CalcbuttonCount,10)-1]+"\',\'"+CalcWin.Data.Obj.textArrea.Id+"\',true)\");");
		}
	}

	CalcWin.newMenu("File");
	CalcWin.newMenu("About");
	CalcWin.Obj.File.newItem("Clear");
	CalcWin.Obj.File.Obj.Clear.Edit.setCode("CalcWork('C','"+CalcWin.Data.Obj.textArrea.Id+"',true);");
	CalcWin.Obj.File.newItem("Close");
	CalcWin.Obj.File.Obj.Close.Edit.setCode("StartEventNonObj('"+CalcWin.CloseTitle.Id+"','click');");
	
	
	CalcWin.newSmallWindow("CreditsWin");
	CalcWin.Obj.CreditsWin.Edit.setSize("20%","25%","60%","50%");
	CalcWin.Obj.CreditsWin.TitleInner.Edit.writeIn("Credits");
	CalcWin.Obj.CreditsWin.Data.Edit.setStyle("backgroundColor='#888888';");
	CalcWin.Obj.CreditsWin.setStatusBar(false, false);
	CalcWin.Obj.CreditsWin.setTitleMenus(false, false);
	CalcWin.Obj.CreditsWin.setTitleSize(true, false);
	
	CalcWin.Obj.CreditsWin.Data.newImage("logo","");
	SetImage(CalcWin.Obj.CreditsWin.Data.Obj.logo.Id,1,89,false);
	CalcWin.Obj.CreditsWin.Data.Obj.logo.Edit.setSize("2%","35%","30%","30%");
	
	CalcWin.Obj.CreditsWin.Data.newElement("title");
	CalcWin.Obj.CreditsWin.Data.Obj.title.Edit.setSize("35%","10%","63%","85%");
	CalcWin.Obj.CreditsWin.Data.Obj.title.Edit.showFlex(true);
	GtEs(CalcWin.Obj.CreditsWin.Data.Obj.title.Id).overflow = "auto";

	CalcWin.Obj.CreditsWin.Data.Obj.title.newElement("header");
	CalcWin.Obj.CreditsWin.Data.Obj.title.Obj.header.Edit.setSize("0%","0%","100%","20%");
	CalcWin.Obj.CreditsWin.Data.Obj.title.Obj.header.Edit.setStyle("textAlign = center; fontWeight = bold; fontSize = 5vh;");
	CalcWin.Obj.CreditsWin.Data.Obj.title.Obj.header.Edit.writeIn(CalcWin.TitleInner.Edit.getWrite());
	
	CalcWin.Obj.CreditsWin.Data.Obj.title.newElement("data");
	CalcWin.Obj.CreditsWin.Data.Obj.title.Obj.data.Edit.setSize("0%","25%","100%","75%");
	CalcWin.Obj.CreditsWin.Data.Obj.title.Obj.data.Edit.setStyle("textAlign","left");
	CalcWin.Obj.CreditsWin.Data.Obj.title.Obj.data.Edit.writeIn("<b>Version:</b> "+CalcWin.Version+"<br><b>License:</b> "+nameLILANG+"<br><hr><b>"+SystemManufacturerStamp+"</b>");
	
	
	//CalcWin.Obj.CreditsWin.CloseTitle.Edit.setCode("ElWin('"+CalcWin.Id+"','get')[0][0].Obj.CreditsWin.Edit.hide(true);");	
	CalcWin.Obj.CreditsWin.Edit.hide(true);	
	
	CalcWin.newSmallWindow("HelpWin");
	CalcWin.Obj.HelpWin.Edit.setSize("20%","25%","60%","50%");
	CalcWin.Obj.HelpWin.TitleInner.Edit.writeIn("Help");
	CalcWin.Obj.HelpWin.Data.Edit.setStyle("backgroundColor='#888888';");
	CalcWin.Obj.HelpWin.setStatusBar(false, false);
	CalcWin.Obj.HelpWin.setTitleMenus(false, false);
	CalcWin.Obj.HelpWin.setTitleSize(true, false);
	
	CalcWin.Obj.HelpWin.Data.newElement("title");
	CalcWin.Obj.HelpWin.Data.Obj.title.Edit.setSize("5%","5%","90%","90%");
	//CalcWin.Obj.HelpWin.Data.Obj.title.Edit.showFlex(true);
	GtEs(CalcWin.Obj.HelpWin.Data.Obj.title.Id).overflow = "auto";	
	CalcWin.Obj.HelpWin.Data.Obj.title.Edit.writeIn("<b style='font-size: 4vh;'>List of supported expressions:</b><br><br>");
	for (var i = 0; i < CalcComArr.length; i++)
		CalcWin.Obj.HelpWin.Data.Obj.title.Edit.writeInAdd("<b>"+CalcComArr[i]+"</b>"+CalcComTitles[i]+"<br>");
	CalcWin.Obj.HelpWin.Edit.hide(true);	
	
	CalcWin.Obj.About.newItem("Credits");
	CalcWin.Obj.About.Obj.Credits.Edit.setCode("ElWin('"+CalcWin.Id+"','get')[0][0].Obj.CreditsWin.Edit.show(true);");
	CalcWin.Obj.About.newItem("Help");
	CalcWin.Obj.About.Obj.Help.Edit.setCode("ElWin('"+CalcWin.Id+"','get')[0][0].Obj.HelpWin.Edit.show(true);");
	CalcWin.Obj.File.closeMenus();

	return CalcWin.Id;
}

var CalcCommands = ["ANS","MOD","ₓⁿ","PI","ABS","LN2","LN10","LOG2E","LOG10E","SQRT1_2","SQRT2","ACOS","ACOSH","ASIN","ASINH","ATAN","ATANH","ATAN2","CBRT","CEIL","CLZ32","COS","COSH","EXP","EXPM1","FLOOR","FROUND","HYPOT","IMUL","LOG","LOG1P","LOG10","LOG2","MAX","MIN","POW","RANDOM","ROUND","SIGN","SIN","SINH","SQRT","TAN","TANH","TRUNC","SETNUM","RANGE","ROUNDTO","BASE"];
var CalcNumbs = ["1","2","3","4","5","6","7","8","9","0","/","*","+","-","=","%","(",")","C",".","{","}","[","]","X",","," ","E","Π",";"];
function CalcCheckCommands(i,d){
	d = d.slice(i,d.length);
	var OK = false;
	var subOK = true;
	var move = 0;
	for (var u = 0; u < CalcCommands.length; u++){
		subOK = true;
		if (CalcCommands[u].length <= d.length){
			for (var j = 0; j < CalcCommands[u].length; j++){
				if (CalcCommands[u][j].toString().toUpperCase() != d[j].toString().toUpperCase()){
					subOK = false;
					break;
				}
				move = parseInt(CalcCommands[u].length,10)+parseInt(i,10)-1;
			}
			if (subOK){
				OK = true;
				break;
			}
		}
	}
	if (!OK){
		if (CalcNumbs.indexOf(d[0].toString().toUpperCase() != -1)){
			OK = true;
			move = parseInt(i,10);
		}
	}
	return [OK,move];
}

var CalcProms = {};
var CalcLastRes = 0;
var ChangedLastRes = true;
var resComData = "";
var CalcComArr1 = CalcCommands.concat(["X","E","Π"]);
var CalcAdd = " - ";
var CalcComArr = ["√","a, b, d, ...","VAR a:val:","$a:val:"].concat(CalcComArr1);
var CalcComTitles = ["(x)"+CalcAdd+"Returns the positive square root of a number",CalcAdd+"Gets data from user saved variable (eg. a - gets data from variable with name a)",CalcAdd+"Sets data to a variable with name a and with value val",CalcAdd+"Sets data to a variable with name a and with value val",CalcAdd+"Variable for last mathematical result",CalcAdd+"Operator for modulo","(x; n)"+CalcAdd+"Returns base x to the exponent power n",CalcAdd+"Mathematical constant PI","(x)"+CalcAdd+"Returns the absolute value of a number",CalcAdd+"Natural logarithm of 2, approximately 0.693",CalcAdd+"Natural logarithm of 10, approximately 2.303",CalcAdd+"Base 2 logarithm of E, approximately 1.443",CalcAdd+"Base 10 logarithm of E, approximately 0.434",CalcAdd+"Square root of 1/2; equivalently, 1 over the square root of 2, approximately 0.707",CalcAdd+"Square root of 2, approximately 1.414","(x)"+CalcAdd+"Returns the arccosine of a number","(x)"+CalcAdd+"Returns the hyperbolic arccosine of a number","(x)"+CalcAdd+"Returns the arcsine of a number","(x)"+CalcAdd+"Returns the hyperbolic arcsine of a number","(x)"+CalcAdd+"Returns the arctangent of a number","(x)"+CalcAdd+"Returns the hyperbolic arctangent of a number","(x; y)"+CalcAdd+"Returns the arctangent of the quotient of its arguments","(x)"+CalcAdd+"Returns the cube root of a number","(x)"+CalcAdd+"Returns the smallest integer greater than or equal to a number","(x)"+CalcAdd+"Returns the number of leading zeroes of a 32-bit integer","(x)"+CalcAdd+"Returns the cosine of a number","(x)"+CalcAdd+"Returns the hyperbolic cosine of a number","(x)"+CalcAdd+"Returns Ex, where x is the argument, and E is Euler's constant (2.718…), the base of the natural logarithm","(x)"+CalcAdd+"Returns subtracting 1 from exp(x)","(x)"+CalcAdd+"Returns the largest integer less than or equal to a number","(x)"+CalcAdd+"Returns the nearest single precision float representation of a number","(x; y; ...)"+CalcAdd+"Returns the square root of the sum of squares of its arguments","(x; y)"+CalcAdd+"Returns the result of a 32-bit integer multiplication","(x)"+CalcAdd+"Returns the natural logarithm (loge, also ln) of a number","(x)"+CalcAdd+"Returns the natural logarithm (loge, also ln) of 1 + x for a number x","(x)"+CalcAdd+"Returns the base 10 logarithm of a number","(x)"+CalcAdd+"Returns the base 2 logarithm of a number","(x; y)"+CalcAdd+"Returns the largest of two numbers","(x; y)"+CalcAdd+"Returns the smallest of two numbers","(x; y)"+CalcAdd+"Returns base x to the exponent power y",CalcAdd+"Returns a random number between 0 and 1","(x)"+CalcAdd+"Returns the value of a number rounded to the nearest integer","(x)"+CalcAdd+"Returns the sign of the x, indicating whether x is positive, negative or zero","(x)"+CalcAdd+"Returns the sine of a number","(x)"+CalcAdd+"Returns the hyperbolic sine of a number","(x)"+CalcAdd+"Returns the positive square root of a number","(x)"+CalcAdd+"Returns the tangent of a number","(x)"+CalcAdd+"Returns the hyperbolic tangent of a number","(x)"+CalcAdd+"Returns the integral part of the number x, removing any fractional digits","(n; len)"+CalcAdd+"Set length len of number n","(a; b)"+CalcAdd+"Set random number from a value to b value","(n; len)"+CalcAdd+"Round number n to len decimals","(n; a)"+CalcAdd+"Set number n to radix a",CalcAdd+"Multiplication operator",CalcAdd+"Mathematical E constant",CalcAdd+"Mathematical PI constant"];

function CalcWork(d,id,type){
	console.log("Type: "+type);
	console.log("D: "+d);
	console.log("ID: "+id);
	data = id.toString().toUpperCase();
	resComData = data;
	if (type)
		data = GtE(id).value.toString().toUpperCase();	
	var dType = true;
	if (typeof d != "string"){
		dType = false;
		if (d.keyCode == 13)
			d = "=";
		else if (d.keyCode == 27)
			d = "C";
		else
			d = data[parseInt(data.length,10)-1];
	}
	if ((d == "+" || d == "-" || d == "*" || d == "X" || d == "/") && (!ChangedLastRes)){
		if (dType){
			if (type)
				GtE(id).value = "ANS";
			else
				resComData = "ANS";
		}
		else{
			if (type)
				GtE(id).value = "ANS"+d;
			else
				resComData = "ANS"+d;
		}
		ChangedLastRes = true;
	}
	if (d == "="){
		var trueChars = true;
		for (var i = 0; i < data.length; i++){
			var Check = CalcCheckCommands(i,data);
			if (Check[0])
				i = Check[1];
			else{
				trueChars = false;
				break;
			}
		}
		if (!trueChars){
			if (type){
				GtE(id).value = "ERROR";
				return undefined;
			}
			else{
				resComData = "ERROR";
				WriteCalc(resComData);
				return resComData;
			}
		}			
		data = data.replaceIn([" ",",",";","√","=","[","{","]","}"],["",".",",","Math.sqrt","","(","(",")",")"]);
		var dataOld = data;
		for (var f = 0; f < data.length; f++){
			var lI = data.indexOf("RANDOM",f);
			if (lI == -1)
				break;
			lI += parseInt("RANDOM".length,10);
			var fIndex = lI;
			var char1 = "";
			var char2 = "";
			if (data.length > lI){
				if (data[lI] != "("){
					char1 = "(";
					fIndex++;
				}
			}
			else{
				char1 = "(";
				fIndex++;
			}
			if (data.length > parseInt(lI,10)+1){
				if (data[parseInt(lI,10)+1] != ")"){
					char2 = ")";
					fIndex++;
				}
			}
			else{
				char2 = ")";
				fIndex++;
			}
			f = fIndex;
			data = data.slice(0,lI)+char1+char2+data.slice(lI,data.length);			
		}

		data = data.replaceIn(CalcComArr1, [CalcLastRes,"%","Math.pow","Math.PI","Math.abs","Math.LN2","Math.LN10","Math.LOG2E","Math.LOG10E","Math.SQRT1_2","Math.SQRT2","Math.acos","Math.acosh","Math.asin","Math.asinh","Math.atan","Math.atanh","Math.atan2","Math.cbrt","Math.ceil","Math.clz32","Math.cos","Math.cosh","Math.exp","Math.expm1","Math.floor","Math.fround","Math.hypot","Math.imul","Math.log","Math.log1p","Math.log10","Math.log2","Math.max","Math.min","Math.pow","Math.random","Math.round","Math.sign","Math.sin","Math.sinh","Math.sqrt","Math.tan","Math.tanh","Math.trunc","ToSetNum","SpeedRange","roundNumber","ToInt","*","Math.E","Math.PI"]);		
		var vNames = [];
		var workdata = data.split("VAR");
		for (g = 0; g < workdata.length; g++){
			workdata[g] = workdata[g].split(":");
			if (workdata[g].length > 1){
				try{
					eval("CalcProms."+workdata[g][0]+".push('("+workdata[g][1]+")');");
					vNames.push(workdata[g][0]+":"+workdata[g][1]);		
				}catch(erd){
					eval("CalcProms."+workdata[g][0]+" = [];");
					eval("CalcProms."+workdata[g][0]+".push('("+workdata[g][1]+")');");
					vNames.push(workdata[g][0]+":"+workdata[g][1]);						
				}				
			}
		}
		var workdata = data.split("$");
		for (g = 0; g < workdata.length; g++){
			workdata[g] = workdata[g].split(":");
			if (workdata[g].length > 1){
				try{
					eval("CalcProms."+workdata[g][0]+".push('("+workdata[g][1]+")');");
					vNames.push(workdata[g][0]+":"+workdata[g][1]);		
				}catch(erd){
					eval("CalcProms."+workdata[g][0]+" = [];");
					eval("CalcProms."+workdata[g][0]+".push('("+workdata[g][1]+")');");
					vNames.push(workdata[g][0]+":"+workdata[g][1]);						
				}				
			}
		}		
		for (var k = 0; k < vNames.length; k++){
			var subVnames = vNames[k].split(":");
			var workData = data.split(subVnames[0]+":");
			data = workData[0];
			for (var q = 1; q < workData.length; q++){
				workData[q] = workData[q].split(":");
				var subworkdata = "";
				for (var z = 1; z < workData[q].length; z++)
					subworkdata += ":"+workData[q][z];
				data += subworkdata.replaceIn(subVnames[0],eval("CalcProms."+subVnames[0]+"["+(parseInt(q,10)-1)+"]"));
			}
		}
		data = data.replaceIn(vNames.concat(["VAR","$",":"]),"");
		for (var x in CalcProms){
			try{
				data = data.replaceIn(x,CalcProms[x]);
			}catch(erd){}
		}
		var resTime = window.setTimeout(function(){try{var MathRes = eval(data); if ((MathRes == undefined || MathRes == null) || MathRes == ""){throw undefined;}else if (MathRes.toString() == "NaN"){if(type){GtE(id).value = "MATH ERROR";}else{resComData = "MATH ERROR";WriteCalc(resComData);}}else{if(type){GtE(id).value = MathRes;}else{resComData = MathRes;WriteCalc(resComData);} CalcLastRes = MathRes; ChangedLastRes = false;}}catch(erd){if (type){GtE(id).value = "ERROR";}else{resComData = "ERROR";WriteCalc(resComData);}}},500);
	}
	else if (d == "DEL"){
		if (type){
			var data = GtE(id).value;
			GtE(id).value = "";
			for (var i = 0; i < parseInt(data.length,10)-1; i++)
				GtE(id).value += data[i];
		}
		else{
			var data = resComData;
			resComData = "";
			for (var i = 0; i < parseInt(data.length,10)-1; i++)
				resComData += data[i];			
		}
	}
	else if (d == "C"){
		if (type)
			GtE(id).value = "";
		else
			resComData = "";
	}
	else if (d == "±"){
		if (type){
			var data = GtE(id).value;
			if (data[0] == "-")
				GtE(id).value = "+("+data.slice(1,data.length)+")";
			else if (data[0] == "+")
				GtE(id).value = "-("+data.slice(1,data.length)+")";
			else
				GtE(id).value = "-("+data+")";
		}
		else {
			var data = resComData;
			if (data[0] == "-")
				resComData = "+("+data.slice(1,data.length)+")";
			else if (data[0] == "+")
				resComData = "-("+data.slice(1,data.length)+")";
			else
				resComData = "-("+data+")";
		}		
	}
	else if (d == "." || d == "," || d == ";"){
		var data = resComData.toString().toUpperCase();
		if (type)
			data = GtE(id).value.toString().toUpperCase();
		try{
			var dIndex = (dType) ? 1 : 2;
			if (data[parseInt(data.length,10)-dIndex] == "." || data[parseInt(data.length,10)-dIndex] == "," || data[parseInt(data.length,10)-dIndex] == ";"){
				if (type)
					GtE(id).value = data.substring(0,parseInt(data.length,10)-dIndex)+";";
				else
					resComData = data.substring(0,parseInt(data.length,10)-dIndex)+";";
			}
			else
				throw undefined;
		}catch(erd){
			if (dType){
				if (type)
					GtE(id).value += d;
				else
					resComData += d;
			}
		}
	}
	else if (dType){
		if (type)
			GtE(id).value += d;
		else
			resComData += d;
	}
}

var NotifyIcons = [];
var NotifyIconsReference = "";
function SetNotifyIcon(name, iconsrc, title, evalcode, show, cannotDelete){
	var founded = false;
	for (var i = 0; i < NotifyIcons.length; i++){
		if (NotifyIcons[i][0].toLowerCase() == name.toLowerCase()){
			if (show){
				if (iconsrc)
					NotifyIcons[i][1] = iconsrc;
				if (title)
					NotifyIcons[i][2] = title;
				if (evalcode)
					NotifyIcons[i][3] = evalcode;
			}
			else if (NotifyIcons[i][5] != false){
				GtE(NotifyIcons[i][4].Id).parentNode.removeChild(GtE(NotifyIcons[i][4].Id));
				NotifyIcons.splice(i, 1);
			}
			founded = true;
			break;
		}
	}
	if (!founded){
		NotifyIcons.push([]);
		NotifyIcons[parseInt(NotifyIcons.length, 10)-1].push(name);
		NotifyIcons[parseInt(NotifyIcons.length, 10)-1].push(iconsrc);
		NotifyIcons[parseInt(NotifyIcons.length, 10)-1].push(title);
		NotifyIcons[parseInt(NotifyIcons.length, 10)-1].push(evalcode);
		DesktopNotifyTrayData[0].newNotifyTrayIcon(name);
		NotifyIcons[parseInt(NotifyIcons.length, 10)-1].push(cannotDelete);
		NotifyIcons[parseInt(NotifyIcons.length, 10)-1].push("");
	}
	if ((!founded) || ((founded) && (show))){
		for (var x in DesktopNotifyTrayData[0].NotifyIconsObj){
			try{
				if (x == name){
					if (iconsrc){
						var inIconSrc = iconsrc.split("$");
						if (inIconSrc.length == 2 || inIconSrc.length == 3){
							if (inIconSrc.length == 2 && inIconSrc[0] == "e")
								DesktopNotifyTrayData[0].NotifyIconsObj[x].Edit.writeIn(inIconSrc[1]);
							else
								SetImage(DesktopNotifyTrayData[0].NotifyIconsObj[x].Id,inIconSrc[0],inIconSrc[1],false);
						}
						else
							SetImage(DesktopNotifyTrayData[0].NotifyIconsObj[x].Id,iconsrc,0,false);												
					}
					if (title)
						SpeedWriteTitle(DesktopNotifyTrayData[0].NotifyIconsObj[x].Id, title);
					if (evalcode)
						DesktopNotifyTrayData[0].NotifyIconsObj[x].Edit.setCode(evalcode);	
					if (NotifyIconsReference.length == 0 && (cannotDelete) && (!founded))
						NotifyIconsReference = DesktopNotifyTrayData[0].NotifyIconsObj[x].Id;	
					if (!founded)
						NotifyIcons[parseInt(NotifyIcons.length, 10)-1][parseInt(NotifyIcons[parseInt(NotifyIcons.length, 10)-1].length,10)-1] = DesktopNotifyTrayData[0].NotifyIconsObj[x].Id;
					break;
				}
			}catch(erd){}
		}
		if (!founded){
			var elems = [];
		/*	for (var f = 0; f < NotifyIcons.length; f++)
				elems.push();*/
			MoveNotifyIcons("nomove", 0);
		}
	}
}

var MaxNotifyIconsAreVisible = 6;
function MoveNotifyIcons(type, ammount){
	var oldScroll = GtE(DesktopNotifyTrayData[0].NotifyIconsInner.Id).scrollLeft;
	if (type != "nomove"){
		if (type == "l")
			GtE(DesktopNotifyTrayData[0].NotifyIconsInner.Id).scrollLeft -= ammount;		
		else	
			GtE(DesktopNotifyTrayData[0].NotifyIconsInner.Id).scrollLeft += ammount;	
	}
	if (parseInt(GtE(DesktopNotifyTrayData[0].NotifyIconsInner.Id).scrollLeft,10) <= 0)
		GtE(DesktopNotifyTrayData[1]).style.visibility = "hidden";
	else
		GtE(DesktopNotifyTrayData[1]).style.visibility = "visible";
	if ((parseInt(oldScroll,10) != parseInt(GtE(DesktopNotifyTrayData[0].NotifyIconsInner.Id).scrollLeft,10)-parseInt(ammount,10) && (type != "l")))
		GtE(DesktopNotifyTrayData[2]).style.visibility = "hidden";
	else
		GtE(DesktopNotifyTrayData[2]).style.visibility = "visible";	
	if (NotifyIcons.length <= MaxNotifyIconsAreVisible){
		GtE(DesktopNotifyTrayData[1]).style.visibility = "hidden";
		GtE(DesktopNotifyTrayData[2]).style.visibility = "hidden";
	}
}