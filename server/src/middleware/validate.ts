import { NextFunction, Request, Response } from "express";
import { z, ZodObject, ZodRawShape } from "zod";

export default function zodValidate(schema: ZodObject<ZodRawShape>) {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                message: "Validation failed! 500",
                errors: z.treeifyError(result.error)
            });
        }

        req.body = result.data;
        next();
    };
}