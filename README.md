This repositry is about exploring how to convert a video to any image format on the frame mentioned.

First we need to understand what is streaming.

Streaming is a collection of data (it can be array/number/string) but whose length is not known and not stored in memory.

So to understand more on streaming with live example see code in app.js

app.js

In app.js I am using express framework to serve the requests from client and i am running the server on port 3005.
We have videos folder where I have placed to videos sample1.mp4 and sample2.mp4.
We have simple "get" route with path and query string ("/api/playvideo/:videoname") which serves video to client with content type video/mp4.
Now run app.js by command node app.js.
Go to browser open http://localhost:3005/api/playvideo/sample2.mp4 or

 http://localhost:3005/api/playvideo/sample1.mp4

 you can see the streaming . How? You can see video below loading in chunks try to drag the video it will not allow as video is not loadded completly.
 
 To achieve this I have used nodejs's fs module which will create stream and pipe function which will serve the streamed data.

 Yes I know this is not the assignment but I explored this while doing this assignment.

 Now moving on to assignment:

 "decode the video stream of an mp4 file and save the decoded images to local directory in bmp format".

 To achieve this first I thought let me split videos into chunks then convert to image. But couldnt achieve it.
 Then i used fs modules readable to achieve same, I was able to generate chunks but not able to convert them to image.

 



