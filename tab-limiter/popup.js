document.addEventListener("DOMContentLoaded", function() {
    let input = document.getElementById("tabLimit");
    let saveBtn = document.getElementById("save");

    chrome.storage.sync.get(["tabLimit"], (result) => {
        if (result.tabLimit) {
            input.value = result.tabLimit;
        }
    });

    saveBtn.addEventListener("click", function() {
        chrome.storage.sync.set({ tabLimit: parseInt(input.value) });
    });
});
