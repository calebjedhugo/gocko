import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MathQuestion from "components/MathQuestion";
import CountingQuestion from "components/CountingQuestion";
import Stats from "components/Stats";
import ReadingQuestion from "components/ReadingQuestion";
import Typing from "components/Typing";

import { Provider } from "react-redux";
import store from "redux/store";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "theme";
import Box from "@material-ui/core/Box";
import Navbar from "components/structural/Navbar";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Navbar />
                    <Box px={2}>
                        <Switch>
                            <Route path="/Quin">
                                <MathQuestion />
                            </Route>
                            <Route path="/Counting">
                                <CountingQuestion />
                            </Route>
                            <Route path="/Binjundan">
                                <ReadingQuestion />
                            </Route>
                            <Route path="/typing">
                                <Typing />
                            </Route>
                            <Route path="/">
                                <Stats />
                            </Route>
                        </Switch>
                    </Box>
                </Router>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
