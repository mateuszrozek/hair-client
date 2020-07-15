import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class Product extends Component {

    constructor(props) {
        super(props);


        this.state = {

        };
    }


    render() {
        return (
            <Card style={{ margin: 5, padding: 2 }}>
                <Card.Body style={{ margin: 5, padding: 0 }}>
                    <Card.Title>{this.props.product.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle, categories</Card.Subtitle>
                    <Card.Text>
                        {this.props.product.description}
                    </Card.Text>
                    <Card.Footer>Modified on 15.07.20</Card.Footer>
                </Card.Body>
            </Card>
        )
    }
}