import styled from "styled-components";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useState } from "react";
import { useEffect } from "react";

const MapAddressContainer = styled.div`
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

export default function MapAddress() {
    const [isLoading, setIsLoading] = useState(true);
    const url = "https://maps.google.com/maps?q=Bucharest%20frizerie&t=&z=17&ie=UTF8&iwloc=&output=embed";


    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal, mode: "no-cors" })
            .then(res => {
                if (!res.ok) {
                    throw Error("Couldn't get the data from the server.")
                }
                return res.json()
            })
            .then(() => {
                setIsLoading(false);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log("fetch aborted");
                }
                setIsLoading(false)
            })
        return () => abortCont.abort();

    }, [url]);

    return (
        <MapAddressContainer>
            {
                !isLoading
                    ?
                    <div className="gmap_canvas"><iframe title="map" width="100%" height="293" id="gmap_canvas" src={url} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" ></iframe><br /></div>
                    :
                    <CircularProgress />
            }
        </MapAddressContainer>
    )
}
