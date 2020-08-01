const alphaRegEx = /^[A-Za-z]+$/; // regular expression for  alphabets
const addRegEx = /^[A-Za-z0-9., ]+$/; // regular expression for address
const numRegEx = /^[0-9]+$/; // regular expression for numbers
const mailRegEx = /^[a-z0-9._]+@[a-z]+\.[a-z]{2,3}$/; //regular expression for email
var valid1 = false, valid2 = false, valid3 = false, valid4 = false, valid5 = false, valid6 = false, valid7 = false, valid8 = false, valid9 = false;

//validation for first name
function validateFname() {
    var fn = document.getElementById('fname');
    var fnv = fn.value.trim();
    if(fnv.length < 3) {
        fn.parentElement.className = 'col error';
        fn.parentElement.querySelector('small').innerText='First name cannot be less than 3 words.'
    }

    else {
        if(alphaRegEx.test(fnv)) {
            fn.parentElement.className = 'col success';
            valid1 = true;
        }
        else {
            fn.parentElement.className = 'col error';
            fn.parentElement.querySelector('small').innerText='Name cannot contain numbers.'
        }    
    }
}

// validation for last name
function validateLname() {  
    var ln = document.getElementById('lname');
    var lnv = ln.value.trim();
    if(lnv.length < 3) {
        ln.parentElement.className = 'col error';
        ln.parentElement.querySelector('small').innerText='Last name cannot be less than 3 words.'
    }

    else {
        if(alphaRegEx.test(lnv)) {
            ln.parentElement.className = 'col success';
            valid2 = true;
        }
        else {
            ln.parentElement.className = 'col error';
            ln.parentElement.querySelector('small').innerText='Name cannot contain numbers.'
        }    
    }
}

// validation for address
function validateAddress() {  
    var a = document.getElementById('address');
    var av = a.value.trim();
    if(av.length < 15) {
        a.parentElement.className = 'col error';
        a.parentElement.querySelector('small').innerText='Address cannot be less than 15 words.'
    }

    else {
        if(addRegEx.test(av)) {
            a.parentElement.className = 'col success';
            valid3 = true;
        }
        else {
            a.parentElement.className = 'col error';
            a.parentElement.querySelector('small').innerText='Address cannot contain special character other than "." and ","'
        }    
    }
}

// validation for city name
function validateCity() {  
    var c = document.getElementById('city');
    var cv = c.value.trim();
    if(cv.length < 3) {
        c.parentElement.className = 'col error';
        c.parentElement.querySelector('small').innerText='City name cannot be less than 3 words.'
    }

    else {
        if(alphaRegEx.test(cv)) {
            c.parentElement.className = 'col success';
            valid4 = true;
        }
        else {
            c.parentElement.className = 'col error';
            c.parentElement.querySelector('small').innerText='City name cannot contain numbers.'
        }    
    }
}

//validation for state name
function validateState() {  
    var s = document.getElementById('state');
    var sv = s.value.trim();
    if(sv.length < 3) {
        s.parentElement.className = 'col error';
        s.parentElement.querySelector('small').innerText='State name cannot be less than 3 words.'
    }

    else {
        if(alphaRegEx.test(sv)) {
            s.parentElement.className = 'col success';
            valid5 = true;
        }
        else {
            s.parentElement.className = 'col error';
            s.parentElement.querySelector('small').innerText='State name cannot contain numbers.'
        }    
    }
}

// validation for pincode
function validatePincode() {  
    var p = document.getElementById('pincode');
    var pv = p.value.trim();
    if(pv.length < 6) {
        p.parentElement.className = 'col error';
        p.parentElement.querySelector('small').innerText='Pincode cannot be less than 6 numbers.'
    }

    else {
        if(numRegEx.test(pv)) {
            p.parentElement.className = 'col success';
            valid6 = true;
        }
        else {
            p.parentElement.className = 'col error';
            p.parentElement.querySelector('small').innerText='Pincode can contain only numbers.'
        }    
    }
}

// validation for country
function validateCountry() {  
    var c = document.getElementById('country');
    var cv = c.value.trim();
    if(cv.length < 3) {
        c.parentElement.className = 'col error';
        c.parentElement.querySelector('small').innerText='Country name cannot be less than 3 words.'
    }

    else {
        if(alphaRegEx.test(cv)) {
            c.parentElement.className = 'col success';
            valid7 = true;
        }
        else {
            c.parentElement.className = 'col error';
            c.parentElement.querySelector('small').innerText='Country name cannot contain numbers.'
        }    
    }
}

// validate email
function validateEmail() {  
    var e = document.getElementById('mail');
    var ev = e.value.trim();
    if(mailRegEx.test(ev)) {
        e.parentElement.className = 'col success';
        valid8 = true;
    }
    else {
        e.parentElement.className = 'col error';
        e.parentElement.querySelector('small').innerText='Email format not correct.'
    }
}

//validate contact
function validateContact() {  
    var c = document.getElementById('contact');
    var cv = c.value.trim();
    if(cv.length < 10) {
        c.parentElement.className = 'col error';
        c.parentElement.querySelector('small').innerText='Contact no. cannot be less than 10 digits.'
    }

    else {
        if(numRegEx.test(cv)) {
            c.parentElement.className = 'col success';
            valid9 = true;
        }
        else {
            c.parentElement.className = 'col error';
            c.parentElement.querySelector('small').innerText='Contact no. can contain only numbers.'
        }    
    }
}

function validate() {
    return (valid1 && valid2 && valid3 && valid4  && valid5 && valid6 && valid7 && valid8 && valid9);
}