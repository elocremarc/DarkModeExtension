chrome.action.onClicked.addListener((tab) => {
  // Inject content script into the current tab
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js'],
  });
});

chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.darkMode !== undefined && sender.tab) {
    const iconPaths = message.darkMode
      ? {
          16: 'icons/16-Dark.png',
          32: 'icons/48-Dark.png',
          48: 'icons/128-Dark.png',
        }
      : {
          16: 'icons/16-Light.png',
          32: 'icons/48-Light.png',
          48: 'icons/128-Light.png',
        };
    chrome.action.setIcon({
      path: iconPaths,
      tabId: sender.tab.id,
    });
  }
});
