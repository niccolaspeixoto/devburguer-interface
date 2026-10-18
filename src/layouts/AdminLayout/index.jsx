import { Navigate, Outlet } from "react-router-dom";
import { SideNavAdmin } from "../../components";
import { Container } from './style'

export function AdminLayout() { // esse bloco funciona assim: ele vai no localstorage e pega tudo que vem de lá. Mas eu quero somente o que está dentro de admin.
    const { admin: isAdmin } = JSON.parse(
        localStorage.getItem('devburger:userData')
    )

    // com o valor de true ou false, ele faz esse processo aqui embaixo
    return isAdmin ?
        (
            <Container>
                <SideNavAdmin />
                <main>
                    <section>
                        <Outlet />
                    </section>
                </main>

            </Container>
        ) : <Navigate to='/login' />
}