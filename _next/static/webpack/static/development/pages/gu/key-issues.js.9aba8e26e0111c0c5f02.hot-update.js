webpackHotUpdate("static\\development\\pages\\gu\\key-issues.js",{

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
  var nav_OurValue = t('common:OurValue');
  var nav_Infocus = t('common:Infocus');
  var nav_VoiceoftheNation = t('common:VoiceoftheNation');
  var nav_Media = t('common:Media');
  var nav_JointheMovement = t('common:JointheMovement');
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
        lineNumber: 149,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_19__["default"])(classess_drawer.list),
      role: "presentation",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
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
          lineNumber: 153,
          columnNumber: 32
        }
      }, "\xA0"),
      className: classes_nested_list.root,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 25
      }
    }, __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_31___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 29
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Home",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 29
      }
    }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      onClick: handleClick_KeyIssues,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 25
      }
    }, __jsx(_material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_32___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 29
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/key-issues",
      href: "/key-issues",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Key Issues",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 29
      }
    }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      onClick: handleClick_Org,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 25
      }
    }, __jsx(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_26___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 29
      }
    })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Organisation",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 25
      }
    }), open_Org ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_29___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 37
      }
    }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_30___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
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
        lineNumber: 213,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_21__["default"], {
      component: "div",
      disablePadding: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
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
        lineNumber: 216,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/our-values",
      href: "/our-values",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Our Values",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
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
        lineNumber: 225,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/our-inspiration",
      href: "/our-inspiration",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Our Inspiration",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
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
        lineNumber: 234,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/inc-constitution",
      href: "/inc-constitution",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Inc Constitution",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
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
        lineNumber: 243,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/our-achievements",
      href: "/our-achievements",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Our Achievements",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
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
        lineNumber: 252,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/our-policies",
      href: "/our-policies",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Our Policies",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
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
        lineNumber: 261,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/upa",
      href: "/upa",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "UPA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
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
        lineNumber: 270,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/leadership/smt-sonia-gandhi",
      href: "/leadership/smt-sonia-gandhi",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Smt. Sonia Gandhi",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
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
        lineNumber: 279,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Past Party Presidents",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
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
        lineNumber: 288,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/inc-sessions",
      href: "/inc-sessions",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "INC Sessions",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 37
      }
    }))))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 25
      }
    }, __jsx(_material_ui_icons_CenterFocusStrong__WEBPACK_IMPORTED_MODULE_33___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 29
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/in-focus",
      href: "/in-focus",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "In Focus",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 29
      }
    }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      onClick: handleClick_Voice,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 25
      }
    }, __jsx(_material_ui_icons_Speaker__WEBPACK_IMPORTED_MODULE_35___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 29
      }
    })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Voice of the Nation",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 25
      }
    }), open_Voice ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_29___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 39
      }
    }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_30___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
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
        lineNumber: 321,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_21__["default"], {
      component: "div",
      disablePadding: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
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
        lineNumber: 324,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Congress Sandesh",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
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
        lineNumber: 333,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "A Billion & One Voices",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
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
        lineNumber: 342,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Fact Checks",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
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
        lineNumber: 351,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "India At 70",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 37
      }
    }))))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 25
      }
    }, __jsx(_material_ui_icons_Theaters__WEBPACK_IMPORTED_MODULE_36___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 29
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Media",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 29
      }
    }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 25
      }
    }, __jsx(_material_ui_icons_WbIncandescent__WEBPACK_IMPORTED_MODULE_37___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 29
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Join the Movement",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384,
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
      lineNumber: 474,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "header_outer_main header_web",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "header_bg_blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "header_bg_white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
    maxWidth: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "header_outer_left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "logo_header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../static/images/logo.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 33
    }
  })))), __jsx("div", {
    className: "header_outer_right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "header_outer_right_top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "social_media_header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "https://www.facebook.com/IndianNationalCongress",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "fa fa-facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 37
    }
  })), __jsx("a", {
    href: "https://twitter.com/INCIndia",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "fa fa-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 37
    }
  })), __jsx("a", {
    href: "https://www.youtube.com/user/indiacongress",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "fa fa-youtube-play",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 37
    }
  })), __jsx("a", {
    href: "https://www.instagram.com/incindia/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "fa fa-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 37
    }
  })), __jsx("a", {
    href: "https://in.linkedin.com/company/indian-national-congress",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "fa fa-linkedin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 37
    }
  }))), __jsx("div", {
    className: "social_media_right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 29
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 33
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 37
    }
  }, __jsx("a", {
    className: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 41
    }
  }, subscribe)), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 37
    }
  }, __jsx("a", {
    className: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 41
    }
  }, manifesto))))), __jsx("div", {
    className: "header_outer_right_bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "header_nav_item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 33
    }
  }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    as: "/",
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 37
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 41
    }
  }, nav_home))), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 33
    }
  }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    as: "/key-issues",
    href: "/key-issues",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 37
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
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
      lineNumber: 549,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 37
    }
  }, nav_Organisation)), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 33
    }
  }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    as: "/in-focus",
    href: "/in-focus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 37
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 41
    }
  }, nav_Infocus))), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: anchorRef_voiceofnation,
    "aria-controls": open_voiceofnation ? 'menu-list-grow1' : undefined,
    "aria-haspopup": "true",
    onClick: handleToggle_voiceofnation,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560,
      columnNumber: 37
    }
  }, nav_VoiceoftheNation)), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, nav_Media))), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 33
    }
  }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    as: "/",
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 37
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 41
    }
  }, nav_JointheMovement)))), __jsx(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: open_keyissue,
    anchorEl: anchorRef_keyissue.current,
    role: undefined,
    transition: true,
    disablePortal: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
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
        lineNumber: 580,
        columnNumber: 37
      }
    }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 581,
        columnNumber: 41
      }
    }, __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClickAway: handleClose_keyissue,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 582,
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
        lineNumber: 583,
        columnNumber: 49
      }
    }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: handleClose_keyissue,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 584,
        columnNumber: 53
      }
    }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/key-issues/economy",
      href: "/key-issues/economy",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 585,
        columnNumber: 57
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 586,
        columnNumber: 61
      }
    }, "Economy"))), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: handleClose_keyissue,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 589,
        columnNumber: 53
      }
    }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/key-issues/foreign-policy",
      href: "/key-issues/foreign-policy",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 590,
        columnNumber: 57
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 591,
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
      lineNumber: 602,
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
        lineNumber: 604,
        columnNumber: 37
      }
    }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 608,
        columnNumber: 41
      }
    }, __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClickAway: handleClose_Organisation,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 609,
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
        lineNumber: 610,
        columnNumber: 49
      }
    }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: handleClose_Organisation,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 612,
        columnNumber: 53
      }
    }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/our-values",
      href: "/our-values",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 613,
        columnNumber: 57
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 614,
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
      lineNumber: 681,
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
        lineNumber: 683,
        columnNumber: 37
      }
    }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 684,
        columnNumber: 41
      }
    }, __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClickAway: handleClose_voiceofnation,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 685,
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
        lineNumber: 686,
        columnNumber: 49
      }
    }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
        columnNumber: 33
      }
    }, nav_CongressSandesh)))))));
  }))), __jsx("div", {
    className: "clear",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "header_mobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 728,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 730,
      columnNumber: 17
    }
  }, ['left'].map(function (anchor) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
      key: anchor,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 732,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_20__["default"], {
      anchor: anchor,
      open: state[anchor],
      onClose: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 733,
        columnNumber: 29
      }
    }, list(anchor)));
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 741,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_17__["default"], {
    position: "static",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 743,
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
      lineNumber: 744,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_16___default.a, {
    onClick: toggleDrawer('left', true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 745,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "menu_flex_1 mobile_logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 748,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 749,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "../../static/images/logo.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 750,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsInBhcGVyIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwidXNlU3R5bGVzX21vYmlsZV9tZW51IiwiZmxleEdyb3ciLCJtZW51QnV0dG9uIiwidGl0bGUiLCJ1c2VTdHlsZXNfZHJhd2VyIiwibGlzdCIsIndpZHRoIiwibWF4V2lkdGgiLCJmdWxsTGlzdCIsInVzZVN0eWxlc19uZXN0ZWRfbGlzdCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwibmVzdGVkIiwicGFkZGluZ0xlZnQiLCJIZWFkZXIiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJsYW5nIiwic3Vic2NyaWJlIiwibWFuaWZlc3RvIiwibmF2X2hvbWUiLCJuYXZfa2V5X2lzc3VlcyIsIm5hdl9PcmdhbmlzYXRpb24iLCJuYXZfT3VyVmFsdWUiLCJuYXZfSW5mb2N1cyIsIm5hdl9Wb2ljZW9mdGhlTmF0aW9uIiwibmF2X01lZGlhIiwibmF2X0pvaW50aGVNb3ZlbWVudCIsImNsYXNzZXNfbW9iaWxlX21lbnUiLCJjbGFzc2VzIiwiY2xhc3Nlc3NfZHJhd2VyIiwiY2xhc3Nlc19uZXN0ZWRfbGlzdCIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuX09yZyIsInNldE9wZW5fbmVzdGVkX09yZyIsIm9wZW5fS2V5SXNzdWVzIiwic2V0T3Blbl9uZXN0ZWRfS2V5SXNzdWVzIiwib3Blbl9Wb2ljZSIsInNldE9wZW5fbmVzdGVkX1ZvaWNlIiwiaGFuZGxlQ2xpY2tfT3JnIiwiaGFuZGxlQ2xpY2tfS2V5SXNzdWVzIiwiaGFuZGxlQ2xpY2tfVm9pY2UiLCJsZWZ0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInRvZ2dsZURyYXdlciIsImFuY2hvciIsIm9wZW4iLCJldmVudCIsInR5cGUiLCJrZXkiLCJjbHN4Iiwib3Blbl9rZXlpc3N1ZSIsInNldE9wZW5fa2V5aXNzdWUiLCJvcGVuX09yZ2FuaXNhdGlvbiIsInNldE9wZW5fT3JnYW5pc2F0aW9uIiwib3Blbl92b2ljZW9mbmF0aW9uIiwic2V0T3Blbl92b2ljZW9mbmF0aW9uIiwiYW5jaG9yUmVmX2tleWlzc3VlIiwidXNlUmVmIiwiYW5jaG9yUmVmX09yZ2FuaXNhdGlvbiIsImFuY2hvclJlZl92b2ljZW9mbmF0aW9uIiwiaGFuZGxlVG9nZ2xlX2tleWlzc3VlIiwicHJldk9wZW4iLCJoYW5kbGVUb2dnbGVfT3JnYW5pc2F0aW9uIiwiaGFuZGxlVG9nZ2xlX3ZvaWNlb2ZuYXRpb24iLCJoYW5kbGVDbG9zZV9rZXlpc3N1ZSIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImhhbmRsZUNsb3NlX09yZ2FuaXNhdGlvbiIsImhhbmRsZUNsb3NlX3ZvaWNlb2ZuYXRpb24iLCJoYW5kbGVMaXN0S2V5RG93bl9LZXlJc3N1ZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlTGlzdEtleURvd25fT3JnYW5pc2F0aW9uIiwiaGFuZGxlTGlzdEtleURvd25fdm9pY2VvZm5hdGlvbiIsInVzZUVmZmVjdCIsIm5vZGUiLCJsb2FkQ1NTIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidW5kZWZpbmVkIiwiVHJhbnNpdGlvblByb3BzIiwicGxhY2VtZW50IiwidHJhbnNmb3JtT3JpZ2luIiwibmF2X0NvbmdyZXNzU2FuZGVzaCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QWdTSDs7R0F2cUJ1QmhDLE07VUFFQUMscUUsRUFzQlFoQixxQixFQUNaUixTLEVBQ1FZLGdCLEVBQ0lLLHFCOzs7S0EzQlJNLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGd1XFxrZXktaXNzdWVzLmpzLjlhYmE4ZTI2ZTAxMTFjMGM1ZjAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENsaWNrQXdheUxpc3RlbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyJztcbmltcG9ydCBHcm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyb3cnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgTWVudUxpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUxpc3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgUG9wcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BvcHBlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0LXRyYW5zbGF0ZS9MaW5rJ1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbic7XG5pbXBvcnQgeyBsb2FkQ1NTIH0gZnJvbSAnZmctbG9hZGNzcyc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IERyYXdlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXInO1xuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvbic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgSW5ib3hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3ZlVG9JbmJveCc7XG5pbXBvcnQgTGlzdFN1YmhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyJztcbmltcG9ydCBDb2xsYXBzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZSc7XG5pbXBvcnQgRXhwYW5kTGVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTGVzcyc7XG5pbXBvcnQgRXhwYW5kTW9yZSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZSc7XG5pbXBvcnQgSG9tZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hvbWUnO1xuaW1wb3J0IE1vbmV0aXphdGlvbk9uSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9uZXRpemF0aW9uT24nO1xuaW1wb3J0IENlbnRlckZvY3VzU3Ryb25nSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2VudGVyRm9jdXNTdHJvbmcnO1xuaW1wb3J0IEFycm93UmlnaHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd1JpZ2h0JztcbmltcG9ydCBTcGVha2VySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3BlYWtlcic7XG5pbXBvcnQgVGhlYXRlcnNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UaGVhdGVycyc7XG5pbXBvcnQgV2JJbmNhbmRlc2NlbnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9XYkluY2FuZGVzY2VudCc7XG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZScsXG4gICAgfSxcbiAgICBwYXBlcjoge1xuICAgICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgICB9LFxufSkpO1xuXG5cbmNvbnN0IHVzZVN0eWxlc19tb2JpbGVfbWVudSA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgfSxcbiAgICBtZW51QnV0dG9uOiB7XG4gICAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgfSxcbn0pKTtcblxuY29uc3QgdXNlU3R5bGVzX2RyYXdlciA9IG1ha2VTdHlsZXMoe1xuICAgIGxpc3Q6IHtcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgICAgbWF4V2lkdGg6IDEwMDAsXG4gICAgfSxcbiAgICBmdWxsTGlzdDoge1xuICAgICAgICB3aWR0aDogJ2F1dG8nLFxuICAgIH0sXG59KTtcblxuY29uc3QgdXNlU3R5bGVzX25lc3RlZF9saXN0ID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgICBtYXhXaWR0aDogMTAwMCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgfSxcbiAgICBuZXN0ZWQ6IHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuXG4gICAgY29uc3QgeyB0LCBsYW5nIH0gPSB1c2VUcmFuc2xhdGlvbigpXG5cbiAgICBjb25zdCBzdWJzY3JpYmUgPSB0KCdjb21tb246c3Vic2NyaWJlJyk7XG4gICAgY29uc3QgbWFuaWZlc3RvID0gdCgnY29tbW9uOm1hbmlmZXN0bycpO1xuXG4gICAgY29uc3QgbmF2X2hvbWUgPSB0KCdjb21tb246bmF2X2hvbWUnKTtcbiAgICBjb25zdCBuYXZfa2V5X2lzc3VlcyA9IHQoJ2NvbW1vbjprZXlfaXNzdWVzJyk7XG5cbiAgICBjb25zdCBuYXZfT3JnYW5pc2F0aW9uID0gdCgnY29tbW9uOk9yZ2FuaXNhdGlvbicpO1xuXG4gICAgY29uc3QgbmF2X091clZhbHVlID0gdCgnY29tbW9uOk91clZhbHVlJyk7XG5cbiAgICBjb25zdCBuYXZfSW5mb2N1cyA9IHQoJ2NvbW1vbjpJbmZvY3VzJyk7XG4gICAgY29uc3QgbmF2X1ZvaWNlb2Z0aGVOYXRpb24gPSB0KCdjb21tb246Vm9pY2VvZnRoZU5hdGlvbicpO1xuICAgIGNvbnN0IG5hdl9NZWRpYSA9IHQoJ2NvbW1vbjpNZWRpYScpO1xuICAgIGNvbnN0IG5hdl9Kb2ludGhlTW92ZW1lbnQgPSB0KCdjb21tb246Sm9pbnRoZU1vdmVtZW50Jyk7XG5cblxuXG5cblxuXG4gICAgY29uc3QgY2xhc3Nlc19tb2JpbGVfbWVudSA9IHVzZVN0eWxlc19tb2JpbGVfbWVudSgpO1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgICBjb25zdCBjbGFzc2Vzc19kcmF3ZXIgPSB1c2VTdHlsZXNfZHJhd2VyKCk7XG4gICAgY29uc3QgY2xhc3Nlc19uZXN0ZWRfbGlzdCA9IHVzZVN0eWxlc19uZXN0ZWRfbGlzdCgpO1xuXG4gICAgLy8gc3ViIG1lbnUgbGlzdCBtb2JpbGUgc3RhcnRcblxuICAgIGNvbnN0IFtvcGVuX09yZywgc2V0T3Blbl9uZXN0ZWRfT3JnXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbb3Blbl9LZXlJc3N1ZXMsIHNldE9wZW5fbmVzdGVkX0tleUlzc3Vlc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW29wZW5fVm9pY2UsIHNldE9wZW5fbmVzdGVkX1ZvaWNlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrX09yZyA9ICgpID0+IHtcbiAgICAgICAgc2V0T3Blbl9uZXN0ZWRfT3JnKCFvcGVuX09yZyk7XG4gICAgICAgIHNldE9wZW5fbmVzdGVkX0tleUlzc3VlcyhmYWxzZSk7XG4gICAgICAgIHNldE9wZW5fbmVzdGVkX1ZvaWNlKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tfS2V5SXNzdWVzID0gKCkgPT4ge1xuICAgICAgICBzZXRPcGVuX25lc3RlZF9LZXlJc3N1ZXMoIW9wZW5fS2V5SXNzdWVzKTtcbiAgICAgICAgc2V0T3Blbl9uZXN0ZWRfT3JnKGZhbHNlKTtcbiAgICAgICAgc2V0T3Blbl9uZXN0ZWRfVm9pY2UoZmFsc2UpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDbGlja19Wb2ljZSA9ICgpID0+IHtcbiAgICAgICAgc2V0T3Blbl9uZXN0ZWRfVm9pY2UoIW9wZW5fVm9pY2UpO1xuICAgICAgICBzZXRPcGVuX25lc3RlZF9LZXlJc3N1ZXMoZmFsc2UpO1xuICAgICAgICBzZXRPcGVuX25lc3RlZF9PcmcoZmFsc2UpO1xuICAgIH07XG5cbiAgICAvLyBzdWIgbWVudSBsaXN0IG1vYmlsZSBlbmRzXG5cbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICAgICAgbGVmdDogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoYW5jaG9yLCBvcGVuKSA9PiAoZXZlbnQpID0+IHtcblxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nICYmIChldmVudC5rZXkgPT09ICdUYWInIHx8IGV2ZW50LmtleSA9PT0gJ1NoaWZ0JykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbYW5jaG9yXTogb3BlbiB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgbGlzdCA9IChhbmNob3IpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGVfbWVudVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlc3NfZHJhd2VyLmxpc3QpfSByb2xlPVwicHJlc2VudGF0aW9uXCI+XG5cbiAgICAgICAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJuYXZcIiBhcmlhLWxhYmVsbGVkYnk9XCJuZXN0ZWQtbGlzdC1zdWJoZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICBzdWJoZWFkZXI9ezxMaXN0U3ViaGVhZGVyIGNvbXBvbmVudD1cImRpdlwiIGlkPVwibmVzdGVkLWxpc3Qtc3ViaGVhZGVyXCI+Jm5ic3A7PC9MaXN0U3ViaGVhZGVyPn1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzX25lc3RlZF9saXN0LnJvb3R9ID5cblxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SG9tZUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYH0gaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJIb21lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2tfS2V5SXNzdWVzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vbmV0aXphdGlvbk9uSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9rZXktaXNzdWVzYH0gaHJlZj1cIi9rZXktaXNzdWVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiS2V5IElzc3Vlc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJLZXkgSXNzdWVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcGVuX0tleUlzc3VlcyA/IDxFeHBhbmRMZXNzIC8+IDogPEV4cGFuZE1vcmUgLz59ICovfVxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8Q29sbGFwc2UgaW49e29wZW5fS2V5SXNzdWVzfSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQgY2xhc3NOYW1lPVwic3ViX21lbnVfaXRlbV9tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cImRpdlwiIGRpc2FibGVQYWRkaW5nPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXNfbmVzdGVkX2xpc3QubmVzdGVkfSBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9IG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2Ava2V5LWlzc3Vlcy9lY29ub215YH0gaHJlZj1cIi9rZXktaXNzdWVzL2Vjb25vbXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkVjb25vbXlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzX25lc3RlZF9saXN0Lm5lc3RlZH0gb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2tleS1pc3N1ZXMvZm9yZWlnbi1wb2xpY3lgfSBocmVmPVwiL2tleS1pc3N1ZXMvZm9yZWlnbi1wb2xpY3lcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkZvcmVpZ24gUG9saWN5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT4gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrX09yZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbmJveEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiT3JnYW5pc2F0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcGVuX09yZyA/IDxFeHBhbmRMZXNzIC8+IDogPEV4cGFuZE1vcmUgLz59XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGluPXtvcGVuX09yZ30gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0IGNsYXNzTmFtZT1cInN1Yl9tZW51X2l0ZW1fbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzX25lc3RlZF9saXN0Lm5lc3RlZH0gb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL291ci12YWx1ZXNgfSBocmVmPVwiL291ci12YWx1ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIk91ciBWYWx1ZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzX25lc3RlZF9saXN0Lm5lc3RlZH0gb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL291ci1pbnNwaXJhdGlvbmB9IGhyZWY9XCIvb3VyLWluc3BpcmF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJPdXIgSW5zcGlyYXRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzX25lc3RlZF9saXN0Lm5lc3RlZH0gb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2luYy1jb25zdGl0dXRpb25gfSBocmVmPVwiL2luYy1jb25zdGl0dXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkluYyBDb25zdGl0dXRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzX25lc3RlZF9saXN0Lm5lc3RlZH0gb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL291ci1hY2hpZXZlbWVudHNgfSBocmVmPVwiL291ci1hY2hpZXZlbWVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIk91ciBBY2hpZXZlbWVudHNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzX25lc3RlZF9saXN0Lm5lc3RlZH0gb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL291ci1wb2xpY2llc2B9IGhyZWY9XCIvb3VyLXBvbGljaWVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJPdXIgUG9saWNpZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzX25lc3RlZF9saXN0Lm5lc3RlZH0gb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL3VwYWB9IGhyZWY9XCIvdXBhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJVUEFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzX25lc3RlZF9saXN0Lm5lc3RlZH0gb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2xlYWRlcnNoaXAvc210LXNvbmlhLWdhbmRoaWB9IGhyZWY9XCIvbGVhZGVyc2hpcC9zbXQtc29uaWEtZ2FuZGhpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJTbXQuIFNvbmlhIEdhbmRoaVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXNfbmVzdGVkX2xpc3QubmVzdGVkfSBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9IG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYH0gaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlBhc3QgUGFydHkgUHJlc2lkZW50c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXNfbmVzdGVkX2xpc3QubmVzdGVkfSBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9IG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvaW5jLXNlc3Npb25zYH0gaHJlZj1cIi9pbmMtc2Vzc2lvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIklOQyBTZXNzaW9uc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XG5cbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VudGVyRm9jdXNTdHJvbmdJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2luLWZvY3VzYH0gaHJlZj1cIi9pbi1mb2N1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkluIEZvY3VzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2tfVm9pY2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlYWtlckljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiVm9pY2Ugb2YgdGhlIE5hdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b3Blbl9Wb2ljZSA/IDxFeHBhbmRMZXNzIC8+IDogPEV4cGFuZE1vcmUgLz59XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGluPXtvcGVuX1ZvaWNlfSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQgY2xhc3NOYW1lPVwic3ViX21lbnVfaXRlbV9tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cImRpdlwiIGRpc2FibGVQYWRkaW5nPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXNfbmVzdGVkX2xpc3QubmVzdGVkfSBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9IG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYH0gaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkNvbmdyZXNzIFNhbmRlc2hcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzX25lc3RlZF9saXN0Lm5lc3RlZH0gb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2B9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJBIEJpbGxpb24gJiBPbmUgVm9pY2VzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc19uZXN0ZWRfbGlzdC5uZXN0ZWR9IG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9gfSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRmFjdCBDaGVja3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzX25lc3RlZF9saXN0Lm5lc3RlZH0gb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2B9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJJbmRpYSBBdCA3MFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XG5cbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGhlYXRlcnNJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2B9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiTWVkaWFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9IG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdiSW5jYW5kZXNjZW50SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9gfSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkpvaW4gdGhlIE1vdmVtZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICAgIDwvTGlzdD5cblxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgLy8gV2ViIFN1YiBNZW51IFN0YXJ0XG5cbiAgICBjb25zdCBbb3Blbl9rZXlpc3N1ZSwgc2V0T3Blbl9rZXlpc3N1ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW29wZW5fT3JnYW5pc2F0aW9uLCBzZXRPcGVuX09yZ2FuaXNhdGlvbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW29wZW5fdm9pY2VvZm5hdGlvbiwgc2V0T3Blbl92b2ljZW9mbmF0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGFuY2hvclJlZl9rZXlpc3N1ZSA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBjb25zdCBhbmNob3JSZWZfT3JnYW5pc2F0aW9uID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IGFuY2hvclJlZl92b2ljZW9mbmF0aW9uID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlX2tleWlzc3VlID0gKCkgPT4ge1xuICAgICAgICBzZXRPcGVuX2tleWlzc3VlKChwcmV2T3BlbikgPT4gIXByZXZPcGVuKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlX09yZ2FuaXNhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgc2V0T3Blbl9PcmdhbmlzYXRpb24oKHByZXZPcGVuKSA9PiAhcHJldk9wZW4pO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVUb2dnbGVfdm9pY2VvZm5hdGlvbiA9ICgpID0+IHtcbiAgICAgICAgc2V0T3Blbl92b2ljZW9mbmF0aW9uKChwcmV2T3BlbikgPT4gIXByZXZPcGVuKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2xvc2Vfa2V5aXNzdWUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGFuY2hvclJlZl9rZXlpc3N1ZS5jdXJyZW50ICYmIGFuY2hvclJlZl9rZXlpc3N1ZS5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRPcGVuX2tleWlzc3VlKGZhbHNlKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUNsb3NlX09yZ2FuaXNhdGlvbiA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoYW5jaG9yUmVmX09yZ2FuaXNhdGlvbi5jdXJyZW50ICYmIGFuY2hvclJlZl9PcmdhbmlzYXRpb24uY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0T3Blbl9PcmdhbmlzYXRpb24oZmFsc2UpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlQ2xvc2Vfdm9pY2VvZm5hdGlvbiA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoYW5jaG9yUmVmX3ZvaWNlb2ZuYXRpb24uY3VycmVudCAmJiBhbmNob3JSZWZfdm9pY2VvZm5hdGlvbi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRPcGVuX3ZvaWNlb2ZuYXRpb24oZmFsc2UpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVMaXN0S2V5RG93bl9LZXlJc3N1ZShldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnVGFiJykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldE9wZW5fa2V5aXNzdWUoZmFsc2UpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVMaXN0S2V5RG93bl9PcmdhbmlzYXRpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ1RhYicpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXRPcGVuX09yZ2FuaXNhdGlvbihmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVMaXN0S2V5RG93bl92b2ljZW9mbmF0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdUYWInKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0T3Blbl92b2ljZW9mbmF0aW9uKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdlYiBTdWIgTWVudSBFbmRzXG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gbG9hZENTUyhcbiAgICAgICAgICAgICdodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnLFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZvbnQtYXdlc29tZS1jc3MnKSxcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX291dGVyX21haW4gaGVhZGVyX3dlYlwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfYmdfYmx1ZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX2JnX3doaXRlXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9vdXRlcl9sZWZ0XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbG9nby5qcGdcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9vdXRlcl9yaWdodFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9vdXRlcl9yaWdodF90b3BcIj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxfbWVkaWFfaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vSW5kaWFuTmF0aW9uYWxDb25ncmVzc1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmEgZmEtZmFjZWJvb2tcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL0lOQ0luZGlhXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYSBmYS10d2l0dGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vdXNlci9pbmRpYWNvbmdyZXNzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYSBmYS15b3V0dWJlLXBsYXlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2luY2luZGlhL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmEgZmEtaW5zdGFncmFtXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9pbi5saW5rZWRpbi5jb20vY29tcGFueS9pbmRpYW4tbmF0aW9uYWwtY29uZ3Jlc3NcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhIGZhLWxpbmtlZGluXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxfbWVkaWFfcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndoaXRlXCI+e3N1YnNjcmliZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwid2hpdGVcIj57bWFuaWZlc3RvfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9vdXRlcl9yaWdodF9ib3R0b21cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51TGlzdCBjbGFzc05hbWU9XCJoZWFkZXJfbmF2X2l0ZW1cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9gfSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntuYXZfaG9tZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxNZW51SXRlbSByZWY9e2FuY2hvclJlZl9rZXlpc3N1ZX0gYXJpYS1jb250cm9scz17b3Blbl9rZXlpc3N1ZSA/ICdtZW51LWxpc3QtZ3JvdycgOiB1bmRlZmluZWR9IGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgb25DbGljaz17aGFuZGxlVG9nZ2xlX2tleWlzc3VlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPiBLZXkgSXNzdWVzIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT4gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2Ava2V5LWlzc3Vlc2B9IGhyZWY9XCIva2V5LWlzc3Vlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntuYXZfa2V5X2lzc3Vlc308L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHJlZj17YW5jaG9yUmVmX09yZ2FuaXNhdGlvbn0gYXJpYS1jb250cm9scz17b3Blbl9PcmdhbmlzYXRpb24gPyAnbWVudS1saXN0LWdyb3cxJyA6IHVuZGVmaW5lZH0gYXJpYS1oYXNwb3B1cD1cInRydWVcIiBvbkNsaWNrPXtoYW5kbGVUb2dnbGVfT3JnYW5pc2F0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntuYXZfT3JnYW5pc2F0aW9ufTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9pbi1mb2N1c2B9IGhyZWY9XCIvaW4tZm9jdXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57bmF2X0luZm9jdXN9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSByZWY9e2FuY2hvclJlZl92b2ljZW9mbmF0aW9ufSBhcmlhLWNvbnRyb2xzPXtvcGVuX3ZvaWNlb2ZuYXRpb24gPyAnbWVudS1saXN0LWdyb3cxJyA6IHVuZGVmaW5lZH0gYXJpYS1oYXNwb3B1cD1cInRydWVcIiBvbkNsaWNrPXtoYW5kbGVUb2dnbGVfdm9pY2VvZm5hdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57bmF2X1ZvaWNlb2Z0aGVOYXRpb259PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYH0gaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57bmF2X01lZGlhfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9gfSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntuYXZfSm9pbnRoZU1vdmVtZW50fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUxpc3Q+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9wcGVyIG9wZW49e29wZW5fa2V5aXNzdWV9IGFuY2hvckVsPXthbmNob3JSZWZfa2V5aXNzdWUuY3VycmVudH0gcm9sZT17dW5kZWZpbmVkfSB0cmFuc2l0aW9uIGRpc2FibGVQb3J0YWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBUcmFuc2l0aW9uUHJvcHMsIHBsYWNlbWVudCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JvdyB7Li4uVHJhbnNpdGlvblByb3BzfSBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46IHBsYWNlbWVudCA9PT0gJ2JvdHRvbScgPyAnY2VudGVyIHRvcCcgOiAnY2VudGVyIGJvdHRvbScgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsaWNrQXdheUxpc3RlbmVyIG9uQ2xpY2tBd2F5PXtoYW5kbGVDbG9zZV9rZXlpc3N1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUxpc3QgYXV0b0ZvY3VzSXRlbT17b3Blbl9rZXlpc3N1ZX0gaWQ9XCJtZW51LWxpc3QtZ3Jvd1wiIG9uS2V5RG93bj17aGFuZGxlTGlzdEtleURvd25fS2V5SXNzdWV9IGNsYXNzTmFtZT1cInN1Yl9tZW51X2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2Vfa2V5aXNzdWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9rZXktaXNzdWVzL2Vjb25vbXlgfSBocmVmPVwiL2tleS1pc3N1ZXMvZWNvbm9teVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+RWNvbm9teTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlX2tleWlzc3VlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2Ava2V5LWlzc3Vlcy9mb3JlaWduLXBvbGljeWB9IGhyZWY9XCIva2V5LWlzc3Vlcy9mb3JlaWduLXBvbGljeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+Rm9yZWlnbiBQb2xpY3k8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVMaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NsaWNrQXdheUxpc3RlbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3BwZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9wcGVyIG9wZW49e29wZW5fT3JnYW5pc2F0aW9ufSBhbmNob3JFbD17YW5jaG9yUmVmX09yZ2FuaXNhdGlvbi5jdXJyZW50fSByb2xlPXt1bmRlZmluZWR9IHRyYW5zaXRpb24gZGlzYWJsZVBvcnRhbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IFRyYW5zaXRpb25Qcm9wcywgcGxhY2VtZW50IH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLlRyYW5zaXRpb25Qcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46IHBsYWNlbWVudCA9PT0gJ2JvdHRvbScgPyAnY2VudGVyIHRvcCcgOiAnY2VudGVyIGJvdHRvbScgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbGlja0F3YXlMaXN0ZW5lciBvbkNsaWNrQXdheT17aGFuZGxlQ2xvc2VfT3JnYW5pc2F0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51TGlzdCBhdXRvRm9jdXNJdGVtPXtvcGVuX09yZ2FuaXNhdGlvbn0gaWQ9XCJtZW51LWxpc3QtZ3JvdzFcIiBvbktleURvd249e2hhbmRsZUxpc3RLZXlEb3duX09yZ2FuaXNhdGlvbn0gY2xhc3NOYW1lPVwic3ViX21lbnVfaXRlbVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlX09yZ2FuaXNhdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL291ci12YWx1ZXNgfSBocmVmPVwiL291ci12YWx1ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntuYXZfT3VyVmFsdWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlX09yZ2FuaXNhdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL291ci1pbnNwaXJhdGlvbmB9IGhyZWY9XCIvb3VyLWluc3BpcmF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5PdXIgSW5zcGlyYXRpb248L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZV9PcmdhbmlzYXRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9pbmMtY29uc3RpdHV0aW9uYH0gaHJlZj1cIi9pbmMtY29uc3RpdHV0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5JbmMgQ29uc3RpdHV0aW9uPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2VfT3JnYW5pc2F0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2Avb3VyLWFjaGlldmVtZW50c2B9IGhyZWY9XCIvb3VyLWFjaGlldmVtZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+T3VyIEFjaGlldmVtZW50czwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZV9PcmdhbmlzYXRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9vdXItcG9saWNpZXNgfSBocmVmPVwiL291ci1wb2xpY2llc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+T3VyIFBvbGljaWVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZV9PcmdhbmlzYXRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC91cGFgfSBocmVmPVwiL3VwYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+VVBBPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlX09yZ2FuaXNhdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2xlYWRlcnNoaXAvc210LXNvbmlhLWdhbmRoaWB9IGhyZWY9XCIvbGVhZGVyc2hpcC9zbXQtc29uaWEtZ2FuZGhpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TbXQuIFNvbmlhIEdhbmRoaTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2VfT3JnYW5pc2F0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYH0gaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlBhc3QgUGFydHkgUHJlc2lkZW50czwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2VfT3JnYW5pc2F0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvaW5jLXNlc3Npb25zYH0gaHJlZj1cIi9pbmMtc2Vzc2lvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPklOQyBTZXNzaW9uczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2VfT3JnYW5pc2F0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYWljYy1vZmZpY2UtYmVhcmVyc2B9IGhyZWY9XCIvYWljYy1vZmZpY2UtYmVhcmVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+QUlDQyBPZmZpY2UgQmVhcmVyczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+ICovfVxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVMaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NsaWNrQXdheUxpc3RlbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3BwZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9wcGVyIG9wZW49e29wZW5fdm9pY2VvZm5hdGlvbn0gYW5jaG9yRWw9e2FuY2hvclJlZl92b2ljZW9mbmF0aW9uLmN1cnJlbnR9IHJvbGU9e3VuZGVmaW5lZH0gdHJhbnNpdGlvbiBkaXNhYmxlUG9ydGFsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgVHJhbnNpdGlvblByb3BzLCBwbGFjZW1lbnQgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyb3cgey4uLlRyYW5zaXRpb25Qcm9wc30gc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiBwbGFjZW1lbnQgPT09ICdib3R0b20nID8gJ2NlbnRlciB0b3AnIDogJ2NlbnRlciBib3R0b20nIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbGlja0F3YXlMaXN0ZW5lciBvbkNsaWNrQXdheT17aGFuZGxlQ2xvc2Vfdm9pY2VvZm5hdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUxpc3QgYXV0b0ZvY3VzSXRlbT17b3Blbl92b2ljZW9mbmF0aW9ufSBpZD1cIm1lbnUtbGlzdC1ncm93XCIgb25LZXlEb3duPXtoYW5kbGVMaXN0S2V5RG93bl92b2ljZW9mbmF0aW9ufSBjbGFzc05hbWU9XCJzdWJfbWVudV9pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlX3ZvaWNlb2ZuYXRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9gfSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57bmF2X0NvbmdyZXNzU2FuZGVzaH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZV92b2ljZW9mbmF0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYH0gaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkEgQmlsbGlvbiAmIE9uZSBWb2ljZXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlX3ZvaWNlb2ZuYXRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9gfSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+RmFjdCBDaGVja3M8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlX3ZvaWNlb2ZuYXRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9gfSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+SW5kaWEgQXQgNzA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPiAqL31cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVMaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NsaWNrQXdheUxpc3RlbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3BwZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX21vYmlsZVwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge1snbGVmdCddLm1hcCgoYW5jaG9yKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXthbmNob3J9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmF3ZXIgYW5jaG9yPXthbmNob3J9IG9wZW49e3N0YXRlW2FuY2hvcl19IG9uQ2xvc2U9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0KGFuY2hvcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmF3ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBjbGFzc05hbWU9e2NsYXNzZXNfbW9iaWxlX21lbnUucm9vdH0gKi99XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cInN0YXJ0XCIgY2xhc3NOYW1lPXtjbGFzc2VzX21vYmlsZV9tZW51Lm1lbnVCdXR0b259IGNvbG9yPVwiaW5oZXJpdFwiIGFyaWEtbGFiZWw9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoJ2xlZnQnLCB0cnVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfZmxleF8xIG1vYmlsZV9sb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbG9nby5qcGdcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgICAgICAgICAgICAgIDwvQXBwQmFyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==