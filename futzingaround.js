
//need to open the menu first. BUT try grabbing the element first, if it doesn't exist THEN do the menu stuff
const span = Array.from(document.querySelectorAll('span')).find(el => el.textContent.includes('Preview "Accept all"'));

//suggesting mode
clickEl(document.querySelector("body > div.goog-menu.goog-menu-vertical.docs-material.goog-menu-noaccel.docs-toolbar-mode-switcher-menu.apps-menu-hide-mnemonics > div:nth-child(2)"));

//editing mode
clickEl(document.querySelector("body > div.goog-menu.goog-menu-vertical.docs-material.goog-menu-noaccel.docs-toolbar-mode-switcher-menu.apps-menu-hide-mnemonics > div:nth-child(1)"));

// const el = span;

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


//word count dialogue
clickEl(document.querySelector("#\\:99"));
//word count button WHEN DIALOGUE OPEN
setTimeout(clickEl(document.querySelector("body > div.javascriptMaterialdesignGm3WizDialog-dialog.javascriptMaterialdesignGm3WizDialog-dialog--standard.javascriptMaterialdesignGm3WizDialog-dialog--use-old-tokens.javascriptMaterialdesignGm3WizDialog-dialog--open > div.javascriptMaterialdesignGm3WizDialog-dialog__container > div > div.javascriptMaterialdesignGm3WizDialog-dialog__content > div > div.documentMetricsDialogCheckboxRow > div > div > input")), 1000);

setTimeout(clickEl(document.querySelector("body > div.javascriptMaterialdesignGm3WizDialog-dialog.javascriptMaterialdesignGm3WizDialog-dialog--standard.javascriptMaterialdesignGm3WizDialog-dialog--use-old-tokens.javascriptMaterialdesignGm3WizDialog-dialog--open > div.javascriptMaterialdesignGm3WizDialog-dialog__container > div > div.javascriptMaterialdesignGm3WizDialog-dialog__actions > div:nth-child(2) > button")), 1000);
// done button


//FULL CODE TO SHOW WORD COUNT
function waitForElementAndClick(selector, callback) {
    const interval = setInterval(() => {
        const element = document.querySelector(selector);
        if (element) {
            clearInterval(interval);  // Stop checking once element is found
            callback(element);         // Run the callback with the element
        }
    }, 10);  // Check every 100ms
}

// Click the first element
clickEl(document.querySelector("#\\:99"));

// Wait for the "Word count" button and click it after it appears

waitForElementAndClick("body > div.javascriptMaterialdesignGm3WizDialog-dialog.javascriptMaterialdesignGm3WizDialog-dialog--standard.javascriptMaterialdesignGm3WizDialog-dialog--use-old-tokens.javascriptMaterialdesignGm3WizDialog-dialog--open > div.javascriptMaterialdesignGm3WizDialog-dialog__container > div > div.javascriptMaterialdesignGm3WizDialog-dialog__content > div > div.documentMetricsDialogCheckboxRow > div > div > input", (el) => clickEl(el));


// Wait for the dialog button to appear and click it

waitForElementAndClick("body > div.javascriptMaterialdesignGm3WizDialog-dialog.javascriptMaterialdesignGm3WizDialog-dialog--standard.javascriptMaterialdesignGm3WizDialog-dialog--use-old-tokens.javascriptMaterialdesignGm3WizDialog-dialog--open > div.javascriptMaterialdesignGm3WizDialog-dialog__container > div > div.javascriptMaterialdesignGm3WizDialog-dialog__actions > div:nth-child(2) > button", (el) => clickEl(el));

//don't know how to make it work with macro pad, but can definitely keybind to a shortcut with chrome extension and have it run this code...

//https://stackoverflow.com/questions/71007943/how-do-you-trigger-a-chrome-extension-via-a-keyboard-shortcut

//look up how to pass info from background to to content script (have done before, it was painful)

//do editing vs suggesting