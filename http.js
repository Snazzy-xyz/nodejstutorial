// fetching multiple different modules to help create and edit this server
const http = require('http') // http module allows us to create a server
const path = require('path') // path module allows to us to join different files
const fs = require('fs') // fs module helps us read and write files

// creating the http server
const server = http.createServer((req, res) => { //req = request, res = response

    // checking to see if the url of the request is on the same path
    if (req.url === '/') {

// proceed to use fs module and using path.join to concatenate the dirname with an external index.html file
        fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'}) // specify content type and http code on head
            res.write(data) // writing the data (text) from index.html file
            res.end() // closing of the response
        })

    }
    if (req.url === '/user') { // checking to see if user is on /user path
        res.write('welcome user') // responding with simple text
        res.end() // closing off response
    }

})

// sending a request on port 3000
server.listen(3000, () => console.log('server is up and running'));