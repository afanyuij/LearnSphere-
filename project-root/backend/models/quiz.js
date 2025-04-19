import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    questionText: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: String, required: true },
    type: { type: String, enum: ["mcq", "true_false"], default: "mcq" }
})

const quizSchema = new mongoose.Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Courses", required: true },
    title: { type: String, required: true },
    questions: [questionSchema],
    createdAt: { type: Date, default: Date.now }
})

const quizModel = mongoose.model("Quiz", quizSchema)
export default quizModel