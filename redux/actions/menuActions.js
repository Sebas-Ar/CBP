export const UPDATE_ITEMS = "UPDATE_ITEMS"
export const UPDATE_CATEGORY_NAME = "UPDATE_CATEGORY_NAME"
export const UPDATE_SUBCATEGORY_NAME = "UPDATE_SUBCATEGORY_NAME"
export const UPDATE_CATEGORY_LIST = "UPDATE_CATEGORY_LIST"
export const UPDATE_SUBCATEGORY_LIST = "UPDATE_SUBCATEGORY_LIST"

export const updateItems = (itemsList = []) => ({
    type: UPDATE_ITEMS,
    payload: {itemsList}
})

export const updateCategoryName = (categoryName = "") => ({
    type: UPDATE_CATEGORY_NAME,
    payload: {categoryName}
})

export const updateSubcategoryName = (subcategoryName = "") => ({
    type: UPDATE_SUBCATEGORY_NAME,
    payload: {subcategoryName}
})

export const updateCategoryList = (categoryList = []) => ({
    type: UPDATE_CATEGORY_LIST,
    payload: {categoryList}
})

export const updateSubcategoryList = (subCategoryList = []) => ({
    type: UPDATE_SUBCATEGORY_LIST,
    payload: {subCategoryList}
})