import Button from "@material-ui/core/Button";
import Header from "components/common/Header";
import Input from "@material-ui/core/Input";

const Stats = ({ storage, reset, setMathMaxAnswer, mathMaxAnswer }) => {
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
                            <Input
                                value={mathMaxAnswer}
                                onChange={setMathMaxAnswer}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Stats;
