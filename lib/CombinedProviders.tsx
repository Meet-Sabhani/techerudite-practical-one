"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (failureCount, error: any) => {
        // Don't retry on 404
        if (error?.status === 404) return false;
        // Retry other errors once
        return failureCount < 1;
      },
      // staleTime: 5 * 60 * 1000, // optional: 5 minutes
      // cacheTime: 10 * 60 * 1000, // optional: 10 minutes
    },
    mutations: {
      onError: (error) => {
        console.log("Mutation error:", error);
      },
    },
  },
});

interface CombinedProvidersProps {
  children: ReactNode;
}
const CombinedProviders = ({ children }: CombinedProvidersProps) => {
  // const [isMount, setIsMount] = useState(false);
  // useEffect(() => {
  //   setIsMount(true);
  // }, []);

  // if (!isMount) {
  //   return null;
  // }

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default CombinedProviders;
