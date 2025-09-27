
function update(){

    firebase.database().ref("Student_Details").once('value',function(snapshot){

        snapshot.forEach(function(childsnapshot){
               var idd=childsnapshot.val().internid;
               if(idd.toUpperCase()==word.toUpperCase()){
                //ipdate

                var uname=document.getElementById("uname").value;
                var ucontact=document.getElementById("ucontact").value;
                var ubranch=document.getElementById("ubranch").value;
                var uusn=document.getElementById("uusn").value;
                var ucollege=document.getElementById("ucollege").value;
                var uemail=document.getElementById("uemail").value;
                childsnapshot.ref.update({'name':uname});
                childsnapshot.ref.update({'contact':ucontact});
                childsnapshot.ref.update({'usn':uusn});
                childsnapshot.ref.update({'branch':ubranch});
                childsnapshot.ref.update({'college':ucollege});
                childsnapshot.ref.update({'email':uemail});
               
               }
              
        });
        alert("updated");
        window.location.reload();

    });
}