import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import logoDivider from './images/logo-divider.png';
import { animateScroll as scroll } from 'react-scroll';

const FooterContainer = styled.footer`
    background-color: #101522;
    font-family: 'Trochut', cursive;
    position: relative;
`
const FooterWrapper = styled.div`
    padding: 80px 24px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`
const FooterLinksContainer = styled.div`
    display: flex;
    gap: 5vw;
    justify-content: center;
    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`
const FooterLinksWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5vw;
`
const FooterLinkItems = styled.div`
    display: flex;
    flex: 1 1 3rem;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem;
    text-align: left;
    white-space: nowrap;
    color: white;
    @media screen and(max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`
const FooterLinkTitle = styled.h1`
    font-size: 0.9rem;
    margin-bottom: 1rem;
`
const FooterLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    white-space: nowrap;
    position: relative;
    /* overflow: hidden; */
    transition: all 0.5s;
    &::before {
        content: '';
        position: absolute;
        left: -15px;
        top: 0;
    }
    &:hover {
        color: #aa7340;
        transform: translateX(15px);
        &::before {
            content: '✂';
            transform: translateX(-15px);
            left: 0;
        }
    }
`
const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
    border-top: 1px solid #444444;
`
const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`
const SocialLogo = styled(Link)`
    color: white;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-family: 'Sancreek', cursive;
`
const WebsiteRights = styled.small`
    color: white;
    margin-bottom: 1rem;
`
const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`
const SocialIconLink = styled.a`
    color: white;
    font-size: 1.5rem;
    &[aria-label="Facebook"] {
        &:hover {
            color: #4064ac;
        }
    }
    &[aria-label="Instagram"] {
        &:hover {
            color: #af117d;
        }
    }
    &[aria-label="Youtube"] {
        &:hover {
            color: #f70000;
        }
    }
    &[aria-label="Twitter"] {
        &:hover {
            color: #1d9ce9;
        }
    }
    &[aria-label="LinkedIn"] {
        &:hover {
            color: #0270ad;
        }
    }
`
const Divider = styled.img`
    position: absolute;
    top: 20px;
    left: 50%;
    width: 200px;
    transform: translateX(-50%);
`

export default function Footer() {
    const handleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <Divider src={logoDivider} alt="divider" />
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Despre Noi</FooterLinkTitle>
                            <FooterLink to="/">Testimoniale</FooterLink>
                            <FooterLink to="/">Cariere</FooterLink>
                            <FooterLink to="/">Personal</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contactează-ne</FooterLinkTitle>
                            <FooterLink to="/">Programări</FooterLink>
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">Program</FooterLink>
                            <FooterLink to="/">Hartă</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Galerie</FooterLinkTitle>
                            <FooterLink to="/">Imagini</FooterLink>
                            <FooterLink to="/">Videouri</FooterLink>
                            <FooterLink to="/">Artă</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo to='/' onClick={handleHome}>Frizeria Stallion</SocialLogo>
                        <WebsiteRights>Frizeria Stallion &copy;{new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FacebookIcon />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <InstagramIcon />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <YouTubeIcon />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <TwitterIcon />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                                <LinkedInIcon />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}
