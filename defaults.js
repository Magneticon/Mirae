//here you will add paths to your application data for registration
const _IncludeProgScripts = new Array(
    "MY_PROGRAMS/notepad.js",
    "MY_PROGRAMS/hello_world.js",
    "MY_PROGRAMS/example.js",
    "MY_PROGRAMS/webbrowser.js",
);
const _IncludeProgStyles = new Array(

);

// Here you set the defaults for setting up the Mirae system
// Set variable to "" to use defaults set by the system, if not specified otherwise
const _AppName = ""; //set, if you want to use your custom application name as name of the system
const _ShutdownUnAvailable = false; //set to true, if you want to prevent user from shutting down the system
const _RestartUnAvailable = false; //set to true, if you want to prevent user from restarting the system
const _DisableCMD = false;//set to true, if you want to prevent user from opening command prompt in GUI (it does not disable ASCOM system nor Run command). Note: it will be automatically disabled, if ASCOM is not in allowed modes.
const _DisableRun = false;//set to true, if you want to prevent user from using Run command in GUI (it does not disable ASCOM system nor command prompt in the GUI). Note: it will be automatically disabled, if ASCOM is not in allowed modes.
const _AllowedModes = 0;//0 - allows ASCOM and GUI, 1 - allows ASCOM only, 2 - allows GUI only, 3 - special GUI mode - no UI is loaded, only empty desktop, good for Kiosk mode applications - ASCOM is not loaded in this mode.
const _LoadInto = 0;//0 - what system to load first after the startup. 1 - loads first ascom, 0 loads first GUI. Note: if the system is not in allowedmode, then next possible option will load as per _AllowedModes
const _DoNotShowControlPanelInGUI = false;//set to true, if you want user be able to change settings in GUI
const _DisallowChanges = false;//set to true, if you want prevent user form doing changes in the systems thru control panels or in ASCOM (installing new programs, changing colors, changing time, etc.)
const _HideApplications = false;//set to true, if you want to hide applications in start menu in GUI
const _EnforceLanguage = true;//set to true, if you want to enforce your language selection, preventing user from selecting his own during the system startup
const _DefaultLanguage = "ENG";//set default language when _EnforceLanguage is set to true
const _DoNotShowLicense = true;//set to true, if you don't want the system license to be show during the system startup
const _EnableGUIWelcomeSound = true;//set to false, if you don't want the welcome sound to be played during the GUI startup
const _WelcomeDelay = -1;//set a delay for Welcome screen when loading GUI. Use -1 to use system defaults or use a positive number to set custom delay. Set to 0 to disable welcome screen.
const _OEMDelay = 4500;//set a delay for OEM screen when loading GUI. Use -1 to use system defaults or use a positive number to set custom delay. Set to 0 to disable OEM screen.
const _GUIShell = "";//set shell style of GUI to XP, 98, W7 or leave blank to have default set.
//const _DesktopBackground = "Desktop Background.bmp";//set location of picture for background in GUI mode. If not set, then a background color will be used instead.
const _DesktopBackground = "Desktop Background.png";//set location of picture for background in GUI mode. If not set, then a background color will be used instead.
const _DesktopBackgroundColor = "";//set custom desktop background color
const _DesktopForegroundColor = "";//set custom desktop foreground color
const _NoOutputDuringStartup = false;//set to true, if you don't want to see loading of the scripts during the system startup
const _DoNotShowAppLoading = false;//set to true, if you don't want to see starting the application window until everything is loaded
const _WindowDrawSpeed = 150;//set speed of window drawing when system starts up. Note: windows are draw serially, one by one. Having a lot of windows with large WindowDrawSpeed will slow down the system startup.
const _DisableIALAutoRepair = false;//set to true, if you don't want system to maintain reasonable aspect ratio of the screen (objects may be distorted when using unsual aspect ratios)
const _DoNotColorizeBadIALReasolution = false;//set to true, if you don't want to have red border around the screen in case of too small/bad aspect ratio resolution

//const _CustomLoadScreen = "<DIV STYLE='BACKGROUND-COLOR: #000044; WIDTH: 100%; HEIGHT: 100%; DISPLAY: FLEX; ALIGN-ITEMS: CENTER; JUSTIFY-CONTENT: CENTER;'><H1>Mirae</H1></DIV>";//set HTML code for custom loading screen - Set instead of OEM screen.
const _CustomLoadScreen = "";//set HTML code for custom loading screen - Set instead of OEM screen.
const _DoNotShowSysLoadProgressBar = false;//set to true, if you don't want system loading progress bar visible