
function pageData() {
    console.log('send page data back to popup');

    chrome.runtime.sendMessage({
        subject: 'popup:pageData',
        url: location.href,
        title: document.title,
        body: new XMLSerializer().serializeToString(document)
    }, null);
}


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('requested action in content script', request.suject);

    const callback = {
        'tab:pageData': pageData
    }[request.subject];

    if (callback) callback(request, sender, sendResponse);
    else console.log('no callback defined in content script for', request.suject);
})
