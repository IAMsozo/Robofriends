import React from 'react';
import SearchBox from '../Component/SearchBox';
import CardList from '../Component/CardList';
import Scroll from '../Component/Scroll.js'

class App extends React.Component {
    constructor () {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => {
            return this.setState({searchField:event.target.value});
        }

    render() {
            const {searchField, robots} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        if(!robots.length){
            return <h1>LOADING...</h1>
        }

        else{
           return(
            <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <Scroll>
                <CardList robots = {filteredRobots} />
            </Scroll>
            </div>
            );
        }

    }

}

export default App;
