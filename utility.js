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


    UserLname = () => {

        let regex = /^[A-Z]{1}[a-z]{2,}/;
        var Lname = readlineSync.question("Enter Your Last Name");

        if(regex.test(Lname)){

            console.log("Last Name Valid")
        }else{
            console.log("Last name not valid")
        }
    }

    UserEmail = () => {

        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var Email = readlineSync.questionEMail("Enter your E-mail");

        if(regex.test(Email)){
            return(true)
        }
        return(false)
    }

    UserPhone = () => {

        let regex = /^\(?([0-9]{2})\)?[ ]?([0-9]{10})/;
        var PhoneNo = readlineSync.question("Enter Your Phone Number ");

        if(regex.test(PhoneNo)){
            console.log("Phone Number is Valid");
        }else{
            console.log("Phone Number is not Valid")
        }
        }

        UserPswd = () => {

            let regex = /[A-Za-z0-9]{8}/;
            var Pswd = readlineSync.question("Enter Your Password ", {hideEchoBack: true} );
    
            if(regex.test(Pswd)){
                console.log("Password is Valid");
            }else{
                console.log("Password is not Valid")
            }
            }



    } 

module.exports = new UserRegistration();