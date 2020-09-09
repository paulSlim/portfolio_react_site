import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/StartPage.css';

import img1 from '../img/light.jpg';
import img2 from '../img/light1.png';

class StartPage extends Component {
    state = {}

    // componentDidMount() {
    //     const orbs = [...document.querySelectorAll('.orbs')];
    //     console.log(orbs);

    //     const animateOrbs = () => {


    //         orbs.forEach(orb => {
    //             // const randomA = Math.floor(Math.random() * 5);
    //             // const randomB = Math.floor(Math.random() * 5);
    //             // const randomPos = randomA - randomB;

    //             let leftNumber = orb.style.left;
    //             let leftPositionNumber = parseInt(leftNumber, 10);

    //             let topNumber = orb.style.top;
    //             let topPositionNumber = parseInt(topNumber, 10);


    //             // let posX = leftPositionNumber + randomPos + 'px';
    //             // let posY = topPositionNumber + randomPos + 'px';

    //             console.log(leftNumber, topNumber);
    //             console.log(leftPositionNumber, topPositionNumber);



    //             // orb.style.left = posX;
    //             // orb.style.top = posY;

    //             // setTimeout(() => {
    //             //     orb.style.left = posX - randomPos;
    //             //     orb.style.top = posY - randomPos;
    //             // }, 2000);
    //         })
    //     }
    //     // setInterval(() => animateOrbs(), 3000);
    //     animateOrbs();

    // }


    render() {
        return (
            <section className="section_content" id='start_content'>
                <h1>PAWEŁ ŚLIMKO</h1>

                <button className="orbs light1"></button>
                <button className="orbs light2" id="light2Id"></button>
                <button className="orbs light3"></button>
                <button className="orbs light4"></button>
                <button className="orbs light5"></button>
                <button className="orbs light6"></button>
                <button className="orbs light7"></button>
                <button className="orbs light8"></button>
                <button className="orbs light9"></button>
                <button className="orbs light10" id="light10Id"></button>
                <button className="orbs light11"></button>
                <button className="orbs light12"></button>
                <button className="orbs light13"></button>
                <button className="orbs light14"></button>
                <button className="orbs light15"></button>
                <button className="orbs light16"></button>
                <NavLink to="#" className="orbs light17"></NavLink>

                <div className="main_photo" id="main_photoId">
                    <picture>
                        <source media="(max-width:1270px)" srcSet={img1} />
                        <img src={img2} alt="source_light" />
                    </picture>
                </div>

                <NavLink to='/texts' className="btn_fn copywriter nav_links" id="copywriter_btn">Copywriter</NavLink>
                <NavLink to='/websites' className="btn_fn designer nav_links" id="webdesigner_btn">Web
        Developer</NavLink>

            </section>
        );
    }
}

export default StartPage;
