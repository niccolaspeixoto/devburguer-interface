import { BestSellersCarousel, CategoryCarousel, CategoryHighlights, OffersCarousel} from "../../components";
import {
    Blob, Container, Content, CtaButton, Hero, HeroImage, HeroInner, HeroText, HeroVisual,
    Marquee, MarqueeTrack, Sticker, Subtitle, Title
} from "./styles";
import LogoBurger from '../../assets/logo-devburguer-carrinho.svg'

const marqueeItems = ['Feito na brasa', 'Ingredientes frescos', 'Entrega rápida', 'Montado na hora']

export function Home(){

    return (
        <main>
            <Hero>
                <HeroInner>
                    <HeroText>
                        <Title>
                            O MELHOR<br />
                            HAMBÚRGUER<br />
                            ESTÁ <span>AQUI!</span>
                        </Title>

                        <Subtitle>
                            Montado na hora, do seu jeito. Sem fórmula pronta,
                            sem pressa — só sabor de verdade.
                        </Subtitle>

                        <CtaButton to="/menu">Ver Cardápio</CtaButton>
                    </HeroText>

                    <HeroVisual>
                        <Blob />
                        <HeroImage src={LogoBurger} alt="Dev Burguer" />
                        <Sticker>100% Artesanal</Sticker>
                    </HeroVisual>
                </HeroInner>

                <Marquee>
                    <MarqueeTrack>
                        {[...marqueeItems, ...marqueeItems].map((item, index) => (
                            <span key={index}>{item}</span>
                        ))}
                    </MarqueeTrack>
                </Marquee>
            </Hero>

            <Container>
                <Content>
                    <CategoryCarousel />
                    <OffersCarousel />
                    <BestSellersCarousel />
                    <CategoryHighlights />
                </Content>
            </Container>

        </main>
    )
}
