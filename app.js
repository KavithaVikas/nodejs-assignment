const express = require("express");
const app = express();
const mediaserver = require('mediaserver');
const path = require('path');
const fs  = require('fs');

app.get("/", (req, res)=>{
    res.send("hello world!");
})

app.get("/api/playvideo/:videoname", (req,res)=>{
    res.writeHead(200, {"content-type":"video/mp4"})
    var videoPath = path.join(__dirname, "videos", req.params.videoname);
    var rs = fs.createReadStream(videoPath);
    rs.pipe(res);
})

app.listen(3005,()=>{
    console.log("Server listening on port 3005");
})