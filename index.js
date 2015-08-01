var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.get('/qwerty-hancock.js', function(req, res){
  res.sendfile('qwerty-hancock.js');
});
app.get('/react-with-addons.js', function(req, res){
  res.sendfile('react-with-addons.js');
});
app.get('/JSXTransformer.js', function(req, res){
  res.sendfile('JSXTransformer.js');
});
app.get('/qwerty-hancock.js', function(req, res){
  res.sendfile('qwerty-hancock.js');
});

app.get('/controls', function(req, res){
  res.sendfile('controls.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('controls connected', function(msg){
    io.emit('controls connected', 'hi');
  });
  socket.on('orientation', function(msg){
    io.emit('orientation', msg);
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
