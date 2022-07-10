import dotenv from 'dotenv';
dotenv.config();


const app_config = {
    env: process.env.NODE_ENV,
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        name: process.env.DB_NAME,
        server: process.env.DB_SERVER
    },
    port: process.env.APP_PORT || 3000
};

export default app_config;