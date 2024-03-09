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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Agents; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ \"(app-pages-browser)/./app/components/Navbar.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _AgentPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AgentPopup */ \"(app-pages-browser)/./app/agents/AgentPopup.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Agents() {\n    _s();\n    var _s1 = $RefreshSig$();\n    const [agent, setAgent] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const agents = [\n        {\n            name: \"Cathia Lhanat\",\n            cell: \"(347)-993-2555\",\n            office: \"(516)-620-9059\",\n            email: \"ckhanat@yahoo.com\",\n            bio: \"Cathia Khanat is an exceptional real estate professional with over 20 years of experience, known for her expertise, strong negotiation skills, and dedication to her clients. She has developed an extensive network and understands the local market deeply, always prioritizing her client’s needs in every transaction. Cathia's ability to analyze market trends and price properties effectively ensures maximum value for her clients’ investments. She maintains proactive communication throughout the sales process, offering detailed insights and handling negotiations with finesse to exceed client expectations.\\nCathia's success stems from her strong work ethic, attention to detail, and professionalism, making her a dependable partner in navigating the complex real estate market. Her track record of exceptional sales results establishes her as a top-tier real estate expert for those seeking a rewarding property buying or selling experience.\",\n            src: \"/cathia.png\",\n            width: 80,\n            height: 80\n        },\n        {\n            name: \"Humna Imran\",\n            cell: \"(516)-405-9640\",\n            office: \"(516)-292-2131\",\n            email: \"humna.cortescorp@gmail.com\",\n            bio: \"Meet Humna Imran – your dedicated real estate expert renowned for personalized service and unmatched market knowledge. With a passion for exceeding expectations, Humna offers tailored solutions, expert negotiation, and unwavering integrity. Whether buying, selling, or investing, trust Humna to guide you to success in the competitive real estate market.\",\n            src: \"/humna.png\",\n            width: 80,\n            height: 80\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AgentPopup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                agent: agent\n            }, void 0, false, {\n                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-5 flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl\",\n                        children: \"Agents\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"mt-16 flex flex-col gap-10\",\n                        children: agents.map(_s1((agent, index)=>{\n                            _s1();\n                            const [expand, setExpand] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n                            const handleExpand = ()=>{\n                                setAgent(agents[index]);\n                                setExpand(true);\n                            };\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"w-[96vw] sm:w-[34rem] bg-slate-50 p-5     justify-between   transition-all duration-500 rounded-xl  flex  gap-20\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex shadow-md justify-center items-center rounded-full overflow-hidden w-20 h-20\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                    src: agent.src,\n                                                    alt: agent.name,\n                                                    width: agent.width,\n                                                    height: agent.height,\n                                                    objectFit: \"cover\",\n                                                    className: \"rounded-full\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"font-medium text-center\",\n                                                children: agent.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"font-medium\",\n                                                        children: \"Cell:\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    \" \",\n                                                    agent.cell\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"font-bold\",\n                                                        children: \"Office:\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    \" \",\n                                                    agent.office\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 19\n                                            }, this),\n                                            agent.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"font-bold\",\n                                                        children: \"Email:\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                                        lineNumber: 80,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    \" \",\n                                                    agent.email\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: handleExpand,\n                                                className: \"bg-red-600 mt-2 scale-[0.9] text-white py-[0.3rem] px-3 rounded-md hover:bg-red-700 transition duration-300\",\n                                                children: \"More Info\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 17\n                            }, this);\n                        }, \"V8NQrAFSLXwZu43JmcjJwSuHwmw=\"))\n                    }, void 0, false, {\n                        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bryan/Projects/real-estate/cortes-corp/app/agents/page.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Agents, \"Wm7FYiOFaMzzNo9V9mrlALicpdc=\");\n_c = Agents;\nvar _c;\n$RefreshReg$(_c, \"Agents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZ2VudHMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzBDO0FBQ1g7QUFDTztBQUNMO0FBRWxCLFNBQVNJOzs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFlO0lBQ2hELE1BQU1JLFNBQVM7UUFDZDtZQUNFQyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsUUFBUTtZQUNSQyxPQUFPO1lBQ1BDLEtBQUs7WUFDTEMsS0FBSztZQUNMQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VQLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxRQUFRO1lBQ1JDLE9BQU87WUFDUEMsS0FBSTtZQUNKQyxLQUFLO1lBQ0xDLE9BQU87WUFDUEMsUUFBUTtRQUNWO0tBQ0Q7SUFHRCxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDaEIsMERBQU1BOzs7OzswQkFFTCw4REFBQ0UsbURBQVVBO2dCQUFDRyxPQUFPQTs7Ozs7OzBCQUdyQiw4REFBQ1c7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBVzs7Ozs7O2tDQUN6Qiw4REFBQ0Q7Ozs7O2tDQUdELDhEQUFDRzt3QkFBR0YsV0FBVTtrQ0FDWFYsT0FBT2EsR0FBRyxLQUFDLENBQUNmLE9BQU9nQjs7NEJBQ2xCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHcEIsK0NBQVFBLENBQUM7NEJBQ3JDLE1BQU1xQixlQUFlO2dDQUNuQmxCLFNBQVNDLE1BQU0sQ0FBQ2MsTUFBTTtnQ0FDdEJFLFVBQVU7NEJBQ1o7NEJBRUUscUJBQ0UsOERBQUNFO2dDQUdEUixXQUFZOztrREFDWiw4REFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDRDtnREFBSUMsV0FBVTswREFDYiw0RUFBQ2hCLGtEQUFLQTtvREFDSlksS0FBS1IsTUFBTVEsR0FBRztvREFDZGEsS0FBS3JCLE1BQU1HLElBQUk7b0RBQ2ZNLE9BQU9ULE1BQU1TLEtBQUs7b0RBQ2xCQyxRQUFRVixNQUFNVSxNQUFNO29EQUNwQlksV0FBVTtvREFDVlYsV0FBVTs7Ozs7Ozs7Ozs7MERBR2QsOERBQUNXO2dEQUFFWCxXQUFVOzBEQUEyQlosTUFBTUcsSUFBSTs7Ozs7Ozs7Ozs7O2tEQUVwRCw4REFBQ1E7d0NBQUlDLFdBQVk7OzBEQUNmLDhEQUFDVzs7a0VBQ0MsOERBQUNDO3dEQUFLWixXQUFVO2tFQUFjOzs7Ozs7b0RBQVk7b0RBQUVaLE1BQU1JLElBQUk7Ozs7Ozs7MERBRXhELDhEQUFDbUI7O2tFQUNDLDhEQUFDQzt3REFBS1osV0FBVTtrRUFBWTs7Ozs7O29EQUFjO29EQUFFWixNQUFNSyxNQUFNOzs7Ozs7OzRDQUV6REwsTUFBTU0sS0FBSyxrQkFDViw4REFBQ2lCOztrRUFDQyw4REFBQ0M7d0RBQUtaLFdBQVU7a0VBQVk7Ozs7OztvREFBYTtvREFBRVosTUFBTU0sS0FBSzs7Ozs7OzswREFHMUQsOERBQUNtQjtnREFBT0MsU0FBU1A7Z0RBQWNQLFdBQVU7MERBQThHOzs7Ozs7Ozs7Ozs7OytCQTNCcEpJOzs7Ozt3QkFvQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9WO0dBNUZ3QmpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hZ2VudHMvcGFnZS50c3g/ODUxNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBBZ2VudFBvcHVwIGZyb20gXCIuL0FnZW50UG9wdXBcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBZ2VudCB9IGZyb20gXCIuL0FnZW50UG9wdXBcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFnZW50cygpIHtcbiAgY29uc3QgW2FnZW50LCBzZXRBZ2VudF0gPSB1c2VTdGF0ZTxBZ2VudCB8IG51bGw+KG51bGwpXG4gICBjb25zdCBhZ2VudHMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJDYXRoaWEgTGhhbmF0XCIsXG4gICAgICBjZWxsOiBcIigzNDcpLTk5My0yNTU1XCIsXG4gICAgICBvZmZpY2U6IFwiKDUxNiktNjIwLTkwNTlcIixcbiAgICAgIGVtYWlsOiBcImNraGFuYXRAeWFob28uY29tXCIsXG4gICAgICBiaW86IFwiQ2F0aGlhIEtoYW5hdCBpcyBhbiBleGNlcHRpb25hbCByZWFsIGVzdGF0ZSBwcm9mZXNzaW9uYWwgd2l0aCBvdmVyIDIwIHllYXJzIG9mIGV4cGVyaWVuY2UsIGtub3duIGZvciBoZXIgZXhwZXJ0aXNlLCBzdHJvbmcgbmVnb3RpYXRpb24gc2tpbGxzLCBhbmQgZGVkaWNhdGlvbiB0byBoZXIgY2xpZW50cy4gU2hlIGhhcyBkZXZlbG9wZWQgYW4gZXh0ZW5zaXZlIG5ldHdvcmsgYW5kIHVuZGVyc3RhbmRzIHRoZSBsb2NhbCBtYXJrZXQgZGVlcGx5LCBhbHdheXMgcHJpb3JpdGl6aW5nIGhlciBjbGllbnTigJlzIG5lZWRzIGluIGV2ZXJ5IHRyYW5zYWN0aW9uLiBDYXRoaWEncyBhYmlsaXR5IHRvIGFuYWx5emUgbWFya2V0IHRyZW5kcyBhbmQgcHJpY2UgcHJvcGVydGllcyBlZmZlY3RpdmVseSBlbnN1cmVzIG1heGltdW0gdmFsdWUgZm9yIGhlciBjbGllbnRz4oCZIGludmVzdG1lbnRzLiBTaGUgbWFpbnRhaW5zIHByb2FjdGl2ZSBjb21tdW5pY2F0aW9uIHRocm91Z2hvdXQgdGhlIHNhbGVzIHByb2Nlc3MsIG9mZmVyaW5nIGRldGFpbGVkIGluc2lnaHRzIGFuZCBoYW5kbGluZyBuZWdvdGlhdGlvbnMgd2l0aCBmaW5lc3NlIHRvIGV4Y2VlZCBjbGllbnQgZXhwZWN0YXRpb25zLlxcbkNhdGhpYSdzIHN1Y2Nlc3Mgc3RlbXMgZnJvbSBoZXIgc3Ryb25nIHdvcmsgZXRoaWMsIGF0dGVudGlvbiB0byBkZXRhaWwsIGFuZCBwcm9mZXNzaW9uYWxpc20sIG1ha2luZyBoZXIgYSBkZXBlbmRhYmxlIHBhcnRuZXIgaW4gbmF2aWdhdGluZyB0aGUgY29tcGxleCByZWFsIGVzdGF0ZSBtYXJrZXQuIEhlciB0cmFjayByZWNvcmQgb2YgZXhjZXB0aW9uYWwgc2FsZXMgcmVzdWx0cyBlc3RhYmxpc2hlcyBoZXIgYXMgYSB0b3AtdGllciByZWFsIGVzdGF0ZSBleHBlcnQgZm9yIHRob3NlIHNlZWtpbmcgYSByZXdhcmRpbmcgcHJvcGVydHkgYnV5aW5nIG9yIHNlbGxpbmcgZXhwZXJpZW5jZS5cIixcbiAgICAgIHNyYzogXCIvY2F0aGlhLnBuZ1wiLCAvLyBNYWtlIHN1cmUgdGhlIHBhdGggaXMgY29ycmVjdCBhbmQgdGhlIGltYWdlIGV4aXN0cyBpbiB5b3VyIHB1YmxpYyBkaXJlY3RvcnlcbiAgICAgIHdpZHRoOiA4MCwgLy8gRXhhbXBsZSB3aWR0aCwgYWRqdXN0IGFzIG5lZWRlZFxuICAgICAgaGVpZ2h0OiA4MCwgLy8gRXhhbXBsZSBoZWlnaHQsIGFkanVzdCBhcyBuZWVkZWQgdG8gbWFpbnRhaW4gdGhlIGFzcGVjdCByYXRpb1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJIdW1uYSBJbXJhblwiLFxuICAgICAgY2VsbDogXCIoNTE2KS00MDUtOTY0MFwiLFxuICAgICAgb2ZmaWNlOiBcIig1MTYpLTI5Mi0yMTMxXCIsXG4gICAgICBlbWFpbDogXCJodW1uYS5jb3J0ZXNjb3JwQGdtYWlsLmNvbVwiLFxuICAgICAgYmlvOlwiTWVldCBIdW1uYSBJbXJhbiDigJMgeW91ciBkZWRpY2F0ZWQgcmVhbCBlc3RhdGUgZXhwZXJ0IHJlbm93bmVkIGZvciBwZXJzb25hbGl6ZWQgc2VydmljZSBhbmQgdW5tYXRjaGVkIG1hcmtldCBrbm93bGVkZ2UuIFdpdGggYSBwYXNzaW9uIGZvciBleGNlZWRpbmcgZXhwZWN0YXRpb25zLCBIdW1uYSBvZmZlcnMgdGFpbG9yZWQgc29sdXRpb25zLCBleHBlcnQgbmVnb3RpYXRpb24sIGFuZCB1bndhdmVyaW5nIGludGVncml0eS4gV2hldGhlciBidXlpbmcsIHNlbGxpbmcsIG9yIGludmVzdGluZywgdHJ1c3QgSHVtbmEgdG8gZ3VpZGUgeW91IHRvIHN1Y2Nlc3MgaW4gdGhlIGNvbXBldGl0aXZlIHJlYWwgZXN0YXRlIG1hcmtldC5cIixcbiAgICAgIHNyYzogXCIvaHVtbmEucG5nXCIsIC8vIE1ha2Ugc3VyZSB0aGUgcGF0aCBpcyBjb3JyZWN0IGFuZCB0aGUgaW1hZ2UgZXhpc3RzIGluIHlvdXIgcHVibGljIGRpcmVjdG9yeVxuICAgICAgd2lkdGg6IDgwLCAvLyBBZGp1c3QgYXMgbmVlZGVkXG4gICAgICBoZWlnaHQ6IDgwLCAvLyBBZGp1c3QgYXMgbmVlZGVkXG4gICAgfSxcbiAgXTtcblxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgXG4gICAgICAgIDxBZ2VudFBvcHVwIGFnZW50PXthZ2VudH0gLz5cbiAgICBcbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+QWdlbnRzPC9oMT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXQtMTYgZmxleCBmbGV4LWNvbCBnYXAtMTBcIj5cbiAgICAgICAgICB7YWdlbnRzLm1hcCgoYWdlbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBbZXhwYW5kLCBzZXRFeHBhbmRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVFeHBhbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgIHNldEFnZW50KGFnZW50c1tpbmRleF0pXG4gICAgICAgICAgICAgIHNldEV4cGFuZCh0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LVs5NnZ3XSBzbTp3LVszNHJlbV0gYmctc2xhdGUtNTAgcC01ICAgICBqdXN0aWZ5LWJldHdlZW4gICB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgcm91bmRlZC14bCAgZmxleCAgZ2FwLTIwYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNoYWRvdy1tZCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIG92ZXJmbG93LWhpZGRlbiB3LTIwIGgtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXthZ2VudC5zcmN9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXthZ2VudC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXthZ2VudC53aWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e2FnZW50LmhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1jZW50ZXJcIj57YWdlbnQubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlcmB9PlxuICAgICAgICAgICAgICAgICAgPHAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtbWVkaXVtJz5DZWxsOjwvc3Bhbj4ge2FnZW50LmNlbGx9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+T2ZmaWNlOjwvc3Bhbj4ge2FnZW50Lm9mZmljZX1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIHthZ2VudC5lbWFpbCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkVtYWlsOjwvc3Bhbj4ge2FnZW50LmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVFeHBhbmR9IGNsYXNzTmFtZT1cImJnLXJlZC02MDAgbXQtMiBzY2FsZS1bMC45XSB0ZXh0LXdoaXRlIHB5LVswLjNyZW1dIHB4LTMgcm91bmRlZC1tZCBob3ZlcjpiZy1yZWQtNzAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIE1vcmUgSW5mb1xuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIk5hdmJhciIsIkltYWdlIiwiQWdlbnRQb3B1cCIsInVzZVN0YXRlIiwiQWdlbnRzIiwiYWdlbnQiLCJzZXRBZ2VudCIsImFnZW50cyIsIm5hbWUiLCJjZWxsIiwib2ZmaWNlIiwiZW1haWwiLCJiaW8iLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidWwiLCJtYXAiLCJpbmRleCIsImV4cGFuZCIsInNldEV4cGFuZCIsImhhbmRsZUV4cGFuZCIsImxpIiwiYWx0Iiwib2JqZWN0Rml0IiwicCIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/agents/page.tsx\n"));

/***/ })

});