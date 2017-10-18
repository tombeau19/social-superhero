import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignUpFrom from './Home/SignUpForm'
import styled from 'styled-components'
import img from './images/Logomakr_8DILJg.png'

const TopBar = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 1010px;
  height: 77px;
  align-items: center
`


class NavBar extends Component {
    render() {
        return (
            <TopBar>
                <Header>
                    <div><h1>Social Superhero</h1></div>

                   
                        <Link className='scoreboardLink' to={`/users`}> Scoreboard </Link>
     
                </Header>
            </TopBar>
        )
    }
}

export default NavBar;