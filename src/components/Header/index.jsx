import { useState } from 'react';
import {
    Container, Navigation, HeaderLink, Options, Profile, LinkContainer, LogOut, Content, CartBadge,
    MobileBar, MenuButton, Overlay, MobileMenu, MobileMenuHeader, MobileNavLink, MobileProfile, MobileCartLink
} from './style.js'

import { ListIcon, ShoppingCartIcon, UserCircleIcon, XIcon } from "@phosphor-icons/react";
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext.jsx';
import { useCart } from '../../hooks/CartContext.jsx';

export function Header() {

    const navigate = useNavigate();
    const { pathname } = useResolvedPath();
    const { logOut, userInfo } = useUser()
    const { cartProducts } = useCart()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const cartCount = cartProducts.reduce((acc, product) => acc + product.quantity, 0)

    function closeMenu() {
        setIsMenuOpen(false)
    }

    function logOutUser() {
        logOut()
        closeMenu()
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

            <MobileBar>
                <MenuButton onClick={() => setIsMenuOpen(true)} aria-label="Abrir menu">
                    <ListIcon size={26} />
                </MenuButton>

                <MobileCartLink to="/cart" onClick={closeMenu}>
                    <ShoppingCartIcon color='#fff' size={24} />
                    {cartCount > 0 && <CartBadge key={cartCount}>{cartCount}</CartBadge>}
                </MobileCartLink>
            </MobileBar>

            <Overlay $isOpen={isMenuOpen} onClick={closeMenu} />

            <MobileMenu $isOpen={isMenuOpen}>
                <MobileMenuHeader>
                    <MenuButton onClick={closeMenu} aria-label="Fechar menu">
                        <XIcon size={24} />
                    </MenuButton>
                </MobileMenuHeader>

                <MobileProfile>
                    <UserCircleIcon color='#fff' size={32} />
                    <div>
                        <p>Olá, <span>{userInfo.name}</span></p>
                        <LogOut onClick={logOutUser}>Sair</LogOut>
                    </div>
                </MobileProfile>

                <MobileNavLink to="/" $isActive={pathname === '/'} onClick={closeMenu}>Home</MobileNavLink>
                <MobileNavLink to="/menu" $isActive={pathname === '/menu'} onClick={closeMenu}>Cardápio</MobileNavLink>
            </MobileMenu>
        </Container>
    )
}