import QuizSkeleton from "./QuizSkeleton";

export default function QuizzesSkeleton() {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <QuizSkeleton />
            <QuizSkeleton />
            <QuizSkeleton />
            <QuizSkeleton />
            <QuizSkeleton />
            <QuizSkeleton />
            <QuizSkeleton />
            <QuizSkeleton />
        </div>
    )
}