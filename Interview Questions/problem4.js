// 4. The Password Validator:
//    You are building a password validation feature.
//    Create a function that checks if a given password meets the following criteria:
//    at least 8 characters long, contains both uppercase and lowercase letters,
//    and includes at least one digit.

let isUpper = (c)=>{
       
    if(c.charCodeAt() >= 65 && c.charCodeAt() <= 90){
        return true;
    }
    return false;
}
let isLower = (c)=>{
  

    if(c.charCodeAt() >= 97 && c.charCodeAt() <= 122){
        return true;
    }
    return false;
}
let isDigit = (c)=>{

    if(c.charCodeAt() >= 48 && c.charCodeAt() <= 57 ){
        return true;
    }
    
        return false;
    
}

function passwordValidation(password){

    if(password.length<8){
        console.log("Password is too small");
        return false;
    }
    else{
        let hasLowercase = false;
        let hasUpperCase = false;
        let hasDigit = false;
       for(c of password){
             if(isUpper(c)){
                hasUpperCase = true;

             }
             if(isLower(c)){
                hasLowercase = true;
             }
             if(isDigit(c)){
                hasDigit = true;
             }
 
       }


       if(!hasUpperCase){
        console.log("Password should have at least one uppercase letter");
        return false;
       }
       else if(!hasLowercase){
        console.log("Password should have at least one lowercase letter");
        return false;
       }
       else if(!hasDigit){
        console.log("Password should have at least one digit");
        return false;
       } 

       
       
       
    }
    return true


}
if(passwordValidation("123ABCDE")){
    console.log("Password is valid");
}





