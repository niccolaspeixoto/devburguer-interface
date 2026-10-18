import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { SideNavAdmin } from "../../components";
import { Container, MenuButton, MobileTopBar } from './style'
import { ListIcon } from "@phosphor-icons/react";
import Logo from '../../assets/logo.svg'

export function AdminLayout() { // esse bloco funciona assim: ele vai no localstorage e pega tudo que vem de lá. Mas eu quero somente o que está dentro de admin.
    const { admin: isAdmin } = JSON.parse(
        localStorage.getItem('devburger:userData')
    )

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    // com o valor de true ou false, ele faz esse processo aqui embaixo
    return isAdmin ?
        (
            <Container>
                <SideNavAdmin isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
                <main>
                    <MobileTopBar>
                        <MenuButton onClick={() => setIsSidebarOpen(true)}>
                            <ListIcon size={26} />
                        </MenuButton>
                        <img src={Logo} alt="Logo DevBurguer" />
                    </MobileTopBar>
                    <section>
                        <Outlet />
                    </section>
                </main>

            </Container>
        ) : <Navigate to='/login' />
}