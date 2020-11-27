var readlineSync = require('readline-sync');

let regex = /(?=.*[A-Z])[A-Za-z0-9]{8,15}$/;
            var Pswd = readlineSync.question("Enter Your Password ", {hideEchoBack: true} );
    
            if(regex.test(Pswd)){
                console.log("Password is Valid");
            }else{
                console.log("Password is not Valid")
            }