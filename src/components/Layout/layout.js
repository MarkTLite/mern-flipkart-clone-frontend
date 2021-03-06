import React from 'react'
import Header from '../Header/index';
import { MenuHeader } from '../MenuHeader/menuHeader';
/**
* @author
* @function Layout
**/

export const Layout = (props) => {
    return (
        <>
            <Header />
            <MenuHeader />
            {props.children}
        </>
    )

}