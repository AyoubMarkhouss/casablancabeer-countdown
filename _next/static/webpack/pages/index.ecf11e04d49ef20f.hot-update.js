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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AnimatedTimer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nfunction AnimatedTimer() {\n    _s();\n    const [timerDays, setTimerDays] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"00\");\n    const [timerHours, setTimerHours] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"00\");\n    const [timerMinutes, setTimerMinutes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"00\");\n    const [timerSeconds, setTimerSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"00\");\n    const interval = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const startTimer = ()=>{\n        const countdownDate = new Date(\"May 25, 2025 00:18:00\").getTime();\n        interval.current = setInterval(()=>{\n            const now = new Date().getTime();\n            const distance = countdownDate - now;\n            const days = Math.floor(distance / (1000 * 60 * 60 * 24));\n            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n            const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));\n            const seconds = Math.floor(distance % (1000 * 60) / 1000);\n            if (distance < 0) {\n                if (interval.current) clearInterval(interval.current);\n            } else {\n                setTimerDays(String(days).padStart(2, \"0\"));\n                setTimerHours(String(hours).padStart(2, \"0\"));\n                setTimerMinutes(String(minutes).padStart(2, \"0\"));\n                setTimerSeconds(String(seconds).padStart(2, \"0\"));\n            }\n        }, 1000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        startTimer();\n        return ()=>{\n            if (interval.current) clearInterval(interval.current);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center items-center pb-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"font-bold pb-4 text-4xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400\",\n                    children: \"Are you ready to make a choice ?\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-5xl mx-auto flex items-center \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CountdownItem, {\n                        num: timerDays,\n                        text: \"Jours\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CountdownItem, {\n                        num: timerHours,\n                        text: \"Heurs\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CountdownItem, {\n                        num: timerMinutes,\n                        text: \"Minutes\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CountdownItem, {\n                        num: timerSeconds,\n                        text: \"Secondes\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(AnimatedTimer, \"L6w3BwUURqIftFOxWCmJmcOOO18=\");\n_c = AnimatedTimer;\nconst CountdownItem = (param)=>{\n    let { num, text } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"font-mono w-1/4 h-24 md:h-36 flex flex-col gap-1 md:gap-2 items-center justify-center border-r-[1px] border-slate-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full text-center relative overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                    mode: \"popLayout\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                        initial: {\n                            y: \"100%\"\n                        },\n                        animate: {\n                            y: \"0%\"\n                        },\n                        exit: {\n                            y: \"-100%\"\n                        },\n                        transition: {\n                            ease: \"backIn\",\n                            duration: 0.75\n                        },\n                        className: \"block text-2xl md:text-4xl lg:text-6xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-medium\",\n                        children: num\n                    }, num, false, {\n                        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-xs md:text-sm lg:text-base font-light text-slate-500\",\n                children: text\n            }, void 0, false, {\n                fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\DECLIC\\\\CasablancaBeerEvent\\\\CB-Countdown\\\\src\\\\components\\\\Animatedtimer.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = CountdownItem;\nvar _c, _c1;\n$RefreshReg$(_c, \"AnimatedTimer\");\n$RefreshReg$(_c1, \"CountdownItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzswQkFXWCw4REFBQ0c7Z0JBQUtOLFdBQVU7MEJBQ2JJOzs7Ozs7Ozs7Ozs7QUFJVDtNQXRCTUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQW5pbWF0ZWR0aW1lci50c3g/N2Y2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmltYXRlZFRpbWVyKCkge1xyXG4gIGNvbnN0IFt0aW1lckRheXMsIHNldFRpbWVyRGF5c10gPSB1c2VTdGF0ZShcIjAwXCIpO1xyXG4gIGNvbnN0IFt0aW1lckhvdXJzLCBzZXRUaW1lckhvdXJzXSA9IHVzZVN0YXRlKFwiMDBcIik7XHJcbiAgY29uc3QgW3RpbWVyTWludXRlcywgc2V0VGltZXJNaW51dGVzXSA9IHVzZVN0YXRlKFwiMDBcIik7XHJcbiAgY29uc3QgW3RpbWVyU2Vjb25kcywgc2V0VGltZXJTZWNvbmRzXSA9IHVzZVN0YXRlKFwiMDBcIik7XHJcblxyXG4gIGNvbnN0IGludGVydmFsID0gdXNlUmVmPE5vZGVKUy5UaW1lb3V0IHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IHN0YXJ0VGltZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb3VudGRvd25EYXRlID0gbmV3IERhdGUoXCJNYXkgMjUsIDIwMjUgMDA6MTg6MDBcIikuZ2V0VGltZSgpO1xyXG4gICAgaW50ZXJ2YWwuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gY291bnRkb3duRGF0ZSAtIG5vdztcclxuXHJcbiAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgIChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcclxuXHJcbiAgICAgIGlmIChkaXN0YW5jZSA8IDApIHtcclxuICAgICAgICBpZiAoaW50ZXJ2YWwuY3VycmVudCkgY2xlYXJJbnRlcnZhbChpbnRlcnZhbC5jdXJyZW50KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRUaW1lckRheXMoU3RyaW5nKGRheXMpLnBhZFN0YXJ0KDIsIFwiMFwiKSk7XHJcbiAgICAgICAgc2V0VGltZXJIb3VycyhTdHJpbmcoaG91cnMpLnBhZFN0YXJ0KDIsIFwiMFwiKSk7XHJcbiAgICAgICAgc2V0VGltZXJNaW51dGVzKFN0cmluZyhtaW51dGVzKS5wYWRTdGFydCgyLCBcIjBcIikpO1xyXG4gICAgICAgIHNldFRpbWVyU2Vjb25kcyhTdHJpbmcoc2Vjb25kcykucGFkU3RhcnQoMiwgXCIwXCIpKTtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHN0YXJ0VGltZXIoKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmIChpbnRlcnZhbC5jdXJyZW50KSBjbGVhckludGVydmFsKGludGVydmFsLmN1cnJlbnQpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHBiLTEyXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBwYi00IHRleHQtNHhsIG1kOnRleHQtNXhsIHRleHQtY2VudGVyIGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50IGJnLWdyYWRpZW50LXRvLWIgZnJvbS1uZXV0cmFsLTUwIHRvLW5ldXRyYWwtNDAwXCI+XHJcbiAgICAgICAgICBBcmUgeW91IHJlYWR5IHRvIG1ha2UgYSBjaG9pY2UgP1xyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy01eGwgbXgtYXV0byBmbGV4IGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICA8Q291bnRkb3duSXRlbSBudW09e3RpbWVyRGF5c30gdGV4dD1cIkpvdXJzXCIgLz5cclxuICAgICAgICA8Q291bnRkb3duSXRlbSBudW09e3RpbWVySG91cnN9IHRleHQ9XCJIZXVyc1wiIC8+XHJcbiAgICAgICAgPENvdW50ZG93bkl0ZW0gbnVtPXt0aW1lck1pbnV0ZXN9IHRleHQ9XCJNaW51dGVzXCIgLz5cclxuICAgICAgICA8Q291bnRkb3duSXRlbSBudW09e3RpbWVyU2Vjb25kc30gdGV4dD1cIlNlY29uZGVzXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBDb3VudGRvd25JdGVtID0gKHsgbnVtLCB0ZXh0IH06IHsgbnVtOiBzdHJpbmc7IHRleHQ6IHN0cmluZyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1tb25vIHctMS80IGgtMjQgbWQ6aC0zNiBmbGV4IGZsZXgtY29sIGdhcC0xIG1kOmdhcC0yIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXItci1bMXB4XSBib3JkZXItc2xhdGUtMjAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtY2VudGVyIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2UgbW9kZT1cInBvcExheW91dFwiPlxyXG4gICAgICAgICAgPG1vdGlvbi5zcGFuXHJcbiAgICAgICAgICAgIGtleT17bnVtfVxyXG4gICAgICAgICAgICBpbml0aWFsPXt7IHk6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIGFuaW1hdGU9e3sgeTogXCIwJVwiIH19XHJcbiAgICAgICAgICAgIGV4aXQ9e3sgeTogXCItMTAwJVwiIH19XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZWFzZTogXCJiYWNrSW5cIiwgZHVyYXRpb246IDAuNzUgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC0yeGwgbWQ6dGV4dC00eGwgbGc6dGV4dC02eGwgeGw6dGV4dC03eGwgYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnQgYmctZ3JhZGllbnQtdG8tYiBmcm9tLW5ldXRyYWwtNTAgdG8tbmV1dHJhbC00MDAgZm9udC1tZWRpdW1cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bnVtfVxyXG4gICAgICAgICAgPC9tb3Rpb24uc3Bhbj5cclxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgbWQ6dGV4dC1zbSBsZzp0ZXh0LWJhc2UgZm9udC1saWdodCB0ZXh0LXNsYXRlLTUwMFwiPlxyXG4gICAgICAgIHt0ZXh0fVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsIkFuaW1hdGVkVGltZXIiLCJ0aW1lckRheXMiLCJzZXRUaW1lckRheXMiLCJ0aW1lckhvdXJzIiwic2V0VGltZXJIb3VycyIsInRpbWVyTWludXRlcyIsInNldFRpbWVyTWludXRlcyIsInRpbWVyU2Vjb25kcyIsInNldFRpbWVyU2Vjb25kcyIsImludGVydmFsIiwic3RhcnRUaW1lciIsImNvdW50ZG93bkRhdGUiLCJEYXRlIiwiZ2V0VGltZSIsImN1cnJlbnQiLCJzZXRJbnRlcnZhbCIsIm5vdyIsImRpc3RhbmNlIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJjbGVhckludGVydmFsIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIkNvdW50ZG93bkl0ZW0iLCJudW0iLCJ0ZXh0IiwibW9kZSIsInNwYW4iLCJpbml0aWFsIiwieSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Animatedtimer.tsx\n"));

/***/ })

});