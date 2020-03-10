const config = require('./config');
const app = require('./app');
const database = require('./database');

database().then(
    info => {
        console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
        app.listen(config.PORT, () => console.log(`Example app listening on port ${config.PORT}!`));
    },
    error => {
        console.error('Unable to connect to database');
        process.exitCode = 1;
    }
);
