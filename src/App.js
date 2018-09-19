import React, { Component } from 'react';
import { HomePage } from './pages/home/Home';
import './App.css';

class App extends Component {
    render() {
        return (<div className="content">
            <div className="content-inside">
                <header>
                    <h1>
                        <i className="fa fa-calendar"></i>
                        Tiny Calendar
                    </h1>
                    <img src="./avatar.png" className="avatar rounded-circle" alt="@ilbesculpi avatar"></img>
                </header>
                <div className="container-fluid">
                    <HomePage />
                </div>
            </div>
        </div>);
    }
}

export default App;
