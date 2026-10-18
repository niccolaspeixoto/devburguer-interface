import { CategoryCarousel, OffersCarousel} from "../../components";
import { Badges, Container, Content, CtaButton, Eyebrow, Hero, HeroContent, HeroImageWrap, Subtitle, Title } from "./styles";
import LogoBurger from '../../assets/logo-devburguer-carrinho.svg'

export function Home(){

    return (
        <main>
            <Hero>
                <HeroContent>
                    <Eyebrow>🔥 Artesanal e na brasa</Eyebrow>

                    <Title>
                        O MELHOR<br />
                        HAMBÚRGUER<br />
                        ESTÁ <span>AQUI!</span>
                    </Title>

                    <Subtitle>
                        Ingredientes frescos, montado na hora e entregue
                        quentinho até você. Chega de pedir o mesmo de sempre.
                    </Subtitle>

                    <CtaButton to="/menu">Ver Cardápio →</CtaButton>

                    <Badges>
                        <li>⭐ 4.8 avaliação</li>
                        <li>🛵 Entrega em 30-40 min</li>
                        <li>🔥 +500 pedidos feitos</li>
                    </Badges>
                </HeroContent>

                <HeroImageWrap>
                    <img src={LogoBurger} alt="Dev Burguer" />
                </HeroImageWrap>
            </Hero>

            <Container>
                <Content>
                    <CategoryCarousel />
                    <OffersCarousel />
                </Content>
            </Container>

        </main>
    )
}
