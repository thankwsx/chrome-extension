chrome.tabs.onUpdated.addListener(function (tabId) {
    console.log(tabId);
    chrome.pageAction.show(tabId);
});