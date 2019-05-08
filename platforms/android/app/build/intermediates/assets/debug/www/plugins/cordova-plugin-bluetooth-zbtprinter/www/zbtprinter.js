cordova.define("cordova-plugin-bluetooth-zbtprinter.ZebraBluetoothPrinter", function(require, exports, module) {
var exec = require('cordova/exec');

exports.discoverPrinters = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ZebraBluetoothPrinter', 'discoverPrinters', []);
};

exports.printImage = function(base64, MACAddress, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ZebraBluetoothPrinter', 'printImage', [base64, MACAddress]);
};

exports.getPrinterName = function(MACAddress, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ZebraBluetoothPrinter', 'getPrinterName', [MACAddress]);
};



});
