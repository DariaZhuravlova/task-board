import {configureStore} from "@reduxjs/toolkit";
// import {api} from "@/shared/api/api";

export const createReduxStore = () =>
    configureStore({
        reducer: {
            // [api.reducerPath]: api.reducer,
        },
        // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    });

export type AppStore = ReturnType<typeof createReduxStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
