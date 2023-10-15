import { prisma } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
import { lucia } from "lucia";
import { elysia } from "lucia/middleware";

const prismaCLient = new PrismaClient();

export const auth = lucia({
  env: "DEV", // TODO "PROD" if deployed to HTTPS
  middleware: elysia(),
  adapter: prisma(prismaCLient),
});

export type Auth = typeof auth;
