module.exports = {
  url:
    process.env.DATABASE_URL ||
<<<<<<< HEAD
    "mysql://root:bcd127@localhost:3306/bdconsuline",

  config: {
    dialect: "postgres",
  //   dialectOptions: {
  //     ssl: true
  // },
=======
    "postgres://postgres:bcd127@localhost:5432/bdconsuline",

  config: {
    dialect: "postgres",
>>>>>>> afc168bcd886ec11bf0b5938289e559842930d20
    logging: console.log,
    define: {
      timestamp: true,
      underscores: true,
    },
  },

  // dialect: "mysql",

  // host: "localhost",

  // username: "root",

  // password: "bcd127",

  // database:
  //   process.env.NODE_ENV === "test" ? "bdConsuline_test" : "bdConsuline",

  // define: {
  //   timestamp: true,
  // },
};
