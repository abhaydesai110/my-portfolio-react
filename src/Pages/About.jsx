import {Link} from "react-router-dom";
import Resume from "../assets/img/Abhay_3.5_Year_ReactJS.pdf";

const About = () => {
  return (
    <div>
      <div className="bg-grey-50" id="about">
        <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
          <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
            <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">Who am I?</h2>
            <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">I am Abhay Desai, a React Js Developer</h4>
            <p className="pt-6 font-body leading-relaxed text-grey-20">
              React JS Developer with 3.5+ years of experience in building user interfaces and implementing components. Proven ability to work independently and as part of a team to deliver high-quality
              products. Strong technical skills in JavaScript, HTML, CSS, and React JS frameworks.
            </p>
            <h3 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-2xl">Technical skills</h3>
            <div className="pt-6 text-grey-10 font-medium space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-1 text-black">Frontend</h3>
                <p className="flex flex-wrap gap-x-4 gap-y-2">HTML5, CSS3, SCSS, JavaScript, TypeScript</p>
                <p className="flex flex-wrap gap-x-4 gap-y-2"> React.js, Next.js, Bootstrap, Tailwind CSS, Material UI, Chakra UI, Shadcn, Ant Design</p>
                <p className="flex flex-wrap gap-x-4 gap-y-2">State Management & Routing: Redux, Redux Toolkit, Context API, React Router</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-1 text-black">Backend</h3>
                <p className="flex flex-wrap gap-x-4 gap-y-2">Node.js, Express.js, Socket.io</p>
                <p className="flex flex-wrap gap-x-4 gap-y-2">API Development: REST APIs, 3rd Party Integrations (Stripe, Plaid, Google Maps API, Google Drive, Dropbox)</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-1 text-black">Tools & Workflow</h3>
                <p className="flex flex-wrap gap-x-4 gap-y-2">Git, GitHub, Postman, JIRA, Trello, Confluence</p>
                <p className="flex flex-wrap gap-x-4 gap-y-2">Figma, Shadcn UI, SCSS</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-1 text-black">Additional Skills</h3>
                <p className="flex flex-wrap gap-x-4 gap-y-2">API Integration, Debugging, Deployment, Google Drive & Dropbox Upload, Payment Integration (Stripe, Plaid)</p>
              </div>
            </div>
            <h3 className="pt-6 font-header flex items-center justify-start text-xl font-medium sm:justify-center justify-start text-black sm:text-2xl lg:text-2xl">
              <i className="bx bxl-github text-4xl text-black duration-300 hover:text-grey-20"></i>
              <p className="text-center">GitHub Desktop Proficiency</p>
            </h3>
            <p className="pt-6 font-body leading-relaxed text-grey-20">
              GITHUB PROFICIENCY <br />
              • Proficient in Git and GitHub, including branch creation, merging, and conflict resolution <br />
              • Experienced with continuous integration and delivery environments, including development, staging, and UAT
              <br />• Creation and merging of branches for feature development and bug fixes Merging of branches with conflict resolution to maintain code integrity and project continuity
            </p>
            <div className="flex items-center space-x-7 justify-center w-full pt-6">
              <button className="text-xs md:text-lg xs:w-40 flex font-normal items-center space-x-2 justify-center hover:w-44  h-12 w-40   hover:bg-primary hover:border-0 duration-300  font-medium bg-black text-white rounded-3xl  ">
                <i className="bx bxl-github text-2xl text-white  duration-300 hover:text-grey-20"></i>
                <Link to="https://github.com/abhaydesai110" target="_blank">
                  <h2>View Github</h2>
                </Link>
              </button>
              <Link to={Resume} download="Abhay_ReactJs_2YearsExpAbhayDesai_3_Year_Exp_React_Js" target="_black">
                <button className="btn flex items-center justify-center  classes.navLinks text-xs md:text-lg md:w-40 w-36 h-12 ">
                  <span className="">Download CV</span>
                </button>
              </Link>
            </div>
            <div className="flex mt-6 flex-col justify-center pt-6 sm:flex-row lg:justify-start">
              <div className="flex items-center justify-center sm:justify-start">
                <p className="font-body text-lg font-semibold uppercase text-grey-20">Connect with me</p>
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-2xl text-primary"></i>
                </div>
              </div>
              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                <Link to="https://www.facebook.com/abhay.desai.9028" target="_black">
                  <i className="bx bxl-facebook-square text-2xl text-primary hover:text-black duration-300"></i>
                </Link>
                <Link to="https://www.twitter.com/abhaydesai110" target="_black" className="pl-4">
                  <i className="bx bxl-twitter text-2xl text-primary hover:text-black duration-300"></i>
                </Link>
                <Link to="https://abhaydesai.netlify.app/" className="pl-4" target="_black">
                  <i className="bx bxl-dribbble text-2xl text-primary hover:text-black  duration-300"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/abhay-desai-336863166/" className="pl-4" target="_black">
                  <i className="bx bxl-linkedin text-2xl text-primary hover:text-black  duration-300"></i>
                </Link>
                <Link to="https://www.instagram.com/abhay_desai_110/" className="pl-4" target="_blank">
                  <i className="bx bxl-instagram text-2xl text-primary hover:text-black duration-300"></i>
                </Link>
                <Link to="https://github.com/abhaydesai110" className="pl-4 " target="_black">
                  <i className="bx bxl-github text-2xl text-primary hover:text-black  duration-300"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
            <div>
              <div className="md:pt-18 pt-6 ">
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">Github Desktop</h4>
                  <h3 className="font-body text-3xl font-bold text-primary">95%</h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div className="h-3 rounded-full bg-primary w-[95%]"></div>
                </div>
              </div>
              <div className="md:pt-18 pt-6 ">
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">HTML</h4>
                  <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
                </div>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary w-[85%] "></div>
              </div>
            </div>
            <div className="md:pt-18 pt-6 ">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">CSS</h4>
                <h3 className="font-body text-3xl font-bold text-primary">70%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary w-[70%]"></div>
              </div>
            </div>
            <div className="md:pt-18 pt-6 ">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">Javascript</h4>
                <h3 className="font-body text-3xl font-bold text-primary">80%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary w-[80%]"></div>
              </div>
            </div>
            <div className="md:pt-18 pt-6 ">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">React</h4>
                <h3 className="font-body text-3xl font-bold text-primary">91%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary w-[91%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
