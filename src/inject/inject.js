chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			console.log("WikiFocus loaded")
			document.getElementById("searchInput").focus();
		}
	}, 10);
});