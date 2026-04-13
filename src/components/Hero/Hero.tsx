import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Vikalp Bajpai</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Frontend Engineer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">1 Year Experience</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
      <div className="social-media"><a
        href="https://www.linkedin.com/in/vikalp-bajpai-7087a7217/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://github.com/Vikalp71"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        {/* <a
          href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak+I+found+your+contact+through+portfolio+site.%0A%0A"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a> */}
        {/* <a
          href="https://t.me/CodeVinayak"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a> */}
        </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}











// import { BrowserRouter } from "react-router-dom";
// import { Container } from "./styles";
// import { motion } from "framer-motion";
// import { NavHashLink } from "react-router-hash-link";

// import Illustration from "../../assets/illustration.svg";
// import linkedin from "../../assets/linkedin.svg";
// import githubIcon from "../../assets/github.svg";
// import Hello from "../../assets/Hello.gif";

// export function Hero() {

//   const fadeUp = (delay = 0) => ({
//     initial: { opacity: 0, y: 50 },
//     whileInView: { opacity: 1, y: 0 },
//     transition: { duration: 0.6, delay },
//     viewport: { once: true }
//   });

//   const fadeRight = (delay = 0) => ({
//     initial: { opacity: 0, x: 50 },
//     whileInView: { opacity: 1, x: 0 },
//     transition: { duration: 0.6, delay },
//     viewport: { once: true }
//   });

//   return (
//     <Container id="home">
      
//       <div className="hero-text">

//         <motion.p {...fadeUp(0)}>
//           Hello <img src={Hello} alt="Hello" width="20px" />, I'm
//         </motion.p>

//         <motion.h1 {...fadeUp(0.2)}>
//           Vikalp Bajpai
//         </motion.h1>

//         <motion.h3 {...fadeUp(0.4)}>
//           Frontend Engineer
//         </motion.h3>

//         <motion.p className="small-resume" {...fadeUp(0.6)}>
//           1 Year Experience
//         </motion.p>

//         <motion.div {...fadeUp(0.8)}>
//           <BrowserRouter>
//             <NavHashLink smooth to="#contact" className="button">
//               Contact
//             </NavHashLink>
//           </BrowserRouter>
//         </motion.div>

//         <motion.div className="social-media" {...fadeUp(1)}>
//           <a
//             href="https://www.linkedin.com/in/vikalp-bajpai-7087a7217/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <img src={linkedin} alt="Linkedin" />
//           </a>

//           <a
//             href="https://github.com/Vikalp71"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <img src={githubIcon} alt="GitHub" />
//           </a>
//         </motion.div>

//       </div>

//       <div className="hero-image">
//         <motion.img
//           {...fadeRight(1)}
//           src={Illustration}
//           alt="Illustration"
//         />
//       </div>

//     </Container>
//   );
// }