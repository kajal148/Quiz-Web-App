import { Router } from "express";
const router = Router();
import { fetchAllQuestions } from '../controller/QuestionController.js';
import errorHandler from "../middlewares/errorMiddleware.js";


router
    .route('/quiz')
    .get((req, res) => {
        try{
            fetchAllQuestions(req, res);
        }catch(err){
            new errorHandler(err, req, res, next);
        }
    })

export default router;