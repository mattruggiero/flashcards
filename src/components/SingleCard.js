import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { pickQuestion } from '../data/Quiz';
import { start } from '../data/Quiz';
import { Container, Col, Row } from 'react-bootstrap';

//TODO
//add questions with images

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
    }


    render(){
        const cardStyle = {
            width:"100%",
            minHeight:'500px',
            padding:'10px',
            textAlign:'center',
            borderRadius:'15px',
            boxShadow:'10px 10px 10px black'
        }
        const questionOrAnswer = this.state.showAnswer ? "Question":"Answer";
        const cardTitle = this.state.showAnswer ? "ANSWER":"QUESTION";
        const displayed = this.state.showAnswer ? this.state.currentQuestion.A : this.state.currentQuestion.Q;
        return(
            <div className="wrapper">
                <Container>
                <Row>
                <Card style={cardStyle}>
                    <Card.Header>{cardTitle}</Card.Header>
                    <Card.Body>
                        <Card.Title>{displayed}</Card.Title>
                    </Card.Body>
                
                <Container>
                <Row>
                <Col>
                <Button size='sm' variant="primary" onClick={() => this.toggleAnswer()}>{questionOrAnswer}</Button>
                </Col>
                <Col>
                
                </Col>
                <Col>
                <Button size='sm'  variant="primary" onClick={()=>this.getQuestion()}>Next</Button>
                </Col>
                </Row>
                </Container>
                </Card>
                </Row>
                </Container>
            </div>
        )
    }
}

export default SingleCard;