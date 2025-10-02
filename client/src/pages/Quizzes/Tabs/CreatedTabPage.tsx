import { useEffect, useState } from "react";
import type { QuizTypes } from "../../../lib/types";
import QuizzesSkeleton from "../QuizzesSkeleton";
import QuizItem from "../QuizItem";
import toast from "react-hot-toast";
import axiosInstance from "../../../lib/axios";

export default function CreatedTabPage() {
    console.log("CreatedTabPage Rendered!");
    const [quizzes, setQuizzes] = useState<QuizTypes[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchQuizzes() {
            try {
                const res = await axiosInstance.get('/quizzes');

                setQuizzes(res.data);
            } catch (error) {
                console.log(error);
                toast.error("Failed to load quizzes");
            } finally {
                setLoading(false);
            }
        }

        fetchQuizzes();
    }, [])

    return loading ? <QuizzesSkeleton /> : (
        <div className={`grid gap-3 grid-cols-1 lg:grid-cols-2 
            ${quizzes.length === 0 && "lg:grid-cols-1"}`}>
            {quizzes.length === 0 && 
                <h2 className="text-2xl text-center font-bold text-base-content/50 tracking-widest">
                    NO QUIZ AVAILABLE
                </h2>
            }
            {quizzes.map((quiz: QuizTypes) => 
                <QuizItem key={quiz._id} item={quiz} />
            )}
        </div>
    )
}