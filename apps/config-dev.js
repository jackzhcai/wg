/**
 * Created by lenovo on 2016/1/7.
 */
//'use strict';
var baseUrl = '../apps/js';
var version = +(new Date());

requirejs.config({
    baseUrl: baseUrl,
    paths: {
        jquery: '../../bower_components/jquery/jquery'
        ,jquerySlimscroll: '../../bower_components/jquery.slimscroll/jquery.slimscroll'
        ,jqueryBlockUI: '../../bower_components/BlockUI/jquery.blockUI'
        ,jqueryCookie: '../../bower_components/jquery.cookie/jquery.cookie'
        ,jqueryUniform: '../../bower_components/uniform/jquery.uniform'
        ,bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap'
        ,bootstrapSwitch: '../../bower_components/bootstrap-switch/dist/js/bootstrap-switch'
        ,bootstrapHoverDropdown: '../../bower_components/bootstrap-hover-dropdown/bootstrap-hover-dropdown'
        ,angular: '../../bower_components/angular/angular'
        ,domReady: '../../bower_components/requirejs-domready/domReady'
        ,angularSanitize: '../../bower_components/angular-sanitize/angular-sanitize'
        ,angularTouch   : '../../bower_components/angular-touch/angular-touch'
        ,angularBootstrap: '../../bower_components/angular-bootstrap/ui-bootstrap-tpls.min'
        ,ocLazyLoad: '../../bower_components/ocLazyLoad/dist/ocLazyLoad.require'
        ,angularUiRouter: '../../bower_components/angular-ui-router/release/angular-ui-router'
        ,angularRoute: '../../bower_components/angular-route/angular-route'
        ,mod: "conf/mod"
        ,app: 'scripts/app'
        ,layout: 'scripts/layout'
        ,quickSidebar: 'scripts/quick-sidebar'
        ,theme: 'scripts/theme'
        ,underscore : '../../bower_components/underscore/underscore'
    },
    shim: {
        'jquery':  {
            'exports': 'jquery'
        },
        'jquerySlimscroll': {
            deps: ['jquery'],
            'exports': '$.fn.slimScroll'
        },
        'jqueryBlockUI': {
            deps: ['jquery'],
            'exports': '$.blockUI'
        },
        'jqueryCookie': {
            deps: ['jquery'],
            'exports': '$.cookie'
        },
        'jqueryUniform': {
            deps: ['jquery'],
            'exports': '$.uniform'
        },
        'bootstrap': ['jquery'],
        'bootstrapSwitch': {
            deps: ['jquery'],
            'exports': '$.fn.bootstrapSwitch.defaults'
        },
        'bootstrapHoverDropdown': {
            deps: ['jquery'],
            'exports': '$.fn.dropdownHover'
        },
        'angular': {
            'exports': 'angular'
        },
        'angularSanitize':{
            deps: ['angular'],
            'exports':'ngSanitize'
        },
        'angularTouch'  :{
            deps: ['angular'],
            exports : 'ngTouch'
        },
        'angularBootstrap': ['angular'],
        'angularRoute': ['angular'],
        'angularUiRouter': {
            deps: ['angular'],
            exports: 'angularUiRouter'
        },
        'ocLazyLoad': {
            deps:['angular'],
            exports: 'ocLazyLoad'
        },
        'app': ['jquery', 'jquerySlimscroll', 'bootstrap'],
        'layout': ['jquery', 'app'],
        'quickSidebar': ['jquery', 'app'],
        'theme': ['jquery', 'app']
    },
    urlArgs : 'ver=' + version,
    /*
    priority: [
        "angular"
    ],
    */
    waitSeconds: 120, //requirejs load的超时时间。设为0禁用等待超时，默认为7秒
    deps: [
        'main'
    ]
});
