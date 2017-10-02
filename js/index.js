var posts = {};

$(function () {
    $('.navbar-toggler').click(toggle_styles);
    $(".site-header").mouseenter(function () {
    $('.site-header').stop()
                    .animate({opacity: 0.2}, 700)
                    .animate({opacity: 1}, 1000);
});
   /* $(".site-header").mouseenter(function () {
        $( ".site-header h1" ).animate({
            'font-size': '+=19'
        },{  
          duration: 400,  
          easing: 'linear'  
      })
      $( ".site-header p" ).animate({
        'font-size': '+=5'
    },{  
      duration: 400,  
      easing: 'linear'  
  })
    });
   $(".site-header").mouseleave(function () {
        $( ".site-header h1" ).animate({
            'font-size': '-=19'
        },{  
          duration: 400,  
          easing: 'linear'  
      })
      $( ".site-header p" ).animate({
        'font-size': '-=5'
    },{  
      duration: 400,  
      easing: 'linear'  
  })
    });*/
})

/**
 * @summary Callback for nav toggler click event.
 */
function toggle_styles() {
    $('.navbar').toggleClass('navbar-active');
}


/**
 * @summary Handles the process on the submission of a comment.
 */
$("#commentForm").submit(function (ev) {
    ev.preventDefault();
    getComments();
    displayComments();
    $('#commentForm').trigger("reset");

});

/**
 * @summary Gets existing comments and sets the posts array with recently posted comment.
 */
function getComments() {
    var i = 0;
    var $inputs = $('#commentForm :input');
    var values = {};
    $inputs.each(function () {
        values[this.name] = $(this).val();
    });
    if (values['name'] && values['body']) {
        posts[i] = {};
        posts[i]['name'] = values['name'];
        posts[i]['message'] = values['body'];
    }
}


/**
 * @summary Display the comments.
 */
function displayComments() {
    $.each(posts, function (key, value) {
        html = '<div class="row"><div class="col-sm-12"><p>' + 'Posted by ' +
            '<span class="name">' + value['name'] + '</span> on ' + getDate() + '</p></div></div><div class="row"><div class="col-lg-10 col-lg-offset-1"><p class="message">' + value['message'] + '</p><hr></div></div>';
        $(".posted").append(html);
    });
}

/**
 * @summary Returns the date.
 */
function getDate() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + (month) + "-" + (day);

    return today;
}