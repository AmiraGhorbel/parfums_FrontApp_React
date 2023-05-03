import ListArticles from './components/article/listArticles';
import NewArticle from './components/article/addArticles';
import EditArticle from './components/article/editArticles';
import Galerie from './components/article/galerie';
import Accueil from './components/article/acceuil';
import PhotoDetails from './components/article/photoDetail';
import Panier from './components/article/panier';
import Total from './components/article/total';
import Login from './components/article/login';
import Contact from './components/article/contact';
import Confirm from './components/article/confirm';
import Fournisseur from './components/article/fournisseur';
import Apropos from './components/article/apropos';
import Navbarr from './components/article/navbarr';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbarr/>
        <Switch>
          <Route exact path='/add' component={NewArticle} />
          <Route path='/Articleslist' component={ListArticles} />
          <Route path='/edit/:id' component={EditArticle} />
          <Route path="/accueil" component={Accueil}></Route>
          <Route path="/galerie" component={Galerie}></Route>
          <Route path="/PhotoDetails/:id" component={PhotoDetails}></Route>
          <Route path="/panier" component={Panier}></Route>
          <Route path="/total" component={Total}></Route>
          <Route path="/apropos" component={Apropos}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/confirm" component={Confirm}></Route>
          <Route path="/fournisseur" component={Fournisseur}></Route>
          <Route path="/navbarr" component={Navbarr}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;