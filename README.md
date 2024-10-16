# Dark Mode Toggle Chrome Extension

## Introduction

The Dark Mode Toggle is a Chrome extension that allows you to toggle dark mode on any webpage. This guide will help you install the extension into Chrome as a developer.

## Installation Guide

Follow these steps to install the extension:

### Prepare the Extension Files

Ensure you have the following files and directories:

- `manifest.json`
- `background.js`
- `content.js`
- `icons/` directory containing `dark_mode_icon.svg` and other icon sizes as specified.

### Open the Extensions Page in Chrome

1. Open Google Chrome.
2. Navigate to `chrome://extensions/` in the address bar.

### Enable Developer Mode

On the Extensions page, toggle the Developer mode switch on (it's located in the top right corner).

### Load the Unpacked Extension

1. Click the "Load unpacked" button that appears after enabling Developer mode.
2. In the dialog that opens, select the directory containing your extension files (the folder with `manifest.json`).

### Verify the Extension Installation

1. After loading, the Dark Mode Toggle extension should appear in your list of extensions.
2. You should see the extension's icon added to the Chrome toolbar.

## Using the Extension

- Click on the Dark Mode Toggle icon in the toolbar to toggle dark mode on the current webpage.
- Clicking the icon again will revert the page back to its original appearance.

## Additional Notes

- **Permissions**: The extension requires the "scripting" and "activeTab" permissions as specified in the `manifest.json` to inject scripts into the active tab.
- **Manifest Version**: This extension uses Manifest Version 3.
- **Icons**: Ensure all icon files referenced in `manifest.json` exist in the `icons/` directory with the correct filenames and sizes.

## Troubleshooting

- **Extension Not Appearing**: If the extension doesn't appear after loading, double-check that all files are in the correct directory and that `manifest.json` is properly formatted.
- **Icons Missing**: If icons aren't displaying correctly, verify that the file paths in `manifest.json` match the actual locations of your icon files.
- **Functionality Issues**: If clicking the icon doesn't toggle dark mode, check the console for errors in `background.js` or `content.js`.

## Conclusion

You've successfully installed the Dark Mode Toggle extension into Chrome as a developer. Enjoy browsing in dark mode!
