angular.module('video-player')
  .component('app', {
    controller: function(youTube) {
      
      this.videos = window.exampleVideoData;
      
      this.active = window.exampleVideoData[0];
      
      this.select = (video)=>{
        this.active = video;
      };
      
      this.update = (query)=>{
        let success = function(data) {
          this.videos = data.data.items;
          this.active = data.data.items[0];
        };
        youTube.searchYouTube(query).then(success.bind(this));
      };
      
      this.update = _.debounce(this.update, 500);
      
      this.update('puppies');
    },
    templateUrl: 'src/templates/app.html'
  });
