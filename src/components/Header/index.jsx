import { Container, Navigation, HeaderLink, Options, Profile, LinkContainer, LogOut, Content, CartBadge } from './style.js'

import { ShoppingCartIcon, UserCircleIcon } from "@phosphor-icons/react";
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext.jsx';
import { useCart } from '../../hooks/CartContext.jsx';

export function Header() {

    const navigate = useNavigate();
    const { pathname } = useResolvedPath();
    const { logOut, userInfo } = useUser()
    const { cartProducts } = useCart()

    const cartCount = cartProducts.reduce((acc, product) => acc + product.quantity, 0)

    function logOutUser() {
        logOut()
        navigate('/login');
    }

    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HeaderLink to="/" $isActive={pathname === '/'}>Home</HeaderLink>
                        <hr />
                        <HeaderLink to="/menu" $isActive={pathname === '/menu'}>Cardápio</HeaderLink>
                    </div>
                </Navigation>

                <Options>
                    <Profile>
                        <UserCircleIcon color='#fff' size={32} />
                        <div>
                            <p>Olá, <span>{userInfo.name}</span></p>
                            <LogOut onClick={logOutUser}>Sair</LogOut>
                        </div>
                    </Profile>

                    <LinkContainer>
                        <HeaderLink to="/cart">
                            <ShoppingCartIcon color='#fff' size={22} />
                            Carrinho
                            {cartCount > 0 && <CartBadge key={cartCount}>{cartCount}</CartBadge>}
                        </HeaderLink>
                    </LinkContainer>
                </Options>


            </Content>

        </Container>
    )
}