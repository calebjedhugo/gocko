import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import Box from "@material-ui/core/Box";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const StatsCell = ({ error, children }) => {
    return (
        <TableCell>
            {typeof elem === "string" ? (
                <Typography color={error ? "error" : ""}>{children}</Typography>
            ) : (
                <Box color={error ? "error.main" : ""}>{children}</Box>
            )}
        </TableCell>
    );
};

const StatsTable = ({ displayName, storage, reset, children }) => {
    const dataAvailable = Boolean(storage.length);
    return (
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <Typography variant="h5">{displayName}</Typography>
            </Grid>
            <Grid item>
                {!dataAvailable ? (
                    <Typography>No data availaible</Typography>
                ) : (
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Question</TableCell>
                                    <TableCell>Answer</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {storage.map((elem) => (
                                    <TableRow key={elem.time}>
                                        <StatsCell error={!elem.correct}>
                                            {elem.question}
                                        </StatsCell>
                                        <StatsCell error={!elem.correct}>
                                            {elem.answer}
                                        </StatsCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Grid>
            <Grid item>
                <Grid>{children}</Grid>
                <Button
                    disabled={!dataAvailable}
                    onClick={() => {
                        reset();
                    }}
                >
                    Reset
                </Button>
            </Grid>
        </Grid>
    );
};

export default StatsTable;
