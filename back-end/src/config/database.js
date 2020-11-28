module.exports = {

    dialect: "mysql",

    host: "localhost",

    username: "root",

    password: "bd137",

    database: process.env.NODE_ENV === "test"? "bdConsuline_test" : "bdConsuline",

    define: {

        timestamp: true,

    }
}