import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router'


function Layout(){
    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout

//todo: Layout component is a parent component that is used to render the child components of the application
    //* With the help of layout we can nestify the components

// Outlet is a component that is used to render the child components of the parent component
// In this case, Outlet is used to render the child components of Layout component