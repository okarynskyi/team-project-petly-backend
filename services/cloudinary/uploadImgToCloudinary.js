const cloudinary = require('./cloudinary');
const fs = require('fs');

const uploadImgToCloudinary = async (req, w, h) => {

    let imageURL = null

    if (req.file) {
        const path = req.file.path
        

        const uploader = async (path) => await cloudinary.uploads(path, 'Images')

        const newURL = await uploader(path)

        fs.unlinkSync(path)

        const id = newURL.id

       imageURL = await cloudinary.createImageTag(id, w, h)
    }
    

    
    
    
    return imageURL
}

    module.exports = uploadImgToCloudinary;