chrome.omnibox.onInputEntered.addListener(function(text) {
    // Encode user input for special characters , / ? : @ & = + $ #
    var newURL = chrome.runtime.getURL('unicode.html?str=' + encodeURIComponent(text));
    chrome.tabs.create({ url: newURL });
  });

  