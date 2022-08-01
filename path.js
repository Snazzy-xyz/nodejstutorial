// requiring the path module 
const path = require('path')

// joining the path for dirname and app.js together
const fileLocation = path.join(__dirname, 'app.js')

const fileName = path.basename(fileLocation)

// excecuting the file location
const fileExt = path.extname(fileName)

console.log(fileExt)