window.fbAsyncInit = function() {
  //Initialize the Facebook JavaScript SDK
  FB.init({
    appId : '264258030447938', //App ID from the app dashboard
    channelUrl : 'http://tessel.io/channel.html', //Channel file for x-domain communication
    status : true, //Check Facebook Login status
    xfbml : true //Look for social plugins on the page
  });

  //Logged In Users
  FB.getLoginStatus(function(response) {
    if (response.status !== "unknown") { 
      ga('set', 'dimension1', 'Logged In');
    }
  });

  //Facebook Likes 
  FB.Event.subscribe('edge.create', function(href, widget) {
    var currentPage = jQuery(document).attr('title');
    ga('send', {
      'hitType': 'social',
      'socialNetwork': 'Facebook',
      'socialAction': 'Like',
      'socialTarget': href,
      'page': currentPage
    });
  });

  //Facebook Unlikes
  FB.Event.subscribe('edge.remove', function(href, widget) {
    var currentPage = jQuery(document).attr('title');
    ga('send', {
      'hitType': 'social',
      'socialNetwork': 'Facebook',
      'socialAction': 'Unlike',
      'socialTarget': href,
      'page': currentPage
    });
  });

  //Facebook Send/Share
  FB.Event.subscribe('message.send', function(href, widget) {
    var currentPage = jQuery(document).attr('title');
    ga('send', {
      'hitType': 'social',
      'socialNetwork': 'Facebook',
      'socialAction': 'Send',
      'socialTarget': href,
      'page': currentPage
    });
  });

  //Facebook Comments
  FB.Event.subscribe('comment.create', function(href, widget) {
    var currentPage = jQuery(document).attr('title');
    ga('send', {
      'hitType': 'social',
      'socialNetwork': 'Facebook',
      'socialAction': 'Comment',
      'socialTarget': href,
      'page': currentPage
    });
  });
};

//Load the SDK asynchronously
(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "//connect.facebook.net/en_GB/all.js";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));