import express from "express";
import quizRoutes from "./routes/quizRoutes";
import userRoutes from "./routes/userRoutes";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.json());
app.use(rateLimiter);

app.use("/api/quizzes", quizRoutes);
app.use("/api/users", userRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT: ", PORT);
    });
});