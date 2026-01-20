import pkg from 'pg';
const {Client} = pkg;
import dotenv from 'dotenv';
import 'dotenv/config'

dotenv.config();

const pool = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'hall_booking',
  password: "hall123",
  port: 5432
});
pool.connect();

export default pool;
