import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
  users: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Courses", required: true },
  enrollment_date: { type: Date, default: Date.now },
  status: { type: String, enum: ["active", "completed", "cancelled"], default: "active" },
  progress: { type: Number, default: 0 },
  progressBar: [
    {
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

const enrollmentModel = mongoose.model("enrollments", enrollmentSchema);
export default enrollmentModel;
