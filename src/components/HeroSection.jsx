import styled from 'styled-components';
import video from './video/video.mp4';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useState } from 'react';
import { ButtonS } from './Button';

const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.4);
        z-index: 2;
    }
`
const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
`
const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background-color: #232a34;
`
const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const HeroH1 = styled.h1`
    color: #ffffff7b;
    font-size: clamp(2rem, 5vw, 4rem);
    text-align: center;
    font-family: 'Sancreek', cursive;
`
const HeroP = styled.p`
    margin-top: 24px;
    color: white;
    font-size: clamp(1rem, 3vw, 1.5rem);
    text-align: center;
    max-width: 600px;
    cursor: default;
    >span {
        transition: all .5s;
        &:hover {
            color: #aa7340;
        }
    }
`
const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ArrowForward = styled(ArrowForwardIcon)`
    margin-left: 8px;
    font-size: 1.3rem;
`
const ArrowRight = styled(ChevronRightIcon)`
    margin-left: 8px;
    font-size: 1.3rem;
`

export default function HeroSection() {
    const [hover, setHover] = useState(false);

    const handleHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id="home" title="Video by Aghyad Najjar from Pexels">
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='vdeo/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Frizeria Stallion</HeroH1>
                <HeroP>
                    <span>Frizerie</span> ∾ <span>Barber shop</span> ∾ <span>Pensat</span>
                </HeroP>
                <HeroBtnWrapper>
                    <ButtonS to='rezervari'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHover}
                        primary="true"
                        dark="true" >
                        Fă o programare {hover ? <ArrowForward /> : <ArrowRight />}
                    </ButtonS>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}
