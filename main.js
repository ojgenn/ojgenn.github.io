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
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _pages_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/favorites/favorites.component */ "./src/app/pages/favorites/favorites.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");






var routes = [
    {
        path: '',
        component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"],
    },
    {
        path: 'favorites',
        component: _pages_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_4__["FavoritesComponent"],
    },
    {
        path: '**',
        component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'omdb-films-searcher';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _pages_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/header/header.component */ "./src/app/pages/header/header.component.ts");
/* harmony import */ var _pages_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/search-results/search-results.component */ "./src/app/pages/search-results/search-results.component.ts");
/* harmony import */ var _pages_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/favorites/favorites.component */ "./src/app/pages/favorites/favorites.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_favorites_favorite_film_details_favorite_film_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/favorites/favorite-film-details/favorite-film-details.component */ "./src/app/pages/favorites/favorite-film-details/favorite-film-details.component.ts");

















var COMPONENTS = [
    _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
    _pages_search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"],
    _pages_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
    _pages_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_13__["SearchResultsComponent"],
    _pages_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_14__["FavoritesComponent"],
    _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"],
    _pages_favorites_favorite_film_details_favorite_film_details_component__WEBPACK_IMPORTED_MODULE_16__["FavoriteFilmDetailsComponent"],
];
var IMPORTS = [
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
    ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
];
var MATERIAL_MODULES = [
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                COMPONENTS,
            ],
            imports: [
                IMPORTS,
                MATERIAL_MODULES,
            ],
            entryComponents: [_pages_favorites_favorite_film_details_favorite_film_details_component__WEBPACK_IMPORTED_MODULE_16__["FavoriteFilmDetailsComponent"]],
            exports: [MATERIAL_MODULES],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/commons/enums/films-search-response-type.enum.ts":
/*!******************************************************************!*\
  !*** ./src/app/commons/enums/films-search-response-type.enum.ts ***!
  \******************************************************************/
/*! exports provided: FilmsSearchResponseType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsSearchResponseType", function() { return FilmsSearchResponseType; });
var FilmsSearchResponseType;
(function (FilmsSearchResponseType) {
    FilmsSearchResponseType["True"] = "True";
    FilmsSearchResponseType["False"] = "False";
})(FilmsSearchResponseType || (FilmsSearchResponseType = {}));


/***/ }),

/***/ "./src/app/pages/favorites/favorite-film-details/favorite-film-details.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/favorites/favorite-film-details/favorite-film-details.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n\r\n  <mat-card class=\"example-card\">\r\n\r\n    <mat-card-header>\r\n      <div mat-card-avatar class=\"example-header-image\"></div>\r\n      <mat-card-title>{{data.res.Title}}</mat-card-title>\r\n      <mat-card-subtitle>{{data.res.Year}} г. </mat-card-subtitle>\r\n      <mat-card-subtitle>Страна: {{data.res.Country}}</mat-card-subtitle>\r\n      <mat-card-subtitle>Режиссер: {{data.res.Director}}</mat-card-subtitle>\r\n    </mat-card-header>\r\n\r\n    <img mat-card-image [src]=\"data.res.Poster\" [alt]=\"data.res.Title\">\r\n\r\n    <mat-card-content>\r\n      <p>\r\n        {{data.res.Plot}}\r\n      </p>\r\n    </mat-card-content>\r\n\r\n    <mat-card-actions>\r\n      <button mat-button color=\"warn\" [mat-dialog-close]=\"data.res.imdbID\">Удалить</button>\r\n    </mat-card-actions>\r\n\r\n  </mat-card>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"close()\">Закрыть</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/favorites/favorite-film-details/favorite-film-details.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/favorites/favorite-film-details/favorite-film-details.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zhdm9yaXRlcy9mYXZvcml0ZS1maWxtLWRldGFpbHMvZmF2b3JpdGUtZmlsbS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/favorites/favorite-film-details/favorite-film-details.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/favorites/favorite-film-details/favorite-film-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FavoriteFilmDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteFilmDetailsComponent", function() { return FavoriteFilmDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var FavoriteFilmDetailsComponent = /** @class */ (function () {
    function FavoriteFilmDetailsComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    FavoriteFilmDetailsComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    FavoriteFilmDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorite-film-details',
            template: __webpack_require__(/*! ./favorite-film-details.component.html */ "./src/app/pages/favorites/favorite-film-details/favorite-film-details.component.html"),
            styles: [__webpack_require__(/*! ./favorite-film-details.component.scss */ "./src/app/pages/favorites/favorite-film-details/favorite-film-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], FavoriteFilmDetailsComponent);
    return FavoriteFilmDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/favorites/favorites.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/favorites/favorites.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"favorites\">\r\n  <div *ngIf=\"!favoritesService.favoritesList?.value || favoritesService.favoritesList?.value?.length === 0; else notEmptyList\">\r\n    Список пуст\r\n  </div>\r\n\r\n  <ng-template #notEmptyList>\r\n    <cdk-virtual-scroll-viewport style=\"height: 90vh\" itemSize=\"50\" class=\"example-viewport\">\r\n      <mat-card class=\"example-card\" *cdkVirtualFor=\"let item of favoritesService.favoritesList?.value\">\r\n        <div class=\"card-wrapper\">\r\n          <div class=\"image-wrapper\">\r\n            <img mat-card-image [src]=\"item.Poster\" [alt]=\"item.Title\">\r\n          </div>\r\n          <div class=\"content-wrapper\">\r\n            <mat-card-header>\r\n              <div mat-card-avatar class=\"example-header-image\"></div>\r\n              <mat-card-title>{{item.Title}}</mat-card-title>\r\n              <mat-card-subtitle>{{item.Year}} г.</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-actions>\r\n              <button mat-button color=\"primary\" (click)=\"showFilmDetails(item.imdbID)\">Посмотреть</button>\r\n              <button mat-button color=\"warn\" (click)=\"deleteFilm(item.imdbID)\">Удалить</button>\r\n            </mat-card-actions>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </cdk-virtual-scroll-viewport>\r\n  </ng-template>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/favorites/favorites.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/favorites/favorites.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  background: lightgrey;\n  padding: 8px;\n  height: calc( 100vh - 64px); }\n\n.example-card {\n  max-width: 600px; }\n\nmat-card {\n  margin-bottom: 10px; }\n\n.card-wrapper {\n  display: flex; }\n\n.image-wrapper {\n  background-size: cover;\n  width: 150px;\n  height: 200px;\n  overflow: hidden; }\n\n.image-wrapper img {\n    width: 100%;\n    height: 100%; }\n\n.content-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmF2b3JpdGVzL0M6XFxteS1wcm9qZWN0c1xcb3RoZXJcXG9tZGItZmlsbXMtc2VhcmNoZXIvc3JjXFxhcHBcXHBhZ2VzXFxmYXZvcml0ZXNcXGZhdm9yaXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUpsQjtJQU1JLFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBSWhCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBoZWlnaHQ6IGNhbGMoIDEwMHZoIC0gNjRweCk7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNhcmQge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaW1hZ2Utd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB3aWR0aDogMTUwcHg7IC8vINC90LDQv9GA0LjQvNC10YBcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/favorites/favorites.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/favorites/favorites.component.ts ***!
  \********************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/favorites.service */ "./src/app/services/favorites.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _favorite_film_details_favorite_film_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favorite-film-details/favorite-film-details.component */ "./src/app/pages/favorites/favorite-film-details/favorite-film-details.component.ts");
/* harmony import */ var _services_search_films_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/search-films.service */ "./src/app/services/search-films.service.ts");
/* harmony import */ var _commons_enums_films_search_response_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../commons/enums/films-search-response-type.enum */ "./src/app/commons/enums/films-search-response-type.enum.ts");








var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(favoritesService, _searchFilmsService, _toast, _dialog) {
        this.favoritesService = favoritesService;
        this._searchFilmsService = _searchFilmsService;
        this._toast = _toast;
        this._dialog = _dialog;
    }
    FavoritesComponent.prototype.deleteFilm = function (id) {
        this.favoritesService.removeFromFavorites(id);
    };
    FavoritesComponent.prototype.showFilmDetails = function (id) {
        var _this = this;
        this._searchFilmDetailsSubscription = this._searchFilmsService.getFilmById(id).subscribe(function (res) {
            if (res.Responce === _commons_enums_films_search_response_type_enum__WEBPACK_IMPORTED_MODULE_7__["FilmsSearchResponseType"].False) {
                _this._toast.error('Ошибка (список будет расширен', '', {
                    timeOut: 2000,
                });
                return;
            }
            var dialogRef = _this._dialog.open(_favorite_film_details_favorite_film_details_component__WEBPACK_IMPORTED_MODULE_5__["FavoriteFilmDetailsComponent"], {
                width: '400px',
                data: { res: res }
            });
            _this._dialogRefSubscription = dialogRef.afterClosed().subscribe(function (imdbID) {
                if (imdbID) {
                    _this.deleteFilm(imdbID);
                }
            });
        });
    };
    FavoritesComponent.prototype.ngOnDestroy = function () {
        if (this._dialogRefSubscription) {
            this._dialogRefSubscription.unsubscribe();
        }
        if (this._searchFilmDetailsSubscription) {
            this._searchFilmDetailsSubscription.unsubscribe();
        }
    };
    FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! ./favorites.component.html */ "./src/app/pages/favorites/favorites.component.html"),
            styles: [__webpack_require__(/*! ./favorites.component.scss */ "./src/app/pages/favorites/favorites.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_favorites_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesService"],
            _services_search_films_service__WEBPACK_IMPORTED_MODULE_6__["SearchFilmsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "./src/app/pages/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"header\">\r\n  <span class=\"left-side-wrapper\" [routerLink]=\"['/']\">OMDb поиск фильмов</span>\r\n  <button mat-button [routerLink]=\"['favorites']\">\r\n    <mat-icon>favorite</mat-icon>\r\n    <mat-label>Мой список ({{favoritesService.favoritesList?.value?.length || 0}})</mat-label>\r\n  </button>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/pages/header/header.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/header/header.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n  width: 100%;\n  display: flex;\n  justify-content: space-between; }\n\n.header {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n\nbutton mat-icon {\n  margin-right: 8px; }\n\n.left-side-wrapper {\n  display: flex;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVhZGVyL0M6XFxteS1wcm9qZWN0c1xcb3RoZXJcXG9tZGItZmlsbXMtc2VhcmNoZXIvc3JjXFxhcHBcXHBhZ2VzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsaUhBQXFHLEVBQUE7O0FBR3ZHO0VBRUksaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBtYXQtaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbi5sZWZ0LXNpZGUtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/favorites.service */ "./src/app/services/favorites.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(favoritesService) {
        this.favoritesService = favoritesService;
    }
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/pages/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/pages/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_favorites_service__WEBPACK_IMPORTED_MODULE_2__["FavoritesService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  404\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  width: 100%;\n  height: 90vh;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZS1ub3QtZm91bmQvQzpcXG15LXByb2plY3RzXFxvdGhlclxcb21kYi1maWxtcy1zZWFyY2hlci9zcmNcXGFwcFxccGFnZXNcXHBhZ2Utbm90LWZvdW5kXFxwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDkwdmg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/pages/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/search-results/search-results.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/search-results/search-results.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Всего найдено: {{total}}\r\n<mat-list role=\"list\" *ngFor=\"let film of filmsList;trackBy: trackByFn\">\r\n  <mat-list-item role=\"listitem\">\r\n    <img [src]=\"film.Poster\" [alt]=\"film.Title\">\r\n    {{film.Title}}, {{film.Year}} г.\r\n    <button mat-icon-button *ngIf=\"favListIds.includes(film.imdbID); else addToFav\">\r\n      <mat-icon color=\"warn\" (click)=\"removeFilmFromFavorites(film.imdbID)\">favorite</mat-icon>\r\n    </button>\r\n    <ng-template #addToFav>\r\n      <button mat-icon-button>\r\n        <mat-icon color=\"gray\" (click)=\"addFilmToFavorites(film.imdbID)\">favorite</mat-icon>\r\n      </button>\r\n    </ng-template>\r\n  </mat-list-item>\r\n</mat-list>\r\n<mat-paginator [length]=\"length\"\r\n               [pageSize]=\"pageSize\" (page)=\"onPaginatorChanged($event)\">\r\n</mat-paginator>\r\n"

/***/ }),

/***/ "./src/app/pages/search-results/search-results.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/search-results/search-results.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top: 16px; }\n\nimg {\n  height: 45px;\n  margin-right: 8px; }\n\nmat-list-item {\n  border-bottom: 1px solid lightgray; }\n\nmat-icon {\n  color: gray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VhcmNoLXJlc3VsdHMvQzpcXG15LXByb2plY3RzXFxvdGhlclxcb21kYi1maWxtcy1zZWFyY2hlci9zcmNcXGFwcFxccGFnZXNcXHNlYXJjaC1yZXN1bHRzXFxzZWFyY2gtcmVzdWx0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0Usa0NBQWtDLEVBQUE7O0FBR3BDO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VhcmNoLXJlc3VsdHMvc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbm1hdC1saXN0LWl0ZW0ge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/search-results/search-results.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/search-results/search-results.component.ts ***!
  \******************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/favorites.service */ "./src/app/services/favorites.service.ts");
/* harmony import */ var _utils_observable_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/observable-handler */ "./src/app/utils/observable-handler.ts");




var SearchResultsComponent = /** @class */ (function () {
    function SearchResultsComponent(_favoritesService) {
        this._favoritesService = _favoritesService;
        this.addToFavorite = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeFilmFormFav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._favList$$ = new _utils_observable_handler__WEBPACK_IMPORTED_MODULE_3__["ObservableHandler"](this._favoritesService.favoritesList.observable, this._initFavList.bind(this));
        this._favoritesService.favoritesList.reEmit();
    }
    SearchResultsComponent.prototype.addFilmToFavorites = function (id) {
        this.addToFavorite.emit(id);
    };
    SearchResultsComponent.prototype.removeFilmFromFavorites = function (id) {
        this.removeFilmFormFav.emit(id);
    };
    SearchResultsComponent.prototype.onPaginatorChanged = function (e) {
        var pageIndex = e.pageIndex;
        var previousIndex = e.previousPageIndex;
        if (!previousIndex && pageIndex === 1) {
            this.pageChanged.emit(pageIndex + 1);
            return;
        }
        this.pageChanged.emit(pageIndex + 1);
    };
    SearchResultsComponent.prototype.trackByFn = function (index, item) {
        return item.imdbID;
    };
    SearchResultsComponent.prototype._initFavList = function (favList) {
        if (favList) {
            this.favListIds = favList.map(function (item) { return item.imdbID; });
            console.log(this.favListIds);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SearchResultsComponent.prototype, "filmsList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SearchResultsComponent.prototype, "total", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SearchResultsComponent.prototype, "length", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SearchResultsComponent.prototype, "pageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SearchResultsComponent.prototype, "addToFavorite", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SearchResultsComponent.prototype, "removeFilmFormFav", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SearchResultsComponent.prototype, "pageChanged", void 0);
    SearchResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-results',
            template: __webpack_require__(/*! ./search-results.component.html */ "./src/app/pages/search-results/search-results.component.html"),
            styles: [__webpack_require__(/*! ./search-results.component.scss */ "./src/app/pages/search-results/search-results.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_favorites_service__WEBPACK_IMPORTED_MODULE_2__["FavoritesService"]])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());



/***/ }),

/***/ "./src/app/pages/search/search.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/search/search.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search\">\r\n\r\n  <form class=\"example-form\" [formGroup]=\"searchForm\">\r\n\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input type=\"text\"\r\n             placeholder=\"Название фильма\"\r\n             aria-label=\"filmName\"\r\n             matInput\r\n             formControlName=\"filmName\"\r\n             [matAutocomplete]=\"auto\">\r\n      <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\r\n        <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n          {{option}}\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-label>Год выпуска</mat-label>\r\n      <mat-select formControlName=\"year\">\r\n        <mat-option *ngFor=\"let year of filmsSelectData.array\" [value]=\"year\">\r\n          {{year}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <button mat-raised-button color=\"primary\"\r\n            [disabled]=\"searchForm.invalid\"\r\n            (click)=\"searchFilm()\">\r\n      Найти\r\n    </button>\r\n\r\n  </form>\r\n\r\n  <div *ngIf=\"errors\" class=\"errors\">\r\n    <mat-toolbar color=\"warn\">Ошибки при поиске. *Список вывести дополнительно</mat-toolbar>\r\n  </div>\r\n\r\n  <div *ngIf=\"filmsList.length > 0\">\r\n    <app-search-results [filmsList]=\"filmsList\"\r\n                        [length]=\"length\"\r\n                        [pageSize]=\"pageSize\"\r\n                        [total]=\"total\"\r\n                        (addToFavorite)=\"addFilmToFavorite($event)\"\r\n                        (removeFilmFormFav)=\"removeFilmFormFav($event)\"\r\n                        (pageChanged)=\"searchFilm($event)\">\r\n\r\n    </app-search-results>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/search/search.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/search/search.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search {\n  margin: 8px; }\n\nmat-form-field {\n  display: block;\n  max-width: 300px; }\n\n.errors {\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VhcmNoL0M6XFxteS1wcm9qZWN0c1xcb3RoZXJcXG9tZGItZmlsbXMtc2VhcmNoZXIvc3JjXFxhcHBcXHBhZ2VzXFxzZWFyY2hcXHNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQ0YsRUFBQTs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoIHtcclxuICBtYXJnaW46IDhweFxyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLmVycm9ycyB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_internal_operators_startWith__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/startWith */ "./node_modules/rxjs/internal/operators/startWith.js");
/* harmony import */ var rxjs_internal_operators_startWith__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_startWith__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _services_search_films_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/search-films.service */ "./src/app/services/search-films.service.ts");
/* harmony import */ var _commons_enums_films_search_response_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../commons/enums/films-search-response-type.enum */ "./src/app/commons/enums/films-search-response-type.enum.ts");
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/favorites.service */ "./src/app/services/favorites.service.ts");









var SearchComponent = /** @class */ (function () {
    function SearchComponent(_formBuilder, _searchFilm, _favoritesService, _localStorageService) {
        this._formBuilder = _formBuilder;
        this._searchFilm = _searchFilm;
        this._favoritesService = _favoritesService;
        this._localStorageService = _localStorageService;
        this.filmsSelectData = SearchComponent_1.initYearsArray();
        this.searchForm = this._initSearchForm();
        this.options = this._initOptions();
        this.filmsList = [];
        this.errors = false;
        this.length = 0;
        this.total = 0;
        this.pageSize = 0;
    }
    SearchComponent_1 = SearchComponent;
    SearchComponent.initYearsArray = function () {
        var currentYear = new Date().getFullYear();
        var array = [];
        for (var i = 1986; i <= currentYear; i++) {
            array.push(i);
        }
        array = array.concat([null]).reverse();
        return { currentYear: currentYear, array: array };
    };
    SearchComponent.getPageNumbers = function (total, lenght) {
        if (total < lenght) {
            return total;
        }
        return ((total % lenght) > 0) ? (Math.floor(total / lenght) + 1) : (total / lenght);
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.searchForm.controls.filmName.valueChanges.pipe(Object(rxjs_internal_operators_startWith__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) { return _this._filter(value); }));
    };
    SearchComponent.prototype.searchFilm = function (pageNumber) {
        var _this = this;
        var filmName = this.searchForm.controls.filmName.value;
        var year = Number(this.searchForm.controls.year.value);
        this._prepareAndSaveOptions(filmName);
        this._searchFilmsSubscription$ = this._searchFilm
            .getFilms(filmName, year !== 0 ? year : undefined, pageNumber)
            .subscribe(function (res) {
            if (res.Response === _commons_enums_films_search_response_type_enum__WEBPACK_IMPORTED_MODULE_7__["FilmsSearchResponseType"].True) {
                _this.filmsList = res.Search;
                _this.errors = false;
                _this.total = res.totalResults;
                _this.pageSize = res.Search.length;
                _this.length = SearchComponent_1.getPageNumbers(_this.total, _this.pageSize);
            }
            else {
                _this.errors = true;
                _this.filmsList = [];
                _this.total = 0;
                _this.pageSize = 0;
                _this.length = 0;
            }
        });
    };
    SearchComponent.prototype.addFilmToFavorite = function (id) {
        var film = this.filmsList.find(function (item) { return item.imdbID === id; });
        if (film) {
            this._favoritesService.addToFavorites(film);
        }
    };
    SearchComponent.prototype.removeFilmFormFav = function (id) {
        this._favoritesService.removeFromFavorites(id);
    };
    SearchComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (option) { return option.toLowerCase().indexOf(filterValue) === 0; });
    };
    SearchComponent.prototype._initSearchForm = function () {
        return this._formBuilder.group({
            filmName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    };
    SearchComponent.prototype._initOptions = function () {
        var options = this._localStorageService.getItem('searchOptions');
        return options ? options : [];
    };
    SearchComponent.prototype._prepareAndSaveOptions = function (filmName) {
        var searchValue = this.options.find(function (item) { return item === filmName; });
        if (!searchValue) {
            this.options.push(filmName);
        }
        this.options = this.options.sort();
        if (this.options.length > 50) {
            this.options.splice(0, 1);
        }
        this._localStorageService.setItem('searchOptions', this.options);
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        if (this._searchFilmsSubscription$) {
            this._searchFilmsSubscription$.unsubscribe();
        }
    };
    var SearchComponent_1;
    SearchComponent = SearchComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/pages/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/pages/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_search_films_service__WEBPACK_IMPORTED_MODULE_6__["SearchFilmsService"],
            _services_favorites_service__WEBPACK_IMPORTED_MODULE_8__["FavoritesService"],
            _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorage"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/favorites.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/favorites.service.ts ***!
  \***********************************************/
/*! exports provided: FavoritesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesService", function() { return FavoritesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _utils_subject_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/subject-handler */ "./src/app/utils/subject-handler.ts");
/* harmony import */ var _utils_object_copy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/object-copy */ "./src/app/utils/object-copy.ts");





var FavoritesService = /** @class */ (function () {
    function FavoritesService(_localStorageService) {
        this._localStorageService = _localStorageService;
        this.favoritesList = new _utils_subject_handler__WEBPACK_IMPORTED_MODULE_3__["SubjectHandler"]();
        var favorites = this._localStorageService.getItem('favorites');
        if (favorites) {
            this.favoritesList.emit(favorites);
        }
    }
    FavoritesService.prototype.addToFavorites = function (film) {
        var favorites = this.favoritesList.value;
        if (!favorites) {
            favorites = [];
        }
        var filmInCollection = favorites.find(function (item) { return item === film; });
        if (!filmInCollection) {
            favorites.push(film);
            this._localStorageService.setItem('favorites', favorites);
            this.favoritesList.emit(favorites);
        }
    };
    FavoritesService.prototype.removeFromFavorites = function (id) {
        var favorites = Object(_utils_object_copy__WEBPACK_IMPORTED_MODULE_4__["objectCopy"])(this.favoritesList.value);
        if (favorites) {
            var index = favorites.findIndex(function (item) { return item.imdbID === id; });
            if (favorites.length === 1) {
                favorites = [];
            }
            else {
                favorites.splice(index, 1);
            }
            this._localStorageService.setItem('favorites', favorites);
            this.favoritesList.emit(favorites);
        }
    };
    FavoritesService.prototype.ngOnDestroy = function () {
        if (this.favoritesList) {
            this.favoritesList.complete();
        }
    };
    FavoritesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorage"]])
    ], FavoritesService);
    return FavoritesService;
}());



/***/ }),

/***/ "./src/app/services/local-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return LocalStorage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_safe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/safe */ "./src/app/utils/safe.ts");



var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
    }
    LocalStorage.prototype.getItem = function (key) {
        return Object(_utils_safe__WEBPACK_IMPORTED_MODULE_2__["safe"])(function () { return JSON.parse(window.localStorage.getItem(key)); }) || null;
    };
    /**
     * Сохраняет в LocalStorage значение {@link value} по ключу {@link key}.<br>
     *
     * @param key - ключ LocalStorage
     * @param value - любые JSON-сериализуемые данные
     * @param nullableOnError - если true, обнуляет (присваивает null) значение в случае ошибки при сохранении
     *
     * @return true, если сохранение прошло успешно, иначе false
     */
    LocalStorage.prototype.setItem = function (key, value, nullableOnError) {
        if (nullableOnError === void 0) { nullableOnError = true; }
        var valueJSON = Object(_utils_safe__WEBPACK_IMPORTED_MODULE_2__["safe"])(function () { return JSON.stringify(value); });
        if (valueJSON === undefined) {
            if (nullableOnError) {
                window.localStorage.setItem(key, 'null');
            }
            return false;
        }
        window.localStorage.setItem(key, valueJSON);
        return true;
    };
    LocalStorage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocalStorage);
    return LocalStorage;
}());



/***/ }),

/***/ "./src/app/services/search-films.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/search-films.service.ts ***!
  \**************************************************/
/*! exports provided: SearchFilmsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilmsService", function() { return SearchFilmsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BASE_URL = 'http://www.omdbapi.com/?apikey=5d04a1ad';
var SearchFilmsService = /** @class */ (function () {
    function SearchFilmsService(_http) {
        this._http = _http;
    }
    SearchFilmsService.prototype.getFilms = function (searchString, year, pageNumber) {
        var query = "s=" + searchString;
        if (year) {
            query += "&y=" + year;
        }
        if (pageNumber) {
            query += "&page=" + pageNumber;
        }
        return this._http.get(BASE_URL + "&" + query);
    };
    SearchFilmsService.prototype.getFilmById = function (id) {
        return this._http.get(BASE_URL + "&plot=full&i=" + id);
    };
    SearchFilmsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchFilmsService);
    return SearchFilmsService;
}());



/***/ }),

/***/ "./src/app/utils/is-null-or-undefined.ts":
/*!***********************************************!*\
  !*** ./src/app/utils/is-null-or-undefined.ts ***!
  \***********************************************/
/*! exports provided: isNullOrUndefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return isNullOrUndefined; });
function isNullOrUndefined(value) {
    return value === undefined || value === null;
}


/***/ }),

/***/ "./src/app/utils/object-copy.ts":
/*!**************************************!*\
  !*** ./src/app/utils/object-copy.ts ***!
  \**************************************/
/*! exports provided: objectCopy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectCopy", function() { return objectCopy; });
/* harmony import */ var _is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-null-or-undefined */ "./src/app/utils/is-null-or-undefined.ts");

function objectCopy(object) {
    if (Object(_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(object)) {
        return object;
    }
    var jsonWithObject = JSON.stringify(object);
    return JSON.parse(jsonWithObject);
}


/***/ }),

/***/ "./src/app/utils/observable-handler.ts":
/*!*********************************************!*\
  !*** ./src/app/utils/observable-handler.ts ***!
  \*********************************************/
/*! exports provided: ObservableHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableHandler", function() { return ObservableHandler; });
/* harmony import */ var _is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-null-or-undefined */ "./src/app/utils/is-null-or-undefined.ts");
/* harmony import */ var _safe_detect_changes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safe-detect-changes */ "./src/app/utils/safe-detect-changes.ts");


/**
 * Абстрактный менеджер для observable.<br>
 * Создает {@link Subscription} на привязаный observable, в котором сохраняет значение и вызывает установленные коллбэки.
 */
var ObservableHandler = /** @class */ (function () {
    /**
     * @param {Observable<T>} observable - поток данных, которым будет управлять этот ObservableHandler
     * @param {(value: T) => void} onChange - пользовательский коллбэк, добавляется всегда в начало стэка коллбэков
     * @param {ChangeDetectorRef} changeDetectorRef - если указан, то добавляется коллбэк с вызовом {@link detectChanges}
     */
    function ObservableHandler(observable, onChange, changeDetectorRef) {
        var _this = this;
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
        if (!Object(_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(changeDetectorRef)) {
            this._callsStack.push(function () { return Object(_safe_detect_changes__WEBPACK_IMPORTED_MODULE_1__["safeDetectChanges"])(changeDetectorRef); });
        }
        this._subscription = this.observable.subscribe(function (value) {
            _this.latestValue = value;
            _this._callsStack.forEach(function (fn) { return fn(value); });
        });
    }
    ObservableHandler.prototype.kill = function () {
        this._subscription.unsubscribe();
        this['killed'] = true;
    };
    return ObservableHandler;
}());



/***/ }),

/***/ "./src/app/utils/safe-detect-changes.ts":
/*!**********************************************!*\
  !*** ./src/app/utils/safe-detect-changes.ts ***!
  \**********************************************/
/*! exports provided: safeDetectChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeDetectChanges", function() { return safeDetectChanges; });
/**
 * Обертка для безопасного вызова detectChanges.
 */
function safeDetectChanges(changeDetectorRef) {
    setTimeout(function () {
        if (!changeDetectorRef['destroyed']) {
            changeDetectorRef.detectChanges();
        }
    });
}


/***/ }),

/***/ "./src/app/utils/safe.ts":
/*!*******************************!*\
  !*** ./src/app/utils/safe.ts ***!
  \*******************************/
/*! exports provided: safe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safe", function() { return safe; });
/**
 * Маленький грязный хак, который безопасно реализует переданнную функцию fn.<br>
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

/***/ "./src/app/utils/subject-handler.ts":
/*!******************************************!*\
  !*** ./src/app/utils/subject-handler.ts ***!
  \******************************************/
/*! exports provided: SubjectHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectHandler", function() { return SubjectHandler; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

/**
 * Абстрактный контроллер для Subject (потока данных).<br>
 * Создает {@link Subject} и посылает в него данные каждые раз, когда изменяется {@link value}, а так же предоставляет доступ к observable
 * на базе созданного subject.
 */
var SubjectHandler = /** @class */ (function () {
    /**
     * @param initValue - первое значение в потоке данных.
     */
    function SubjectHandler(initValue) {
        this._subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.emit(initValue);
    }
    Object.defineProperty(SubjectHandler.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubjectHandler.prototype, "observable", {
        get: function () {
            return this._subject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    SubjectHandler.prototype.emit = function (value) {
        this._value = value;
        this._subject.next(this._value);
    };
    /**
     * Переотправляет в поток данных последнее значение.
     */
    SubjectHandler.prototype.reEmit = function () {
        this._subject.next(this._value);
    };
    /**
     * Завершает поток данных, аналог десктруктора.
     */
    SubjectHandler.prototype.complete = function () {
        this._subject.complete();
        this['completed'] = true;
    };
    return SubjectHandler;
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

module.exports = __webpack_require__(/*! C:\my-projects\other\omdb-films-searcher\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map