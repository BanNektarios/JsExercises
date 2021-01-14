$(function() {

    $(".eventTargetParagraph, p, ul, li").click(function(event){
        event.stopPropagation();
        $("h2").text(
            "Ο event.currentTarget ήρωας είναι ο: " + $(event.currentTarget).text()
        );
    });

});