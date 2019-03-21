var HLSServer = require('./node_modules/hls-server')
var http = require('http')
var httpAttach = require('http-attach')
var fs = require('fs')
var url = require('url')
 
var testServer = http.createServer()

function render(req, res, file)
{
    
    fs.readFile(file, (error, data)=>{

        if(error)
        {
            res.writeHead(404)
            res.write('Not Found')
        }
        else 
        {
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write(data)
        }
        
        res.end()

    })

}

function main(req, res, next){

    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()

    if(path==''){render(req, res, 'templates/index.html')}
    else if(path =='/test0'){render(req, res, 'templates/test0.html')}
    else if(path == '/test1'){render(req, res, 'templates/test1.html')}
    else {next()}
}

var hls = new HLSServer(testServer, {
     path: '/streams',     // Base URI to output HLS streams
     dir: 'public/videos'  // Directory that input files are stored
 })

 httpAttach(testServer, main)

testServer.listen(8000)