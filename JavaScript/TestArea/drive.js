//Authorization code taken from: https://github.com/mdn/webextensions-examples/tree/master/google-userinfo
const API_KEY = 'AIzaSyDJ9WFER8wA7WIkgbJbtJzk1BsKVgv7Yyw';
const REDIRECT_URL = browser.identity.getRedirectURL();
const CLIENT_ID = '732268465701-jve5bqp0q27mi8olppododhk3kglf31p.apps.googleusercontent.com';
const SCOPES = ["https://www.googleapis.com/auth/drive.file", "profile"];
const AUTH_URL =
`https://accounts.google.com/o/oauth2/auth\
?client_id=${CLIENT_ID}\
&response_type=token\
&redirect_uri=${encodeURIComponent(REDIRECT_URL)}\
&scope=${encodeURIComponent(SCOPES.join(' '))}`;
const VALIDATION_BASE_URL="https://www.googleapis.com/oauth2/v3/tokeninfo";

function onError(error) {
    console.log(error);
}

function extractAccessToken(redirectUri) {
    let m = redirectUri.match(/[#?](.*)/);
    if (!m || m.length < 1)
      return null;
    let params = new URLSearchParams(m[1].split("#")[0]);
    return params.get("access_token");
}

function authorize() {
    return browser.identity.launchWebAuthFlow({
      interactive: true,
      url: AUTH_URL
    });
}

function validate(redirectURL) {
    const accessToken = extractAccessToken(redirectURL);
    if (!accessToken) {
      throw "Authorization failure";
    }
    const validationURL = `${VALIDATION_BASE_URL}?access_token=${accessToken}`;
    const validationRequest = new Request(validationURL, {
      method: "GET"
    });
    function checkResponse(response) {
      return new Promise((resolve, reject) => {
        if (response.status != 200) {
          reject("Token validation error");
        }
        response.json().then((json) => {
          if (json.aud && (json.aud === CLIENT_ID)) {
            resolve(accessToken);
          } else {
            reject("Token validation error");
          }
        });
      });
    }
    console.log("Here");
    return fetch(validationRequest).then(checkResponse);
}

function getAccessToken() {
    return authorize().then(validate);
}

function getFilesList(accessToken) {
    const requestURL = "https://content.googleapis.com/drive/v3/files?pageSize=20&q=name%20contains%20%27pdf%27&fields=nextPageToken%2C%20files(id%2C%20name)";
    const requestHeaders = new Headers();
    requestHeaders.append('Authorization', 'Bearer ' + accessToken);
    const driveRequest = new Request(requestURL, {
      method: "GET",
      headers: requestHeaders
    });
  
    return fetch(driveRequest).then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw response.status;
      }
    });

}

getAccessToken()
    .then(getFilesList)
    .then((result) => {
        var files = result.files;
        if (files && files.length > 0) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
              console.log(file.name);
            }
        }
    })
    .catch(onError);