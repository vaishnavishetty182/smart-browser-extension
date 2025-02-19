const MAX_TABS = 10; // Set your tab limit

chrome.tabs.onCreated.addListener(async (tab) => {
    let tabs = await chrome.tabs.query({});
    
    if (tabs.length > MAX_TABS) {
        chrome.tabs.remove(tab.id); // Close the newly opened tab
        alertUser(); // Notify user
    }
});

function alertUser() {
    chrome.notifications.create({
        type: "basic",
        iconUrl: "icon.png",
        title: "Tab Limit Exceeded",
        message: "You cannot open more than " + MAX_TABS + " tabs!"
    });
}
