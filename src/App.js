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
import { Redirect } from "react-router";
import { useState } from "react";

const App = () => {
  const [userId, setUserId] = useState(0);
  const [userType, setUserType] = useState("");
  const [redirect, setRedirect] = useState(false);

  let renderMenu;
  if (userId) {
    renderMenu = <Menu userType={userType} />;
  }

  if (redirect === true) {
    return <Redirect to="/" />;
  }

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
      {renderMenu}
      <BaseContainer>
        <Route exact path="/">
          <Login setUserType={setUserType} setUserId={setUserId} />
        </Route>
        <Route path="/register/animal">
          <AnimalForm userId={userId} />
        </Route>
        <Route path="/edit/animal">
          <AnimalForm userId={userId} />
        </Route>
        <Route path="/voting">
          <Voting />
        </Route>
        <Route path="/list">
          <AnimalList />
        </Route>
        <Route path="/register/janitor">
          <NewJanitor userId={userId} />
        </Route>
      </BaseContainer>
    </BrowserRouter>
  );
};

export default App;
