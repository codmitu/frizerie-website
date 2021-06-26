import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import { Link as LinkS } from 'react-scroll';

const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 11;
    width: 100%;
    height: 100%;
    background-color: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: all 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`
const Icon = styled.div`
    position: absolute;
    top: 2rem;
    right: 1.5rem;
    background-color: transparent;
    font-size: 2rem;
    cursor: pointer;
    &>svg {
        color: white;
        font-size: inherit;
    }
`
const SidebarWrapper = styled.div`
    color: white;
`
const SidebarMenu = styled.ul`
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    @media screen and( max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`
const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: all 0.2s ease-in-out;
    color: white;
    cursor: pointer;
    &:hover {
        color: #01bf71;
    }
`



export default function Sidebar({ isOpen, toggle }) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="despre" onClick={toggle}>
                        Despre Noi
                    </SidebarLink>
                    <SidebarLink to="preturi" onClick={toggle}>
                        Prețuri
                    </SidebarLink>
                    <SidebarLink to="galerie" onClick={toggle}>
                        Galerie
                    </SidebarLink>
                    <SidebarLink to="rezervari" onClick={toggle}>
                        Programări
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
