import User from "../models/users-model";
import HttpCustomError from '../entities/exception-entity'
import { SessionDataEntry, UpdateUserEntry, userData } from '../types'
import { decrypt, encrypt } from "../utils/crypto";

const getUser = async ( email: string, isFromValidate = false) => {
    const queryDB = await User.findOne({ 'sessionData.email': email }).lean()
    
    if (!queryDB) throw HttpCustomError.notFound('User not Found')

    if (isFromValidate) return queryDB.sessionData

    return {
        userName: queryDB?.userName,
        personalInfo: queryDB?.personalInfo
    };
}; 

const createUser = async (data: userData) => {
    data.sessionData.password = encrypt(data.sessionData.password)

    const user = new User(data)
    await user.save();

    return ""
};

const updateUser = async (userToUpdate: string, body: UpdateUserEntry) => {
    const queryDB = await User.findOneAndUpdate({ 'sessionData.email': userToUpdate }, body)
    
    if (!queryDB) throw HttpCustomError.notFound('User not Found')
        
    return ''
}

const validateUser = async (body: SessionDataEntry) => {

    const { email } = body;

    const userInfoSession: SessionDataEntry = await getUser(email, true) as unknown as SessionDataEntry

    if (!userInfoSession) throw HttpCustomError.notFound('User not Found')

    if (decrypt(userInfoSession.password) === body.password)  throw HttpCustomError.unauthorized('Invalid Credentials')

    return true
};

export {
    getUser,
    createUser,
    updateUser,
    validateUser
}