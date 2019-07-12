(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./employee-administration/employee-administration-routing.module": [
		"./src/app/employee-administration/employee-administration-routing.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '', redirectTo: 'employee/list', pathMatch: 'full'
    },
    { path: 'employee', loadChildren: './employee-administration/employee-administration-routing.module#EmployeeAdministrationRoutingModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n  <router-outlet></router-outlet>\r\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _employee_administration_employee_administration_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee-administration/employee-administration.module */ "./src/app/employee-administration/employee-administration.module.ts");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/global.service */ "./src/app/shared/global.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _employee_administration_employee_administration_module__WEBPACK_IMPORTED_MODULE_6__["EmployeeAdministrationModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            exports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["APP_BASE_HREF"], useValue: '/' }, _shared_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/employee-administration/employee-administration-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/employee-administration/employee-administration-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: EmployeeAdministrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeAdministrationRoutingModule", function() { return EmployeeAdministrationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_administration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-administration.component */ "./src/app/employee-administration/employee-administration.component.ts");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/employee-administration/employee-list/employee-list.component.ts");





var routes = [
    {
        path: '', component: _employee_administration_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeAdministrationComponent"],
        children: [
            { path: 'list', component: _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeListComponent"] },
            { path: '', component: _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeListComponent"] }
        ]
    }
];
var EmployeeAdministrationRoutingModule = /** @class */ (function () {
    function EmployeeAdministrationRoutingModule() {
    }
    EmployeeAdministrationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EmployeeAdministrationRoutingModule);
    return EmployeeAdministrationRoutingModule;
}());



/***/ }),

/***/ "./src/app/employee-administration/employee-administration.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/employee-administration/employee-administration.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here is the required functionality: </h2>\n<br />\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/employee-administration/employee-administration.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/employee-administration/employee-administration.component.ts ***!
  \******************************************************************************/
/*! exports provided: EmployeeAdministrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeAdministrationComponent", function() { return EmployeeAdministrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee.service */ "./src/app/employee-administration/employee.service.ts");



var EmployeeAdministrationComponent = /** @class */ (function () {
    function EmployeeAdministrationComponent() {
        this.title = 'Test Employee Application';
    }
    EmployeeAdministrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'employee-administration',
            template: __webpack_require__(/*! ./employee-administration.component.html */ "./src/app/employee-administration/employee-administration.component.html"),
            providers: [_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]]
        })
    ], EmployeeAdministrationComponent);
    return EmployeeAdministrationComponent;
}());



/***/ }),

/***/ "./src/app/employee-administration/employee-administration.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/employee-administration/employee-administration.module.ts ***!
  \***************************************************************************/
/*! exports provided: EmployeeAdministrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeAdministrationModule", function() { return EmployeeAdministrationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_administration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-administration.component */ "./src/app/employee-administration/employee-administration.component.ts");
/* harmony import */ var _employee_administration_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-administration-routing.module */ "./src/app/employee-administration/employee-administration-routing.module.ts");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/employee-administration/employee-list/employee-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var EmployeeAdministrationModule = /** @class */ (function () {
    function EmployeeAdministrationModule() {
    }
    EmployeeAdministrationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _employee_administration_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeAdministrationComponent"],
                _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeListComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _employee_administration_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmployeeAdministrationRoutingModule"]
            ]
        })
    ], EmployeeAdministrationModule);
    return EmployeeAdministrationModule;
}());



/***/ }),

/***/ "./src/app/employee-administration/employee-list/employee-list.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/employee-administration/employee-list/employee-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <input type=\"number\" [(ngModel)]=\"employeeId\" class=\"form-control form-group\" min=\"0\"/>\r\n  <span class=\"form-group text-danger\" *ngIf=\"loading\">loading...</span>\r\n  <button type=\"button\" class=\" btn btn-primary form-control form-group\" (click)=\"getEmployeeList()\"> Get Employee(s) </button>\r\n</div>\r\n<div class=\"row\" >\r\n\r\n  <table class=\"table\">\r\n    <thead class=\"thead-dark\">\r\n      <tr>\r\n        <th scope=\"col\">Id</th>\r\n        <th scope=\"col\">Name</th>\r\n        <th scope=\"col\">Anual Salary</th>\r\n        <th scope=\"col\">Contract Type</th>\r\n        <th scope=\"col\">Hourly Salary</th>\r\n        <th scope=\"col\">Monthly Salary</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody *ngIf=\"employeeList && employeeList.length > 0\">\r\n      <tr *ngFor=\"let row of employeeList\">\r\n        <th scope=\"row\">{{row.id}}</th>\r\n        <td>{{row.name}}</td>\r\n        <td>{{row.anualSalary}}</td>\r\n        <td>{{row.contractTypeName}}</td>\r\n        <td>{{row.hourlySalary}}</td>\r\n        <td>{{row.monthlySalary}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/employee-administration/employee-list/employee-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/employee-administration/employee-list/employee-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee-administration/employee.service.ts");



var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(employeeService) {
        this.employeeService = employeeService;
        this.employeeId = 0;
        this.employeeList = [];
    }
    EmployeeListComponent.prototype.getEmployeeList = function () {
        var _this = this;
        this.loading = true;
        this.employeeService.get(this.employeeId).subscribe(function (result) {
            _this.employeeList = result;
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            console.log(error);
        });
    };
    EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'employee-list',
            template: __webpack_require__(/*! ./employee-list.component.html */ "./src/app/employee-administration/employee-list/employee-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/employee-administration/employee.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/employee-administration/employee.service.ts ***!
  \*************************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/global.service */ "./src/app/shared/global.service.ts");



var EmployeeService = /** @class */ (function () {
    function EmployeeService(globalService) {
        this.globalService = globalService;
        this.serviceUrl = 'api/employee/';
    }
    EmployeeService.prototype.get = function (id) {
        return this.globalService.getData(this.serviceUrl, id);
    };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/shared/global.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/global.service.ts ***!
  \******************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GlobalService = /** @class */ (function () {
    function GlobalService(http) {
        this.http = http;
        this.resourceUri = 'https://localhost:44355/';
    }
    GlobalService.prototype.getCompleteUrl = function (url) {
        if (this.resourceUri && this.resourceUri[this.resourceUri.length - 1] !== '/') {
            this.resourceUri += '/';
        }
        return this.resourceUri + url;
    };
    GlobalService.prototype.getData = function (url, id) {
        return this.http
            .get(this.getCompleteUrl(url) + id);
    };
    GlobalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GlobalService);
    return GlobalService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\user\Repos\Test.Employee\Test.Employee\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map