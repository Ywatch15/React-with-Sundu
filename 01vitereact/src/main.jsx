import React from 'react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}

const anotherEle = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement= React.createElement(
    'a', //tag name
    {href: 'https://google.com', target:'_blank'}, //object with attributes
    'click to Visit Google' //children
)
ReactDOM.createRoot(document.getElementById('root')).render(
    
    <App />
    // <MyApp />
    // anotherEle
    // reactElement // React.createElement example
)
