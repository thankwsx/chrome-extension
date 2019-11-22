// chrome.webRequest.handlerBehaviorChanged(function() {
//     console.log('clear cache blocking');
// })

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return { cancel: details.url.indexOf("://l.qq.com/") != -1 };
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
