webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Shared/Services/facade.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacadeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gpdetails_sevice__ = __webpack_require__("../../../../../src/app/Shared/Services/gpdetails.sevice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patients_service__ = __webpack_require__("../../../../../src/app/Shared/Services/patients.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FacadeService = /** @class */ (function () {
    //......... Inject Dependencies
    function FacadeService(_patientService, _gpDetailService) {
        this._patientService = _patientService;
        this._gpDetailService = _gpDetailService;
    }
    //..........Get All Patients 
    FacadeService.prototype.GetPatients = function () {
        return this._patientService.getPatients();
    };
    //..........Get Patient By ID 
    FacadeService.prototype.GetPatient = function (ID) {
        return this._patientService.getPatient(ID);
    };
    //..........Save Patients To Database 
    FacadeService.prototype.SavePatient = function (patient) {
        return this._patientService.Save(patient);
    };
    //..........Update Patient  
    FacadeService.prototype.UpdatePatient = function (patient) {
        return this._patientService.UpdatePatient(patient);
    };
    //..........Delete Patient by ID
    FacadeService.prototype.DeletePatient = function (id) {
        return this._patientService.deletePatient(id);
    };
    //..........GetGpDetails for dropdownlist
    FacadeService.prototype.GetGpDetails = function () {
        return this._gpDetailService.getGpDetails();
    };
    //..........Save GPDetails in Database
    FacadeService.prototype.SaveGPDetails = function (gpDetail) {
        return this._gpDetailService.Save(gpDetail);
    };
    FacadeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
        //.......... Face Design Patten in Implemented 
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__patients_service__["a" /* PatientsService */],
            __WEBPACK_IMPORTED_MODULE_1__gpdetails_sevice__["a" /* GPDetailsService */]])
    ], FacadeService);
    return FacadeService;
}());



/***/ }),

/***/ "../../../../../src/app/Shared/Services/gpdetails.sevice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GPDetailsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_ErrorObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/ErrorObservable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GPDetailsService = /** @class */ (function () {
    //......    Inject dependencies 
    function GPDetailsService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.baseAPIUrl = 'http://localhost:58010/api';
    }
    //......   Get GPDetails
    GPDetailsService.prototype.getGpDetails = function () {
        return this._http.get(this.baseAPIUrl + '/GPDetail')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //......  Save General Practitioner data to database
    GPDetailsService.prototype.Save = function (gpDetail) {
        return this._httpClient.post(this.baseAPIUrl + '/GPDetail/AddGPDetail', gpDetail, {
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        }).catch(this.handleError);
        ;
    };
    GPDetailsService.prototype.handleError = function (errorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error :', errorResponse.error.message);
        }
        else {
            console.error('Server Side Error :', errorResponse);
        }
        return new __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */]('There is a problem with the service.We are notified & working on it. Please try again later.');
    };
    GPDetailsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
        //..........  GPDetailService
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], GPDetailsService);
    return GPDetailsService;
}());



/***/ }),

/***/ "../../../../../src/app/Shared/Services/patients.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_ErrorObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/ErrorObservable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PatientsService = /** @class */ (function () {
    //.............. Inject dependencies
    function PatientsService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.baseAPI_URL = 'http://localhost:58010/api';
    }
    //............... Get Patients
    PatientsService.prototype.getPatients = function () {
        return this._http.get(this.baseAPI_URL + '/Patient')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //............... Get Patient by ID
    PatientsService.prototype.getPatient = function (ID) {
        return this._http.get(this.baseAPI_URL + '/Patient/' + ID)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //............... Save Patient
    PatientsService.prototype.Save = function (patient) {
        return this._httpClient.post(this.baseAPI_URL + '/Patient/AddPatient', patient, {
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        }).catch(this.handleError);
        ;
    };
    //............... Update Patient
    PatientsService.prototype.UpdatePatient = function (patient) {
        return this._httpClient.put(this.baseAPI_URL + '/Patient/' + patient.ID, patient, {
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        }).catch(this.handleError);
    };
    //............... Delete Patient
    PatientsService.prototype.deletePatient = function (id) {
        return this._httpClient.delete(this.baseAPI_URL + '/Patient/' + id, {
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        }).catch(this.handleError);
    };
    PatientsService.prototype.handleError = function (errorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error :', errorResponse.error.message);
        }
        else {
            console.error('Server Side Error :', errorResponse);
        }
        // return an observable with a meaningful error message to the end user
        return new __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */]('There is a problem with the service.We are notified & working on it. Please try again later.');
    };
    PatientsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], PatientsService);
    return PatientsService;
}());



/***/ }),

/***/ "../../../../../src/app/Shared/select-required-valiator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectRequiredValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import input from @angular/core package

var SelectRequiredValidatorDirective = /** @class */ (function () {
    function SelectRequiredValidatorDirective() {
    }
    SelectRequiredValidatorDirective_1 = SelectRequiredValidatorDirective;
    SelectRequiredValidatorDirective.prototype.validate = function (control) {
        // Remove the hard-coded value and use the input property instead
        return control.value === this.appSelectValidator ?
            { 'defaultSelected': true } : null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SelectRequiredValidatorDirective.prototype, "appSelectValidator", void 0);
    SelectRequiredValidatorDirective = SelectRequiredValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* Directive */])({
            selector: '[appSelectValidator]',
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* NG_VALIDATORS */],
                    useExisting: SelectRequiredValidatorDirective_1,
                    multi: true
                }]
        })
    ], SelectRequiredValidatorDirective);
    return SelectRequiredValidatorDirective;
    var SelectRequiredValidatorDirective_1;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".backgroundColor{\r\n    background-color:#347AB6;\r\n}\r\n\r\n.linkDesign{\r\n    font-weight: bold;\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-default backgroundColor\">\n      <ul class=\"nav navbar-nav\">\n          <li> \n              <a routerLink=\"list\" style=\"color:white\" class=\"linkDesign\">LIST</a>\n          </li>\n          <li>\n              <a routerLink=\"edit/0\" style=\"color:white\" class=\"linkDesign\">CREATE PATIENT</a>\n          </li>\n          <li>\n              <a routerLink=\"creategpdetail\" style=\"color:white\" class=\"linkDesign\">CREATE GENERAL PRACTITIONER</a>\n          </li>\n      </ul>\n  </nav>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_datepicker__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Shared_select_required_valiator_directive__ = __webpack_require__("../../../../../src/app/Shared/select-required-valiator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__patients_create_patient_can_deactive_guard_service__ = __webpack_require__("../../../../../src/app/patients/create-patient-can-deactive-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__employees_list_employees_component__ = __webpack_require__("../../../../../src/app/employees/list-employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__patients_list_patients_component__ = __webpack_require__("../../../../../src/app/patients/list-patients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__patients_create_patient_component__ = __webpack_require__("../../../../../src/app/patients/create-patient.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__patients_patient_details_component__ = __webpack_require__("../../../../../src/app/patients/patient-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gpdetail_create_gpdetail_component__ = __webpack_require__("../../../../../src/app/gpdetail/create-gpdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Shared_Services_facade_service__ = __webpack_require__("../../../../../src/app/Shared/Services/facade.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Shared_Services_gpdetails_sevice__ = __webpack_require__("../../../../../src/app/Shared/Services/gpdetails.sevice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Shared_Services_patients_service__ = __webpack_require__("../../../../../src/app/Shared/Services/patients.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_11__patients_list_patients_component__["a" /* ListPatientsComponent */] },
    { path: 'edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_12__patients_create_patient_component__["a" /* CreatePatientComponent */],
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_6__patients_create_patient_can_deactive_guard_service__["a" /* CreateEmployeeCanDeactivateGuardService */]]
    },
    { path: 'patients/:id', component: __WEBPACK_IMPORTED_MODULE_13__patients_patient_details_component__["a" /* PatientDetailsComponent */] },
    { path: 'creategpdetail', component: __WEBPACK_IMPORTED_MODULE_14__gpdetail_create_gpdetail_component__["a" /* CreateGpdetailComponent */] },
    { path: '', redirectTo: '/list', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__employees_list_employees_component__["a" /* ListEmployeesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__patients_list_patients_component__["a" /* ListPatientsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__patients_create_patient_component__["a" /* CreatePatientComponent */],
                __WEBPACK_IMPORTED_MODULE_5__Shared_select_required_valiator_directive__["a" /* SelectRequiredValidatorDirective */],
                __WEBPACK_IMPORTED_MODULE_13__patients_patient_details_component__["a" /* PatientDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__gpdetail_create_gpdetail_component__["a" /* CreateGpdetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_15_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_16_ngx_pagination__["a" /* NgxPaginationModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_16_ngx_pagination__["a" /* NgxPaginationModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__Shared_Services_facade_service__["a" /* FacadeService */],
                __WEBPACK_IMPORTED_MODULE_18__Shared_Services_gpdetails_sevice__["a" /* GPDetailsService */],
                __WEBPACK_IMPORTED_MODULE_19__Shared_Services_patients_service__["a" /* PatientsService */],
                __WEBPACK_IMPORTED_MODULE_6__patients_create_patient_can_deactive_guard_service__["a" /* CreateEmployeeCanDeactivateGuardService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/employees/list-employees.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imageClass{\r\n    width:200px;\r\n    height:200px;\r\n}\r\n.vertical-align{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employees/list-employees.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" *ngFor=\"let employee of employees\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">{{employee.name}}</h3>\n  </div>\n  <div class=\"panel-body\">\n\n    <div class=\"col-xs-10\">\n\n      <div class=\"row vertical-align\">\n\n        <div class=\"col-xs-4\">\n          <img class=\"imageClass\" [src]=\"employee.photoPath\" />\n        </div>\n        <div class=\"col-xs-8\">\n\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Gender\n            </div>\n            <div class=\"col-xs-6\">\n              : {{employee.gender}}\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Date of Birth\n            </div>\n            <div class=\"col-xs-6\">\n              : {{employee.dateOfBirth | date}}\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Contact Preference\n            </div>\n            <div class=\"col-xs-6\">\n              : {{employee.contactPreference}}\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Phone\n            </div>\n            <div class=\"col-xs-6\">\n              : {{employee.phoneNumber}}\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Email\n            </div>\n            <div class=\"col-xs-6\">\n              : {{employee.email}}\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Department\n            </div>\n            <div class=\"col-xs-6\">\n              : {{employee.department}}\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Is Active\n            </div>\n            <div class=\"col-xs-6\">\n              : {{employee.isActive}}\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/employees/list-employees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListEmployeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListEmployeesComponent = /** @class */ (function () {
    function ListEmployeesComponent() {
        this.employees = [
            {
                id: 1,
                name: 'Mark',
                gender: 'Male',
                contactPreference: 'Email',
                email: 'mark@pragimtech.com',
                dateOfBirth: new Date('10/25/1988'),
                department: 'IT',
                isActive: true,
                photoPath: 'assets/images/mark.png'
            },
            {
                id: 2,
                name: 'Mary',
                gender: 'Female',
                contactPreference: 'Phone',
                phoneNumber: 2345978640,
                dateOfBirth: new Date('11/20/1979'),
                department: 'HR',
                isActive: true,
                photoPath: 'assets/images/mary.png'
            },
            {
                id: 3,
                name: 'John',
                gender: 'Male',
                contactPreference: 'Phone',
                phoneNumber: 5432978640,
                dateOfBirth: new Date('3/25/1976'),
                department: 'IT',
                isActive: false,
                photoPath: 'assets/images/john.png'
            },
        ];
    }
    ListEmployeesComponent.prototype.ngOnInit = function () {
    };
    ListEmployeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-employees',
            template: __webpack_require__("../../../../../src/app/employees/list-employees.component.html"),
            styles: [__webpack_require__("../../../../../src/app/employees/list-employees.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListEmployeesComponent);
    return ListEmployeesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gpdetail/create-gpdetail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gpdetail/create-gpdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-2\">\n      </div>\n\n  <div class=\"col-md-8\">\n  <form #gpDetailForm=\"ngForm\" ngNativeValidate novalidate (ngSubmit)=\"saveGPDetail()\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Create GP Detail</h3>\n      </div>\n     \n      <div class=\"panel-body\">\n\n       <div class=\"row\">\n          <div class=\"col-md-6\">\n        <div class=\"form-group\" [class.has-error]=\"GPCode.invalid && GPCode.touched\"\n           [class.has-success] = \"GPCode.valid\">\n          <label for=\"GPCode\" class=\"control-label\">Pass Number</label>\n          <input required id=\"GPCode\" maxlength=\"8\"  type=\"text\" #GPCode=\"ngModel\" class=\"form-control\"\n                 name=\"GPCode\" [(ngModel)]=\"gpDetail.GPCode\">\n                 <span class=\"help-block\" *ngIf=\"GPCode.invalid && GPCode.touched\">\n                   Pass Number is required\n                 </span>\n        </div>\n\n      </div>\n      <div class=\"col-md-6\">\n          <div class=\"form-group\" [class.has-error]=\"GPSurname.invalid && GPSurname.touched\"\n             [class.has-success] = \"GPSurname.valid\">\n            <label for=\"GPSurname\" class=\"control-label\">Sur Name</label>\n            <input required id=\"GPSurname\" maxlength=\"8\"  type=\"text\" #GPSurname=\"ngModel\" class=\"form-control\"\n                   name=\"GPSurname\" [(ngModel)]=\"gpDetail.GPSurname\">\n                   <span class=\"help-block\" *ngIf=\"GPSurname.invalid && GPSurname.touched\">\n                    Sur Name is required\n                   </span>\n          </div>\n  \n        </div>\n        </div>\n        <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"form-group\" [class.has-error]=\"GPInitials.invalid && GPInitials.touched\"\n               [class.has-success] = \"GPInitials.valid\">\n              <label for=\"GPInitials\" class=\"control-label\">GP Initials</label>\n              <input required id=\"GPInitials\" maxlength=\"8\"  type=\"text\" #GPInitials=\"ngModel\" class=\"form-control\"\n                     name=\"GPInitials\" [(ngModel)]=\"gpDetail.GPInitials\">\n                     <span class=\"help-block\" *ngIf=\"GPInitials.invalid && GPInitials.touched\">\n                       GP Initial is required\n                     </span>\n            </div>\n    \n          </div>\n\n          <div class=\"col-md-6\">\n              <div class=\"form-group\" [class.has-error]=\"GPPhone.invalid && GPPhone.touched\"\n                 [class.has-success] = \"GPPhone.valid\">\n                <label for=\"GPPhone\" class=\"control-label\">GP Phone</label>\n                <input required id=\"GPPhone\" maxlength=\"8\"  type=\"text\" #GPPhone=\"ngModel\" class=\"form-control\"\n                       name=\"GPPhone\" [(ngModel)]=\"gpDetail.GPPhone\">\n                       <span class=\"help-block\" *ngIf=\"GPPhone.invalid && GPPhone.touched\">\n                         Phone Number is required\n                       </span>\n              </div>\n      \n            </div>\n\n     \n      </div>\n \n      </div>\n\n      <div class=\"panel-footer\">\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"gpDetailForm.invalid\">Save</button>\n      </div>\n    </div>\n  </form>\n</div>\n<div class=\"col-md-2\">\n\n    <!-- <app-list-patient></app-list-patient> -->\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/gpdetail/create-gpdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateGpdetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Shared_Services_facade_service__ = __webpack_require__("../../../../../src/app/Shared/Services/facade.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateGpdetailComponent = /** @class */ (function () {
    function CreateGpdetailComponent(_facadeService, _router) {
        this._facadeService = _facadeService;
        this._router = _router;
        this.gpDetail = {
            ID: null,
            GPCode: null,
            GPSurname: null,
            GPInitials: null,
            GPPhone: null
        };
    }
    CreateGpdetailComponent.prototype.ngOnInit = function () {
    };
    CreateGpdetailComponent.prototype.saveGPDetail = function (employeeForm) {
        var _this = this;
        this._facadeService.SaveGPDetails(this.gpDetail).subscribe(function (data) {
            console.log(data);
            _this.CreateGPForm.reset();
            _this._router.navigate(['list']);
        }, function (error) { return console.log(error); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('gpDetailForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgForm */])
    ], CreateGpdetailComponent.prototype, "CreateGPForm", void 0);
    CreateGpdetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-gpdetail',
            template: __webpack_require__("../../../../../src/app/gpdetail/create-gpdetail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gpdetail/create-gpdetail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__Shared_Services_facade_service__["a" /* FacadeService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CreateGpdetailComponent);
    return CreateGpdetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/patients/create-patient-can-deactive-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEmployeeCanDeactivateGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateEmployeeCanDeactivateGuardService = /** @class */ (function () {
    function CreateEmployeeCanDeactivateGuardService() {
    }
    CreateEmployeeCanDeactivateGuardService.prototype.canDeactivate = function (component) {
        if (component.CreatePatientForm.dirty) {
            return confirm('Are you sure you want to discard your changes?');
        }
        return true;
    };
    CreateEmployeeCanDeactivateGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CreateEmployeeCanDeactivateGuardService);
    return CreateEmployeeCanDeactivateGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/patients/create-patient.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/patients/create-patient.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-2\">\n      </div>\n\n  <div class=\"col-md-8\">\n  <form #employeeForm=\"ngForm\" ngNativeValidate novalidate (ngSubmit)=\"savePatients()\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">{{panelTitle}}</h3>\n      </div>\n     \n      <div class=\"panel-body\">\n          <fieldset >\n              <legend>Basic Information</legend>\n       <div class=\"row\">\n          <div class=\"col-md-6\">\n        <div class=\"form-group\" [class.has-error]=\"PassNumber.invalid && PassNumber.touched\"\n           [class.has-success] = \"PassNumber.valid\">\n          <label for=\"PassNumber\" class=\"control-label\">Pass Number</label>\n          <input required id=\"PassNumber\" maxlength=\"8\"  type=\"text\" #PassNumber=\"ngModel\" class=\"form-control\"\n                 name=\"PassNumber\" [(ngModel)]=\"patients.PassNumber\">\n                 <span class=\"help-block\" *ngIf=\"PassNumber.invalid && PassNumber.touched\">\n                   Pass Number is required\n                 </span>\n        </div>\n\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\" [class.has-error]=\"ForeNames.invalid && ForeNames.touched\"\n        [class.has-success] = \"ForeNames.valid\">        \n          <label for=\"ForeNames\" class=\"control-label\">Fore Name</label>\n          <input required id=\"ForeNames\" type=\"text\" #ForeNames=\"ngModel\" class=\"form-control\"\n                 name=\"ForeNames\" maxlength=\"12\" [(ngModel)]=\"patients.ForeNames\">\n                 <span class=\"help-block\" *ngIf=\"ForeNames.invalid && ForeNames.touched\">\n                  Fore Names is required\n                </span>\n        </div>\n      </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"DateOfBirth\">Date of Birth</label>\n            <input readonly=\"true\" id=\"DateOfBirth\"  name=\"DateOfBirth\" [(ngModel)]=\"patients.DateOfBirth\" placement=\"bottom\"\n                    type=\"text\" bsDatepicker [bsConfig]=\"datePickerConfig\" class=\"form-control\" />\n          </div>\n\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"form-group\" [class.has-error]=\"Gender.invalid && Gender.touched\">\n                <label class=\"control-label\">Gender</label>\n                <div class=\"form-control\">\n                  <label class=\"radio-inline\">\n                    <input type=\"radio\" required #Gender=\"ngModel\" name=\"Gender\" value=\"male\" [(ngModel)]=\"patients.Gender\">\n                    Male\n                  </label>\n                  <label class=\"radio-inline\">\n                    <input type=\"radio\" required #Gender=\"ngModel\" name=\"Gender\" value=\"female\" [(ngModel)]=\"patients.Gender\">\n                    Female\n                  </label>\n                  <span class=\"help-block\" *ngIf=\"Gender.invalid && Gender.touched\">\n                    Gender is required\n                  </span>\n                </div>\n              </div>   \n\n          </div>\n\n      </div>\n     \n      <div class=\"row\">\n          <div class=\"col-md-6\">\n              <div class=\"form-group\" [class.has-error]=\"HomeTelephoneNumber.invalid && HomeTelephoneNumber.touched\"\n              [class.has-success] = \"HomeTelephoneNumber.valid\"\n              >\n                  <label  for=\"HomeTelephoneNumber\" class=\"control-label\">Home Telephone Number</label>\n                  <input required id=\"HomeTelephoneNumber\" maxlength=\"15\" type=\"text\" #HomeTelephoneNumber=\"ngModel\" class=\"form-control\"\n                         name=\"HomeTelephoneNumber\" [(ngModel)]=\"patients.HomeTelephoneNumber\">\n                         <span class=\"help-block\" *ngIf=\"HomeTelephoneNumber.invalid && HomeTelephoneNumber.touched\">\n                          Telephone Number is required\n                        </span>\n                </div>\n  \n          </div>\n          <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                  <div class=\"form-group\" [class.has-error]=\"GeneralPartitioner.invalid && GeneralPartitioner.touched\"\n                  [class.has-success] = \"GeneralPartitioner.valid\">\n                      <label for=\"GeneralPartitioner\">General Practitioner</label>\n                      <select id=\"GeneralPartitioner\" appSelectValidator=\"-1\"  name=\"GeneralPartitioner\"\n                              [(ngModel)]=\"patients.GeneralPartitioner\"  class=\"form-control\" #GeneralPartitioner=\"ngModel\">\n                              \n                              <option  value=\"-1\">Please Select</option>\n                              <option *ngFor=\"let gp of generalPractitioners\" [value]=\"gp.ID\">\n                                  {{gp.GPSurname}}\n                                </option>\n                      </select>\n                      <span class=\"help-block\" *ngIf=\"GeneralPartitioner.touched && GeneralPartitioner.errors?.defaultSelected \">\n                        General Practitioner is required\n                      </span>\n                    </div>\n                </div>   \n            </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n        <div class=\"form-group\" [class.has-error]=\"SurName.invalid && SurName.touched\"\n           [class.has-success] = \"SurName.valid\">\n          <label for=\"SurName\" class=\"control-label\">Sur Name</label>\n          <input required id=\"SurName\" maxlength=\"8\"  type=\"text\" #SurName=\"ngModel\" class=\"form-control\"\n                 name=\"SurName\" [(ngModel)]=\"patients.SurName\">\n                 <span class=\"help-block\" *ngIf=\"SurName.invalid && SurName.touched\">\n                    Sur Name  is required\n                 </span>\n        </div>\n\n      </div>\n      <div class=\"col-md-6\">\n    \n      </div>\n      </div>\n      </fieldset>\n\n      <fieldset >\n          <legend>Next Of Kin Information</legend>\n   <div class=\"row\">\n      <div class=\"col-md-6\">\n    <div class=\"form-group\" [class.has-error]=\"NOKName.invalid && NOKName.touched\"\n    [class.has-success] = \"NOKName.valid\">\n      <label for=\"NOKName\" class=\"control-label\">NOK Name</label>\n      <input required id=\"NOKName\" type=\"text\" #NOKName=\"ngModel\" class=\"form-control\"\n             name=\"NOKName\" maxlength=\"12\" [(ngModel)]=\"patients.NOKName\">\n             <span class=\"help-block\" *ngIf=\"NOKName.invalid && NOKName.touched\">\n              Next Of Kin Name is required\n            </span>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"form-group\" [class.has-error]=\"relationShip.invalid && relationShip.touched\"\n    [class.has-success] = \"relationShip.valid\">\n\n      <label for=\"relationShip\" class=\"control-label\">Relation Ship</label>\n      <input required id=\"relationShip\" type=\"text\" #relationShip=\"ngModel\" class=\"form-control\"\n             name=\"relationShip\" [(ngModel)]=\"patients.relationShip\">\n             <span class=\"help-block\" maxlength=\"12\" *ngIf=\"relationShip.invalid && relationShip.touched\">\n              RelationShip is required\n            </span>\n    </div>\n  </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"form-group\" [class.has-error]=\"NOKAddress1.invalid && NOKAddress1.touched\"\n        [class.has-success] = \"NOKAddress1.valid\"\n        >\n            <label for=\"NOKAddress1\" class=\"control-label\">NOK Address 1</label>\n            <textarea required id=\"NOKAddress1\" type=\"text\" #NOKAddress1=\"ngModel\" rows=\"3\"  class=\"form-control\"\n                   name=\"NOKAddress1\" [(ngModel)]=\"patients.NOKAddress1\"></textarea>\n                   <span class=\"help-block\" *ngIf=\"NOKAddress1.invalid && NOKAddress1.touched\">\n                   Address 1 Name is required\n                  </span>\n          </div>          \n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"form-group\">\n            <label for=\"NOKAddress2\">NOK Address 2</label>\n            <textarea id=\"NOKAddress2\" rows=\"3\" type=\"text\" class=\"form-control\"\n                   name=\"NOKAddress2\" [(ngModel)]=\"NOKAddress2\"></textarea>\n          </div> \n\n      </div>\n\n  </div>\n \n  <div class=\"row\">\n      <div class=\"col-md-6\">\n          <div class=\"form-group\">\n              <label for=\"NOKAddress3\">NOK Address 3</label>\n              <textarea id=\"NOKAddress3\" rows=\"3\" type=\"text\" class=\"form-control\"\n                     name=\"NOKAddress3\" [(ngModel)]=\"NOKAddress3\"></textarea>\n            </div>\n\n      </div>\n      <div class=\"col-md-6\">\n          <div class=\"form-group\">\n              <label for=\"NOKAddress4\">NOK Address 4</label>\n              <textarea id=\"NOKAddress4\" rows=\"3\" type=\"text\" class=\"form-control\"\n                     name=\"NOKAddress4\" [(ngModel)]=\"NOKAddress4\"></textarea>\n            </div>\n        </div>\n    </div>\n  </fieldset>\n\n      </div>\n\n      <div class=\"panel-footer\">\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"employeeForm.invalid\">Save</button>\n      </div>\n    </div>\n  </form>\n</div>\n<div class=\"col-md-2\">\n\n    <!-- <app-list-patient></app-list-patient> -->\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/patients/create-patient.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePatientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Shared_Services_facade_service__ = __webpack_require__("../../../../../src/app/Shared/Services/facade.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreatePatientComponent = /** @class */ (function () {
    function CreatePatientComponent(_facadeService, _router, _route) {
        this._facadeService = _facadeService;
        this._router = _router;
        this._route = _route;
        this.gender = 'male';
        this.patients = {
            ID: null,
            PassNumber: null,
            ForeNames: null,
            SurName: null,
            DateOfBirth: null,
            Gender: null,
            GeneralPartitioner: '-1',
            HomeTelephoneNumber: null,
            NOKName: null,
            relationShip: null,
            NOKAddress1: null,
            NOKAddress2: null,
            NOKAddress3: null,
            NOKAddress4: null,
            GPSurName: null
        };
        this.datePickerConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue',
            showWeekNumbers: true,
            dateInputFormat: 'YYYY-MM-DD'
        });
    }
    CreatePatientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (parameterMap) {
            var id = +parameterMap.get('id');
            _this.getEmployee(id);
        });
    };
    CreatePatientComponent.prototype.getEmployee = function (ID) {
        var _this = this;
        if (ID === 0) {
            this.patients = {
                ID: null,
                PassNumber: null,
                ForeNames: null,
                SurName: null,
                DateOfBirth: null,
                Gender: null,
                GeneralPartitioner: '-1',
                HomeTelephoneNumber: null,
                NOKName: null,
                relationShip: null,
                NOKAddress1: null,
                NOKAddress2: null,
                NOKAddress3: null,
                NOKAddress4: null,
                GPSurName: null
            };
            this._facadeService.GetGpDetails().subscribe(function (generalPractitioners) { return _this.generalPractitioners = generalPractitioners; });
            this.panelTitle = "Create Employee";
        }
        else {
            this._facadeService.GetGpDetails().subscribe(function (generalPractitioners) { return _this.generalPractitioners = generalPractitioners; });
            this.panelTitle = "Update Employee";
            this._facadeService.GetPatient(ID).subscribe(function (patientData) { return _this.patients = patientData; });
        }
    };
    CreatePatientComponent.prototype.savePatients = function (employeeForm) {
        var _this = this;
        if (this.patients.ID == null) {
            this._facadeService.SavePatient(this.patients).subscribe(function (data) {
                console.log(data);
                _this.CreatePatientForm.reset();
                _this._router.navigate(['list']);
            }, function (error) { return console.log(error); });
        }
        else {
            this._facadeService.UpdatePatient(this.patients).subscribe(function () {
                _this.CreatePatientForm.reset();
                _this._router.navigate(['list']);
            }, function (error) { return console.log(error); });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('employeeForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgForm */])
    ], CreatePatientComponent.prototype, "CreatePatientForm", void 0);
    CreatePatientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-patient',
            template: __webpack_require__("../../../../../src/app/patients/create-patient.component.html"),
            styles: [__webpack_require__("../../../../../src/app/patients/create-patient.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__Shared_Services_facade_service__["a" /* FacadeService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], CreatePatientComponent);
    return CreatePatientComponent;
}());



/***/ }),

/***/ "../../../../../src/app/patients/list-patients.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".CursorPointer{\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.backgroundColor{\r\n    background-color:#347AB6;\r\n}\r\n\r\n\r\n.textcolor{\r\n    color: white;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/patients/list-patients.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\" table-responsive\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n        <nav class=\"navbar\">\n            <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" placeholder=\"Search\">      \n          </nav>\n\n    </div>\n   \n</div>\n<table class=\"table table-bordered\">\n  <thead>\n    <tr class=\"backgroundColor\">      \n      <th class=\"textcolor\">Pass Number</th>\n    \n      <th class=\"textcolor\">Sur Name</th>\n      <th class=\"textcolor\">Date Of Birth</th>\n      <th class=\"textcolor\">Gender</th>\n      <th class=\"textcolor\">Action</th>\n    </tr> \n  </thead> \n  <tbody style=\"text-align: center\">\n    <tr *ngFor=\"let patient of patients | filter:filter | paginate: { itemsPerPage: 8, currentPage: p }; let i = index\">\n        \n      <td >{{ patient.PassNumber | titlecase }}</td>\n    \n      <td>{{ patient.SurName | titlecase }}</td>\n      <td>{{ patient.DateOfBirth | date }}</td>\n      <td>{{ patient.Gender | titlecase}}</td>\n      <td>\n         <button class=\"CursorPointer\" type=\"button\" (click)=\"onDetail(patient.ID)\" class=\"btn btn-primary btn-sm\">Detail</button> \n        | <button class=\"CursorPointer\" type=\"button\" (click)=\"onDelete(patient.ID)\" class=\"btn btn-danger btn-sm\">Delete</button>  \n        | <button class=\"CursorPointer\" type=\"button\" (click)=\"onEdit(patient.ID)\" class=\"btn btn-success\">Edit</button> \n       </td>\n    </tr> \n    <tr> \n      \n      <td colspan=\"6\"><pagination-controls (pageChange)=\"p = $event\"></pagination-controls></td>\n      \n    </tr>\n  </tbody>\n  \n</table>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/patients/list-patients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPatientsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Shared_Services_facade_service__ = __webpack_require__("../../../../../src/app/Shared/Services/facade.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPatientsComponent = /** @class */ (function () {
    function ListPatientsComponent(_facadePattern, _router) {
        this._facadePattern = _facadePattern;
        this._router = _router;
        //initializing p to one
        this.p = 1;
    }
    ListPatientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this._patientService.getPatients().subscribe((patientData)=>this.patients=patientData);
        this._facadePattern.GetPatients().subscribe(function (patientData) { return _this.patients = patientData; });
        ;
    };
    ListPatientsComponent.prototype.onDetail = function (patientID) {
        this._router.navigate(['/patients', patientID]);
    };
    ListPatientsComponent.prototype.onDelete = function (patientID) {
        var _this = this;
        if (confirm("Are you sure to delete ?")) {
            this._facadePattern.DeletePatient(patientID).subscribe(function () {
                _this._router.navigate(['list']);
            }, function (error) { return console.log(error); });
            //   this._router.navigate(['/patients',patientID]);
        }
    };
    ListPatientsComponent.prototype.onEdit = function (patientID) {
        this._router.navigate(['/edit', patientID]);
    };
    ListPatientsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-patient',
            template: __webpack_require__("../../../../../src/app/patients/list-patients.component.html"),
            styles: [__webpack_require__("../../../../../src/app/patients/list-patients.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Shared_Services_facade_service__["a" /* FacadeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ListPatientsComponent);
    return ListPatientsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/patients/patient-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/patients/patient-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">{{patientdetail?.ForeNames}}</h3>\n  </div>\n  <div class=\"panel-body\">\n    <div class=\"col-xs-10\">\n      <div class=\"row vertical-align\">      \n        <div class=\"col-xs-8\">\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Pass Number\n            </div>\n            <div class=\"col-xs-6\">\n              : {{patientdetail?.PassNumber}}\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n             Fore Names\n            </div>\n            <div class=\"col-xs-6\">\n              :  {{patientdetail?.ForeNames}}\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n             Sur Names\n            </div>\n            <div class=\"col-xs-6\">\n              :  {{patientdetail?.SurName}}\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Date Of Birth\n            </div>\n            <div class=\"col-xs-6\">\n              :  {{patientdetail?.DateOfBirth | date}}\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Gender\n            </div>\n            <div class=\"col-xs-6\">\n              :  {{patientdetail?.Gender}}\n            </div>\n          </div>\n      \n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Home Telephone Number\n            </div>\n            <div class=\"col-xs-6\">\n              :  {{patientdetail?.HomeTelephoneNumber}}\n            </div>\n          </div>\n\n          <div class=\"row\">\n              <div class=\"col-xs-6\">\n                  General Partitioner\n              </div>\n              <div class=\"col-xs-6\">\n                :  {{patientdetail?.GPSurName}}\n              </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-xs-6\">\n                 Next Of Kin Name\n                </div>\n                <div class=\"col-xs-6\">\n                  :  {{patientdetail?.NOKName}}\n                </div>\n              </div>\n\n              <div class=\"row\">\n                  <div class=\"col-xs-6\">\n                   Relation\n                  </div>\n                  <div class=\"col-xs-6\">\n                    :  {{patientdetail?.relationShip}}\n                  </div>\n                </div>\n\n              <div class=\"row\">\n                  <div class=\"col-xs-6\">\n                   Nok Address 1\n                  </div>\n                  <div class=\"col-xs-6\">\n                    :  {{patientdetail?.NOKAddress1}}\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-xs-6\">\n                        Nok Address 2\n                    </div>\n                    <div class=\"col-xs-6\">\n                      :  {{patientdetail?.NOKAddress2}}\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                      <div class=\"col-xs-6\">\n                          Nok Address 3\n                      </div>\n                      <div class=\"col-xs-6\">\n                        :  {{patientdetail?.NOKAddress3}}\n                      </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-xs-6\">\n                            Nok Address 4\n                        </div>\n                        <div class=\"col-xs-6\">\n                          :  {{patientdetail?.NOKAddress4}}\n                        </div>\n                      </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel-footer\">\n    <a class=\"btn btn-primary\" routerLink=\"/list\">\n      Back to List\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/patients/patient-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Shared_Services_facade_service__ = __webpack_require__("../../../../../src/app/Shared/Services/facade.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientDetailsComponent = /** @class */ (function () {
    function PatientDetailsComponent(_route, _facadeService) {
        this._route = _route;
        this._facadeService = _facadeService;
    }
    PatientDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._route.snapshot.params['id'];
        this._facadeService.GetPatient(id).subscribe(function (patientData) { return _this.patientdetail = patientData; });
        //this.patient = this._patientService.getPatient(id);
    };
    PatientDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-patient-details',
            template: __webpack_require__("../../../../../src/app/patients/patient-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/patients/patient-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__Shared_Services_facade_service__["a" /* FacadeService */]])
    ], PatientDetailsComponent);
    return PatientDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map