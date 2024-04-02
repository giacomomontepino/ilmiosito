function sendmail(){
    var params={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_nqha693", "contact_form", params).then(function(res){
        alert("Email inviata"+ res.status);
    })
}