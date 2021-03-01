import Button from "@material-ui/core/Button";
import Header from "components/common/Header";

const Stats = ({ storage, reset }) => {
    return (
        <div>
            <Header>Answer History</Header>
            <table>
                <tbody>
                    <tr>
                        <th>Question</th>
                        <th>Answer</th>
                    </tr>
                    {storage.math.map((elem) => (
                        <tr
                            key={elem.time}
                            style={{ color: elem.correct ? "" : "red" }}
                        >
                            <td>{elem.question}</td>
                            <td>{elem.answer}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={3}>
                            <Button
                                onClick={() => {
                                    reset.math();
                                }}
                            >
                                Reset
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Stats;
