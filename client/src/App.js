import React from 'react';
import Home from './pages/home.component';
import Navigation from './components/navigation';
import {Route} from "react-router-dom";
import Auth from "./pages/auth.component";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Route exact path='/' component={Home}/>
      <Route path="/auth" component={Auth}/>
    </div>
  );
}

export default App;
