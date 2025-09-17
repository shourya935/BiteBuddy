import React from "react"
import '@testing-library/jest-dom';
import CardContainer from "../CardContainer";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MockData from "../../Utils/RestaurantCard.json"
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MockData ),
    })
  );
});

afterEach(() => {
  jest.resetAllMocks(); // clean up fetch mocks after each test
});


test("renders restaurant cards after searching", async () => {
  render(
    <BrowserRouter>
      <CardContainer />
    </BrowserRouter>
  );

  // Wait for the mock data to load
  await waitFor(() => {
    const cards = screen.getAllByTestId("restaurant-card");
    expect(cards.length).toBe(8); // total restrocards before search showing in ui
  });

  const input = screen.getByPlaceholderText("Search restaurants...");
  const searchButton = screen.getByRole("button", { name: /search/i });

  fireEvent.change(input, { target: { value: "burger" } });//input in search input
  fireEvent.click(searchButton);

  await waitFor(() => {
    const filteredCards = screen.getAllByTestId("restaurant-card");
    expect(filteredCards.length).toBe(3); // 3 cards is showing on search burger 
    // expect(screen.getByText(/Burger Farm/i)).toBeInTheDocument();
    // expect(screen.getByText(/Burger King/i)).toBeInTheDocument();
    // expect(screen.getByText(/KFC/i)).toBeInTheDocument();
  });
});
