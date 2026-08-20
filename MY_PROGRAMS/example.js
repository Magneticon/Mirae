//example fullscreen application, loading external website

function example100(reg){
    var win = new ProgInstance("example100", "exampleapp", "", reg);
    
//uncoment to have no window title & status bars
//    win.setDataAreaOnly();
    win.setTitle("Example");
    win.changeIconTitle("Example application");
    
    win.Data.newIframe("Canvas","MY_PROGRAMS/1.HTM", "");
    
    win.Data.Obj.Canvas.Edit.setSize("0","0","100%","100%");
    GtEs(win.Data.Obj.Canvas.Id).borderStyle = "none";
    GtEs(win.Data.Obj.Canvas.Id).backgroundColor = "#000000"; //set to background color of your iframe content, as otherwise there will be brief blink of white color before iframe element is loaded
    
    //we want to automatically start the application if we are in kiosk mode, otherwise we let user to firstly open it by himself
    if (reg && _AllowedModes != 3)
        win.closeWindow();
    else{
//uncomment bellow if you want user to loose access to the system taskbar...
//        win.hideTaskbar();
        win.openWindow();
        win.maximizeWindow();
    }
}

WinLDR(["example100(true);"], false);//it will register application & create button -- async version
//example100(true);//it will register application & create button -- synchronous version