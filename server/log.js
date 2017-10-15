// import { Meteor } from 'meteor/meteor';
Meteor.methods({
  'signup' : function(input){
    // console.log(e, p)
var y=Boxes.find({email_Address:input.email_Address}).fetch();

if(y.length>0){
return false;
}
else{

  Boxes.insert(input);
//var y=details.find({email:$('#email').val()})
  Boxes.update(
      { "contact" : "7777777777" },
        {
          $set: { "contact": "0000000000" },

        }
    )
//Boxes.remove({contact: "0000000000"})
//Boxes.deleteOne( { contact: "0000000000" })

  var x=Boxes.find({ contact: "0000000000"}).fetch();

return true;
  }
}
})
