import express from "express";
import quizRoutes from "./routes/quizRoutes";
import { connectDB } from "./config/db";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use("/api/quizzes", quizRoutes);

app.listen(PORT, () => {
    console.log("Server started on PORT: ", PORT);
});