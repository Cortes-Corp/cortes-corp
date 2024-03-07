"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/agents/page",{

/***/ "(app-pages-browser)/./app/agents/AgentPopup.tsx":
/*!***********************************!*\
  !*** ./app/agents/AgentPopup.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AgentPopup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\nfunction AgentPopup(param) {\n    let { agent } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[96vw] sm:w-[34rem] bg-slate-50 p-5     justify-between   transition-all duration-500 rounded-xl shadow flex  gap-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex shadow-md justify-center items-center rounded-full overflow-hidden w-20 h-20\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: agent.src,\n                            alt: agent.name,\n                            width: agent.width,\n                            height: agent.height,\n                            objectFit: \"cover\",\n                            className: \"rounded-full\"\n                        }, void 0, false, {\n                            fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-bold text-center\",\n                        children: agent.name\n                    }, void 0, false, {\n                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-bold\",\n                                children: \"Cell:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this),\n                            \" \",\n                            agent.cell\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-bold\",\n                                children: \"Office:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this),\n                            \" \",\n                            agent.office\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this),\n                    agent.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-bold\",\n                                children: \"Email:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, this),\n                            \" \",\n                            agent.email\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_c = AgentPopup;\nvar _c;\n$RefreshReg$(_c, \"AgentPopup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZ2VudHMvQWdlbnRQb3B1cC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUM4QjtBQWFmLFNBQVNDLFdBQVcsS0FBbUI7UUFBbkIsRUFBQ0MsS0FBSyxFQUFhLEdBQW5CO0lBQy9CLHFCQUNJLDhEQUFDQztRQUNEQyxXQUFZOzswQkFDWiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0osa0RBQUtBOzRCQUNKSyxLQUFLSCxNQUFNRyxHQUFHOzRCQUNkQyxLQUFLSixNQUFNSyxJQUFJOzRCQUNmQyxPQUFPTixNQUFNTSxLQUFLOzRCQUNsQkMsUUFBUVAsTUFBTU8sTUFBTTs0QkFDcEJDLFdBQVU7NEJBQ1ZOLFdBQVU7Ozs7Ozs7Ozs7O2tDQUdkLDhEQUFDTzt3QkFBRVAsV0FBVTtrQ0FBeUJGLE1BQU1LLElBQUk7Ozs7Ozs7Ozs7OzswQkFFbEQsOERBQUNKO2dCQUFJQyxXQUFZOztrQ0FDZiw4REFBQ087OzBDQUNDLDhEQUFDQztnQ0FBS1IsV0FBVTswQ0FBWTs7Ozs7OzRCQUFZOzRCQUFFRixNQUFNVyxJQUFJOzs7Ozs7O2tDQUV0RCw4REFBQ0Y7OzBDQUNDLDhEQUFDQztnQ0FBS1IsV0FBVTswQ0FBWTs7Ozs7OzRCQUFjOzRCQUFFRixNQUFNWSxNQUFNOzs7Ozs7O29CQUV6RFosTUFBTWEsS0FBSyxrQkFDViw4REFBQ0o7OzBDQUNDLDhEQUFDQztnQ0FBS1IsV0FBVTswQ0FBWTs7Ozs7OzRCQUFhOzRCQUFFRixNQUFNYSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXBFO0tBbEN3QmQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FnZW50cy9BZ2VudFBvcHVwLnRzeD9kMjRhIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmV4cG9ydCB0eXBlIEFnZW50ID0ge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICAgIGNlbGw6IHN0cmluZyxcbiAgICAgIG9mZmljZTogc3RyaW5nLFxuICAgICAgZW1haWw6IHN0cmluZyxcbiAgICAgIHNyYzogc3RyaW5nLCAvLyBNYWtlIHN1cmUgdGhlIHBhdGggaXMgY29ycmVjdCBhbmQgdGhlIGltYWdlIGV4aXN0cyBpbiB5b3VyIHB1YmxpYyBkaXJlY3RvcnlcbiAgICAgIHdpZHRoOiBudW1iZXIsIC8vIEV4YW1wbGUgd2lkdGgsIGFkanVzdCBhcyBuZWVkZWRcbiAgICAgIGhlaWdodDogbnVtYmVyLCAvLyBFeGFtcGxlIGhlaWdodCwgYWRqdXN0IGFzIG5lZWRlZCB0byBtYWludGFpbiB0aGUgYXNwZWN0IHJhdGlvXG59XG5pbnRlcmZhY2UgYWdlbnRQcm9wcyB7XG4gICAgYWdlbnQ6IEFnZW50IHwgYW55XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZ2VudFBvcHVwKHthZ2VudH06IGFnZW50UHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YHctWzk2dnddIHNtOnctWzM0cmVtXSBiZy1zbGF0ZS01MCBwLTUgICAgIGp1c3RpZnktYmV0d2VlbiAgIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCByb3VuZGVkLXhsIHNoYWRvdyBmbGV4ICBnYXAtMjBgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzaGFkb3ctbWQganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBvdmVyZmxvdy1oaWRkZW4gdy0yMCBoLTIwXCI+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXthZ2VudC5zcmN9XG4gICAgICAgICAgICAgIGFsdD17YWdlbnQubmFtZX1cbiAgICAgICAgICAgICAgd2lkdGg9e2FnZW50LndpZHRofVxuICAgICAgICAgICAgICBoZWlnaHQ9e2FnZW50LmhlaWdodH1cbiAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1jZW50ZXJcIj57YWdlbnQubmFtZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyYH0+XG4gICAgICAgICAgPHAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPkNlbGw6PC9zcGFuPiB7YWdlbnQuY2VsbH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5PZmZpY2U6PC9zcGFuPiB7YWdlbnQub2ZmaWNlfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICB7YWdlbnQuZW1haWwgJiYgKFxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkVtYWlsOjwvc3Bhbj4ge2FnZW50LmVtYWlsfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gICAgXG59Il0sIm5hbWVzIjpbIkltYWdlIiwiQWdlbnRQb3B1cCIsImFnZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwicCIsInNwYW4iLCJjZWxsIiwib2ZmaWNlIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/agents/AgentPopup.tsx\n"));

/***/ })

});