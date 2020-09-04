// // Made by team (madhav,keshav)
//usename ->Madhav2108
//username ->KeshavSingh7
//just go and check out profiles for more such projects;


var items = document.querySelectorAll('.news__item');
var item = document.querySelector('.news__item');

function cLog(content) {
    console.log(content)
}

if($(window).width() > 800) {
    $(document).on("mouseover", ".news__item", function (_event, _element) {

        var newsItem = document.querySelectorAll('.news__item');
        newsItem.forEach(function (element, index) {
            element.addEventListener('mouseover', function () {
                var x = this.getBoundingClientRect().left;
                var y = this.getBoundingClientRect().top;
                var width = this.getBoundingClientRect().width;
                var height = this.getBoundingClientRect().height;

               
                $('.news__item').removeClass('active');
                // $('.news__item').removeClass('active');


                
            });

            element.addEventListener('mouseleave', function () {
                $('.news__item').removeClass('active');
            });

        });

    });
}
