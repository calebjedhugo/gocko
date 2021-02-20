import { mathHistory } from "../storage/localStorage";

const Stats = () => {
    return (
        <div>
            <h2>Answer History</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Question</th>
                        <th>Answer</th>
                    </tr>
                    {mathHistory.data.map((elem) => (
                        <tr style={{ color: elem.correct ? "" : "red" }}>
                            <td>{elem.question}</td>
                            <td>{elem.answer}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Stats;
