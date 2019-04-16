var exec = require('cordova/exec');

function AMapLocationPlugin(){}

AMapLocationPlugin.prototype.getLocation = function(successCallback, errorCallback) {
	exec(successCallback, errorCallback, "AMapLocationPlugin", "getLocation", []);
}

module.exports = new AMapLocationPlugin();
