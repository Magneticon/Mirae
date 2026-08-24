/*
	GFRAME - FRAMEWORK FOR GUISHELL - PROVIDES SYSTEM SHELL FUNCTIONS FOR FRONT-END DEVELOPERS
	
	v5.22
	04:59	2026-08-20

	for ASCOM SYSTEMS and related

	DO NOT DELETE - IT IS MAIN FILE FOR SYSTEM RUN

	© 2009-2026 586sys	
*/

var GFRAMEver = 5.22;

//tvorba oken

class SysWin extends ShellWin{
	constructor(name,winIconSrc){
		super(name,SysIn.Desktop.Id,false,winIconSrc);
	}
}

var SHAppUID = [];
var SHAppName = [];
var SHAppInstances = [];

class DesktopPopup extends SysWin{
	constructor(name,title ,winIconSrc, showImageBool, data){
		super(name,winIconSrc);
		GtE(this.Id).style.top = "30%";
		GtE(this.Id).style.left = "30%";
		GtE(this.Id).style.width = "40%";
		GtE(this.Id).style.height = "40%";
		this.setStatusBar(false, false);
		this.setTitleMenus(false, false);
		this.setTitleButtons(false, false);
		this.setTitleSize(true, false);
		this.Data.newElement("First");
		GtE(this.Data.Id).style.overflow = "hidden";
		GtE(this.Data.Id).style.backgroundColor = "#FFFFFF";
		GtE(this.Data.Id).style.height = "calc(100% - 5.5vh)";
		GtE(this.Data.Id).style.top = "4.75vh";
		this.Data.newElement("Second");
		this.Data.Obj.Second.newButton("OK");
		this.Data.Obj.Second.Obj.OK.Edit.setCode("ElWin('"+this.Id+"','close');");
		GtE(this.Data.Obj.Second.Id).style.width = "100%";
		GtE(this.Data.Obj.Second.Id).style.height = "calc(30% - 0.2vh)";
		GtE(this.Data.Obj.Second.Id).style.marginTop = "0%";
		GtE(this.Data.Obj.Second.Id).style.borderTop = "0.2vh solid #000000";
		GtE(this.Data.Obj.Second.Id).style.display = "flex";
		GtE(this.Data.Obj.Second.Obj.OK.Id).style.marginLeft = "70%";
		GtE(this.Data.Obj.Second.Obj.OK.Id).style.marginTop = "3%";
		GtE(this.Data.Obj.Second.Obj.OK.Id).style.height = "20%";
		GtE(this.Data.Obj.Second.Obj.OK.Id).style.width = "15%";
		GtE(this.Data.Obj.Second.Id).style.backgroundColor = "#AAAAAA";
		GtE(this.Data.Obj.First.Id).style.width = "100%";
		GtE(this.Data.Obj.First.Id).style.height = "70%";
		GtE(this.Data.Obj.First.Id).style.marginTop = "0%";
		GtE(this.Data.Obj.First.Id).style.backgroundColor = "#FFFFFF";
		GtE(this.Data.Obj.First.Id).style.color = "#000000";
		var d = "ElWin('"+this.Id+"','close');";
		GtE(this.Data.Id).onkeydown = function(e,d){
			if (e.keyCode == 13)
				eval(d);
		}

		if (showImageBool){
			this.Data.Obj.First.newImage("image", "");
			if (this.IconSource.length == 3)
				SetImage(this.Data.Obj.First.Obj.image.Id,this.IconSource[0],this.IconSource[1],this.IconSource[2]);
			else
				SetImage(this.Data.Obj.First.Obj.image.Id,this.IconSource[0]);
			this.Data.Obj.First.newElement("title");
			GtE(this.Data.Obj.First.Obj.image.Id).style.width = "10vh";
			GtE(this.Data.Obj.First.Obj.image.Id).style.height = "10vh";
			GtE(this.Data.Obj.First.Obj.image.Id).style.top = "6.34vh";
			GtE(this.Data.Obj.First.Obj.image.Id).style.left = "3.17vh";
			GtE(this.Data.Obj.First.Obj.image.Id).style.position = "absolute";
			GtE(this.Data.Obj.First.Obj.title.Id).style.left = "16.34vh";
			GtE(this.Data.Obj.First.Obj.title.Id).style.width = "calc(100% - 20vh)";
		}
		else{
			GtE(this.Data.Obj.First.Obj.title.Id).style.left = "3.17vh";
			GtE(this.Data.Obj.First.Obj.title.Id).style.width = "calc(100% - 6.34vh)";
		}
		GtE(this.Data.Obj.First.Obj.title.Id).style.height = "18vh";
		GtE(this.Data.Obj.First.Obj.title.Id).style.top = "2.34vh";
		GtE(this.Data.Obj.First.Obj.title.Id).style.position = "absolute";
		GtE(this.Data.Obj.First.Obj.title.Id).style.fontSize = "2.75vh";
		GtE(this.Data.Obj.First.Obj.title.Id).style.display = "flex";
		GtE(this.Data.Obj.First.Obj.title.Id).style.alignItems = "center";
		GtE(this.Data.Obj.First.Obj.title.Id).style.justifyContent = "center";
		GtE(this.Data.Obj.First.Obj.title.Id).style.overflowY = "auto";
		GtE(this.Data.Obj.First.Obj.title.Id).style.overflowX = "hidden";
		GtE(this.Data.Obj.First.Obj.title.Id).style.wordBreak = "break-all";
		this.setTitle(title);
		if (UseNoObjClass)
			eval("this."+name+" = this.Windows."+name+";");
		eval("this.Obj."+name+" = this.Windows."+name+";");
		this.setTitleData(data);
	}
	setTitleData(d){
		this.Data.Obj.First.Obj.title.Edit.writeIn(d);
	}
}

class SysWinDesktopObject extends Element{
	constructor(){
		super(SysIn.Desktop,SysIn,true);
		//this.Edit.cssClass("asdf");
	}
}

//tvorba ikon na ploše

var newDeskIcon = undefined;

//funkce, ktera bude spustena po nacteni kernel a spusteni systemu
function LoadGFRAMElib(){
//	newDeskIcon = SysIn.newIconFromIconData;
}

//creating new apps in Mirae
class ProgInstance extends SysWin{
    //uid - unique identifier of your application. Name - name of your application (image name)
    //reg - register application in the system
    constructor(uid, name, wicon, reg){
        super(name.trim(), wicon.trim());
        this.Status = 0;
        this.UID = uid.trim().toUpperCase();
        this.UIDi = uid.trim();
        this.Reg = reg ? 2 : 3;
        //this.reg -- register application only -- 0
        //this.reg -- create desktop button -- 1
        //create a button and register application - 2
        //create new instance of application without button and registration (app is already registered)) -- 3
        if (SHAppUID.indexOf(this.UID) == -1 && this.Reg == 3)
            this.Reg = 0;
        if (SHAppUID.indexOf(this.UID) > -1 && this.Reg == 2)
            this.Reg = 1;
        this.ShName = this.Name.toUpperCase();
        this.IconTitle = this.Name;
        this.IconTreeIndex = 1;
        this.IconSrc = 2;
        if (wicon.trim() != ""){
            wicon = wicon.trim().split("$");
            if (wicon.length > 1){
                this.IconTreeIndex = wicon[0].trim();
                this.IconSrc = wicon[1].trim();
            }
            else{
                this.IconTreeIndex = -1;
                this.IconSrc = wicon[0].trim();
            }
        }
        if (SHAppName.indexOf(this.ShName) > 1 && this.Reg != 3)
            this.Status = 8;
        if (this.Status == 8){
            this.Message = new DesktopPopup("DesktopError1", Translate("Application load error")+" ["+this.Name+"]", "1$3$false", true, Translate("Application")+" "+this.Name+" (UID: "+this.UID+") "+Translate("cannot be run, as another instance of application exists."));
            this.destroy();
        }
        else{
            if (this.Reg == 0 || this.Reg == 1 || this.Reg == 2){
                if (this.Reg == 1 || this.Reg == 2){
                    if (_AllowedModes != 3){
                        if (this.IconTreeIndex > -1)
                            SysIn.newIconFromIconData(this.UID,this.IconTitle,this.IconTreeIndex,this.IconSrc,false,this.UIDi+"(false);");
                        else
                            SysIn.newIconFromSrc(this.UID,this.IconTitle,this.IconSrc,this.UIDi+"(false);");
                    }
                }
                if (this.Reg != 1){
                    SHAppUID.push(this.UID);
                    SHAppName.push(this.ShName);
                }
            }
            this.setTitle(this.Name);
        }
    }
    changeIconFromIconData(IconTreeIdx, IconTreeSrc){
        SysIn.removeIcon(this.UID);
        this.IconTreeIndex = IconTreeIdx;
        this.IconSrc = IconTreeSrc;
        SysIn.newIconFromIconData(this.UID,this.IconTitle,this.IconTreeIndex,this.IconSrc,false,this.UIDi+"(false);");
    }
    changeIconFromSrc(IconImageSrc){
        SysIn.removeIcon(this.UID);
        this.IconTreeIndex = -1;
        this.IconSrc = IconImageSrc;
        SysIn.newIconFromSrc(this.UID,this.IconTitle,this.IconSrc,this.UIDi+"(false);");
    }
    changeIconTitle(Title){
        this.IconTitle = Title;
        SysIn.setIconTitle(this.UID, this.IconTitle);
    }
    removeIcon(){
        SysIn.removeIcon(this.UID);
    }
    hideTaskbar(){
        SysIn.Tray.HideTray();
    }
    showTaskbar(){
        SysIn.Tray.ShowTray();
    }
}

function WinGet(WindowId){
    return ElWin(WindowId, "get")[0][0];
}