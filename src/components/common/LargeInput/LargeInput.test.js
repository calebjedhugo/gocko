import { render } from "@testing-library/react";
import LargeInput from "./LargeInput";

describe("<LargeInput>", () => {
    it("Matches previous snapshot", () =>
        expect(render(<LargeInput />).baseElement).toMatchSnapshot());
});
