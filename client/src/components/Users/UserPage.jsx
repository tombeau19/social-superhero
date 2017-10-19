import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const BigTitle = styled.h1`
    font-size: 50px;
`

const UserBoard = styled.div`
    dispaly: flex;
    align-content: flex-start;
    width: 40%;
    padding: 0 15%;
`

const Earn = styled.div`
    font-size: 36px;
`

const List = styled.div`
    display: flex;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.19);
    justify-content: space-between;
    padding: 5% 5%;
`


class UserPage extends Component {

    state = {
        user: {
            name: '',
            superHeroName: '',
            password: '',
            settings: [],
            score: 0
        }
    }

    async componentWillMount() {
        const { userId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}`)
        this.setState({ user: res.data })
    }

    render() {
        return (
            <UserContainer>
                <BigTitle>{this.state.user.superHeroName} - Points: {this.state.user.score}</BigTitle>
                <Earn>Earn Points At...</Earn>
                <UserBoard>
                    {this.state.user.settings.map((setting) => {
                        return (<List><Link className='link mainLink' key={setting._id} to={`/users/${this.state.user._id}/settings/${setting._id}`}>{setting.location}</Link></List>)
                    })}
                </UserBoard>
            </UserContainer>
        )
    }
}

export default UserPage;






