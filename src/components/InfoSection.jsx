import styled from "styled-components";
import { ButtonR } from "./Button";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';

const InfoContainer = styled.div`
    color: white;
    height: auto;
    background-color: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`
const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: calc(100vh - 80px);
    width: 100%;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 24px;
    justify-content: center;
`
const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    align-items: center;
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`
const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`
const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`
const TopLine = styled.p`
    color: #aa7340;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 1rem;
`
const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: clamp(2rem, 5vw, 3rem);
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
`
const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 1.1rem;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`
const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    svg {
        margin: 0 5px;
    }
`
const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    overflow: hidden;
`
const Img = styled.img`
    width: 100%;
    padding-left: 0;
    transition: all 1.5s;
    &:hover {
        transform: scale(1.1);
    }
    @media screen and (max-width: 768px) {
        width: 70%;
    }
`


export default function InfoSection({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, title, primary, dark, dark2 }) {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    {id === 'rezervari' ?
                                        <ButtonR to='/rezervari'
                                            primary={primary ? 1 : 0}
                                            dark={dark ? 1 : 0}
                                            dark2={dark2 ? 1 : 0} >
                                            <PermPhoneMsgIcon />
                                            {buttonLabel}
                                        </ButtonR>
                                        : id === 'preturi' ?
                                            <ButtonR to='/preturi'
                                                primary={primary ? 1 : 0}
                                                dark={dark ? 1 : 0}
                                                dark2={dark2 ? 1 : 0} >
                                                {buttonLabel}
                                                <LocalOfferIcon />
                                            </ButtonR>
                                            :
                                            <ButtonR to='/despre'
                                                primary={primary ? 1 : 0}
                                                dark={dark ? 1 : 0}
                                                dark2={dark2 ? 1 : 0} >
                                                <ImportContactsIcon />
                                                {buttonLabel}
                                            </ButtonR>
                                    }
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} title={title} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}
