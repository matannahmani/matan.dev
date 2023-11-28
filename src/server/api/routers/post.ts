import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { slug } from "~/server/db/schema";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
});
