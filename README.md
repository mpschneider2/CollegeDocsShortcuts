# Exactly what it sound like one should do to install, and the extension's purpose is self-explanatory.

_Note that for all the chrome:// links, you may need to type them into the URL bar manually._ Inspiration and snippets of code taken from <https://github.com/ZackMurry/docs-hotkey/tree/main?tab=readme-ov-file>.

First, download the Repo as a zip, then go to <chrome://extensions/> and enable "Developer Mode" on the top right.

Unzip the zip file in a place it can live forever, then, click "Load Unpacked" on the <chrome://extensions/> page and select the folder that came from the zip file.

Then, navigate to <chrome://extensions/shortcuts> and you can choose whichever shortcuts for the functions you want. You may need to reload the Google Doc for the shortcuts to begin taking effect.

It's pretty self explanatory, the shortcut will do whatever it says it will do... You're done!

## Extending Functionality: Using with Karabiner Elements

Can be used with a macro pad, StreamDeck, or reprogramming unused keys on your __regular keyboard__ using something like [Karabiner Elements](https://karabiner-elements.pqrs.org/).

Below is a sample of code for the "Complex Modifications" section of Karabiner Elements to remap the Spotlight button on a Mac keyboard to show the live word count in the corner of the screen in Google Docs (Because Option+Shift+E is mapped to that function at <chrome://extensions/shortcuts/>).

Other "conditions" can be added. Right now, only remaps IF Google Chrome is the active app, but can also do it on a keyboard-by-keyboard basis.

```
{
    "description": "Word Count Shortcut",
    "manipulators": [
        {
            "conditions": [
                {
                    "bundle_identifiers": [
                        "^com\\.google\\.Chrome$"
                    ],
                    "type": "frontmost_application_if"
                }
            ],
            "from": { "key_code": "f4" },
            "to": [
                {
                    "key_code": "e",
                    "modifiers": ["option", "shift"]
                }
            ],
            "type": "basic"
        }
    ]
}
```