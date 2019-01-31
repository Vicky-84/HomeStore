
myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
        
           templateUrl		: 'views/result-view.html',
            controller 		: 'mainController',
        	controllerAs 	: 'myProduct'
        
        })
    
         .when('/home',{
            
        	templateUrl		: 'views/result-view.html',
            controller 		: 'mainController',
        	controllerAs 	: 'myProduct'
        	 
           
        })
    
    .when('/productview/:id',{
        	templateUrl     : 'views/product-view.html',
        	controller 		: 'secondController',
        	controllerAs 	: 'productView'
        })

        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);