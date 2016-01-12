/**
 * Created by Jack on 2016/1/10.
 */
define([
    'angular'
    ,'apps'
    ], function(angular, apps){
        /***
         GLobal Directives
         ***/
        /**
         * @description  Route State Load Spinner(used on page or content load)
         */
        apps.directive('ngSpinnerBar', ['$rootScope',
            function($rootScope) {
                return {
                    link: function(scope, element, attrs) {
                        // by defult hide the spinner bar
                        element.addClass('hide'); // hide spinner bar by default

                        // display the spinner bar whenever the route changes(the content part started loading)
                        $rootScope.$on('$stateChangeStart', function() {
                            element.removeClass('hide'); // show spinner bar
                        });

                        // hide the spinner bar on rounte change success(after the content loaded)
                        $rootScope.$on('$stateChangeSuccess', function() {
                            element.addClass('hide'); // hide spinner bar
                            $('body').removeClass('page-on-load'); // remove page loading indicator
                            Layout.setSidebarMenuActiveLink('match'); // activate selected link in the sidebar menu

                            // auto scorll to page top
                            setTimeout(function () {
                                App.scrollTop(); // scroll to the top on content load
                            }, $rootScope.settings.layout.pageAutoScrollOnLoad);
                        });

                        // handle errors
                        $rootScope.$on('$stateNotFound', function() {
                            element.addClass('hide'); // hide spinner bar
                        });

                        // handle errors
                        $rootScope.$on('$stateChangeError', function() {
                            element.addClass('hide'); // hide spinner bar
                        });
                    }
                };
            }
        ]);

        /**
         * @description 去除a指令的默认事件
         */
        apps.directive('a', function() {
            return {
                restrict: 'E',
                link: function(scope, elem, attrs) {
                    if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
                        elem.on('click', function(e) {
                            e.preventDefault(); // prevent link click for above criteria
                        });
                    }
                }
            };
        });

        /**
         * @description hover dropDown 指令
         */
        apps.directive('dropdownMenuHover', function () {
            return {
                link: function (scope, elem) {
                    elem.dropdownHover && elem.dropdownHover();
                }
            };
        });
    }
)
