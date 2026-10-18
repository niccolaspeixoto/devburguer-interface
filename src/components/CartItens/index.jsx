import { Table } from '../index'
import { useCart } from '../../hooks/CartContext'
import { formatPrice } from '../../utils/FormatPrice'
import {
    ButtonGroup, CardBottom, CardInfo, CardItem, CardsList, CardTop, CardTotal,
    EmptyCart, ProductImage, TableWrapper, TotalPrice, TrashImage
} from './style'
import TrashIcon from '../../assets/trash.svg'

export function CartItens() {

    const { cartProducts, increaseProduct, decreaseProduct, deleteProduct} = useCart()

    if (!cartProducts?.length) {
        return (
            <>
                <TableWrapper>
                    <Table.Root>
                        <Table.Header>
                            <Table.Tr>
                                <Table.Th></Table.Th>
                                <Table.Th>Itens</Table.Th>
                                <Table.Th>Preço</Table.Th>
                                <Table.Th>Quantidade</Table.Th>
                                <Table.Th>Total</Table.Th>
                                <Table.Th></Table.Th>
                            </Table.Tr>
                        </Table.Header>
                    </Table.Root>
                </TableWrapper>
                <EmptyCart>Não há produtos no carrinho</EmptyCart>
            </>
        )
    }

    return (
        <>
            <TableWrapper>
                <Table.Root>
                    <Table.Header>
                        <Table.Tr>
                            <Table.Th></Table.Th>
                            <Table.Th>Itens</Table.Th>
                            <Table.Th>Preço</Table.Th>
                            <Table.Th>Quantidade</Table.Th>
                            <Table.Th>Total</Table.Th>
                            <Table.Th></Table.Th>
                        </Table.Tr>
                    </Table.Header>

                    <Table.Body>
                        {cartProducts.map((product) => (
                            <Table.Tr key={product.id}>
                                <Table.Td>
                                    <ProductImage src={product.url} alt={product.name} />
                                </Table.Td>
                                <Table.Td>{product.name}</Table.Td>
                                <Table.Td>R$ {product.currencyValue}</Table.Td>
                                <Table.Td>
                                    <ButtonGroup>
                                        <button onClick={() => decreaseProduct(product.id)}>-</button>
                                        {product.quantity}
                                        <button onClick={() => increaseProduct(product.id)}>+</button>
                                    </ButtonGroup>
                                </Table.Td>
                                <Table.Td>
                                    <TotalPrice>Total</TotalPrice>
                                    {formatPrice(product.quantity * product.price)}
                                </Table.Td>
                                <Table.Td>
                                    <TrashImage src={TrashIcon} alt="Lixeira" onClick={() => deleteProduct(product.id)}></TrashImage>
                                </Table.Td>
                            </Table.Tr>
                        ))}
                    </Table.Body>
                </Table.Root>
            </TableWrapper>

            <CardsList>
                {cartProducts.map((product) => (
                    <CardItem key={product.id}>
                        <CardTop>
                            <ProductImage src={product.url} alt={product.name} />
                            <CardInfo>
                                <strong>{product.name}</strong>
                                <span>R$ {product.currencyValue}</span>
                            </CardInfo>
                            <TrashImage src={TrashIcon} alt="Lixeira" onClick={() => deleteProduct(product.id)}></TrashImage>
                        </CardTop>

                        <CardBottom>
                            <ButtonGroup>
                                <button onClick={() => decreaseProduct(product.id)}>-</button>
                                {product.quantity}
                                <button onClick={() => increaseProduct(product.id)}>+</button>
                            </ButtonGroup>
                            <CardTotal>{formatPrice(product.quantity * product.price)}</CardTotal>
                        </CardBottom>
                    </CardItem>
                ))}
            </CardsList>
        </>
    )
}