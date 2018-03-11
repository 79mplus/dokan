dokanWebpack([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'App'
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

let Postbox = dokan_get_lib('Postbox');

/* harmony default export */ __webpack_exports__["a"] = ({

    name: 'Dashboard',

    components: {
        Postbox
    },

    data() {
        return {};
    },

    created() {},

    methods: {}
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//

let ListTable = dokan_get_lib('ListTable');

/* harmony default export */ __webpack_exports__["a"] = ({

    name: 'Withdraw',

    components: {
        ListTable
    },

    data() {
        return {
            showCb: true,
            columns: {
                'seller': { label: 'Seller' },
                'amount': { label: 'Amount' },
                'method': { label: 'Method' },
                'method_details': { label: 'Method Details' },
                'note': { label: 'Note' },
                'ip': { label: 'IP' },
                'date': { label: 'date' }
            },
            requests: [],
            actionColumn: 'seller',
            actions: [{
                key: 'approve',
                label: 'Approve'
            }, {
                key: 'cancel',
                label: 'Cancel'
            }, {
                key: 'trash',
                label: 'Delete'
            }],
            bulkActions: [{
                key: 'approve',
                label: 'Approve Requests'
            }, {
                key: 'trash',
                label: 'Delete'
            }]
        };
    }
});

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _App = __webpack_require__(29);

var _App2 = _interopRequireDefault(_App);

var _router = __webpack_require__(32);

var _router2 = _interopRequireDefault(_router);

var _adminMenuFix = __webpack_require__(39);

var _adminMenuFix2 = _interopRequireDefault(_adminMenuFix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-new */
var Vue = dokan_get_lib('Vue');

new Vue({
    el: '#dokan-vue-admin',
    router: _router2.default,
    render: function render(h) {
        return h(_App2.default);
    }
});

// fix the admin menu for the slug "vue-app"
(0, _adminMenuFix2.default)('dokan');

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(8);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3a030f38_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(31);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(30)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3a030f38_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/admin/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a030f38", Component.options)
  } else {
    hotAPI.reload("data-v-3a030f38", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "vue-backend-app" } },
    [
      _c("router-view"),
      _vm._v(" "),
      _c("notifications", { attrs: { position: "bottom right" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3a030f38", esExports)
  }
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Dashboard = __webpack_require__(33);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Withdraw = __webpack_require__(36);

var _Withdraw2 = _interopRequireDefault(_Withdraw);

var _Premium = __webpack_require__(62);

var _Premium2 = _interopRequireDefault(_Premium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vue = dokan_get_lib('Vue');
var Router = dokan_get_lib('Router');

Vue.use(Router);

dokan_add_route(_Dashboard2.default);
dokan_add_route(_Withdraw2.default);
dokan_add_route(_Premium2.default);

/**
 * Parse the route array and bind required components
 *
 * This changes the dokan.routes array and changes the components
 * so we can use dokan.routeComponents.{compontent} component.
 *
 * @param  {array} routes
 *
 * @return {void}
 */
function parseRouteComponent(routes) {

    for (var i = 0; i < routes.length; i++) {
        if (_typeof(routes[i].children) === 'object') {

            parseRouteComponent(routes[i].children);

            if (typeof routes[i].component !== 'undefined') {
                routes[i].component = dokan.routeComponents[routes[i].component];
            }
        } else {
            routes[i].component = dokan.routeComponents[routes[i].component];
        }
    }
}

// mutate the localized array
parseRouteComponent(dokan.routes);

exports.default = new Router({
    routes: dokan.routes
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dashboard_vue__ = __webpack_require__(9);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_219ffca0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dashboard_vue__ = __webpack_require__(35);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(34)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dashboard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_219ffca0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dashboard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/admin/pages/Dashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-219ffca0", Component.options)
  } else {
    hotAPI.reload("data-v-219ffca0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dokan-dashboard" }, [
    _c("h1", [_vm._v("Dashboard")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "widgets-wrapper" },
      [
        _c(
          "postbox",
          { attrs: { title: "At a Glance", extraClass: "dokan-status" } },
          [
            _c("div", { staticClass: "dokan-status" }, [
              _c("ul", [
                _c("li", { staticClass: "sale" }, [
                  _c("div", { staticClass: "dashicons dashicons-chart-bar" }),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "#" } }, [
                    _c("strong", [
                      _vm._v(
                        "\n                                $1200\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "details" }, [
                      _vm._v(
                        "\n                                net sales this month"
                      ),
                      _c("span", { staticClass: "up" }, [_vm._v("2")])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "commission" }, [
                  _c("div", { staticClass: "dashicons dashicons-chart-pie" }),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "#" } }, [
                    _c("strong", [
                      _vm._v(
                        "\n                                $1100\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "details" }, [
                      _vm._v(
                        "\n                                net sales this month"
                      ),
                      _c("span", { staticClass: "up" }, [_vm._v("2")])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "vendor" }, [
                  _c("div", { staticClass: "dashicons dashicons-id" }),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "#" } }, [
                    _c("strong", [_vm._v("100 Vendor")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "details" }, [
                      _vm._v(
                        "\n                                signup this month"
                      ),
                      _c("span", { staticClass: "down" }, [_vm._v("3")])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "approval" }, [
                  _c("div", { staticClass: "dashicons dashicons-businessman" }),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "#" } }, [
                    _c("strong", [_vm._v("10 Vendor")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "details" }, [
                      _vm._v(
                        "\n                                awaiting approval\n                            "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "product" }, [
                  _c("div", { staticClass: "dashicons dashicons-cart" }),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "#" } }, [
                    _c("strong", [_vm._v("17 Product")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "details" }, [
                      _vm._v(
                        "\n                                created this month"
                      ),
                      _c("span", { staticClass: "up" }, [_vm._v("10")])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "withdraw" }, [
                  _c("div", { staticClass: "dashicons dashicons-money" }),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "#" } }, [
                    _c("strong", [_vm._v("19 Withdrawals")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "details" }, [
                      _vm._v(
                        "\n                                awaiting approval\n                            "
                      )
                    ])
                  ])
                ])
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c("postbox", { attrs: { title: "Overview" } }),
        _vm._v(" "),
        _c("postbox", { attrs: { title: "Dokan News Updates" } })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-219ffca0", esExports)
  }
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Withdraw_vue__ = __webpack_require__(10);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62373ea4_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Withdraw_vue__ = __webpack_require__(38);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(37)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-62373ea4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Withdraw_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62373ea4_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Withdraw_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/admin/pages/Withdraw.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62373ea4", Component.options)
  } else {
    hotAPI.reload("data-v-62373ea4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app-settings" },
    [
      _c("h1", [_vm._v("Withdraw Requests")]),
      _vm._v(" "),
      _c("list-table", {
        attrs: {
          columns: _vm.columns,
          rows: _vm.requests,
          actions: _vm.actions,
          "show-cb": _vm.showCb,
          "bulk-actions": _vm.bulkActions
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-62373ea4", esExports)
  }
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * As we are using hash based navigation, hack fix
 * to highlight the current selected menu
 *
 * Requires jQuery
 */
function menuFix(slug) {
    var $ = jQuery;

    var menuRoot = $('#toplevel_page_' + slug);
    var currentUrl = window.location.href;
    var currentPath = currentUrl.substr(currentUrl.indexOf('admin.php'));

    menuRoot.on('click', 'a', function () {
        var self = $(this);

        $('ul.wp-submenu li', menuRoot).removeClass('current');

        if (self.hasClass('wp-has-submenu')) {
            $('li.wp-first-item', menuRoot).addClass('current');
        } else {
            self.parents('li').addClass('current');
        }
    });

    $('ul.wp-submenu a', menuRoot).each(function (index, el) {
        if ($(el).attr('href') === currentPath) {
            $(el).parent().addClass('current');
            return;
        }
    });
}

exports.default = menuFix;

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({

    name: 'Premium',

    data() {
        return {
            features: [{
                "title": "Vendor Listing",
                "desc": "View vendor listing with vendor details and earnings.",
                "thumbnail": "https:\/\/wedevs-com-wedevs.netdna-ssl.com\/wp-content\/uploads\/2014\/02\/seller@2x.png?58e47e",
                "class": "seller-listing",
                "url": "https:\/\/wedevs.com\/products\/plugins\/dokan\/"
            }, {
                "title": "Commission Per Vendor Report",
                "desc": "View commission per vendor with vendor earnings. You can charge your vendors percentage, giving them an e-commerce solution free of any monthly fees.",
                "thumbnail": "https:\/\/wedevs-com-wedevs.netdna-ssl.com\/wp-content\/uploads\/2014\/02\/earn@2x.png?58e47e",
                "class": "commission-per-seller-report",
                "url": "https:\/\/wedevs.com\/products\/plugins\/dokan\/"
            }, {
                "title": "Birds Eye View With Reports",
                "desc": "Every vendor can see his\/her own sales report and see a bird eye view on the sales they are making. ",
                "thumbnail": "https:\/\/wedevs-com-wedevs.netdna-ssl.com\/wp-content\/uploads\/2017\/01\/Store-Insights-with-Reports-and-Statement@2x.png?x21811",
                "class": "report-bird-view",
                "url": "https:\/\/wedevs.com\/products\/plugins\/dokan\/"
            }, {
                "title": "Coupon Management",
                "desc": "Every vendor manages their own products and discounts they offer. create discount coupons for special sales! ",
                "thumbnail": "https:\/\/wedevs-com-wedevs.netdna-ssl.com\/wp-content\/uploads\/2014\/02\/coupon@2x.png?58e47e",
                "class": "coupon-management",
                "url": "https:\/\/wedevs.com\/products\/plugins\/dokan\/"
            }, {
                "title": "Manage Product Reviews",
                "desc": "Each vendor manages their own product reviews independently. Delete, mark as spam or modify the product reviews on the fly.",
                "thumbnail": "https:\/\/wedevs-com-wedevs.netdna-ssl.com\/wp-content\/uploads\/2014\/02\/reviews@2x.png?58e47e",
                "class": "manage-product-reviews",
                "url": "https:\/\/wedevs.com\/products\/plugins\/dokan\/"
            }, {
                "title": "Vendor Profile Completeness",
                "desc": "Dokan manage vendors profile completeness par on vendors dashboard. Vendor can view his\/her profile completeness percent by the bar. ",
                "thumbnail": "https:\/\/wedevs-com-wedevs.netdna-ssl.com\/wp-content\/uploads\/2014\/02\/Dashboard-profile-completion.png?58e47e",
                "class": "profile-completeness",
                "url": "https:\/\/wedevs.com\/products\/plugins\/dokan\/"
            }, {
                "title": "Vendor Payment Method Setup",
                "desc": "Vendor can manage there payment methods from their dashboard settings. They can set their withdraw method from there.",
                "thumbnail": "https:\/\/wedevs-com-wedevs.netdna-ssl.com\/wp-content\/uploads\/2014\/02\/Dashboard-payment.png?58e47e",
                "class": "payment-method",
                "url": "https:\/\/wedevs.com\/products\/plugins\/dokan\/"
            }, {
                "title": "Admin Announcement System for Vendor",
                "desc": "Admin can set announcement for vendors from back-end. Admin can choose all vendor or select individuals as he\/she wants. the announcement will then show on vendor dashboard which leads to a announcement list template. ",
                "thumbnail": "https:\/\/wedevs-com-wedevs.netdna-ssl.com\/wp-content\/uploads\/2014\/02\/Dashboard-announcement.png?58e47e",
                "class": "announcement",
                "url": "https:\/\/wedevs.com\/products\/plugins\/dokan\/"
            }]
        };
    }
});

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Premium_vue__ = __webpack_require__(61);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b38fd83a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Premium_vue__ = __webpack_require__(64);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(63)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Premium_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b38fd83a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Premium_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/admin/pages/Premium.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b38fd83a", Component.options)
  } else {
    hotAPI.reload("data-v-b38fd83a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dokan-pro-features" }, [
    _c("h1", [_vm._v("Dokan - Pro Features")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "pro-feature-wrap" },
      _vm._l(_vm.features, function(feature) {
        return _c("div", { staticClass: "pro-feature" }, [
          _c("div", { staticClass: "pro-feature-thumb" }, [
            _c("a", { attrs: { href: feature.url, target: "_blank" } }, [
              _c("img", {
                attrs: { src: feature.thumbnail, alt: feature.title }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "pro-detail" }, [
            _c("h3", { staticClass: "title" }, [
              _c("a", { attrs: { href: feature.url, target: "_blank" } }, [
                _vm._v(_vm._s(feature.title))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text" }, [_vm._v(_vm._s(feature.desc))])
          ])
        ])
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b38fd83a", esExports)
  }
}

/***/ })
],[28]);