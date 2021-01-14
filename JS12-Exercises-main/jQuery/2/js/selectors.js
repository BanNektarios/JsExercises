$( document ).ready(function(){
    // $("*").css({
    //     "background-color": "black",
    //     "color": "white"
    // });

    //background white && black on button click
    const $blackBackground = $("*");

    $(".allBlack").on("click", function(){
        $blackBackground.css({
            "background-color": "black", 
            "color": "white"
        });
        $(this).on("click", function(){
            $blackBackground.css({
                "background-color": "white",
                "color": "black"
            });

        });

    })

    //selections
    $("a[hreflang|='en']").css("border", "5px double green");
    // $("a[href='thereissomeexample.html']").fadeOut("10");


    // $("li[class$='B']").mouseover(function(){
    //     $(this).hide(3000)
    // });

    // ΦΘΟΝΟΣ
    // $("ul li:nth-child(2)").mouseover(function(){
    //     $(this).css({
    //         "font-size": "2em",
    //         "color": "aqua"
    //     });
    // });

    //select letter O
    // $("li*:contains('Α')").css("text-decoration", "underline");

    //change attributes
    $("div>a").attr("href","https://johnresig.com");
    $("#nameValueSelector>a:odd").attr("href", "https://brendaneich.com");
    $("div a:nth-child(3)").text("Ryan Dahl").attr("href", "http://ryandahl.com");

    //button animate
    $(".grow-big-sins").click(function(){
        const $ul = $(".seven-sins");
        $ul.css("list-style-type", "none");
        $ul.animate({
            width: "70%",
            opacity: .5,
            marginLeft: ".7em",
            fontSize: "3em",
        }, 1500 );
    });

    $(".doubleClick").on("dblclick", function(){
        $(".growBig").animate({fontSize: "4em", opacity: .3}, 3000)
    });

    $("pre").on({

        mouseenter: function(){
            $(this).css("background-color", "lightGrey");
        },
        mouseleave: function(){
            $(this).css("background-color", "lightBlue");
        },
        click: function(){
            $(this).css("background-color", "yellow");
        }

    });

    // $("input").keypress(function(event){
    //     if(event.which == 13){
    //         $(".keyPressed").text("Πάτησες enter");
    //     }
    // });

    $("input").on("keypress", function(event){
        $(".keyPressed").text(event.type + " : " + event.which);
    });
    
    //Add a p to article
    const $leaveDoc = $("article");
    $leaveDoc.append("<p>Πριν φύγεις πέρασε από πάνω το ποντίκι σου για να υπογραμμίσεις το κείμενο και φεύγοντας κάνε μου κλικ</p>");
    
    //change css on mouse enter event
    $leaveDoc.on("mouseenter", function(){
        $(this).css("text-decoration", "underline");
    });

    //DOM traverse
    // const $allToClassGo = $("pre").parents();
    // $allToClassGo.addClass("go");
    
    // const $parentToClassGo = $(".keyPressed").parent();
    // $parentToClassGo.addClass("go");

    // const $childrenToClassGo = $("#listSelection").children();
    // $childrenToClassGo.addClass("go");
    
    //Add nodes to Html
    const $newP = $("<p>THIS IS SPARTA!!</p>");
    $("article").prepend($newP);


})