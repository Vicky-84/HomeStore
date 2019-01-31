
var myApp = angular.module('blogApp', ['ngRoute','angular-loading-bar']); 


// Controller to get the data from each of the JSON 
myApp.controller('mainController',['$http','$location',function($http,$location) {


  var main = this;
    
  this.products=[];
    
    


  this.baseUrl = 'https://www.zopnow.com/toys/discounts.json';

 //Function to get data for all products    
    
  this.loadAllProducts = function(){
   
      $http({
        method: 'GET',
        url: main.baseUrl
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          
          console.log(response);
          
          main.products = response.data[1].data.products;
          
          console.log(main.products);
          
          
          
          

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });


  }
  
  
  this.loadSingeProduct = function(productData){
      
         main.id= productData.id;
         main.name = productData.name;
      //*debugger;
      main.mrp = productData.defaultVariant.mrp;
            
      
         $location.path("productview/"+main.id);
          
  }
  

  

}]);


//Controller to get details of single product

myApp.controller("secondController", ['$routeParams','$http',function($routeParams,$http){
    
    var main=this;
    
    this.productId = $routeParams.id;
    
    console.log(this.productId);
    
    this.baseUrl = 'https://www.zopnow.com/toys/discounts.json';
  
      this.loadSingleProduct = function(){
   
      $http({
        method: 'GET',
        url: main.baseUrl
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          
          console.log(response);
          
          main.products = response.data[1].data.products;
          
          console.log(main.products);
          
          for(i in main.products){
              
              //console.log(main.products[i].id,main.products[i].full_name);
              
              if(main.products[i].id == main.productId){
                  
                  console.log(main.products[i].id,main.products[i].full_name,main.products[i].images[0]);
                  
                  main.productName = main.products[i].full_name;
                  main.images = main.products[i].images[0];
                  main.mrp = main.products[i].defaultVariant.mrp;
                  main.discount = main.products[i].defaultVariant.discount;
                  main.brand = main.products[i].brand.name;
                  
                  break;
                  
              }
              
          }
          
          
          
          

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });


  }
      
    console.log(this.productName,this.images,this.mrp,this.discount);
}]);




