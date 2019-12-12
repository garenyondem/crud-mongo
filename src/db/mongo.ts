import mongoose, { ConnectionOptions } from 'mongoose';
import config from '../config';
import { MONGOOSE_EVENT, NODE_ENV } from '../utils/Enums';

const options: ConnectionOptions = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
};

if (config.node.env == NODE_ENV.DEVELOPMENT) {
    mongoose.set('debug', true);
}

mongoose.connection
    .on(MONGOOSE_EVENT.CONNECTED, () => {
        console.info('Mongo connection successful');
    })
    .on(MONGOOSE_EVENT.ERROR, (err) => {
        console.error(`Mongo connection error ${err}`);
    });

const init = async () => {
    await mongoose.connect(config.mongo.uri, options);
};

export default init;
