app.service('youtube', ['$http',
    function($http) {
      return {
        fetchVideos: function(callback) {

          var url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAiHmiWsHBbzoSojnV3kkQKsh0qNvQoTHg&channelId=UCvjEM9aOnp3NZkY-osjuiBA&part=snippet,id&order=date&maxResults=6&callback=JSON_CALLBACK';

          $http.jsonp(url).success(function(response) {
            callback(response);
          });
        }
      }
    }
  ])
