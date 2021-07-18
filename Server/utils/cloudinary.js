const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "dikjommrr" ,
    api_key: 989558238125824,
    api_secret: "wFlu7mw5t4tNzo8E8GXtwfA7U28",
})

module.exports = cloudinary;