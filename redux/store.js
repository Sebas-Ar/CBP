import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducers/rootReducer";

const initialState = {
    menu: {
        itemsList: [],
        categoryName: "",
        subcategoryName: "",
        categoryList: [],
        subCategoryList: [],
        tagList: []
    }
}

const middleware = [thunk]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store