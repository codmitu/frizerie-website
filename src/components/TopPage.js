import styled from 'styled-components';
import { Link as LinkR } from "react-router-dom";
import logo from './images/logo.png';
import headerImg from './images/despreNoi-header.jpg';
import { useLocation } from 'react-router';

const NavbarContainer = styled.nav`
    height: 80px;
    display: flex;
    justify-content: center;
    font-family: 'Trochut', cursive;
    background-color: #010606;
    position: relative;
    z-index: 10;
`
const NavBar = styled.div`
    height: 100%;
    width: 1100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.img`
    width: 200px;
    max-width: 30vw;
    margin-left: 24px;
`
const LinkHome = styled(LinkR)`
    color: white;
    text-decoration: none;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 24px;
    position: relative;
    &::after {
        position: absolute;
        content: '';
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 3px;
        background-color: #aa7340;
        transition: all .5s;
    }
    &:hover {
        &::after {
            width: 150%;
        }
    }
`
const HeaderContainer = styled.header`
    position: relative;
    z-index: 5;
    pointer-events: none;
    width: 100%;
    height: 50vh;
    filter: grayscale(0%);
    animation: blurr 5s infinite alternate;
    @keyframes blurr {
        to {
            filter: grayscale(100%);
        }
    }
`
const HeaderWrapper = styled.div`
    height: 100%;
    clip-path: polygon(100% 0, 100% 70%, 0 100%, 0 0);
    background: url(${headerImg}) no-repeat center center/ cover;
    mix-blend-mode: screen;
    display: flex;
    align-items: center;
    justify-content: center;
`
const HeaderH1 = styled.h1`
    font-size: clamp(2rem, 5vw, 4rem);
    color: white;
    font-family: 'Sancreek', cursive;
    filter: blur(0);
    padding: 10px 30px;
    background-color: #000000c1;
    transform: skewY(-5deg);
`

export default function TopPage() {
    const location = useLocation().pathname;

    return (
        <>
            <NavbarContainer>
                <NavBar>
                    <Logo src={logo} aly="Frizeria Stallion Logo" />
                    <LinkHome to='/'>Acasă</LinkHome>
                </NavBar>
            </NavbarContainer>
            <HeaderContainer>
                <HeaderWrapper title="Photo by Maria Orlova from Pexels">
                    <HeaderH1>{location === "/despre" ? 'Despre Noi' : location === '/preturi' ? 'Prețuri' : 'Programări'}</HeaderH1>
                </HeaderWrapper>
            </HeaderContainer>
        </>
    )
}
