// public/angularApp.js

// Criamos um módulo Angular chamado listaPoliticos
var listaPoliticos = angular.module('listaPoliticos', []);

function mainController($scope, $http){
  // Quando acessar a página, carrega todos os contatos e envia para a view($scope)
    var refresh = function (){
        $http.get('/api/all')
            .success(function(data) {
                $scope.politicos = data;
                $scope.formPoliticos = {};
                console.log("politicos: ", data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    refresh();
    
    $scope.nomePolitico = '';
}
