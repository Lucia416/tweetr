// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */
//
//  var data = [
//    {
//      "user": {
//        "name": "Newton",
//        "avatars": {
//          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//        },
//        "handle": "@SirIsaac"
//      },
//      "content": {
//        "text": "It's raining apples!"
//      },
//      "created_at": 1461116232227
//    },
//    {
//      "user": {
//        "name": "Descartes",
//        "avatars": {
//          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//        },
//        "handle": "@rd" },
//      "content": {
//        "text": "Je pense , donc je suis"
//      },
//      "created_at": 1461113959088
//    },
//    {
//      "user": {
//        "name": "Johann von Goethe",
//        "avatars": {
//          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//        },
//        "handle": "@johann49"
//      },
//      "content": {
//        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//      },
//      "created_at": 1461113796368
//    }
//  ];



$(document).ready(function(){
  // debugger;
  loadTweets();
  $(".new-tweet form").on('submit', (ev) =>{
    ev.preventDefault();
    if (!$(".new-tweet textarea").val()){
      alert("Are you shy? Share with me!");
      return;
    }

    // const data_obj = {}  ;
    // $('.new-tweet form').serializeArray().forEach((elm) => {
    //   data_obj[elm.name] = elm.value;
    // });

    $.ajax({
      method:'POST',
      url: `${ROOT_URL}/tweets`,
      data: $(".new-tweet form").serialize()
    })
    .done((new_post) => {
      $(".new-tweet form").find("input[type=text],textarea").val('');
      loadTweets();
    })
  })
  $(".compose").click(function(){
     $('.new-tweet').slideToggle(600);
     $('#tweets-container').focus();
   });
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
    <span class="timing">${tweet.created_at}</span>
    <div class= "icons">
      <i class="fa fa-flag"></i>
      <i class="fa fa-retweet"></i>
      <i class="fa fa-heart"></i>
    </div>
    </footer>
  </article>`
  return output;
}


function renderTweets(tweets) {
  var output = '';
  var $cont = $('#tweets-container')
  tweets.forEach(function (tweet) {

   $cont.prepend(createTweetElement(tweet))
  });
}
function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

const postTweet = ('$.new-tweet')
const ROOT_URL = 'http://localhost:8080';

const loadTweets = () => {
  $.ajax({
    method: 'GET',
    url: `${ROOT_URL}/tweets`
  })
   .done(renderTweets)
  .fail(console.error);
}



// function createTweetElement(tweet) {
//   var $tweet = $('<article>').addClass('tweet');
//   // ...
//   return $tweet;
// }
