import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import TechList from ".";
import { TechContext } from "../../providers/TechContext";

describe("Component test: TechList", () => {
    const techListMock = [
        {
            id: 1,
            title: "titleMock1",
            status: "statusMock1",
        },
        {
            id: 2,
            title: "titleMock2",
            status: "statusMock2",
        },
    ];

    test("should render tech list correctly with all cards", () => {
        render(
            <TechContext.Provider
                value={{
                    techList: techListMock,
                }}
            >
                <TechList />
            </TechContext.Provider>
        );

        const techItems = screen.getAllByRole("listitem");
        expect(techItems).toHaveLength(2);

        techItems.forEach((tech, index) => {
            expect(tech).toHaveTextContent(techListMock[index].title);
            expect(tech).toHaveTextContent(techListMock[index].status);
        });
    });
});
