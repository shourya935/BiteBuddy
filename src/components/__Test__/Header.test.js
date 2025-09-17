import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import '@testing-library/jest-dom'

import { Provider } from "react-redux"
import appStore from "../../Utils/appStore"
import { BrowserRouter } from "react-router-dom"




test("Header component rendered with a login button or not ", () => {
    render( <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        </Provider>
    )//render : we have to render Header inside provider and Browser router because react testing library understand jsx but does not 
    // understand resct-router and retux toolkit
    

    //querying
    const LoginButton = screen.getByRole("button", {name: /login/i})//i is for case insensatavity

    //Asserstion
    expect(LoginButton).toBeInTheDocument()


})

test("Should change login button to logout button on click", () => {

     render( <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        </Provider>
    )//render

    //querying
    const LoginButton = screen.getByRole("button", {name: /login/i})

    fireEvent.click(LoginButton)

    const LogoutButton = screen.getByRole("button", {name: /logout/i})

    expect(LogoutButton).toBeInTheDocument()

})