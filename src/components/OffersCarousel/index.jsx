import { useEffect, useState } from 'react'
import { api } from '../../services/api.js'
import CarouselModule from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { Container, Title } from './style.js'
import { CardProduct } from '../CardProduct/index.jsx';
import { formatPrice } from '../../utils/FormatPrice.js';


export function OffersCarousel() {

    const [offers, setOffers] = useState([])

    useEffect(() => {

        async function loadProducts() {
            const { data } = await api.get('/products')

            const onlyOffers = data.filter( products => products.offer)
            .map(product => (
                {currencyValue: formatPrice(product.price), ...product}
            ))

            setOffers(onlyOffers)
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

    return (
        <Container>
            <Title>Ofertas do dia</Title>

            { <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={false}
                itemClass="carousel-item">

                {offers.map(product => {
                    return <CardProduct key={product.id} product={product}/>
                })}


            </Carousel> }
        </Container>
    )
}