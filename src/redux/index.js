
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import BannerReducer from "./reducers/bannerReducer";
import CartReducer from "./reducers/cartReducer";
import CategoryReducer from "./reducers/categoryReducers";
import ModalReducer from "./reducers/modalReducer";
import ProductsReduser from "./reducers/productsReducer";
import UserReduser from "./reducers/userReducer";
const reducers = combineReducers({
    modalState: ModalReducer,
    categoryState: CategoryReducer,
    bannerState: BannerReducer,
    productState: ProductsReduser,
    userState: UserReduser,
    cartState: CartReducer,
})
export const store = createStore(reducers, applyMiddleware(thunk))