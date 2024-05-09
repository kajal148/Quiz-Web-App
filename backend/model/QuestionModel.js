import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['select_one', 'true_false', 'multiple_choice'],
        required: true
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard']
    },
    question: {
        type: String,
        required: true,
    },
    correctAnswer: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: function (){
            return this.type !== 'true_false';
        }
    },
    explanation: {
        type: String,
        required: false
    }
});

const Question = mongoose.model('Question', QuestionSchema);

export default Question;