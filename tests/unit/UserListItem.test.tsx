// UserListItem.test.tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import UserListItem from "./../../src/pages/UserList/UserListItem";

// Mock user data
const mockUser = {
  id: "123",
  name: "John Doe",
  email: "john.doe@example.com",
};

// Mock onDelete function
const mockOnDelete = vi.fn();

// Mock window.matchMedia
// https://stackoverflow.com/a/41619307
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe("UserListItem", () => {
  it("renders user information and delete button", () => {
    render(<UserListItem item={mockUser} index={0} onDelete={mockOnDelete} />);

    // Check avatar
    const avatar = screen.getByAltText(/Avatar/i);
    expect(avatar).toBeInTheDocument();

    // Check name and email
    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    // expect(screen.getByText(mockUser.email)).toBeInTheDocument();

    // Check delete button
    const deleteButton = screen.getByRole("button");
    expect(deleteButton).toBeInTheDocument();
  });

  it("calls onDelete function on button click", () => {
    render(<UserListItem item={mockUser} index={0} onDelete={mockOnDelete} />);

    const deleteButton = screen.getByRole("button");
    fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledWith(mockUser.id);
  });
});
