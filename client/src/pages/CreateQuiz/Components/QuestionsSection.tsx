import { useFormContext } from "react-hook-form";
import FieldSetWrapper from "../../../layouts/Quiz/FieldSetWrapper";
import type { QuizFormData } from "client/src/lib/types";

export default function QuestionsSection() {
    const { watch } = useFormContext<QuizFormData>();
    const questions = watch("questions");

    return (
        <FieldSetWrapper title="Questions">
            {questions.map((q, index) => 
                <div key={index}>
                    <select defaultValue="Question Types" value={q.questionType} className="select select-neutral w-full">
                        <option disabled={true}>Question Types</option>
                        <option value="multiple-choice">Multiple-Choice</option>
                        <option value="identification">Identification</option>
                        <option value="enumeration">Enumeration</option>
                        <option value="essay">Essay</option>
                        <option value="fill-in-the-blank">Fill-in-the-blank</option>
                        <option value="matching-type">Matching-Type</option>
                        <option value="true-or-false">True-or-False</option>
                    </select>
                    <input type="text" placeholder="Add a question title" className="input input-neutral" />
                </div>
            )}
        </FieldSetWrapper>
    )
}