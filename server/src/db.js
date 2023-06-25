import mongoose from 'mongoose'

export const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mundidb')
        console.log('Conexion exitosa')
    } catch (error) {
        console.log(error)
    }
}