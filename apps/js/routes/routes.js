define([
    'mod'
    ,'angular'
    ,'controllers/common/c_common'
    //,'controllers/dashboard/c_dashboard'
], function(mod, angular){
    var ver = Math.random()*100;
    /**
     *  Setup Rounting For All Pages
     **/
    angular.module(mod.name).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        var ver = +(new Date());
        /**
         * @description
         * 默认路由，当输入的路由不存在的时候默认使用该路由
         */
        $urlRouterProvider.otherwise("/dashboard.html");

        /**
         * @description 设置路由
         * @url： https://oclazyload.readme.io 文档
         * @example
         *  // Todo
         * .state('todo', {
         *       url: "/todo",
         *       templateUrl: "views/todo.html",
         *       data: {pageTitle: 'Todo'},
         *       controller: "TodoController",
         *       resolve: {
         *           deps: ['$ocLazyLoad', function($ocLazyLoad) {
         *               return $ocLazyLoad.load({
         *                   name: 'moduleName',
         *                   cache: false,
         *                   serie: true, //并行下载files的文件
         *                   loadedModules: ['moduleName'], //主模块名,和ng.bootstrap(document, ['moduleName'])相同
         *                   jsLoader: requirejs, //使用requirejs去加载文件
         *                   insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
         *                   files: [
         *                       '../assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
         *                       '../assets/apps/css/todo-2.css',
         *                       '../assets/global/plugins/select2/css/select2.min.css',
         *                       '../assets/global/plugins/select2/css/select2-bootstrap.min.css',
         *                       '../assets/global/plugins/select2/js/select2.full.min.js',
         *                       '../assets/glob al/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
         *                       '../assets/apps/scripts/todo-2.min.js',
         *                       'js/controllers/TodoController.js'
         *                   ]
         *               });
         *           }]
         *       }
         *   })
         */
        $stateProvider
            //首页
            .state('dashboard', {
                url: "/dashboard.html",
                templateUrl: "views/dashboard/dashboard.html?ver="+ver,
                data: {
                    pageTitle: '首页'
                },
                controller: "dashboardCtrl",
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            //name: mod.name,
                            //events: true,
                            //jsLoader: requirejs,
                            debug: true,
                            cache: false,
                            insertBefore: '#ng_load_plugins_before',
                            files: [
                                'js/controllers/dashboard/c_dashboard.js'
                            ]
                        });
                    }]
                }
            })
            //漏洞订阅
            .state('vul ',{
                url: '/vul.html',
                templateUrl: 'views/vul/vul.html?ver='+ver,
                data: {
                    pageTitle: '漏洞订阅'
                },
                controller: 'valCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            //name: 'apps',
                            files: [
                                'js/controllers/vul/c_vul.js'
                            ]
                        });
                    }]
                }
            })
            //网站监测
            .state('site',{
                url: '/site.html',
                templateUrl: 'views/site/site.html?ver='+ver,
                data: {
                    pageTitle: '网站监测'
                },
                controller: "siteCtrl",
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            //name: 'apps',
                            files: [
                                'js/controllers/site/c_site.js'
                            ]
                        });
                    }]
                }
            })
            //网站检测
            .state('sitescan',{
                url: '/sitescan.html',
                templateUrl: 'views/sitescan/sitescan.html?ver='+ver,
                data: {
                    pageTitle: '网站检测'
                },
                controller: "sitescanCtrl",
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            //name: 'apps',
                            files: [
                                'js/controllers/sitescan/c_sitescan.js'
                            ]
                        });
                    }]
                }
            })
            //APP检测
            .state('appscan',{
                url: '/appscan.html',
                templateUrl: 'views/appscan/appscan.html?ver='+ver,
                data: {
                    pageTitle: 'APP检测'
                },
                controller: "appscanCtrl",
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            //name: 'apps',
                            files: [
                                'js/controllers/appscan/c_appscan.js'
                            ]
                        });
                    }]
                }
            })
            //安服商品
            .state('anfu',{
                url: '/anfu.html',
                templateUrl: 'views/anfu/anfu.html?ver='+ver,
                data: {
                    pageTitle: '安服商品'
                },
                controller: "anfuCtrl",
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            //name: 'apps',
                            files: [
                                'js/controllers/anfu/c_anfu.js'
                            ]
                        });
                    }]
                }
            })
            //账户信息
            .state('useraccount',{
                url: '/useraccount.html',
                templateUrl: 'views/useraccount/useraccount.html?ver='+ver,
                data: {
                    pageTitle: '账户信息'
                },
                controller: "useraccountCtrl",
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            //name: 'apps',
                            files: [
                                'js/controllers/useraccount/c_useraccount.js'
                            ]
                        });
                    }]
                }
            })
            //企业资料
            .state('usercompany',{
                url: '/usercompany.html',
                templateUrl: 'views/usercompany/usercompany.html?ver='+ver,
                data: {
                    pageTitle: '企业资料'
                },
                controller: "usercompanyCtrl",
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            //name: 'apps',
                            files: [
                                'js/controllers/usercompany/c_usercompany.js'
                            ]
                        });
                    }]
                }
            })
            //网站管理
            .state('userwebsite',{
                url: '/userwebsite.html',
                templateUrl: 'views/userwebsite/userwebsite.html?ver='+ver,
                data: {
                    pageTitle: '网站管理'
                },
                controller: "userwebsiteCtrl",
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            //name: 'apps',
                            files: [
                                'js/controllers/userwebsite/c_userwebsite.js'
                            ]
                        });
                    }]
                }
            })
            //密码修改
            .state('security',{
                url: '/security.html',
                templateUrl: 'views/security/security.html?ver='+ver,
                data: {
                    pageTitle: '密码修改'
                },
                controller: "securityCtrl",
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            //name: 'apps',
                            debug: true,
                            cache: false,
                            insertBefore: '#ng_load_plugins_before',
                            files: [
                                'js/controllers/security/c_security.js'
                            ]
                        });
                    }]
                }
            })

            //登录
            .state('signin',{
                url: '/signin.html',
                templateUrl: 'views/login/signin.html?ver='+ver,
                data: {
                    pageTitle: '登录'
                },
                controller: "signinCtrl",
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            //name: 'apps',
                            debug: true,
                            cache: false,
                            insertBefore: '#ng_load_plugins_before',
                            files: [
                                'js/controllers/login/c_login.js'
                            ]
                        });
                    }]
                }
            })
            //注册
            .state('signup',{
                url: '/signup.html',
                templateUrl: 'views/login/signup.html?ver='+ver,
                data: {
                    pageTitle: '注册'
                },
                controller: "signupCtrl",
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            //name: 'apps',
                            debug: true,
                            cache: false,
                            files: [
                                'js/controllers/login/c_login.js'
                            ]
                        });
                    }]
                }
            })

    }]);
});
