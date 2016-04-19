import { Meteor } from 'meteor/meteor'

//Here, we see an example of ES6 arrow (=>) function syntax.
// It is the same as function(){}, but it has an implicit return and scope is carried into the function.
Meteor.startup(() => {

	//Here, we are 'magically' able to reference Notes that we created elsewhere.
  Notes.remove({})
  Notes.insert({title: "My test note"})
})
