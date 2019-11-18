console.log( (new Date()).getTime());
chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        id: "add-subtitle",
        title: "加载字幕",
        type: "normal",
        contexts: ["video"]
    });
    chrome.contextMenus.create({
        id: "change-subtitle",
        title: "切换字幕",
        type: "normal",
        contexts: ["video"]
    });
});