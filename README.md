# nh-copy
A complete solution to copy text in browser.

It uses zeroClipboard by default to perform copy operation, if browser do not support flash use [execCommand] document.execCommand() instead.

#Test this example

```js
bower install
```
Open index.html

#Support browser
Using [zeroClipboard] and [document.execCommand()].
- IE9+
- Firefox 41+ (tested in Firefox 41, OS: ubuntu 14.04 64bit)
- Chrome 43+ (tested in Chrome 45, OS: ubuntu 14.04 64bit)

Using document.execCommand() only.
- IE9+
- Firefox 41+ (tested in Firefox 41, OS: ubuntu 14.04 64bit)
- Chrome 43+ (tested in Chrome 45, OS: ubuntu 14.04 64bit)

#How it works?
If flash is supported use zeroClipboard to perform copy operation.
else check if firefox 41+ or chrome 43+ using [document.execCommand()] and selection API instead.

#To do
- Make sure chrome and firefox version detect function always work properly.
- Support setting to use [document.execCommand()]  only.
- Format source code to easy further customization.
- Add website to use this example.

Reference:

* [cut-and-copy-commands]
* [document.execCommand()]

license MIT.


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does it's job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[cut-and-copy-commands]: <https://developers.google.com/web/updates/2015/04/cut-and-copy-commands>
[document.execCommand()]: <https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand>
[zeroClipboard]: <http://zeroclipboard.org/>
