import styled from "styled-components";
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SlideShow from "./SlideShow";
import FormContainer from "./FormContainer";
import TopPage from "./TopPage";
import Schedule from "./Schedule";
import MapAddress from './MapAddress';

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
    width: 90%;
    margin: 0 auto;
    background-color: #f5f5f5;
    min-height: 1200px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    padding: calc(50vh + 80px) 0 50px;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
    }
`
const AddressContainer = styled.aside`
    position: absolute;
    top: calc(50vh + 30px);
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-basis: 100px;
    margin-right: 10px;
    p {
        font-size: 0.8rem;
        font-weight: 700;
        margin: 0;
        >svg {
            font-size: 0.9rem;
        }
    }
`


export default function Preturi() {
    window.scrollTo(0, 0);

    return (
        <>
            <Container>
                <TopPage />
                <AboutContainer>
                    <AboutWrapper>
                        <AddressContainer>
                            <p>
                                <PhoneIcon /> +40 0770 123 456
                            </p>
                            <p>
                                <EmailIcon /> frizeria_stallion@frizerie.com
                            </p>
                            <p>
                                <LocationOnIcon /> Str. Ștefan cel Mare, Nr. 11
                            </p>
                        </AddressContainer>
                        <SlideShow />
                        <FormContainer />
                        <Schedule />
                        <MapAddress />
                    </AboutWrapper>
                </AboutContainer>
            </Container>
        </>
    )
}
