import mongoose from 'mongoose'
import {URL_MONGODB} from './config.js'

export const connectDb = async () => {
    try {
        await mongoose.connect(URL_MONGODB)
        console.log('Conexion exitosa')
    } catch (error) {
        console.log(error)
    }
}