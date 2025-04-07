//practice problem 1

/* 
Using PATCH is best for changing the marital status on a profile to "single" or "married".beacuse ,PATCH is used to update a specific field.So here only one filed has been changed without changing the entire profile, so patch has to be used here.

*/
// practice problem ans:2

/* To add new information to a database, HTTP methods are used because we typically interact with the database through web applications or APIs. For this communication, HTTP (HyperText Transfer Protocol) serves as a standard method that defines the rules for data exchange between a web server and a client.

To add new information, the HTTP POST method is generally used. The reasons are:
POST is the ideal HTTP method for creating new data.

With the POST method, we can send data in the body of the request, such as new user registration, adding a product, etc.

A POST request usually makes changes on the server, such as storing information in the database.

It is secure and flexible, as sensitive data can be sent in the body (although HTTPS should be used for additional security).
*/
// PRACTICE PROBLEM ANS:3

/* 
When watching a video on a website, many backend and frontend operations work together to enable the user to watch the video. Below is a step-by-step explanation of the entire process:
Request to play video:
1.When the user clicks the "Play" button, the browser sends an HTTP/HTTPS request to the server.

2.This request contains the URL of the specific video.
 The video server gives a response:
 1.The server starts sending chunks or the entire video file as requested by the user.

2.Sometimes the video is in a streaming format (e.g. HLS, DASH). In this, the video is divided into small parts (chunked), and each part is loaded separately.
 The browser decodes the video:
 1. The video file is downloaded from the server and then the video is decoded by the browser's built-in video decoder.

4. The video is then played on the user's screen.
Buffering and playback:
1. During playback, the browser may need to buffer or slow down the video to ensure smooth playback.
2. This buffering can be caused by various factors, such as network conditions, video quality, or the user's device.
3. The browser sends additional requests to the server to fetch additional chunks of the video as needed.

Caching and CDN:
1. To improve the performance of video streaming, the browser and server can use caching mechanisms.
2. The browser stores previously downloaded chunks of the video in the cache, and if the same video is requested again, the browser
Video resolution and bandwidth management:
1. The browser can adjust the video resolution and bandwidth to meet the user's requirements.
2. This can help reduce the video size and improve the video's playback speed.
 Audio and video synchronization:
 1. The browser and server need to synchronize the audio and video streams to ensure that the user can hear and see the same content simultaneously.
 Cache and local storage:
 1. The browser can store the video chunks locally on the user's device to improve the video's loading speed and reduce network usage.

 */
// PRACTICE PROBLEM ANS:4
 /*
 CRUD (pronounced “CARD” or “QRUD”) is an acronym for four basic operations used in a database or any data management system. It stands for:

C - Create → Create new data
 R - Read → Read or display data
 U - Update → Change existing data
 D - Delete → Delete data
 Create: When a new user registers, it is a Create operation.

Read: When a user views a user's profile, it is a Read operation.

Update: When a user updates their name or password, it is an Update operation.

Delete: When a user deletes their account, it is a Delete operation.
 */
// PRACTICE PROBLEM ANS:5
 /*
 there are five method in http protocol such as GET,POST, PUT, PATCH, DELETE
 Which of these methods work is discussed below:
 1.GET:getting data from server.
 2. POST:adding new data from the server.
 3.PUT: updating  complete data.
 4.patch: partial update data.
 5.delete:data delete data.

 */