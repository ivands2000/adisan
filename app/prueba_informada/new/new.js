'use strict';
var miControlador = miModulo.controller('prueba_informadaNewController',
    function ($scope, $http, auth, promesasService, $routeParams, $location) {
        if (auth.data.status != 200 || auth.data.message.id == 2) {
            $location.path('/login');
        } else {
            $scope.authStatus = auth.data.status;
            $scope.authUsername = auth.data.message.login;
            $scope.authLevel = auth.data.message.id;
        }

        if ($routeParams.episodio !== undefined) {
            $scope.episodio_id = parseInt($routeParams.episodio);
            promesasService.ajaxGet('episodio', $scope.episodio_id)
                .then(function (response) {
                    $scope.id_episodio_obj = response.data.message;
                })
        } else {
            $scope.episodio_id = null;

        }
        $scope.id = $routeParams.id;
        $scope.id_usuario = auth.data.message.id;
        $scope.formulario = true;
        $scope.botones = true;
        $scope.correcto = false;

        $scope.volver = function () {
            window.history.back();
        };

        $scope.new = function () {
            const datos = {
                informe : $scope.informe,
                fecha_peticion : $scope.fecha_peticion,
                importe: $scope.importe,
                id_episodio: $scope.id,
                id_medico: $scope.id_medico_obj.id,
                id_usuario: $scope.id_usuario
            }
            var jsonToSend = {
                data: JSON.stringify(datos)
            };
            $http.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
            promesasService.ajaxNew('prueba_informada', { params: jsonToSend })
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
        };
        
        $scope.medicoRefresh = function (c, consultar2) {
            var form = c;
            if ($scope.id_medico_obj.id != null) {
                if (consultar2) {
                    promesasService.ajaxGet('medico', $scope.id_medico_obj.id)
                        .then(function (response) {
                            $scope.id_medico_obj = response.data.message;
                            form.PiForm.id_medico_obj.$setValidity('valid', true);
                        }, function () {
                            form.PiForm.id_medico_obj.$setValidity('valid', false);
                        });
                } else {
                    form.PiForm.id_medico_obj.$setValidity('valid', true);
                }
            } else {
                $scope.id_medico_obj.nombre = "";
            }
        };
    }
);