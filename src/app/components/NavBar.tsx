"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from 'next/image';
import github from '../../../public/img/github.svg';
import linkedin from '../../../public/img/linkedin.svg';
import instagram from '../../../public/img/instagram.svg';
const path = [{ name: "Portfolio", path: "/" }, { name: "Skills", path: "/" },
{ name: "Photography", path: "/photography" }, { name: "About", path: "/" },]

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleMenuToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="nav">
      <nav className={`${isMobile ? 'mobile' : ''} ${isScrolled ? 'yellow-bg' : ''} fade-up`}>
        {path.map(({ name, path }: any) => (
          <Link href={path} key={name} className="link" onClick={() => isMobile && handleMenuToggle()}>
            {name}
          </Link>
        ))}
        <div className="social-media-container">
          <a className="social-media" href="https://www.instagram.com/rezoluti0n/"><Image src={instagram} alt={""} height={20} /></a>
          <a className="social-media" href="https://www.linkedin.com/in/panha-ma-526417237/"> <Image src={linkedin} alt={""} height={20} /></a>
          <a className="social-media" href="https://github.com/panhama"> <Image src={github} alt={""} height={20} /></a>
        </div>
      </nav>
      <div className="menu-icon" onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}


{/* <div className="social-media-container">
          <a className="social-media" href="https://www.linkedin.com/in/ma-panha-526417237/"> <Image src={linkedin} alt={""} height={20} /></a>
        </div>
        <div className="social-media-container">
          <a className="social-media" href="https://github.com/panhama"> <Image src={github} alt={""} height={20} /></a>
        </div> */}