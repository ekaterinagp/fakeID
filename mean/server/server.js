const express = require("express");

const app = express();

const port = process.env.PORT || 9090;
const server = require("http").Server(app);

server.listen(port, () => console.log(`Listening happily on port ${port}`));
