import React from 'react';
import { useState } from 'react';
import MainNavBar from '../navbar/MainNavBar';
import StyledHome from "./StyledHome.styles"
import LoginBtn from './buttons/LoginBtn';
import LogoutBtn from './buttons/LogoutBtn';

const Home = () => {
    const [isSignIn, setIsSignIn] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const handleLogIn = () => {
        setIsLoggedIn(true)
    }
    const handleLogOut = () => {
        setIsLoggedIn(false)
    }
    let button ;
    if (isLoggedIn) {
        button = <LogoutBtn onClick={handleLogOut} />
    } else {
        button = <LoginBtn onClick={handleLogIn} />
    }

  return (
    <StyledHome>
        <MainNavBar isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
       {isLoggedIn && button}
    </StyledHome>
  )
}

export default Home