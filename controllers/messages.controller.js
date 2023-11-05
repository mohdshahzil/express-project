function getMessages(req, res) {
  res.send("from messages");
}

function postMessage(req, res) {
  console.log("Updating messages..");
}

module.exports = {
  getMessages,
  postMessage,
};
