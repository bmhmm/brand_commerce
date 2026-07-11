import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

const localRedisURL ="rediss://default:gQAAAAAAAnsNAAIgcDI0OTM0OWYzZGIwMWM0NTQ4YTA1ZjBmYWVkNzRiM2ZhNw@sensible-crayfish-162573.upstash.io:6379";

export const redis = new Redis(process.env.UPSTASH_REDIS_URL || localRedisURL)