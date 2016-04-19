//This is an example of Meteor's 'magic' globals
//We are able to create a new MongoDb collection without explicitly pointing to the dependency for this action: Mongo.  Meteor handles that for us.

//Additionally, we are defining 'Notes' as a global variable, which will allow us to 'magically' reference it elsewhere in our app

Notes = new Mongo.Collection('notes')