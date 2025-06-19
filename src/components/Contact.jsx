import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('Ql_aqxvhzp');
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #2d3436;
  margin-bottom: 3rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    color: #2d3436;
    margin-bottom: 1.5rem;
  }

  p {
    color: #636e72;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;

  a {
    color: #2d3436;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #0984e3;
    }
  }
`;

const ContactForm = styled(motion.form)`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .form-group {
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #2d3436;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #dfe6e9;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #0984e3;
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background: #0984e3;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0769b5;
  }

  &:disabled {
    background: #b2bec3;
    cursor: not-allowed;
  }
`;

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_aqxvhzp',
      'template_yvxqxwp',
      form.current,
      'Ql_aqxvhzp'
    )
      .then(() => {
        setSubmitStatus('Message sent successfully!');
        form.current.reset();
      })
      .catch(() => {
        setSubmitStatus('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Get In Touch</SectionTitle>
        <ContactGrid>
          <ContactInfo>
            <h3>Let's Connect</h3>
            <p>
              I'm currently looking for new opportunities and would love to hear from you.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <SocialLinks>
              <a href="mailto:basanagoudameti2003@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope />
              </a>
              <a href="https://www.linkedin.com/in/basanagouda-meti/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/bsm2709" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </SocialLinks>
          </ContactInfo>

          <ContactForm
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="user_name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="user_email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            {submitStatus && <p>{submitStatus}</p>}
          </ContactForm>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact;