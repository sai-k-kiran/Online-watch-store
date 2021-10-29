
export const existingCartItem = ({cartItems, cartItemToAdd}) => {
    return cartItems.find(Item => Item.id === cartItemToAdd.id)
}

export const handleAddToCart = ({cartItems, cartItemToAdd}) => {
    const quantityIncremented = 1
    const CartItemExists = existingCartItem({cartItems, cartItemToAdd})
    if(CartItemExists){
        return cartItems.map(Item => Item.id === cartItemToAdd.id ?
            {...Item, quantity: Item.quantity + quantityIncremented} :
            Item
            )
        }
    return [...cartItems, {...cartItemToAdd, quantity: quantityIncremented}]
}

export const handleRemove = ({cartItems, cartItemToRemove}) => {
    return cartItems.filter(item => item.id !== cartItemToRemove.id)
}

export const handleRemoveItem = ({cartItems, ItemToRemove}) => {
    const existingItem = cartItems.find(item => item.id === ItemToRemove.id)
    if(existingItem.quantity === 1){
        return cartItems.filter(item => item.id !== existingItem.id)
    }
    return cartItems.map(item => item.id === existingItem.id ? 
    {...item, quantity: item.quantity - 1} : 
    item 
    )
}