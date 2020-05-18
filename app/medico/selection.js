'use strict';
moduleComponent.component('medicoSelection', {
    templateUrl: 'app/medico/selection.html',
    controllerAs: 'c',
    controller: cController,
    bindings: {
        obj: '=',
        onMedicoSet: '&'
    }
});

function cController($http) {
    var self = this;
    self.ob = "medico";
    self.rpp = 5;
    self.page = 1;
    self.totalPages = 1;

    $http({
        method: 'GET',
        url: 'http://localhost:8081/adisan/json?ob=' + self.ob + '&op=getcount'
    }).then(function (response) {
        self.status = response.status;
        self.ajaxDataMedicosNumber = response.data.message;
        self.totalPages = Math.ceil(self.ajaxDataMedicosNumber / self.rpp);
        if (self.page > self.totalPages) {
            self.page = self.totalPages;
        }
        pagination();
    }, function (response) {
        self.ajaxDataMedicosNumber = response.data.message || 'Request failed';
        self.status = response.status;
    });

    $http({
        method: 'GET',
        url: 'http://localhost:8081/adisan/json?ob=' + self.ob + '&op=getpage&rpp=' + self.rpp + '&page=' + self.page
    }).then(function (response) {
        self.status = response.status;
        self.data = response.data.message;
    }, function (response) {
        self.status = response.status;
        self.data = response.data.message || 'Request failed';
    });

    self.save = function (id, nombre, primer_apellido) {
        self.obj={id : id,nombre : nombre,primer_apellido : primer_apellido};
    };

    

    self.update = function () {
        $http({
            method: 'GET',
            url: 'http://localhost:8081/adisan/json?ob=' + self.ob + '&op=getcount'
        }).then(function (response) {
            self.status = response.status;
            self.ajaxDataMedicosNumber = response.data.message;
            self.totalPages = Math.ceil(self.ajaxDataMedicosNumber / self.rpp);
            if (self.page > self.totalPages) {
                self.page = self.totalPages;
            }
            pagination();
        }, function (response) {
            self.ajaxDataMedicosNumber = response.data.message || 'Request failed';
            self.status = response.status;
        });

        $http({
            method: 'GET',
            url: 'http://localhost:8081/adisan/json?ob=' + self.ob + '&op=getpage&rpp=' + self.rpp + '&page=' + self.page
        }).then(function (response) {
            self.status = response.status;
            self.data = response.data.message;
        }, function (response) {
            self.status = response.status;
            self.data = response.data.message || 'Request failed';
        });
    };


    self.cambiarPagina = function (pagina) {
        self.page = pagina;

        $http({
            method: 'GET',
            url: 'http://localhost:8081/adisan/json?ob=' + self.ob + '&op=getcount'
        }).then(function (response) {
            self.status = response.status;
            self.ajaxDataMedicosNumber = response.data.message;
            self.totalPages = Math.ceil(self.ajaxDataMedicosNumber / self.rpp);
            if (self.page > self.totalPages) {
                self.page = self.totalPages;
            }
            pagination();
        }, function (response) {
            self.ajaxDataMedicosNumber = response.data.message || 'Request failed';
            self.status = response.status;
        });

        $http({
            method: 'GET',
            url: 'http://localhost:8081/adisan/json?ob=' + self.ob + '&op=getpage&rpp=' + self.rpp + '&page=' + self.page
        }).then(function (response) {
            self.status = response.status;
            self.data = response.data.message;
        }, function (response) {
            self.status = response.status;
            self.data = response.data.message || 'Request failed';
        });
    };


    self.ordenar = function (order, align) {
        if (self.orderURLServidor === "") {
            self.orderURLServidor = "&order=" + order + "," + align;
        } else {
            self.orderURLServidor = self.orderURLServidor + "-" + order + "," + align;
        }
        
        $http({
            method: 'GET',
            url: 'http://localhost:8081/adisan/json?ob=' + self.ob + '&op=getpage&rpp=' + self.rpp + '&page=' + self.page
        }).then(function (response) {
            self.status = response.status;
            self.data = response.data.message;
        }, function (response) {
            self.status = response.status;
            self.data = response.data.message || 'Request failed';
        });
    };


    self.resetOrder = function () {
        self.orderURLServidor = "";
        $http({
            method: 'GET',
            url: 'http://localhost:8081/adisan/json?ob=' + self.ob + '&op=getpage&rpp=' + self.rpp + '&page=' + self.page
        }).then(function (response) {
            self.status = response.status;
            self.data = response.data.message;
        }, function (response) {
            self.status = response.status;
            self.data = response.data.message || 'Request failed';
        });
    };


    self.reiniciar = function () {
        self.rpp = 5;
        self.page = 1;
        self.orderURLServidor = "";

        $http({
            method: 'GET',
            url: 'http://localhost:8081/adisan/json?ob=' + self.ob + '&op=getpage&rpp=' + self.rpp + '&page=' + self.page
        }).then(function (response) {
            self.status = response.status;
            self.data = response.data.message;
        }, function (response) {
            self.status = response.status;
            self.data = response.data.message || 'Request failed';
        });
    };


    function pagination() {
        self.list = [];
        var valorNeighbourhood = 1;
        var prev_1 = (self.page - valorNeighbourhood);
        var prev_2 = (self.page - valorNeighbourhood - 1);
        var post_1 = (self.page - -valorNeighbourhood);
        var post_2 = (self.page - -valorNeighbourhood + 1);

        for (var i = 2; i <= self.totalPages - 1; i++) {
            if (i >= prev_1 && i <= post_1) {
                self.list.push(i);
            } else if (i === prev_2 || i === post_2) {
                self.list.push("...");
            }
        }
    }
}