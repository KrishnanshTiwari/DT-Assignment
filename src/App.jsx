import React from 'react'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import Body from './components/body/Body'
import Right from './components/right/Right'
import Left from './components/left/Left'
import Corner from './components/corner/Corner'
import './App.css'

function App() {

  return (
    <>
      <Nav/>
      <Left/>
      <Right/>
      <Header/>
      <Body/>
      <Corner/>
    </>
  )
}

export default App
