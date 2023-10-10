function doSomethingOldStyle(successCallback, failureCallback) {
	console.log("Go.");
	if (Math.random() > 0.5) {
		successCallback("Go");
	} else {
		failureCallback("Bad.");
	}
}

function successCallback(result) {
	console.log("Go " + result);
}

function failureCallback(error) {
	console.log("Go bad" + error);
}

doSomethingOldStyle(successCallback, failureCallback);