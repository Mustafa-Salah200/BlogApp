import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Slice/User-Slice";
import { ActiveUser } from "./Slice/ActiveUser-Slice";
import { BlogSlice } from "./Slice/Blogs-Slice";
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    Users: userSlice.reducer,
    ActiveUser: ActiveUser.reducer,
    Blogs: BlogSlice.reducer
})
const PersistConfig = {
    key: 'root',
    version:1,
    storage
}
const PersistReducers = persistReducer(PersistConfig,rootReducer)

const store = configureStore({
    reducer: PersistReducers,
    middleware: (getDefaultMiddleware)=>{
        return getDefaultMiddleware({
            serializableCheck:{
                ignoreActions: [FLUSH, REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
            }
        })
    }
})

const Persistor = persistStore(store)
export {store,Persistor}