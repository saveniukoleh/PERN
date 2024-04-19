const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Nippon14042001",
    host: "localhost",
    port: 5432,
    database: "perntodo"
})

module.exports = pool