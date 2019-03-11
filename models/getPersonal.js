var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

var getPersonal = () => {
        return new Promise((resolve,reject) => {
            console.log("Entered the promise");
                    MongoClient.connect(url, function(err, db) {
                    if (err) {
                        console.log("Error in connecting to DB")
                        reject(err);
                    }
                    let dbo = db.db("dbmsp");
                    // var aadhno = parseInt(aadhar._id);
                    // var aadhno = aadhar._id;
                    // console.log(aadhno);
                    dbo.collection("Personal").find({}).toArray(function(err,res){
                        resolve(res);
})
})
}
)}

module.exports = getPersonal;