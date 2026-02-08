import React from 'react';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = React.useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const GOOGLE_FORM_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfzklFiu6WxqPdkOjcwZTutqChSvjOYFF5RObCyiZH0SeJwJA/formResponse';

        const formBody = new FormData();
        formBody.append('entry.2029481681', formData.name);
        formBody.append('entry.607178888', formData.email);
        formBody.append('entry.1530624128', formData.message);

        try {
            await fetch(GOOGLE_FORM_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: formBody
            });
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus('Failed to send message. Please try again.');
            console.error('Error submitting form:', error);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <h2>Contact Me</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="How can I help you?"
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
                {status && <p className="status-message">{status}</p>}
            </form>
        </section>
    );
};

export default Contact;
