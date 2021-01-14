$(document).ready(function(){
    $(".main-nav").on("click", function(){
        $("ul").slideToggle(300);
    });

    $("button").click(function(){
        $("#popup").fadeToggle( "slow" );
    });
})