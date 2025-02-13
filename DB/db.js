const mongoose = require("mongoose")


const dbConnect = async() =>{
    await mongoose.connect("mongodb+srv://swajeetdharmadhikari:vhEvFNZhuO4Eik7V@fleet.fhlmb.mongodb.net/?retryWrites=true&w=majority&appName=Fleet")
    .then(()=>console.log("Database coneected..."))
    .catch((err)=>console.log(err))

}

    
module.exports = dbConnect;