var miControlador = miModulo.controller(
    "usuarioNewController",
    function ($scope, $http, $location, promesasService, $routeParams, auth) {
        if (auth.data.status != 200 || auth.data.message.id_tipousuario == 2) {
            $location.path('/login');
        } else {
            $scope.authStatus = auth.data.status;
            $scope.authUsername = auth.data.message.login;
            $scope.authLevel =  auth.data.message.id_tipousuario_obj;
        }

        $scope.controller = "usuarioNewController";
        $scope.fallo = false;
        $scope.hecho = false;
        $scope.falloMensaje = "";

        promesasService.ajaxCheck()
            .then(function (response) {
                if (response.data.status == 200) {
                    $scope.session = true;
                    $scope.usuario = response.data.message;
                } else {
                    $scope.session = false;
                }
            }, function (response) {
                $scope.session = false;
            })

        $scope.new = function () {
            const datos = {
                dni: $scope.dni,
                nombre: $scope.nombre,
                apellido1: $scope.apellido1,
                apellido2: $scope.apellido2,
                email: $scope.email,
                login: $scope.login,
                password: forge_sha256($scope.password),
                tipo_usuario_id: $scope.id_tipousuario
            }
            var jsonToSend = {
                data: JSON.stringify(datos)
            };
            $http.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
            promesasService.ajaxNew('usuario', { params: jsonToSend })
                .then(function successCallback(response) {
                    if (response.data.status != 200) {
                        $scope.fallo = true;
                        $scope.falloMensaje = response.data.response;
                    } else {
                        $scope.fallo = false;
                        $scope.hecho = true;
                    }
                    $scope.hecho = true;
                }, function (error) {
                    $scope.hecho = true;
                    $scope.fallo = true;
                    $scope.falloMensaje = error.message + " " + error.stack;

                });
        }

        $scope.tipoUsuarioRefresh = function (f, consultar) {
            var form = f;
            if ($scope.id_tipousuario != null) {
                if (consultar) {
                    promesasService.ajaxGet('tipo_usuario', $scope.id_tipousuario)
                        .then(function (response) {
                            $scope.id_tipousuario_obj = response.data.message;
                            form.userForm.id_tipousuario_obj.$setValidity('valid', true);
                        }, function () {
                            form.userForm.id_tipousuario_obj.$setValidity('valid', false);
                        });
                } else {
                    form.userForm.id_tipousuario_obj.$setValidity('valid', true);
                }
            } else {
                $scope.id_tipousuario_obj.desc = "";
            }
        };
        $scope.volver = function () {
            window.history.back();
        };
        $scope.cerrar = function () {
            $location.path('/');
        };
    }
)