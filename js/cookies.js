var word;
authenticationObject.onAuthStateChanged(function(user){
    if(user){
        var email= user.email;
        //truncation
        const myArray = email.split("@");
        word = myArray[0];

        document.getElementById('active_user').innerHTML="Welcome, "+ word;
       document.getElementById("login_con").style.display="none";
       document.getElementById("home_con").style.display="block";
       document.getElementById("personal-con").style.display="block";
    }
    else{
        document.getElementById("login_con").style.display="block";
        document.getElementById("home_con").style.display="none";

    }

});