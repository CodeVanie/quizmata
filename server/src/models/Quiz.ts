import mongoose, { Document, Schema, Types } from "mongoose"

export interface IQuiz extends Document {
    title: string;
    description?: string;
    owner: Types.ObjectId;
    access: "public" | "private" | "class";
    quizKey: string;
    
    quizTimeLimit: number;
    maxAttempts: number;

    questions: {
        _id: Types.ObjectId;
        questionText: string;
        questionType: 
            | "multiple-choice" 
            | "identification" 
            | "enumeration" 
            | "essay" 
            | "fill-in-the-blank" 
            | "matching-type" 
            | "true-or-false";
        options?: string[];
        correctAnswers?: string[];
        timeLimit: number;
    }[];

    createdAt: Date;
    updatedAt: Date;
}

const quizSchema = new Schema<IQuiz>(
    {
        title: { type: String, required: true },
        description: { type: String },
        owner: { type: Schema.Types.ObjectId, ref: "User", required: true },

        access: { 
            type: String, 
            enum: ["public", "private", "class"],
            required: true 
        },

        quizKey: { type: String, required: true, unique: true },

        quizTimeLimit: { type: Number, required: true, min: 0, max: 180 },
        maxAttempts: { type: Number, required: true, min: 0, max: 5 },

        questions: [
            {
                questionText: { type: String, required: true },
                questionType: { 
                    type: String, 
                    enum: [
                        "multiple-choice", 
                        "identification", 
                        "enumeration", 
                        "essay", 
                        "fill-in-the-blank", 
                        "matching-type", 
                        "true-or-false"
                    ],
                    required: true 
                },
                options: [String],
                correctAnswers: [String],
                timeLimit: { type: Number, required: true, min: 0, max: 300 },
            }
        ]

    },
    { timestamps: true }
);

const Quiz = mongoose.model<IQuiz>("Quiz", quizSchema);

export default Quiz