# Blog-Post-Website
A blog posting webiste using node.js

## Short Notes While learning  (Not For Beginners)(Should know some amount of node to understand this)

node js
Global object
global.setTimeout / setTimeout -> same thing

console.log(__dirname);  //give the current directory name
console.log(__filename); //give current file name in end of dir



localhost uses a IP called Loopback IP

localhost ------> 127.0.0.1--
				    |
Own computer <---------------

NPM packages ->
lodash -> utility lib
nodemon -> help with dev workflow so we dont have to keep restarting server manually. We isntall it globally for better use

package-json file -> keep track of any packages we install locally to our project and other things like project details and any kind of project sepcific scripts. We should definately use it if we using any 3rd party package in project
We do it by -> NPM init. it initailize the package

note: package-lock.json ->keep tracks of different depedencies versions that we have installed in our project.

package-json file -> it has "dependecies". So when i share my code to someone i dont have send the node_modules folder, only package.json file will work as it contains the dependecies. Now in terminal we just have to run "npm install" and it will downlaod all the specified dependencies (rather then downaloding all the files manually).

Express -> framework use to easily manage our rouing, requests, server-side logic and responses in elegant way



inject duynamic data -> data from database like blog posts or user data that we want to show on a profile
so to output such kind of dynaimic content/data in these kindof template we use "view engine / template engine"
     ^
    / \
     |
express app usr this really easy manner

depedencies for the same: use expressHandlebars
Pug ->difff from html, so we wont use it , 
<%= EJS %> -> comes woith good features and easy to use

EJS: npm install EJS
we use ejs as our view engine choice
in express:
app.set()-> let us configure some application setting
app.set('view engine','ejs') -> set out view engine to ejs


Middle ware -> name for any code that runs (on the server) between getting a request and sending a response
use method is generally used to run the middleware code (eg: app.use(404)).
it can be 1 or more than 1 piece of code called middleware

functions that run in out get handlers are also eseentially middleware  

get -> only fire funtionto get request to certain route specified .
whereas
use -> fire function for every type of request  to all routes including "POST Request"
stuff we can do with middleware: 
1. Logger middleware to log detaills of every request
2. Authetication check middleware for protected routes
3. Middleware to parse JSON data from requests
4. Return 404 pages

next() is use to go for next middleware code when browser can get stuck 

3rd party middleware 
There are tons of middleware function created if we use "NODE AND EXPRESS".
eg. Morgan -> a logger that does a similar thing to our coustom middleware where we log stuff to console but better than console.
 helmet -> for security -> uses seesions cookies validation etc.


MongoDB -> used mongodb.com/cloud/atlas
we are using moongoose to connect rather than simple mangodb API and packages.
Mongoose id an ODM lib -> Object Document Mapping -> which means it warp the MongoDB API and it provide us to connect and communicate with DB.
It does it by allowing us to create simple data models which have database query method to create/get/delete/update data based docs.
schemas defines the structure of a type of data/document -> properties & property type
Models allows us to communicate with DB Collections

basically , schema is structure and model surrounds structure and provide us with an interface which in turn helps us to connect to DB collections

Requests types
GET -> request is use to get resourse(req) from server
POST -> request to create a new data (e.g new blog)
DELETE -> requests to delete data
PUT -> requests to update data
NOTE: We can use same routes for differnt type of requests
likr we can use localhost:3000/blogs for get and post requests both

we need here a route item to get a single blog item -> we can do this by localhost:3000/blogs/:id where id cahnges depended ont he blog we want to get -. get request
localhost:3000/blogs/:id -> for delete request.
localhost:3000/blogs/:id -> for Put request.(update the post)

route parameters -> are the variable parts of the route that may cahnge value
e.g.: localhost:3000/blogs/:id -> id here

Express Router -> something that comes with expressb -> use to manage our route more efficiently and more tightly (when project size grows)

we use ecpress router to 
i. split the code into different files and manage them in small groups of routes that belong together
ii. makes app modular
iii. become esasier to modify the parts of app.
iv. we dont have to have evrything justified in 1 big messy file.

MVC approach 
MVC -> model, view, controller
Model -> store(describe) datastructure and use to interact with DB
View -> HTML templates store that user see
Controller -> forms link between models and views
   --------       --------------       ---------
   | model | ---> | controllers | ---> | views |
   ---------      ---------------      ---------

middleman use models to get data and pass that to views.
we already done that in route handlers BUT the idea of controllers is -> we just extract those handlers funtions into seperate controller file and refrence those controller into our routes files.

So route files matches incoming requests and pass those requests to correct controller function        a controller communicate with appropriate model to get data into view and         view render data to template and data send to browser.

FUTURE COURSE ->

Node.js with Firebase Admin
Node.js authetication
Handling payments with node.js & Stripe
Full stack project (Vue / React)
