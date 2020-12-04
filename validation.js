document.querySelector('#form').addEventListener('submit', function(){
    let nameIsInvalid = false;
    let emailIsInvalid = false;
    let messageIsInvalid= false;

    let name = document.querySelector('#name').value;
    if (name.length < 3){
        nameIsInvalid= true;
    }

    let email = document.querySelector('#email').value;
    if (email.includes('@')==false||email.includes('.')==false){
        emailIsInvalid = true;   
    } 

    let name = document.querySelector('#message').value;
    if (message.length < 10){
        messageIsInvalid= true;
    }

    if (nameIsInvalid) {
    document.querySelector('#nameIsInvalid').innerHTML = "*Name should be at least 2 characters.";
    }
    
    if (emailIsInvalid){
     document.querySelector('#emailInvalid').innerHTML="*Email is invalid";
    }

    if (messageIsInvalid) {
    document.querySelector('#messageIsInvalid').innerHTML = "*Message is too short.";
    }

    if (!nameIsInvalid && !emailIsInvalid && !messageIsInvalid) {
    alert("Thank you for reaching out to us. We will get back to you as soon as possible!");
    document.querySelector('form').submit();
    }
    }) 