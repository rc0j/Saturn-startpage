# Changelog

## [Version 7.81.1] - 
- Fix backgroud notification position.
- Fix a bug that caused the browser to become unresponsive when the username exceeded 20 characters.
- Remove debug `console.log` statements for shortcut key presses.
- Added a "Notification" when a shortcut is pressed. (Beta)
- Replace twitter.com -> x.com (shortcut changed to x)


## [Version 7.81.0] - 2025-04-01

- Fix `reset_button` button.
- Fix bug that would trigger shortcuts if a shortcut letter was present inside a input/field.
- Fix a very old Saturn bug that caused a delay of 10-15 seconds before time is updated.
- Fix settings background color when switching to light theme.
- Revert back to manifest.json `v2` to fix some weird bugs.
- Remove `content_security_policy` from manifest.json
- Added "96px" icon to manifest.json
- Add `fontawesome v5.14` support.
- Updated `html header`.
- Add a welcome modal.
- Instead of using a single index.js file for everything, several new files were created:
        - settings.js -> for everything setting related including sidebar js code etc..
        - time.js -> for everything related to username and time
        - keyboard.js (now named shortcut.js) -> for everything keyboard shortcut related.
        - background.js -> everything related to the background.

#### Shortcut: 
- Added "G" to open gitlab
