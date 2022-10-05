import { render, screen, renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserInfo from "../components/features/myCollection/UserInfo";

test("likes,saves,comments, profile 확인", () => {
  render(<UserInfo />);
  expect(screen.getByText("comments")).toBeVisible();
  expect(screen.getByText("likes")).toBeVisible();
  expect(screen.getByText("saves")).toBeVisible();
  expect(screen.getByAltText("profile_img")).toBeVisible();
});

test("toast modal 확인", () => {
  render(<UserInfo />);
  expect(screen.getByText("comments")).toBeVisible();
});

const mockFn = jest.fn();
mockFn.mockReturnValue("3");
console.log(mockFn());
mockFn.mockImplementation((name) => `I am ${name}!`);
console.log(mockFn("Dale"));
