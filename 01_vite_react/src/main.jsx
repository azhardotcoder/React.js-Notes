import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // Importing the function
import Azhar from './Azhar.jsx' // importing custom function



ReactDOM.createRoot(document.getElementById('root')).render(
    // Rendering the function
    <>
    <App /> 
    <Azhar />
    
    </>
)



// Custom element insertion

// easy way to add element
const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google site</a>
)

//Custom way to add
const customReactElement = React.createElement(
    "a",
    {href: "https://google.com", target: "_blank"},
    "click here to visit again ",
    <br />,
    anotherElement
)


//rending elements
ReactDOM.createRoot(document.getElementById("root")).render(
    customReactElement
)