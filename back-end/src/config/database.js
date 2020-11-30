module.exports = {

    dialect: "mysql",

    host: "localhost",

    username: "root",

    password: "bcd127",

    database: process.env.NODE_ENV === "test" ? "bdConsuline_test" : "bdConsuline",

    define: {

        timestamp: true,

    }
}