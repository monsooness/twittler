$(document).ready(function(){
  // Call to refresh feed
  var allTweets;
  var $tweetUpdate = $(`<div class='tweetUpdate'>View New Tweets</div>`);
  var numTweets;  
  const refreshFeed = function(item) {
    var $feed = $('.feed');
    $feed.empty();
    var $tweet;
    allTweets = streams.home.slice();
    if(users.includes(item)) { 
      allTweets = allTweets.filter(function(tweet){
        return tweet.user === item;
      });
    }
    var index = allTweets.length - 1;
    while(index >= 0){       
      var tweet = allTweets[index];
      $tweet = $(`<div class="tweet"><span class="${tweet.user}icon"></span><span class="${tweet.user}">${tweet.user}</span><div class="userDate">
                  @ ${tweet.user} : ${tweet.created_at}</div><div class="message">${tweet.message}</div></div>`);
      $tweet.appendTo($feed).slideDown(500);
      index -= 1;
    }
  }
  // we should listen for a click on any of the users
  setInterval(function () {
    if(allTweets.length < streams.home.length) {
      $('.tweetUpdate').removeClass('display').text('View New Tweets');   
    }
  }, 5000);
  // Handler to look at user tweets only.
  $('.users').on('click','div', function(){
    var clicked = $(this).attr('class');
    refreshFeed(clicked); // refreshFeed('mracus');
  });
  $('.feed').on('click','span', function(){
    var clicked = $(this).attr('class');
    refreshFeed(clicked);
  });
  $('.tweetUpdate').on('click', function(){
    $('.tweetUpdate').addClass('display');
    refreshFeed();
  }); 
  refreshFeed();
});

// <div class= "twitWrap"><span class = "icon"></span><span class="tweet"><span class="${tweet.user}">${tweet.user}</span><div class="userDate">@ ${tweet.user} : ${tweet.created_at}</div><div class="message">${tweet.message}</div></span></div>
