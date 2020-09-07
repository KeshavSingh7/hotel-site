<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6d582ad... new
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
  function pay1() {
<<<<<<< HEAD
=======
function pay1() {
>>>>>>> a8b0b7f... page added
=======
>>>>>>> 6d582ad... new
    document.getElementById('method1').style.display = "block";
    document.getElementById('method2').style.display = "none";
    document.getElementById('method3').style.display = "none";    document.getElementById('card').style.color = "white";
    document.getElementById('card').style.backgroundColor = "black";
    document.getElementById('netbanking').style.color = "black";
    document.getElementById('netbanking').style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    document.getElementById('upi').style.color = "black";
    document.getElementById('upi').style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    document.getElementById('cod').style.color = "black";
    document.getElementById('cod').style.backgroundColor = "rgba(255, 255, 255, 0.7)";
}

function pay2() {
    document.getElementById('method1').style.display = "none";
    document.getElementById('method2').style.display = "block";
    document.getElementById('method3').style.display = "none";    document.getElementById('card').style.color = "black";
    document.getElementById('card').style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    document.getElementById('netbanking').style.color = "white";
    document.getElementById('netbanking').style.backgroundColor = "black"
    document.getElementById('upi').style.color = "black";
    document.getElementById('upi').style.backgroundColor = "rgba(255, 255, 255, 0.7)"
    document.getElementById('cod').style.color = "black";
    document.getElementById('cod').style.backgroundColor = "rgba(255, 255, 255, 0.7)"
}

function pay3() {
    document.getElementById('method1').style.display = "none";
    document.getElementById('method2').style.display = "none";
    document.getElementById('method3').style.display = "block";    document.getElementById('card').style.color = "black";
    document.getElementById('card').style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    document.getElementById('netbanking').style.color = "black";
    document.getElementById('netbanking').style.backgroundColor = "rgba(255, 255, 255, 0.7)"
    document.getElementById('upi').style.color = "white";
    document.getElementById('upi').style.backgroundColor = "black"
    document.getElementById('cod').style.color = "black";
    document.getElementById('cod').style.backgroundColor = "rgba(255, 255, 255, 0.7)"
}

function pay4() {
    document.getElementById('method1').style.display = "none";
    document.getElementById('method2').style.display = "none";
    document.getElementById('method3').style.display = "none";
    document.getElementById('card').style.color = "black";
    document.getElementById('card').style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    document.getElementById('netbanking').style.color = "black";
    document.getElementById('netbanking').style.backgroundColor = "rgba(255, 255, 255, 0.7)"
    document.getElementById('upi').style.color = "black";
    document.getElementById('upi').style.backgroundColor = "rgba(255, 255, 255, 0.7)"
    document.getElementById('cod').style.color = "white";
    document.getElementById('cod').style.backgroundColor = "black"
}

var sub1 = false, sub2 = false, sub3 = false;
var cardnoRegEx = /^[0-9]{4}\s+[0-9]{4}\s+[0-9]{4}\s+[0-9]{4}$/;
var expiryRegEx =/^(0[1-9]{1}|1[0-2]{1})\/+2[0-9]{3}$/;
var cvvRegEx =/^[0-9]{3}$/;
function validateCard() {
    var a = document.getElementById('cardno');
    if(cardnoRegEx.test(a.value.trim())) {
        a.parentElement.className='col success';
        sub1 = true;
    }

    else {
        a.parentElement.className='col error';
        a.parentElement.querySelector('small').innerText='Invalid Card';
    }
}

function validateExpiry() {
    var a = document.getElementById('expiry');
    var d = new Date();
    var e = d.getMonth() + 1;
    var f = d.getFullYear();
    if(expiryRegEx.test(a.value.trim())) {
        var b = parseInt(a.value.trim().substring(0,3));
        var c = parseInt(a.value.trim().substring(3,7));

        if(b > 12) {
            a.parentElement.className='col error';
            a.parentElement.querySelector('small').innerText='Month number cannot me more than 12';
        }

        else if(b < e) {
            a.parentElement.className='col error';
            a.parentElement.querySelector('small').innerText='Month number cannot me less than current month';
        }

        else if(c > 2099) {
            a.parentElement.className='col error';
            a.parentElement.querySelector('small').innerText='Year number cannot me more than 2099';
        }

        else if(c < f) {
            a.parentElement.className='col error';
            a.parentElement.querySelector('small').innerText='Year number cannot me less than current year';
        }

        else {
            a.parentElement.className='col success';
            sub2 = true;
        }
    }
    else {
        a.parentElement.className='col error';
        a.parentElement.querySelector('small').innerText='Invalid date';
    }
}

function validateCVV() {
    var a = document.getElementById('cvv');
    if(cvvRegEx.test(a.value.trim())) {
        a.parentElement.className='col success';
        sub3 = true;
    }

    else {
        a.parentElement.className='col error';
        a.parentElement.querySelector('small').innerText='Invalid CVV';
    }
}

function submission() {
    return sub1 && sub2 && sub3;
}

var upiRegEx =/^[a-z0-9]{3,12}@+[a-z]{3,12}$/ ;
var sub4 = false;

function verify() {
    var a = document.getElementById('upiid');
    if(upiRegEx.test(a.value.trim())) {
        a.parentElement.className='col-md-9 success';
        sub4 = true;
    }

    else {
        a.parentElement.className='col-md-9 error';
        a.parentElement.querySelector('small').innerText='Invalid UPI ID'
    }
}

function verification() {
    return false;
}