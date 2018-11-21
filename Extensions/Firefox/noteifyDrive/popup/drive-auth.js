// Base of this code taken from: https://bytutorial.com/tutorials/google-api/introduction-to-google-drive-api-using-javascript
/******************** GLOBAL VARIABLES ********************/
var SCOPES = ['https://www.googleapis.com/auth/drive','profile'];
var CLIENT_ID = '1055077076292-q1eigjdlqacfkcs69qukjm4fp4s43mkq.apps.googleusercontent.com';
var API_KEY = 'AIzaSyDA6OTsYGlzn6xi8xAddgOGtXYLSqzIBEg';
var FOLDER_NAME = "";
var FOLDER_ID = "root";
var FOLDER_PERMISSION = true;
var FOLDER_LEVEL = 0;
var NO_OF_FILES = 1000;
var DRIVE_FILES = [];
var FILE_COUNTER = 0;
var FOLDER_ARRAY = [];
const gapi = document.gapi;

/******************** AUTHENTICATION ********************/

 function handleClientLoad() {
	// Load the API client and auth2 library
	gapi.load('client:auth2', initClient);
}

//authorize apps
 function initClient() {
	gapi.client.init({
		apiKey: API_KEY, //THIS IS OPTIONAL AND WE DONT ACTUALLY NEED THIS, BUT I INCLUDE THIS AS EXAMPLE
		clientId: CLIENT_ID,
		scope: SCOPES.join(' ')
	}).then(function () {
	  console.log(gapi.auth2.getAuthInstance().isSignedIn);
	});
}

function handleAuthClick(event) {
	gapi.auth2.getAuthInstance().signIn();
}

function handleSignoutClick(event) {
	if(confirm("Are you sure you want to logout?")){
		gapi.auth2.getAuthInstance().signOut();
	}
}

/******************** END AUTHENTICATION ********************/

function listenForClicks() {
    document.addEventListener("click", (e) => {
         if (e.target.classList.contains("login")) handleAuthClick(e);
    });
}

listenForClicks();