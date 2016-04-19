import { Meteor } from 'meteor/meteor'

//Here, we see an example of ES6 arrow (=>) function syntax, same as function(){}, but has implicit return and carried scope
Meteor.startup(() => {

	//Here, we are 'magically' able to reference Notes that we created elsewhere.
  Notes.remove({})
  Notes.insert({title: "My test note"})
})
