import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Tournament from './components/Tournament';
import TournamentModal from './components/TournamentModal';
import {Provider} from 'react-redux';
import store from './store';
import {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from "react-router-dom";



class App extends Component {


  render() {
    return (
        <Provider store={store}>
            <div className="App">
                <AppNavbar/>
                <BrowserRouter>
                    <Route path={'/'} exact render ={ () => (
                        <Container>
                            <Tournament/>
                            <TournamentModal/>
                        </Container>
                    )}
                    />
                </BrowserRouter>
            </div>
        </Provider>
    );
  }
}

export default App;
