// getting the filesystem module
const fs = require('fs')


// creating a file and writing text in it 
fs.writeFile('message.txt', 'Hello there node', (err) => {
    if(err) throw err
    console.log('file has been written')
})

// fetching the file and retrieving its data (the text inside the file)
fs.readFile('./message.txt', 'utf8', (err,data) => {
    if (err) throw err
    console.log(data)
})