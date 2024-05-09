import { Router } from 'express';
const router = Router();
import signUpUser from '../controller/signUpController.js';

router
    .post('/', (req, res) => {
        try{
            const { name, email, password } = req.body;
            signUpUser(name, email, password, req, res);
        }catch(err){
            res.status(404).json({ message: 'Registration Failed.'})
        }
    })



export default router;
