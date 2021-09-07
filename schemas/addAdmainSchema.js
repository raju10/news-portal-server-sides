const mongoose = require("mongoose");

const addAdmainSchema = mongoose.Schema({
  email: {
    type: String,
  },
});
//console.log(todoSchema);

module.exports = addAdmainSchema;
