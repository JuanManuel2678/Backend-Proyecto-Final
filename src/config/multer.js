import multer from "multer"


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
      },
      filename: function (req, file, cb) {
        const newName = file.originalname
        cb(null, newName)
      }
})

const imageFilter = (req, file, cb) => {

    const { mimetype } = file
    if (mimetype.includes('image')) {
        cb(null, true)
    } else {
        cb(new Error('Solo Archivos JPG y PNG '))
    }
}
export const uploadsImage = multer({ storage: storage, fileFilter: imageFilter})