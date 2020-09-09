import React from 'react';
import img1 from '../img/main3.png';
import { Link } from 'react-router-dom';
import '../styles/TextsPage.css';

const TextsPage = () => {
    return (
        <section className="section_content" id="texts_sectionId">
            <h1>Texts</h1>
            <div className="content_container">
                <div className="section_text1">
                    <p>For almost 10 years I've been writing professional texts and content for e-commerce, media and personal
                    projects.
            Here you'll find some samples of my works.</p>
                </div>

                <div className="texts_container">
                    <div className="text_links">
                        <h2>Commercial and Media</h2>
                        <ul>
                            <li><Link to="../texts/Email signatures for marketing branding purposes.pdf" target="_blank">Email
                            signatures for marketing
                  / branding purposes?</Link> (<Link to={{ pathname: "https://www.codetwo.com/" }} target="_blank">CodeTwo</Link>, EN)
              </li>
                            <li><Link to="../texts/Migrate Exchange 2003 or 2007 to Exchange 2016.pdf"
                                target="_blank">Migrate legacy (2003 or 2007) Exchange to Exchange
                  2016</Link> (<Link to={{ pathname: "https://www.codetwo.com/" }} target="_blank">CodeTwo</Link>, EN)</li>
                            <li><Link to="../texts/SEO optimisation.pdf" target="_blank">Optimizing SEO – Google and its playground</Link>
                (Network
                Publications, EN)</li>
                            <li><Link to="../texts/Starting an affiliate business.pdf" target="_blank">Getting started in affiliate
                  business</Link>
                (Network Publications, EN)</li>
                            <li><Link to="../texts/Maximizing PPC.pdf" target="_blank">How to conduct PPC campaign? Basic tips</Link>
                (Network
                Publications, EN)</li>
                            <li><Link to="texts/Knorr Press Release.pdf" target="_blank">Knorr Press Release</Link> (Press Release, EN)
              </li>
                            <li><Link to="../texts/Cursed soldiers.pdf" target="_blank">Cursed Soldiers</Link> (<Link
                                to={{ pathname: "http://polishdemocracy.blogspot.com/2017/03/why-poland-is-celebrating-national-day.html" }}
                                target="_blank">Blogspot
                  link</Link>,
                EN)</li>
                            <li><Link to="../texts/The place beyond the pines.pdf" target="_blank">Our Twisted Paths
                            (The Place Beyond The Pines -
                  Review)</Link> (Blogspot, EN)</li>
                            <li><Link to="../texts/Mass heater.pdf" target="_blank">Chamber Bell Mass Heater aka Masonry Mass
                  Heater</Link> (Mass Heater
                Designs, EN)</li>
                            <li><Link to="../texts/Podchody na wrocławskim Rynku .pdf" target="_blank">Podchody na Wrocławskim
                  Rynku</Link>
                (Media
                Articles, PL)</li>
                            <li><Link to="../texts/Jednostronne ograniczenie predkosci.pdf"
                                target="_blank">Jednostronne ograniczenie predkosci</Link>
                (Media Articles, PL)</li>
                            <li><Link to="../texts/Stawiaja nowe wiaty.pdf" target="_blank">Stawiaja nowe wiaty</Link> (Media Articles,
                PL)</li>
                            <li><Link to="../texts/Monaco Miejsce Mocy.pdf" target="_blank">Monaco Miejsce Mocy</Link> (Media Game Review,
                PL)</li>
                        </ul>
                        <h2>Academic</h2>
                        <ul>
                            <li><Link to="../texts/Master Thesis - In the search of reality.pdf" target="_blank">In the search of
                            reality: The changing
                  landscape of documentary films</Link> (MA, EN)</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="light_img img2">
                <button className="orbs light18"></button>
                <button className="orbs light19"></button>
                <button className="orbs light20"></button>
                <img src={img1} alt="mountain peak" />
            </div>

        </section>
    );
}

export default TextsPage;