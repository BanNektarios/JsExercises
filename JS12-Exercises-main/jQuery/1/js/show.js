$( document ).ready(function(){
    $("#show").click(function(){
        $(".box").fadeIn();
    });
    $("#hide").click(function(){
        $(".box").fadeOut(5000);
    });
});