import { Meteor } from 'meteor/meteor'
import { Notes } from '../both/collections/notes'

Meteor.startup(() => {

	//We can trace the origin of Notes via the import above
	Notes.remove({})
  Notes.insert({title: "My test note"})
})
