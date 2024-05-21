import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import LoginForm from ".";

describe("Component test: LoginForm", () => {
    test("should render login form correctly", () => {
        render(<LoginForm />);
        expect(screen.getByTestId("user-email")).toBeInTheDocument();
        expect(screen.getByTestId("user-password")).toBeInTheDocument();
        expect(screen.getByTestId("user-button")).toBeInTheDocument();
    });
});
