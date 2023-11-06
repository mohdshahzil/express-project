const express = require("express");
const messagesController = require("./controllers/messages.controller");
const friendsController = require("./controllers/friends.controller");
const app = express();

const PORT = 3000;



app.use((req, res, next) => {
  const start = Date.now();
  next();
  //actions go here.. (after all the processing is done)
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post("/friends", friendsController.postFriend);

app.get("/friends", friendsController.getFriends);

app.get("/friends/:friendId", friendsController.getFriend);

app.get("/messages", messagesController.getMessages);

app.post("/messages", messagesController.postMessage);

app.listen(PORT, () => {
  console.log("Server is listening on port 3000");
});
