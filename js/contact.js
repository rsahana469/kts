firebase.initializeApp(firebaseConfig);
var contactTable=firebase.database().ref('contactDetails');
function submitcontact(){
    //ftech all the data 
    var email_data = document.getElementById("email").value;
    var name_data = document.getElementById("name").value;
    var contact_data = document.getElementById("contact_value").value;
    var query_data = document.getElementById("query").value;

    if(email_data=="" ||name_data=="" || contact_data=="" || query_data=="" ){

        alert("Enter complete Information!!");
    }
    else{
            //insert thew datq in dartabse
            // GSP - Google server - firebase server - CLOUD SERVICE PROVIDER

            //step - connect to databasse

            //3. insert 
            //3.1 creating the table
            
            //3.2 insertdata
            var edata=contactTable.push();
            edata.set({
                    email:email_data,
                    name:name_data,
                    query:query_data,
                    contact:contact_data

                });
                alert("Query Registerd We shall Reach You Soon!");

    }
    


}