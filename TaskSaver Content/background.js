function onRequest(request, sender, sendResponse){
	var tabId = sender.tab.id;
	chrome.browserAction.setBadgeText({
		'text': '' + request[0],
		'tabId': tabId
	});

	if ( request[0] < 9 ){
		chrome.browserAction.setBadgeBackgroundColor({
		'color': [255, 0, 0, 255],
		'tabId': tabId
		});
	} else if ( request[0] < 13 ) {
		chrome.browserAction.setBadgeBackgroundColor({
		'color': [212, 219, 9, 255],
		'tabId': tabId
		});
	} else {
		chrome.browserAction.setBadgeBackgroundColor({
		'color': [132, 229, 34, 255],
		'tabId': tabId
		});
	}
	
	_gaq.push(['_trackPageview', request[1]]);

};
	
chrome.extension.onRequest.addListener(onRequest);

chrome.browserAction.onClicked.addListener(function(tab) {

	chrome.tabs.executeScript(null, {file: "task.js"});
});

