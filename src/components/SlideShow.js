import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import Slide1 from './images/slideshow/slide1.jpg';
import Slide2 from './images/slideshow/slide2.jpg';
import Slide3 from './images/slideshow/slide3.jpg';
import Slide4 from './images/slideshow/slide4.jpg';
import Slide5 from './images/slideshow/slide5.jpg';
import Slide6 from './images/slideshow/slide6.jpg';

const SlideContainer = styled.div`
    padding: 10px 20px;
    width: 40%;
    .image-gallery {
        .image-gallery-icon {
            >svg {
                width: 30px;
                height: 50px;
               color: #ffffff7a;
               &:hover {
                   color: #3a3a3a;
               }
            }
        }
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export default function SlideShow() {
    let images = [
        {
            original: Slide1,
            thumbnail: Slide1
        },
        {
            original: Slide2,
            thumbnail: Slide2
        },
        {
            original: Slide3,
            thumbnail: Slide3
        },
        {
            original: Slide4,
            thumbnail: Slide4
        },
        {
            original: Slide5,
            thumbnail: Slide5
        },
        {
            original: Slide6,
            thumbnail: Slide6
        }
    ];

    const options = {
        autoPlay: false,
        showIndex: false,
        showBullets: false,
        infinite: true,
        showThumbnails: true,
        showFullscreenButton: false,
        showGalleryFullscreenButton: true,
        useBrowserFullscreen: true,
        showPlayButton: false,
        showGalleryPlayButton: true,
        showNav: true,
        isRTL: false,
        slideDuration: 1000,
        slideInterval: 4000,
        slideOnThumbnailOver: false,
        thumbnailPosition: 'bottom',
        showVideo: {},
        useWindowKeyDown: true,
        lazyLoad: true
    };

    return (
        <SlideContainer>
            <ImageGallery {...options} items={images} />
        </SlideContainer>
    )
}
