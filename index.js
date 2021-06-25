const http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Hello World ! Rohit Kashyap Sharma</h1>");
    res.end();
}).listen(process.env.PORT|| 5500);