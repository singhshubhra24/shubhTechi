Template.loginform.onRendered( function() {
  $( '#form2' ).validate({
    rules :{
email: {
  required: true,
  email: true
},
pass: {
  required: true,
  minlength:6,
}
}
})
})
Template.loginform.events({
  'submit form#form2' : function(e){
    e.preventDefault();
    var email1 = $('#email').val();
    console.log(email);
    var password1 = $('#pass').val();
    console.log(password1);

    var input1 = {

      'email_Address1': email1,
      'pasword1': password1
    }
    Meteor.call('signin', input1, function(error,value){
      if(error){
        alert("error");
      }
      if(value==false)
      {
        alert("wrong pass");
        //window.location.reload();
      }
      else if (value==true){
         console.log(value );
          Router.go('/success')
      }
    })
}
})
