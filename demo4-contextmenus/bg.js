chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        id: "add-subtitle",
        title: "加载字幕",
        type: "normal",
        contexts: ["all"]
    });
    chrome.contextMenus.create({
        id: "add-subtitle-zh",
        type:"checkbox",
        title: "中文",
        parentId: "add-subtitle"
    })
    chrome.contextMenus.create({
        id: "add-subtitle-en",
        type:"checkbox",
        title: "English",
        parentId: "add-subtitle"
    })
    chrome.contextMenus.create({
        id: "separator-1",
        type:"separator"
    })
    chrome.contextMenus.create({
        id: "change-subtitle",
        title: "切换字幕",
        type: "normal",
        contexts: ["all"]
    });
    chrome.contextMenus.create({
        id: "change-subtitle-1",
        title: "中文",
        parentId:"change-subtitle",
        type: "radio",
        contexts: ["page"]
    });
    chrome.contextMenus.create({
        id: "change-subtitle-2",
        title: "English",
        parentId:"change-subtitle",
        type: "radio",
        contexts: ["page"]
    });
});