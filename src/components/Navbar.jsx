import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import MenuIcon from '@material-ui/icons/Menu';
import { useEffect, useState } from 'react';
import logo from './images/logo.png';
import PhoneIcon from '@material-ui/icons/Phone';

const Nav = styled.nav`
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    font-family: 'Trochut', cursive;
    >section {
        transition: all 0.8s;
        background: ${({ scrollNav }) => (scrollNav ? 'black' : 'transparent')};
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: ${({ scrollNav }) => (scrollNav ? '80px' : '100px')};
    }
`
const NavbarContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    padding: 0 24px;
    max-width: 1100px;
    position: relative;
`
const NavLogo = styled(LinkS)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`
const Logo = styled.img`
    width: 200px;
    max-width: 30vw;
`
const PhoneNumber = styled.div`
    font-size: 0.8rem;
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 270px;
    cursor: default;
    @media screen and (max-width: 500px) {
        display: none;
    }
`
const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(-100%, -30%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
        >svg {
            font-size: inherit;  
        }
    }
`
const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`
const NavItem = styled.li`
    height: 80px;
    position: relative;
    overflow: hidden;
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: #aa7340;
        bottom: 0;
        left: -100%;
        z-index: 2;
        transition: .5s ease;
    }
    &:hover::after {
        left: 0;
    }
`
const NavLinks = styled(LinkS)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        border-bottom: 3px solid #aa7340;
    }
`

export default function Navbar({ toggle }) {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
        return () => {
            window.removeEventListener('scroll', changeNav);
        };
    }, []);


    return (
        <>
            <Nav scrollNav={scrollNav}>
                <section></section>
                <NavbarContainer>
                    <NavLogo smooth={true} duration={500} spy={true} exact='true' offset={-80} to='home'>
                        <Logo src={logo} alt="logo-frizeria-stallion" />
                    </NavLogo>
                    <PhoneNumber>
                        <PhoneIcon />
                        <span>+40 0770 123 456</span>
                    </PhoneNumber>
                    <MobileIcon onClick={toggle}>
                        <MenuIcon />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks smooth={true} duration={500} spy={true} exact='true' offset={-80} to="despre" > Despre Noi</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks smooth={true} duration={500} spy={true} exact='true' offset={-80} to="preturi">Prețuri</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks smooth={true} duration={500} spy={true} exact='true' offset={-80} to="galerie">Galerie</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks smooth={true} duration={500} spy={true} exact='true' offset={-80} to="rezervari">Programări</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}
