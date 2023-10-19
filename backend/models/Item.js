//Record.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// "id": 0,
// "name": "Aquila Restaurant",
// "city": "Chiang mai",
// "photo": "/assets/1.jpg",
// "wifi": true

let ItemSchema = new Schema(
  {
    name: {
      type: String,
    },
    city: {
      type: String,
    },
    photo: {
      type: String,
    },
    wifi: {
      type: Boolean,
    },
  },
  { collection: "item" }
);

module.exports = mongoose.model("item", ItemSchema);
