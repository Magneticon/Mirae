var STORver = 7.14;
var STOR = true;

var setURL_rg = true;
var getURL_rg = true;
var GetMaxURLSize_rg = true;
var GetMaxURLSize_MAX_rg = true;
var GetMaxURLSize_DNS_rg = true;
var GetMaxURLSize_MEDIUM_rg = true;
var GetAvailURLSize_rg = true;
var GetAvailURLSize_DNS_rg = true;
var GetAvailURLSize_MAX_rg = true;
var GetAvailURLSize_MEDIUM_rg = true;
var GetURLSize_rg = true;
var GetMaxCookieSize_rg = true;
var GetAvailCookieSize_rg = true;
var GetAvailStorageSize_rg = true;
var GetCookieSize_rg = true;
var GetStorageSize_rg = true;
var GetMaxStorageSize_rg = true;
var setStorage_rg = true;
var setCookie_rg = true;
var getStorage_rg = true;
var getCookie_rg = true;
var delStorage_rg = true;
var delCookie_rg = true;
var setSubStorage_rg = true;
var setSubCookie_rg = true;
var getSubCookie_rg = true;
var getSubStorage_rg = true;
var delSubCookie_rg = true;
var delSubStorage_rg = true;
var checkStorName_rg = true;
var SwitchReg_rg = true;

var sysRegSet_Warn = false;
var sysRegSet_Error = false;
var sysRegSet_Log = false;
var sysRegSet_Version = 8;

//nastaví zobrazování error / warning / log zpráv této knihovny
function sysrgMessages(warnBool,errorBool,logBool){
	sysRegSet_Warn = true;
	sysRegSet_Error = true;
	sysRegSet_Log = true;
	if (!warnBool)
		sysRegSet_Warn = false;
	if (!errorBool)
		sysRegSet_Error = false;
	if (!logBool)
		sysRegSet_Log = false;
	return "done";
}

function WriteConvertBytes(Bytes){
	var Radix = 0;
	while (Bytes > 1024) {
		Bytes /= 1024;
		Radix++;
	}
	return [Math.round(Bytes*100)/100,['B', 'KB', 'MB', 'GB', 'TB'][Radix]];
}


function RecountCharToBytes(text){
	var length = text.length, nonAscii = length - text.replace(/[\u0100-\uFFFF]/g, '').length;
	return length + nonAscii;
}

function RecountBytesToChar(text){
	return text;
}

function setURL(data,data_value,control,refresh,type){
	setURL_rg = true;
	var hlavni_lokace = window.location.href.toString().split('?')[0];
	if (!data){
		setURL_rg = false;
		if (sysRegSet_Error)
			console.error("//-sysrgv"+SysRegSet_Version+"://{ -| An error has occurred in: < setURL > (status of this func in status variable (funcName_rg))|-}//-");
		return undefined;
	}
	if (!data_value){
		setURL_rg = false;
		if (sysRegSet_Error)
			console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < setURL > (status of this func in status variable (funcName_rg))|-}//-");
		return undefined;
	}
	if (!control){
		if (sysRegSet_Warn)
			console.warn("//-sysrgv"+sysRegSet_Version+"://{ -| Warning in < setURL > [control -> setURL] |-}//-");
		control = "setURL";
	}
	if (!refresh){
		if (sysRegSet_Warn)
			console.warn("//-sysrgv"+sysRegSet_Version+"://{ -| Warning in < setURL [refresh -> yes] > |-}//-");
		refresh = "yes";
	}
	if (!type){
		type = "normal";
		if (sysRegSet_Warn)
			console.warn("//-sysrgv"+sysRegSet_Version+"://{ -| Warning in < setURL > [type-> normal] |-}//-");
	}
	var pocatecni_adresa = this.location.href.toString().split("#");
	var url = pocatecni_adresa[0].toString().split("?");
	var nova_adresa = hlavni_lokace;
	var adresa_exists = "no";
	var data_save = "none";
	if (url[1]){
		nova_adresa += "?";
		var promene = url[1].toString().split("&");
		for (var i = 0;i < promene.length;i++){
			var promene_data = promene[i].toString().split("=");
			if (promene_data[0] != data && promene_data.length == 2)
				nova_adresa += "&"+promene[i];
			else if (promene_data[0] == data){
				adresa_exists = "yes";
				data_save = promene_data[1];
			}
		}
		if (adresa_exists == "no"){
			if (control == "setURL")
				nova_adresa += "&"+data+"=yes";
			else if (control == "set_data")
				nova_adresa += "&"+data+"="+data_value;
		}
		else{
			if (type == "auto"){
				if (control == "setURL"){
					if (data_save == "yes")
						nova_adresa += "&"+data+"=no";
					else								
						nova_adresa += "&"+data+"=yes";
				}
				else
					nova_adresa += "&"+data+"="+data_value;	
			}
		}
	}
	else{
		if (control == "setURL")
			nova_adresa += "?"+data+"=yes";
		else
			nova_adresa += "?"+data+"="+data_value;
	}
	if (refresh == "yes")
		this.location.href = nova_adresa;
	else
		window.history.pushState(this.location.href, '', nova_adresa);
}

function getURL(data){
		getURL_rg = true;
	if (!data){
		getURL_rg = false;
		if (sysRegSet_Error)
			console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < getURL > (status of this func in status variable (funcName_rg))|-}//-");
		return undefined;
	}
	var pocatecni_adresa = this.location.href.toString().split("#");
	var url = pocatecni_adresa[0].toString().split("?");
	if (url[1]){
		var promene = url[1].toString().split("&");
		for (var i = 0;i < promene.length;i++){
			var promene_data = promene[i].toString().split("=");
			if (promene_data[0] == data){
				return GetTypeData(promene_data[1]);
			}
		}
	}
	return undefined;
}

function GetMaxURLSize_MEDIUM(){
	GetMaxURLSize_MEDIUM_rg = true;
	return 15612;
}

function GetAvailURLSize_MEDIUM(){
	GetAvailURLSize_MEDIUM_rg = true;
//	var result = 15612-escape(encodeURIComponent(JSON.stringify(this.location.href))).length;
	var result = 15612-RecountCharToBytes(this.location.href);
	if (result < 0)
		result = 0;
	return result;
}

function GetMaxURLSize_MAX(){
	GetMaxURLSize_MAX_rg = true;
	return 65535;
}

function GetAvailURLSize_MAX(){
	GetAvailURLSize_MAX_rg = true;
	//var result = 65535-escape(encodeURIComponent(JSON.stringify(this.location.href))).length;
	var result = 65535-RecountCharToBytes(this.location.href);
	if (result < 0)
		result = 0;
	return result;
}

function GetMaxURLSize(){
	GetMaxURLSize_rg = true;
	return 2083;
}

function GetAvailURLSize(){
	GetAvailURLSize_rg = true;
	//var result = 2083-escape(encodeURIComponent(JSON.stringify(this.location.href))).length;
	var result = 2083-RecountCharToBytes(this.location.href);
	if (result < 0)
		result = 0;
	return result;
}

function GetMaxURLSize_DNS(){
	GetMaxURLSize_DNS_rg = true;
	return 255;
}

function GetAvailURLSize_DNS(){
	GetAvailURLSize_DNS_rg = true;
	//var result = 255-escape(encodeURIComponent(JSON.stringify(this.location.href))).length;
	var result = 255-RecountCharToBytes(this.location.href);
	if (result < 0)
		result = 0;
	return result;
}

function GetURLSize(){
	GetURLSize_rg = true;
	//var result = escape(encodeURIComponent(JSON.stringify(this.location.href))).length;
	var result = RecountCharToBytes(this.location.href);
	return result;
}

function GetAvailStorageSize(){
	var result = 5242880 - RecountCharToBytes(JSON.stringify(localStorage));
	if (result < 0)
		result = 0;
	return result;
}

function GetAvailCookieSize(){
	GetAvailCookieSize_rg = true;
//	var result = 4093 - escape(encodeURIComponent(JSON.stringify(document.cookie))).length;
	var result = 4093 - RecountCharToBytes(JSON.stringify(document.cookie));
	if (result < 0)
		result = 0;
	return result;
}

function GetStorageSize(){
	GetStorageSize_rg = true;
	//var result = escape(encodeURIComponent(JSON.stringify(localStorage))).length;
	var result = RecountCharToBytes(JSON.stringify(localStorage));
	return result;
}

function GetCookieSize(){
	GetCookieSize_rg = true;
	//var result = escape(encodeURIComponent(JSON.stringify(document.cookie))).length;
	var result = RecountCharToBytes(JSON.stringify(document.cookie));
	return result;
}

function GetMaxStorageSize(){
	GetMaxStorageSize_rg = true;
	return 5242880;
}

function GetMaxCookieSize(){
	GetMaxCookieSize_rg = true;
	return 4093;
}

var Reg_no_checkStorName = "no";
function setStorage(name,value){
	setStorage_rg = true;
	if (name === undefined || name === null || name == "NaN" || name === ""){
		setStorage_rg = false;
		if (sysRegSet_Error)
			console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < setStorage > (status of this func in status variable (funcName_rg))|-}//-");
		return undefined;
	}
	if (Reg_no_checkStorName == "no"){
		if ((!checkStorName(name)) || (!checkStorName(value))){
			setStorage_rg = false;
			if (sysRegSet_Error)
				console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < setStorage > (status of this func in status variable (funcName_rg))|-}//-");
			return undefined;
		}
	}
	else
		Reg_no_checkStorName = "no";
	try{
		localStorage.setItem(name, value);
	}
	catch (e) {    
        if (e == QUOTA_EXCEEDED_ERR || e.code === 22) {
			if (sysRegSet_Log)
				console.log('//-!sysrgv"+sysRegSet_Version+":_//QUOTA of local storage is exceed. No write possible.');
			setStorage_rg = false;
			if (sysRegSet_Error)
				console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < setStorage > (status of this func in status variable (funcName_rg))|-}//-");
			return undefined;
        }
    }
	return "done";
}

function delStorage(name){
	delStorage_rg = true;
	if (name === undefined || name === null || name == "NaN" || name === ""){
		delStorage_rg = false;
		if (sysRegSet_Error)
			console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < delStorage > (status of this func in status variable (funcName_rg))|-}//-");
		return undefined;
	}
	if (Reg_no_checkStorName == "no"){
		if ((!checkStorName(name))){
			delStorage_rg = false;
			if (sysRegSet_Error)
				console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < delStorage > (status of this func in status variable (funcName_rg))|-}//-");
			return undefined;
		}
	}
	else
		Reg_no_checkStorName = "no";
	localStorage.removeItem(name);
	return "done";
}

function getStorage(name){
	getStorage_rg = true;
	if (name === undefined || name === null || name == "NaN" || name === ""){
		getStorage_rg = false;
		if (sysRegSet_Error)
			console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < getStorage > (status of this func in status variable (funcName_rg))|-}//-");
		return undefined;
	}
	if (Reg_no_checkStorName == "no"){
		if ((!checkStorName(name))){
			getStorage_rg = false;
			if (sysRegSet_Error)
				console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < getStorage > (status of this func in status variable (funcName_rg))|-}//-");
			return undefined;
		}
	}
	else
		Reg_no_checkStorName = "no";
	var result = localStorage.getItem(name);
	return GetTypeData(result);
}

function delCookie(cname) {
	delCookie_rg = true;
	if (cname === undefined || cname === null || cname == "NaN" || cname === ""){
		delCookie_rg = false;
		if (sysRegSet_Error)
			console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < delCookie > (status of this func in status variable (funcName_rg))|-}//-");
		return undefined;
	}
	if (Reg_no_checkStorName == "no"){
		if ((!checkStorName(cname))){
			delCookie_rg = false;
			if (sysRegSet_Error)
				console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < delCookie > (status of this func in status variable (funcName_rg))|-}//-");
			return undefined;
		}
	}
	else
		Reg_no_checkStorName = "no";
    var d = new Date();
    d.setTime(0);
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=; " + expires;
	return "done";
}

function setCookie(cname, cvalue, exdays) {
	setCookie_rg = true;
	if (cname === undefined || cname === null || cname == "NaN" || cname === ""){
		setCookie_rg = false;
		if (sysRegSet_Error)
			console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < setCookie > (status of this func in status variable (funcName_rg))|-}//-");
		return undefined;
	}
	if (exdays === undefined || exdays === null || exdays == "NaN" || exdays === "" || exdays == "none" || exdays == "no" || exdays == "n"){
		if (sysRegSet_Warn)
		console.warn("//-sysrgv"+sysRegSet_Version+"://{ -| Warning in < setCookie > [exdays -> 365] |-}//-");
		exdays = 365;
	}
	if (Reg_no_checkStorName == "no"){
		if ((!checkStorName(cname)) || (!checkStorName(cvalue)) || (!checkStorName(exdays))){
			setCookie_rg = false;
			if (sysRegSet_Error)
				console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < setCookie > (status of this func in status variable (funcName_rg))|-}//-");
			return undefined;
		}
	}
	else
		Reg_no_checkStorName = "no";
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
	return "done";
}

function getCookie(cname) {
	getCookie_rg = true;
	if (cname === undefined || cname === null || cname == "NaN" || cname === ""){
		getCookie_rg = false;
		if (sysRegSet_Error)
			console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < getCookie > (status of this func in status variable (funcName_rg))|-}//-");
		return undefined;	
	}
	if (Reg_no_checkStorName == "no"){
		if ((!checkStorName(cname))){
					getCookie_rg = false;
					if (sysRegSet_Error)
						console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < getCookie > (status of this func in status variable (funcName_rg))|-}//-");
					return undefined;
		}
	}
	else
		Reg_no_checkStorName = "no";
    var name = cname + "=";
    var ca = document.cookie.toString().split(';');
    for(var i = 0; i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
	getCookie_rg = false;
	if (sysRegSet_Error)
		console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < getCookie > [err_mess: no_coo] (status of this func in status variable (funcName_rg))|-}//-");
	return undefined;
}

function setSubStorage(main_name,low_name,value){
	setSubStorage_rg = true;
	if (main_name === undefined || main_name === null || main_name == "NaN" || main_name === ""){
		setSubStorage_rg = false;
		if (sysRegSet_Error)
			console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < setSubStorage > (status of this func in status variable (funcName_rg))|-}//-");
		return undefined;		
	}
	if (Reg_no_checkStorName == "no"){
		if ((!checkStorName(main_name)) || (!checkStorName(low_name)) || (!checkStorName(value))){
			setSubStorage_rg = false;
			if (sysRegSet_Error)
				console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < setSubStorage > (status of this func in status variable (funcName_rg))|-}//-");
			return undefined;			
		}
	}
	else
		Reg_no_checkStorName = "no";
	Reg_no_checkStorName = "yes";
	var old_storage = getStorage(main_name);
	var new_items_pairs = "";
	if (old_storage){
		var old_items_pairs = old_storage.toString().split("/-$-/");
		for (var i = 0; i < old_items_pairs.length;i++){
			var old_pair = old_items_pairs[i].toString().split("?-$-?");
			if (old_pair[0] != low_name && old_pair.length == 2)
					new_items_pairs += "/-$-/"+old_pair[0]+"?-$-?"+old_pair[1];
		}
		new_items_pairs += "/-$-/"+low_name+"?-$-?"+value;
	} 	
	else
		new_items_pairs = "/-$-/"+low_name+"?-$-?"+value;
	Reg_no_checkStorName = "yes";
	setStorage(main_name, new_items_pairs);
	return "done";
}

function delSubStorage(main_name,low_name){
	delSubStorage_rg = true;
	if (main_name === undefined || main_name === null || main_name == "NaN" || main_name === ""){
		delSubStorage_rg = false;
		if (sysRegSet_Error)
			console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < delSubStorage > (status of this func in status variable (funcName_rg))|-}//-");
		return undefined;			
	}
	if (Reg_no_checkStorName == "no"){
		if ((!checkStorName(main_name)) || (!checkStorName(low_name))){
			delSubStorage_rg = false;
			if (sysRegSet_Error)
				console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < delSubStorage > (status of this func in status variable (funcName_rg))|-}//-");
			return undefined;			
		}
	}
	else
		Reg_no_checkStorName = "no";
	Reg_no_checkStorName = "yes";
	var old_storage = getStorage(main_name);
	var new_items_pairs = "";
	if (old_storage){
		Reg_no_checkStorName = "yes";
		delStorage(main_name);
		var old_items_pairs = old_storage.toString().split("/-$-/");
		if (old_items_pairs.length <= 1)
			return "done";
		for (var i = 0; i < old_items_pairs.length;i++){
			var old_pair = old_items_pairs[i].toString().split("?-$-?");
			if (old_pair[0] != low_name && old_pair.length == 2)
				new_items_pairs += "/-$-/"+old_pair[0]+"?-$-?"+old_pair[1];
		}
		Reg_no_checkStorName = "yes";
		setStorage(main_name,new_items_pairs);
	} 	
	else{
		delSubStorage_rg = false;
		if (sysRegSet_Error)
			console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < delSubStorage > [err_mess: no_stor] (status of this func in status variable (funcName_rg))|-}//-");
		return undefined;
	}
	return "done";
}

function getSubStorage(main_name,low_name){
	getSubStorage_rg = true;
	if (main_name === undefined || main_name === null || main_name == "NaN" || main_name === ""){
		getSubStorage_rg = false;
		if (sysRegSet_Error)
			console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < getSubStorage > (status of this func in status variable (funcName_rg))|-}//-");
		return undefined;			
	}
	if (Reg_no_checkStorName == "no"){
		if ((!checkStorName(main_name)) || (!checkStorName(low_name))){
			getSubStorage_rg = false;
			if (sysRegSet_Error)
				console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < getSubStorage > (status of this func in status variable (funcName_rg))|-}//-");
			return undefined;			
		}
	}
	else
		Reg_no_checkStorName = "no";
	Reg_no_checkStorName = "yes";
	var old_storage = getStorage(main_name);
	if (old_storage){
		var old_items_pairs = old_storage.toString().split("/-$-/");
		for (var i = 0; i < old_items_pairs.length;i++){
			var old_pair = old_items_pairs[i].toString().split("?-$-?");
			if (old_pair[0] == low_name)
				return GetTypeData(old_pair[1]);
		}
	}
	getSubStorage_rg = false;
	if (sysRegSet_Error)
		console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < getSubStorage > [err_mess: no_stor] (status of this func in status variable (funcName_rg))|-}//-");
	return undefined;
}

function setSubCookie(main_name,low_name,value,exdays){
	getSubCookie_rg = true;
	if (main_name === undefined || main_name === null || main_name == "NaN" || main_name === ""){
		getSubCookie_rg = false;
		if (sysRegSet_Error)
			console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < getSubCookie > (status of this func in status variable (funcName_rg))|-}//-");
		return undefined;
	}
	if (exdays === undefined || exdays === null || exdays == "NaN" || exdays === "" || exdays == "none" || exdays == "no" || exdays == "n"){
		if (sysRegSet_Warn)
			console.warn("//-sysrgv"+sysRegSet_Version+"://{ -| Warning in < setSubCookie > [exdays -> 365] |-}//-");
		exdays = 365;
	}
	if (Reg_no_checkStorName == "no"){
		if ((!checkStorName(main_name)) || (!checkStorName(low_name)) || (!checkStorName(value)) || (!checkStorName(exdays))){
			getSubCookie_rg = false;
			if (sysRegSet_Error)
				console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < getSubCookie > (status of this func in status variable (funcName_rg))|-}//-");
		}
	}
	else
		Reg_no_checkStorName = "no";
	Reg_no_checkStorName = "yes";
	var old_storage = getCookie(main_name);
	var new_items_pairs = "";
	if (old_storage){
		var old_items_pairs = old_storage.toString().split("/-$-/");
		for (var i = 0; i < old_items_pairs.length;i++){
			var old_pair = old_items_pairs[i].toString().split("?-$-?");
			if (old_pair[0] != low_name && old_pair.length == 2)
				new_items_pairs += "/-$-/"+old_pair[0]+"?-$-?"+old_pair[1];
		}
		new_items_pairs += "/-$-/"+low_name+"?-$-?"+value;
	} 	
	else
		new_items_pairs = "/-$-/"+low_name+"?-$-?"+value;
	Reg_no_checkStorName = "yes";
	setCookie(main_name,new_items_pairs,exdays);
	return "done";
}

function delSubCookie(main_name,low_name,exdays){
	delSubCookie_rg = true;
	if (main_name === undefined || main_name === null || main_name == "NaN" || main_name === ""){
		delSubCookie_rg = false;
		if (sysRegSet_Error)
			console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < delSubCookie > (status of this func in status variable (funcName_rg))|-}//-");
		return undefined;		
	}
	if (exdays === undefined || exdays === null || exdays == "NaN" || exdays === "" || exdays == "none" || exdays == "no" || exdays == "n"){
		if (sysRegSet_Warn)
			console.warn("//-sysrgv"+sysRegSet_Version+"://{ -| Warning in < delSubCookie > [exdays -> 365] |-}//-");
		exdays = 365;
	}
	if (Reg_no_checkStorName == "no"){
		if ((!checkStorName(main_name)) || (!checkStorName(low_name)) || (!checkStorName(exdays))){
			delSubCookie_rg = false;
			if (sysRegSet_Error)
				console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < delSubCookie > (status of this func in status variable (funcName_rg))|-}//-");
			return undefined;
		}
	}
	else
		Reg_no_checkStorName = "no";
	Reg_no_checkStorName = "yes";
	var old_storage = getCookie(main_name);
	var new_items_pairs = "";
	if (old_storage){
		Reg_no_checkStorName = "yes";
		delCookie(main_name);
		var old_items_pairs = old_storage.toString().split("/-$-/");
		if (old_items_pairs.length <= 1)
			return "done";
		for (var i = 0; i < old_items_pairs.length;i++){
			var old_pair = old_items_pairs[i].toString().split("?-$-?");
			if (old_pair[0] != low_name && old_pair.length == 2)
				new_items_pairs += "/-$-/"+old_pair[0]+"?-$-?"+old_pair[1];
		}
		Reg_no_checkStorName = "yes";
		setCookie(main_name,new_items_pairs,exdays);
	} 	
	else{
		delSubCookie_rg = false;
		if (sysRegSet_Error)
			console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < delSubCookie > [err_mess: no_coo] (status of this func in status variable (funcName_rg))|-}//-");
		return undefined;
	}
	return "done";
}

function getSubCookie(main_name,low_name){
	getSubCookie_rg = true;
	if (main_name === undefined || main_name === null || main_name == "NaN" || main_name === ""){
		getSubCookie_rg = false;
		if (sysRegSet_Error)
			console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < getSubCookie > (status of this func in status variable (funcName_rg))|-}//-");
		return undefined;				
	}
	if (Reg_no_checkStorName == "no"){
		if ((!checkStorName(main_name)) || (!checkStorName(low_name))){
			getSubCookie_rg = false;
			if (sysRegSet_Error)
				console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < getSubCookie > (status of this func in status variable (funcName_rg))|-}//-");
			return undefined;		
		}
	}
	else
		Reg_no_checkStorName = "no";
	Reg_no_checkStorName = "yes";
	var old_storage = getCookie(main_name);
	if (old_storage){
		var old_items_pairs = old_storage.toString().split("/-$-/");
		for (var i = 0; i < old_items_pairs.length;i++){
			var old_pair = old_items_pairs[i].toString().split("?-$-?");
			if (old_pair[0] == low_name)
				return GetTypeData(old_pair[1]);
		}
	}
	getSubCookie_rg = false;
	if (sysRegSet_Error)
		console.error("//-sysrgv"+sysRegSet_Version+"://{ -| An error has occurred in: < getSubCookie > [err_mess: no_coo] (status of this func in status variable (funcName_rg))|-}//-");
	return undefined;
}

function checkStorName(name){
	checkStorName_rg = true;
	if (name === undefined || name === null || name == "NaN" || name === "")
		return "done";
	var array_of_names = new Array("/-$-/","?-$-?");
	var name = name+"";
	for (i = 0; i < array_of_names.length;i++){
		var try_name = name.toString().split(array_of_names[i]);
		if (try_name.length > 1){
			if (sysRegSet_Log)
				console.log("//-sysrgv"+sysRegSet_Version+"://{ -| Value inserted in: < checkStorName > not allowed in sysrgv"+sysRegSet_Version+" system vars (status of this func in status variable (funcName_rg))|-}//-");
			checkStorName_rg = false;
			return undefined;
		}
	}
	return "done";
}

var FCSnameMain = "jsapp001";
var FCSnone = "none";

function CreateDynFSHS(name,value){
	if (!name)
		return undefined;
	if (!value)
		return undefined;
	window[name] = value;
	return "done";
}

function GetDynFSHS(name,name2){
	if (!name)
		return undefined;
	if (!name2)
		return undefined;
	var dyn = window[name+name2];
	if (dyn)
		return GetTypeData(dyn);
	else
		return undefined;
}

function SetProm(name1main,name2,value){
	if (!name1main)
		name1main = FCSnameMain;
	if (!name2)
		return undefined;
	if (!value)
		value = FCSnone;
	if (name1main == "n" || name1main == "no" || name1main == "none")
		name1main = FCSnameMain;
	if (value == "n" || value == "no" || value == "none")
		value = FCSnone;
	CreateDynFSHS(name1main+"0R0"+name2,value);
	return "done";
}

function GetProm(name1main,name2){
	if (!name1main)
		name1main = FCSnameMain;
	if (!name2)
		return undefined;
	if (name1main == "n" || name1main == "no" || name1main == "none")
		name1main = FCSnameMain;
	var result = GetDynFSHS(name1main+"0R0",name2);
	return GetTypeData(result);
}

function IfProm(name1main,name2){
	var result = undefined;
	if (!name1main)
		name1main = FCSnameMain;
	if (!name2)
		return undefined;
	if (name1main == "n" || name1main == "no" || name1main == "none")
		name1main = FCSnameMain;
	result = GetDynFSHS(name1main+"0R0",name2);
	if (!result)
		return undefined;
	else
		return "done";
}

function SetSubR(name1main,name2,value,type){
	if (!name1main)
		name1main = FCSnameMain;
	if (!name2)
		return undefined;
	if (!value)
		value = FCSnone;
	if (!type)
		type = "c";
	if (name1main == "n" || name1main == "no" || name1main == "none")
		name1main = FCSnameMain;
	if (value == "n" || value == "no" || value == "none")
		value = FCSnone;
	if (type == "n" || type == "no" || type == "none")
		type = "c";
	if (type == "c"){
		setSubCookie(name1main,name2,value);
		SetProm(name1main+"2coo2",name2,value);
	}
	else{
		setSubStorage(name1main,name2,value);
		SetProm(name1main+"2stor2",name2,value);
	}
	return "done";
}

function GetSubR(name1main,name2,type){
	if (!name1main)
		name1main = FCSnameMain;
	if (!name2)
		return undefined;
	if (!type)
		type = "c";
	if (name1main == "n" || name1main == "no" || name1main == "none")
		name1main = FCSnameMain;
	if (type == "n" || type == "no" || type == "none")
		type = "c";
	var PersistentData = undefined;
	var SpeedData = undefined;
	if (type == "c"){
		PersistentData = getSubCookie(name1main,name2);
		SpeedData = GetProm(name1main+"2coo2",name2);
	}
	else{
		PersistentData = getSubStorage(name1main,name2);
		SpeedData = GetProm(name1main+"2stor2",name2);
	}
	if (PersistentData === undefined && SpeedData === undefined)
		return undefined;
	if (SpeedData === undefined && PersistentData !== null && PersistentData !== "" && PersistentData !== undefined){
		if (type == "c")
			SetProm(name1main+"2coo2",name2,PersistentData);
		else
			SetProm(name1main+"2stor2",name2,PersistentData);
		return PersistentData;
	}
	if (PersistentData === undefined && SpeedData !== null && SpeedData !== "" && SpeedData !== undefined){
		if (type == "c")
			setSubCookie(name1main,name2,SpeedData);
		else
			setSubStorage(name1main,name2,SpeedData);
		return SpeedData;
	}
	if (PersistentData == SpeedData && PersistentData != null && SpeedData != null && PersistentData !== undefined && SpeedData !== undefined && PersistentData !== "" && SpeedData !== "")
		return PersistentData;
	if (PersistentData != SpeedData && PersistentData != null && SpeedData != null && PersistentData !== undefined && SpeedData !== undefined && PersistentData !== "" && SpeedData !== ""){
		if (type == "c"){
			setSubCookie(name1main,name2,SpeedData);
			console.log("//FCS:://::<An error was detected in persistent storage SubCookie, corrected by replacing the data from fast storage (variable storage).><</_"+name1main+"!>!>"+name2+"/>>::");
		}
		else{
			setSubStorage(name1main,name2,SpeedData);
			console.log("//FCS:://::<An error was detected in persistent storage SubStorage, corrected by replacing the data from fast storage (variable storage).><</_"+name1main+"!>!>"+name2+"/>>::");
		}
		return GetTypeData(SpeedData);
	}
	return null;
}

function ChangeSubCookie(name1,name2,name1main,name2main){
	if (!name1)
		return undefined;
	if (!name2)
		return undefined;
	if (!name1main)
		name1main = FCSnameMain;
	if (!name2main)
		name2main = FCSnameMain;
	if (name1main == "n" || name1main == "no" || name1main == "none")
		name1main = FCSnameMain;
	if (name2main == "n" || name2main == "no" || name2main == "none")
		name2main = FCSnameMain;
	var val1 = GetSubR(name1main,name1,"c");
	SetSubR(name1main,name1,GetSubR(name2main,name2,"c"),"c");
	SetSubR(name2main,name2,val1,"c");
	return "done";
}

function CHSSt(name1,name2,name1main,name2main){
	if (!name1)
		return undefined;
	if (!name2)
		return undefined;
	if (!name1main)
		name1main = FCSnameMain;
	if (!name2main)
		name2main = FCSnameMain;
	if (name1main == "n" || name1main == "no" || name1main == "none")
		name1main = FCSnameMain;
	if (name2main == "n" || name2main == "no" || name2main == "none")
		name2main = FCSnameMain;
	var val1 = GetSubR(name1main,name1,"s");
	SetSubR(name1main,name1,GetSubR(name2main,name2,"s"),"s");
	SetSubR(name2main,name2,val1,"s");/*
	var val1 = getSubStorage(name1main,name1);
	setSubStorage(name1main,name1,getSubStorage(name2main,name2));
	setSubStorage(name2main,name2,val1);*/
	return "done";
}

function SaveNoneAndChangeSubCookie(name1,name2,name1main,name2main){//do prvniho ulozi none a hodnotu z prvniho presune do druheho
	if (!name1)
		return undefined;
	if (!name2)
		return undefined;
	if (!name1main)
		name1main = FCSnameMain;
	if (!name2main)
		name2main = FCSnameMain;
	if (name1main == "n" || name1main == "no" || name1main == "none")
		name1main = FCSnameMain;
	if (name2main == "n" || name2main == "no" || name2main == "none")
		name2main = FCSnameMain;
	SetSubR(name2main,name2,GetSubR(name1main,name1,"c"),"c");
	SetSubR(name1main,name1,FCSnone,"c");
	return "done";
}

function SaveNoneAndChangeSubStorage(name1,name2,name1main,name2main){//do prvniho ulozi none a hodnotu z prvniho presune do druheho
	if (!name1)
		return undefined;
	if (!name2)
		return undefined;
	if (!name1main)
		name1main = FCSnameMain;
	if (!name2main)
		name2main = FCSnameMain;
	if (name1main == "n" || name1main == "no" || name1main == "none")
		name1main = FCSnameMain;
	if (name2main == "n" || name2main == "no" || name2main == "none")
		name2main = FCSnameMain;
	SetSubR(name2main,name2,GetSubR(name1main,name1,"s"),"s");
	SetSubR(name1main,name1,FCSnone,"s");
	return "done";
}

function SNCHSC(name1,name2,name1main,name2main){
	var Status = SaveNoneAndChangeSubCookie(name1,name2,name1main,name2main);
	if (Status == "done")
		return "done";
	else
		return undefined;
}

function SNCHSSt(name1,name2,name1main,name2main){
	var Status = SaveNoneAndChangeSubStorage(name1,name2,name1main,name2main);
	if (Status == "done")
		return "done";
	else
		return undefined;
}

function CHSC(name1,name2,name1main,name2main){
	var Status = ChangeSubCookie(name1,name2,name1main,name2main);
	if (Status == "done")
		return "done";
	else
		return undefined;
}

function CHSSt(name1,name2,name1main,name2main){
	var Status = ChangeSubStorage(name1,name2,name1main,name2main);
	if (Status == "done")
		return "done";
	else
		return undefined;
}

function SetSC(name1,name2,value){
	if (!name1)
		name1 = FCSnameMain;
	if (!name2)
		return undefined;
	if (value === undefined)
		value = FCSnone;
	if (name1 == "none" || name1 == "no" || name1 == "n")
		name1 = FCSnameMain;
	if (value == "none" || value == "no" || value == "n")
		value = FCSnone;		
	setSubCookie(name1,name2,value);
}

function SetSSt(name1,name2,value){
	if (!name1)
		name1 = FCSnameMain;
	if (!name2)
		return undefined;
	if (value === undefined)
		value = FCSnone;
	if (name1 == "none" || name1 == "no" || name1 == "n")
		name1 = FCSnameMain;
	if (value == "none" || value == "no" || value == "n")
		value = FCSnone;		
	setSubStorage(name1,name2,value);
}

function GetSC(name1,name2){
	if (!name1)
		name1 = FCSnameMain;
	if (!name2)
		return undefined;
	if (name1 == "none" || name1 == "no" || name1 == "n")
		name1 = FCSnameMain;
	var value = getSubCookie(name1,name2);
	return GetTypeData(value);
}

function GetSSt(name1,name2){
	if (!name1)
		name1 = FCSnameMain;
	if (!name2)
		return undefined;
	if (name1 == "none" || name1 == "no" || name1 == "n")
		name1 = FCSnameMain;
	var value = getSubStorage(name1,name2);
	return GetTypeData(value);
}

function DelSSt(name1,name2){
	if (!name1)
		name1 = FCSnameMain;
	if (!name2)
		return undefined;
	if (name1 == "none" || name1 == "no" || name1 == "n")
		name1 = FCSnameMain;
	delSubStorage(name1,name2);
	return "done";
}

function GetTypeData(data){
	if (data == "true" || data == "false")
		return eval(data);
	if (IsInt(data))
		return Number(data);
	if (data == "undefined")
		return undefined;
	if (data == "null")
		return null;
	if (data == "")
		return "";
	else if (data)
		return data.toString();
	else
		return undefined;
}