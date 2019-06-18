import React, {Component} from 'react';
import {
    Container,
    ListGroupItem,
    ListGroup,
    Button
} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {getTournaments, deleteTournament} from "../actions/TournamentActions";
import {connect} from  'react-redux';
import PropTypes from 'prop-types';


class Tournament extends Component {


    componentDidMount() {
        this.props.getTournaments();
    }

    onDeleteClick = id => {
        this.props.deleteTournament(id);
    };

    render(){
        console.log(this.props.tournaments);
        const {tournaments} = this.props.tournaments;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className ='tournament-list'>
                        {tournaments.map(({_id, name}) => (
                            <CSSTransition key={_id} timeout={500} classNames = 'fade'>
                                <ListGroupItem>
                                    <Button
                                        className = 'remove-btn'
                                        color = 'danger'
                                        size =  'sm'
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >
                                        &times;
                                    </Button>
                                    {' ' + name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

Tournament.propTypes = {
    getTournaments: PropTypes.func.isRequired,
    tournaments: PropTypes.object.isRequired,
};



const mapStateToProps = (state) => {
    return {
    tournaments: state.tournaments
}};



export default connect(mapStateToProps, {getTournaments, deleteTournament})(Tournament);



