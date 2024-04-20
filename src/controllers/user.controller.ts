import {UserModel} from '../db/user'
import mongoose from 'mongoose'

export function getUsers() {
    UserModel.find()
} 
export function getUserEmail(email : string) {
    UserModel.findOne({email : email})
}
export function getUserBySessionToken(sessionToken : string) {
    UserModel.findOne({
        "authentication.sessionToken" : sessionToken
    })
}
export const getUserById = (id : string) => UserModel.findById(id);
export const createUser = (values : Record<string, any> ) => new UserModel(values).save().then((user) => user.toObject
export const deleteUserById = (id : string) => UserModel.findOneAndDelete({ _id: id })
