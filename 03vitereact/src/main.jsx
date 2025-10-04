import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {jsx as _jsx} from "react/jsx-runtime.js"


function MyApp(){
    return(
        <div>
            <h1>CUSTOM APP</h1>
        </div>
    )
}


// const reactElement = {
//     type: 'a',
//     props:{
//         href: 'https:google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }

const anotherUser = "bolin"


const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank'},
    'click me visit google',
    anotherUser
)

const anotherElement = (
    <a href="http://google.com" targer='_blank'>
        visit google
    </a>
)


createRoot(document.getElementById('root')).render(
  
   reactElement
  
)
