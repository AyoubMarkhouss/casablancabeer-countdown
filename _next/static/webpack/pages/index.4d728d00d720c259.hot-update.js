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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AnimatedTimer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction AnimatedTimer() {\n    _s();\n    const [timerDays, setTimerDays] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"00\");\n    const [timerHours, setTimerHours] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"00\");\n    const [timerMinutes, setTimerMinutes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"00\");\n    const [timerSeconds, setTimerSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"00\");\n    const interval = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const startTimer = ()=>{\n        const countdownDate = new Date(\"May 25, 2025 00:18:00\").getTime();\n        interval.current = setInterval(()=>{\n            const now = new Date().getTime();\n            const distance = countdownDate - now;\n            const days = Math.floor(distance / (1000 * 60 * 60 * 24));\n            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n            const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));\n            const seconds = Math.floor(distance % (1000 * 60) / 1000);\n            if (distance < 0) {\n                if (interval.current) clearInterval(interval.current);\n            } else {\n                setTimerDays(String(days).padStart(2, \"0\"));\n                setTimerHours(String(hours).padStart(2, \"0\"));\n                setTimerMinutes(String(minutes).padStart(2, \"0\"));\n                setTimerSeconds(String(seconds).padStart(2, \"0\"));\n            }\n        }, 1000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        startTimer();\n        return ()=>{\n            if (interval.current) clearInterval(interval.current);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                alt: \"casa\",\n                src: \"/LP-Desktop.jpg\",\n                width: 2000,\n                height: 2000,\n                className: \"absolute z-0\"\n            }, void 0, false, {\n                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-50 flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        alt: \"ee\",\n                        src: \"/Casablanca.png\",\n                        width: 2000,\n                        height: 2000,\n                        className: \"w-96 z-50\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col justify-center items-center pb-12\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-bold z-50 pb-4 text-4xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400\",\n                            children: \"READY TO REINVENT YOUR SPIRIT ?\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full max-w-5xl text-white z-50 mx-auto flex items-center \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CountdownItem, {\n                                num: timerDays,\n                                text: \"Jours\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CountdownItem, {\n                                num: timerHours,\n                                text: \"Heurs\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CountdownItem, {\n                                num: timerMinutes,\n                                text: \"Minutes\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CountdownItem, {\n                                num: timerSeconds,\n                                text: \"Secondes\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-4 h-32 bg-[#a80017]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"CASABLANCA BEER TOUS\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(AnimatedTimer, \"L6w3BwUURqIftFOxWCmJmcOOO18=\");\n_c = AnimatedTimer;\nconst CountdownItem = (param)=>{\n    let { num, text } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"font-mono w-1/4 h-24 md:h-36 flex flex-col gap-1 md:gap-2 items-center justify-center \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full text-center relative overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n                    mode: \"popLayout\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                        initial: {\n                            y: \"100%\"\n                        },\n                        animate: {\n                            y: \"0%\"\n                        },\n                        exit: {\n                            y: \"-100%\"\n                        },\n                        transition: {\n                            ease: \"backIn\",\n                            duration: 0.75\n                        },\n                        className: \"block text-2xl md:text-4xl lg:text-6xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-medium\",\n                        children: num\n                    }, num, false, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-xs md:text-sm lg:text-base font-light text-gray-300\",\n                children: text\n            }, void 0, false, {\n                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = CountdownItem;\nvar _c, _c1;\n$RefreshReg$(_c, \"AnimatedTimer\");\n$RefreshReg$(_c1, \"CountdownItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQyxHQUFHLEVBQUVDLElBQUksRUFBaUM7SUFDakUscUJBQ0UsOERBQUNUO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQy9CLDBEQUFlQTtvQkFBQ3dDLE1BQUs7OEJBQ3BCLDRFQUFDdkMsaURBQU1BLENBQUN3QyxJQUFJO3dCQUVWQyxTQUFTOzRCQUFFQyxHQUFHO3dCQUFPO3dCQUNyQkMsU0FBUzs0QkFBRUQsR0FBRzt3QkFBSzt3QkFDbkJFLE1BQU07NEJBQUVGLEdBQUc7d0JBQVE7d0JBQ25CRyxZQUFZOzRCQUFFQyxNQUFNOzRCQUFVQyxVQUFVO3dCQUFLO3dCQUM3Q2pCLFdBQVU7a0NBRVRPO3VCQVBJQTs7Ozs7Ozs7Ozs7Ozs7OzBCQVdYLDhEQUFDRztnQkFBS1YsV0FBVTswQkFDYlE7Ozs7Ozs7Ozs7OztBQUlUO01BdEJNRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZHRpbWVyLnRzeD83ZjYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmltYXRlZFRpbWVyKCkge1xyXG4gIGNvbnN0IFt0aW1lckRheXMsIHNldFRpbWVyRGF5c10gPSB1c2VTdGF0ZShcIjAwXCIpO1xyXG4gIGNvbnN0IFt0aW1lckhvdXJzLCBzZXRUaW1lckhvdXJzXSA9IHVzZVN0YXRlKFwiMDBcIik7XHJcbiAgY29uc3QgW3RpbWVyTWludXRlcywgc2V0VGltZXJNaW51dGVzXSA9IHVzZVN0YXRlKFwiMDBcIik7XHJcbiAgY29uc3QgW3RpbWVyU2Vjb25kcywgc2V0VGltZXJTZWNvbmRzXSA9IHVzZVN0YXRlKFwiMDBcIik7XHJcblxyXG4gIGNvbnN0IGludGVydmFsID0gdXNlUmVmPE5vZGVKUy5UaW1lb3V0IHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IHN0YXJ0VGltZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb3VudGRvd25EYXRlID0gbmV3IERhdGUoXCJNYXkgMjUsIDIwMjUgMDA6MTg6MDBcIikuZ2V0VGltZSgpO1xyXG4gICAgaW50ZXJ2YWwuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gY291bnRkb3duRGF0ZSAtIG5vdztcclxuXHJcbiAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgIChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcclxuXHJcbiAgICAgIGlmIChkaXN0YW5jZSA8IDApIHtcclxuICAgICAgICBpZiAoaW50ZXJ2YWwuY3VycmVudCkgY2xlYXJJbnRlcnZhbChpbnRlcnZhbC5jdXJyZW50KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRUaW1lckRheXMoU3RyaW5nKGRheXMpLnBhZFN0YXJ0KDIsIFwiMFwiKSk7XHJcbiAgICAgICAgc2V0VGltZXJIb3VycyhTdHJpbmcoaG91cnMpLnBhZFN0YXJ0KDIsIFwiMFwiKSk7XHJcbiAgICAgICAgc2V0VGltZXJNaW51dGVzKFN0cmluZyhtaW51dGVzKS5wYWRTdGFydCgyLCBcIjBcIikpO1xyXG4gICAgICAgIHNldFRpbWVyU2Vjb25kcyhTdHJpbmcoc2Vjb25kcykucGFkU3RhcnQoMiwgXCIwXCIpKTtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHN0YXJ0VGltZXIoKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmIChpbnRlcnZhbC5jdXJyZW50KSBjbGVhckludGVydmFsKGludGVydmFsLmN1cnJlbnQpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHJlbGF0aXZlXCI+XHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICAgIGFsdD1cImNhc2FcIlxyXG4gICAgICAgIHNyYz1cIi9MUC1EZXNrdG9wLmpwZ1wiXHJcbiAgICAgICAgd2lkdGg9ezIwMDB9XHJcbiAgICAgICAgaGVpZ2h0PXsyMDAwfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHotMFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei01MCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgYWx0PVwiZWVcIlxyXG4gICAgICAgICAgc3JjPVwiL0Nhc2FibGFuY2EucG5nXCJcclxuICAgICAgICAgIHdpZHRoPXsyMDAwfVxyXG4gICAgICAgICAgaGVpZ2h0PXsyMDAwfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy05NiB6LTUwXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcGItMTJcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgei01MCBwYi00IHRleHQtNHhsIG1kOnRleHQtNXhsIHRleHQtY2VudGVyIGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50IGJnLWdyYWRpZW50LXRvLWIgZnJvbS1uZXV0cmFsLTUwIHRvLW5ldXRyYWwtNDAwXCI+XHJcbiAgICAgICAgICAgIFJFQURZIFRPIFJFSU5WRU5UIFlPVVIgU1BJUklUID9cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctNXhsIHRleHQtd2hpdGUgei01MCBteC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICAgICAgPENvdW50ZG93bkl0ZW0gbnVtPXt0aW1lckRheXN9IHRleHQ9XCJKb3Vyc1wiIC8+XHJcbiAgICAgICAgICA8Q291bnRkb3duSXRlbSBudW09e3RpbWVySG91cnN9IHRleHQ9XCJIZXVyc1wiIC8+XHJcbiAgICAgICAgICA8Q291bnRkb3duSXRlbSBudW09e3RpbWVyTWludXRlc30gdGV4dD1cIk1pbnV0ZXNcIiAvPlxyXG4gICAgICAgICAgPENvdW50ZG93bkl0ZW0gbnVtPXt0aW1lclNlY29uZHN9IHRleHQ9XCJTZWNvbmRlc1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgaC0zMiBiZy1bI2E4MDAxN11cIj5cclxuICAgICAgICA8ZGl2PkNBU0FCTEFOQ0EgQkVFUiBUT1VTPC9kaXY+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgQ291bnRkb3duSXRlbSA9ICh7IG51bSwgdGV4dCB9OiB7IG51bTogc3RyaW5nOyB0ZXh0OiBzdHJpbmcgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbW9ubyB3LTEvNCBoLTI0IG1kOmgtMzYgZmxleCBmbGV4LWNvbCBnYXAtMSBtZDpnYXAtMiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtY2VudGVyIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2UgbW9kZT1cInBvcExheW91dFwiPlxyXG4gICAgICAgICAgPG1vdGlvbi5zcGFuXHJcbiAgICAgICAgICAgIGtleT17bnVtfVxyXG4gICAgICAgICAgICBpbml0aWFsPXt7IHk6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIGFuaW1hdGU9e3sgeTogXCIwJVwiIH19XHJcbiAgICAgICAgICAgIGV4aXQ9e3sgeTogXCItMTAwJVwiIH19XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZWFzZTogXCJiYWNrSW5cIiwgZHVyYXRpb246IDAuNzUgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC0yeGwgbWQ6dGV4dC00eGwgbGc6dGV4dC02eGwgeGw6dGV4dC03eGwgYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnQgYmctZ3JhZGllbnQtdG8tYiBmcm9tLW5ldXRyYWwtNTAgdG8tbmV1dHJhbC00MDAgZm9udC1tZWRpdW1cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bnVtfVxyXG4gICAgICAgICAgPC9tb3Rpb24uc3Bhbj5cclxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgbWQ6dGV4dC1zbSBsZzp0ZXh0LWJhc2UgZm9udC1saWdodCB0ZXh0LWdyYXktMzAwXCI+XHJcbiAgICAgICAge3RleHR9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwiSW1hZ2UiLCJBbmltYXRlZFRpbWVyIiwidGltZXJEYXlzIiwic2V0VGltZXJEYXlzIiwidGltZXJIb3VycyIsInNldFRpbWVySG91cnMiLCJ0aW1lck1pbnV0ZXMiLCJzZXRUaW1lck1pbnV0ZXMiLCJ0aW1lclNlY29uZHMiLCJzZXRUaW1lclNlY29uZHMiLCJpbnRlcnZhbCIsInN0YXJ0VGltZXIiLCJjb3VudGRvd25EYXRlIiwiRGF0ZSIsImdldFRpbWUiLCJjdXJyZW50Iiwic2V0SW50ZXJ2YWwiLCJub3ciLCJkaXN0YW5jZSIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiY2xlYXJJbnRlcnZhbCIsIlN0cmluZyIsInBhZFN0YXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiYWx0Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJoMSIsIkNvdW50ZG93bkl0ZW0iLCJudW0iLCJ0ZXh0IiwibW9kZSIsInNwYW4iLCJpbml0aWFsIiwieSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Animatedtimer.tsx\n"));

/***/ })

});