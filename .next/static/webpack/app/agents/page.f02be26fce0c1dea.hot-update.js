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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AgentPopup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\nfunction AgentPopup(param) {\n    let { agent } = param;\n    return agent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-col absolute inset-0 m-auto text-left bg-white bg-opacity-[50%] w-[70%] h-[60%]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex shadow-md justify-center items-center rounded-full overflow-hidden w-20 h-20\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                src: agent.src,\n                                alt: agent.name,\n                                width: agent.width,\n                                height: agent.height,\n                                objectFit: \"cover\",\n                                className: \"rounded-full\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-bold text-center\",\n                            children: agent.name\n                        }, void 0, false, {\n                            fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-bold\",\n                                    children: \"Cell:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, this),\n                                \" \",\n                                agent.cell\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-bold\",\n                                    children: \"Office:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, this),\n                                \" \",\n                                agent.office\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, this),\n                        agent.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-bold\",\n                                    children: \"Email:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 17\n                                }, this),\n                                \" \",\n                                agent.email\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n            lineNumber: 18,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n        lineNumber: 17,\n        columnNumber: 7\n    }, this);\n}\n_c = AgentPopup;\nvar _c;\n$RefreshReg$(_c, \"AgentPopup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZ2VudHMvQWdlbnRQb3B1cC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQjtBQWFoQixTQUFTQyxXQUFXLEtBQXFCO1FBQXJCLEVBQUVDLEtBQUssRUFBYyxHQUFyQjtJQUNqQyxPQUNFQSx1QkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7OzhCQUNHLDhEQUFDQTs7Ozs7OEJBR0gsOERBQUNBO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNKLGtEQUFLQTtnQ0FDSkssS0FBS0gsTUFBTUcsR0FBRztnQ0FDZEMsS0FBS0osTUFBTUssSUFBSTtnQ0FDZkMsT0FBT04sTUFBTU0sS0FBSztnQ0FDbEJDLFFBQVFQLE1BQU1PLE1BQU07Z0NBQ3BCQyxXQUFVO2dDQUNWTixXQUFVOzs7Ozs7Ozs7OztzQ0FHZCw4REFBQ087NEJBQUVQLFdBQVU7c0NBQXlCRixNQUFNSyxJQUFJOzs7Ozs7Ozs7Ozs7OEJBRWxELDhEQUFDSjtvQkFBSUMsV0FBWTs7c0NBQ2YsOERBQUNPOzs4Q0FDQyw4REFBQ0M7b0NBQUtSLFdBQVU7OENBQVk7Ozs7OztnQ0FBWTtnQ0FBRUYsTUFBTVcsSUFBSTs7Ozs7OztzQ0FFdEQsOERBQUNGOzs4Q0FDQyw4REFBQ0M7b0NBQUtSLFdBQVU7OENBQVk7Ozs7OztnQ0FBYztnQ0FBRUYsTUFBTVksTUFBTTs7Ozs7Ozt3QkFFekRaLE1BQU1hLEtBQUssa0JBQ1YsOERBQUNKOzs4Q0FDQyw4REFBQ0M7b0NBQUtSLFdBQVU7OENBQVk7Ozs7OztnQ0FBYTtnQ0FBRUYsTUFBTWEsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXRFO0tBdEN3QmQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FnZW50cy9BZ2VudFBvcHVwLnRzeD9kMjRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuZXhwb3J0IHR5cGUgQWdlbnQgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY2VsbDogc3RyaW5nO1xuICBvZmZpY2U6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgc3JjOiBzdHJpbmc7IC8vIE1ha2Ugc3VyZSB0aGUgcGF0aCBpcyBjb3JyZWN0IGFuZCB0aGUgaW1hZ2UgZXhpc3RzIGluIHlvdXIgcHVibGljIGRpcmVjdG9yeVxuICB3aWR0aDogbnVtYmVyOyAvLyBFeGFtcGxlIHdpZHRoLCBhZGp1c3QgYXMgbmVlZGVkXG4gIGhlaWdodDogbnVtYmVyOyAvLyBFeGFtcGxlIGhlaWdodCwgYWRqdXN0IGFzIG5lZWRlZCB0byBtYWludGFpbiB0aGUgYXNwZWN0IHJhdGlvXG59O1xuaW50ZXJmYWNlIGFnZW50UHJvcHMge1xuICBhZ2VudDogQWdlbnQgfCBhbnk7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZ2VudFBvcHVwKHsgYWdlbnQgfTogYWdlbnRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIGFnZW50ICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb2wgYWJzb2x1dGUgaW5zZXQtMCBtLWF1dG8gdGV4dC1sZWZ0IGJnLXdoaXRlIGJnLW9wYWNpdHktWzUwJV0gdy1bNzAlXSBoLVs2MCVdXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNoYWRvdy1tZCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIG92ZXJmbG93LWhpZGRlbiB3LTIwIGgtMjBcIj5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXthZ2VudC5zcmN9XG4gICAgICAgICAgICAgICAgYWx0PXthZ2VudC5uYW1lfVxuICAgICAgICAgICAgICAgIHdpZHRoPXthZ2VudC53aWR0aH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2FnZW50LmhlaWdodH1cbiAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtY2VudGVyXCI+e2FnZW50Lm5hbWV9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJgfT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5DZWxsOjwvc3Bhbj4ge2FnZW50LmNlbGx9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+T2ZmaWNlOjwvc3Bhbj4ge2FnZW50Lm9mZmljZX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIHthZ2VudC5lbWFpbCAmJiAoXG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkVtYWlsOjwvc3Bhbj4ge2FnZW50LmVtYWlsfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkFnZW50UG9wdXAiLCJhZ2VudCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsInAiLCJzcGFuIiwiY2VsbCIsIm9mZmljZSIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/agents/AgentPopup.tsx\n"));

/***/ })

});