let express = require("express"),
  router = express.Router();

// Item Model
let ItemSchema = require("../models/Item");

//Create Item
router.route("/create-item").post((req, res) => {
  ItemSchema.create(req.body)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

//Read Item
router.route("/").get((req, res) => {
  ItemSchema.find()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

//Get Single Item
router.route("/view-item/:id").get((req, res) => {
  ItemSchema.findById(req.params.id)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

//Update Item
router.route("/update-item/:id").put((req, res) => {
  ItemSchema.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then((data) => {
      console.log("Item successfully updated");
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

//Delete Item
router.route("/delete-item/:id").delete((req, res) => {
  ItemSchema.findByIdAndRemove(req.params.id)
    .then((data) => {
      console.log("Item successfully deleted");
      console.log(data);
      res.status(200).json({ msg: data });
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

module.exports = router;
