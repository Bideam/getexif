function checkForValidUrl(tabId, changeInfo, tab) {
		chrome.pageAction.show(tabId);
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);


var exData={};
chrome.runtime.onMessage.addListener(function(request,sender,sendRequest){
	exData=request;

	sendRequest(exData.Make);

});
