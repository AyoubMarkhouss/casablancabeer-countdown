"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Animatedtimer.tsx":
/*!******************************************!*\
  !*** ./src/components/Animatedtimer.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AnimatedTimer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction AnimatedTimer() {\n    _s();\n    const [timerDays, setTimerDays] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"00\");\n    const [timerHours, setTimerHours] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"00\");\n    const [timerMinutes, setTimerMinutes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"00\");\n    const [timerSeconds, setTimerSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"00\");\n    const interval = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const startTimer = ()=>{\n        const countdownDate = new Date(\"May 25, 2025 00:18:00\").getTime();\n        interval.current = setInterval(()=>{\n            const now = new Date().getTime();\n            const distance = countdownDate - now;\n            const days = Math.floor(distance / (1000 * 60 * 60 * 24));\n            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n            const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));\n            const seconds = Math.floor(distance % (1000 * 60) / 1000);\n            if (distance < 0) {\n                if (interval.current) clearInterval(interval.current);\n            } else {\n                setTimerDays(String(days).padStart(2, \"0\"));\n                setTimerHours(String(hours).padStart(2, \"0\"));\n                setTimerMinutes(String(minutes).padStart(2, \"0\"));\n                setTimerSeconds(String(seconds).padStart(2, \"0\"));\n            }\n        }, 1000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        startTimer();\n        return ()=>{\n            if (interval.current) clearInterval(interval.current);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                alt: \"casa\",\n                src: \"/LP-Desktop.jpg\",\n                width: 2000,\n                height: 2000,\n                className: \"absolute z-0\"\n            }, void 0, false, {\n                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-50 flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        alt: \"ee\",\n                        src: \"/Casablanca.png\",\n                        width: 2000,\n                        height: 2000,\n                        className: \"w-96 z-50\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col justify-center items-center pb-12\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-bold z-50 pb-4 text-4xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400\",\n                            children: \"READY TO REINVENT YOUR SPIRIT ?\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full max-w-5xl text-white z-50 mx-auto flex items-center \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CountdownItem, {\n                                num: timerDays,\n                                text: \"Jours\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CountdownItem, {\n                                num: timerHours,\n                                text: \"Heurs\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CountdownItem, {\n                                num: timerMinutes,\n                                text: \"Minutes\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CountdownItem, {\n                                num: timerSeconds,\n                                text: \"Secondes\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-4 h-32 bg-[#a80017]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-bold z-10  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400\",\n                        children: \"CASABLANCA BEER \\xa9 TOUS DROITS R\\xc9SERV\\xc9S\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-bold z-10 flex justify-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400\",\n                        children: \"SUIVEZ-NOUS SUR\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(AnimatedTimer, \"L6w3BwUURqIftFOxWCmJmcOOO18=\");\n_c = AnimatedTimer;\nconst CountdownItem = (param)=>{\n    let { num, text } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"font-mono w-1/4 h-24 md:h-36 flex flex-col gap-1 md:gap-2 items-center justify-center \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full text-center relative overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n                    mode: \"popLayout\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                        initial: {\n                            y: \"100%\"\n                        },\n                        animate: {\n                            y: \"0%\"\n                        },\n                        exit: {\n                            y: \"-100%\"\n                        },\n                        transition: {\n                            ease: \"backIn\",\n                            duration: 0.75\n                        },\n                        className: \"block text-2xl md:text-4xl lg:text-6xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-medium\",\n                        children: num\n                    }, num, false, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-xs md:text-sm lg:text-base font-light text-gray-300\",\n                children: text\n            }, void 0, false, {\n                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = CountdownItem;\nvar _c, _c1;\n$RefreshReg$(_c, \"AnimatedTimer\");\n$RefreshReg$(_c1, \"CountdownItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtLQUFBQTtBQWtGeEIsTUFBTWtDLGdCQUFnQjtRQUFDLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFpQztJQUNqRSxxQkFDRSw4REFBQ1Q7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDL0IsMERBQWVBO29CQUFDd0MsTUFBSzs4QkFDcEIsNEVBQUN2QyxpREFBTUEsQ0FBQ3dDLElBQUk7d0JBRVZDLFNBQVM7NEJBQUVDLEdBQUc7d0JBQU87d0JBQ3JCQyxTQUFTOzRCQUFFRCxHQUFHO3dCQUFLO3dCQUNuQkUsTUFBTTs0QkFBRUYsR0FBRzt3QkFBUTt3QkFDbkJHLFlBQVk7NEJBQUVDLE1BQU07NEJBQVVDLFVBQVU7d0JBQUs7d0JBQzdDakIsV0FBVTtrQ0FFVE87dUJBUElBOzs7Ozs7Ozs7Ozs7Ozs7MEJBV1gsOERBQUNHO2dCQUFLVixXQUFVOzBCQUNiUTs7Ozs7Ozs7Ozs7O0FBSVQ7TUF0Qk1GIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FuaW1hdGVkdGltZXIudHN4PzdmNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuaW1hdGVkVGltZXIoKSB7XHJcbiAgY29uc3QgW3RpbWVyRGF5cywgc2V0VGltZXJEYXlzXSA9IHVzZVN0YXRlKFwiMDBcIik7XHJcbiAgY29uc3QgW3RpbWVySG91cnMsIHNldFRpbWVySG91cnNdID0gdXNlU3RhdGUoXCIwMFwiKTtcclxuICBjb25zdCBbdGltZXJNaW51dGVzLCBzZXRUaW1lck1pbnV0ZXNdID0gdXNlU3RhdGUoXCIwMFwiKTtcclxuICBjb25zdCBbdGltZXJTZWNvbmRzLCBzZXRUaW1lclNlY29uZHNdID0gdXNlU3RhdGUoXCIwMFwiKTtcclxuXHJcbiAgY29uc3QgaW50ZXJ2YWwgPSB1c2VSZWY8Tm9kZUpTLlRpbWVvdXQgfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3Qgc3RhcnRUaW1lciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvdW50ZG93bkRhdGUgPSBuZXcgRGF0ZShcIk1heSAyNSwgMjAyNSAwMDoxODowMFwiKS5nZXRUaW1lKCk7XHJcbiAgICBpbnRlcnZhbC5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgY29uc3QgZGlzdGFuY2UgPSBjb3VudGRvd25EYXRlIC0gbm93O1xyXG5cclxuICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MClcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XHJcbiAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG5cclxuICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xyXG4gICAgICAgIGlmIChpbnRlcnZhbC5jdXJyZW50KSBjbGVhckludGVydmFsKGludGVydmFsLmN1cnJlbnQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFRpbWVyRGF5cyhTdHJpbmcoZGF5cykucGFkU3RhcnQoMiwgXCIwXCIpKTtcclxuICAgICAgICBzZXRUaW1lckhvdXJzKFN0cmluZyhob3VycykucGFkU3RhcnQoMiwgXCIwXCIpKTtcclxuICAgICAgICBzZXRUaW1lck1pbnV0ZXMoU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsIFwiMFwiKSk7XHJcbiAgICAgICAgc2V0VGltZXJTZWNvbmRzKFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCBcIjBcIikpO1xyXG4gICAgICB9XHJcbiAgICB9LCAxMDAwKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc3RhcnRUaW1lcigpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKGludGVydmFsLmN1cnJlbnQpIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwuY3VycmVudCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gcmVsYXRpdmVcIj5cclxuICAgICAgPEltYWdlXHJcbiAgICAgICAgYWx0PVwiY2FzYVwiXHJcbiAgICAgICAgc3JjPVwiL0xQLURlc2t0b3AuanBnXCJcclxuICAgICAgICB3aWR0aD17MjAwMH1cclxuICAgICAgICBoZWlnaHQ9ezIwMDB9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgei0wXCJcclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTUwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBhbHQ9XCJlZVwiXHJcbiAgICAgICAgICBzcmM9XCIvQ2FzYWJsYW5jYS5wbmdcIlxyXG4gICAgICAgICAgd2lkdGg9ezIwMDB9XHJcbiAgICAgICAgICBoZWlnaHQ9ezIwMDB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTk2IHotNTBcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwYi0xMlwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB6LTUwIHBiLTQgdGV4dC00eGwgbWQ6dGV4dC01eGwgdGV4dC1jZW50ZXIgYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnQgYmctZ3JhZGllbnQtdG8tYiBmcm9tLW5ldXRyYWwtNTAgdG8tbmV1dHJhbC00MDBcIj5cclxuICAgICAgICAgICAgUkVBRFkgVE8gUkVJTlZFTlQgWU9VUiBTUElSSVQgP1xyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy01eGwgdGV4dC13aGl0ZSB6LTUwIG14LWF1dG8gZmxleCBpdGVtcy1jZW50ZXIgXCI+XHJcbiAgICAgICAgICA8Q291bnRkb3duSXRlbSBudW09e3RpbWVyRGF5c30gdGV4dD1cIkpvdXJzXCIgLz5cclxuICAgICAgICAgIDxDb3VudGRvd25JdGVtIG51bT17dGltZXJIb3Vyc30gdGV4dD1cIkhldXJzXCIgLz5cclxuICAgICAgICAgIDxDb3VudGRvd25JdGVtIG51bT17dGltZXJNaW51dGVzfSB0ZXh0PVwiTWludXRlc1wiIC8+XHJcbiAgICAgICAgICA8Q291bnRkb3duSXRlbSBudW09e3RpbWVyU2Vjb25kc30gdGV4dD1cIlNlY29uZGVzXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBoLTMyIGJnLVsjYTgwMDE3XVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHotMTAgIGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50IGJnLWdyYWRpZW50LXRvLWIgZnJvbS1uZXV0cmFsLTUwIHRvLW5ldXRyYWwtNDAwXCI+XHJcbiAgICAgICAgICBDQVNBQkxBTkNBIEJFRVIgwqkgVE9VUyBEUk9JVFMgUsOJU0VSVsOJU1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB6LTEwIGZsZXgganVzdGlmeS1jZW50ZXIgIGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50IGJnLWdyYWRpZW50LXRvLWIgZnJvbS1uZXV0cmFsLTUwIHRvLW5ldXRyYWwtNDAwXCI+XHJcbiAgICAgICAgICBTVUlWRVotTk9VUyBTVVJcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBDb3VudGRvd25JdGVtID0gKHsgbnVtLCB0ZXh0IH06IHsgbnVtOiBzdHJpbmc7IHRleHQ6IHN0cmluZyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1tb25vIHctMS80IGgtMjQgbWQ6aC0zNiBmbGV4IGZsZXgtY29sIGdhcC0xIG1kOmdhcC0yIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXIgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBtb2RlPVwicG9wTGF5b3V0XCI+XHJcbiAgICAgICAgICA8bW90aW9uLnNwYW5cclxuICAgICAgICAgICAga2V5PXtudW19XHJcbiAgICAgICAgICAgIGluaXRpYWw9e3sgeTogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgYW5pbWF0ZT17eyB5OiBcIjAlXCIgfX1cclxuICAgICAgICAgICAgZXhpdD17eyB5OiBcIi0xMDAlXCIgfX1cclxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBlYXNlOiBcImJhY2tJblwiLCBkdXJhdGlvbjogMC43NSB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LTJ4bCBtZDp0ZXh0LTR4bCBsZzp0ZXh0LTZ4bCB4bDp0ZXh0LTd4bCBiZy1jbGlwLXRleHQgdGV4dC10cmFuc3BhcmVudCBiZy1ncmFkaWVudC10by1iIGZyb20tbmV1dHJhbC01MCB0by1uZXV0cmFsLTQwMCBmb250LW1lZGl1bVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtudW19XHJcbiAgICAgICAgICA8L21vdGlvbi5zcGFuPlxyXG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBtZDp0ZXh0LXNtIGxnOnRleHQtYmFzZSBmb250LWxpZ2h0IHRleHQtZ3JheS0zMDBcIj5cclxuICAgICAgICB7dGV4dH1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJJbWFnZSIsIkFuaW1hdGVkVGltZXIiLCJ0aW1lckRheXMiLCJzZXRUaW1lckRheXMiLCJ0aW1lckhvdXJzIiwic2V0VGltZXJIb3VycyIsInRpbWVyTWludXRlcyIsInNldFRpbWVyTWludXRlcyIsInRpbWVyU2Vjb25kcyIsInNldFRpbWVyU2Vjb25kcyIsImludGVydmFsIiwic3RhcnRUaW1lciIsImNvdW50ZG93bkRhdGUiLCJEYXRlIiwiZ2V0VGltZSIsImN1cnJlbnQiLCJzZXRJbnRlcnZhbCIsIm5vdyIsImRpc3RhbmNlIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJjbGVhckludGVydmFsIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJhbHQiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImgxIiwiQ291bnRkb3duSXRlbSIsIm51bSIsInRleHQiLCJtb2RlIiwic3BhbiIsImluaXRpYWwiLCJ5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImR1cmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Animatedtimer.tsx\n"));

/***/ })

});