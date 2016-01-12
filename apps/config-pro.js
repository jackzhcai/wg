/**
 * Created by lenovo on 2016/1/7.
 */
//'use strict';
var baseUrl = 'apps/js';
var version = 2016010503;

requirejs.config({
    baseUrl:baseUrl,
    paths: {
        domReady: '../../bower_components/requirejs-domready/domReady'
        ,angular: '../../bower_components/angular/angular'
        ,angularRoute: '../../bower_components/angular-route/angular-route'
        ,angularMocks: '../../bower_components/angular-mocks/angular-mocks'
        ,angularResource: '../../bower_components/angular-resource/angular-resource'
        ,angularSanitize: '../../bower_components/angular-sanitize/angular-sanitize'
        ,angularCookies:  '../../bower_components/angular-cookies/angular-cookies'
        ,angularCookie:  '../../bower_components/angular-cookie/angular-cookie'
        ,angularTouch   : '../../bower_components/angular-touch/angular-touch'
        ,angularBootstrap: '../../bower_components/angular-bootstrap/ui-bootstrap-tpls.min'
        ,angularAnimate: '../../bower_components/angular-animate/angular-animate'
        ,angularTranslate: '../../bower_components/angular-translate/angular-translate'
        ,angularLoadStaticFiles: '../../bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files'
        ,angularTreeControl: '../../bower_components/angular-tree-control/angular-tree-control'
        ,underscore : '../../bower_components/underscore/underscore'
        ,base64: '../../bower_components/js-base64/base64'
        ,zeroclipboard: '../../bower_components/zeroclipboard/dist/ZeroClipboard.min'
        ,text: '../../bower_components/text/text'
        ,FBAngular: '../../bower_components/angular-fullscreen/src/angular-fullscreen'
        ,videoJs:'../../bower_components/video.js/dist/video-js/video.dev'
        ,Chart: './common/Chart'
        ,password: './common/zxcvbn'
        ,resolve: baseUrl == 'app/js'? './devResolve': 'resolve'
    },
    shim: {
        'angular' : {
            'exports' : 'angular'
        },
        'angularRoute': ['angular'],
        'angularMocks': {
            deps:['angular'],
            'exports':'ngMock'
        },
        'angularResource':{
            deps: ['angular'],
            'exports':'ngResource'
        },
        'angularSanitize':{
            deps: ['angular'],
            'exports':'ngSanitize'
        },
        'angularCookie':{
            deps: ['angular'],
            'exports':'ngCookie'
        },
        'angularCookies':{
            deps: ['angular'],
            'exports':'ngCookies'
        },
        'angularAnimate':{
            deps: ['angular'],
            'exports' : 'ngAnimate'
        },
        'angularTouch'  :{
            deps : ['angular'],
            'exports': 'ngTouch'
        },
        'FBAngular': ['angular'],
        'angularBootstrap': ['angular'],
        'angularTranslate': ['angular'],
        'angularLoadStaticFiles' :  ['angular','angularTranslate'],
        'angularTreeControl' :  ['angular'],
        'templates': ['angular'],
        'password': {'exports': 'zxcvbn'}
    },
    urlArgs : 'version=' + version,
    priority: [
        "angular"
    ],
    waitSeconds: 120, //超时时间。设为0禁用等待超时，默认为7秒
    deps: [
        'main'
    ]
});
