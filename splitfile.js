const splitFile = require('split-file');
 
splitFile.splitFile(__dirname + '/videos/sample1.mp4', 5)
  .then((names) => {
    console.log(names);
  })
  .catch((err) => {
    console.log('Error: ', err);
  });