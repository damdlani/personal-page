import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import themeReducer from "../common/ThemeSlice";
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: false,
        }).concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export type RootState = ReturnType<typeof store.getState>;
export default store;