var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/words');
mongoose.connection.on('connected', function () {
  console.log(mongoose.connection.collection);
  mongoose.connection.db.listCollections(function (err, name) {
    console.log(name);
    mongoose.disconnect();
  });
});