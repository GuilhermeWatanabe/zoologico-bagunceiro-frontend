import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";
import Login from "./pages/Login/Login";

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Route path="/login">
                <Login />
            </Route>
        </BrowserRouter>
    );
};

export default App;
