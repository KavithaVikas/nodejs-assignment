let fs = require('fs');
let path = require('path');

var filePath = path.join(__dirname,"videos/sample1.mp4");
var readable = fs.createReadStream(filePath);
var i = 0;
readable.on('readable', () => {
  var chunk;
  while(null !== (chunk = readable.read(1048576))) {
    var fd = fs.openSync('chunk' + i++, 'w');
    fs.writeSync(fd, chunk, 0, chunk.length);
  }
});