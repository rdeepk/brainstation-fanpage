$(function () {
    $('.navbar-toggler').click(toggle_styles);
})

function toggle_styles() {
    $('.navbar').toggleClass('navbar-active');
}

var $commentForm = $("#commentForm");
$commentForm.submit(function (ev) {
    ev.preventDefault();
    //$commentForm.validate();
    // check if the input is valid
    if (!$commentForm.valid()) {
        $(".thanks").text("Please enter a valid email address");
        $(".thanks").css("display", "block");
        return false;
    }
    $.ajax({
        url: $(this).attr("action"),
        method: "POST",
        data: $commentForm.serialize(),
        dataType: "json",
        success: function () {
            console.log($commentForm)
            $($commentForm)[0].reset();
        },
        error: function (xhr, status, error) {
            var err = JSON.parse(xhr.responseText);
            $(".thanks").text(err.error);
            $(".thanks").css("display", "block");
        }
    });
    return false;
});