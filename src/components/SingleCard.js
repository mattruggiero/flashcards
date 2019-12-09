import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { pickQuestion } from '../data/Quiz';
import { shuffle } from '../data/Quiz';
import { start } from '../data/Quiz';
//import { numQuestions } from '../data/Quiz';
import { Container } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';

//TODO
//fix card number
//put on git hub 
//deploy on heroku 
//add questions with images
//add midterm questions 

class SingleCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentIndex: 1,
            currentQuestion:start(),
            showAnswer:false,
            firstQuestion:false
        }
    }

    toggleAnswer(){
        this.setState((currentState) => ({
            showAnswer : !currentState.showAnswer
        }))
    }
    getQuestion(){
        this.setState((currentState) => ({
            firstQuestion:true,
            currentQuestion: pickQuestion(this.state.currentIndex),
            showAnswer:false,
            currentIndex: this.state.currentIndex +1 
        }))
        console.log(this.state.currentQuestion);
    }


    render(){
        const cardStyle = {
            width:"25em",
            minHeight:'500px',
            padding:'10px',
            textAlign:'center',
            borderRadius:'15px',
            boxShadow:'10px 10px 10px black'
        }
        const buttonText = this.state.showAnswer ? "Show Question":"Show Answer";
        const cardTitle = this.state.showAnswer ? "ANSWER":"QUESTION";
        const displayed = this.state.showAnswer ? this.state.currentQuestion.A : this.state.currentQuestion.Q;
        return(
            <div className="wrapper">
                <Card style={cardStyle}>
                    <Card.Header>{cardTitle}</Card.Header>
                    <Card.Body>
                        <Card.Title>{displayed}</Card.Title>
                    </Card.Body>
                
                <Container>
                <Row>
                <Col>
                <Button variant="primary" onClick={() => this.toggleAnswer()}>{buttonText}</Button>
                </Col>
                <Col>
                <Button variant="primary" onClick={()=>this.getQuestion()}>New Question </Button>
                </Col>
                <Col>
                <Button variant="secondary" onClick = {shuffle()}>Shuffle Questions</Button>
                </Col>
                </Row>
                </Container>
                </Card>
            </div>
        )
    }
}

export default SingleCard;