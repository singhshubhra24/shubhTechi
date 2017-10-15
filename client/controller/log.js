Template.log.onRendered( function() {
  $('#mydatepicker').datepicker({
    format: 'mm/dd/yyyy',
    //startDate: '04-12-2018',
    //endDate:'04-12-2020'
    //assumeNearbyYear:
  });

  $( '#form1' ).validate({
    rules :{
      first:{
        required:true,
        //rangelength:[4,20],
        pattern:/^[A-Za-z ]{0,20}$/
        //accept:[a-zA-Z]
      },
      last:{
        required:true,
        rangelength:[4,20]
      },
      contact:{
        required:true,
        digits:true,
      //  minlength:10,
        rangelength:[10,10]
      },
      email: {
        required: true,
        email: true,
        rangelength:[15,40]
      },
      pwd: {
        required: true,
        minlength:7
      },
    datepick:{
        required:true
      },
      cin:{
        required:true,
        pattern:/^([L|U]{1})([0-9]{5})([A-Za-z]{2})([0-9]{4})([A-Za-z]{3})([0-9]{6})$/
      }
    }
    // messages: {
    //   email: {
    //     required: "Please enter your email address to login.",
    //     email: "Please enter a valid email address."
    //   },
    //   pwd {
    //     required: "Please enter your password to login."
    //   }
    // },
  });
});

Template.log.events({
  'submit form#form1' : function(e){
    e.preventDefault();
    var first=$('#first').val();
    console.log(first);
    var last=$('#last').val();
    console.log(last);
    var contact=$('#contact').val();
    console.log(contact);
    var email = $('#email').val();
    console.log(email);
    var password = $('#pwd').val();
    console.log(password);
    // var date=&('#mydatepicker').val();
    // console.log(date);
    // var cin=&('#cin').val();
    // console.log(cin);


    var patt = new RegExp("^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])[a-zA-Z0-9@#$%^&+=]*$");

    var res = patt.test(password);
console.log("Is regular matches:", res);
if(res==false){
  alert("a password must be eight characters including one uppercase letter, one special character and alphanumeric characters");
}
    var input = {
      'first': first,
      'last': last,
      'contact': contact,
      'email_Address': email,
      'pasword': password,
      'datepick':date
    }

    Meteor.call('signup', input, function(error,value){
      if(error){
        alert("error");
      }
      else if(value==false)
      {
        alert(" email id is already registered");
        window.location.reload();
      }

      else{
      //  alert(value);
      console.log(value );
        Router.go('/')
      }
    })
//}
}
})
