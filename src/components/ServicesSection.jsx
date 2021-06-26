import styled from 'styled-components';
import Img1 from './images/img4.jpg';
import Img2 from './images/img5.jpg';
import Img3 from './images/img6.jpg';

const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #010606;
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
    `
const ServicesWrapper = styled.div`
    height: calc(100vh - 80px);
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const ServicesH1 = styled.h1`
    font-size: clamp(1.8rem, 5vw, 2.5rem);
    color: white;
    margin-bottom: 64px;
    text-align: center;
    @media screen and (max-width: 768px) {
        margin-bottom: 20px;
        margin-top: 50px;
    }
`
const ServicesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-gap: 1rem;
    padding: 0 50px;
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
const ServicesCard = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    max-height: 340px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    cursor: pointer;
    overflow: hidden;
    border: 5px solid white;
    @media screen and (max-width: 768px) {
        max-height: 30vh;
    }
`
const ServicesImg = styled.img`
    transition: all 0.5s;
    &:hover {
        transform: scale(1.1);
    }
`



export default function ServicesSection() {
    return (
        <ServicesContainer id="galerie">
            <ServicesWrapper>
                <ServicesH1>Galerie</ServicesH1>
                <ServicesGrid>
                    <ServicesCard>
                        <ServicesImg src={Img1} title="Photo by Dmitry Zvolskiy from Pexels" alt="Photo by Dmitry Zvolskiy from Pexels" />
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesImg src={Img2} title="Photo by Mídia from Pexels" alt="Photo by Mídia from Pexels" />
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesImg src={Img3} title="Photo by cottonbro from Pexels" alt="Photo by cottonbro from Pexels" />
                    </ServicesCard>
                </ServicesGrid>
            </ServicesWrapper>
        </ServicesContainer>
    )
}
