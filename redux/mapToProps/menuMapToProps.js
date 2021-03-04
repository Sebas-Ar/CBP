import { 
    updateItems,
    updateCategoryName,
    updateSubcategoryName,
    updateCategoryList,
    updateSubcategoryList,
    updateItemSelected,
    updateImgSelected,
    updateImgId,
    updateTagList
 } from "../actions/menuActions"

 export const mapStateToProps = (state) => ({
     menu: state.menu
 })

 export const mapDispatchToProps = {
     updateItems: updateItems,
     updateSubcategoryName: updateSubcategoryName,
     updateCategoryName: updateCategoryName,
     updateSubcategoryList: updateSubcategoryList,
     updateCategoryList: updateCategoryList,
     updateItemSelected: updateItemSelected,
     updateImgSelected: updateImgSelected,
     updateImgId:updateImgId,
     updateTagList:updateTagList
 }