import { z } from "zod";

const accessEnum = ["public", "private", "class"] as const;
const orderEnum = ["ordered", "reversed", "shuffle"] as const;
const questionTypeEnum = [
    "multiple-choice",
    "identification",
    "enumeration",
    "essay",
    "fill-in-the-blank",
    "matching-type",
    "true-or-false",
] as const;

export const questionSchema = z.object({
  questionText: z.string().min(1, "Question text is required"),
  questionType: z.enum(questionTypeEnum),
  options: z.array(z.string()).optional(),
  correctAnswers: z.array(z.string()).optional(),
  questionPoint: z.number().min(1, "Question point cannot be 0"),
  timeLimit: z.number().min(0, "Time limit cannot be negative").max(300, "Maximum 300 seconds question time limit"),
});

export const quizSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  description: z.string().optional(),
  owner: z.string().min(1, "Owner ID is required"),

  access: z.enum(accessEnum),
  quizKey: z.string().min(1, "Quiz key is required"),

  quizTimeLimit: z.number().min(0, "Time limit cannot be negative").max(180, "Maximum 180 minutes quiz time limit"),
  maxAttempts: z.number().min(0, "Attempts cannot be negative").max(5, "Maximum 5 max attempts"),

  questionOrder: z.enum(orderEnum),
  questions: z.array(questionSchema).min(1, "At least one question is required"),

  passingScore: z.number().min(1, "Passing score cannot be 0")
});

export const quizCreateSchema = quizSchema
  .omit({ quizKey: true });
export const quizUpdateSchema = quizSchema
  .omit({ owner: true, quizKey: true })
  .partial();
export const questionUpdateSchema = questionSchema
  .partial();

export type Quiz = z.infer<typeof quizSchema>;
export type Question = z.infer<typeof questionSchema>;