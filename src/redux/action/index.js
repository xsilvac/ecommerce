//Funcion para añadir producto al carrito
export const addCart = (product) => {
    return{
        type:'ADDITEM',
        payload: product
    }
}

//Funcion para eliminar producto al carrito
export const deliteCart = (product) => {
    return{
        type:'DELITEITEM',
        payload: product
    }
}