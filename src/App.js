import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";
import Menu from "./components/Menu/Menu";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { BaseContainer } from "./components/UI";
import AnimalList from "./pages/AnimalList/AnimalList";

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Menu />
            <BaseContainer>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/list">
                    <AnimalList />
                </Route>
            </BaseContainer>
        </BrowserRouter>
    );
};

export default App;
