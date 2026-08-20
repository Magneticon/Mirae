function ContinueOnShellLoad(){
	sysrgMessages(false,false,false);
	Start_Work();
	Start_Window_Work();
	Hide_Message_Window_New_App();
	Started = true;
}

//****************************************************
//Load settings from localstorage

function Start_Work(){
	//default load of application
}

function Set_Ok(){
	SetSSt(AppName,"WorkCorrect","ok");
	CopySetNone();
}

//****************************************************
//Load settings from localstorage

function GetSet(){
	for (var i = 0; i < dataFrom.length;i++){
		try{
			window[dataFrom[i]] = GetSSt(AppName,dataFrom[i]);
		}catch(erd){}
	}
}

function CopySet(){
	for (var i = 0; i < dataFrom.length;i++){
		try{
			SetSSt(AppName,dataFrom[i],window[dataFrom[i]]);
		}
		catch(erd){}
	}
}

function CopySetNone(){
	for (var i = 0; i < dataFrom.length;i++){
		try{
			SetSSt(AppName,dataFrom[i],"none");
		}
		catch(erd){}
	}
}

//****************************************************
//Enable/disable keyboard shortcuts

function SetShortcuts(){
	App.setShortcutsExit.show(true);
}

function Set_Shortcuts_Exit_close(){
	App.setShortcutsExit.hide(true);
}

function Set_Shortcuts_Exit_Work(){
	if (ShortCutSet)
		ShortCutSet = false;
	else
		ShortCutSet = true;
	Show_Message_Window_New_App(Translate("Restarting the application")+" ...","0.92");
	var wait = window.setTimeout(function(){
		StartAppSoft();
		ShortCutChange = true;
	},200);
}

//****************************************************
//Show welcome window

function Start_Window_Work(){
	BlockWelcome = true;
	App.startWindow.show(true);
	GtE(App.startWindow.Id).style.opacity = 0;
	ReverseGradient(0,15,2000,App.startWindow.Id);
	var waitUnblockWelcome = window.setTimeout(function(){BlockWelcome = false;},2200);
	var WordsStart = ["JavaScript není Java","slovo Java je součástí názvu JavaScriptu pouze z marketingových důvodů","JavaScript vznikl v roce 1995","většina rozšíření pro webové prohlížeče jsou implementováná použitím JavaScriptu","kancelářský balík aplikací OpenOffice umožňuje používat JavaScript jako skriptovací jazyk","nástroje v Adobe Creative Suite, včetně Photoshop, Illustrator, Dreamweaver a InDesign umožňují skriptování pomocí JavaScriptu","herní engine Unity 3D podporuje upravenou verzi JavaScriptu pro skriptování pomocí Mono","podle údajů firmy Yahoo z roku 2010 je podíl stránek načtených bez spuštění JavaScriptu 1,3 %","JavaScript je možné spouštět v operačních systémech Windows pomocí programu Windows Script Host a nahradit tak dávkové soubory MS-DOS","se JavaScript používá k psaní rozšíření pro mnohé aplikace, například Adobe Acrobat","JavaScript je možné použít i na straně serveru (např. Node.js)","standardizovaná verze JavaScriptu je pojmenována ECMAScript","syntaxe jazyka JavaScript patří do rodiny jazyků C/C++/Java","JavaScript je multiplatformní, objektově orientovaný skriptovací jazyk","autorem jazyka JavaScript je Brendan Eich z tehdejší společnosti Netscape"];
	App.startWindow.Data.popisek3.writeIn("... "+Translate(WordsStart[Math.floor(Math.random()*parseInt(WordsStart.length,10))])+"?");
}

function Start_Window_Set_New_File(){
	Start_Window_Close();
	NewFile_Prepare_Set();
}

function Start_Window_Set_Examples(){
	Start_Window_Close();
	OpenExamplesWay();
}

function Start_Window_Set_Open_File(){
	Start_Window_Close();
	OpenFile();
}

function Start_Window_Close(){
	App.startWindow.hide(true);
}

//****************************************************

function Set_Lang_Exit_Prepare(){
	App.setLanguageExit.show(true);
}

function Set_Lang_Exit_close(){
	App.setLanguage.hide(true);
}

function Set_Lang_Exit_Work(){
	LanSetTo = LanSetToPrep;
	Set_Lang_close();
	Show_Message_Window_New_App(Translate("Restarting the application")+" ...","0.92");
	StartAppSoft();
}

function Set_Lang_Prepare(){
	App.setLanguage.show(true);
	Set_Lang_alt();
}

function Set_Lang_close(){
	App.setLanguage.hide(true);
	GetFocusBackToWriteElementId();		
}

function Set_Lang_Work(){
	switch (GtE("s1_lang"+AppName).options[GtE("s1_lang"+AppName).selectedIndex].value.toLowerCase().trim()){
		case "cz":
			LanSetToPrep = "CZ";
			Set_Lang_close();
			Set_Lang_Exit_Prepare();
			break;
		case "eng":
			LanSetToPrep = "ENG";
			Set_Lang_close();
			Set_Lang_Exit_Prepare();
			break;
		default:
			break;
	}
}

function Set_Lang_alt(){
	GtE("s1_lang"+AppName).focus();
}

var UserWorkPrepareData,LangWorkPrepareData,AuthorWorkPrepareData,FilePasswordWorkPrepareData,FilePasswordDataWorkPrepareData,CanFileEditWorkPrepareData,AutoCompleteSwitchWorkPrepareData,JSNumberColorWorkPrepareData,JSCommentStarColorWorkPrepareData,JSCommentSlashColorWorkPrepareData,JSApostropheColorWorkPrepareData,JSApostropheDoubleColorWorkPrepareData,JSSpecialsColorWorkPrepareData,JSWordsColorWorkPrepareData,JSCOLORWorkPrepareData,JSBACKGROUNDCOLORWorkPrepareData,autoSaveWorkPrepareData,noAutoSaveWorkPrepareData;
function Get_Settings_Exit_close(){
	App.getSettingsExit.hide(true);
}
function Get_Settings_Exit_Prepare(){
	App.getSettingsExit.show(true);
}
function Get_Settings_Exit_Work(){
	Get_Settings_Exit_close();
	User = UserWorkPrepareData;
	Lang = LangWorkPrepareData;
	Author = AuthorWorkPrepareData;
	FilePassword = FilePasswordWorkPrepareData;
	FilePasswordData = FilePasswordDataWorkPrepareData;
	CanFileEdit = CanFileEditWorkPrepareData;
	AutoCompleteSwitch = AutoCompleteSwitchWorkPrepareData;
	JSNumberColor = JSNumberColorWorkPrepareData;
	JSCommentStarColor = JSCommentStarColorWorkPrepareData;
	JSCommentSlashColor = JSCommentSlashColorWorkPrepareData;
	JSApostropheColor = JSApostropheColorWorkPrepareData;
	JSApostropheDoubleColor = JSApostropheDoubleColorWorkPrepareData;
	JSSpecialsColor = JSSpecialsColorWorkPrepareData;
	JSWordsColor = JSWordsColorWorkPrepareData;
	JSCOLOR = JSCOLORWorkPrepareData;
	JSBACKGROUNDCOLOR = JSBACKGROUNDCOLORWorkPrepareData;
	autoSave = autoSaveWorkPrepareData;
	noAutoSave = noAutoSaveWorkPrepareData;
	StartAppSoft();	
}

//****************************************************
//Save setting file handler

function Save_Settings_prepare(){
	App.saveSettings.show(true);
	App.saveSettings.Data.Input01.value("");
	Save_Settings_alt();
}

function Save_Settings_close(){
	App.saveSettings.Data.Input01.setOkBg();
	App.saveSettings.hide(true);
	GetFocusBackToWriteElementId();	
}

function Save_Settings_alt(){
	App.saveSettings.Data.Input01.setFocus();	
}

function Save_Settings_Work(){
	var setFileName = App.saveSettings.Data.Input01.getValue();
	if ((!setFileName) || setFileName == ""){
		App.saveSettings.Data.Input01.setBadBg();
		return undefined;
	}
	var ExportData = "";
	var NameOfFile = setFileName.split(".");
	var NameOfFileRes = NameOfFile[0];
	var type = NameOfFile[parseInt(NameOfFile.length,10)-1];
	if (type != "jstns")
		type = "jstns";
	ExportData = BeforeTag3+"User$:!:$"+User+"??!??Lang$:!:$"+Lang+"??!??Author$:!:$"+Author+"??!??FilePassword$:!:$"+FilePassword+"??!??FilePasswordData$:!:$"+FilePasswordData+"??!??CanFileEdit$:!:$"+CanFileEdit+"??!??AutoCompleteSwitch$:!:$"+AutoCompleteSwitch+"??!??JSNumberColor$:!:$"+JSNumberColor+"??!??JSCommentStarColor$:!:$"+JSCommentStarColor+"??!??JSCommentSlashColor$:!:$"+JSCommentSlashColor+"??!??JSApostropheColor$:!:$"+JSApostropheColor+"??!??JSApostropheDoubleColor$:!:$"+JSApostropheDoubleColor+"??!??JSSpecialsColor$:!:$"+JSSpecialsColor+"??!??JSWordsColor$:!:$"+JSWordsColor+"??!??JSCOLOR$:!:$"+JSCOLOR+"??!??JSBACKGROUNDCOLOR$:!:$"+JSBACKGROUNDCOLOR+"??!??autoSave$:!:$"+autoSave+"??!??noAutoSave$:!:$"+noAutoSave+AfterTag3;
	var id = AppName+"saveSetLink"+avc();
	ToHide("<a id='"+id+"' value='SaveDataDialog'></a>");
	var ToExport = CreateDownloadFile(id, ExportData, NameOfFileRes+"."+type,'data/binary');
	StartEvent(GtE(id),'click');
	Save_Settings_close()	
}

//****************************************************

//****************************************************
//Open & load setting file handler

function OpenSettings(){
	ToHide("<input type='file' id='"+AppName+"SettingsOpenDialogStart' onchange='javascript:GetFileData(event,\"Get_Open_Data_Settings(GetFileDataResult,GetFileDataNames,GetFileDataDates,GetFileDataSizes,GetFileDataTypes,GetFileDataUrls);\");' value='OpenDialogEdit'>");
	StartEvent(GtE(AppName+'SettingsOpenDialogStart'),'click');
	GetFocusBackToWriteElementId();	
	return "done";
}

function Get_Open_Data_Settings(data,name,date,size,type,url){
	data = data[0];
	name = name[0];
	var Extension = name.split('.');
	Extension = Extension[parseInt(Extension.length,10)-1].toLowerCase().trim();
	if (Extension != "jstns"){
		Show_Message_Window(Translate("This file is not valid file of application Mirae and it cannot be loaded. Please use different file."),false);
		return undefined;
	}
	var file = data.replace(BeforeTag3,"").replace(AfterTag3,"");
	if ((!file) || file == ""){
		Show_Message_Window(Translate("This file is corrupted and cannto be loaded. Please use different file."),false);
		return undefined;		
	}
	else{
		file = file.split("??!??");
		if (file.length < 2){
			Show_Message_Window(Translate("This file is corrupted and cannto be loaded. Please use different file."),false);
			return undefined;			
		}
		for (var i = 0; i < file.length;i++){
			try{
				var data = file[i].split("$:!:$");
				if (data.length != 2)
					console.log(erdx);
				var value = data[1];
				var key = data[0]
				if (value == "")
					console.log(erdx);
				switch(key){
					case "noAutoSave":
						noAutoSaveWorkPrepareData = value;
						break;
					case "autoSave":
						autoSaveWorkPrepareData = value;
						break;
					case "JSBACKGROUNDCOLOR":
						if (!value)
							console.log(erdx);
						JSBACKGROUNDCOLORWorkPrepareData = value;
						break;
					case "JSCOLOR":
						if (!value)
							console.log(erdx);
						JSCOLORWorkPrepareData = value;
						break;
					case "JSWordsColor":
						if (!value)
							console.log(erdx);
						JSWordsColorWorkPrepareData = value;
						break;
					case "JSSpecialsColor":
						if (!value)
							console.log(erdx);
						JSSpecialsColorWorkPrepareData = value;
						break;
					case "JSApostropheDoubleColor":
						if (!value)
							console.log(erdx);
						JSApostropheDoubleColorWorkPrepareData = value;
						break;
					case "JSApostropheColor":
						if (!value)
							console.log(erdx);
						JSApostropheColorWorkPrepareData = value;
						break;
					case "JSCommentSlashColor":
						if (!value)
							console.log(erdx);
						JSCommentSlashColorWorkPrepareData = value;
						break;
					case "JSCommentStarColor":
						if (!value)
							console.log(erdx);
						JSCommentStarColorWorkPrepareData = value;
						break;
					case "User":
						if (!value)
							console.log(erdx);
						UserWorkPrepareData = value;
						break;
					case "Lang":
						if ((!value) || (!eval("lan"+value)))
							console.log(erdx);
						LangWorkPrepareData = value;
						break;
					case "Author":
						if (!value)
							console.log(erdx);
						AuthorWorkPrepareData = value;
						break;
					case "FilePassword":
						FilePasswordWorkPrepareData = value;
						break;
					case "FilePasswordData":
						FilePasswordDataWorkPrepareData = value;
						break;
					case "CanFileEdit":
						CanFileEditWorkPrepareData = value;
						break;
					case "AutoCompleteSwitch":
						AutoCompleteSwitchWorkPrepareData = value;
						break;
					case "JSNumberColor":
						if (!value)
							console.log(erdx);
						JSNumberColorWorkPrepareData = value;
						break;
					default:
						console.log(erdx);
						break;
				}
			}catch(erd){
				Show_Message_Window(Translate("This file is corrupted and cannot be loaded. Please use different file."),false);
				return undefined;
			}
		}
		Get_Settings_Exit_Prepare();
	}
}

var ShMessWork = undefined;
function Show_Message_Window(data,afterWork){
	App.messageFile.show(true);
	if (afterWork)
		ShMessWork = afterWork;
	else
		ShMessWork = undefined;
}

function Close_Message_Window(){
	App.messageFile.hide(true);	
	if (ShMessWork)
		eval(ShMessWork);
}

//****************************************************

//****************************************************
//EXIT application handler
function Exit_Prepare(){
	App.exitApp.show(true);
}

function Exit_Close(){
	App.exitApp.hide(true);
	GetFocusBackToWriteElementId();
}

function Exit_Work(){
	Set_Ok();
	UnLocDoc();
	ExitApp(App.Grid.Id,"StartApp();");
}
//****************************************************

function StatusWrite(){
	var docLenght = document.activeElement;
	var docId = GtE(docLenght.id);
	if (activeElementsTextTo.indexOf(docLenght.id) != -1){
		var ColsCount = 0;
		var RowsData;
		var ActualRowsData;
		if (docId.tagName.toLowerCase() == "div" || docId.tagName.toLowerCase() == "span" || docId.tagName.toLowerCase() == "p"){
			RowsData = docId.innerHTML.split("<br>");
			ActualRowsData = docId.innerHTML.slice(0,docLenght.selectionStart).split("<br>");
		}
		else{
			RowsData = docId.value.split(/\r*\n/);
			ActualRowsData = docId.value.slice(0,docLenght.selectionStart).split(/\r*\n/);
		}
		for (var i = 0; i < RowsData.length;i++){
			var RowLenght = RowsData[i].length;
			if (RowLenght > ColsCount)
				ColsCount = RowLenght;
		}
		App.StatusBar.Mode.ModeData.writeIn(Mode);
		App.StatusBar.User.UserData.writeIn(User);
		if (ActualRowsData.length > 1 && (docId.tagName.toLowerCase() == "div" || docId.tagName.toLowerCase() == "span" || docId.tagName.toLowerCase() == "p")){
			App.StatusBar.Row.RowData.writeIn(parseInt(ActualRowsData.length,10)-1);
			App.StatusBar.Col.ColData.writeIn(parseInt(ActualRowsData[parseInt(ActualRowsData.length,10)-2].length,10));
			App.StatusBar.Rows.RowsData.writeIn((RowsData.length)-1);
			App.StatusBar.Cols.ColsData.writeIn(ColsCount);
		}
		else{
			App.StatusBar.Row.RowData.writeIn(ActualRowsData.length);
			App.StatusBar.Col.ColData.writeIn(parseInt(ActualRowsData[parseInt(ActualRowsData.length,10)-1].length,10));
			App.StatusBar.Rows.RowsData.writeIn(RowsData.length);
			App.StatusBar.Cols.ColsData.writeIn(ColsCount);			
		}
		if (docId.tagName.toLowerCase() == "div" || docId.tagName.toLowerCase() == "span" || docId.tagName.toLowerCase() == "p")
			App.StatusBar.Chars.CharsData.writeIn(docId.innerHTML.length);
		else
			App.StatusBar.Chars.CharsData.writeIn(docId.value.length);
		try{
			if (docId.tagName.toLowerCase() == "div" || docId.tagName.toLowerCase() == "span" || docId.tagName.toLowerCase() == "p")
				App.StatusBar.Words.WordsData.writeIn((docId.innerHTML.match(/\b/g).length/2)-(parseInt(RowsData.length,10)-1));
			else
				App.StatusBar.Words.WordsData.writeIn(docId.value.match(/\b/g).length/2);
		}
		catch(erd){
			App.StatusBar.Words.WordsData.writeIn(0);
		}
		App.StatusBar.Lang.LangData.writeIn(WriteLangFrom(Lang));
	}
	else{
		App.StatusBar.Mode.ModeData.writeIn(Mode);
		App.StatusBar.User.UserData.writeIn(User);
		App.StatusBar.Row.RowData.writeIn("-");
		App.StatusBar.Col.ColData.writeIn("-");
		App.StatusBar.Rows.RowsData.writeIn("-");
		App.StatusBar.Cols.ColsData.writeIn("-");
		App.StatusBar.Chars.CharsData.writeIn("-");
		App.StatusBar.Words.WordsData.writeIn("-");
		App.StatusBar.Lang.LangData.writeIn(WriteLangFrom(Lang));
	}
}