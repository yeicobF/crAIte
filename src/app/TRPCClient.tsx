"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useState, type ReactNode } from "react";
import { api, trpc } from "~/utils/api";

export const TRPCClientProvider = (props: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <trpc.Provider client={api} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </trpc.Provider>
  );
};
