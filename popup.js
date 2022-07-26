if (document.querySelector(".popup")) {
  if (document.getElementById("topbar")) {
    const topbar = document.getElementById("topbar");

    const colourButton = document.querySelector(".colour-button");

    colourButton.addEventListener("click", () => {
      var userInput = document.getElementById("new-colour").value;

      chrome.storage.sync.set({ savedColor: userInput }, function () {
        console.log("Value is set to " + userInput);
      });

      chrome.tabs.executeScript(
        {
          code:
            "var userInput = '" +
            userInput +
            "'; try{topbar.style.backgroundColor = userInput;}catch(e){alert(e);}",
        },
        null
      );
    });
  }
}
