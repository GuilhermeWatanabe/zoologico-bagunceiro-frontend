import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";
import Menu from "./components/Menu/Menu";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { BaseContainer } from "./components/UI";
import AnimalList from "./pages/AnimalList/AnimalList";
import Voting from "./pages/Voting/Voting";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
      <Menu />
      <BaseContainer>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register/animal">
          <Register page="animal" />
        </Route>
        <Route path="/voting">
          <Voting />
        </Route>
        <Route path="/list">
          <AnimalList />
        </Route>
        <Route path="/register/janitor">
          <Register page="janitor" />
        </Route>
      </BaseContainer>
    </BrowserRouter>
  );
};

export default App;
