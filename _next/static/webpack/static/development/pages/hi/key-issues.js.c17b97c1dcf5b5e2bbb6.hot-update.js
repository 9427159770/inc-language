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
  var nav_OurValue = t('common:OurValue');
  var nav_Infocus = t('common:Infocus');
  var nav_VoiceoftheNation = t('common:VoiceoftheNation');
  var nav_Media = t('common:Media');
  var nav_JointheMovement = t('common:JointheMovement');
  var nav_CongressSandesh = t('common:CongressSandesh');
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
        lineNumber: 146,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_19__["default"])(classess_drawer.list),
      role: "presentation",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
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
          lineNumber: 150,
          columnNumber: 32
        }
      }, "\xA0"),
      className: classes_nested_list.root,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 25
      }
    }, __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_31___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 29
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Home",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 29
      }
    }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      onClick: handleClick_KeyIssues,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 25
      }
    }, __jsx(_material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_32___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 29
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/key-issues",
      href: "/key-issues",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Key Issues",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 29
      }
    }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      onClick: handleClick_Org,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 25
      }
    }, __jsx(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_26___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 29
      }
    })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Organisation",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 25
      }
    }), open_Org ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_29___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 37
      }
    }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_30___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
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
        lineNumber: 210,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_21__["default"], {
      component: "div",
      disablePadding: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
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
        lineNumber: 213,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/our-values",
      href: "/our-values",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Our Values",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
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
        lineNumber: 222,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/our-inspiration",
      href: "/our-inspiration",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Our Inspiration",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
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
        lineNumber: 231,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/inc-constitution",
      href: "/inc-constitution",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Inc Constitution",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
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
        lineNumber: 240,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/our-achievements",
      href: "/our-achievements",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Our Achievements",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
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
        lineNumber: 249,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/our-policies",
      href: "/our-policies",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Our Policies",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
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
        lineNumber: 258,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/upa",
      href: "/upa",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "UPA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
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
        lineNumber: 267,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/leadership/smt-sonia-gandhi",
      href: "/leadership/smt-sonia-gandhi",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Smt. Sonia Gandhi",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
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
        lineNumber: 276,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Past Party Presidents",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
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
        lineNumber: 285,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/inc-sessions",
      href: "/inc-sessions",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "INC Sessions",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 37
      }
    }))))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 25
      }
    }, __jsx(_material_ui_icons_CenterFocusStrong__WEBPACK_IMPORTED_MODULE_33___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 29
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/in-focus",
      href: "/in-focus",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "In Focus",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 29
      }
    }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      onClick: handleClick_Voice,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 25
      }
    }, __jsx(_material_ui_icons_Speaker__WEBPACK_IMPORTED_MODULE_35___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 29
      }
    })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Voice of the Nation",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 25
      }
    }), open_Voice ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_29___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 39
      }
    }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_30___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
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
        lineNumber: 318,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_21__["default"], {
      component: "div",
      disablePadding: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
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
        lineNumber: 321,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Congress Sandesh",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
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
        lineNumber: 330,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "A Billion & One Voices",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
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
        lineNumber: 339,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Fact Checks",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
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
        lineNumber: 348,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 37
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "India At 70",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 37
      }
    }))))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 25
      }
    }, __jsx(_material_ui_icons_Theaters__WEBPACK_IMPORTED_MODULE_36___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 29
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Media",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 29
      }
    }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      button: true,
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 25
      }
    }, __jsx(_material_ui_icons_WbIncandescent__WEBPACK_IMPORTED_MODULE_37___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 29
      }
    })), __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__["default"], {
      primary: "Join the Movement",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
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
      lineNumber: 471,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "header_outer_main header_web",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "header_bg_blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "header_bg_white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
    maxWidth: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "header_outer_left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "logo_header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../static/images/logo.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 33
    }
  })))), __jsx("div", {
    className: "header_outer_right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "header_outer_right_top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "social_media_header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "https://www.facebook.com/IndianNationalCongress",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "fa fa-facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 37
    }
  })), __jsx("a", {
    href: "https://twitter.com/INCIndia",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "fa fa-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 37
    }
  })), __jsx("a", {
    href: "https://www.youtube.com/user/indiacongress",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "fa fa-youtube-play",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 37
    }
  })), __jsx("a", {
    href: "https://www.instagram.com/incindia/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "fa fa-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 37
    }
  })), __jsx("a", {
    href: "https://in.linkedin.com/company/indian-national-congress",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "fa fa-linkedin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 37
    }
  }))), __jsx("div", {
    className: "social_media_right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 29
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513,
      columnNumber: 33
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 37
    }
  }, __jsx("a", {
    className: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 41
    }
  }, subscribe)), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 37
    }
  }, __jsx("a", {
    className: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 41
    }
  }, manifesto))))), __jsx("div", {
    className: "header_outer_right_bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "header_nav_item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 33
    }
  }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    as: "/",
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 37
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 41
    }
  }, nav_home))), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 33
    }
  }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    as: "/key-issues",
    href: "/key-issues",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 37
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
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
      lineNumber: 546,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 37
    }
  }, nav_Organisation)), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 33
    }
  }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    as: "/in-focus",
    href: "/in-focus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 37
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
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
      lineNumber: 556,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 37
    }
  }, nav_VoiceoftheNation)), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 33
    }
  }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    as: "/",
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 37
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
      columnNumber: 41
    }
  }, nav_Media))), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 33
    }
  }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    as: "/",
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568,
      columnNumber: 37
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
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
      lineNumber: 575,
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
        lineNumber: 577,
        columnNumber: 37
      }
    }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 578,
        columnNumber: 41
      }
    }, __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClickAway: handleClose_keyissue,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 579,
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
        lineNumber: 580,
        columnNumber: 49
      }
    }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: handleClose_keyissue,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 581,
        columnNumber: 53
      }
    }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/key-issues/economy",
      href: "/key-issues/economy",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 582,
        columnNumber: 57
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 583,
        columnNumber: 61
      }
    }, "Economy"))), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: handleClose_keyissue,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 586,
        columnNumber: 53
      }
    }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/key-issues/foreign-policy",
      href: "/key-issues/foreign-policy",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 587,
        columnNumber: 57
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 588,
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
      lineNumber: 599,
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
        lineNumber: 601,
        columnNumber: 37
      }
    }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 605,
        columnNumber: 41
      }
    }, __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClickAway: handleClose_Organisation,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 606,
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
        lineNumber: 607,
        columnNumber: 49
      }
    }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: handleClose_Organisation,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 609,
        columnNumber: 53
      }
    }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/our-values",
      href: "/our-values",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 610,
        columnNumber: 57
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 611,
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
      lineNumber: 678,
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
        lineNumber: 680,
        columnNumber: 37
      }
    }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 681,
        columnNumber: 41
      }
    }, __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClickAway: handleClose_voiceofnation,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 682,
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
        lineNumber: 683,
        columnNumber: 49
      }
    }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: handleClose_voiceofnation,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 684,
        columnNumber: 53
      }
    }, __jsx(next_translate_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      as: "/",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 685,
        columnNumber: 57
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 686,
        columnNumber: 61
      }
    }, nav_CongressSandesh)))))));
  }))), __jsx("div", {
    className: "clear",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 720,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "header_mobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727,
      columnNumber: 17
    }
  }, ['left'].map(function (anchor) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
      key: anchor,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 729,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_20__["default"], {
      anchor: anchor,
      open: state[anchor],
      onClose: toggleDrawer(anchor, false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 730,
        columnNumber: 29
      }
    }, list(anchor)));
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 738,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_17__["default"], {
    position: "static",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 740,
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
      lineNumber: 741,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_16___default.a, {
    onClick: toggleDrawer('left', true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "menu_flex_1 mobile_logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 745,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "../../static/images/logo.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 747,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsInBhcGVyIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwidXNlU3R5bGVzX21vYmlsZV9tZW51IiwiZmxleEdyb3ciLCJtZW51QnV0dG9uIiwidGl0bGUiLCJ1c2VTdHlsZXNfZHJhd2VyIiwibGlzdCIsIndpZHRoIiwibWF4V2lkdGgiLCJmdWxsTGlzdCIsInVzZVN0eWxlc19uZXN0ZWRfbGlzdCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwibmVzdGVkIiwicGFkZGluZ0xlZnQiLCJIZWFkZXIiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJsYW5nIiwic3Vic2NyaWJlIiwibWFuaWZlc3RvIiwibmF2X2hvbWUiLCJuYXZfa2V5X2lzc3VlcyIsIm5hdl9PcmdhbmlzYXRpb24iLCJuYXZfT3VyVmFsdWUiLCJuYXZfSW5mb2N1cyIsIm5hdl9Wb2ljZW9mdGhlTmF0aW9uIiwibmF2X01lZGlhIiwibmF2X0pvaW50aGVNb3ZlbWVudCIsIm5hdl9Db25ncmVzc1NhbmRlc2giLCJjbGFzc2VzX21vYmlsZV9tZW51IiwiY2xhc3NlcyIsImNsYXNzZXNzX2RyYXdlciIsImNsYXNzZXNfbmVzdGVkX2xpc3QiLCJSZWFjdCIsInVzZVN0YXRlIiwib3Blbl9PcmciLCJzZXRPcGVuX25lc3RlZF9PcmciLCJvcGVuX0tleUlzc3VlcyIsInNldE9wZW5fbmVzdGVkX0tleUlzc3VlcyIsIm9wZW5fVm9pY2UiLCJzZXRPcGVuX25lc3RlZF9Wb2ljZSIsImhhbmRsZUNsaWNrX09yZyIsImhhbmRsZUNsaWNrX0tleUlzc3VlcyIsImhhbmRsZUNsaWNrX1ZvaWNlIiwibGVmdCIsInN0YXRlIiwic2V0U3RhdGUiLCJ0b2dnbGVEcmF3ZXIiLCJhbmNob3IiLCJvcGVuIiwiZXZlbnQiLCJ0eXBlIiwia2V5IiwiY2xzeCIsIm9wZW5fa2V5aXNzdWUiLCJzZXRPcGVuX2tleWlzc3VlIiwib3Blbl9PcmdhbmlzYXRpb24iLCJzZXRPcGVuX09yZ2FuaXNhdGlvbiIsIm9wZW5fdm9pY2VvZm5hdGlvbiIsInNldE9wZW5fdm9pY2VvZm5hdGlvbiIsImFuY2hvclJlZl9rZXlpc3N1ZSIsInVzZVJlZiIsImFuY2hvclJlZl9PcmdhbmlzYXRpb24iLCJhbmNob3JSZWZfdm9pY2VvZm5hdGlvbiIsImhhbmRsZVRvZ2dsZV9rZXlpc3N1ZSIsInByZXZPcGVuIiwiaGFuZGxlVG9nZ2xlX09yZ2FuaXNhdGlvbiIsImhhbmRsZVRvZ2dsZV92b2ljZW9mbmF0aW9uIiwiaGFuZGxlQ2xvc2Vfa2V5aXNzdWUiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJoYW5kbGVDbG9zZV9PcmdhbmlzYXRpb24iLCJoYW5kbGVDbG9zZV92b2ljZW9mbmF0aW9uIiwiaGFuZGxlTGlzdEtleURvd25fS2V5SXNzdWUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUxpc3RLZXlEb3duX09yZ2FuaXNhdGlvbiIsImhhbmRsZUxpc3RLZXlEb3duX3ZvaWNlb2ZuYXRpb24iLCJ1c2VFZmZlY3QiLCJub2RlIiwibG9hZENTUyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInVuZGVmaW5lZCIsIlRyYW5zaXRpb25Qcm9wcyIsInBsYWNlbWVudCIsInRyYW5zZm9ybU9yaWdpbiIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsUUFBSSxFQUFFO0FBQ0ZDLGFBQU8sRUFBRTtBQURQLEtBRCtCO0FBSXJDQyxTQUFLLEVBQUU7QUFDSEMsaUJBQVcsRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWMsQ0FBZDtBQURWO0FBSjhCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBVUEsSUFBTUMscUJBQXFCLEdBQUdQLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDakRDLFFBQUksRUFBRTtBQUNGTSxjQUFRLEVBQUU7QUFEUixLQUQyQztBQUlqREMsY0FBVSxFQUFFO0FBQ1JKLGlCQUFXLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQ7QUFETCxLQUpxQztBQU9qREksU0FBSyxFQUFFO0FBQ0hGLGNBQVEsRUFBRTtBQURQO0FBUDBDLEdBQVo7QUFBQSxDQUFELENBQXhDO0FBWUEsSUFBTUcsZ0JBQWdCLEdBQUdYLDJFQUFVLENBQUM7QUFDaENZLE1BQUksRUFBRTtBQUNGQyxTQUFLLEVBQUUsTUFETDtBQUVGQyxZQUFRLEVBQUU7QUFGUixHQUQwQjtBQUtoQ0MsVUFBUSxFQUFFO0FBQ05GLFNBQUssRUFBRTtBQUREO0FBTHNCLENBQUQsQ0FBbkM7QUFVQSxJQUFNRyxxQkFBcUIsR0FBR2hCLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDakRDLFFBQUksRUFBRTtBQUNGVyxXQUFLLEVBQUUsTUFETDtBQUVGQyxjQUFRLEVBQUUsSUFGUjtBQUdGRyxxQkFBZSxFQUFFaEIsS0FBSyxDQUFDaUIsT0FBTixDQUFjQyxVQUFkLENBQXlCZjtBQUh4QyxLQUQyQztBQU1qRGdCLFVBQU0sRUFBRTtBQUNKQyxpQkFBVyxFQUFFcEIsS0FBSyxDQUFDSyxPQUFOLENBQWMsQ0FBZDtBQURUO0FBTnlDLEdBQVo7QUFBQSxDQUFELENBQXhDO0FBV2UsU0FBU2dCLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFBQSx3QkFFVEMscUVBQWMsRUFGTDtBQUFBLE1BRXJCQyxDQUZxQixtQkFFckJBLENBRnFCO0FBQUEsTUFFbEJDLElBRmtCLG1CQUVsQkEsSUFGa0I7O0FBSTdCLE1BQU1DLFNBQVMsR0FBR0YsQ0FBQyxDQUFDLGtCQUFELENBQW5CO0FBQ0EsTUFBTUcsU0FBUyxHQUFHSCxDQUFDLENBQUMsa0JBQUQsQ0FBbkI7QUFFQSxNQUFNSSxRQUFRLEdBQUdKLENBQUMsQ0FBQyxpQkFBRCxDQUFsQjtBQUNBLE1BQU1LLGNBQWMsR0FBR0wsQ0FBQyxDQUFDLG1CQUFELENBQXhCO0FBQ0EsTUFBTU0sZ0JBQWdCLEdBQUdOLENBQUMsQ0FBQyxxQkFBRCxDQUExQjtBQUNBLE1BQU1PLFlBQVksR0FBR1AsQ0FBQyxDQUFDLGlCQUFELENBQXRCO0FBQ0EsTUFBTVEsV0FBVyxHQUFHUixDQUFDLENBQUMsZ0JBQUQsQ0FBckI7QUFDQSxNQUFNUyxvQkFBb0IsR0FBR1QsQ0FBQyxDQUFDLHlCQUFELENBQTlCO0FBQ0EsTUFBTVUsU0FBUyxHQUFHVixDQUFDLENBQUMsY0FBRCxDQUFuQjtBQUNBLE1BQU1XLG1CQUFtQixHQUFHWCxDQUFDLENBQUMsd0JBQUQsQ0FBN0I7QUFDQSxNQUFNWSxtQkFBbUIsR0FBR1osQ0FBQyxDQUFDLHdCQUFELENBQTdCO0FBTUEsTUFBTWEsbUJBQW1CLEdBQUc5QixxQkFBcUIsRUFBakQ7QUFDQSxNQUFNK0IsT0FBTyxHQUFHdkMsU0FBUyxFQUF6QjtBQUNBLE1BQU13QyxlQUFlLEdBQUc1QixnQkFBZ0IsRUFBeEM7QUFDQSxNQUFNNkIsbUJBQW1CLEdBQUd4QixxQkFBcUIsRUFBakQsQ0F4QjZCLENBMEI3Qjs7QUExQjZCLHdCQTRCVXlCLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBNUJWO0FBQUE7QUFBQSxNQTRCdEJDLFFBNUJzQjtBQUFBLE1BNEJaQyxrQkE1Qlk7O0FBQUEseUJBNkJzQkgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0E3QnRCO0FBQUE7QUFBQSxNQTZCdEJHLGNBN0JzQjtBQUFBLE1BNkJOQyx3QkE3Qk07O0FBQUEseUJBOEJjTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQTlCZDtBQUFBO0FBQUEsTUE4QnRCSyxVQTlCc0I7QUFBQSxNQThCVkMsb0JBOUJVOztBQWdDN0IsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzFCTCxzQkFBa0IsQ0FBQyxDQUFDRCxRQUFGLENBQWxCO0FBQ0FHLDRCQUF3QixDQUFDLEtBQUQsQ0FBeEI7QUFDQUUsd0JBQW9CLENBQUMsS0FBRCxDQUFwQjtBQUNILEdBSkQ7O0FBTUEsTUFBTUUscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ2hDSiw0QkFBd0IsQ0FBQyxDQUFDRCxjQUFGLENBQXhCO0FBQ0FELHNCQUFrQixDQUFDLEtBQUQsQ0FBbEI7QUFDQUksd0JBQW9CLENBQUMsS0FBRCxDQUFwQjtBQUNILEdBSkQ7O0FBTUEsTUFBTUcsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzVCSCx3QkFBb0IsQ0FBQyxDQUFDRCxVQUFGLENBQXBCO0FBQ0FELDRCQUF3QixDQUFDLEtBQUQsQ0FBeEI7QUFDQUYsc0JBQWtCLENBQUMsS0FBRCxDQUFsQjtBQUNILEdBSkQsQ0E1QzZCLENBa0Q3Qjs7O0FBbEQ2Qix5QkFvREhILDRDQUFLLENBQUNDLFFBQU4sQ0FBZTtBQUNyQ1UsUUFBSSxFQUFFO0FBRCtCLEdBQWYsQ0FwREc7QUFBQTtBQUFBLE1Bb0R0QkMsS0FwRHNCO0FBQUEsTUFvRGZDLFFBcERlOztBQXdEN0IsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRCxFQUFTQyxJQUFUO0FBQUEsV0FBa0IsVUFBQ0MsS0FBRCxFQUFXO0FBRTlDLFVBQUlBLEtBQUssQ0FBQ0MsSUFBTixLQUFlLFNBQWYsS0FBNkJELEtBQUssQ0FBQ0UsR0FBTixLQUFjLEtBQWQsSUFBdUJGLEtBQUssQ0FBQ0UsR0FBTixLQUFjLE9BQWxFLENBQUosRUFBZ0Y7QUFDNUU7QUFDSDs7QUFDRE4sY0FBUSxpQ0FBTUQsS0FBTixxR0FBY0csTUFBZCxFQUF1QkMsSUFBdkIsR0FBUjtBQUNILEtBTm9CO0FBQUEsR0FBckI7O0FBUUEsTUFBTTdDLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUM0QyxNQUFEO0FBQUEsV0FDVDtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBRUsscURBQUksQ0FBQ3RCLGVBQWUsQ0FBQzNCLElBQWpCLENBQXBCO0FBQTRDLFVBQUksRUFBQyxjQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUksTUFBQywrREFBRDtBQUFNLGVBQVMsRUFBQyxLQUFoQjtBQUFzQix5QkFBZ0IsdUJBQXRDO0FBQ0ksZUFBUyxFQUFFLE1BQUMsd0VBQUQ7QUFBZSxpQkFBUyxFQUFDLEtBQXpCO0FBQStCLFVBQUUsRUFBQyx1QkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEZjtBQUVJLGVBQVMsRUFBRTRCLG1CQUFtQixDQUFDdEMsSUFGbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlJLE1BQUMsbUVBQUQ7QUFBVSxZQUFNLE1BQWhCO0FBQWlCLGFBQU8sRUFBRXFELFlBQVksQ0FBQ0MsTUFBRCxFQUFTLEtBQVQsQ0FBdEM7QUFBdUQsZUFBUyxFQUFFRCxZQUFZLENBQUNDLE1BQUQsRUFBUyxLQUFULENBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURKLEVBSUksTUFBQywyREFBRDtBQUFNLFFBQUUsS0FBUjtBQUFlLFVBQUksRUFBQyxHQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx1RUFBRDtBQUFjLGFBQU8sRUFBQyxNQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FKSixDQUpKLEVBYUksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BYkosRUFlSSxNQUFDLG1FQUFEO0FBQVUsWUFBTSxNQUFoQjtBQUFpQixhQUFPLEVBQUVOLHFCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixFQUlJLE1BQUMsMkRBQUQ7QUFBTSxRQUFFLGVBQVI7QUFBeUIsVUFBSSxFQUFDLGFBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHVFQUFEO0FBQWMsYUFBTyxFQUFDLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQUpKLENBZkosRUFtREksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BbkRKLEVBcURJLE1BQUMsbUVBQUQ7QUFBVSxZQUFNLE1BQWhCO0FBQWlCLGFBQU8sRUFBRUQsZUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBREosRUFJSSxNQUFDLHVFQUFEO0FBQWMsYUFBTyxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKSixFQUtLTixRQUFRLEdBQUcsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUgsR0FBb0IsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTGpDLENBckRKLEVBNkRJLE1BQUMsbUVBQUQ7QUFBVSxZQUFJQSxRQUFkO0FBQXdCLGFBQU8sRUFBQyxNQUFoQztBQUF1QyxtQkFBYSxNQUFwRDtBQUFxRCxlQUFTLEVBQUMsc0JBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLCtEQUFEO0FBQU0sZUFBUyxFQUFDLEtBQWhCO0FBQXNCLG9CQUFjLE1BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFSSxNQUFDLG1FQUFEO0FBQVUsWUFBTSxNQUFoQjtBQUFpQixlQUFTLEVBQUVILG1CQUFtQixDQUFDcEIsTUFBaEQ7QUFBd0QsYUFBTyxFQUFFbUMsWUFBWSxDQUFDQyxNQUFELEVBQVMsS0FBVCxDQUE3RTtBQUE4RixlQUFTLEVBQUVELFlBQVksQ0FBQ0MsTUFBRCxFQUFTLEtBQVQsQ0FBckg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBREosRUFJSSxNQUFDLDJEQUFEO0FBQU0sUUFBRSxlQUFSO0FBQXlCLFVBQUksRUFBQyxhQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx1RUFBRDtBQUFjLGFBQU8sRUFBQyxZQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FKSixDQUZKLEVBV0ksTUFBQyxtRUFBRDtBQUFVLFlBQU0sTUFBaEI7QUFBaUIsZUFBUyxFQUFFaEIsbUJBQW1CLENBQUNwQixNQUFoRDtBQUF3RCxhQUFPLEVBQUVtQyxZQUFZLENBQUNDLE1BQUQsRUFBUyxLQUFULENBQTdFO0FBQThGLGVBQVMsRUFBRUQsWUFBWSxDQUFDQyxNQUFELEVBQVMsS0FBVCxDQUFySDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixFQUlJLE1BQUMsMkRBQUQ7QUFBTSxRQUFFLG9CQUFSO0FBQThCLFVBQUksRUFBQyxrQkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsdUVBQUQ7QUFBYyxhQUFPLEVBQUMsaUJBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQUpKLENBWEosRUFvQkksTUFBQyxtRUFBRDtBQUFVLFlBQU0sTUFBaEI7QUFBaUIsZUFBUyxFQUFFaEIsbUJBQW1CLENBQUNwQixNQUFoRDtBQUF3RCxhQUFPLEVBQUVtQyxZQUFZLENBQUNDLE1BQUQsRUFBUyxLQUFULENBQTdFO0FBQThGLGVBQVMsRUFBRUQsWUFBWSxDQUFDQyxNQUFELEVBQVMsS0FBVCxDQUFySDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixFQUlJLE1BQUMsMkRBQUQ7QUFBTSxRQUFFLHFCQUFSO0FBQStCLFVBQUksRUFBQyxtQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsdUVBQUQ7QUFBYyxhQUFPLEVBQUMsa0JBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQUpKLENBcEJKLEVBNkJJLE1BQUMsbUVBQUQ7QUFBVSxZQUFNLE1BQWhCO0FBQWlCLGVBQVMsRUFBRWhCLG1CQUFtQixDQUFDcEIsTUFBaEQ7QUFBd0QsYUFBTyxFQUFFbUMsWUFBWSxDQUFDQyxNQUFELEVBQVMsS0FBVCxDQUE3RTtBQUE4RixlQUFTLEVBQUVELFlBQVksQ0FBQ0MsTUFBRCxFQUFTLEtBQVQsQ0FBckg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBREosRUFJSSxNQUFDLDJEQUFEO0FBQU0sUUFBRSxxQkFBUjtBQUErQixVQUFJLEVBQUMsbUJBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHVFQUFEO0FBQWMsYUFBTyxFQUFDLGtCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FKSixDQTdCSixFQXNDSSxNQUFDLG1FQUFEO0FBQVUsWUFBTSxNQUFoQjtBQUFpQixlQUFTLEVBQUVoQixtQkFBbUIsQ0FBQ3BCLE1BQWhEO0FBQXdELGFBQU8sRUFBRW1DLFlBQVksQ0FBQ0MsTUFBRCxFQUFTLEtBQVQsQ0FBN0U7QUFBOEYsZUFBUyxFQUFFRCxZQUFZLENBQUNDLE1BQUQsRUFBUyxLQUFULENBQXJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURKLEVBSUksTUFBQywyREFBRDtBQUFNLFFBQUUsaUJBQVI7QUFBMkIsVUFBSSxFQUFDLGVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHVFQUFEO0FBQWMsYUFBTyxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQUpKLENBdENKLEVBK0NJLE1BQUMsbUVBQUQ7QUFBVSxZQUFNLE1BQWhCO0FBQWlCLGVBQVMsRUFBRWhCLG1CQUFtQixDQUFDcEIsTUFBaEQ7QUFBd0QsYUFBTyxFQUFFbUMsWUFBWSxDQUFDQyxNQUFELEVBQVMsS0FBVCxDQUE3RTtBQUE4RixlQUFTLEVBQUVELFlBQVksQ0FBQ0MsTUFBRCxFQUFTLEtBQVQsQ0FBckg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBREosRUFJSSxNQUFDLDJEQUFEO0FBQU0sUUFBRSxRQUFSO0FBQWtCLFVBQUksRUFBQyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx1RUFBRDtBQUFjLGFBQU8sRUFBQyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FKSixDQS9DSixFQXdESSxNQUFDLG1FQUFEO0FBQVUsWUFBTSxNQUFoQjtBQUFpQixlQUFTLEVBQUVoQixtQkFBbUIsQ0FBQ3BCLE1BQWhEO0FBQXdELGFBQU8sRUFBRW1DLFlBQVksQ0FBQ0MsTUFBRCxFQUFTLEtBQVQsQ0FBN0U7QUFBOEYsZUFBUyxFQUFFRCxZQUFZLENBQUNDLE1BQUQsRUFBUyxLQUFULENBQXJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURKLEVBSUksTUFBQywyREFBRDtBQUFNLFFBQUUsZ0NBQVI7QUFBMEMsVUFBSSxFQUFDLDhCQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx1RUFBRDtBQUFjLGFBQU8sRUFBQyxtQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBSkosQ0F4REosRUFpRUksTUFBQyxtRUFBRDtBQUFVLFlBQU0sTUFBaEI7QUFBaUIsZUFBUyxFQUFFaEIsbUJBQW1CLENBQUNwQixNQUFoRDtBQUF3RCxhQUFPLEVBQUVtQyxZQUFZLENBQUNDLE1BQUQsRUFBUyxLQUFULENBQTdFO0FBQThGLGVBQVMsRUFBRUQsWUFBWSxDQUFDQyxNQUFELEVBQVMsS0FBVCxDQUFySDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixFQUlJLE1BQUMsMkRBQUQ7QUFBTSxRQUFFLEtBQVI7QUFBZSxVQUFJLEVBQUMsR0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsdUVBQUQ7QUFBYyxhQUFPLEVBQUMsdUJBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQUpKLENBakVKLEVBMEVJLE1BQUMsbUVBQUQ7QUFBVSxZQUFNLE1BQWhCO0FBQWlCLGVBQVMsRUFBRWhCLG1CQUFtQixDQUFDcEIsTUFBaEQ7QUFBd0QsYUFBTyxFQUFFbUMsWUFBWSxDQUFDQyxNQUFELEVBQVMsS0FBVCxDQUE3RTtBQUE4RixlQUFTLEVBQUVELFlBQVksQ0FBQ0MsTUFBRCxFQUFTLEtBQVQsQ0FBckg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBREosRUFJSSxNQUFDLDJEQUFEO0FBQU0sUUFBRSxpQkFBUjtBQUEyQixVQUFJLEVBQUMsZUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsdUVBQUQ7QUFBYyxhQUFPLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBSkosQ0ExRUosQ0FESixDQTdESixFQW9KSSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFwSkosRUFzSkksTUFBQyxtRUFBRDtBQUFVLFlBQU0sTUFBaEI7QUFBaUIsYUFBTyxFQUFFRCxZQUFZLENBQUNDLE1BQUQsRUFBUyxLQUFULENBQXRDO0FBQXVELGVBQVMsRUFBRUQsWUFBWSxDQUFDQyxNQUFELEVBQVMsS0FBVCxDQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixFQUlJLE1BQUMsMkRBQUQ7QUFBTSxRQUFFLGFBQVI7QUFBdUIsVUFBSSxFQUFDLFdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHVFQUFEO0FBQWMsYUFBTyxFQUFDLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQUpKLENBdEpKLEVBK0pJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQS9KSixFQWlLSSxNQUFDLG1FQUFEO0FBQVUsWUFBTSxNQUFoQjtBQUFpQixhQUFPLEVBQUVMLGlCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixFQUlJLE1BQUMsdUVBQUQ7QUFBYyxhQUFPLEVBQUMscUJBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKSixFQUtLSixVQUFVLEdBQUcsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUgsR0FBb0IsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTG5DLENBaktKLEVBeUtJLE1BQUMsbUVBQUQ7QUFBVSxZQUFJQSxVQUFkO0FBQTBCLGFBQU8sRUFBQyxNQUFsQztBQUF5QyxtQkFBYSxNQUF0RDtBQUF1RCxlQUFTLEVBQUMsc0JBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLCtEQUFEO0FBQU0sZUFBUyxFQUFDLEtBQWhCO0FBQXNCLG9CQUFjLE1BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFSSxNQUFDLG1FQUFEO0FBQVUsWUFBTSxNQUFoQjtBQUFpQixlQUFTLEVBQUVQLG1CQUFtQixDQUFDcEIsTUFBaEQ7QUFBd0QsYUFBTyxFQUFFbUMsWUFBWSxDQUFDQyxNQUFELEVBQVMsS0FBVCxDQUE3RTtBQUE4RixlQUFTLEVBQUVELFlBQVksQ0FBQ0MsTUFBRCxFQUFTLEtBQVQsQ0FBckg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBREosRUFJSSxNQUFDLDJEQUFEO0FBQU0sUUFBRSxLQUFSO0FBQWUsVUFBSSxFQUFDLEdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHVFQUFEO0FBQWMsYUFBTyxFQUFDLGtCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FKSixDQUZKLEVBV0ksTUFBQyxtRUFBRDtBQUFVLFlBQU0sTUFBaEI7QUFBaUIsZUFBUyxFQUFFaEIsbUJBQW1CLENBQUNwQixNQUFoRDtBQUF3RCxhQUFPLEVBQUVtQyxZQUFZLENBQUNDLE1BQUQsRUFBUyxLQUFULENBQTdFO0FBQThGLGVBQVMsRUFBRUQsWUFBWSxDQUFDQyxNQUFELEVBQVMsS0FBVCxDQUFySDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixFQUlJLE1BQUMsMkRBQUQ7QUFBTSxRQUFFLEtBQVI7QUFBZSxVQUFJLEVBQUMsR0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsdUVBQUQ7QUFBYyxhQUFPLEVBQUMsd0JBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQUpKLENBWEosRUFvQkksTUFBQyxtRUFBRDtBQUFVLFlBQU0sTUFBaEI7QUFBaUIsZUFBUyxFQUFFaEIsbUJBQW1CLENBQUNwQixNQUFoRDtBQUF3RCxhQUFPLEVBQUVtQyxZQUFZLENBQUNDLE1BQUQsRUFBUyxLQUFULENBQTdFO0FBQThGLGVBQVMsRUFBRUQsWUFBWSxDQUFDQyxNQUFELEVBQVMsS0FBVCxDQUFySDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixFQUlJLE1BQUMsMkRBQUQ7QUFBTSxRQUFFLEtBQVI7QUFBZSxVQUFJLEVBQUMsR0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsdUVBQUQ7QUFBYyxhQUFPLEVBQUMsYUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBSkosQ0FwQkosRUE2QkksTUFBQyxtRUFBRDtBQUFVLFlBQU0sTUFBaEI7QUFBaUIsZUFBUyxFQUFFaEIsbUJBQW1CLENBQUNwQixNQUFoRDtBQUF3RCxhQUFPLEVBQUVtQyxZQUFZLENBQUNDLE1BQUQsRUFBUyxLQUFULENBQTdFO0FBQThGLGVBQVMsRUFBRUQsWUFBWSxDQUFDQyxNQUFELEVBQVMsS0FBVCxDQUFySDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixFQUlJLE1BQUMsMkRBQUQ7QUFBTSxRQUFFLEtBQVI7QUFBZSxVQUFJLEVBQUMsR0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsdUVBQUQ7QUFBYyxhQUFPLEVBQUMsYUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBSkosQ0E3QkosQ0FESixDQXpLSixFQXNOSSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUF0TkosRUF3TkksTUFBQyxtRUFBRDtBQUFVLFlBQU0sTUFBaEI7QUFBaUIsYUFBTyxFQUFFRCxZQUFZLENBQUNDLE1BQUQsRUFBUyxLQUFULENBQXRDO0FBQXVELGVBQVMsRUFBRUQsWUFBWSxDQUFDQyxNQUFELEVBQVMsS0FBVCxDQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixFQUlJLE1BQUMsMkRBQUQ7QUFBTSxRQUFFLEtBQVI7QUFBZSxVQUFJLEVBQUMsR0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsdUVBQUQ7QUFBYyxhQUFPLEVBQUMsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBSkosQ0F4TkosRUFpT0ksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1Bak9KLEVBbU9JLE1BQUMsbUVBQUQ7QUFBVSxZQUFNLE1BQWhCO0FBQWlCLGFBQU8sRUFBRUQsWUFBWSxDQUFDQyxNQUFELEVBQVMsS0FBVCxDQUF0QztBQUF1RCxlQUFTLEVBQUVELFlBQVksQ0FBQ0MsTUFBRCxFQUFTLEtBQVQsQ0FBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBREosRUFJSSxNQUFDLDJEQUFEO0FBQU0sUUFBRSxLQUFSO0FBQWUsVUFBSSxFQUFDLEdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHVFQUFEO0FBQWMsYUFBTyxFQUFDLG1CQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FKSixDQW5PSixDQUZKLENBREosQ0FEUztBQUFBLEdBQWIsQ0FoRTZCLENBd1Q3Qjs7O0FBeFQ2Qix5QkEwVGFmLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBMVRiO0FBQUE7QUFBQSxNQTBUdEJvQixhQTFUc0I7QUFBQSxNQTBUUEMsZ0JBMVRPOztBQUFBLDBCQTJUcUJ0Qiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQTNUckI7QUFBQTtBQUFBLE1BMlR0QnNCLGlCQTNUc0I7QUFBQSxNQTJUSEMsb0JBM1RHOztBQUFBLDBCQTRUdUJ4Qiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQTVUdkI7QUFBQTtBQUFBLE1BNFR0QndCLGtCQTVUc0I7QUFBQSxNQTRURkMscUJBNVRFOztBQThUN0IsTUFBTUMsa0JBQWtCLEdBQUczQiw0Q0FBSyxDQUFDNEIsTUFBTixDQUFhLElBQWIsQ0FBM0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRzdCLDRDQUFLLENBQUM0QixNQUFOLENBQWEsSUFBYixDQUEvQjtBQUNBLE1BQU1FLHVCQUF1QixHQUFHOUIsNENBQUssQ0FBQzRCLE1BQU4sQ0FBYSxJQUFiLENBQWhDOztBQUVBLE1BQU1HLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUNoQ1Qsb0JBQWdCLENBQUMsVUFBQ1UsUUFBRDtBQUFBLGFBQWMsQ0FBQ0EsUUFBZjtBQUFBLEtBQUQsQ0FBaEI7QUFDSCxHQUZEOztBQUlBLE1BQU1DLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEIsR0FBTTtBQUNwQ1Qsd0JBQW9CLENBQUMsVUFBQ1EsUUFBRDtBQUFBLGFBQWMsQ0FBQ0EsUUFBZjtBQUFBLEtBQUQsQ0FBcEI7QUFDSCxHQUZEOztBQUlBLE1BQU1FLDBCQUEwQixHQUFHLFNBQTdCQSwwQkFBNkIsR0FBTTtBQUNyQ1IseUJBQXFCLENBQUMsVUFBQ00sUUFBRDtBQUFBLGFBQWMsQ0FBQ0EsUUFBZjtBQUFBLEtBQUQsQ0FBckI7QUFDSCxHQUZEOztBQUlBLE1BQU1HLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ2xCLEtBQUQsRUFBVztBQUNwQyxRQUFJVSxrQkFBa0IsQ0FBQ1MsT0FBbkIsSUFBOEJULGtCQUFrQixDQUFDUyxPQUFuQixDQUEyQkMsUUFBM0IsQ0FBb0NwQixLQUFLLENBQUNxQixNQUExQyxDQUFsQyxFQUFxRjtBQUNqRjtBQUNIOztBQUNEaEIsb0JBQWdCLENBQUMsS0FBRCxDQUFoQjtBQUNILEdBTEQ7O0FBTUEsTUFBTWlCLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsQ0FBQ3RCLEtBQUQsRUFBVztBQUN4QyxRQUFJWSxzQkFBc0IsQ0FBQ08sT0FBdkIsSUFBa0NQLHNCQUFzQixDQUFDTyxPQUF2QixDQUErQkMsUUFBL0IsQ0FBd0NwQixLQUFLLENBQUNxQixNQUE5QyxDQUF0QyxFQUE2RjtBQUN6RjtBQUNIOztBQUNEZCx3QkFBb0IsQ0FBQyxLQUFELENBQXBCO0FBQ0gsR0FMRDs7QUFNQSxNQUFNZ0IseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixDQUFDdkIsS0FBRCxFQUFXO0FBQ3pDLFFBQUlhLHVCQUF1QixDQUFDTSxPQUF4QixJQUFtQ04sdUJBQXVCLENBQUNNLE9BQXhCLENBQWdDQyxRQUFoQyxDQUF5Q3BCLEtBQUssQ0FBQ3FCLE1BQS9DLENBQXZDLEVBQStGO0FBQzNGO0FBQ0g7O0FBQ0RaLHlCQUFxQixDQUFDLEtBQUQsQ0FBckI7QUFDSCxHQUxEOztBQU9BLFdBQVNlLDBCQUFULENBQW9DeEIsS0FBcEMsRUFBMkM7QUFDdkMsUUFBSUEsS0FBSyxDQUFDRSxHQUFOLEtBQWMsS0FBbEIsRUFBeUI7QUFDckJGLFdBQUssQ0FBQ3lCLGNBQU47QUFDQXBCLHNCQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFFSDtBQUNKOztBQUVELFdBQVNxQiw4QkFBVCxDQUF3QzFCLEtBQXhDLEVBQStDO0FBQzNDLFFBQUlBLEtBQUssQ0FBQ0UsR0FBTixLQUFjLEtBQWxCLEVBQXlCO0FBQ3JCRixXQUFLLENBQUN5QixjQUFOO0FBQ0FsQiwwQkFBb0IsQ0FBQyxLQUFELENBQXBCO0FBQ0g7QUFDSjs7QUFFRCxXQUFTb0IsK0JBQVQsQ0FBeUMzQixLQUF6QyxFQUFnRDtBQUM1QyxRQUFJQSxLQUFLLENBQUNFLEdBQU4sS0FBYyxLQUFsQixFQUF5QjtBQUNyQkYsV0FBSyxDQUFDeUIsY0FBTjtBQUNBaEIsMkJBQXFCLENBQUMsS0FBRCxDQUFyQjtBQUNIO0FBQ0osR0FyWDRCLENBdVg3Qjs7O0FBRUExQiw4Q0FBSyxDQUFDNkMsU0FBTixDQUFnQixZQUFNO0FBQ2xCLFFBQU1DLElBQUksR0FBR0MsMkRBQU8sQ0FDaEIsZ0ZBRGdCLEVBRWhCQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBRmdCLENBQXBCO0FBS0EsV0FBTyxZQUFNO0FBQ1RILFVBQUksQ0FBQ0ksVUFBTCxDQUFnQkMsV0FBaEIsQ0FBNEJMLElBQTVCO0FBQ0gsS0FGRDtBQUdILEdBVEQsRUFTRyxFQVRIO0FBV0EsU0FFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUtJLE1BQUMsb0VBQUQ7QUFBVyxZQUFRLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBQyw4QkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQUZKLENBRkosRUFZSTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdJO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLFFBQUksRUFBQyxpREFBUjtBQUEwRCxVQUFNLEVBQUMsUUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsK0RBQUQ7QUFBTSxhQUFTLEVBQUMsZ0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUk7QUFBRyxRQUFJLEVBQUMsOEJBQVI7QUFBdUMsVUFBTSxFQUFDLFFBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtEQUFEO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUpKLEVBT0k7QUFBRyxRQUFJLEVBQUMsNENBQVI7QUFBcUQsVUFBTSxFQUFDLFFBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtEQUFEO0FBQU0sYUFBUyxFQUFDLG9CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FQSixFQVVJO0FBQUcsUUFBSSxFQUFDLHFDQUFSO0FBQThDLFVBQU0sRUFBQyxRQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrREFBRDtBQUFNLGFBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBVkosRUFhSTtBQUFHLFFBQUksRUFBQywwREFBUjtBQUFtRSxVQUFNLEVBQUMsUUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsK0RBQUQ7QUFBTSxhQUFTLEVBQUMsZ0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQWJKLENBSEosRUFxQkk7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNCN0QsU0FBdEIsQ0FESixDQURKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQkMsU0FBdEIsQ0FESixDQUxKLENBREosQ0FyQkosQ0FGSixFQXFDSTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUksTUFBQyxrRUFBRDtBQUFVLGFBQVMsRUFBQyxpQkFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMkRBQUQ7QUFBTSxNQUFFLEtBQVI7QUFBZSxRQUFJLEVBQUMsR0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUMsUUFBSixDQURKLENBREosQ0FGSixFQVlJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMkRBQUQ7QUFBTSxNQUFFLGVBQVI7QUFBeUIsUUFBSSxFQUFDLGFBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlDLGNBQUosQ0FESixDQURKLENBWkosRUFrQkksTUFBQyxrRUFBRDtBQUFVLE9BQUcsRUFBRXlDLHNCQUFmO0FBQXVDLHFCQUFlTixpQkFBaUIsR0FBRyxpQkFBSCxHQUF1QjZCLFNBQTlGO0FBQXlHLHFCQUFjLE1BQXZIO0FBQThILFdBQU8sRUFBRW5CLHlCQUF2STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJNUMsZ0JBQUosQ0FESixDQWxCSixFQXNCSSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDJEQUFEO0FBQU0sTUFBRSxhQUFSO0FBQXVCLFFBQUksRUFBQyxXQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJRSxXQUFKLENBREosQ0FESixDQXRCSixFQTRCSSxNQUFDLGtFQUFEO0FBQVUsT0FBRyxFQUFFdUMsdUJBQWY7QUFBd0MscUJBQWVMLGtCQUFrQixHQUFHLGlCQUFILEdBQXVCMkIsU0FBaEc7QUFBMkcscUJBQWMsTUFBekg7QUFBZ0ksV0FBTyxFQUFFbEIsMEJBQXpJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUkxQyxvQkFBSixDQURKLENBNUJKLEVBaUNJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMkRBQUQ7QUFBTSxNQUFFLEtBQVI7QUFBZSxRQUFJLEVBQUMsR0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUMsU0FBSixDQURKLENBREosQ0FqQ0osRUF1Q0ksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywyREFBRDtBQUFNLE1BQUUsS0FBUjtBQUFlLFFBQUksRUFBQyxHQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJQyxtQkFBSixDQURKLENBREosQ0F2Q0osQ0FGSixFQWlESSxNQUFDLGlFQUFEO0FBQVEsUUFBSSxFQUFFMkIsYUFBZDtBQUE2QixZQUFRLEVBQUVNLGtCQUFrQixDQUFDUyxPQUExRDtBQUFtRSxRQUFJLEVBQUVnQixTQUF6RTtBQUFvRixjQUFVLE1BQTlGO0FBQStGLGlCQUFhLE1BQTVHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSztBQUFBLFFBQUdDLGVBQUgsUUFBR0EsZUFBSDtBQUFBLFFBQW9CQyxTQUFwQixRQUFvQkEsU0FBcEI7QUFBQSxXQUNHLE1BQUMsOERBQUQseUZBQVVELGVBQVY7QUFBMkIsV0FBSyxFQUFFO0FBQUVFLHVCQUFlLEVBQUVELFNBQVMsS0FBSyxRQUFkLEdBQXlCLFlBQXpCLEdBQXdDO0FBQTNELE9BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFDSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLDJFQUFEO0FBQW1CLGlCQUFXLEVBQUVuQixvQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsa0VBQUQ7QUFBVSxtQkFBYSxFQUFFZCxhQUF6QjtBQUF3QyxRQUFFLEVBQUMsZ0JBQTNDO0FBQTRELGVBQVMsRUFBRW9CLDBCQUF2RTtBQUFtRyxlQUFTLEVBQUMsZUFBN0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsa0VBQUQ7QUFBVSxhQUFPLEVBQUVOLG9CQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQywyREFBRDtBQUFNLFFBQUUsdUJBQVI7QUFBaUMsVUFBSSxFQUFDLHFCQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixDQURKLENBREosRUFNSSxNQUFDLGtFQUFEO0FBQVUsYUFBTyxFQUFFQSxvQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsMkRBQUQ7QUFBTSxRQUFFLDhCQUFSO0FBQXdDLFVBQUksRUFBQyw0QkFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosQ0FESixDQU5KLENBREosQ0FESixDQURKLENBREg7QUFBQSxHQURMLENBakRKLEVBeUVJLE1BQUMsaUVBQUQ7QUFBUSxRQUFJLEVBQUVaLGlCQUFkO0FBQWlDLFlBQVEsRUFBRU0sc0JBQXNCLENBQUNPLE9BQWxFO0FBQTJFLFFBQUksRUFBRWdCLFNBQWpGO0FBQTRGLGNBQVUsTUFBdEc7QUFBdUcsaUJBQWEsTUFBcEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLO0FBQUEsUUFBR0MsZUFBSCxTQUFHQSxlQUFIO0FBQUEsUUFBb0JDLFNBQXBCLFNBQW9CQSxTQUFwQjtBQUFBLFdBQ0csTUFBQyw4REFBRCx5RkFDUUQsZUFEUjtBQUVJLFdBQUssRUFBRTtBQUFFRSx1QkFBZSxFQUFFRCxTQUFTLEtBQUssUUFBZCxHQUF5QixZQUF6QixHQUF3QztBQUEzRCxPQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFJSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLDJFQUFEO0FBQW1CLGlCQUFXLEVBQUVmLHdCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxrRUFBRDtBQUFVLG1CQUFhLEVBQUVoQixpQkFBekI7QUFBNEMsUUFBRSxFQUFDLGlCQUEvQztBQUFpRSxlQUFTLEVBQUVvQiw4QkFBNUU7QUFBNEcsZUFBUyxFQUFDLGVBQXRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFSSxNQUFDLGtFQUFEO0FBQVUsYUFBTyxFQUFFSix3QkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsMkRBQUQ7QUFBTSxRQUFFLGVBQVI7QUFBeUIsVUFBSSxFQUFDLGFBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlqRCxZQUFKLENBREosQ0FESixDQUZKLENBREosQ0FESixDQUpKLENBREg7QUFBQSxHQURMLENBekVKLEVBd0pJLE1BQUMsaUVBQUQ7QUFBUSxRQUFJLEVBQUVtQyxrQkFBZDtBQUFrQyxZQUFRLEVBQUVLLHVCQUF1QixDQUFDTSxPQUFwRTtBQUE2RSxRQUFJLEVBQUVnQixTQUFuRjtBQUE4RixjQUFVLE1BQXhHO0FBQXlHLGlCQUFhLE1BQXRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSztBQUFBLFFBQUdDLGVBQUgsU0FBR0EsZUFBSDtBQUFBLFFBQW9CQyxTQUFwQixTQUFvQkEsU0FBcEI7QUFBQSxXQUNHLE1BQUMsOERBQUQseUZBQVVELGVBQVY7QUFBMkIsV0FBSyxFQUFFO0FBQUVFLHVCQUFlLEVBQUVELFNBQVMsS0FBSyxRQUFkLEdBQXlCLFlBQXpCLEdBQXdDO0FBQTNELE9BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFDSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLDJFQUFEO0FBQW1CLGlCQUFXLEVBQUVkLHlCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxrRUFBRDtBQUFVLG1CQUFhLEVBQUVmLGtCQUF6QjtBQUE2QyxRQUFFLEVBQUMsZ0JBQWhEO0FBQWlFLGVBQVMsRUFBRW1CLCtCQUE1RTtBQUE2RyxlQUFTLEVBQUMsZUFBdkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsa0VBQUQ7QUFBVSxhQUFPLEVBQUVKLHlCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQywyREFBRDtBQUFNLFFBQUUsS0FBUjtBQUFlLFVBQUksRUFBQyxHQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJN0MsbUJBQUosQ0FESixDQURKLENBREosQ0FESixDQURKLENBREosQ0FESDtBQUFBLEdBREwsQ0F4SkosQ0FyQ0osQ0FaSixFQW1QSTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuUEosQ0FMSixDQURKLEVBOFBJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSyxDQUFDLE1BQUQsRUFBUzZELEdBQVQsQ0FBYSxVQUFDekMsTUFBRDtBQUFBLFdBQ1YsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBZ0IsU0FBRyxFQUFFQSxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxpRUFBRDtBQUFRLFlBQU0sRUFBRUEsTUFBaEI7QUFBd0IsVUFBSSxFQUFFSCxLQUFLLENBQUNHLE1BQUQsQ0FBbkM7QUFBNkMsYUFBTyxFQUFFRCxZQUFZLENBQUNDLE1BQUQsRUFBUyxLQUFULENBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSzVDLElBQUksQ0FBQzRDLE1BQUQsQ0FEVCxDQURKLENBRFU7QUFBQSxHQUFiLENBREwsQ0FGSixFQWFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGlFQUFEO0FBQVEsWUFBUSxFQUFDLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHFFQUFEO0FBQVksUUFBSSxFQUFDLE9BQWpCO0FBQXlCLGFBQVMsRUFBRW5CLG1CQUFtQixDQUFDNUIsVUFBeEQ7QUFBb0UsU0FBSyxFQUFDLFNBQTFFO0FBQW9GLGtCQUFXLE1BQS9GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtEQUFEO0FBQVUsV0FBTyxFQUFFOEMsWUFBWSxDQUFDLE1BQUQsRUFBUyxJQUFULENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBS0k7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFDLDhCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBTEosQ0FESixDQURKLENBYkosQ0E5UEosQ0FGSjtBQWdTSDs7R0FwcUJ1QmpDLE07VUFFQUMscUUsRUFtQlFoQixxQixFQUNaUixTLEVBQ1FZLGdCLEVBQ0lLLHFCOzs7S0F4QlJNLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGhpXFxrZXktaXNzdWVzLmpzLmMxN2I5N2MxZGNmNWI1ZTJiYmI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENsaWNrQXdheUxpc3RlbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyJztcbmltcG9ydCBHcm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyb3cnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgTWVudUxpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUxpc3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgUG9wcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BvcHBlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0LXRyYW5zbGF0ZS9MaW5rJ1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbic7XG5pbXBvcnQgeyBsb2FkQ1NTIH0gZnJvbSAnZmctbG9hZGNzcyc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IERyYXdlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXInO1xuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvbic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgSW5ib3hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3ZlVG9JbmJveCc7XG5pbXBvcnQgTGlzdFN1YmhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyJztcbmltcG9ydCBDb2xsYXBzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZSc7XG5pbXBvcnQgRXhwYW5kTGVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTGVzcyc7XG5pbXBvcnQgRXhwYW5kTW9yZSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZSc7XG5pbXBvcnQgSG9tZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hvbWUnO1xuaW1wb3J0IE1vbmV0aXphdGlvbk9uSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9uZXRpemF0aW9uT24nO1xuaW1wb3J0IENlbnRlckZvY3VzU3Ryb25nSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2VudGVyRm9jdXNTdHJvbmcnO1xuaW1wb3J0IEFycm93UmlnaHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd1JpZ2h0JztcbmltcG9ydCBTcGVha2VySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3BlYWtlcic7XG5pbXBvcnQgVGhlYXRlcnNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UaGVhdGVycyc7XG5pbXBvcnQgV2JJbmNhbmRlc2NlbnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9XYkluY2FuZGVzY2VudCc7XG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZScsXG4gICAgfSxcbiAgICBwYXBlcjoge1xuICAgICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgICB9LFxufSkpO1xuXG5cbmNvbnN0IHVzZVN0eWxlc19tb2JpbGVfbWVudSA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgfSxcbiAgICBtZW51QnV0dG9uOiB7XG4gICAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgfSxcbn0pKTtcblxuY29uc3QgdXNlU3R5bGVzX2RyYXdlciA9IG1ha2VTdHlsZXMoe1xuICAgIGxpc3Q6IHtcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgICAgbWF4V2lkdGg6IDEwMDAsXG4gICAgfSxcbiAgICBmdWxsTGlzdDoge1xuICAgICAgICB3aWR0aDogJ2F1dG8nLFxuICAgIH0sXG59KTtcblxuY29uc3QgdXNlU3R5bGVzX25lc3RlZF9saXN0ID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgICBtYXhXaWR0aDogMTAwMCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgfSxcbiAgICBuZXN0ZWQ6IHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuXG4gICAgY29uc3QgeyB0LCBsYW5nIH0gPSB1c2VUcmFuc2xhdGlvbigpXG5cbiAgICBjb25zdCBzdWJzY3JpYmUgPSB0KCdjb21tb246c3Vic2NyaWJlJyk7XG4gICAgY29uc3QgbWFuaWZlc3RvID0gdCgnY29tbW9uOm1hbmlmZXN0bycpO1xuXG4gICAgY29uc3QgbmF2X2hvbWUgPSB0KCdjb21tb246bmF2X2hvbWUnKTtcbiAgICBjb25zdCBuYXZfa2V5X2lzc3VlcyA9IHQoJ2NvbW1vbjprZXlfaXNzdWVzJyk7XG4gICAgY29uc3QgbmF2X09yZ2FuaXNhdGlvbiA9IHQoJ2NvbW1vbjpPcmdhbmlzYXRpb24nKTtcbiAgICBjb25zdCBuYXZfT3VyVmFsdWUgPSB0KCdjb21tb246T3VyVmFsdWUnKTtcbiAgICBjb25zdCBuYXZfSW5mb2N1cyA9IHQoJ2NvbW1vbjpJbmZvY3VzJyk7XG4gICAgY29uc3QgbmF2X1ZvaWNlb2Z0aGVOYXRpb24gPSB0KCdjb21tb246Vm9pY2VvZnRoZU5hdGlvbicpO1xuICAgIGNvbnN0IG5hdl9NZWRpYSA9IHQoJ2NvbW1vbjpNZWRpYScpO1xuICAgIGNvbnN0IG5hdl9Kb2ludGhlTW92ZW1lbnQgPSB0KCdjb21tb246Sm9pbnRoZU1vdmVtZW50Jyk7XG4gICAgY29uc3QgbmF2X0NvbmdyZXNzU2FuZGVzaCA9IHQoJ2NvbW1vbjpDb25ncmVzc1NhbmRlc2gnKTtcbiAgICBcblxuXG5cblxuICAgIGNvbnN0IGNsYXNzZXNfbW9iaWxlX21lbnUgPSB1c2VTdHlsZXNfbW9iaWxlX21lbnUoKTtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gICAgY29uc3QgY2xhc3Nlc3NfZHJhd2VyID0gdXNlU3R5bGVzX2RyYXdlcigpO1xuICAgIGNvbnN0IGNsYXNzZXNfbmVzdGVkX2xpc3QgPSB1c2VTdHlsZXNfbmVzdGVkX2xpc3QoKTtcblxuICAgIC8vIHN1YiBtZW51IGxpc3QgbW9iaWxlIHN0YXJ0XG5cbiAgICBjb25zdCBbb3Blbl9PcmcsIHNldE9wZW5fbmVzdGVkX09yZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW29wZW5fS2V5SXNzdWVzLCBzZXRPcGVuX25lc3RlZF9LZXlJc3N1ZXNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtvcGVuX1ZvaWNlLCBzZXRPcGVuX25lc3RlZF9Wb2ljZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGlja19PcmcgPSAoKSA9PiB7XG4gICAgICAgIHNldE9wZW5fbmVzdGVkX09yZyghb3Blbl9PcmcpO1xuICAgICAgICBzZXRPcGVuX25lc3RlZF9LZXlJc3N1ZXMoZmFsc2UpO1xuICAgICAgICBzZXRPcGVuX25lc3RlZF9Wb2ljZShmYWxzZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrX0tleUlzc3VlcyA9ICgpID0+IHtcbiAgICAgICAgc2V0T3Blbl9uZXN0ZWRfS2V5SXNzdWVzKCFvcGVuX0tleUlzc3Vlcyk7XG4gICAgICAgIHNldE9wZW5fbmVzdGVkX09yZyhmYWxzZSk7XG4gICAgICAgIHNldE9wZW5fbmVzdGVkX1ZvaWNlKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tfVm9pY2UgPSAoKSA9PiB7XG4gICAgICAgIHNldE9wZW5fbmVzdGVkX1ZvaWNlKCFvcGVuX1ZvaWNlKTtcbiAgICAgICAgc2V0T3Blbl9uZXN0ZWRfS2V5SXNzdWVzKGZhbHNlKTtcbiAgICAgICAgc2V0T3Blbl9uZXN0ZWRfT3JnKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgLy8gc3ViIG1lbnUgbGlzdCBtb2JpbGUgZW5kc1xuXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgICAgIGxlZnQ6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKGFuY2hvciwgb3BlbikgPT4gKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJyAmJiAoZXZlbnQua2V5ID09PSAnVGFiJyB8fCBldmVudC5rZXkgPT09ICdTaGlmdCcpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW2FuY2hvcl06IG9wZW4gfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxpc3QgPSAoYW5jaG9yKSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlX21lbnVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXNzX2RyYXdlci5saXN0KX0gcm9sZT1cInByZXNlbnRhdGlvblwiPlxuXG4gICAgICAgICAgICAgICAgPExpc3QgY29tcG9uZW50PVwibmF2XCIgYXJpYS1sYWJlbGxlZGJ5PVwibmVzdGVkLWxpc3Qtc3ViaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgc3ViaGVhZGVyPXs8TGlzdFN1YmhlYWRlciBjb21wb25lbnQ9XCJkaXZcIiBpZD1cIm5lc3RlZC1saXN0LXN1YmhlYWRlclwiPiZuYnNwOzwvTGlzdFN1YmhlYWRlcj59XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc19uZXN0ZWRfbGlzdC5yb290fSA+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9IG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhvbWVJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2B9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiSG9tZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrX0tleUlzc3Vlc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb25ldGl6YXRpb25Pbkljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2Ava2V5LWlzc3Vlc2B9IGhyZWY9XCIva2V5LWlzc3Vlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIktleSBJc3N1ZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiS2V5IElzc3Vlc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b3Blbl9LZXlJc3N1ZXMgPyA8RXhwYW5kTGVzcyAvPiA6IDxFeHBhbmRNb3JlIC8+fSAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICB7LyogPENvbGxhcHNlIGluPXtvcGVuX0tleUlzc3Vlc30gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0IGNsYXNzTmFtZT1cInN1Yl9tZW51X2l0ZW1fbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzX25lc3RlZF9saXN0Lm5lc3RlZH0gb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2tleS1pc3N1ZXMvZWNvbm9teWB9IGhyZWY9XCIva2V5LWlzc3Vlcy9lY29ub215XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJFY29ub215XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc19uZXN0ZWRfbGlzdC5uZXN0ZWR9IG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9rZXktaXNzdWVzL2ZvcmVpZ24tcG9saWN5YH0gaHJlZj1cIi9rZXktaXNzdWVzL2ZvcmVpZ24tcG9saWN5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJGb3JlaWduIFBvbGljeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja19Pcmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5ib3hJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIk9yZ2FuaXNhdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b3Blbl9PcmcgPyA8RXhwYW5kTGVzcyAvPiA6IDxFeHBhbmRNb3JlIC8+fVxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17b3Blbl9Pcmd9IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdCBjbGFzc05hbWU9XCJzdWJfbWVudV9pdGVtX21vYmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QgY29tcG9uZW50PVwiZGl2XCIgZGlzYWJsZVBhZGRpbmc+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc19uZXN0ZWRfbGlzdC5uZXN0ZWR9IG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9vdXItdmFsdWVzYH0gaHJlZj1cIi9vdXItdmFsdWVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJPdXIgVmFsdWVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc19uZXN0ZWRfbGlzdC5uZXN0ZWR9IG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9vdXItaW5zcGlyYXRpb25gfSBocmVmPVwiL291ci1pbnNwaXJhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiT3VyIEluc3BpcmF0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc19uZXN0ZWRfbGlzdC5uZXN0ZWR9IG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9pbmMtY29uc3RpdHV0aW9uYH0gaHJlZj1cIi9pbmMtY29uc3RpdHV0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJJbmMgQ29uc3RpdHV0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc19uZXN0ZWRfbGlzdC5uZXN0ZWR9IG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9vdXItYWNoaWV2ZW1lbnRzYH0gaHJlZj1cIi9vdXItYWNoaWV2ZW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJPdXIgQWNoaWV2ZW1lbnRzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc19uZXN0ZWRfbGlzdC5uZXN0ZWR9IG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9vdXItcG9saWNpZXNgfSBocmVmPVwiL291ci1wb2xpY2llc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiT3VyIFBvbGljaWVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc19uZXN0ZWRfbGlzdC5uZXN0ZWR9IG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC91cGFgfSBocmVmPVwiL3VwYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiVVBBXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc19uZXN0ZWRfbGlzdC5uZXN0ZWR9IG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9sZWFkZXJzaGlwL3NtdC1zb25pYS1nYW5kaGlgfSBocmVmPVwiL2xlYWRlcnNoaXAvc210LXNvbmlhLWdhbmRoaVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiU210LiBTb25pYSBHYW5kaGlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzX25lc3RlZF9saXN0Lm5lc3RlZH0gb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2B9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQYXN0IFBhcnR5IFByZXNpZGVudHNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzX25lc3RlZF9saXN0Lm5lc3RlZH0gb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2luYy1zZXNzaW9uc2B9IGhyZWY9XCIvaW5jLXNlc3Npb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJJTkMgU2Vzc2lvbnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9IG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENlbnRlckZvY3VzU3Ryb25nSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9pbi1mb2N1c2B9IGhyZWY9XCIvaW4tZm9jdXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJJbiBGb2N1c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrX1ZvaWNlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXJJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlZvaWNlIG9mIHRoZSBOYXRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge29wZW5fVm9pY2UgPyA8RXhwYW5kTGVzcyAvPiA6IDxFeHBhbmRNb3JlIC8+fVxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17b3Blbl9Wb2ljZX0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0IGNsYXNzTmFtZT1cInN1Yl9tZW51X2l0ZW1fbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzX25lc3RlZF9saXN0Lm5lc3RlZH0gb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2B9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJDb25ncmVzcyBTYW5kZXNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc19uZXN0ZWRfbGlzdC5uZXN0ZWR9IG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9gfSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQSBCaWxsaW9uICYgT25lIFZvaWNlc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXNfbmVzdGVkX2xpc3QubmVzdGVkfSBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9IG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYH0gaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkZhY3QgQ2hlY2tzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc19uZXN0ZWRfbGlzdC5uZXN0ZWR9IG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0gb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9gfSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiSW5kaWEgQXQgNzBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9IG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoZWF0ZXJzSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9gfSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIk1lZGlhXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfSBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXYkluY2FuZGVzY2VudEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYH0gaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJKb2luIHRoZSBNb3ZlbWVudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8L0xpc3Q+XG5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIC8vIFdlYiBTdWIgTWVudSBTdGFydFxuXG4gICAgY29uc3QgW29wZW5fa2V5aXNzdWUsIHNldE9wZW5fa2V5aXNzdWVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtvcGVuX09yZ2FuaXNhdGlvbiwgc2V0T3Blbl9PcmdhbmlzYXRpb25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtvcGVuX3ZvaWNlb2ZuYXRpb24sIHNldE9wZW5fdm9pY2VvZm5hdGlvbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBhbmNob3JSZWZfa2V5aXNzdWUgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgY29uc3QgYW5jaG9yUmVmX09yZ2FuaXNhdGlvbiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBjb25zdCBhbmNob3JSZWZfdm9pY2VvZm5hdGlvbiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZV9rZXlpc3N1ZSA9ICgpID0+IHtcbiAgICAgICAgc2V0T3Blbl9rZXlpc3N1ZSgocHJldk9wZW4pID0+ICFwcmV2T3Blbik7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZV9PcmdhbmlzYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIHNldE9wZW5fT3JnYW5pc2F0aW9uKChwcmV2T3BlbikgPT4gIXByZXZPcGVuKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlX3ZvaWNlb2ZuYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIHNldE9wZW5fdm9pY2VvZm5hdGlvbigocHJldk9wZW4pID0+ICFwcmV2T3Blbik7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNsb3NlX2tleWlzc3VlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChhbmNob3JSZWZfa2V5aXNzdWUuY3VycmVudCAmJiBhbmNob3JSZWZfa2V5aXNzdWUuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0T3Blbl9rZXlpc3N1ZShmYWxzZSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVDbG9zZV9PcmdhbmlzYXRpb24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGFuY2hvclJlZl9PcmdhbmlzYXRpb24uY3VycmVudCAmJiBhbmNob3JSZWZfT3JnYW5pc2F0aW9uLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldE9wZW5fT3JnYW5pc2F0aW9uKGZhbHNlKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUNsb3NlX3ZvaWNlb2ZuYXRpb24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGFuY2hvclJlZl92b2ljZW9mbmF0aW9uLmN1cnJlbnQgJiYgYW5jaG9yUmVmX3ZvaWNlb2ZuYXRpb24uY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0T3Blbl92b2ljZW9mbmF0aW9uKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlTGlzdEtleURvd25fS2V5SXNzdWUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ1RhYicpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXRPcGVuX2tleWlzc3VlKGZhbHNlKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTGlzdEtleURvd25fT3JnYW5pc2F0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdUYWInKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0T3Blbl9PcmdhbmlzYXRpb24oZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTGlzdEtleURvd25fdm9pY2VvZm5hdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnVGFiJykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldE9wZW5fdm9pY2VvZm5hdGlvbihmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXZWIgU3ViIE1lbnUgRW5kc1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGxvYWRDU1MoXG4gICAgICAgICAgICAnaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyxcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb250LWF3ZXNvbWUtY3NzJyksXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9vdXRlcl9tYWluIGhlYWRlcl93ZWJcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX2JnX2JsdWVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9iZ193aGl0ZVwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfb3V0ZXJfbGVmdFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2xvZ28uanBnXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfb3V0ZXJfcmlnaHRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfb3V0ZXJfcmlnaHRfdG9wXCI+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsX21lZGlhX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0luZGlhbk5hdGlvbmFsQ29uZ3Jlc3NcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhIGZhLWZhY2Vib29rXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9JTkNJbmRpYVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmEgZmEtdHdpdHRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3VzZXIvaW5kaWFjb25ncmVzc1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiZmEgZmEteW91dHViZS1wbGF5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9pbmNpbmRpYS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhIGZhLWluc3RhZ3JhbVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaW4ubGlua2VkaW4uY29tL2NvbXBhbnkvaW5kaWFuLW5hdGlvbmFsLWNvbmdyZXNzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJmYSBmYS1saW5rZWRpblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsX21lZGlhX3JpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3aGl0ZVwiPntzdWJzY3JpYmV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndoaXRlXCI+e21hbmlmZXN0b308L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfb3V0ZXJfcmlnaHRfYm90dG9tXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUxpc3QgY2xhc3NOYW1lPVwiaGVhZGVyX25hdl9pdGVtXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYH0gaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57bmF2X2hvbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TWVudUl0ZW0gcmVmPXthbmNob3JSZWZfa2V5aXNzdWV9IGFyaWEtY29udHJvbHM9e29wZW5fa2V5aXNzdWUgPyAnbWVudS1saXN0LWdyb3cnIDogdW5kZWZpbmVkfSBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZV9rZXlpc3N1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT4gS2V5IElzc3VlcyA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2tleS1pc3N1ZXNgfSBocmVmPVwiL2tleS1pc3N1ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57bmF2X2tleV9pc3N1ZXN9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSByZWY9e2FuY2hvclJlZl9PcmdhbmlzYXRpb259IGFyaWEtY29udHJvbHM9e29wZW5fT3JnYW5pc2F0aW9uID8gJ21lbnUtbGlzdC1ncm93MScgOiB1bmRlZmluZWR9IGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgb25DbGljaz17aGFuZGxlVG9nZ2xlX09yZ2FuaXNhdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57bmF2X09yZ2FuaXNhdGlvbn08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvaW4tZm9jdXNgfSBocmVmPVwiL2luLWZvY3VzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e25hdl9JbmZvY3VzfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gcmVmPXthbmNob3JSZWZfdm9pY2VvZm5hdGlvbn0gYXJpYS1jb250cm9scz17b3Blbl92b2ljZW9mbmF0aW9uID8gJ21lbnUtbGlzdC1ncm93MScgOiB1bmRlZmluZWR9IGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgb25DbGljaz17aGFuZGxlVG9nZ2xlX3ZvaWNlb2ZuYXRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e25hdl9Wb2ljZW9mdGhlTmF0aW9ufTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2B9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e25hdl9NZWRpYX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYH0gaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57bmF2X0pvaW50aGVNb3ZlbWVudH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVMaXN0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcHBlciBvcGVuPXtvcGVuX2tleWlzc3VlfSBhbmNob3JFbD17YW5jaG9yUmVmX2tleWlzc3VlLmN1cnJlbnR9IHJvbGU9e3VuZGVmaW5lZH0gdHJhbnNpdGlvbiBkaXNhYmxlUG9ydGFsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgVHJhbnNpdGlvblByb3BzLCBwbGFjZW1lbnQgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyb3cgey4uLlRyYW5zaXRpb25Qcm9wc30gc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiBwbGFjZW1lbnQgPT09ICdib3R0b20nID8gJ2NlbnRlciB0b3AnIDogJ2NlbnRlciBib3R0b20nIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbGlja0F3YXlMaXN0ZW5lciBvbkNsaWNrQXdheT17aGFuZGxlQ2xvc2Vfa2V5aXNzdWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVMaXN0IGF1dG9Gb2N1c0l0ZW09e29wZW5fa2V5aXNzdWV9IGlkPVwibWVudS1saXN0LWdyb3dcIiBvbktleURvd249e2hhbmRsZUxpc3RLZXlEb3duX0tleUlzc3VlfSBjbGFzc05hbWU9XCJzdWJfbWVudV9pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlX2tleWlzc3VlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2Ava2V5LWlzc3Vlcy9lY29ub215YH0gaHJlZj1cIi9rZXktaXNzdWVzL2Vjb25vbXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkVjb25vbXk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZV9rZXlpc3N1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2tleS1pc3N1ZXMvZm9yZWlnbi1wb2xpY3lgfSBocmVmPVwiL2tleS1pc3N1ZXMvZm9yZWlnbi1wb2xpY3lcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkZvcmVpZ24gUG9saWN5PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51TGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DbGlja0F3YXlMaXN0ZW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Hcm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wcGVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcHBlciBvcGVuPXtvcGVuX09yZ2FuaXNhdGlvbn0gYW5jaG9yRWw9e2FuY2hvclJlZl9PcmdhbmlzYXRpb24uY3VycmVudH0gcm9sZT17dW5kZWZpbmVkfSB0cmFuc2l0aW9uIGRpc2FibGVQb3J0YWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBUcmFuc2l0aW9uUHJvcHMsIHBsYWNlbWVudCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3Jvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5UcmFuc2l0aW9uUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiBwbGFjZW1lbnQgPT09ICdib3R0b20nID8gJ2NlbnRlciB0b3AnIDogJ2NlbnRlciBib3R0b20nIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xpY2tBd2F5TGlzdGVuZXIgb25DbGlja0F3YXk9e2hhbmRsZUNsb3NlX09yZ2FuaXNhdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUxpc3QgYXV0b0ZvY3VzSXRlbT17b3Blbl9PcmdhbmlzYXRpb259IGlkPVwibWVudS1saXN0LWdyb3cxXCIgb25LZXlEb3duPXtoYW5kbGVMaXN0S2V5RG93bl9PcmdhbmlzYXRpb259IGNsYXNzTmFtZT1cInN1Yl9tZW51X2l0ZW1cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZV9PcmdhbmlzYXRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9vdXItdmFsdWVzYH0gaHJlZj1cIi9vdXItdmFsdWVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57bmF2X091clZhbHVlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZV9PcmdhbmlzYXRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9vdXItaW5zcGlyYXRpb25gfSBocmVmPVwiL291ci1pbnNwaXJhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+T3VyIEluc3BpcmF0aW9uPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2VfT3JnYW5pc2F0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvaW5jLWNvbnN0aXR1dGlvbmB9IGhyZWY9XCIvaW5jLWNvbnN0aXR1dGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+SW5jIENvbnN0aXR1dGlvbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlX09yZ2FuaXNhdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL291ci1hY2hpZXZlbWVudHNgfSBocmVmPVwiL291ci1hY2hpZXZlbWVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPk91ciBBY2hpZXZlbWVudHM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2VfT3JnYW5pc2F0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2Avb3VyLXBvbGljaWVzYH0gaHJlZj1cIi9vdXItcG9saWNpZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPk91ciBQb2xpY2llczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2VfT3JnYW5pc2F0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvdXBhYH0gaHJlZj1cIi91cGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlVQQTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZV9PcmdhbmlzYXRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9sZWFkZXJzaGlwL3NtdC1zb25pYS1nYW5kaGlgfSBocmVmPVwiL2xlYWRlcnNoaXAvc210LXNvbmlhLWdhbmRoaVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+U210LiBTb25pYSBHYW5kaGk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlX09yZ2FuaXNhdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2B9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5QYXN0IFBhcnR5IFByZXNpZGVudHM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlX09yZ2FuaXNhdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2luYy1zZXNzaW9uc2B9IGhyZWY9XCIvaW5jLXNlc3Npb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5JTkMgU2Vzc2lvbnM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlX09yZ2FuaXNhdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2FpY2Mtb2ZmaWNlLWJlYXJlcnNgfSBocmVmPVwiL2FpY2Mtb2ZmaWNlLWJlYXJlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkFJQ0MgT2ZmaWNlIEJlYXJlcnM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPiAqL31cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51TGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DbGlja0F3YXlMaXN0ZW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Hcm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wcGVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcHBlciBvcGVuPXtvcGVuX3ZvaWNlb2ZuYXRpb259IGFuY2hvckVsPXthbmNob3JSZWZfdm9pY2VvZm5hdGlvbi5jdXJyZW50fSByb2xlPXt1bmRlZmluZWR9IHRyYW5zaXRpb24gZGlzYWJsZVBvcnRhbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IFRyYW5zaXRpb25Qcm9wcywgcGxhY2VtZW50IH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcm93IHsuLi5UcmFuc2l0aW9uUHJvcHN9IHN0eWxlPXt7IHRyYW5zZm9ybU9yaWdpbjogcGxhY2VtZW50ID09PSAnYm90dG9tJyA/ICdjZW50ZXIgdG9wJyA6ICdjZW50ZXIgYm90dG9tJyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xpY2tBd2F5TGlzdGVuZXIgb25DbGlja0F3YXk9e2hhbmRsZUNsb3NlX3ZvaWNlb2ZuYXRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVMaXN0IGF1dG9Gb2N1c0l0ZW09e29wZW5fdm9pY2VvZm5hdGlvbn0gaWQ9XCJtZW51LWxpc3QtZ3Jvd1wiIG9uS2V5RG93bj17aGFuZGxlTGlzdEtleURvd25fdm9pY2VvZm5hdGlvbn0gY2xhc3NOYW1lPVwic3ViX21lbnVfaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZV92b2ljZW9mbmF0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYH0gaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntuYXZfQ29uZ3Jlc3NTYW5kZXNofTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlX3ZvaWNlb2ZuYXRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9gfSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+QSBCaWxsaW9uICYgT25lIFZvaWNlczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2Vfdm9pY2VvZm5hdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2B9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5GYWN0IENoZWNrczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2Vfdm9pY2VvZm5hdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2B9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5JbmRpYSBBdCA3MDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+ICovfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2xpY2tBd2F5TGlzdGVuZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BvcHBlcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfbW9iaWxlXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7WydsZWZ0J10ubWFwKChhbmNob3IpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2FuY2hvcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYXdlciBhbmNob3I9e2FuY2hvcn0gb3Blbj17c3RhdGVbYW5jaG9yXX0gb25DbG9zZT17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3QoYW5jaG9yKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYXdlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIGNsYXNzTmFtZT17Y2xhc3Nlc19tb2JpbGVfbWVudS5yb290fSAqL31cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwic3RhcnRcIiBjbGFzc05hbWU9e2NsYXNzZXNfbW9iaWxlX21lbnUubWVudUJ1dHRvbn0gY29sb3I9XCJpbmhlcml0XCIgYXJpYS1sYWJlbD1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcignbGVmdCcsIHRydWUpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9mbGV4XzEgbW9iaWxlX2xvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9sb2dvLmpwZ1wiPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgICAgICAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9