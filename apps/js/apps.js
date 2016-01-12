define([
    'underscore'
    ,'mod'
    ,'angular'
    ,'angularSanitize'
    ,'angularTouch'
    ,'angularRoute'
    ,'ocLazyLoad'
    ,'angularUiRouter'
    ,'angularBootstrap'
],function(_, mod, angular, ngSanitize, ngTouch, ngRoute, ocLazyLoad, ngUiRouter){
    /**
     * @description 模块定义
     **/
    return angular.module(mod.name, [
       'ngSanitize'
        ,'ngTouch'
        ,'oc.lazyLoad'
        ,'ui.router'
        ,'ui.bootstrap'
        //,'ngRoute'
    ]);
});

