
function ValidateForm(mail_R, phone_R) {
    phonenumber(phone_R)
    ValidateEmail(mail_R)
    
}

function phonenumber(phone) {
    var phoneno = /^\d{10}$/;
    if ((phone.value.match(phoneno))) {
        document.form1.phone1.focus();
        return true;
    }
    else {
        alert("You have entered a wrong phone");
        document.form1.phone1.focus();
        button.disabled = true;
        return false;
    }
}


function ValidateEmail(mail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.value.match(mailformat)) {
        
        document.form1.mail1.focus();
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        button.disabled = true;
        document.form1.mail1.focus();
        return false;
    }
}