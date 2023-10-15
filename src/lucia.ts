import { lucia } from "lucia";
import { elysia } from "lucia/middleware";

// expect error (see next section)
export const auth = lucia({
  env: "DEV", // "PROD" if deployed to HTTPS
  middleware: elysia(),
});

export type Auth = typeof auth;
