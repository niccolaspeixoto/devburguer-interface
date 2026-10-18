import { CategoryCarousel, OffersCarousel} from "../../components";
import { Banner, Container, Content } from "./styles";
import { useUser } from "../../hooks/UserContext";


export function Home(){

    return (
        <main>
            <Banner><h1>Bem-vindo(a)!</h1></Banner>

            <Container>
                <Content>
                    <CategoryCarousel />
                    <OffersCarousel />
                </Content>
            </Container>
            
        </main>
    )
}