const { spawn } = require('child_process');
const path = require("path");

// var filePath = path.join(__dirname, "videos/sample1.mp4");
// var output = path.join(__dirname, "videos");
// var quality = 720;

var cmd = 'ffmpeg';

var args = [
    '-i', path.join(__dirname, "videos/sample2.mp4"),
    '-vf',
    'fps=1',
    'bmp/ out%d.bmp'
];

var proc = spawn(cmd, args);

proc.stdout.on('data', function(data) {
    console.log(data);
});

proc.stderr.on('data', function(data) {
    console.log(data);
});

proc.on('close', function() {
    console.log('finished');
});