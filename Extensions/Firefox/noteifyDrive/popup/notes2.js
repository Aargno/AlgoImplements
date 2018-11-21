function onError(error) {
    console.log(error);
}

function displayNote() {
    var load = browser.storage.local.get("note");
    load.then((result) => {
        document.getElementById("input").value = "Hi";
        document.getElementById("input").value = `${result.note.text}`;
    }, onError);
}

function listenForClicks() {
    document.addEventListener("click", (e) => {
        
        function saveNote() {
            let input = document.getElementById("input").value;
            var note = {
                text: input
            }
            var storing = browser.storage.local.set({note});
            storing.then( () => {
                document.getElementById("title").innerHTML = "Saved!";
                setTimeout(() => {
                    document.getElementById("title").innerHTML = "Note";
                }, 1500);
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