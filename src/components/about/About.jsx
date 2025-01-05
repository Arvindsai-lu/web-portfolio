import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Me Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Level</h5>
                            <small>Fresher</small>
                        </article>

                        <article className='about__card'>
                            <TbCertificate className='about__icon' />
                            <h5>Certificate</h5>
                            <small>+25 Certificate</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>+6 Completed</small>
                        </article>
                    </div>

                    <p>
                    Hi! I’m Arvind Sai Dooda, a passionate cybersecurity professional and aspiring security analyst/engineer with expertise in Identity and Access Management (IAM), network security, and threat detection. Skilled in leveraging tools like Splunk and Wireshark, alongside programming in Python and Shell scripting, I am driven to create innovative solutions to protect digital infrastructures.

Currently pursuing a Master’s in Cybersecurity, I am eager to apply my technical skills and problem-solving mindset in a security analyst or engineer role. Let’s connect to discuss how I can contribute to your team and help safeguard your organization’s digital assets!
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About