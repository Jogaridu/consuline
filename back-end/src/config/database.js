module.exports = {
  url:
    process.env.DATABASE_URL ||
    "mysql://root:bcd127@localhost:3306/bdconsuline",

  config: {
    dialect: "postgres",
  //   dialectOptions: {
  //     ssl: true
  // },
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
