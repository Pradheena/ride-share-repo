const mongoose = require('mongoose');
const DB_CONNECT = 'mongodb://127.0.0.1:27017/uber-video'; // Use 127.0.0.1 instead of 0.0.0.0 for reliability

 function connectToDb() {
    try {
         mongoose.connect(DB_CONNECT, {
           
        }).then(()=>{
            console.log('connectd to DB')
        })
        console.log('✅ MongoDB Connected!');
    } catch (err) {
        console.error('❌ MongoDB Connection Error:', err);
        process.exit(1); // Exit if DB connection fails
    }
}

module.exports = connectToDb;