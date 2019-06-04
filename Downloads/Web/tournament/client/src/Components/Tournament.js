import React, {Component} from 'react';
import {
    Container,
    ListGroupItem,
    ListGroup,
    Button
    } from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';



class Tournament extends Component {
    state = {
        tournaments: [
            {id: uuid(), name: 'tour1'},
            {id: uuid(), name: 'tour2'},
            {id: uuid(), name: 'tour3'}
        ]
    }

    render(){
        const {tournaments} = this.state;
        return (
            <Container>
                <Button
                    color='dark'
                    style={{marginBottom: '2rem'}}
                    onClick={() => {
                        const name = prompt ('Enter Name');
                        if (name) {
                            this.setState(state => ({
                                tournaments: [...state.tournaments, {id: uuid(), name: name}]
                            }));
                        }
                    }}
                >
                    Create tournament
                </Button>

                <ListGroup>
                    <TransitionGroup className ='tournament-list'>
                        {tournaments.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames = 'fade'>
                                <ListGroupItem>
                                    <Button
                                        className = 'remove-btn'
                                        color = 'danger'
                                        size =  'sm'
                                        onClick={() => {
                                            this.setState(state => ({
                                            tournaments: state.tournaments.filter(tournament => tournament.id !== id)
                                            }) )
                                        }}>
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default Tournament;

