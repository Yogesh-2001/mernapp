const express = require("express");
const app = express();
const mongoose = require("mongoose");
const registerRoute = require("./routes/RegisterRoute");
const cors = require("cors");
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;
mongoose
  .connect(
    "mongodb+srv://mernapp:Yogesh%402001@cluster0.yfljndp.mongodb.net/loginform?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connection success");
  })
  .catch((err) => {
    console.error({
      message: "Connection Failed" + err.message,
    });
  });

app.use("/user", registerRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(PORT, (req, res) => {
  console.log("server running on port 5000");
});
