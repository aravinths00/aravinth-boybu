module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/admin/addPrivateDiscussionPermission.js":
/*!*****************************************************!*\
  !*** ./src/admin/addPrivateDiscussionPermission.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

app.initializers.add('boybu', function (app) {
  app.extensionData["for"]('aravinth-boybu').registerPermission({
    icon: 'far fa-map',
    label: app.translator.trans('aravinth-boybu.admin.permission.create_private_discussions_with_users'),
    permission: 'discussion.startPrivateDiscussionWithUsers'
  }, 'start', 95).registerPermission({
    icon: 'far fa-map',
    label: app.translator.trans('aravinth-boybu.admin.permission.create_private_discussions_with_groups'),
    permission: 'discussion.startPrivateDiscussionWithGroups'
  }, 'start', 95).registerPermission({
    icon: 'far fa-map',
    label: app.translator.trans('aravinth-boybu.admin.permission.create_private_discussions_with_blocking_users'),
    permission: 'startPrivateDiscussionWithBlockers'
  }, 'start', 95).registerPermission({
    icon: 'far fa-map',
    label: app.translator.trans('aravinth-boybu.admin.permission.edit_user_recipients'),
    permission: 'discussion.editUserRecipients'
  }, 'moderate', 95).registerPermission({
    icon: 'far fa-map',
    label: app.translator.trans('aravinth-boybu.admin.permission.edit_group_recipients'),
    permission: 'discussion.editGroupRecipients'
  }, 'moderate', 95).registerPermission({
    icon: 'fas fa-flag',
    label: app.translator.trans('aravinth-boybu.admin.permission.view_private_discussions-when-flagged'),
    permission: 'user.viewPrivateDiscussionsWhenFlagged'
  }, 'moderate', 95);
});

/***/ }),

/***/ "./src/admin/components/BoybuSettingsPage.js":
/*!***************************************************!*\
  !*** ./src/admin/components/BoybuSettingsPage.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BoybuSetingsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Badge */ "flarum/common/components/Badge");
/* harmony import */ var flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__);





var _settings = settings,
    _settings$items = _settings.items,
    BooleanItem = _settings$items.BooleanItem,
    SelectItem = _settings$items.SelectItem,
    StringItem = _settings$items.StringItem,
    NumberItem = _settings$items.NumberItem;

var BoybuSetingsPage = /*#__PURE__*/function (_ExtensionPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BoybuSetingsPage, _ExtensionPage);

  function BoybuSetingsPage() {
    return _ExtensionPage.apply(this, arguments) || this;
  }

  var _proto = BoybuSetingsPage.prototype;

  _proto.oninit = function oninit(vnode) {
    _ExtensionPage.prototype.oninit.call(this, vnode);

    this.setting = this.setting.bind(this);
    this.badgeDefault = 'fas fa-map';
    this.postActionDefault = 'far fa-map';
  };

  _proto.content = function content() {
    return [m("div", {
      className: "container"
    }, m("div", {
      className: "BoybuSettingsPage"
    }, m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('aravinth-boybu.admin.settings.badge-icon')), m(StringItem, {
      name: "aravinth-boybu.icon-badge",
      placeholder: this.badgeDefault,
      setting: this.setting
    }, m(flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_3___default.a, {
      icon: this.setting('aravinth-boybu.icon-badge').toJSON() || this.badgeDefault
    }))), m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('aravinth-boybu.admin.settings.post-event-icon')), m(StringItem, {
      name: "aravinth-boybu.icon-postAction",
      placeholder: this.postActionDefault,
      setting: this.setting
    }, m("h2", null, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()(this.setting('aravinth-boybu.icon-postAction').toJSON() || this.postActionDefault)))), flarum.extensions['flarum-tags'] && m("p", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-tags.admin.edit_tag.icon_text', {
      a: m("a", {
        href: "https://fontawesome.com/icons?m=free",
        tabindex: "-1"
      })
    })), m("div", {
      className: "Form-group"
    }, this.submitButton())))];
  };

  return BoybuSetingsPage;
}(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_core_models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/core/models/User */ "flarum/core/models/User");
/* harmony import */ var flarum_core_models_User__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_core_models_User__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _addPrivateDiscussionPermission__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addPrivateDiscussionPermission */ "./src/admin/addPrivateDiscussionPermission.js");
/* harmony import */ var _addPrivateDiscussionPermission__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_addPrivateDiscussionPermission__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BoybuSettingsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BoybuSettingsPage */ "./src/admin/components/BoybuSettingsPage.js");



app.initializers.add('aravinth-boybu', function (app) {
  app.store.models.recipients = flarum_core_models_User__WEBPACK_IMPORTED_MODULE_0___default.a;
  app.extensionData["for"]('aravinth-boybu').registerPage(_components_BoybuSettingsPage__WEBPACK_IMPORTED_MODULE_2__["default"]);
  _addPrivateDiscussionPermission__WEBPACK_IMPORTED_MODULE_1___default()(app);
});

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/common/components/Badge":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Badge']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Badge'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/core/models/User":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['core/models/User']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['core/models/User'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map