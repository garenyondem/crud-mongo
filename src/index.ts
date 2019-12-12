import { default as connectMongo } from './db/mongo';
import http from 'http';
import app from './app';
import routes from './routes';
import config from './config';

connectMongo();

const server = http.createServer(app.callback());

app.use(routes());

app.listen(config.node.port, () => {
    console.info(`App listening on ${config.node.port}`);
});

process
    .on('uncaughtException', shutdown)
    .on('SIGINT', shutdown)
    .on('SIGTERM', shutdown);

function shutdown(err: any) {
    err && console.error(err);
    process.exit();
}
