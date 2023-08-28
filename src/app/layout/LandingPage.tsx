import "./landingPage.css";
import Image from "next/image";
import profile from "@images/profile.jpg";
export default function LandingPage(){
    return <div>
        <div className="landing-profile">
            <div className="out-shape">
            <Image src={profile} alt="landing" className="shape"/>
            </div>
            <div className="text-container">
            <h2 id="fullstack">DEVELOPER / CREATIVE</h2>
            <span className="intro-text">Hi there, I&apos;m Pan. I specialize in crafting digital experiences that combine functionality with visual appeal.
        Let me help bring your project to life!</span>     
            </div> 
            <div>
             <button className="button" style={{zIndex:"9",position:"relative"}}><svg width="6" height="10" fill="currentColor"><path d="M5.5 5L.8 9.8 0 9l3.9-4L0 1 .8.2l3.9 4 .8.8z" opacity=".5"></path></svg> View Projects</button>
            </div> 
           <div className="custom-shape-divider-bottom-1683170164">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className="shape-fill"></path>
                </svg>  <span className="skill">PROJECTS</span>
        </div>      
            </div>
           
        </div>
}

       