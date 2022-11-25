$(document).ready(() => {
    reloadLinks()
    $('#add_button')
        .removeAttr('disabled')
        .click(function () {

            $('#menu').append('<li><a href="' + $('#add_link').val() + '"</a></li>')
            $('#add_link').val("");
            reloadLinks();
        })



    function reloadLinks() {
        $('a').each(function (index) {
            let that = $(this)
            let enlace = $(this).attr("href");
            that.text(enlace)
        })

    }



})