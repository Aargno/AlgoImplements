/*
Used the following code sources as a guide:
https://github.com/mdn/webextensions-examples/tree/master/quicknote
https://github.com/mdn/webextensions-examples/tree/master/beastify
*/

function onError(error) {
    console.log(error);
}

function displayNote() {
    browser.tabs.query({currentWindow: true, active: true}).then( (tabs) => { //Fetch the list of tabs
        let tabUrl = tabs[0].url; //Get the url of the current tab
        var load = browser.storage.local.get(null); //Load all values stored in local storage
        load.then((results) => {
            if (results[tabUrl] == null) document.getElementById("input").value = ""; //If the result associated with the tabUrl doesn't exist print nothing
            else document.getElementById("input").value = results[tabUrl]; //Print value stored in space associated with url
        }, onError);
    }, onError);
}

function listenForClicks() {
    document.addEventListener("click", (e) => {

        function saveNote() {
            browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
                var note = document.getElementById("input").value;
                let tabUrl = tabs[0].url;
                var storing = browser.storage.local.set({[tabUrl] : note});
                storing.then( () => {
                    document.getElementById("title").innerHTML = "Saved!";
                    setTimeout(() => {
                        document.getElementById("title").innerHTML = "Note";
                    }, 1500);
                }, onError);
            }, onError);
        }

        function clearNote() {
            document.getElementById("input").value = "";
            browser.storage.local.clear().catch(onError);
        }

        if (e.target.classList.contains("save")) saveNote();
        else if (e.target.classList.contains("clear")) clearNote();
    });
}

displayNote();
listenForClicks();