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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AnimatedTimer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction AnimatedTimer() {\n    _s();\n    const [timerDays, setTimerDays] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"00\");\n    const [timerHours, setTimerHours] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"00\");\n    const [timerMinutes, setTimerMinutes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"00\");\n    const [timerSeconds, setTimerSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"00\");\n    const interval = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const startTimer = ()=>{\n        const countdownDate = new Date(\"May 25, 2025 00:18:00\").getTime();\n        interval.current = setInterval(()=>{\n            const now = new Date().getTime();\n            const distance = countdownDate - now;\n            const days = Math.floor(distance / (1000 * 60 * 60 * 24));\n            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n            const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));\n            const seconds = Math.floor(distance % (1000 * 60) / 1000);\n            if (distance < 0) {\n                if (interval.current) clearInterval(interval.current);\n            } else {\n                setTimerDays(String(days).padStart(2, \"0\"));\n                setTimerHours(String(hours).padStart(2, \"0\"));\n                setTimerMinutes(String(minutes).padStart(2, \"0\"));\n                setTimerSeconds(String(seconds).padStart(2, \"0\"));\n            }\n        }, 1000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        startTimer();\n        return ()=>{\n            if (interval.current) clearInterval(interval.current);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                alt: \"casa\",\n                src: \"/LP-Desktop.jpg\",\n                width: 2000,\n                height: 2000,\n                className: \"absolute z-0\"\n            }, void 0, false, {\n                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-50 flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        alt: \"ee\",\n                        src: \"/Casablanca.png\",\n                        width: 2000,\n                        height: 2000,\n                        className: \"w-96 z-50\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col justify-center items-center pb-12\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-bold z-50 pb-4 text-4xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400\",\n                            children: \"Are you ready to make a choice ?\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full max-w-5xl mx-auto flex items-center \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CountdownItem, {\n                                num: timerDays,\n                                text: \"Jours\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CountdownItem, {\n                                num: timerHours,\n                                text: \"Heurs\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CountdownItem, {\n                                num: timerMinutes,\n                                text: \"Minutes\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CountdownItem, {\n                                num: timerSeconds,\n                                text: \"Secondes\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(AnimatedTimer, \"L6w3BwUURqIftFOxWCmJmcOOO18=\");\n_c = AnimatedTimer;\nconst CountdownItem = (param)=>{\n    let { num, text } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"font-mono w-1/4 h-24 md:h-36 flex flex-col gap-1 md:gap-2 items-center justify-center border-r-[1px] border-slate-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full bg text-center relative overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n                    mode: \"popLayout\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                        initial: {\n                            y: \"100%\"\n                        },\n                        animate: {\n                            y: \"0%\"\n                        },\n                        exit: {\n                            y: \"-100%\"\n                        },\n                        transition: {\n                            ease: \"backIn\",\n                            duration: 0.75\n                        },\n                        className: \"block text-2xl md:text-4xl lg:text-6xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-medium\",\n                        children: num\n                    }, num, false, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-xs md:text-sm lg:text-base font-light text-slate-500\",\n                children: text\n            }, void 0, false, {\n                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = CountdownItem;\nvar _c, _c1;\n$RefreshReg$(_c, \"AnimatedTimer\");\n$RefreshReg$(_c1, \"CountdownItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBQ3dDLE1BQUs7OEJBQ3BCLDRFQUFDdkMsaURBQU1BLENBQUN3QyxJQUFJO3dCQUVWQyxTQUFTOzRCQUFFQyxHQUFHO3dCQUFPO3dCQUNyQkMsU0FBUzs0QkFBRUQsR0FBRzt3QkFBSzt3QkFDbkJFLE1BQU07NEJBQUVGLEdBQUc7d0JBQVE7d0JBQ25CRyxZQUFZOzRCQUFFQyxNQUFNOzRCQUFVQyxVQUFVO3dCQUFLO3dCQUM3Q2pCLFdBQVU7a0NBRVRPO3VCQVBJQTs7Ozs7Ozs7Ozs7Ozs7OzBCQVdYLDhEQUFDRztnQkFBS1YsV0FBVTswQkFDYlE7Ozs7Ozs7Ozs7OztBQUlUO01BdEJNRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZHRpbWVyLnRzeD83ZjYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmltYXRlZFRpbWVyKCkge1xyXG4gIGNvbnN0IFt0aW1lckRheXMsIHNldFRpbWVyRGF5c10gPSB1c2VTdGF0ZShcIjAwXCIpO1xyXG4gIGNvbnN0IFt0aW1lckhvdXJzLCBzZXRUaW1lckhvdXJzXSA9IHVzZVN0YXRlKFwiMDBcIik7XHJcbiAgY29uc3QgW3RpbWVyTWludXRlcywgc2V0VGltZXJNaW51dGVzXSA9IHVzZVN0YXRlKFwiMDBcIik7XHJcbiAgY29uc3QgW3RpbWVyU2Vjb25kcywgc2V0VGltZXJTZWNvbmRzXSA9IHVzZVN0YXRlKFwiMDBcIik7XHJcblxyXG4gIGNvbnN0IGludGVydmFsID0gdXNlUmVmPE5vZGVKUy5UaW1lb3V0IHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IHN0YXJ0VGltZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb3VudGRvd25EYXRlID0gbmV3IERhdGUoXCJNYXkgMjUsIDIwMjUgMDA6MTg6MDBcIikuZ2V0VGltZSgpO1xyXG4gICAgaW50ZXJ2YWwuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gY291bnRkb3duRGF0ZSAtIG5vdztcclxuXHJcbiAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgIChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcclxuXHJcbiAgICAgIGlmIChkaXN0YW5jZSA8IDApIHtcclxuICAgICAgICBpZiAoaW50ZXJ2YWwuY3VycmVudCkgY2xlYXJJbnRlcnZhbChpbnRlcnZhbC5jdXJyZW50KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRUaW1lckRheXMoU3RyaW5nKGRheXMpLnBhZFN0YXJ0KDIsIFwiMFwiKSk7XHJcbiAgICAgICAgc2V0VGltZXJIb3VycyhTdHJpbmcoaG91cnMpLnBhZFN0YXJ0KDIsIFwiMFwiKSk7XHJcbiAgICAgICAgc2V0VGltZXJNaW51dGVzKFN0cmluZyhtaW51dGVzKS5wYWRTdGFydCgyLCBcIjBcIikpO1xyXG4gICAgICAgIHNldFRpbWVyU2Vjb25kcyhTdHJpbmcoc2Vjb25kcykucGFkU3RhcnQoMiwgXCIwXCIpKTtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHN0YXJ0VGltZXIoKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmIChpbnRlcnZhbC5jdXJyZW50KSBjbGVhckludGVydmFsKGludGVydmFsLmN1cnJlbnQpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHJlbGF0aXZlXCI+XHJcblxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgICBhbHQ9XCJjYXNhXCJcclxuICAgICAgICBzcmM9XCIvTFAtRGVza3RvcC5qcGdcIlxyXG4gICAgICAgIHdpZHRoPXsyMDAwfVxyXG4gICAgICAgIGhlaWdodD17MjAwMH1cclxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTBcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInotNTAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiZWVcIiBzcmM9Jy9DYXNhYmxhbmNhLnBuZycgd2lkdGg9ezIwMDB9IGhlaWdodD17MjAwMH0gY2xhc3NOYW1lPVwidy05NiB6LTUwXCIvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcGItMTJcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgei01MCBwYi00IHRleHQtNHhsIG1kOnRleHQtNXhsIHRleHQtY2VudGVyIGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50IGJnLWdyYWRpZW50LXRvLWIgZnJvbS1uZXV0cmFsLTUwIHRvLW5ldXRyYWwtNDAwXCI+XHJcbiAgICAgICAgICAgIEFyZSB5b3UgcmVhZHkgdG8gbWFrZSBhIGNob2ljZSA/XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTV4bCBteC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICAgICAgPENvdW50ZG93bkl0ZW0gbnVtPXt0aW1lckRheXN9IHRleHQ9XCJKb3Vyc1wiIC8+XHJcbiAgICAgICAgICA8Q291bnRkb3duSXRlbSBudW09e3RpbWVySG91cnN9IHRleHQ9XCJIZXVyc1wiIC8+XHJcbiAgICAgICAgICA8Q291bnRkb3duSXRlbSBudW09e3RpbWVyTWludXRlc30gdGV4dD1cIk1pbnV0ZXNcIiAvPlxyXG4gICAgICAgICAgPENvdW50ZG93bkl0ZW0gbnVtPXt0aW1lclNlY29uZHN9IHRleHQ9XCJTZWNvbmRlc1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgQ291bnRkb3duSXRlbSA9ICh7IG51bSwgdGV4dCB9OiB7IG51bTogc3RyaW5nOyB0ZXh0OiBzdHJpbmcgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbW9ubyB3LTEvNCBoLTI0IG1kOmgtMzYgZmxleCBmbGV4LWNvbCBnYXAtMSBtZDpnYXAtMiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYm9yZGVyLXItWzFweF0gYm9yZGVyLXNsYXRlLTIwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZyB0ZXh0LWNlbnRlciByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIG1vZGU9XCJwb3BMYXlvdXRcIj5cclxuICAgICAgICAgIDxtb3Rpb24uc3BhblxyXG4gICAgICAgICAgICBrZXk9e251bX1cclxuICAgICAgICAgICAgaW5pdGlhbD17eyB5OiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBhbmltYXRlPXt7IHk6IFwiMCVcIiB9fVxyXG4gICAgICAgICAgICBleGl0PXt7IHk6IFwiLTEwMCVcIiB9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGVhc2U6IFwiYmFja0luXCIsIGR1cmF0aW9uOiAwLjc1IH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtMnhsIG1kOnRleHQtNHhsIGxnOnRleHQtNnhsIHhsOnRleHQtN3hsIGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50IGJnLWdyYWRpZW50LXRvLWIgZnJvbS1uZXV0cmFsLTUwIHRvLW5ldXRyYWwtNDAwIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge251bX1cclxuICAgICAgICAgIDwvbW90aW9uLnNwYW4+XHJcbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIG1kOnRleHQtc20gbGc6dGV4dC1iYXNlIGZvbnQtbGlnaHQgdGV4dC1zbGF0ZS01MDBcIj5cclxuICAgICAgICB7dGV4dH1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJJbWFnZSIsIkFuaW1hdGVkVGltZXIiLCJ0aW1lckRheXMiLCJzZXRUaW1lckRheXMiLCJ0aW1lckhvdXJzIiwic2V0VGltZXJIb3VycyIsInRpbWVyTWludXRlcyIsInNldFRpbWVyTWludXRlcyIsInRpbWVyU2Vjb25kcyIsInNldFRpbWVyU2Vjb25kcyIsImludGVydmFsIiwic3RhcnRUaW1lciIsImNvdW50ZG93bkRhdGUiLCJEYXRlIiwiZ2V0VGltZSIsImN1cnJlbnQiLCJzZXRJbnRlcnZhbCIsIm5vdyIsImRpc3RhbmNlIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJjbGVhckludGVydmFsIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJhbHQiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImgxIiwiQ291bnRkb3duSXRlbSIsIm51bSIsInRleHQiLCJtb2RlIiwic3BhbiIsImluaXRpYWwiLCJ5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImR1cmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Animatedtimer.tsx\n"));

/***/ })

});