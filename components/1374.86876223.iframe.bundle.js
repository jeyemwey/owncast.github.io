"use strict";(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[1374],{"./components/chat/ChatModerationActionMenu/ChatModerationActionMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ChatModerationActionMenu:()=>ChatModerationActionMenu});var _tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/antd/es/modal/index.js"),antd__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/antd/es/message/index.js"),antd__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/antd/es/dropdown/index.js"),antd__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/antd/es/space/index.js"),next_dynamic__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dynamic.js"),next_dynamic__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__),_ui_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/ui/Modal/Modal.tsx"),_ChatModerationDetailsModal_ChatModerationDetailsModal__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/chat/ChatModerationDetailsModal/ChatModerationDetailsModal.tsx"),_services_moderation_service__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./services/moderation-service.ts"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,confirm=antd__WEBPACK_IMPORTED_MODULE_6__.Z.confirm,CloseCircleOutlined=next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()((function(){return Promise.all([__webpack_require__.e(2074),__webpack_require__.e(4337)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/CloseCircleOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/CloseCircleOutlined.js"]}}}),ExclamationCircleOutlined=next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()((function(){return Promise.all([__webpack_require__.e(2074),__webpack_require__.e(7039)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/ExclamationCircleOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/ExclamationCircleOutlined.js"]}}}),EyeInvisibleOutlined=next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()((function(){return Promise.all([__webpack_require__.e(2074),__webpack_require__.e(4645)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/EyeInvisibleOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/EyeInvisibleOutlined.js"]}}}),SmallDashOutlined=next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()((function(){return Promise.all([__webpack_require__.e(2074),__webpack_require__.e(500)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/SmallDashOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/SmallDashOutlined.js"]}}}),ChatModerationActionMenu=function ChatModerationActionMenu(_ref){var messageID=_ref.messageID,userID=_ref.userID,userDisplayName=_ref.userDisplayName,accessToken=_ref.accessToken,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),showUserDetailsModal=_useState[0],setShowUserDetailsModal=_useState[1],handleBanUser=function(){var _ref2=(0,_tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__.Z)(_tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee(){return _tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,_context.next=3,_services_moderation_service__WEBPACK_IMPORTED_MODULE_5__.Z.banUser(userID,accessToken);case 3:_context.next=9;break;case 5:_context.prev=5,_context.t0=_context.catch(0),console.error(_context.t0),antd__WEBPACK_IMPORTED_MODULE_8__.ZP.error(_context.t0);case 9:case"end":return _context.stop()}}),_callee,null,[[0,5]])})));return function handleBanUser(){return _ref2.apply(this,arguments)}}(),handleHideMessage=function(){var _ref3=(0,_tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__.Z)(_tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee2(){return _tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.prev=0,_context2.next=3,_services_moderation_service__WEBPACK_IMPORTED_MODULE_5__.Z.removeMessage(messageID,accessToken);case 3:_context2.next=9;break;case 5:_context2.prev=5,_context2.t0=_context2.catch(0),console.error(_context2.t0),antd__WEBPACK_IMPORTED_MODULE_8__.ZP.error(_context2.t0);case 9:case"end":return _context2.stop()}}),_callee2,null,[[0,5]])})));return function handleHideMessage(){return _ref3.apply(this,arguments)}}(),confirmHideMessage=function(){var _ref4=(0,_tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__.Z)(_tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee3(){return _tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:confirm({icon:__jsx(ExclamationCircleOutlined,null),content:"Are you sure you want to remove this message from ".concat(userDisplayName,"?"),onOk:function onOk(){handleHideMessage()}});case 1:case"end":return _context3.stop()}}),_callee3)})));return function confirmHideMessage(){return _ref4.apply(this,arguments)}}(),confirmBanUser=function(){var _ref5=(0,_tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__.Z)(_tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee4(){return _tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:confirm({icon:__jsx(ExclamationCircleOutlined,null),content:"Are you sure you want to ban ".concat(userDisplayName," from chat?"),onOk:function onOk(){handleBanUser()}});case 1:case"end":return _context4.stop()}}),_callee4)})));return function confirmBanUser(){return _ref5.apply(this,arguments)}}(),items=[{icon:__jsx(EyeInvisibleOutlined,null),label:"Hide Message",key:"hide-message",onClick:confirmHideMessage},{icon:__jsx(CloseCircleOutlined,null),label:"Ban User",key:"ban-user",onClick:confirmBanUser},{label:"More Info...",key:"more-info",onClick:function onClick(){return setShowUserDetailsModal(!0)}}];return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(antd__WEBPACK_IMPORTED_MODULE_9__.Z,{menu:{items},trigger:["click"]},__jsx("button",{type:"button","aria-label":"Chat moderation options",onClick:function onClick(e){return e.preventDefault()}},__jsx(antd__WEBPACK_IMPORTED_MODULE_10__.Z,null,__jsx(SmallDashOutlined,null)))),__jsx(_ui_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__.Modal,{title:userDisplayName,open:showUserDetailsModal,handleCancel:function handleCancel(){setShowUserDetailsModal(!1)}},__jsx(_ChatModerationDetailsModal_ChatModerationDetailsModal__WEBPACK_IMPORTED_MODULE_4__.l,{userId:userID,accessToken})))};try{ChatModerationActionMenu.displayName="ChatModerationActionMenu",ChatModerationActionMenu.__docgenInfo={description:"",displayName:"ChatModerationActionMenu",props:{accessToken:{defaultValue:null,description:"",name:"accessToken",required:!0,type:{name:"string"}},messageID:{defaultValue:null,description:"",name:"messageID",required:!0,type:{name:"string"}},userID:{defaultValue:null,description:"",name:"userID",required:!0,type:{name:"string"}},userDisplayName:{defaultValue:null,description:"",name:"userDisplayName",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/chat/ChatModerationActionMenu/ChatModerationActionMenu.tsx#ChatModerationActionMenu"]={docgenInfo:ChatModerationActionMenu.__docgenInfo,name:"ChatModerationActionMenu",path:"components/chat/ChatModerationActionMenu/ChatModerationActionMenu.tsx#ChatModerationActionMenu"})}catch(__react_docgen_typescript_loader_error){}},"./components/chat/ChatModerationDetailsModal/ChatModerationDetailsModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>ChatModerationDetailsModal});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),collapse=__webpack_require__("./node_modules/antd/es/collapse/index.js"),row=__webpack_require__("./node_modules/antd/es/row/index.js"),col=__webpack_require__("./node_modules/antd/es/col/index.js"),es_button=__webpack_require__("./node_modules/antd/es/button/index.js"),spin=__webpack_require__("./node_modules/antd/es/spin/index.js"),tag=__webpack_require__("./node_modules/antd/es/tag/index.js"),table=__webpack_require__("./node_modules/antd/es/table/index.js"),format=__webpack_require__("./node_modules/date-fns/esm/format/index.js"),dynamic=__webpack_require__("./node_modules/next/dynamic.js"),dynamic_default=__webpack_require__.n(dynamic),react_error_boundary_esm=__webpack_require__("./node_modules/react-error-boundary/dist/react-error-boundary.esm.js"),moderation_service=__webpack_require__("./services/moderation-service.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ChatModerationDetailsModal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/chat/ChatModerationDetailsModal/ChatModerationDetailsModal.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ChatModerationDetailsModal_module.Z,options);const ChatModerationDetailsModal_ChatModerationDetailsModal_module=ChatModerationDetailsModal_module.Z&&ChatModerationDetailsModal_module.Z.locals?ChatModerationDetailsModal_module.Z.locals:void 0;var ua_parser=__webpack_require__("./node_modules/ua-parser-js/src/ua-parser.js"),ua_parser_default=__webpack_require__.n(ua_parser);function formatUAstring(uaString){var parser=ua_parser_default()(uaString),device=parser.device,os=parser.os,browser=parser.browser,browserVersion=browser.major,name=browser.name,osVersion=os.version,osName=os.name,model=device.model,type=device.type;if("libmpv"===uaString)return"mpv media player";if(!name||!browserVersion||!osName)return uaString;var deviceString=model||type?" (".concat(model||type,")"):"";return"".concat(name," ").concat(browserVersion," on ").concat(osName," ").concat(osVersion,"\n  ").concat(deviceString)}var ComponentError=__webpack_require__("./components/ui/ComponentError/ComponentError.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement,Panel=collapse.Z.Panel,DeleteOutlined=dynamic_default()((function(){return Promise.all([__webpack_require__.e(2074),__webpack_require__.e(7949)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/DeleteOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/DeleteOutlined.js"]}}}),removeMessage=function(){var _ref=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(messageId,accessToken){return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:try{moderation_service.Z.removeMessage(messageId,accessToken)}catch(e){console.error(e)}case 1:case"end":return _context.stop()}}),_callee)})));return function removeMessage(_x,_x2){return _ref.apply(this,arguments)}}(),ValueRow=function ValueRow(_ref2){var label=_ref2.label,value=_ref2.value;return __jsx(row.Z,{justify:"space-around",align:"middle"},__jsx(col.Z,{span:12},label),__jsx(col.Z,{span:12},value))};ValueRow.displayName="ValueRow";var ConnectedClient=function ConnectedClient(_ref3){var client=_ref3.client,messageCount=client.messageCount,connectedAt=client.connectedAt,geo=client.geo,connectedAtDate=(0,format.Z)(new Date(connectedAt),"PP pp");return __jsx("div",null,__jsx(ValueRow,{label:"Messages Sent",value:messageCount.toString()}),"N/A"!==geo&&__jsx(ValueRow,{label:"Geo",value:geo}),__jsx(ValueRow,{label:"Connected At",value:connectedAtDate}))};ConnectedClient.displayName="ConnectedClient";var UserColorBlock=function UserColorBlock(_ref4){var color=_ref4.color,bg="var(--theme-color-users-".concat(color,")");return __jsx("div",{className:ChatModerationDetailsModal_ChatModerationDetailsModal_module.colorBlock,style:{backgroundColor:bg}},"Color ",color)};UserColorBlock.displayName="UserColorBlock";var ChatModerationDetailsModal=function ChatModerationDetailsModal(_ref5){var userId=_ref5.userId,accessToken=_ref5.accessToken,_useState=(0,react.useState)(null),userDetails=_useState[0],setUserDetails=_useState[1],_useState2=(0,react.useState)(!0),loading=_useState2[0],setLoading=_useState2[1],getDetails=function(){var _ref6=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee2(){var response;return regenerator_default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.prev=0,_context2.next=3,fetch("/api/moderation/chat/user/".concat(userId,"?accessToken=").concat(accessToken));case 3:return _context2.next=5,_context2.sent.json();case 5:response=_context2.sent,setUserDetails(response),setLoading(!1),_context2.next=13;break;case 10:_context2.prev=10,_context2.t0=_context2.catch(0),console.error(_context2.t0);case 13:case"end":return _context2.stop()}}),_callee2,null,[[0,10]])})));return function getDetails(){return _ref6.apply(this,arguments)}}();if((0,react.useEffect)((function(){getDetails()}),[]),!userDetails)return null;var user=userDetails.user,connectedClients=userDetails.connectedClients,messages=userDetails.messages,displayColor=user.displayColor,createdAt=user.createdAt,previousNames=user.previousNames,scopes=user.scopes,isBot=user.isBot,authenticated=user.authenticated,totalMessagesSent=connectedClients.reduce((function(acc,client){return acc+client.messageCount}),0),createdAtDate=(0,format.Z)(new Date(createdAt),"PP pp"),chatMessageColumns=[{title:"Message",dataIndex:"body",key:"body"},{title:"Sent At",dataIndex:"timestamp",key:"timestamp",render:function render(timestamp){return(0,format.Z)(new Date(timestamp),"PP pp")}},{title:"Delete",key:"delete",render:function render(_text,record){return __jsx(es_button.Z,{type:"primary",ghost:!0,icon:__jsx(DeleteOutlined,null),onClick:function onClick(){return removeMessage(record.id,accessToken)}})}}];return __jsx(react_error_boundary_esm.SV,{fallbackRender:function fallbackRender(_ref7){var error=_ref7.error,resetErrorBoundary=_ref7.resetErrorBoundary;return __jsx(ComponentError.A,{componentName:"ChatModerationDetailsModal",message:error.message,retryFunction:resetErrorBoundary})}},__jsx(spin.Z,{spinning:loading},__jsx(UserColorBlock,{color:displayColor}),null==scopes?void 0:scopes.map((function(scope){return __jsx(tag.Z,{key:scope},scope)})),authenticated&&__jsx(tag.Z,null,"Authenticated"),isBot&&__jsx(tag.Z,null,"Bot"),__jsx(ValueRow,{label:"Messages Sent Across Clients",value:totalMessagesSent.toString()}),__jsx(ValueRow,{label:"User Created",value:createdAtDate}),__jsx(ValueRow,{label:"Known As",value:previousNames.join(",")}),__jsx(collapse.Z,{accordion:!0},__jsx(Panel,{header:"Currently Connected Clients",key:"connected-clients"},__jsx(collapse.Z,{accordion:!0},connectedClients.map((function(client){return __jsx(Panel,{header:formatUAstring(client.userAgent),key:client.id},__jsx(ConnectedClient,{client}))})))),__jsx(collapse.Z,{accordion:!0},__jsx(Panel,{header:"Recent Chat Messages",key:"chat-messages"},__jsx(table.Z,{size:"small",pagination:null,columns:chatMessageColumns,dataSource:messages,rowKey:"id"}))))))};ChatModerationDetailsModal.displayName="ChatModerationDetailsModal";try{ChatModerationDetailsModal.displayName="ChatModerationDetailsModal",ChatModerationDetailsModal.__docgenInfo={description:"",displayName:"ChatModerationDetailsModal",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}},accessToken:{defaultValue:null,description:"",name:"accessToken",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/chat/ChatModerationDetailsModal/ChatModerationDetailsModal.tsx#ChatModerationDetailsModal"]={docgenInfo:ChatModerationDetailsModal.__docgenInfo,name:"ChatModerationDetailsModal",path:"components/chat/ChatModerationDetailsModal/ChatModerationDetailsModal.tsx#ChatModerationDetailsModal"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/ComponentError/ComponentError.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ComponentError});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),antd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/antd/es/alert/index.js"),antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/button/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,openBugReport=function openBugReport(){window.open("https://github.com/owncast/owncast/issues/new?assignees=&labels=&template=bug-report-feature-request.yml","_blank")},ErrorContent=function ErrorContent(_ref){var message=_ref.message,componentName=_ref.componentName,details=_ref.details,canRetry=_ref.canRetry;return __jsx("div",null,__jsx("p",null,"There was an unexpected error. It would be appreciated if you would report this so it can be fixed in the future."),!!canRetry&&__jsx("p",null,"You may optionally retry, however functionality might not work as expected."),__jsx("code",null,__jsx("div",null,message&&"Error: ".concat(message)),__jsx("div",null,"Component: ",componentName),__jsx("div",null,details&&details)))};ErrorContent.displayName="ErrorContent";var ComponentError=function ComponentError(_ref2){var message=_ref2.message,componentName=_ref2.componentName,details=_ref2.details,retryFunction=_ref2.retryFunction;return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Z,{message:"Error",showIcon:!0,description:__jsx(ErrorContent,{message,details,componentName,canRetry:!!retryFunction}),type:"error",action:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,retryFunction&&__jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Z,{ghost:!0,size:"small",onClick:retryFunction},"Retry"),__jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Z,{ghost:!0,size:"small",danger:!0,onClick:openBugReport},"Report Error"))})};ComponentError.displayName="ComponentError";try{ComponentError.displayName="ComponentError",ComponentError.__docgenInfo={description:"",displayName:"ComponentError",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},componentName:{defaultValue:null,description:"",name:"componentName",required:!0,type:{name:"string"}},details:{defaultValue:null,description:"",name:"details",required:!1,type:{name:"string"}},retryFunction:{defaultValue:null,description:"",name:"retryFunction",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/ComponentError/ComponentError.tsx#ComponentError"]={docgenInfo:ComponentError.__docgenInfo,name:"ComponentError",path:"components/ui/ComponentError/ComponentError.tsx#ComponentError"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Modal:()=>Modal});var modal=__webpack_require__("./node_modules/antd/es/modal/index.js"),spin=__webpack_require__("./node_modules/antd/es/spin/index.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_error_boundary_esm=__webpack_require__("./node_modules/react-error-boundary/dist/react-error-boundary.esm.js"),ComponentError=__webpack_require__("./components/ui/ComponentError/ComponentError.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Modal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/ui/Modal/Modal.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Modal_module.Z,options);const Modal_Modal_module=Modal_module.Z&&Modal_module.Z.locals?Modal_module.Z.locals:void 0;var __jsx=react.createElement,Modal=function Modal(_ref){var title=_ref.title,url=_ref.url,open=_ref.open,handleOk=_ref.handleOk,handleCancel=_ref.handleCancel,afterClose=_ref.afterClose,height=_ref.height,width=_ref.width,children=_ref.children,_useState=(0,react.useState)(!!url),loading=_useState[0],setLoading=_useState[1],defaultHeight="100%",defaultWidth="520px";url&&(defaultHeight="70vh",defaultWidth="900px");var modalContentBodyStyle={padding:"0px",minHeight:height,height:null!=height?height:defaultHeight},iframe=url&&__jsx("iframe",{title,src:url,width:"100%",height:"100%",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",frameBorder:"0",allowFullScreen:!0,style:{display:"block"},onLoad:function onLoad(){return setLoading(!1)}}),iframeDisplayStyle=loading?"none":"inline";return __jsx(modal.Z,{title,open,onOk:handleOk,onCancel:handleCancel,afterClose,bodyStyle:modalContentBodyStyle,width:null!=width?width:defaultWidth,zIndex:999,footer:null,centered:!0,destroyOnClose:!0,className:Modal_Modal_module.modal},__jsx(react_error_boundary_esm.SV,{fallbackRender:function fallbackRender(_ref2){var error=_ref2.error,resetErrorBoundary=_ref2.resetErrorBoundary;return __jsx(ComponentError.A,{componentName:"Modal",message:error.message,retryFunction:resetErrorBoundary})}},__jsx("div",{id:"modal-container",style:{height:"100%"}},iframe&&__jsx("div",{style:{display:iframeDisplayStyle}},iframe),children&&__jsx("div",{className:Modal_Modal_module.content},children),loading&&__jsx(spin.Z,{className:Modal_Modal_module.spinner,spinning:loading,size:"large",tip:title}))))};Modal.displayName="Modal",Modal.defaultProps={url:void 0,children:void 0,handleOk:void 0,handleCancel:void 0,afterClose:void 0};try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},url:{defaultValue:{value:"undefined"},description:"",name:"url",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},handleOk:{defaultValue:{value:"undefined"},description:"",name:"handleOk",required:!1,type:{name:"() => void"}},handleCancel:{defaultValue:{value:"undefined"},description:"",name:"handleCancel",required:!1,type:{name:"() => void"}},afterClose:{defaultValue:{value:"undefined"},description:"",name:"afterClose",required:!1,type:{name:"() => void"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"components/ui/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./services/moderation-service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__);const __WEBPACK_DEFAULT_EXPORT__=function(){function ChatModerationService(){(0,_tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__.Z)(this,ChatModerationService)}var _banUser,_removeMessage;return(0,_tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__.Z)(ChatModerationService,null,[{key:"removeMessage",value:(_removeMessage=(0,_tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee(id,accessToken){var url,hideMessageUrl,options;return _tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return(url=new URL("/api/chat/messagevisibility",window.location.toString())).searchParams.append("accessToken",accessToken),hideMessageUrl=url.toString(),options={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idArray:[id]})},_context.next=6,fetch(hideMessageUrl,options);case 6:case"end":return _context.stop()}}),_callee)}))),function removeMessage(_x,_x2){return _removeMessage.apply(this,arguments)})},{key:"banUser",value:(_banUser=(0,_tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee2(id,accessToken){var url,hideMessageUrl,options;return _tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return(url=new URL("/api/chat/users/setenabled",window.location.toString())).searchParams.append("accessToken",accessToken),hideMessageUrl=url.toString(),options={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:id})},_context2.next=6,fetch(hideMessageUrl,options);case 6:case"end":return _context2.stop()}}),_callee2)}))),function banUser(_x3,_x4){return _banUser.apply(this,arguments)})}]),ChatModerationService}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/chat/ChatModerationDetailsModal/ChatModerationDetailsModal.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".LLkMqCQ151QLthz6Jrm9{padding:10px}.tLPeuqwkaXHP5VCqtGlt{margin:10px;padding:15px;border:1px solid #ccc;border-radius:5px}.Ptcgm8bVQJo5oZiQCGGK{display:inline-block;width:60px;height:20px;border:1px solid #000;text-align:center;font-size:.8rem}.wwiXkMXh0rQl0JFi8jFw{font-weight:bold;padding-right:10px;font-size:1.2rem}","",{version:3,sources:["webpack://./components/chat/ChatModerationDetailsModal/ChatModerationDetailsModal.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CAGF,sBACE,WAAA,CACA,YAAA,CACA,qBAAA,CACA,iBAAA,CAGF,sBACE,oBAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,iBAAA,CACA,eAAA,CAGF,sBACE,gBAAA,CACA,kBAAA,CACA,gBAAA",sourcesContent:[".modalContainer {\n  padding: 10px;\n}\n\n.chatHistory {\n  margin: 10px;\n  padding: 15px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n.colorBlock {\n  display: inline-block;\n  width: 60px;\n  height: 20px;\n  border: 1px solid #000;\n  text-align: center;\n  font-size: 0.8rem;\n}\n\n.displayName {\n  font-weight: bold;\n  padding-right: 10px;\n  font-size: 1.2rem;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={modalContainer:"LLkMqCQ151QLthz6Jrm9",chatHistory:"tLPeuqwkaXHP5VCqtGlt",colorBlock:"Ptcgm8bVQJo5oZiQCGGK",displayName:"wwiXkMXh0rQl0JFi8jFw"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/ui/Modal/Modal.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Lt6Vg4guWZPhViFV8BR8{position:absolute;top:50%;left:50%}.Ep_XrhrWHWWaET4hDVIz{display:block;height:100%;padding:1.25rem;background-color:var(--theme-color-components-modal-content-background);color:var(--theme-color-components-modal-content-text)}.Ep_XrhrWHWWaET4hDVIz h1:first-child,.Ep_XrhrWHWWaET4hDVIz h2:first-child,.Ep_XrhrWHWWaET4hDVIz h3:first-child{margin-top:unset}.zqlLEpPjiWLlgRdtKyEt .ant-modal-header{color:var(--theme-color-components-modal-header-text);font-family:var(--theme-text-display-font-family);padding:1rem 1.25rem}.zqlLEpPjiWLlgRdtKyEt .ant-modal-title{color:var(--theme-color-components-modal-header-text);font-size:17px;font-weight:600}.zqlLEpPjiWLlgRdtKyEt .ant-modal-body{overflow:auto;border-radius:0 0 var(--theme-rounded-corners) var(--theme-rounded-corners)}.zqlLEpPjiWLlgRdtKyEt .ant-modal-close-x{font-size:12px}.zqlLEpPjiWLlgRdtKyEt .ant-modal{color:var(--theme-color-components-text-on-light)}.zqlLEpPjiWLlgRdtKyEt .ant-modal h1{color:var(--theme-color-components-text-on-light)}.zqlLEpPjiWLlgRdtKyEt .ant-modal-content{box-shadow:3px 15px 15px -3px rgba(0,0,0,.15),0 4px 6px -2px rgba(0,0,0,.08)}","",{version:3,sources:["webpack://./components/ui/Modal/Modal.module.scss"],names:[],mappings:"AACA,sBACE,iBAAA,CACA,OAAA,CACA,QAAA,CAGF,sBACE,aAAA,CACA,WAAA,CACA,eAAA,CACA,uEAAA,CACA,sDAAA,CAEA,+GAGE,gBAAA,CAKH,wCACC,qDAAA,CACA,iDAAA,CACA,oBAAA,CAGD,uCACC,qDAAA,CACA,cAAA,CACA,eAAA,CAGD,sCACC,aAAA,CACA,2EAAA,CAGD,yCACC,cAAA,CAGD,iCACC,iDAAA,CAEA,oCACC,iDAAA,CAIF,yCACC,4EAAA",sourcesContent:["\n.spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n\n.content {\n  display: block;\n  height: 100%;\n  padding: 1.25rem;\n  background-color: var(--theme-color-components-modal-content-background);\n  color: var(--theme-color-components-modal-content-text);\n\n  h1:first-child,\n  h2:first-child,\n  h3:first-child {\n    margin-top: unset;\n  }\n}\n\n.modal {\n\t:global(.ant-modal-header) {\n\t\tcolor: var(--theme-color-components-modal-header-text);\n\t\tfont-family: var(--theme-text-display-font-family);\n\t\tpadding: 1rem 1.25rem;\n\t}\n\n\t:global(.ant-modal-title) {\n\t\tcolor: var(--theme-color-components-modal-header-text);\n\t\tfont-size: 17px;\n\t\tfont-weight: 600;\n\t}\n\n\t:global(.ant-modal-body) {\n\t\toverflow: auto;\n\t\tborder-radius: 0 0 var(--theme-rounded-corners) var(--theme-rounded-corners);\n\t}\n\n\t:global(.ant-modal-close-x) {\n\t\tfont-size: 12px;\n\t}\n\n\t:global(.ant-modal) {\n\t\tcolor: var(--theme-color-components-text-on-light);\n\n\t\th1 {\n\t\t\tcolor: var(--theme-color-components-text-on-light);\n\t\t}\n\t}\n\n\t:global(.ant-modal-content) {\n\t\tbox-shadow: 3px 15px 15px -3px rgb(0 0 0 / 15%), 0 4px 6px -2px rgb(0 0 0 / 8%);\n\t}\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={spinner:"Lt6Vg4guWZPhViFV8BR8",content:"Ep_XrhrWHWWaET4hDVIz",modal:"zqlLEpPjiWLlgRdtKyEt"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);