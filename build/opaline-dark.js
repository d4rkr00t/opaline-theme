let createTheme = require("./create-theme");

/**
 * Colors
 */

let mainBg = "#232323";
let accent = "#ffca38";
let accentText = "#292929";

/**
 * Creating theme
 */

createTheme({
  outputPath: "opaline-dark",
  name: "Opaline Dark",
  type: "dark",

  defaultColor: "#e0e0e0",
  languageKeyWordsColor: "#b0b0b0",
  functionColor: "#6cc193",
  literalColor: "#c39ac9",
  attentionColor: "#ff657a",

  uiColors: {
    "activityBarBadge.background": accent,
    "activityBarBadge.foreground": accentText,
    "activityBar.background": "#292929",
    "activityBar.foreground": "#b0b0b0",
    "activityBar.dropBackground": "#1e1f2bbf",
    "activityBar.inactiveForeground": "#535763", // TODO: replace

    "editor.background": mainBg,
    "editor.selectionBackground": "#e0e0e026",
    "editor.inactiveSelectionBackground": "#e0e0e00c",

    "editorGutter.background": mainBg,
    "editorGutter.modifiedBackground": accent,
    "editorGutter.addedBackground": "#bad761",
    "editorGutter.deletedBackground": "#ff657a",
    "editorLineNumber.foreground": "#b0b0b0",
    "editorLineNumber.activeForeground": "#e0e0e0",

    "editorGroup.emptyBackground": mainBg,
    "editorGroup.focusedEmptyBorder": mainBg,
    "editorGroup.border": mainBg,
    "editorGroup.dropBackground": mainBg,
    "editorGroupHeader.noTabsBackground": mainBg,
    "editorGroupHeader.tabsBackground": mainBg,
    "editorGroupHeader.tabsBorder": mainBg,
    "editorPane.background": mainBg,

    "scrollbar.shadow": "#292929",

    "sideBar.background": "#262626",
    "sideBar.dropBackground": "#e0e0e026",
    "sideBarTitle.foreground": "#e0e0e0",
    "sideBarSectionHeader.background": "#292929",
    "sideBarSectionHeader.foreground": "#b0b0b0",

    "statusBar.background": "#252525",
    "statusBar.foreground": "#e0e0e0",

    "badge.foreground": "#292929",
    "badge.background": accent,

    "list.activeSelectionBackground": "#2e2e2e",
    "list.activeSelectionForeground": accent,
    "list.dropBackground": "#2e2e2e",
    "list.errorForeground": "#ff657a",
    "list.focusBackground": "#2e2e2e",
    "list.focusForeground": accent,
    "list.highlightForeground": accent,
    "list.hoverBackground": "#2e2e2e",
    "list.hoverForeground": "#e0e0e0",
    "list.inactiveFocusBackground": "#2e2e2e",
    "list.inactiveSelectionBackground": "#2e2e2e",
    "list.inactiveSelectionForeground": "#e0e0e0",
    "list.invalidItemForeground": "#ff657a",
    "list.warningForeground": "#ff9b5e",
    "listFilterWidget.background": "#2e2e2e",
    "listFilterWidget.noMatchesOutline": "#ff657a",
    "listFilterWidget.outline": "#2e2e2e",

    "gitDecoration.modifiedResourceForeground": "#bad761",
    "gitDecoration.deletedResourceForeground": "#ff657a",
    "gitDecoration.untrackedResourceForeground": "#ff9b5e",
    "gitDecoration.ignoredResourceForeground": "#535763", // TODO: replace
    "gitDecoration.conflictingResourceForeground": "#ff9b5e",

    "titleBar.activeBackground": "#1f1f1f",
    "titleBar.activeForeground": "#b0b0b0",
    "titleBar.inactiveBackground": "#1f1f1f",
    "titleBar.inactiveForeground": "#b0b0b0",
    "titleBar.border": "#222",

    errorForeground: "#ff657a",

    // ------------------- WILD WEST

    focusBorder: "#696d77",
    foreground: "#eaf2f1",
    "widget.shadow": "#161821",
    "selection.background": "#b2b9bd26",
    descriptionForeground: "#888d94",
    "textBlockQuote.background": "#3a3d4b",
    "textBlockQuote.border": "#3a3d4b",
    "textCodeBlock.background": "#3a3d4b",
    "textLink.activeForeground": "#eaf2f1",
    "textLink.foreground": "#ffd76d",
    "textPreformat.foreground": "#eaf2f1",
    "textSeparator.foreground": "#696d77",
    "button.background": "#3a3d4b",
    "button.foreground": "#888d94",
    "button.hoverBackground": "#282a3a",
    "dropdown.background": "#282a3a",
    "dropdown.listBackground": "#3a3d4b",
    "dropdown.border": "#282a3a",
    "dropdown.foreground": "#888d94",
    "input.background": "#3a3d4b",
    "input.border": "#3a3d4b",
    "input.foreground": "#eaf2f1",
    "input.placeholderForeground": "#696d77",
    "inputOption.activeBackground": "#535763",
    "inputOption.activeBorder": "#535763",
    "inputValidation.errorBackground": "#3a3d4b",
    "inputValidation.errorForeground": "#ff657a",
    "inputValidation.errorBorder": "#ff657a",
    "inputValidation.infoBackground": "#3a3d4b",
    "inputValidation.infoForeground": "#9cd1bb",
    "inputValidation.infoBorder": "#9cd1bb",
    "inputValidation.warningBackground": "#3a3d4b",
    "inputValidation.warningForeground": "#ff9b5e",
    "inputValidation.warningBorder": "#ff9b5e",
    "scrollbarSlider.activeBackground": "#eaf2f112",
    "scrollbarSlider.background": "#eaf2f112",
    "scrollbarSlider.hoverBackground": "#eaf2f112",
    "progressBar.background": "#3a3d4b",

    "breadcrumb.foreground": "#888d94",
    "breadcrumb.focusForeground": "#b2b9bd",
    "breadcrumb.activeSelectionForeground": "#eaf2f1",

    "settings.headerForeground": "#ffd76d",
    "settings.dropdownBackground": "#3a3d4b",
    "settings.dropdownForeground": "#eaf2f1",
    "settings.dropdownBorder": "#3a3d4b",
    "settings.dropdownListBorder": "#888d94",
    "settings.modifiedItemIndicator": "#ffd76d",
    "settings.checkboxBackground": "#3a3d4b",
    "settings.checkboxForeground": "#eaf2f1",
    "settings.checkboxBorder": "#3a3d4b",
    "settings.textInputBackground": "#3a3d4b",
    "settings.textInputForeground": "#eaf2f1",
    "settings.textInputBorder": "#3a3d4b",
    "settings.numberInputBackground": "#3a3d4b",
    "settings.numberInputForeground": "#eaf2f1",
    "settings.numberInputBorder": "#3a3d4b",

    "tab.activeBackground": "#282a3a",
    "tab.activeForeground": "#ffd76d",
    "tab.border": "#282a3a",
    "tab.activeBorder": "#ffd76d",
    "tab.unfocusedActiveBorder": "#888d94",
    "tab.inactiveBackground": "#282a3a",
    "tab.inactiveForeground": "#888d94",
    "tab.unfocusedActiveForeground": "#b2b9bd",
    "tab.unfocusedInactiveForeground": "#888d94",
    "tab.hoverBackground": "#282a3a",
    "tab.unfocusedHoverBackground": "#282a3a",
    "tab.hoverBorder": "#535763",
    "tab.activeModifiedBorder": "#535763",
    "tab.inactiveModifiedBorder": "#535763",
    "tab.unfocusedActiveModifiedBorder": "#3a3d4b",
    "tab.unfocusedInactiveModifiedBorder": "#3a3d4b",

    "editor.foreground": "#eaf2f1",
    "editorCursor.background": "#282a3a",
    "editorCursor.foreground": "#eaf2f1",
    "editor.selectionBackground": "#b2b9bd26",
    "editor.inactiveSelectionBackground": "#eaf2f10c",
    "editor.selectionHighlightBackground": "#eaf2f126",
    "editor.selectionHighlightBorder": "#00000000",
    "editor.wordHighlightBackground": "#eaf2f126",
    "editor.wordHighlightBorder": "#00000000",
    "editor.wordHighlightStrongBackground": "#eaf2f126",
    "editor.wordHighlightStrongBorder": "#00000000",
    "editor.findMatchBackground": "#eaf2f126",
    "editor.findMatchBorder": "#ffd76d",
    "editor.findMatchHighlightBackground": "#eaf2f126",
    "editor.findMatchHighlightBorder": "#00000000",
    "editor.findRangeHighlightBackground": "#eaf2f10c",
    "editor.findRangeHighlightBorder": "#00000000",
    "editor.hoverHighlightBackground": "#eaf2f10c",
    "editor.lineHighlightBackground": "#eaf2f10c",
    "editor.lineHighlightBorder": "#00000000",
    "editorLink.activeForeground": "#9cd1bb",
    "editor.rangeHighlightBackground": "#3a3d4b",
    "editor.rangeHighlightBorder": "#3a3d4b",
    "editorWhitespace.foreground": "#535763",
    "editorIndentGuide.background": "#3a3d4b",
    "editorRuler.foreground": "#535763",
    "editorCodeLens.foreground": "#696d77",
    "editorBracketMatch.background": "#282a3a",
    "editorBracketMatch.border": "#696d77",
    "editorError.foreground": "#ff657a",
    "editorError.border": "#00000000",
    "editorWarning.foreground": "#ff9b5e",
    "editorWarning.border": "#00000000",
    "editorInfo.foreground": "#9cd1bb",
    "editorInfo.border": "#282a3a",
    "editorHint.foreground": "#c39ac9",
    "editorHint.border": "#282a3a",
    "diffEditor.insertedTextBackground": "#bad76119",
    "diffEditor.insertedTextBorder": "#00000000",
    "diffEditor.removedTextBackground": "#ff657a19",
    "diffEditor.removedTextBorder": "#00000000",
    "editorWidget.background": "#3a3d4b",
    "editorWidget.border": "#3a3d4b",
    "editorSuggestWidget.background": "#3a3d4b",
    "editorSuggestWidget.border": "#3a3d4b",
    "editorSuggestWidget.foreground": "#b2b9bd",
    "editorSuggestWidget.highlightForeground": "#eaf2f1",
    "editorSuggestWidget.selectedBackground": "#696d77",
    "editorHoverWidget.background": "#3a3d4b",
    "editorHoverWidget.border": "#282a3a",
    "debugExceptionWidget.background": "#3a3d4b",
    "debugExceptionWidget.border": "#282a3a",
    "editorMarkerNavigation.background": "#3a3d4b",
    "editorMarkerNavigationError.background": "#ff657a",
    "editorMarkerNavigationWarning.background": "#ff9b5e",
    "editorMarkerNavigationInfo.background": "#9cd1bb",
    "peekView.border": "#282a3a",
    "peekViewEditor.background": "#3a3d4b",
    "peekViewEditorGutter.background": "#3a3d4b",
    "peekViewEditor.matchHighlightBackground": "#535763",
    "peekViewResult.background": "#3a3d4b",
    "peekViewResult.fileForeground": "#888d94",
    "peekViewResult.lineForeground": "#888d94",
    "peekViewResult.matchHighlightBackground": "#535763",
    "peekViewResult.selectionBackground": "#3a3d4b",
    "peekViewResult.selectionForeground": "#eaf2f1",
    "peekViewTitle.background": "#3a3d4b",
    "peekViewTitleDescription.foreground": "#888d94",
    "peekViewTitleLabel.foreground": "#eaf2f1",
    "merge.currentHeaderBackground": "#ff657a26",
    "merge.currentContentBackground": "#ff657a19",
    "merge.incomingHeaderBackground": "#bad76126",
    "merge.incomingContentBackground": "#bad76119",
    "merge.border": "#282a3a",
    "merge.commonHeaderBackground": "#eaf2f126",
    "merge.commonContentBackground": "#eaf2f119",
    "editorOverviewRuler.border": "#282a3a",
    "editorOverviewRuler.currentContentForeground": "#3a3d4b",
    "editorOverviewRuler.incomingContentForeground": "#3a3d4b",
    "editorOverviewRuler.findMatchForeground": "#eaf2f126",
    "editorOverviewRuler.rangeHighlightForeground": "#eaf2f126",
    "editorOverviewRuler.selectionHighlightForeground": "#eaf2f126",
    "editorOverviewRuler.wordHighlightForeground": "#eaf2f126",
    "editorOverviewRuler.wordHighlightStrongForeground": "#eaf2f126",
    "editorOverviewRuler.modifiedForeground": "#ff9b5e",
    "editorOverviewRuler.addedForeground": "#bad761",
    "editorOverviewRuler.deletedForeground": "#ff657a",
    "editorOverviewRuler.errorForeground": "#ff657a",
    "editorOverviewRuler.warningForeground": "#ff9b5e",
    "editorOverviewRuler.infoForeground": "#9cd1bb",
    "panel.background": "#3a3d4b",
    "panel.border": "#282a3a",
    "panel.dropBackground": "#1e1f2bbf",
    "panelTitle.activeBorder": "#ffd76d",
    "panelTitle.activeForeground": "#ffd76d",
    "panelTitle.inactiveForeground": "#888d94",
    "statusBar.debuggingBackground": "#696d77",
    "statusBar.debuggingForeground": "#eaf2f1",
    "statusBar.debuggingBorder": "#1e1f2b",
    "statusBar.noFolderBackground": "#1e1f2b",
    "statusBar.noFolderForeground": "#696d77",
    "statusBar.noFolderBorder": "#161821",
    "statusBarItem.activeBackground": "#282a3a",
    "statusBarItem.hoverBackground": "#282a3a",
    "statusBarItem.prominentBackground": "#3a3d4b",
    "statusBarItem.prominentHoverBackground": "#3a3d4b",

    "notificationCenter.border": "#3a3d4b",
    "notificationCenterHeader.foreground": "#888d94",
    "notificationCenterHeader.background": "#3a3d4b",
    "notificationToast.border": "#3a3d4b",
    "notifications.foreground": "#b2b9bd",
    "notifications.background": "#3a3d4b",
    "notifications.border": "#3a3d4b",
    "notificationLink.foreground": "#ffd76d",
    "extensionButton.prominentForeground": "#eaf2f1",
    "extensionButton.prominentBackground": "#3a3d4b",
    "extensionButton.prominentHoverBackground": "#535763",
    "pickerGroup.border": "#282a3a",
    "pickerGroup.foreground": "#535763",
    "terminal.background": "#3a3d4b",
    "terminal.foreground": "#eaf2f1",
    "terminal.ansiBlack": "#3a3d4b",
    "terminal.ansiBlue": "#ff9b5e",
    "terminal.ansiBrightBlack": "#696d77",
    "terminal.ansiBrightBlue": "#ff9b5e",
    "terminal.ansiBrightCyan": "#9cd1bb",
    "terminal.ansiBrightGreen": "#bad761",
    "terminal.ansiBrightMagenta": "#c39ac9",
    "terminal.ansiBrightRed": "#ff657a",
    "terminal.ansiBrightWhite": "#eaf2f1",
    "terminal.ansiBrightYellow": "#ffd76d",
    "terminal.ansiCyan": "#9cd1bb",
    "terminal.ansiGreen": "#bad761",
    "terminal.ansiMagenta": "#c39ac9",
    "terminal.ansiRed": "#ff657a",
    "terminal.ansiWhite": "#eaf2f1",
    "terminal.ansiYellow": "#ffd76d",
    "terminal.selectionBackground": "#eaf2f126",
    "terminalCursor.background": "#00000000",
    "terminalCursor.foreground": "#eaf2f1",
    "debugToolBar.background": "#3a3d4b",
    "welcomePage.buttonBackground": "#3a3d4b",
    "welcomePage.buttonHoverBackground": "#535763",
    "walkThrough.embeddedEditorBackground": "#1e1f2b"
  }
});
