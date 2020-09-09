import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/WebsitesPage.css';

import img1 from '../img/domekudomny.jpg';
import img2 from '../img/massheater.jpg';
import img3 from '../img/main.png';


const WebsitesPage = () => {
    return (
        <section className="section_content" id="websites_sectionId">
            <h1>Websites</h1>
            <div className="content_container websites_content_container">
                <div className="section_text1">
                    <p>Web Development have become my passion and I've been involved in web projects
                    of
                    startups and existing businesses. I create websites from scratch using pure HTML, CSS, JavaScript and
            libraries like React, Node.js and jQuery.</p>
                </div>

                <div className="websites_container">
                    <div className="websites domekudomny">
                        <div className="img-wrapper">
                            <Link to={{ pathname: "https://domekudomny.pl" }}><img src={img1} alt="Domek u Domny" /></Link>
                        </div>
                        <div className="websites_content">
                            <h2>Domek u Domny</h2>
                            <p>A site for a small tourism business based in Karkonosze Mountains, Poland. House rental.
              </p>
                        </div>
                    </div>
                    <div className="websites massheater">
                        <div className="img-wrapper">
                            <Link to={{ pathname: "https://massheaterdesigns.com" }}><img src={img2} alt="Mass Heater Designs" /></Link>
                        </div>
                        <div className="websites_content">
                            <h2>Mass Heater Designs</h2>
                            <p>My first commercial project for a startup that deals in mass heaters business. The site is still in
                            development. Author of texts and design.
              </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="light_img img1">
                <img src={img3} alt="Paweł Ślimko" />
            </div>
        </section>

    );
}

export default WebsitesPage;