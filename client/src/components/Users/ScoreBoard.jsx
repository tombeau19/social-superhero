import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ScoreboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const BigTitle = styled.h1`
    font-size: 50px;
`

const LeaderBoard = styled.div`
    dispaly: flex;
    align-content: flex-start;
    width: 40%;
    padding: 0 15%;
`

const Score = styled.span`
    font-size: 36px;
`

const List = styled.div`
    display: flex;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.19);
    justify-content: space-between;
    padding: 5% 5%;
`


class ScoreBoard extends Component {

    state = {
        users: []
    }

    getAllUsers = async () => {
        try {
            const res = await axios.get('/api/users')
            this.setState({ users: res.data })
        } catch (err) {
            console.log(err)
        }
    }

    componentWillMount() {
        this.getAllUsers()
    }

    render() {
        return (
            <ScoreboardContainer>
                <BigTitle>Superhero Scoreboard</BigTitle>
                <LeaderBoard>

                    {this.state.users.map((user) => {
                        return (<List><Link className='link mainLink' key={user._id} to={`/users/${user._id}`}>{user.superHeroName}</Link><Score> {user.score} points</Score></List>)
                    })}
      
                </LeaderBoard>
            </ScoreboardContainer>
        )
    }
}

export default ScoreBoard