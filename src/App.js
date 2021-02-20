import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MathQuestion from "./MathQuestion";
import Stats from "./Stats";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Quinged (Home)</Link>
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
                    <Route path="/">
                        <Stats />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
