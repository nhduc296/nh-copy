# nh-copy
A complete solution to copy text in browser.

It uses zeroClipboard by default to perform copy operation, if browser do not support flash use document.execCommand() instead.

#Support browser
Using zeroClipboard and document.execCommand().
- IE9+
- Firefox 41+ (tested in Firefox 41, OS: ubuntu 14.04 64bit)
- Chrome 43+ (tested in Chrome 45, OS: ubuntu 14.04 64bit)
Using document.execCommand() only.
- IE9+
- Firefox 41+ (tested in Firefox 41, OS: ubuntu 14.04 64bit)
- Chrome 43+ (tested in Chrome 45, OS: ubuntu 14.04 64bit)

#How it works?
If flash is supported use zeroClipboard to perform copy operation.
else check if firefox 41+ or chrome 43+ using document.execCommand() and selection API instead.

#To do
- Make sure chrome and firefox version detect function always work properly.
- Support setting to use document.execCommand() only.
- Format source code to easy further customization.
- Add website to use this example.

Reference:

https://developers.google.com/web/updates/2015/04/cut-and-copy-commands


license MIT.
