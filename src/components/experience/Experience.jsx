import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skill I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
            <div className="experience__frontend">
            <h3>Languages</h3>
            <div className="experience__content">
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>Python</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>SQL</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>JavaScript</h4>
                        <small className='text-light'>Basic</small>
                    </div>
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>C</h4>
                        <small className='text-light'>Basic</small>
                    </div>
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>Node.js/React</h4>
                        <small className='text-light'>Basic</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>HTML/CSS</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>Shell Scripting</h4>
                        <small className='text-light'>Basic</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>Bash</h4>
                        <small className='text-light'>Basic</small>
                    </div>
                </article>
            </div>
        </div>

        <div className="experience__backend">
            <h3>Technology and Tools</h3>
            <div className="experience__content">
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>Splunk</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>Wireshark</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>Nmap</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>Metasploit</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>Burp Suite</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>Docker</h4>
                        <small className='text-light'>Basic</small>
                    </div>
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>SIEM </h4>
                        <small className='text-light'>Basic</small>
                    </div>
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>AWS/GCP</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>Git/Github</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>Jira</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                </article>
            </div>
        </div>

            </div>
        </section>
    )
}

export default Experience