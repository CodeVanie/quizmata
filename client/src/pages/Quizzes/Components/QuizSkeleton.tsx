
export default function QuizSkeleton() {
    
    return (
        <div className="bg-base-200 rounded-box p-3">
            <div className="flex animate-pulse">
                <div className="flex-1 space-y-12 py-1">
                <div className="h-8 rounded-full bg-base-content/25"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2 h-4 rounded-full bg-base-content/25"></div>
                        <div className="col-span-1 h-4 rounded-full bg-base-content/25"></div>
                        </div>
                        <div className="h-4 rounded-full bg-base-content/25"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}