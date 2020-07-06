webpackHotUpdate("static\\development\\pages\\hi\\key-issues.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuList */ "./node_modules/@material-ui/core/esm/MenuList/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");
/* harmony import */ var next_translate_Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next-translate/Link */ "./node_modules/next-translate/Link.js");
/* harmony import */ var next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_translate_Link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var fg_loadcss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! fg-loadcss */ "./node_modules/fg-loadcss/src/loadCSS.js");
/* harmony import */ var fg_loadcss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(fg_loadcss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/esm/ListSubheader/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "./node_modules/@material-ui/icons/ExpandLess.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/icons/MonetizationOn */ "./node_modules/@material-ui/icons/MonetizationOn.js");
/* harmony import */ var _material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _material_ui_icons_CenterFocusStrong__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @material-ui/icons/CenterFocusStrong */ "./node_modules/@material-ui/icons/CenterFocusStrong.js");
/* harmony import */ var _material_ui_icons_CenterFocusStrong__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CenterFocusStrong__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @material-ui/icons/ArrowRight */ "./node_modules/@material-ui/icons/ArrowRight.js");
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _material_ui_icons_Speaker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @material-ui/icons/Speaker */ "./node_modules/@material-ui/icons/Speaker.js");
/* harmony import */ var _material_ui_icons_Speaker__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Speaker__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _material_ui_icons_Theaters__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @material-ui/icons/Theaters */ "./node_modules/@material-ui/icons/Theaters.js");
/* harmony import */ var _material_ui_icons_Theaters__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Theaters__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _material_ui_icons_WbIncandescent__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @material-ui/icons/WbIncandescent */ "./node_modules/@material-ui/icons/WbIncandescent.js");
/* harmony import */ var _material_ui_icons_WbIncandescent__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_WbIncandescent__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/useTranslation.js");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_38__);




var _jsxFileName = "C:\\next-demo\\inc-language\\components\\header.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





































var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'inline'
    },
    paper: {
      marginRight: theme.spacing(2)
    }
  };
});
var useStyles_mobile_menu = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  };
});
var useStyles_drawer = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])({
  list: {
    width: 'auto',
    maxWidth: 1000
  },
  fullList: {
    width: 'auto'
  }
});
var useStyles_nested_list = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (theme) {
  return {
    root: {
      width: 'auto',
      maxWidth: 1000,
      backgroundColor: theme.palette.background.paper
    },
    nested: {
      paddingLeft: theme.spacing(4)
    }
  };
});
function Header() {
  _s();

  var _this = this;

  var _useTranslation = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_38___default()(),
      t = _useTranslation.t,
      lang = _useTranslation.lang;

  var subscribe = t('common:subscribe');
  var manifesto = t('common:manifesto');
  var nav_home = t('common:nav_home');
  var nav_key_issues = t('common:key_issues');
  var nav_Organisation = t('common:Organisation');
  var nav_OurValue = t('common:Organisation');
  var classes_mobile_menu = useStyles_mobile_menu();
  var classes = useStyles();
  var classess_drawer = useStyles_drawer();
  var classes_nested_list = useStyles_nested_list(); // sub menu list mobile start

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      open_Org = _React$useState2[0],
      setOpen_nested_Org = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      open_KeyIssues = _React$useState4[0],
      setOpen_nested_KeyIssues = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      open_Voice = _React$useState6[0],
      setOpen_nested_Voice = _React$useState6[1];

  var handleClick_Org = function handleClick_Org() {
    setOpen_nested_Org(!open_Org);
    setOpen_nested_KeyIssues(false);
    setOpen_nested_Voice(false);
  };

  var handleClick_KeyIssues = function handleClick_KeyIssues() {
    setOpen_nested_KeyIssues(!open_KeyIssues);
    setOpen_nested_Org(false);
    setOpen_nested_Voice(false);
  };

  var handleClick_Voice = function handleClick_Voice() {
    setOpen_nested_Voice(!open_Voice);
    setOpen_nested_KeyIssues(false);
    setOpen_nested_Org(false);
  }; // sub menu list mobile ends


  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({
    left: false
  }),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState7, 2),
      state = _React$useState8[0],
      setState = _React$useState8[1];

  var toggleDrawer = function toggleDrawer(anchor, open) {
    return function (event) {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      setState(_objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, anchor, open)));
    };
  };

  var list = function list(anchor) {
    return __jsx("div", {
      className: "mobile_menu",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_19__["default"])(classess_drawer.list),
      role: "presentation",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_21__["default"], {
      component: "nav",
      "aria-labelledby": "nested-list-subheader",
      subheader: __jsx(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_27__["default"], {
        component: "div",
        id: "nested-list-subheader",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 32
        }
      }, "\xA0"),
      className: classes_nested_list.root,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 25
      }
    }, __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_31___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 29
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Home",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 29
      }
    }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      onClick: handleClick_KeyIssues,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 25
      }
    }, __jsx(_material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_32___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 29
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/key-issues",
      href: "/key-issues",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Key Issues",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 29
      }
    }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      onClick: handleClick_Org,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 25
      }
    }, __jsx(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_26___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 29
      }
    })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Organisation",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 25
      }
    }), open_Org ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_29___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 37
      }
    }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_30___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 54
      }
    })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_28__["default"], {
      "in": open_Org,
      timeout: "auto",
      unmountOnExit: true,
      className: "sub_menu_item_mobile",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_21__["default"], {
      component: "div",
      disablePadding: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      className: classes_nested_list.nested,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/our-values",
      href: "/our-values",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Our Values",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 37
      }
    }))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      className: classes_nested_list.nested,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/our-inspiration",
      href: "/our-inspiration",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Our Inspiration",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 37
      }
    }))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      className: classes_nested_list.nested,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/inc-constitution",
      href: "/inc-constitution",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Inc Constitution",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 37
      }
    }))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      className: classes_nested_list.nested,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/our-achievements",
      href: "/our-achievements",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Our Achievements",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 37
      }
    }))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      className: classes_nested_list.nested,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/our-policies",
      href: "/our-policies",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Our Policies",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 37
      }
    }))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      className: classes_nested_list.nested,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/upa",
      href: "/upa",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "UPA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 37
      }
    }))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      className: classes_nested_list.nested,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/leadership/smt-sonia-gandhi",
      href: "/leadership/smt-sonia-gandhi",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Smt. Sonia Gandhi",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 37
      }
    }))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      className: classes_nested_list.nested,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Past Party Presidents",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 37
      }
    }))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      className: classes_nested_list.nested,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/inc-sessions",
      href: "/inc-sessions",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "INC Sessions",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 37
      }
    }))))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 25
      }
    }, __jsx(_material_ui_icons_CenterFocusStrong__WEBPACK_IMPORTED_MODULE_33___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 29
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/in-focus",
      href: "/in-focus",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "In Focus",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 29
      }
    }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      onClick: handleClick_Voice,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 25
      }
    }, __jsx(_material_ui_icons_Speaker__WEBPACK_IMPORTED_MODULE_35___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 29
      }
    })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Voice of the Nation",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 25
      }
    }), open_Voice ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_29___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 39
      }
    }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_30___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 56
      }
    })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_28__["default"], {
      "in": open_Voice,
      timeout: "auto",
      unmountOnExit: true,
      className: "sub_menu_item_mobile",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_21__["default"], {
      component: "div",
      disablePadding: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      className: classes_nested_list.nested,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Congress Sandesh",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 37
      }
    }))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      className: classes_nested_list.nested,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "A Billion & One Voices",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 37
      }
    }))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      className: classes_nested_list.nested,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Fact Checks",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 37
      }
    }))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      className: classes_nested_list.nested,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "India At 70",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 37
      }
    }))))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 25
      }
    }, __jsx(_material_ui_icons_Theaters__WEBPACK_IMPORTED_MODULE_36___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 29
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Media",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 29
      }
    }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 25
      }
    }, __jsx(_material_ui_icons_WbIncandescent__WEBPACK_IMPORTED_MODULE_37___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375,
        columnNumber: 29
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Join the Movement",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 29
      }
    }))))));
  }; // Web Sub Menu Start


  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState9, 2),
      open_keyissue = _React$useState10[0],
      setOpen_keyissue = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState11, 2),
      open_Organisation = _React$useState12[0],
      setOpen_Organisation = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState13, 2),
      open_voiceofnation = _React$useState14[0],
      setOpen_voiceofnation = _React$useState14[1];

  var anchorRef_keyissue = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(null);
  var anchorRef_Organisation = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(null);
  var anchorRef_voiceofnation = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(null);

  var handleToggle_keyissue = function handleToggle_keyissue() {
    setOpen_keyissue(function (prevOpen) {
      return !prevOpen;
    });
  };

  var handleToggle_Organisation = function handleToggle_Organisation() {
    setOpen_Organisation(function (prevOpen) {
      return !prevOpen;
    });
  };

  var handleToggle_voiceofnation = function handleToggle_voiceofnation() {
    setOpen_voiceofnation(function (prevOpen) {
      return !prevOpen;
    });
  };

  var handleClose_keyissue = function handleClose_keyissue(event) {
    if (anchorRef_keyissue.current && anchorRef_keyissue.current.contains(event.target)) {
      return;
    }

    setOpen_keyissue(false);
  };

  var handleClose_Organisation = function handleClose_Organisation(event) {
    if (anchorRef_Organisation.current && anchorRef_Organisation.current.contains(event.target)) {
      return;
    }

    setOpen_Organisation(false);
  };

  var handleClose_voiceofnation = function handleClose_voiceofnation(event) {
    if (anchorRef_voiceofnation.current && anchorRef_voiceofnation.current.contains(event.target)) {
      return;
    }

    setOpen_voiceofnation(false);
  };

  function handleListKeyDown_KeyIssue(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen_keyissue(false);
    }
  }

  function handleListKeyDown_Organisation(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen_Organisation(false);
    }
  }

  function handleListKeyDown_voiceofnation(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen_voiceofnation(false);
    }
  } // Web Sub Menu Ends


  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    var node = Object(fg_loadcss__WEBPACK_IMPORTED_MODULE_14__["loadCSS"])('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', document.querySelector('#font-awesome-css'));
    return function () {
      node.parentNode.removeChild(node);
    };
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "header_outer_main header_web",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "header_bg_blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "header_bg_white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
    maxWidth: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "header_outer_left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "logo_header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../static/images/logo.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 33
    }
  })))), __jsx("div", {
    className: "header_outer_right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "header_outer_right_top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "social_media_header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "https://www.facebook.com/IndianNationalCongress",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "fa fa-facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493,
      columnNumber: 37
    }
  })), __jsx("a", {
    href: "https://twitter.com/INCIndia",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "fa fa-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 37
    }
  })), __jsx("a", {
    href: "https://www.youtube.com/user/indiacongress",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "fa fa-youtube-play",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 37
    }
  })), __jsx("a", {
    href: "https://www.instagram.com/incindia/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "fa fa-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 37
    }
  })), __jsx("a", {
    href: "https://in.linkedin.com/company/indian-national-congress",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "fa fa-linkedin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 37
    }
  }))), __jsx("div", {
    className: "social_media_right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 29
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 33
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 37
    }
  }, __jsx("a", {
    className: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 41
    }
  }, subscribe)), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 37
    }
  }, __jsx("a", {
    className: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 41
    }
  }, manifesto))))), __jsx("div", {
    className: "header_outer_right_bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "header_nav_item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 33
    }
  }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    as: "/",
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 37
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 41
    }
  }, nav_home))), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 33
    }
  }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    as: "/key-issues",
    href: "/key-issues",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 37
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 41
    }
  }, nav_key_issues))), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: anchorRef_Organisation,
    "aria-controls": open_Organisation ? 'menu-list-grow1' : undefined,
    "aria-haspopup": "true",
    onClick: handleToggle_Organisation,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 37
    }
  }, nav_Organisation)), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 33
    }
  }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    as: "/in-focus",
    href: "/in-focus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 37
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 41
    }
  }, "In Focus"))), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: anchorRef_voiceofnation,
    "aria-controls": open_voiceofnation ? 'menu-list-grow1' : undefined,
    "aria-haspopup": "true",
    onClick: handleToggle_voiceofnation,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 37
    }
  }, "Voice of the Nation")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 33
    }
  }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    as: "/",
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 37
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560,
      columnNumber: 41
    }
  }, "Media"))), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 33
    }
  }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    as: "/",
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 37
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 41
    }
  }, "Join the Movement")))), __jsx(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: open_keyissue,
    anchorEl: anchorRef_keyissue.current,
    role: undefined,
    transition: true,
    disablePortal: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 29
    }
  }, function (_ref) {
    var TransitionProps = _ref.TransitionProps,
        placement = _ref.placement;
    return __jsx(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, TransitionProps, {
      style: {
        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 574,
        columnNumber: 37
      }
    }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 575,
        columnNumber: 41
      }
    }, __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClickAway: handleClose_keyissue,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 576,
        columnNumber: 45
      }
    }, __jsx(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_8__["default"], {
      autoFocusItem: open_keyissue,
      id: "menu-list-grow",
      onKeyDown: handleListKeyDown_KeyIssue,
      className: "sub_menu_item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 577,
        columnNumber: 49
      }
    }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: handleClose_keyissue,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 578,
        columnNumber: 53
      }
    }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/key-issues/economy",
      href: "/key-issues/economy",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 579,
        columnNumber: 57
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 580,
        columnNumber: 61
      }
    }, "Economy"))), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: handleClose_keyissue,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 583,
        columnNumber: 53
      }
    }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/key-issues/foreign-policy",
      href: "/key-issues/foreign-policy",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 584,
        columnNumber: 57
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 585,
        columnNumber: 61
      }
    }, "Foreign Policy")))))));
  }), __jsx(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: open_Organisation,
    anchorEl: anchorRef_Organisation.current,
    role: undefined,
    transition: true,
    disablePortal: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596,
      columnNumber: 29
    }
  }, function (_ref2) {
    var TransitionProps = _ref2.TransitionProps,
        placement = _ref2.placement;
    return __jsx(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, TransitionProps, {
      style: {
        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 598,
        columnNumber: 37
      }
    }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 602,
        columnNumber: 41
      }
    }, __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClickAway: handleClose_Organisation,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 603,
        columnNumber: 45
      }
    }, __jsx(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_8__["default"], {
      autoFocusItem: open_Organisation,
      id: "menu-list-grow1",
      onKeyDown: handleListKeyDown_Organisation,
      className: "sub_menu_item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 604,
        columnNumber: 49
      }
    }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: handleClose_Organisation,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 606,
        columnNumber: 53
      }
    }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/our-values",
      href: "/our-values",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 607,
        columnNumber: 57
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 608,
        columnNumber: 61
      }
    }, nav_OurValue)))))));
  }), __jsx(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: open_voiceofnation,
    anchorEl: anchorRef_voiceofnation.current,
    role: undefined,
    transition: true,
    disablePortal: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675,
      columnNumber: 29
    }
  }, function (_ref3) {
    var TransitionProps = _ref3.TransitionProps,
        placement = _ref3.placement;
    return __jsx(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, TransitionProps, {
      style: {
        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 677,
        columnNumber: 37
      }
    }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 678,
        columnNumber: 41
      }
    }, __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClickAway: handleClose_voiceofnation,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 679,
        columnNumber: 45
      }
    }, __jsx(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_8__["default"], {
      autoFocusItem: open_voiceofnation,
      id: "menu-list-grow",
      onKeyDown: handleListKeyDown_voiceofnation,
      className: "sub_menu_item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 680,
        columnNumber: 49
      }
    }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: handleClose_voiceofnation,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 681,
        columnNumber: 53
      }
    }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 682,
        columnNumber: 57
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 683,
        columnNumber: 61
      }
    }, "Congress Sandesh"))), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: handleClose_voiceofnation,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 687,
        columnNumber: 53
      }
    }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 688,
        columnNumber: 57
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 689,
        columnNumber: 61
      }
    }, "A Billion & One Voices"))), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: handleClose_voiceofnation,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 693,
        columnNumber: 53
      }
    }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 694,
        columnNumber: 57
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 695,
        columnNumber: 61
      }
    }, "Fact Checks"))), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: handleClose_voiceofnation,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 699,
        columnNumber: 53
      }
    }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 700,
        columnNumber: 57
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 701,
        columnNumber: 61
      }
    }, "India At 70")))))));
  }))), __jsx("div", {
    className: "clear",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 717,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "header_mobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724,
      columnNumber: 17
    }
  }, ['left'].map(function (anchor) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
      key: anchor,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 726,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_20__["default"], {
      anchor: anchor,
      open: state[anchor],
      onClose: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 727,
        columnNumber: 29
      }
    }, list(anchor)));
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_17__["default"], {
    position: "static",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 736,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 737,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    edge: "start",
    className: classes_mobile_menu.menuButton,
    color: "inherit",
    "aria-label": "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 738,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_16___default.a, {
    onClick: toggleDrawer('left', true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "menu_flex_1 mobile_logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 743,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "../../static/images/logo.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 744,
      columnNumber: 37
    }
  }))))))));
}

_s(Header, "YpxMIwlacs32Aq8xkPELELW2xmk=", false, function () {
  return [next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_38___default.a, useStyles_mobile_menu, useStyles, useStyles_drawer, useStyles_nested_list];
});

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsInBhcGVyIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwidXNlU3R5bGVzX21vYmlsZV9tZW51IiwiZmxleEdyb3ciLCJtZW51QnV0dG9uIiwidGl0bGUiLCJ1c2VTdHlsZXNfZHJhd2VyIiwibGlzdCIsIndpZHRoIiwibWF4V2lkdGgiLCJmdWxsTGlzdCIsInVzZVN0eWxlc19uZXN0ZWRfbGlzdCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwibmVzdGVkIiwicGFkZGluZ0xlZnQiLCJIZWFkZXIiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJsYW5nIiwic3Vic2NyaWJlIiwibWFuaWZlc3RvIiwibmF2X2hvbWUiLCJuYXZfa2V5X2lzc3VlcyIsIm5hdl9PcmdhbmlzYXRpb24iLCJuYXZfT3VyVmFsdWUiLCJjbGFzc2VzX21vYmlsZV9tZW51IiwiY2xhc3NlcyIsImNsYXNzZXNzX2RyYXdlciIsImNsYXNzZXNfbmVzdGVkX2xpc3QiLCJSZWFjdCIsInVzZVN0YXRlIiwib3Blbl9PcmciLCJzZXRPcGVuX25lc3RlZF9PcmciLCJvcGVuX0tleUlzc3VlcyIsInNldE9wZW5fbmVzdGVkX0tleUlzc3VlcyIsIm9wZW5fVm9pY2UiLCJzZXRPcGVuX25lc3RlZF9Wb2ljZSIsImhhbmRsZUNsaWNrX09yZyIsImhhbmRsZUNsaWNrX0tleUlzc3VlcyIsImhhbmRsZUNsaWNrX1ZvaWNlIiwibGVmdCIsInN0YXRlIiwic2V0U3RhdGUiLCJ0b2dnbGVEcmF3ZXIiLCJhbmNob3IiLCJvcGVuIiwiZXZlbnQiLCJ0eXBlIiwia2V5IiwiY2xzeCIsIm9wZW5fa2V5aXNzdWUiLCJzZXRPcGVuX2tleWlzc3VlIiwib3Blbl9PcmdhbmlzYXRpb24iLCJzZXRPcGVuX09yZ2FuaXNhdGlvbiIsIm9wZW5fdm9pY2VvZm5hdGlvbiIsInNldE9wZW5fdm9pY2VvZm5hdGlvbiIsImFuY2hvclJlZl9rZXlpc3N1ZSIsInVzZVJlZiIsImFuY2hvclJlZl9PcmdhbmlzYXRpb24iLCJhbmNob3JSZWZfdm9pY2VvZm5hdGlvbiIsImhhbmRsZVRvZ2dsZV9rZXlpc3N1ZSIsInByZXZPcGVuIiwiaGFuZGxlVG9nZ2xlX09yZ2FuaXNhdGlvbiIsImhhbmRsZVRvZ2dsZV92b2ljZW9mbmF0aW9uIiwiaGFuZGxlQ2xvc2Vfa2V5aXNzdWUiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJoYW5kbGVDbG9zZV9PcmdhbmlzYXRpb24iLCJoYW5kbGVDbG9zZV92b2ljZW9mbmF0aW9uIiwiaGFuZGxlTGlzdEtleURvd25fS2V5SXNzdWUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUxpc3RLZXlEb3duX09yZ2FuaXNhdGlvbiIsImhhbmRsZUxpc3RLZXlEb3duX3ZvaWNlb2ZuYXRpb24iLCJ1c2VFZmZlY3QiLCJub2RlIiwibG9hZENTUyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInVuZGVmaW5lZCIsIlRyYW5zaXRpb25Qcm9wcyIsInBsYWNlbWVudCIsInRyYW5zZm9ybU9yaWdpbiIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFD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QU8sRUFBRXlDLFlBQVksQ0FBQyxNQUFELEVBQVMsSUFBVCxDQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUtJO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBQyw4QkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQUxKLENBREosQ0FESixDQWJKLENBOVBKLENBRko7QUFnU0g7O0dBanFCdUI1QixNO1VBRUFDLHFFLEVBZ0JRaEIscUIsRUFDWlIsUyxFQUNRWSxnQixFQUNJSyxxQjs7O0tBckJSTSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxoaVxca2V5LWlzc3Vlcy5qcy4yZWIxNTc5ODE0NmY5ZDc0NjBmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDbGlja0F3YXlMaXN0ZW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lcic7XG5pbXBvcnQgR3JvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Hcm93JztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IE1lbnVMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVMaXN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFBvcHBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC10cmFuc2xhdGUvTGluaydcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbmltcG9ydCBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb24nO1xuaW1wb3J0IHsgbG9hZENTUyB9IGZyb20gJ2ZnLWxvYWRjc3MnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IEluYm94SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3gnO1xuaW1wb3J0IExpc3RTdWJoZWFkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFN1YmhlYWRlcic7XG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29sbGFwc2UnO1xuaW1wb3J0IEV4cGFuZExlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3MnO1xuaW1wb3J0IEV4cGFuZE1vcmUgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnO1xuaW1wb3J0IEhvbWVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ib21lJztcbmltcG9ydCBNb25ldGl6YXRpb25Pbkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vbmV0aXphdGlvbk9uJztcbmltcG9ydCBDZW50ZXJGb2N1c1N0cm9uZ0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NlbnRlckZvY3VzU3Ryb25nJztcbmltcG9ydCBBcnJvd1JpZ2h0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dSaWdodCc7XG5pbXBvcnQgU3BlYWtlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NwZWFrZXInO1xuaW1wb3J0IFRoZWF0ZXJzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVGhlYXRlcnMnO1xuaW1wb3J0IFdiSW5jYW5kZXNjZW50SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvV2JJbmNhbmRlc2NlbnQnO1xuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxuICAgIH0sXG4gICAgcGFwZXI6IHtcbiAgICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgfSxcbn0pKTtcblxuXG5jb25zdCB1c2VTdHlsZXNfbW9iaWxlX21lbnUgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAgIGZsZXhHcm93OiAxLFxuICAgIH0sXG4gICAgbWVudUJ1dHRvbjoge1xuICAgICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICAgIGZsZXhHcm93OiAxLFxuICAgIH0sXG59KSk7XG5cbmNvbnN0IHVzZVN0eWxlc19kcmF3ZXIgPSBtYWtlU3R5bGVzKHtcbiAgICBsaXN0OiB7XG4gICAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICAgIG1heFdpZHRoOiAxMDAwLFxuICAgIH0sXG4gICAgZnVsbExpc3Q6IHtcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICB9LFxufSk7XG5cbmNvbnN0IHVzZVN0eWxlc19uZXN0ZWRfbGlzdCA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgICAgbWF4V2lkdGg6IDEwMDAsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgIH0sXG4gICAgbmVzdGVkOiB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcblxuICAgIGNvbnN0IHsgdCwgbGFuZyB9ID0gdXNlVHJhbnNsYXRpb24oKVxuXG4gICAgY29uc3Qgc3Vic2NyaWJlID0gdCgnY29tbW9uOnN1YnNjcmliZScpO1xuICAgIGNvbnN0IG1hbmlmZXN0byA9IHQoJ2NvbW1vbjptYW5pZmVzdG8nKTtcblxuICAgIGNvbnN0IG5hdl9ob21lID0gdCgnY29tbW9uOm5hdl9ob21lJyk7XG4gICAgY29uc3QgbmF2X2tleV9pc3N1ZXMgPSB0KCdjb21tb246a2V5X2lzc3VlcycpO1xuXG4gICAgY29uc3QgbmF2X09yZ2FuaXNhdGlvbiA9IHQoJ2NvbW1vbjpPcmdhbmlzYXRpb24nKTtcblxuICAgIGNvbnN0IG5hdl9PdXJWYWx1ZSA9IHQoJ2NvbW1vbjpPcmdhbmlzYXRpb24nKTtcbiAgICBcblxuXG5cblxuICAgIGNvbnN0IGNsYXNzZXNfbW9iaWxlX21lbnUgPSB1c2VTdHlsZXNfbW9iaWxlX21lbnUoKTtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gICAgY29uc3QgY2xhc3Nlc3NfZHJhd2VyID0gdXNlU3R5bGVzX2RyYXdlcigpO1xuICAgIGNvbnN0IGNsYXNzZXNfbmVzdGVkX2xpc3QgPSB1c2VTdHlsZXNfbmVzdGVkX2xpc3QoKTtcblxuICAgIC8vIHN1YiBtZW51IGxpc3QgbW9iaWxlIHN0YXJ0XG5cbiAgICBjb25zdCBbb3Blbl9PcmcsIHNldE9wZW5fbmVzdGVkX09yZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW29wZW5fS2V5SXNzdWVzLCBzZXRPcGVuX25lc3RlZF9LZXlJc3N1ZXNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtvcGVuX1ZvaWNlLCBzZXRPcGVuX25lc3RlZF9Wb2ljZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGlja19PcmcgPSAoKSA9PiB7XG4gICAgICAgIHNldE9wZW5fbmVzdGVkX09yZyghb3Blbl9PcmcpO1xuICAgICAgICBzZXRPcGVuX25lc3RlZF9LZXlJc3N1ZXMoZmFsc2UpO1xuICAgICAgICBzZXRPcGVuX25lc3RlZF9Wb2ljZShmYWxzZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrX0tleUlzc3VlcyA9ICgpID0+IHtcbiAgICAgICAgc2V0T3Blbl9uZXN0ZWRfS2V5SXNzdWVzKCFvcGVuX0tleUlzc3Vlcyk7XG4gICAgICAgIHNldE9wZW5fbmVzdGVkX09yZyhmYWxzZSk7XG4gICAgICAgIHNldE9wZW5fbmVzdGVkX1ZvaWNlKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tfVm9pY2UgPSAoKSA9PiB7XG4gICAgICAgIHNldE9wZW5fbmVzdGVkX1ZvaWNlKCFvcGVuX1ZvaWNlKTtcbiAgICAgICAgc2V0T3Blbl9uZXN0ZWRfS2V5SXNzdWVzKGZhbHNlKTtcbiAgICAgICAgc2V0T3Blbl9uZXN0ZWRfT3JnKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgLy8gc3ViIG1lbnUgbGlzdCBtb2JpbGUgZW5kc1xuXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgICAgIGxlZnQ6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKGFuY2hvciwgb3BlbikgPT4gKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJyAmJiAoZXZlbnQua2V5ID09PSAnVGFiJyB8fCBldmVudC5rZXkgPT09ICdTaGlmdCcpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW2FuY2hvcl06IG9wZW4gfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxpc3QgPSAoYW5jaG9yKSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlX21lbnVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXNzX2RyYXdlci5saXN0KX0gcm9sZT1cInByZXNlbnRhdGlvblwiPlxuXG4gICAgICAgICAgICAgICAgPExpc3QgY29tcG9uZW50PVwibmF2XCIgYXJpYS1sYWJlbGxlZGJ5PVwibmVzdGVkLWxpc3Qtc3ViaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgc3ViaGVhZGVyPXs8TGlzdFN1YmhlYWRlciBjb21wb25lbnQ9XCJkaXZcIiBpZD1cIm5lc3RlZC1saXN0LXN1YmhlYWRlclwiPiZuYnNwOzwvTGlzdFN1YmhlYWRlcj59XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc19uZXN0ZWRfbGlzdC5yb290fSA+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9IG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhvbWVJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2B9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiSG9tZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrX0tleUlzc3Vlc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb25ldGl6YXRpb25Pbkljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2Ava2V5LWlzc3Vlc2B9IGhyZWY9XCIva2V5LWlzc3Vlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIktleSBJc3N1ZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiS2V5IElzc3Vlc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b3Blbl9LZXlJc3N1ZXMgPyA8RXhwYW5kTGVzcyAvPiA6IDxFeHBhbmRNb3JlIC8+fSAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICB7LyogPENvbGxhcHNlIGluPXtvcGVuX0tleUlzc3Vlc30gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0IGNsYXNzTmFtZT1cInN1Yl9tZW51X2l0ZW1fbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzX25lc3RlZF9saXN0Lm5lc3RlZH0gb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2tleS1pc3N1ZXMvZWNvbm9teWB9IGhyZWY9XCIva2V5LWlzc3Vlcy9lY29ub215XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJFY29ub215XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc19uZXN0ZWRfbGlzdC5uZXN0ZWR9IG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9rZXktaXNzdWVzL2ZvcmVpZ24tcG9saWN5YH0gaHJlZj1cIi9rZXktaXNzdWVzL2ZvcmVpZ24tcG9saWN5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJGb3JlaWduIFBvbGljeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja19Pcmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5ib3hJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIk9yZ2FuaXNhdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b3Blbl9PcmcgPyA8RXhwYW5kTGVzcyAvPiA6IDxFeHBhbmRNb3JlIC8+fVxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17b3Blbl9Pcmd9IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdCBjbGFzc05hbWU9XCJzdWJfbWVudV9pdGVtX21vYmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QgY29tcG9uZW50PVwiZGl2XCIgZGlzYWJsZVBhZGRpbmc+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc19uZXN0ZWRfbGlzdC5uZXN0ZWR9IG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9vdXItdmFsdWVzYH0gaHJlZj1cIi9vdXItdmFsdWVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJPdXIgVmFsdWVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc19uZXN0ZWRfbGlzdC5uZXN0ZWR9IG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9vdXItaW5zcGlyYXRpb25gfSBocmVmPVwiL291ci1pbnNwaXJhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiT3VyIEluc3BpcmF0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc19uZXN0ZWRfbGlzdC5uZXN0ZWR9IG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9pbmMtY29uc3RpdHV0aW9uYH0gaHJlZj1cIi9pbmMtY29uc3RpdHV0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJJbmMgQ29uc3RpdHV0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc19uZXN0ZWRfbGlzdC5uZXN0ZWR9IG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9vdXItYWNoaWV2ZW1lbnRzYH0gaHJlZj1cIi9vdXItYWNoaWV2ZW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJPdXIgQWNoaWV2ZW1lbnRzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc19uZXN0ZWRfbGlzdC5uZXN0ZWR9IG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9vdXItcG9saWNpZXNgfSBocmVmPVwiL291ci1wb2xpY2llc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiT3VyIFBvbGljaWVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc19uZXN0ZWRfbGlzdC5uZXN0ZWR9IG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC91cGFgfSBocmVmPVwiL3VwYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiVVBBXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc19uZXN0ZWRfbGlzdC5uZXN0ZWR9IG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9sZWFkZXJzaGlwL3NtdC1zb25pYS1nYW5kaGlgfSBocmVmPVwiL2xlYWRlcnNoaXAvc210LXNvbmlhLWdhbmRoaVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiU210LiBTb25pYSBHYW5kaGlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzX25lc3RlZF9saXN0Lm5lc3RlZH0gb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2B9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQYXN0IFBhcnR5IFByZXNpZGVudHNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzX25lc3RlZF9saXN0Lm5lc3RlZH0gb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2luYy1zZXNzaW9uc2B9IGhyZWY9XCIvaW5jLXNlc3Npb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJJTkMgU2Vzc2lvbnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9IG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENlbnRlckZvY3VzU3Ryb25nSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9pbi1mb2N1c2B9IGhyZWY9XCIvaW4tZm9jdXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJJbiBGb2N1c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrX1ZvaWNlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXJJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlZvaWNlIG9mIHRoZSBOYXRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge29wZW5fVm9pY2UgPyA8RXhwYW5kTGVzcyAvPiA6IDxFeHBhbmRNb3JlIC8+fVxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17b3Blbl9Wb2ljZX0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0IGNsYXNzTmFtZT1cInN1Yl9tZW51X2l0ZW1fbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzX25lc3RlZF9saXN0Lm5lc3RlZH0gb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2B9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJDb25ncmVzcyBTYW5kZXNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc19uZXN0ZWRfbGlzdC5uZXN0ZWR9IG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9gfSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQSBCaWxsaW9uICYgT25lIFZvaWNlc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXNfbmVzdGVkX2xpc3QubmVzdGVkfSBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9IG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYH0gaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkZhY3QgQ2hlY2tzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc19uZXN0ZWRfbGlzdC5uZXN0ZWR9IG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9gfSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiSW5kaWEgQXQgNzBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9IG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoZWF0ZXJzSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9gfSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIk1lZGlhXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXYkluY2FuZGVzY2VudEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYH0gaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJKb2luIHRoZSBNb3ZlbWVudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8L0xpc3Q+XG5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIC8vIFdlYiBTdWIgTWVudSBTdGFydFxuXG4gICAgY29uc3QgW29wZW5fa2V5aXNzdWUsIHNldE9wZW5fa2V5aXNzdWVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtvcGVuX09yZ2FuaXNhdGlvbiwgc2V0T3Blbl9PcmdhbmlzYXRpb25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtvcGVuX3ZvaWNlb2ZuYXRpb24sIHNldE9wZW5fdm9pY2VvZm5hdGlvbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBhbmNob3JSZWZfa2V5aXNzdWUgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgY29uc3QgYW5jaG9yUmVmX09yZ2FuaXNhdGlvbiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBjb25zdCBhbmNob3JSZWZfdm9pY2VvZm5hdGlvbiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZV9rZXlpc3N1ZSA9ICgpID0+IHtcbiAgICAgICAgc2V0T3Blbl9rZXlpc3N1ZSgocHJldk9wZW4pID0+ICFwcmV2T3Blbik7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZV9PcmdhbmlzYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIHNldE9wZW5fT3JnYW5pc2F0aW9uKChwcmV2T3BlbikgPT4gIXByZXZPcGVuKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlX3ZvaWNlb2ZuYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIHNldE9wZW5fdm9pY2VvZm5hdGlvbigocHJldk9wZW4pID0+ICFwcmV2T3Blbik7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNsb3NlX2tleWlzc3VlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChhbmNob3JSZWZfa2V5aXNzdWUuY3VycmVudCAmJiBhbmNob3JSZWZfa2V5aXNzdWUuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0T3Blbl9rZXlpc3N1ZShmYWxzZSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVDbG9zZV9PcmdhbmlzYXRpb24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGFuY2hvclJlZl9PcmdhbmlzYXRpb24uY3VycmVudCAmJiBhbmNob3JSZWZfT3JnYW5pc2F0aW9uLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldE9wZW5fT3JnYW5pc2F0aW9uKGZhbHNlKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUNsb3NlX3ZvaWNlb2ZuYXRpb24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGFuY2hvclJlZl92b2ljZW9mbmF0aW9uLmN1cnJlbnQgJiYgYW5jaG9yUmVmX3ZvaWNlb2ZuYXRpb24uY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0T3Blbl92b2ljZW9mbmF0aW9uKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlTGlzdEtleURvd25fS2V5SXNzdWUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ1RhYicpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXRPcGVuX2tleWlzc3VlKGZhbHNlKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTGlzdEtleURvd25fT3JnYW5pc2F0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdUYWInKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0T3Blbl9PcmdhbmlzYXRpb24oZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTGlzdEtleURvd25fdm9pY2VvZm5hdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnVGFiJykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldE9wZW5fdm9pY2VvZm5hdGlvbihmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXZWIgU3ViIE1lbnUgRW5kc1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGxvYWRDU1MoXG4gICAgICAgICAgICAnaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyxcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb250LWF3ZXNvbWUtY3NzJyksXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9vdXRlcl9tYWluIGhlYWRlcl93ZWJcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX2JnX2JsdWVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9iZ193aGl0ZVwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfb3V0ZXJfbGVmdFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2xvZ28uanBnXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfb3V0ZXJfcmlnaHRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfb3V0ZXJfcmlnaHRfdG9wXCI+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsX21lZGlhX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0luZGlhbk5hdGlvbmFsQ29uZ3Jlc3NcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhIGZhLWZhY2Vib29rXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9JTkNJbmRpYVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmEgZmEtdHdpdHRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3VzZXIvaW5kaWFjb25ncmVzc1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmEgZmEteW91dHViZS1wbGF5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9pbmNpbmRpYS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhIGZhLWluc3RhZ3JhbVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaW4ubGlua2VkaW4uY29tL2NvbXBhbnkvaW5kaWFuLW5hdGlvbmFsLWNvbmdyZXNzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYSBmYS1saW5rZWRpblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsX21lZGlhX3JpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3aGl0ZVwiPntzdWJzY3JpYmV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndoaXRlXCI+e21hbmlmZXN0b308L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfb3V0ZXJfcmlnaHRfYm90dG9tXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUxpc3QgY2xhc3NOYW1lPVwiaGVhZGVyX25hdl9pdGVtXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYH0gaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57bmF2X2hvbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TWVudUl0ZW0gcmVmPXthbmNob3JSZWZfa2V5aXNzdWV9IGFyaWEtY29udHJvbHM9e29wZW5fa2V5aXNzdWUgPyAnbWVudS1saXN0LWdyb3cnIDogdW5kZWZpbmVkfSBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZV9rZXlpc3N1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT4gS2V5IElzc3VlcyA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2tleS1pc3N1ZXNgfSBocmVmPVwiL2tleS1pc3N1ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57bmF2X2tleV9pc3N1ZXN9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSByZWY9e2FuY2hvclJlZl9PcmdhbmlzYXRpb259IGFyaWEtY29udHJvbHM9e29wZW5fT3JnYW5pc2F0aW9uID8gJ21lbnUtbGlzdC1ncm93MScgOiB1bmRlZmluZWR9IGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgb25DbGljaz17aGFuZGxlVG9nZ2xlX09yZ2FuaXNhdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57bmF2X09yZ2FuaXNhdGlvbn08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvaW4tZm9jdXNgfSBocmVmPVwiL2luLWZvY3VzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+SW4gRm9jdXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHJlZj17YW5jaG9yUmVmX3ZvaWNlb2ZuYXRpb259IGFyaWEtY29udHJvbHM9e29wZW5fdm9pY2VvZm5hdGlvbiA/ICdtZW51LWxpc3QtZ3JvdzEnIDogdW5kZWZpbmVkfSBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZV92b2ljZW9mbmF0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlZvaWNlIG9mIHRoZSBOYXRpb248L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9gfSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPk1lZGlhPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2B9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+Sm9pbiB0aGUgTW92ZW1lbnQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVMaXN0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcHBlciBvcGVuPXtvcGVuX2tleWlzc3VlfSBhbmNob3JFbD17YW5jaG9yUmVmX2tleWlzc3VlLmN1cnJlbnR9IHJvbGU9e3VuZGVmaW5lZH0gdHJhbnNpdGlvbiBkaXNhYmxlUG9ydGFsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgVHJhbnNpdGlvblByb3BzLCBwbGFjZW1lbnQgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyb3cgey4uLlRyYW5zaXRpb25Qcm9wc30gc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiBwbGFjZW1lbnQgPT09ICdib3R0b20nID8gJ2NlbnRlciB0b3AnIDogJ2NlbnRlciBib3R0b20nIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbGlja0F3YXlMaXN0ZW5lciBvbkNsaWNrQXdheT17aGFuZGxlQ2xvc2Vfa2V5aXNzdWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVMaXN0IGF1dG9Gb2N1c0l0ZW09e29wZW5fa2V5aXNzdWV9IGlkPVwibWVudS1saXN0LWdyb3dcIiBvbktleURvd249e2hhbmRsZUxpc3RLZXlEb3duX0tleUlzc3VlfSBjbGFzc05hbWU9XCJzdWJfbWVudV9pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlX2tleWlzc3VlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2Ava2V5LWlzc3Vlcy9lY29ub215YH0gaHJlZj1cIi9rZXktaXNzdWVzL2Vjb25vbXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkVjb25vbXk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZV9rZXlpc3N1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2tleS1pc3N1ZXMvZm9yZWlnbi1wb2xpY3lgfSBocmVmPVwiL2tleS1pc3N1ZXMvZm9yZWlnbi1wb2xpY3lcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkZvcmVpZ24gUG9saWN5PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51TGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DbGlja0F3YXlMaXN0ZW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Hcm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wcGVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcHBlciBvcGVuPXtvcGVuX09yZ2FuaXNhdGlvbn0gYW5jaG9yRWw9e2FuY2hvclJlZl9PcmdhbmlzYXRpb24uY3VycmVudH0gcm9sZT17dW5kZWZpbmVkfSB0cmFuc2l0aW9uIGRpc2FibGVQb3J0YWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBUcmFuc2l0aW9uUHJvcHMsIHBsYWNlbWVudCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3Jvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5UcmFuc2l0aW9uUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiBwbGFjZW1lbnQgPT09ICdib3R0b20nID8gJ2NlbnRlciB0b3AnIDogJ2NlbnRlciBib3R0b20nIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xpY2tBd2F5TGlzdGVuZXIgb25DbGlja0F3YXk9e2hhbmRsZUNsb3NlX09yZ2FuaXNhdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUxpc3QgYXV0b0ZvY3VzSXRlbT17b3Blbl9PcmdhbmlzYXRpb259IGlkPVwibWVudS1saXN0LWdyb3cxXCIgb25LZXlEb3duPXtoYW5kbGVMaXN0S2V5RG93bl9PcmdhbmlzYXRpb259IGNsYXNzTmFtZT1cInN1Yl9tZW51X2l0ZW1cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZV9PcmdhbmlzYXRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9vdXItdmFsdWVzYH0gaHJlZj1cIi9vdXItdmFsdWVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57bmF2X091clZhbHVlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZV9PcmdhbmlzYXRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9vdXItaW5zcGlyYXRpb25gfSBocmVmPVwiL291ci1pbnNwaXJhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+T3VyIEluc3BpcmF0aW9uPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2VfT3JnYW5pc2F0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvaW5jLWNvbnN0aXR1dGlvbmB9IGhyZWY9XCIvaW5jLWNvbnN0aXR1dGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+SW5jIENvbnN0aXR1dGlvbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlX09yZ2FuaXNhdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL291ci1hY2hpZXZlbWVudHNgfSBocmVmPVwiL291ci1hY2hpZXZlbWVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPk91ciBBY2hpZXZlbWVudHM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2VfT3JnYW5pc2F0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2Avb3VyLXBvbGljaWVzYH0gaHJlZj1cIi9vdXItcG9saWNpZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPk91ciBQb2xpY2llczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2VfT3JnYW5pc2F0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvdXBhYH0gaHJlZj1cIi91cGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlVQQTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZV9PcmdhbmlzYXRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9sZWFkZXJzaGlwL3NtdC1zb25pYS1nYW5kaGlgfSBocmVmPVwiL2xlYWRlcnNoaXAvc210LXNvbmlhLWdhbmRoaVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+U210LiBTb25pYSBHYW5kaGk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlX09yZ2FuaXNhdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2B9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5QYXN0IFBhcnR5IFByZXNpZGVudHM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlX09yZ2FuaXNhdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2luYy1zZXNzaW9uc2B9IGhyZWY9XCIvaW5jLXNlc3Npb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5JTkMgU2Vzc2lvbnM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlX09yZ2FuaXNhdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2FpY2Mtb2ZmaWNlLWJlYXJlcnNgfSBocmVmPVwiL2FpY2Mtb2ZmaWNlLWJlYXJlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkFJQ0MgT2ZmaWNlIEJlYXJlcnM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPiAqL31cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51TGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DbGlja0F3YXlMaXN0ZW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Hcm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wcGVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcHBlciBvcGVuPXtvcGVuX3ZvaWNlb2ZuYXRpb259IGFuY2hvckVsPXthbmNob3JSZWZfdm9pY2VvZm5hdGlvbi5jdXJyZW50fSByb2xlPXt1bmRlZmluZWR9IHRyYW5zaXRpb24gZGlzYWJsZVBvcnRhbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IFRyYW5zaXRpb25Qcm9wcywgcGxhY2VtZW50IH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcm93IHsuLi5UcmFuc2l0aW9uUHJvcHN9IHN0eWxlPXt7IHRyYW5zZm9ybU9yaWdpbjogcGxhY2VtZW50ID09PSAnYm90dG9tJyA/ICdjZW50ZXIgdG9wJyA6ICdjZW50ZXIgYm90dG9tJyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xpY2tBd2F5TGlzdGVuZXIgb25DbGlja0F3YXk9e2hhbmRsZUNsb3NlX3ZvaWNlb2ZuYXRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVMaXN0IGF1dG9Gb2N1c0l0ZW09e29wZW5fdm9pY2VvZm5hdGlvbn0gaWQ9XCJtZW51LWxpc3QtZ3Jvd1wiIG9uS2V5RG93bj17aGFuZGxlTGlzdEtleURvd25fdm9pY2VvZm5hdGlvbn0gY2xhc3NOYW1lPVwic3ViX21lbnVfaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZV92b2ljZW9mbmF0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYH0gaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkNvbmdyZXNzIFNhbmRlc2g8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlX3ZvaWNlb2ZuYXRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9gfSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+QSBCaWxsaW9uICYgT25lIFZvaWNlczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2Vfdm9pY2VvZm5hdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2B9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5GYWN0IENoZWNrczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2Vfdm9pY2VvZm5hdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2B9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5JbmRpYSBBdCA3MDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51TGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DbGlja0F3YXlMaXN0ZW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Hcm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wcGVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9tb2JpbGVcIj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHtbJ2xlZnQnXS5tYXAoKGFuY2hvcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17YW5jaG9yfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhd2VyIGFuY2hvcj17YW5jaG9yfSBvcGVuPXtzdGF0ZVthbmNob3JdfSBvbkNsb3NlPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdChhbmNob3IpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhd2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogY2xhc3NOYW1lPXtjbGFzc2VzX21vYmlsZV9tZW51LnJvb3R9ICovfVxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNsYXNzTmFtZT17Y2xhc3Nlc19tb2JpbGVfbWVudS5tZW51QnV0dG9ufSBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gb25DbGljaz17dG9nZ2xlRHJhd2VyKCdsZWZ0JywgdHJ1ZSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51X2ZsZXhfMSBtb2JpbGVfbG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2xvZ28uanBnXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICAgICAgICAgICAgICA8L0FwcEJhcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=