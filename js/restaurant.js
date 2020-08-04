$(document).ready(function() {
    $("#bi").click(function() {
        $("#backdrop").css({"background": "url('img/restaurant1.jpg')", "background-position": "center center", "background-size": "cover", "height":"625px", "text-align": "center", "padding-top": "450px", "transition": "background 1s ease-in"});
        $("#bi").css({"text-decoration":"overline orangered"});
        $("#sad").css({"text-decoration":"none"});
        $("#b").css({"text-decoration":"none"});
    });

    $("#sad").click(function() {
        $("#backdrop").css({"background": "url('img/restaurant2.jpg')", "background-position": "center center", "background-size": "cover", "height":"625px", "text-align": "center", "padding-top": "450px", "transition": "background 1s ease-in"});
        $("#sad").css({"text-decoration":"overline orangered"});
        $("#bi").css({"text-decoration":"none"});
        $("#b").css({"text-decoration":"none"});  
    });

    $("#b").click(function() {
        $("#backdrop").css({"background": "url('img/restaurant3.jpg')", "background-position": "center center", "background-size": "cover", "height":"625px", "text-align": "center", "padding-top": "450px", "transition": "background 1s ease-in"});
        $("#b").css({"text-decoration":"overline orangered"});
        $("#bi").css({"text-decoration":"none"});
        $("#sad").css({"text-decoration":"none"});
    });

    $("#bi").hover(function() {
        $(this).css({"text-decoration":"overline orangered"})}, function(){$(this).css({"text-decoration":"none"});
    });
    $("#sad").hover(function() {
        $(this).css({"text-decoration":"overline orangered"})}, function(){$(this).css({"text-decoration":"none"});
    });

    $("#b").hover(function() {
        $(this).css({"text-decoration":"overline orangered"})}, function(){$(this).css({"text-decoration":"none"});
    });


    $("#counter1").each(function() {
        $("#counter1").prop('Counter', 0).animate({
            Counter: $("#counter1").text()
        }, {
            duration : 4000,
            easing: 'swing', 
            step : function(now) {
                $("#counter1").text(Math.ceil(now));
            }
        });
    });

    $("#counter2").each(function() {
        $("#counter2").prop('Counter', 0).animate({
            Counter: $("#counter2").text()
        }, {
            duration : 4000,
            easing: 'swing', 
            step : function(now) {
                $("#counter2").text(Math.ceil(now));
            }
        });
    });

    $("#counter3").each(function() {
        $("#counter3").prop('Counter', 0).animate({
            Counter: $("#counter3").text()
        }, {
            duration : 4000,
            easing: 'swing', 
            step : function(now) {
                $("#counter3").text(Math.ceil(now));
            }
        });
    });
});

