import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CardContainer from "../CardContainer";
import MockData from "../../Utils/RestaurantCard.json"

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



test("Toprated Button", async() => {
  render(
    <BrowserRouter>
      <CardContainer />
    </BrowserRouter>
  );

  await waitFor(() => {
    const RestroCards = screen.getAllByTestId("restaurant-card")
    expect(RestroCards.length).toBe(8)
  })

  const TopRatedBtn = screen.getByRole("button", {name: /Top Rated/i})

  fireEvent.click(TopRatedBtn)

  await waitFor(() => {
    const TopRatedRestaurantCards = screen.getAllByTestId("restaurant-card")
    expect(TopRatedRestaurantCards.length).toBe(1)
    // expect(screen.getByText(/Natural Ice cream/i).toBeInTheDocument())
  })

});
