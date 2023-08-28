import { Inter } from 'next/font/google'
import styles from './page.module.css'
import LandingPage from './layout/LandingPage'
import AboutMe from './layout/AboutMe'
import Skills from './layout/Skills'
// import FetchImage from './components/FetchImage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className={styles.description}>
     <LandingPage/>
     <AboutMe/>
     {/* <Skills/> */}
     {/* <FetchImage/> */}
      </div>
    </main>
  )
}
