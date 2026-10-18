import { useLocation } from "react-router-dom"
import { Elements } from "@stripe/react-stripe-js"
import stripePromise from '../../config/stripeConfig'
import CheckOutForm  from "../../components/Stripe/CheckOutForm"

export function CheckOut(){
    const {state: {clientSecret}} = useLocation()

    if(!clientSecret){
        return (<div>Erro! Volte e tente novamente.</div>)
    }

    return(
        <Elements stripe={stripePromise} options={{clientSecret}}>
            <CheckOutForm />
        </Elements>
    )
}