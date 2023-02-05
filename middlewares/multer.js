const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const __dir = path.join(__dirname, "uploads")
        cb(null, __dir)
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.toLowerCase()
        cb(null, fileName)
    }
})

const upload = multer({ storage })
module.exports =upload 