const alphaRegEx = /^[a-zA-Z]+$/;
function validateFname() {
    
    var fn = document.getElementById('fname');
    var fnv = fn.value.trim();
    if(fnv.length < 3) {
        fn.parentElement.className = 'col error';
        fn.parentElement.querySelector('small').innerText='Name cannot be less than 3 words.'
    }

    else {
        if(alphaRegEx.test(fnv))
            fn.parentElement.className = 'col success';
        else {
            fn.parentElement.className = 'col error';
            fn.parentElement.querySelector('small').innerText='Name cannot contain numbers.'
        }    
    }
}
