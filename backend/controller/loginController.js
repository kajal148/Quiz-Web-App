import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import errorHandler from '../middlewares/errorMiddleware.js';

const loginUser = (
    user,
    password, 
    req,
    res,
) => {
    compare(password, user.password, (err, result) => {
        if(err){
            return res.json({ success: false, message: "something went wrong" });
        }

        const { email, _id } = user;

        if(result){
            const token = jwt.sign(
            {
                _id,
                email
            }, 
            process.env.JWT_SECRET_KEY,
            { expiresIn: "24h" })

            return res.status(200).json({
                success: true,
                message: "Login Successful",
                token
            })
        }else{
            console.log(err, 'ERROR');
            res
            .status(400)
            .json({success: false, message: "Authentication Failed!"});
        }
    })
}

export default loginUser;