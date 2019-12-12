import dotenv from 'dotenv';
import { NODE_ENV } from '../utils/Enums';

const envFound = dotenv.config();
if (!envFound) {
    console.error('Could not find .env file or it is not specified');
    process.exit();
}

process.env.NODE_ENV = process.env.NODE_ENV || NODE_ENV.DEVELOPMENT;

export default {
    node: {
        env: process.env.NODE_ENV,
        port: process.env.NODE_PORT || '',
    },
    mongo: {
        uri: process.env.MONGO_URI || '',
    },
};
