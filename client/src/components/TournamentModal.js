import React, {Component} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Input} from 'reactstrap';
import {connect} from 'react-redux';
import {addTournament} from '../actions/TournamentActions.js';
import PropTypes from "prop-types";


class TournamentModal extends Component{

    state = {
        modal: false,
        name: '',
        teams: [{
            name : '',
            goalsScored: 0,
            goalsConceded: 0,
            points: 0,
            out: false

        }],
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            name: '',
            teams: [{
                name : '',
                goalsScored: 0,
                goalsConceded: 0,
                points: 0,
                out: false
            }],
        });
    };

    handleTeamNameChange = id => e => {
        const newTeams = this.state.teams.map((team, tid) => {
            if (id !== tid) return team ;
            return { ...team,
                name : e.target.value,
                goalsScored: 0,
                goalsConceded: 0,
                points: 0,
                out: false
            };
        });
        this.setState({ teams: newTeams});
        console.log(this.state)
    };


    handleRemoveTeam = id => () => {
        this.setState({
            teams: this.state.teams.filter((s, tid) => id !== tid)
        });
    };


    handleAddTeam = () => {
        this.setState({
            teams: this.state.teams.concat([{ name: "" }])
        });
    };



    onSubmit = e => {
        e.preventDefault();
        console.log(this.props.tournaments);

        const newTournament = {
            name: this.state.name,
            teams: [...this.state.teams],
            matches: []
        };
        // Add tournament via addTournament action
        this.props.addTournament(newTournament);
        // Close modal
        this.toggle();
    };

    render(){
        return (
            <div>
                <Button
                    color='dark'
                    style = {{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >
                    Create new tournament
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Create Tournament </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Input
                                    type="text"
                                    placeholder="Enter tournament name"
                                    value={this.state.name}
                                    onChange={e => this.setState({name: e.target.value})}
                                />
                                <h4>Teams</h4>
                                {this.state.teams.map((team, id) => (
                                    <div className="team" key={this.state.teams.name}>
                                        <Input
                                            type="text"
                                            placeholder={`Team #${id + 1} name`}
                                            value={team.name}
                                            onChange={this.handleTeamNameChange(id)}
                                        />
                                        <Button
                                            type="button"
                                            onClick={this.handleRemoveTeam(id)}
                                            className="small"
                                        >
                                            -
                                        </Button>
                                    </div>
                                ))}
                                <Button
                                    type="button"
                                    onClick={this.handleAddTeam}
                                    className="small"
                                >
                                    Add team
                                </Button>
                                <Button color='dark' style={{marginTop: '2rem'}} block> Create new tournament </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}


//This function makes it possible to use the redux-state as props for this component.

const mapStateToProps = (state) => ({
    tournaments : state.tournaments
});



TournamentModal.propTypes = {
    addTournament: PropTypes.func.isRequired,
    tournaments: PropTypes.object.isRequired,
};





export default connect(mapStateToProps, {addTournament})(TournamentModal);

