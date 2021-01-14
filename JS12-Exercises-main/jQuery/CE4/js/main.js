$( document ).ready(function() {
    $(".hide-button").on('click', function(){
        $(".first-image").hide();
    });

    $(".show-button").on('click', function(){
        $(".first-image").show();
    });
    
    $(".hide-button").hover(function(){
        $(this).css({
            "background-color":"coral" 
        });
    },
    function() {
        $(this).css({
            "background-color": "green"
        })
    }); 
    
})