$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $("#back-top").css("display", "block");
        } else {
            $("#back-top").css("display", "none");
        }
    })

    $("#back-top").click(function () {
        $(window).scrollTop(0);
    })
})
