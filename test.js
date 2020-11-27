var readlineSync = require('readline-sync');

let regex = /(?=.*\d)(?=.*[A-Z])[A-Za-z0-9](?=.*[@#$%*&+?/!]{1}){8,15}$/;
            var Pswd = readlineSync.question("Enter Your Password ",  );
    
            if(regex.test(Pswd)){
                console.log("Password is Valid");
            }else{
                console.log("Password is not Valid")
            }