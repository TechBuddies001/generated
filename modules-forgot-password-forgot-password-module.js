(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-forgot-password-forgot-password-module"],{

/***/ "./src/app/modules/forgot-password/forgot-password-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/forgot-password/forgot-password-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ForgotPasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordRoutingModule", function() { return ForgotPasswordRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password.component */ "./src/app/modules/forgot-password/forgot-password.component.ts");





const routes = [
    {
        path: '',
        component: _forgot_password_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"]
    }
];
class ForgotPasswordRoutingModule {
}
ForgotPasswordRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ForgotPasswordRoutingModule });
ForgotPasswordRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ForgotPasswordRoutingModule_Factory(t) { return new (t || ForgotPasswordRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ForgotPasswordRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/forgot-password/forgot-password.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/forgot-password/forgot-password.component.ts ***!
  \**********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_signup_signup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/signup/signup.service */ "./src/app/services/signup/signup.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_services_errors_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/errors/error.service */ "./src/app/services/errors/error.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









function ForgotPasswordComponent_div_71_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_div_71_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter Valid Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgotPasswordComponent_div_71_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForgotPasswordComponent_div_71_div_2_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.forgotPasswordForm.get("email").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.forgotPasswordForm.get("email").errors.email);
} }
class ForgotPasswordComponent {
    constructor(fb, signupService, spinner, errorService) {
        this.fb = fb;
        this.signupService = signupService;
        this.spinner = spinner;
        this.errorService = errorService;
        this.forgotPasswordForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
        });
    }
    ngOnInit() {
    }
    forgotPassword() {
        console.log('working forgot', this.forgotPasswordForm.value);
        this.spinner.show();
        this.signupService.forgotPassword(this.forgotPasswordForm.value).subscribe((res) => {
            console.log('forgot res', res);
            this.spinner.hide();
            if (res.status === true) {
                this.forgotPasswordForm.reset();
                this.successMsg = res.message || 'Check Email For Login Details.';
            }
        }, (httpError) => {
            this.spinner.hide();
            this.errorMsg = this.errorService.errorMsg;
        });
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_signup_signup_service__WEBPACK_IMPORTED_MODULE_2__["SignupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_errors_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"])); };
ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 88, vars: 9, consts: [[1, "app-container", "app-theme-white", "body-tabs-shadow"], [1, "app-container"], [1, "h-100"], [1, "h-100", "no-gutters", "row"], [1, "d-none", "d-lg-block", "col-lg-5"], ["id", "slider1", 1, "csslider", "infinity"], ["type", "radio", "name", "slides", "id", "slides_1"], ["type", "radio", "name", "slides", "checked", "checked", "id", "slides_2"], ["type", "radio", "name", "slides", "id", "slides_3"], [1, "slider-light"], [1, "slick-slider"], ["tabindex", "-1", 1, "position-relative", "h-100", "d-flex", "justify-content-center", "align-items-center", "bg-plum-plate"], [1, "slide-img-bg", 2, "background-image", "url('assets/images/originals/city.jpg')"], [1, "slider-content"], [1, "main-logo"], ["src", "assets/images/logo.png", 1, "img-fluid"], ["tabindex", "-1", 1, "position-relative", "h-100", "d-flex", "justify-content-center", "align-items-center", "bg-sunny-morning"], [1, "slide-img-bg", 2, "background-image", "url('assets/images/originals/citydark.jpg')"], ["tabindex", "-1", 1, "position-relative", "h-100", "d-flex", "justify-content-center", "align-items-center", "bg-premium-dark"], [1, "slide-img-bg", 2, "background-image", "url('assets/images/originals/citynights.jpg')"], [1, "arrows"], ["for", "slides_1"], ["for", "slides_2"], ["for", "slides_3"], ["for", "slides_1", 1, "goto-first"], ["for", "slides_3", 1, "goto-last"], [1, "navigation"], [1, "h-100", "d-flex", "bg-white", "justify-content-center", "align-items-center", "col-md-12", "col-lg-7"], [1, "mx-auto", "app-login-box", "col-sm-12", "col-md-8", "col-lg-8"], [3, "formGroup", "submit"], [1, "form-row"], [1, "col-md-12"], [1, "position-relative", "form-group"], ["for", "exampleEmail", 1, ""], [1, "text-danger"], ["name", "email", "id", "exampleEmail", "type", "email", "formControlName", "email", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], [1, "mt-4", "d-flex", "align-items-center"], [1, "mr-auto"], ["type", "submit", 1, "btn-wide", "btn-pill", "btn-shadow", "btn-hover-shine", "btn", "btn-primary", "btn-lg", 3, "disabled"], [1, "mb-0"], ["routerLink", "/login", 1, "text-primary"], [1, "mt-4", "text-center"], [1, "text-success"], [4, "ngIf"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Perfect Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "ArchitectUI is like a dream. Some think it's too good to be true! Extensive collection of unified React Boostrap Components and Elements. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Complex, but lightweight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "We've included a lot of components that cover almost all use cases for any type of application. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Scalable, Modular, Consistent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Easily exclude the components you don't require. Lightweight, consistent Bootstrap based styles across all elements and components ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Forgot your Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Use the form below to recover it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "form", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ForgotPasswordComponent_Template_form_submit_62_listener() { return ctx.forgotPasswordForm.valid && ctx.forgotPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ForgotPasswordComponent_div_71_Template, 3, 2, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Recover Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](87, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forgotPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forgotPasswordForm.get("email").errors && ctx.forgotPasswordForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.forgotPasswordForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](83, 5, ctx.successMsg));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](87, 7, ctx.errorMsg));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"]], styles: [".csslider[_ngcontent-%COMP%] {\r\n  -ms-perspective: 1300px;\r\n  perspective: 1300px;\r\n  display: inline-block;\r\n  text-align: left;\r\n  position: relative;\r\n}\r\n.h-100[_ngcontent-%COMP%] {\r\n  height: calc(100vh - 0px) !important;\r\n  overflow: hidden;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(10):checked    ~ ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type {\r\n  margin-left: -900%;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(9):checked    ~ ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type {\r\n  margin-left: -800%;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(8):checked    ~ ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type {\r\n  margin-left: -700%;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(7):checked    ~ ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type {\r\n  margin-left: -600%;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(6):checked    ~ ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type {\r\n  margin-left: -500%;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(5):checked    ~ ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type {\r\n  margin-left: -400%;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(4):checked    ~ ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type {\r\n  margin-left: -300%;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(3):checked    ~ ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type {\r\n  margin-left: -200%;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(2):checked    ~ ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type {\r\n  margin-left: -100%;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(1):checked    ~ ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type {\r\n  margin-left: 0%;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  \r\n  \r\n  z-index: 1;\r\n  font-size: 0;\r\n  line-height: 0;\r\n  background-color: #3a3a3a;\r\n  \r\n  margin: 0 auto;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  box-sizing: border-box;\r\n  max-width: 600px;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  font-size: 15px;\r\n  font-size: initial;\r\n  line-height: normal;\r\n  transition: all 0.5s cubic-bezier(0.4, 1.3, 0.65, 1);\r\n  vertical-align: top;\r\n  box-sizing: border-box;\r\n  white-space: normal;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.scrollable[_ngcontent-%COMP%] {\r\n  overflow-y: scroll;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > .navigation[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 24px;\r\n  left: 50%;\r\n  z-index: 10;\r\n  margin-bottom: 0px;\r\n  font-size: 0;\r\n  line-height: 0;\r\n  text-align: center;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  user-select: none;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > .navigation[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  margin-left: -100%;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  border-radius: 50%;\r\n  margin: 0 4px;\r\n  padding: 4px;\r\n  background: #3a3a3a;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover:after {\r\n  opacity: 1;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  margin-left: -6px;\r\n  margin-top: -6px;\r\n  background: #fff;\r\n  border-radius: 50%;\r\n  padding: 6px;\r\n  opacity: 0;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > .arrows[_ngcontent-%COMP%] {\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  user-select: none;\r\n}\r\n.csslider.inside[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\r\n  bottom: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n.csslider.inside[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  border: 1px solid #7e7e7e;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-of-type(1):after, .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-of-type(2):after, .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-of-type(3):after, .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-of-type(4):after, .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(5):checked    ~ .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-of-type(5):after, .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(6):checked    ~ .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-of-type(6):after, .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(7):checked    ~ .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-of-type(7):after, .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(8):checked    ~ .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-of-type(8):after, .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(9):checked    ~ .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-of-type(9):after, .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(10):checked    ~ .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-of-type(10):after, .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(11):checked    ~ .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-of-type(11):after {\r\n  opacity: 1;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > .arrows[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 23px;\r\n  top: 50%;\r\n  width: 78%;\r\n  height: 26px;\r\n  padding: 0 31px;\r\n  box-sizing: content-box;\r\n  z-index: 9;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > .arrows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  top: -50%;\r\n  padding: 13px;\r\n  box-shadow: inset 3px -3px 0 2px rgb(255 255 255 / 50%);\r\n  cursor: pointer;\r\n  transition: box-shadow 0.15s, margin 0.15s;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > .arrows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\r\n  box-shadow: inset 3px -3px 0 2px #557bdc;\r\n  margin: 0 0px;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > .arrows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -100%;\r\n  left: -100%;\r\n  height: 300%;\r\n  width: 300%;\r\n}\r\n.csslider.infinity[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:first-of-type:checked    ~ .arrows[_ngcontent-%COMP%]   label.goto-last[_ngcontent-%COMP%], .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(0), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(1), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(2), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(3), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(5):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(4), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(6):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(5), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(7):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(6), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(8):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(7), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(9):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(8), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(10):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(9), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(11):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(10) {\r\n  display: block;\r\n  left: 0;\r\n  right: auto;\r\n  transform: rotate(45deg);\r\n}\r\n.csslider.infinity[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:last-of-type:checked    ~ .arrows[_ngcontent-%COMP%]   label.goto-first[_ngcontent-%COMP%], .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(2), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(3), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(4), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(5), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(5):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(6), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(6):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(7), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(7):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(8), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(8):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(9), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(9):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(10), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(10):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(11), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(11):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(12) {\r\n  display: block;\r\n  right: 0;\r\n  left: auto;\r\n  transform: rotate(225deg);\r\n}\r\n#slider1[_ngcontent-%COMP%] {\r\n  \r\n}\r\n#slider1[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(3):checked    ~ ul[_ngcontent-%COMP%]   #bg[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  padding: 22px;\r\n  transition: 0.5s 0.5s;\r\n}\r\n#slider1[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(3):checked    ~ ul[_ngcontent-%COMP%]   #bg[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  transform: translate(0);\r\n  transition: 0.5s 0.9s;\r\n}\r\n#slider1[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(6):checked    ~ ul[_ngcontent-%COMP%]   #dex-sign[_ngcontent-%COMP%] {\r\n  animation: sign-anim 3.5s 0.5s steps(85) forwards;\r\n}\r\n#bg[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  padding: 22px 0;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 16%;\r\n  height: 20%;\r\n  width: 0;\r\n  z-index: 10;\r\n  overflow: hidden;\r\n}\r\n#bg[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: -1px;\r\n  top: 1px;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: -1;\r\n  background: url(https://raw.github.com/drygiel/csslider/master/examples/themes/fruit.jpg)\r\n    1px 23%;\r\n  -webkit-filter: blur(7px);\r\n}\r\n#bg[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 20;\r\n  background: rgba(0, 0, 0, 0.35);\r\n  pointer-events: none;\r\n}\r\n#bg[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  transform: translate(120%);\r\n}\r\n.scrollable[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  padding: 30px;\r\n  text-align: justify;\r\n  line-height: 140%;\r\n  font-size: 120%;\r\n}\r\n#center[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-top: 25%;\r\n}\r\n#center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n  font-variant: small-caps;\r\n}\r\n\r\na.nice-link[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  color: #71ad37;\r\n}\r\nh1[_ngcontent-%COMP%]   a.nice-link[_ngcontent-%COMP%]:after {\r\n  border-bottom: 1px solid #a5ff0e;\r\n}\r\na.nice-link[_ngcontent-%COMP%]:after {\r\n  text-align: justify;\r\n  display: inline-block;\r\n  content: attr(data-text);\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  color: #a5ff0e;\r\n  min-height: 100%;\r\n  width: 0;\r\n  max-width: 100%;\r\n  background: #3a3a3a;\r\n  transition: 0.3s;\r\n}\r\na.nice-link[_ngcontent-%COMP%]:hover {\r\n  color: #71ad37;\r\n}\r\na.nice-link[_ngcontent-%COMP%]:hover:after {\r\n  width: 100%;\r\n}\r\n\r\n#dex-sign[_ngcontent-%COMP%] {\r\n  width: 255px;\r\n  height: 84px;\r\n  position: absolute;\r\n  left: 33%;\r\n  top: 45%;\r\n  opacity: 0.7;\r\n}\r\n#dex-sign[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n  -webkit-filter: invert(30%) brightness(80%) sepia(100%) contrast(110%)\r\n    saturate(953%) hue-rotate(45deg);\r\n}\r\n@keyframes sign-anim {\r\n  to {\r\n    background-position: 0 -7140px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSx1QkFBdUI7RUFFdkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBYztFQUNkLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsY0FBYztFQUNkLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFJbkIsb0RBQW9EO0VBQ3BELG1CQUFtQjtFQUduQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFFekIsc0JBQXNCO0VBRXRCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNENFLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsYUFBYTtFQUNiLHVEQUF1RDtFQUN2RCxlQUFlO0VBSWYsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSx3Q0FBd0M7RUFDeEMsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBOzs7Ozs7Ozs7Ozs7RUFZRSxjQUFjO0VBQ2QsT0FBTztFQUNQLFdBQVc7RUFLWCx3QkFBd0I7QUFDMUI7QUFDQTs7Ozs7Ozs7Ozs7O0VBWUUsY0FBYztFQUNkLFFBQVE7RUFDUixVQUFVO0VBS1YseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBSWIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFLRSx1QkFBdUI7RUFJdkIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFJRSxpREFBaUQ7QUFDbkQ7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLFFBQVE7RUFDUixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1g7V0FDUztFQUNULHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLCtCQUErQjtFQUMvQixvQkFBb0I7QUFDdEI7QUFDQTtFQUtFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHdCQUF3QjtBQUMxQjtBQUNBLGdGQUFnRjtBQUNoRjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsZUFBZTtFQUNmLG1CQUFtQjtFQUluQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBLGdGQUFnRjtBQUNoRjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0VBQ1Y7b0NBQ2tDO0FBQ3BDO0FBV0E7RUFDRTtJQUNFLDhCQUE4QjtFQUNoQztBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3NzbGlkZXIge1xyXG4gIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAtbXMtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmgtMTAwIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAwcHgpICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY3NzbGlkZXIgPiBpbnB1dCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSgxMCk6Y2hlY2tlZCB+IHVsIGxpOmZpcnN0LW9mLXR5cGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAtOTAwJTtcclxufVxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSg5KTpjaGVja2VkIH4gdWwgbGk6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC04MDAlO1xyXG59XHJcbi5jc3NsaWRlciA+IGlucHV0Om50aC1vZi10eXBlKDgpOmNoZWNrZWQgfiB1bCBsaTpmaXJzdC1vZi10eXBlIHtcclxuICBtYXJnaW4tbGVmdDogLTcwMCU7XHJcbn1cclxuLmNzc2xpZGVyID4gaW5wdXQ6bnRoLW9mLXR5cGUoNyk6Y2hlY2tlZCB+IHVsIGxpOmZpcnN0LW9mLXR5cGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAtNjAwJTtcclxufVxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSg2KTpjaGVja2VkIH4gdWwgbGk6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC01MDAlO1xyXG59XHJcbi5jc3NsaWRlciA+IGlucHV0Om50aC1vZi10eXBlKDUpOmNoZWNrZWQgfiB1bCBsaTpmaXJzdC1vZi10eXBlIHtcclxuICBtYXJnaW4tbGVmdDogLTQwMCU7XHJcbn1cclxuLmNzc2xpZGVyID4gaW5wdXQ6bnRoLW9mLXR5cGUoNCk6Y2hlY2tlZCB+IHVsIGxpOmZpcnN0LW9mLXR5cGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMzAwJTtcclxufVxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSgzKTpjaGVja2VkIH4gdWwgbGk6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMDAlO1xyXG59XHJcbi5jc3NsaWRlciA+IGlucHV0Om50aC1vZi10eXBlKDIpOmNoZWNrZWQgfiB1bCBsaTpmaXJzdC1vZi10eXBlIHtcclxuICBtYXJnaW4tbGVmdDogLTEwMCU7XHJcbn1cclxuLmNzc2xpZGVyID4gaW5wdXQ6bnRoLW9mLXR5cGUoMSk6Y2hlY2tlZCB+IHVsIGxpOmZpcnN0LW9mLXR5cGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAwJTtcclxufVxyXG4uY3NzbGlkZXIgPiB1bCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIHdpZHRoOiA4MjBweDsgKi9cclxuICAvKiBoZWlnaHQ6IDQyMHB4OyAqL1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZm9udC1zaXplOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTNhM2E7XHJcbiAgLyogYm9yZGVyOiAxMHB4IHNvbGlkICMzQTNBM0E7ICovXHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG59XHJcbi5jc3NsaWRlciA+IHVsID4gbGkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogaW5pdGlhbDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNCwgMS4zLCAwLjY1LCAxKTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjQsIDEuMywgMC42NSwgMSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNCwgMS4zLCAwLjY1LCAxKTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcbi5jc3NsaWRlciA+IHVsID4gbGkuc2Nyb2xsYWJsZSB7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbi5jc3NsaWRlciA+IC5uYXZpZ2F0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAyNHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICB6LWluZGV4OiAxMDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgZm9udC1zaXplOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbi5jc3NsaWRlciA+IC5uYXZpZ2F0aW9uID4gZGl2IHtcclxuICBtYXJnaW4tbGVmdDogLTEwMCU7XHJcbn1cclxuLmNzc2xpZGVyID4gLm5hdmlnYXRpb24gbGFiZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW46IDAgNHB4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjM2EzYTNhO1xyXG59XHJcbi5jc3NsaWRlciA+IC5uYXZpZ2F0aW9uIGxhYmVsOmhvdmVyOmFmdGVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5jc3NsaWRlciA+IC5uYXZpZ2F0aW9uIGxhYmVsOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC02cHg7XHJcbiAgbWFyZ2luLXRvcDogLTZweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4uY3NzbGlkZXIgPiAuYXJyb3dzIHtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuLmNzc2xpZGVyLmluc2lkZSAubmF2aWdhdGlvbiB7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmNzc2xpZGVyLmluc2lkZSAubmF2aWdhdGlvbiBsYWJlbCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzdlN2U3ZTtcclxufVxyXG4uY3NzbGlkZXJcclxuICA+IGlucHV0Om50aC1vZi10eXBlKDEpOmNoZWNrZWRcclxuICB+IC5uYXZpZ2F0aW9uXHJcbiAgbGFiZWw6bnRoLW9mLXR5cGUoMSk6YWZ0ZXIsXHJcbi5jc3NsaWRlclxyXG4gID4gaW5wdXQ6bnRoLW9mLXR5cGUoMik6Y2hlY2tlZFxyXG4gIH4gLm5hdmlnYXRpb25cclxuICBsYWJlbDpudGgtb2YtdHlwZSgyKTphZnRlcixcclxuLmNzc2xpZGVyXHJcbiAgPiBpbnB1dDpudGgtb2YtdHlwZSgzKTpjaGVja2VkXHJcbiAgfiAubmF2aWdhdGlvblxyXG4gIGxhYmVsOm50aC1vZi10eXBlKDMpOmFmdGVyLFxyXG4uY3NzbGlkZXJcclxuICA+IGlucHV0Om50aC1vZi10eXBlKDQpOmNoZWNrZWRcclxuICB+IC5uYXZpZ2F0aW9uXHJcbiAgbGFiZWw6bnRoLW9mLXR5cGUoNCk6YWZ0ZXIsXHJcbi5jc3NsaWRlclxyXG4gID4gaW5wdXQ6bnRoLW9mLXR5cGUoNSk6Y2hlY2tlZFxyXG4gIH4gLm5hdmlnYXRpb25cclxuICBsYWJlbDpudGgtb2YtdHlwZSg1KTphZnRlcixcclxuLmNzc2xpZGVyXHJcbiAgPiBpbnB1dDpudGgtb2YtdHlwZSg2KTpjaGVja2VkXHJcbiAgfiAubmF2aWdhdGlvblxyXG4gIGxhYmVsOm50aC1vZi10eXBlKDYpOmFmdGVyLFxyXG4uY3NzbGlkZXJcclxuICA+IGlucHV0Om50aC1vZi10eXBlKDcpOmNoZWNrZWRcclxuICB+IC5uYXZpZ2F0aW9uXHJcbiAgbGFiZWw6bnRoLW9mLXR5cGUoNyk6YWZ0ZXIsXHJcbi5jc3NsaWRlclxyXG4gID4gaW5wdXQ6bnRoLW9mLXR5cGUoOCk6Y2hlY2tlZFxyXG4gIH4gLm5hdmlnYXRpb25cclxuICBsYWJlbDpudGgtb2YtdHlwZSg4KTphZnRlcixcclxuLmNzc2xpZGVyXHJcbiAgPiBpbnB1dDpudGgtb2YtdHlwZSg5KTpjaGVja2VkXHJcbiAgfiAubmF2aWdhdGlvblxyXG4gIGxhYmVsOm50aC1vZi10eXBlKDkpOmFmdGVyLFxyXG4uY3NzbGlkZXJcclxuICA+IGlucHV0Om50aC1vZi10eXBlKDEwKTpjaGVja2VkXHJcbiAgfiAubmF2aWdhdGlvblxyXG4gIGxhYmVsOm50aC1vZi10eXBlKDEwKTphZnRlcixcclxuLmNzc2xpZGVyXHJcbiAgPiBpbnB1dDpudGgtb2YtdHlwZSgxMSk6Y2hlY2tlZFxyXG4gIH4gLm5hdmlnYXRpb25cclxuICBsYWJlbDpudGgtb2YtdHlwZSgxMSk6YWZ0ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLmNzc2xpZGVyID4gLmFycm93cyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDIzcHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgd2lkdGg6IDc4JTtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgcGFkZGluZzogMCAzMXB4O1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIHotaW5kZXg6IDk7XHJcbn1cclxuLmNzc2xpZGVyID4gLmFycm93cyBsYWJlbCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNTAlO1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgM3B4IC0zcHggMCAycHggcmdiKDI1NSAyNTUgMjU1IC8gNTAlKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMTVzLCBtYXJnaW4gMC4xNXM7XHJcbiAgLW8tdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjE1cywgbWFyZ2luIDAuMTVzO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjE1cywgbWFyZ2luIDAuMTVzO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xNXMsIG1hcmdpbiAwLjE1cztcclxufVxyXG4uY3NzbGlkZXIgPiAuYXJyb3dzIGxhYmVsOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAzcHggLTNweCAwIDJweCAjNTU3YmRjO1xyXG4gIG1hcmdpbjogMCAwcHg7XHJcbn1cclxuLmNzc2xpZGVyID4gLmFycm93cyBsYWJlbDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTEwMCU7XHJcbiAgbGVmdDogLTEwMCU7XHJcbiAgaGVpZ2h0OiAzMDAlO1xyXG4gIHdpZHRoOiAzMDAlO1xyXG59XHJcbi5jc3NsaWRlci5pbmZpbml0eSA+IGlucHV0OmZpcnN0LW9mLXR5cGU6Y2hlY2tlZCB+IC5hcnJvd3MgbGFiZWwuZ290by1sYXN0LFxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSgxKTpjaGVja2VkIH4gLmFycm93cyA+IGxhYmVsOm50aC1vZi10eXBlKDApLFxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSgyKTpjaGVja2VkIH4gLmFycm93cyA+IGxhYmVsOm50aC1vZi10eXBlKDEpLFxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSgzKTpjaGVja2VkIH4gLmFycm93cyA+IGxhYmVsOm50aC1vZi10eXBlKDIpLFxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSg0KTpjaGVja2VkIH4gLmFycm93cyA+IGxhYmVsOm50aC1vZi10eXBlKDMpLFxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSg1KTpjaGVja2VkIH4gLmFycm93cyA+IGxhYmVsOm50aC1vZi10eXBlKDQpLFxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSg2KTpjaGVja2VkIH4gLmFycm93cyA+IGxhYmVsOm50aC1vZi10eXBlKDUpLFxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSg3KTpjaGVja2VkIH4gLmFycm93cyA+IGxhYmVsOm50aC1vZi10eXBlKDYpLFxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSg4KTpjaGVja2VkIH4gLmFycm93cyA+IGxhYmVsOm50aC1vZi10eXBlKDcpLFxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSg5KTpjaGVja2VkIH4gLmFycm93cyA+IGxhYmVsOm50aC1vZi10eXBlKDgpLFxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSgxMCk6Y2hlY2tlZCB+IC5hcnJvd3MgPiBsYWJlbDpudGgtb2YtdHlwZSg5KSxcclxuLmNzc2xpZGVyID4gaW5wdXQ6bnRoLW9mLXR5cGUoMTEpOmNoZWNrZWQgfiAuYXJyb3dzID4gbGFiZWw6bnRoLW9mLXR5cGUoMTApIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiBhdXRvO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG4uY3NzbGlkZXIuaW5maW5pdHkgPiBpbnB1dDpsYXN0LW9mLXR5cGU6Y2hlY2tlZCB+IC5hcnJvd3MgbGFiZWwuZ290by1maXJzdCxcclxuLmNzc2xpZGVyID4gaW5wdXQ6bnRoLW9mLXR5cGUoMSk6Y2hlY2tlZCB+IC5hcnJvd3MgPiBsYWJlbDpudGgtb2YtdHlwZSgyKSxcclxuLmNzc2xpZGVyID4gaW5wdXQ6bnRoLW9mLXR5cGUoMik6Y2hlY2tlZCB+IC5hcnJvd3MgPiBsYWJlbDpudGgtb2YtdHlwZSgzKSxcclxuLmNzc2xpZGVyID4gaW5wdXQ6bnRoLW9mLXR5cGUoMyk6Y2hlY2tlZCB+IC5hcnJvd3MgPiBsYWJlbDpudGgtb2YtdHlwZSg0KSxcclxuLmNzc2xpZGVyID4gaW5wdXQ6bnRoLW9mLXR5cGUoNCk6Y2hlY2tlZCB+IC5hcnJvd3MgPiBsYWJlbDpudGgtb2YtdHlwZSg1KSxcclxuLmNzc2xpZGVyID4gaW5wdXQ6bnRoLW9mLXR5cGUoNSk6Y2hlY2tlZCB+IC5hcnJvd3MgPiBsYWJlbDpudGgtb2YtdHlwZSg2KSxcclxuLmNzc2xpZGVyID4gaW5wdXQ6bnRoLW9mLXR5cGUoNik6Y2hlY2tlZCB+IC5hcnJvd3MgPiBsYWJlbDpudGgtb2YtdHlwZSg3KSxcclxuLmNzc2xpZGVyID4gaW5wdXQ6bnRoLW9mLXR5cGUoNyk6Y2hlY2tlZCB+IC5hcnJvd3MgPiBsYWJlbDpudGgtb2YtdHlwZSg4KSxcclxuLmNzc2xpZGVyID4gaW5wdXQ6bnRoLW9mLXR5cGUoOCk6Y2hlY2tlZCB+IC5hcnJvd3MgPiBsYWJlbDpudGgtb2YtdHlwZSg5KSxcclxuLmNzc2xpZGVyID4gaW5wdXQ6bnRoLW9mLXR5cGUoOSk6Y2hlY2tlZCB+IC5hcnJvd3MgPiBsYWJlbDpudGgtb2YtdHlwZSgxMCksXHJcbi5jc3NsaWRlciA+IGlucHV0Om50aC1vZi10eXBlKDEwKTpjaGVja2VkIH4gLmFycm93cyA+IGxhYmVsOm50aC1vZi10eXBlKDExKSxcclxuLmNzc2xpZGVyID4gaW5wdXQ6bnRoLW9mLXR5cGUoMTEpOmNoZWNrZWQgfiAuYXJyb3dzID4gbGFiZWw6bnRoLW9mLXR5cGUoMTIpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICByaWdodDogMDtcclxuICBsZWZ0OiBhdXRvO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xyXG59XHJcbiNzbGlkZXIxIHtcclxuICAvKiBtYXJnaW46IDIwcHg7ICAqL1xyXG59XHJcbiNzbGlkZXIxID4gaW5wdXQ6bnRoLW9mLXR5cGUoMyk6Y2hlY2tlZCB+IHVsICNiZyB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBwYWRkaW5nOiAyMnB4O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogMC41cyAwLjVzO1xyXG4gIC1vLXRyYW5zaXRpb246IDAuNXMgMC41cztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXMgMC41cztcclxuICB0cmFuc2l0aW9uOiAwLjVzIDAuNXM7XHJcbn1cclxuI3NsaWRlcjEgPiBpbnB1dDpudGgtb2YtdHlwZSgzKTpjaGVja2VkIH4gdWwgI2JnIGRpdiB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICAtbW96LXRyYW5zaXRpb246IDAuNXMgMC45cztcclxuICAtby10cmFuc2l0aW9uOiAwLjVzIDAuOXM7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIDAuOXM7XHJcbiAgdHJhbnNpdGlvbjogMC41cyAwLjlzO1xyXG59XHJcbiNzbGlkZXIxID4gaW5wdXQ6bnRoLW9mLXR5cGUoNik6Y2hlY2tlZCB+IHVsICNkZXgtc2lnbiB7XHJcbiAgLW1vei1hbmltYXRpb246IHNpZ24tYW5pbSAzLjVzIDAuNXMgc3RlcHMoODUpIGZvcndhcmRzO1xyXG4gIC1vLWFuaW1hdGlvbjogc2lnbi1hbmltIDMuNXMgMC41cyBzdGVwcyg4NSkgZm9yd2FyZHM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNpZ24tYW5pbSAzLjVzIDAuNXMgc3RlcHMoODUpIGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbjogc2lnbi1hbmltIDMuNXMgMC41cyBzdGVwcyg4NSkgZm9yd2FyZHM7XHJcbn1cclxuI2JnIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBwYWRkaW5nOiAyMnB4IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAxNiU7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4jYmc6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtMXB4O1xyXG4gIHRvcDogMXB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAtMTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9kcnlnaWVsL2Nzc2xpZGVyL21hc3Rlci9leGFtcGxlcy90aGVtZXMvZnJ1aXQuanBnKVxyXG4gICAgMXB4IDIzJTtcclxuICAtd2Via2l0LWZpbHRlcjogYmx1cig3cHgpO1xyXG59XHJcbiNiZzphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuI2JnIGRpdiB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTIwJSk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTIwJSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjAlKTtcclxufVxyXG4uc2Nyb2xsYWJsZSBwIHtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XHJcbiAgZm9udC1zaXplOiAxMjAlO1xyXG59XHJcbiNjZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyNSU7XHJcbn1cclxuI2NlbnRlciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcclxufVxyXG4vKl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fIExJTksgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi9cclxuYS5uaWNlLWxpbmsge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogIzcxYWQzNztcclxufVxyXG5oMSBhLm5pY2UtbGluazphZnRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhNWZmMGU7XHJcbn1cclxuYS5uaWNlLWxpbms6YWZ0ZXIge1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGNvbG9yOiAjYTVmZjBlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMzYTNhM2E7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xyXG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuYS5uaWNlLWxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiAjNzFhZDM3O1xyXG59XHJcbmEubmljZS1saW5rOmhvdmVyOmFmdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4vKl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fIFNJR04gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi9cclxuI2RleC1zaWduIHtcclxuICB3aWR0aDogMjU1cHg7XHJcbiAgaGVpZ2h0OiA4NHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAzMyU7XHJcbiAgdG9wOiA0NSU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbiNkZXgtc2lnbjpob3ZlciB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDMwJSkgYnJpZ2h0bmVzcyg4MCUpIHNlcGlhKDEwMCUpIGNvbnRyYXN0KDExMCUpXHJcbiAgICBzYXR1cmF0ZSg5NTMlKSBodWUtcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2lnbi1hbmltIHtcclxuICB0byB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC03MTQwcHg7XHJcbiAgfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBzaWduLWFuaW0ge1xyXG4gIHRvIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTcxNDBweDtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBzaWduLWFuaW0ge1xyXG4gIHRvIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTcxNDBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgot-password',
                templateUrl: './forgot-password.component.html',
                styleUrls: ['./forgot-password.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_signup_signup_service__WEBPACK_IMPORTED_MODULE_2__["SignupService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }, { type: src_app_services_errors_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/forgot-password/forgot-password.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/forgot-password/forgot-password.module.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordModule", function() { return ForgotPasswordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password-routing.module */ "./src/app/modules/forgot-password/forgot-password-routing.module.ts");
/* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password.component */ "./src/app/modules/forgot-password/forgot-password.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class ForgotPasswordModule {
}
ForgotPasswordModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ForgotPasswordModule });
ForgotPasswordModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ForgotPasswordModule_Factory(t) { return new (t || ForgotPasswordModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ForgotPasswordModule, { declarations: [_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-forgot-password-forgot-password-module.js.map