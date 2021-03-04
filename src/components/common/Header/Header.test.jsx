import { render } from "@testing-library/react";
import Header from "./Header";

describe("<Header>", () => {
    it("Matches previous snapshot", () =>
        expect(
            render(<Header>Awesome Header</Header>).baseElement
        ).toMatchSnapshot());
});
