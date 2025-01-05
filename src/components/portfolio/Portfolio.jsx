import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.png'

//Do not use the images in production
const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Hybrid Intrusion Detection System using Machine Learning - A machine learning-based intrusion detection system designed to identify and mitigate cybersecurity threats with 96.8% binary accuracy.',
        github: 'https://github.com/Arvindsai-lu/Hybrid-Intrusion-Detection-System-Using-Machine-Learning-',
        demo: 'https://',
    },
    {
        id: 2,
        image: IMG2,
        title: 'My Personal Portfolio Website uses React and is deployed on Github.',
        github: 'https://github.com/',
        demo: 'https://',
    },
    {
        id: 3,
        image: IMG3,
        title: 'Decentralized Voting System using Ethereum Blockchain- A secure and transparent voting platform leveraging Ethereum blockchain to ensure tamper-proof and anonymous elections. .',
        github: 'https://github.com/',
        demo: 'https:///',
    },
    {
        id: 4,
        image: IMG4,
        title: ' DoS (Denial of Service) Attack Detection and Mitigation Tool',
        github: 'https://github.com/NguyenVu1310/threeblock',
        demo: 'https:///',
    },
    {
        id: 5,
        image: IMG5,
        title: 'Personal project - Deep Fake Voice Synthesizer  (Voice Cloning) using python',
        github: 'https://github.com/Arvindsai-lu/Real-time-voice-cloning',
        demo: 'https:///',
    },
    {
        id: 6,
        image: IMG6,
        title: 'Hackathon (Flipkart Grid 3.0)- Central Monitoring and Navigation System for Robots ',
        github: 'https://github.com/',
        demo: 'https://www.youtube.com/watch?v=D0rlm-pwEn0',
    },
    {
        id: 7,
        image: IMG7,
        title: 'Data & Image-Encryption & Decryption using Java ',
        github: 'https://github.com/Arvindsai-lu/Data-Image-Encryption-Decryption-Java',
        demo: 'https://github.com/Arvindsai-lu/Data-Image-Encryption-Decryption-Java',
    },
]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Projects</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio