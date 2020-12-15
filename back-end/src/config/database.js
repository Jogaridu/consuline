module.exports = {
  url:
    process.env.DATABASE_URL ||
    "postgres://llwcpkhvgmfysyc:9cf71c6356db552342496bd7cb3abf4c5016a09b682476ea0fc20c3c5881474d@ec2-3-218-123-191.compute-1.amazonaws.com:5432/d131i294ftrbv3",

  config: {
    dialect: "postgres",
	dialectOptions: {
    "ssl": true
	},
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
