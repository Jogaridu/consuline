const multer = require("multer");

module.exports = multer({
    storage: multer.memoryStorage(),
    limits: 1024 * 1024
});