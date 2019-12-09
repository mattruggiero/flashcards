import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';




class Header extends Component {
    render(){
        return(
            <Jumbotron fluid>
                <h1>
                    Flash Cards
                    
                </h1>
            </Jumbotron>
        )
    }
}

export default Header;