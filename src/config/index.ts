import dotenv from 'dotenv-safe';
import { NODE_ENV } from '../utils/Enums';

try {
    dotenv.config();
} catch (err) {
    console.error(`Config load error ${err}`);
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
