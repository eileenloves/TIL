const http = require('http');

const data = {
  bf: 'Dimi',
  gf: 'Eileen'
}
const server = http.createServer((req,res) => {
  if(req.url === '/'){
    res.write('They are couple');
    res.end();
  }
  if(req.url === '/api'){
    res.write(JSON.stringify(data));
    res.end();
  }
});

server.listen(3000);
console.log('Listening on port 3000');
