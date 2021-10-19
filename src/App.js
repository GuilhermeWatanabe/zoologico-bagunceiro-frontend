import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";
import Menu from "./components/Menu/Menu";
import Login from "./pages/Login/Login";

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Menu />
            <Route path="/login">
                <Login />
            </Route>
        </BrowserRouter>
    );
};

export default App;
