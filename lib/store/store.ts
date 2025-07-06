import {
  combineReducers,
  configureStore,
  UnknownAction,
} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import storageSession from "redux-persist/lib/storage/session";
import { persistSessionReducer } from "./slices/persistSessionSlice";
import { counterPersistReducer } from "./slices/counterPersistSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Create fallback storage for SSR/environments without localStorage
const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

// Safe storage creation with fallback
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const sessionStorage =
  typeof window !== "undefined" ? storageSession : createNoopStorage();

// Per-slice persist configs
const counterPersistConfig = {
  key: "counterPersist",
  storage: storage, // Session storage for temporary data
  // Add whitelist/blacklist if needed
  // whitelist: ['specificField'],
};

const persistSessionConfig = {
  key: "session",
  storage: sessionStorage, // Local storage for persistent data
  // Add whitelist/blacklist if needed
  // whitelist: ['language', 'theme'],
};

// Combined reducer
const appReducer = combineReducers({
  counterPersist: persistReducer(counterPersistConfig, counterPersistReducer),
  persistSession: persistReducer(persistSessionConfig, persistSessionReducer),
});

// Root reducer with global reset
const rootReducer = (
  state: ReturnType<typeof appReducer> | undefined,
  action: UnknownAction
) => {
  if (action.type === "RESET_APP_STATE") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Only ignore redux-persist actions instead of disabling entirely
        ignoredActions: [
          "persist/FLUSH",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/PERSIST",
          "persist/PURGE",
          "persist/REGISTER",
        ],
      },
    }),
  // Add devTools configuration for production
  // devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

// Action creator with better typing
export const resetAppState = (): UnknownAction => ({
  type: "RESET_APP_STATE" as const,
});

// Enhanced types
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// Enhanced hooks with better typing
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Optional: Add utility function to clear all persisted data
export const clearPersistedData = () => {
  if (typeof window !== "undefined") {
    // Clear specific keys
    localStorage.removeItem("persist:session");
    sessionStorage.removeItem("persist:counterPersist");
  }
};
