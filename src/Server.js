const express = require("express");
const app = express();
const port = 5000;
const http = require("http").createServer(app);
const io = require("socket.io").listen(http);
const rp = require("request-promise");
http.listen(5000);
var socket = io.connect("http://localhost:5000");
socket.on("connect", function() {
  console.log("Client connected");
});

const requestOptions = {
  method: "GET",
  uri: "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest",
  qs: {
    id: "1,2"
  },
  headers: {
    "X-CMC_PRO_API_KEY": "6453597e-8761-4ca7-8a3a-46af72ce2da4"
  },
  json: true,
  gzip: true
};

rp(requestOptions)
  .then(response => {
    app.get("/api", (req, res) => {
      res.json(response);
    });
  })
  .catch(err => {
    console.log("API call error:", err.message);
  });
