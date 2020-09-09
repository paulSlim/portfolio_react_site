import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/MediaQueries.css';

import Contact from '../components/Contact';
import ContactContainer from '../components/ContactContainer';
import HeroStart from './HeroStart';
import MainNavigation from './MainNavigation';
import Pages from './Pages';


import { BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
  state = {}

  swingTotem = () => document.getElementById("totemId").classList.toggle("totem_active");

  clickedContactLink = 0;

  openCloseContactForm = () => {
    const contactLink = document.getElementById("contact_linkId");

    this.clickedContactLink++;
    if (this.clickedContactLink === 2) {
      document.getElementById("contact_form_contentId").classList.toggle("contact_form_content_active");
      this.clickedContactLink = 0;
    } else {
      setTimeout(function () {
        document.getElementById("contact_form_contentId").classList.toggle("contact_form_content_active");
      }, 300);
    }
    document.getElementById("contact_form_containerId").classList.toggle("contact_form_container_active");
    document.getElementById("twitId").classList.toggle("fa-twitter_active");
    contactLink.classList.toggle("contact_link_active");
    console.log('działa');

  }





  render() {
    return (
      <Router>
        <div className="main_container">
          <header>
            {<HeroStart swingTotem={this.swingTotem} />}
            {<Contact handleContactForm={this.openCloseContactForm} />}

          </header>
          <main>
            <aside>
              {<ContactContainer />}
              {<MainNavigation />}
            </aside>
            <section>
              {<Pages />}
            </section>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;