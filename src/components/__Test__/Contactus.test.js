import React from 'react';
import { render, screen } from "@testing-library/react"
import Contactus from "../Contactus"
import '@testing-library/jest-dom';

//test can be written as it they are one in the same thing

describe("Contact Us Page Test Case", () => {  //describe is for grouping test cases

    test("should load contactus component", () => {
    render(<Contactus/>);//render
    //Querying
    const heading = screen.getAllByRole("heading");
    
    //Asserstion
    expect(heading[0]).toBeInTheDocument()
});

test("should load button inside contactus component", () => {
    render(<Contactus/>);

    const Button = screen.getAllByRole("button")

    expect (Button[0]).toBeInTheDocument()
})

test("should load paceholder inside input inside contactus component", () => {
    render(<Contactus/>);

    const placeholder = screen.getByPlaceholderText("Enter Your Message")
    expect (placeholder).toBeInTheDocument()
})


})



test("should load contactus component", () => {
    render(<Contactus/>);//render
    //Querying
    const heading = screen.getAllByRole("heading");
    
    //Asserstion
    expect(heading[0]).toBeInTheDocument()
});

test("should load button inside contactus component", () => {
    render(<Contactus/>);

    const Button = screen.getAllByRole("button")

    expect (Button[0]).toBeInTheDocument()
})

test("should load paceholder inside input inside contactus component", () => {
    render(<Contactus/>);

    const placeholder = screen.getByPlaceholderText("Enter Your Message")
    expect (placeholder).toBeInTheDocument()
})








//getAllByRole
//getByPlaceholderText
//getByText
//this are HTML Terms to find that perticular thing

// 🔍 What is Querying in Unit Testing (React)?

// Querying in unit testing refers to the process of selecting or accessing elements from the rendered component (DOM) inside your test — so you can assert, interact with, or inspect them.

// In React, when using React Testing Library (RTL), you use query functions to find elements like buttons, headings, inputs, etc.

// ✅ Common Query Methods in React Testing Library

// All query functions are accessed through screen or the return value of render().

// 🔹 getBy... → Throws an error if not found
// screen.getByText("Submit");

// 🔹 queryBy... → Returns null if not found (no error)
// screen.queryByText("Success!");

// 🔹 findBy... → Async, waits for element to appear
// await screen.findByText("Loaded!");

// 🔹 getAllBy... → Returns array of matching elements
// screen.getAllByRole("heading");

// 🧪 Example
// import { render, screen } from "@testing-library/react";
// import '@testing-library/jest-dom';
// import Contactus from "../Contactus";

// test("renders contact form heading", () => {
//   render(<Contactus />);
//   const heading = screen.getByRole("heading", { name: /contact/i });
//   expect(heading).toBeInTheDocument(); // querying + assertion
// });

// 🎯 Why Querying Matters

// It helps simulate real user interactions (by role, label, placeholder, etc.)

// Promotes accessibility by encouraging use of ARIA roles and labels

// Keeps tests readable, realistic, and maintainable

// 📘 Commonly Used Queries
// Query	Usage
// getByRole	Preferred for accessible elements
// getByText	Match visible text
// getByLabelText	For form inputs using <label>
// getByPlaceholderText	For inputs with placeholders
// getByAltText	For images
// queryBy...	Safe check for absence of element
// findBy...	For async DOM changes (e.g. after fetch)
// 🧠 Best Practice

// Use queries that reflect how users find elements on the page.
// This is why getByRole, getByLabelText, and getByText are preferred over class or ID selectors.

