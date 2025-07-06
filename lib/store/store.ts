import {
  combineReducers,
  configureStore,
  UnknownAction,
} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import storageSession from "redux-persist/lib/storage/session"; // ✅ For sessionStorage
import { persistSessionReducer } from "./slices/persistSessionSlice";
import { counterPersistReducer } from "./slices/counterPersistSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Per-slice persist configs
const authPersistConfig = {
  key: "auth",
  storage: storageSession, // ✅ sessionStorage for auth
};

const languagePersistConfig = {
  key: "language",
  storage: createWebStorage("local"), // ✅ localStorage for language
};

// Combined reducer
const appReducer = combineReducers({
  counterPersist: persistReducer(authPersistConfig, counterPersistReducer),
  persistSession: persistReducer(languagePersistConfig, persistSessionReducer),
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
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export const resetAppState = (): UnknownAction => ({ type: "RESET_APP_STATE" });

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof rootReducer>
> = useSelector;
