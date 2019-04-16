var exec = require('cordova/exec');

function AMapLocation(){}

AMapLocation.prototype.getLocation = function(successCallback, errorCallback) {
	exec(successCallback, errorCallback, "AMapLocationPlugin", "getLocation", []);
}

module.exports = new AMapLocation();
