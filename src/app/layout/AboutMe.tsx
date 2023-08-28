import React from 'react';
import Image from 'next/image';
import images from '../data'; // Adjust the path as needed
import project1 from '../../../public/img/MacBook Pro 16_ - 6.jpg';

export default function AboutMe() {
  return (
    <div className="project">
      {images.map((imageData, index) => (
        <div className="project-container" key={index}>
          <Image src={imageData.src} alt={imageData.title} className="project-img" />
          <h2 className="project-text">{imageData.title}</h2>
        </div>
      ))}
    </div>
  );
}






// export default function AboutMe () {
//     return( <div className="project">
//                 <div className="project-container">
//                     <Image src={project1} alt="landing" className="project-img" />
//                     <h2 className='project-text'>Billie Coffee</h2>
//                     <p>Project description goes here</p>
//                 </div>
//                 <div className="project-container">
//                     <Image src={project1} alt="landing" className="project-img" />
//                     <h2 className='project-text'>Billie Coffee</h2>
//                  </div>
//             </div>)}
    
   
 
