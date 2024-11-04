import PageTitle from "./Title";
import CarteUser from "./Carte-User";
import Footer from "./Footer";
import { User } from "../type";

const App = () => {
  const title = "Welcome to My App";

  const user : User[] = [
    {
     name : "Alice ",
     age : 25
    },
    {
      name : "Bob ",
      age : 30
    },
    {
      name : "Charlie ",
      age : 35
    }
  ]
  const footerText = "© 2023 My App";

  return (
    <div>
      <PageTitle name={title} />
      <CarteUser user={user} />
      <Footer text={footerText} />
    </div>
  );
};

export default App;
