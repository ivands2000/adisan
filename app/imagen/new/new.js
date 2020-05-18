var miControlador = miModulo.controller(
    "imagenNewController",

    function ($scope, $http, $location, promesasService,$routeParams, auth) {
        $scope.object = "imagen";
        if (auth.data.status != 200 || auth.data.message.id == 2) {
            $location.path('/login');
        } else {
            $scope.authStatus = auth.data.status;
            $scope.authUsername = auth.data.message.login;
            $scope.authLevel = auth.data.message.id;
        }
        $scope.id = $routeParams.id;
        $scope.id_usuario = auth.data.message.id;
        $scope.controller = "imagenNewController";
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
            if ($scope.myFile === undefined) {
                $scope.foto = "default.png";
            } else {
                $scope.foto = guid() + $scope.myFile.name;
                uploadPhoto($scope.foto);
            }
            $("#spinner").append('<img src="./img/spinner.gif"></div>');
            const datos = {
                descripcion : $scope.descripcion ,
                fecha_prevista  : $scope.fecha_prevista  ,
                fecha_realizacion: $scope.fecha_realizacion,
                ubicacion: $scope.foto,
                id_catalogoimagenes: $scope.id_catalogo_obj.id,
                id_pruebainformada: $scope.id,
                id_dependencia: $scope.id_dependencia_obj.id,
                importe: $scope.importe,
                id_tecnico: $scope.id_tecnico_obj.id,
                id_usuario: $scope.id_usuario
            }
            var jsonToSend = {
                data: JSON.stringify(datos)
            };
            $http.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
            promesasService.ajaxNew($scope.object, { params: jsonToSend })
                .then(function successCallback(response) {
                    $("#spinner").empty().append(response);
                    if (response.data.status != 200) {
                        $scope.fallo = true;
                        $scope.falloMensaje = response.data.response;
                    } else {
                        $scope.fallo = false;
                        $scope.hecho = true;
                    }
                    $scope.hecho = true;
                }, function (error) {
                    $("#spinner").empty().append(response);
                    $scope.hecho = true;
                    $scope.fallo = true;
                    $scope.falloMensaje = error.message + " " + error.stack;

                });
        }

        function uploadPhoto(name) {

            var file = $scope.myFile;
            file = new File([file], name, { type: file.type });
            var oFormData = new FormData();
            oFormData.append('file', file);
            $http({
                headers: { 'Content-Type': undefined },
                method: 'POST',
                data: oFormData,
                url: `http://localhost:8081/adisan/json?ob=${$scope.object}&op=addimage`
            });

        }

        function guid() {

            return "ss-s-s-s-sss".replace(/s/g, s4);
        }

        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        $scope.dependenciaRefresh = function (f, consultar) {
            var form = f;
            if ($scope.id_dependencia_obj.id != null) {
                if (consultar) {
                    promesasService.ajaxGet('dependencia', $scope.id_dependencia_obj.id)
                        .then(function (response) {
                            $scope.id_dependencia_obj = response.data.message;
                            form.imagenForm.id_dependencia_obj.$setValidity('valid', true);
                        }, function () {
                            form.imagenForm.id_dependencia_obj.$setValidity('valid', false);
                        });
                } else {
                    form.imagenForm.id_dependencia_obj.$setValidity('valid', true);
                }
            } else {
                $scope.id_dependencia_obj.codigo = "";
            }
        };
        $scope.tecnicoRefresh = function (f, consultar) {
            var form = f;
            if ($scope.id_tecnico_obj.id != null) {
                if (consultar) {
                    promesasService.ajaxGet('tecnico', $scope.id_tecnico_obj.id)
                        .then(function (response) {
                            $scope.id_tecnico_obj = response.data.message;
                            form.imagenForm.id_tecnico_obj.$setValidity('valid', true);
                        }, function () {
                            form.imagenForm.id_tecnico_obj.$setValidity('valid', false);
                        });
                } else {
                    form.imagenForm.id_tecnico_obj.$setValidity('valid', true);
                }
            } else {
                $scope.id_tecnico_obj.descripcion = "";
            }
        };
        $scope.catalogoRefresh = function (f, consultar) {
            var form = f;
            if ($scope.id_catalogo_obj.id != null) {
                if (consultar) {
                    promesasService.ajaxGet('catalogoimagenes', $scope.id_catalogo_obj.id)
                        .then(function (response) {
                            $scope.id_catalogo_obj = response.data.message;
                            form.imagenForm.id_catalogo_obj.$setValidity('valid', true);
                        }, function () {
                            form.imagenForm.id_catalogo_obj.$setValidity('valid', false);
                        });
                } else {
                    form.imagenForm.id_catalogo_obj.$setValidity('valid', true);
                }
            } else {
                $scope.id_catalogo_obj.descripcion = "";
            }
        };
        $scope.pruebaRefresh = function (f, consultar) {
            var form = f;
            if ($scope.id != null) {
                if (consultar) {
                    promesasService.ajaxGet('prueba_informada', $scope.id)
                        .then(function (response) {
                            $scope.id_prueba_obj = response.data.message;
                            form.imagenForm.id_prueba_obj.$setValidity('valid', true);
                        }, function () {
                            form.imagenForm.id_prueba_obj.$setValidity('valid', false);
                        });
                } else {
                    form.imagenForm.id_prueba_obj.$setValidity('valid', true);
                }
            } else {
                $scope.id = "";
            }
        };

        $scope.volver = function () {
            window.history.back();
        };
        $scope.cerrar = function () {
            $location.path('/');
        };
    }
).directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function () {
                scope.$apply(function () {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);