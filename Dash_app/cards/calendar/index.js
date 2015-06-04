app.controller("calendarController",["$scope", function($rootscope, $scope) {
    
    $(document).ready(function() {
        $("#mini-clndr").clndr({
            template: $("#calendar-template").html()
        });
    });  
}]);