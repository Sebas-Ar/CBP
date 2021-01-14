import { 
    UPDATE_ITEMS,
    UPDATE_CATEGORY_NAME,
    UPDATE_SUBCATEGORY_NAME,
    UPDATE_CATEGORY_LIST,
    UPDATE_SUBCATEGORY_LIST
 } from "../actions/menuActions";

const menuReducer = (state = {itemsList: [], categoryName: "", subcategoryName: ""}, action) => {

    switch (action.type) {
        case UPDATE_ITEMS:
            return {...state, ...action.payload}
        case UPDATE_CATEGORY_NAME:
            return {...state, ...action.payload}
        case UPDATE_SUBCATEGORY_NAME:
            return {...state, ...action.payload}
        case UPDATE_CATEGORY_LIST:
            return {...state, ...action.payload}
        case UPDATE_SUBCATEGORY_LIST:
            return {...state, ...action.payload}
        default:
            return {...state}
    }

}

export default menuReducer