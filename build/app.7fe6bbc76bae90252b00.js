webpackJsonp([1],{"03fa89991e20a39cb6a6":function(module,exports){var path="/templates/index/menu/menu-link.tmpl.html";window.angular.module("ng").run(["$templateCache",function(c){c.put(path,'<md-button ng-class="{\'{{section.icon}}\' : true,\'active\' : section.state}" ui-sref-active="active" ui-sref="{{section.state}}" \n    ng-href="{{ section.uri }}">\n    {{section | humanizeDoc}}\n</md-button>')}]),module.exports=path},"1d5dda03082391ccf555":function(module,exports){var menuLinkDirective=["$log","$window","$location",function($log,$window,$location){return{scope:{section:"="},templateUrl:"/templates/index/menu/menu-link.tmpl.html",link:function($scope,$element){var controller=$element.parent().controller(),uri=$window.location.pathname+$window.location.search,searchString=$scope.section.uri;uri.substr(0,searchString.length)===searchString&&($scope.section.state=!0),$scope.focusSection=function(){$window.location.href=this.section.uri,controller.autoFocusContent=!0}}}}];angular.module("menu_link",[]).directive("menuLink",menuLinkDirective)},"2f81f5369d339e005904":function(module,exports){__signin_callback=function(_popup,response){angular.element(document.getElementById("mainController")).scope().main.login.signin_response(response),_popup.close()}},"2f823a6889890ebdbfad":function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0_config__=__webpack_require__("99de0513eef6d591fb51");__webpack_require__("2f81f5369d339e005904"),__webpack_require__("cfa4d2969ec4798cc507"),__webpack_require__("021658d2ecb4018274f9"),__webpack_require__("60b2f4d49b055bccbca6"),__webpack_require__("a9fe10793c0169d52fad"),__webpack_require__("9b5edb9e4aa59a63738d"),__webpack_require__("0204f718de43de27d598"),__webpack_require__("e95a8f090408276a319e"),__webpack_require__("ca133707063c6331a1e8"),__webpack_require__("bbe9733f5bb9385a58e8"),__webpack_require__("0204f718de43de27d598"),__webpack_require__("978b05f10de88acd6622"),__webpack_require__("f6a50cf1c8317ca97318"),__webpack_require__("a0903571e027f4fd235c"),__webpack_require__("25fbbd4b2402f161f45e"),__webpack_require__("ff355ecc581b44c02d4c"),__webpack_require__("35f2b9fa643686058120"),__webpack_require__("6c5f10e2d2d9e77859fa"),__webpack_require__("d9894cb77c84793e0da6"),__webpack_require__("2f984159d6347a933483"),__webpack_require__("b9adf41643b117f0cf7a");var templates=__webpack_require__("da79f4fd00994f6d96be");templates.keys().forEach(function(key){templates(key)}),__webpack_require__("489551a94fce5d644d6b"),function(requireContext){requireContext.keys().map(requireContext)}(__webpack_require__("f3415e2a194fbe09cf3e"));var app=angular.module("app",["main_controller","include_template","tmh.dynamicLocale","ngMeta"]);app.config(["$logProvider","$provide","$mdThemingProvider","tmhDynamicLocaleProvider","$mdIconProvider","$$mdSvgRegistry",function($logProvider,$provide,$mdThemingProvider,tmhDynamicLocaleProvider,$mdIconProvider,$$mdSvgRegistry){$logProvider.debugEnabled(__WEBPACK_IMPORTED_MODULE_0_config__.a.enableDebug),$mdIconProvider.icon("md-toggle-arrow",$$mdSvgRegistry.mdToggleArrow),$provide.decorator("$log",function($delegate){var origInfo=$delegate.info;return $delegate.info=function(){$logProvider.debugEnabled()&&origInfo.apply(null,arguments)},$delegate}),$mdThemingProvider.theme("default").primaryPalette("indigo").accentPalette("blue"),tmhDynamicLocaleProvider.appendScriptTo(document.getElementsByTagName("head")[0]),tmhDynamicLocaleProvider.localeLocationPattern(__WEBPACK_IMPORTED_MODULE_0_config__.a.apiData.adminHost+"/build/i18n/angular-locale_{{locale}}.js")}]),app.filter("nospace",function(){return function(value){return value?value.replace(/ /g,""):""}}),app.filter("humanizeDoc",function(){return function(doc){if(doc)return"directive"===doc.type?doc.name.replace(/([A-Z])/g,function($1){return"-"+$1.toLowerCase()}):doc.label||doc.name}}),app.run(["$rootScope","$window","$anchorScroll","ngMeta",function($rootScope,$window,$anchorScroll,ngMeta){ngMeta.init(),$rootScope.$on("$routeChangeSuccess",function(event,current,previous){var element=angular.element(document.querySelector(".app-view"));angular.element(element)[0].scrollTop=0})}])},"2f984159d6347a933483":function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0_lodash__=__webpack_require__("6d8089820eedc734c4ea"),__WEBPACK_IMPORTED_MODULE_1_angular_recaptcha__=(__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),__webpack_require__("ea7c51b683d202267dfd"));__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_recaptcha__),__webpack_require__("99de0513eef6d591fb51");__webpack_require__("4418ff57dd2792f37c53");var mainController=["$location","$cookies","$routeParams","$route","$window","$log","$scope","$rootScope","$timeout","$mdSidenav","$mdMedia","$translate","menuFactory","$http",function($location,$cookies,$routeParams,$route,$window,$log,$scope,$rootScope,$timeout,$mdSidenav,$mdMedia,$translate,menuFactory,$http){var self=this;this.menuData=[{name:"Home",uri:"/#/",type:"link",pages:[]},{name:"Contact Us",uri:"/#/contact-us",type:"link",pages:[]}],this.menu=new menuFactory({menuData:this.menuData,$scope:$scope,$mdMedia:$mdMedia,$mdSidenav:$mdSidenav}),this.contactUs={email:"",subject:"",message:""},this.recaptchaResponse=null,this.recaptchaWidgetId=null,this.setRecaptchaResponse=function(response){this.recaptchaResponse=response},this.setRecaptchaWidgetId=function(widgetId){this.recaptchaWidgetId=widgetId},this.resetRecaptcha=function(){this.recaptchaWidgetId&&grecaptcha.reset(this.recaptchaWidgetId)},this.submitForm=function(){if(!this.recaptchaResponse)return void alert("Please complete the reCAPTCHA challenge.");const data={to:this.contactUs.email,subject:this.contactUs.subject,message:this.contactUs.message,recaptchaToken:this.recaptchaResponse};console.log(data);$http({method:"POST",url:"https://www.spacehead.com/send-email",headers:{Accept:"application/json"},data:data}).then(function(data){self.callback(data)},function(data){self.callback(data)})},this.callback=function(data,callback){console.log(data)}}],app=angular.module("main_controller",["ngCookies","ngRoute","ngResource","ngMaterial","ngMessages","ngSanitize","ngMdIcons","ngMeta","translations","menu_factory","vcRecaptcha"]);app.controller("mainController",mainController),app.filter("nl2br",function($sce){return function(msg,is_xhtml){var is_xhtml=is_xhtml||!0,breakTag=is_xhtml?"<br />":"<br>",msg=(msg+"").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1"+breakTag+"$2");return $sce.trustAsHtml(msg)}}),app.config(function($locationProvider,$routeProvider,ngMetaProvider){$locationProvider.hashPrefix(""),$routeProvider.when("/",{templateUrl:"/templates/main.tmpl.html",data:{meta:{title:"Spacehead, Introduction",description:"Spacehead, a full-stack development firm specializing in cutting-edge web solutions that bring your digital vision to life."}}}),$routeProvider.when("/contact-us",{templateUrl:"/templates/pages/contact-us.tmpl.html",data:{meta:{title:"Spacehead, Contact Us",description:"We’re here to help you bring your vision to life, so let’s start building something amazing together."}}})})},"35f2b9fa643686058120":function(module,exports){},"3bbb3261b3d58cf30e70":function(module,exports){var path="/templates/index.tmpl.html";window.angular.module("ng").run(["$templateCache",function(c){c.put(path,'<section layout="row" flex layout-fill ng-cloak>\n    <md-sidenav class="md-sidenav-left" md-component-id="left" md-is-locked-open="1" md-whiteframe="4">\n      <div layout="row" layout-padding>\n        <a ng-href="#!/">\n          <img ng-src="build/images/spacehead.png" width="100%">\n        </a>\n      </div>\n    \n      <md-content role="navigation">\n        <ul class="side-menu">\n          <li ng-repeat="section in main.menu.menuTree.sections" class="parent-list-item" ng-class="{\'parentActive\' : main.menu.menuTree.isSectionSelected(section)}">\n            <h2 class="menu-heading md-subhead" ng-if="section.type === \'heading\'" id="heading_{{ section.name | nospace }}">\n              {{section.name}}\n            </h2>\n            <menu-link section="section" ng-if="section.type === \'link\'"></menu-link>\n            <menu-toggle section="section" ng-if="section.type === \'toggle\'"></menu-toggle>\n          </li>\n        </ul>\n      </md-content>\n      \n    </md-sidenav>\n    \n    <md-content flex layout-fill layout-align="center center" class="app-view">\n      <div class="ng-view"></div>\n\n      <div layout="row" flex="noshrink" layout-align="center center">\n        <div id="license-footer" flex>\n          (c)2024 Spacehead, Stockholm - Sweden.\n        </div>\n      </div>\n\n    </md-content>\n\n</section>\n')}]),module.exports=path},"4418ff57dd2792f37c53":function(module,exports,__webpack_require__){__webpack_require__("d17e930107831ace9aa9");var menuFactory=["$log","$timeout","menuTreeFactory",function($log,$timeout,menuTreeFactory){return function(options){function debounce(func,wait,context){var timer;return function(){var context=self.$scope,args=Array.prototype.slice.call(arguments);$timeout.cancel(timer),timer=$timeout(function(){timer=void 0,func.apply(context,args)},wait||10)}}var self=this;this.$scope=options.$scope,this.$mdMedia=options.$mdMedia,this.$mdSidenav=options.$mdSidenav,this.options=options,this.menuTree=new menuTreeFactory(options),this.menuData=options.menuData,this.menuState=!0,this.openLeft=function(){return!(!this.menuState||!this.$mdMedia("gt-md"))},this.buildDelayedToggler=function(navID){return debounce(function(){self.menuState=!self.openLeft(),self.$mdMedia("gt-md")||self.$mdSidenav(navID).toggle().then(function(){})},200)},this.toggleLeft=this.buildDelayedToggler("left")}}];angular.module("menu_factory",["menu_tree_factory"]).factory("menuFactory",menuFactory)},"5bd97f591d3aaffd3680":function(module,exports,__webpack_require__){var module,angular=__webpack_require__("cfa4d2969ec4798cc507"),translations={"app.main_menu":"Main menu"};try{module=angular.module("translations")}catch(err){module=angular.module("translations",["pascalprecht.translate"])}module.config(["$translateProvider",function($translateProvider){$translateProvider.translations("en",translations)}]),module.exports=translations},"6c5f10e2d2d9e77859fa":function(module,exports){},"6e2fefd7ab31d1f95194":function(module,exports){var path="/templates/index/menu.tmpl.html";window.angular.module("ng").run(["$templateCache",function(c){c.put(path,'<md-content role="navigation">\n    <ul class="side-menu">\n      <li ng-repeat="section in main.menu.menuTree.sections" class="parent-list-item" ng-class="{\'parentActive\' : main.menu.menuTree.isSectionSelected(section)}">\n        <h2 class="menu-heading md-subhead" ng-if="section.type === \'heading\'" id="heading_{{ section.name | nospace }}">\n          {{section.name}}\n        </h2>\n        <menu-link section="section" ng-if="section.type === \'link\'"></menu-link>\n        <menu-toggle section="section" ng-if="section.type === \'toggle\'"></menu-toggle>\n      </li>\n    </ul>\n  </md-content>')}]),module.exports=path},"7a5b53b0d59e9e583297":function(module,exports){var path="/templates/pages/contact-us.tmpl.html";window.angular.module("ng").run(["$templateCache",function(c){c.put(path,'\n    <div layout="column" layout-fill layout-padding layout-align="center center">\n        <div>\n            <a ng-href="#!/">\n                <img ng-src="build/images/spacehead.png" alt="Spacehead">\n            </a>\n        </div>\n        <div>\n            <h1>Contact Us</h1>\n            <p>We’re here to help you bring your vision to life! Whether you have questions, need expert advice, or want to discuss your next big project, our team is ready to assist. Reach out to us today, and let’s start building something amazing together. Your journey to exceptional solutions starts with a conversation—let’s connect!</p>\n        </div>\n        <md-divider></md-divider>\n        <div layout="row" layout-padding layout-align="center center">\n            <div>\n              <form id="email-form" ng-submit="main.submitForm()">\n                <md-input-container class="md-block">\n                  <input ng-model="main.contactUs.email" type="email" id="to" name="to">\n                  <label for="to">Your Email</label>\n                </md-input-container>\n                <md-input-container class="md-block">\n                  <input ng-model="main.contactUs.subject" type="text" id="subject" name="subject">\n                  <label for="subject">Subject</label>\n                </md-input-container>\n                <md-input-container class="md-block">\n                    <label for="message">Message</label>\n                    <textarea ng-model="main.contactUs.message" type="text" md-maxlength="150" rows= "3" id="message" name="message" md-select-on-focus></textarea>\n                </md-input-container>\n                <div>\n                    <div vc-recaptcha\n                        theme="light"\n                        key="\'6LebLHUqAAAAACTSumw5l9gNHD0a20eesr-ef183\'"\n                        on-create="main.setRecaptchaWidgetId(widgetId)"\n                        on-success="main.setRecaptchaResponse(response)">\n                    </div>\n                </div>\n                <md-button class="md-raised md-primary" type="submit">Send Email</md-button>\n              </form>\n            </div>\n        </div>\n    </div>\n')}]),module.exports=path},"7c3b4c7bf7a83b89a9fa":function(module,exports){angular.module("menu_toggle",[]).directive("menuToggle",["$timeout",function($timeout){return{scope:{section:"="},templateUrl:"/templates/index/menu/menu-toggle.tmpl.html",link:function($scope,$element){var controller=$element.parent().controller();$scope.isOpen=function(){return controller.menu.menuTree.isOpen($scope.section)},$scope.toggle=function(){controller.menu.menuTree.toggleOpen($scope.section)};var parentNode=$element[0].parentNode.parentNode.parentNode;parentNode.classList.contains("parent-list-item")&&$element[0].firstChild.setAttribute("aria-describedby",parentNode.querySelector("h2").id)}}}])},"99de0513eef6d591fb51":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={env:"prod",enableDebug:!1,apiData:{host:"https://www.spacehead.com"}}},b24471f8638dd639367d:function(module,exports){var path="/templates/main.tmpl.html";window.angular.module("ng").run(["$templateCache",function(c){c.put(path,'\n    <div layout="column" layout-fill layout-padding layout-align="center center">\n        <div>\n            <a ng-href="#!/">\n                <img ng-src="build/images/spacehead.png" alt="Spacehead">\n            </a>\n        </div>\n        <div>\n            <h1>Cloudbased Dynamic Solutions</h1>\n            <p>Welcome to Spacehead, a full-stack development firm specializing in cutting-edge web solutions that bring your digital vision to life. We excel in building robust and dynamic web applications using the latest JavaScript technologies. Our frontend expertise spans across Vue.js, Angular, AngularJS, React, and native JavaScript, enabling us to deliver visually stunning, highly interactive, and versatile user experiences tailored to your specific needs.</p>\n            <p>At Spacehead, we also pride ourselves on delivering robust, scalable, and efficient backend solutions tailored to meet the unique needs of our clients. With deep expertise in Node.js and PHP, we harness the power of these technologies to create high-performance applications that drive business success.</p>\n            <p>Our Node.js expertise enables us to build fast, event-driven systems ideal for real-time applications, APIs, and microservices. Paired with our mastery of PHP—a proven and versatile backend language—we ensure seamless integrations, secure systems, and reliable workflows for web and enterprise applications.</p>\n            <p>With a focus on clean code, best practices, and innovative problem-solving, our team is committed to turning your ideas into functional, future-ready solutions. Whether you\'re a startup seeking to scale or an enterprise optimizing your digital ecosystem, our backend development services are designed to bring your vision to life.</p>\n            <p>\n                We leverage powerful database technologies like Redis, MySQL, and MongoDB to build efficient, scalable, and reliable backend solutions. Redis, known for its blazing-fast in-memory capabilities, is ideal for caching, session management, and real-time data processing, ensuring optimal performance for demanding applications.</p>\n                <p>MySQL, with its robust relational database structure, is our go-to choice for structured data management and complex querying, delivering stability and scalability for traditional web and enterprise solutions.</p>\n                <p> For unstructured and semi-structured data, we rely on MongoDB, a flexible NoSQL database, to support modern applications requiring dynamic schemas and high scalability. By combining these technologies strategically, we ensure each project benefits from the right database solution, enabling faster development cycles, optimized performance, and long-term reliability.\n            </p>\n            <p>Let’s build the frontend and or backend that powers your business forward.</p>\n        </div>\n        <div layout="row" layout-padding layout-align="center center">\n            <div>\n                <a ng-href="#!/elitserien-95/screenshots">\n                    <img ng-src="build/images/logos/partner-logos-grey-amazonaws.png" height="64" width="116">\n                </a>\n            </div>\n            <div>\n                <a ng-href="#!/elitserien-96/screenshots">\n                    <img ng-src="build/images/logos/cloudflare.png" height="64" width="190">\n                </a>\n            </div>\n            <div>\n                <a ng-href="#!/auto-destruct/screenshots">\n                    <img ng-src="build/images/logos/github.png" height="64" height="64">\n                </a>\n            </div>\n        </div>\n    </div>\n\n')}]),module.exports=path},b9adf41643b117f0cf7a:function(module,exports){angular.module("include_template",[]).directive("ngIncludeTemplate",function(){return[function(){var link=function(scope,elem,attrs){var cache=scope.ngIncludeVariables();Object.keys(cache).forEach(function(key){scope[key]=cache[key]}),scope.$watch(function(){var val=scope.ngIncludeVariables();return angular.equals(val,cache)?cache:(cache=val,val)},function(newValue,oldValue){angular.equals(newValue,oldValue)||Object.keys(newValue).forEach(function(key){scope[key]=newValue[key]})})};return{templateUrl:function(elem,attrs){return attrs.ngIncludeTemplate},restrict:"A",scope:{ngIncludeVariables:"&"},link:function(scope,elem,attrs){link(scope)}}}]}())},bbc9b4fbfecf7b47f1bd:function(module,exports){var path="/templates/index/menu/menu-toggle.tmpl.html";window.angular.module("ng").run(["$templateCache",function(c){c.put(path,'<md-button class="md-button-toggle" ng-class="{\'toggled\' : isOpen()}" ng-click="toggle()" aria-controls="docs-menu-{{section.name | nospace}}" flex layout="row" aria-expanded="{{isOpen()}}">\n  <div layout="row" flex>\n    <span>{{section.name}}</span>\n    <span class="flex"></span>\n    <span class="md-toggle-icon" aria-hidden="true" ng-class="{\'toggled\' : isOpen()}">\n    <md-icon md-svg-icon="md-toggle-arrow" aria-label="md-toggle-arrow" ></md-icon>\n  </span>\n</div>\n</md-button>\n  <ul ng-show="isOpen()" id="docs-menu-{{section.name | nospace}}" class="menu-toggle-list">\n    <li ng-repeat="page in section.pages">\n      <menu-link section="page"></menu-link>\n    </li>\n  </ul>')}]),module.exports=path},d17e930107831ace9aa9:function(module,exports,__webpack_require__){__webpack_require__("7c3b4c7bf7a83b89a9fa"),__webpack_require__("1d5dda03082391ccf555");var menuTreeFactory=["$log","$window","$timeout",function($log,$window,$timeout){return function(options){var self=this;this.$scope=options.$scope,this.$mdMedia=options.$mdMedia,this.$mdSidenav=options.$mdSidenav,this.menuData=options.menuData,this.sections=null,this.status={isFirstOpen:!0,isFirstDisabled:!1},this.uri=$window.location.pathname+$window.location.search+$window.location.hash,this.initialize=function(){this.openedSection=null,this.sections=this.menuData},this.matchSection=function(section){if(void 0!==section.uri){var searchString=section.uri;if(this.uri.substr(0,searchString.length)===searchString)return!0}return!1},this.toggleSelectSection=function(section){self.openedSection=self.openedSection===section?null:section},this.isSectionSelected=function(section){return self.openedSection===section},this.selectPage=function(section,page){page&&page.url&&$location.path(page.url),self.currentSection=section,self.currentPage=page},this.isOpen=function(section){return this.menu.isSectionSelected(section)},this.toggleOpen=function(section){this.menu.toggleSelectSection(section)},this.isOpen=this.isOpen,this.toggleOpen=this.toggleOpen,this.autoFocusContent=!1,this.menu=this,this.initialize()}}];angular.module("menu_tree_factory",["menu_toggle","menu_link"]).factory("menuTreeFactory",menuTreeFactory)},d9894cb77c84793e0da6:function(module,exports){},da79f4fd00994f6d96be:function(module,exports,__webpack_require__){function webpackContext(req){return __webpack_require__(webpackContextResolve(req))}function webpackContextResolve(req){var id=map[req];if(!(id+1))throw Error("Cannot find module '"+req+"'.");return id}var map={"./index.tmpl.html":"3bbb3261b3d58cf30e70","./index/menu.tmpl.html":"6e2fefd7ab31d1f95194","./index/menu/menu-link.tmpl.html":"03fa89991e20a39cb6a6","./index/menu/menu-toggle.tmpl.html":"bbc9b4fbfecf7b47f1bd","./main.tmpl.html":"b24471f8638dd639367d","./pages/contact-us.tmpl.html":"7a5b53b0d59e9e583297"};webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="da79f4fd00994f6d96be"},ecb209045e0769c18561:function(module,exports,__webpack_require__){var module,angular=__webpack_require__("cfa4d2969ec4798cc507"),translations={"app.main_menu":"huvudmeny"};try{module=angular.module("translations")}catch(err){module=angular.module("translations",["pascalprecht.translate"])}module.config(["$translateProvider",function($translateProvider){$translateProvider.translations("se",translations)}]),module.exports=translations},f3415e2a194fbe09cf3e:function(module,exports,__webpack_require__){function webpackContext(req){return __webpack_require__(webpackContextResolve(req))}function webpackContextResolve(req){var id=map[req];if(!(id+1))throw Error("Cannot find module '"+req+"'.");return id}var map={"./locale_en.json":"5bd97f591d3aaffd3680","./locale_se.json":"ecb209045e0769c18561"};webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="f3415e2a194fbe09cf3e"}},["2f823a6889890ebdbfad"]);