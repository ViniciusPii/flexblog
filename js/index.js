// scroll smooth jquery
$(document).ready(function () {
    $(".menu-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 109 //tamaho do seu menu.
            }, 800);
        }
    });
    $("#modal a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 71 //tamaho do seu menu.
            }, 800);
        }
    });
});




//menu mobile
var visibilidade = false;

function menu() {
    if (visibilidade) {
        document.getElementById("modal").style.display = "none";
        visibilidade = false;
    } else {
        document.getElementById("modal").style.display = "block";
        visibilidade = true;
    }
}

function ocultar() {
    document.getElementById("modal").style.display = "none";
    visibilidade = false;
}