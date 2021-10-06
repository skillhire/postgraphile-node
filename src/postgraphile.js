var parseUri = require('parse-uri')
const { postgraphile } = require('postgraphile')

const { DATABASE_URL } = process.env

const uri = parseUri(DATABASE_URL)

module.exports = postgraphile(
    {
        database: uri.path.substring(1),
        user: uri.user,
        password: uri.password,
        host: uri.host,
        port: uri.port,
        ssl: 'no-verify'
    },
    'public',
    {
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true,
    }
)
