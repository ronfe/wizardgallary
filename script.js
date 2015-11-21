/**
 * Created by ronfe on 15-11-21.
 */
var mainApp = angular.module('mainApp', []);

mainApp.controller('imgCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('data.json').then(function (data) {
        var imgPerPage = 2;
        $scope.a = data.data;
        $scope.numOfImgs = $scope.a.length;
        $scope.curPage = 1;
        $scope.partA = $scope.a.slice(imgPerPage * ($scope.curPage - 1), imgPerPage * ($scope.curPage - 1) + imgPerPage);
        $scope.pages = [];
        if ($scope.numOfImgs % imgPerPage === 0) {
            var tPage = $scope.numOfImgs / imgPerPage;
        }
        else {
            var tPage = $scope.numOfImgs / imgPerPage + 1
        }
        for (i = 1; i <= tPage; i++) {
            $scope.pages[i - 1] = i;
        }
        $scope.changePicPage = function (page) {
            $scope.curPage = page;
            if ($scope.pages[-1] === $scope.curPage) {
                $scope.partA = $scope.a.slice(imgPerPage * ($scope.curPage - 1));
            }
            else {
                $scope.partA = $scope.a.slice(imgPerPage * ($scope.curPage - 1), imgPerPage * ($scope.curPage - 1) + imgPerPage);
            }
        };
        console.log($scope.a);
    });
}]);

