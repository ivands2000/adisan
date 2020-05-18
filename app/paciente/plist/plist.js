var miControlador = miModulo.controller(
    "pacientePlistController",
    function ($scope, $routeParams, $http, auth, $location) {
        $scope.object = "paciente";
        if (auth.data.status != 200 || auth.data.message.id_tipo_usuario == 0) {
            $location.path('/login');
        }
        $scope.authStatus = auth.data.status;
        $scope.authUsername = auth.data.message.login;
        $scope.authLevel =  auth.data.message.id_tipo_usuario_obj;

        $scope.controller = "pacientePlistController";
        $scope.paginaActual = parseInt($routeParams.page);
        $scope.rppActual = parseInt($routeParams.rpp);
        $scope.rppS = [10, 50, 100];

        $scope.colOrder = $routeParams.colOrder;
        $scope.order = $routeParams.order;

        if ($scope.order == null || $scope.colOrder == null) {
            request = `http://localhost:8081/adisan/json?ob=${$scope.object}&op=getpage&rpp=10&page=1`;
        } else {
            request = `http://localhost:8081/adisan/json?ob=${$scope.object}&op=getpage&rpp=${$scope.rppActual}&page=${$scope.paginaActual}&order=${$scope.colOrder}&direccion=${$scope.order}`;
        }
        $http({
            method: "GET",
            withCredentials: true,
            url: request
        }).then(function (response) {
            $scope.status = response.data.status;
            $scope.pagina = response.data.message;
        });

        
        
       

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