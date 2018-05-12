angular.module('video-player')
  .component('app', {
    controller: function($scope, $http) {
      this.videos = window.exampleVideoData;
      this.active = window.exampleVideoData[0];
      this.select = (video)=>{
        this.active = video;
      };
    },
    templateUrl: 'src/templates/app.html'
  });
