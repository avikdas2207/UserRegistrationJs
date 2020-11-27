var readlineSync = require('readline-sync');

class UserRegistration{
   
    UserInput = () => {

        let regex = /^[A-Z]{1}[a-z]{2,}/;
        var User = readlineSync.question("Enter Your Name");

        if(regex.test(User)){

            console.log("Valid")
        }else{
            console.log("not valid")
        }
    }

}

module.exports = new UserRegistration();