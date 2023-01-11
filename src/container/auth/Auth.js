import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Form, FormGroup, Label, Input, Button, FormText, Row, Col } from 'reactstrap';
import Login from './Login';

function Auth(props) {
    const [type, setType] = useState('signup');
    const [reset, setReset] = useState(false);

    return (
        <div>
            <Container>
                <div className='Signup_form'>
                    {
                        reset ? <h2>Reset Password</h2>
                            :
                                type === 'signup' ? <h2>Signup</h2> : <h2>Login</h2>
                    }
                    <Form>
                        <Row>
                            {
                                type === 'signup' ?
                                    <Col xs lg="6">
                                        <FormGroup>
                                            <Label for="exampleEmail">
                                                User Name
                                            </Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="Enter Your name"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    : null
                            }

                            <Col xs lg="6">
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs lg="6">
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Password
                                    </Label>
                                    <Input
                                        id="examplePassword"
                                        name="password"
                                        placeholder="Password "
                                        type="password"
                                    />
                                </FormGroup>
                            </Col>
                            {
                                type === 'signup' ?
                                    <Col xs lg="6">
                                        <FormGroup>
                                            <Label for="exampleSelect">
                                                Select Your Country
                                            </Label>
                                            <Input
                                                id="exampleSelect"
                                                name="select"
                                                type="select"
                                            >
                                                <option>
                                                    India
                                                </option>
                                                <option>
                                                    chaina
                                                </option>
                                                <option>
                                                    Pakistan
                                                </option>
                                                <option>
                                                    Nepal
                                                </option>

                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    :
                                    null
                            }

                        </Row>
                        {
                            type === 'signup' ?
                                <>
                                    <FormGroup>
                                        <Label for="exampleText">
                                            Message
                                        </Label>
                                        <Input
                                            id="exampleText"
                                            name="text"
                                            type="textarea"
                                        />
                                    </FormGroup>

                                    <FormGroup tag="fieldset">
                                        <legend>
                                            Select Gender
                                        </legend>
                                        <FormGroup check>
                                            <Input
                                                name="radio1"
                                                type="radio"
                                            />
                                            {' '}
                                            <Label check>
                                                Male
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Input
                                                name="radio1"
                                                type="radio"
                                            />
                                            {' '}
                                            <Label check>
                                                Female
                                            </Label>
                                        </FormGroup>

                                    </FormGroup>
                                </>
                                : null
                        }

                        <FormGroup check>
                            <Input type="checkbox" />
                            {' '}
                            <Label check>
                                You Agree to our terms and Policy.
                            </Label>
                        </FormGroup>
                        <Button className='signup_button appointment-btn ' >
                            Submit
                        </Button>
                    </Form>
                    {
                        type === 'signup' ?
                            <div className="create_account_div mt-30">
                                <p>You have account? <a onClick={() => {setType('login'); setReset(false)}}>Login Account</a></p>
                            </div>
                            :
                            <div className="create_account_div mt-30">
                                <p>You have not an account? <a onClick={() => {setType('signup'); setReset(false)}}>Create an account</a></p>
                                <a onClick={() => setReset(true)} >Forgot password?</a>
                            </div>
                    }

                </div>
            </Container>
        </div>
    );
}

export default Auth;