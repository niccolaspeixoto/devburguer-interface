import { useContext, createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([]);

    function addProductToCart(product) { //adiciona um produto ao carrinho
        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

        let newProductsInCart = []
        if (cartIndex >= 0) {
            newProductsInCart = [...cartProducts];
            newProductsInCart[cartIndex].quantity += 1;

            setCartProducts(newProductsInCart);
        } else {
            product.quantity = 1;
            newProductsInCart = [...cartProducts, product];
            setCartProducts(newProductsInCart);
        }

        updateLocalStorage(newProductsInCart);
        toast.success(`${product.name} adicionado ao carrinho! 🛒`)
    }

    const clearCart = () => { //limpa o carrinho
        setCartProducts([]);
        updateLocalStorage([]);
    }

    const deleteProduct = (productId) => { //deleta um produto do carrinho
        setCartProducts(cartProducts.filter((prd) => prd.id !== productId));//pega todos os produtos do carrinho que não tem o id do produto que quero deletar e atualiza o estado do carrinho com esses produtos
        updateLocalStorage(cartProducts.filter((prd) => prd.id !== productId));
    }


    const increaseProduct = (productId) => { //aumenta a quantidade de um produto no carrinho
        const newCart = cartProducts.map((prd) => {
            return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd;
        });
        setCartProducts(newCart);

        updateLocalStorage(newCart);
    }

    const decreaseProduct = (productId) => { //diminui a quantidade de um produto no carrinho
        const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);
        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map((prd) => {
                return prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd;
            });
            setCartProducts(newCart);

        } else {
            deleteProduct(productId);
        }
    }

    const updateLocalStorage = (products) => {
        localStorage.setItem('devburguer:cartProducts', JSON.stringify(products));
    }

    useEffect(() => {
        const clientCartData = localStorage.getItem('devburguer:cartProducts');
        if (clientCartData) {
            setCartProducts(JSON.parse(clientCartData));
        }
    }, []);




    return (<CartContext.Provider value={{ cartProducts, addProductToCart, clearCart, deleteProduct, increaseProduct, decreaseProduct }}>
        {children}
    </CartContext.Provider >
    )
}


export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}