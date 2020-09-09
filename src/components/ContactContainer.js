import React, { Component } from 'react';
import '../styles/ContactContainer.css';

class ContactContainer extends Component {
    state = {
        name: '',
        email: '',
        content: '',
        message: '',

        errors: {
            name: false,
            email: false,
            accept: false,
        }
    }

    messages = {
        name_incorrect: 'Has to involve more than 5 letters',
        email_incorrect: 'Not a valid email address',
        content_incorrect: 'Your text is too short',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const validation = this.formValidation();
        console.log(validation);

        if (validation.correct) {
            this.setState({
                name: '',
                email: '',
                content: '',
                message: 'Message has been sent',

                errors: {
                    name: false,
                    email: false,
                    accept: false,
                }
            })
        } else {
            this.setState({
                errors: {
                    name: !validation.name,
                    email: !validation.email,
                    content: !validation.content,
                }
            })
        }
    }



    handleChange = (e) => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value,
        })
    }

    formValidation = () => {
        let name = false;
        let email = false;
        let content = false;

        let correct = false;

        if (this.state.name.length > 5) name = true;

        if (this.state.email.indexOf('@') !== -1 && this.state.email.indexOf('.') !== -1) email = true;

        if (this.state.content.length >= 10) content = true;

        if (name && email && content) correct = true;

        return ({ correct, name, email, content });

    }

    componentDidUpdate() {
        setTimeout(() => {
            this.setState({
                message: '',
            })
        }, 15000);

    }

    render() {
        return (
            <section className="contact_form_container" id="contact_form_containerId">
                <h1>Contact form</h1>
                <div className="contact_form_content" id="contact_form_contentId">

                    <p>Please contact me</p>

                    <form onSubmit={this.handleSubmit} className="contact_form" noValidate>

                        <input value={this.state.name} type="text" name="name" placeholder="your name" onChange={this.handleChange} style={this.state.errors.name ? { borderColor: 'red' } : null} />

                        <span>{this.state.errors.name && <span>{this.messages.name_incorrect}</span>}</span>

                        <input value={this.state.email} type="text" name="email" placeholder="your email" onChange={this.handleChange} style={this.state.errors.email ? { borderColor: 'red' } : null} />

                        <span>{this.state.errors.email && <span>{this.messages.email_incorrect}</span>}</span>

                        <textarea value={this.state.content} name="content" placeholder="write to me..." onChange={this.handleChange} style={this.state.errors.content ? { borderColor: 'red' } : null}></textarea>

                        <span>{this.state.errors.content && <span>{this.messages.content_incorrect}</span>}<br /></span>

                        <input type='submit' value='send' />
                        {this.state.message && <h4>{this.state.message}</h4>}
                    </form>


                </div>

            </section>
        );
    }
}

export default ContactContainer;