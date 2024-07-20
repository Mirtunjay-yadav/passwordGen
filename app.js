const pass = document.querySelector("#Password");
const inner= document.querySelector("#inner")

pass.addEventListener('input', function(){
    let passwords = pass.value

   if (passwords.length < 8) {
        inner.innerHTML = "Password is too short";
        inner.style.color = "red";
    
    } else if(passwords.search(/[a-z]/) == -1){
         inner.innerHTML = "Password is missing Lowecase"
          inner.style.color = "red"
        
    }else if(passwords.search(/[A-Z]/) == -1){
        inner.innerHTML = "Password is missing Upercase"
          inner.style.color = "red"
    }else if(passwords.search(/[0-9]/) == -1){
        inner.innerHTML = "Password is Numeric Number Upercase"
          inner.style.color = "red"
    
    } else if (passwords.search(/[!@#$%^&*(),.?":{}|<>]/) == -1) {
        inner.innerHTML = "Password is missing a special character";
        inner.style.color = "red";
    }else{
        inner.innerHTML = "Password Valid"
          inner.style.color = "green"
    }
   
    
})