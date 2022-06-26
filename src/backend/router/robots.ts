import * as trpc from "@trpc/server";
// import { z } from "zod";
import { prisma } from "@/db/client";

export const robotsRouter = trpc.router().query("getAll", {
  async resolve() {
    return await prisma.robot.findMany();
  },
});
