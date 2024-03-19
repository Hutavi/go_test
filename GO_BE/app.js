const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const corsOptions = require("./configs/corsOptions.js");
const shoeRoute = require("./routes/shoeRoute.js");

const app = express();
dotenv.config({ path: "./config.env" });

const port = 5000;

app.use(morgan("combined"));
app.use(cors(corsOptions));
app.use(express.json());

app.use("/shoe", shoeRoute);

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});
