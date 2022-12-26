$( document ).ready(function() {
    $( "#video-list" ).on( "click", "a", function(e) {
      e.preventDefault();
      var videoID = $(this).attr('data-video');
      $('#videoContainer iframe').attr("src", videoID);
    });   
  });