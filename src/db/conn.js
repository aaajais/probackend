// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/registration",
//  {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifieldTopology: true
// })
//     .then(() => {
//         console.log('connection successful');
//     }).catch((e) => {
//     console.log(e);
// })



const mongoose = require("mongoose");
const db = mongoose.connection;
mongoose.connect("mongodb://localhost:27017/registration", 
   { useNewUrlParser: true })
    .then(() => console.log("connection successfully"))
    .catch((err) => console.log(err));