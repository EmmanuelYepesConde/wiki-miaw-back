import mongoose from "mongoose";

const connect = async () => {
    try {
        const db = await mongoose.connect('mongodb://localhost/wiki-miaw')
        console.log(`>>>DB conn to ${db.connection.name}<<<`);
    } catch (error) {
        console.log(error);
    }
} 

export default connect;