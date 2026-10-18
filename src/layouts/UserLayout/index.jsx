import { Outlet } from "react-router-dom";
import {Footer, Header} from '../../components'
import { Container, Content } from './style'

export function UserLayout(){

    return(
        <Container>
            <Header />
            <Content>
                <Outlet />
            </Content>
            <Footer />
        </Container>
    )
}