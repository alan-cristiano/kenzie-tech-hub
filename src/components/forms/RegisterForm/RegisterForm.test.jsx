import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import RegisterForm from ".";

describe("Component test: RegisterForm", () => {
    test("should render register form correctly", () => {
        render(<RegisterForm />);
        expect(screen.getByTestId("user-name")).toBeInTheDocument();
        expect(screen.getByTestId("user-register-email")).toBeInTheDocument();
        expect(
            screen.getByTestId("user-register-password")
        ).toBeInTheDocument();
        expect(
            screen.getByTestId("user-register-confirm-password")
        ).toBeInTheDocument();
        expect(screen.getByTestId("user-bio")).toBeInTheDocument();
        expect(screen.getByTestId("user-contact")).toBeInTheDocument();
        expect(screen.getByTestId("user-course-module")).toBeInTheDocument();
        expect(screen.getByTestId("user-button")).toBeInTheDocument();
    });
});
