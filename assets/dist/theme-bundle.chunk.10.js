(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");

function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


// import compareProducts from './global/compare-products';

var Category = /*#__PURE__*/function (_CatalogPage) {
  function Category() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  _inheritsLoose(Category, _CatalogPage);
  var _proto = Category.prototype;
  _proto.onReady = function onReady() {
    // compareProducts(this.context.urls);

    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('html, body').animate({
        scrollTop: 0
      }, 100);
    });
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJfQ2F0YWxvZ1BhZ2UiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsIiQiLCJsZW5ndGgiLCJpbml0RmFjZXRlZFNlYXJjaCIsIm9uU29ydEJ5U3VibWl0IiwiYmluZCIsImhvb2tzIiwib24iLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImNvbnRleHQiLCJjYXRlZ29yeVByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwiY29uZmlnIiwiY2F0ZWdvcnkiLCJzaG9wX2J5X3ByaWNlIiwicHJvZHVjdHMiLCJsaW1pdCIsInRlbXBsYXRlIiwicHJvZHVjdExpc3RpbmciLCJzaWRlYmFyIiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiRmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIkNhdGFsb2dQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNmO0FBQ3BDO0FBQ29EO0FBQUEsSUFFL0JBLFFBQVEsMEJBQUFDLFlBQUE7RUFBQSxTQUFBRCxTQUFBO0lBQUEsT0FBQUMsWUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7RUFBQTtFQUFBQyxjQUFBLENBQUFKLFFBQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFJLE1BQUEsR0FBQUwsUUFBQSxDQUFBTSxTQUFBO0VBQUFELE1BQUEsQ0FDekJFLE9BQU8sR0FBUCxTQUFBQSxPQUFPQSxDQUFBLEVBQUc7SUFDTjs7SUFFQSxJQUFJQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBRTtNQUNoQyxJQUFJLENBQUNDLGlCQUFpQixDQUFDLENBQUM7SUFDNUIsQ0FBQyxNQUFNO01BQ0gsSUFBSSxDQUFDQyxjQUFjLEdBQUcsSUFBSSxDQUFDQSxjQUFjLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7TUFDcERDLGdFQUFLLENBQUNDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUNILGNBQWMsQ0FBQztJQUNyRDtFQUNKLENBQUM7RUFBQU4sTUFBQSxDQUVESyxpQkFBaUIsR0FBakIsU0FBQUEsaUJBQWlCQSxDQUFBLEVBQUc7SUFDaEIsSUFBTUssd0JBQXdCLEdBQUdQLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQztJQUNoRSxJQUFNUSx1QkFBdUIsR0FBR1IsQ0FBQyxDQUFDLDJCQUEyQixDQUFDO0lBQzlELElBQU1TLGVBQWUsR0FBRyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsdUJBQXVCO0lBQzVELElBQU1DLGNBQWMsR0FBRztNQUNuQkMsTUFBTSxFQUFFO1FBQ0pDLFFBQVEsRUFBRTtVQUNOQyxhQUFhLEVBQUUsSUFBSTtVQUNuQkMsUUFBUSxFQUFFO1lBQ05DLEtBQUssRUFBRVI7VUFDWDtRQUNKO01BQ0osQ0FBQztNQUNEUyxRQUFRLEVBQUU7UUFDTkMsY0FBYyxFQUFFLDBCQUEwQjtRQUMxQ0MsT0FBTyxFQUFFO01BQ2IsQ0FBQztNQUNEQyxRQUFRLEVBQUU7SUFDZCxDQUFDO0lBRUQsSUFBSSxDQUFDQyxhQUFhLEdBQUcsSUFBSUMsOERBQWEsQ0FBQ1gsY0FBYyxFQUFFLFVBQUNZLE9BQU8sRUFBSztNQUNoRWpCLHdCQUF3QixDQUFDa0IsSUFBSSxDQUFDRCxPQUFPLENBQUNMLGNBQWMsQ0FBQztNQUNyRFgsdUJBQXVCLENBQUNpQixJQUFJLENBQUNELE9BQU8sQ0FBQ0osT0FBTyxDQUFDO01BRTdDcEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDMEIsT0FBTyxDQUFDO1FBQ3BCQyxTQUFTLEVBQUU7TUFDZixDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1gsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBLE9BQUFuQyxRQUFBO0FBQUEsRUF4Q2lDb0MsZ0RBQVciLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbi8vIGltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5IGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIC8vIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XG5cbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xuICAgICAgICAgICAgICAgICAgICBzaG9wX2J5X3ByaWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdjYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TW9yZTogJ2NhdGVnb3J5L3Nob3ctbW9yZScsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5mYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcblxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=