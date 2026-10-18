import Logo from '../../assets/logo-devburguer-carrinho.svg';
import { Banner, Container, Content, Title } from './styles';
import { CartItens, CartResume } from '../../components';

export function Cart() {

    return (
        <Container>
            <Banner>
                <img src={Logo} alt="Logo" />
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                <CartItens></CartItens>
                 <CartResume></CartResume>
            </Content>

        </Container>
    )
}