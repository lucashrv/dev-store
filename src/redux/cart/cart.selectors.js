export const selectProductsCount = (rootReducer) => {
    return rootReducer.cartReducer.products.reduce((acc, curr) =>
        acc + curr.quantity,
        0
    )
}

export const selectProductsTotalPrice = (rootReducer) => {
    return rootReducer.cartReducer.products.reduce((acc, curr) =>{
        const number = curr.price.split(' ')

        return acc + +number[1].replace('.', '').replace(',', '.') * curr.quantity
    }, 0)
}