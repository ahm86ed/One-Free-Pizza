import './App.css';
import Header from './components/Header/Headre';
import MainMenu from "./components/MainMenu/MainMenu";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import GetYourPizza from "./components/GetYourPizza/GetYourPizza";
import Orders from "./components/Orders/Orders";
import './app.scss'


function App() {
  return (
<>
<Header />
<MainMenu />

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/GetYourPizza" element={<GetYourPizza />} />
  <Route path="/Orders" element={<Orders />} />
</Routes>

</>
  );
}

export default App;
