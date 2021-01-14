$(document).ready(function(){
    //remove only demo form 
    $(".only-demo").addClass("ajaxDisappear");
    
    $(".btn").click(function(){
        $(".text").text("...Loading...");
        
        $.ajax({
            type: "GET",
            url: "https://api.meetup.com/2/cities", 
            success: function(data) {
                $(".text").text(JSON.stringify(data));
            },
            dataType: 'jsonp',
        });
    });


})