import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage'; // burada storage modülünü düzgün şekilde import ediyoruz
import todoReducer from "./todoSlice";


const persistConfig = {
    key:'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig,todoReducer);

export const store = configureStore({
    reducer: {todos:persistedReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
        },
    })
})

export let persistor = persistStore(store);