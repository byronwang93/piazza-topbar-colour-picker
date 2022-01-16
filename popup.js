if (document.querySelector(".popup")) {
    const topbar = document.getElementById("topbar");

    const colourButton = document.querySelector(".colour-button");

    colourButton.addEventListener("click", () => {
        chrome.tabs.executeScript({
            code: "topbar.style.backgroundColor = 'green';",
        });
    });



}