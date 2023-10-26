const mongoose=require('mongoose')
const mongoURI = 'mongodb+srv://muneer123:munna@cluster0.0a8j0bh.mongodb.net/Beautyspa';

const db=mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB: ' + error);
    });
module.exports=db