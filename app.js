(function () {
    //if the SWF file is hosted in different directory as ZeroClipboard.js, you need to set the URL
    //should do this when minify source code
    //ZeroClipboard.config( { swfPath: 'bower_components/zeroclipboard/dist/ZeroClipboard.swf' } );

    var copyEmailBtn = document.querySelector('.js-emailcopybtn');

    //Chrome bug: Calling queryCommandSupported() for cut or copy always returns false until after a user interaction.
    //use getChromeVersion to check if current browser is chrome and chrome version ? 43
    //use flash by default because jsCopy function may cause error
    if (isFlashInstalled()) {
        try {
            zeroCopy();
        } catch (e) {
            jsCopy()
        }

    } else if (!!document.queryCommandSupported('copy') || getChromeVersion() >= 43 || getFirefoxVersion() >= 41) {
        //select button element
        //TODO: use modernizr to detect flash
        //add copy click listener
        copyEmailBtn.addEventListener('click', jsCopy);
    } else {
        alert('Your browser need to update or have to install flash to use copy button');
    }
    /**
     * fallback function use flash
     */
    function zeroCopy() {
        //if there is error occur use zeroClipboard instead
        //currently we can not trigger click on element to make zeroClipboard work due to flash security

        //https://github.com/zeroclipboard/zeroclipboard/issues/109
        //https://github.com/zeroclipboard/zeroclipboard/pull/110
        //http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/system/System.html#setClipboard()
        var zeroClipboard = new ZeroClipboard(document.querySelector('.js-emailcopybtn'));
        zeroClipboard.on('copy', function (event) {
            console.log('use zeroClipboard');
            var clipboard = event.clipboardData;
            clipboard.setData('text/plain', document.querySelector('.js-emaillink').innerHTML);
        });
    }

    /**
     * js copy without flash
     */
    function jsCopy(/*event*/) {
        console.log('use javascript');
        // Select the email link anchor text
        var emailLink = document.querySelector('.js-emaillink');
        //The Range interface represents a fragment of a document that can contain nodes and parts of text nodes.
        var range = document.createRange();
        //The Range.selectNode() method sets the Range to contain the Node and its contents.
        //The parent Node of the start and end of the Range will be the same as the parent of the referenceNode.
        range.selectNode(emailLink);
        //use selection API select selected range
        var selection = window.getSelection();
        selection.addRange(range);

        try {
            //throw new Error('blah');
            // Now that we've selected the anchor text, execute the copy command
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copy email command was ' + msg);
        } catch (err) {
            alert('Copy have problem select text and copy manually');
        }

        // Remove the selections
        if (selection.removeRange && typeof selection.removeRange === 'function') {
            // removeRange(range) when it is supported
            selection.removeRange(range);
        } else {
            selection.removeAllRanges();
        }
        //known issue
        //if clipboard already have data, chrome show an error message 'Discontiguous selection is not supported'
        //BUT it work :)
    }

    /**
     * detect flash
     * @returns {boolean|*}
     */
    function isFlashInstalled() {
        var ie_flash;
        try {
            ie_flash = (window.ActiveXObject && (new ActiveXObject('ShockwaveFlash.ShockwaveFlash')) !== false)
        } catch (err) {
            ie_flash = false;
        }
        return ((typeof navigator.plugins != 'undefined' && typeof navigator.plugins['Shockwave Flash'] == 'object') || ie_flash);
    }

    /**
     * get chrome version
     * @returns {boolean|number} chrome version or false is current browser is not chrome
     */
    function getChromeVersion() {
        var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
        return raw ? parseInt(raw[2], 10) : false;
    }

    function getFirefoxVersion() {
        var raw = navigator.userAgent.match(/Firefox\/([0-9]+)\./);
        return raw ? parseInt(raw[1], 10) : false;
    }
})();