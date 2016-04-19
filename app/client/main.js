import { Template } from 'meteor/templating'
import { Notes } from  '../imports/both/collections/notes'

Template.my_notes.helpers({
  notes: () => Notes.find()
})
