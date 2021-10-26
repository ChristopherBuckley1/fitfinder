const mongoose = require('mongoose');
require('./app_server/models/db');


const dbURI = "mongodb+srv://chris:krn1iyvC!q88@fitfinder.0f1xr.mongodb.net/fitfinder";

try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
	);
}
 catch (e) {
  console.log("could not connect");
}
require('./locations');
