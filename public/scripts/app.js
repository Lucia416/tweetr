$(document).ready(function(){
  loadTweets();
  $(".new-tweet form").on('submit', (ev) =>{
    ev.preventDefault();
    let text = $(ev.target).find('textarea').val();
    if (!text.length){
      alert("Are you shy? Share with me!");
      return;
    } else if (text.length > 140){
      alert("Wow, you talk a lot!");
      return;
    }

    $.ajax({
      method:'POST',
      url: `${ROOT_URL}/tweets`,
      data: $(".new-tweet form").serialize()
    })
    .done((new_post) => {
      $(".new-tweet form").find("input[type=text],textarea").val('');
      $('.new-tweet .counter').text(140);
      loadTweets();
    })
  })
  $(".compose").click(function(){
     $('.new-tweet').slideToggle(600);
     $('#tweets-container').focus();
   });
});

  function timeDifference(current, previous) {
   let msPerMinute = 60 * 1000;
   let msPerHour = msPerMinute * 60;
   let msPerDay = msPerHour * 24;
   let msPerMonth = msPerDay * 30;
   let msPerYear = msPerDay * 365;
   let elapsed = current - previous;
   if (elapsed < msPerMinute) {
       return Math.round(elapsed/1000) + ' seconds ago';
   }
   else if (elapsed < msPerHour) {
       return Math.round(elapsed/msPerMinute) + ' minutes ago';
   }
   else if (elapsed < msPerDay ) {
       return Math.round(elapsed/msPerHour ) + ' hours ago';
   }
   else if (elapsed < msPerMonth) {
      return Math.round(elapsed/msPerDay) + ' days ago';
   }
   else if (elapsed < msPerYear) {
      return Math.round(elapsed/msPerMonth) + ' months ago';
   }
   else {
      return Math.round(elapsed/msPerYear ) + ' years ago';
   }
  }



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
    <span class="timing">${timeDifference(Date.now(),tweet.created_at)}</span>
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
