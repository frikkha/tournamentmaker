import React , { Component } from 'react';
import AppNavbar from './Components/AppNavbar.js';
import Tournament from './Components/Tournament.js';

import {Provider} from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className="App">
                <AppNavbar/>
                <Tournament/>
            </div>
        </Provider>
    );
  }
}

export default App;
