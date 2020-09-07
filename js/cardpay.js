<<<<<<< HEAD
// // Made by team (madhav,keshav)
//usename ->Madhav2108
//username ->KeshavSingh7
//just go and check out profiles for more such projects;



(function($) { "use strict";
		
	
	var pos = 0;
			window.setInterval(function(){
				pos++;
				document.getElementsByClassName('moving-image')[0].style.backgroundPosition = pos + "px 0px";
			}, 18
		);

  })(jQuery);
  

$('.input-cart-number').on('keyup change', function(){
    $t = $(this);
    
    if ($t.val().length > 3) {
      $t.next().focus();
    }
    
    var card_number = '';
    $('.input-cart-number').each(function(){
      card_number += $(this).val() + ' ';
      if ($(this).val().length == 4) {
        $(this).next().focus();
      }
    })
    
    $('.credit-card-box .number').html(card_number);
  });
  
  $('#card-holder').on('keyup change', function(){
    $t = $(this);
    $('.credit-card-box .card-holder div').html($t.val());
  });
  
  $('#card-holder').on('keyup change', function(){
    $t = $(this);
    $('.credit-card-box .card-holder div').html($t.val());
  });
  
  $('#card-expiration-month, #card-expiration-year').change(function(){
    m = $('#card-expiration-month option').index($('#card-expiration-month option:selected'));
    m = (m < 10) ? '0' + m : m;
    y = $('#card-expiration-year').val().substr(2,2);
    $('.card-expiration-date div').html(m + '/' + y);
  })
  
  $('#card-ccv').on('focus', function(){
    $('.credit-card-box').addClass('hover');
  }).on('blur', function(){
    $('.credit-card-box').removeClass('hover');
  }).on('keyup change', function(){
    $('.ccv div').html($(this).val());
  });
  setTimeout(function(){
    $('#card-ccv').focus().delay(1000).queue(function(){
      $(this).blur().dequeue();
    });
=======
// // Made by team (madhav,keshav)
//usename ->Madhav2108
//username ->KeshavSingh7
//just go and check out profiles for more such projects;



(function($) { "use strict";
		
	
	var pos = 0;
			window.setInterval(function(){
				pos++;
				document.getElementsByClassName('moving-image')[0].style.backgroundPosition = pos + "px 0px";
			}, 18
		);

  })(jQuery);
  

$('.input-cart-number').on('keyup change', function(){
    $t = $(this);
    
    if ($t.val().length > 3) {
      $t.next().focus();
    }
    
    var card_number = '';
    $('.input-cart-number').each(function(){
      card_number += $(this).val() + ' ';
      if ($(this).val().length == 4) {
        $(this).next().focus();
      }
    })
    
    $('.credit-card-box .number').html(card_number);
  });
  
  $('#card-holder').on('keyup change', function(){
    $t = $(this);
    $('.credit-card-box .card-holder div').html($t.val());
  });
  
  $('#card-holder').on('keyup change', function(){
    $t = $(this);
    $('.credit-card-box .card-holder div').html($t.val());
  });
  
  $('#card-expiration-month, #card-expiration-year').change(function(){
    m = $('#card-expiration-month option').index($('#card-expiration-month option:selected'));
    m = (m < 10) ? '0' + m : m;
    y = $('#card-expiration-year').val().substr(2,2);
    $('.card-expiration-date div').html(m + '/' + y);
  })
  
  $('#card-ccv').on('focus', function(){
    $('.credit-card-box').addClass('hover');
  }).on('blur', function(){
    $('.credit-card-box').removeClass('hover');
  }).on('keyup change', function(){
    $('.ccv div').html($(this).val());
  });
  setTimeout(function(){
    $('#card-ccv').focus().delay(1000).queue(function(){
      $(this).blur().dequeue();
    });
>>>>>>> 6d582ad... new
  }, 500);