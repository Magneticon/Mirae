var lanENG = ["Loading the application", "License", "Before you will continue, you will need to agree with the following conditions of use", "Please read carefully, if you won't agree with the following conditions you won't be able to use this application.", "Agree", "Disagree", "Restarting the application", "This file is not valid file of application Mirae and it cannot be loaded. Please use different file.", "This file is corrupted and cannto be loaded. Please use different file.", "Exit", "Setting of shortcuts has been changed.", "Shortcuts", "Close", "For activation of the changes, it is needed to restart the application. Do you want to continue?", "OK", "Cancel", "Welcome", "Welcome to Mirae application. What you want to do today?","System detected bad screen resolution","System detected bad aspect ratio of screen: Required = from","to","Actual","Screen resolution has been adjusted autmatically.","Starting the application","has been successfully closed.","Start again","Do you want to exit","Exit","Application","the application","Do you want to restart","Restart","Shutdown","System is loaded","ASCOM","Application load error","cannot be run, as another instance of application exists."];
var lanCZ = ["asdf"];

var	LanSetFrom = "ENG";
var	LanSetTo = "ENG";

function Translate(data){
	if (!data)
		return undefined;
	return eval("lan"+LanSetTo)[eval("lan"+LanSetFrom).indexOf(data)];
}

function SetLang(langcode){
	LanSetTo = langCode;
	Lang = langCode;
}

function WriteLangFrom(langCode){
	switch(langCode.toUpperCase()){
		case "ENG":
			return Translate("english");
			break;
		case "CZ":
			return Translate("čeština");
			break;
		default:
			return undefined;
			break;
	}
}