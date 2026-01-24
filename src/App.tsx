import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import TodoPage from './todoPage'

function App() {
  return (
    <>
      <Header />
      <TodoPage />
    </>
  )
}

export default App
