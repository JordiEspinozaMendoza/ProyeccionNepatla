import logo from "./logo.svg";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";

import NavigationBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomeScreen from './views/HomeScreen'
import ListSpecies from './views/ListSpecies'
import EditSpecieScreen from './views/FormSpecies'
import SpecieScreen from './views/SpecieScreen'
import Blog from './views/Blog'

import MapScreen from './views/MapScreen'
function App() {
  return (
    <Router>
      <NavigationBar />
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/especies" component={ListSpecies} exact></Route>
        <Route path="/blog" component={Blog} exact></Route>
        <Route path="/maps" component={MapScreen} exact></Route>
        <Route path="/species/edit/:id/" component={EditSpecieScreen} exact></Route>
        <Route path="/species/:id/" component={SpecieScreen} exact></Route>

      <Footer />
    </Router>
  );
}

export default App;
