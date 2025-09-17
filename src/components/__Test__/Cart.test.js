import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import ResMenu from "../ResMenu";
import MockData from "../../Utils/ResMenuMockData.json";
import { MemoryRouter, Route, Routes } from "react-router-dom";

// ✅ Mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    headers: {
      get: () => "application/json",
    },
    json: () => Promise.resolve(MockData),
  })
);

// ✅ Mock useParams to return a resId
jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");
  return {
    ...originalModule,
    useParams: () => ({
      resId: "12345",
    }),
  };
});

test("Should Load Restaurant Menu Component", async () => {
  render(
    <MemoryRouter initialEntries={["/restaurant/12345"]}>
      <Routes>
        <Route path="/restaurant/:resId" element={<ResMenu />} />
      </Routes>
    </MemoryRouter>
  );

  // ✅ Wait for the "Recommended" text to appear
  const AccordionHeader = await screen.findByText(/Recommended/i);
  expect(AccordionHeader).toBeInTheDocument();
});
