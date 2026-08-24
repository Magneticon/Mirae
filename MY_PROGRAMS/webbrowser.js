//example webbrowser program

function webbrowser100(reg){
    var win = new ProgInstance("webbrowser100", "webbrowser", "1$88$false", reg);

    win.setTitle("Web Browser");
    win.changeIconTitle("Web Browser");
    
    win.Data.newElement("Canvas");
    win.Data.Obj.Canvas.Edit.setSize("n","n","100%","100%");
    win.Data.Obj.Canvas.newElement("TopBar");
    win.Data.Obj.Canvas.Obj.TopBar.Edit.setSize("n","n","100%","3vh");
    win.Data.Obj.Canvas.Obj.TopBar.Edit.setFlexCenter();
    GtEs(win.Data.Obj.Canvas.Obj.TopBar.Id).borderBottom = "0.2vh solid #000000";
    
    win.Data.Obj.Canvas.Obj.TopBar.newInput("Url", "text", "", "");
    win.Data.Obj.Canvas.Obj.TopBar.Obj.Url.Edit.setSize("n", "n", "calc(100% - 15vh)", "100%");
    win.Data.Obj.Canvas.Obj.TopBar.Obj.Url.setPlaceholder("Input your address here ...");
    GtEs(win.Data.Obj.Canvas.Obj.TopBar.Obj.Url.Id).fontSize = "2vh";
    
    win.Data.Obj.Canvas.Obj.TopBar.newButton("Exe");
    win.Data.Obj.Canvas.Obj.TopBar.Obj.Exe.Edit.setSize("n", "n", "5vh", "100%");
    win.Data.Obj.Canvas.Obj.TopBar.Obj.Exe.Edit.writeIn("GO");
    GtEs(win.Data.Obj.Canvas.Obj.TopBar.Obj.Exe.Id).fontSize = "2vh";
    win.Data.Obj.Canvas.Obj.TopBar.Obj.Exe.setCode("try{                                                     \
        WinGet('"+win.Id+"').Data.Obj.Canvas.Obj.Main.setSrc((WinGet('"+win.Id+"').Data.Obj.Canvas.Obj.TopBar.Obj.Url.Edit.getValue()).trim());                                     \
        }catch(erd){}                                                                                        \
        try{                                                                                                 \
            WinGet('"+win.Id+"').StatusBar.Obj.Canvas.Edit.writeIn('Loading:&nbsp;'+(WinGet('"+win.Id+"').Data.Obj.Canvas.Obj.TopBar.Obj.Url.Edit.getValue()).trim()+'&nbsp;...');                     \
        }catch(erd){};");
    
    win.Data.Obj.Canvas.Obj.TopBar.newButton("Reload");
    win.Data.Obj.Canvas.Obj.TopBar.Obj.Reload.Edit.setSize("n", "n", "9vh", "100%");
    win.Data.Obj.Canvas.Obj.TopBar.Obj.Reload.Edit.writeIn("Reload");
    GtEs(win.Data.Obj.Canvas.Obj.TopBar.Obj.Reload.Id).fontSize = "2vh";
    GtEs(win.Data.Obj.Canvas.Obj.TopBar.Obj.Reload.Id).marginLeft = "1vh";
    win.Data.Obj.Canvas.Obj.TopBar.Obj.Reload.setCode("WinGet('"+win.Id+"').Data.Obj.Canvas.Obj.Main.reload();");
    
    win.Data.Obj.Canvas.newIframe("Main","about:blank", "");
    win.Data.Obj.Canvas.Obj.Main.Edit.setSize("n","3.2vh","100%","calc(100% - 3.2vh)");
    GtEs(win.Data.Obj.Canvas.Obj.Main.Id).borderStyle = "none"; 
    
    win.StatusBar.newElement("Canvas", "", "", "", "");
    win.StatusBar.Obj.Canvas.Edit.setSize("n", "n", "100%", "100%");
    win.StatusBar.Obj.Canvas.Edit.writeIn("Type an URL to start ...");
    
    win.newAlert("Info", "About", "1$90$false", true, "<b>Created by:</b>&nbsp;Magneticon");
    win.Obj.Info.Edit.hide(true);
   
    win.newMenu("File");
    win.Menus.File.newItem("New");
    win.Menus.File.Obj.New.setCode("webbrowser100(false);");
    win.Menus.File.newItem("Reload");
    win.Menus.File.Obj.Reload.setCode("WinGet('"+win.Id+"').Data.Obj.Canvas.Obj.Main.reload();");
    win.Menus.File.addSeparator("Sep1");
    win.Menus.File.newItem("Exit");
    win.Menus.File.Obj.Exit.setCode("StartEventNonObj('"+win.CloseTitle.Id+"','click');");
    
    win.newMenu("View");
    win.Menus.View.newItem("HideStatusBar");
    win.Menus.View.Obj.HideStatusBar.Edit.writeIn("Hide Status Bar");;
    win.Menus.View.Obj.HideStatusBar.setCode("if (WinGet('"+win.Id+"').Menus.View.Obj.HideStatusBar.getTick()){            \
            WinGet('"+win.Id+"').setStatusBar(true, false);                                                                \
            WinGet('"+win.Id+"').Menus.View.Obj.HideStatusBar.setTicked(false);                                            \
        }                                                                                                                  \
        else {                                                                                                             \
            WinGet('"+win.Id+"').setStatusBar(false, false);                                                               \
            WinGet('"+win.Id+"').Menus.View.Obj.HideStatusBar.setTicked(true);                                             \
        }");
    win.Menus.View.newItem("HideAddressBar");
    win.Menus.View.Obj.HideAddressBar.Edit.writeIn("Hide Address Bar");
    win.Menus.View.Obj.HideAddressBar.setCode("if (WinGet('"+win.Id+"').Menus.View.Obj.HideAddressBar.getTick()){          \
            WinGet('"+win.Id+"').Data.Obj.Canvas.Obj.TopBar.Edit.showFlex(true);                                           \
            WinGet('"+win.Id+"').Data.Obj.Canvas.Obj.Main.Edit.setSize('n','3.2vh','100%','calc(100% - 3.2vh)');           \
            WinGet('"+win.Id+"').Menus.View.Obj.HideAddressBar.setTicked(false);                                           \
        }                                                                                                                  \
        else {                                                                                                             \
            WinGet('"+win.Id+"').Data.Obj.Canvas.Obj.TopBar.Edit.hide(true);                                               \
            WinGet('"+win.Id+"').Data.Obj.Canvas.Obj.Main.Edit.setSize('n','0vh','100%','100%');                           \
            WinGet('"+win.Id+"').Menus.View.Obj.HideAddressBar.setTicked(true);                                            \
        }");
    
    win.newMenu("Help");
    win.Menus.Help.newItem("About");
    win.Menus.Help.Obj.About.Edit.setCodeAdd("WinGet('"+win.Id+"').Obj.Info.Edit.show(true);");
    
    GtE(win.Data.Obj.Canvas.Obj.Main.Id).onload = function(){
        WinGet(win.Id).StatusBar.Obj.Canvas.Edit.writeIn("Loaded:&nbsp;"+WinGet(win.Id).Data.Obj.Canvas.Obj.Main.getSrc());
        WinGet(win.Id).Data.Obj.Canvas.Obj.TopBar.Obj.Url.setValue("");
    };
    GtE(win.Data.Obj.Canvas.Obj.TopBar.Obj.Url.Id).onkeydown = function(e){
        if (e.keyCode == 13 || e.charCode == 13)
            StartEventNonObj(win.Data.Obj.Canvas.Obj.TopBar.Obj.Exe.Id, "click");
    };
    
    if (reg)
        win.registerWindow();
    else{
        win.openWindow();
        win.Data.Obj.Canvas.Edit.setFocus();
    }
}

WinLDR(["webbrowser100(true);"], false);//it will register application & create button -- async version