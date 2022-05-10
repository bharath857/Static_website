function validateName() {
    var name = document.getElementById('name').value;
    if(name.length == 0) {
       alert("Name can't be blank") ;
      return false;
    }
    if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
      alert("Please enter your correct name") ;//Validation Message
      return false;
    }
    return true;
  }

  function validateMessage() {
    var Message = document.getElementById('message').value;
    if(Message.length == 0) {
      alert("Message can't be blank") ;//Validation Message
      return false;
    }
    return true;
  }

  function validateEmail () {

  var email = document.getElementById('email').value;
  if(email.length == 0) {
   alert("Email can't be blank") ;//Validation Message
    return false;
  }

  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    alert("Please enter a correct email address") ;//Validation Message
    return false;
  }
  return true;

}

function validateForm() {
  if (!validateName() || !validateMessage() || !validateEmail()) {
   // alert("Form not submitted");//Validation Message
    $('#myalert').show('fade');
      setTimeout(function(){
      $('#myalert').hide('fade');
      },9000);

      $('#myalertancor1').click(function(){
          $('#myalert').hide('fade');
      })
    return false;
  }
  else {
    submitted=true;
    return true;
  }
}

function ChangeTheme(colors) { 
    document.body.style.background = colors;
    if(colors == '#141622'){
      document.body.style.color = 'rgb(248, 252, 252)';
      document.getElementById('Skills').style.background = '#141622',
      document.getElementById('contact').style.background = '#141622';
      document.getElementById('hello').style.background = 'rgb(0, 0, 0)';
      document.getElementById('giticon1').style.background = 'rgb(255, 255, 255)';
      
    }else{
      document.body.style.color = 'rgb(0, 0, 0)';
      document.getElementById('Skills').style.background = 'rgb(255, 255, 255)';
      document.getElementById('contact').style.background = 'rgb(255, 255, 255)';
      document.getElementById('hello').style.background = 'rgb(218, 218, 226)';
      document.getElementById('giticon1').style.background = 'rgb(255, 255, 255)';
    }
  }