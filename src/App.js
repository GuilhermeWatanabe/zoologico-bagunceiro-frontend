import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";
import Menu from "./components/Menu/Menu";
import Login from "./pages/Login/Login";
import { BaseContainer } from "./components/UI";
import AnimalList from "./pages/AnimalList/AnimalList";
import Voting from "./pages/Voting/Voting";
import { ToastContainer } from "react-toastify";
import NewAnimal from "./components/NewAnimal/NewAnimal";
import NewJanitor from "./components/NewJanitor/NewJanitor";

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
          <NewAnimal />
        </Route>
        <Route path="/voting">
          <Voting />
        </Route>
        <Route path="/list">
          <AnimalList />
        </Route>
        <Route path="/register/janitor">
          <NewJanitor />
        </Route>
      </BaseContainer>
    </BrowserRouter>
  );
};

export default App;
