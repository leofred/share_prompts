import { Schema, model, models, Model } from 'mongoose'

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already in use!'],
    required: [true, 'Email is required!']
  },
  name: {
    type: String,
    required: [true, 'Username is required!']
  },
  image: {
    type: String
  }
})
const User: Model<Schema> = models.User || model('User', UserSchema)

export default User