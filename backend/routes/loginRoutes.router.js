import { Router } from 'express';
const router = Router();
import loginUser from '../controller/loginController.js';
import User from '../model/UserModel.model.js';

router
    .route('/')
    .post(async(req, res) => {

        try{
            const { email, password } = req.body;
            const user = await User.findOne({email}).exec(); //returns an array

            if(user){
                loginUser(user, password, req, res);
            }else{
                res.status(400).json({ message: "Check your Credentials" });
            }

        }catch(err){
            res.status(404).json({ message: err.message });
        }

    })

export default router;
