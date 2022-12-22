import { configureStore, combineReducers } from '@reduxjs/toolkit';


const rootReducer = combineReducers({
//   product: product.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;