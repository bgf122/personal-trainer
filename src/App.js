import './App.css';
import CustomerList from './components/CustomerList';
import AppBarComponent from './components/AppBarComponent';
import TrainingList from './components/TrainingList';
import{ BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <AppBarComponent/>
        <Switch>
          <Route exact path="/">
            <CustomerList/>
          </Route>
          <Route path="/traininglist">
            <TrainingList/>
          </Route>
        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
