"use client"
import styles from './Skills.module.css';
import {useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import img1 from '../../public/img/background.jpg';
import img2 from '../../public/img/2.jpg';
import project1 from '../../public/img/MacBook Pro 16_ - 6.jpg';
import highfi from '../../public/img/HIGH FI.png';
export default function Skills() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    { text: "Card 1 text here", description: "description texts 1 here" , bg: img1 },
    { text: "Card 2 text here", description: "description texts 2 here",  bg: img2 },
  ];


  const handleCardClick = (index: any) => {
    setSelectedCard(index);
  };

  return (
    <motion.div
      className="background-image"      
      animate={{
        backgroundImage: `url(${selectedCard !== null ? (cards[selectedCard]?.bg.src || project1.src) : project1.src})`,
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="left">
        {selectedCard !== null && (
          <div className="text-card">
            <p>{cards[selectedCard]?.description}</p>
          </div>
        )}
      </div>
      <div className="carousel">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="card"
            onClick={() => handleCardClick(index)}
            >
            <Image src={project1} alt="landing" className="card" />
            <p>{card.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
      //   <div className="container">
      //        <div className="column">
      //        <p className={styles.textwhite}>
      //   Whether you&apos;re a small business looking to launch a new website, or a large corporation seeking to revamp your digital presence, my expertise in both front-end and back-end development can help you achieve your goals.
      // </p> <br />
      // <p style={{color:"white"}}>
      // As a consultant, I will work closely with you to understand your unique needs and create a custom solution that fits your business. My goal is to create a user-friendly, intuitive interface that enhances your customers&apos; experience and drives business growth.
      // </p> <br />
      // <p style={{color:"white"}}>
      // My experience spans across various industries, including healthcare, finance, e-commerce, and more. With a focus on clean design and efficient functionality, I can help you create a project that not only looks great but performs even better.
      //   So, whether you&apos;re starting from scratch or seeking to improve an existing project, I am here to help you every step of the way. Let&apos;s work together to build something great!
      // </p>
      //        </div>
      //        <div className="column">   
      //        </div>
      //   </div>


