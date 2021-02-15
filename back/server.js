var http = require("http");
var fs = require("fs");

//database
const db = require(`../db`);
const Programms = require(`../model/programm_model`);
var port = 5500;
var server = http.createServer();
/////////
const app = require(`./Router`)(server);

//test db
db.authenticate()
  .then(() => console.log(`db connected`))
  .catch((err) => console.log(`error: ${err}`));

// //////create server + index +xhr js
server
  .on("request", function (request, response) {
    var requestUrl = new URL(request.url, `http://${request.headers.host}`);
    console.log(request.url);
    console.log(request.method);
    console.log(requestUrl.pathname);
    let splittedUrl = request.url.split(".");

    if (request.url == "/") {
      response.writeHead(200, { "Content-Type": "text/html" });
      fs.readFile("index.html", function (err, data) {
        if (err) {
          response.write("smth go wrong ");
          response.end();
        } else {
          response.write(data);
          response.end();
        }
      });
    } else if (splittedUrl[splittedUrl.length - 1] == "css") {
      response.writeHead(200, { "Content-Type": "text/css" });
      fs.readFile(`.${request.url}`, function (err, data) {
        if (err) {
          response.write(`smth go wrong ${err}`);
          response.end();
        } else {
          response.write(data);
          response.end();
        }
      });
    } else {
      let splittedUrl = request.url.split(".");
      let isJs =
        splittedUrl[splittedUrl.length - 1] &&
        splittedUrl[splittedUrl.length - 1].toLowerCase() === "js";
      if (!isJs) {
        return;
      }
      response.writeHead(200, { "Content-Type": "application.js" });
      fs.readFile(`.${request.url}`, function (err, data) {
        if (err) {
          response.write(`smth go wrong ${err}`);
          response.end();
        } else {
          response.write(data);
          response.end();
        }
      });
    }
  })
  .listen(port);

app.get("/get/channel", function (req, res) {
  try {
    Programms.findAll({ raw: true }).then(function (result) {
      let programms = [];
      programms = result;

      programms = programms.sort(
        (a, b) => parseFloat(a.start_time) - parseFloat(b.start_time)
      );
      res.end(JSON.stringify(programms));
    });
  } catch {
    (err) => console.log(err);
  }
});

// try {
//   Programms.findAll({raw: true}).then((result) => console.log(result));
// } catch (err) {
//   console.log(err);
// }

// Programms.destroy({
//   where: {channel_id:2},
// });


// for(let arr of array){
//   Programms.create(arr)
// }
