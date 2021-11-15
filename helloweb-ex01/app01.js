const http = require('http');
const port = 8080;
const server = http.createServer(function(req, resp){
    
    resp.writeHead(200,{
        'content-Type':'text/html'
    });

    resp.end('<h1>hello world</h1>')

});

server.listen(port,function(){
    console.log(`http server running on ${port}`);
});