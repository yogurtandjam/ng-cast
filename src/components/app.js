angular.module('video-player')
.component('app', {
  controller: function() {
    this.videos = window.exampleVideoData;
    this.active = window.exampleVideoData[0];
    console.log('this is app controller active ',this.active)
  },
  templateUrl: 'src/templates/app.html'
});
