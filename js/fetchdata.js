//console.log("gdfyu");
firebase.initializeApp(firebaseConfig);
//ftech data
function fetchdata(){

    firebase.database().ref("Student_Details").once('value',function(snapshot){

        snapshot.forEach(function(childsnapshot){
               var idd=childsnapshot.val().internid;
               if(idd.toUpperCase()==word.toUpperCase()){

                var name=childsnapshot.val().name;
                var contact=childsnapshot.val().contact;
                var branch=childsnapshot.val().branch;
                var usn=childsnapshot.val().usn;
                var college=childsnapshot.val().college;
                var email=childsnapshot.val().email;
                document.getElementById('active_user').innerHTML="Welcome, "+ name;
                document.getElementById('name').innerHTML="Name: "+ name;
                document.getElementById('name').style.fontWeight="bold";
                document.getElementById('contact').innerHTML="Contact: "+ contact;
                document.getElementById('branch').innerHTML="Branch: "+ branch;
                document.getElementById('usn').innerHTML="USN: "+ usn;
                document.getElementById('college').innerHTML="College: "+ college;
                document.getElementById('email').innerHTML="Email: "+ email;
                document.getElementById('intern_start').innerHTML="Allocation Date: "+ childsnapshot.val().Internship_starting_date;
                document.getElementById('intern_start').style.fontWeight="bold";
                document.getElementById('intern_end').innerHTML="De-Allocation Date: "+ childsnapshot.val().Internship_Completion_date;
                document.getElementById('intern_end').style.fontWeight="bold";
                document.getElementById('uname').value=name;
                document.getElementById('ucontact').value=contact;
                document.getElementById('ubranch').value=branch;
                document.getElementById('uusn').value=usn;
                document.getElementById('ucollege').value=college;
                document.getElementById('uemail').value=email;

                //handle the activation and deactivation of button
                var date_current=childsnapshot.val().Internship_Completion_date;
                const date = new Date();
                let day = date.getDate();
                let month = date.getMonth()+1;
                if(month <10)month="0"+month;
                let year = date.getFullYear();
                var todayDate=year+"-"+month+"-"+day;
                console.log(date_current , todayDate );
                var firstValue = date_current.split('-');
                var secondValue = todayDate.split('-');
            
                var firstDate=new Date();
                firstDate.setFullYear(firstValue[0],(firstValue[1] - 1 ),firstValue[2]);
            
                var secondDate=new Date();
                secondDate.setFullYear(secondValue[0],(secondValue[1] - 1 ),secondValue[2]);     
            
                if (firstDate >= secondDate)
                {
                    console.log("End Date is greater than Today Date");
                    document.getElementById('gertCertificate').disabled=true;
                    document.getElementById('feedback_btn').disabled=true;
                    document.getElementById('alumni_btn1').disabled=true;
                    document.getElementById('payment_btn').disabled=true;
                }
                else
                {
                    console.log("vice-");
                  
                    document.getElementById('diabled2').disabled=true;
                    document.getElementById('diabled3').disabled=true;
                    document.getElementById('diabled4').disabled=true; 
                    document.getElementById('diabled5').disabled=true; 
                    document.getElementById('diabled6').disabled=true; 
                    document.getElementById('payment_btn').disabled=true;
                }
              

                
               }
              
        });

    });
}

 