function checkAge(){
    // console.log("clicked");
    const ageField = document.getElementById("age")
    const ageText = ageField.value
    const errorTag = document.getElementById("error")
    try{
        const age = parseInt(ageText)

        if(isNaN(age)){
            // console.log("age is not a number", age, ageText);
            throw "Enter a valid age number";
        }
        else if(age < 18){
            throw "+18 website ahead, children's aren't allowed";
        }
        else if(age > 30){
            throw "You shall not pass";
        }
        errorTag.innerHTML = '';
        // else{
        //     console.log("Welcome");
        // } it wont work
    }
    catch(err){
        console.log("le error",err);
        errorTag.innerHTML = "Error: " + err
    }
    finally{
        console.log("all done");
    }
    console.log(20010708);
}