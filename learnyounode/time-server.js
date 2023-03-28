const net = require('net');

const server = net.createServer(socket => {
  const date = new Date();
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());
  const hour = padZero(date.getHours());
  const minute = padZero(date.getMinutes());

  socket.end(`${year}-${month}-${day} ${hour}:${minute}\n`);
});

const  padZero = (number) => {
  return number < 10 ? `0${number}` : number;
}

server.listen(process.argv[2]);
