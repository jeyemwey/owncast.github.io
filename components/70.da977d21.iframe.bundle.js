(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[70],{"./node_modules/@storybook/nextjs/dist/app-router-provider-IEZPMAFW.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AppRouterProvider:()=>AppRouterProvider});__webpack_require__("./node_modules/@storybook/nextjs/dist/chunk-FFRTCGB4.mjs");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_dist_shared_lib_app_router_context_shared_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js"),next_dist_shared_lib_hooks_client_context_shared_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js"),getParallelRoutes=segmentsList=>{let segment=segmentsList.shift();return segment?[segment,{children:getParallelRoutes(segmentsList)}]:[]},AppRouterProvider=({children,action,routeParams})=>{let{pathname,query,segments=[],...restRouteParams}=routeParams,tree=[pathname,{children:getParallelRoutes([...segments])}];return react__WEBPACK_IMPORTED_MODULE_1__.createElement(next_dist_shared_lib_hooks_client_context_shared_runtime__WEBPACK_IMPORTED_MODULE_3__.PathnameContext.Provider,{value:pathname},react__WEBPACK_IMPORTED_MODULE_1__.createElement(next_dist_shared_lib_hooks_client_context_shared_runtime__WEBPACK_IMPORTED_MODULE_3__.SearchParamsContext.Provider,{value:new URLSearchParams(query)},react__WEBPACK_IMPORTED_MODULE_1__.createElement(next_dist_shared_lib_app_router_context_shared_runtime__WEBPACK_IMPORTED_MODULE_2__.GlobalLayoutRouterContext.Provider,{value:{changeByServerResponse(){},buildId:"storybook",tree,focusAndScrollRef:{apply:!1,hashFragment:null,segmentPaths:[tree],onlyHashChange:!1},nextUrl:pathname}},react__WEBPACK_IMPORTED_MODULE_1__.createElement(next_dist_shared_lib_app_router_context_shared_runtime__WEBPACK_IMPORTED_MODULE_2__.AppRouterContext.Provider,{value:{push(...args){action("nextNavigation.push")(...args)},replace(...args){action("nextNavigation.replace")(...args)},forward(...args){action("nextNavigation.forward")(...args)},back(...args){action("nextNavigation.back")(...args)},prefetch(...args){action("nextNavigation.prefetch")(...args)},refresh:()=>{action("nextNavigation.refresh")()},...restRouteParams}},react__WEBPACK_IMPORTED_MODULE_1__.createElement(next_dist_shared_lib_app_router_context_shared_runtime__WEBPACK_IMPORTED_MODULE_2__.LayoutRouterContext.Provider,{value:{childNodes:new Map,tree,url:pathname}},children)))))}},"./node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{CacheStates:function(){return CacheStates},AppRouterContext:function(){return AppRouterContext},LayoutRouterContext:function(){return LayoutRouterContext},GlobalLayoutRouterContext:function(){return GlobalLayoutRouterContext},TemplateContext:function(){return TemplateContext}});const _react=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs")._(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"));var CacheStates;!function(CacheStates){CacheStates.LAZY_INITIALIZED="LAZYINITIALIZED",CacheStates.DATA_FETCH="DATAFETCH",CacheStates.READY="READY"}(CacheStates||(CacheStates={}));const AppRouterContext=_react.default.createContext(null),LayoutRouterContext=_react.default.createContext(null),GlobalLayoutRouterContext=_react.default.createContext(null),TemplateContext=_react.default.createContext(null)},"./node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{SearchParamsContext:function(){return SearchParamsContext},PathnameContext:function(){return PathnameContext},PathParamsContext:function(){return PathParamsContext}});const _react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),SearchParamsContext=(0,_react.createContext)(null),PathnameContext=(0,_react.createContext)(null),PathParamsContext=(0,_react.createContext)(null)}}]);