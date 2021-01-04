const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");

//Create Server
const app = express();

connectDB();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

//Puerto de la app
const PORT = process.env.PORT || 4000;

app.use("/contacts", require("./routes/contactRoutes"));

//Empezar el servidor
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server on PORT: ${PORT}`);
});
