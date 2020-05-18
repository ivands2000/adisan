miModulo.config(['$routeProvider',
    function ($routeProvider) {
         //-------Home---------------------------
         $routeProvider.when('/', {
            templateUrl: 'app/paciente/plist/plist.html', controller: 'pacientePlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })

        //---------Paciente-----------------
        .when('/paciente/plist/:rpp/:page/:colOrder?/:order?', {
            templateUrl: 'app/paciente/plist/plist.html', controller: 'pacientePlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/paciente/plist/:rpp/:page/:filter', {
            templateUrl: 'app/paciente/plist/plist.html', controller: 'pacientePlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/paciente/remove/:id', {
            templateUrl: 'app/paciente/remove/remove.html', controller: 'pacienteRemoveController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/paciente/view/:id', {
            templateUrl: 'app/paciente/view/view.html', controller: 'pacienteViewController', css: 'app/paciente/view/view.css',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/paciente/edit/:id', {
            templateUrl: 'app/paciente/edit/edit.html', controller: 'pacienteEditController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/paciente/new', {
            templateUrl: 'app/paciente/new/new.html', controller: 'pacienteNewController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/paciente/fill', {
            templateUrl: 'app/paciente/fill/fill.html', controller: 'pacienteFillController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        //---------episodio-----------------
        .when('/episodio/plist/:rpp/:page/:colOrder?/:order?', {
            templateUrl: 'app/episodio/plist/plist.html', controller: 'episodioPlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/episodio/plist/:rpp/:page/:filter/:id', {
            templateUrl: 'app/episodio/plist/plist.html', controller: 'episodioPlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/episodio/plist/:rpp/:page', {
            templateUrl: 'app/episodio/plist/plist.html', controller: 'episodioPlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/episodio/plist/:rpp/:page/:filter?/:id?', {
            templateUrl: 'app/episodio/plist/plist.html', controller: 'episodioPlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/episodio/remove/:id', {
            templateUrl: 'app/episodio/remove/remove.html', controller: 'episodioRemoveController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/episodio/view/:id', {
            templateUrl: 'app/episodio/view/view.html', controller: 'episodioViewController', css: 'app/episodio/view/view.css',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/episodio/edit/:id', {
            templateUrl: 'app/episodio/edit/edit.html', controller: 'episodioEditController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/episodio/new', {
            templateUrl: 'app/episodio/new/new.html', controller: 'episodioNewController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        //---------imagen-----------------
        .when('/imagen/plist/:rpp/:page/:colOrder?/:order?', {
            templateUrl: 'app/imagen/plist/plist.html', controller: 'imagenPlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/imagen/plist/:rpp/:page/:filter/:id', {
            templateUrl: 'app/imagen/plist/plist.html', controller: 'imagenPlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/imagen/plist/:rpp/:page/:filter?/:id?', {
            templateUrl: 'app/imagen/plist/plist.html', controller: 'imagenPlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/imagen/remove/:id', {
            templateUrl: 'app/imagen/remove/remove.html', controller: 'imagenRemoveController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/imagen/view/:id', {
            templateUrl: 'app/imagen/view/view.html', controller: 'imagenViewController', css: 'app/imagen/view/view.css',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/imagen/edit/:id', {
            templateUrl: 'app/imagen/edit/edit.html', controller: 'imagenEditController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/imagen/new', {
            templateUrl: 'app/imagen/new/new.html', controller: 'imagenNewController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/imagen/new/:id', {
            templateUrl: 'app/imagen/new/new.html', controller: 'imagenNewController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        //---------prueba_informada-----------------
        .when('/prueba_informada/plist/:rpp/:page/:colOrder?/:order?', {
            templateUrl: 'app/prueba_informada/plist/plist.html', controller: 'prueba_informadaPlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/prueba_informada/plist/:rpp/:page/:filter', {
            templateUrl: 'app/prueba_informada/plist/plist.html', controller: 'prueba_informadaPlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/prueba_informada/plist/:rpp/:page/:id?/:filter?', {
            templateUrl: 'app/prueba_informada/plist/plist.html', controller: 'prueba_informadaPlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/prueba_informada/remove/:id', {
            templateUrl: 'app/prueba_informada/remove/remove.html', controller: 'prueba_informadaRemoveController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/prueba_informada/view/:id', {
            templateUrl: 'app/prueba_informada/view/view.html', controller: 'prueba_informadaViewController', css: 'app/prueba_informada/view/view.css',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/prueba_informada/edit/:id', {
            templateUrl: 'app/prueba_informada/edit/edit.html', controller: 'prueba_informadaEditController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/prueba_informada/new', {
            templateUrl: 'app/prueba_informada/new/new.html', controller: 'prueba_informadaNewController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/prueba_informada/new/:id', {
            templateUrl: 'app/prueba_informada/new/new.html', controller: 'prueba_informadaNewController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        //-------usuario------------------------
        .when('/usuario/plist/:rpp/:page', {
            templateUrl: 'app/usuario/plist/plist.html', controller: 'usuarioPlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/usuario/plist/:rpp/:page/:colOrder?/:order?', {
            templateUrl: 'app/usuario/plist/plist.html', controller: 'usuarioPlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/usuario/plist/:rpp/:page/:word', {
            templateUrl: 'app/usuario/plist/plist.html', controller: 'usuarioPlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })

        .when('/usuario/remove/:id', {
            templateUrl: 'app/usuario/remove/remove.html', controller: 'usuarioRemoveController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/usuario/view/:id', {
            templateUrl: 'app/usuario/view/view.html', controller: 'usuarioViewController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/usuario/edit/:id', {
            templateUrl: 'app/usuario/edit/edit.html', controller: 'usuarioEditController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/usuario/new', {
            templateUrl: 'app/usuario/new/new.html', controller: 'usuarioNewController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/usuario/fill', {
            templateUrl: 'app/usuario/fill/fill.html', controller: 'usuarioFillController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        //-------tipousuario------------------------
        .when('/tipousuario/plist/:rpp/:page', {
            templateUrl: 'app/tipousuario/plist/plist.html', controller: 'tipousuarioPlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/tipousuario/plist/:rpp/:page/:colOrder?/:order?', {
            templateUrl: 'app/tipousuario/plist/plist.html', controller: 'tipousuarioPlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/tipousuario/plist/:rpp/:page/:filter', {
            templateUrl: 'app/tipousuario/plist/plist.html', controller: 'tipousuarioPlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/tipousuario/remove/:id', {
            templateUrl: 'app/tipousuario/remove/remove.html', controller: 'tipousuarioRemoveController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/tipousuario/view/:id', {
            templateUrl: 'app/tipousuario/view/view.html', controller: 'tipousuarioViewController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/tipousuario/edit/:id', {
            templateUrl: 'app/tipousuario/edit/edit.html', controller: 'tipousuarioEditController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/tipousuario/fill', {
            templateUrl: 'app/tipousuario/fill/fill.html', controller: 'tipousuarioFillController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        //-------perfilusuario------------------------
        .when('/perfil', {
            templateUrl: 'app/perfil/view.html', controller: 'usuarioViewPerfilController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/factura/plist/:rpp/:page/:colOrder?/:order?', {
            templateUrl: 'app/factura/plist/plist.html',
            controller: 'facturaPlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        .when('/misFacturas/:rpp/:page/:colOrder?/:order?', {
            templateUrl: 'app/factura/misFacturas/plist.html',
            controller: 'misFacturasController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        .when('/factura/remove/:id', {
            templateUrl: 'app/factura/remove/remove.html', controller: 'facturaRemoveController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/factura/view/:id', {
            templateUrl: 'app/factura/view/view.html', controller: 'facturaViewController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/factura/edit/:id', {
            templateUrl: 'app/factura/edit/edit.html', controller: 'facturaEditController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/factura/new', {
            templateUrl: 'app/factura/new/new.html', controller: 'facturaNewController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/factura/fill', {
            templateUrl: 'app/factura/fill/fill.html', controller: 'facturaFillController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })

        
       
        //----------------------------------------------
        .when('/login', {
            templateUrl: 'app/usuario/login/login.html', controller: 'login', css: 'app/usuario/login/login.css',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/login-validate/:token?', {
            templateUrl: 'app/usuario/login-validate/login-validate.html', controller: 'loginValidate', css: 'app/usuario/login-validate/login-validate.css',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/signup', {
            templateUrl: 'app/usuario/signup/signup.html', controller: 'signup', css: 'app/usuario/signup/signup.css',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/logout', {
            templateUrl: 'app/usuario/logout/logout.html', controller: 'logout',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/recover', {
            templateUrl: 'app/usuario/recover/recover.html', controller: 'recover' , css: 'app/usuario/recover/recover.css',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        .when('/recover/password/:token', {
            templateUrl: 'app/usuario/recover/password/password.html', controller: 'password' , css: 'app/usuario/recover/password/password.css',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                },
            }
        })
        //----------------------------------------------

        .otherwise({
            redirectTo: '/paciente/plist/10/1'
        })
    }])