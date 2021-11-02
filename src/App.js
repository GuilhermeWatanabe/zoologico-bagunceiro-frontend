import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";
import Menu from "./components/Menu/Menu";
import Login from "./pages/Login/Login";
import { BaseContainer } from "./components/UI";
import AnimalList from "./pages/AnimalList/AnimalList";
import Voting from "./pages/Voting/Voting";
import { ToastContainer } from "react-toastify";
import AnimalForm from "./components/AnimalForm/AnimalForm";
import NewJanitor from "./components/NewJanitor/NewJanitor";
import { useCookies } from "react-cookie";

const App = () => {
  const [cookies, setCookies] = useCookies();

  let renderMenu;
  if (cookies.id) {
    renderMenu = <Menu userType={cookies.userType} />;
  }

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
      {renderMenu}
      <BaseContainer>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register/animal">
          <AnimalForm />
        </Route>
        <Route path="/edit/animal">
          <AnimalForm />
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
