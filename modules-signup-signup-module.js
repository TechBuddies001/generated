(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-signup-signup-module"],{

/***/ "./src/app/modules/signup/signup-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/signup/signup-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupRoutingModule", function() { return SignupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component */ "./src/app/modules/signup/signup.component.ts");





const routes = [
    {
        path: '',
        component: _signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]
    }
];
class SignupRoutingModule {
}
SignupRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SignupRoutingModule });
SignupRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SignupRoutingModule_Factory(t) { return new (t || SignupRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SignupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/signup/signup.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/signup/signup.component.ts ***!
  \****************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_signup_signup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/signup/signup.service */ "./src/app/services/signup/signup.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_services_errors_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/errors/error.service */ "./src/app/services/errors/error.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









function SignupComponent_div_74_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_74_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter Valid Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_74_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_div_74_div_2_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.signupForm.get("email").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.signupForm.get("email").errors.email);
} }
function SignupComponent_div_80_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_80_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.signupForm.get("name").errors.required);
} }
function SignupComponent_div_88_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_88_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.signupForm.get("password").errors.required);
} }
function SignupComponent_div_96_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirm Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_96_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passsword and Confirm Password didn't match. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_96_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u200B ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_div_96_div_3_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.signupForm.get("repeatPassword").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.signupForm.get("repeatPassword").errors.repeatPasswordValidator);
} }
class SignupComponent {
    constructor(fb, signupService, spinner, errorService) {
        this.fb = fb;
        this.signupService = signupService;
        this.spinner = spinner;
        this.errorService = errorService;
        this.errorMsg = '';
        this.signupForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            repeatPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            termsCheckbox: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue]]
        }, {
            validators: this.repeatPasswordValidator('password', 'repeatPassword')
        });
    }
    ngOnInit() {
    }
    repeatPasswordValidator(controlName, matchingControlName) {
        console.log('check');
        return (formGroup) => {
            let control = formGroup.controls[controlName];
            let matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.repeatPasswordValidator) {
                return;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ repeatPasswordValidator: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
    clearMessage() {
        this.errorMsg = '';
        this.successMsg = '';
    }
    signup() {
        console.log('signup works', this.signupForm.value);
        this.clearMessage();
        this.spinner.show();
        const signupObj = {
            active: true,
            email: this.signupForm.get('email').value,
            name: this.signupForm.get('name').value,
            password: this.signupForm.get('password').value,
            publisher: true
        };
        console.log('signup obj', signupObj);
        this.signupService.signup(signupObj).subscribe((res) => {
            console.log('signup res', res);
            if (res.status === true) {
                this.spinner.hide();
                this.signupForm.reset();
                this.successMsg = res.message || 'Check Email For Login Details.';
            }
            else {
                this.spinner.hide();
                this.errorMsg = res.message;
            }
        }, (httpError) => {
            console.log('error', httpError);
            this.spinner.hide();
            this.errorMsg = httpError.error.message || this.errorService.errorMsg;
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_signup_signup_service__WEBPACK_IMPORTED_MODULE_2__["SignupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_errors_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 120, vars: 12, consts: [[1, "app-container", "app-theme-white", "body-tabs-shadow"], [1, "app-container"], [1, "h-100"], [1, "h-100", "no-gutters", "row"], [1, "d-none", "d-lg-block", "col-lg-5"], ["id", "slider1", 1, "csslider", "infinity"], ["type", "radio", "name", "slides", "id", "slides_1"], ["type", "radio", "name", "slides", "checked", "checked", "id", "slides_2"], ["type", "radio", "name", "slides", "id", "slides_3"], [1, "slider-light"], [1, "slick-slider"], ["tabindex", "-1", 1, "position-relative", "h-100", "d-flex", "justify-content-center", "align-items-center", "bg-plum-plate"], [1, "slide-img-bg", 2, "background-image", "url('assets/images/originals/city.jpg')"], [1, "slider-content"], [1, "main-logo"], ["src", "assets/images/logo.png", 1, "img-fluid"], ["tabindex", "-1", 1, "position-relative", "h-100", "d-flex", "justify-content-center", "align-items-center", "bg-sunny-morning"], [1, "slide-img-bg", 2, "background-image", "url('assets/images/originals/citydark.jpg')"], ["tabindex", "-1", 1, "position-relative", "h-100", "d-flex", "justify-content-center", "align-items-center", "bg-premium-dark"], [1, "slide-img-bg", 2, "background-image", "url('assets/images/originals/citynights.jpg')"], [1, "arrows"], ["for", "slides_1"], ["for", "slides_2"], ["for", "slides_3"], ["for", "slides_1", 1, "goto-first"], ["for", "slides_3", 1, "goto-last"], [1, "navigation"], [1, "h-100", "d-flex", "bg-white", "justify-content-center", "align-items-center", "col-md-12", "col-lg-7"], [1, "mx-auto", "app-login-box", "col-sm-12", "col-md-10", "col-lg-9"], [1, "text-success"], [3, "formGroup", "submit"], [1, "form-row"], [1, "col-md-6"], [1, "position-relative", "form-group"], ["for", "exampleEmail", 1, ""], [1, "text-danger"], ["name", "email", "id", "exampleEmail", "type", "email", "formControlName", "email", 1, "form-control", 3, "keydown.space"], ["class", "text-danger", 4, "ngIf"], ["for", "exampleName", 1, ""], ["name", "text", "id", "exampleName", "type", "text", "formControlName", "name", 1, "form-control"], ["for", "examplePassword", 1, ""], ["name", "password", "id", "examplePassword", "type", "password", "formControlName", "password", 1, "form-control", 3, "keydown.space"], ["for", "examplePasswordRep", 1, ""], ["name", "passwordrep", "id", "examplePasswordRep", "type", "password", "formControlName", "repeatPassword", 1, "form-control", 3, "keydown.space"], [1, "mt-3", "position-relative", "form-check"], ["name", "check", "id", "exampleCheck", "type", "checkbox", "formControlName", "termsCheckbox", 1, "form-check-input"], ["for", "exampleCheck", 1, "form-check-label"], ["href", "javascript:void(0);"], [1, "mt-4", "d-flex", "align-items-center"], [1, "mr-auto"], ["type", "submit", 1, "btn-wide", "btn-pill", "btn-shadow", "btn-hover-shine", "btn", "btn-primary", "btn-lg", 3, "disabled"], [1, "mb-0"], ["routerLink", "/login", 1, "text-primary"], [1, "mt-4", "text-center"], [4, "ngIf"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Welcome,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "It only takes a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "few seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " to create your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "form", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SignupComponent_Template_form_submit_65_listener() { return ctx.signupForm.valid && ctx.signup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.space", function SignupComponent_Template_input_keydown_space_73_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, SignupComponent_div_74_Template, 3, 2, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, SignupComponent_div_80_Template, 2, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.space", function SignupComponent_Template_input_keydown_space_87_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, SignupComponent_div_88_Template, 2, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Repeat Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.space", function SignupComponent_Template_input_keydown_space_95_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, SignupComponent_div_96_Template, 4, 2, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Accept our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Terms and Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Create Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](115, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h5", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](119, "titlecase");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.get("email").errors && ctx.signupForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.get("name").errors && ctx.signupForm.get("name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.get("password").errors && ctx.signupForm.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.get("repeatPassword").errors && ctx.signupForm.get("repeatPassword").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.signupForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](115, 8, ctx.successMsg));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](119, 10, ctx.errorMsg));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"]], styles: [".csslider[_ngcontent-%COMP%] {\r\n  -ms-perspective: 1300px;\r\n  perspective: 1300px;\r\n  display: inline-block;\r\n  text-align: left;\r\n  position: relative; \r\n}\r\n.h-100[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 0px) !important;\r\n    overflow: hidden;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(10):checked    ~ ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type {\r\n  margin-left: -900%;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(9):checked    ~ ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type {\r\n  margin-left: -800%;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(8):checked    ~ ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type {\r\n  margin-left: -700%;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(7):checked    ~ ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type {\r\n  margin-left: -600%;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(6):checked    ~ ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type {\r\n  margin-left: -500%;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(5):checked    ~ ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type {\r\n  margin-left: -400%;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(4):checked    ~ ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type {\r\n  margin-left: -300%;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(3):checked    ~ ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type {\r\n  margin-left: -200%;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(2):checked    ~ ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type {\r\n  margin-left: -100%;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(1):checked    ~ ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type {\r\n  margin-left: 0%;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\r\nposition: relative;\r\n    \r\n    \r\n    z-index: 1;\r\n    font-size: 0;\r\n    line-height: 0;\r\n    background-color: #3A3A3A;\r\n    \r\n    margin: 0 auto;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    box-sizing: border-box;\r\n    max-width: 600px;\r\n  }\r\n.csslider[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  font-size: 15px;\r\n  font-size: initial;\r\n  line-height: normal;\r\n  transition: all 0.5s cubic-bezier(0.4, 1.3, 0.65, 1);\r\n  vertical-align: top;\r\n  box-sizing: border-box;\r\n  white-space: normal;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.scrollable[_ngcontent-%COMP%] {\r\n  overflow-y: scroll;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > .navigation[_ngcontent-%COMP%] {\r\nposition: absolute;\r\n    bottom: 24px;\r\n    left: 50%;\r\n    z-index: 10;\r\n    margin-bottom: 0px;\r\n    font-size: 0;\r\n    line-height: 0;\r\n    text-align: center;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    user-select: none;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > .navigation[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  margin-left: -100%;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  border-radius: 50%;\r\n  margin: 0 4px;\r\n  padding: 4px;\r\n  background: #3A3A3A;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover:after {\r\n  opacity: 1;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after {\r\n  content: '';\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  margin-left: -6px;\r\n  margin-top: -6px;\r\n  background: #fff;\r\n  border-radius: 50%;\r\n  padding: 6px;\r\n  opacity: 0;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > .arrows[_ngcontent-%COMP%] {\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  user-select: none;\r\n}\r\n.csslider.inside[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\r\n  bottom: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n.csslider.inside[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  border: 1px solid #7e7e7e;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-of-type(1):after, .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-of-type(2):after, .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-of-type(3):after, .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-of-type(4):after, .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(5):checked    ~ .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-of-type(5):after, .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(6):checked    ~ .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-of-type(6):after, .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(7):checked    ~ .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-of-type(7):after, .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(8):checked    ~ .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-of-type(8):after, .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(9):checked    ~ .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-of-type(9):after, .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(10):checked    ~ .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-of-type(10):after, .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(11):checked    ~ .navigation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-of-type(11):after {\r\n  opacity: 1;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > .arrows[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n    left: 23px;\r\n    top: 50%;\r\n    width: 78%;\r\n    height: 26px;\r\n    padding: 0 31px;\r\n    box-sizing: content-box;\r\n    z-index: 9;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > .arrows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  top: -50%;\r\n  padding: 13px;\r\n  box-shadow: inset 3px -3px 0 2px rgb(255 255 255 / 50%);\r\n  cursor: pointer;\r\n  transition: box-shadow 0.15s, margin 0.15s;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > .arrows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\r\n  box-shadow: inset 3px -3px 0 2px #557bdc;\r\n  margin: 0 0px;\r\n}\r\n.csslider[_ngcontent-%COMP%]    > .arrows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: -100%;\r\n  left: -100%;\r\n  height: 300%;\r\n  width: 300%;\r\n}\r\n.csslider.infinity[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:first-of-type:checked    ~ .arrows[_ngcontent-%COMP%]   label.goto-last[_ngcontent-%COMP%], .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(0), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(1), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(2), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(3), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(5):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(4), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(6):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(5), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(7):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(6), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(8):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(7), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(9):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(8), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(10):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(9), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(11):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(10) {\r\n  display: block;\r\n  left: 0;\r\n  right: auto;\r\n  transform: rotate(45deg);\r\n}\r\n.csslider.infinity[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:last-of-type:checked    ~ .arrows[_ngcontent-%COMP%]   label.goto-first[_ngcontent-%COMP%], .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(2), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(3), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(4), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(5), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(5):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(6), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(6):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(7), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(7):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(8), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(8):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(9), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(9):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(10), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(10):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(11), .csslider[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(11):checked    ~ .arrows[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:nth-of-type(12) {\r\n  display: block;\r\n  right: 0;\r\n  left: auto;\r\n  transform: rotate(225deg);\r\n}\r\n#slider1[_ngcontent-%COMP%] {\r\n  \r\n}\r\n#slider1[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(3):checked    ~ ul[_ngcontent-%COMP%]   #bg[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  padding: 22px;\r\n  transition: 0.5s 0.5s;\r\n}\r\n#slider1[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(3):checked    ~ ul[_ngcontent-%COMP%]   #bg[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  transform: translate(0);\r\n  transition: 0.5s 0.9s;\r\n}\r\n#slider1[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:nth-of-type(6):checked    ~ ul[_ngcontent-%COMP%]   #dex-sign[_ngcontent-%COMP%] {\r\n  animation: sign-anim 3.5s 0.5s steps(85) forwards;\r\n}\r\n#bg[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  padding: 22px 0;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 16%;\r\n  height: 20%;\r\n  width: 0;\r\n  z-index: 10;\r\n  overflow: hidden;\r\n}\r\n#bg[_ngcontent-%COMP%]:before {\r\n  content: '';\r\n  position: absolute;\r\n  left: -1px;\r\n  top: 1px;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: -1;\r\n  background: url(https://raw.github.com/drygiel/csslider/master/examples/themes/fruit.jpg) 1px 23%;\r\n  -webkit-filter: blur(7px);\r\n}\r\n#bg[_ngcontent-%COMP%]:after {\r\n  content: '';\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 20;\r\n  background: rgba(0, 0, 0, 0.35);\r\n  pointer-events: none;\r\n}\r\n#bg[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  transform: translate(120%);\r\n}\r\n.scrollable[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  padding: 30px;\r\n  text-align: justify;\r\n  line-height: 140%;\r\n  font-size: 120%;\r\n}\r\n#center[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-top: 25%;\r\n}\r\n#center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n  font-variant: small-caps;\r\n}\r\n\r\na.nice-link[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  color: #71ad37;\r\n}\r\nh1[_ngcontent-%COMP%]   a.nice-link[_ngcontent-%COMP%]:after {\r\n  border-bottom: 1px solid #a5ff0e;\r\n}\r\na.nice-link[_ngcontent-%COMP%]:after {\r\n  text-align: justify;\r\n  display: inline-block;\r\n  content: attr(data-text);\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  color: #a5ff0e;\r\n  min-height: 100%;\r\n  width: 0;\r\n  max-width: 100%;\r\n  background: #3A3A3A;\r\n  transition: 0.3s;\r\n}\r\na.nice-link[_ngcontent-%COMP%]:hover {\r\n  color: #71ad37;\r\n}\r\na.nice-link[_ngcontent-%COMP%]:hover:after {\r\n  width: 100%;\r\n}\r\n\r\n#dex-sign[_ngcontent-%COMP%] {\r\n  width: 255px;\r\n  height: 84px;\r\n  position: absolute;\r\n  left: 33%;\r\n  top: 45%;\r\n  opacity: 0.7; \r\n}\r\n#dex-sign[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n  -webkit-filter: invert(30%) brightness(80%) sepia(100%) contrast(110%) saturate(953%) hue-rotate(45deg);\r\n}\r\n@keyframes sign-anim {\r\n  to {\r\n    background-position: 0 -7140px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSx1QkFBdUI7RUFFdkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtBQUNBLGtCQUFrQjtJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQjtBQUNGO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUluQixvREFBb0Q7RUFDcEQsbUJBQW1CO0VBR25CLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0FBQ0Esa0JBQWtCO0lBQ2QsWUFBWTtJQUNaLFNBQVM7SUFDVCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtBQUNaO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IseUJBQXlCO0VBRXpCLHNCQUFzQjtFQUV0QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBOzs7Ozs7Ozs7OztFQVdFLFVBQVU7QUFDWjtBQUNBO01BQ00sa0JBQWtCO0lBQ3BCLFVBQVU7SUFDVixRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFVBQVU7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsYUFBYTtFQUNiLHVEQUF1RDtFQUN2RCxlQUFlO0VBSWYsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSx3Q0FBd0M7RUFDeEMsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBOzs7Ozs7Ozs7Ozs7RUFZRSxjQUFjO0VBQ2QsT0FBTztFQUNQLFdBQVc7RUFLWCx3QkFBd0I7QUFDMUI7QUFDQTs7Ozs7Ozs7Ozs7O0VBWUUsY0FBYztFQUNkLFFBQVE7RUFDUixVQUFVO0VBS1YseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBSWIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFLRSx1QkFBdUI7RUFJdkIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFJRSxpREFBaUQ7QUFDbkQ7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLFFBQVE7RUFDUixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUdBQWlHO0VBQ2pHLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLCtCQUErQjtFQUMvQixvQkFBb0I7QUFDdEI7QUFDQTtFQUtFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHdCQUF3QjtBQUMxQjtBQUNBLGdGQUFnRjtBQUNoRjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsZUFBZTtFQUNmLG1CQUFtQjtFQUluQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBLGdGQUFnRjtBQUNoRjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsdUdBQXVHO0FBQ3pHO0FBV0E7RUFDRTtJQUNFLDhCQUE4QjtFQUNoQztBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3NzbGlkZXIge1xyXG4gIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAtbXMtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG59XHJcbi5oLTEwMCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jc3NsaWRlciA+IGlucHV0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jc3NsaWRlciA+IGlucHV0Om50aC1vZi10eXBlKDEwKTpjaGVja2VkIH4gdWwgbGk6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC05MDAlO1xyXG59XHJcbi5jc3NsaWRlciA+IGlucHV0Om50aC1vZi10eXBlKDkpOmNoZWNrZWQgfiB1bCBsaTpmaXJzdC1vZi10eXBlIHtcclxuICBtYXJnaW4tbGVmdDogLTgwMCU7XHJcbn1cclxuLmNzc2xpZGVyID4gaW5wdXQ6bnRoLW9mLXR5cGUoOCk6Y2hlY2tlZCB+IHVsIGxpOmZpcnN0LW9mLXR5cGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAtNzAwJTtcclxufVxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSg3KTpjaGVja2VkIH4gdWwgbGk6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC02MDAlO1xyXG59XHJcbi5jc3NsaWRlciA+IGlucHV0Om50aC1vZi10eXBlKDYpOmNoZWNrZWQgfiB1bCBsaTpmaXJzdC1vZi10eXBlIHtcclxuICBtYXJnaW4tbGVmdDogLTUwMCU7XHJcbn1cclxuLmNzc2xpZGVyID4gaW5wdXQ6bnRoLW9mLXR5cGUoNSk6Y2hlY2tlZCB+IHVsIGxpOmZpcnN0LW9mLXR5cGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAtNDAwJTtcclxufVxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSg0KTpjaGVja2VkIH4gdWwgbGk6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0zMDAlO1xyXG59XHJcbi5jc3NsaWRlciA+IGlucHV0Om50aC1vZi10eXBlKDMpOmNoZWNrZWQgfiB1bCBsaTpmaXJzdC1vZi10eXBlIHtcclxuICBtYXJnaW4tbGVmdDogLTIwMCU7XHJcbn1cclxuLmNzc2xpZGVyID4gaW5wdXQ6bnRoLW9mLXR5cGUoMik6Y2hlY2tlZCB+IHVsIGxpOmZpcnN0LW9mLXR5cGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTAwJTtcclxufVxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSgxKTpjaGVja2VkIH4gdWwgbGk6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAlO1xyXG59XHJcbi5jc3NsaWRlciA+IHVsIHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLyogd2lkdGg6IDgyMHB4OyAqL1xyXG4gICAgLyogaGVpZ2h0OiA0MjBweDsgKi9cclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBmb250LXNpemU6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQTNBM0E7XHJcbiAgICAvKiBib3JkZXI6IDEwcHggc29saWQgIzNBM0EzQTsgKi9cclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgfVxyXG4uY3NzbGlkZXIgPiB1bCA+IGxpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXNpemU6IGluaXRpYWw7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjQsIDEuMywgMC42NSwgMSk7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC40LCAxLjMsIDAuNjUsIDEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjQsIDEuMywgMC42NSwgMSk7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxufVxyXG4uY3NzbGlkZXIgPiB1bCA+IGxpLnNjcm9sbGFibGUge1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4uY3NzbGlkZXIgPiAubmF2aWdhdGlvbiB7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMjRweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1zaXplOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbi5jc3NsaWRlciA+IC5uYXZpZ2F0aW9uID4gZGl2IHtcclxuICBtYXJnaW4tbGVmdDogLTEwMCU7XHJcbn1cclxuLmNzc2xpZGVyID4gLm5hdmlnYXRpb24gbGFiZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW46IDAgNHB4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjM0EzQTNBO1xyXG59XHJcbi5jc3NsaWRlciA+IC5uYXZpZ2F0aW9uIGxhYmVsOmhvdmVyOmFmdGVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5jc3NsaWRlciA+IC5uYXZpZ2F0aW9uIGxhYmVsOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG4gIG1hcmdpbi10b3A6IC02cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuLmNzc2xpZGVyID4gLmFycm93cyB7XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbi5jc3NsaWRlci5pbnNpZGUgLm5hdmlnYXRpb24ge1xyXG4gIGJvdHRvbTogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5jc3NsaWRlci5pbnNpZGUgLm5hdmlnYXRpb24gbGFiZWwge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ZTdlN2U7XHJcbn1cclxuLmNzc2xpZGVyID4gaW5wdXQ6bnRoLW9mLXR5cGUoMSk6Y2hlY2tlZCB+IC5uYXZpZ2F0aW9uIGxhYmVsOm50aC1vZi10eXBlKDEpOmFmdGVyLFxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSgyKTpjaGVja2VkIH4gLm5hdmlnYXRpb24gbGFiZWw6bnRoLW9mLXR5cGUoMik6YWZ0ZXIsXHJcbi5jc3NsaWRlciA+IGlucHV0Om50aC1vZi10eXBlKDMpOmNoZWNrZWQgfiAubmF2aWdhdGlvbiBsYWJlbDpudGgtb2YtdHlwZSgzKTphZnRlcixcclxuLmNzc2xpZGVyID4gaW5wdXQ6bnRoLW9mLXR5cGUoNCk6Y2hlY2tlZCB+IC5uYXZpZ2F0aW9uIGxhYmVsOm50aC1vZi10eXBlKDQpOmFmdGVyLFxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSg1KTpjaGVja2VkIH4gLm5hdmlnYXRpb24gbGFiZWw6bnRoLW9mLXR5cGUoNSk6YWZ0ZXIsXHJcbi5jc3NsaWRlciA+IGlucHV0Om50aC1vZi10eXBlKDYpOmNoZWNrZWQgfiAubmF2aWdhdGlvbiBsYWJlbDpudGgtb2YtdHlwZSg2KTphZnRlcixcclxuLmNzc2xpZGVyID4gaW5wdXQ6bnRoLW9mLXR5cGUoNyk6Y2hlY2tlZCB+IC5uYXZpZ2F0aW9uIGxhYmVsOm50aC1vZi10eXBlKDcpOmFmdGVyLFxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSg4KTpjaGVja2VkIH4gLm5hdmlnYXRpb24gbGFiZWw6bnRoLW9mLXR5cGUoOCk6YWZ0ZXIsXHJcbi5jc3NsaWRlciA+IGlucHV0Om50aC1vZi10eXBlKDkpOmNoZWNrZWQgfiAubmF2aWdhdGlvbiBsYWJlbDpudGgtb2YtdHlwZSg5KTphZnRlcixcclxuLmNzc2xpZGVyID4gaW5wdXQ6bnRoLW9mLXR5cGUoMTApOmNoZWNrZWQgfiAubmF2aWdhdGlvbiBsYWJlbDpudGgtb2YtdHlwZSgxMCk6YWZ0ZXIsXHJcbi5jc3NsaWRlciA+IGlucHV0Om50aC1vZi10eXBlKDExKTpjaGVja2VkIH4gLm5hdmlnYXRpb24gbGFiZWw6bnRoLW9mLXR5cGUoMTEpOmFmdGVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5jc3NsaWRlciA+IC5hcnJvd3Mge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyM3B4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB3aWR0aDogNzglO1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgcGFkZGluZzogMCAzMXB4O1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICB6LWluZGV4OiA5O1xyXG59XHJcbi5jc3NsaWRlciA+IC5hcnJvd3MgbGFiZWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTUwJTtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDNweCAtM3B4IDAgMnB4IHJnYigyNTUgMjU1IDI1NSAvIDUwJSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjE1cywgbWFyZ2luIDAuMTVzO1xyXG4gIC1vLXRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xNXMsIG1hcmdpbiAwLjE1cztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xNXMsIG1hcmdpbiAwLjE1cztcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMTVzLCBtYXJnaW4gMC4xNXM7XHJcbn1cclxuLmNzc2xpZGVyID4gLmFycm93cyBsYWJlbDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgM3B4IC0zcHggMCAycHggIzU1N2JkYztcclxuICBtYXJnaW46IDAgMHB4O1xyXG59XHJcbi5jc3NsaWRlciA+IC5hcnJvd3MgbGFiZWw6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTAwJTtcclxuICBsZWZ0OiAtMTAwJTtcclxuICBoZWlnaHQ6IDMwMCU7XHJcbiAgd2lkdGg6IDMwMCU7XHJcbn1cclxuLmNzc2xpZGVyLmluZmluaXR5ID4gaW5wdXQ6Zmlyc3Qtb2YtdHlwZTpjaGVja2VkIH4gLmFycm93cyBsYWJlbC5nb3RvLWxhc3QsXHJcbi5jc3NsaWRlciA+IGlucHV0Om50aC1vZi10eXBlKDEpOmNoZWNrZWQgfiAuYXJyb3dzID4gbGFiZWw6bnRoLW9mLXR5cGUoMCksXHJcbi5jc3NsaWRlciA+IGlucHV0Om50aC1vZi10eXBlKDIpOmNoZWNrZWQgfiAuYXJyb3dzID4gbGFiZWw6bnRoLW9mLXR5cGUoMSksXHJcbi5jc3NsaWRlciA+IGlucHV0Om50aC1vZi10eXBlKDMpOmNoZWNrZWQgfiAuYXJyb3dzID4gbGFiZWw6bnRoLW9mLXR5cGUoMiksXHJcbi5jc3NsaWRlciA+IGlucHV0Om50aC1vZi10eXBlKDQpOmNoZWNrZWQgfiAuYXJyb3dzID4gbGFiZWw6bnRoLW9mLXR5cGUoMyksXHJcbi5jc3NsaWRlciA+IGlucHV0Om50aC1vZi10eXBlKDUpOmNoZWNrZWQgfiAuYXJyb3dzID4gbGFiZWw6bnRoLW9mLXR5cGUoNCksXHJcbi5jc3NsaWRlciA+IGlucHV0Om50aC1vZi10eXBlKDYpOmNoZWNrZWQgfiAuYXJyb3dzID4gbGFiZWw6bnRoLW9mLXR5cGUoNSksXHJcbi5jc3NsaWRlciA+IGlucHV0Om50aC1vZi10eXBlKDcpOmNoZWNrZWQgfiAuYXJyb3dzID4gbGFiZWw6bnRoLW9mLXR5cGUoNiksXHJcbi5jc3NsaWRlciA+IGlucHV0Om50aC1vZi10eXBlKDgpOmNoZWNrZWQgfiAuYXJyb3dzID4gbGFiZWw6bnRoLW9mLXR5cGUoNyksXHJcbi5jc3NsaWRlciA+IGlucHV0Om50aC1vZi10eXBlKDkpOmNoZWNrZWQgfiAuYXJyb3dzID4gbGFiZWw6bnRoLW9mLXR5cGUoOCksXHJcbi5jc3NsaWRlciA+IGlucHV0Om50aC1vZi10eXBlKDEwKTpjaGVja2VkIH4gLmFycm93cyA+IGxhYmVsOm50aC1vZi10eXBlKDkpLFxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSgxMSk6Y2hlY2tlZCB+IC5hcnJvd3MgPiBsYWJlbDpudGgtb2YtdHlwZSgxMCkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IGF1dG87XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcbi5jc3NsaWRlci5pbmZpbml0eSA+IGlucHV0Omxhc3Qtb2YtdHlwZTpjaGVja2VkIH4gLmFycm93cyBsYWJlbC5nb3RvLWZpcnN0LFxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSgxKTpjaGVja2VkIH4gLmFycm93cyA+IGxhYmVsOm50aC1vZi10eXBlKDIpLFxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSgyKTpjaGVja2VkIH4gLmFycm93cyA+IGxhYmVsOm50aC1vZi10eXBlKDMpLFxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSgzKTpjaGVja2VkIH4gLmFycm93cyA+IGxhYmVsOm50aC1vZi10eXBlKDQpLFxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSg0KTpjaGVja2VkIH4gLmFycm93cyA+IGxhYmVsOm50aC1vZi10eXBlKDUpLFxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSg1KTpjaGVja2VkIH4gLmFycm93cyA+IGxhYmVsOm50aC1vZi10eXBlKDYpLFxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSg2KTpjaGVja2VkIH4gLmFycm93cyA+IGxhYmVsOm50aC1vZi10eXBlKDcpLFxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSg3KTpjaGVja2VkIH4gLmFycm93cyA+IGxhYmVsOm50aC1vZi10eXBlKDgpLFxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSg4KTpjaGVja2VkIH4gLmFycm93cyA+IGxhYmVsOm50aC1vZi10eXBlKDkpLFxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSg5KTpjaGVja2VkIH4gLmFycm93cyA+IGxhYmVsOm50aC1vZi10eXBlKDEwKSxcclxuLmNzc2xpZGVyID4gaW5wdXQ6bnRoLW9mLXR5cGUoMTApOmNoZWNrZWQgfiAuYXJyb3dzID4gbGFiZWw6bnRoLW9mLXR5cGUoMTEpLFxyXG4uY3NzbGlkZXIgPiBpbnB1dDpudGgtb2YtdHlwZSgxMSk6Y2hlY2tlZCB+IC5hcnJvd3MgPiBsYWJlbDpudGgtb2YtdHlwZSgxMikge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XHJcbn1cclxuI3NsaWRlcjEge1xyXG4gIC8qIG1hcmdpbjogMjBweDsgICovXHJcbn0gXHJcbiNzbGlkZXIxID4gaW5wdXQ6bnRoLW9mLXR5cGUoMyk6Y2hlY2tlZCB+IHVsICNiZyB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBwYWRkaW5nOiAyMnB4O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogMC41cyAwLjVzO1xyXG4gIC1vLXRyYW5zaXRpb246IDAuNXMgMC41cztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXMgMC41cztcclxuICB0cmFuc2l0aW9uOiAwLjVzIDAuNXM7XHJcbn1cclxuI3NsaWRlcjEgPiBpbnB1dDpudGgtb2YtdHlwZSgzKTpjaGVja2VkIH4gdWwgI2JnIGRpdiB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICAtbW96LXRyYW5zaXRpb246IDAuNXMgMC45cztcclxuICAtby10cmFuc2l0aW9uOiAwLjVzIDAuOXM7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIDAuOXM7XHJcbiAgdHJhbnNpdGlvbjogMC41cyAwLjlzO1xyXG59XHJcbiNzbGlkZXIxID4gaW5wdXQ6bnRoLW9mLXR5cGUoNik6Y2hlY2tlZCB+IHVsICNkZXgtc2lnbiB7XHJcbiAgLW1vei1hbmltYXRpb246IHNpZ24tYW5pbSAzLjVzIDAuNXMgc3RlcHMoODUpIGZvcndhcmRzO1xyXG4gIC1vLWFuaW1hdGlvbjogc2lnbi1hbmltIDMuNXMgMC41cyBzdGVwcyg4NSkgZm9yd2FyZHM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNpZ24tYW5pbSAzLjVzIDAuNXMgc3RlcHMoODUpIGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbjogc2lnbi1hbmltIDMuNXMgMC41cyBzdGVwcyg4NSkgZm9yd2FyZHM7XHJcbn1cclxuI2JnIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBwYWRkaW5nOiAyMnB4IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAxNiU7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4jYmc6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTFweDtcclxuICB0b3A6IDFweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vZHJ5Z2llbC9jc3NsaWRlci9tYXN0ZXIvZXhhbXBsZXMvdGhlbWVzL2ZydWl0LmpwZykgMXB4IDIzJTtcclxuICAtd2Via2l0LWZpbHRlcjogYmx1cig3cHgpO1xyXG59XHJcbiNiZzphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAyMDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbiNiZyBkaXYge1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTIwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDEyMCUpO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDEyMCUpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTIwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTIwJSk7XHJcbn1cclxuLnNjcm9sbGFibGUgcCB7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xyXG4gIGZvbnQtc2l6ZTogMTIwJTtcclxufVxyXG4jY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjUlO1xyXG59XHJcbiNjZW50ZXIgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbn1cclxuLypfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyBMSU5LIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovXHJcbmEubmljZS1saW5rIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICM3MWFkMzc7XHJcbn1cclxuaDEgYS5uaWNlLWxpbms6YWZ0ZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTVmZjBlO1xyXG59XHJcbmEubmljZS1saW5rOmFmdGVyIHtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjb2xvcjogI2E1ZmYwZTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjM0EzQTNBO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcztcclxuICAtby10cmFuc2l0aW9uOiAwLjNzO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcbmEubmljZS1saW5rOmhvdmVyIHtcclxuICBjb2xvcjogIzcxYWQzNztcclxufVxyXG5hLm5pY2UtbGluazpob3ZlcjphZnRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLypfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyBTSUdOIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovXHJcbiNkZXgtc2lnbiB7XHJcbiAgd2lkdGg6IDI1NXB4O1xyXG4gIGhlaWdodDogODRweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMzMlO1xyXG4gIHRvcDogNDUlO1xyXG4gIG9wYWNpdHk6IDAuNzsgXHJcbn1cclxuI2RleC1zaWduOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMzAlKSBicmlnaHRuZXNzKDgwJSkgc2VwaWEoMTAwJSkgY29udHJhc3QoMTEwJSkgc2F0dXJhdGUoOTUzJSkgaHVlLXJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNpZ24tYW5pbSB7XHJcbiAgdG8ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtNzE0MHB4O1xyXG4gIH1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgc2lnbi1hbmltIHtcclxuICB0byB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC03MTQwcHg7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2lnbi1hbmltIHtcclxuICB0byB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC03MTQwcHg7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_signup_signup_service__WEBPACK_IMPORTED_MODULE_2__["SignupService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }, { type: src_app_services_errors_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/signup/signup.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/signup/signup.module.ts ***!
  \*************************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/modules/signup/signup-routing.module.ts");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.component */ "./src/app/modules/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class SignupModule {
}
SignupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SignupModule });
SignupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SignupModule_Factory(t) { return new (t || SignupModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__["SignupRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SignupModule, { declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__["SignupRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__["SignupRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-signup-signup-module.js.map