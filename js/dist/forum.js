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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! exports provided: modals, discussions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modals", function() { return _src_forum__WEBPACK_IMPORTED_MODULE_0__["modals"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "discussions", function() { return _src_forum__WEBPACK_IMPORTED_MODULE_0__["discussions"]; });



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

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

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
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

/***/ "./src/forum/events/RecipientLeft.js":
/*!*******************************************!*\
  !*** ./src/forum/events/RecipientLeft.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecipientLeft; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_components_EventPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/EventPost */ "flarum/forum/components/EventPost");
/* harmony import */ var flarum_forum_components_EventPost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_EventPost__WEBPACK_IMPORTED_MODULE_1__);



var RecipientLeft = /*#__PURE__*/function (_EventPost) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RecipientLeft, _EventPost);

  function RecipientLeft() {
    return _EventPost.apply(this, arguments) || this;
  }

  RecipientLeft.initAttrs = function initAttrs(attrs) {
    _EventPost.initAttrs.call(this, attrs);
  };

  var _proto = RecipientLeft.prototype;

  _proto.icon = function icon() {
    return app.forum.data.attributes['boybu.icon-postAction'];
  };

  _proto.descriptionKey = function descriptionKey() {
    return 'aravinth-boybu.forum.post.recipients_modified.removed_self';
  };

  return RecipientLeft;
}(flarum_forum_components_EventPost__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/events/RecipientsModified.js":
/*!************************************************!*\
  !*** ./src/forum/events/RecipientsModified.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecipientsModified; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_components_EventPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/EventPost */ "flarum/forum/components/EventPost");
/* harmony import */ var flarum_forum_components_EventPost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_EventPost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_labels_recipientsLabels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/labels/recipientsLabels */ "./src/forum/pages/labels/recipientsLabels.tsx");




var RecipientsModified = /*#__PURE__*/function (_EventPost) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RecipientsModified, _EventPost);

  function RecipientsModified() {
    return _EventPost.apply(this, arguments) || this;
  }

  RecipientsModified.initAttrs = function initAttrs(attrs) {
    _EventPost.initAttrs.call(this, attrs);

    function diff(diff1, diff2, store) {
      return diff1.filter(function (item) {
        return diff2.indexOf(item) === -1;
      }).map(function (id) {
        return app.store.getById(store, id);
      });
    }

    var content = attrs.post.content(); // For event posts existing before groups functionality.

    if (!content['new'] && content.length == 2) {
      var oldRecipients = attrs.post.content()[0];
      var newRecipients = attrs.post.content()[1];
      attrs.added = diff(newRecipients, oldRecipients, 'users');
      attrs.removed = diff(oldRecipients, newRecipients, 'users');
    } else {
      var usersAdded = diff(content['new']['users'], content['old']['users'], 'users');
      var usersRemoved = diff(content['old']['users'], content['new']['users'], 'users');
      var groupsAdded = diff(content['new']['groups'], content['old']['groups'], 'groups');
      var groupsRemoved = diff(content['old']['groups'], content['new']['groups'], 'groups');
      attrs.added = usersAdded.concat(groupsAdded);
      attrs.removed = usersRemoved.concat(groupsRemoved);
    }
  };

  var _proto = RecipientsModified.prototype;

  _proto.icon = function icon() {
    return app.forum.data.attributes['boybu.icon-postAction'];
  };

  _proto.descriptionKey = function descriptionKey() {
    var localeBase = 'aravinth-boybu.forum.post.recipients_modified.';

    if (this.attrs.added.length) {
      if (this.attrs.removed.length) {
        return localeBase + 'added_and_removed';
      }

      return localeBase + 'added';
    }

    return localeBase + 'removed';
  };

  _proto.descriptionData = function descriptionData() {
    var data = {};

    if (this.attrs.added.length) {
      data.added = Object(_pages_labels_recipientsLabels__WEBPACK_IMPORTED_MODULE_2__["default"])(this.attrs.added, {
        link: true
      });
    }

    if (this.attrs.removed.length) {
      data.removed = Object(_pages_labels_recipientsLabels__WEBPACK_IMPORTED_MODULE_2__["default"])(this.attrs.removed, {
        link: true
      });
    }

    return data;
  };

  return RecipientsModified;
}(flarum_forum_components_EventPost__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/events/index.js":
/*!***********************************!*\
  !*** ./src/forum/events/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RecipientLeft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecipientLeft */ "./src/forum/events/RecipientLeft.js");
/* harmony import */ var _RecipientsModified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecipientsModified */ "./src/forum/events/RecipientsModified.js");


/* harmony default export */ __webpack_exports__["default"] = (function (app) {
  app.postComponents.recipientsModified = _RecipientsModified__WEBPACK_IMPORTED_MODULE_1__["default"];
  app.postComponents.recipientLeft = _RecipientLeft__WEBPACK_IMPORTED_MODULE_0__["default"];
});

/***/ }),

/***/ "./src/forum/extend/Discussion.js":
/*!****************************************!*\
  !*** ./src/forum/extend/Discussion.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Badge */ "flarum/common/components/Badge");
/* harmony import */ var flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/models/Discussion */ "flarum/common/models/Discussion");
/* harmony import */ var flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/models/User */ "flarum/common/models/User");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_User__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/models/Group */ "flarum/common/models/Group");
/* harmony import */ var flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/forum/components/DiscussionListItem */ "flarum/forum/components/DiscussionListItem");
/* harmony import */ var flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/forum/components/DiscussionHero */ "flarum/forum/components/DiscussionHero");
/* harmony import */ var flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/forum/states/DiscussionListState */ "flarum/forum/states/DiscussionListState");
/* harmony import */ var flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _pages_labels_recipientsLabels__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/labels/recipientsLabels */ "./src/forum/pages/labels/recipientsLabels.tsx");
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/forum/utils/DiscussionControls */ "flarum/forum/utils/DiscussionControls");
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _modals_AddRecipientModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../modals/AddRecipientModal */ "./src/forum/modals/AddRecipientModal.js");














/* harmony default export */ __webpack_exports__["default"] = (function () {
  attributes();
  badges();
  index();
  hero();
  apiInclude();
  controls();
});

var add = function add(discussion, items, _long) {
  var recipients = [];

  if (discussion.recipientUsers().length) {
    recipients = recipients.concat(discussion.recipientUsers());
  }

  if (discussion.recipientGroups().length) {
    recipients = recipients.concat(discussion.recipientGroups());
  }

  if (recipients && recipients.length) {
    if (_long) {
      items.add('recipients', Object(_pages_labels_recipientsLabels__WEBPACK_IMPORTED_MODULE_10__["default"])(recipients), 10);
    } else {
      items.add('recipients', Object(_pages_labels_recipientsLabels__WEBPACK_IMPORTED_MODULE_10__["default"])(recipients, {
        link: true
      }), 4);
    }
  }
};

function badges() {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'badges', function (badges) {
    if (this.recipientUsers().length || this.recipientGroups().length) {
      badges.add('private', flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_2___default.a.component({
        type: 'private',
        label: app.translator.trans('aravinth-boybu.forum.badges.is_private.tooltip'),
        icon: app.forum.data.attributes['boybu.icon-badge']
      }), 10);
    }
  });
}

function index() {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_7___default.a.prototype, 'infoItems', function (items) {
    var discussion = this.attrs.discussion;
    add(discussion, items, true);
  });
}

function hero() {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_8___default.a.prototype, 'items', function (items) {
    var discussion = this.attrs.discussion;
    add(discussion, items, false);
  });
}

function apiInclude() {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_9___default.a.prototype, 'requestParams', function (params) {
    params.include.push('recipientUsers');
    params.include.push('recipientGroups');
  });
}

function controls() {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_11___default.a, 'moderationControls', function (items, discussion) {
    if (discussion.canEditRecipients()) {
      items.add('recipients', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default.a.component({
        icon: app.forum.data.attributes['boybu.icon-badge'],
        onclick: function onclick() {
          return app.modal.show(_modals_AddRecipientModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
            discussion: discussion
          });
        }
      }, app.translator.trans('aravinth-boybu.forum.buttons.edit_recipients')));
    }

    if (discussion && discussion.recipientUsers().find(function (user) {
      return user.id() === app.session.user.id();
    })) {
      items.add('remove', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default.a.component({
        icon: 'fas fa-user-slash',
        onclick: function onclick() {
          if (discussion) {
            var recipients = new flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_12___default.a();
            discussion.recipientUsers().map(function (user) {
              if (app.session.user.id() !== user.id()) {
                recipients.add('users:' + user.id(), user);
              }
            });
            var recipientGroups = [];
            var recipientUsers = [];
            recipients.toArray().forEach(function (recipient) {
              if (recipient instanceof flarum_common_models_User__WEBPACK_IMPORTED_MODULE_4___default.a) {
                recipientUsers.push(recipient);
              }

              if (recipient instanceof flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_5___default.a) {
                recipientGroups.push(recipient);
              }
            });
            discussion.save({
              relationships: {
                recipientUsers: recipientUsers,
                recipientGroups: recipientGroups
              }
            }).then(function () {
              return app.history.back();
            });
          }
        }
      }, app.translator.trans('aravinth-boybu.forum.buttons.remove_from_discussion')));
    }
  });
}

function attributes() {
  flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.recipientUsers = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasMany('recipientUsers');
  flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.oldRecipientUsers = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasMany('oldRecipientUsers');
  flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.recipientGroups = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasMany('recipientGroups');
  flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.oldRecipientGroups = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasMany('oldRecipientGroups');
  flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.canEditRecipients = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('canEditRecipients');
  flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.canEditUserRecipients = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('canEditUserRecipients');
  flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.canEditGroupRecipients = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('canEditGroupRecipients');
  flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.canEditGroupRecipients = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('canEditGroupRecipients');
  flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.isPrivateDiscussion = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('isPrivateDiscussion');
}

/***/ }),

/***/ "./src/forum/extend/SettingsPage.js":
/*!******************************************!*\
  !*** ./src/forum/extend/SettingsPage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/SettingsPage */ "flarum/forum/components/SettingsPage");
/* harmony import */ var flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (app) {
  privacyToggle(app);
});

function privacyToggle(app) {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'privacyItems', function (items) {
    var _this = this;

    items.add('boybu-block-dm', flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      state: this.user.blocksPd(),
      onchange: function onchange(value) {
        _this.blocksPdLoading = true;

        _this.user.save({
          blocksPd: value
        }).then(function () {
          _this.blocksPdLoading = false;
          m.redraw();
        });
      },
      loading: this.blocksPdLoading
    }, app.translator.trans('aravinth-boybu.forum.user.settings.block_pd')));
  });
}

/***/ }),

/***/ "./src/forum/extend/User.js":
/*!**********************************!*\
  !*** ./src/forum/extend/User.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/models/User */ "flarum/common/models/User");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_User__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_utils_UserControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/utils/UserControls */ "flarum/forum/utils/UserControls");
/* harmony import */ var flarum_forum_utils_UserControls__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_utils_UserControls__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_discussions_PrivateDiscussionComposer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../pages/discussions/PrivateDiscussionComposer */ "./src/forum/pages/discussions/PrivateDiscussionComposer.js");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/forum/components/UserPage */ "flarum/forum/components/UserPage");
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_8__);









/* harmony default export */ __webpack_exports__["default"] = (function (app) {
  attributes();
  message(app);
  sharedMessageHistory(app);
});

function message(app) {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_utils_UserControls__WEBPACK_IMPORTED_MODULE_3___default.a, 'userControls', function (items, user) {
    if (app.session.user && app.session.user.id() !== user.id() && app.forum.attribute('canStartPrivateDiscussion') && (user.blocksPd() === false || app.forum.attribute('canStartPrivateDiscussionWithBlockers') && user.cannotBeDirectMessaged())) {
      items.add('private-discussion', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
        icon: app.forum.data.attributes['boybu.icon-badge'],
        onclick: function onclick(e) {
          e.preventDefault();
          return new Promise(function (resolve) {
            var recipients = new flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default.a();
            recipients.add('users:' + app.session.user.id(), app.session.user);
            recipients.add('users:' + user.id(), user);
            _pages_discussions_PrivateDiscussionComposer__WEBPACK_IMPORTED_MODULE_4__["default"].prototype.recipients = recipients;
            app.composer.load(_pages_discussions_PrivateDiscussionComposer__WEBPACK_IMPORTED_MODULE_4__["default"], {
              user: app.session.user,
              recipients: recipients,
              recipientUsers: recipients,
              titlePlaceholder: app.translator.trans('aravinth-boybu.forum.composer_private_discussion.title_placeholder'),
              submitLabel: app.translator.trans('aravinth-boybu.forum.composer_private_discussion.submit_button')
            });
            app.composer.show();
            return resolve(app.composer);
          });
        }
      }, app.translator.trans('aravinth-boybu.forum.buttons.send_pd', {
        username: user.username()
      })));
    }

    return items;
  });
}

function sharedMessageHistory(app) {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_7___default.a.prototype, 'navItems', function (items) {
    var href = app.route('boybuUserPrivate', {
      username: this.user.username()
    }); // Hide links from guests if they are not already on the page

    if (!app.session.user && m.route.get() !== href) return; // Hide link for your own page.

    if (app.session.user && app.session.user.username() === this.user.username()) return;
    items.add('boybu', flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      href: href,
      icon: app.forum.data.attributes['boybu.icon-badge']
    }, app.translator.trans('aravinth-boybu.forum.user.boybu_link')), 85);
  });
}

function attributes() {
  flarum_common_models_User__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.blocksPd = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('blocksPd');
  flarum_common_models_User__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.cannotBeDirectMessaged = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('cannotBeDirectMessaged');
  flarum_common_models_User__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.unreadPrivateMessagesCount = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('unreadPrivateMessagesCount');
}

/***/ }),

/***/ "./src/forum/extend/index.js":
/*!***********************************!*\
  !*** ./src/forum/extend/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SettingsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsPage */ "./src/forum/extend/SettingsPage.js");
/* harmony import */ var _Discussion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Discussion */ "./src/forum/extend/Discussion.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./src/forum/extend/User.js");



/* harmony default export */ __webpack_exports__["default"] = (function (app) {
  Object(_Discussion__WEBPACK_IMPORTED_MODULE_1__["default"])(app);
  Object(_SettingsPage__WEBPACK_IMPORTED_MODULE_0__["default"])(app);
  Object(_User__WEBPACK_IMPORTED_MODULE_2__["default"])(app);
});

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! exports provided: modals, discussions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/forum/events/index.js");
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extend */ "./src/forum/extend/index.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages */ "./src/forum/pages/index.js");
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications */ "./src/forum/notifications/index.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals */ "./src/forum/modals/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modals", function() { return _modals__WEBPACK_IMPORTED_MODULE_4__["modals"]; });

/* harmony import */ var _pages_discussions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/discussions */ "./src/forum/pages/discussions/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "discussions", function() { return _pages_discussions__WEBPACK_IMPORTED_MODULE_5__["discussions"]; });







app.initializers.add('aravinth-boybu', function (app) {
  Object(_events__WEBPACK_IMPORTED_MODULE_0__["default"])(app);
  Object(_extend__WEBPACK_IMPORTED_MODULE_1__["default"])(app);
  Object(_pages__WEBPACK_IMPORTED_MODULE_2__["default"])(app);
  Object(_notifications__WEBPACK_IMPORTED_MODULE_3__["default"])(app);
});

/***/ }),

/***/ "./src/forum/modals/AddRecipientModal.js":
/*!***********************************************!*\
  !*** ./src/forum/modals/AddRecipientModal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddRecipientModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/DiscussionPage */ "flarum/forum/components/DiscussionPage");
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_forum_states_SearchState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/forum/states/SearchState */ "flarum/forum/states/SearchState");
/* harmony import */ var flarum_forum_states_SearchState__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_states_SearchState__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _search_RecipientSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../search/RecipientSearch */ "./src/forum/search/RecipientSearch.js");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/models/User */ "flarum/common/models/User");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_User__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/models/Group */ "flarum/common/models/Group");
/* harmony import */ var flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_9__);











var AddRecipientModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AddRecipientModal, _Modal);

  function AddRecipientModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = AddRecipientModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);

    this.selected = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default()(new flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default.a());

    if (this.attrs.discussion) {
      // Adds recipients of the currently viewed discussion.
      this.assignInitialRecipients(this.attrs.discussion);
    } else if (this.attrs.selectedRecipients && this.attrs.selectedRecipients.toArray().length > 0) {
      // Adds previously selected recipients.
      this.selected().merge(this.attrs.selectedRecipients);
    } else {
      // Adds the current user in case there are no selected recipients yet and this is a new discussion.
      this.selected().add('users:' + app.session.user.id(), app.session.user);
    }

    this.recipientSearch = new flarum_forum_states_SearchState__WEBPACK_IMPORTED_MODULE_6___default.a();
  };

  _proto.isDismissible = function isDismissible() {
    return false;
  };

  _proto.assignInitialRecipients = function assignInitialRecipients(discussion) {
    var _this = this;

    discussion.recipientUsers().map(function (user) {
      _this.selected().add('users:' + user.id(), user);
    });
    discussion.recipientGroups().map(function (group) {
      _this.selected().add('groups:' + group.id(), group);
    });
  };

  _proto.className = function className() {
    return 'AddRecipientModal';
  };

  _proto.title = function title() {
    return this.attrs.discussion ? app.translator.trans('aravinth-boybu.forum.modal.titles.update_recipients', {
      title: m("em", null, this.attrs.discussion.title())
    }) : app.translator.trans('aravinth-boybu.forum.modal.titles.add_recipients');
  };

  _proto.helpText = function helpText() {
    return this.attrs.discussion ? app.translator.trans('aravinth-boybu.forum.modal.help.update_recipients') : app.translator.trans('aravinth-boybu.forum.modal.help.add_recipients');
  };

  _proto.content = function content() {
    return [m("div", {
      className: "Modal-body"
    }, m("div", {
      "class": "AddRecipientModal-help"
    }, this.helpText()), m("div", {
      className: "AddRecipientModal-form"
    }, _search_RecipientSearch__WEBPACK_IMPORTED_MODULE_7__["default"].component({
      state: this.recipientSearch,
      selected: this.selected,
      discussion: this.attrs.discussion
    }), m("div", {
      className: "AddRecipientModal-form-submit App-primaryControl"
    }, flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      type: 'submit',
      className: 'Button Button--primary',
      icon: 'fas fa-check'
    }, app.translator.trans('aravinth-boybu.forum.buttons.submit')), flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      onclick: this.hide.bind(this),
      className: 'Button Button--cancel'
    }, app.translator.trans('aravinth-boybu.forum.buttons.cancel')))))];
  };

  _proto.select = function select(e) {
    // Ctrl + Enter submits the selection, just Enter completes the current entry
    if (e.metaKey || e.ctrlKey || this.selected.indexOf(this.index) !== -1) {
      if (this.selected().length) {
        this.$('form').submit();
      }
    }
  };

  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();
    var discussion = this.attrs.discussion;
    var recipients = this.selected();
    var recipientGroups = [];
    var recipientUsers = [];
    recipients.toArray().forEach(function (recipient) {
      if (recipient instanceof flarum_common_models_User__WEBPACK_IMPORTED_MODULE_8___default.a) {
        recipientUsers.push(recipient);
      }

      if (recipient instanceof flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_9___default.a) {
        recipientGroups.push(recipient);
      }
    }); // Recipients are updated here for existing discussions here.

    if (discussion) {
      discussion.save({
        relationships: {
          recipientUsers: recipientUsers,
          recipientGroups: recipientGroups
        }
      }).then(function () {
        if (app.current instanceof flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default.a) {
          app.current.stream.update();
        }

        m.redraw();
      });
    } // Use the onsubmit callback to trigger an update in the DiscussionComposer


    if (this.attrs.onsubmit) this.attrs.onsubmit(recipients);
    app.modal.close();

    if (!this.attrs.discussion) {
      app.composer.show();
    }

    e.redraw = false;
  };

  return AddRecipientModal;
}(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/modals/index.js":
/*!***********************************!*\
  !*** ./src/forum/modals/index.js ***!
  \***********************************/
/*! exports provided: modals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modals", function() { return modals; });
/* harmony import */ var _AddRecipientModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddRecipientModal */ "./src/forum/modals/AddRecipientModal.js");

var modals = {
  AddRecipientModal: _AddRecipientModal__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/forum/notifications/PrivateDiscussionAddedNotification.js":
/*!***********************************************************************!*\
  !*** ./src/forum/notifications/PrivateDiscussionAddedNotification.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrivateDiscussionAddedNotification; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/Notification */ "flarum/forum/components/Notification");
/* harmony import */ var flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1__);



var PrivateDiscussionAddedNotification = /*#__PURE__*/function (_Notification) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PrivateDiscussionAddedNotification, _Notification);

  function PrivateDiscussionAddedNotification() {
    return _Notification.apply(this, arguments) || this;
  }

  var _proto = PrivateDiscussionAddedNotification.prototype;

  _proto.icon = function icon() {
    return app.forum.data.attributes['boybu.icon-badge'];
  };

  _proto.href = function href() {
    var notification = this.attrs.notification;
    var discussion = notification.subject();
    return app.route.discussion(discussion);
  };

  _proto.content = function content() {
    var user = this.attrs.notification.fromUser();
    return app.translator.trans('aravinth-boybu.forum.notifications.pd_added_text', {
      user: user
    });
  };

  return PrivateDiscussionAddedNotification;
}(flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/notifications/PrivateDiscussionNotification.js":
/*!******************************************************************!*\
  !*** ./src/forum/notifications/PrivateDiscussionNotification.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrivateDiscussionNotification; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/Notification */ "flarum/forum/components/Notification");
/* harmony import */ var flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1__);



var PrivateDiscussionNotification = /*#__PURE__*/function (_Notification) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PrivateDiscussionNotification, _Notification);

  function PrivateDiscussionNotification() {
    return _Notification.apply(this, arguments) || this;
  }

  var _proto = PrivateDiscussionNotification.prototype;

  _proto.icon = function icon() {
    return app.forum.data.attributes['boybu.icon-badge'];
  };

  _proto.href = function href() {
    var notification = this.attrs.notification;
    var discussion = notification.subject();
    return app.route.discussion(discussion);
  };

  _proto.content = function content() {
    var user = this.attrs.notification.fromUser();
    return app.translator.trans('aravinth-boybu.forum.notifications.pd_text', {
      user: user
    });
  };

  return PrivateDiscussionNotification;
}(flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/notifications/PrivateDiscussionReplyNotification.js":
/*!***********************************************************************!*\
  !*** ./src/forum/notifications/PrivateDiscussionReplyNotification.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrivateDiscussionReplyNotification; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/Notification */ "flarum/forum/components/Notification");
/* harmony import */ var flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1__);



var PrivateDiscussionReplyNotification = /*#__PURE__*/function (_Notification) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PrivateDiscussionReplyNotification, _Notification);

  function PrivateDiscussionReplyNotification() {
    return _Notification.apply(this, arguments) || this;
  }

  var _proto = PrivateDiscussionReplyNotification.prototype;

  _proto.icon = function icon() {
    return 'fas fa-reply';
  };

  _proto.href = function href() {
    var notification = this.attrs.notification;
    var discussion = notification.subject();
    var content = notification.content() || {};
    return app.route.discussion(discussion, content.postNumber);
  };

  _proto.content = function content() {
    var user = this.attrs.notification.fromUser();
    return app.translator.trans('aravinth-boybu.forum.notifications.pd_reply_text', {
      user: user
    });
  };

  return PrivateDiscussionReplyNotification;
}(flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/notifications/PrivateDiscussionUserLeftNotification.js":
/*!**************************************************************************!*\
  !*** ./src/forum/notifications/PrivateDiscussionUserLeftNotification.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrivateDiscussionUserLeftNotification; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/Notification */ "flarum/forum/components/Notification");
/* harmony import */ var flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1__);



var PrivateDiscussionUserLeftNotification = /*#__PURE__*/function (_Notification) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PrivateDiscussionUserLeftNotification, _Notification);

  function PrivateDiscussionUserLeftNotification() {
    return _Notification.apply(this, arguments) || this;
  }

  var _proto = PrivateDiscussionUserLeftNotification.prototype;

  _proto.icon = function icon() {
    return app.forum.data.attributes['boybu.icon-badge'];
  };

  _proto.href = function href() {
    var notification = this.attrs.notification;
    var discussion = notification.subject();
    return app.route.discussion(discussion);
  };

  _proto.content = function content() {
    var user = this.attrs.notification.fromUser();
    return app.translator.trans('aravinth-boybu.forum.notifications.pd_user_left_text', {
      user: user
    });
  };

  return PrivateDiscussionUserLeftNotification;
}(flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/notifications/index.js":
/*!******************************************!*\
  !*** ./src/forum/notifications/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/NotificationGrid */ "flarum/forum/components/NotificationGrid");
/* harmony import */ var flarum_forum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PrivateDiscussionNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrivateDiscussionNotification */ "./src/forum/notifications/PrivateDiscussionNotification.js");
/* harmony import */ var _PrivateDiscussionReplyNotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PrivateDiscussionReplyNotification */ "./src/forum/notifications/PrivateDiscussionReplyNotification.js");
/* harmony import */ var _PrivateDiscussionUserLeftNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PrivateDiscussionUserLeftNotification */ "./src/forum/notifications/PrivateDiscussionUserLeftNotification.js");
/* harmony import */ var _PrivateDiscussionAddedNotification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PrivateDiscussionAddedNotification */ "./src/forum/notifications/PrivateDiscussionAddedNotification.js");






/* harmony default export */ __webpack_exports__["default"] = (function (app) {
  app.notificationComponents.boybuPrivateDiscussionCreated = _PrivateDiscussionNotification__WEBPACK_IMPORTED_MODULE_2__["default"];
  app.notificationComponents.boybuPrivateDiscussionReplied = _PrivateDiscussionReplyNotification__WEBPACK_IMPORTED_MODULE_3__["default"];
  app.notificationComponents.boybuRecipientRemoved = _PrivateDiscussionUserLeftNotification__WEBPACK_IMPORTED_MODULE_4__["default"];
  app.notificationComponents.boybuPrivateDiscussionAdded = _PrivateDiscussionAddedNotification__WEBPACK_IMPORTED_MODULE_5__["default"];
  grid();
});

function grid() {
  // Add notification preferences.
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'notificationTypes', function (items) {
    items.add('boybuPrivateDiscussionCreated', {
      name: 'boybuPrivateDiscussionCreated',
      icon: app.forum.data.attributes['boybu.icon-badge'],
      label: app.translator.trans('aravinth-boybu.forum.notifications.pd_label')
    });
    items.add('boybuPrivateDiscussionReplied', {
      name: 'boybuPrivateDiscussionReplied',
      icon: app.forum.data.attributes['boybu.icon-badge'],
      label: app.translator.trans('aravinth-boybu.forum.notifications.pd_reply_label')
    });
    items.add('boybuPrivateDiscussionAdded', {
      name: 'boybuPrivateDiscussionAdded',
      icon: app.forum.data.attributes['boybu.icon-badge'],
      label: app.translator.trans('aravinth-boybu.forum.notifications.pd_added_label')
    });
    items.add('boybuRecipientRemoved', {
      name: 'boybuRecipientRemoved',
      icon: app.forum.data.attributes['boybu.icon-badge'],
      label: app.translator.trans('aravinth-boybu.forum.notifications.pd_user_left_label')
    });
  });
}

/***/ }),

/***/ "./src/forum/pages/PrivateComposing.js":
/*!*********************************************!*\
  !*** ./src/forum/pages/PrivateComposing.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrivateComposing; });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/LogInModal */ "flarum/forum/components/LogInModal");
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _discussions_PrivateDiscussionComposer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./discussions/PrivateDiscussionComposer */ "./src/forum/pages/discussions/PrivateDiscussionComposer.js");






var PrivateComposing = /*#__PURE__*/function () {
  function PrivateComposing(recipient) {
    this.recipient = recipient;
  }

  var _proto = PrivateComposing.prototype;

  _proto.action = function action(e) {
    var _this = this;

    e.preventDefault();
    return new Promise(function (resolve, reject) {
      if (app.session.user) {
        var recipients = new flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default.a();
        recipients.add('users:' + app.session.user.id(), app.session.user);

        if (_this.recipient && app.session.user.id() !== _this.recipient.id()) {
          recipients.add('users:' + _this.recipient.id(), _this.recipient);
        }

        app.composer.load(_discussions_PrivateDiscussionComposer__WEBPACK_IMPORTED_MODULE_4__["default"], {
          user: app.session.user,
          recipients: recipients,
          recipientUsers: recipients
        });
        app.composer.show();
        return resolve();
      } else {
        app.modal.show(flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_2___default.a);
        return reject();
      }
    });
  };

  _proto.component = function component() {
    return flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a.component({
      icon: 'fas fa-pen',
      className: 'Button Button--primary IndexPage-newDiscussion',
      itemClassName: 'App-primaryControl aravinth-boybu_primaryControl',
      onclick: this.action.bind(this),
      disabled: !this.canStartDiscussion
    }, app.translator.trans(this.canStartDiscussion ? 'aravinth-boybu.forum.nav.start_button' : 'core.forum.index.cannot_start_discussion_button'));
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(PrivateComposing, [{
    key: "canStartDiscussion",
    get: function get() {
      return app.session.user && app.forum.attribute('canStartPrivateDiscussion');
    }
  }]);

  return PrivateComposing;
}();



/***/ }),

/***/ "./src/forum/pages/PrivateDiscussionsPage.js":
/*!***************************************************!*\
  !*** ./src/forum/pages/PrivateDiscussionsPage.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/states/DiscussionListState */ "flarum/forum/states/DiscussionListState");
/* harmony import */ var flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PrivateComposing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PrivateComposing */ "./src/forum/pages/PrivateComposing.js");





/* harmony default export */ __webpack_exports__["default"] = (function (app) {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'navItems', function (items) {
    var user = app.session.user;

    if (user) {
      items.add('privateDiscussions', flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_1___default.a.component({
        icon: app.forum.data.attributes['boybu.icon-badge'],
        href: app.route('boybuPrivate')
      }, app.translator.trans('aravinth-boybu.forum.nav.nav_item')), 75);
    }
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'setTitle', function () {
    if (app.current.get('routeName') === 'boybuPrivate') {
      app.setTitle(app.translator.trans('aravinth-boybu.forum.user.dropdown_label'));
    }
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'requestParams', function (params) {
    if (app.current.get('routeName') === 'boybuPrivate') {
      params.filter.q = (params.filter.q || '') + ' is:private';
      params.include.push('recipientUsers');
      params.include.push('recipientGroups');
    }
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'sidebarItems', function (items) {
    if (app.current.get('routeName') === 'boybuPrivate') {
      var compose = new _PrivateComposing__WEBPACK_IMPORTED_MODULE_4__["default"]();
      items.replace('newDiscussion', compose.component());
    }
  });
});

/***/ }),

/***/ "./src/forum/pages/PrivateDiscussionsUserPage.js":
/*!*******************************************************!*\
  !*** ./src/forum/pages/PrivateDiscussionsUserPage.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrivateDiscussionsUserPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/UserPage */ "flarum/forum/components/UserPage");
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _states_PrivateDiscussionListState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../states/PrivateDiscussionListState */ "./src/forum/states/PrivateDiscussionListState.js");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _discussions_PrivateDiscussionList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./discussions/PrivateDiscussionList */ "./src/forum/pages/discussions/PrivateDiscussionList.js");
/* harmony import */ var _PrivateComposing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrivateComposing */ "./src/forum/pages/PrivateComposing.js");










var PrivateDiscussionsUserPage = /*#__PURE__*/function (_UserPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PrivateDiscussionsUserPage, _UserPage);

  function PrivateDiscussionsUserPage() {
    return _UserPage.apply(this, arguments) || this;
  }

  var _proto = PrivateDiscussionsUserPage.prototype;

  _proto.oninit = function oninit(vnode) {
    _UserPage.prototype.oninit.call(this, vnode);

    this.changeSort('latest');
  };

  _proto.show = function show(user) {
    // We can not create the list in init because the user will not be available if it has to be loaded asynchronously
    this.list = new _states_PrivateDiscussionListState__WEBPACK_IMPORTED_MODULE_2__["default"]({
      q: "boybu:" + user.username() + " is:private",
      sort: this.sort
    });
    this.list.refresh(); // We call the parent method after creating the list, this way the this.list property
    // is set before content() is called for the first time

    _UserPage.prototype.show.call(this, user);
  };

  _proto.handleChangeSort = function handleChangeSort(sort, e) {
    e.preventDefault();
    this.changeSort(sort);
  };

  _proto.changeSort = function changeSort(sort) {
    this.sort = sort;
    this.loadUser(m.route.param('username'));
  };

  _proto.content = function content() {
    return m("div", {
      className: "DiscussionsUserPage"
    }, m("div", {
      className: "DiscussionsUserPage-toolbar"
    }, m("ul", {
      className: "DiscussionsUserPage-toolbar-action"
    }, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default()(this.actionItems().toArray())), m("ul", {
      className: "DiscussionsUserPage-toolbar-view"
    }, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default()(this.viewItems().toArray()))), m(_discussions_PrivateDiscussionList__WEBPACK_IMPORTED_MODULE_7__["default"], {
      state: this.list
    }));
  };

  _proto.actionItems = function actionItems() {
    var composing = new _PrivateComposing__WEBPACK_IMPORTED_MODULE_8__["default"](this.user);
    var items = new flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default.a();

    if (app.session.user && app.forum.attribute('canStartPrivateDiscussion')) {
      items.add('start_private', composing.component());
    }

    return items;
  };

  _proto.viewItems = function viewItems() {
    var _this = this;

    var items = new flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default.a();
    var sortMap = this.list.sortMap();
    var sortOptions = {};

    for (var i in sortMap) {
      sortOptions[i] = app.translator.trans('core.forum.index_sort.' + i + '_button');
    }

    items.add('sort', flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      buttonClassName: 'Button',
      label: sortOptions[this.sort] || Object.keys(sortMap).map(function (key) {
        return sortOptions[key];
      })[0]
    }, Object.keys(sortOptions).map(function (value) {
      var label = sortOptions[value];
      var active = (_this.sort || Object.keys(sortMap)[0]) === value;
      return flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
        icon: active ? 'fas fa-check' : true,
        onclick: _this.handleChangeSort.bind(_this, value),
        active: active
      }, label);
    })));
    return items;
  };

  return PrivateDiscussionsUserPage;
}(flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/pages/discussions/PrivateDiscussionComposer.js":
/*!******************************************************************!*\
  !*** ./src/forum/pages/discussions/PrivateDiscussionComposer.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrivateDiscussionComposer; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/DiscussionComposer */ "flarum/forum/components/DiscussionComposer");
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modals_AddRecipientModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modals/AddRecipientModal */ "./src/forum/modals/AddRecipientModal.js");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _labels_recipientCountLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../labels/recipientCountLabel */ "./src/forum/pages/labels/recipientCountLabel.js");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/models/User */ "flarum/common/models/User");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_User__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/models/Group */ "flarum/common/models/Group");
/* harmony import */ var flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_6__);








var PrivateDiscussionComposer = /*#__PURE__*/function (_DiscussionComposer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PrivateDiscussionComposer, _DiscussionComposer);

  function PrivateDiscussionComposer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _DiscussionComposer.call.apply(_DiscussionComposer, [this].concat(args)) || this;
    _this._isByobuComposer = true;
    return _this;
  }

  PrivateDiscussionComposer.initAttrs = function initAttrs(attrs) {
    _DiscussionComposer.initAttrs.call(this, attrs);

    attrs.titlePlaceholder = app.translator.trans('aravinth-boybu.forum.composer_private_discussion.title_placeholder');
    attrs.submitLabel = app.translator.trans('aravinth-boybu.forum.composer_private_discussion.submit_button');
  };

  var _proto = PrivateDiscussionComposer.prototype;

  _proto.oninit = function oninit(vnode) {
    _DiscussionComposer.prototype.oninit.call(this, vnode);

    this.composer.fields.recipients = this.attrs.recipients || new flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default.a();
    this.composer.fields.recipientUsers = this.attrs.recipientUsers || [];
    this.composer.fields.recipientGroups = this.attrs.recipientGroups || [];
    var username = m.route.param('username');

    if (typeof username !== 'undefined') {
      this.addDefaultRecipients(username);
    }
  };

  _proto.data = function data() {
    var data = _DiscussionComposer.prototype.data.call(this);

    var users = [];
    var groups = [];

    if (this.composer.fields.recipients !== undefined) {
      this.composer.fields.recipients.toArray().forEach(function (recipient) {
        if (recipient instanceof flarum_common_models_User__WEBPACK_IMPORTED_MODULE_5___default.a) {
          users.push(recipient);
        }

        if (recipient instanceof flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_6___default.a) {
          groups.push(recipient);
        }
      });
    }

    data.relationships = data.relationships || {};

    if (users.length) {
      data.relationships.recipientUsers = users;
    }

    if (groups.length) {
      data.relationships.recipientGroups = groups;
    }

    return data;
  };

  _proto.chooseRecipients = function chooseRecipients() {
    var _this2 = this;

    app.modal.show(_modals_AddRecipientModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      selectedRecipients: this.composer.fields.recipients,
      onsubmit: function onsubmit(recipients) {
        _this2.composer.fields.recipients = recipients; // Focus on recipient autocomplete field.

        _this2.$('.RecipientsInput').focus();
      }
    });
  };

  _proto.headerItems = function headerItems() {
    var items = _DiscussionComposer.prototype.headerItems.call(this);

    if (app.session.user && app.forum.attribute('canStartPrivateDiscussion')) {
      var recipients = this.composer.fields.recipients.toArray();
      items.add('recipients', m("a", {
        className: "PrivateDiscussionComposer-changeRecipients",
        onclick: this.chooseRecipients.bind(this)
      }, recipients.length ? Object(_labels_recipientCountLabel__WEBPACK_IMPORTED_MODULE_4__["default"])(recipients.length) : m("span", {
        className: "RecipientLabel none"
      }, app.translator.trans('aravinth-boybu.forum.buttons.add_recipients'))), 5);
    }

    return items;
  };

  _proto.addDefaultRecipients = function addDefaultRecipients(username) {
    var user = app.store.getBy('users', 'username', username);
    this.composer.fields.recipients.add('users:' + app.session.user.id(), app.session.user);

    if (user.id() !== app.session.user.id()) {
      this.composer.fields.recipients.add('users:' + user.id(), user);
    }
  };

  _proto.onsubmit = function onsubmit() {
    this.loading = true;
    var recipients = this.composer.fields.recipients.toArray();

    if (recipients.length < 2) {
      this.chooseRecipients();
      this.loading = false;
    } else {
      var data = this.data();
      app.store.createRecord('discussions').save(data).then(function (discussion) {
        if (app.cache.discussionList) {
          app.cache.discussionList.refresh();
        }

        m.route.set(app.route.discussion(discussion));
        app.composer.hide();
      }, this.loaded.bind(this));
    }
  };

  return PrivateDiscussionComposer;
}(flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/pages/discussions/PrivateDiscussionList.js":
/*!**************************************************************!*\
  !*** ./src/forum/pages/discussions/PrivateDiscussionList.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrivateDiscussionList; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/DiscussionList */ "flarum/forum/components/DiscussionList");
/* harmony import */ var flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_1__);



var PrivateDiscussionList = /*#__PURE__*/function (_DiscussionList) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PrivateDiscussionList, _DiscussionList);

  function PrivateDiscussionList() {
    return _DiscussionList.apply(this, arguments) || this;
  }

  return PrivateDiscussionList;
}(flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/pages/discussions/index.js":
/*!**********************************************!*\
  !*** ./src/forum/pages/discussions/index.js ***!
  \**********************************************/
/*! exports provided: discussions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discussions", function() { return discussions; });
/* harmony import */ var _PrivateDiscussionComposer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrivateDiscussionComposer */ "./src/forum/pages/discussions/PrivateDiscussionComposer.js");
/* harmony import */ var _PrivateDiscussionList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrivateDiscussionList */ "./src/forum/pages/discussions/PrivateDiscussionList.js");


var discussions = {
  PrivateDiscussionComposer: _PrivateDiscussionComposer__WEBPACK_IMPORTED_MODULE_0__["default"],
  PrivateDiscussionList: _PrivateDiscussionList__WEBPACK_IMPORTED_MODULE_1__["default"]
};

/***/ }),

/***/ "./src/forum/pages/index.js":
/*!**********************************!*\
  !*** ./src/forum/pages/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ "./src/forum/pages/routes.js");
/* harmony import */ var _PrivateDiscussionsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrivateDiscussionsPage */ "./src/forum/pages/PrivateDiscussionsPage.js");


/* harmony default export */ __webpack_exports__["default"] = (function (app) {
  Object(_routes__WEBPACK_IMPORTED_MODULE_0__["default"])(app);
  Object(_PrivateDiscussionsPage__WEBPACK_IMPORTED_MODULE_1__["default"])(app);
});

/***/ }),

/***/ "./src/forum/pages/labels/RecipientLabel.tsx":
/*!***************************************************!*\
  !*** ./src/forum/pages/labels/RecipientLabel.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecipientLabel; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/helpers/username */ "flarum/common/helpers/username");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/models/User */ "flarum/common/models/User");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_User__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/models/Group */ "flarum/common/models/Group");
/* harmony import */ var flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_8__);


var _excluded = ["recipient", "link"];








var RecipientLabel = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(RecipientLabel, _Component);

  function RecipientLabel() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = RecipientLabel.prototype;

  _proto.view = function view(vnode) {
    var _this$attrs = this.attrs,
        recipient = _this$attrs.recipient,
        link = _this$attrs.link,
        newAttrs = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$attrs, _excluded);

    newAttrs.style = newAttrs.style || {};
    newAttrs.className = flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6___default()('RecipientLabel', newAttrs == null ? void 0 : newAttrs.className);

    if (link && recipient instanceof flarum_common_models_User__WEBPACK_IMPORTED_MODULE_3___default.a) {
      newAttrs.href = flarum_forum_app__WEBPACK_IMPORTED_MODULE_7___default.a.route.user(recipient);
    }

    var label;

    if (recipient instanceof flarum_common_models_User__WEBPACK_IMPORTED_MODULE_3___default.a) {
      var _app$session, _app$session$user;

      label = flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_2___default()(recipient);

      if (!newAttrs.href && recipient.id() !== (flarum_forum_app__WEBPACK_IMPORTED_MODULE_7___default.a == null ? void 0 : (_app$session = flarum_forum_app__WEBPACK_IMPORTED_MODULE_7___default.a.session) == null ? void 0 : (_app$session$user = _app$session.user) == null ? void 0 : _app$session$user.id())) {
        newAttrs.href = flarum_forum_app__WEBPACK_IMPORTED_MODULE_7___default.a.route.user(recipient);
      }
    } else if (recipient instanceof flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_4___default.a) {
      return m("span", {
        "class": newAttrs.className
      }, recipient.namePlural());
    } else {
      newAttrs.className += ' none';
      label = flarum_forum_app__WEBPACK_IMPORTED_MODULE_7___default.a.translator.trans('flarum.core.lib.username.deleted_text');
    }

    return m(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default.a, newAttrs, label);
  };

  return RecipientLabel;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_8___default.a);



/***/ }),

/***/ "./src/forum/pages/labels/recipientCountLabel.js":
/*!*******************************************************!*\
  !*** ./src/forum/pages/labels/recipientCountLabel.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return recipientCountLabel; });
function recipientCountLabel(count, attrs) {
  if (attrs === void 0) {
    attrs = {};
  }

  attrs.style = attrs.style || {};
  attrs.className = 'RecipientLabel ' + (attrs.className || '');
  var label = app.translator.trans('aravinth-boybu.forum.labels.recipients', {
    count: count
  });
  return m('span', attrs, m("span", {
    className: "RecipientLabel-text"
  }, label));
}

/***/ }),

/***/ "./src/forum/pages/labels/recipientsLabels.tsx":
/*!*****************************************************!*\
  !*** ./src/forum/pages/labels/recipientsLabels.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return recipientsLabel; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/models/User */ "flarum/common/models/User");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_User__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RecipientLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RecipientLabel */ "./src/forum/pages/labels/RecipientLabel.tsx");

var _excluded = ["link", "className"];



function recipientsLabel(recipients, attrs) {
  if (attrs === void 0) {
    attrs = {};
  }

  var _attrs = attrs,
      link = _attrs.link,
      className = _attrs.className,
      otherAttrs = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_attrs, _excluded);

  otherAttrs.className = flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2___default()('RecipientsLabel', className);
  return m("span", otherAttrs, recipients == null ? void 0 : recipients.map(function (recipient) {
    var type = recipient instanceof flarum_common_models_User__WEBPACK_IMPORTED_MODULE_1___default.a ? 'u' : 'g';
    return m(_RecipientLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: type + "-" + recipient.id(),
      recipient: recipient,
      link: link
    });
  }), !recipients && m(_RecipientLabel__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}

/***/ }),

/***/ "./src/forum/pages/routes.js":
/*!***********************************!*\
  !*** ./src/forum/pages/routes.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PrivateDiscussionsUserPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrivateDiscussionsUserPage */ "./src/forum/pages/PrivateDiscussionsUserPage.js");


/* harmony default export */ __webpack_exports__["default"] = (function (app) {
  app.routes.boybuUserPrivate = {
    path: '/u/:username/private',
    component: _PrivateDiscussionsUserPage__WEBPACK_IMPORTED_MODULE_1__["default"]
  };
  app.routes.boybuPrivate = {
    path: '/private',
    component: flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_0___default.a
  };
});

/***/ }),

/***/ "./src/forum/search/RecipientSearch.js":
/*!*********************************************!*\
  !*** ./src/forum/search/RecipientSearch.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecipientSearch; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/Search */ "flarum/forum/components/Search");
/* harmony import */ var flarum_forum_components_Search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sources_UserSearchSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sources/UserSearchSource */ "./src/forum/search/sources/UserSearchSource.js");
/* harmony import */ var _sources_GroupSearchSource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sources/GroupSearchSource */ "./src/forum/search/sources/GroupSearchSource.js");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _pages_labels_RecipientLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/labels/RecipientLabel */ "./src/forum/pages/labels/RecipientLabel.tsx");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/models/User */ "flarum/common/models/User");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_User__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/common/models/Group */ "flarum/common/models/Group");
/* harmony import */ var flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_12__);














var RecipientSearch = /*#__PURE__*/function (_Search) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RecipientSearch, _Search);

  function RecipientSearch() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Search.call.apply(_Search, [this].concat(args)) || this;
    _this.inputUuid = void 0;
    return _this;
  }

  var _proto = RecipientSearch.prototype;

  _proto.oninit = function oninit(vnode) {
    _Search.prototype.oninit.call(this, vnode);

    this.inputUuid = Math.random().toString(36).substring(2);
  };

  _proto.oncreate = function oncreate(vnode) {
    var _this2 = this;

    _Search.prototype.oncreate.call(this, vnode);

    var $search = this;
    this.$('.Search-results').on('click', function (e) {
      var target = _this2.$('.SearchResult.active');

      $search.addRecipient(target.data('index'));
      $search.$('.RecipientsInput').focus();
    });
    this.$('.Search-results').on('touchstart', function (e) {
      var target = _this2.$(e.target.parentNode);

      $search.addRecipient(target.data('index'));
      $search.$('.RecipientsInput').focus();
    });
    $('.RecipientsInput').on('input', function () {
      clearTimeout(_this2.typingTimer);
      _this2.doSearch = false;
      _this2.typingTimer = setTimeout(function () {
        _this2.doSearch = true;
        m.redraw();
      }, 900);
    }).on('keydown', function () {
      clearTimeout(_this2.typingTimer);
    });

    _Search.prototype.oncreate.call(this, vnode);
  };

  _proto.view = function view() {
    var _this3 = this;

    if (typeof this.state.getValue() === 'undefined') {
      this.state.setValue('');
    }

    var loading = this.state.getValue() && this.state.getValue().length >= 3;

    if (!this.sources) {
      this.sources = this.sourceItems().toArray();
    }

    return m("div", {
      role: "search",
      className: "Search"
    }, m("div", {
      className: "RecipientsInput-selected RecipientsLabel",
      "aria-live": "polite"
    }, m("h4", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('aravinth-boybu.forum.modal.labels.selected_users')), m("p", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('aravinth-boybu.forum.modal.help.selected_users')), this.attrs.selected().toArray().map(function (recipient) {
      return m(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_12___default.a, {
        text: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('aravinth-boybu.forum.modal.help.click_user_to_remove_tooltip')
      }, m(_pages_labels_RecipientLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
        "data-container": "body",
        recipient: recipient,
        onclick: function onclick(e) {
          return _this3.removeRecipient(recipient, e);
        }
      }));
    })), m("div", {
      className: "Form-group"
    }, m("label", {
      "for": "boybu-addrecipient-search-input-" + this.inputUuid
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('aravinth-boybu.forum.modal.labels.search_field')), m("div", {
      className: "AddRecipientModal-form-input Search-input"
    }, m("input", {
      id: "boybu-addrecipient-search-input-" + this.inputUuid,
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6___default()('RecipientsInput', 'FormControl', {
        open: !!this.state.getValue(),
        focused: !!this.state.getValue(),
        active: !!this.state.getValue(),
        loading: !!this.loadingSources
      }),
      oncreate: function oncreate(vnode) {
        return vnode.dom.focus();
      },
      type: "search",
      placeholder: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('aravinth-boybu.forum.input.search_recipients')),
      value: this.state.getValue(),
      oninput: function oninput(e) {
        return _this3.state.setValue(e.target.value);
      },
      onfocus: function onfocus() {
        return _this3.hasFocus = true;
      },
      onblur: function onblur() {
        return _this3.hasFocus = false;
      }
    }), m("ul", {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6___default()('Dropdown-menu', 'Search-results', 'fade', {
        "in": !!loading
      })
    }, !this.doSearch ? flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      size: 'tiny',
      className: 'Button Button--icon Button--link'
    }) : this.sources.map(function (source) {
      return source.view(_this3.state.getValue());
    })))));
  }
  /**
   * Build an item list of SearchSources.
   *
   * @return {ItemList}
   */
  ;

  _proto.sourceItems = function sourceItems() {
    var items = new flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default.a(); // Add user source based on permissions.

    if (!this.attrs.discussion && flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('canStartPrivateDiscussionWithUsers') || this.attrs.discussion && this.attrs.discussion.canEditUserRecipients()) {
      items.add('users', new _sources_UserSearchSource__WEBPACK_IMPORTED_MODULE_3__["default"]());
    } // Add group source based on permissions.


    if (!this.attrs.discussion && flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('canStartPrivateDiscussionWithGroups') || this.attrs.discussion && this.attrs.discussion.canEditGroupRecipients()) {
      items.add('groups', new _sources_GroupSearchSource__WEBPACK_IMPORTED_MODULE_4__["default"]());
    }

    return items;
  }
  /**
   * Adds a recipient.
   *
   * @param value
   */
  ;

  _proto.addRecipient = function addRecipient(value) {
    var values = value.split(':'),
        type = values[0],
        id = values[1];
    var recipient = this.findRecipient(type, id);
    this.attrs.selected().add(value, recipient);
    this.state.clear();
  }
  /**
   * Removes a recipient.
   *
   * @param recipient
   */
  ;

  _proto.removeRecipient = function removeRecipient(recipient, e) {
    e.preventDefault();
    var type;

    if (recipient instanceof flarum_common_models_User__WEBPACK_IMPORTED_MODULE_10___default.a) {
      type = 'users';
    }

    if (recipient instanceof flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_11___default.a) {
      type = 'groups';
    }

    this.attrs.selected().remove(type + ':' + recipient.id());
  }
  /**
   * Loads a recipient from the global store.
   *
   * @param store
   * @param id
   * @returns {Model}
   */
  ;

  _proto.findRecipient = function findRecipient(store, id) {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.getById(store, id);
  };

  return RecipientSearch;
}(flarum_forum_components_Search__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/search/sources/GroupSearchSource.js":
/*!*******************************************************!*\
  !*** ./src/forum/search/sources/GroupSearchSource.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GroupSearchSource; });
/* harmony import */ var flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/helpers/highlight */ "flarum/common/helpers/highlight");
/* harmony import */ var flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_0__);


var GroupSearchSource = /*#__PURE__*/function () {
  function GroupSearchSource() {}

  var _proto = GroupSearchSource.prototype;

  _proto.search = function search(query) {
    return app.store.find('groups', {
      filter: {
        q: query
      },
      page: {
        limit: 5
      }
    });
  };

  _proto.view = function view(query) {
    query = query.toLowerCase();
    var results = app.store.all('groups').filter(function (group) {
      return group.namePlural().toLowerCase().substr(0, query.length) === query;
    });
    if (!results.length) return '';
    return [m("li", {
      className: "Dropdown-header"
    }, app.translator.trans('aravinth-boybu.forum.search.headings.groups')), results.map(function (group) {
      var groupName = group.namePlural();
      var name = flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_0___default()(groupName, query);
      return m("li", {
        className: "SearchResult",
        "data-index": 'groups:' + group.id()
      }, m("a", {
        "data-index": 'groups:' + group.id()
      }, m("span", {
        "class": "groupName"
      }, name)));
    })];
  };

  return GroupSearchSource;
}();



/***/ }),

/***/ "./src/forum/search/sources/UserSearchSource.js":
/*!******************************************************!*\
  !*** ./src/forum/search/sources/UserSearchSource.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserSearchSource; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/helpers/highlight */ "flarum/common/helpers/highlight");
/* harmony import */ var flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/helpers/avatar */ "flarum/common/helpers/avatar");
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/username */ "flarum/common/helpers/username");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_3__);





var UserSearchSource = /*#__PURE__*/function () {
  function UserSearchSource() {}

  var _proto = UserSearchSource.prototype;

  _proto.view = function view(query) {
    var _this = this;

    if (query.length < 3 || this.loading) return;

    if (!app.cache.boybuResults) {
      app.cache.boybuResults = [];
    }

    this.query = query;

    if (!app.cache.boybuResults[this.query]) {
      this.loading = true;
      app.cache.boybuResults[this.query] = [];
      app.store.find('users', {
        filter: {
          q: this.query + ' allows-pd'
        },
        page: {
          limit: 5
        }
      }).then(this.pushResults.bind(this));
    } else return [m("li", {
      className: "Dropdown-header"
    }, app.translator.trans('core.forum.search.users_heading')), app.cache.boybuResults[this.query].map(function (user) {
      var name = flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_3___default()(user);
      var children = [flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_1___default()(name.text, _this.query)];
      return m("li", {
        className: "SearchResult",
        "data-index": 'users:' + user.id()
      }, m("a", {
        "data-index": 'users:' + user.id()
      }, flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_2___default()(user), Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, {
        text: undefined,
        children: children
      })));
    })];
  };

  _proto.pushResults = function pushResults(results) {
    var _this2 = this;

    results.payload.data.map(function (result) {
      var user = app.store.getById('users', result.id);

      app.cache.boybuResults[_this2.query].push(user);
    });
    this.loading = false;
    m.redraw();
  };

  return UserSearchSource;
}();



/***/ }),

/***/ "./src/forum/states/PrivateDiscussionListState.js":
/*!********************************************************!*\
  !*** ./src/forum/states/PrivateDiscussionListState.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrivateDiscussionListState; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/states/DiscussionListState */ "flarum/forum/states/DiscussionListState");
/* harmony import */ var flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_1__);



var PrivateDiscussionListState = /*#__PURE__*/function (_DiscussionListState) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PrivateDiscussionListState, _DiscussionListState);

  function PrivateDiscussionListState() {
    return _DiscussionListState.apply(this, arguments) || this;
  }

  return PrivateDiscussionListState;
}(flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/components/Badge":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Badge']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Badge'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Dropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Dropdown']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Dropdown'];

/***/ }),

/***/ "flarum/common/components/LinkButton":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/LinkButton']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/LinkButton'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/components/Tooltip":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Tooltip']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Tooltip'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/avatar":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/avatar']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/avatar'];

/***/ }),

/***/ "flarum/common/helpers/highlight":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/highlight']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/highlight'];

/***/ }),

/***/ "flarum/common/helpers/listItems":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/listItems']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/listItems'];

/***/ }),

/***/ "flarum/common/helpers/username":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/username']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/username'];

/***/ }),

/***/ "flarum/common/models/Discussion":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/models/Discussion']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/models/Discussion'];

/***/ }),

/***/ "flarum/common/models/Group":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/models/Group']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/models/Group'];

/***/ }),

/***/ "flarum/common/models/User":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/models/User']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/models/User'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/common/utils/classList":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/utils/classList']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/classList'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/extractText'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/DiscussionComposer":
/*!****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionComposer']" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/DiscussionComposer'];

/***/ }),

/***/ "flarum/forum/components/DiscussionHero":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionHero']" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/DiscussionHero'];

/***/ }),

/***/ "flarum/forum/components/DiscussionList":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionList']" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/DiscussionList'];

/***/ }),

/***/ "flarum/forum/components/DiscussionListItem":
/*!****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionListItem']" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/DiscussionListItem'];

/***/ }),

/***/ "flarum/forum/components/DiscussionPage":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionPage']" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/DiscussionPage'];

/***/ }),

/***/ "flarum/forum/components/EventPost":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/EventPost']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/EventPost'];

/***/ }),

/***/ "flarum/forum/components/IndexPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/IndexPage']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/IndexPage'];

/***/ }),

/***/ "flarum/forum/components/LogInModal":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/LogInModal']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/LogInModal'];

/***/ }),

/***/ "flarum/forum/components/Notification":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/Notification']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/Notification'];

/***/ }),

/***/ "flarum/forum/components/NotificationGrid":
/*!**************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/NotificationGrid']" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/NotificationGrid'];

/***/ }),

/***/ "flarum/forum/components/Search":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['forum/components/Search']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/Search'];

/***/ }),

/***/ "flarum/forum/components/SettingsPage":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/SettingsPage']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/SettingsPage'];

/***/ }),

/***/ "flarum/forum/components/UserPage":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/UserPage']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/UserPage'];

/***/ }),

/***/ "flarum/forum/states/DiscussionListState":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['forum/states/DiscussionListState']" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/states/DiscussionListState'];

/***/ }),

/***/ "flarum/forum/states/SearchState":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['forum/states/SearchState']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/states/SearchState'];

/***/ }),

/***/ "flarum/forum/utils/DiscussionControls":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['forum/utils/DiscussionControls']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/utils/DiscussionControls'];

/***/ }),

/***/ "flarum/forum/utils/UserControls":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['forum/utils/UserControls']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/utils/UserControls'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map