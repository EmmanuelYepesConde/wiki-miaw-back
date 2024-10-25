import {prop, getModelForClass} from '@typegoose/typegoose'
import { PersonalInfoEntry } from '../types'

class sessionData {
    @prop({ required: true, unique: true })
    email: string

    @prop({ required: true })
    password: string
}

class User {
    @prop({ required: true })
    userName: string

    @prop()
    personalInfo: PersonalInfoEntry

    @prop({ required: true })
    sessionData: sessionData
}

const UserModel = getModelForClass(User);

export default UserModel;