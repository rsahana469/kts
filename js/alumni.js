var contactTable=firebase.database().ref('alumniDetails');
$('#alumuni_form').submit(function(e){
    
    e.preventDefault();
    var internid=document.getElementById('a_internid').value;
    var name=document.getElementById('a_fullname').value;
    var domain=document.getElementById('a_domain').value;
    var branch=document.getElementById('a_branch').value;
    var college=document.getElementById('a_college').value;
    var edata=contactTable.push();
    edata.set({
            internid:internid,
            name:name,
            domain:domain,
            branch:branch,
            college:college
    
        });
        alert("Thankyou !");
        window.location.reload();
}); 