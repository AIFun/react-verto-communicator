"use strict";
const messages = {
  "TITLE_ACTIVE_CALL": "Oops, Active Call in Course.",
  "MESSAGE_ACTIVE_CALL_HANGUP": "It seems that you are in a call. Do you want to hang up?",
  "MESSAGE_ACTIVE_CALL_BACK": "It seems you were in a call before leaving the last time. Wanna go back to that?",
  "TITLE_INCOMING_CALL": "Incoming Call",
  "MESSAGE_INCOMING_CALL": "from ",
  "MESSAGE_NO_HANGUP_CALL": "There is no call to hangup.",
  "MESSAGE_ENTER_FILENAME": "Please, enter filename",
  "TITLE_ENABLE_VIDEO": "Would you like to activate video for this call?",
  "MESSAGE_ENABLE_VIDEO": "Video will be active during the next calls.",
  "TITLE_INSERT_BANNER": "Please insert the banner text",
  "TITLE_INSERT_CANVAS_ID": "Please insert the Canvas Id",
  "TITLE_INSERT_LAYER": "Please insert the Layer",
  "TITLE_TRANSFER": "Transfer party?",
  "MESSAGE_TRANSFER": "To what destination would you like to transfer this call?",
  "LABEL_TRANSFER": "Destination",
  "MESSAGE_DISPLAY_SETTINGS": "Can't display preview settings during a call",
  "BUTTON_END_CALL": "End Call",
  "BUTTON_CLOSE": "Close",
  "MESSAGE_PLAY": "Play",
  "MESSAGE_STOP": "Stop",
  "MESSAGE_RECORD": "Record",
  "MESSAGE_STOP_RECORD": "Stop Record",
  "MESSAGE_SNAPSHOT": "Snapshot",
  "MESSAGE_VIDEO_MODE": "Video Mode",
  "MESSAGE_MUTE_MIC": "(un)Mute Mic",
  "MESSAGE_MUTE_VIDEO": "(un)Mute Video",
  "MESSAGE_FULLSCREEN": "Toggle Fullscreen Mode",
  "MESSAGE_SCREENSHARE": "Screenshare",
  "MESSAGE_OPEN_CLOSE_CHAT": "Open/Close Chat",
  "MESSAGE_SPEAKER": "Speaker",
  "MESSAGE_POPUP": "Popup",
  "CHAT_TITLE_MEMBERS": "Members",
  "CHAT_TITLE": "Chat",
  "CHAT_NO_MEMBERS": "There are no members to show.",
  "CHAT_GENERAL": "General",
  "CHAT_TITLE_KICK": "Kick",
  "CHAT_KICK": "Kick",
  "CHAT_TITLE_VIDEO_FLOOR": "Video Floor",
  "CHAT_FLOOR": "Floor",
  "CHAT_TITLE_TRANSFER": "Transfer",
  "CHAT_TRANSFER": "Transfer",
  "CHAT_BANNER": "Banner",
  "CHAT_TITLE_SET": "Set",
  "CHAT_SET": "Set",
  "CHAT_TITLE_RESET": "Reset",
  "CHAT_RESET": "Reset",
  "CHAT_CANVAS": "Canvas",
  "CHAT_CANVAS_IN": "Canvas In",
  "CHAT_CANVAS_OUT": "Canvas Out",
  "CHAT_PREV": "Prev",
  "CHAT_NEXT": "Next",
  "CHAT_LAYER": "Layer",
  "CHAT_AUDIO_VIDEO": "Audio/Video",
  "CHAT_TITLE_MUTE_UNMUTE_MIC": "Mute/Unmute Mic",
  "CHAT_MUTE_MIC": "Mute",
  "CHAT_UNMUTE_MIC": "Unmute",
  "CHAT_TITLE_MUTE_UNMUTE_VIDEO": "Mute/Unmute Video",
  "CHAT_NO_MESSAGES": "There are no messages to show.",
  "CHAT_SEND_MESSAGE": "Send",
  "CHAT_TYPE_MESSAGE": "Type your message here...",
  "TITLE_CONTRIBUTORS": "Contributors",
  "MESSAGE_CONNECTION_UNTRUSTED": "This Connection is Untrusted.",
  "MESSAGE_TOGGLE_NAVIGATION": "Toggle navigation",
  "BANDWIDTH_INFO": "Bandwidth Info",
  "BANDWIDTH_INFO_INCOMING": "Incoming:",
  "BANDWIDTH_INFO_OUTGOING": "Outgoing:",
  "BANDWIDTH_INFO_VIDEO_RES": "Video Resolution:",
  "IN_CALL": "In Call:",
  "LAST_CALL": "Last Call:",
  "OPEN_NEW_WINDOW": "Open New Window",
  "CHANGE_LOGIN_INFO": "Change Login Information",
  "LOGOUT": "Logout",
  "ABOUT": "About",
  "HELP": "Help",
  "CONTRIBUTORS": "Contributors",
  "TITLE_PREVIEW_SETTINGS": "Setup your camera and microphone settings",
  "CAMERA_SETTINGS": "Camera:",
  "MIC_SETTINGS": "Microphone:",
  "SAVE": "Save",
  "LOADING": "Loading",
  "ERRORS" : "Errors",
  "CALLING_TO": "Calling to ",
  "CANCELLING": "Cancelling...",
  "DETERMINING_SPEED": "Determining your speed...",
  "CALL_HISTORY": "Call History",
  "CLEAR_CALL_HISTORY": "Clear History",
  "NO_CALL_HISTORY": "No history calls.",
  "ENTER_EXTENSION": "Enter an extension",
  "CALL_EXTENSION": "Call Extension",
  "LOGIN": "Login",
  "LOGIN_INFORMATION": "Login Information",
  "SAVE_LOGIN_INFORMATION": "Save Login Information",
  "INVALID_LOGIN_FIELDS": "Verify the fields below and try again.",
  "NAME": "Name",
  "YOUR_NAME": "Your name",
  "EMAIL": "Email",
  "YOUR_EMAIL": "Your email",
  "USER": "User",
  "PASSWORD": "Password",
  "CALLER_ID": "Caller ID",
  "HOSTNAME": "Hostname",
  "WEBSOCKET_URL": "Websocket URL",
  "SETTINGS": "Settings",
  "DEVICE_SETTINGS": "Device Settings",
  "SHARE_DEVICE": "Share Device:",
  "SPEAKER": "Speaker:",
  "SPEAKER_FEATURE": "Your browser doesn't seem to support this feature",
  "PREVIEW_SETTINGS": "Preview Settings",
  "REFRESH_DEVICE_LIST": "Refresh Device List",
  "GENERAL_SETTINGS": "General Settings:",
  "USE_VIDEO": "Use Video",
  "USE_STEREO_AUDIO": "Stereo Audio",
  "USE_STUN": "Use STUN ",
  "SCALE_VIDEO": "Scale Remote Video To Match Camera Resolution",
  "ASK_BEFORE_RECOVER": "Ask Before Recovering Call",
  "BEST_FRAME_RATE": "Best Frame Rate:",
  "AUDIO_SETTINGS": "Audio Settings:",
  "ECHO_CANCEL": "Echo Cancellation",
  "NOISE_SUPPRESSION": "Noise Suppression",
  "HIGHPASS_FILTER": "Highpass Filter",
  "VIDEO_SETTINGS": "Video Settings:",
  "REMOTE_ENCODER": "Dedicated Remote Encoder enabled.",
  "AUTO_SPEED_RES": "Automatically Determine Speed and Resolution Settings",
  "RECHECK_BANDWIDTH": "Recheck Bandwidth Before Each Outgoing Call",
  "CHECK_NETWORK_SPEED": "Check Network Speed",
  "VIDEO_QUALITY": "Video Quality:",
  "MAX_INCOMING_BANDWIDTH": "Max Incoming Bandwidth:",
  "MAX_OUTGOING_BANDWIDTH": "Max Outgoing Bandwidth:",
  "FACTORY_RESET": "Factory Reset",
  "SAVE_DEVICE_SETTINGS": "Save Device Settings",
  "CHECK_RESOLUTION": "Checking Resolution.",
  "ERROR_RESOLUTION": "Error: internal error checking resolution",
  "BROWSER_COMPATIBILITY": "Checking browser compatibility.",
  "REFRESH_MEDIA_DEVICES": "Refresh Media Devices.",
  "BROWSER_WITHOUT_WEBRTC": "Error: browser doesn't support WebRTC.",
  "CHECK_PERMISSION_MEDIA": "Checking media permissions",
  "CHECK_PROVISIONING_CONF": "Provisioning configuration.",
  "CHECK_LOGIN": "Checking login.",
  "CHECK_CONNECTION_SPEED": "Check Connection Speed.",
  "ERROR_PERMISSION_MEDIA": "Error: Media Permission Denied",
  "ERROR_PROVISIONING_CONF": "Error: Provision failed.",
  "PLEASE_WAIT": "Please wait...",
  "CANCEL": "Cancel",
  "CHAT_TITLE_VOL_MINUS": "Volume -",
  "CHAT_TITLE_VOL_PLUS": "Volume +",
  "CHAT_TITLE_GAIN_MINUS": "Gain -",
  "CHAT_TITLE_GAIN_PLUS": "Gain +",
  "CHAT_VOL_MINUS": "Volume -",
  "CHAT_VOL_PLUS": "Volume +",
  "CHAT_GAIN_MINUS": "Gain -",
  "CHAT_GAIN_PLUS": "Gain +",
  "LANGUAGE": "Language:",
  "BROWSER_LANGUAGE": "Browser Language",
  "BROWSER_SUPPORT_TITLE": "Browser not supported",
  "BROWSER_SUPPORT_TEXT": "The browser you are using isn't supported by our software. Please see below for alternate browser you can use. Once you have chosen an alternative browser you'll be able to access the session link using it.",
  "BROWSER_NAME_EDGE": "Edge",
  "BROWSER_VERSIONS_EDGE": "All",
  "BROWSER_NAME_CHROME": "Chrome",
  "BROWSER_VERSIONS_CHROME": "All",
  "BROWSER_NAME_FIREFOX": "Firefox",
  "BROWSER_VERSIONS_FIREFOX": "All",
  "BROWSER_NAME_OPERA": "Opera",
  "BROWSER_VERSIONS_OPERA": "All",
  "MORE_SETTINGS": "More Settings",
  "LESS_SETTINGS": "Less Settings",
  "YOUR_PASSWORD": "Your Password",
  "VERSION": "Version: ",
  "GIT_REV": "Git Rev: ",
  "POWERED_BY": "Powered By: ",
  "PREVIOUS": "Previous",
  "SET_LAYOUT_POSITION": "Set layout position.",
  "ENTER_LAYOUT_POSITION": "Please enter layout position.",
  "LAYOUT_POSITION": "Layout position",
  "DISCONNECTED": "Disconnected",
  "CONNECTING": "Connecting",
  "CONNECTED": "Connected",
  "COM_STATUS": "Communication status: ",
  "SCREEN_SHARE": "Screen Share",
  "PRESENTER": "Presenter",
  "WATCHING_CANVAS": "Watching Canvas",
  "INPUT_CANVAS": "Input Canvas"
};
module.exports = messages;
