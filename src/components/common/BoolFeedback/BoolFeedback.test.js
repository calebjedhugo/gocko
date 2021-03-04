import { render } from "@testing-library/react";
import BoolFeedback from "./BoolFeedback";

const defaultProps = { visible: true, value: true };

describe("<Header>", () => {
    it("Matches previous snapshot when visible and answer is correct", () =>
        expect(
            render(<BoolFeedback {...defaultProps} />).baseElement
        ).toMatchSnapshot());
    it("Matches previous snapshot when visible and answer is wrong", () =>
        expect(
            render(<BoolFeedback {...defaultProps} value={false} />).baseElement
        ).toMatchSnapshot());
    it("Matches previous snapshot when not visible", () =>
        expect(
            render(<BoolFeedback {...defaultProps} visible={false} />)
                .baseElement
        ).toMatchSnapshot());
});
