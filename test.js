const fs = require('fs');
const VideoLib = require('node-video-lib');
 
fs.open('videos/sample1.mp4', 'r', function(err, fd) {
    try {
        let movie = VideoLib.MovieParser.parse(fd);
        let fragmentList = VideoLib.FragmentListBuilder.build(movie, 5);
        for (let i = 0; i < fragmentList.count(); i++) {
            let fragment = fragmentList.get(i);
            let sampleBuffers = VideoLib.FragmentReader.readSamples(fragment, fd);
            let buffer = VideoLib.HLSPacketizer.packetize(fragment, sampleBuffers);
            console.log(buffer.length);
            //console.log(JSON.stringify (buffer));
            // // Now buffer contains MPEG-TS chunk
            fs.writeFile('test.bmp', buffer[0], 'binary', function(err) {

            });
        }
    } catch (ex) {
        console.error('Error:', ex);
    } finally {
        fs.closeSync(fd);
    }
});