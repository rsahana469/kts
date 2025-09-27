$('.intern-login-form').submit(function(e){
    
    document.getElementById("message").innerHTML="PLEASE WAIT ! PROCESSING ";
    document.getElementById("message").style.color="green";
    e.preventDefault();
    // fetch the data
    var idd=document.getElementById('intern_id').value;
    var pwd=document.getElementById('intern_password').value;
    // check the validity of data
    var aidd=idd+"@kts.in";
    //Login Operation
    checklogin(aidd,pwd);
   
    //perform the action

});

function checklogin(aidd,pwd){
    
    authenticationObject.signInWithEmailAndPassword(aidd,pwd).then((success)=>
	{
		
        alert("login success");
        window.location.reload();
				
	}).catch((error)=>
	{

        document.getElementById("message").innerHTML="LOGIN FAILED! ";
        document.getElementById("message").style.color="red";
	});
    
}

function logout(){
    authenticationObject.signOut();
    alert("logout Successful");
    window.location.reload();
}

function openHomecon(){
    document.getElementById("personal-con").style.display="block";
    document.getElementById("update-personal-con").style.display="none";
    document.getElementById("attendance-con").style.display="none";
    document.getElementById("presence-con").style.display="none";
    document.getElementById("feedback-con").style.display="none";
    document.getElementById("alumini-con").style.display="none";
    document.getElementById("certificate-con").style.display="none";
    document.getElementById("sop-con").style.display="none";
    document.getElementById("terms-con").style.display="none";
    document.getElementById("payment-con").style.display="none";
}
function openUpdatecon(){
    document.getElementById("personal-con").style.display="none";
    document.getElementById("update-personal-con").style.display="block";
    document.getElementById("attendance-con").style.display="none";
    document.getElementById("presence-con").style.display="none";
    document.getElementById("feedback-con").style.display="none";
    document.getElementById("alumini-con").style.display="none";
    document.getElementById("certificate-con").style.display="none";
    document.getElementById("sop-con").style.display="none";
    document.getElementById("terms-con").style.display="none";
    document.getElementById("payment-con").style.display="none";
}
function openAttendance(){
    document.getElementById("personal-con").style.display="none";
    document.getElementById("update-personal-con").style.display="none";
    document.getElementById("attendance-con").style.display="block";
    document.getElementById("presence-con").style.display="none";
    document.getElementById("feedback-con").style.display="none";
    document.getElementById("alumini-con").style.display="none";
    document.getElementById("certificate-con").style.display="none";
    document.getElementById("sop-con").style.display="none";
    document.getElementById("terms-con").style.display="none";
    document.getElementById("payment-con").style.display="none";
}
function openpresence(){
    document.getElementById("personal-con").style.display="none";
    document.getElementById("update-personal-con").style.display="none";
    document.getElementById("attendance-con").style.display="none";
    document.getElementById("presence-con").style.display="block";
    document.getElementById("feedback-con").style.display="none";
    document.getElementById("alumini-con").style.display="none";
    document.getElementById("certificate-con").style.display="none";
    document.getElementById("sop-con").style.display="none";
    document.getElementById("terms-con").style.display="none";
    document.getElementById("payment-con").style.display="none";
}
function openfeedback(){
    document.getElementById("personal-con").style.display="none";
    document.getElementById("update-personal-con").style.display="none";
    document.getElementById("attendance-con").style.display="none";
    document.getElementById("presence-con").style.display="none";
    document.getElementById("feedback-con").style.display="block";
    document.getElementById("alumini-con").style.display="none";
    document.getElementById("certificate-con").style.display="none";
    document.getElementById("sop-con").style.display="none";
    document.getElementById("terms-con").style.display="none";
    document.getElementById("payment-con").style.display="none";
}
function openAlumini(){
    document.getElementById("personal-con").style.display="none";
    document.getElementById("update-personal-con").style.display="none";
    document.getElementById("attendance-con").style.display="none";
    document.getElementById("presence-con").style.display="none";
    document.getElementById("feedback-con").style.display="none";
    document.getElementById("alumini-con").style.display="block";
    document.getElementById("certificate-con").style.display="none";
    document.getElementById("sop-con").style.display="none";
    document.getElementById("terms-con").style.display="none";
    document.getElementById("payment-con").style.display="none";
}
function opencertificate(){
    document.getElementById("personal-con").style.display="none";
    document.getElementById("update-personal-con").style.display="none";
    document.getElementById("attendance-con").style.display="none";
    document.getElementById("presence-con").style.display="none";
    document.getElementById("feedback-con").style.display="none";
    document.getElementById("alumini-con").style.display="none";
    document.getElementById("certificate-con").style.display="block";
    document.getElementById("sop-con").style.display="none";
    document.getElementById("terms-con").style.display="none";
    document.getElementById("payment-con").style.display="none";
}
function opensop(){
    document.getElementById("personal-con").style.display="none";
    document.getElementById("update-personal-con").style.display="none";
    document.getElementById("attendance-con").style.display="none";
    document.getElementById("presence-con").style.display="none";
    document.getElementById("feedback-con").style.display="none";
    document.getElementById("alumini-con").style.display="none";
    document.getElementById("certificate-con").style.display="none";
    document.getElementById("sop-con").style.display="block";
    document.getElementById("terms-con").style.display="none";
    document.getElementById("payment-con").style.display="none";
}
function openterms(){
    document.getElementById("personal-con").style.display="none";
    document.getElementById("update-personal-con").style.display="none";
    document.getElementById("attendance-con").style.display="none";
    document.getElementById("presence-con").style.display="none";
    document.getElementById("feedback-con").style.display="none";
    document.getElementById("alumini-con").style.display="none";
    document.getElementById("certificate-con").style.display="none";
    document.getElementById("sop-con").style.display="none";
    document.getElementById("terms-con").style.display="block";
    document.getElementById("payment-con").style.display="none";
}
function openpayment(){
    document.getElementById("personal-con").style.display="none";
    document.getElementById("update-personal-con").style.display="none";
    document.getElementById("attendance-con").style.display="none";
    document.getElementById("presence-con").style.display="none";
    document.getElementById("feedback-con").style.display="none";
    document.getElementById("alumini-con").style.display="none";
    document.getElementById("certificate-con").style.display="none";
    document.getElementById("sop-con").style.display="none";
    document.getElementById("terms-con").style.display="none";
    document.getElementById("payment-con").style.display="block";
}