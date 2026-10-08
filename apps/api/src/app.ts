import Fastify from "fastify";
import { z } from "zod";

const healthSchema = z.object({ status: z.literal("ok") });

export function buildApp() {
  const app = Fastify({ logger: true });

  app.get("/health", async () => healthSchema.parse({ status: "ok" }));

  return app;
}
