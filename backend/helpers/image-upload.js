const multer = require('multer')
const path = require('path')

//Destinations to store the images
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {

    let folder = ""
    
    if(req.baseUrl.icludes('users')){
      folder = 'users'
    }else if (req.baseUrl.includes("")){
      folder = 'outros'
    }
    cb(null, `public/images/${folder}`)
  },
    
  filename: function (req, file, cb){
      cb(null, Date.now() + path.extname(file.originalname)) // O nome vira como data em mile segundos
  },
  })
  const imageUpload = multer({
    storage: imageStorage,
    fileFilter(req, file, cb){
      if(!file.originalname.match(/\.(png|jpg|pdf)$/)){
        return cb(new Error('Por favor, envie apenas jpg ou png'))
      }
      cb(undefined, true)
    },
  })

  module.exports = { imageUpload }