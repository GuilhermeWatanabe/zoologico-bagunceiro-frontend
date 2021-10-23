import NewAnimal from "../../components/NewAnimal/NewAnimal";
import NewJanitor from "../../components/NewJanitor/NewJanitor";

const Register = ({ page }) => {
    if (page === "animal") {
        return <NewAnimal />;
    }
    if (page === "janitor") {
        return <NewJanitor />;
    }
};

export default Register;
