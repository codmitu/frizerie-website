import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from "react-router-dom";

export const ButtonS = styled(LinkS)`
    /* background-color: ${({ primary }) => (primary ? 'white' : "#aa7340")}; */
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : 'white')};
    font-size: ${({ fontBig }) => (fontBig ? '1.3rem' : '1rem')};
    font-family: 'Big Shoulders Text', cursive;
    font-weight: 800;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    transition: all .2s ease-in-out;
    position: relative;
    z-index: 1;
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        transition: all .2s;
        transition-delay: .2s;
        background-image: linear-gradient(0deg, #FFCF70 0%, #FFAE3D 97%);
        z-index: -1;
    }
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        filter: blur(50%);
        transition: all .2s;
        transition-delay: .2s;
        background-image: linear-gradient(-180deg, #b48457 0%, #aa7340 97%);
        z-index: -1;
    }
    &:hover {
        animation-name: hoverPop;
        animation-duration: .4s;
        color: ${({ dark }) => (dark ? 'white' : 'black')};
        &::before {
            animation: slick-hover-2 3s .4s linear infinite;
            transform: translateY(-10px) translateX(-10px);   
        }
        &::after {
            animation: slick-hover 3s .4s linear infinite reverse;
            transform: translateY(10px) translateX(10px);
        }
        @keyframes hoverPop {
            0%, 100% {
                transform: scale(1);
            }
            33% {
                transform: scale(1.05);
            }
            66% {
                transform: scale(.90);
            }
        }
        @keyframes slick-hover {
        0.00% {
            transform: translateY(10px) translateX(10px) }
        16.67% {
            transform: translateY(-7px) translateX(-5px) }
        33.33% {
            transform: translateY(2px) translateX(7px) }
        50.00% {
            transform: translateY(10px) translateX(-10px) }
        66.67% {
            transform: translateY(-1px) translateX(4px) }
        83.33% {
            transform: translateY(-8px) translateX(-7px) }
        100.00% {
            transform: translateY(10px) translateX(10px) }
        }
        @keyframes slick-hover-2 {
        0.00% {
            transform: translateY(-10px) translateX(-10px) }
        16.67% {
            transform: translateY(1px) translateX(-3px) }
        33.33% {
            transform: translateY(10px) translateX(-5px) }
        50.00% {
            transform: translateY(-10px) translateX(10px) }
        66.67% {
            transform: translateY(8px) translateX(-2px) }
        83.33% {
            transform: translateY(0px) translateX(8px) }
        100.00% {
            transform: translateY(-10px) translateX(-10px) }
        }
    }
`

export const ButtonR = styled(LinkR)`
    /* background-color: ${({ primary }) => (primary ? 'white' : "#aa7340")}; */
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : 'white')};
    font-size: ${({ fontBig }) => (fontBig ? '1.3rem' : '1rem')};
    font-family: 'Big Shoulders Text', cursive;
    font-weight: 800;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    transition: all .2s ease-in-out;
    position: relative;
    z-index: 1;
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        transition: all .2s;
        transition-delay: .2s;
        background-image: linear-gradient(0deg, #FFCF70 0%, #FFAE3D 97%);
        z-index: -1;
    }
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        filter: blur(50%);
        transition: all .2s;
        transition-delay: .2s;
        background-image: linear-gradient(-180deg, #b48457 0%, #aa7340 97%);
        z-index: -1;
    }
    &:hover {
        animation-name: hoverPop;
        animation-duration: .4s;
        color: ${({ dark }) => (dark ? 'white' : 'black')};
        &::before {
            animation: slick-hover-2 3s .4s linear infinite;
            transform: translateY(-10px) translateX(-10px);   
        }
        &::after {
            animation: slick-hover 3s .4s linear infinite reverse;
            transform: translateY(10px) translateX(10px);
        }
        @keyframes hoverPop {
            0%, 100% {
                transform: scale(1);
            }
            33% {
                transform: scale(1.05);
            }
            66% {
                transform: scale(.90);
            }
        }
        @keyframes slick-hover {
        0.00% {
            transform: translateY(10px) translateX(10px) }
        16.67% {
            transform: translateY(-7px) translateX(-5px) }
        33.33% {
            transform: translateY(2px) translateX(7px) }
        50.00% {
            transform: translateY(10px) translateX(-10px) }
        66.67% {
            transform: translateY(-1px) translateX(4px) }
        83.33% {
            transform: translateY(-8px) translateX(-7px) }
        100.00% {
            transform: translateY(10px) translateX(10px) }
        }
        @keyframes slick-hover-2 {
        0.00% {
            transform: translateY(-10px) translateX(-10px) }
        16.67% {
            transform: translateY(1px) translateX(-3px) }
        33.33% {
            transform: translateY(10px) translateX(-5px) }
        50.00% {
            transform: translateY(-10px) translateX(10px) }
        66.67% {
            transform: translateY(8px) translateX(-2px) }
        83.33% {
            transform: translateY(0px) translateX(8px) }
        100.00% {
            transform: translateY(-10px) translateX(-10px) }
        }
    }
`