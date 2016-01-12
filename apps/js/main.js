/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
define([
    'require'
    ,'angular'
    ,'mod'
    ,'apps'
    ,'conf/init'
    ,'services/s_common'
    ,'directives/d_common'
    ,'routes/routes'
    ,'jquery'
    ,'app'
    ,'layout'
    ,'theme'
    ,'quickSidebar'
    ,'bootstrapHoverDropdown'
], function (require, angular, mod) {
    'use strict';
    /**
     * @description
     * domReady后执行动作
     */
    angular.element(document).ready(function(){
        // jquery init metronic core componets
        App && App.init();
        // 挂载angular
        angular.bootstrap(document, [mod.name]);
    });

    /*
    require(['domReady!'], function (document) {
        angular.bootstrap(document, ['wgapp']);
    });
    */
});

