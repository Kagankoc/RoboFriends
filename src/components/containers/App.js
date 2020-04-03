import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../SearchBox.js';
import './App.css';
import Scrool from '../Scroll'


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    onSearchChange = (event) => {

        this.setState({ searchField: event.target.value })

    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {

            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1 className='tc'>Loading</h1>
        }
        else {
            return (

                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scrool>
                        <CardList robots={filteredRobots} />
                    </Scrool>
                </div>
            );
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }
}


export default App;