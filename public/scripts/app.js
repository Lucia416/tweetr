/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 var data = [
   {
     "user": {
       "name": "Newton",
       "avatars": {
         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
       },
       "handle": "@SirIsaac"
     },
     "content": {
       "text": "<script>alert('uh oh!');</script>"
     },
     "created_at": 1461116232227
   },
   {
     "user": {
       "name": "Descartes",
       "avatars": {
         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
       },
       "handle": "@rd" },
     "content": {
       "text": "Je pense , donc je suis"
     },
     "created_at": 1461113959088
   },
   {
     "user": {
       "name": "Johann von Goethe",
       "avatars": {
         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
       },
       "handle": "@johann49"
     },
     "content": {
       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
     },
     "created_at": 1461113796368
   }
 ];



$(document).ready(function(){
  // var $tweet = createTweetElement(tweetData);
  // Test / driver code (temporary)
  // console.log($tweet); // to see what it looks like
  // $('#tweets-container').append($tweet);
  renderTweets(data);

});

  function createTweetElement(tweet) {
  var output = ''
  output += `<article>
      <header>
        <img class="photo" src="${tweet.user.avatars.small}">
        <h3 class= "nickName">${tweet.user.name}</h3>
        <span class="accountName">${tweet.user.handle}</span>
      </header>
    <p>
    ${escape(tweet.content.text)}
    </p>
    <footer>
      <i class="material-icons">favorite</i>
    <span class="timing">${tweet.created_at}</span>
    </footer>
  </article>`
  return output;
}


function renderTweets(tweets) {
  var output = '';
  var $cont = $('#tweets-container')
 tweets.forEach(function (tweet) {
   $cont.append(createTweetElement(tweet))
 });
}
function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
// function createTweetElement(tweet) {
//   var $tweet = $('<article>').addClass('tweet');
//   // ...
//   return $tweet;
// }
