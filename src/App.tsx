import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const onclick = async () => {
    const [tabs] = await chrome.tabs.query({ active: true});
    chrome.scripting.executeScript({
      target: { tabId: tabs.id! },
      func: () => {
        alert('Hello from your Chrome extension!');
      }
    })
  }

  return (
    <>
        <button onClick={() => onclick()}>
          Click me
        </button>
    </>
  )
}

export default App
