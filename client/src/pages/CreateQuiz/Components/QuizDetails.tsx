import FieldSetWrapper from "../../../layouts/Quiz/FieldSetWrapper";
import TextInput from "./TextInput";
import DescriptionTextArea from "./DescriptionTextArea";
import AccessSelect from "./AccessSelect";
import QuizTimeLimitRange from "./QuizTimeLimitRange";
import MaxAttemptsRange from "./MaxAttemptsRange";
import { useFormContext } from "react-hook-form";
import type { QuizFormData } from "client/src/lib/types";

export default function QuizDetails() {
    const { register, watch, control } = useFormContext<QuizFormData>();
    const quizTimeLimit = watch("quizTimeLimit");

    return (
        <FieldSetWrapper title="Quiz details">
            <TextInput label="Title*" name="title" register={register} 
                placeholder="Add a quiz title..." />
            <DescriptionTextArea label="Description (Optional)" name="description" 
                register={register} placeholder="Add a quiz description..." />
            <AccessSelect label="Access*" name="access" register={register} control={control} />
            <QuizTimeLimitRange 
                label={`Time Limit (${quizTimeLimit !== 0 ? 
                    quizTimeLimit === 1 ? `${quizTimeLimit} minute` : 
                    `${quizTimeLimit} minutes` : `No Timer`}) (Optional)`} 
                name="quizTimeLimit" register={register} />
            <MaxAttemptsRange label="Max Attempts (Optional)" 
                name="maxAttempts" register={register} />
        </FieldSetWrapper>
    )
}