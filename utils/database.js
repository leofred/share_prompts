import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async () => {
  mongoose.set('strictQuery', true)

  if (isConnected) {
    return console.log('MongoDB is already connected')
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.MONGODB_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    isConnected = true
    console.log('MongoDB connected!')
  } catch (error) {
    console.log(error)
  }
}
