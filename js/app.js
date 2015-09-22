var app = angular.module('myApp', []);

app.directive('slideit',function() {
    return {
       restrict: 'A',
       replace: true,
       scope: {
         slideit: '='
       },
       template: '<ul class="bxslider">' +
                   '<li ng-repeat="slide in slides">' +
                     '<iframe ng-src="{{slide.src}}"></iframe>' +
                   '</li>' +
                  '</ul>',
       link: function(scope, elm, attrs) {
          elm.ready(function() {
            scope.$apply(function() {
                scope.slides = scope.slideit;
            });
            elm.bxSlider({
              adaptiveHeight: true,
              mode: 'fade'});
            });
       }
    };
});

app.controller('AppCtrl', function($scope, $sce, youtube) {
  $scope.base = 'http://bxslider.com';
  // $scope.images = [
  //      {src: $scope.base + '/images/730_200/hill_fence.jpg' },
  //      {src: $scope.base + '/images/730_100/tree_root.jpg' },
  //      {src: $scope.base + '/images/730_150/me_trees.jpg' }
  //    ];

  $scope.images = [];

  youtube.fetchVideos(function(data) {
   var length = data.items.length;

   for( var i = 0; i < length; i++ ) {
     $scope.sr = {src: $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + data.items[i].id.videoId)};
     $scope.images.push( $scope.sr );
   }
  });

});
