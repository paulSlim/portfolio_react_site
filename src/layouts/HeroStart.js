import React, { Component } from 'react';
import '../styles/HeroStart.css';



class HeroStart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTitlePage: true,
        }
    }

    animateMainElements = () => {
        const disappearBtn = () => {
            const btn = document.getElementById("btn");
            btn.style.opacity = 0;
            btn.style.top = 20 + "%";
        }

        const moveHeaderNav = () => {
            document.getElementById("navHeaderId").classList.toggle("swing_header");
        }

        disappearBtn()
        setTimeout(() => {
            moveHeaderNav();
            this.props.swingTotem();
        }, 1000);
        setTimeout(() => this.setState({
            showTitlePage: false,
        }), 5000);
    }

    componentDidMount() {

        function moveComponents() {
            const setNameTop = () => {
                const nameTop = document.getElementById("name_top");
                nameTop.style.opacity = 0.3;
                nameTop.style.top = 0 + "%";
            }
            const setNameBottom = () => {
                const nameBottom = document.getElementById("name_bottom");
                nameBottom.style.opacity = 0.3;
                nameBottom.style.top = 38 + "%";
            }
            const setNames = () => {
                setTimeout(() => {
                    setNameTop();
                    setNameBottom();
                }, 1000)
            }

            setNames();
        }
        moveComponents();
    }

    render() {
        const nameTop = <h1 className='title_name' id="name_top">Paweł</h1>;
        const nameBottom = <h1 className='title_name' id="name_bottom">Ślimko</h1>;

        const titlePage =
            <div className="nav_header" id="navHeaderId">
                {nameTop}
                {nameBottom}
                <button className="on_button" onClick={this.animateMainElements} id="btn">Start</button>
            </div>

        return (
            <>
                {this.state.showTitlePage ? titlePage : null}
            </>
        );
    }
}



export default HeroStart;