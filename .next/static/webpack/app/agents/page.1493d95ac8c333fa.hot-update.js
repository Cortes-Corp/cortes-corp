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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AgentPopup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\nfunction AgentPopup(param) {\n    let { agent } = param;\n    return agent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-col absolute inset-0 m-auto text-left bg-white bg-opacity-[50%] w-[70%] h-[60%]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex shadow-md justify-center items-center rounded-full overflow-hidden w-20 h-20\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    src: agent.src,\n                                    alt: agent.name,\n                                    width: agent.width,\n                                    height: agent.height,\n                                    objectFit: \"cover\",\n                                    className: \"rounded-full\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-bold text-center\",\n                                children: agent.name\n                            }, void 0, false, {\n                                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-bold\",\n                                        children: \"Cell:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    }, this),\n                                    \" \",\n                                    agent.cell\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-bold\",\n                                        children: \"Office:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, this),\n                                    \" \",\n                                    agent.office\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this),\n                            agent.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-bold\",\n                                        children: \"Email:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 17\n                                    }, this),\n                                    \" \",\n                                    agent.email\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n            lineNumber: 18,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/AgentPopup.tsx\",\n        lineNumber: 17,\n        columnNumber: 7\n    }, this);\n}\n_c = AgentPopup;\nvar _c;\n$RefreshReg$(_c, \"AgentPopup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZ2VudHMvQWdlbnRQb3B1cC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQjtBQWFoQixTQUFTQyxXQUFXLEtBQXFCO1FBQXJCLEVBQUVDLEtBQUssRUFBYyxHQUFyQjtJQUNqQyxPQUNFQSx1QkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7c0JBQ0csNEVBQUNBOztrQ0FDRCw4REFBQ0E7d0JBQUlDLFdBQVU7OzBDQUNmLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0osa0RBQUtBO29DQUNKSyxLQUFLSCxNQUFNRyxHQUFHO29DQUNkQyxLQUFLSixNQUFNSyxJQUFJO29DQUNmQyxPQUFPTixNQUFNTSxLQUFLO29DQUNsQkMsUUFBUVAsTUFBTU8sTUFBTTtvQ0FDcEJDLFdBQVU7b0NBQ1ZOLFdBQVU7Ozs7Ozs7Ozs7OzBDQUdkLDhEQUFDTztnQ0FBRVAsV0FBVTswQ0FBeUJGLE1BQU1LLElBQUk7Ozs7Ozs7Ozs7OztrQ0FFbEQsOERBQUNKO3dCQUFJQyxXQUFZOzswQ0FDZiw4REFBQ087O2tEQUNDLDhEQUFDQzt3Q0FBS1IsV0FBVTtrREFBWTs7Ozs7O29DQUFZO29DQUFFRixNQUFNVyxJQUFJOzs7Ozs7OzBDQUV0RCw4REFBQ0Y7O2tEQUNDLDhEQUFDQzt3Q0FBS1IsV0FBVTtrREFBWTs7Ozs7O29DQUFjO29DQUFFRixNQUFNWSxNQUFNOzs7Ozs7OzRCQUV6RFosTUFBTWEsS0FBSyxrQkFDViw4REFBQ0o7O2tEQUNDLDhEQUFDQzt3Q0FBS1IsV0FBVTtrREFBWTs7Ozs7O29DQUFhO29DQUFFRixNQUFNYSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVV0RTtLQXRDd0JkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hZ2VudHMvQWdlbnRQb3B1cC50c3g/ZDI0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmV4cG9ydCB0eXBlIEFnZW50ID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNlbGw6IHN0cmluZztcbiAgb2ZmaWNlOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHNyYzogc3RyaW5nOyAvLyBNYWtlIHN1cmUgdGhlIHBhdGggaXMgY29ycmVjdCBhbmQgdGhlIGltYWdlIGV4aXN0cyBpbiB5b3VyIHB1YmxpYyBkaXJlY3RvcnlcbiAgd2lkdGg6IG51bWJlcjsgLy8gRXhhbXBsZSB3aWR0aCwgYWRqdXN0IGFzIG5lZWRlZFxuICBoZWlnaHQ6IG51bWJlcjsgLy8gRXhhbXBsZSBoZWlnaHQsIGFkanVzdCBhcyBuZWVkZWQgdG8gbWFpbnRhaW4gdGhlIGFzcGVjdCByYXRpb1xufTtcbmludGVyZmFjZSBhZ2VudFByb3BzIHtcbiAgYWdlbnQ6IEFnZW50IHwgYW55O1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWdlbnRQb3B1cCh7IGFnZW50IH06IGFnZW50UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICBhZ2VudCAmJiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29sIGFic29sdXRlIGluc2V0LTAgbS1hdXRvIHRleHQtbGVmdCBiZy13aGl0ZSBiZy1vcGFjaXR5LVs1MCVdIHctWzcwJV0gaC1bNjAlXVwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzaGFkb3ctbWQganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBvdmVyZmxvdy1oaWRkZW4gdy0yMCBoLTIwXCI+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz17YWdlbnQuc3JjfVxuICAgICAgICAgICAgICAgIGFsdD17YWdlbnQubmFtZX1cbiAgICAgICAgICAgICAgICB3aWR0aD17YWdlbnQud2lkdGh9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXthZ2VudC5oZWlnaHR9XG4gICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiPnthZ2VudC5uYW1lfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyYH0+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+Q2VsbDo8L3NwYW4+IHthZ2VudC5jZWxsfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPk9mZmljZTo8L3NwYW4+IHthZ2VudC5vZmZpY2V9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICB7YWdlbnQuZW1haWwgJiYgKFxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5FbWFpbDo8L3NwYW4+IHthZ2VudC5lbWFpbH1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkFnZW50UG9wdXAiLCJhZ2VudCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsInAiLCJzcGFuIiwiY2VsbCIsIm9mZmljZSIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/agents/AgentPopup.tsx\n"));

/***/ })

});