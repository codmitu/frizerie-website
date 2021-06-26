import styled from "styled-components";
import Img7 from './images/img7.png';
import Img8 from './images/img8.png';
import TopPage from "./TopPage";

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
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: calc(50vh + 80px) 0 0;
`
const AboutSection = styled.div`
    padding: 0 50px 50px;
    font-family: 'Prompt';
    min-height: 100%;
    background-color: #f5f5f5;
    overflow: hidden;
    position: relative;
    img {
        float: right;
        width: 50%;
        shape-outside: url(${Img7});
        transition: all .5s;
        @media screen and (max-width: 480px) {
            width: 100%;
        }
    }
    .alternateImg {
        position: absolute;
        top: 0;
        right: 50px;
        width: calc(50% - 50px);
        transition: all 1s;
        &:hover {
            opacity: 0;
        }
        @media screen and (max-width: 480px) {
            width: calc(100% - 100px);
        }
    }
`

export default function SignInpage() {
    window.scrollTo(0, 0);

    return (
        <>
            <Container>
                <TopPage />
                <AboutContainer>
                    <AboutWrapper>
                        <AboutSection>
                            <img src={Img7} alt="by Thgusstavo Santana from Pexels" title="Photo by Thgusstavo Santana from Pexels" />
                            <img src={Img8} className="alternateImg" alt="by cottonbro from Pexels" title="Photo by cottonbro from Pexels" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repudiandae, suscipit architecto molestias fugit ad earum soluta! Doloremque alias rerum minima magni numquam quis consectetur, quasi doloribus? Eius eveniet magni, eum dolore quam repellendus laboriosam voluptatem veniam voluptate consequuntur et saepe fugiat vitae ea corrupti nisi consectetur, laborum nam sint totam maiores.
                                <br /><br />
                                Distinctio ex quibusdam iure voluptates rem laborum eum qui, voluptas, aliquid quaerat suscipit! Ratione nam explicabo harum modi minus magnam eaque doloremque eveniet eius voluptatum ipsa unde delectus illum, nisi consequatur id beatae vero quis corrupti. Excepturi quibusdam unde maiores dolorem nobis itaque eaque dolore deserunt ullam quae.</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis sed laudantium fugit error possimus corrupti quasi optio veniam a ratione. Repudiandae inventore, rerum modi ea officia voluptatibus cum odit corrupti voluptatum itaque dignissimos consequuntur dolore dolorem in rem! Magni consequuntur eligendi sed perspiciatis beatae, nam quia natus velit maxime numquam.
                            </p>
                        </AboutSection>
                    </AboutWrapper>
                </AboutContainer>
            </Container>
        </>
    )
}
