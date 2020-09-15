function recarregarPagina() {
    // Sem redimencionamento à 100ms!
    jQuery(document).ready(function () {
        if ($(window).width() <= 1000) {
            $(".masterdiv").hide();
        } else {
            $(".masterdiv").show();
        }
    });
    jQuery(document).ready(function () {
        if ($(window).width() <= 1000 && ($("#carouselExampleControls-media").parent().is($(".container"))) )
            $("#carouselExampleControls-media").unwrap();
        else if ( $("#carouselExampleControls-media").parent().is($("#carouselExampleControls"))){
        }
        else{
            $("#carouselExampleControls-media").wrap("<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\"></div>");
        }
    });
}
var boraLa;
window.onresize = function(){
  clearTimeout(boraLa);
  boraLa = setTimeout(recarregarPagina, 100);
};