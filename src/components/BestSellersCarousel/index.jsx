import { useEffect, useState } from 'react'
import { api } from '../../services/api.js'
import CarouselModule from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { Container, Title } from './style.js'
import { CardProduct } from '../CardProduct/index.jsx';
import { formatPrice } from '../../utils/FormatPrice.js';

export function BestSellersCarousel() {

    const [products, setProducts] = useState([])

    useEffect(() => {

        async function loadProducts() {
            const { data } = await api.get('/products')

            // mock: ainda não existe uma rota de ranking de vendas no back-end,
            // então por enquanto mostramos os primeiros produtos cadastrados.
            const mostOrdered = data
                .slice(0, 8)
                .map(product => (
                    { currencyValue: formatPrice(product.price), ...product }
                ))

            setProducts(mostOrdered)
        }

        loadProducts()

    }, [])

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1280, min: 690 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 690, min: 0 },
            items: 2
        }
    };

    const Carousel = CarouselModule.default ?? CarouselModule

    if (!products.length) return null

    return (
        <Container>
            <Title>Virou vício 🔥</Title>

            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={false}
                itemClass="carousel-item">

                {products.map(product => {
                    return <CardProduct key={product.id} product={product}/>
                })}

            </Carousel>
        </Container>
    )
}
