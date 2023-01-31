const cloudinary = require('cloudinary');
const dotenv = require('dotenv');
const { CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

dotenv.config();

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
});

exports.uploads = (file, folder) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) => {
            resolve({
                url: result.url,
                id: result.public_id
            })
        }, {
            resource_type: "auto",
            folder: folder
        })
    })
}

exports.createImageTag = async (publicId, w, h) => {

    let imageTag = cloudinary.image(publicId, {
      transformation: [
        { width: w, height: h, gravity: "auto", crop: "fill"},
      ],
    });

    return imageTag;
};

