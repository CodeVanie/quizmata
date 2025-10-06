import CreateQuizWrapper from "../../layouts/Quiz/CreateQuizWrapper";
import CreateQuizForm from "./Components/CreateQuizForm";

export default function CreateQuizPage() {

    return (
        <CreateQuizWrapper>
            <h1 className="text-3xl text-center p-2">CREATE NEW QUIZ</h1>
            <CreateQuizForm />
        </CreateQuizWrapper>
    )
}
