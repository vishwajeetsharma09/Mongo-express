const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Chat = require("./models/chat.js");
const path = require("path");

const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

main()
  .then(() => {
    console.log("connnections sucessful");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Whatsapp");
}
//adding data to databases
// let Chat1 = new Chat({
//   from: "bitto",
//   to: "amit",
//   msg: "send me your data",
//   created_at: new Date(),
// });
// Chat1.save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     consolr.log(err);
//   });

//Routing
app.get("/", (req, res) => {
  res.send("root is working");
});

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs", { chats });
});

app.listen(port, () => {
  console.log(`server is listen in ${port}`);
});
