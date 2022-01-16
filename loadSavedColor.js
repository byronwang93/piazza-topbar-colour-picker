chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    let url = tabs[0].url;
    if (url.includes("piazza")) {
      chrome.storage.sync.get("savedColor", function(result) {
        console.log('Value currently is ' + result.savedColor);

        if (result.savedColor) {
          var userInput = result.savedColor

          chrome.tabs.executeScript({code:"var userInput = '"+userInput+"'; try{topbar.style.backgroundColor = userInput;}catch(e){alert(e);}"},null);
        } else {
          var userInput = "green"
          chrome.tabs.executeScript({code:"var userInput = '"+userInput+"'; try{topbar.style.backgroundColor = userInput;}catch(e){alert(e);}"},null);
        }
      
        });
    }
    });
});