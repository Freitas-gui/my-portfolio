function reloadPage() {
    // Sem redimencionamento à 100ms!
    jQuery(document).ready(function () {
        if ($(window).width() <= 990) {
            $(".hide-show").hide();
        } else {
            $(".hide-show").show();
        }
    });
    jQuery(document).ready(function () {
        if ( ($(window).width() <= 990) && ( $("#carouselExampleControls-media").parent().is($("#carouselExampleControls"))) )
            $("#carouselExampleControls-media").unwrap();
        else if ($("#carouselExampleControls-media").parent().is($(".container"))){
            $("#carouselExampleControls-media").wrap("<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\"></div>");
        }
    });
}

var run_responsive;
window.onresize = function(){
  clearTimeout(run_responsive);
  run_responsive = setTimeout(reloadPage, 100);
};