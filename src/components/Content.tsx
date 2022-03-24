import { faCss3, faGithub, faHtml5, faJs, faLinkedin, faReact, faSass, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAt, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react'; 

export const Main = () => {
  return (
    <div className='content'>
        <div className="main-wrapper">
            <h1><span className='right'>I bring designs to life &</span> <br /> paint&#127912; beautiful experiences <br /> on the web with <span className='orange'>code();</span></h1>
            <a className = "view-projects"  href="#projects">View my work</a>
            <div className="about-container" id='about-me'>
                <div className="about-box">
                    <div className="about-me">
                        <h1>WHO IS <span className='black'>SAMUEL?</span></h1>
                        <p>I'm a frontend web developer with experience in building interactive, responsive and pixel-
                        perfect user interfaces. I'm experienced in replicating design mockups with great attention to
                        detail.</p>
                        <p>I'm currently looking for an opportunity to work with a team of creative developers and designers. I'm available for internships/entry level roles/gigs.</p>
                        <a className="mail" href="mailto: mrsammadeit@gmail.com">Hit me up</a>
                        <div className="sm">
                            <a href="https://github.com/Sammy-Genius?tab=repositories"><FontAwesomeIcon icon = { faGithub }/></a>
                            <a href="https://twitter.com/sammyisagenius"><FontAwesomeIcon icon = { faTwitter } /></a>
                            <a href="https://www.linkedin.com/in/samuel-osei-10458917a/"><FontAwesomeIcon icon = { faLinkedin } /></a>
                        </div>
                    </div>
                    <div className="duck-tape"></div>
                    <div className="duck-tape-two"></div>
                </div>
                <p className="know-me">Get to know me</p>
            </div>
            <div className="projects" id = "projects">
                <div className="heading-box">
                <h1 className='heading'>Selected <br /> <span className="spacing">Projects</span></h1>
                </div>
                <div className="project-wrapper">
                    <div className='project-one work-box'>
                        <div className="work">
                            <img src={require('../images/img-two.png')} alt="" />
                            <div className="overlay">
                                <h2>DashINN</h2>
                                <p>A Responsive Dashboard</p>
                                <div className="link-box">
                                <a href="https://github.com/Sammy-Genius/DashIN---Dashboard" className='icon'><FontAwesomeIcon icon = { faGithub } /></a>
                                <a href="https://dashinn.netlify.app/" className='site'>Visit Site</a>
                                </div>
                            </div>
                            <div className="mobile-overlay">
                                <div className="project-links">
                                    <div className="circle-shape">
                                        <a href="https://github.com/Sammy-Genius/DashIN---Dashboard" className='icon-2'><FontAwesomeIcon icon = { faGithub } /></a>
                                    </div>
                                    <div className="circle-shape">
                                        <a href="https://dashinn.netlify.app/" className='icon-2'><FontAwesomeIcon icon = { faEye } /></a>
                                    </div>
                                </div>
                                <div className="project-details-mobile">
                                    <p>DashINN - A Responsive Dashboard</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project-two work-box'>
                        <div className="work">
                            <img src={require('../images/img-three.png')} alt="" />
                            <div className="overlay">
                                <h2>COVTRACK</h2>
                                <p>A Covid Tracker Application</p>
                                <div className="link-box">
                                <a href="https://github.com/Sammy-Genius/covid-tracker" className='icon'><FontAwesomeIcon icon = { faGithub } /></a>
                                <a href="https://covtrackk.netlify.app/" className='site'>Visit Site</a>
                                </div>
                            </div>
                            <div className="mobile-overlay">
                                <div className="project-links">
                                    <div className="circle-shape">
                                        <a href="https://github.com/Sammy-Genius/covid-tracker" className='icon-2'><FontAwesomeIcon icon = { faGithub } /></a>
                                    </div>
                                    <div className="circle-shape">
                                        <a href="https://covtrackk.netlify.app/" className='icon-2'><FontAwesomeIcon icon = { faEye } /></a>
                                    </div>
                                </div>
                                <div className="project-details-mobile">
                                    <p>COVTRACK - A Covid Tracker Application</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project-three work-box'>
                        <div className="work">
                            <img src={require('../images/img-four.png')} alt="" />
                            <div className="overlay">
                                <h2>PhoneBook</h2>
                                <p>Create your contacts</p>
                                <div className="link-box">
                                <a href="https://github.com/Sammy-Genius/PhoneBook-App" className='icon'><FontAwesomeIcon icon = { faGithub } /></a>
                                <a href="https://thephonebookapp.netlify.app/" className='site'>Visit Site</a>
                                </div>
                            </div>
                            <div className="mobile-overlay">
                                <div className="project-links">
                                    <div className="circle-shape">
                                        <a href="https://github.com/Sammy-Genius/PhoneBook-App" className='icon-2'><FontAwesomeIcon icon = { faGithub } /></a>
                                    </div>
                                    <div className="circle-shape">
                                        <a href="https://thephonebookapp.netlify.app/" className='icon-2'><FontAwesomeIcon icon = { faEye } /></a>
                                    </div>
                                </div>
                                <div className="project-details-mobile">
                                    <p>PhoneBook App - Create your contacts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="faded-text-works">
                        <p>Check out my work</p>
                    </div>
                </div>
                <div className="shape2"></div>
                <div className="shape3"></div>
                <div className="shape4"></div>
            </div>
            <div className="skills-wrapper" id='my-skills'>
                <div className="heading-box">
                    <h1 className='heading'>My <br /> <span className='spacing'>Skills</span></h1>
                </div>
                <div className="skills-container">
                    <div className="skills">
                        <span><FontAwesomeIcon icon = { faHtml5 } /></span>
                        <span><FontAwesomeIcon icon = { faCss3 } /></span>
                        <span><FontAwesomeIcon icon = { faReact } /></span>
                        <span><FontAwesomeIcon icon = { faJs } /></span>
                        <span><FontAwesomeIcon icon = { faSass } /></span>
                    </div>
                    <div className="stack">
                        <p>Typescript</p>
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>Sass</p>
                        <p>React</p>
                        <p>JavaScript</p>
                    </div>
                </div>
            </div>
        </div>
        <footer id='contact'>
            <div className="sm-contacts">
                <a href="mailto: mrsammadeit@gmail.com"><FontAwesomeIcon icon={ faAt } /></a>
                <a href="https://github.com/Sammy-Genius?tab=repositories"><FontAwesomeIcon icon={ faGithub } /></a>
                <a href="https://twitter.com/sammyisagenius"><FontAwesomeIcon icon={ faTwitter } /></a>
                <a href="https://www.linkedin.com/in/samuel-osei-10458917a/"><FontAwesomeIcon icon={ faLinkedin } /></a>
            </div>
            <div className="footer-container">
                <h1>Let's Connect</h1>
            </div>
            <div className="hello">
                <h2>Hello there &#128075;</h2>
            </div>
        </footer>
    </div>
  );
}
