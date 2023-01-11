import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Form, FormGroup, Label, Input, Button, FormText, Row, Col } from 'reactstrap';
import Login from './Login';
function Signup(props) {
    const [type, settype] = useState('signup');
    const [reset, setReset] = useState(false);
    return (
        <div>
            <Container>
                <div className='Signup_form'>
                    {
                        reset ? <h2>Reset Password</h2> :

                            type === "signup" ? <h2>Signup</h2> : <h2>Loginup</h2>

                    }
                    <Form>
                        <Row>


                            {
                                type === "signup" ?
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
                                    :
                                    null
                            }
                            
                            {
                                reset ?
                                    <Col>
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
                                    </Col> :
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
                            }

                            {
                                reset ? null :
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
                            }
                            {
                                type === "signup" ?
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
                                    : null
                            }
                        </Row>
                        {
                            type === "signup" ?
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
                                : null
                        }

                        {
                            type === "signup" ?
                                <>   <FormGroup tag="fieldset">
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

                                </FormGroup></> :
                                null
                        }
                        {
                            type === "signup" ?
                                <FormGroup check>
                                    <Input type="checkbox" />
                                    {' '}
                                    <Label check>
                                        You Agree to our terms and Policy.
                                    </Label>
                                </FormGroup>
                                : null
                        }
                        {
                            reset ? <Button className='signup_button appointment-btn ' >submit</Button> :


                                type === "signup" ?
                                    <Button className='signup_button appointment-btn ' >Singnup</Button> :
                                    <Button className='signup_button appointment-btn ' >Login</Button>



                        }


                    </Form>
                    {/* {
                        reset : 
                    } */}
                    {
                        type === "signup" ?
                            <div className="create_account_div mt-30">
                                <p>You have account? <a onClick={() => { settype('login') }}>Login Account</a></p>
                            </div>
                            :
                            <div className="create_account_div mt-30">
                                {
                                    reset ? <><p>You have account? <a onClick={() => { settype('Login'); setReset(false) }}>Login Account</a></p></> :
                                        <>
                                            <p>You have account? <a onClick={() => { settype('signup'); setReset(false) }}>Create an account</a></p>
                                            <a onClick={() => setReset(true)} >Forgot password?</a>
                                        </>
                                }

                            </div>
                    }

                </div>
            </Container>
        </div>
    );
}

export default Signup;