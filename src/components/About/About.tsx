import { Container } from "./styles";
import vikalpbajpai from "../../assets/vikalp.webp";
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Vikalp Bajpai and I am a Computer Science and Engineering student at IMS 
            Engineering College in Ghaziabad Uttar Pradesh .
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I am proficient in various programming languages such as   C, Java,HTML, CSS, and JavaScript.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
           I also have experience working with frameworks and libraries such as   NodeJS, ReactJS .Whenever 
           possible, I also apply my passion for developing products with   Modern Javascript Library 
           and Frameworks.In my free time, I enjoy learning new technologies and  building new web technologies and products.

          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4> B.Tech in Computer Science and Engineering</h4>
            <p>IMS Engineering College, Ghaziabad | April 2020 - jun 2024 </p>
            {/* <p>8.09 CGPA</p> */}
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
             <h3>Experience:</h3><h4>Frontend Developer</h4>
            <p>Immortal Varta Pvt Ltd | July 2024 - Janurary 2026</p>
            <p>Gurgaon, India</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={python} alt="python" />
            </ScrollAnimation>
          </div> */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={java} alt="java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={wordpress} alt="Wordpress" />
            </ScrollAnimation>
          </div> */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={shopify} alt="shopify" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={vikalpbajpai} alt="Vikalp Bajpai" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}





// import { Container } from "./styles";
// import { motion } from "framer-motion";

// import vikalpbajpai from "../../assets/vikalp.webp";
// import java from "../../assets/java.svg";
// import shopify from "../../assets/shopify.svg";
// import htmlIcon from "../../assets/html-icon.svg";
// import cssIcon from "../../assets/css-icon.svg";
// import jsIcon from "../../assets/js-icon.svg";
// import reactIcon from "../../assets/react-icon.svg";
// import typescriptIcon from "../../assets/typescript-icon.svg";
// import vueIcon from "../../assets/vue-icon.svg";
// import boostrapIcon from "../../assets/bootstrap-icon.svg";

// export function About() {

//   const fadeLeft = (delay = 0) => ({
//     initial: { opacity: 0, x: -50 },
//     whileInView: { opacity: 1, x: 0 },
//     transition: { duration: 0.6, delay },
//     viewport: { once: true }
//   });

//   const fadeUp = (delay = 0) => ({
//     initial: { opacity: 0, y: 50 },
//     whileInView: { opacity: 1, y: 0 },
//     transition: { duration: 0.5, delay },
//     viewport: { once: true }
//   });

//   const fadeRight = (delay = 0) => ({
//     initial: { opacity: 0, x: 50 },
//     whileInView: { opacity: 1, x: 0 },
//     transition: { duration: 0.6, delay },
//     viewport: { once: true }
//   });

//   return (
//     <Container id="about">
//       <div className="about-text">

//         <motion.h2 {...fadeLeft(0)}>About me</motion.h2>

//         <motion.p {...fadeLeft(0.1)}>
//           Hi there! I'm Vikalp Bajpai and I am a Computer Science and Engineering student at IMS 
//           Engineering College in Ghaziabad Uttar Pradesh .
//         </motion.p>

//         <motion.p {...fadeLeft(0.2)} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
//           I am proficient in various programming languages such as C, Java, HTML, CSS, and JavaScript.
//         </motion.p>

//         <motion.p {...fadeLeft(0.3)}>
//           I also have experience working with frameworks and libraries such as NodeJS, ReactJS.
//           Whenever possible, I also apply my passion for developing products with Modern Javascript 
//           Library and Frameworks.
//         </motion.p>

//         <motion.div {...fadeLeft(0.4)} className="education">
//           <h3>Education:</h3>
//           <h4>B.Tech in Computer Science and Engineering</h4>
//           <p>IMS Engineering College, Ghaziabad | April 2020 - Jun 2024</p>
//         </motion.div>

//         <motion.div {...fadeLeft(0.5)} className="experience">
//           <h3>Experience:</h3>
//           <h4>Frontend Developer</h4>
//           <p>Immortal Varta Pvt Ltd | July 2024 - January 2026</p>
//           <p>Gurgaon, India</p>
//         </motion.div>

//         <motion.h3 {...fadeLeft(0.6)}>Here are my main skills:</motion.h3>

//         <div className="hard-skills">
          
//           <motion.div className="hability" {...fadeUp(0.1)}>
//             <img src={java} alt="java" />
//           </motion.div>

//           <motion.div className="hability" {...fadeUp(0.2)}>
//             <img src={jsIcon} alt="JavaScript" />
//           </motion.div>

//           <motion.div className="hability" {...fadeUp(0.3)}>
//             <img src={reactIcon} alt="React" />
//           </motion.div>

//           <motion.div className="hability" {...fadeUp(0.4)}>
//             <img src={typescriptIcon} alt="Typescript" />
//           </motion.div>

//           <motion.div className="hability" {...fadeUp(0.5)}>
//             <img src={vueIcon} alt="Vue" />
//           </motion.div>

//           <motion.div className="hability" {...fadeUp(0.6)}>
//             <img src={shopify} alt="shopify" />
//           </motion.div>

//           <motion.div className="hability" {...fadeUp(0.7)}>
//             <img src={htmlIcon} alt="Html" />
//           </motion.div>

//           <motion.div className="hability" {...fadeUp(0.8)}>
//             <img src={cssIcon} alt="Css" />
//           </motion.div>

//           <motion.div className="hability" {...fadeUp(0.9)}>
//             <img src={boostrapIcon} alt="bootstrap" />
//           </motion.div>

//         </div>
//       </div>

//       <div className="about-image">
//         <motion.img 
//           {...fadeRight(0.3)} 
//           src={vikalpbajpai} 
//           alt="Vikalp Bajpai" 
//         />
//       </div>
//     </Container>
//   );
// }