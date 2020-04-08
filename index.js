var jsonData = {
    "name" : "Amir",
    "age" : 14,
    "profilr" : {
        "username" : "MasoodSardi",
        "email" : "mom"
    }
};
console.log(jsonData.profilr.email);
jsonData.profilr.email = "amir";
console.log(jsonData.profilr.email) 
