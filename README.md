## CRUD Mongo

This is a simple Node.js rest api demonstrating create, read, update and delete (CRUD) operations againts a mongodb instance hosted inside docker container. 

### Getting started
Make sure you have Node.js v12.13+ and Docker installed.

Pull and run the docker image for mongodb.
```
$ docker run -d -p 27017:27017 --name mongo-instance mongo
```

Navigate to projects folder and create a new .env file with similar content as .env.test. Then you are ready to install the application dependencies and start the service.
```
$ npm i
$ npm run dist
$ npm start
```

Voila! If everything goes well you should have a Node.js app with db connection up and running.

You can now test endpoints with Postman link below. Don't forget to replace postId parameter in the URL's though.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/13cbe050a178ed614cd1)
