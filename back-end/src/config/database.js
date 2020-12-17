module.exports = {
  url:
    process.env.DATABASE_URL ||
    "postgres://postgres:bcd127@localhost:5432/bdconsuline",

  config: {
    dialect: "postgres",
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
