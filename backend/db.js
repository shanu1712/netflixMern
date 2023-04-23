const mongoose = require("mongoose");

 exports.Database= function Database() {
    
    
       mongoose.connect('mongodb+srv://shanuchaturvedi345:tDACDPbbGcuwaa35@cluster0.o5kdkye.mongodb.net/netflix?retryWrites=true&w=majority')
      .then(() => {
        console.log("DB Connection Successfull");
      })
      .catch((err) => {
        console.log(err.message);
      });
}
 