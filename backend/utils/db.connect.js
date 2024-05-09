import { connect } from 'mongoose';

//set up db connection
const dbConnect = async() => {

    console.log(process.env.MONGO_DB_URI);

    try{
        await connect(process.env.MONGO_DB_URI, {
            useNewUrlParser :  true,
            useUnifiedTopology: true,
        });

        console.log('DB connected');
    }catch(err){
        console.log('Something went wrong in DB');
    }
}

export default dbConnect;