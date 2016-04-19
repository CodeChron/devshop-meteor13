import { Meteor } from 'meteor/meteor'
import { Notes } from '../imports/both/collections/notes'

Meteor.startup(() => {

	//Here, we are 'magically' able to reference Notes that we created elsewhere.
  Notes.remove({})
  Notes.insert({title: "My test note"})
})
