var readlineSync = require('readline-sync');

let regex = /(^[0-9]\d{2}\s\d{10}$)/;
    var PhoneNo = readlineSync.question("Enter Your Phone Number ");

    if(regex.test(PhoneNo)){
        console.log("Phone Number is Valid");
    }else{
        console.log("Phone Number is not Valid")
    }