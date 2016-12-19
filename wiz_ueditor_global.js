

function WizUEditorEditorTabclose(objHtmlDocument, objWizDocument) {
    //
    if (objWizDocument)
        return;
    //
    if (!objHtmlDocument)
        return;
    //
    try {
        if (objHtmlDocument.defaultView) {
            objHtmlDocument.defaultView.eval("if (onBeforeCloseTab_WizUEditor) onBeforeCloseTab_WizUEditor();");
        }
        else { // 4.5 objBrowser
            objHtmlDocument.ExecuteScript("if (onBeforeCloseTab_WizUEditor) onBeforeCloseTab_WizUEditor();", null);
        }
    }
    catch (err) {
    }
}

eventsTabClose.add(WizUEditorEditorTabclose);