/* Create a server */
//create an object: http module
const http = require("http");
//importing a module
const mod = require("./module");

//localhost:5050, can be anything one port for one app.
const port = 3030;

const server = http.createServer((request, response) => {
  switch (request.url) {
    case "/":
      //call the method inside module.js
      response.end(
        //write something that you want to show on the browser
        `
        <html>
          <head>
            <title>My First Node App</title>
          </head>
          <body>
            <h1>Node.js and NPM practice :)</h1>
           ${mod()}
            <p>Welcome to Node.js App</p>
          </body>
        </html>
        `
      );
      break;
    case "/admin":
      response.end(
        //write something that you want to show on the browser
        `
        <html>
          <head>
            <title>My First Node App</title>
          </head>
          <body>
            <h1>Node.js App</h1>
            <p>Welcome to the admin page</p>
          </body>
        </html>
        `
      );
      break;
    case "/student":
      response.end(
        //write something that you want to show on the browser
        `
        <html>
          <head>
            <title>My First Node App</title>
          </head>
          <body>
            <h1>Node.js App</h1>
            <p>Welcome to the student page</p>
          </body>
        </html>
        `
      );
      break;
    default:
      response.end(
        //write something that you want to show on the browser
        `
        <html>
          <head>
            <title>My First Node App</title>
          </head>
          <body>
            <h1>Node.js App</h1>
            <p>404 Page not found</p>
          </body>
        </html>
        `
      );
      break;
  }
});

//server
server.listen(port, () => {
  console.log(`Server2 is listening to ${port}`);
});
