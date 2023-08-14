import React, { useRef } from 'react';
import { TitleWrapper, Wrapper, Title } from '../../common/commonElements';
import { ContactContainer, ContactDataWrapper, ContactLink, ContactTitle, ContentWrapper, Form, Header, Input, InputsWrapper, Message, SVGIcon, SendButton } from './styledContact';
import { contactData } from './contactData';
import { message } from 'antd';
import emailjs from '@emailjs/browser';
import { useInView } from 'react-intersection-observer';

export const Contact = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px -70% 0px',
    });

    const handleSendEmailSuccess = () => {
        message.success('E-mail was sent!');
    };

    const handleSendEmailError = () => {
        message.error('Email has not been sent. Try again!');
    };

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formElement = event.target as HTMLFormElement;

        emailjs.sendForm('service_p1wdtdz', 'template_tw2mnfg', formElement, 'ki2mepyulrmg22NST',)
            .then((result) => {
                if (result.text === "OK") {
                    formElement.reset();
                    handleSendEmailSuccess();
                }
            })
            .catch(() => {
                handleSendEmailError();
            });
    };

    return (
        <Wrapper leftvariant id="contact" ref={ref}>
            {inView && (
                <>
                    <TitleWrapper>
                        <Title smaller leftvariant > Contact</Title>
                    </TitleWrapper>

                    <ContentWrapper>
                        <Form onSubmit={sendEmail} ref={form}>
                            <Header>If you have a question, please send me an E-mail</Header>
                            <InputsWrapper>
                                <Input name="name" placeholder='Name *' required />
                                <Input name="email" placeholder='Email *' required />
                                <Message name="message" placeholder='Message * ' />
                                <SendButton>Send</SendButton>
                            </InputsWrapper>

                        </Form>
                        <ContactDataWrapper >
                            {contactData.map((contact, index) => (
                                <ContactContainer key={index}>
                                    <ContactTitle>
                                        <SVGIcon src={contact.icon} />
                                        {contact.title}
                                    </ContactTitle>
                                    <ContactLink href={contact.linkValue}>
                                        {contact.title === "Phone" ? "501 375 604" : contact.title === "E-Mail" ? "mizdebski123@gmail.com" : "Personal-HomePage"}
                                    </ContactLink>
                                </ContactContainer>
                            ))}
                        </ContactDataWrapper>
                    </ContentWrapper>
                </>)}
        </Wrapper>
    );
};

