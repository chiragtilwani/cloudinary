//create middleware/cloudinary

require("dotenv").config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
})

module.exports = cloudinary


//in controller to upload file on cloudinary

const { creatorId, desc, post } = req.body
let result;
try {
   result = await cloudinary.uploader.upload(post, { folder: "socialMedia" })
} catch (err) {
   return next(new HttpError("Could not upload your post", 500))
}
