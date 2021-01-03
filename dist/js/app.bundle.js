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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blog-entry.html":
/*!*****************************!*\
  !*** ./src/blog-entry.html ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!DOCTYPE html>\\r\\n<html>\\r\\n    <head>\\r\\n    <meta charset=\\\"UTF-8\\\" />\\r\\n    <link href=\\\"/style.css\\\" rel=\\\"stylesheet\\\"></head>\\r\\n    <bodu>\\r\\n        <nav>\\r\\n\\r\\n        </nav>\\r\\n        <main>\\r\\n            \\r\\n        </main>\\r\\n    </bodu>\\r\\n</html>\";\n\n//# sourceURL=webpack:///./src/blog-entry.html?");

/***/ }),

/***/ "./src/blog.html":
/*!***********************!*\
  !*** ./src/blog.html ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!DOCTYPE html>\\n<html>\\n    <head>\\n    <meta charset=\\\"UTF-8\\\" />\\n    <link href=\\\"/style.css\\\" rel=\\\"stylesheet\\\"></head>\\n    <bodu>\\n        <nav>\\n\\n        </nav>\\n        <main>\\n            \\n        </main>\\n    </bodu>\\n</html>\";\n\n//# sourceURL=webpack:///./src/blog.html?");

/***/ }),

/***/ "./src/images/decor/A.png":
/*!********************************!*\
  !*** ./src/images/decor/A.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/A.png\";\n\n//# sourceURL=webpack:///./src/images/decor/A.png?");

/***/ }),

/***/ "./src/images/decor/L.png":
/*!********************************!*\
  !*** ./src/images/decor/L.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAB7CAYAAAAi/U30AAABLElEQVR4nO3dsQkCQRBA0VmxIes0slQLkLOAe+kKh/+FEyzDh4l3HcdxzAZrrbXj3V+4XXXxnYoCRYGiQFGgKFAUKAoUBYoCRYGiQFGgKFAUKAoUBYoCRYGiQFGgKFAUKAoUBYoCRYGiQFGgKFAUKAoUBYoCRYGiQFGgKFAUKAoUBYoCRYGiQFGgKFAUKAoUBYoCRYGiQFGgKFAUKAoUBYoCRYGiQFGgKFAUKAoUBYoCRYGiQFGgKFAUKAoUBYoCRYGiQFGgKFAUKAoUBYoCRYGiQFGgKFAUKAoUBYoCRYGiQFGgKFAUKAoUBYoCRYGiQFGgKLDty72ZeZ0m1/DcGeWqHp0PFAWKAkWBokBRoChQFCgKFAWKAkWBokBRoChQFCgK3GfmfR7/sZnPF9HsECmK+TlzAAAAAElFTkSuQmCC\"\n\n//# sourceURL=webpack:///./src/images/decor/L.png?");

/***/ }),

/***/ "./src/images/decor/O1.png":
/*!*********************************!*\
  !*** ./src/images/decor/O1.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/O1.png\";\n\n//# sourceURL=webpack:///./src/images/decor/O1.png?");

/***/ }),

/***/ "./src/images/decor/O2.png":
/*!*********************************!*\
  !*** ./src/images/decor/O2.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/O2.png\";\n\n//# sourceURL=webpack:///./src/images/decor/O2.png?");

/***/ }),

/***/ "./src/images/decor/R.png":
/*!********************************!*\
  !*** ./src/images/decor/R.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/R.png\";\n\n//# sourceURL=webpack:///./src/images/decor/R.png?");

/***/ }),

/***/ "./src/images/decor/S1.png":
/*!*********************************!*\
  !*** ./src/images/decor/S1.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/S1.png\";\n\n//# sourceURL=webpack:///./src/images/decor/S1.png?");

/***/ }),

/***/ "./src/images/decor/S2.png":
/*!*********************************!*\
  !*** ./src/images/decor/S2.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/S2.png\";\n\n//# sourceURL=webpack:///./src/images/decor/S2.png?");

/***/ }),

/***/ "./src/images/decor/T.png":
/*!********************************!*\
  !*** ./src/images/decor/T.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAB7CAYAAAAITbxbAAABWklEQVR4nO3ZsY0CQAwAQd+LhuiAkv4rIaEhCiGkjkP6lJABkp3QieWVLrq19/6dmfPkVcefEjrFhIoJFRMqJlRMqJhQMaFiQsWEigkVEyomVEyomFAxoWJCxYQOM3Odmb8v7H7XV8ltZi5P0/e7ry8s/bf33k9D47rWOn36numZW8WEigkVEyomVEyomFAxoWJCxYSKCRUTKiZUTKiYUDGhYkLFhIoJFRMqJlRMqJhQMaFiQsWEigkVEyomVEyomFAxoWJCxYSKCRUTKiZUTKiYUDGhYkLFhIoJFRMqJlRMqJhQMaFiQsWEigkVEyomVEyomFAxoWJCxYSKCRUTKiZUTKiYUDGhYkLFhIoJFRMqJlRMqJhQMaFiQsWEigkVEyomVEyomFAxoWJCxYSKCRUTKiZUTKiYUDGhYkLFhIoJFRMqJlRMqJhQMaFiQsWEigkVEyomVExlZh4Qng478ram/AAAAABJRU5ErkJggg==\"\n\n//# sourceURL=webpack:///./src/images/decor/T.png?");

/***/ }),

/***/ "./src/images/decor/W.png":
/*!********************************!*\
  !*** ./src/images/decor/W.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/W.png\";\n\n//# sourceURL=webpack:///./src/images/decor/W.png?");

/***/ }),

/***/ "./src/images/decor/caffee-decor.png":
/*!*******************************************!*\
  !*** ./src/images/decor/caffee-decor.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/caffee-decor.png\";\n\n//# sourceURL=webpack:///./src/images/decor/caffee-decor.png?");

/***/ }),

/***/ "./src/images/decor/co_to.png":
/*!************************************!*\
  !*** ./src/images/decor/co_to.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/co_to.png\";\n\n//# sourceURL=webpack:///./src/images/decor/co_to.png?");

/***/ }),

/***/ "./src/images/decor/decor2.png":
/*!*************************************!*\
  !*** ./src/images/decor/decor2.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/decor2.png\";\n\n//# sourceURL=webpack:///./src/images/decor/decor2.png?");

/***/ }),

/***/ "./src/images/decor/filozofia.png":
/*!****************************************!*\
  !*** ./src/images/decor/filozofia.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/filozofia.png\";\n\n//# sourceURL=webpack:///./src/images/decor/filozofia.png?");

/***/ }),

/***/ "./src/images/decor/hostia.png":
/*!*************************************!*\
  !*** ./src/images/decor/hostia.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/hostia.png\";\n\n//# sourceURL=webpack:///./src/images/decor/hostia.png?");

/***/ }),

/***/ "./src/images/decor/kropa1.png":
/*!*************************************!*\
  !*** ./src/images/decor/kropa1.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAYAAADFJfKzAAADjklEQVRogeWbXYhVVRTH/+sO9OWUIWpoEYWl8+RHaBAJSl/SSwWBL1H0UKAEgoiQDz0U9DAgVA/Wi/ioWOBTvURRTFFCURMVjmYkhaAVTTpCqekv1rTvdOauM/bhuXfO2fcHdy5373PmrN9d5957zl57m3oA0JK0SNJ1kuZIGpR0StIZfzazH3sRR+WySWy5pPWS1kpaJmmppCvCxn9zWtIRSV9KGpH0vpkdC1vVBWA18DJwgmr4GtgB3FwLRc8i8CjwaUWCZVwEDgBrQgA9FL0/vfu95C3g9hBMFyUXA2/0WLLIWeBF4MoQXMWiDwI/hcPPDp93JcuAAS/URLLIBPBwCPgyRAeAPeEw9eEC8FQI/H+KHqixaJGtQeA/iPqpuzv8y3rzRBD5l7LPNUzUOQ/cM5NT6eUicK+ktyW1Qmf9OSlppZmd+EdZYL6kryTd0EDRNu9IesDMKDaWZW644aLOfZIe72ycllngbkkfhl2bid82DpnZeDv6zswOZyLqLJS0rdgwlVnA7z/fC7s0Gx8guMXMflVHZp/NTNSZK2lT+8VkZoEbJf1Q9u2cAUfMzEdLpjL7WKaizlLgThVkN4ZN8mLSz4dV/Lxelbmsf/lOZnZ9yU9QbqwC5rnkHZmLKiVzhf8ZCl15MtRKg9j9wDKXXdAnsgtaqe7SDwy2UrGpH5jrshf7RPaCy06E5jyZaKXboH7glMse7xPZ4y57ODTnyWGXHesT2TGX/Tg058dvkr5w2YPpRc58ZGa/t8zsnKQPMpd9V4X72L2hOy/2qTDgNphqJNdkKDpiZuvUzqyZnWnbZ8jutlJxkPy29DM0kJHvt6kE8oeKY09mdlTS/rB5sxlui6qksOWzyQ5l8tkdlbSmKDttVNHMvpf0fNiteXhddnNRNMgmXpL0SWhtFq+Y2cHOiEtLHsCtkj6TdH3orD+eqLXpYmkaZZn10/m7VLlu2iiGF6A3lolqJln9JfympKdDR33xOcsbLjVPeUbZJLyns3pdU3xo6SEzG73s8IAn0xyjOnISqLaEA2wAfq6Z7CiwJARbkfBNwEg45OzwKnBVCLJiYZ+8+QwwPkuSYz6LPQTWZemFwGvAuRBOd/CP0HbgUqtIui69CNgJ/NIlyaPAFuDqcPDZwt9x4BHg9QrEjwG7gLuq1OnKDJnCQqb2IiZ/+CXotalq6Ku2plZsSfomPSYXMXVlAZOkPwGwMMpfAnTGBQAAAABJRU5ErkJggg==\"\n\n//# sourceURL=webpack:///./src/images/decor/kropa1.png?");

/***/ }),

/***/ "./src/images/decor/kropa2.png":
/*!*************************************!*\
  !*** ./src/images/decor/kropa2.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/kropa2.png\";\n\n//# sourceURL=webpack:///./src/images/decor/kropa2.png?");

/***/ }),

/***/ "./src/images/decor/kropa3.png":
/*!*************************************!*\
  !*** ./src/images/decor/kropa3.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAYAAADFJfKzAAADjklEQVRogeWbXYhVVRTH/+sO9OWUIWpoEYWl8+RHaBAJSl/SSwWBL1H0UKAEgoiQDz0U9DAgVA/Wi/ioWOBTvURRTFFCURMVjmYkhaAVTTpCqekv1rTvdOauM/bhuXfO2fcHdy5373PmrN9d5957zl57m3oA0JK0SNJ1kuZIGpR0StIZfzazH3sRR+WySWy5pPWS1kpaJmmppCvCxn9zWtIRSV9KGpH0vpkdC1vVBWA18DJwgmr4GtgB3FwLRc8i8CjwaUWCZVwEDgBrQgA9FL0/vfu95C3g9hBMFyUXA2/0WLLIWeBF4MoQXMWiDwI/hcPPDp93JcuAAS/URLLIBPBwCPgyRAeAPeEw9eEC8FQI/H+KHqixaJGtQeA/iPqpuzv8y3rzRBD5l7LPNUzUOQ/cM5NT6eUicK+ktyW1Qmf9OSlppZmd+EdZYL6kryTd0EDRNu9IesDMKDaWZW644aLOfZIe72ycllngbkkfhl2bid82DpnZeDv6zswOZyLqLJS0rdgwlVnA7z/fC7s0Gx8guMXMflVHZp/NTNSZK2lT+8VkZoEbJf1Q9u2cAUfMzEdLpjL7WKaizlLgThVkN4ZN8mLSz4dV/Lxelbmsf/lOZnZ9yU9QbqwC5rnkHZmLKiVzhf8ZCl15MtRKg9j9wDKXXdAnsgtaqe7SDwy2UrGpH5jrshf7RPaCy06E5jyZaKXboH7glMse7xPZ4y57ODTnyWGXHesT2TGX/Tg058dvkr5w2YPpRc58ZGa/t8zsnKQPMpd9V4X72L2hOy/2qTDgNphqJNdkKDpiZuvUzqyZnWnbZ8jutlJxkPy29DM0kJHvt6kE8oeKY09mdlTS/rB5sxlui6qksOWzyQ5l8tkdlbSmKDttVNHMvpf0fNiteXhddnNRNMgmXpL0SWhtFq+Y2cHOiEtLHsCtkj6TdH3orD+eqLXpYmkaZZn10/m7VLlu2iiGF6A3lolqJln9JfympKdDR33xOcsbLjVPeUbZJLyns3pdU3xo6SEzG73s8IAn0xyjOnISqLaEA2wAfq6Z7CiwJARbkfBNwEg45OzwKnBVCLJiYZ+8+QwwPkuSYz6LPQTWZemFwGvAuRBOd/CP0HbgUqtIui69CNgJ/NIlyaPAFuDqcPDZwt9x4BHg9QrEjwG7gLuq1OnKDJnCQqb2IiZ/+CXotalq6Ku2plZsSfomPSYXMXVlAZOkPwGwMMpfAnTGBQAAAABJRU5ErkJggg==\"\n\n//# sourceURL=webpack:///./src/images/decor/kropa3.png?");

/***/ }),

/***/ "./src/images/decor/palarnia-infografika.png":
/*!***************************************************!*\
  !*** ./src/images/decor/palarnia-infografika.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/palarnia-infografika.png\";\n\n//# sourceURL=webpack:///./src/images/decor/palarnia-infografika.png?");

/***/ }),

/***/ "./src/images/decor/piec-animacja-placeholder.png":
/*!********************************************************!*\
  !*** ./src/images/decor/piec-animacja-placeholder.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/piec-animacja-placeholder.png\";\n\n//# sourceURL=webpack:///./src/images/decor/piec-animacja-placeholder.png?");

/***/ }),

/***/ "./src/images/decor/rowno-waga.png":
/*!*****************************************!*\
  !*** ./src/images/decor/rowno-waga.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/rowno-waga.png\";\n\n//# sourceURL=webpack:///./src/images/decor/rowno-waga.png?");

/***/ }),

/***/ "./src/images/decor/stars.png":
/*!************************************!*\
  !*** ./src/images/decor/stars.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/stars.png\";\n\n//# sourceURL=webpack:///./src/images/decor/stars.png?");

/***/ }),

/***/ "./src/images/decor/wolno_żyć_wolno.png":
/*!**********************************************!*\
  !*** ./src/images/decor/wolno_żyć_wolno.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAADOElEQVR4nO2bi3EiMQyGrZs0kBZICXclpIW0sC3kSoASjhJICaQEKAFKgBJ8Y5Cyyup3sJcFdmf0zTBJLFsrK37IWhwS8cwuKNLfqTR0QHWFGOMsxriKMR5iS9IzjzE+mwYX9IG6Se/GCC7oKbYLKal1RFKoHrRTHymr7kCmbuItIzN6quxCSno44p1l/4AhG5a9gnZQH0I5wjg1p6fKLqSkhyN2LJsBWcOyOZBBfYj4nbcSPaV2/QLP68sxhLAnoj1ov+WfcJ2oZMvPei9sVmTXkI74bUoYIpIHmqnRg+TMZXoeWisARXYN6Yh7sqgcFReZpCOI6Fg5Ki4y1REReFTshxoVk3VEZ1Rc7QztiGNHdvpbbztoC1JsTUnbThasTyO8AiKSUdH8oKXILnHEh/Ys/5RKK9VWfl8arefVfJZxlujqOnsIki3omfV2cZQlYWcjMX2KxiQq47jcRGjCFZHlAQVCiIKgCcnq7ErDRMXfBxk2qjIMbTuKvwwCMf3KNDq3W4M28pl16l7qLJLV28UKd3rxUZ7b5E6Qqm6f0+czaCO8durCzoZ2VKyNoKddjuM4juM4vZAw+tbeU0HUILmEIbj7MZwjuTWn7VAe8SE8dR56vINxcvh54ZyCMyrU6Q/StTV38Mm9B1HyuToFfmEqPognzuCgpAUq6wXnApo7Tb3hSKt5Lv9QOyI4zyHH3tEeeXO7huQj/hpJPZJTWI55cTSO4L09Zac+iCiXbEUdQmVBTbFsEnWUqNQcfFXGgVDUL3RVqsykvXJTZuxOaHIdUnV00rNRuU64BkzVEZLUNB3q1JPOH2Am2OqcjiPU8DbfYUCkjqtwIPumaYqOKBoNoM2PnZyKI067Bv9H0+q+uMEW98nPgFNnLMj22fC3ShY3sEsiSbgLjQa1NmTneY7CqSGR5cUXRI+EOFye5c4ARPRiCttOntoSERnh93r6rKGn3pGI/pgGj6D29Nl1ROlCmDl9wld0juM4juM4zlRBmelc1IjqKplfZfKrTG25X2XS9dFXff0qU4tfZQp+lemm+FWmYC+t+FUmv8pkR4VfZfKrTC1+lUmV+1WmTmeRzK8yFdsVQvgPDADMnfi4DSgAAAAASUVORK5CYII=\"\n\n//# sourceURL=webpack:///./src/images/decor/wolno_%C5%BCy%C4%87_wolno.png?");

/***/ }),

/***/ "./src/images/decor/zdjecie-KA-WA.png":
/*!********************************************!*\
  !*** ./src/images/decor/zdjecie-KA-WA.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/zdjecie-KA-WA.png\";\n\n//# sourceURL=webpack:///./src/images/decor/zdjecie-KA-WA.png?");

/***/ }),

/***/ "./src/images/decor/znamy_się.png":
/*!****************************************!*\
  !*** ./src/images/decor/znamy_się.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAAqCAYAAADcSCf9AAADHElEQVRoge2agXXiMAxA5XsswAp0hKzAjcCNQEfIjQAj0BHoCNwIYYQyQjuC7iknX40tJTYkOS7Vf4/3WtmWbFkosgkY5SDiGyJi6cBvicQYjYW59iZeAGD5H877C+Hzj8Ap9gIi1lH/BhF3iJjsMiJuBd30/1byLuvx/d/JPulFxA3b8fKjYq/VnyuXQMSK7cZsI1tqzhZ8RPoq4DQifSVqAFjFzgOAHQBcAGDP4jX3pfHPieU/+L7UZwMAB0Q8O+fO4QRZj9ft+554Hl6+ZjnxI7F0PwcAIMe8sk3Pr8zN2rCPztE6jgDwJA3Y8Y5sIvmR5VUkfyuInC3r2EXyU6ybI7qNZsHelQyGi+ysvlpkBz5aBbJa8ic1rLnhICjSDIhyDWlBmo57+3bJJfxGSmkqc76NsLYVz6GOqxGfJn4mFm6ENlBIU4/KC/uAnEl/751zHwVzraL0A865C+/Lpw+09BG0a7upySuOEomHjGz4TF/hA3kn9Omag0btO/n0cUys9xvQ5A1/4gdtsvgOHZM7OxgXOr0umEPDY68+YaemL1d1GNDkqERFsvgeHbl9kwc1f7sSHbkE+TZ3DknODlnwrlGueS7MTzlcbZ6WogaCyq02GrlUW3KpOASXTB3Uj7LEUvLlgutbalhFkfjhnNvHAwqgBW85AEi/rzmTSQyEr/PXQc1+js8LXXDghQHigyOrzub6nMZQhL+yrN1059wTDPAQ0+RVkPNafVxnH8dIIxqSDg3hxNvE+bpvDrzGcN1/T8NJ57lxT86+Fb5maKTzypwdrR7SRrZbS5E/mytWLjFPnDcheEZAQc4diiXPiXL11LbHh8u07FvGCecyaQozDMMwjHkQnIIq29KR4dLF3wRm3y0YN8JHzne+RTMmiPADF+ZDXVV+afpeP/NHX3P2UHQdK7kteWHHKCfnxcqiC3hDJ8fZS3P2MLRXrM45N4O1PDz2fvaEmLMnJMfZHwU/5Rv3YKXfcLSRrdXZwclxfr+j/QP60oj/wfSctBi3IUU23/zZRdTY2BXrOGhpxOfq7/Qyd9JqlAMAvwH67RHh3lEaagAAAABJRU5ErkJggg==\"\n\n//# sourceURL=webpack:///./src/images/decor/znamy_si%C4%99.png?");

/***/ }),

/***/ "./src/images/gallery/profile-img1.png":
/*!*********************************************!*\
  !*** ./src/images/gallery/profile-img1.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/profile-img1.png\";\n\n//# sourceURL=webpack:///./src/images/gallery/profile-img1.png?");

/***/ }),

/***/ "./src/images/gallery/profile-img2.png":
/*!*********************************************!*\
  !*** ./src/images/gallery/profile-img2.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/profile-img2.png\";\n\n//# sourceURL=webpack:///./src/images/gallery/profile-img2.png?");

/***/ }),

/***/ "./src/images/icons/back.png":
/*!***********************************!*\
  !*** ./src/images/icons/back.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAARCAYAAABegLWFAAAAuUlEQVRIic3WrUpEYRSF4SWCwSIK0wSLwTuwmzVOnouYa5o61SJYNRu9BYuMKAjOI+h3DOfARL/95hVeNvsvu8A+VljuiP0/OMDaL1tcVBE7xG0T+8JiEuoBjnDfxD4xryJ2gscm9o7rSagHmOGpiW1wVUXsFM9N7BWXk1AH9nCe5C7JWZKPJOskL1XkHpKUqNSY0pX7oWrP/TGa1rcy0zqA49Geu5mEelL2QgyUva0DZb+Sga7/XJJvyd79WVCZ14oAAAAASUVORK5CYII=\"\n\n//# sourceURL=webpack:///./src/images/icons/back.png?");

/***/ }),

/***/ "./src/images/icons/basket--icon.png":
/*!*******************************************!*\
  !*** ./src/images/icons/basket--icon.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAA7CAYAAADii3NbAAADK0lEQVRoge2aW29MURTH/3tU61LqEtWZ0ggS8UyCujQST7wg8YKXuoSPwItv4BN4E098Bwl9QELiRYSoCKW3oFUkLvGTNd1nMp09bdLJjFmT+L+0c9Y+e//OmnXWXntlgmoUsFTSHkmHJO2StF3SZklrJNm8fyRNS3on6ZWkx5KGJD0KIfyqZdVFwwK7JV2UdErSjKR7BiDppaQ3kr5I+iGpQ9JqSVsk7Sh7sFWSbku6EUJ4kixQDwH7gLvAFHAd2FXLtHZfvH8qzrc3GVSrgLXArTj5FaCzTvN2AleBaeCmrZMMWuSEB4AR4A7QnQyog2zeOP87YH+toGeAr8D5xNgY6AvADHA6MS4k4Gz82gcWGNYI4AHgszkqMVYTcCw+YX8Vc8NloRDXP7rgWsA24BNwIjH+W+CTkWNrYowDAnDP0kpibIJiejOedC8AzgGvgOWJsTmwy4Fh46o0tANvgePJXU2U8USu9nLYQeBpVZc3FzZErsHyi0PApWS0AwGXgfsZ6CbgB9DlFLYr8vXmJB2R9CCEMJ2MdKDI9dA4DXZ/LPM8y/j6c7HWfOYc1vh25mJx/Dox+9KwpL5crOannMNa3K4xWMsCvxOzL9mZrSvnHHKO/sM2Si0F2xb/XgO+JFY/Wp3BZk0Jz+lrWTF9AS+Ag4nZkYDDwHOL2QlJBc+wknokjRrsB0kNaWDUUXlJ45ln885hzbPvDXZU0obE7EsWphMGO9kCMbtR0kirxGxv5tlWyAbdRafaQQz4mZidCOhgVuuyBodpvVPYPjvd2v+5EIJ59ZPjuC3EjFWqujzHreXYMZXBjjr2bE+lZ8fjRY8qVHp2LCZej9oY94I5nvUK2xv55sB6LWbsXXqvihfMs2ctW/l+wWJzu+TZ7GIe+O2w890dd9fiwTbzrJWJSxzWtfZtT4QQiu2tImz8MOkwbvNZjlVFk8NjRshnu5cqYD0eb3rm86zH4828nv3g1LNVYSdjAvakwnxh4NGzpSJGFbAemx2lrVZVsoGbAhxYKWmF9Quya21ldnuCDcVT5OwPyJqtbZK+hRC+V4O1FwxJHx2AZrIfts1K0l+Wy+Qk64if/QAAAABJRU5ErkJggg==\"\n\n//# sourceURL=webpack:///./src/images/icons/basket--icon.png?");

/***/ }),

/***/ "./src/images/icons/facebook--icon.png":
/*!*********************************************!*\
  !*** ./src/images/icons/facebook--icon.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAABOklEQVRYhe2Xu0oEQRBFT62PNXI1cjHUb1gwNTA19Bv8Br/IyMBwEUzMTA0UDYxExEQEFQf2SqsDQ9eAOttuTzA3GOg71c2huvplkkbADrDI7FUA4wBxkAmgVNHLDBC00HNWBrUCYt450+sJOAeugWdgElIOzAHrwN5/Q1wAx2b2Hvlv4SNpyfVIDHEHHJnZxP35QSlr4qQJAAkz8QrcxqakPrAB9L+tgeuZEOIxzoKkMPY+sOqiI6WajhfnwPA3ACSEkHP+kOVuxyzVtDDPgJtKu64mHoDDyNsERqkgwmpwS7IqMwtgl1VP0poLzDAdtatl1hArzmlLJprWxLakrUr7ysxOqwGSwrG9G/VbdiNNATGIzoF7F/F1bRw6t0bdZlWqgyjVQZTqIEq1BiI8z3Pq81U+zghSAOMPHYRA5IgOrBQAAAAASUVORK5CYII=\"\n\n//# sourceURL=webpack:///./src/images/icons/facebook--icon.png?");

/***/ }),

/***/ "./src/images/icons/fb--icon-yellow.png":
/*!**********************************************!*\
  !*** ./src/images/icons/fb--icon-yellow.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAABGUlEQVRIie2Wv0sDMRTHP955m5SC4CBY7eb/kK2gf0F2cXB29X8oDtXNqdA1q2PHG/o/uDp2EyzGQ3lylSPxhthcQOkXMrwfvE/y3pHLjjXqFrgGcrpVBUwE+J4AtlaVJYSJ8sxzdazdSOWXwAxYAKva1wNGwEUzMQbwUYoWuly6AWtUFhv4BOhClysv0qJNZzgOgRHhhPOmYY06Be6AQ2CvXlGBz459A5x5WQ1t1NIf2tn3kmICf6PQlr4Cb543QHKXfgTkXxa6nHreFlmjHoCrZrTrlg5dx/8BWqPkLzRw/aEzlPvyZW0UujxxIDKz89qUwxy5BUK/0v16tekAOG6Jfe8iqbbALfBvAOVFnEpfD+FJImgF3H8CyT05nZfNtjAAAAAASUVORK5CYII=\"\n\n//# sourceURL=webpack:///./src/images/icons/fb--icon-yellow.png?");

/***/ }),

/***/ "./src/images/icons/instagram--icon-yellow.png":
/*!*****************************************************!*\
  !*** ./src/images/icons/instagram--icon-yellow.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAACJUlEQVRIib2WPWtUQRSGnyROwB/gt2j0D5hSGAvTaCWCTmEjWERRVCwsTW8hKaIiVhYBm2RUEKxEROGKxML1H0QNYhS0snF2jUz2rBzvuXtXk82+cGHmnTPn4c7HuXcoRT8NXAFG2Fi1gJkMbA4A1lFreICwrJFNxlqf3gHXgB+SZRS4ChzpZO03cNaF4ok2UvRo4LCZsj79qpj9U3f6DeypfgNHjQObdWcte/gZaAArwAFgpxq7mKLPy9qU/hBweq3A5ZwQeORCsbpXKfqc8DhwB9gB7AFumJlK+eKvGNcqww66UCyakTZ4N7Ag0FqV9/Ar8B74XvIvd4NluVAsARdK9jfJtazNMvCcC8UYMK28L8ADQ7F6DHxS7k3JdaoO2NEW1W509qxOLhR5a96qkL1V4d2A/VBl7kpTjn5H4yn6bnF/JCd2XFkfTFANcEG1twInTYTVMWCXcl+ZiBrgC+Cj6t9O0e8zUSK5FneVlVfomQnsBnShyF/nKWXlt3ydog96eXM7RX8CeFO6g1MuFMkkrqs0LhSzKfoJ4IyCzud7laJviJdL2/bS1IfAPZOwF1A0KXVxUnnbgKMmsq25XDvlilSqFihLezZF/xS4Duw3QW0tyjLeNyMl1QIVeC5FH4FDwGFgTPZ/SQ7YcxeKpplYoTKw8hAJNFebl/L8j/76RpaBl+QfpGcp+0flYnC+Djghz4YpL2E+GIPS6o/wzICgLeDWbzvDkP+lx0PKAAAAAElFTkSuQmCC\"\n\n//# sourceURL=webpack:///./src/images/icons/instagram--icon-yellow.png?");

/***/ }),

/***/ "./src/images/icons/instagram--icon.png":
/*!**********************************************!*\
  !*** ./src/images/icons/instagram--icon.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAACVklEQVRYhcWXTY9MQRSGn9MMZhAjCBsxiUSEBRYkErFiSazEwi9AxNqvsLKVWFl0Iiw7FibxA8YwEZH4lkx8ZRhGS+OVolCq7q2uHt36TXpR55xb9fS5p07VNUl7gcPAMv6/OkDLQZwfEsAvdRpDBnAaWZqY+quvwHw04yrgr3UHCfENuGhmb0KjpHHgTLh2I3m0f5qPAZzMbA74ENoGCaHEUqNBQhRrkBCWWGo0SIjVktbHRklr/Q75rcXujjZwG3gILABjwASwGxj1Me4PnpL0PoYDlvwrxH3gmpktxHZJk8ARYGcAMp7MEKlXCAdwxcwqK9/M2pKavh52JAE16qUm2j4DlQABiPNfBz4lzhrFmZgzswv8LKADwKHAN13xCirlMzIF7A/8N8zslp/7XPiacplYE40fJxF5xfHJTimBGInGRVkI9DEar0giCiC+ROOxJCKvlZG3XRedg3gdjSeSiLy2RN63ddE5iGfReJekomxIcqnfE5mfJIHdIMzsBRAexcuBY5Jqn/EArkccDTqn0zvgaRLcDcJrMhpvA07UZUSSW/h4RaO6mesv3TrmHT/h9gjkrKRp4JHfNaPB2RHvAne+TCUzl0I4eklXgZPA5sDlFtrnfzm9BJq5LFDSts3sM3AZuJs483oAXCrpstlMBCDuI6Up6R5wENiYBP3RK1dLZlYM3dMpamYzwIykTcBWYIN/NR3fV9z7f94t/d0giq5kZjYLzCaORSquCXclW9evyatUcr1zUKcrrmT9VNH1ruhK1k81fFENUz++yltDBOkAre9NpKkUNDf++gAAAABJRU5ErkJggg==\"\n\n//# sourceURL=webpack:///./src/images/icons/instagram--icon.png?");

/***/ }),

/***/ "./src/images/icons/remove--icon.png":
/*!*******************************************!*\
  !*** ./src/images/icons/remove--icon.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAA7UlEQVQ4ja3Vuw2DMBCA4d9I2SIdG0QKKWioaWiTFRiIFaCloaZJQyQ2SJct0kSWrrDiB8biGiR892HONqh7XdyADmiGafmQGPe6OAMj0GYCXoBZBnaH1M3idBptgDeQp8AGmIvTKM9AFdMKX53aSrCkiHwVm7gnT+0tiHmwhYYKfff/652oB34AfUzPvagD/gKnmEUMogJfgaeAGi6HaXlZiUZk1h17pr0B6mu/dUC8qKOnZezJc6IOsJJXrmJgq6ceMH2fHn6iDj/7oYRQ+Or0lz8JDM1Yr77+BSSBOiTf3BWjRltgTQEd8Aq0P9IUwdlUWdWFAAAAAElFTkSuQmCC\"\n\n//# sourceURL=webpack:///./src/images/icons/remove--icon.png?");

/***/ }),

/***/ "./src/images/icons/sca--icon-yellow.png":
/*!***********************************************!*\
  !*** ./src/images/icons/sca--icon-yellow.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/sca--icon-yellow.png\";\n\n//# sourceURL=webpack:///./src/images/icons/sca--icon-yellow.png?");

/***/ }),

/***/ "./src/images/icons/sca--icon.png":
/*!****************************************!*\
  !*** ./src/images/icons/sca--icon.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/sca--icon.png\";\n\n//# sourceURL=webpack:///./src/images/icons/sca--icon.png?");

/***/ }),

/***/ "./src/images/logo-footer.png":
/*!************************************!*\
  !*** ./src/images/logo-footer.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/logo-footer.png\";\n\n//# sourceURL=webpack:///./src/images/logo-footer.png?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/logo.png\";\n\n//# sourceURL=webpack:///./src/images/logo.png?");

/***/ }),

/***/ "./src/images/map.png":
/*!****************************!*\
  !*** ./src/images/map.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/map.png\";\n\n//# sourceURL=webpack:///./src/images/map.png?");

/***/ }),

/***/ "./src/images/products/product-large.png":
/*!***********************************************!*\
  !*** ./src/images/products/product-large.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/product-large.png\";\n\n//# sourceURL=webpack:///./src/images/products/product-large.png?");

/***/ }),

/***/ "./src/images/products/product-mini.png":
/*!**********************************************!*\
  !*** ./src/images/products/product-mini.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/product-mini.png\";\n\n//# sourceURL=webpack:///./src/images/products/product-mini.png?");

/***/ }),

/***/ "./src/images/products/product.png":
/*!*****************************************!*\
  !*** ./src/images/products/product.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/product.png\";\n\n//# sourceURL=webpack:///./src/images/products/product.png?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"<!DOCTYPE html>\\n<html>\\n    <head>\\n        <meta http-equiv=\\\"content-type\\\" content=\\\"text/html; charset=utf-8\\\">\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n        <link href=\\\"/style.css\\\" rel=\\\"stylesheet\\\"></head>\\n    <body>\\n        <header>\\n            <a href=\\\"index.html\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\") + \"\\\" alt=\\\"\\\"></a>\\n          \\n            <div class=\\\"header--icons\\\">\\n                <div class=\\\"shop-basket--icon\\\">\\n                    <img src=\\\"\" + __webpack_require__(/*! ./images/icons/basket--icon.png */ \"./src/images/icons/basket--icon.png\") + \"\\\" alt=\\\"\\\" title=\\\"\\\" />\\n                    <div class=\\\"shopping-cart--counter\\\">0</div>\\n                </div>\\n                <div class=\\\"menu-trigger\\\"></div>\\n                <div class=\\\"media-icons\\\">\\n                    <a href=\\\"\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/icons/sca--icon.png */ \"./src/images/icons/sca--icon.png\") + \"\\\" alt=\\\"\\\" title=\\\"\\\" /></a>\\n                    <a href=\\\"\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/icons/facebook--icon.png */ \"./src/images/icons/facebook--icon.png\") + \"\\\" alt=\\\"\\\" title=\\\"\\\" /></a>\\n                    <a href=\\\"\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/icons/instagram--icon.png */ \"./src/images/icons/instagram--icon.png\") + \"\\\" alt=\\\"\\\" title=\\\"\\\" /></a>\\n                </div>\\n            </div>\\n            <nav class=\\\"main-nav\\\">\\n                <ul>\\n                    <li><a href=\\\"\\\">sklep</a></li>\\n                    <li><a href=\\\"\\\">palarnia</a></li>\\n                    <li><a href=\\\"\\\">kawiarnie</a></li>\\n                    <li><a href=\\\"\\\">kuchnia roślinna</a></li>\\n                    <li><a href=\\\"\\\">blog</a></li>\\n                    <li><a href=\\\"\\\">filozofia</a></li>\\n                    <li><a href=\\\"\\\">zespół</a></li>\\n                    <li><a href=\\\"\\\">kontakt</a></li>\\n                </ul>\\n            </nav>\\n        </header>\\n\\n        <main>\\n            <section class=\\\"animations--block\\\">\\n                <div class=\\\"animations--item\\\">\\n                    <div class=\\\"animations--item_image\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/S1.png */ \"./src/images/decor/S1.png\") + \"\\\">\\n                    </div>\\n                    <div class=\\\"animations--item_animation\\\"></div>\\n                </div>\\n                <div class=\\\"animations--item\\\">\\n                    <div class=\\\"animations--item_image\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/wolno_żyć_wolno.png */ \"./src/images/decor/wolno_żyć_wolno.png\") + \"\\\">\\n                    </div>\\n                    <div class=\\\"animations--item_animation\\\"></div>\\n                </div>\\n                <div class=\\\"animations--item\\\">\\n                    <div class=\\\"animations--item_image balance\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/rowno-waga.png */ \"./src/images/decor/rowno-waga.png\") + \"\\\">\\n                    </div>\\n                    <div class=\\\"animations--item_animation\\\"></div>\\n                </div>\\n                <div class=\\\"animations--item\\\">\\n                    <div class=\\\"animations--item_image\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/L.png */ \"./src/images/decor/L.png\") + \"\\\">\\n                    </div>\\n                    <div class=\\\"animations--item_animation\\\"></div>\\n                </div>\\n                <div class=\\\"animations--item\\\">\\n                    <div class=\\\"animations--item_image\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/O1.png */ \"./src/images/decor/O1.png\") + \"\\\">\\n                    </div>\\n                    <div class=\\\"animations--item_animation\\\"></div>\\n                </div>\\n                <div class=\\\"animations--item\\\">\\n                    <div class=\\\"animations--item_image\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/kropa1.png */ \"./src/images/decor/kropa1.png\") + \"\\\">\\n                    </div>\\n                    <div class=\\\"animations--item_animation\\\"></div>\\n                </div>\\n                <div class=\\\"animations--item\\\">\\n                    <div class=\\\"animations--item_image\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/co_to.png */ \"./src/images/decor/co_to.png\") + \"\\\">\\n                    </div>\\n                    <div class=\\\"animations--item_animation\\\"></div>\\n                </div>\\n                <div class=\\\"animations--item\\\">\\n                    <div class=\\\"animations--item_image\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/W.png */ \"./src/images/decor/W.png\") + \"\\\">\\n                    </div>\\n                    <div class=\\\"animations--item_animation\\\"></div>\\n                </div>\\n                <div class=\\\"animations--item\\\">\\n                    <div class=\\\"animations--item_image\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/R.png */ \"./src/images/decor/R.png\") + \"\\\">\\n                    </div>\\n                    <div class=\\\"animations--item_animation\\\"></div>       \\n                </div>\\n                <div class=\\\"animations--item\\\">\\n                    <div class=\\\"animations--item_image\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/stars.png */ \"./src/images/decor/stars.png\") + \"\\\">\\n                    </div>\\n                    <div class=\\\"animations--item_animation\\\"></div>\\n                </div>\\n                <div class=\\\"animations--item\\\">\\n                    <div class=\\\"animations--item_image\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/znamy_się.png */ \"./src/images/decor/znamy_się.png\") + \"\\\">\\n                    </div>\\n                    <div class=\\\"animations--item_animation\\\"></div>\\n                </div>\\n                <div class=\\\"animations--item\\\">\\n                    <div class=\\\"animations--item_image\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/O2.png */ \"./src/images/decor/O2.png\") + \"\\\">\\n                    </div>\\n                    <div class=\\\"animations--item_animation\\\"></div>\\n                </div>\\n                <div class=\\\"animations--item\\\">\\n                    <div class=\\\"animations--item_image\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/A.png */ \"./src/images/decor/A.png\") + \"\\\">\\n                    </div>\\n                    <div class=\\\"animations--item_animation\\\"></div>\\n                </div>\\n                <div class=\\\"animations--item\\\">\\n                    <div class=\\\"animations--item_image\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/hostia.png */ \"./src/images/decor/hostia.png\") + \"\\\">\\n                    </div>\\n                    <div class=\\\"animations--item_animation\\\"></div>\\n                </div>\\n                <div class=\\\"animations--item\\\">\\n                    <div class=\\\"animations--item_image\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/kropa2.png */ \"./src/images/decor/kropa2.png\") + \"\\\">\\n                    </div>\\n                    <div class=\\\"animations--item_animation\\\"></div> \\n                </div>\\n                <div class=\\\"animations--item\\\">\\n                    <div class=\\\"animations--item_image\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/S2.png */ \"./src/images/decor/S2.png\") + \"\\\">\\n                    </div>\\n                    <div class=\\\"animations--item_animation\\\"></div>\\n                </div>\\n                <div class=\\\"animations--item\\\">\\n                    <div class=\\\"animations--item_image\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/T.png */ \"./src/images/decor/T.png\") + \"\\\">\\n                    </div>\\n                    <div class=\\\"animations--item_animation\\\"></div>\\n                </div>\\n                <div class=\\\"animations--item\\\">\\n                    <div class=\\\"animations--item_image\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/kropa3.png */ \"./src/images/decor/kropa3.png\") + \"\\\">\\n                    </div>\\n                    <div class=\\\"animations--item_animation\\\"></div>\\n                </div>\\n            </section>\\n            <section class=\\\"main-content--section about\\\">\\n                <h1 class=\\\"section--title\\\">Palimy i parzymy</h1>\\n                <div class=\\\"section--content\\\">\\n                    <div class=\\\"section--content__decor\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/filozofia.png */ \"./src/images/decor/filozofia.png\") + \"\\\"/>\\n                    </div>\\n                    <div class=\\\"section--content__text\\\">\\n                        <p>\\n                        Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię stracił. Dziś piękność twą w różne \\n                        gazety głoszących nowe o muzyce, o jakie pół kroku Tak każe przyzwoitość). \\n                    </p>\\n                    </div>\\n                    \\n                </div>\\n            </section>\\n            <section class=\\\"main-content--section\\\">\\n                <h1 class=\\\"section--title\\\">My</h1>\\n                <div class=\\\"section--content team\\\">\\n                    <div class=\\\"section--content__text\\\">\\n                         <p>\\n                        Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię stracił. Dziś piękność twą w różne \\n                        gazety głoszących nowe o muzyce, o jakie pół kroku Tak każe przyzwoitość). \\n                    </p>\\n                    </div>\\n                   <div class=\\\"profile-image\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/gallery/profile-img1.png */ \"./src/images/gallery/profile-img1.png\") + \"\\\" /></div>\\n                   <div class=\\\"profile-image\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/gallery/profile-img2.png */ \"./src/images/gallery/profile-img2.png\") + \"\\\" /></div>\\n                   <div class=\\\"profile-image\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/gallery/profile-img1.png */ \"./src/images/gallery/profile-img1.png\") + \"\\\" /></div>\\n                   <div class=\\\"profile-image\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/gallery/profile-img2.png */ \"./src/images/gallery/profile-img2.png\") + \"\\\" /></div>\\n                   <div class=\\\"profile-image\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/gallery/profile-img1.png */ \"./src/images/gallery/profile-img1.png\") + \"\\\" /></div>\\n                   <div class=\\\"profile-image\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/gallery/profile-img2.png */ \"./src/images/gallery/profile-img2.png\") + \"\\\" /></div>\\n                   <div class=\\\"profile-image\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/gallery/profile-img1.png */ \"./src/images/gallery/profile-img1.png\") + \"\\\" /></div>\\n                   <div class=\\\"profile-image\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/gallery/profile-img2.png */ \"./src/images/gallery/profile-img2.png\") + \"\\\" /></div>\\n                </div>\\n                \\n            </section>\\n            <section class=\\\"caffees\\\">\\n                <div class=\\\"caffees--item\\\">\\n                    <h2 class=\\\"caffees--item__title\\\">\\n                        Dubois\\n                    </h2>\\n                    <div class=\\\"caffees--item__decor section--content__decor\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/caffee-decor.png */ \"./src/images/decor/caffee-decor.png\") + \"\\\" alt=\\\"\\\" />\\n                    </div>\\n                    <div class=\\\"caffees--item__description\\\">\\n                        <p>Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię stracił. Dziś piękność twą w różne</p>\\n\\n                        <div class=\\\"caffees--item__contact\\\">\\n                            mail: kawa@tokawa.pl <br>\\n                            tel. 578 584 588\\n                        </div>\\n                        <div class=\\\"caffees--item__media-icons\\\">\\n                            <a href=\\\"\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/icons/facebook--icon.png */ \"./src/images/icons/facebook--icon.png\") + \"\\\" alt=\\\"\\\" title=\\\"\\\" /></a>\\n                            <a href=\\\"\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/icons/instagram--icon.png */ \"./src/images/icons/instagram--icon.png\") + \"\\\" alt=\\\"\\\" title=\\\"\\\" /></a>\\n                        </div>\\n                        <div class=\\\"caffees--item__opening-hours\\\">\\n                            JESTEŚMY OTWARCI: <br>\\n                            od poniedziałku do piątku: 9-18 <br>\\n                            w soboty: 10-18\\n                        </div>\\n                        <div class=\\\"caffees--item__address\\\">\\n                            ul. Dubois 3, 71-111 Szczecin\\n                        </div>\\n                        <div class=\\\"caffees--item__map\\\">\\n                            <img src=\\\"\" + __webpack_require__(/*! ./images/map.png */ \"./src/images/map.png\") + \"\\\" />\\n                        </div>\\n                    </div>\\n                </div>\\n                <div class=\\\"caffees--item\\\">\\n                    <h2 class=\\\"caffees--item__title\\\">\\n                        Dubois\\n                    </h2>\\n                    <div class=\\\"caffees--item__decor section--content__decor\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/caffee-decor.png */ \"./src/images/decor/caffee-decor.png\") + \"\\\" alt=\\\"\\\" />\\n                    </div>\\n                    <div class=\\\"caffees--item__description\\\">\\n                        <p>Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię stracił. Dziś piękność twą w różne</p>\\n\\n                        <div class=\\\"caffees--item__contact\\\">\\n                            mail: kawa@tokawa.pl <br>\\n                            tel. 578 584 588\\n                        </div>\\n                        <div class=\\\"caffees--item__media-icons\\\">\\n                            <a href=\\\"\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/icons/facebook--icon.png */ \"./src/images/icons/facebook--icon.png\") + \"\\\" alt=\\\"\\\" title=\\\"\\\" /></a>\\n                            <a href=\\\"\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/icons/instagram--icon.png */ \"./src/images/icons/instagram--icon.png\") + \"\\\" alt=\\\"\\\" title=\\\"\\\" /></a>\\n                        </div>\\n                        <div class=\\\"caffees--item__opening-hours\\\">\\n                            JESTEŚMY OTWARCI: <br>\\n                            od poniedziałku do piątku: 9-18 <br>\\n                            w soboty: 10-18\\n                        </div>\\n                        <div class=\\\"caffees--item__address\\\">\\n                            ul. Dubois 3, 71-111 Szczecin\\n                        </div>\\n                        <div class=\\\"caffees--item__map\\\">\\n                            <img src=\\\"\" + __webpack_require__(/*! ./images/map.png */ \"./src/images/map.png\") + \"\\\" />\\n                        </div>\\n                    </div>\\n                </div>\\n            </section>\\n            <section class=\\\"blog-listing\\\">\\n                <div class=\\\"blog-listing--item\\\">\\n                    <h2 class=\\\"blog-listing--item__title\\\">Kawa idealna na prezent?</h2>\\n                    <div class=\\\"blog-listing--item__decor section--content__decor\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/caffee-decor.png */ \"./src/images/decor/caffee-decor.png\") + \"\\\" alt=\\\"\\\" />\\n                    </div>\\n                    <div class=\\\"blog-listing--item__excerpt\\\">\\n                        <p>Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię stracił. Dziś piękność twą w różne gazety głoszących nowe o muzyce, o jakie pół kroku Tak każe przyzwoitość)... </p>\\n                        <button class=\\\"button--primary icon-button read-more\\\">czytaj więcej</button>\\n                    </div>\\n                </div>\\n                <div class=\\\"blog-listing--item\\\">\\n                    <h2 class=\\\"blog-listing--item__title\\\">Kawa idealna na prezent?</h2>\\n                    <div class=\\\"blog-listing--item__decor section--content__decor\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/caffee-decor.png */ \"./src/images/decor/caffee-decor.png\") + \"\\\" alt=\\\"\\\" />\\n                    </div>\\n                    <div class=\\\"blog-listing--item__excerpt\\\">\\n                        <p>Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię stracił. Dziś piękność twą w różne gazety głoszących nowe o muzyce, o jakie pół kroku Tak każe przyzwoitość)... </p>\\n                        <button class=\\\"button--primary icon-button read-more\\\">czytaj więcej</button>\\n                    </div>\\n                </div>\\n            </section>\\n\\n            <section class=\\\"blog-entry\\\">\\n                <a class=\\\"back--button\\\" href=\\\"\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/icons/back.png */ \"./src/images/icons/back.png\") + \"\\\" /></a>\\n                <div class=\\\"blog-entry--title\\\">\\n                    <h2>Kawa idealna na prezent?</h2>\\n                </div>\\n                <div class=\\\"blog-entry__decor section--content__decor\\\">\\n                    <img src=\\\"\" + __webpack_require__(/*! ./images/decor/caffee-decor.png */ \"./src/images/decor/caffee-decor.png\") + \"\\\" alt=\\\"\\\" />\\n                </div>\\n                <div class=\\\"blog-entry--content\\\">\\n                    <p>\\n                        Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię stracił. Dziś piękność twą w różne gazety głoszących nowe o muzyce, o jakie pół kroku Tak każe przyzwoitość). nikt tam wódz gospodarstwa obmyśla wypraw w pół kroku Tak każe u wniścia alkowy i że słuchał rozmowy odstrychnęli od dzieciństwa mieszkał w drobne strączki białe dziwnie ozdabiał głowę.\\n                    </p>\\n                    <p>    \\n                        Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię stracił. Dziś piękność twą w różne gazety głoszących nowe o muzyce, o jakie pół kroku Tak każe przyzwoitość). nikt tam wódz gospodarstwa obmyśla wypraw w pół kroku Tak każe u wniścia alkowy i że słuchał rozmowy odstrychnęli od dzieciństwa mieszkał w drobne strączki białe dziwnie ozdabiał głowę. Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię stracił. Dziś piękność twą w różne gazety głoszących nowe o muzyce, o jakie pół kroku Tak każe przyzwoitość). nikt tam wódz gospodarstwa obmyśla wypraw w pół kroku Tak każe u wniścia alkowy i że słuchał rozmowy odstrychnęli od dzieciństwa mieszkał w drobne strączki białe dziwnie ozdabiał głowę, bo tak pan Wojski na koniu jeździł, pieszo do wniosków mowy. Wtem brząknął w francuskiej gazecie. Podczaszyc, mimo równość, wziął najbliższą sobie. Podkomorzanki na kształt ogrodowych grządek: Że nie poruczy, bo tak szanownych gości. W takim nigdy nie chciał, według nowej mody odmianą się spory o ten. Podczaszyc, mimo równość, wziął najbliższą sobie. Podkomorzanki na kształt ogrodowych grządek: Że nie poruczy, bo tak szanownych gości. Takim nigdy.\\n                    </p>\\n                    <p>\\n                            Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię stracił. Dziś piękność twą w różne gazety głoszących nowe o muzyce, o jakie pół kroku Tak każe przyzwoitość). nikt tam wódz gospodarstwa obmyśla wypraw w pół kroku Tak każe u wniścia alkowy i że słuchał rozmowy odstrychnęli od dzieciństwa mieszkał w drobne strączki białe dziwnie ozdabiał głowę. Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię stracił. Dziś piękność twą w różne gazety głoszących nowe o muzyce, o jakie pół kroku Tak każe przyzwoitość). nikt tam wódz gospodarstwa obmyśla wypraw w pół kroku Tak każe u wniścia alkowy i że słuchał rozmowy odstrychnęli od dzieciństwa mieszkał w drobne strączki białe dziwnie ozdabiał głowę, bo tak pan Wojski na koniu jeździł, pieszo do wniosków mowy. Wtem brząknął w francuskiej gazecie. Podczaszyc, mimo równość, wziął najbliższą sobie. Podkomorzanki na kształt ogrodowych grządek: Że nie poruczy, bo tak szanownych gości. W takim nigdy nie chciał, według nowej mody odmianą się spory o ten. Podczaszyc, mimo równość, wziął najbliższą sobie. Podkomorzanki na kształt ogrodowych grządek: Że nie poruczy, bo tak szanownych gości. Takim nigdy.\\n                    </p>\\n                </div>\\n                <div class=\\\"blog-entry__decor section--content__decor\\\">\\n                    <img src=\\\"\" + __webpack_require__(/*! ./images/decor/decor2.png */ \"./src/images/decor/decor2.png\") + \"\\\" alt=\\\"\\\" />\\n                </div>\\n                <a class=\\\"back--button\\\" href=\\\"\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/icons/back.png */ \"./src/images/icons/back.png\") + \"\\\" /></a>\\n            </section>\\n            <div class=\\\"palarnia\\\">\\n                <section class=\\\"palarnia\\\">\\n                    <div class=\\\"palarnia__decor section--content__decor animation\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/piec-animacja-placeholder.png */ \"./src/images/decor/piec-animacja-placeholder.png\") + \"\\\" alt=\\\"\\\" />\\n                    </div>\\n                    <h1 class=\\\"section--title\\\">Kawa ma smakować</h1>\\n                    <article class=\\\"section--content\\\">\\n                        <p>Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię stracił. Dziś piękność twą w różne gazety głoszących nowe o muzyce, o jakie pół kroku Tak każe przyzwoitość). nikt tam wódz gospodarstwa obmyśla wypraw w pół kroku Tak każe u wniścia alkowy i że słuchał rozmowy odstrychnęli od dzieciństwa mieszkał w drobne strączki białe dziwnie ozdabiał głowę, bo tak pan Wojski na koniu jeździł, pieszo do wniosków mowy. Wtem brząknął w francuskiej gazecie. Podczaszyc, mimo równość, wziął najbliższą sobie. Podkomorzanki na kształt ogrodowych grządek: Że nie poruczy, bo tak szanownych gości. W takim nigdy nie chciał, według nowej mody odmianą się spory o ten. Podczaszyc, mimo równość, wziął najbliższą sobie. Podkomorzanki na kształt ogrodowych grządek: Że nie poruczy, bo tak szanownych gości. Takim nigdy.</p>\\n                    </article>\\n                </section>\\n                <div class=\\\"palarnia__decor-full-width\\\">\\n                    <img src=\\\"\" + __webpack_require__(/*! ./images/decor/caffee-decor.png */ \"./src/images/decor/caffee-decor.png\") + \"\\\" alt=\\\"\\\">\\n                </div>\\n                <section>\\n                    <h1 class=\\\"section--title\\\">Alchemia</h1>\\n                    <article class=\\\"section--content\\\">\\n                        <p>Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię stracił. Dziś piękność twą w różne gazety głoszących nowe o muzyce, o jakie pół kroku Tak każe przyzwoitość). nikt tam wódz gospodarstwa obmyśla wypraw w pół kroku Tak każe u wniścia alkowy. Dziś piękność twą w różne gazety głoszących nowe o muzyce</p>\\n                    </article>\\n                    <div class=\\\"palarnia__decor section--content__decor\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/palarnia-infografika.png */ \"./src/images/decor/palarnia-infografika.png\") + \"\\\" alt=\\\"\\\" />\\n                    </div>\\n                    <div class=\\\"palarnia__decor ka-wa section--content__decor\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/decor/zdjecie-KA-WA.png */ \"./src/images/decor/zdjecie-KA-WA.png\") + \"\\\" alt=\\\"\\\" />\\n                    </div>\\n                </section>\\n            </div>\\n\\n                <section class=\\\"shop--catalogue\\\">\\n                    <div class=\\\"shop--catalogue__categories\\\">\\n                        <div class=\\\"shop--catalogue__categories--item\\\">\\n                            kawy jasno palone do metod alternatywnych\\n                        </div>\\n                        <div class=\\\"shop--catalogue__categories--item selected\\\">\\n                            kawy do metod tradycyjnych\\n                        </div>\\n                        <div class=\\\"shop--catalogue__categories--item\\\">akcesoria</div>\\n                    </div>\\n                    <div class=\\\"shop--catalogue__products\\\">\\n                        <div class=\\\"shop--catalogue__product\\\">\\n                            <div class=\\\"shop--catalogue__product--image\\\">\\n                                <img src=\\\"\" + __webpack_require__(/*! ./images/products/product.png */ \"./src/images/products/product.png\") + \"\\\" alt=\\\"\\\" />\\n                            </div>\\n                            <div class=\\\"shop--catalogue__product--title\\\">Brasil Cerrado</div>\\n                            <div class=\\\"shop--catalogue__product--details\\\">\\n                                <div class=\\\"details__title\\\">Brasil Cerrado</div>\\n                                <div class=\\\"details__description\\\">\\n                                    Brazylia Cerrado, kawa z obróbki naturalnej z regionu Minas Geiras. W smaku dużo czekolady, prażone migdały.\\n                                </div>\\n                                <div class=\\\"details__price\\\">\\n                                    <span class=\\\"old\\\">57 zł</span>\\n                                    <span class=\\\"curent\\\"> 40 zł</span>\\n                                </div>\\n                                <div class=\\\"details__form\\\">\\n                                    <select class=\\\"form--item small\\\">\\n                                        <option value=\\\"\\\">100g</option>\\n                                        <option value=\\\"\\\">200g</option>\\n                                        <option value=\\\"\\\">500g</option>\\n                                    </select>\\n                                    <button class=\\\"button--secondary small\\\">do koszyka</button>\\n                                </div>\\n                            </div>    \\n                            <div class=\\\"shop--catalogue__product--price\\\">\\n                                <span class=\\\"old\\\">57 zł</span>\\n                                <span class=\\\"curent\\\"> 40 zł</span>\\n                            </div>\\n                        \\n                        </div>\\n                        <div class=\\\"shop--catalogue__product\\\">\\n                            <div class=\\\"shop--catalogue__product--image\\\">\\n                                <img src=\\\"\" + __webpack_require__(/*! ./images/products/product.png */ \"./src/images/products/product.png\") + \"\\\" alt=\\\"\\\">\\n                            </div>\\n                            <div class=\\\"shop--catalogue__product--title\\\">Brasil Cerrado</div>\\n                            <div class=\\\"shop--catalogue__product--details\\\">\\n                                <div class=\\\"details__title\\\">Brasil Cerrado</div>\\n                                <div class=\\\"details__description\\\">\\n                                    Brazylia Cerrado, kawa z obróbki naturalnej z regionu Minas Geiras. W smaku dużo czekolady, prażone migdały.\\n                                </div>\\n                                <div class=\\\"details__price\\\">\\n                                    <span class=\\\"old\\\">57 zł</span>\\n                                <span class=\\\"curent\\\"> 40 zł</span>\\n                                </div>\\n                                <div class=\\\"details__form\\\">\\n                                    <select class=\\\"form--item small\\\">\\n                                        <option value=\\\"\\\">100g</option>\\n                                        <option value=\\\"\\\">200g</option>\\n                                        <option value=\\\"\\\">500g</option>\\n                                    </select>\\n                                    <button class=\\\"button--secondary small\\\">do koszyka</button>\\n                                </div>\\n                            </div>   \\n                            <div class=\\\"shop--catalogue__product--price\\\">\\n                                <span class=\\\"old\\\">57 zł</span>\\n                                <span class=\\\"curent\\\"> 40 zł</span>\\n                            </div>\\n                        </div>\\n                    </div> \\n                </section>\\n\\n                <section class=\\\"product\\\">\\n                    <a class=\\\"back--button\\\" href=\\\"\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/icons/back.png */ \"./src/images/icons/back.png\") + \"\\\" /></a>\\n                    <div class=\\\"product__title\\\">Brasil Cerrado</div>\\n                    <div class=\\\"product__gallery\\\">\\n                        <img src=\\\"\" + __webpack_require__(/*! ./images/products/product-large.png */ \"./src/images/products/product-large.png\") + \"\\\" alt=\\\"\\\">\\n                    </div>\\n                    <div class=\\\"product__price\\\">\\n                        <span class=\\\"old\\\">57 zł</span>\\n                        <span class=\\\"curent\\\"> 40 zł</span>\\n                    </div>\\n                        <div class=\\\"product__form\\\">\\n                            <select class=\\\"form--item\\\">\\n                                <option value=\\\"\\\">100g</option>\\n                                <option value=\\\"\\\">200g</option>\\n                                <option value=\\\"\\\">500g</option>\\n                            </select>\\n                        \\n                            <div class=\\\"quantity\\\">\\n                                <span> - </span>\\n                                <select class=\\\"form--item\\\">\\n                                    <option value=\\\"\\\">1</option>\\n                                    <option value=\\\"\\\">2</option>\\n                                    <option value=\\\"\\\">3</option>\\n                                </select>\\n                                <span> + </span>\\n                            </div>\\n                        </div>\\n                        \\n                    <div class=\\\"product__ad-to-cart\\\">\\n                        <button class=\\\"button--secondary\\\">do koszyka</button>\\n                    </div>\\n                    \\n                    <div class=\\\"product__description\\\">\\n                        <p>Przedstawiamy Wam naszą kawę, która w naszym odczuciu przypomina święta.</p>\\n                        <p>Kawa jest uniwersalną mieszanką. Oznacza to że wyciśniecie z tego dobre espresso, no i w alternatywach też się sprawdzi. Kawa jest palona dosyć jasno.</p>\\n                        <p>W skład tej kawy wchodzi myta Rwanda Intore AB plus o smaku Herbaty, wiśni, dżemu pomarańczowego.</p>\\n                        <p>Bardzo dobrej jakości naturalna Brazylia Forca Cafe Valquira Gonclaves Bastos Casa de Crianca w której znajdziecie duużo czekolady i brzoskwinę. </p>\\n                    </div>\\n                    <a class=\\\"back--button\\\" href=\\\"\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/icons/back.png */ \"./src/images/icons/back.png\") + \"\\\" /></a>\\n            </section>\\n            <section class=\\\"main-content--section checkout\\\">\\n                <h1 class=\\\"section--title\\\">Twoje zakupy</h1>\\n                <form action=\\\"\\\">\\n                    <div class=\\\"checkout--table\\\">\\n                        <table>\\n                            <thead>\\n                                <tr>\\n                                    <th colspan=\\\"2\\\">Produkt</th>\\n                                    <th>Gramatura</th>\\n                                    <th>Ilość</th>\\n                                    <th colspan=\\\"2\\\">Cena</th>\\n                                </tr>\\n                            </thead>\\n                            <thbody>\\n                                <tr class=\\\"product--item\\\">\\n                                    <td><img src=\\\"\" + __webpack_require__(/*! ./images/products/product-mini.png */ \"./src/images/products/product-mini.png\") + \"\\\" /></td>\\n                                    <td>Brasil Cerrado</td>\\n                                    <td>\\n                                        <select class=\\\"form--item\\\">\\n                                            <option value=\\\"\\\">100g</option>\\n                                            <option value=\\\"\\\">200g</option>\\n                                            <option value=\\\"\\\">500g</option>\\n                                        </select>        \\n                                    </td>\\n                                    <td>\\n                                        <span> - </span>\\n                                        <select class=\\\"form--item\\\">\\n                                            <option value=\\\"\\\">1</option>\\n                                            <option value=\\\"\\\">2</option>\\n                                            <option value=\\\"\\\">3</option>\\n                                        </select>\\n                                        <span> + </span>\\n                                    </td>\\n                                    <td>49,90 zł</td>\\n                                    <td><a href=\\\"\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/icons/remove--icon.png */ \"./src/images/icons/remove--icon.png\") + \"\\\" /></a></td>\\n                                </tr>\\n                                <tr class=\\\"product--item\\\">\\n                                    <td><img src=\\\"\" + __webpack_require__(/*! ./images/products/product-mini.png */ \"./src/images/products/product-mini.png\") + \"\\\" /></td>\\n                                    <td>Brasil Cerrado</td>\\n                                    <td>\\n                                        <select class=\\\"form--item\\\">\\n                                            <option value=\\\"\\\">100g</option>\\n                                            <option value=\\\"\\\">200g</option>\\n                                            <option value=\\\"\\\">500g</option>\\n                                        </select>        \\n                                    </td>\\n                                    <td>\\n                                        <span> - </span>\\n                                        <select class=\\\"form--item\\\">\\n                                            <option value=\\\"\\\">1</option>\\n                                            <option value=\\\"\\\">2</option>\\n                                            <option value=\\\"\\\">3</option>\\n                                        </select>\\n                                        <span> + </span>\\n                                    </td>\\n                                    <td>49,90 zł</td>\\n                                    <td><a href=\\\"\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/icons/remove--icon.png */ \"./src/images/icons/remove--icon.png\") + \"\\\" /></a></td>\\n                                </tr>\\n                                <tr class=\\\"checkout-total\\\">\\n                                    <td colspan=\\\"3\\\"></td>\\n                                    <td>Razem</td>\\n                                    <td>99,80 zł</td>\\n                                    <td><button class=\\\"button--primary\\\">Przelicz</button></td>\\n                                </tr>\\n                            </thbody>\\n                        </table>\\n\\n                        <div class=\\\"form--actions\\\">\\n                            <button class=\\\"icon-button button--primary\\\">Kontynuuj zakupy</button>\\n                            <button class=\\\"icon-button button--secondary\\\">Zamawiam</button>\\n                        </div>\\n                        <!-- <div class=\\\"products--list__item\\\">\\n                            <div class=\\\"products--list__item--image\\\">\\n                                <img src=\\\"\" + __webpack_require__(/*! ./images/products/product-mini.png */ \"./src/images/products/product-mini.png\") + \"\\\" />\\n                            </div>\\n                            <div class=\\\"product--list__item--title\\\">\\n\\n                            </div>\\n                        </div> -->\\n                    </div>\\n                </form>\\n\\n            </section>\\n        </main>\\n        <footer>\\n            <div class=\\\"footer--content\\\">\\n                <div class=\\\"footer--logo\\\">\\n                     <a href=\\\"index.html\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/logo-footer.png */ \"./src/images/logo-footer.png\") + \"\\\" alt=\\\"\\\"></a>\\n                </div>\\n               \\n                <div class=\\\"footer--nav\\\">\\n                    <ul>\\n                        <li><a href=\\\"\\\">sklep</a></li>\\n                        <li><a href=\\\"\\\">palarnia</a></li>\\n                        <li><a href=\\\"\\\">kawiarnie</a></li>\\n                        <li><a href=\\\"\\\">kuchnia roślinna</a></li>\\n                        <li><a href=\\\"\\\">blog</a></li>\\n                        <li><a href=\\\"\\\">filozofia</a></li>\\n                        <li><a href=\\\"\\\">zespół</a></li>\\n                    </ul>\\n                </div>\\n                <div class=\\\"footer--text\\\">\\n                    <div class=\\\"footer--media-icons\\\">\\n                        <a href=\\\"\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/icons/sca--icon-yellow.png */ \"./src/images/icons/sca--icon-yellow.png\") + \"\\\" alt=\\\"\\\" title=\\\"\\\" /></a>\\n                        <a href=\\\"\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/icons/fb--icon-yellow.png */ \"./src/images/icons/fb--icon-yellow.png\") + \"\\\" alt=\\\"\\\" title=\\\"\\\" /></a>\\n                        <a href=\\\"\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/icons/instagram--icon-yellow.png */ \"./src/images/icons/instagram--icon-yellow.png\") + \"\\\" alt=\\\"\\\" title=\\\"\\\" /></a>\\n                    </div>\\n                    <p>\\n                        Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię stracił. Dziś piękność twą w różne \\n                        gazety głoszących nowe o muzyce, o jakie pół kroku Tak każe przyzwoitość).\\n                    </p>\\n                </div>\\n\\n            <div class=\\\"footer--credits\\\">\\n                <p>Copyright © 2021 TO KAWA</p>\\n                <p>projekt: utoto.pl</p>\\n            </div>\\n            </div>\\n        </footer>\\n    </body>\\n</html>\";\n\n//# sourceURL=webpack:///./src/index.html?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("toggleMenu = () => {\n  const el = document.querySelector('.menu-trigger');\n  const menu = document.querySelector('.main-nav');\n\n  if (el.classList.contains('active')) {\n    el.classList.remove('active');\n    menu.classList.remove('open');\n  } else {\n    el.classList.add('active');\n    menu.classList.add('open');\n  }\n};\n\ndocument.querySelector('.menu-trigger').addEventListener('click', toggleMenu);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/kawiarnie.html":
/*!****************************!*\
  !*** ./src/kawiarnie.html ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!DOCTYPE html>\\n<html>\\n    <head>\\n    <meta charset=\\\"UTF-8\\\" />\\n    <link href=\\\"/style.css\\\" rel=\\\"stylesheet\\\"></head>\\n    <bodu>\\n        <nav>\\n\\n        </nav>\\n        <main>\\n            \\n        </main>\\n    </bodu>\\n</html>\";\n\n//# sourceURL=webpack:///./src/kawiarnie.html?");

/***/ }),

/***/ "./src/palarnia.html":
/*!***************************!*\
  !*** ./src/palarnia.html ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!DOCTYPE html>\\r\\n<html>\\r\\n    <head>\\r\\n    <meta charset=\\\"UTF-8\\\" />\\r\\n    <link href=\\\"/style.css\\\" rel=\\\"stylesheet\\\"></head>\\r\\n    <bodu>\\r\\n        <nav>\\r\\n\\r\\n        </nav>\\r\\n        <main>\\r\\n            \\r\\n        </main>\\r\\n    </bodu>\\r\\n</html>\";\n\n//# sourceURL=webpack:///./src/palarnia.html?");

/***/ }),

/***/ "./src/shop-basket.html":
/*!******************************!*\
  !*** ./src/shop-basket.html ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!DOCTYPE html>\\r\\n<html>\\r\\n    <head>\\r\\n    <meta charset=\\\"UTF-8\\\" />\\r\\n    <link href=\\\"/style.css\\\" rel=\\\"stylesheet\\\"></head>\\r\\n    <bodu>\\r\\n        <nav>\\r\\n\\r\\n        </nav>\\r\\n        <main>\\r\\n            \\r\\n        </main>\\r\\n    </bodu>\\r\\n</html>\";\n\n//# sourceURL=webpack:///./src/shop-basket.html?");

/***/ }),

/***/ "./src/shop-catalogue.html":
/*!*********************************!*\
  !*** ./src/shop-catalogue.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!DOCTYPE html>\\r\\n<html>\\r\\n    <head>\\r\\n    <meta charset=\\\"UTF-8\\\" />\\r\\n    <link href=\\\"/style.css\\\" rel=\\\"stylesheet\\\"></head>\\r\\n    <bodu>\\r\\n        <nav>\\r\\n\\r\\n        </nav>\\r\\n        <main>\\r\\n            \\r\\n        </main>\\r\\n    </bodu>\\r\\n</html>\";\n\n//# sourceURL=webpack:///./src/shop-catalogue.html?");

/***/ }),

/***/ "./src/shop-order-complete.html":
/*!**************************************!*\
  !*** ./src/shop-order-complete.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!DOCTYPE html>\\r\\n<html>\\r\\n    <head>\\r\\n    <meta charset=\\\"UTF-8\\\" />\\r\\n    <link href=\\\"/style.css\\\" rel=\\\"stylesheet\\\"></head>\\r\\n    <bodu>\\r\\n        <nav>\\r\\n\\r\\n        </nav>\\r\\n        <main>\\r\\n            \\r\\n        </main>\\r\\n    </bodu>\\r\\n</html>\";\n\n//# sourceURL=webpack:///./src/shop-order-complete.html?");

/***/ }),

/***/ "./src/shop-order.html":
/*!*****************************!*\
  !*** ./src/shop-order.html ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!DOCTYPE html>\\r\\n<html>\\r\\n    <head>\\r\\n    <meta charset=\\\"UTF-8\\\" />\\r\\n    <link href=\\\"/style.css\\\" rel=\\\"stylesheet\\\"></head>\\r\\n    <bodu>\\r\\n        <nav>\\r\\n\\r\\n        </nav>\\r\\n        <main>\\r\\n            \\r\\n        </main>\\r\\n    </bodu>\\r\\n</html>\";\n\n//# sourceURL=webpack:///./src/shop-order.html?");

/***/ }),

/***/ "./src/shop-product.html":
/*!*******************************!*\
  !*** ./src/shop-product.html ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!DOCTYPE html>\\r\\n<html>\\r\\n    <head>\\r\\n    <meta charset=\\\"UTF-8\\\" />\\r\\n    <link href=\\\"/style.css\\\" rel=\\\"stylesheet\\\"></head>\\r\\n    <bodu>\\r\\n        <nav>\\r\\n\\r\\n        </nav>\\r\\n        <main>\\r\\n            \\r\\n        </main>\\r\\n    </bodu>\\r\\n</html>\";\n\n//# sourceURL=webpack:///./src/shop-product.html?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/style.scss?");

/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/index.js ./src/index.html ./src/styles/style.scss ./src/blog.html ./src/blog-entry.html ./src/shop-catalogue.html ./src/shop-product.html ./src/shop-basket.html ./src/shop-order.html ./src/shop-order-complete.html ./src/kawiarnie.html ./src/palarnia.html ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n__webpack_require__(/*! ./src/index.html */\"./src/index.html\");\n__webpack_require__(/*! ./src/styles/style.scss */\"./src/styles/style.scss\");\n__webpack_require__(/*! ./src/blog.html */\"./src/blog.html\");\n__webpack_require__(/*! ./src/blog-entry.html */\"./src/blog-entry.html\");\n__webpack_require__(/*! ./src/shop-catalogue.html */\"./src/shop-catalogue.html\");\n__webpack_require__(/*! ./src/shop-product.html */\"./src/shop-product.html\");\n__webpack_require__(/*! ./src/shop-basket.html */\"./src/shop-basket.html\");\n__webpack_require__(/*! ./src/shop-order.html */\"./src/shop-order.html\");\n__webpack_require__(/*! ./src/shop-order-complete.html */\"./src/shop-order-complete.html\");\n__webpack_require__(/*! ./src/kawiarnie.html */\"./src/kawiarnie.html\");\nmodule.exports = __webpack_require__(/*! ./src/palarnia.html */\"./src/palarnia.html\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js_./src/index.html_./src/styles/style.scss_./src/blog.html_./src/blog-entry.html_./src/shop-catalogue.html_./src/shop-product.html_./src/shop-basket.html_./src/shop-order.html_./src/shop-order-complete.html_./src/kawiarnie.html_./src/palarnia.html?");

/***/ })

/******/ });