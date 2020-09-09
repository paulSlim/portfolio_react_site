import React from 'react';
import '../styles/Contact.css';
import { Link } from 'react-router-dom';

const Contact = (props) => {
    return (
        <div className="contact_container">
            <button className="contact_link" id="contact_linkId" onClick={props.handleContactForm}>contact</button>
            <Link to={{ pathname: "https://www.linkedin.com/in/pawel-slimko" }} target="_blank" className={"fa fa-linkedin"} id={"linkedinId"} />
            <Link to={{ pathname: "https://github.com/paulSlim/" }} target="_blank" className={"fa fa-github"} id={"gitId"} />
            <Link to={{ pathname: "https://twitter.com/p_slimko" }} target="_blank" className={"fa fa-twitter"} id={"twitId"} />
        </div>
    );
}

export default Contact;