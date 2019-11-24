module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ASUS\\Desktop\\Calibrapps Lab\\CL FrontEnd\\cl-landing\\components\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Footer = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  className: "footer_top",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: "footer_top_inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  className: "col-lg-4 col-md-6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: "widgets_container contact_us",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("div", {
  className: "footer_contact",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("div", {
  className: "logo",
  align: "center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("a", {
  href: "index.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/assets/img/logo/logo_eba.png",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}))), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "PT. Era Baru Akurasindo adalah laboratorium kalibrasi / jasa kalibrasi alat ukur yang telah diakreditasi oleh Komite Akreditasi Nasional (KAN) dengan nomor akreditasi LK 106 IDN. Dalam penerapan Sistem Manajemen, laboratorium mengacu pada persyaratan ISO/IEC 17025."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "Alamat")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, " Jl. Muchtar Bintang Metropol Blok A 11 No. 35 Bekasi Jawa Barat 17122")))), __jsx("div", {
  className: "col-lg-4 col-md-6 col-sm-6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("div", {
  className: "widgets_container widget_menu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("div", {
  className: "footer_contact",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, "No. Telp")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "021 8897 3171 (Marketing 1) ", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}), "021 8888 1912 (Marketing 2)"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "No. Handphone")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, "0812 9581 1316 (Marketing 1) ", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), "0812 1245 6167 (Marketing 2) ", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}), "0812 8869 1429 (Marketing 3)"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, "Email")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, "marketing_eba@yahoo.co.id ", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}), "kalibrasi_eba@yahoo.co.id ", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}), "eba.pemasaran2@yahoo.com ", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}), "jeflesmoonra@yahoo.co.id ", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}), "naziyya@yahoo.co.id")))), __jsx("div", {
  className: "col-lg-4 col-md-6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, __jsx("div", {
  className: "widgets_container newsletter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, "Ikuti Kami"), __jsx("div", {
  className: "footer_social_link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, __jsx("a", {
  className: "facebook",
  href: "#",
  title: "Facebook",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-facebook",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, __jsx("a", {
  className: "twitter",
  href: "#",
  title: "Twitter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-twitter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, __jsx("a", {
  className: "instagram",
  href: "#",
  title: "instagram",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-instagram",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, __jsx("a", {
  className: "linkedin",
  href: "#",
  title: "linkedin",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-linkedin",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx("a", {
  className: "rss",
  href: "#",
  title: "rss",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-rss",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}))))), __jsx("div", {
  className: "subscribe_form",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, "Dapatkan Kabar"), __jsx("form", {
  id: "mc-form",
  className: "mc-form footer-newsletter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, __jsx("input", {
  id: "mc-email",
  type: "email",
  autoComplete: "off",
  placeholder: "Masukkan email anda",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}), __jsx("button", {
  id: "mc-submit",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, "Langganan !")), __jsx("div", {
  className: "mailchimp-alerts text-centre",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, __jsx("div", {
  className: "mailchimp-submitting",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}), __jsx("div", {
  className: "mailchimp-success",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}), __jsx("div", {
  className: "mailchimp-error",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}))))))))), __jsx("div", {
  className: "footer_bottom",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}, __jsx("div", {
  className: "row align-items-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
}, __jsx("div", {
  className: "col-lg-6 col-md-6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}, __jsx("div", {
  className: "copyright_area",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}, "Copyright \xA9 2019 ", __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}, "PT. Era Baru Akurasindo"), "  All Right Reserved."))), __jsx("div", {
  className: "col-lg-6 col-md-6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88
  },
  __self: undefined
}, __jsx("div", {
  className: "footer_payment text-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/assets/img/icon/payment.png",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}))))))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ASUS\\Desktop\\Calibrapps Lab\\CL FrontEnd\\cl-landing\\components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Header = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  className: "header_middle middle_two",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: "row align-items-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  className: "col-lg-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: "logo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("a", {
  href: "index.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/assets/img/logo/logo_eba.png",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
})))), __jsx("div", {
  className: "col-lg-9",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("div", {
  className: "main_menu menu_two menu_position text-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("nav", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("a", {
  className: "active",
  href: "index.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "home", __jsx("i", {
  className: "fa fa-angle-down",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
})), __jsx("ul", {
  className: "sub_menu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("a", {
  href: "index.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "Jasa")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx("a", {
  href: "index-2.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "Info")))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("a", {
  href: "shop.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "produk", __jsx("i", {
  className: "fa fa-angle-down",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
})), __jsx("ul", {
  className: "sub_menu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("a", {
  href: "shop-fullwidth.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "Ruang Lingkup")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("a", {
  href: "shop-fullwidth-list.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, "List Alat")))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("a", {
  href: "contact.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "profile"))))))))));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/RuangLingkup.js":
/*!************************************!*\
  !*** ./components/RuangLingkup.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ASUS\\Desktop\\Calibrapps Lab\\CL FrontEnd\\cl-landing\\components\\RuangLingkup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const RuangLingkup = () => __jsx("section", {
  className: "product_area mb-46",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: "col-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: "section_title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Ruang Lingkup")))), __jsx("div", {
  className: "product_carousel product_column5 owl-carousel",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("article", {
  className: "single_product",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("figure", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("div", {
  className: "product_thumb",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("a", {
  className: "primary_img",
  href: "product-countdown.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/assets/img/product/product1.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
})), __jsx("a", {
  className: "secondary_img",
  href: "product-countdown.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/assets/img/product/product2.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
})), __jsx("div", {
  className: "label_product",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("span", {
  className: "label_sale",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "sale")), __jsx("div", {
  className: "action_links",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("li", {
  className: "wishlist",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("a", {
  href: "wishlist.html",
  title: "Add to Wishlist",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-heart-o",
  "aria-hidden": "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}))), __jsx("li", {
  className: "compare",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  title: "compare",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("span", {
  className: "ion-levels",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}))), __jsx("li", {
  className: "quick_button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  "data-toggle": "modal",
  "data-target": "#modal_box",
  title: "quick view",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "ion-ios-search-strong",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}))))), __jsx("div", {
  className: "add_to_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("a", {
  href: "cart.html",
  title: "add to cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "Add to cart")), __jsx("div", {
  className: "product_timing",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx("div", {
  "data-countdown": "2023/12/15",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}))), __jsx("figcaption", {
  className: "product_content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx("div", {
  className: "price_box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx("span", {
  className: "old_price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, "$86.00"), __jsx("span", {
  className: "current_price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, "$79.00")), __jsx("h3", {
  className: "product_name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, __jsx("a", {
  href: "product-countdown.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, "Natus erro at congue massa commodo sit"))))), __jsx("article", {
  className: "single_product",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, __jsx("figure", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, __jsx("div", {
  className: "product_thumb",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, __jsx("a", {
  className: "primary_img",
  href: "product-countdown.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/assets/img/product/product3.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
})), __jsx("a", {
  className: "secondary_img",
  href: "product-countdown.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/assets/img/product/product4.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
})), __jsx("div", {
  className: "label_product",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx("span", {
  className: "label_sale",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, "sale")), __jsx("div", {
  className: "action_links",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, __jsx("li", {
  className: "wishlist",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, __jsx("a", {
  href: "wishlist.html",
  title: "Add to Wishlist",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-heart-o",
  "aria-hidden": "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}))), __jsx("li", {
  className: "compare",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  title: "compare",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx("span", {
  className: "ion-levels",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}))), __jsx("li", {
  className: "quick_button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  "data-toggle": "modal",
  "data-target": "#modal_box",
  title: "quick view",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "ion-ios-search-strong",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}))))), __jsx("div", {
  className: "add_to_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, __jsx("a", {
  href: "cart.html",
  title: "add to cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, "Add to cart")), __jsx("div", {
  className: "product_timing",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, __jsx("div", {
  "data-countdown": "2023/12/15",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}))), __jsx("figcaption", {
  className: "product_content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, __jsx("div", {
  className: "price_box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}, __jsx("span", {
  className: "old_price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, "$86.00"), __jsx("span", {
  className: "current_price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}, "$79.00")), __jsx("h3", {
  className: "product_name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}, __jsx("a", {
  href: "product-countdown.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}, "Itaque earum velit elementum"))))), __jsx("article", {
  className: "single_product",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}, __jsx("figure", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}, __jsx("div", {
  className: "product_thumb",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}, __jsx("a", {
  className: "primary_img",
  href: "product-countdown.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/assets/img/product/product5.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77
  },
  __self: undefined
})), __jsx("a", {
  className: "secondary_img",
  href: "product-countdown.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/assets/img/product/product6.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
})), __jsx("div", {
  className: "label_product",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
}, __jsx("span", {
  className: "label_sale",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}, "sale")), __jsx("div", {
  className: "action_links",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}, __jsx("li", {
  className: "wishlist",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}, __jsx("a", {
  href: "wishlist.html",
  title: "Add to Wishlist",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-heart-o",
  "aria-hidden": "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}))), __jsx("li", {
  className: "compare",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  title: "compare",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}, __jsx("span", {
  className: "ion-levels",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}))), __jsx("li", {
  className: "quick_button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  "data-toggle": "modal",
  "data-target": "#modal_box",
  title: "quick view",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "ion-ios-search-strong",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}))))), __jsx("div", {
  className: "add_to_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89
  },
  __self: undefined
}, __jsx("a", {
  href: "cart.html",
  title: "add to cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}, "Add to cart")), __jsx("div", {
  className: "product_timing",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92
  },
  __self: undefined
}, __jsx("div", {
  "data-countdown": "2023/12/15",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93
  },
  __self: undefined
}))), __jsx("figcaption", {
  className: "product_content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: undefined
}, __jsx("div", {
  className: "price_box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97
  },
  __self: undefined
}, __jsx("span", {
  className: "old_price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
}, "$86.00"), __jsx("span", {
  className: "current_price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99
  },
  __self: undefined
}, "$79.00")), __jsx("h3", {
  className: "product_name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  },
  __self: undefined
}, __jsx("a", {
  href: "product-countdown.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  },
  __self: undefined
}, "Mauris tincidunt eros posuere placerat"))))), __jsx("article", {
  className: "single_product",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}, __jsx("figure", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106
  },
  __self: undefined
}, __jsx("div", {
  className: "product_thumb",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107
  },
  __self: undefined
}, __jsx("a", {
  className: "primary_img",
  href: "product-countdown.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/assets/img/product/product7.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108
  },
  __self: undefined
})), __jsx("a", {
  className: "secondary_img",
  href: "product-countdown.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/assets/img/product/product8.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109
  },
  __self: undefined
})), __jsx("div", {
  className: "label_product",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110
  },
  __self: undefined
}, __jsx("span", {
  className: "label_sale",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111
  },
  __self: undefined
}, "sale")), __jsx("div", {
  className: "action_links",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114
  },
  __self: undefined
}, __jsx("li", {
  className: "wishlist",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115
  },
  __self: undefined
}, __jsx("a", {
  href: "wishlist.html",
  title: "Add to Wishlist",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-heart-o",
  "aria-hidden": "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115
  },
  __self: undefined
}))), __jsx("li", {
  className: "compare",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  title: "compare",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116
  },
  __self: undefined
}, __jsx("span", {
  className: "ion-levels",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116
  },
  __self: undefined
}))), __jsx("li", {
  className: "quick_button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  "data-toggle": "modal",
  "data-target": "#modal_box",
  title: "quick view",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "ion-ios-search-strong",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117
  },
  __self: undefined
}))))), __jsx("div", {
  className: "add_to_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120
  },
  __self: undefined
}, __jsx("a", {
  href: "cart.html",
  title: "add to cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121
  },
  __self: undefined
}, "Add to cart")), __jsx("div", {
  className: "product_timing",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 123
  },
  __self: undefined
}, __jsx("div", {
  "data-countdown": "2023/12/15",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 124
  },
  __self: undefined
}))), __jsx("figcaption", {
  className: "product_content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127
  },
  __self: undefined
}, __jsx("div", {
  className: "price_box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 128
  },
  __self: undefined
}, __jsx("span", {
  className: "old_price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 129
  },
  __self: undefined
}, "$86.00"), __jsx("span", {
  className: "current_price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 130
  },
  __self: undefined
}, "$79.00")), __jsx("h3", {
  className: "product_name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 132
  },
  __self: undefined
}, __jsx("a", {
  href: "product-countdown.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 132
  },
  __self: undefined
}, "Morbi ornare vestibulum massa"))))), __jsx("article", {
  className: "single_product",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136
  },
  __self: undefined
}, __jsx("figure", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137
  },
  __self: undefined
}, __jsx("div", {
  className: "product_thumb",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 138
  },
  __self: undefined
}, __jsx("a", {
  className: "primary_img",
  href: "product-countdown.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 139
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/assets/img/product/product9.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 139
  },
  __self: undefined
})), __jsx("a", {
  className: "secondary_img",
  href: "product-countdown.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 140
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/assets/img/product/product10.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 140
  },
  __self: undefined
})), __jsx("div", {
  className: "label_product",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 141
  },
  __self: undefined
}, __jsx("span", {
  className: "label_sale",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 142
  },
  __self: undefined
}, "sale")), __jsx("div", {
  className: "action_links",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 144
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 145
  },
  __self: undefined
}, __jsx("li", {
  className: "wishlist",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146
  },
  __self: undefined
}, __jsx("a", {
  href: "wishlist.html",
  title: "Add to Wishlist",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-heart-o",
  "aria-hidden": "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146
  },
  __self: undefined
}))), __jsx("li", {
  className: "compare",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  title: "compare",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147
  },
  __self: undefined
}, __jsx("span", {
  className: "ion-levels",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147
  },
  __self: undefined
}))), __jsx("li", {
  className: "quick_button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 148
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  "data-toggle": "modal",
  "data-target": "#modal_box",
  title: "quick view",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 148
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "ion-ios-search-strong",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 148
  },
  __self: undefined
}))))), __jsx("div", {
  className: "add_to_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 151
  },
  __self: undefined
}, __jsx("a", {
  href: "cart.html",
  title: "add to cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 152
  },
  __self: undefined
}, "Add to cart")), __jsx("div", {
  className: "product_timing",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 154
  },
  __self: undefined
}, __jsx("div", {
  "data-countdown": "2023/12/15",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 155
  },
  __self: undefined
}))), __jsx("figcaption", {
  className: "product_content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 158
  },
  __self: undefined
}, __jsx("div", {
  className: "price_box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 159
  },
  __self: undefined
}, __jsx("span", {
  className: "old_price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 160
  },
  __self: undefined
}, "$86.00"), __jsx("span", {
  className: "current_price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 161
  },
  __self: undefined
}, "$79.00")), __jsx("h3", {
  className: "product_name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 163
  },
  __self: undefined
}, __jsx("a", {
  href: "product-countdown.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 163
  },
  __self: undefined
}, "Porro quisquam eget feugiat pretium"))))), __jsx("article", {
  className: "single_product",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 167
  },
  __self: undefined
}, __jsx("figure", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 168
  },
  __self: undefined
}, __jsx("div", {
  className: "product_thumb",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 169
  },
  __self: undefined
}, __jsx("a", {
  className: "primary_img",
  href: "product-countdown.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 170
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/assets/img/product/product11.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 170
  },
  __self: undefined
})), __jsx("a", {
  className: "secondary_img",
  href: "product-countdown.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 171
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/assets/img/product/product12.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 171
  },
  __self: undefined
})), __jsx("div", {
  className: "label_product",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 172
  },
  __self: undefined
}, __jsx("span", {
  className: "label_sale",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 173
  },
  __self: undefined
}, "sale")), __jsx("div", {
  className: "action_links",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 175
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 176
  },
  __self: undefined
}, __jsx("li", {
  className: "wishlist",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 177
  },
  __self: undefined
}, __jsx("a", {
  href: "wishlist.html",
  title: "Add to Wishlist",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 177
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-heart-o",
  "aria-hidden": "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 177
  },
  __self: undefined
}))), __jsx("li", {
  className: "compare",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 178
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  title: "compare",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 178
  },
  __self: undefined
}, __jsx("span", {
  className: "ion-levels",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 178
  },
  __self: undefined
}))), __jsx("li", {
  className: "quick_button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 179
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  "data-toggle": "modal",
  "data-target": "#modal_box",
  title: "quick view",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 179
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "ion-ios-search-strong",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 179
  },
  __self: undefined
}))))), __jsx("div", {
  className: "add_to_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 182
  },
  __self: undefined
}, __jsx("a", {
  href: "cart.html",
  title: "add to cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 183
  },
  __self: undefined
}, "Add to cart")), __jsx("div", {
  className: "product_timing",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 185
  },
  __self: undefined
}, __jsx("div", {
  "data-countdown": "2023/12/15",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 186
  },
  __self: undefined
}))), __jsx("figcaption", {
  className: "product_content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 189
  },
  __self: undefined
}, __jsx("div", {
  className: "price_box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 190
  },
  __self: undefined
}, __jsx("span", {
  className: "old_price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 191
  },
  __self: undefined
}, "$86.00"), __jsx("span", {
  className: "current_price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 192
  },
  __self: undefined
}, "$79.00")), __jsx("h3", {
  className: "product_name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 194
  },
  __self: undefined
}, __jsx("a", {
  href: "product-countdown.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 194
  },
  __self: undefined
}, "Laudantium enim fringilla dignissim ipsum primis"))))), __jsx("article", {
  className: "single_product",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 198
  },
  __self: undefined
}, __jsx("figure", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 199
  },
  __self: undefined
}, __jsx("div", {
  className: "product_thumb",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 200
  },
  __self: undefined
}, __jsx("a", {
  className: "primary_img",
  href: "product-countdown.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 201
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/assets/img/product/product4.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 201
  },
  __self: undefined
})), __jsx("a", {
  className: "secondary_img",
  href: "product-countdown.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 202
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/assets/img/product/product5.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 202
  },
  __self: undefined
})), __jsx("div", {
  className: "label_product",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 203
  },
  __self: undefined
}, __jsx("span", {
  className: "label_sale",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 204
  },
  __self: undefined
}, "sale")), __jsx("div", {
  className: "action_links",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 206
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 207
  },
  __self: undefined
}, __jsx("li", {
  className: "wishlist",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 208
  },
  __self: undefined
}, __jsx("a", {
  href: "wishlist.html",
  title: "Add to Wishlist",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 208
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-heart-o",
  "aria-hidden": "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 208
  },
  __self: undefined
}))), __jsx("li", {
  className: "compare",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 209
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  title: "compare",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 209
  },
  __self: undefined
}, __jsx("span", {
  className: "ion-levels",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 209
  },
  __self: undefined
}))), __jsx("li", {
  className: "quick_button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 210
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  "data-toggle": "modal",
  "data-target": "#modal_box",
  title: "quick view",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 210
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "ion-ios-search-strong",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 210
  },
  __self: undefined
}))))), __jsx("div", {
  className: "add_to_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 213
  },
  __self: undefined
}, __jsx("a", {
  href: "cart.html",
  title: "add to cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 214
  },
  __self: undefined
}, "Add to cart")), __jsx("div", {
  className: "product_timing",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 216
  },
  __self: undefined
}, __jsx("div", {
  "data-countdown": "2023/12/15",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 217
  },
  __self: undefined
}))), __jsx("figcaption", {
  className: "product_content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 220
  },
  __self: undefined
}, __jsx("div", {
  className: "price_box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 221
  },
  __self: undefined
}, __jsx("span", {
  className: "old_price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 222
  },
  __self: undefined
}, "$86.00"), __jsx("span", {
  className: "current_price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 223
  },
  __self: undefined
}, "$79.00")), __jsx("h3", {
  className: "product_name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 225
  },
  __self: undefined
}, __jsx("a", {
  href: "product-countdown.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 225
  },
  __self: undefined
}, "Natus erro at congue massa commodo sit"))))))));

/* harmony default export */ __webpack_exports__["default"] = (RuangLingkup);

/***/ }),

/***/ "./components/SliderArea.js":
/*!**********************************!*\
  !*** ./components/SliderArea.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ASUS\\Desktop\\Calibrapps Lab\\CL FrontEnd\\cl-landing\\components\\SliderArea.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SliderArea = () => __jsx("section", {
  className: "slider_section slider_section_two mb-70",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  className: "slider_area owl-carousel",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  className: "single_slider d-flex align-items-center",
  "data-bgimg": "/static/assets/img/slider/slider1.jpg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  className: "col-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: "slider_content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "best skin"), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "qled 75 inch q7f"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "exclusive offer ", __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, " 20% off "), " this week"), __jsx("a", {
  className: "button",
  href: "shop.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "shopping now"))))))));

/* harmony default export */ __webpack_exports__["default"] = (SliderArea);

/***/ }),

/***/ "./components/StickyHeader.js":
/*!************************************!*\
  !*** ./components/StickyHeader.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ASUS\\Desktop\\Calibrapps Lab\\CL FrontEnd\\cl-landing\\components\\StickyHeader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const StickyHeader = () => __jsx("div", {
  className: "sticky_header_area sticky-header",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  className: "row align-items-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: "col-lg-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: "logo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("a", {
  href: "index.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/assets/img/logo/logo_eba.png",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
})))), __jsx("div", {
  className: "col-lg-9",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("div", {
  className: "sticky_header_right menu_position",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("div", {
  className: "main_menu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("nav", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("a", {
  className: "active",
  href: "index.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "home", __jsx("i", {
  className: "fa fa-angle-down",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
})), __jsx("ul", {
  className: "sub_menu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("a", {
  href: "index.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Jasa")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("a", {
  href: "index-2.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "Info")))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("a", {
  href: "shop.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "produk", __jsx("i", {
  className: "fa fa-angle-down",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
})), __jsx("ul", {
  className: "sub_menu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("a", {
  href: "shop-fullwidth.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, "Ruang Lingkup")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("a", {
  href: "shop-fullwidth-list.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "List Alat")))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("a", {
  href: "contact.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, "profile"))))))))));

/* harmony default export */ __webpack_exports__["default"] = (StickyHeader);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_StickyHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/StickyHeader */ "./components/StickyHeader.js");
/* harmony import */ var _components_SliderArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SliderArea */ "./components/SliderArea.js");
/* harmony import */ var _components_RuangLingkup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/RuangLingkup */ "./components/RuangLingkup.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "C:\\Users\\ASUS\\Desktop\\Calibrapps Lab\\CL FrontEnd\\cl-landing\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Index = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("meta", {
  charset: "utf-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx("meta", {
  "http-equiv": "x-ua-compatible",
  content: "ie=edge",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Era Baru Akurasindo"), __jsx("meta", {
  name: "description",
  content: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx("link", {
  rel: "shortcut icon",
  type: "image/x-icon",
  href: "/static/assets/img/favicon.ico",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "/static/assets/css/plugins.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "/static/assets/css/style.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
})), __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), __jsx(_components_StickyHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), __jsx(_components_SliderArea__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}), __jsx(_components_RuangLingkup__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
})), __jsx("script", {
  src: "/static/assets/js/plugins.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}), __jsx("script", {
  src: "/static/assets/js/main.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ASUS\Desktop\Calibrapps Lab\CL FrontEnd\cl-landing\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map