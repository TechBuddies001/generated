(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/core/core.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/core/core.service.ts ***!
  \***********************************************/
/*! exports provided: CoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreService", function() { return CoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class CoreService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURL;
    }
    getAllUsers() {
        return this.httpClient.get(this.baseURL + '/user');
    }
    getUserProfileById(userId) {
        return this.httpClient.get(this.baseURL + '/user/getuserDetail/' + userId);
    }
    updateUserProfile(updateData) {
        return this.httpClient.post(this.baseURL + '/user/updateprofile', updateData);
    }
    changePassword(obj) {
        return this.httpClient.post(this.baseURL + '/password/resetold-password', obj);
    }
    changeActiveStatusOfUser(userId) {
        return this.httpClient.put(this.baseURL + '/admin/activeInactive/' + userId, userId);
    }
    getActiveCount() {
        return this.httpClient.get(this.baseURL + '/admin/countActiveInaciveusers');
    }
    deleteUser(userID) {
        return this.httpClient.delete(`${this.baseURL}/admin/${userID}`);
    }
    // get ticket form with form id
    getTicketForm(formId) {
        return this.httpClient.get(`${this.baseURL}/tripticket/getTicketform/${formId}`);
    }
}
CoreService.ɵfac = function CoreService_Factory(t) { return new (t || CoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CoreService, factory: CoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/signup/signup.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/signup/signup.service.ts ***!
  \***************************************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class SignupService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURL;
    }
    signup(signupObj) {
        return this.httpClient.post(this.baseURL + '/login/create', signupObj);
    }
    forgotPassword(forgotObj) {
        return this.httpClient.post(this.baseURL + '/password/forgot?email=' + forgotObj.email, forgotObj);
    }
}
SignupService.ɵfac = function SignupService_Factory(t) { return new (t || SignupService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SignupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SignupService, factory: SignupService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map