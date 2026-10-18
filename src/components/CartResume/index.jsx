import { Button } from '../Button'
import { Container } from './styles'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useCart } from '../../hooks/CartContext.jsx'
import { api } from '../../services/api.js'
import { formatPrice } from '../../utils/FormatPrice.js'

export function CartResume() {

    const [finalPrice, setFinalPrice] = useState(0);

    const [deliveryTax] = useState(500)

    const { cartProducts, clearCart } = useCart()
    const navigate = useNavigate()

    useEffect(() => {
        const sumAllItens = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc
        }, 0)

        setFinalPrice(sumAllItens)
    }, [cartProducts])

    const submitOrder = async () => {
        const products = cartProducts.map((product) => {
            return { id: product.id, quantity: product.quantity, price: product.price }
        })

        try {
            const { data } = await api.post('/create-payment-intent', { products })

            navigate('/checkout', {
                state: data
            })
        } catch (err) {
            toast.error('Deu ruim no sistema😭')
        }

        
    }

    return (
        <div>
            <Container>
                <div className='container-top'>
                    <h2 className='title'>Resumo do pedido</h2>
                    <p className='items'>Itens</p>
                    <p className='items-price'>{formatPrice(finalPrice)}</p>
                    <p className='delivery-tax'>Taxa de Entrega</p>
                    <p className='delivery-tax-price'>{formatPrice(deliveryTax)}</p>
                </div>

                <div className='container-bottom'>
                    <p>TOTAL</p>
                    <p>{formatPrice(finalPrice + deliveryTax)}</p>
                </div>
            </Container>

            <Button onClick={submitOrder}>Finalizar pedido</Button>
        </div>
    )
}
