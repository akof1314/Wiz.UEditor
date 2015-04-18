

function BaiduEditorOnTabclose(objHtmlDocument, objWizDocument) {
    //
    if (objWizDocument)
        return;
    //
    if (!objHtmlDocument)
        return;
    //
    try {
        objHtmlDocument.defaultView.eval("if (onBeforeCloseTab_BaiduEditor) onBeforeCloseTab_BaiduEditor();");
    }
    catch (err) {
    }

}

eventsTabClose.add(BaiduEditorOnTabclose);