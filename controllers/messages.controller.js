const path = require("path");
function getMessages(req, res) {
  // res.send("from messages");

  res.sendFile(path.join(__dirname, "..", "public","images", "skimountain.jpg"));
}

function postMessage(req, res) {
  console.log("Updating messages..");
}

module.exports = {
  getMessages,
  postMessage,
};
