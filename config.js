var path = require('path'),
    config;

config = {
    production: {
        url: 'http://blog.hdi.io',
        mail: {
          transport: 'sendmail',
          fromaddress: 'ghost@',
          options: {}
        },
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
            host: '10.0.0.21',
            port: '2368'
        },
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    }
};
module.exports = config;
