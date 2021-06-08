import './App.css';
import './style.css'
import { Switch, Route } from 'react-router-dom'
import Product from './Pages/Products'
import Navbar from './Component/Navbar/Navbar'
import Home from './Pages/Home'
import FAQ from './Pages/FAQ'
import Policy from './Component/Policy'
import Contact from './Pages/Contact'
import Service from './Pages/Service'


function App() {
  return (
    <div className="App"> 
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/faq' component={FAQ} />
          <Route exact path='/products' component={Product} />
          <Route exact path='/policy' component={Policy} />
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/service' component={Service}/>
        </Switch>
      </div>
  );
}

export default App;
