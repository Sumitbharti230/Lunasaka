import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
    CartItems: (() => {
        const cart = localStorage.getItem("cart");

        if (cart) {
            try {
                return JSON.parse(cart);
            } catch (error) {
                console.error("Error parsing cart from localStorage:", error);
                return [];
            }
        }
        return [];
    })(),


};




const CartReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_CART": {
            const isExit = state.CartItems.find((item) => item.id === action.payload.id);

            if (isExit) {
                const updatedCart = state.CartItems.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );

                return { ...state, CartItems: updatedCart };
            } else {
                const newCartItem = { ...action.payload, qty: 1 };
                const updateCartItems = [...state.CartItems, newCartItem];

                alert(`${action.payload.name} Added to cart`);

                return {
                    ...state,
                    CartItems: updateCartItems,
                };
            }
        }

        case "Increment": {
            const updatedCart = state.CartItems.map((item) =>
                item.id === action.payload.id
                    ? { ...item, qty: item.qty + 1 }
                    : item
            );
            return {
                ...state,
                CartItems: updatedCart,
            };
        }

        case "Decrement": {
            const updatedCart = state.CartItems.map((item) =>
                item.id === action.payload.id && item.qty > 1
                    ? { ...item, qty: item.qty - 1 }
                    : item
            );
            return {
                ...state,
                CartItems: updatedCart,
            };
        }

        case "Delete": {
            const filteredItems = state.CartItems.filter((item) => item.id !== action.payload.id);
            return {
                ...state,
                CartItems: filteredItems,
            };
        }

        case "ClearCart": {
            return {
                ...state,
                CartItems: [],
            };
        }

        default: {
            return state;
        }
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.CartItems));
    }, [state.CartItems]);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};
