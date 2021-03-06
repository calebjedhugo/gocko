import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MathQuestion from "components/MathQuestion";
import Stats from "components/Stats";
import ReadingQuestion from "components/ReadingQuestion";

import { Provider } from "react-redux";
import store from "redux/store";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Quinged (Home)</Link>
                            </li>
                            <li>
                                <Link to="/Binjundan">Binjundan (Reading)</Link>
                            </li>
                            <li>
                                <Link to="/Quin">Quin (Math questions)</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/Quin">
                            <MathQuestion />
                        </Route>
                        <Route path="/Binjundan">
                            <ReadingQuestion />
                        </Route>
                        <Route path="/">
                            <Stats />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
