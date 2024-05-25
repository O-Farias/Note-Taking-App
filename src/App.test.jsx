import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { ToastContainer } from "react-toastify";

test("displays success notification when a note is added", () => {
  render(
    <>
      <App />
      <ToastContainer />
    </>
  );

  const input = screen.getByPlaceholderText("Enter your note");
  const addButton = screen.getByText("Add Note");

  fireEvent.change(input, { target: { value: "Test Note" } });
  fireEvent.click(addButton);

  expect(screen.getByText("Note added successfully!")).toBeInTheDocument();
});

test("displays error notification when a note is deleted", () => {
  render(
    <>
      <App />
      <ToastContainer />
    </>
  );

  const input = screen.getByPlaceholderText("Enter your note");
  const addButton = screen.getByText("Add Note");

  fireEvent.change(input, { target: { value: "Test Note" } });
  fireEvent.click(addButton);

  const deleteButton = screen.getByLabelText("Delete note");
  fireEvent.click(deleteButton);

  expect(screen.getByText("Note deleted successfully!")).toBeInTheDocument();
});

test("displays info notification when a note is edited", () => {
  render(
    <>
      <App />
      <ToastContainer />
    </>
  );

  const input = screen.getByPlaceholderText("Enter your note");
  const addButton = screen.getByText("Add Note");

  fireEvent.change(input, { target: { value: "Test Note" } });
  fireEvent.click(addButton);

  const editButton = screen.getByLabelText("Edit note");
  fireEvent.click(editButton);

  window.prompt = jest.fn().mockImplementation(() => "Edited Test Note");

  fireEvent.change(input, { target: { value: "Edited Test Note" } });
  fireEvent.click(addButton);

  expect(screen.getByText("Note edited successfully!")).toBeInTheDocument();
});

test("displays success notification when a note is archived", () => {
  render(
    <>
      <App />
      <ToastContainer />
    </>
  );

  const input = screen.getByPlaceholderText("Enter your note");
  const addButton = screen.getByText("Add Note");

  fireEvent.change(input, { target: { value: "Test Note" } });
  fireEvent.click(addButton);

  const archiveButton = screen.getByLabelText("Archive note");
  fireEvent.click(archiveButton);

  expect(screen.getByText("Note archived successfully!")).toBeInTheDocument();
});

test("displays success notification when a note is unarchived", () => {
  render(
    <>
      <App />
      <ToastContainer />
    </>
  );

  const input = screen.getByPlaceholderText("Enter your note");
  const addButton = screen.getByText("Add Note");

  fireEvent.change(input, { target: { value: "Test Note" } });
  fireEvent.click(addButton);

  const archiveButton = screen.getByLabelText("Archive note");
  fireEvent.click(archiveButton);

  const unarchiveButton = screen.getByLabelText("Unarchive note");
  fireEvent.click(unarchiveButton);

  expect(screen.getByText("Note unarchived successfully!")).toBeInTheDocument();
});
