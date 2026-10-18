import PropTypes from 'prop-types'
import { navLinks } from "./navLinks"
import Logo from '../../assets/logo.svg'
import { SignOutIcon, XIcon } from "@phosphor-icons/react"
import { CloseButton, Container, Footer, NavLink, NavLinkContainer, Overlay } from "./style"
import { useUser } from '../../hooks/UserContext'
import { useResolvedPath } from "react-router-dom"

export function SideNavAdmin({ isOpen, onClose }) {
    const { logOut } = useUser()
    const {pathname} = useResolvedPath()

    function logOutUser() {
        logOut()
        onClose?.()
    }

    return (
        <>
            <Overlay $isOpen={isOpen} onClick={onClose} />

            <Container $isOpen={isOpen}>
                <CloseButton onClick={onClose}>
                    <XIcon size={24} />
                </CloseButton>

                <img src={Logo} alt="Logo DevBurguer" />

                <NavLinkContainer>
                    {navLinks.map(link => (
                        <NavLink key={link.id} to={link.path} $isActive={pathname === link.path} onClick={onClose}>
                            {link.icon}
                            <span>{link.label}</span>
                        </NavLink>
                    ))}
                </NavLinkContainer>

                <Footer>
                    <NavLink to="/login" onClick={logOutUser}>
                        <SignOutIcon />
                        <p>Sair</p>
                    </NavLink>
                </Footer>
            </Container>
        </>
    )
}

SideNavAdmin.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func
}