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

2) MongoDb add user
    - go to database access
    - we can set up like who can access our database here.
    - here Mongodb use scrum for authentication. What is scrum authentication btw?
    - what will happen if we never add any user in the database access control?


       















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




