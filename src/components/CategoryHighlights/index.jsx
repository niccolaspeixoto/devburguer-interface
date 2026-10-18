import { useEffect, useState } from 'react'
import { api } from '../../services/api.js'
import { formatPrice } from '../../utils/FormatPrice.js'
import { CardProduct } from '../CardProduct'
import { Container, Grid, Slot, Tag, Title } from './style.js'

// mock: ainda não existe uma rota de ranking de vendas no back-end,
// então por enquanto cada destaque é o primeiro produto cadastrado na categoria.
const HIGHLIGHTS = [
    { categoryName: 'Hambúrgueres', label: 'A estrela do cardápio', emoji: '⭐' },
    { categoryName: 'Sobremesas', label: 'Não dá pra resistir', emoji: '🍰' },
    { categoryName: 'Bebidas', label: 'Pra matar a sede', emoji: '🥤' },
]

export function CategoryHighlights() {

    const [highlights, setHighlights] = useState([])

    useEffect(() => {

        async function loadHighlights() {
            const [{ data: products }, { data: categories }] = await Promise.all([
                api.get('/products'),
                api.get('/categories'),
            ])

            const resolved = HIGHLIGHTS.map(({ categoryName, label, emoji }) => {
                const category = categories.find(category => category.name === categoryName)
                const product = category && products.find(product => product.category_id === category.id)

                if (!product) return null

                return {
                    label,
                    emoji,
                    product: { currencyValue: formatPrice(product.price), ...product }
                }
            }).filter(Boolean)

            setHighlights(resolved)
        }

        loadHighlights()

    }, [])

    if (!highlights.length) return null

    return (
        <Container>
            <Title>Os Queridinhos da Casa</Title>

            <Grid>
                {highlights.map(({ label, emoji, product }) => (
                    <Slot key={product.id}>
                        <Tag>{emoji} {label}</Tag>
                        <CardProduct product={product} />
                    </Slot>
                ))}
            </Grid>
        </Container>
    )
}
