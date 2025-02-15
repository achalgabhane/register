const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password1 = document.querySelector('.password1');
const password2 = document.querySelector('.password2');
const submit = document.querySelector('.submit');


// console.log(username);
// console.log(email);
// console.log(password1);
// console.log(password2);
// console.log(submit);



//mesages

const usernameMessage = document.querySelector('.user-msg');
const emailMessage = document.querySelector('.email-msg');
const password1Message = document.querySelector('.password1-msg');
const password2Message = document.querySelector('.password2-msg');

submit.addEventListener("click", (e) => {
e.preventDefault();


//if all the values are empty
if(username.value === "" && email.value === "" && password1.value === "" && password2.value === "" ){
  alert("please fill all input fields")
}
if(username.value === ""){
showMessage(usernameMessage, "please provide your name", "red");
}else{
showMessage(usernameMessage, "Great Name", "green")
}

if(email.value === ""){
    showMessage(emailMessage, "please provide your email", "red");
    }else{
    showMessage(emailMessage, "Great Name", "green")
    }

    if(password1.value === ""){
        showMessage(password1Message, "please provide your password", "red");
        }else{
        showMessage(password1Message, "Valid password", "green")
        }

        if(password2.value === ""){
            showMessage(password2Message, "confirm your password", "red");
            }else if(password1.value !== password2.value){
            showMessage(password2Message, "password do not match", "red")
            }else{
                showMessage(password2Message, "valid password", "green ")
            }

});


function showMessage(element, msg,color){
 element.textContent =msg;
 element.style.color = color;
element.previousElementSibling.style.color = `2px solid ${color}`
}
