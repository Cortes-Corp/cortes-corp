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

/***/ "(app-pages-browser)/./app/agents/page.tsx":
/*!*****************************!*\
  !*** ./app/agents/page.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Agents; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ \"(app-pages-browser)/./app/components/Navbar.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _AgentPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AgentPopup */ \"(app-pages-browser)/./app/agents/AgentPopup.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nfunction Agents() {\n    var _s = $RefreshSig$();\n    const agents = [\n        {\n            name: \"Cathia Lhanat\",\n            cell: \"(347)-993-2555\",\n            office: \"(516)-620-9059\",\n            email: \"ckhanat@yahoo.com\",\n            src: \"/cathia.png\",\n            width: 80,\n            height: 80\n        },\n        {\n            name: \"Humna Imran\",\n            cell: \"(516)-405-9640\",\n            office: \"(516)-292-2131\",\n            email: \"humna.cortescorp@gmail.com\",\n            src: \"/humna.png\",\n            width: 80,\n            height: 80\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-5 flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl\",\n                        children: \"Agents\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AgentPopup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"mt-16 flex flex-col gap-10\",\n                        children: agents.map(_s((agent, index)=>{\n                            _s();\n                            const [expand, setExpand] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"w-[96vw] sm:w-[34rem] bg-slate-50 p-5     justify-between   transition-all duration-500 rounded-xl shadow flex  gap-20\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex shadow-md justify-center items-center rounded-full overflow-hidden w-20 h-20\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                    src: agent.src,\n                                                    alt: agent.name,\n                                                    width: agent.width,\n                                                    height: agent.height,\n                                                    objectFit: \"cover\",\n                                                    className: \"rounded-full\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"font-bold text-center\",\n                                                children: agent.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"font-bold\",\n                                                        children: \"Cell:\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                                        lineNumber: 60,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    \" \",\n                                                    agent.cell\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"font-bold\",\n                                                        children: \"Office:\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    \" \",\n                                                    agent.office\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 19\n                                            }, this),\n                                            agent.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"font-bold\",\n                                                        children: \"Email:\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    \" \",\n                                                    agent.email\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>setExpand(true),\n                                                className: \"bg-red-600 mt-2 text-white p-1 px-2 rounded-md hover:bg-red-700 transition duration-300\",\n                                                children: \"More Info\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 17\n                            }, this);\n                        }, \"V8NQrAFSLXwZu43JmcjJwSuHwmw=\"))\n                    }, void 0, false, {\n                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AgentPopup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_c = Agents;\nvar _c;\n$RefreshReg$(_c, \"Agents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZ2VudHMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDMEM7QUFDWDtBQUNPO0FBQ0w7QUFDbEIsU0FBU0k7O0lBRXJCLE1BQU1DLFNBQVM7UUFDZDtZQUNFQyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsUUFBUTtZQUNSQyxPQUFPO1lBQ1BDLEtBQUs7WUFDTEMsT0FBTztZQUNQQyxRQUFRO1FBQ1Y7UUFDQTtZQUNFTixNQUFNO1lBQ05DLE1BQU07WUFDTkMsUUFBUTtZQUNSQyxPQUFPO1lBQ1BDLEtBQUs7WUFDTEMsT0FBTztZQUNQQyxRQUFRO1FBQ1Y7S0FDRDtJQUVELHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNiLDBEQUFNQTs7Ozs7MEJBRVAsOERBQUNhO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQVc7Ozs7OztrQ0FDekIsOERBQUNEO2tDQUNDLDRFQUFDWCxtREFBVUE7Ozs7Ozs7Ozs7a0NBRWIsOERBQUNjO3dCQUFHRixXQUFVO2tDQUNYVCxPQUFPWSxHQUFHLElBQUMsQ0FBQ0MsT0FBT0M7OzRCQUNsQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR2xCLCtDQUFRQSxDQUFDOzRCQUNuQyxxQkFDRSw4REFBQ21CO2dDQUVEUixXQUFZOztrREFDWiw4REFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDRDtnREFBSUMsV0FBVTswREFDYiw0RUFBQ2Isa0RBQUtBO29EQUNKUyxLQUFLUSxNQUFNUixHQUFHO29EQUNkYSxLQUFLTCxNQUFNWixJQUFJO29EQUNmSyxPQUFPTyxNQUFNUCxLQUFLO29EQUNsQkMsUUFBUU0sTUFBTU4sTUFBTTtvREFDcEJZLFdBQVU7b0RBQ1ZWLFdBQVU7Ozs7Ozs7Ozs7OzBEQUdkLDhEQUFDVztnREFBRVgsV0FBVTswREFBeUJJLE1BQU1aLElBQUk7Ozs7Ozs7Ozs7OztrREFFbEQsOERBQUNPO3dDQUFJQyxXQUFZOzswREFDZiw4REFBQ1c7O2tFQUNDLDhEQUFDQzt3REFBS1osV0FBVTtrRUFBWTs7Ozs7O29EQUFZO29EQUFFSSxNQUFNWCxJQUFJOzs7Ozs7OzBEQUV0RCw4REFBQ2tCOztrRUFDQyw4REFBQ0M7d0RBQUtaLFdBQVU7a0VBQVk7Ozs7OztvREFBYztvREFBRUksTUFBTVYsTUFBTTs7Ozs7Ozs0Q0FFekRVLE1BQU1ULEtBQUssa0JBQ1YsOERBQUNnQjs7a0VBQ0MsOERBQUNDO3dEQUFLWixXQUFVO2tFQUFZOzs7Ozs7b0RBQWE7b0RBQUVJLE1BQU1ULEtBQUs7Ozs7Ozs7MERBRzFELDhEQUFDa0I7Z0RBQU9DLFNBQVMsSUFBTVAsVUFBVTtnREFBT1AsV0FBVTswREFBMEY7Ozs7Ozs7Ozs7Ozs7K0JBM0J6SUs7Ozs7O3dCQW9DWDs7Ozs7O2tDQUVGLDhEQUFDakIsbURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUluQjtLQS9Fd0JFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hZ2VudHMvcGFnZS50c3g/ODUxNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBBZ2VudFBvcHVwIGZyb20gXCIuL0FnZW50UG9wdXBcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZ2VudHMoKSB7XG5cbiAgIGNvbnN0IGFnZW50cyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkNhdGhpYSBMaGFuYXRcIixcbiAgICAgIGNlbGw6IFwiKDM0NyktOTkzLTI1NTVcIixcbiAgICAgIG9mZmljZTogXCIoNTE2KS02MjAtOTA1OVwiLFxuICAgICAgZW1haWw6IFwiY2toYW5hdEB5YWhvby5jb21cIixcbiAgICAgIHNyYzogXCIvY2F0aGlhLnBuZ1wiLCAvLyBNYWtlIHN1cmUgdGhlIHBhdGggaXMgY29ycmVjdCBhbmQgdGhlIGltYWdlIGV4aXN0cyBpbiB5b3VyIHB1YmxpYyBkaXJlY3RvcnlcbiAgICAgIHdpZHRoOiA4MCwgLy8gRXhhbXBsZSB3aWR0aCwgYWRqdXN0IGFzIG5lZWRlZFxuICAgICAgaGVpZ2h0OiA4MCwgLy8gRXhhbXBsZSBoZWlnaHQsIGFkanVzdCBhcyBuZWVkZWQgdG8gbWFpbnRhaW4gdGhlIGFzcGVjdCByYXRpb1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJIdW1uYSBJbXJhblwiLFxuICAgICAgY2VsbDogXCIoNTE2KS00MDUtOTY0MFwiLFxuICAgICAgb2ZmaWNlOiBcIig1MTYpLTI5Mi0yMTMxXCIsXG4gICAgICBlbWFpbDogXCJodW1uYS5jb3J0ZXNjb3JwQGdtYWlsLmNvbVwiLFxuICAgICAgc3JjOiBcIi9odW1uYS5wbmdcIiwgLy8gTWFrZSBzdXJlIHRoZSBwYXRoIGlzIGNvcnJlY3QgYW5kIHRoZSBpbWFnZSBleGlzdHMgaW4geW91ciBwdWJsaWMgZGlyZWN0b3J5XG4gICAgICB3aWR0aDogODAsIC8vIEFkanVzdCBhcyBuZWVkZWRcbiAgICAgIGhlaWdodDogODAsIC8vIEFkanVzdCBhcyBuZWVkZWRcbiAgICB9LFxuICBdO1xuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE5hdmJhciAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5BZ2VudHM8L2gxPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxBZ2VudFBvcHVwPjwvQWdlbnRQb3B1cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJtdC0xNiBmbGV4IGZsZXgtY29sIGdhcC0xMFwiPlxuICAgICAgICAgIHthZ2VudHMubWFwKChhZ2VudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtleHBhbmQsIHNldEV4cGFuZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctWzk2dnddIHNtOnctWzM0cmVtXSBiZy1zbGF0ZS01MCBwLTUgICAgIGp1c3RpZnktYmV0d2VlbiAgIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCByb3VuZGVkLXhsIHNoYWRvdyBmbGV4ICBnYXAtMjBgfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc2hhZG93LW1kIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHctMjAgaC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2FnZW50LnNyY31cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2FnZW50Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e2FnZW50LndpZHRofVxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17YWdlbnQuaGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1jZW50ZXJcIj57YWdlbnQubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlcmB9PlxuICAgICAgICAgICAgICAgICAgPHAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+Q2VsbDo8L3NwYW4+IHthZ2VudC5jZWxsfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPk9mZmljZTo8L3NwYW4+IHthZ2VudC5vZmZpY2V9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICB7YWdlbnQuZW1haWwgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5FbWFpbDo8L3NwYW4+IHthZ2VudC5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RXhwYW5kKHRydWUpfSBjbGFzc05hbWU9XCJiZy1yZWQtNjAwIG10LTIgdGV4dC13aGl0ZSBwLTEgcHgtMiByb3VuZGVkLW1kIGhvdmVyOmJnLXJlZC03MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgTW9yZSBJbmZvXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8QWdlbnRQb3B1cCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTmF2YmFyIiwiSW1hZ2UiLCJBZ2VudFBvcHVwIiwidXNlU3RhdGUiLCJBZ2VudHMiLCJhZ2VudHMiLCJuYW1lIiwiY2VsbCIsIm9mZmljZSIsImVtYWlsIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInVsIiwibWFwIiwiYWdlbnQiLCJpbmRleCIsImV4cGFuZCIsInNldEV4cGFuZCIsImxpIiwiYWx0Iiwib2JqZWN0Rml0IiwicCIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/agents/page.tsx\n"));

/***/ })

});