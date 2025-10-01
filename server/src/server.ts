import express from "express";
import quizRoutes from "./routes/quizRoutes";
import userRoutes from "./routes/userRoutes";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(rateLimiter);

app.use("/api/quizzes", quizRoutes);
app.use("/api/users", userRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT: ", PORT);
    });
});