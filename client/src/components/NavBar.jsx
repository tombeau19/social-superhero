import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignUpFrom from './Home/SignUpForm'
import styled from 'styled-components'
import img from './images/Logomakr_8DILJg.png'

const TopBar = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.19);
  height: 60px;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 1010px;
  height: 60px;
  align-items: center
`

class NavBar extends Component {
    render() {
        return (
            <TopBar>
                <Header>

                    <Link className='link mainLink' to={'/'}> Social Superhero </Link>
                    <Link className='link mainLink' to={`/users`}> Scoreboard </Link>

                </Header>
            </TopBar>
        )
    }
}

export default NavBar;