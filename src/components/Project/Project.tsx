import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
// import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Vikalp71/New-Year-Count-Down" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>New Year Countdown</h3>
              <p>
                The New Year Countdown Project is more than just a celebration; it's a testament to the human 
                spirit and our shared aspirations for a brighter future. So, mark your calendars and get ready 
                to be part of this global extravaganza as we count down to a new year filled with endless possibilities.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Vikalp71/CRM-DASHBOARD" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                {/* <a href="https://vote.vinayaksingh.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>  */}
                </div>
            </header>
            <div className="body">
              <h3>CRM Dashboard (MERN Stack)</h3>
              <p> CRM Dashboard is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js,
                 Node.js) to manage leads and business data efficiently.The application provides secure user 
                 authentication, lead management, and a responsive dashboard interface that allows users to create, 
                 update, delete, and track leads in real-time.It follows a clean architecture with RESTful APIs, 
                 JWT-based authentication, and protected routes to ensure secure data handling and smooth user experience.</p>
            </div>
            <footer> <ul className="tech-list"> <li>React.js</li> <li>Node.js</li> <li>Express.js</li> <li>MongoDB</li> <li> JWT Authentication</li></ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Vikalp71/Tasty-Treats" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                {/* <a href="https://ai-chatbot-t8fn.onrender.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a> */}
              </div>
            </header>
            <div className="body">
              <h3>Tasty-Treats</h3>
              <p>
                Tasty-Treats is a responsive food delivery web application where users 
                can browse food items like pizza, burgers, and pasta. It provides a clean and 
                user-friendly interface to view food details and prices. The project is built 
                using React.js with reusable components and a responsive design for smooth use on all devices.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/Vikalp71/Animation-Website" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                {/* <a href="https://medibook.vinayaksingh.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>Animation Website</h3>
              <p>We are a creative animation studio specializing in 2D animation, 3D animation, motion graphics, and video production.
             Our goal is to transform ideas into visually stunning animations that help businesses grow and engage their audience.
             With modern tools and creative storytelling, we deliver high-quality animation solutions for websites, ads, and social media.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Reactjs</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>

              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Vikalp71/Kanban-Application" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                {/* <a href="https://youtu.be/NOm-3MynPLE" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>Kanban Application</h3>
              <p>A modern Kanban Application built using React.js that helps users manage tasks efficiently with 
                drag-and-drop functionality. The application allows users to create, update, delete, and organize 
                tasks across different stages like To Do, In Progress, and Done. It provides a clean and responsive 
                user interface for better productivity and task management.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Reactjs</li>
                <li>JavaScript</li>
                <li>scikit-learn</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/CodeVinayak/Jupyter-Notebook/tree/main/Credit%20Risk%20Analysis" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                {/* <a href="https://github.com/CodeVinayak/Jupyter-Notebook/blob/main/Credit%20Risk%20Analysis/Credit_Risk_Analysis.ipynb" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>Food Delivery Website</h3>
              <p>
                Developed a highly accurate credit risk classification model using XGBoost, achieving 100% precision, recall, and F1-scores for predicting loan defaults.Implemented rigorous data preprocessing, feature engineering, and hyperparameter tuning on imbalanced credit risk data, employing ensemble methods, cross-validation, and model interpretation techniques.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>XGBoost</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        
        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://velocityai.vinayaksingh.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>VeloCityAI</h3>
              <p>
                VelocityAI is a website that allows users to get instant answers to any question and generate stunning AI pictures using OpenAI's GPT-3 and DALL-E model.With VelocityAI, users can type in text-based prompts and receive a corresponding response.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Html</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://justmedicalbooks.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MedicalBooks - Book Selling Site</h3>
              <p>
                This website sells medical books online and is popular with medical students. Medical students use it to buy books and acquire knowledge. The site has all kinds of medical books in one place.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://drrohitdamor.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Dr.Rohit Damor - Online Appointment Booking Site</h3>
              <p>
                This website allows people to easily book appointments with you online. It takes just a minute to schedule a meeting. This kind of site is helpful for booking appointments and not missing any potential clients. You should try this website to see how convenient and efficient it is.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mitulindustries.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mitul Industries - Manufacturing Industries Site</h3>
              <p>
              This manufacturing industry website shows off products and helps the business get more customers and information online. Making products is important but making money from them is the goal. This site can help the business make more profit.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* 
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mayatmaj.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mayatmaj - Film Production Site</h3>
              <p>
                This agency website promotes post production, virtual production, and video marketing services. It shows previous client work and reviews to get more business. If you need help with production, this website can give you information and connect you with the right people.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.smartcornersproperties.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SmartCorners - Real Estate Properties Site</h3>
              <p>
              This real estate site displays land properties and helps buyers and sellers. Buyers can see lots of pictures, videos, and details about properties before visiting in person. It makes it easier for buyers to find what they want and helps sellers get more attention.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>               
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://madewithluv.in/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MadeWithLuv - HomeDecor Site</h3>
              <p>
                This website sells home decor products and helps people decorate their homes. It is easy to find what you need, whether it's furniture or decorations. The site is useful for people who want to make their homes look nice and need some help.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

      </div>
    </Container>
  );
}









// import { Container } from "./styles";
// import { motion } from "framer-motion";
// import githubIcon from "../../assets/github.svg";

// export function Project() {

//   const fadeUp = {
//     hidden: { opacity: 0, y: 60 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 }
//     }
//   };

//   const container = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   return (
//     <Container id="project">
      
//       <motion.h2
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         My Projects
//       </motion.h2>

//       <motion.div
//         className="projects"
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >

//         {/* Project Card */}
//         <motion.div className="project" variants={fadeUp}>
//           <header>
//             <svg width="50" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1">
//               <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
//             </svg>
//             <div className="project-links">
//               <a href="https://github.com/Vikalp71/New-Year-Count-Down" target="_blank" rel="noreferrer">
//                 <img src={githubIcon} alt="GitHub" />
//               </a>
//             </div>
//           </header>
//           <div className="body">
//             <h3>New Year Countdown</h3>
//             <p> The New Year Countdown Project is more than just a celebration; it's a testament to the human 
//                spirit and our shared aspirations for a brighter future. So, mark your calendars and get ready 
//                 to be part of this global extravaganza as we count down to a new year filled with endless possibilities..</p>
//           </div>
//         </motion.div>

//         {/* Project Card */}
//         <motion.div className="project" variants={fadeUp}>
//           <header>
//             <svg width="50" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1">
//               <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
//             </svg>
//             <div className="project-links">
//               <a href="https://github.com/Vikalp71/CRM-DASHBOARD" target="_blank" rel="noreferrer">
//                 <img src={githubIcon} alt="GitHub" />
//               </a>
//             </div>
//           </header>
//           <div className="body">
//             <h3>CRM Dashboard</h3>
//             <p>CRM Dashboard is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js,
//                Node.js) to manage leads and business data efficiently.The application provides secure user 
//                authentication, lead management, and a responsive dashboard interface that allows users to create, 
//                update, delete, and track leads in real-time.It follows a clean architecture with RESTful APIs, 
//                JWT-based authentication, and protected routes to ensure secure data handling and smooth user experience.</p>
//           </div>
//         </motion.div>

//         {/* Project Card */}
//         <motion.div className="project" variants={fadeUp}>
//           <header>
//             <svg width="50" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1">
//               <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
//             </svg>
//             <div className="project-links">
//               <a href="https://github.com/Vikalp71/Tasty-Treats" target="_blank" rel="noreferrer">
//                 <img src={githubIcon} alt="GitHub" />
//               </a>
//             </div>
//           </header>
//           <div className="body">
//             <h3>Tasty Treats</h3>
//             <p>  Tasty-Treats is a responsive food delivery web application where users 
//             can browse food items like pizza, burgers, and pasta. It provides a clean and 
//               user-friendly interface to view food details and prices. The project is built 
//                using React.js with reusable components and a responsive design for smooth use on all devices..</p>
//           </div>
//         </motion.div>

//         {/* Project Card */}
//         <motion.div className="project" variants={fadeUp}>
//           <header>
//             <svg width="50" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1">
//               <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
//             </svg>
//             <div className="project-links">
//               <a href="https://github.com/Vikalp71/Animation-Website" target="_blank" rel="noreferrer">
//                 <img src={githubIcon} alt="GitHub" />
//               </a>
//             </div>
//           </header>
//           <div className="body">
//             <h3>Animation Website</h3>
//             <p>We are a creative animation studio specializing in 2D animation, 3D animation, motion graphics, and video production.
//             Our goal is to transform ideas into visually stunning animations that help businesses grow and engage their audience.
//              With modern tools and creative storytelling, we deliver high-quality animation solutions for websites, ads, and social media.</p>
//           </div>
//         </motion.div>

//         {/* Project Card */}
//         <motion.div className="project" variants={fadeUp}>
//           <header>
//             <svg width="50" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1">
//               <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
//             </svg>
//             <div className="project-links">
//               <a href="https://github.com/Vikalp71/Kanban-Application" target="_blank" rel="noreferrer">
//                 <img src={githubIcon} alt="GitHub" />
//               </a>
//             </div>
//           </header>
//           <div className="body">
//             <h3>Kanban App</h3>
//             <p>A modern Kanban Application built using React.js that helps users manage tasks efficiently with 
//           drag-and-drop functionality. The application allows users to create, update, delete, and organize 
//                tasks across different stages like To Do, In Progress, and Done. It provides a clean and responsive 
//                  user interface for better productivity and task management.</p>
//           </div>
//         </motion.div>

//       </motion.div>
//     </Container>
//   );
// }