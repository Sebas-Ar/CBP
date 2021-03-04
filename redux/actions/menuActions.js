export const UPDATE_ITEMS = "UPDATE_ITEMS"
export const UPDATE_ITEM_SELECTED = "UPDATE_ITEM_SELECTED"
export const UPDATE_CATEGORY_NAME = "UPDATE_CATEGORY_NAME"
export const UPDATE_SUBCATEGORY_NAME = "UPDATE_SUBCATEGORY_NAME"
export const UPDATE_CATEGORY_LIST = "UPDATE_CATEGORY_LIST"
export const UPDATE_SUBCATEGORY_LIST = "UPDATE_SUBCATEGORY_LIST"
export const UPDATE_IMG_SELECTED = "UPDATE_IMG_SELECTED"
export const UPDATE_IMG_ID = "UPDATE_IMG_ID"
export const UPDATE_TAG_LIST = "UPDATE_TAG_LIST"

export const updateItems = (itemsList = []) => ({
    type: UPDATE_ITEMS,
    payload: {itemsList}
})

export const updateItemSelected = (itemSelected = '') => ({
    type: UPDATE_ITEM_SELECTED,
    payload: {itemSelected}
})

export const updateImgSelected = (imgSelected = '') => ({
    type: UPDATE_IMG_SELECTED,
    payload: {imgSelected}
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

export const updateImgId = (imgId = '') => ({
    type: UPDATE_IMG_ID,
    payload: {imgId}
})

export const updateTagList = (tagList = []) => ({
    type: UPDATE_TAG_LIST,
    payload: {tagList}
})