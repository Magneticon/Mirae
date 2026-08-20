var MOVver = 4.78;

var DisAllowRS = [];

var activeDragElement = null, activeDragElementPosX = 0, activeDragElementPosY = 0, activeDragElementCountPosX = 0, activeDragElementCountPosY = 0, LastDragElementPosX = 0, LastDragElementPosY = 0;
var mX = 0; mY = 0;
function StartDrag(id) {
	LastDragElementPosX = 0;
	LastDragElementPosY = 0;
	activeDragElement = document.getElementById(id);
	activeDragElementCountPosX = activeDragElementPosX - activeDragElement.offsetLeft;
	activeDragElementCountPosY = activeDragElementPosY - activeDragElement.offsetTop;
}
		
function MoveDrag(e) {
	activeDragElementPosX = document.all ? window.event.clientX : e.pageX;
	activeDragElementPosY = document.all ? window.event.clientY : e.pageY;
	if (activeDragElement !== null) {
		activeDragElement.style.left = (activeDragElementPosX - activeDragElementCountPosX) + 'px';
		activeDragElement.style.top = (activeDragElementPosY - activeDragElementCountPosY) + 'px';
		LastDragElementPosX = activeDragElementPosX - activeDragElementCountPosX;
		LastDragElementPosY = activeDragElementPosY - activeDragElementCountPosY;
	}
}

function StopDrag() {
	activeDragElement = null;
}
/*
//old ver
var activeDragElement = null, activeDragElementPosX = 0, activeDragElementPosY = 0, activeDragElementCountPosX = 0, activeDragElementCountPosY = 0, LastDragElementPosX = 0, LastDragElementPosY = 0;
var mX = 0; mY = 0;
function StartDrag(id) {
	LastDragElementPosX = 0;
	LastDragElementPosY = 0;
	activeDragElement = document.getElementById(id);
	activeDragElementCountPosX = activeDragElementPosX - activeDragElement.offsetLeft;
	activeDragElementCountPosY = activeDragElementPosY - activeDragElement.offsetTop;
}
		
function MoveDrag(e) {
	activeDragElementPosX = document.all ? window.event.clientX : e.pageX;
	activeDragElementPosY = document.all ? window.event.clientY : e.pageY;
	if (activeDragElement !== null) {
		activeDragElement.style.left = (activeDragElementPosX - activeDragElementCountPosX) + 'px';
		activeDragElement.style.top = (activeDragElementPosY - activeDragElementCountPosY) + 'px';
		LastDragElementPosX = activeDragElementPosX - activeDragElementCountPosX;
		LastDragElementPosY = activeDragElementPosY - activeDragElementCountPosY;
	}
}

function StopDrag() {
	activeDragElement = null;
}
*/
function MouseClientDetect(e){
	mX = e.clientX;
	mY = e.clientY;
}

function GetMouseClientCords(){
	return [mX,mY];
}

//DGDP solution
var DGDPTI = "";
function DGDPST(idCon){
	try{
        if (DisAllowRS.indexOf(idCon) > -1)
            return false;
		var c = GetMouseClientCords();
		var LSize = c[0]-parseInt(GtE(idCon).offsetLeft, 10);
		var TSize = c[1]-parseInt(GtE(idCon).offsetTop, 10);
		GtE(idCon).style.margin = "0px";
		GtE(idCon).style.position = "absolute";
		DGDPTI = window.setInterval(function(){
			var cn = GetMouseClientCords();
			GtE(idCon).style.left = (cn[0]-LSize)+"px";
			GtE(idCon).style.top = (cn[1]-TSize)+"px";
		},14);
	}catch(erd){}
}

function DGDPEN(t, id){
	window.clearInterval(DGDPTI);
    if (DisAllowRS.indexOf(id) > -1)
        return false;
	if (t)
		DGDPST(id);
}

//JQ DG solution

var DGA, DGP;
function DGS(e){//start
	DGA = $(this).closest('.WindowMain');
	window.location.href = '#'+DGA.prop('id');
	var DGCP = DGA.offset();
	DGP = {
		'left':e.pageX-DGCP.left,
		'top':e.pageY-DGCP.top
	};
	$('body').on('mousemove',DGM);
	DGA.on('mouseup',DGE);
	e.preventDefault();
}
function DGE(e){
	$('body').off('mousemove',DGM);
	DGA.off('mouseup',DGE);
}
function DGM(e){
	DGA.css('transform','translateX('+(e.pageX-DGP.left)+'px) translateY('+(e.pageY-DGP.top)+'px)');
	e.preventDefault ();
}
function DGZ(e){//nastaví zIndex pro okno
	window.location.href = '#'+$(this).prop('id');
}

//RESIZE ELEMENTS - RS method
var rEl, SRSTX, SRSTY, SRSTW, SRSTH, SRSTID, computeSRdataIn, errorColor = "#FF0000", hoverColor = "#339900", oldColor, errorTimeout;
var WindowBuffer = {};

function SR(id,srClass,computeSRdataType){
	try{
        if (DisAllowRS.indexOf(id) > -1)
            return false;
		if(rEl.id)
			GtE(rEl.id).parentNode.removeChild(GtE(rEl.id));
	}
	catch(erd){}
	try{
		if (eval("WindowBuffer."+id+".el.length") == 0)
			throw undefined;
	}catch(erd){
		eval("WindowBuffer."+id+" = {};");
		eval("WindowBuffer."+id+".el = [];");
		eval("WindowBuffer."+id+".stat = true;");
	}
	SRSTID = GtE(id);
	computeSRdataIn = computeSRdataType;
	rEl = document.createElement('div');
	rEl.className = srClass;
	rEl.id = id+srClass+"rEl";
	oldColor = rEl.style.backgroundColor;
	SRSTID.appendChild(rEl);
	rEl.addEventListener('mouseenter',function(e){rEl.style.backgroundColor = hoverColor;},false);
	rEl.addEventListener('mouseleave',function(e){rEl.style.backgroundColor = oldColor;},false);
	rEl.addEventListener('mousedown', SRST, false);
	eval("WindowBuffer."+id+".el.push('"+rEl.id+"');");
	if (eval("WindowBuffer."+id+".stat") == true){
		for (var i = 0; i < eval("WindowBuffer."+id+".el.length"); i++)
			GtE(eval("WindowBuffer."+id+".el")[i]).style.display = "block";
	}
	else{
		for (var i = 0; i < eval("WindowBuffer."+id+".el.length"); i++)
			GtE(eval("WindowBuffer."+id+".el")[i]).style.display = "none";		
	}
	return rEl.id;
}

function SRST(e){
	window.clearTimeout(errorTimeout);
	rEl.style.backgroundColor = oldColor;
   SRSTX = e.clientX;
   SRSTY = e.clientY;
   SRSTW = parseInt(document.defaultView.getComputedStyle(SRSTID).width, 10);
   SRSTH = parseInt(document.defaultView.getComputedStyle(SRSTID).height, 10);
   document.documentElement.addEventListener('mousemove', SRM, false);
   document.documentElement.addEventListener('mouseup', SREN, false);
}

function SRM(e){
	var w = (parseInt(SRSTW,10)+e.clientX-SRSTX);
	if (ComputeSRdata(w,true))
		SRSTID.style.width = w+'px';
	else{
		rEl.style.backgroundColor = errorColor;
		errorTimeout = window.setTimeout(function(){rEl.style.backgroundColor = oldColor;},1500);
	}
	var h = (parseInt(SRSTH,10)+e.clientY-SRSTY);
	if (ComputeSRdata(h,false))	
		SRSTID.style.height = h+'px';
	else{
		rEl.style.backgroundColor = errorColor;
		errorTimeout = window.setTimeout(function(){rEl.style.backgroundColor = oldColor;},1500);
	}	
}

function SREN(e){
	document.documentElement.removeEventListener('mousemove', SRM, false);
    document.documentElement.removeEventListener('mouseup', SREN, false);
	try{
		ElWin(SRSTID,"move");
	}catch(erd){}
}

function ComputeSRdata(data,type){
	if (type){
		var n = SRSTID.getElementsByClassName("WindowTitleBar");
		var WPX = 15;
		if (n.length > 0)
			WPX = (parseInt(SetToInt(n[0].textContent.toString().trim().length), 10)*2)+4;
		switch(computeSRdataIn){
			case "window":
			//	if (data < 535)
				if (data < SetToInt(WPercentToWPixel(WPX, "height")))
					return false;
			break;
		}
	}
	else{
		switch(computeSRdataIn){
			case "window":
				//if (data < 305)
				if (data < SetToInt(WPercentToWPixel(12,"width")))
					return false;
			break;
		}		
	}
	return true;
}