const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

function pushMessage(author, message) {
  messages.push({
    user: author,
    text: message,
    added: new Date(),
  });
}

module.exports = {
  messages,
  pushMessage,
};
