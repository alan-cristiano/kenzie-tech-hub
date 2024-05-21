import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { TechContext } from "../../../providers/TechContext";
import TechCard from ".";

describe("Comónent test: TechCard", () => {
    const techMock = {
        title: "titleMock",
        status: "statusMock",
    };

    test("should render tech card correctly with all data", () => {
        const editTechMock = vi.fn();
        const deleteTechMock = vi.fn();
        render(
            <TechContext.Provider
                value={{
                    deleteTech: deleteTechMock,
                    setEditingTech: editTechMock,
                }}
            >
                <TechCard tech={techMock} />
            </TechContext.Provider>
        );

        expect(screen.getByTestId("tech-title")).toHaveTextContent(
            techMock.title
        );
        expect(screen.getByTestId("tech-status")).toHaveTextContent(
            techMock.status
        );
    });

    test("should render correctly an edit and delete buttons and fire a click event", () => {
        const editTechMock = vi.fn();
        const deleteTechMock = vi.fn();

        render(
            <TechContext.Provider
                value={{
                    deleteTech: deleteTechMock,
                    setEditingTech: editTechMock,
                }}
            >
                <TechCard tech={techMock} />
            </TechContext.Provider>
        );

        const editTechButton = screen.getByTestId("edit-tech-button");
        expect(editTechButton).toBeInTheDocument();
        fireEvent.click(editTechButton);

        const deleteTechButton = screen.getByTestId("delete-tech-button");
        expect(deleteTechButton).toBeInTheDocument();
    });
});
