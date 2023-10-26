document.getElementById("callApiButton").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentTab = tabs[0];
    const domain = new URL(currentTab.url).hostname;

    // Display the domain name in the popup
    document.getElementById("domainDisplay").textContent = `Domain name : ${domain}`;

  });
});