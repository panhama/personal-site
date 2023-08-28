// "use client";
// import { motion } from "framer-motion";
// import style from './portfolio.module.css';
// import {image} from '../data';
// import Image from 'next/image';
// import { use, useEffect, useRef, useState } from "react";
// export default function Portfolio() {
//     const [width, setWidth] = useState(0);
//     const carousel = useRef(null);
//     useEffect(() => {
//         setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
//     }, []);
//     return (
//       <div className={style.div}>
//         <motion.div ref={carousel} className={style.carousel} whileTap={{cursor:'grabbing'}}>
//           <motion.div drag="x" dragConstraints={{right:0, left: -width}} className={style.inner_carousel}>
//             {image.map((image, index) => (
//               <motion.div key={index} className={style.item}>
//                 <Image src={image} alt="" />
//                 <p> test</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     );
//   }
  