import * as types from './../constant/ActionTypes';

export const listAll = () => {
    return {
        type : types.LIST_ALL
    }
}

export const addProduct = (product) => {
    return {
        type : types.ADD_PRODUCT,
        product
    }
}
export const isShowProducts = () => {
    return {
        type : types.IS_SHOW_FORM,
        
    }
}
export const editProduct = (id) => {
    return {
        type : types.PRODUCT_EDITTING,
        id
    }
}
export const deleteProduct = (id) => {
    return {
        type : types.DELETE_PRODUCT,
        id
    }
}
export const isShowPopup = () => {
    return {
        type : types.IS_SHOW_POPUP_FORM,
    }
}
export const onClearProductEditing = () => {
    return {
        type : types.PRODUCT_EDITTING_CLEAR
    }
} 
