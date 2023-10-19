let express = require("express"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  dbConfig = require("./database/db");

//Express Route
const itemRoute = require("./routes/item.route");

//Connecting MongoDB Database
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("database successfully connected");
    },
    (error) => {
      console.log("Could not connect to database:" + error);
    }
  );

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/item", itemRoute);

const port = process.env.PORT || 4201;
app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
