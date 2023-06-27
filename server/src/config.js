import {config} from 'dotenv'

config()

export const PORT = process.env.PORT 
export const TOKEN_KEY = process.env.TOKEN_KEY
export const PORT_CLIENT = process.env.PORT_CLIENT