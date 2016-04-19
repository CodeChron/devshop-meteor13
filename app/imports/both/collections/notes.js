//explicitly import Mongo, which is a dependency for creating a collection
import { Mongo } from 'meteor/mongo'


//export our Notes collection, making it available for import elsewhere
export const Notes = new Mongo.Collection('notes')