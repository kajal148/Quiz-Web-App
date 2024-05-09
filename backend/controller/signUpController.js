import jwt from 'jsonwebtoken';
import User from '../model/UserModel.model.js';
import errorHandler from '../middlewares/errorMiddleware.js';

const signUpUser = async (
    name, 
    email,
    password,
    req,
    res
) => {
    try{
        console.log(name, email, password);
        const user = new User({
            name, 
            email, 
            password
        });
        const savedUser = await user.save();

        const token = jwt.sign({ id: savedUser._id, }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' })

        res
        .status(200)
        .json({ success: true, message: 'Registration is successful.', token});
    }catch(err){
        if(err.name === 'ValidationError'){
            res
            .status(400)
            .json({ success: false, message: err.message})
        }else{
            throw errorHandler(err, req, res);
        }
    }
}

export default signUpUser;

