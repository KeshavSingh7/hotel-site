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

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $('.preview9').click(function(){
        $(".modal-image").attr("src", "img/restaurant9.jpg");
    });

    $('.preview10').click(function(){
        $(".modal-image").attr("src", "img/restaurant10.jpg");
    });

    $('.preview11').click(function(){
        $(".modal-image").attr("src", "img/restaurant11.jpg");
    });

    $('.preview12').click(function(){
        $(".modal-image").attr("src", "img/restaurant12.jpg");
    });

    $('.preview13').click(function(){
        $(".modal-image").attr("src", "img/restaurant13.jpg");
    });

    $('.preview14').click(function(){
        $(".modal-image").attr("src", "img/restaurant14.jpg");
    });

    $('.preview15').click(function(){
        $(".modal-image").attr("src", "img/restaurant15.jpg");
    });

    $('.preview16').click(function(){
        $(".modal-image").attr("src", "img/restaurant16.jpg");
    });

    var sub1 = false, sub2 = false, sub3 = false, sub4=false;
    var alphaRegEx = /^[A-Za-z ]+$/;
    var numregEx =/^[0-9]+$/;
    var alphaNumRegEx = /^[A-Za-z0-9.,/ ]+$/;
    $("#name").on('keyup',function(){
        var a = $(this).val();
        if(alphaRegEx.test(a)) {
            if(a.length < 3) {
                $(this).parent().attr('class', 'col error');
                $(this).parent().find('small').text('Name cannot be less than 3 letters');
                sub1=false;
            }
            else {
                $(this).parent().attr('class', 'col success');
                $(this).parent().find('small').text('');
                sub1= true;
            }
        }

        else {
            $(this).parent().attr('class', 'col error');
            $(this).parent().find('small').text('Name can contain only letters');
            sub1=false;
        }
    });

    $('#contact').on('keyup',function(){
        var a = $(this).val();
        if(numregEx.test(a)) {
            if(a.length < 10) {
                $(this).parent().attr('class', 'col error');
                $(this).parent().find('small').text('Phone number cannot be less than 10 digits');
                sub2=false;
            }
            else {
                $(this).parent().attr('class', 'col success');
                $(this).parent().find('small').text('');
                sub2= true;
            }
        }

        else {
            $(this).parent().attr('class', 'col error');
            $(this).parent().find('small').text('Phone number can contain only digits');
            sub2=false;
        }
    });

    $('#address').on('keyup',function(){
        var a = $(this).val();
        if(alphaNumRegEx.test(a)) {
            if(a.length < 20) {
                $(this).parent().attr('class', 'col error');
                $(this).parent().find('small').text('Address cannot be less than 20 characters');
                sub3=false;
            }
            else {
                $(this).parent().attr('class', 'col success');
                $(this).parent().find('small').text('');
                sub3= true;
            }
        }

        else {
            $(this).parent().attr('class', 'col error');
            $(this).parent().find('small').text('Address cannot contain any special character except "," , "." and " "');
            sub3=false;
        }
    });

    $('.add').on('click',function(){
        var a = parseInt($(this).parent().parent().find('input').val());
        if(a<10)
            $(this).parent().parent().find('input').val(a+1);
    });

    $('.remove').on('click',function(){
        var a = parseInt($(this).parent().parent().find('input').val());
        if(a>0)
            $(this).parent().parent().find('input').val(a-1);
    });
    
    $(".placeOrder").on('click', function(){
        $('tr').each(function(){
            alert($('tr td').find('input').val()) ; 
        });
    });

    $("#form").submit(function(){
        return sub1 && sub2 && sub3 && sub4;
    });
});

