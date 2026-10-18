import { useState } from "react";
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";

import { useLocation, useNavigate } from "react-router-dom";
import '../styles.css'
import { useCart } from "../../../hooks/CartContext";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export default function CheckOutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const { state: { dpmCheckerLink } } = useLocation()
    const { cartProducts, clearCart } = useCart()

    const navigate = useNavigate()


    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            console.error("Stripe não carregou! Tente novamente.")
            return;
        }

        setIsLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            redirect: 'if_required',
        });


        if (error) {
            if (error.type === "card_error" || error.type === "validation_error") {//se for algum erro do cartao, ele vai mostrar aqui
                setMessage(error.message);
                toast.error(error.message)
            } else {
                setMessage("An unexpected error occurred.");// se for um erro inesperado, aqui.
            }
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {// mas se der tudo certo e o status for sucesso, ele vai cair aqui.
            try {
                const products = cartProducts.map((product) => {//mapeia o que tem dentro do carrinho
                    return { id: product.id, quantity: product.quantity, price: product.price } // devolve o id, quantidade e preço.
                })
                const { status } =
                    await api.post('/create-orders', { products }, {
                        validateStatus: () => true
                    })

                if (status === 200 || status === 201) {// nesse bloco, se tudo der certo ele vai cair na pagina de pagamento e o carrinho será limpo.
                    setMessage("Pagamento realizado com sucesso!");
                    setTimeout(() => {
                        navigate(`/complete-payment?payment_intent_client_secret=${paymentIntent.client_secret}`)
                    }, 2000);
                    clearCart()
                    toast.success('Pedido realizado com sucesso!🍔😁')
                } else if (status === 400) {// se der ruim, cai aqui.
                    setMessage("Falha ao realizar pedido. Tente novamente.")
                    toast.error('Falha ao realizar pedido. Tente novamente.')
                } else {
                    throw new Error()
                }

            } catch (error) {
                setMessage("O pagamento foi autorizado, mas houve uma falha ao registrar o pedido no sistema. Entre em contato com o suporte.")
                toast.error('Deu ruim no sistema😭')
            }
        }
        else {
            navigate(`/complete-payment?payment_intent_client_secret=${paymentIntent.client_secret}`)//não deu erro e sem sucesso, ele vai cair aqui.
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "accordion"
    }

    return (
        <div className="container">
            <form id="payment-form" onSubmit={handleSubmit}>

                <PaymentElement id="payment-element" options={paymentElementOptions} />
                <button disabled={isLoading || !stripe || !elements} id="submit" className="button">
                    <span id="button-text">
                        {isLoading ? <div className="spinner" id="spinner"></div> : "Pagar agora"}
                    </span>
                </button>
                {/* Show any error or success messages */}
                {message && <div id="payment-message">{message}</div>}
            </form>
        </div>
    );
}