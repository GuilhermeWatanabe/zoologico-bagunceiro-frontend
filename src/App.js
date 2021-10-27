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
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(0);

  let renderMenu;
  if(user) {
    renderMenu = <Menu />;
  }

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
      {renderMenu}
      <BaseContainer>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register/animal">
          <NewAnimal />
        </Route>
        <Route path="/edit/animal">
          <NewAnimal userId={user} />
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
