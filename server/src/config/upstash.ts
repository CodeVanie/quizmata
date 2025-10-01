import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import dotenv from "dotenv"

dotenv.config();

// create a ratelimiter that allows 100 request per minute
const rateLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(100,"1 m")
})

export default rateLimit