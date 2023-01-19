import { Form, Formik, useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

function Contact(props) {
    let schema = yup.object().shape({
        name: yup.string().required("Please enter the name"),
        email: yup.string().required().email(),
        subject: yup.string().required(),
        message: yup.string().required()
    });

    const formikObj = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            console.log(values)
        },
    });
    const { handleChange, handleBlur, handleSubmit, setFieldTouched, errors, touched } = formikObj;

    console.log(errors);

    return (
        <div>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                            luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt" />
                                    <h4>Location:</h4>
                                    <p> F-505, Inovative Plazza New Delhi, India</p>
                                </div>
                                <div className="email">
                                    <i className="bi bi-envelope" />
                                    <h4>Email:</h4>
                                    <p>cityhospital@example.com</p>
                                </div>
                                <div className="phone">
                                    <i className="bi bi-phone" />
                                    <h4>Call:</h4>
                                    <p>+91 9988776655</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-5 mt-lg-0">
                            <Formik values={formikObj}>
                                <Form className="php-email-form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                id="name"
                                                placeholder="Your Name"
                                                onChange={e => {
                                                    setFieldTouched('name')
                                                    handleChange(e)
                                                }}
                                                onBlur={handleBlur}
                                            />
                                            {errors !== '' && touched.name ? <span>{errors.name}</span> : null}
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                placeholder="Your Email"
                                                onChange={e => {
                                                    setFieldTouched('email')
                                                    handleChange(e)
                                                }
                                                    
                                                }
                                                onBlur={handleBlur}
                                            />
                                            {errors !== '' && touched.email ? <span>{errors.email}</span> : null}
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="subject"
                                            id="subject"
                                            placeholder="Subject"
                                            onChange={e => {
                                                setFieldTouched('subject')
                                                handleChange(e)
                                            }}
                                            onBlur={handleBlur}
                                        />
                                        {errors !== '' && touched.subject ? <span>{errors.subject}</span> : null}
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            rows={5}
                                            placeholder="Message"
                                            onChange={e => {
                                                setFieldTouched('message')
                                                handleChange(e)
                                            }}
                                            onBlur={handleBlur}
                                        />
                                        {errors !== '' && touched.message ? <span>{errors.message}</span> : null}
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message" />
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Contact;