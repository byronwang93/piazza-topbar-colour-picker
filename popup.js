if (document.querySelector(".popup")) {
    const topbar = document.getElementById("topbar");

    const colourButton = document.querySelector(".colour-button");

    colourButton.addEventListener("click", () => {
        var userInput = document.getElementById("new-colour").value;
        chrome.tabs.executeScript({code:"var userInput = '"+userInput+"'; try{topbar.style.backgroundColor = userInput;}catch(e){alert(e);}"},null);
    });



}