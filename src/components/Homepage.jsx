import { homeObjOne, homeObjThree, homeObjTwo } from './Data';
import HeroSection from './HeroSection';
import InfoSection from './InfoSection';
import ServicesSection from './ServicesSection';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useState } from 'react';

export default function Homepage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <ServicesSection />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    )
}
