import { Meteor } from 'meteor/meteor'
import { Notes } from '../imports/both/collections/notes'

//import npm packages
import faker from 'faker'
import _ from 'lodash'

Meteor.startup(() => {

  //define a function that returns a fake note
	const insertNote = () => Notes.insert({ title: faker.hacker.phrase() })

  //clear out any existing notes
	Notes.remove({})

	//use lodash to create 10 notes
  _.times(10, insertNote)

})
