var readlineSync = require('readline-sync');

class UserRegistration{
   
    UserFname = () => {

        let regex = /^[A-Z]{1}[a-z]{2,}/;
        var Fname = readlineSync.question("Enter Your First Name");

        if(regex.test(Fname)){

            console.log("First Name Valid")
        }else{
            console.log("First name not valid")
        }
    }

    

}

module.exports = new UserRegistration();



