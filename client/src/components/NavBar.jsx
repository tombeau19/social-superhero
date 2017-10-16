import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div>
                <div><h1>Social Superhero</h1></div>
                <Link to={`/users`}> Scoreboard </Link>

            </div>
        );
    }
}

export default NavBar;