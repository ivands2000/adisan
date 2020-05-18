var miControlador = miModulo.controller(
    "episodioPlistController",
    
    function ($scope, $routeParams, $http, promesasService, $window, auth,$location) {
        $scope.object = 'episodio';
        if (auth.data.status != 200) {
            $location.path('/login');
        }
        $scope.authStatus = auth.data.status;
        $scope.authUsername = auth.data.message.login;
        $scope.authLevel =  auth.data.message.tipo_usuario_obj;

        $scope.controller = "episodioPlistController";
        $scope.tipo_usuario = auth.data.message.id_tipo_usuario;
    

        if ($routeParams.user !== undefined) {
            $scope.user_id = parseInt($routeParams.user);
            $scope.filter = "paciente";
        } else {
            $scope.user_id = null;
            $scope.filter = null;
        }

        $scope.volver = function () {
            window.history.back();
        };
        
        $scope.paginaActual = parseInt($routeParams.page);
        $scope.rppActual = parseInt($routeParams.rpp);

        $scope.rppS = [10, 50, 100];

        $scope.colOrder = $routeParams.colOrder;
        $scope.order = $routeParams.order;

        if ( $scope.colOrder == null && $scope.order == null && $scope.user_id == null && $scope.filter == null) {
            request = "http://localhost:8081/adisan/json?ob=" + $scope.object + "&op=getpage&page="+ $scope.paginaActual +"&rpp="+ $scope.rppActual;
        } else if($scope.user_id != null &&  $scope.filter != null) {
            request = "http://localhost:8081/adisan/json?ob=" + $scope.object + "&op=getpage&page="+ $scope.paginaActual +"&rpp="+ $scope.rppActual +"&filter=paciente" + "&id=" + $scope.user_id;
        } else if($scope.user_id != null &&  $scope.filter != null && $scope.colOrder != null && $scope.order != null) {
            request = "http://localhost:8081/adisan/json?ob=" + $scope.object + "&op=getpage&page="+ $scope.paginaActual +"&rpp="+ $scope.rppActual +
            "&filter="+ $scope.filter + "&id=" + $scope.user_id + "&order=" + $scope.colOrder + "&direccion="+$scope.order;
        } else {
            request = "http://localhost:8081/adisan/json?ob=" + $scope.object + "&op=getpage&page="+ $scope.paginaActual +"&rpp="+ $scope.rppActual +
            "&order=" + $scope.colOrder + "&direccion="+$scope.order;
        }

        $http({
            method: "GET",
            withCredentials: true,
            url: request
        }).then(function (response) {
            $scope.status = response.data.status;
            $scope.pagina = response.data.message;

        });

        if ($scope.user_id !== null) {
            promesasService.ajaxGet("paciente", $scope.user_id)
            .then((response) => {
                user = response.data.message;
                if (user === null) {
                    $window.location.href = `./episodio/plist/${$scope.rppActual}/1`;
                } else {
                    if ($scope.pagina && $scope.pagina.length) {
                        $scope.pagina_empty = false;
                    } else {
                        $scope.pagina_empty = true;
                    }
                    $scope.paciente = user.nombre + " " + user.apellido1 + " " + user.apellido2;
                }

            }
        )};

        
        if($scope.user_id == null && $scope.filter == null){
            promesasService.ajaxGetCount($scope.object)
            .then(function (response) {
                $scope.status = response.data.status;
                $scope.numRegistros = response.data.message;
                $scope.numPaginas = Math.ceil($scope.numRegistros / $routeParams.rpp);
                $scope.calcPage = [];
                for (const p of $scope.rppS) {
                    const res = $scope.paginaActual / $scope.numPaginas;
                    const next = Math.ceil($scope.numRegistros / p);
                    $scope.calcPage.push(Math.ceil(res * next));
                }
                paginacion(2);
                if ($scope.paginaActual > $scope.numPaginas && $scope.numPaginas != 0) {
                    $window.location.href = `./${$scope.object}/${$scope.rppActual}/${$scope.numPaginas}`;
                } else if ($routeParams.page < 1) {
                    $window.location.href = `./${$scope.object}/${$scope.rppActual}/1`;
                }
            })
        } else {
            promesasService.ajaxGetCount($scope.object,$scope.user_id, $scope.filter )
            .then(function (response) {
                $scope.status = response.data.status;
                $scope.numRegistros = response.data.message;
                $scope.numPaginas = Math.ceil($scope.numRegistros / $routeParams.rpp);
                $scope.calcPage = [];
                for (const p of $scope.rppS) {
                    const res = $scope.paginaActual / $scope.numPaginas;
                    const next = Math.ceil($scope.numRegistros / p);
                    $scope.calcPage.push(Math.ceil(res * next));
                }
                paginacion(2);
                if ($scope.paginaActual > $scope.numPaginas) {
                    $window.location.href = `./${$scope.object}/${$scope.rppActual}/${$scope.numPaginas}/${$scope.user_id}/${$scope.filter}`;
                } else if ($routeParams.page < 1) {
                    $window.location.href = `./${$scope.object}/${$scope.rppActual}/1/${$scope.user_id}/${$scope.filter}`;
                }
            })
        }
        

        function paginacion(vecindad) {
            vecindad++;
            $scope.botonera = [];
            for (i = 1; i <= $scope.numPaginas; i++) {
                if (i == 1) {
                    $scope.botonera.push(i);
                } else if (i > ($scope.paginaActual - vecindad) && i < ($scope.paginaActual + vecindad)) {
                    $scope.botonera.push(i);
                } else if (i == $scope.numPaginas) {
                    $scope.botonera.push(i);
                } else if (i == ($scope.paginaActual - vecindad) || i == ($scope.paginaActual + vecindad)) {
                    $scope.botonera.push('...');
                }
            }
        }
    }
)