(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <span>Events table</span>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/table-modal/table-modal.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/table-modal/table-modal.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"delete-button\">\r\n    <button mat-button color=\"accent\" (click)=\"delete()\">Accent</button>\r\n  </div>\r\n\r\n  <form *ngIf=\"frm\"\r\n        [formGroup]=\"frm\">\r\n\r\n    <mat-form-field>\r\n      <mat-label>ID</mat-label>\r\n      <input matInput\r\n             title=\"ID\"\r\n             formControlName=\"id\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-label>Date</mat-label>\r\n      <input matInput\r\n             title=\"Date\"\r\n             formControlName=\"date\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-label>Age</mat-label>\r\n      <input matInput\r\n             title=\"Age\"\r\n             formControlName=\"age\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-label>Description</mat-label>\r\n      <input matInput\r\n             title=\"Description\"\r\n             formControlName=\"description\">\r\n    </mat-form-field>\r\n\r\n  </form>\r\n\r\n  <mat-dialog-actions>\r\n    <button class=\"mat-raised-button\"(click)=\"close()\">Close</button>\r\n    <button class=\"mat-raised-button mat-primary\"(click)=\"save()\">Save</button>\r\n  </mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/table/table.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/table/table.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table\">\r\n  <ng-container [ngSwitch]=\"actionStatus$$.latestValue\">\r\n    <ng-container *ngSwitchCase=\"actionStatus$$.latestValue?.action === action.Load && actionStatus$$.latestValue?.status === status.Error\">\r\n      <mat-error>\r\n        Error while loading table\r\n      </mat-error>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"actionStatus$$.latestValue?.action === action.Load && actionStatus$$.latestValue?.status === status.Pending\">\r\n      spinner<mat-spinner></mat-spinner>\r\n    </ng-container>\r\n  </ng-container>\r\n  <div class=\"table-content\">\r\n\r\n    <table mat-table [dataSource]=\"tableSource\" class=\"mat-elevation-z8\" matSort>\r\n\r\n      <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"time\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n        <td mat-cell *matCellDef=\"let element\"> <b>{{element.time | date : 'dd/mm/yyyy HH:mm'}}</b> </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"eventLabel\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Event Name </th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          {{element.eventLabel}}\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"age\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> DIM\\age </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.age}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"descriptionValue\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.descriptionLabel}}: <b>{{element.descriptionValue | checkIfBoolean}}</b> </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns\" (click)=\"showModal(row)\"></tr>\r\n    </table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[15, 20, 50, 100]\" showFirstLastButtons></mat-paginator>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_pages_table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/pages/table/table.component */ "./src/app/pages/table/table.component.ts");
/* harmony import */ var _app_commons_resolvers_table_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/commons/resolvers/table.resolver */ "./src/app/commons/resolvers/table.resolver.ts");





const routes = [{
        path: '',
        component: _app_pages_table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"],
        resolve: {
            table: _app_commons_resolvers_table_resolver__WEBPACK_IMPORTED_MODULE_4__["TableResolver"],
        }
    }];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'milk';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _pages_table_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/table/table.component */ "./src/app/pages/table/table.component.ts");
/* harmony import */ var _app_commons_resolvers_table_resolver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/commons/resolvers/table.resolver */ "./src/app/commons/resolvers/table.resolver.ts");
/* harmony import */ var _commons_pipes_check_if_boolean_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./commons/pipes/check-if-boolean.pipe */ "./src/app/commons/pipes/check-if-boolean.pipe.ts");
/* harmony import */ var _pages_table_modal_table_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/table-modal/table-modal.component */ "./src/app/pages/table-modal/table-modal.component.ts");
















const ANGULAR_MODULES = [
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
    _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
];
const MATERIAL_MODULES = [
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
];
const PROVIDERS = [
    _app_commons_resolvers_table_resolver__WEBPACK_IMPORTED_MODULE_13__["TableResolver"],
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _pages_table_table_component__WEBPACK_IMPORTED_MODULE_12__["TableComponent"],
            _commons_pipes_check_if_boolean_pipe__WEBPACK_IMPORTED_MODULE_14__["CheckIfBooleanPipe"],
            _pages_table_modal_table_modal_component__WEBPACK_IMPORTED_MODULE_15__["TableModalComponent"],
        ],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ANGULAR_MODULES,
            MATERIAL_MODULES,
        ],
        exports: [
            ANGULAR_MODULES,
            MATERIAL_MODULES,
        ],
        providers: [PROVIDERS],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [_pages_table_modal_table_modal_component__WEBPACK_IMPORTED_MODULE_15__["TableModalComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/commons/enums/actions.enum.ts":
/*!***********************************************!*\
  !*** ./src/app/commons/enums/actions.enum.ts ***!
  \***********************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
var Action;
(function (Action) {
    Action[Action["Load"] = 0] = "Load";
    Action[Action["Edit"] = 1] = "Edit";
    Action[Action["Delete"] = 2] = "Delete";
})(Action || (Action = {}));


/***/ }),

/***/ "./src/app/commons/enums/result-type.enum.ts":
/*!***************************************************!*\
  !*** ./src/app/commons/enums/result-type.enum.ts ***!
  \***************************************************/
/*! exports provided: ResultType, RESULT_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultType", function() { return ResultType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESULT_DATA", function() { return RESULT_DATA; });
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/models */ "./src/app/shared/models/index.ts");

var ResultType;
(function (ResultType) {
    ResultType["birth"] = "birth";
    ResultType["breeding"] = "breeding";
    ResultType["calving"] = "calving";
    ResultType["changeGroup"] = "changeGroup";
    ResultType["distress"] = "distress";
    ResultType["dryOff"] = "dryOff";
    ResultType["herdEntry"] = "herdEntry";
    ResultType["systemHealth"] = "systemHealth";
    ResultType["systemHeat"] = "systemHeat";
})(ResultType || (ResultType = {}));
const RESULT_DATA = new _shared_models__WEBPACK_IMPORTED_MODULE_0__["FlatMap"]([
    {
        key: ResultType.birth,
        eventLabel: 'Birth',
        descriptionLabel: 'Birth Day Calculated',
        icon: 'done',
        fieldToShow: 'birthDateCalculated',
    },
    {
        key: ResultType.breeding,
        eventLabel: 'Breeding',
        descriptionLabel: 'Breeding Number',
        icon: 'done',
        fieldToShow: 'breedingNumber',
    },
    {
        key: ResultType.calving,
        eventLabel: 'Calving',
        descriptionLabel: 'Day In Pregnancy',
        icon: 'done',
        fieldToShow: 'daysInPregnancy',
    },
    {
        key: ResultType.changeGroup,
        eventLabel: 'Change Group',
        descriptionLabel: 'New Group Name',
        icon: 'done',
        fieldToShow: 'newGroupName',
    },
    {
        key: ResultType.distress,
        eventLabel: 'Distress',
        descriptionLabel: 'Duration',
        icon: 'done',
        fieldToShow: 'duration',
    },
    {
        key: ResultType.dryOff,
        eventLabel: 'Dry Off',
        descriptionLabel: 'Destination Group Name',
        icon: 'done',
        fieldToShow: 'destinationGroupName',
    },
    {
        key: ResultType.herdEntry,
        eventLabel: 'Herd Entry',
        descriptionLabel: 'Status',
        icon: 'done',
        fieldToShow: 'cowEntryStatus',
    },
    {
        key: ResultType.systemHealth,
        eventLabel: 'System Health',
        descriptionLabel: 'Health Index',
        icon: 'done',
        fieldToShow: 'healthIndex',
    },
    {
        key: ResultType.systemHeat,
        eventLabel: 'System Heat',
        descriptionLabel: 'Heat Index',
        icon: 'done',
        fieldToShow: 'heatIndexPeak',
    },
], 'key');


/***/ }),

/***/ "./src/app/commons/enums/statuses.enum.ts":
/*!************************************************!*\
  !*** ./src/app/commons/enums/statuses.enum.ts ***!
  \************************************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Error"] = 2] = "Error";
})(Status || (Status = {}));


/***/ }),

/***/ "./src/app/commons/pipes/check-if-boolean.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/commons/pipes/check-if-boolean.pipe.ts ***!
  \********************************************************/
/*! exports provided: CheckIfBooleanPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckIfBooleanPipe", function() { return CheckIfBooleanPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CheckIfBooleanPipe = class CheckIfBooleanPipe {
    transform(value, ...args) {
        if (typeof value === 'boolean') {
            return value ? 'yes' : 'no';
        }
        return value;
    }
};
CheckIfBooleanPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'checkIfBoolean'
    })
], CheckIfBooleanPipe);



/***/ }),

/***/ "./src/app/commons/resolvers/table.resolver.ts":
/*!*****************************************************!*\
  !*** ./src/app/commons/resolvers/table.resolver.ts ***!
  \*****************************************************/
/*! exports provided: TableResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableResolver", function() { return TableResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/table.service */ "./src/app/services/table.service.ts");
/* harmony import */ var _app_commons_enums_actions_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/commons/enums/actions.enum */ "./src/app/commons/enums/actions.enum.ts");
/* harmony import */ var _app_commons_enums_statuses_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/commons/enums/statuses.enum */ "./src/app/commons/enums/statuses.enum.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let TableResolver = class TableResolver {
    constructor(_tableService) {
        this._tableService = _tableService;
    }
    resolve(route, state) {
        this._tableService.setActionStatus({
            action: _app_commons_enums_actions_enum__WEBPACK_IMPORTED_MODULE_3__["Action"].Load,
            status: _app_commons_enums_statuses_enum__WEBPACK_IMPORTED_MODULE_4__["Status"].Pending,
        });
        this._tableService.loadTable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(700)).subscribe((res) => {
            this._tableService.setTableData(res);
            this._tableService.setActionStatus({
                action: _app_commons_enums_actions_enum__WEBPACK_IMPORTED_MODULE_3__["Action"].Load,
                status: _app_commons_enums_statuses_enum__WEBPACK_IMPORTED_MODULE_4__["Status"].Success,
            });
        }, error => {
            this._tableService.setActionStatus({
                action: _app_commons_enums_actions_enum__WEBPACK_IMPORTED_MODULE_3__["Action"].Load,
                status: _app_commons_enums_statuses_enum__WEBPACK_IMPORTED_MODULE_4__["Status"].Error,
            });
        });
        return true;
    }
};
TableResolver.ctorParameters = () => [
    { type: _app_services_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"] }
];
TableResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TableResolver);



/***/ }),

/***/ "./src/app/pages/table-modal/table-modal.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/table-modal/table-modal.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete-button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFibGUtbW9kYWwvQzpcXG15LXByb2plY3RzXFxvdGhlclxcbWlsay9zcmNcXGFwcFxccGFnZXNcXHRhYmxlLW1vZGFsXFx0YWJsZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFibGUtbW9kYWwvdGFibGUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWJsZS1tb2RhbC90YWJsZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWxldGUtYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuIiwiLmRlbGV0ZS1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/table-modal/table-modal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/table-modal/table-modal.component.ts ***!
  \************************************************************/
/*! exports provided: TableModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModalComponent", function() { return TableModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _shared_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/decorators */ "./src/app/shared/decorators/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let TableModalComponent = class TableModalComponent {
    constructor(_fb, dialogRef, data) {
        this._fb = _fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this._initModalForm(this.data.row);
    }
    close() {
        this.dialogRef.close();
    }
    delete() {
        this.dialogRef.close({ delete: this.data.row.id });
    }
    save() {
        console.log(this.frm);
    }
    _initModalForm(row) {
        this.frm = this._fb.group({
            id: [{ value: row.id, disabled: true }],
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](row.time),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](row.age, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]*$')]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](row.descriptionValue),
        });
    }
    ngOnDestroy() { }
};
TableModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
TableModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    _shared_decorators__WEBPACK_IMPORTED_MODULE_3__["AutoUnsubscribe"],
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table-modal',
        template: __webpack_require__(/*! raw-loader!./table-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/table-modal/table-modal.component.html"),
        styles: [__webpack_require__(/*! ./table-modal.component.scss */ "./src/app/pages/table-modal/table-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], TableModalComponent);



/***/ }),

/***/ "./src/app/pages/table/table.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/table/table.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-content {\n  margin: 10px;\n}\n\ntable {\n  width: 100%;\n}\n\ntable [mat-header-row] {\n  background: darkgray !important;\n}\n\ntable [mat-row]:nth-child(2n+1) {\n  background: lightgray;\n}\n\ntable [mat-cell] {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFibGUvQzpcXG15LXByb2plY3RzXFxvdGhlclxcbWlsay9zcmNcXGFwcFxccGFnZXNcXHRhYmxlXFx0YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFFRSxXQUFBO0FDQUY7O0FERUU7RUFDRSwrQkFBQTtBQ0FKOztBREdFO0VBQ0UscUJBQUE7QUNESjs7QURJRTtFQUNFLFlBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWNvbnRlbnQge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxudGFibGUge1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgW21hdC1oZWFkZXItcm93XSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZ3JheSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgW21hdC1yb3ddOm50aC1jaGlsZCgybisxKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbiAgfVxyXG5cclxuICBbbWF0LWNlbGxdIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbn1cclxuIiwiLnRhYmxlLWNvbnRlbnQge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG50YWJsZSBbbWF0LWhlYWRlci1yb3ddIHtcbiAgYmFja2dyb3VuZDogZGFya2dyYXkgIWltcG9ydGFudDtcbn1cbnRhYmxlIFttYXQtcm93XTpudGgtY2hpbGQoMm4rMSkge1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG59XG50YWJsZSBbbWF0LWNlbGxdIHtcbiAgd2lkdGg6IDIwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/table/table.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/table/table.component.ts ***!
  \************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _app_services_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/table.service */ "./src/app/services/table.service.ts");
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/models */ "./src/app/shared/models/index.ts");
/* harmony import */ var _app_commons_enums_actions_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/commons/enums/actions.enum */ "./src/app/commons/enums/actions.enum.ts");
/* harmony import */ var _app_commons_enums_statuses_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/commons/enums/statuses.enum */ "./src/app/commons/enums/statuses.enum.ts");
/* harmony import */ var _shared_decorators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/decorators */ "./src/app/shared/decorators/index.ts");
/* harmony import */ var _app_commons_enums_result_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/commons/enums/result-type.enum */ "./src/app/commons/enums/result-type.enum.ts");
/* harmony import */ var _app_pages_table_modal_table_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/pages/table-modal/table-modal.component */ "./src/app/pages/table-modal/table-modal.component.ts");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/utils */ "./src/app/shared/utils/index.ts");













let TableComponent = class TableComponent {
    constructor(_tableService, dialog, _cdr) {
        this._tableService = _tableService;
        this.dialog = dialog;
        this._cdr = _cdr;
        this.actionStatus$$ = new _shared_models__WEBPACK_IMPORTED_MODULE_6__["ObservableHandler"](this._tableService.getActionStatus(), null, this._cdr);
        this.tableSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.action = _app_commons_enums_actions_enum__WEBPACK_IMPORTED_MODULE_7__["Action"];
        this.status = _app_commons_enums_statuses_enum__WEBPACK_IMPORTED_MODULE_8__["Status"];
        this.displayedColumns = ['id', 'time', 'eventLabel', 'age', 'descriptionValue'];
        this._tableData$$ = new _shared_models__WEBPACK_IMPORTED_MODULE_6__["ObservableHandler"](this._tableService.getTable(), this._initTable.bind(this), this._cdr);
    }
    ngOnInit() {
    }
    showModal(row) {
        const dialogRef = this.dialog.open(_app_pages_table_modal_table_modal_component__WEBPACK_IMPORTED_MODULE_11__["TableModalComponent"], {
            width: '250px',
            data: { row },
        });
        this._dialogRefSubscription$ = dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
            if (result && result.hasOwnProperty('delete')) {
                this._deleteItem(result.delete);
            }
        });
    }
    _initTable(tableData) {
        if (!tableData) {
            return;
        }
        const resultData = _app_commons_enums_result_type_enum__WEBPACK_IMPORTED_MODULE_10__["RESULT_DATA"].map;
        this._preparedTable = tableData.result.map(item => {
            return {
                id: item.eventId,
                time: item.startDateTime,
                eventLabel: resultData[item.type].eventLabel,
                icon: resultData[item.type].icon,
                age: item.ageInDays,
                descriptionLabel: resultData[item.type].descriptionLabel,
                descriptionValue: item[resultData[item.type].fieldToShow],
                type: item.type,
            };
        });
        this.tableSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this._preparedTable);
        this.tableSource.paginator = this.paginator;
        this.tableSource.sort = this.sort;
    }
    _deleteItem(id) {
        this._tableService.setActionStatus({
            action: _app_commons_enums_actions_enum__WEBPACK_IMPORTED_MODULE_7__["Action"].Delete,
            status: _app_commons_enums_statuses_enum__WEBPACK_IMPORTED_MODULE_8__["Status"].Pending,
        });
        this._tableService.deleteItem(id).subscribe((res) => {
            const modifiedTable = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_12__["objectCopy"])(this._tableService.getTableAsValue());
            const indexToDelete = modifiedTable.result.findIndex(item => item.eventId === id);
            modifiedTable.result.splice(indexToDelete, 1);
            this._tableService.setTableData(modifiedTable);
            this._tableService.setActionStatus({
                action: _app_commons_enums_actions_enum__WEBPACK_IMPORTED_MODULE_7__["Action"].Delete,
                status: _app_commons_enums_statuses_enum__WEBPACK_IMPORTED_MODULE_8__["Status"].Success,
            });
        }, error => {
            this._tableService.setActionStatus({
                action: _app_commons_enums_actions_enum__WEBPACK_IMPORTED_MODULE_7__["Action"].Delete,
                status: _app_commons_enums_statuses_enum__WEBPACK_IMPORTED_MODULE_8__["Status"].Error,
            });
        });
    }
    ngOnDestroy() { }
};
TableComponent.ctorParameters = () => [
    { type: _app_services_table_service__WEBPACK_IMPORTED_MODULE_5__["TableService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], TableComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
], TableComponent.prototype, "sort", void 0);
TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    _shared_decorators__WEBPACK_IMPORTED_MODULE_9__["AutoUnsubscribe"],
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table',
        template: __webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/table/table.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/pages/table/table.component.scss")]
    })
], TableComponent);



/***/ }),

/***/ "./src/app/services/table.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/table.service.ts ***!
  \*******************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let TableService = class TableService {
    constructor(_http) {
        this._http = _http;
        this._tableData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this._actonStatus = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
            action: null,
            status: null,
        });
    }
    loadTable() {
        return this._http.get('assets/json/data.json');
    }
    deleteItem(id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
    }
    getTable() {
        return this._tableData;
    }
    getTableAsValue() {
        return this._tableData.value;
    }
    setTableData(data) {
        this._tableData.next(data);
    }
    setActionStatus(actionStatus) {
        this._actonStatus.next(actionStatus);
    }
    getActionStatus() {
        return this._actonStatus;
    }
};
TableService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TableService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TableService);



/***/ }),

/***/ "./src/app/shared/decorators/auto-unsubscribe.decorator.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/decorators/auto-unsubscribe.decorator.ts ***!
  \*****************************************************************/
/*! exports provided: AutoUnsubscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoUnsubscribe", function() { return AutoUnsubscribe; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/models */ "./src/app/shared/models/index.ts");


function AutoUnsubscribe(constructor) {
    const ngOnDestroy = constructor.prototype.ngOnDestroy;
    if (typeof ngOnDestroy !== 'function') {
        console.warn(`Класс ${constructor.name} не выполняет интерфейс OnDestroy, который требуется для поддержки @AutoUnsubscribe.`);
        return;
    }
    constructor.prototype.ngOnDestroy = function () {
        for (const property in this) {
            if (this.hasOwnProperty(property)) {
                const target = this[property];
                if (target && target instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"] && !target.closed) {
                    target.unsubscribe();
                }
                if (target && target instanceof _shared_models__WEBPACK_IMPORTED_MODULE_1__["ObservableHandler"] && !target['killed']) {
                    target.kill();
                }
            }
        }
        ngOnDestroy.apply(this, arguments);
    };
}


/***/ }),

/***/ "./src/app/shared/decorators/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/decorators/index.ts ***!
  \********************************************/
/*! exports provided: AutoUnsubscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auto_unsubscribe_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auto-unsubscribe.decorator */ "./src/app/shared/decorators/auto-unsubscribe.decorator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoUnsubscribe", function() { return _auto_unsubscribe_decorator__WEBPACK_IMPORTED_MODULE_0__["AutoUnsubscribe"]; });




/***/ }),

/***/ "./src/app/shared/models/flat-map.model.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/models/flat-map.model.ts ***!
  \*************************************************/
/*! exports provided: FlatMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatMap", function() { return FlatMap; });
class FlatMap {
    constructor(array, propertyAsKey) {
        this.array = array;
        this.map = {};
        this.keys = [];
        array.forEach((item) => {
            const key = item[propertyAsKey].toString();
            this.map[key] = item;
            this.keys.push(key);
        });
    }
}
FlatMap.ctorParameters = () => [
    { type: Array },
    { type: undefined }
];


/***/ }),

/***/ "./src/app/shared/models/index.ts":
/*!****************************************!*\
  !*** ./src/app/shared/models/index.ts ***!
  \****************************************/
/*! exports provided: ObservableHandler, SubjectHandler, FlatMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _observable_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable-handler */ "./src/app/shared/models/observable-handler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableHandler", function() { return _observable_handler__WEBPACK_IMPORTED_MODULE_0__["ObservableHandler"]; });

/* harmony import */ var _subject_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subject-handler */ "./src/app/shared/models/subject-handler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubjectHandler", function() { return _subject_handler__WEBPACK_IMPORTED_MODULE_1__["SubjectHandler"]; });

/* harmony import */ var _flat_map_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flat-map.model */ "./src/app/shared/models/flat-map.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlatMap", function() { return _flat_map_model__WEBPACK_IMPORTED_MODULE_2__["FlatMap"]; });






/***/ }),

/***/ "./src/app/shared/models/observable-handler.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/observable-handler.ts ***!
  \*****************************************************/
/*! exports provided: ObservableHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableHandler", function() { return ObservableHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/utils */ "./src/app/shared/utils/index.ts");



/**
 * Абстрактный менеджер для observable.<br>
 * Создает {@link Subscription} на привязаный observable, в котором сохраняет значение и вызывает установленные коллбэки.
 */
class ObservableHandler {
    /**
     * @param {Observable<T>} observable - поток данных, которым будет управлять этот ObservableHandler
     * @param {(value: T) => void} onChange - пользовательский коллбэк, добавляется всегда в начало стэка коллбэков
     * @param {ChangeDetectorRef} changeDetectorRef - если указан, то добавляется коллбэк с вызовом {@link detectChanges}
     */
    constructor(observable, onChange, changeDetectorRef) {
        this.observable = observable;
        this.onChange = onChange;
        this.changeDetectorRef = changeDetectorRef;
        /**
         * Стэк коллбэков, вызываемых при полученнии новых данных из observable.
         * @private
         */
        this._callsStack = [];
        if (typeof onChange === 'function') {
            this._callsStack.push(onChange);
        }
        if (!Object(_shared_utils__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(changeDetectorRef)) {
            this._callsStack.push(() => Object(_shared_utils__WEBPACK_IMPORTED_MODULE_2__["safeDetectChanges"])(changeDetectorRef));
        }
        this._subscription = this.observable.subscribe((value) => {
            this.latestValue = value;
            this._callsStack.forEach((fn) => fn(value));
        });
    }
    kill() {
        this._subscription.unsubscribe();
        this['killed'] = true;
    }
}
ObservableHandler.ctorParameters = () => [
    { type: rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"] },
    { type: Function },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];


/***/ }),

/***/ "./src/app/shared/models/subject-handler.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/models/subject-handler.ts ***!
  \**************************************************/
/*! exports provided: SubjectHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectHandler", function() { return SubjectHandler; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

/**
 * Абстрактный контроллер для Subject (потока данных).<br>
 * Создает {@link Subject} и посылает в него данные каждые раз, когда изменяется {@link value}, а так же предоставляет доступ к observable
 * на базе созданного subject.
 */
class SubjectHandler {
    /**
     * @param initValue - первое значение в потоке данных.
     */
    constructor(initValue) {
        this._subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.emit(initValue);
    }
    get value() {
        return this._value;
    }
    get observable() {
        return this._subject.asObservable();
    }
    emit(value) {
        this._value = value;
        this._subject.next(this._value);
    }
    /**
     * Переотправляет в поток данных последнее значение.
     */
    reEmit() {
        this._subject.next(this._value);
    }
    /**
     * Завершает поток данных, аналог десктруктора.
     */
    complete() {
        this._subject.complete();
        this['completed'] = true;
    }
}
SubjectHandler.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/utils/fuse.ts":
/*!**************************************!*\
  !*** ./src/app/shared/utils/fuse.ts ***!
  \**************************************/
/*! exports provided: fuse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fuse", function() { return fuse; });
/**
 * Merges the pieces of an generic type into a new object which contains all them own properties.
 * Properties with same name are overrides in order.
 *
 * @example
 * const original: User = { name: 'Juliana', age: 19 };
 * const alter: User = fuse(original, { age: 25 }, { isHot: true });
 * // The 'alter' equals { name: 'Juliana', age: 25, isHot: true } and also is a new object.
 */
function fuse(...pieces) {
    return Object.assign({}, ...pieces);
}


/***/ }),

/***/ "./src/app/shared/utils/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/utils/index.ts ***!
  \***************************************/
/*! exports provided: fuse, safe, routeParam, isNullOrUndefined, objectCopy, safeDetectChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fuse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fuse */ "./src/app/shared/utils/fuse.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fuse", function() { return _fuse__WEBPACK_IMPORTED_MODULE_0__["fuse"]; });

/* harmony import */ var _safe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safe */ "./src/app/shared/utils/safe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safe", function() { return _safe__WEBPACK_IMPORTED_MODULE_1__["safe"]; });

/* harmony import */ var _route_param__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route-param */ "./src/app/shared/utils/route-param.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "routeParam", function() { return _route_param__WEBPACK_IMPORTED_MODULE_2__["routeParam"]; });

/* harmony import */ var _is_null_or_undefined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is-null-or-undefined */ "./src/app/shared/utils/is-null-or-undefined.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return _is_null_or_undefined__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"]; });

/* harmony import */ var _object_copy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object-copy */ "./src/app/shared/utils/object-copy.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectCopy", function() { return _object_copy__WEBPACK_IMPORTED_MODULE_4__["objectCopy"]; });

/* harmony import */ var _safe_detect_changes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./safe-detect-changes */ "./src/app/shared/utils/safe-detect-changes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safeDetectChanges", function() { return _safe_detect_changes__WEBPACK_IMPORTED_MODULE_5__["safeDetectChanges"]; });









/***/ }),

/***/ "./src/app/shared/utils/is-null-or-undefined.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/utils/is-null-or-undefined.ts ***!
  \******************************************************/
/*! exports provided: isNullOrUndefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return isNullOrUndefined; });
function isNullOrUndefined(value) {
    return value === undefined || value === null;
}


/***/ }),

/***/ "./src/app/shared/utils/object-copy.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/utils/object-copy.ts ***!
  \*********************************************/
/*! exports provided: objectCopy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectCopy", function() { return objectCopy; });
/* harmony import */ var _shared_utils_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/utils/is-null-or-undefined */ "./src/app/shared/utils/is-null-or-undefined.ts");

function objectCopy(object) {
    if (Object(_shared_utils_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(object)) {
        return object;
    }
    const jsonWithObject = JSON.stringify(object);
    return JSON.parse(jsonWithObject);
}


/***/ }),

/***/ "./src/app/shared/utils/route-param.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/utils/route-param.ts ***!
  \*********************************************/
/*! exports provided: routeParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeParam", function() { return routeParam; });
function routeParam(key) {
    return ':' + key;
}


/***/ }),

/***/ "./src/app/shared/utils/safe-detect-changes.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/utils/safe-detect-changes.ts ***!
  \*****************************************************/
/*! exports provided: safeDetectChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeDetectChanges", function() { return safeDetectChanges; });
/**
 * Обертка для безопасного вызова detectChanges.
 */
function safeDetectChanges(changeDetectorRef) {
    setTimeout(() => {
        if (!changeDetectorRef['destroyed']) {
            changeDetectorRef.detectChanges();
        }
    });
}


/***/ }),

/***/ "./src/app/shared/utils/safe.ts":
/*!**************************************!*\
  !*** ./src/app/shared/utils/safe.ts ***!
  \**************************************/
/*! exports provided: safe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safe", function() { return safe; });
/**
 * Маленький хак, который безопасно реализует данную функцию..
 * Служит что бы получить свойство с методом длинной цепочки, где некоторая часть цепочки может быть неопределенной.
 *
 * @example
 * if (safe(() => this.foo[0].bar.isUseful)) { ...
 * // returns 'this.foo[0].bar.isUseful' или undefined, избегая создания исключений.
 *
 * @param fn - некоторые простые функции, предпочтительно лямбда.
 * @returns {T | undefined}
 */
function safe(fn) {
    try {
        return fn();
    }
    catch (_a) {
        return undefined;
    }
}


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\my-projects\other\milk\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map