import styled from "styled-components";
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SlideShow from "./SlideShow";
import FormContainer from "./FormContainer";
import TopPage from "./TopPage";
import Schedule from "./Schedule";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useState } from "react";
import { useEffect } from "react";

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
const MapAddress = styled.div`
    position:relative;
    text-align:right;
    height:293px;
    width: 100%;
    padding: 40px 20px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    .gmap_canvas {
        border: 1px solid lightgray;
        overflow:hidden;
        background:none!important;
        height:293px;
        width:100%;
    }
`

export default function Preturi() {
    window.scrollTo(0, 0);

    const [isLoading, setIsLoading] = useState(true);

    const handleLoading = () => {
        setIsLoading(!isLoading);
    }

    useEffect(() => {
        window.addEventListener("load", handleLoading);
        return () => window.removeEventListener("load", handleLoading);
    });

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
                        <MapAddress>
                            {
                                isLoading
                                    ?
                                    <CircularProgress />
                                    :
                                    <div className="gmap_canvas"><iframe title="map" width="100%" height="293" id="gmap_canvas" src="https://maps.google.com/maps?q=Bucharest%20frizerie&t=&z=17&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><br /></div>
                            }
                        </MapAddress>
                    </AboutWrapper>
                </AboutContainer>
            </Container>
        </>
    )
}
