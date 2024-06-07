const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connnections sucessful");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Whatsapp");
}

let allChats = [
  {
    from: "bitto",
    to: "amit",
    msg: "send me your data",
    created_at: new Date(),
  },
  {
    from: "demo",
    to: "demo",
    msg: "send me your data",
    created_at: new Date(),
  },
  {
    from: "hurry",
    to: "amit",
    msg: "send me your data",
    created_at: new Date(),
  },
  {
    from: "bunnny",
    to: "amit",
    msg: "send me your data",
    created_at: new Date(),
  },
  {
    from: "tunny",
    to: "amit",
    msg: "send me your data",
    created_at: new Date(),
  },
  {
    from: "bear",
    to: "amit",
    msg: "send me your data",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
