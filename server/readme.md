GENERAL
npm 
- If you wish to run package through npm then you have to specify that package in your package.json and installed it locally.
- To use create-react-app in npm the commands are npm install create-react-app then create-react-app myApp(Installation required).
- Npm is a tool that use to install packages.
- Packages used by npm are installed globally you have to care about pollution for the long term.

npx
- A package can be executable without installing the package, it is an npm package runner so if any packages that aren’t already installed it will installed automatically.
- But in npx you can use that without installing like npx create-react-app myApp, this command is required in every app’s life cycle only once.
- Npx is a tool that use to execute packages.
- Packages used by npx are not installed globally so you have to carefree for the pollution for the long term. 


________________________________________________________________________________________________________________________________________________________________________

SERVER
in server side of the application, we npm install the following package
    1) body-parser - this package is use to parse the format of the web response into Json readable document
    2) cors - enable cross origin process (what is this?)
    3) express - this is use to facilitate the building of the backend application, without the express we will need to use more difficult syntax for the building of server
    ***********************************************************************************************************************************************
                 (here look for example of the server without using express and with express) framework for routing of the process
    ***********************************************************************************************************************************************
    4) mongoose - this is use to build the schema of the database (model of the application)
    5) nodemon - this package is use to keep the server spinning and auto update the code when we developing our code without the need to restart the application


//how do we use the import statement instead of the usual const express = require('express')?
-- How do we make connection to web application without using express?
1) why do we want to use the import statement?
    - to use it we need to go to package.json and add one line after the "main" : "index.js",
    - add "type" : "module",


2) Here in the video tutorial it mention that we need to delete the test under script and change to "start":"nodemon index.js",
***********************************************************************************************************************************************
        deleted script " //"test": "echo \"Error: no test specified\" && exit 1" "
        (here in the package.json file we mention that we have a test script, find online regarding what is the test script used for)
***********************************************************************************************************************************************
    - the script section in package.json file is actually what do we want to execute using npm command
    - example if we want to run our server.js using nodemon, we can specify the code we want to execute on terminal
    - eg "start":"nodemon index.js" meaning we run npm start in terminal it will execute nodemon index.js in terminal
    - we can also run the nodemon index.js in terminal directly in the terminal
3) how import is better than the const express = require('express') statement?


From 9:30 minutes onwards
1) first we need to initialize our app by creating an instance call app
    const app = express();
2) next do some general setup. We going to tell app to use body-parser. Now all the instance of app will have access to use the body-parser library 
    *** app.use(body-parser)
    - here in the latest version of express, body parsing has become builtin with express So, simply use:

        app.use(express.json()) //For JSON requests
        app.use(express.urlencoded({extended: true}));
        from directly express

    - You can uninstall body-parser using npm uninstall body-parser

    *** app.use(express.urlencoded({limit: "50mb, parameterLimit: 50000000}));
    - what does this line mean?
    1) - app.use(express.json({"limit: "30mb", extended: true}));
        a. express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json());
        b. limit	Controls the maximum request body size. If this is a number, then the value specifies the number of bytes; if it is a string, the value is passed to the bytes library for parsing.	Mixed	"100kb"
        c. There are no extended=true in express.json()
    2) -  app.use(express.urlencoded({ limit: "50mb", parameterLimit: 500000000 }));
        a. urlencoded query is explained in this link: https://dev.to/sidthesloth92/understanding-html-form-encoding-url-encoded-and-multipart-forms-3lpa
        
        b. so our application server should be able to handle this kind of request body. Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option. This parser accepts only UTF-8 encoding of the body and supports automatic inflation of gzip and deflate encodings.

        A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body). This object will contain key-value pairs, where the value can be a string or array (when extended is false), or any type (when extended is true).
        
        c. The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded. For more information, please see the qs library.

        Defaults to true, but using the default has been deprecated. Please research into the difference between qs and querystring and choose the appropriate setting.
        
        d. The parameterLimit option controls the maximum number of parameters that are allowed in the URL-encoded data. If a request contains more parameters than this value, a 413 will be returned to the client. Defaults to 1000.
    3) app.use(cors())
       - what is cors?
        a. cors is cross origin scripting, meaning using this you can control whether that is possible for other website from other domain to cross reference your website, meaning can they take picture or somthing from your website to their website


MongoDB connection
- Questions before this section?
  ~ How are we suppose to place the mongodb connection in our files? where is the better place to establish the connection?

1) mongodb cloud atlas
    - for learning purpose, choose the shared free version of database
    - here, how do we make it a deployable database server like production environment database?
    - how are we going to make different database for scalability and reliability?

2) MongoDb add user && add network access
    - go to database access
    - we can set up like who can access our database here.
    - here Mongodb use scrum for authentication. What is scrum authentication btw?
    - what will happen if we never add any user in the database access control?

    -set up the use access and network access

3) -why do we use mongoose to connect to the database?
   -how do we connect to database without using the mongoose?

4) Establish connection for the backend
    - below are the steps require to set up connection to backend server application
    - first, import all the require frameworks and library such as express, mongoose, cors.., al this libraries is under node
    - then create and app instance using express (look for how to set up and app instance without using express)
    - then, we need to specify the middle we want to use, in our case, we use express.json which accept the req in json format
    - we also use middleware such as urlencoded to turn the url format to string in req
    - then we can also specify what middleware we want to use for our app instance by app.use().. app.use() will apply the middle ware to the whole backend
    - then after that we configure and set up the database connections
    - specify the url where the database are hosted, pass in the credentials and ports.
    - then we use mongoose to create the connection to the database, here we need to handle the error by the try and catch statement
    - after we connect to database we can finnaly run pur server.
    - we can do it by putting a callback function after we connected to our database by using .then
    - thn after that we can set all the deprecated configuration by using mongoose.set()....
    - besides doing both the app.listen and also database connection in one file, we can also have another file specially for database connection, after that we can import the connected instance here and we make our app listen to the instance


    *****************************************************************************************
    Things that need to be clarify:

    1) i need to go and study about some construct of javascript, like promises, callback functions, async and sync function. What is .then() . catch().
    2) how the router.get('/, (req,res) => {}) works?

    *****************************************************************************************

Part 3 Router
1) set up a folder call routes, where in here we specify all the routes available in our application
2) by using express.Router()
3) here we introduce a callback function mechanism, we need o have the knowledge of how javascript run, it is a interpret language where it runs line by line.
4) hence when we pass in the callback function in a function, it will run line by line
5) in our example we can say: 
        router.get('/', (req, res) => {

        });
        meaning: when we trying to get the url '/', if it successful, we run the annonymous function which have two parameters req and res.
        - the two paramaters will be returned by get '/' if we successfully get the data from the get.
        - how do the second callback function get the req and res object?
        - and let's say we have 4 parameters instead of just two req and res, how do callback function know eaxactly which one to pass to the function, does the order matter to the callback function?

        - ps i tried to change the position of the req and res position, it does make a difference
        - now my question is, how should we know like which argument should be in which position/

    Answer: The order of the parameters is very important. First is request, second is respond, third is next(middleware)

    If we want to specify the error handling function we cannot do it here! Very important

    Callback function in router.get can only have three arguments

Part4 Controller Folder
1) Now we should move our application logic into the controller folder instead of cramping everything into the route folders
2) Why do we even need a controller folder, why dont we just put everything inside of route?
    - because we dont want to have logic under the route folder, just keep routing inside the route folder is enough and we move all the logic and function into the controller folder
3) after we write the function in the controller, we need to export the function in the controller folder 
    - how do we export more than one function at once in node?
4) after that, we need to import the function that we want to use in route from controller folder.


Part5 ModelFolder (This is for databse schema)
1) model is a folder where we build our database schema
2) we use mongoose here to build our database model. 

**********************
Questions: why mongoose is used here and how do we build a schema without using mongoose?
***************************

3) use mongoose.schema to build the schema and then we use mongoose.model to build the model, by passing in the name for the model and also the schema to constuct a model instance.

4) How do we use the schema?







       















________________________________________________________________________________________________________________________________________________________________________

CLIENT
Installation package:
    1) axios 
    2) moment
    3) react-file-base64 (use for maintaining the images)
    4) redux
    5) redux-thunk  - asynchronous actions using redux

_ After the installation of the packages, we delete the src folder and create a new version of src by our self.

***********************************************************************************************************************************************
        deleted folder : src
        (here, I can reinitialize create react app to look and investigate this folder and what are the meaning of all the files)
***********************************************************************************************************************************************

- How npm start know how to execute the command to start the front end application? what does react-script does?

Setup of file:
1) Index.js is the entry point for our front end application
    - when you specifies index.js as your starting point, in your package.json file you should have set a npm start is equal to npm index.js
    - we do not have to specified npm index.js because npm start which run reaact-script start already have the function running (what do react-script start do?)
    - index.js file is the entry point file for us to connect our react application to the html file in the public folder
    - see inside the react folder, you will notice that 
    (learn how react-dom get the getElementById from the index.html file), what reactDOM.render do
2) 