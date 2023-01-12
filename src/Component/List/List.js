import React from 'react';
import { Card, CardTitle, CardText, Button, Row, Col } from "reactstrap"

function List({ listdata }) {
    return (
        <>
            <Row>
                {
                    listdata.map((l, i) => {
                        return (
                            <Col xs lg="3">
                                <Card
                                    body
                                    className="my-2"
                                    style={{
                                        width: '18rem'
                                    }}
                                >
                                    <CardTitle tag="h5">
                                        {l.name}
                                    </CardTitle>
                                    <CardText>
                                        RS. {l.price} <br />
                                        Qty: {l.qty}
                                    </CardText>
                                    <Button className='appointment-btn' >
                                        Order
                                    </Button>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </>

    );
}

export default List;