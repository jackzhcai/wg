define([
    'underscore'
    ,'mod'
    ,'angular'
    ,'angularSanitize'
    ,'angularTouch'
    ,'angularAnimate'
    ,'angularRoute'
    ,'ocLazyLoad'
    ,'angularUiRouter'
    ,'angularBootstrap'
    ,'angularUiGrid'
],function(_, mod, angular, ngSanitize, ngTouch, ngRoute, ocLazyLoad, ngUiRouter, ngUiGrid){
    /**
     * @description 模块定义
     **/
    return angular.module(mod.name, [
       'ngSanitize'
        ,'ngTouch'
        ,'oc.lazyLoad'
        ,'ui.router'
        ,'ui.bootstrap'
        ,'ui.grid'
        ,'ui.grid.pagination'
        //,'ngRoute'
    ]);
});

