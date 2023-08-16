import CartActionTypes from "./action-types"

export const AddProduct = payload => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload
})

export const RemoveProduct = payload => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload
})

export const AddQuantity = payload => ({
    type: CartActionTypes.ADD_QUANTITY,
    payload
})

export const RemoveQuantity = payload => ({
    type: CartActionTypes.REMOVE_QUANTITY,
    payload
})