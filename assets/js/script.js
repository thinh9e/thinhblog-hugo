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

    $(".navbar-toggler").click(function () {
        if ($(this).attr("aria-expanded") == "true") {
            $(this).children("i").removeClass("fa-times").addClass("fa-bars");
        } else {
            $(this).children("i").removeClass("fa-bars").addClass("fa-times");
        }
    })
})
