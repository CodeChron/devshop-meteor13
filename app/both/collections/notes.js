//An example of Meteor's 'magic' globals
//We are able to create a new Mongo  collection w/o explicitly pointing to the Mongo dependency.  Meteor handles that for us.

//Define 'Notes' as a global variable, allowing us to 'magically' reference it elsewhere 
Notes = new Mongo.Collection('notes')