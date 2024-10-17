let formname = document.getElementById("fname");
let email = document.getElementById("femail");
let fpassword = document.getElementById('fpassword');
let fconfirm = document.getElementById('conpass');
let btn = document.getElementById('btn');
let showPass = document.getElementById('showpassword');

function userName() {
    
    document.getElementById("user-form").innerHTML = "";

    if (formname.value === "") {
        document.getElementById("user-form").innerHTML = "**Username cannot be empty";
        return false;
    }
    if (formname.value.length < 3) {
        document.getElementById("user-form").innerHTML = "**Must be greater than 3 characters";
        return false;
    }
    if (formname.value.length > 20) {
        document.getElementById("user-form").innerHTML = "**Must not be greater than 20 characters.";
        return false;
    }
    return true; 
}

function formEmail() {
    // Clear previous error message
    document.getElementById("user-email").innerHTML = "";

    if (email.value === "") {
        document.getElementById("user-email").innerHTML = "**Email cannot be empty";
        return false;
    }
    if (!email.value.includes("@")) {
        document.getElementById("user-email").innerHTML = "**Must include @ in the email";
        return false;
    }
    return true;
}

function formPassword() {
    // Clear previous error message
    document.getElementById("user-password").innerHTML = "";

    if (fpassword.value === "") {
        document.getElementById("user-password").innerHTML = "**Password cannot be empty";
        return false;
    }
    if (fpassword.value.length < 3) {
        document.getElementById("user-password").innerHTML = "**Must be greater than 3 characters";
        return false;
    }
    if (fpassword.value.length > 20) {
        document.getElementById("user-password").innerHTML = "**Must not be greater than 20 characters.";
        return false;
    }
    return true;
}


function confirmPassword() {
    // Clear previous error message
    document.getElementById("confirm-pass").innerHTML = "";

    if (fpassword.value !== fconfirm.value) {
        document.getElementById("confirm-pass").innerHTML = "**Passwords do not match";
        return false;
    }
    return true;
}

function handleSubmit(e) {
    e.preventDefault(); // Prevent form from submitting

    // Call all validation functions and check their results
    const isUsernameValid = userName();
    const isEmailValid = formEmail();
    const isPasswordValid = formPassword();
    const isConfirmPasswordValid = confirmPassword();

    // Proceed if all validations pass
    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        console.log("Form is valid. Proceed with submission or further actions.");
    } else {
        console.log("Form contains errors. Please correct them.");
    }
}

btn.addEventListener('click', handleSubmit);
showPass.addEventListener('change', function(){
    console.log(this.checked);
    if(this.checked){
        fpassword.type = "text";
        fconfirm.type = "text";
    }else{
        fconfirm.type = "password";
        fpassword.type = "password";
    }
});
