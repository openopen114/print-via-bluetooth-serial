webpackJsonp([0],{

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_BlePrinterService__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_text_encoding_shim__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_text_encoding_shim___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_text_encoding_shim__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_codepage_cputils_js__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_codepage_cputils_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_codepage_cputils_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, bluetoothSerial, blePrinterService) {
        this.navCtrl = navCtrl;
        this.bluetoothSerial = bluetoothSerial;
        this.blePrinterService = blePrinterService;
        this.MACAddress = '88:6B:0F:97:C4:D9';
    }
    HomePage.prototype.list = function () {
        //88:6B:0F:97:C4:D9
        console.log('==> list');
        this.bluetoothSerial.list().then(function (res) {
            console.log('list res');
            console.log(res);
        });
    };
    HomePage.prototype.printToBLEPrinter = function () {
        console.log('==> printToBLEPrinter');
        // const printData:String = `!0 200 200 50 1
        //                     TEXT 4 0 10 10 Hello World
        //                     FORM
        //                     PRINT`
        //   ;
        var CHAR_ESC = '\u001b';
        var LINE_FEED = '\n';
        var CARRIAGE_RETURN = '\r';
        var data = CHAR_ESC + " ! 0 200 200 500 1 " + CARRIAGE_RETURN + " " + LINE_FEED + " \n                ENCODING BIG5   " + CARRIAGE_RETURN + " " + LINE_FEED + "\n                SETMAG 2 2\n                TEXT 0 0 10 10 ==> 22\u7E41\u9AD4\u4E2D\u6587\u8B9A\u8B9A\u8B9A\u7E41\u9AD4\u4E2D\u6587\u8B9A\u8B9A\u8B9A\u7E41\u9AD4\u4E2D\u6587\u8B9A\u8B9A\u8B9A " + CARRIAGE_RETURN + " " + LINE_FEED + "   \n                \n                SETMAG 4 4\n                TEXT 0 0 10 50 ==> 44\u7E41\u9AD4\u4E2D\u6587\u8B9A\u8B9A\u8B9A\u7E41\u9AD4\u4E2D\u6587\u8B9A\u8B9A\u8B9A\u7E41\u9AD4\u4E2D\u6587\u8B9A\u8B9A\u8B9A " + CARRIAGE_RETURN + " " + LINE_FEED + "   \n                \n                SETMAG 6 6\n                TEXT 0 0 10 100 ==> 66\u7E41\u9AD4\u4E2D\u6587\u8B9A\u8B9A\u8B9A\u7E41\u9AD4\u4E2D\u6587\u8B9A\u8B9A\u8B9A\u7E41\u9AD4\u4E2D\u6587\u8B9A\u8B9A\u8B9A " + CARRIAGE_RETURN + " " + LINE_FEED + "   \n                \n\n                SETMAG 8 8\n                TEXT 0 0 10 150 ==> 88\u7E41\u9AD4\u4E2D\u6587\u8B9A\u8B9A\u8B9A\u7E41\u9AD4\u4E2D\u6587\u8B9A\u8B9A\u8B9A\u7E41\u9AD4\u4E2D\u6587\u8B9A\u8B9A\u8B9A " + CARRIAGE_RETURN + " " + LINE_FEED + "   \n                \n                \n                SETMAG 10 10\n                TEXT 0 0 10 200 ==> 1010\u7E41\u9AD4\u4E2D\u6587\u8B9A\u8B9A\u8B9A\u7E41\u9AD4\u4E2D\u6587\u8B9A\u8B9A\u8B9A\u7E41\u9AD4\u4E2D\u6587\u8B9A\u8B9A\u8B9A " + CARRIAGE_RETURN + " " + LINE_FEED + "   \n\n                FORM  " + CARRIAGE_RETURN + " " + LINE_FEED + "\n                PRINT " + CARRIAGE_RETURN + " " + LINE_FEED + "\n \n    ";
        console.log('data');
        console.log(data);
        var uint8array = new __WEBPACK_IMPORTED_MODULE_4_text_encoding_shim__["TextEncoder"]('utf-8').encode(data);
        var string = new __WEBPACK_IMPORTED_MODULE_4_text_encoding_shim__["TextDecoder"]('utf-8').decode(uint8array);
        console.log('uint8array');
        console.log(uint8array);
        console.log('string');
        console.log(string);
        console.log(__WEBPACK_IMPORTED_MODULE_5_codepage_cputils_js__["utils"].encode(950, '中'));
        this.blePrinterService.testPrint(this.MACAddress, __WEBPACK_IMPORTED_MODULE_5_codepage_cputils_js__["utils"].encode(950, data));
    };
    HomePage.prototype.arrayPrint = function () {
        this.blePrinterService.testPrint(this.MACAddress, [228, 184, 173]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\App\Ionic\ble-print\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n \n\n<p>MACAddress: {{ MACAddress }}</p>\n <button ion-button (click)="list()">list</button>\n\n<button ion-button color="secondary" (click)="printToBLEPrinter()">printToBLEPrinter</button>\n\n<button ion-button color="danger" (click)="arrayPrint()">arrayPrint</button>\n\n<button ion-button color="light">Light</button>\n\n<button ion-button color="dark">Dark</button>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\App\Ionic\ble-print\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
            __WEBPACK_IMPORTED_MODULE_3__services_BlePrinterService__["a" /* BlePrinterService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlePrinterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_bluetooth_serial__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ServicesBlePrinterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BlePrinterService = /** @class */ (function () {
    function BlePrinterService(http, bluetoothSerial, alertCtrl) {
        this.http = http;
        this.bluetoothSerial = bluetoothSerial;
        this.alertCtrl = alertCtrl;
        console.log('Hello BlePrinterService Provider');
    }
    BlePrinterService.prototype.searchBt = function () {
        return this.bluetoothSerial.list();
    };
    BlePrinterService.prototype.connectBT = function (address) {
        return this.bluetoothSerial.connect(address);
    };
    BlePrinterService.prototype.testPrint = function (address, printData) {
        // let printData="Test hello this is a test \n\n\n\n Hello Test 123 123 123\n\n\n"
        var _this = this;
        var xyz = this.connectBT(address).subscribe(function (data) {
            _this.bluetoothSerial.write(printData).then(function (dataz) {
                console.log("WRITE SUCCESS", dataz);
                var mno = _this.alertCtrl.create({
                    title: "Print SUCCESS!",
                    buttons: ['Dismiss']
                });
                mno.present();
                xyz.unsubscribe();
            }, function (errx) {
                console.log("WRITE FAILED", errx);
                var mno = _this.alertCtrl.create({
                    title: "ERROR " + errx,
                    buttons: ['Dismiss']
                });
                mno.present();
            });
        }, function (err) {
            console.log("CONNECTION ERROR", err);
            var mno = _this.alertCtrl.create({
                title: "ERROR " + err,
                buttons: ['Dismiss']
            });
            mno.present();
        });
    };
    BlePrinterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], BlePrinterService);
    return BlePrinterService;
}());

//# sourceMappingURL=BlePrinterService.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_bluetooth_serial__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_BlePrinterService__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
                __WEBPACK_IMPORTED_MODULE_9__services_BlePrinterService__["a" /* BlePrinterService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\App\Ionic\ble-print\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\App\Ionic\ble-print\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map