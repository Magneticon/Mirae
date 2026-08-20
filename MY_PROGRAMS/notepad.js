//example hello world program

function notepad100(reg){
    var win = new ProgInstance("notepad100", "notepad", "1$53$false", reg);
//    var win = new ProgInstance("helloworld", "helloworld", "1$1$false", reg);
    
 //   win.setDataAreaOnly();
//	win.setTitleBar(true, false);
	win.setStatusBar(false, false);
    win.setTitle("Notepad");
    win.changeIconTitle("Notepad");
    
    win.Data.newTextarea("Canvas","","","","");
    win.Data.Obj.Canvas.Edit.setSize("n","n","100%","100%");
    GtEs(win.Data.Obj.Canvas.Id).alignItems = "center";
    GtEs(win.Data.Obj.Canvas.Id).justifyContent = "center";
    GtEs(win.Data.Obj.Canvas.Id).display = "flex";
    GtEs(win.Data.Obj.Canvas.Id).fontSize = "2vh";
    GtEs(win.Data.Obj.Canvas.Id).borderStyle = "none";
    GtEs(win.Data.Obj.Canvas.Id).backgroundColor = "#DDDDDD";
    
    if (reg)
        win.closeWindow();
    else{
        win.openWindow();
        win.Data.Obj.Canvas.Edit.setFocus();
    }
}

WinLDR(["notepad100(true);"], false);//it will register application & create button -- async version