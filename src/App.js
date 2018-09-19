import React, { Component } from 'react';
import { HomePage } from './pages/home/Home';
import './App.css';

class App extends Component {
    render() {
        return (<div className="container-fluid">
            <HomePage />
        </div>);
    }
}

export default App;
