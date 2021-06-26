import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import Img9 from './images/img9.jpg';
import Img10 from './images/img10.jpg';
import Img11 from './images/img11.jpg';
import Button from '@material-ui/core/Button';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import TopPage from "./TopPage";

const Container = styled.div`
    min-height: 100vh;
    background-image: linear-gradient(-180deg, #79634f 0%, #3a3a3a 97%);
    overflow-y: hidden;
`
const AboutContainer = styled.main`
    max-width: 1100px;
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient(to left, white, grey 5% 95%, white 100%);
    margin: calc(-50vh - 80px) auto 0;
`
const AboutWrapper = styled.div`
    max-width: 1000px;
    min-height: 1150px;
    width: 90%;
    margin: 0 auto;
    background-color: #f5f5f5;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: calc(50vh + 80px) 0 70px;
    `
const PriceCardContainer = styled.aside`
    background-color: white;
    width: 300px;
    height: 450px;
    transition: all .6s;
    box-shadow: 0 0 10px 0 lightgray;
    &:nth-child(1) {
        align-self: flex-end;
    }
    &:nth-child(2) {
        align-self: center;
    }
    &:nth-child(3) {
        align-self: flex-start;
    }
    &:hover {
        box-shadow: 0 0 20px 10px lightgray;
    }
`
const ImgWrapper = styled.div`
    width: 100%;
    object-fit: cover;
    background-image: linear-gradient(-125deg, #79634f76, #573618ba);
    position: relative;
    overflow: hidden;
    &::before {
        content: '';
        position: absolute;
        bottom: -300px;
        left: -300px;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background-color: #ff000058;
        filter:  invert(50%);
        transition: all .5s;
        z-index: 1;
    }
    &::after {
        content: '';
        position: absolute;
        top: -300px;
        right: -300px;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background-color: #7878fc4e;
        filter:  saturate(50%);
        transition: all .5s;
        z-index: 1;
    }
    &:hover {
        >img {
            clip-path: polygon(100% 0, 100% 41%, 100% 100%, 0 100%, 0 0);
        }
        &::before {
            bottom: -100px;
            left: -150px;
        }
        &::after {
            top: -100px;
            right: -150px;
        }
    }
`
const ImgCard = styled.img`
    clip-path: polygon(84% 9%, 95% 40%, 56% 98%, 7% 68%, 13% 15%);
    width: 100%;
    transition: all .6s;
`
const PackageCard = styled.section`
    height: 250px;
    display: flex;
    flex-direction: column;
    position: relative;
    >button {
        background-color: #3a3a3a;
        border-radius: 0;
        span, a {
            color: white;
            text-decoration: none;

        }
        &:hover {
            color: #3a3a3a;
        }
    }
`
const TitleCard = styled.h3`
    background-color: #010606;
    color: white;
    position: absolute;
    top: -20px;
    left: 0;
    margin: 0;
    padding: 5px 30px 5px 5px;
    z-index: 2;
`
const PriceCard = styled.small`
    text-align: right;
`
const PackagesContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
const Package = styled.p`
    margin: 0;
    text-decoration: underline;
`

export default function Preturi() {
    window.scrollTo(0, 0);

    return (
        <>
            <Container>
                <TopPage />
                <AboutContainer>
                    <AboutWrapper>
                        <PriceCardContainer>
                            <ImgWrapper>
                                <ImgCard src={Img11} alt="by Ariel Paredes from Pexels" title="by Ariel Paredes from Pexels" />
                            </ImgWrapper>
                            <PackageCard>
                                <TitleCard>Pachet Creative</TitleCard>
                                <PriceCard>30<strong>RON</strong></PriceCard>
                                <PackagesContainer>
                                    <Package>✄ Tuns</Package>
                                    <Package>✄ Aranjat</Package>
                                    <Package>✄ Loțiune Tonică</Package>
                                </PackagesContainer>
                                <Button
                                    variant="contained"
                                    startIcon={<EventAvailableIcon />}
                                >
                                    <LinkR to="/rezervari">
                                        Fă o programare
                                    </LinkR>
                                </Button>
                            </PackageCard>
                        </PriceCardContainer>
                        <PriceCardContainer>
                            <ImgWrapper>
                                <ImgCard src={Img9} alt="by mostafa meraji from Pexels" title="by mostafa meraji from Pexels" />
                            </ImgWrapper>
                            <PackageCard>
                                <TitleCard>Pachet Express</TitleCard>
                                <PriceCard>50<strong>RON</strong></PriceCard>
                                <PackagesContainer>
                                    <Package>✄ Tuns</Package>
                                    <Package>✄ Spălat</Package>
                                    <Package>✄ Aranjat</Package>
                                    <Package>✄ Tuns Barbă</Package>
                                </PackagesContainer>
                                <Button
                                    variant="contained"
                                    startIcon={<EventAvailableIcon />}
                                >
                                    <LinkR to="/rezervari">
                                        Fă o programare
                                    </LinkR>
                                </Button>
                            </PackageCard>
                        </PriceCardContainer>
                        <PriceCardContainer>
                            <ImgWrapper>
                                <ImgCard src={Img10} alt="by Thgusstavo Santana from Pexels" title="by Thgusstavo Santana from Pexels" />
                            </ImgWrapper>
                            <PackageCard>
                                <TitleCard>Pachet Lumberjack</TitleCard>
                                <PriceCard>90<strong>RON</strong></PriceCard>
                                <PackagesContainer>
                                    <Package>✄ Tuns</Package>
                                    <Package>✄ Spălat</Package>
                                    <Package>✄ Aranjat</Package>
                                    <Package>✄ Tuns Barbă + Contur</Package>
                                    <Package>✄ Masaj</Package>
                                    <Package>✄ Loțiune Tonică</Package>
                                    <Package>✄ Pensat</Package>
                                </PackagesContainer>
                                <Button
                                    variant="contained"
                                    startIcon={<EventAvailableIcon />}
                                >
                                    <LinkR to="/rezervari">
                                        Fă o programare
                                    </LinkR>
                                </Button>
                            </PackageCard>
                        </PriceCardContainer>
                    </AboutWrapper>
                </AboutContainer>
            </Container>
        </>
    )
}
