import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import AsyncStorage from "@react-native-async-storage/async-storage"
import {
    persistReducer
} from "redux-persist"
import { combineReducers } from "redux"
import userStore from './UserStore'

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["userStore"],
}

const rootReducer = combineReducers({
    userStore: userStore,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})