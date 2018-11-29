var gettingPage = browser.runtime.getBackgroundPage();
var token;

function saveNote() {
    gettingPage.then((page) => {
        page.uploadFile(token, document.getElementById("input").value).then(console.log).catch(console.log);
    })
}

function deleteNote() {
    console.log("Not implemented yet")
}

function authorize() {
    gettingPage.then((page) => {
        page.getAccessToken().then((result) => {token = result}).catch(page.logError);
    });
}

function listenForClicks(page) {
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("login")) handleSignInClick();
        else if (e.target.classList.contains("save")) saveNote();
        else if (e.target.classList.contains("delete")) clearNote();
    });
}

authorize();
listenForClicks();