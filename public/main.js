(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\n  font-size: large;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxpbmsge1xuICBmb250LXNpemU6IGxhcmdlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--\n<nav class=\"navbar navbar-expand-sm bg-light navbar-light fixed-top\" style=\"padding-left:50px;\">\n\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"./assets/images/art_palette.png\" alt=\"logo\" style=\"width:40px;\">\n  </a>\n\n\n  <ul class=\"navbar-nav \">\n    <li class=\"nav-item \" >\n      <a class=\"nav-link\" [routerLink]=\"['/welcome']\">Home</a>\n    </li>\n    <li class=\"nav-item  \">\n      <a class=\"nav-link\"  [routerLink]=\"['/products']\">Product List</a>\n    </li>\n  </ul>\n</nav>\n-->\n<h1 class=\"title\">Meraki Art - Buy Amazing Artwork</h1>\n<div class=\"nav-container\">\n<nav class=\"navbar navbar-expand-lg navbar-light bg-color\">\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" *ngIf=\"authenticationService?.isAuthenticated()\"><a class=\"nav-link\" routerLink=\"/app-friends-userprofile\" routerLinkActive=\"active\">My Profile</a></li>\n      <li class=\"nav-item\" *ngIf=\"authenticationService?.isAuthenticated()\"><a class=\"nav-link\" routerLink=\"/products\" routerLinkActive=\"active\">Art</a></li>\n      <li class=\"nav-item\" *ngIf=\"authenticationService?.isAuthenticated()\"><a class=\"nav-link\" routerLink=\"/pm-upload-art\" routerLinkActive=\"active\">Upload</a></li>\n      <li class=\"nav-item\" active *ngIf=\"!authenticationService?.isAuthenticated()\"><a class=\"nav-link\" routerLink=\"/app-friends-login\" routerLinkActive=\"active\">Login</a></li>\n      <li class=\"nav-item\" *ngIf=\"authenticationService?.isAuthenticated()\"><button type=\"button\" (click)='onLogout()' class=\"btn btn-info\">Logout</button></li>\n    </ul>\n  </div>\n</nav>\n</div>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.authenticationService = authService;
    }
    AppComponent.prototype.onLogout = function () {
        var _this = this;
        this.authService.signout().then(function () {
            _this.navigateToLogin();
        });
    };
    AppComponent.prototype.navigateToLogin = function () {
        this.router.navigateByUrl('/app-friends-login');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _services_authentication_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/authentication.guard */ "./src/app/services/authentication.guard.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _products_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products/product-list.component */ "./src/app/products/product-list.component.ts");
/* harmony import */ var _shared_star_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/star.component */ "./src/app/shared/star.component.ts");
/* harmony import */ var _home_welcome_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/welcome.component */ "./src/app/home/welcome.component.ts");
/* harmony import */ var _products_product_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./products/product-detail.component */ "./src/app/products/product-detail.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./authentication/authentication.module */ "./src/app/authentication/authentication.module.ts");
/* harmony import */ var _products_product_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./products/product.service */ "./src/app/products/product.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _products_product_upload_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./products/product-upload.component */ "./src/app/products/product-upload.component.ts");



























var APP_ID = 'PhotoSale';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _products_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"],
                _shared_star_component__WEBPACK_IMPORTED_MODULE_11__["StarComponent"],
                _products_product_detail_component__WEBPACK_IMPORTED_MODULE_13__["ProductDetailComponent"],
                _home_welcome_component__WEBPACK_IMPORTED_MODULE_12__["WelcomeComponent"],
                _products_product_upload_component__WEBPACK_IMPORTED_MODULE_26__["ProductUploadComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: APP_ID }),
                ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieModule"].forRoot(),
                _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_24__["HttpModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_20__["AuthenticationModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_18__["AppRouting"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_19__["UserModule"],
            ],
            providers: [
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuth"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_17__["AngularFireDatabase"],
                _products_product_service__WEBPACK_IMPORTED_MODULE_21__["ProductService"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_22__["AuthenticationService"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_25__["AngularFireStorage"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_23__["UserService"],
                _services_authentication_guard__WEBPACK_IMPORTED_MODULE_6__["AuthenticationGuard"],
                { provide: ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"], useClass: ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieBackendService"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: ROUTES, AppRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouting", function() { return AppRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/welcome.component */ "./src/app/home/welcome.component.ts");
/* harmony import */ var _products_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/product-list.component */ "./src/app/products/product-list.component.ts");
/* harmony import */ var _products_product_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/product-detail.component */ "./src/app/products/product-detail.component.ts");
/* harmony import */ var _services_authentication_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/authentication.guard */ "./src/app/services/authentication.guard.ts");
/* harmony import */ var _products_product_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/product-upload.component */ "./src/app/products/product-upload.component.ts");








var ROUTES = [
    { path: 'welcome', component: _home_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
    { path: 'products', component: _products_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_6__["AuthenticationGuard"]] },
    { path: 'pm-upload-art', component: _products_product_upload_component__WEBPACK_IMPORTED_MODULE_7__["ProductUploadComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_6__["AuthenticationGuard"]] },
    { path: 'products/:id', component: _products_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_6__["AuthenticationGuard"]] }
];
var AppRouting = /** @class */ (function () {
    function AppRouting() {
    }
    AppRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(ROUTES)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: [
                _services_authentication_guard__WEBPACK_IMPORTED_MODULE_6__["AuthenticationGuard"]
            ]
        })
    ], AppRouting);
    return AppRouting;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.routing */ "./src/app/authentication/authentication.routing.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_error_alert_error_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/error-alert/error-alert.component */ "./src/app/shared/error-alert/error-alert.component.ts");
/* harmony import */ var _utils_password_equal_validator_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/password-equal-validator.directive */ "./src/app/utils/password-equal-validator.directive.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _services_authentication_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/authentication.guard */ "./src/app/services/authentication.guard.ts");














/**
 * Authentication Module
 */
var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _authentication_routing__WEBPACK_IMPORTED_MODULE_2__["AuthenticationRouting"]
            ],
            declarations: [
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _shared_error_alert_error_alert_component__WEBPACK_IMPORTED_MODULE_8__["ErrorAlertComponent"],
                _utils_password_equal_validator_directive__WEBPACK_IMPORTED_MODULE_9__["PasswordEqualValidator"]
            ],
            providers: [
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuth"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabase"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
                _services_authentication_guard__WEBPACK_IMPORTED_MODULE_13__["AuthenticationGuard"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/authentication/authentication.routing.ts ***!
  \**********************************************************/
/*! exports provided: ROUTES, AuthenticationRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRouting", function() { return AuthenticationRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");





var ROUTES = [
    { path: 'app-friends-login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'app-friends-signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] }
];
/**
 * Authentication Routing Module
 */
var AuthenticationRouting = /** @class */ (function () {
    function AuthenticationRouting() {
    }
    AuthenticationRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AuthenticationRouting);
    return AuthenticationRouting;
}());



/***/ }),

/***/ "./src/app/authentication/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/authentication/login/login.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-left: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/authentication/login/login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/authentication/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3 container\">\r\n    <h2>Login</h2>\r\n\t<app-error-alert *ngIf=\"showError\" [errorMessage]=\"errorMessage\"></app-error-alert>\r\n    <form name=\"form\" (ngSubmit)=\"onLogin(loginFormData)\" #loginFormData='ngForm'>\r\n        <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"email\" (ngModel)=\"email\" #email=\"ngModel\"\r\n                   required\r\n                   pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\r\n                   id=\"email\"/>\r\n            <div [hidden]=\"email.valid || email.pristine\"\r\n                 class=\"alert alert-danger\">\r\n                <div [hidden]=\"!email.hasError('required')\">Email is required</div>\r\n                <div [hidden]=\"!email.hasError('pattern')\">Email format should be\r\n                    <small><b>codingchum@gmail.com</b></small>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" (ngModel)=\"password\" #password=\"ngModel\"\r\n                   required id=\"password\"/>\r\n            <div [hidden]=\"password.valid || password.pristine\"\r\n                 class=\"alert alert-danger\">\r\n                Password is required\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button type=\"submit\" id=\"login-btn\" class=\"btn btn-success\" [disabled]=\"!loginFormData.form.valid\">LOGIN</button>\r\n            <button routerLink=\"/app-friends-signup\" data-tag=\"signup-tag\" routerLinkActive=\"active\" class=\"btn btn-success\">\r\n                SIGNUP\r\n            </button>\r\n        </div>\r\n    </form>\r\n    <button type=\"button\" data-tag=\"password-reset-tag\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#password_reset\">Reset Password\r\n    </button>\r\n</div>\r\n<div id=\"password_reset\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <form name=\"form\" (ngSubmit)=\"onReset(resetFormData)\" #resetFormData='ngForm'>\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h4 class=\"modal-title\">Forgot Password?</h4>\r\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <p>Please enter your registered email to sent you the password reset instructions.</p>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"reset_email\">Email</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"email\" (ngModel)=\"email\" #email=\"ngModel\"\r\n                               required\r\n                               pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\r\n                               id=\"reset_email\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer form-group\">\r\n                    <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!resetFormData.form.valid\"\r\n                    >Reset\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__);






var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, authService, angularFireAuth) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.authService = authService;
        this.angularFireAuth = angularFireAuth;
        this.angularFireAuth.auth.onAuthStateChanged(function (user) {
            if (user) {
                console.log("on authentication:" + user.uid);
                _this.getUserInfo(user.uid);
            }
        });
    }
    LoginComponent.prototype.onLogin = function (loginFormData) {
        var _this = this;
        this.authService.login(loginFormData.value.email, loginFormData.value.password).then(function (user) {
            // Login user
            var uid = user.user.uid;
            console.log("on login:" + user.user);
            _this.getUserInfo(uid);
            //this.router.navigate(['/welcome']);
        }).catch(function (error) {
            _this.errorMessage = error.message;
            _this.showError = true;
        });
    };
    LoginComponent.prototype.onReset = function (resetFormData) {
        var _this = this;
        this.authService.resetPassword(resetFormData.value.email).then(function () {
            alert('Reset instruction sent to your mail');
        }).catch(function (error) {
            _this.errorMessage = error.message;
            _this.showError = true;
        });
    };
    LoginComponent.prototype.navigateToProcts = function () {
        this.router.navigateByUrl('/products');
    };
    LoginComponent.prototype.getUserInfo = function (uid) {
        var _this = this;
        this.userService.getUser(uid).subscribe(function (snapshot) {
            _this.user = snapshot;
            _this.userService.saveUser(_this.user);
            console.log("snap:");
            console.log(snapshot);
            _this.navigateToProcts();
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-friends-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/authentication/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/authentication/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/authentication/signup/signup.component.css":
/*!************************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    color:  #0000FF;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0dBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgY29sb3I6ICAjMDAwMEZGO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/authentication/signup/signup.component.html":
/*!*************************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n    <h2>Signup</h2>\r\n\t<app-error-alert *ngIf=\"showError\" [errorMessage]=\"errorMessage\"></app-error-alert>\r\n    <form name=\"form\" (ngSubmit)=\"onSignup(signupFormData)\" #signupFormData='ngForm'>\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Name</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"name\" (ngModel)=\"name\" #name=\"ngModel\" required id=\"name\"/>\r\n            <div [hidden]=\"name.valid || name.pristine\"\r\n                 class=\"alert alert-danger\">\r\n                Name is required\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"email\" (ngModel)=\"email\" #email=\"ngModel\"\r\n                   required\r\n                   pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\r\n                   id=\"email\"/>\r\n            <div [hidden]=\"email.valid || email.pristine\"\r\n                 class=\"alert alert-danger\">\r\n                <div [hidden]=\"!email.hasError('required')\">Email is required</div>\r\n                <div [hidden]=\"!email.hasError('pattern')\">Email format should be\r\n                    <small><b>codingchum@gmail.com</b></small>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" (ngModel)=\"password\" #password=\"ngModel\" required id=\"password\"/>\r\n            <div [hidden]=\"password.valid || password.pristine\"\r\n                 class=\"alert alert-danger\">\r\n                Password is required\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Retype Password</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"confirmPassword\"\r\n                   required\r\n                   passwordEqual=\"password\"\r\n                   (ngModel)=\"confirmPassword\" name=\"confirmPassword\"\r\n                   #confirmPassword=\"ngModel\">\r\n            <div [hidden]=\"confirmPassword.valid || confirmPassword.pristine\"\r\n                 class=\"alert alert-danger\">\r\n                Passwords did not match\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"mobile\">Mobile</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"mobile\" (ngModel)=\"mobile\" #mobile=\"ngModel\"\r\n                   required\r\n                   pattern=\"[0-9]*\"\r\n                   minlength=\"10\"\r\n                   maxlength=\"10\"\r\n                   id=\"mobile\"/>\r\n            <div [hidden]=\"mobile.valid || mobile.pristine\"\r\n                 class=\"alert alert-danger\">\r\n                <div [hidden]=\"!mobile.hasError('minlength')\">Mobile should be 10 digit</div>\r\n                <div [hidden]=\"!mobile.hasError('required')\">Mobile is required</div>\r\n                <div [hidden]=\"!mobile.hasError('pattern')\">Mobile number should be only numbers</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!signupFormData.form.valid\">SIGNUP</button>\r\n            <a [routerLink]=\"['/app-friends-login']\" class=\"btn btn-link\">CANCEL</a>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/authentication/signup/signup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.ts ***!
  \***********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user */ "./src/app/services/user.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, router, userService) {
        this.authService = authService;
        this.router = router;
        this.userService = userService;
    }
    SignupComponent.prototype.onSignup = function (signupFormData) {
        var _this = this;
        this.authService.signup(signupFormData.value.email, signupFormData.value.password).then(function (userInfo) {
            // Register the new user
            var user = new _services_user__WEBPACK_IMPORTED_MODULE_2__["User"](signupFormData.value.email, signupFormData.value.name, signupFormData.value.mobile, userInfo.user.uid, 0, '');
            console.log("UserInfo: " + userInfo.user.uid);
            _this.writeNewUser(user);
            _this.router.navigate(['/welcome']);
        }).catch(function (error) {
            _this.showError = true;
            _this.errorMessage = error.message;
        });
    };
    SignupComponent.prototype.writeNewUser = function (user) {
        this.userService.addUser(user);
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-friends-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/authentication/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/authentication/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/edit-dialog/edit-details.ts":
/*!*********************************************!*\
  !*** ./src/app/edit-dialog/edit-details.ts ***!
  \*********************************************/
/*! exports provided: EditType, EditDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditType", function() { return EditType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDetails", function() { return EditDetails; });
var EditType;
(function (EditType) {
    EditType[EditType["NAME"] = 0] = "NAME";
    EditType[EditType["EMAIL"] = 1] = "EMAIL";
    EditType[EditType["MOBILE"] = 2] = "MOBILE";
    EditType[EditType["PASSWORD"] = 3] = "PASSWORD";
})(EditType || (EditType = {}));
var EditDetails = /** @class */ (function () {
    function EditDetails(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    EditDetails.prototype.edit = function (editType, value) {
        switch (editType) {
            case EditType.NAME:
                this.editName(value);
                break;
            case EditType.EMAIL:
                this.editEmail(value);
                break;
            case EditType.MOBILE:
                this.editMobile(value);
                break;
            case EditType.PASSWORD:
                this.editPassword(value);
                break;
        }
    };
    EditDetails.prototype.editName = function (name) {
        var user = this.userService.getSavedUser().getValue();
        user.name = name;
        this.userService.updateName(user, name);
        alert('Name changed successfully');
    };
    EditDetails.prototype.editEmail = function (newEmail) {
        var _this = this;
        this.authService.changeEmail(newEmail).then(function () {
            var user = _this.userService.getSavedUser().getValue();
            user.email = newEmail;
            _this.userService.updateEmail(user, newEmail);
            alert('Email changed successfully');
        }).catch(function (error) {
            var errorMessage = error.message;
            alert(errorMessage);
        });
    };
    EditDetails.prototype.editMobile = function (mobile) {
        var user = this.userService.getSavedUser().getValue();
        user.mobile = mobile;
        this.userService.updateMobile(user, mobile);
        alert('Mobile changed successfully');
    };
    EditDetails.prototype.editPassword = function (value) {
        var newPassword = value;
        this.authService.changePassword(newPassword).then(function () {
            alert('Password changed successfully');
        }).catch(function (error) {
            var errorMessage = error.message;
            alert(errorMessage);
        });
    };
    return EditDetails;
}());



/***/ }),

/***/ "./src/app/edit-dialog/edit-dialog.component.html":
/*!********************************************************!*\
  !*** ./src/app/edit-dialog/edit-dialog.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isVisible\" class=\"modal fade in\" id=\"editModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <form name=\"form\" (ngSubmit)=\"onSubmit(editFormData)\" \r\n        #editFormData='ngForm'>\r\n        Hello\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-\r\n                    dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\">{{titleMessage}}</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <p>This will change your {{bodyTitle}}</p>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"editDetail\">{{bodyLabel}}\r\n                        </label>\r\n                        <input type=\"text\" class=\"form-control\" \r\n                        name=\"editValue\" (ngModel)=\"editValue\"\r\n                        id=\"editDetail\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer form-group\">\r\n                    <button type=\"submit\" class=\"btn btn-default\" \r\n                   [disabled]=\"!editFormData.form.valid\">\r\n                    Edit\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-default\" \r\n                    data-dismiss=\"modal\" \r\n                   (click)=\"hide()\">Close</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/edit-dialog/edit-dialog.component.ts":
/*!******************************************************!*\
  !*** ./src/app/edit-dialog/edit-dialog.component.ts ***!
  \******************************************************/
/*! exports provided: EditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialogComponent", function() { return EditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _edit_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-details */ "./src/app/edit-dialog/edit-details.ts");





var EditDialogComponent = /** @class */ (function () {
    function EditDialogComponent(authService, userService) {
        this.authService = authService;
        this.userService = userService;
        this.editDetails = new _edit_details__WEBPACK_IMPORTED_MODULE_4__["EditDetails"](authService, userService);
    }
    EditDialogComponent.prototype.setTitle = function (title) {
        this.titleMessage = title;
        console.log("In set Title" + this.titleMessage);
        return this;
    };
    EditDialogComponent.prototype.setBodyTitle = function (bodyTitle) {
        this.bodyTitle = bodyTitle;
        return this;
    };
    EditDialogComponent.prototype.setBodyLabel = function (bodyLabel) {
        this.bodyLabel = bodyLabel;
        return this;
    };
    EditDialogComponent.prototype.setEditType = function (editType) {
        this.editType = editType;
        return this;
    };
    EditDialogComponent.prototype.show = function () {
        this.isVisible = true;
        console.log(this.isVisible);
    };
    EditDialogComponent.prototype.hide = function () {
        this.isVisible = false;
    };
    EditDialogComponent.prototype.onSubmit = function (editFormData) {
        this.editDetails.edit(this.editType, editFormData.value.editValue);
    };
    EditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-dialog',
            template: __webpack_require__(/*! ./edit-dialog.component.html */ "./src/app/edit-dialog/edit-dialog.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], EditDialogComponent);
    return EditDialogComponent;
}());



/***/ }),

/***/ "./src/app/home/welcome.component.css":
/*!********************************************!*\
  !*** ./src/app/home/welcome.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".temp{\r\n  width:100%;\r\n  background-image: url(\"/assets/images/sunset-3689760_1920.jpeg\");\r\n  /* Full height */\r\n  height: 100%;\r\n   opacity: 1;\r\n   filter:blur(2px);\r\n   -webkit-filter: blur(2px);\r\n\r\n\r\n\r\n  /* Center and scale the image nicely */\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  }\r\n\r\n  .PageTitle{\r\n    \r\n    color: #17a2b8;\r\n    font-weight: bold;\r\n    border: 3px solid #17a2b8;\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    z-index: 2;\r\n    width: 60%;\r\n    padding: 60px;\r\n    text-align: center;\r\nborder-radius:10px;\r\n    font: 400 90px/1.3 'Oleo Script', Helvetica, sans-serif;\r\n    -webkit-text-decoration: double underline;\r\n            text-decoration: double underline;\r\n   /* background-color: rgb(0,0,0); /* Fallback color */\r\n    /*background-color: rgba(255,255,255, 0.5); /* Black w/opacity/see-through */\r\n    /*-webkit-text-decoration: hotpink double underline;\r\n  \r\n  -webkit-filter: drop-shadow(0px 3px 10px rgba(255,255,255,.8));\r\n       filter: drop-shadow(0px 0px 10px rgba(0,0,0,.8));*/\r\n  }\r\n\r\n  .gallery, .gallery1, .gallery2{\r\n    color: #117a8b;\r\n\r\n    border: 1px solid #17a2b8;\r\n    position: absolute;\r\n    top: 70%;\r\n\r\n    -webkit-transform: translate(-50%, -50%);\r\n\r\n            transform: translate(-50%, -50%);\r\n    z-index: 2;\r\n    width: 15%;\r\n    padding: 30px;\r\n    text-align: center;\r\n    border-radius:5px;\r\n   /* font: 100 50px/1.3 'Oleo Script', Helvetica, sans-serif;*/\r\n       /*background-color: rgb(0,0,0); /* Fallback color */\r\n   /* background-color: rgba(255, 255, 255, 0.4);  Black w/opacity/see-through */\r\n  /*  background-position: center; /* Center the image */\r\n  /*  background-repeat: no-repeat; /* Do not repeat the image */\r\n  /*  background-size: cover; /* Resize the background image to cover the entire container\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.59); */\r\n\r\n  }\r\n\r\n  .gallery1{\r\n    /*background-image: url(\"/assets/images/WhatsApp Image 2018-10-07 at 9.46.51 PM.jpeg\");*/\r\n    left: 25%;\r\n  }\r\n\r\n  .gallery{\r\n    /*background-image: url(\"/assets/images/WhatsApp Image 2018-09-11 at 5.29.31 PM.jpeg\");*/\r\n    left: 50%\r\n  }\r\n\r\n  .gallery2{\r\n    /*background-image: url(\"/assets/images/WhatsApp Image 2018-09-11 at 5.29.31 PM.jpeg\");*/\r\n    left: 75%\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsaUVBQWlFO0VBQ2pFLGlCQUFpQjtFQUNqQixhQUFhO0dBQ1osV0FBVztHQUNYLGlCQUFpQjtHQUNqQiwwQkFBMEI7Ozs7RUFJM0IsdUNBQXVDO0VBQ3ZDLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsdUJBQXVCO0dBQ3RCOztFQUVEOztJQUVFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlDQUFpQztZQUFqQyxpQ0FBaUM7SUFDakMsV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCLG1CQUFtQjtJQUNmLHdEQUF3RDtJQUN4RCwwQ0FBa0M7WUFBbEMsa0NBQWtDO0dBQ25DLHFEQUFxRDtJQUNwRCw2RUFBNkU7SUFDN0U7OzswREFHc0Q7R0FDdkQ7O0VBQ0Q7SUFDRSxlQUFlOztJQUVmLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsU0FBUzs7SUFFVCx5Q0FBaUM7O1lBQWpDLGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0dBQ25CLDZEQUE2RDtPQUN6RCxvREFBb0Q7R0FDeEQsOEVBQThFO0VBQy9FLHVEQUF1RDtFQUN2RCwrREFBK0Q7RUFDL0Q7b0ZBQ2tGOztHQUVqRjs7RUFHRDtJQUNFLHlGQUF5RjtJQUN6RixVQUFVO0dBQ1g7O0VBQ0Q7SUFDRSx5RkFBeUY7SUFDekYsU0FBUztHQUNWOztFQUNEO0lBQ0UseUZBQXlGO0lBQ3pGLFNBQVM7R0FDViIsImZpbGUiOiJzcmMvYXBwL2hvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlbXB7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9zdW5zZXQtMzY4OTc2MF8xOTIwLmpwZWdcIik7XHJcbiAgLyogRnVsbCBoZWlnaHQgKi9cclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgIG9wYWNpdHk6IDE7XHJcbiAgIGZpbHRlcjpibHVyKDJweCk7XHJcbiAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDJweCk7XHJcblxyXG5cclxuXHJcbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5QYWdlVGl0bGV7XHJcbiAgICBcclxuICAgIGNvbG9yOiAjMTdhMmI4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMTdhMmI4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgcGFkZGluZzogNjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgZm9udDogNDAwIDkwcHgvMS4zICdPbGVvIFNjcmlwdCcsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogZG91YmxlIHVuZGVybGluZTtcclxuICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwgMC41KTsgLyogQmxhY2sgdy9vcGFjaXR5L3NlZS10aHJvdWdoICovXHJcbiAgICAvKi13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiBob3RwaW5rIGRvdWJsZSB1bmRlcmxpbmU7XHJcbiAgXHJcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDBweCAzcHggMTBweCByZ2JhKDI1NSwyNTUsMjU1LC44KSk7XHJcbiAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTBweCByZ2JhKDAsMCwwLC44KSk7Ki9cclxuICB9XHJcbiAgLmdhbGxlcnksIC5nYWxsZXJ5MSwgLmdhbGxlcnkye1xyXG4gICAgY29sb3I6ICMxMTdhOGI7XHJcblxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE3YTJiODtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNzAlO1xyXG5cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgIC8qIGZvbnQ6IDEwMCA1MHB4LzEuMyAnT2xlbyBTY3JpcHQnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7Ki9cclxuICAgICAgIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpOyAgQmxhY2sgdy9vcGFjaXR5L3NlZS10aHJvdWdoICovXHJcbiAgLyogIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xyXG4gIC8qICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gIC8qICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXJcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC41OSk7ICovXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC5nYWxsZXJ5MXtcclxuICAgIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvV2hhdHNBcHAgSW1hZ2UgMjAxOC0xMC0wNyBhdCA5LjQ2LjUxIFBNLmpwZWdcIik7Ki9cclxuICAgIGxlZnQ6IDI1JTtcclxuICB9XHJcbiAgLmdhbGxlcnl7XHJcbiAgICAvKmJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL1doYXRzQXBwIEltYWdlIDIwMTgtMDktMTEgYXQgNS4yOS4zMSBQTS5qcGVnXCIpOyovXHJcbiAgICBsZWZ0OiA1MCVcclxuICB9XHJcbiAgLmdhbGxlcnkye1xyXG4gICAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9XaGF0c0FwcCBJbWFnZSAyMDE4LTA5LTExIGF0IDUuMjkuMzEgUE0uanBlZ1wiKTsqL1xyXG4gICAgbGVmdDogNzUlXHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/welcome.component.html":
/*!*********************************************!*\
  !*** ./src/app/home/welcome.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"container-fluid\" style=\"width:100% !important; height: 100%; margin:0! padding-top:60px;\">\n      <div class=\"row temp\"  >  </div>\n        <div class=\" pageDiv\">\n           <a  [routerLink]=\"['/welcome']\"><h1 class=\"PageTitle\">{{pageTitle}}</h1></a>\n         </div>\n        <div class=\"row\">\n          <a  [routerLink]=\"['/about']\">\n            <h1 class=\"gallery1\">About</h1>\n          </a>\n           <a  [routerLink]=\"['/products']\">\n              <h1 class=\"gallery \" >Gallery</h1>\n            </a>\n\n\n            <a  [routerLink]=\"['/contact']\">\n              <h1 class=\"gallery2\">Contact</h1>\n            </a>\n      </div>\n"

/***/ }),

/***/ "./src/app/home/welcome.component.ts":
/*!*******************************************!*\
  !*** ./src/app/home/welcome.component.ts ***!
  \*******************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
        this.pageTitle = '~ Meraki Art ~';
    }
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/home/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/home/welcome.component.css")]
        })
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/products/product-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/products/product-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/products/product-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/products/product-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='card'\n     *ngIf='product'>\n  <div class='card-header'>\n    {{pageTitle + ': ' + product.productName}}\n  </div>\n\n  <div class='card-body'>\n    <div class='row'>\n      <div class='col-md-8'>\n        <div class='row'>\n          <div class='col-md-4'>Name:</div>\n          <div class='col-md-8'>{{product.productName}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-4'>Description:</div>\n          <div class='col-md-8'>{{product.description}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-4'>Availability:</div>\n          <div class='col-md-8'>{{product.releaseDate}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-4'>Price:</div>\n          <div class='col-md-8'>{{product.price|currency:'USD':'symbol'}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-4'>5 Star Rating:</div>\n          <div class='col-md-8'>\n            <pm-star [rating]='product.starRating'>\n            </pm-star>\n          </div>\n        </div>\n      </div>\n\n      <div class='col-md-4'>\n        <img class='center-block img-responsive'\n             [src]='product.imageUrl'\n             [style.width.px]='250'\n             [style.margin.px]='2'\n             [title]='product.productName'>\n      </div>\n    </div>\n  </div>\n\n  <div class='card-footer'>\n    <button class='btn btn-outline-secondary'\n            (click)='onBack()'\n            style='width:80px'>\n      <i class='fa fa-chevron-left'></i> Back\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/product-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/products/product-detail.component.ts ***!
  \******************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");




var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, router, productService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.pageTitle = 'Product Detail';
        this.errorMessage = '';
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var param = this.route.snapshot.paramMap.get('id');
        if (param) {
            var id = +param;
            this.getProduct(id);
        }
    };
    ProductDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
    };
    ProductDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/products']);
    };
    ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/products/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/products/product-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/products/product-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/products/product-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\r\n  width:100%;\r\n  background-image: url(\"/assets/images/WhatsApp Image 2018-10-18 at 8.06.03 PM (3).jpeg\");\r\n  /* Full height */\r\n  height: 100%;\r\n  min-height: 200px;\r\n   opacity: 1;\r\n   filter:blur(2px);\r\n   -webkit-filter: blur(2px);\r\n  /* Center and scale the image nicely */\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n.productPageTitle {\r\n  color: white;\r\n  font-weight: bold;\r\n\r\n  position: absolute;\r\n  top: 18%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  z-index: 2;\r\n  width: 60%;\r\n  padding: 40px;\r\n  text-align: center;\r\n  font: 400 90px/1.3 'Oleo Script', Helvetica, sans-serif;\r\n  -webkit-text-decoration: hotpink double underline;\r\ntext-decoration: double underline;\r\n\r\n}\r\n.card{\r\n  height: auto;\r\n  margin: 7% 2% !important;\r\n}\r\n.imgClass{\r\n  height: 550px;;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gseUZBQXlGO0VBQ3pGLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0dBQ2pCLFdBQVc7R0FDWCxpQkFBaUI7R0FDakIsMEJBQTBCO0VBQzNCLHVDQUF1QztFQUN2Qyw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjs7RUFFbEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUNBQWlDO1VBQWpDLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsd0RBQXdEO0VBQ3hELGtEQUFrRDtBQUNwRCxrQ0FBa0M7O0NBRWpDO0FBRUQ7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0NBQzFCO0FBRUQ7RUFDRSxjQUFjO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb257XHJcbiAgd2lkdGg6MTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9XaGF0c0FwcCBJbWFnZSAyMDE4LTEwLTE4IGF0IDguMDYuMDMgUE0gKDMpLmpwZWdcIik7XHJcbiAgLyogRnVsbCBoZWlnaHQgKi9cclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgIG9wYWNpdHk6IDE7XHJcbiAgIGZpbHRlcjpibHVyKDJweCk7XHJcbiAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDJweCk7XHJcbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4ucHJvZHVjdFBhZ2VUaXRsZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxOCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250OiA0MDAgOTBweC8xLjMgJ09sZW8gU2NyaXB0JywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiBob3RwaW5rIGRvdWJsZSB1bmRlcmxpbmU7XHJcbnRleHQtZGVjb3JhdGlvbjogZG91YmxlIHVuZGVybGluZTtcclxuXHJcbn1cclxuXHJcbi5jYXJke1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDclIDIlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbWdDbGFzc3tcclxuICBoZWlnaHQ6IDU1MHB4OztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/products/product-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/products/product-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"jumbotron\"></div>\r\n  <div class=\"productPageTitle\">\r\n    <h1>~ Meraki Art ~</h1>\r\n\r\n</div>\r\n<div class=\"form-group\">\r\n  <label for=\"usr\">Search:</label>\r\n  <input type=\"text\" class=\"form-control\" id=\"usr\"\r\n        [(ngModel)]='listFilter'>\r\n</div>\r\n\r\n\r\n<div class=\"row\" *ngIf='products && products.length'>\r\n<!-- <table class=\"table table-dark table-hover\"\r\n        *ngIf='products && products.length'>\r\n    <thead>\r\n       <tr>\r\n        <th>Art</th>\r\n        <th>Product Name</th>\r\n        <th>Description</th>\r\n        <th>Rating</th>\r\n        <th>\r\n          <button  type=\"button\" class=\"btn btn-dark\"(click)='togglePrice()'>\r\n            {{showPrice ? 'Hide' : 'Show'}} Price\r\n          </button>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody> -->\r\n        <div class=\"card col-sm-3\" style=\"width:400px\"\r\n        *ngFor='let product of filterproducts'\r\n        [routerLink]=\"['/products',product.productId]\">\r\n        <div class=\"imgClass\">\r\n            <img class=\"card-img-top\"\r\n            [src]='product.imageUrl'\r\n            style=\"width:100%; height: 500px;\">\r\n        </div>\r\n            <div class=\"card-body\">\r\n              <h4 class=\"card-title\">{{product.productName}}</h4>\r\n              <p class=\"card-text\">{{product.description}}</p>\r\n              <p><pm-star [rating]='product.starRating'></pm-star></p>\r\n              <br>\r\n              <span >{{product.price | currency :'USD':'symbol':'1.2-2'}}</span>\r\n              <a href=\"#\" class=\"btn btn-primary\">See Profile</a>\r\n            </div>\r\n          </div>\r\n            <!--  <tr *ngFor='let product of filterproducts'[routerLink]=\"['/products',product.productId]\">\r\n        <td><img\r\n          [src]='product.imageUrl'\r\n          [style.width.px]='imagewidth'\r\n          [style.margin.px]='imagemargin'></td>\r\n        <td>{{product.productName}}</td>\r\n        <td>{{product.description}}</td>\r\n        <td><pm-star [rating]='product.starRating'></pm-star></td>\r\n        <td>\r\n          <span >{{product.price | currency :'USD':'symbol':'1.2-2'}}</span>\r\n        </td>\r\n\r\n      </tr>\r\n    </tbody>\r\n  </table> -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/products/product-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/products/product-list.component.ts ***!
  \****************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");



var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService) {
        this.productService = productService;
        this.title = 'Art List';
        this.imagewidth = 100;
        this.imagemargin = 2;
        this.showPrice = false;
        this.products = [];
    }
    Object.defineProperty(ProductListComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            this.filterproducts = this.listFilter ? this.performeFilter(this.listFilter) : this.products;
        },
        enumerable: true,
        configurable: true
    });
    ProductListComponent.prototype.togglePrice = function () {
        this.showPrice = !this.showPrice;
    };
    ProductListComponent.prototype.performeFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(function (product) {
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (products) {
            _this.products = products;
            _this.filterproducts = _this.products;
        }, function (error) { return _this.errorMessage = error; });
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/products/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/products/product-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/products/product-upload.component.html":
/*!********************************************************!*\
  !*** ./src/app/products/product-upload.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"form-group\">\r\n    <label for=\"Art\">Art</label>\r\n    <input (change)=\"onArtEdit($event)\" required accept=\".jpg\"\r\n    type=\"file\" class=\"form-control-file\" id=\"Art\" >\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/products/product-upload.component.ts":
/*!******************************************************!*\
  !*** ./src/app/products/product-upload.component.ts ***!
  \******************************************************/
/*! exports provided: ProductUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductUploadComponent", function() { return ProductUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");



var ProductUploadComponent = /** @class */ (function () {
    function ProductUploadComponent(productService) {
        this.productService = productService;
    }
    ProductUploadComponent.prototype.onArtEdit = function (event) {
        var selectedFiles = event.target.files;
        var file = selectedFiles.item(0);
        this.productService.addArtImage(file);
    };
    ProductUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-upload-art',
            template: __webpack_require__(/*! ./product-upload.component.html */ "./src/app/products/product-upload.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductUploadComponent);
    return ProductUploadComponent;
}());



/***/ }),

/***/ "./src/app/products/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/products/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__);






var ProductService = /** @class */ (function () {
    function ProductService(http, afStorage) {
        this.http = http;
        this.afStorage = afStorage;
        this.productUrl = 'api/products/products.json';
        this.basePath = '/art';
        this.fbStorage = afStorage;
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.productUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ProductService.prototype.getProduct = function (id) {
        return this.getProducts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (products) { return products.find(function (p) { return p.productId === id; }); }));
    };
    ProductService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    ProductService.prototype.addArtImage = function (file) {
        this.fbStorage.ref(this.basePath + "/" + file.name).put(file).then(function (snapshot) {
            snapshot.ref.getDownloadURL().then((function (downloadURL) {
                console.log("User Servicce Dowload Url: ");
                console.log(downloadURL);
                /* this.fireDb.object(`${USERS_CHILD}/${user.uid}`).update({image: downloadURL});
                user.image = downloadURL;
                this.saveUser(user); */
            })).catch(function (error) { return alert(error); });
            //ref.getDownloadURL().then((downloadURL) => console.log(downloadURL));
        }).catch(function (error) {
            var errorMessage = error.message;
            alert(errorMessage);
        });
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/authentication.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/services/authentication.guard.ts ***!
  \**************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");




var AuthenticationGuard = /** @class */ (function () {
    function AuthenticationGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthenticationGuard.prototype.canActivate = function (route, state) {
        var isLoggedIn = this.authService.isAuthenticated();
        if (!isLoggedIn) {
            this.router.navigateByUrl('/app-friends-login');
        }
        return isLoggedIn;
    };
    AuthenticationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Authentication service
 *
 */
var AuthenticationService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {AngularFireAuth} angularFireAuth provides the functionality related to authentication
     */
    function AuthenticationService(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    AuthenticationService.prototype.signup = function (email, password) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthenticationService.prototype.login = function (email, password) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthenticationService.prototype.resetPassword = function (email) {
        return this.angularFireAuth.auth.sendPasswordResetEmail(email);
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        var user = this.angularFireAuth.auth.currentUser;
        return user ? true : false;
    };
    AuthenticationService.prototype.signout = function () {
        return this.angularFireAuth.auth.signOut();
    };
    AuthenticationService.prototype.changeEmail = function (email) {
        return this.angularFireAuth.auth.currentUser.updateEmail(email);
    };
    AuthenticationService.prototype.changePassword = function (password) {
        return this.angularFireAuth.auth.currentUser.updatePassword(password);
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/database-constants.ts":
/*!************************************************!*\
  !*** ./src/app/services/database-constants.ts ***!
  \************************************************/
/*! exports provided: USERS_CHILD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS_CHILD", function() { return USERS_CHILD; });
var USERS_CHILD = '/users';


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var _database_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./database-constants */ "./src/app/services/database-constants.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







/**
 * User service
 *
 */
var UserService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {AngularFireDatabase} fireDb provides the functionality for Firebase Database
     */
    function UserService(fireDb, afStorage) {
        this.fireDb = fireDb;
        this.afStorage = afStorage;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.basePath = '/profile';
        this.fbStorage = afStorage;
    }
    UserService.prototype.addUser = function (user) {
        this.fireDb.object(_database_constants__WEBPACK_IMPORTED_MODULE_5__["USERS_CHILD"] + "/" + user.uid).set(user);
        this.saveUser(user);
    };
    UserService.prototype.getUser = function (uid) {
        console.log("get user service: " + uid);
        return this.fireDb.object(_database_constants__WEBPACK_IMPORTED_MODULE_5__["USERS_CHILD"] + "/" + uid).valueChanges();
    };
    UserService.prototype.saveUser = function (user) {
        this.subject.next(user);
    };
    UserService.prototype.getSavedUser = function () {
        return this.subject;
    };
    UserService.prototype.updateEmail = function (user, newEmail) {
        this.fireDb.object(_database_constants__WEBPACK_IMPORTED_MODULE_5__["USERS_CHILD"] + "/" + user.uid).update({ email: newEmail });
        this.saveUser(user);
    };
    UserService.prototype.updateMobile = function (user, mobile) {
        this.fireDb.object(_database_constants__WEBPACK_IMPORTED_MODULE_5__["USERS_CHILD"] + "/" + user.uid).update({ mobile: mobile });
        this.saveUser(user);
    };
    UserService.prototype.updateName = function (user, name) {
        this.fireDb.object(_database_constants__WEBPACK_IMPORTED_MODULE_5__["USERS_CHILD"] + "/" + user.uid).update({ name: name });
        this.saveUser(user);
    };
    UserService.prototype.addProfileImage = function (user, file) {
        var _this = this;
        this.fbStorage.ref(this.basePath + "/" + file.name).put(file).then(function (snapshot) {
            snapshot.ref.getDownloadURL().then((function (downloadURL) {
                console.log("User Servicce Dowload Url: ");
                console.log(downloadURL);
                _this.fireDb.object(_database_constants__WEBPACK_IMPORTED_MODULE_5__["USERS_CHILD"] + "/" + user.uid).update({ image: downloadURL });
                user.image = downloadURL;
                _this.saveUser(user);
            })).catch(function (error) { return alert(error); });
            //ref.getDownloadURL().then((downloadURL) => console.log(downloadURL));
        }).catch(function (error) {
            var errorMessage = error.message;
            alert(errorMessage);
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/user.ts":
/*!**********************************!*\
  !*** ./src/app/services/user.ts ***!
  \**********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(email, name, mobile, uid, friendcount, image) {
        this.email = email;
        this.name = name;
        this.mobile = mobile;
        this.uid = uid;
        this.friendcount = friendcount;
        this.image = image;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/shared/error-alert/error-alert.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/error-alert/error-alert.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-alert-container {\r\n    margin-top: 24px;\r\n    margin-bottom: 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Vycm9yLWFsZXJ0L2Vycm9yLWFsZXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Vycm9yLWFsZXJ0L2Vycm9yLWFsZXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItYWxlcnQtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/error-alert/error-alert.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/error-alert/error-alert.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-alert-container\">\r\n        <div class=\"alert alert-danger fade show\" role=\"alert\">\r\n            {{errorMessage}}\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/shared/error-alert/error-alert.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/error-alert/error-alert.component.ts ***!
  \*************************************************************/
/*! exports provided: ErrorAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorAlertComponent", function() { return ErrorAlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorAlertComponent = /** @class */ (function () {
    function ErrorAlertComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ErrorAlertComponent.prototype, "errorMessage", void 0);
    ErrorAlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-alert',
            template: __webpack_require__(/*! ./error-alert.component.html */ "./src/app/shared/error-alert/error-alert.component.html"),
            styles: [__webpack_require__(/*! ./error-alert.component.css */ "./src/app/shared/error-alert/error-alert.component.css")]
        })
    ], ErrorAlertComponent);
    return ErrorAlertComponent;
}());



/***/ }),

/***/ "./src/app/shared/star.component.css":
/*!*******************************************!*\
  !*** ./src/app/shared/star.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\n  overflow: hidden;\n}\ndiv {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0YXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3N0YXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcm9wIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmRpdiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/star.component.html":
/*!********************************************!*\
  !*** ./src/app/shared/star.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\"\n     [style.width.px]=\"starWidth\"\n     [title]=\"rating\">\n  <div style=\"width: 75px\">\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/star.component.ts":
/*!******************************************!*\
  !*** ./src/app/shared/star.component.ts ***!
  \******************************************/
/*! exports provided: StarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarComponent", function() { return StarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StarComponent = /** @class */ (function () {
    function StarComponent() {
    }
    StarComponent.prototype.ngOnChanges = function () {
        this.starWidth = this.rating * 75 / 5;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], StarComponent.prototype, "rating", void 0);
    StarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-star',
            template: __webpack_require__(/*! ./star.component.html */ "./src/app/shared/star.component.html"),
            styles: [__webpack_require__(/*! ./star.component.css */ "./src/app/shared/star.component.css")]
        })
    ], StarComponent);
    return StarComponent;
}());



/***/ }),

/***/ "./src/app/user/user-profile/user-profile.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/user-profile/user-profile.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-profile\" *ngIf=\"user\">\r\n  <div class=\"person-icon\">\r\n    <img [src]=\"profileImage\" style=\"max-width: 100%; max-height:\r\n     100%;\">\r\n    <input (change)=\"onPersonEdit($event)\" required accept=\".jpg\"\r\n     type=\"file\" style=\"opacity: 0.0; position: absolute; top:120px;\r\n     left: 30px; bottom: 0; right:0; width: 200px; height:200px;\" />\r\n  </div>\r\n    <div class=\"user-profile-name\">\r\n        <label>Name: </label>\r\n        <div class=\"user-profile-name-value\">{{user?.name}}</div>\r\n        <button (click)=\"onNameChange()\" data-toggle=\"modal\" data-target=\"#editModal\"\r\n                class=\"btn btn-default btn-sm user-profile-name-btn\">\r\n            Edit\r\n        </button>\r\n    </div>\r\n    <div class=\"user-profile-email\">\r\n        <label>Email: </label>\r\n        <div class=\"user-profile-email-value\">{{user?.email}}</div>\r\n        <button (click)=\"onEmailChange()\" data-toggle=\"modal\" data-target=\"#editModal\" type=\"button\"\r\n                class=\"btn btn-default btn-sm\">\r\n            Edit\r\n        </button>\r\n    </div>\r\n    <div class=\"user-profile-mobile\">\r\n        <label>Mobile: </label>\r\n        <div class=\"user-profile-mobile-value\">{{user?.mobile}}</div>\r\n        <button (click)=\"onMobileChange()\" data-toggle=\"modal\" data-target=\"#editModal\" type=\"button\"\r\n                class=\"btn btn-default btn-sm user-profile-mobile-btn\">\r\n            Edit\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"user-profile-password\">\r\n        <label>Password: </label>\r\n        <div class=\"user-profile-password-value\">****</div>\r\n        <button (click)=\"onPasswordChange()\" data-toggle=\"modal\" data-target=\"#editModal\" type=\"button\"\r\n                class=\"btn btn-default btn-sm user-profile-password-btn\">\r\n            Edit\r\n        </button>\r\n    </div>\r\n\r\n</div>\r\n<app-edit-dialog></app-edit-dialog>\r\n"

/***/ }),

/***/ "./src/app/user/user-profile/user-profile.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/user/user-profile/user-profile.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-profile {\n  width: 50%;\n  margin-left: 24px;\n  margin-top: 10px; }\n  .user-profile .person-icon {\n    width: 200px;\n    height: 200px; }\n  .user-profile .user-profile-name {\n    text-align: left;\n    margin-top: 10px; }\n  .user-profile .user-profile-name .user-profile-name-value {\n      display: inline-block;\n      margin-left: 10px; }\n  .user-profile .user-profile-name .user-profile-name-btn {\n      margin-left: 100px; }\n  .user-profile .user-profile-email {\n    text-align: left;\n    margin-top: 20px; }\n  .user-profile .user-profile-email .user-profile-email-value {\n      display: inline-block;\n      margin-left: 10px; }\n  .user-profile .user-profile-mobile {\n    text-align: left;\n    margin-top: 20px; }\n  .user-profile .user-profile-mobile .user-profile-mobile-value {\n      display: inline-block;\n      margin-left: 10px; }\n  .user-profile .user-profile-mobile .user-profile-mobile-btn {\n      margin-left: 110px; }\n  .user-profile .user-profile-password {\n    text-align: left;\n    margin-top: 20px; }\n  .user-profile .user-profile-password .user-profile-password-value {\n      display: inline-block;\n      margin-left: 10px; }\n  .user-profile .user-profile-password .user-profile-password-btn {\n      margin-left: 154px; }\n  .user-profile .user-profile-btn {\n    margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9raHlhdC9EZXNrdG9wL0dpdEh1Yi9NZXJha2lBcnRTaG9wL3NyYy9hcHAvdXNlci91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVTtFQUNWLGtCQUFpQjtFQUNqQixpQkFBZ0IsRUFpRGpCO0VBcEREO0lBS00sYUFBWTtJQUNaLGNBQWEsRUFDaEI7RUFQSDtJQVNNLGlCQUFnQjtJQUNoQixpQkFBZ0IsRUFRbkI7RUFsQkg7TUFZVSxzQkFBcUI7TUFDckIsa0JBQWlCLEVBQ3BCO0VBZFA7TUFnQlUsbUJBQWtCLEVBQ3JCO0VBakJQO0lBb0JNLGlCQUFnQjtJQUNoQixpQkFBZ0IsRUFLbkI7RUExQkg7TUF1QlUsc0JBQXFCO01BQ3JCLGtCQUFpQixFQUNwQjtFQXpCUDtJQTRCTSxpQkFBZ0I7SUFDaEIsaUJBQWdCLEVBUW5CO0VBckNIO01BK0JVLHNCQUFxQjtNQUNyQixrQkFBaUIsRUFDcEI7RUFqQ1A7TUFtQ1UsbUJBQWtCLEVBQ3JCO0VBcENQO0lBdUNNLGlCQUFnQjtJQUNoQixpQkFBZ0IsRUFRbkI7RUFoREg7TUEwQ1Usc0JBQXFCO01BQ3JCLGtCQUFpQixFQUNwQjtFQTVDUDtNQThDVSxtQkFBa0IsRUFDckI7RUEvQ1A7SUFrRE0saUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItcHJvZmlsZXtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgLnBlcnNvbi1pY29ue1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG4gIC51c2VyLXByb2ZpbGUtbmFtZXtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgLnVzZXItcHJvZmlsZS1uYW1lLXZhbHVle1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnVzZXItcHJvZmlsZS1uYW1lLWJ0bntcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgICAgfVxyXG4gIH1cclxuICAudXNlci1wcm9maWxlLWVtYWlse1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAudXNlci1wcm9maWxlLWVtYWlsLXZhbHVle1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgLnVzZXItcHJvZmlsZS1tb2JpbGV7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIC51c2VyLXByb2ZpbGUtbW9iaWxlLXZhbHVle1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnVzZXItcHJvZmlsZS1tb2JpbGUtYnRue1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDExMHB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIC51c2VyLXByb2ZpbGUtcGFzc3dvcmR7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIC51c2VyLXByb2ZpbGUtcGFzc3dvcmQtdmFsdWV7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAudXNlci1wcm9maWxlLXBhc3N3b3JkLWJ0bntcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNTRweDtcclxuICAgICAgfVxyXG4gIH1cclxuICAudXNlci1wcm9maWxlLWJ0bntcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/user-profile/user-profile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/user-profile/user-profile.component.ts ***!
  \*************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../edit-dialog/edit-dialog.component */ "./src/app/edit-dialog/edit-dialog.component.ts");
/* harmony import */ var _edit_dialog_edit_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../edit-dialog/edit-details */ "./src/app/edit-dialog/edit-details.ts");







var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(authService, userService, router) {
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.profileImage = '../../../assets/images/person_edit.png';
    }
    UserProfileComponent.prototype.ngAfterViewInit = function () {
        console.log("After View Init:" + this.editDialog);
        // this.editDialog=this.editDialog;
    };
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.userService.getSavedUser().getValue();
        this.userService.getSavedUser().subscribe(function (user) {
            if (_this.user.image) {
                _this.profileImage = _this.user.image;
            }
        });
    };
    UserProfileComponent.prototype.onPersonEdit = function (event) {
        var selectedFiles = event.target.files;
        var file = selectedFiles.item(0);
        this.userService.addProfileImage(this.user, file);
    };
    UserProfileComponent.prototype.onNameChange = function () {
        console.log("In name change: " + this.editDialog);
        this.editDialog.setTitle('Do you want to edit name?')
            .setBodyTitle('name')
            .setBodyLabel('Enter new name')
            .setEditType(_edit_dialog_edit_details__WEBPACK_IMPORTED_MODULE_6__["EditType"].NAME)
            .show();
    };
    UserProfileComponent.prototype.onEmailChange = function () {
        this.editDialog.setTitle('Do you want to edit email?')
            .setBodyTitle('email')
            .setBodyLabel('Enter new email')
            .setEditType(_edit_dialog_edit_details__WEBPACK_IMPORTED_MODULE_6__["EditType"].EMAIL)
            .show();
    };
    UserProfileComponent.prototype.onMobileChange = function () {
        this.editDialog.setTitle('Do you want to edit mobile?')
            .setBodyTitle('mobile')
            .setBodyLabel('Enter new mobile')
            .setEditType(_edit_dialog_edit_details__WEBPACK_IMPORTED_MODULE_6__["EditType"].MOBILE)
            .show();
    };
    UserProfileComponent.prototype.onPasswordChange = function () {
        this.editDialog.setTitle('Do you want to edit password?')
            .setBodyTitle('password')
            .setBodyLabel('Enter new password')
            .setEditType(_edit_dialog_edit_details__WEBPACK_IMPORTED_MODULE_6__["EditType"].PASSWORD)
            .show();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditDialogComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditDialogComponent"])
    ], UserProfileComponent.prototype, "editDialog", void 0);
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-friends-userprofile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/user/user-profile/user-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user/user-profile/user-profile.component.ts");
/* harmony import */ var _services_authentication_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.guard */ "./src/app/services/authentication.guard.ts");





var ROUTES = [
    //{path: '', redirectTo: '/app-friends-userprofile', pathMatch: 'full' , canActivate: [AuthenticationGuard]},
    { path: 'app-friends-userprofile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]] }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            providers: [
                _services_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]
            ]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user/user-profile/user-profile.component.ts");
/* harmony import */ var _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../edit-dialog/edit-dialog.component */ "./src/app/edit-dialog/edit-dialog.component.ts");







var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserRoutingModule"]
            ],
            declarations: [
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"],
                _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_6__["EditDialogComponent"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/utils/password-equal-validator.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/utils/password-equal-validator.directive.ts ***!
  \*************************************************************/
/*! exports provided: PasswordEqualValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordEqualValidator", function() { return PasswordEqualValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var PasswordEqualValidator = /** @class */ (function () {
    function PasswordEqualValidator(passwordEqual) {
        this.passwordEqual = passwordEqual;
    }
    PasswordEqualValidator_1 = PasswordEqualValidator;
    PasswordEqualValidator.prototype.validate = function (control) {
        var retypePassword = control.value;
        var originalPassword = control.root.get(this.passwordEqual);
        // original & retype password is egual
        return (originalPassword && retypePassword !== originalPassword.value)
            ? { passwordEqual: false } : null;
    };
    var PasswordEqualValidator_1;
    PasswordEqualValidator = PasswordEqualValidator_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[passwordEqual][formControlName],[passwordEqual][formControl],[passwordEqual][ngModel]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return PasswordEqualValidator_1; }), multi: true }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])('passwordEqual')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], PasswordEqualValidator);
    return PasswordEqualValidator;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyC3uoG1q_WUQV8T4Jiav-lDychrofG1FfI",
        authDomain: "merakiart-35689.firebaseapp.com",
        databaseURL: "https://merakiart-35689.firebaseio.com",
        projectId: "merakiart-35689",
        storageBucket: "merakiart-35689.appspot.com",
        messagingSenderId: "680720830448"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/khyat/Desktop/GitHub/MerakiArtShop/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map