import app from './app';
import mongoose from "mongoose";

const PORT = 8801;
const db  = 'mongodb://127.0.0.1:27017/ShopDB';

const connect = () => {
    mongoose.connect(db, {useNewUrlParser: true}).then(() => {
        return console.log(`Successfully connected to ${db}`);
    }).catch(error => {
        console.log('Error connecting to database: ', error);
        return process.exit(1);
    });
};
connect();

mongoose.connection.on('disconnected', connect);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
