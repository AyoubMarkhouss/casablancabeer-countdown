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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AnimatedTimer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction AnimatedTimer() {\n    _s();\n    const [timerDays, setTimerDays] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"00\");\n    const [timerHours, setTimerHours] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"00\");\n    const [timerMinutes, setTimerMinutes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"00\");\n    const [timerSeconds, setTimerSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"00\");\n    const interval = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const startTimer = ()=>{\n        const countdownDate = new Date(\"May 25, 2025 00:18:00\").getTime();\n        interval.current = setInterval(()=>{\n            const now = new Date().getTime();\n            const distance = countdownDate - now;\n            const days = Math.floor(distance / (1000 * 60 * 60 * 24));\n            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n            const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));\n            const seconds = Math.floor(distance % (1000 * 60) / 1000);\n            if (distance < 0) {\n                if (interval.current) clearInterval(interval.current);\n            } else {\n                setTimerDays(String(days).padStart(2, \"0\"));\n                setTimerHours(String(hours).padStart(2, \"0\"));\n                setTimerMinutes(String(minutes).padStart(2, \"0\"));\n                setTimerSeconds(String(seconds).padStart(2, \"0\"));\n            }\n        }, 1000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        startTimer();\n        return ()=>{\n            if (interval.current) clearInterval(interval.current);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                alt: \"casa\",\n                src: \"/LP-Desktop.jpg\",\n                width: 2000,\n                height: 2000,\n                className: \"absolute z-0\"\n            }, void 0, false, {\n                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-40\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col justify-center items-center pb-12\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-bold pb-4 text-4xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400\",\n                            children: \"Are you ready to make a choice ?\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full max-w-5xl mx-auto flex items-center \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CountdownItem, {\n                                num: timerDays,\n                                text: \"Jours\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CountdownItem, {\n                                num: timerHours,\n                                text: \"Heurs\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CountdownItem, {\n                                num: timerMinutes,\n                                text: \"Minutes\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CountdownItem, {\n                                num: timerSeconds,\n                                text: \"Secondes\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(AnimatedTimer, \"L6w3BwUURqIftFOxWCmJmcOOO18=\");\n_c = AnimatedTimer;\nconst CountdownItem = (param)=>{\n    let { num, text } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"font-mono w-1/4 h-24 md:h-36 flex flex-col gap-1 md:gap-2 items-center justify-center border-r-[1px] border-slate-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full text-center relative overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n                    mode: \"popLayout\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                        initial: {\n                            y: \"100%\"\n                        },\n                        animate: {\n                            y: \"0%\"\n                        },\n                        exit: {\n                            y: \"-100%\"\n                        },\n                        transition: {\n                            ease: \"backIn\",\n                            duration: 0.75\n                        },\n                        className: \"block text-2xl md:text-4xl lg:text-6xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-medium\",\n                        children: num\n                    }, num, false, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-xs md:text-sm lg:text-base font-light text-slate-500\",\n                children: text\n            }, void 0, false, {\n                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = CountdownItem;\nvar _c, _c1;\n$RefreshReg$(_c, \"AnimatedTimer\");\n$RefreshReg$(_c1, \"CountdownItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEJBQUVELEdBQUc7d0JBQUs7d0JBQ25CRSxNQUFNOzRCQUFFRixHQUFHO3dCQUFRO3dCQUNuQkcsWUFBWTs0QkFBRUMsTUFBTTs0QkFBVUMsVUFBVTt3QkFBSzt3QkFDN0NqQixXQUFVO2tDQUVUTzt1QkFQSUE7Ozs7Ozs7Ozs7Ozs7OzswQkFXWCw4REFBQ0c7Z0JBQUtWLFdBQVU7MEJBQ2JROzs7Ozs7Ozs7Ozs7QUFJVDtNQXRCTUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQW5pbWF0ZWR0aW1lci50c3g/N2Y2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5pbWF0ZWRUaW1lcigpIHtcclxuICBjb25zdCBbdGltZXJEYXlzLCBzZXRUaW1lckRheXNdID0gdXNlU3RhdGUoXCIwMFwiKTtcclxuICBjb25zdCBbdGltZXJIb3Vycywgc2V0VGltZXJIb3Vyc10gPSB1c2VTdGF0ZShcIjAwXCIpO1xyXG4gIGNvbnN0IFt0aW1lck1pbnV0ZXMsIHNldFRpbWVyTWludXRlc10gPSB1c2VTdGF0ZShcIjAwXCIpO1xyXG4gIGNvbnN0IFt0aW1lclNlY29uZHMsIHNldFRpbWVyU2Vjb25kc10gPSB1c2VTdGF0ZShcIjAwXCIpO1xyXG5cclxuICBjb25zdCBpbnRlcnZhbCA9IHVzZVJlZjxOb2RlSlMuVGltZW91dCB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCBzdGFydFRpbWVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY291bnRkb3duRGF0ZSA9IG5ldyBEYXRlKFwiTWF5IDI1LCAyMDI1IDAwOjE4OjAwXCIpLmdldFRpbWUoKTtcclxuICAgIGludGVydmFsLmN1cnJlbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICBjb25zdCBkaXN0YW5jZSA9IGNvdW50ZG93bkRhdGUgLSBub3c7XHJcblxyXG4gICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihcclxuICAgICAgICAoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcclxuICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcblxyXG4gICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XHJcbiAgICAgICAgaWYgKGludGVydmFsLmN1cnJlbnQpIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwuY3VycmVudCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VGltZXJEYXlzKFN0cmluZyhkYXlzKS5wYWRTdGFydCgyLCBcIjBcIikpO1xyXG4gICAgICAgIHNldFRpbWVySG91cnMoU3RyaW5nKGhvdXJzKS5wYWRTdGFydCgyLCBcIjBcIikpO1xyXG4gICAgICAgIHNldFRpbWVyTWludXRlcyhTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgXCIwXCIpKTtcclxuICAgICAgICBzZXRUaW1lclNlY29uZHMoU3RyaW5nKHNlY29uZHMpLnBhZFN0YXJ0KDIsIFwiMFwiKSk7XHJcbiAgICAgIH1cclxuICAgIH0sIDEwMDApO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzdGFydFRpbWVyKCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAoaW50ZXJ2YWwuY3VycmVudCkgY2xlYXJJbnRlcnZhbChpbnRlcnZhbC5jdXJyZW50KTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlblwiPlxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgICBhbHQ9XCJjYXNhXCJcclxuICAgICAgICBzcmM9XCIvTFAtRGVza3RvcC5qcGdcIlxyXG4gICAgICAgIHdpZHRoPXsyMDAwfVxyXG4gICAgICAgIGhlaWdodD17MjAwMH1cclxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTBcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInotNDBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHBiLTEyXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHBiLTQgdGV4dC00eGwgbWQ6dGV4dC01eGwgdGV4dC1jZW50ZXIgYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnQgYmctZ3JhZGllbnQtdG8tYiBmcm9tLW5ldXRyYWwtNTAgdG8tbmV1dHJhbC00MDBcIj5cclxuICAgICAgICAgICAgQXJlIHlvdSByZWFkeSB0byBtYWtlIGEgY2hvaWNlID9cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctNXhsIG14LWF1dG8gZmxleCBpdGVtcy1jZW50ZXIgXCI+XHJcbiAgICAgICAgICA8Q291bnRkb3duSXRlbSBudW09e3RpbWVyRGF5c30gdGV4dD1cIkpvdXJzXCIgLz5cclxuICAgICAgICAgIDxDb3VudGRvd25JdGVtIG51bT17dGltZXJIb3Vyc30gdGV4dD1cIkhldXJzXCIgLz5cclxuICAgICAgICAgIDxDb3VudGRvd25JdGVtIG51bT17dGltZXJNaW51dGVzfSB0ZXh0PVwiTWludXRlc1wiIC8+XHJcbiAgICAgICAgICA8Q291bnRkb3duSXRlbSBudW09e3RpbWVyU2Vjb25kc30gdGV4dD1cIlNlY29uZGVzXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBDb3VudGRvd25JdGVtID0gKHsgbnVtLCB0ZXh0IH06IHsgbnVtOiBzdHJpbmc7IHRleHQ6IHN0cmluZyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1tb25vIHctMS80IGgtMjQgbWQ6aC0zNiBmbGV4IGZsZXgtY29sIGdhcC0xIG1kOmdhcC0yIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXItci1bMXB4XSBib3JkZXItc2xhdGUtMjAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtY2VudGVyIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2UgbW9kZT1cInBvcExheW91dFwiPlxyXG4gICAgICAgICAgPG1vdGlvbi5zcGFuXHJcbiAgICAgICAgICAgIGtleT17bnVtfVxyXG4gICAgICAgICAgICBpbml0aWFsPXt7IHk6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIGFuaW1hdGU9e3sgeTogXCIwJVwiIH19XHJcbiAgICAgICAgICAgIGV4aXQ9e3sgeTogXCItMTAwJVwiIH19XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZWFzZTogXCJiYWNrSW5cIiwgZHVyYXRpb246IDAuNzUgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC0yeGwgbWQ6dGV4dC00eGwgbGc6dGV4dC02eGwgeGw6dGV4dC03eGwgYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnQgYmctZ3JhZGllbnQtdG8tYiBmcm9tLW5ldXRyYWwtNTAgdG8tbmV1dHJhbC00MDAgZm9udC1tZWRpdW1cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bnVtfVxyXG4gICAgICAgICAgPC9tb3Rpb24uc3Bhbj5cclxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgbWQ6dGV4dC1zbSBsZzp0ZXh0LWJhc2UgZm9udC1saWdodCB0ZXh0LXNsYXRlLTUwMFwiPlxyXG4gICAgICAgIHt0ZXh0fVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsIkltYWdlIiwiQW5pbWF0ZWRUaW1lciIsInRpbWVyRGF5cyIsInNldFRpbWVyRGF5cyIsInRpbWVySG91cnMiLCJzZXRUaW1lckhvdXJzIiwidGltZXJNaW51dGVzIiwic2V0VGltZXJNaW51dGVzIiwidGltZXJTZWNvbmRzIiwic2V0VGltZXJTZWNvbmRzIiwiaW50ZXJ2YWwiLCJzdGFydFRpbWVyIiwiY291bnRkb3duRGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwiY3VycmVudCIsInNldEludGVydmFsIiwibm93IiwiZGlzdGFuY2UiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImNsZWFySW50ZXJ2YWwiLCJTdHJpbmciLCJwYWRTdGFydCIsImRpdiIsImNsYXNzTmFtZSIsImFsdCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiaDEiLCJDb3VudGRvd25JdGVtIiwibnVtIiwidGV4dCIsIm1vZGUiLCJzcGFuIiwiaW5pdGlhbCIsInkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJlYXNlIiwiZHVyYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Animatedtimer.tsx\n"));

/***/ })

});