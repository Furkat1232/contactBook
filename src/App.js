import "./App.css";
import Counter from "./components/Counter";
import "bootstrap/dist/css/bootstrap.min.css";
import Appbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<EditContact />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
