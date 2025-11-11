import { config } from 'dotenv';

config({
    path:
        `.env.${process.env.NODE_ENV || 'development'}.local`,
})

export const { PORT,
     DB_URI,
     JWT_ACCESS_SECRET, JWT_REFRESH_SECRET,
     ARCJET_KEY,ARCJET_ENV,
     EMAIL_PASSWORD
     } = process.env