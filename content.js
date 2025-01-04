const clickEl = (el) => {
    el.dispatchEvent(new MouseEvent('mouseover', {
        bubbles: true,
        cancelable: true
    }));

    el.dispatchEvent(new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true
    }));

    el.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true
    }));

    el.dispatchEvent(new MouseEvent('mouseup', {
        bubbles: true,
        cancelable: true
    }));
}

function waitForElementAndClick(selector, callback) {
    var counter = 0
    const interval = setInterval(() => {

        if (counter == 1000) {
            clearInterval(interval)
        }

        const element = document.querySelector(selector);
        if (element) {
            clearInterval(interval);  // Stop checking once element is found
            callback(element);         // Run the callback with the element
        }
        counter += 1;
    }, 10);  // Check every 10ms
}

function waitForSpanAndClick(selector, callback) {
    var counter = 0
    const interval = setInterval(() => {

        if (counter == 1000) {
            clearInterval(interval)
        }

        const element = Array.from(document.querySelectorAll('span')).find(el => el.textContent.includes(selector));
        if (element) {
            clearInterval(interval);  // Stop checking once element is found
            callback(element);         // Run the callback with the element
        }
        counter += 1;
    }, 10);  // Check every 10ms
}

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {

    console.log(msg);
    if (msg.action == 'editing') {
        clickEl(document.querySelector("body > div.goog-menu.goog-menu-vertical.docs-material.goog-menu-noaccel.docs-toolbar-mode-switcher-menu.apps-menu-hide-mnemonics > div:nth-child(1)"));
        return true;
    } else if (msg.action == 'suggesting') {
        clickEl(document.querySelector("body > div.goog-menu.goog-menu-vertical.docs-material.goog-menu-noaccel.docs-toolbar-mode-switcher-menu.apps-menu-hide-mnemonics > div:nth-child(2)"));
        return true;
    } else if (msg.action == 'word_count') {
        //clickEl(document.querySelector("#\\:99"));
        waitForSpanAndClick('Word count', (el) => {clickEl(el)});

        // Wait for the "Word count" button and click it after it appears

        waitForElementAndClick("body > div.javascriptMaterialdesignGm3WizDialog-dialog.javascriptMaterialdesignGm3WizDialog-dialog--standard.javascriptMaterialdesignGm3WizDialog-dialog--use-old-tokens.javascriptMaterialdesignGm3WizDialog-dialog--open > div.javascriptMaterialdesignGm3WizDialog-dialog__container > div > div.javascriptMaterialdesignGm3WizDialog-dialog__content > div > div.documentMetricsDialogCheckboxRow > div > div > input", (el) => clickEl(el));


        // Wait for the dialog button to appear and click it

        waitForElementAndClick("body > div.javascriptMaterialdesignGm3WizDialog-dialog.javascriptMaterialdesignGm3WizDialog-dialog--standard.javascriptMaterialdesignGm3WizDialog-dialog--use-old-tokens.javascriptMaterialdesignGm3WizDialog-dialog--open > div.javascriptMaterialdesignGm3WizDialog-dialog__container > div > div.javascriptMaterialdesignGm3WizDialog-dialog__actions > div:nth-child(2) > button", (el) => clickEl(el));
        return true;
    } else if (msg.action == 'accept_all') {
        const span = Array.from(document.querySelectorAll('span')).find(el => el.textContent.includes('Preview "Accept all"'));
        if (span) {
            clickEl(span);
        } else {
            waitForSpanAndClick('Review suggested edits', (el) => {clickEl(el)});
            waitForSpanAndClick('Preview "Accept all"', (el) => clickEl(el));
        }
        return true;
    } else if (msg.action == 'show_suggested_edits') {
        const span = Array.from(document.querySelectorAll('span')).find(el => el.textContent.includes('Show suggested edits'));
        if (span) {
            clickEl(span);
        } else {
            waitForSpanAndClick('Review suggested edits', (el) => {clickEl(el)});
            waitForSpanAndClick('Show suggested edits', (el) => clickEl(el));
        }
        return true;
    }
});