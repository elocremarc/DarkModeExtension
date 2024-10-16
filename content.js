// Immediately Invoked Function Expression (IIFE) to avoid polluting global scope
(() => {
  const styleId = 'dark-mode-extension-style';
  let styleElement = document.getElementById(styleId);

  if (styleElement) {
    // Dark mode is active, remove the style element
    styleElement.remove();
    // Update the extension icon to light mode
    chrome.runtime.sendMessage({ darkMode: false });
  } else {
    // Dark mode is not active, create and append the style element
    styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.textContent = `
      html, body, [class], [id] {
        background-color: #121212 !important;
        color: #e0e0e0 !important;
        border-color: #424242 !important;
      }
      a { color: #bb86fc !important; }
    `;
    document.head.appendChild(styleElement);
    // Update the extension icon to dark mode
    chrome.runtime.sendMessage({ darkMode: true });
  }
})();
