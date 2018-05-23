$(document).ready(function(){
  var $feed = $('.feedContainer');
  var $user = $('.userContainer');
  $feed.html('');
  var index;
  var $tweet;
  var currentTweets = streams.home.slice();
  // Initial Tweets
  renderTweet(currentTweets);
  // setInterval(function() {
  //   var end = streams.home.length - 1;
  //   while(index <= end){
  //     tweet = streams.home[index];
  //     $tweet = $(`<div id="tweet"><div class="${tweet.user}"></div><div class="userDate"></div><div class="message"></div></div>`);
  //     $tweet.find(`.${tweet.user}`).text(tweet.user);
  //     $tweet.find('.userDate').text(`@ ${tweet.user} : ${tweet.created_at}`);
  //     $tweet.find('.message').text(tweet.message);
  //     $tweet.appendTo($feed).slideDown(600);
  //     index += 1;
  //   }
  // }, 2000);

 
  function renderTweet(array) {
    index = array.length - 1;
    while(index >= 0){
      tweet = array[index];
      $tweet = $(`<div id="tweet"><div class="${tweet.user}"></div><div class="userDate"></div><div class="message"></div></div>`);
      $tweet.find(`.${tweet.user}`).text(tweet.user);
      $tweet.find('.userDate').text(`@ ${tweet.user} : ${tweet.created_at}`);
      $tweet.find('.message').text(tweet.message);
      $tweet.appendTo($feed).slideDown(600);
      index -= 1;
    }
  }

  // we should listen for a click on any of the users
  // 

  // Handler to look at user tweets only.
  $(document).on('click','div', function(){
    var clicked = $(this).attr('class');
    var userCurrent = streams.users[clicked].slice();
    $feed.html('');
    renderTweet(userCurrent);
  });
  // Implement ability to filter content based on specific user click

  // Making it look pretty

  // Change Time Format


});