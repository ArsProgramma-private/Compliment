# ReadMe
Simple extensions that congratulates you on every save to honor your work.
Displays motivationals in the status bar

## Install
Just like any other VSCode extension.
Restart VSCode (just to be sure)

## Configure
Via user- or workspace settings:
  - **hideAfterMs** Time in milliseconds that the motivational is visible.

## Develop
For information on how to buld, test and publish this extension 
please have a look at ```vsc-extension-quickstart.md```

### Preperations
```npm i -g vsce```

### Test in Debug mode
Just start VSCode's debuger. That's basically it

### Install for local pre-publish-testing
  - ```npm run build:vsix```
  - ```Ctrl+P```, >Extensions: Install from VSIX...
  - Select the newly built package located at project-root
