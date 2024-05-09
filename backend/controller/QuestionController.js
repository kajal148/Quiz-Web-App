import Question from "../model/QuestionModel.js";
import errorHandler from "../middlewares/errorMiddleware.js";

const fetchAllQuestions = async (req, res) => {
    try{
        const allQuestions = await Question.find({});
        const total = allQuestions.length;

        res.status(200).json({questions: allQuestions, total });

    }catch(err){
        throw errorHandler(err, req, res);
    }
}

export {
    fetchAllQuestions
};