const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://Soumya:Soumya123@cluster0.kuqhokz.mongodb.net/hyperwork"
  )
};