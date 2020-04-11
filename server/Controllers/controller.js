const Thing = require('../Models/models');

module.exports = {
  getAllThings: (req, res) => {
    Thing.find()
      .then(data => {
        res.json({ status: "success", data: data });
      })
      .catch(err => {
        res.json({ status: "error", data: err });
      })
  },
  getThing: (req, res) => {
    Thing.findOne({ _id: req.params.id })
      .then(data => {
        res.json({ status: "success", data: data });
      })
      .catch(err => {
        res.json({ status: "error", data: err });
      })
  },
  createThing: (req, res) => {
    Thing.create(req.body)
      .then(data => {
        res.json({ status: "success", data: data });
      })
      .catch(err => {
        res.json({ status: "error", data: err });
      })
  },
  editThing: (req, res) => {
    Thing.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, new: true })
      .then(data => {
        res.json({ status: "success", data: data });
      })
      .catch(err => {
        res.json({ status: "error", data: err });
      })
  },
  deleteThing: (req, res) => {
    Thing.findOneAndDelete({ _id: req.params.id })
      .then(data => {
        res.json({ status: "success", data: data });
      })
      .catch(err => {
        res.json({ status: "error", data: err });
      })
  }
}