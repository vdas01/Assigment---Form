let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let password = document.getElementById('password');
let cpassword = document.getElementById('cpassword');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    validate();
});

const isEmail = (emailVal) =>{
    if(emailVal.indexOf('@') <= 1 || emailVal.lastIndexOf('@') != emailVal.indexOf('@') || emailVal.indexOf('@') == emailVal.length)
      return false;
    if(emailVal.indexOf('.') <= 1  || emailVal.lastIndexOf('.') != emailVal.indexOf('.') || emailVal.indexOf('.') == emailVal.length)
    return false;
    if(emailVal.indexOf('.') - emailVal.indexOf('@') < 5)
    return false;
    return true;
}


function validate(){
    let usernameVal = username.value.trim();
    let emailVal = email.value.trim();
    let phoneVal = phone.value.trim();
    let passwordVal = password.value.trim();
    let cpasswordVal = cpassword.value.trim();

    //validate username
    if(usernameVal === "")
      setError(username,"Username cann't be blank");
    else if(usernameVal.length <= 2)
    setError(username,"Min length 6 characters long");
    else 
      setSuccess(username);
    
    //validate email
    if(emailVal === "")
      setError(username,"Email cann't be blank");
    else if(!isEmail(emailVal))
      setError(email,"Not a valid email");
    else
       setSuccess(email);

    //validate phone
    if(phoneVal === "")
       setError(phone,"Phone number cann't be blank");
    else if(phoneVal.length != 10)
       setError(phone,"Not a valid phone number");
    else 
        setSuccess(phone);

    //validate password;
    let low = 'abcdefghijklmnopqrstuvwxyz';
    if(passwordVal === "")
    setError(password,"Password cann't be blank");
    else if(passwordVal.length < 6)
    setError(password,"Password should be min 6 characters long");
    else{
        let c=0;
        for(let i=0;i<low.length;i++){
            if(passwordVal.includes(low[i]))
            c++;
        }
        if(c==0)
        setError(password,"Password should contain lowercase letter");
        else{
            let upp = low.toUpperCase();
            let c=0;
        for(let i=0;i<upp.length;i++){
            if(passwordVal.includes(upp[i]))
            c++;
        }
        if(c==0)
        setError(password,"Password should contain uppercase letter");
        else
         setSuccess(password);
        }
    }

    //confirm password
    if(cpasswordVal === "")
    setError(cpassword,"Password cann't be blank");
    else if(cpasswordVal.length < 6)
    setError(cpassword,"Password should be min 6 characters long");
    else if(cpasswordVal != passwordVal)
    setError(cpassword,"Password don't match");
    else
    setSuccess(cpassword);

}

function setError(input,mssg){
     const formControl = input.parentElement;
     const small = formControl.querySelector('small');
     formControl.className = "mb-3 error";
     small.innerText = mssg;
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "mb-3 success";
}




