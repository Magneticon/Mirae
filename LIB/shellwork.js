var AppNameString = (_AppName && _AppName != "") ? _AppName : "Mirae";

//****************************************************************************************************
//
// VIEW SYSTEM DEFINITION
//
// VIEWS system desktop instance is saved in variable Sysin
//We can modify the system environment to suit our application by referring the SYS variable
function SystemOnLoad(){

//****************************************************
//Edit the start menu

	SysIn.Tray.Menu.writeMenuTitle(AppNameString);
	
    if (!_ShutdownUnAvailable){
        SysIn.Tray.Menu.newItem("Shutdown",true);
        SysIn.Tray.Menu.Items.Shutdown.setItemTitle(Translate("Shutdown")+" "+AppNameString);
        SysIn.Tray.Menu.Items.Shutdown.setItemIconShell(1,87,0);
        SysIn.Tray.Menu.Items.Shutdown.setItemCode("ExitAppAsk('"+SysIn.Id+"','"+AppNameString+"');");
    }

    if (!_RestartUnAvailable){
        SysIn.Tray.Menu.newItem("Restart",true);
        SysIn.Tray.Menu.Items.Restart.setItemTitle(Translate("Restart")+" "+AppNameString);
        SysIn.Tray.Menu.Items.Restart.setItemIconShell(1,86,0);
        SysIn.Tray.Menu.Items.Restart.setItemCode("RestartAppAsk('"+SysIn.Id+"','"+AppNameString+"');");
    }

    if (!_ShutdownUnAvailable || !_RestartUnAvailable)
        SysIn.Tray.Menu.addSeparator("Separator1");

    if (!_DisableCMD && _AllowedModes == 0){
        SysIn.Tray.Menu.newItem("CommandPrompt",true);
        SysIn.Tray.Menu.Items.CommandPrompt.setItemTitleTr("ASCOM");
        SysIn.Tray.Menu.Items.CommandPrompt.setItemIconShell(1,80,0);
        SysIn.Tray.Menu.Items.CommandPrompt.setItemCode("GUISystem(false);");
    }

//****************************************************
//Modify our desktop - add icons, change background

    if (_DesktopBackground != "")
        SysIn.setBackGroundImage(_DesktopBackground);
    if (_DesktopBackgroundColor != "")
        SysIn.setBackGroundColor(_DesktopBackgroundColor);
    else
        SysIn.setBackGroundColor("#0000AA");
    
    if (_AllowedModes != 3){
//        SysIn.newIconFromIconData("Restart",Translate("Restart system"),1,86,false,"alert();");
    }

//****************************************************
//Load parts of application (subwindows, etc.) in async
//    var WindowsToLoad = ["Create_Window_1();", "Create_Window_2();", "Create_Window_3();"];
    var WindowsToLoad = [];
    WinLDR(WindowsToLoad, true);
//we have to let kernel know, once the loading is finished. either as callback in SetLoadClock or we need to run manually.
//	OnLoadFinished();

//****************************************************
//Create some windows
//	var w = new ShellWin("asdfghjklp",S.Desktop.Id);// 10znaku

//	var u = new SysWin("aGGGb2",false);// 12znaku
/*	var g = new SysWin("aGGGbsfdwseg2",false);// 12znaku
	var e = new SysWin("a2",false);// 12znaku
	var r = new SysWin("aGGGb2ewf",false);// 12znaku
	var d = new SysWin("aGGGbewf2",false);// 12znaku
	var f = new SysWin("aGGefgGb2",false);// 12znaku
	var h = new SysWin("aGGGb2edf",false);// 12znaku
	var o = new SysWin("aGGdGb2",false);// 12znaku
	var p = new SysWin("fGGGb2",false);// 12znaku
	var l = new SysWin("aGsweftGGb2",false);// 12znaku 
	*/
	/*var g = new ShellWin("ab3",S.Desktop.Id,false);// 12znaku
	var e = new ShellWin("ab4",S.Desktop.Id,false);// 12znaku
	var r = new ShellWin("ab5",S.Desktop.Id,false);// 12znaku
	var d = new ShellWin("a6",S.Desktop.Id,false);// 12znaku
	var f = new ShellWin("a7",S.Desktop.Id,false);// 12znaku
	var h = new ShellWin("a8",S.Desktop.Id,false);// 12znaku
	var o = new ShellWin("a9",S.Desktop.Id,false);// 12znaku
	var p = new ShellWin("a10",S.Desktop.Id,false);// 12znaku
	var l = new ShellWin("a11",S.Desktop.Id,false);// 12znaku*/
/*	w.Edit.setSize("20%","20%","60%","60%");
	u.Edit.setSize("20%","20%","60%","60%");
	g.Edit.setSize("20%","20%","60%","60%");
	e.Edit.setSize("20%","20%","60%","60%");
	r.Edit.setSize("20%","20%","60%","60%");
	t.Edit.setSize("20%","20%","60%","60%");*/
	//w.newActiveDesktop("e",w.Data);
	//w.Edit.setDrCode("DGDPST();");
	/*var WI = w.ActiveDesktops.e.newIconFromIconData;
	newDeskIcon("Restart",Translate("Restart system"),1,86,false,"Gui_System_Restart();");
	WI("Restart1",Translate("Restart system"),1,86,false,"Gui_System_Restart();");*/
//****************************************************************************************************

}
function Create_Window_3(){
	var w = new SysWin("hjhjhjyjsafsdfesbv sddfgdsffgaf",false);// 12znaku
	w.newMenu("test");
	w.Menus.test.newItem("New");
	w.Menus.test.newItem("New1");
	w.Menus.test.newItem("New2");
	w.Menus.test.newItem("New3");
	w.Menus.test.newItem("New4");
	w.Menus.test.newItem("New5");
	w.Menus.test.newItem("New6");
	w.Menus.test.newItem("New7");
	w.Menus.test.newItem("New8");
	w.Menus.test.newItem("New9");
	w.Menus.test.newItem("New0");
	w.Menus.test.newItem("New11");
	w.Menus.test.newItem("New12");
	w.Menus.test.newItem("New13");
	w.Menus.test.newItem("New14");
	w.Menus.test.newItem("New15");
	w.Menus.test.newItem("New16");
	w.Menus.test.newItem("New17");
	w.Menus.test.newItem("New18");
	w.Menus.test.newItem("New20");
	w.newMenu("test1");
	w.Menus.test1.newItem("New");
	w.Menus.test1.newItem("New1");
	w.newMenu("test2");
	w.newMenu("test3");
	w.newMenu("test4");
	w.newMenu("test5");
	w.newMenu("test6");
	w.newMenu("test7");
	w.openWindow();
//	w.minimizeWindow();
//	SelectLastWin();//selects last created window
//	w.Edit.setIndexSystemTopFixed();
}

function Create_Window_2(){
	var w = new SysWin("ab1saddsafdsafsdfesbv sddfgdsffgaf",false);// 12znaku
	w.newMenu("test");
	w.Menus.test.newItem("New");
	w.Menus.test.newItem("New1");
	w.Menus.test.newItem("New2");
	w.Menus.test.newItem("New3");
	w.Menus.test.newItem("New4");
	w.Menus.test.newItem("New5");
	w.Menus.test.newItem("New6");
	w.Menus.test.newItem("New7");
	w.Menus.test.newItem("New8");
	w.Menus.test.newItem("New9");
	w.Menus.test.newItem("New0");
	w.Menus.test.newItem("New11");
	w.Menus.test.newItem("New12");
	w.Menus.test.newItem("New13");
	w.Menus.test.newItem("New14");
	w.Menus.test.newItem("New15");
	w.Menus.test.newItem("New16");
	w.Menus.test.newItem("New17");
	w.Menus.test.newItem("New18");
	w.Menus.test.newItem("New20");
	w.newMenu("test1");
	w.newMenu("test2");
	w.newMenu("test3");
	w.newMenu("test4");
	w.newMenu("test5");
	w.newMenu("test6");
	w.newMenu("test7");
	w.openWindow();
//	w.minimizeWindow();
//	SelectLastWin();//selects last created window
//	w.Edit.setIndexSystemTopFixed();
}

function Create_Window_1(){
	var u = new SysWin("aGGGb2",false);
//	u.setTitleBar(false, false);
//	u.setStatusBar(true, false);
//	u.setDataAreaOnly();
	u.openWindow();
	/*
window.setTimeout(function(){u.selectWindow();},3000);
var a = new SysWin("aGGGb2",false);
a.openWindow();
var b = new SysWin("aGGGb2",false);
b.openWindow();
var c = new SysWin("aGGGb2",false);
c.openWindow();
var d = new SysWin("aGGGb2",false);
d.openWindow();
var e = new SysWin("aGGGb2",false);
e.openWindow();   */
//u.hideWindowInTaskbar();
//	u.Edit.setIndexSystemTop();
}

function CheckSysMode(){
//****************************************************
//Edit the desktop taskbar behavior

    if (_AllowedModes == 3){
        SysIn.Tray.HideTray();//hide main desktop tray
        SysIn.Tray.NoBarMinimizeType = 2;//since we have hidden main desktop tray, we will use minmizetype 1 - minimizing into current window position. We could use 2 as well - minimize to bottom of the screen or 0 - default setting. This parameter can be overriden by setting the same variable in window object itself
        SysIn.Tray.DoNotUseMoveTrayOverride = true;//since we have hidden main desktop tray, we can set . This parameter can DoNotUseMoveTrayOverride to either false of true. False is, that we want to change default collapse location of minimize bar, when user moves it. If we set to true, when user moves the minimize collapse section, it wont have effect on minimize location when window will be minimized in the future. can be overriden by setting the same variable in window object itself
    }
}