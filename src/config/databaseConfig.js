import dotenv from 'dotenv';

dotenv.config();

export default {
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  options: {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DIALECT,
    port: process.env.DATABASE_PORT,
  },
};
