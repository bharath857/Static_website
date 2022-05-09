document.getElementById('contactform').addEventListener('submit', submitForm);

function getValues(id){
    return document.getElementById(id).value;
}

function submitForm(e){
    e.preventDefault()
    
    var name = getValues("name")
    var email = getValues("email")
    var message = getValues("message")

    ClearFields();
    
    console.log(name)
    console.log(email)
    console.log(message)
}

function ClearFields() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}
