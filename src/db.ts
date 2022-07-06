import { Pool } from 'pg'
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool( {
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: Number(process.env.PORT),
    database:  process.env.DATABASE
})

export default pool;






