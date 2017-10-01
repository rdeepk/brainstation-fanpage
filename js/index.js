$(function () {
    $('.navbar-toggler').click(toggle_styles);
})

function toggle_styles() {
    $('.navbar').toggleClass('navbar-active');
}

var $commentForm = $( "#commentForm" );
var posts = {};

$commentForm.submit( function( ev ){
    ev.preventDefault();
    var i = 0;
    /*$(".posted" ).children().each(function () {
        posts[i] = {};
        posts[i]['name'] = $( '.name', $( this ) ).html ();
        posts[i]['message'] = $( '.message', $( this ) ).html ()
        i++;
    });*/
    var $inputs = $('#commentForm :input');
    var values = {};
    $inputs.each(function() {
        values[this.name] = $(this).val();
    });
    if(values['name'] && values['body']) {
        posts[i] = {};
        posts[i]['name'] = values['name'];
        posts[i]['message'] = values['body'];
    }
    displayData();
    $('#commentForm').trigger("reset");
    
});


/**
 * @summary Sets and display the HTML for each channel.
 */
function displayData() {
$.each( posts, function( key, value ) {
    html = '<div class="row"><div class="col-sm-12"><p>' +'Posted by ' + 
    '<span class="name">'+ value['name'] +'</span> on '+ getDate() +'</p></div></div><div class="row"><div class="col-lg-10 col-lg-offset-1"><p class="message">'+ value['message'] +'</p><hr></div></div>';
    $( ".posted" ).append( html );
  });    
}

function getDate() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + (month) + "-" + (day);
    
    return today;
}