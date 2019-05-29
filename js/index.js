// scroll suave
$('.topo-menu a[href^="#"], .menu-mobile a[href^="#"]').click(function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
        menuHeight = $('.topo').innerHeight(),
        targetOffset = $(id).offset().top
    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 500)
})
//abrir e fechar menu completo
$(window).resize(function () {
    if ($(window).width() > 768) {
        $('.menu-mobile').hide()
        $('.icone-cancel').hide()
        $('.icone-bars').show()
    }
})
$('.icone-cancel').hide()
$(document).ready(function () {
    $('.icone-bars').click(function () {
        $('.menu-mobile').toggle()
        $('.icone-bars').hide()
        $('.icone-cancel').show()
        $('.menu-mobile').click(function () {
            $('.menu-mobile').hide()
            $('.icone-cancel').hide()
            $('.icone-bars').show()
        })
    })
    $('.icone-cancel').click(function () {
        $('.menu-mobile').toggle()
        $('.icone-bars').show()
        $('.icone-cancel').hide()
        $('.menu-mobile').click(function () {
            $('.menu-mobile').hide()
        })
    })
})