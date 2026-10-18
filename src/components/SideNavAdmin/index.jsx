import { navLinks } from "./navLinks"
import Logo from '../../assets/logo.svg'
import { SignOutIcon } from "@phosphor-icons/react"
import { Container, Footer, NavLink, NavLinkContainer } from "./style"
import { useUser } from '../../hooks/UserContext'
import { useResolvedPath } from "react-router-dom"

export function SideNavAdmin() {
    const { logOut } = useUser()
    const {pathname} = useResolvedPath()

    console.log(pathname)

    return (
        <Container>
            <img src={Logo} alt="Logo DevBurguer" />

            <NavLinkContainer>
                {navLinks.map(link => (
                    <NavLink key={link.id} to={link.path} $isActive={pathname === link.path}>
                        {link.icon}
                        <span>{link.label}</span>
                    </NavLink>
                ))}
            </NavLinkContainer>

            <Footer>
                <NavLink to="/login" onClick={logOut}>
                    <SignOutIcon />
                    <p>Sair</p>
                </NavLink>
            </Footer>
        </Container>
    )
}