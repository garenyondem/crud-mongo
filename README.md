## CRUD Mongo

This is a simple Node.js rest api to demonstrate, create, read, update and delete (CRUD) operations againts a mongodb instance.

### Getting started

Make sure you have Node.js v12.18+ and Docker installed.

Pull and run the docker image for mongodb.

```
$ docker run -d -p 27017:27017 --name mongo-instance mongo
```

Navigate to projects folder and create a new .env file with similar content as .env.test. Then you are ready to install the application dependencies and start the service.

```
$ npm i && npm run dist && npm run start
```

or simply run

```
$ docker-compose up
```

If everything goes well you should have a Node.js app with Mongo connection up and running.

You can now test endpoints through Postman link below. Don't forget to replace postId parameter in the URL's though.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/13cbe050a178ed614cd1)
