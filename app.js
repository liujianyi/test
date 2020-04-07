
var app = require('http').createServer(handler).listen(3001)
var io = require('socket.io');
var ws = io.listen(app)
var fs = require('fs');



function handler (req, res) {
  //配置客户端入口文件路劲
  fs.readFile(__dirname+'/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}
//app.listen(3001);
ws.on('connection', function (socket) {
  
  socket.on('messages', function (data) {
    console.log(data);
    var datas=data.replace(/clien:/,"server:")
    socket.emit('news', datas);
  });
});
      
console.log("serve listening prot 3001")