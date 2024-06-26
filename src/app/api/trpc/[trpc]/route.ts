import { appRouter } from "@/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createContext } from "react";

const handler = (req: Request) => {
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    //@ts-expect-error
    createContext: () => ({}),
  });
};

export { handler as GET, handler as POST };
