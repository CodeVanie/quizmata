import { NextFunction, Request, Response } from "express";
import rateLimit from "../config/upstash"

const rateLimiter = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const {success} = await rateLimit.limit("my-limit-key");

        if (!success) {
            return res.status(429).json({
                message: "Too many request, please try again later"
            });
        }

        next();
    } catch (error) {
        console.log("Rate limit error", error);
        next();
    }
    
}

export default rateLimiter