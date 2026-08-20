//example hello world program

function helloworld100(reg){
    var win = new ProgInstance("helloworld100", "helloworld", "MY_PROGRAMS/1.ico", reg);
//    var win = new ProgInstance("helloworld", "helloworld", "1$1$false", reg);
    
 //   win.setDataAreaOnly();
//	win.setTitleBar(true, false);
	win.setStatusBar(false, false);
    win.setTitle("Hello world!");
    win.changeIconTitle("HelloWorld Application");
    
    win.Data.newElement("Canvas");
    win.Data.Obj.Canvas.Edit.writeIn("Hello world!");
    win.Data.Obj.Canvas.Edit.setSize("n","n","100%","100%");
    GtEs(win.Data.Obj.Canvas.Id).alignItems = "center";
    GtEs(win.Data.Obj.Canvas.Id).justifyContent = "center";
    GtEs(win.Data.Obj.Canvas.Id).display = "flex";
    GtEs(win.Data.Obj.Canvas.Id).fontSize = "40px";
    GtEs(win.Data.Obj.Canvas.Id).backgroundColor = "#AA00AA";
    
    if (reg)
        win.closeWindow();
    else
        win.openWindow();
}

WinLDR(["helloworld100(true);"], false);//it will register application & create button -- async version