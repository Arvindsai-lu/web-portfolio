import React from 'react'
import './services.css'
import { BsCheckLg } from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Know</h5>
            <h2>Learning and Achievement</h2>

            <div className="container services__containter">
                {/* start Mô tả chi tiết */}
                <article className="service">
                    <div className="service__head">
                        <h3>Information Assurance Learning Path</h3>
                    </div>
                    <ul className='service__list'>
                    <li>
                        <BsCheckLg className='service__list-icon' />
                        <p>Identity and Access Management (IAM)</p>
                    </li>
                    <li>
                        <BsCheckLg className='service__list-icon' />
                        <p>Threat Detection & Incident Response</p>
                    </li>
                    <li>
                        <BsCheckLg className='service__list-icon' />
                        <p>Penetration Testing & Vulnerability Assessment</p>
                    </li>
                    <li>
                        <BsCheckLg className='service__list-icon' />
                        <p>Network Security & Forensics</p>
                    </li>
                    <li>
                        <BsCheckLg className='service__list-icon' />
                        <p>Ethical Hacking and Offensive Security</p>
                    </li>
                    <li>
                        <BsCheckLg className='service__list-icon' />
                        <p>Scanning & Reconnaissance</p>
                    </li>
                    <li>
                        <BsCheckLg className='service__list-icon' />
                        <p>Open Source Intelligence</p>
                    </li>
                    <li>
                        <BsCheckLg className='service__list-icon' />
                        <p>Risk Management in Information Systems</p>
                    </li>
                    <li>
                        <BsCheckLg className='service__list-icon' />
                        <p>Incident Response</p>
                    </li>
                    </ul>
                </article>
                {/* End of ui/ux */}

{/* Start Certification */}
<article className="service">
    <div className="service__head">
        <h3>Certification</h3>
    </div>
    <ul className='service__list'>
        <li>
            <BsCheckLg className='service__list-icon' />
            <p><b>Google Cybersecurity Professional</b> Course Certificate on Coursera</p>
        </li>
        <li>
            <BsCheckLg className='service__list-icon' />
            <p><b>ISO/IEC 27001 Information Security</b> Course Certificate on Skill Front</p>
        </li>
        <li>
            <BsCheckLg className='service__list-icon' />
            <p><b>Penetration Testing</b> Course Certificate on TCM Security</p>
        </li>
        <li>
            <BsCheckLg className='service__list-icon' />
            <p><b>Cyber Ops</b> Course Certificate on Cisco</p>
        </li>
        <li>
            <BsCheckLg className='service__list-icon' />
            <p><b>CCNA</b> Course Certificate on Cisco</p>
        </li>
        <li>
            <BsCheckLg className='service__list-icon' />
            <p><b>Cybersecurity Essentials</b> Course Certificate on Cisco</p>
        </li>
        <li>
            <BsCheckLg className='service__list-icon' />
            <p><b>CompTIA Sec +</b> (In Progress)</p>
        </li>
    </ul>
</article>
{/* End Certification */}

                {/* Mô tả chi tiết */}
                {/* Achievements */}
                <article className="service">
                    <div className="service__head">
                        <h3>Achievements</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p><b>National Winner:</b> Flipkart Grid 3.0 Hackathon</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p><b>Finalist:</b> Smart India Hackathon</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p><b>Top 70:</b> CyberQuest US Cyber Challenge (out of 3,500 participants)</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p><b>Top 300:</b> National Cyber League; gained expertise in Network Traffic Analysis, Digital Forensics, and OSINT</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p><b>Published:</b> Research Paper on \"Deep Fake Voice Synthesizer\" in IJARSCT</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p><b>Volunteer:</b> Contributed to GCSI (Global Cybersecurity Initiative) discussions</p>
                        </li>
                    </ul>
                </article>
                {/* End Achievements */}
                {/* End of ui/ux */}
            </div>
        </section>
    )
}

export default Services