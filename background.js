chrome.commands.onCommand.addListener((command,tab) => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {action: command}, function(response) {console.log(response)});  
    });
});