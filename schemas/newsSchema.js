const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  // title: {
  //   type: Number,
  // },
  catagory: {
    type: String,
  },
  imgUrl: {},
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  data: {
    thisCatagory: {
      type: String,
      require: true,
    },

    title: String,
    description: {
      type: String,
    },
  },
});
//console.log(todoSchema);

module.exports = newsSchema;
