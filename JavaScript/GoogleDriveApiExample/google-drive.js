// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

function handleClientLoad() {
    // Loads the client library and the auth2 library together for efficiency.
    // Loading the auth2 library is optional here since `gapi.client.init` function will load
    // it if not already loaded. Loading it upfront can save one network request.
    gapi.load('client:auth2', initClient);
  }

  function initClient() {
    // Initialize the client with API key and initialize OAuth with an
    // OAuth 2.0 client ID and scopes (space delimited string) to request access.
    gapi.client.init({
        apiKey: 'AIzaSyDJ9WFER8wA7WIkgbJbtJzk1BsKVgv7Yyw',
        clientId: '732268465701-jve5bqp0q27mi8olppododhk3kglf31p.apps.googleusercontent.com',
        scope: 'profile https://www.googleapis.com/auth/drive.file',
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function () {
      // Listen for sign-in state changes.
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);

      // Handle the initial sign-in state.
      updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
  }

  function updateSignInStatus(isSignedIn) {
    // When signin status changes, this function is called.
    // If the signin status is changed to signedIn, we make an API call.
    if (isSignedIn) {
    //   makeApiCall();
    console.log("Signed-In");
    } else console.log("Signed-Out");
  }

  function handleSignInClick(event) {
    // Ideally the button should only show up after gapi.client.init finishes, so that this
    // handler won't be called before OAuth is initialized.
    gapi.auth2.getAuthInstance().signIn();
  }

  function handleSignOutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
  }

  function listFiles(event) {
    if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
      gapi.client.drive.files.list({
        'pageSize': 20,
        'fields': "nextPageToken, files(id, name)",
        'q': "name contains 'pdf'" //Queries can be found here: https://developers.google.com/drive/api/v3/search-parameters
      }).then((response) => {
        var files = response.result.files;
        if (files && files.length > 0) {
          for (var i = 0; i < files.length; i++) {
            var file = files[i];
            console.log(file.name);
          }
        }
      });
    } else console.log("Not logged in");
  }