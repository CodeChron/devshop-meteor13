//Here we are explicitly importing Mongo, which is a dependency for creating a Mongo.Collection
import { Mongo } from 'meteor/mongo'


//Here, we export our Notes collection, making it available for import elsewhere
export const Notes = new Mongo.Collection('notes')