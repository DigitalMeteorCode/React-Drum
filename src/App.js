import './App.css';
import { BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';

import Layout from "components/UI/Layout";

import Home from 'components/Home';
import About from 'components/About';

export default function App(){
  return (
    <Router>
      <Layout>
        <Switch>
          <Route component={About} path="/about" />
          <Route component={Home} path="/" />
        </Switch>
      </Layout>
    </Router>
    
  );
}
