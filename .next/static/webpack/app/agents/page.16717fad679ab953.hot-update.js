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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AgentPopup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\nfunction AgentPopup(param) {\n    let { agent } = param;\n    return agent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-col absolute z-[100] inset-0 m-auto text-left bg-black bg-opacity-[40%] pt-[10rem] w-screen h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex bg-white border w-[70%] h-[70%] rounded-[1rem]  overflow-scroll m-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" flex-col   pb-2 items-center  bg-white  m-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex sticky top-0     flex-col items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"  shadow-md justify-center items-center rounded-full overflow-hidden w-20 h-20\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        src: agent.src,\n                                        alt: agent.name,\n                                        width: agent.width,\n                                        height: agent.height,\n                                        objectFit: \"cover\",\n                                        className: \"rounded-full\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-bold text-center\",\n                                    children: agent.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"font-bold\",\n                                            children: \"Cell:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 17\n                                        }, this),\n                                        \" \",\n                                        agent.cell\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"font-bold\",\n                                            children: \"Office:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 17\n                                        }, this),\n                                        \" \",\n                                        agent.office\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this),\n                                agent.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"font-bold\",\n                                            children: \"Email:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 19\n                                        }, this),\n                                        \" \",\n                                        agent.email\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" bg-gray-50 px-[10%] w-[70%] m-auto pt-5 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: agent.bio\n                    }, void 0, false, {\n                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n            lineNumber: 19,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n        lineNumber: 18,\n        columnNumber: 7\n    }, this);\n}\n_c = AgentPopup;\nvar _c;\n$RefreshReg$(_c, \"AgentPopup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZ2VudHMvQWdlbnRQb3B1cC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQjtBQWNoQixTQUFTQyxXQUFXLEtBQXFCO1FBQXJCLEVBQUVDLEtBQUssRUFBYyxHQUFyQjtJQUNqQyxPQUNFQSx1QkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ0osa0RBQUtBO3dDQUNKSyxLQUFLSCxNQUFNRyxHQUFHO3dDQUNkQyxLQUFLSixNQUFNSyxJQUFJO3dDQUNmQyxPQUFPTixNQUFNTSxLQUFLO3dDQUNsQkMsUUFBUVAsTUFBTU8sTUFBTTt3Q0FDcEJDLFdBQVU7d0NBQ1ZOLFdBQVU7Ozs7Ozs7Ozs7OzhDQUdkLDhEQUFDTztvQ0FBRVAsV0FBVTs4Q0FBeUJGLE1BQU1LLElBQUk7Ozs7Ozs7Ozs7OztzQ0FFbEQsOERBQUNKOzRCQUFJQyxXQUFZOzs4Q0FDZiw4REFBQ087O3NEQUNDLDhEQUFDQzs0Q0FBS1IsV0FBVTtzREFBWTs7Ozs7O3dDQUFZO3dDQUFFRixNQUFNVyxJQUFJOzs7Ozs7OzhDQUV0RCw4REFBQ0Y7O3NEQUNDLDhEQUFDQzs0Q0FBS1IsV0FBVTtzREFBWTs7Ozs7O3dDQUFjO3dDQUFFRixNQUFNWSxNQUFNOzs7Ozs7O2dDQUV6RFosTUFBTWEsS0FBSyxrQkFDViw4REFBQ0o7O3NEQUNDLDhEQUFDQzs0Q0FBS1IsV0FBVTtzREFBWTs7Ozs7O3dDQUFhO3dDQUFFRixNQUFNYSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUs5RCw4REFBQ1o7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNPO2tDQUFHVCxNQUFNYyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpCO0tBeEN3QmYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FnZW50cy9BZ2VudFBvcHVwLnRzeD9kMjRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuZXhwb3J0IHR5cGUgQWdlbnQgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY2VsbDogc3RyaW5nO1xuICBvZmZpY2U6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgYmlvOiBzdHJpbmdcbiAgc3JjOiBzdHJpbmc7IC8vIE1ha2Ugc3VyZSB0aGUgcGF0aCBpcyBjb3JyZWN0IGFuZCB0aGUgaW1hZ2UgZXhpc3RzIGluIHlvdXIgcHVibGljIGRpcmVjdG9yeVxuICB3aWR0aDogbnVtYmVyOyAvLyBFeGFtcGxlIHdpZHRoLCBhZGp1c3QgYXMgbmVlZGVkXG4gIGhlaWdodDogbnVtYmVyOyAvLyBFeGFtcGxlIGhlaWdodCwgYWRqdXN0IGFzIG5lZWRlZCB0byBtYWludGFpbiB0aGUgYXNwZWN0IHJhdGlvXG59O1xuaW50ZXJmYWNlIGFnZW50UHJvcHMge1xuICBhZ2VudDogQWdlbnQgfCBhbnk7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZ2VudFBvcHVwKHsgYWdlbnQgfTogYWdlbnRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIGFnZW50ICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb2wgYWJzb2x1dGUgei1bMTAwXSBpbnNldC0wIG0tYXV0byB0ZXh0LWxlZnQgYmctYmxhY2sgYmctb3BhY2l0eS1bNDAlXSBwdC1bMTByZW1dIHctc2NyZWVuIGgtc2NyZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBiZy13aGl0ZSBib3JkZXIgdy1bNzAlXSBoLVs3MCVdIHJvdW5kZWQtWzFyZW1dICBvdmVyZmxvdy1zY3JvbGwgbS1hdXRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleC1jb2wgICBwYi0yIGl0ZW1zLWNlbnRlciAgYmctd2hpdGUgIG0tYXV0b1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHN0aWNreSB0b3AtMCAgICAgZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiICBzaGFkb3ctbWQganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBvdmVyZmxvdy1oaWRkZW4gdy0yMCBoLTIwXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e2FnZW50LnNyY31cbiAgICAgICAgICAgICAgICAgIGFsdD17YWdlbnQubmFtZX1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXthZ2VudC53aWR0aH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17YWdlbnQuaGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtY2VudGVyXCI+e2FnZW50Lm5hbWV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyYH0+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkNlbGw6PC9zcGFuPiB7YWdlbnQuY2VsbH1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5PZmZpY2U6PC9zcGFuPiB7YWdlbnQub2ZmaWNlfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIHthZ2VudC5lbWFpbCAmJiAoXG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5FbWFpbDo8L3NwYW4+IHthZ2VudC5lbWFpbH1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBiZy1ncmF5LTUwIHB4LVsxMCVdIHctWzcwJV0gbS1hdXRvIHB0LTUgXCI+XG4gICAgICAgICAgICA8cD57YWdlbnQuYmlvfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJBZ2VudFBvcHVwIiwiYWdlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJwIiwic3BhbiIsImNlbGwiLCJvZmZpY2UiLCJlbWFpbCIsImJpbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/agents/AgentPopup.tsx\n"));

/***/ })

});